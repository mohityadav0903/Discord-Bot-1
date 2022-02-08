require('dotenv').config()
const discord = require('discord.js')
const prefix = "!";
const client = new discord.Client({
  intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "hello") {
        message.reply(`hello`);
    } 
    else if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`The sum of all the arguments you provided is ${sum}`);
      }
      else if (command === "minus") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter -= x);
        message.reply(`The substraction of all the arguments you provided is ${sum}`);
      }
      else if (command === "into") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter *= x);
        message.reply(`The multiplication of all the arguments you provided is ${sum}`);
      }
      else if (command === "divide") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter /= x);
        message.reply(`The divide of all the arguments you provided is ${sum}`);
      }
  
});

client.login(process.env.DISCORD_BOT_TOKEN);