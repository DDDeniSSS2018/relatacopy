const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("У вас нет прав)");
    } else {
        if (!args[0]) return message.channel.send("Что хочешь сказать?").then(msg => msg.delete(10 * 1000));
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let botmessage = args.join(" ");
        message.delete().catch();
        let embed = new Discord.RichEmbed()
            .setDescription(`${botmessage}`)
            .setColor('GREEN')
        message.channel.send(embed);
    }
};
exports.conf = {
    aliases: ['commands']
};
exports.help = {
    name: 'embed',
    category: 'adm'
};