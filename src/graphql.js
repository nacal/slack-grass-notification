const { graphql } = require('@octokit/graphql');

const token = process.env.GITHUB_TOKEN || '';

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${token}`,
  },
});

export { graphqlWithAuth as graphql };
