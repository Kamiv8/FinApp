import styled, { keyframes, css } from 'styled-components';
import Title from '../../Atoms/Title/Title';

const Open = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);

  }
`;
const animation = () =>
  css`
    animation: ${Open} 0.3s forwards;
  `;

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  background-color: ${({ theme }) => theme.purple};
  position: absolute;
  z-index: 2;
  height: 70vh;
  width: 100%;
  //transform: ${({ open }) => (open ? 'translateY(-100%)' : 'translateY(0)')};
  ${({ open }) => (open ? animation : '')};
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.16);
  @media (min-width: 960px) {
    display: none;
  }
`;

export const StyledTitieWrapper = styled.div`
  display: grid;
  grid-template-columns: 9fr 1fr;

  justify-items: center;

  align-items: center;
`;
export const StyledTitle = styled(Title)`
  padding-left: 10vw;
  margin: 0;
`;
export const StyledClose = styled.div`
  margin-right: 5px;
`;
