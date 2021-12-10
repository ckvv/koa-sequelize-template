/* eslint-disable no-param-reassign */
const { WebSocketServer } = require('ws');
const { handleMessage } = require('./handle-message');
const { verifyToken } = require('../utils/authorize');
const { logger } = require('../utils/log4js');

const { config } = KT;

const wsMap = new Map();

function mountWs(server) {
  const wss = new WebSocketServer({ server });

  wss.on('connection', async (ws, req) => {
    const token = req.headers['sec-websocket-protocol'];
    const userRes = await verifyToken(token, config.cookie.key);
    if (!userRes) return ws.close();

    const { id } = userRes;
    ws.user = { id };
    wsMap.set(id, ws);

    ws.on('message', async (rawData) => {
      try {
        const { type, data } = JSON.parse(rawData);
        await handleMessage.call(ws, type, data, wss);
      } catch (error) {
        logger.error(error);
      }
    });
    ws.on('close', async () => {
      wsMap.delete(ws.user.id);
    });
    ws.on('error', async (err) => {
      logger.info('ws: error', err);
    });
  });
}

module.exports = {
  wsMap,
  mountWs,
};
