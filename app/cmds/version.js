const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription("**Info bot**")
    .setColor('#61ff59')
    .addField("BETA V0.2","BETA-test bot")


    bot.send(embed);

};
module.exports.help = {
    name: "version"
};
