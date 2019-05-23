const Discord = require("discord.js");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
   let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription("You stats")
    .setColor('GREEN')
    .addField("<a:relata_valut:575589619698237440>Global money",`${profile[message.author.id].coins}`)
    .addField("📊Global lvl",`${profile[message.author.id].lvl}`)
    
      await message.channel.send(embed);
}

module.exports.help = {
    name: 'xp'
}
