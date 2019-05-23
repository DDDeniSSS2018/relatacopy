const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setTitle('click here, to donate!')
    .setURL('https://qiwi.me/relata-moral')
    .setColor('#483D8B')
    .addField("If you support the project, you get bonuses", "`role`")
    
    bot.send(embed);
    

};
module.exports.help = {
    name: "donate"
};
