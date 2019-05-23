const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTitle('Support server (click here)')
    .setURL("https://discord.gg/SdgjEq7")
    bot.send(embed);

};
module.exports.help = {
    name: "support"
};
