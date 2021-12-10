const { WS_TYPE } = require('../constant');

function handleMessage(type, data, wss) {
  switch (type) {
    case WS_TYPE.ALL_USERS: {
      const users = Array.from(wss.clients).map((client) => client.user);
      wss.clients.forEach((client) => {
        client.send(JSON.stringify({
          type,
          data: users,
        }));
      });
      break;
    }
    default:
      break;
  }
}

module.exports = {
  handleMessage,
};
