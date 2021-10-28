const { graphqlWithAuth } = require('./graphql.js');
const { getDate } = require('./getDate.js');

const QUERY = `
  query($user: String!, $from: String!, $to: String!) {
    user(login: $user) {
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
      }
    }
  }`;

exports.getDailyCommit = async() => {
  try {
    const res = await graphqlWithAuth(QUERY, {user: `${process.env.USERNAME}`, from: getDate().from, to: getDate().to});
    return res.user.contributionsCollection.totalCommitContributions;
  } catch (err) {
    console.error(err.message);
  }
}
