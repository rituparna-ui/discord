require("dotenv").config();
const { Client } = require("discord.js");

const bot = new Client();

bot.on("ready",()=>{
	console.log(`${bot.user.username} and ${bot.user.tag} logged in`);
});

bot.on("message",(msg)=>{
	console.log(`${msg.author.tag} sent ${msg.content}`);
	msg.reply("reply from bot");
});

bot.login(process.env.BOT);
