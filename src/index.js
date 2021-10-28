const { IncomingWebhook } = require('@slack/webhook');
const { getDailyCommit } = require('./getDailyCommit.js')

exports.post = async (event) => {
  try {
    const url = process.env.SLACK_WEBHOOK || '';

    if (url === '') {
      throw new Error(`
        Error: Missing SLACK_WEBHOOK
        Please set SLACK_WEBHOOK as environment variable
      `);
    }

    const commit = await getDailyCommit();
    const webhook = new IncomingWebhook(url);
    const msg = {
      text: `commit:${commit}`
    };
    const res = await webhook.send(msg);
    console.log(res);

    return;
  } catch (err) {
    console.error(err);
  }
}
