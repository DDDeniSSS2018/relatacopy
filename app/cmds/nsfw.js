const Discord = require("discord.js")

module.exports.run = async(bot, message, args,) => {
  let vibor = new Discord.RichEmbed()
  .setTitle("❗ Ошибка")
  .setColor("RED")
  .setDescription("уверен что хочешь этого? || Пропишите confirm для подтверждения и cancel для отмены")
    message.reply(vibor)
    const msgs = await message.channel.awaitMessages(res => res.author.id === message.author.id, {
            max: 1,
            time: 30000
        });
        if (!msgs.size || !['confirm'].includes(msgs.first().content.toLowerCase())) return message.channel.send('Время вышло!');
        if (['cancel'].includes(msgs.first().content.toLowerCase())) return message.channel.send('Отменено!')

        if (!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.channel.send('Успокойся... У тебя нет прав это сделать...');

        try {
            await message.channel.setNSFW(true, `set by ${message.author.tag}`);
        } catch (err) {
            await message.channel.send(`❎ | **${message.author.username}**, Тут ошибка возникла пока я переделывала этот канал в NSFW\`${err}\``);
        }
}

module.exports.help = {
    name: "nsfw",
}
