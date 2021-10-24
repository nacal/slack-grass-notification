const { IncomingWebhook } = require('@slack/webhook');

exports.post = async () => {
  try {
    const url = process.env.SLACK_WEBHOOK || '';

    if (url === '') {
      throw new Error(`
        Error: Missing WEBHOOK
        Please set WEBHOOK as environment variable
      `);
    }

    const webhook = new IncomingWebhook(url);
    const msg = {
      text: 'Auto Deploy to Lambda with GitHub Actions'
    };
    const res = await webhook.send(msg);
    console.log(res);

    return;
  } catch (err) {
    console.error(err);
  }
}
