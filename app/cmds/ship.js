const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let user1 = args[0];
    let user2 = args.slice(1).join(' ');
    if (!user1) return message.channel.send("You did not specify 1 goal for hiding")
    if (!user2) return message.channel.send("You did not specify 2 goal for hiding")
    var ship = Math.floor(Math.random() * 100) + 1;
    if (ship <= 50) {
        const badmatch = new Discord.RichEmbed()
            .setColor(0x00A2E8)
            .setTitle(user1 + " and " + user2 + " don't look good together")
            .setDescription(":broken_heart: " + ship + "% :broken_heart:");
        message.channel.send(badmatch);
    } else if (ship === 100) {
        const perfectmatch = new Discord.RichEmbed()
            .setColor(0x00A2E8)
            .setTitle(user1 + " and " + user2 + "match each other")
            .setDescription(":heart: " + ship + "% :heart:");
        message.channel.send(perfectmatch);
    } else {
        const match = new Discord.RichEmbed()
            .setColor(0x00A2E8)
            .setTitle(user1 + " and " + user2 + " this is something!")
            .setDescription(":heart: " + ship + "% :heart:")
        message.channel.send(match);
    }
}

module.exports.help = {
    name: "ship"
}
