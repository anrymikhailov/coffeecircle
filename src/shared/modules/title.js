import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    color: black;
`;

export const SubTitle = styled.h1`
    font-size: 16px;
    text-align: center;
    color: black;
    margin-right: ${props => `${props.marginRight}px`};
`;