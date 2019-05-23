const Discord = require("discord.js");
const owner = '573965173925216265'; module.exports.run = async (bot, message, args) => {
if (!args.length) return;
if (message.author.id !== owner) return message.reply('You not a bot owner!')
let dmm = args.slice(1).join(" ");
message.delete();
let mem = message.guild.member(message.mentions.users.first() || bot.users.get(args[0]))
if (!mem) return;
var msg = message
bot.users.get(mem.user.id).send(dmm)
.then(msg => {
message.channel.send({embed: {    
   color: 0x0099ff,    
   description: `**Message send!✔**`    
 
    }})
})
    .catch(error => { 
msg.channel.send("Hmmmm...\n**Something went wrong!**\nI have an error in my console! Please check my perms and try again!")
})
    .catch(error => { 
msg.channel.send("Hmmmm...\n**Something went wrong!**\nI have an error in my console! Please check my perms and try again!")
});
} 
module.exports.help = { name: "dm"}