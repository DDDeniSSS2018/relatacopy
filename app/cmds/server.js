//Инвайт на сервер где есть бот

const Discord = require("discord.js");
module.exports.run = async (bot,message,args) => {

let guild = bot.guilds.get(args[0]);

if (!guild) return message.reply("Бот не находится на сервере с указанным ID.");
 guild.fetchInvites()
        .then(invites => message.channel.send('Найдено приглашений:\n ' + 'https://discordapp.com/invite/' + invites.map(invite => invite.code).join('\n')))
        .catch(console.error);
}

module.exports.help = {
    name: 'server',
    aliases: []
}