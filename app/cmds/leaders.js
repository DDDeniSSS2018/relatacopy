const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription("**Команды бота**")
    .setColor('#483D8B')
    .addField("!!!POKER#0517", "40 rub")
    .addField("rediч#2745","25 rub")
    .setDescription('Doante leaders bord')
    .setTitle('Click to donate')
    .setURL('https://qiwi.me/relata-moral')
    
    bot.send(embed);
    

};
module.exports.help = {
    name: "leaders"
};