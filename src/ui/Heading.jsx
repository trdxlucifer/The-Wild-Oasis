import styled, { css } from "styled-components";

/* const test = css`
  text-align: center;
  ${10 > 5 && " background-color: yellow"}
`; */

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-transform: uppercase;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.5rem;
      font-weight: 600;
      text-transform: uppercase;
    `}
 ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      text-transfom: uppercase;
    `}
 ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
      text-transfom: uppercase;
    `}
`;

export default Heading;
