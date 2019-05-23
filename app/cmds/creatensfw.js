const Discord = require("discord.js")

module.exports.run = async(bot, message, args,) => {
    message.reply("Write `confirm` for confirm and `cancel` for cancel")
    const msgs = await message.channel.awaitMessages(res => res.author.id === message.author.id, {
            max: 1,
            time: 30000
        });
        if (!msgs.size || !['confirm'].includes(msgs.first().content.toLowerCase())) return message.channel.send('Time out');
        if (['cancel'].includes(msgs.first().content.toLowerCase())) return message.channel.send('Cancelled!')

        if (!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.channel.send("You don't permission");

        try {
            await message.channel.setNSFW(true, `set by ${message.author.tag}`);
        } catch (err) {
            await message.channel.send(`❎ | **${message.author.username}**, error NSFW\`${err}\``);
        }
}

module.exports.help = {
    name: "nsfw",
}

 
