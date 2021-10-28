const { graphqlWithAuth } = require('./graphql.js');

const QUERY = `
  query($user: String!) {
    user(login: $user) {
      contributionsCollection(from: "2021-10-25T00:00:00", to: "2021-10-26T00:00:00") {
        totalCommitContributions
      }
    }
  }`;

exports.getDailyCommit = async() => {
  try {
    const res = await graphqlWithAuth(QUERY, {user: `${process.env.USERNAME}`});
    return res.user.contributionsCollection.totalCommitContributions;
  } catch (err) {
    console.error(err.message);
  }
}
