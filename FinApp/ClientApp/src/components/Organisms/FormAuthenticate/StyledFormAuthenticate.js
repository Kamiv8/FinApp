import styled from 'styled-components';
import { Form as Forms } from 'formik';
import { Link } from 'react-router-dom';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40vh;
  margin: 0 auto;
  //padding: 1% 13%;
  @media (min-width: 960px) {
    max-width: 550px;
    height: 60vh;
    margin: 0 0 0 auto;
  }
`;
export const StyledTitle = styled.p`
  margin: 37px 0;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  @media (min-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 1);
  text-decoration: underline;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  @media (min-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const StyledForm = styled(Forms)`
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 960px) {
    width: 100%;
  }
`;
