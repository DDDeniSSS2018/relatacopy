const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
let errkick = new Discord.RichEmbed()
.setTitle("❗ Ошибка")
.setColor("RED")
.setDescription(`**У вас нету права "Выгнать пользовтеля"**`)
  if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "291221132256870400") return message.channel.send(errkick);
    
  let xdemb = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("Кик команда")
  .addField("Описание:", `выгнать нарушителя`, true)
  .addField("Использование:", ".kick [user] [reason]", true)
  .addField("Пример:" ,".kick @Relata💚#7283 spam")

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send("Не могу дать ему кик");
    
    let reason = args.slice(1).join(' ');
    if(!reason) {
      res = "Причина не указана";
    }
    else {
      res = `${reason}`
    }
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));

      let kick = new Discord.RichEmbed()
      .setColor("#00ff00")
      .setTitle(`Выгнат | ${member.user.tag}`)
      .addField("Пользовтель", member, true)
      .addField("Mодератор", message.author, true)
      .addField("Причина", res)
      .setTimestamp()
      .setFooter(member.id)

      message.channel.send(kick)

    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }