import React from 'react';
import HamburgerIcon from '../../Atoms/HamburgerImage/HamburgerImage';

import FormOperation from '../../Molecues/FormOperation/FormOperation';
import { StyledWrapper, StyledTitieWrapper, StyledTitle, StyledClose } from './StyledAddOperation';

const AddOperation = ({ add, setAdd }) => {
  return (
    <StyledWrapper open={add}>
      <StyledTitieWrapper>
        <StyledTitle big white>
          Add operation
        </StyledTitle>
        <StyledClose onClick={() => setAdd(!add)}>
          <HamburgerIcon open />
        </StyledClose>
      </StyledTitieWrapper>
      <FormOperation setAdd={setAdd} />
    </StyledWrapper>
  );
};

export default AddOperation;
