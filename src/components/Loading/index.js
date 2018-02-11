import React from 'react';
import PropTypes from 'prop-types';
import './loading.css';

export const Loading = () => (
  <div className="loading-container">
    <img className="loading-icon" src="/images/loading.gif" alt="Loading" />
  </div>
);

const LoadingWrapper = ({ loading, renderContent }) =>
  (loading ? <Loading /> : renderContent());

LoadingWrapper.propTypes = {
  loading: PropTypes.bool.isRequired,
};
export default LoadingWrapper;
