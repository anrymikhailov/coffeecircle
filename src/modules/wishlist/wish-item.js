import React, { Fragment, useState, } from 'react';
import styled from 'styled-components'
import { PrimaryButton, GhostButton, } from '../../shared/modules/button';
import { GridContainer, Row, } from '../../shared/modules/grid';
import { Image } from '../../shared/modules/image';
import { Title, SubTitle, } from '../../shared/modules/title';

const Card = styled.div`
    margin: 8px;
    padding: 8px;
    box-shadow: 0px 0px 3px 0 rgb(124 112 112 / 20%);
    border-radius: 6px;
`;

const WishItem = ({ skuBase, image, name, grind, size, handleAddToWishList, }) => {
    const [variantGrind] = grind;
    const [variantSize] = size;
    const [grindState, setGridState] = useState(variantGrind.code);
    const [sizeState, setSizeState] = useState(variantSize.code)

    return (
        <Card>
            <GridContainer direction='column' key={skuBase}>
                <Row justifyContent='center'><Title>{name}</Title></Row>
                <Row><Image src={image} width={320} /></Row>
                <Row>
                    <SubTitle marginRight={8}>Grind</SubTitle>
                    {grind.map((variantGrind, id) => (
                        <Fragment key={id}>
                            { variantGrind.code === grindState 
                                ? <PrimaryButton>{variantGrind.label}</PrimaryButton>
                                : <GhostButton onClick={() => setGridState(variantGrind.code)}>{variantGrind.label}</GhostButton>
                            }
                        </Fragment>
                    ))}
                </Row>
                <Row>
                    <SubTitle marginRight={8}>Size</SubTitle>
                    {size.map((variantSize, id) => (
                        <Fragment key={id}>
                            { variantSize.code === sizeState
                                ? <PrimaryButton>{variantSize.label}</PrimaryButton>
                                : <GhostButton onClick={() => setSizeState(variantSize.code)}>{variantSize.label}</GhostButton>
                            }
                        </Fragment>
                    ))}
                </Row>
                <PrimaryButton
                    onClick={() => handleAddToWishList(skuBase, grindState, sizeState)}
                >
                    Add to wish list
                </PrimaryButton>
            </GridContainer>
        </Card>
    );
}

export default WishItem;
