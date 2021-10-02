
import styled from "styled-components";

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: auto;
    min-width: 90px;
    font-weight: 700;
    border-radius: 2px;
    color: #fff;
    background-color: #000;
    border: 2px solid #000;
    transition-property: border-color,background-color,color;
    transition-duration: .15s;
    transition-timing-function: ease-out;
    text-decoration: none;
    text-align: center;
    min-height: 40px;
    line-height: 1.5;
    padding: 0 12px;
    margin: 0 .5rem 1rem 0;
`;

export const PrimaryButton = styled(Button)`
    color: #fff;
    background-color: #ee7152;
    border-color: #ee7152;
`;

export const GhostButton = styled(Button)`
    background-color: hsla(0,0%,100%,.3);
    color: #000;
    border: 2px solid #000;
    min-width: ${props => `${props.width}px`};
    margin: ${props => `${props.margin}px`};
`;