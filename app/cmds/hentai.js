const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.channel.send('Use NSFW commands in a NSFW marked channel (look in channel settings, dummy).\n. https://media.discordapp.net/attachments/465580817452630036/468455310122811393/NSFW.gif')
    superagent.get('https://nekos.life/api/v2/img/hentai')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Hentai")
      .setImage(response.body.url)
      .setColor(`#000000`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	
}
module.exports.help = {
     name: "hentai"
}