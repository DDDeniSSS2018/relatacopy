const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("Use NSFW commands in a NSFW marked channel (look in channel settings, dummy).n. https://media.discordapp.net/attachments/465580817452630036/468455310122811393/NSFW.gif")

    const subreddits = [
        "NSFW_GIF",
        "nsfw_gifs",
        "porninfifteenseconds",
        "60FPSPorn",
        "porn_gifs",
        "nsfw_Best_Porn_Gif",
        "LipsThatGrip",
        "adultgifs"
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setTitle('Porno')
                    .setColor(0xffa500)
                    .setImage(url)
                message.channel.send({ embed });
        })
}

exports.help = {
  name: 'porngif'
};