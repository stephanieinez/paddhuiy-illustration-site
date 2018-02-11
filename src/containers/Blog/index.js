import React from 'react';
import { ContentBlock } from '../../components';

const Blog = ({ blogContent, blogImage }) => (
  <ContentBlock content={blogContent} image={blogImage} />
);

export default Blog;
