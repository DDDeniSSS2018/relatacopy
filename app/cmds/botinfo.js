const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setThumbnail(bicon)
    .addField("Имя бота", ` ${bot.user.username}`, inline)
    .addField("Создатель бота", "Imboi.#2016", inline )
    .addField("Разработчик бота", "🍏ИЛУША🍎#8971", inline)
    .addField("Сервеов", `${servsize}`, inline)
    .addField("Каналов", ` ${chansize}`, inline)
    .addField("Пользовтелей", `${usersize}`, inline)
    .addField("Bot Library", "Discord.js", inline)
    .addField("Created On", bot.user.createdAt)
    .setFooter(`Information about: ${bot.user.username}. Developed by: Лисичка#2016`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}