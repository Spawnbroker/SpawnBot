'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.on('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if(message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.login(process.env.CLIENT_TOKEN);