# slack-grass-notification

![grass-notification-image](https://user-images.githubusercontent.com/55532835/137614367-8fe7c595-d965-45ba-a688-4cd0dd5bd59a.png)

## Abstruct
1日のコミット件数をGithub GraphQLから取得しslackに通知する．
lambdaへデプロイしcloudwatchで毎日00:00に定期実行する．

## Setup

### リポジトリのクローン
このリポジトリをクローンし，リモートブランチを自分のものに変更．

### 環境変数のセット
| Name          | Description                      |
| ------------- | -------------------------------- |
| USERNAME      | GitHubのユーザー名               |
| SLACK_WEBHOOK | slackに送信するためのWebhook url |
| GITHUB_TOKEN  | GithubのPersonal access token    |

リポジトリに環境変数をセットするとlambdaにデプロイした際に自動でセットされます．

### 自動デプロイ
リモートにpushするとlambdaへの自動デプロイが開始し，デプロイが完了するとwebhookで指定したものに完了メッセージが届きます．

![スクリーンショット 2021-11-11 19 48 31](https://user-images.githubusercontent.com/55532835/141285314-128695f1-a194-4fad-af6d-cf5abcce08fa.png)
