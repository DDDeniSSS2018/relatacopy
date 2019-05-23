const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTitle('Invite bot (click here)')
    .setURL('https://discordapp.com/oauth2/authorize?client_id=573983188649508865&permissions=21469588398&scope=bot')



    bot.send(embed);

};
module.exports.help = {
    name: "invite"
};
