const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone : true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("YOUR SERVER NAME", {type: "WATCHING"});
})


bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = messege.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice[0];

    if(cmd === `${prefix}hello`){
        return message.channel.send('Hello')
    }
})

bot.login(botconfig.token);
