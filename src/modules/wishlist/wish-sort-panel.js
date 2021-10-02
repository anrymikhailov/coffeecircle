import React, { useState, useCallback, useEffect, Fragment, } from 'react';
import { GhostButton, PrimaryButton } from '../../shared/modules/button';
import { GridContainer, Row, } from '../../shared/modules/grid';
import { SubTitle, } from '../../shared/modules/title';
import { sortByName, sortByPrice, } from '../../shared/utils/utils';

const sortTypes = ['name', 'price'];
const getSortByFunc = (sortType) => {
    switch(sortType) {
        case 'name': return sortByName;
        case 'price':
        default: return sortByPrice;
    }
}

const WishSortPanel = ({ setData, data }) => {
    const [sortBy, setSortBy] = useState(sortTypes[0]);

    useEffect(() => {
        if(data) {
            console.log('useEffect', data.sort((a, b) => a.price < b.price));
            setData([...data].sort(getSortByFunc(sortBy)));
        }
    }, [sortBy]);


    const handleChangeSortType = (sortType) => {
        setSortBy(sortType);
    };

    return (
        <GridContainer>
            <SubTitle marginRight={8}>Sort By:</SubTitle>
            {sortTypes.map(sortType => (
                <Fragment key={sortType}>
                    {sortType === sortBy 
                        ? <PrimaryButton>{sortType}</PrimaryButton>
                        : <GhostButton onClick={() => handleChangeSortType(sortType)}>{sortType}</GhostButton>
                    }
                </Fragment>
            ))}
        </GridContainer>
    );
}

export default WishSortPanel;
