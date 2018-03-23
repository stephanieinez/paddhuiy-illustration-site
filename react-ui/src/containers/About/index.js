import React from 'react';
import PropTypes from 'prop-types';
import { ContentBlock } from '../../components';

const About = ({ aboutContent, aboutImage }) => (
  <ContentBlock content={aboutContent} image={aboutImage} />
);

About.propTypes = {
  aboutContent: PropTypes.string.isRequired,
  aboutImage: PropTypes.string.isRequired,
};

export default About;
