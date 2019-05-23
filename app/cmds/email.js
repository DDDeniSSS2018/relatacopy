//Попробуй это
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
if (!args.length) return;
let mail = args.slice(1).join(" ");
message.delete();
let mem = message.guild.member(message.mentions.users.first() || bot.users.get(args[0]))
if (!mem) return;
if(mem.id === message.author.id) return message.channel.send("You can't send message your self")
var msg = message
const emailEMB = new Discord.RichEmbed()
.addField(`Author`, `${message.author.tag}`)
.addField(`Content message`, `${mail}`)
.setColor(`GREEN`)
.setDescription(`New message!`)
bot.users.get(mem.user.id).send(emailEMB)
.then(msg => {
message.channel.send({embed: {    
   color: 0x0099ff,    
   description: `**You email-message send!📨**`    
 
    }})
})
    .catch(error => { 
msg.channel.send("Hmmmm...\n**Something went wrong!**\nI have an error in my console! Please check my perms and try again!")
})
    .catch(error => { 
msg.channel.send("Hmmmm...\n**Something went wrong!**\nI have an error in my console! Please check my perms and try again!")
});
} 
module.exports.help = { name: "email"}