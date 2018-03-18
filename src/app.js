process.env["NTBA_FIX_319"] = 1;
const config = require('./../config/config');
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(config.getValue('token'), { polling: true });
const fs = require('fs');
const path = require('path');

const Connector = require('./database/dbConnector');
const db = new Connector(config.getValue('db'));

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const regEx = new RegExp(/накажи меня/, 'gi');
  

  if (text.match(regEx)) {
    const file = path.resolve(
      `${__dirname}/../files/1.jpg`
    );
    const buffer = fs.readFileSync(file);
    const fileOptions = {
      filename: 'meow',
      contentType: 'image/jpeg',
    };
    bot.sendPhoto(chatId, buffer, fileOptions)
      .then((res) => {
        bot.sendMessage(chatId, 'Здесь кого-то надо наказать?');
      });
  }
  
});

bot.onText(/\/test/, (msg, [source, match]) => {
  
});

/*

db.addData(1,
    JSON.stringify({
      hot_b: '330'
    }),
    JSON.stringify({
      cold_b: '330'
    }),
    JSON.stringify({
      simple: '14000'
    }),
    '2018-4-18',
    '2018-4-17',
    6000,
    6205,
    50)
    .then(data => {
      console.log(data);
    });

*/