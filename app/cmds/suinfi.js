const Discord = module.require("discord.js");
const fs = require ('fs');
const profile = require ('../profile.json')
module.exports.run = async (bot,message,args) => {

  if (message.author.id !== "573965173925216265") return message.channel.send("⛔ **This commands a BETA-testing!**");
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTitle('Full page info')
    .addField("<a:relata_valut:575589619698237440>Global xp", `${profile[message.author.id].coins}`)
    .addField("📊Global lvl", `${profile[message.author.id].xp}`)
    .addField('Join server', "memberuserXreatedAT")



    bot.send(embed);

};
module.exports.help = {
    name: "suinfo"
};
