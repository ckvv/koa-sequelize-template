const { WebSocketServer } = require('ws');
const { verifyToken } = require('../utils/authorize');

const { config } = KT;

function mountWs(server) {
  const wss = new WebSocketServer({ server });
  wss.on('connection', async (ws, req) => {
    const token = req.headers['sec-websocket-protocol'];
    const userRes = await verifyToken(token, config.cookie.key);
    if (!userRes) {
      ws.close();
      return;
    }
    // eslint-disable-next-line no-param-reassign
    ws.userId = userRes.id;
    ws.on('message', async (rawData) => {
      console.log(ws.userId);
      console.log(`${rawData}`);
    });
  });
}

module.exports = {
  mountWs,
};
