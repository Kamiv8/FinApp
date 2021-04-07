import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Title from '../Atoms/Title/Title';
import HomeTemplate from '../templates/HomeTemplate';
import SingleChart from '../Atoms/SingleChart/SingleChart';
import Button from '../Atoms/Button/Button';
import AddOperation from '../Organisms/AddOperation/AddOperation';
import OperationDesktop from '../Organisms/OperationDesktop/OperationDesktop';
import { px2vw } from '../../theme/MainTheme';

const StyledChart = styled.div`
  width: ${px2vw(298)};
  height: 50vh;
  box-shadow: -10px 3px 20px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  padding: 5px;
  @media screen and (min-width: 960px) {
    width: ${px2vw(150)};
    // margin-top: 12vh;
    grid-column: 1/2;
    grid-row: 4/-1;
    margin-right: 20px;
  }
`;
const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vh auto;
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const StyledTitleColor = styled(Title)`
  color: ${({ theme, allMoney }) => (allMoney >= 0 ? theme.green : theme.red)};
`;

const StyledContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 960px) {
    grid-template-columns: 7fr 3fr;
    // grid-template-rows: auto;
    gap: 3%;
  }
`;

const StyledResult = styled.div`
  display: grid;
  grid-template-rows: 10% 10% 5% auto 10%;
  @media (min-width: 960px) {
    align-items: center;
    justify-content: space-around;
    grid-template-rows: 10% 10% 5% auto;
    gap: 4vh;
    height: 80vh;
  }
`;
const HomePage = ({ allMoney }) => {
  const [add, setAdd] = useState(false);

  return (
    <>
      <HomeTemplate>
        <StyledContent>
          <StyledResult>
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
          </StyledResult>
          <OperationDesktop />
        </StyledContent>
      </HomeTemplate>
      <AddOperation add={add} setAdd={setAdd} />
    </>
  );
};

const mapStateToProps = ({ username = null, allMoney, userId }) => ({
  username,
  allMoney,
  userId,
});

export default connect(mapStateToProps)(HomePage);

// <Title>Your Budget:</Title>
/* ; */
//          <OperationDesktop />;
