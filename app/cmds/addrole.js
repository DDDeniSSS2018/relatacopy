const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole <@user> <Role>
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("GREEN")
    .addField("Добавить роль", "Использование: .addrole <@user> <role>")

    message.channel.send(helpembxd);
    return;
  } 
let role = args.join(" ").slice(22);
  let xdemb = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle(`Addrole command`)
  .addField("Описание:", "Дать роль участнику", true)
  .addField("Использование:", ".аddrole [user] [role]", true)
  .addField("Пример", ".addrole @Relata member")
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);
const perm = new Discord.RichEmbed()
.setTitle("❗ Ошибка")
.setColor("RED")
.setDescription(`**У вас нет права "Управление ролями"**`)
const net = new Discord.RichEmbed()
.setTitle("❗ Ошибка")
.setColor("RED")
.setDescription(`**Такой роли нету**`)
const est = new Discord.RichEmbed()
.setTitle("❗ Ошибка")
.setColor("RED")
.setDescription(`**Этот пользователь уже __имеет такую роль__**`)
const netu = new Discord.RichEmbed()
.setTitle("❗ Ошибка")
.setColor("RED")
.setDescription(`**Такой роли __нету__**`)
let eRole = message.guild.roles.find(`name`, role);
const hive = new Discord.RichEmbed()
.setTitle("❗ Ошибка")
.setColor("RED")
.setDescription(`**${rMember.user.username} получил роль ${eRole.name}**`)
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(perm);
  if(!role) return message.channel.send(netu);
  if(!eRole) return message.channel.send(net);

  if(rMember.roles.has(eRole.id)) return message.channel.send(est);
  await(rMember.addRole(eRole.id));

    await message.channel.send(hive)

    message.delete();
  
}

module.exports.help = {
  name: "addrole",
  description: 'Add role to someone',
  usage: 'addrole <@user> <Role>'
}
