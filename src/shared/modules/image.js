import styled from "styled-components";

export const Image = styled.img`
  src: ${props => props.scr};
  width: ${props => `${props.width}px`};
`;
