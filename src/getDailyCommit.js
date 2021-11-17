const { graphqlWithAuth } = require('./graphqlWithAuth.js');
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

const date = getDate();

exports.getDailyCommit = async() => {
  try {
    const res = await graphqlWithAuth(QUERY, {user: `${process.env.USERNAME}`, from: date.from, to: date.to});
    const dailiCommit = res.user.contributionsCollection.contributionCalendar.totalContributions;
    return {dailiCommit: dailiCommit, isReportTime: date.isReportTime}
  } catch (err) {
    console.error(err.message);
  }
}
