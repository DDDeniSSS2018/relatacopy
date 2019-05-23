const Discord = require("discord.js");
const creator = '573965173925216265';
module.exports.run = async (bot, message, args) => {
let errowner = new Discord.RichEmbed()
.setTitle("❗ Ошибка")
.setColor("RED")
.setDescription(`**У вас нету права "Разработчик бота"**`)
if (message.author.id !== creator) return message.reply(errowner)
    let att = [];
    if(message.attachments.size > 0) message.attachments.forEach(attachment => att.push(attachment.url));
            bot.guilds.forEach(guild => {
                let channels = guild.channels.filter(channel => channel.type === 'text' && channel.permissionsFor(guild.members.get(bot.user.id)).has('SEND_MESSAGES'));
                if (channels.size > 0) channels.first().send(`${args.join(' ')}\n${att.join('\n')}`);
            });
}

module.exports.help = {
    name: "mass-say",
    description: "Массовое сообщение."
}