import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { SortByCategoryAction } from '../../actions/actions';

import Title from '../Atoms/Title/Title';
import HistoryCard from '../Organisms/HistoryCard/HistoryCard';
import HomeTemplate from '../templates/HomeTemplate';
// import SingleChart from '../Atoms/SingleChart/SingleChart';

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
  grid-template-rows: 10% 10% 10% auto;
  @media screen and (min-width: 960px) {
    width: 50%;
  }
`;

const HistoryPage = ({ allMoney, sortedOperation, sortByName, userId }) => {
  useEffect(() => {
    sortByName('date', userId);
  }, []);
  return (
    <>
      <HomeTemplate>
        <StyledContent>
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

// const AutoContract = {
//   partner: { lastname, first, personalCode },
// };

// const HouseholdContract = {
//   partner: { lastname, first, personalCode },
// };
