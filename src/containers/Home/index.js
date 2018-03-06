import React from 'react';
import PropTypes from 'prop-types';
import { HomeBanner } from '../../components';

const Home = ({ homeImage }) => <HomeBanner homeImage={homeImage} />;

Home.propTypes = {
  homeImage: PropTypes.string.isRequired,
};

export default Home;
