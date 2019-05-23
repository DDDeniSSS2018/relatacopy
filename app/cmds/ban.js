const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let xdemb = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setTitle("Бан")
        .addField("Описание:", `Заблокировать нарушителя на вашем сервере`, true)
        .addField("Usage:", `.ban [user] [reason]`, true)
        .addField("Example:", `.ban @relata Нарушение многих правил`)
  const err = new Discord.RichEmbed()
  .setTitle(`❗ Ошибка`)
  .setDescription(`**У вас нету права "Банить пользователя"**`)
        if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "291221132256870400") return message.channel.send(err);

        let member = message.mentions.members.first();
        if(!member) return message.channel.send(xdemb)


    const self = new Discord.RichEmbed()
  .setTitle("❗ Ошибка")
  .setDescription(`**Вы не можете заблокировать __сами себя__**`)
        if(member.id === message.author.id) return message.channel.send(self)

        let reason = args.slice(1).join(" ");

        if(!reason) {
            res = "Причина не указана";
        } else {
            res = reason
        }

        await member.ban(reason).catch(error => message.channel.send(`Sorry, I coldn't ban because of: ${error}`));

        let bean = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setTitle(`Блокировка | ${member.user.tag}`)
        .addField("Пользовтель", member, true)
        .addField("Mодератор", message.author, true)
        .addField("Причина", res)
        .setTimestamp()

        message.channel.send(bean)

        message.delete()

      }
      module.exports.help = {
        name: "ban"
      }