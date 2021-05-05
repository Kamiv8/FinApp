import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { SortByCategoryAction } from '../../actions/actions';

import Title from '../Atoms/Title/Title';
import HistoryCard from '../Organisms/HistoryCard/HistoryCard';
import HomeTemplate from '../templates/HomeTemplate';
import SingleChart from '../Atoms/SingleChart/SingleChart';
import { px2vw } from '../../theme/MainTheme';

const StyledChart = styled.div`
  width: ${px2vw(298)};
  height: 50vh;
  box-shadow: -10px 3px 20px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  padding: 5px;
  display: none;
  @media screen and (min-width: 960px) {
    width: ${px2vw(150)};
    grid-column: 2/3;
    grid-row: 1/-1;
    margin-right: 20px;
    display: block;
    align-self: end;
  }
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-row: 3/4;
`;

const StyledSelect = styled.select`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xs};
  outline: none;
`;

const StyledCardWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.purple};
  }
`;

const StyledContent = styled.div`
  display: grid;
  width: 100%;
  height: 100%;

  grid-template-columns: 1fr;
  // grid-template-rows: 10% 10% 10% auto;
  @media screen and (min-width: 960px) {
    grid-template-columns: 4fr 6fr;
    grid-template-rows: 1fr;
    gap: 3%;
  }
`;
const StyledHistoryList = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 10% 10% 10% auto;
  gap: 5%;
`;

const HistoryPage = ({ allMoney, sortedOperation, sortByName, userId }) => {
  useEffect(() => {
    sortByName('date', userId);
  }, []);
  return (
    <>
      <HomeTemplate>
        <StyledContent>
          <StyledHistoryList>
            <Title>Your Budget: </Title>
            <Title big> {allMoney} PLN</Title>
            <StyledTitleWrapper>
              <Title>History</Title>
              <StyledSelect onChange={(e) => sortByName(e.target.value, userId)}>
                <option value="date">By date</option>
                <option value="name">By title</option>
                <option value="money">By money</option>
              </StyledSelect>
            </StyledTitleWrapper>
            <StyledCardWrapper>
              {sortedOperation.map(({ title, price, date, description, operationId }) => (
                <HistoryCard
                  key={operationId}
                  title={title}
                  price={price}
                  date={date}
                  description={description}
                />
              ))}
            </StyledCardWrapper>
          </StyledHistoryList>
          <StyledChart>
            <SingleChart history />
          </StyledChart>
        </StyledContent>
      </HomeTemplate>
    </>
  );
};

const mapStateToProps = ({ allMoney, sortedOperation, userId }) => ({
  allMoney,
  sortedOperation,
  userId,
});

const mapDispatchToProps = (dispatch) => ({
  sortByName: (category, userId) => {
    dispatch(SortByCategoryAction(category, userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);
