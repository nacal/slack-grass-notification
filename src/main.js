const { graphqlWithAuth } = require('./graphql.js');

const QUERY = `
  {
    user(login: "nacal") {
      contributionsCollection(from: "2021-10-25T00:00:00", to: "2021-10-26T00:00:00") {
        totalCommitContributions
      }
    }
  }`;

const getDailyCommitContributions = async() => {
  try {
    const res = await graphqlWithAuth(QUERY);
    console.log(res.user.contributionsCollection.totalCommitContributions)
    return res.user.contributionsCollection.totalCommitContributions;
  } catch (err) {
    console.error(err.message);
  }
}

exports.commits = getDailyCommitContributions;
