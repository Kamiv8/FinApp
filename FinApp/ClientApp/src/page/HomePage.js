import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Title from '../components/Title';

import HomeTemplate from '../templates/HomeTemplate';
import SingleChart from '../components/SingleChart';
import Button from '../components/Button';

const StyledWrapper = styled.div`
  background-color: ${({theme}) => theme.white};
  margin-top: 5vh;
  padding: 5.5%;
  border-radius: 20px;
`;
const StyledChart = styled.div`
  height: 55vh;
  box-shadow: -10px 3px 20px rgba(0,0,0,0.16);
  border-radius: 20px;
  padding: 10px;
`;
const StyledButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 20px 0;
`;

const HomePage = () => (
  <>
    <HomeTemplate>
      <StyledWrapper>
        <Title>Your Budget:</Title>
        <Title big>1999.00 PLN </Title>
        <Title>Money Status</Title>
        <StyledChart>
          <SingleChart />
        </StyledChart>
        <StyledButtonWrapper>
          <Button reverse>Add operation</Button>
        </StyledButtonWrapper>
      </StyledWrapper>

    </HomeTemplate>
  </>
);

const mapStateToProps = ({ username = null }) => ({
  username,
});

export default connect(mapStateToProps)(HomePage);
