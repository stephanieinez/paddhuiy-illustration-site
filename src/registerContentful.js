import { createClient } from 'contentful';
// singelton pattern
const client = createClient({
  space: 'CONTENTFUL_SPACE',
  accessToken: 'CONTENTFUL_ACCESSTOKEN',
});

export default client;
