const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Генерауия аватара...");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("00ff00")
        .setTitle("Аватар")
        .setFooter("Запрос создал " + message.author.tag)
        .setDescription("[Ссылка на скачивание]"+mentionedUser.displayAvatarURL+")");

        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "avatar"
}