import styled, { css } from 'styled-components';

const Label = styled.label`
  ${({ theme }) =>
    theme &&
    css`
      font-weight: ${theme.bold};
      font-size: ${theme.fontSize.xs};
      //margin-top: 4%;
    `}
`;

export default Label;
