import React from 'react';
import { connect } from 'react-redux';

import HomeTemplate from '../templates/HomeTemplate';

const HomePage = () => (
  <>
    <HomeTemplate>xx</HomeTemplate>
  </>
);

const mapStateToProps = ({ username = null }) => ({
  username,
});

export default connect(mapStateToProps)(HomePage);
