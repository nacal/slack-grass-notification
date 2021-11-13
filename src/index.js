const { IncomingWebhook } = require('@slack/webhook');
const { getDailyCommit } = require('./getDailyCommit.js')

exports.post = async (event) => {
  const data = await getDailyCommit();
  const url = process.env.SLACK_WEBHOOK || '';

  if (url === '') {
    throw new Error(`
      Error: Missing SLACK_WEBHOOK
      Please set SLACK_WEBHOOK as environment variable
    `);
  }

  const webhook = new IncomingWebhook(url);
  const commit = data.dailiCommit;

  data.isReportTime ?
    text = `今日のコミットは${commit}件でした` :
    commit === 0 ?
      text = `今日はまだ草が生えていません` :
      text = ''

  const msg = { text: text };
  const res = await webhook.send(msg);
  console.log(res);

  return;
}
