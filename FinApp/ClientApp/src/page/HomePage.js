import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Title from '../components/Title';
import HomeTemplate from '../templates/HomeTemplate';
import SingleChart from '../components/SingleChart';
import Button from '../components/Button';
import FormOperation from '../components/FormOperation';

const StyledChart = styled.div`
  height: 50vh;
  box-shadow: -10px 3px 20px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  padding: 10px;
`;
const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vh auto;
`;

const StyledTitleColor = styled(Title)`
  color: ${({ theme, allMoney }) => (allMoney >= 0 ? theme.green : theme.red)};
`;

const HomePage = ({ allMoney }) => {
  const [add, setAdd] = useState(false);

  return (
    <>
      <HomeTemplate>
        <Title>Your Budget:</Title>
        <StyledTitleColor big allMoney={allMoney}>
          {allMoney} PLN
        </StyledTitleColor>
        <Title>Money Status</Title>
        <StyledChart>
          <SingleChart />
        </StyledChart>
        <StyledButtonWrapper>
          <Button
            reverse
            onClick={() => {
              setAdd(!add);
            }}
          >
            Add operation
          </Button>
        </StyledButtonWrapper>
      </HomeTemplate>
      <FormOperation add={add} setAdd={setAdd} />
    </>
  );
};

const mapStateToProps = ({ username = null, allMoney, userId }) => ({
  username,
  allMoney,
  userId,
});

export default connect(mapStateToProps)(HomePage);
