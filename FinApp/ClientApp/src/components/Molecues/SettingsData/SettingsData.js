import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from '../../Atoms/Button/Button';
import HamburgerImage from '../../Atoms/HamburgerImage/HamburgerImage';
import Title from '../../Atoms/Title/Title';
import { RemoveDataAction } from '../../../actions/actions';

export const StyledHamburgerIcon = styled(HamburgerImage)`
  margin-left: 10px;
`;

const StyledContent = styled.div`
  margin: 30px 5px 0 50px;
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  height: 90%;
`;

const SettingsData = ({ open, setOpen, resetData, userId }) => (
  <StyledContent>
    <Title settings>Do you want to remove all operations?</Title>

    <div onClick={() => setOpen(!open)}>
      <StyledHamburgerIcon open settings />
    </div>
    <Button
      settings
      onClick={() => {
        resetData(userId);
        setOpen(!open);
      }}
    >
      Restet
    </Button>
  </StyledContent>
);

const mapStateToProps = ({ userId }) => ({
  userId,
});
const mapDispatchToProps = (dispatch) => ({
  resetData: (userId) => {
    dispatch(RemoveDataAction(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsData);

/* &::before {
    display: block;
    content: '';
    background-image: url(${changeIcon});

  } */
