import { createClient } from 'contentful';
// singelton pattern
const client = createClient({
  space: '5v32339pogmo',
  accessToken:
    'e0b47ac40dfa7e8fb22f68a00efbc35f082c43e82ea4bec68137d71e890e89cf'
});

export default client;
