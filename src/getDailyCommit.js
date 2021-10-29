const { graphqlWithAuth } = require('./graphql.js');
const { getDate } = require('./getDate.js');

const QUERY = `
  query($user: String!, $from: DateTime, $to: DateTime) {
    user(login: $user) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
        }
      }
    }
  }`;

exports.getDailyCommit = async() => {
  try {
    const res = await graphqlWithAuth(QUERY, {user: `${process.env.USERNAME}`, from: getDate().from, to: getDate().to});
    return res.user.contributionsCollection.contributionCalendar.totalContributions;
  } catch (err) {
    console.error(err.message);
  }
}
