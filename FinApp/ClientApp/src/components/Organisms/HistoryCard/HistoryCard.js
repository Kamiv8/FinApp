import React, { useState } from 'react';

import { StyledWrapper, StyledElement } from './StyledHistoryCard';

const HistoryCard = ({ title, price, date, description }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <StyledWrapper color={price} expand={expand} onClick={() => setExpand(!expand)}>
        <StyledElement price>{price} PLN</StyledElement>
        <StyledElement title>{title}</StyledElement>
        <StyledElement date>{date}</StyledElement>
        <StyledElement expand={expand} description>
          {description}
        </StyledElement>
      </StyledWrapper>
    </>
  );
};

export default HistoryCard;
