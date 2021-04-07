import styled from 'styled-components';
import { ReactComponent as Login } from '../../../assets/image/Login.svg';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  @media (min-width: 960px) {
    max-width: 740px;
    max-height: 600px;
  }
`;
export const StyledLogin = styled(Login)`
  width: 100%;
  height: 100%;
`;
