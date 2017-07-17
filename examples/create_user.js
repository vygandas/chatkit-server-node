var ChatKit = require('../target/index');

// var PusherPlatform = require('../node_modules/pusher-platform-node/target/index');

// Just for local testing where using self signed certs
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const baseClient = new PusherPlatform.BaseClient({
//   host: 'localhost',
//   port: 10443
// })

const chatkit = new ChatKit.default({
  instance: 'v1:api-ceres:auth-example-app-another',
  key: 'the-id-bit:the-secret-bit',
  serviceName: 'chat_api',
  serviceVersion: 'v1'
});

chatkit.createUser('extender', 'Test McTest')
  .then(() => {
    console.log('Success');
  }).catch((err) => {
    console.log(err);
  })
