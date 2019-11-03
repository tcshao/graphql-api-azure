const { graphql } = require('graphql');
const rawSchema = require('./schema');
require('dotenv').config()

const query = `{ hello products { name, description } reviews { title, comment, grade, product { name, description } } }`;

graphql({
  schema: rawSchema,
  source: query
}).then(result => {
  console.log('result', result);
  console.log('reviews', result.data.reviews);
})