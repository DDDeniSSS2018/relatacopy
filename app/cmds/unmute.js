const Discord = require ('discord.js');
const ms = require ('ms');
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You don't have the `Manage Messages` premission")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        let user = message.mentions.users.first();
        if(!toMute) return message.channel.sendMessage("Please mention an user or ID to mute!");

        let role = message.guild.roles.find(r => r.name === "Relata mute")
        let reason = args.slice(3).join(' ');
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("This user is not muted!");

        await toMute.removeRole(role);
  

        message.channel.send(`${user} has been unmuted!`)
      

        message.delete();

     }
    
        module.exports.help = {
            name: "unmute"
        }