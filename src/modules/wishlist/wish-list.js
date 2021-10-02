import React, { useState, useCallback, useEffect, Fragment, } from 'react';
import { useApiGet } from '../../shared/hooks/use-api-get';
import { GhostButton } from '../../shared/modules/button';
import { ErrorMessage } from '../../shared/modules/error-message';
import { GridContainer, Row, } from '../../shared/modules/grid';
import { LoadingIndicator } from '../../shared/modules/loading-indicator';
import WishItem from './wish-item';
import WishSortPanel from './wish-sort-panel';


const WishList = () => {
    const { data, setData, fetching, } = useApiGet('/whishlist', {}, []);
    const [error, setError] = useState(null);

    console.log('result', data);


    const clearError = useCallback(() => {
        setError(null)
    }, []);

    const handleChangeSortType = (sortType) => {
        setSortBy(sortType);
    };

    const handleAddToWishList = async (skuBase, grindState, sizeState) => {
        const itemId = `${skuBase}-${sizeState}-${grindState}`
        try {
            await window.addToWishlist(itemId, 1);
        } catch(error) {
            setError(error?.message)
        }
    }

    if(fetching) {
        return (
            <GridContainer>
                <LoadingIndicator>waiting ...</LoadingIndicator>
            </GridContainer>
        )
    }

    return (
        <> 
            <WishSortPanel setData={setData} data={data} />
            <GridContainer direction='row' flexWrap='wrap'>
                {error && 
                    <ErrorMessage>
                        <div>{error}</div>
                        <GhostButton margin={0} width={20} onClick={clearError}>X</GhostButton>
                    </ErrorMessage>
                }
                {data.map(item => {
                    const { skuBase, image, name } = item;
                    const { grind, size, } = item.variants;
                    return (
                        <WishItem
                            key={skuBase}
                            grind={grind}
                            size={size}
                            skuBase={skuBase}
                            image={image}
                            name={name}
                            handleAddToWishList={handleAddToWishList}
                        />
                )})}
            </GridContainer>
        </>
    );
}

export default WishList;
