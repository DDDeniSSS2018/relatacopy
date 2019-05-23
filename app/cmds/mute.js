const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d
let errmute = new Discord.RichEmbed()
.setTitle("❗ Ошибка")
.setColor("RED")
.setDescription(`**У вас нету права "Управление сообщениями"**`)
let erruser = new Discord.RichEmbed()
.setTitle("❗ Ошибка")
.setColor("RED")
.setDescription(`**Вы не указали __нарушителя__**`)
    const self = new Discord.RichEmbed()
  .setTitle("❗ Ошибка")
  .setDescription(`**Вы не можете заглушить __сами себя__**`)
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send(erruser);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errmute)
  if (tomute.id === message.author.id) return message.channel.send(self);
  let muterole = message.guild.roles.find(`name`, "Relata mute");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Relata mute",
        color: "GREEN",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));

  message.delete();

}

module.exports.help = {
  name: "mute"
}