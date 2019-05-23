const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var canal = message.guild.channels.find('name', 'moderator-log');
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
        return message.reply("Please mention user");
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Reason no given";
    let embed = new Discord.RichEmbed()
        .setColor('#8B0000')
        .setThumbnail(message.author.avatarURL)
        .setTitle(`:information_source: report :information_source: `)
        .addField(':question: Author:', message.author)
        .addField('\n\n :skull_crossbones: Reported:', member.user)
        .addField('\n\n :name_badge: reason:', reason)
        .setFooter(`Thanks ${message.author.username}.`)
        .setTimestamp()
    canal.send(embed);
}

module.exports.help = {
    name: "report"
}