import React from 'react';
import PropTypes from 'prop-types';
import { ContentBlock } from '../../components';

const Blog = ({ blogContent, blogImage }) => (
  <ContentBlock content={blogContent} image={blogImage} />
);

Blog.propTypes = {
  blogContent: PropTypes.string.isRequired,
  blogImage: PropTypes.string.isRequired,
};

export default Blog;
