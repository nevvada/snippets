const db = require('./database/database');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

const QuoteType = new GraphQLObjectType({
  name: 'QuoteInfo',
  fields: () => ({
    id: { type: GraphQLID },
    quote: { type: GraphQLString },
    author: { type: GraphQLString }
  })
});

const ColorType = new GraphQLObjectType({
  name: 'Color',
  fields: () => ({
    color: { type: GraphQLString }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    quoteInfos: {
      type: new GraphQLList(QuoteType),
      async resolve(parent, args) {
        const result = await db.query(`SELECT * FROM snippets;`);
        return result.rows;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
