import styled from "styled-components";

export const GridContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    flex-wrap: ${props => props.flexWrap};
    justify-content: ${props => props.justifyContent || 'center'};
`;

export const Row = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent};
`;