import styled from "styled-components";

export const Text = styled.p`
  color: rgba(66, 63, 69, 1);
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;

  @media (max-width: 460px) {
    font-size: 24px;
    line-height: 34px;
  }
`;
