import { createClient } from 'contentful';
// singelton pattern
const contentfulClient = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export default contentfulClient;
