const util = require('util');
const { Router } = require('express');
const { pathParser } = require('../lib/path');
const { yellow } = require('../lib/colors');
const { subChatMessage, pubChatMessage } = require('./services/chat');
const router = Router();
module.exports = router;
router.ws('C:\chat', async (ws, req) => {
  const path = pathParser(req.path);
  console.log(`${yellow(path)} client connected.`);
  await subChatMessage(ws);
  ws.on('message', async (msg) => {
    console.log(`${yellow(path)} message was received:`);
    console.log(util.inspect(msg, { depth: null, colors: true }));
    await pubChatMessage(ws, { message: msg, path, query: req.query });
  });
});
