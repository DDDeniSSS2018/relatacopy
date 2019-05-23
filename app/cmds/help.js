const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .addField("♨️ | ❯ General","`help` `support` `invite`")
    .addField("💸 | ❯ Currency", "`timely` `xp`")
    .addField("💰 | ❯ Donate","`donate` `leaders`")
    .addField("⚙️ | ❯ Mod","`ban` `kick` `clear` `report` `unmute` `warn` `mute` `tempmute`")
    .addField("🎛️ | ❯ Admin","`addrole` `removerole` `nsfw` `say` `embed` `edit`")
    .addField("💻 | ❯ Info", "`userinfo` `top10` `roleinfo` `ping` `serverinfo` `version` `stats` `botinfo` `invitelb`")
    .addField("🎉 | ❯ Fun", "`quiz` `kalkulator` `email` `cinvite` `casino` `poll` `n-poll` `ship` `avatar` `8ball` `kill`")
    .addField("🔞 | ❯ Nsfw", "`hentai` `porngif`")
    .addField("👤 | ❯ Owner", "`mass-say` `dm` `reload`")
    .setFooter(`Relata Project | 47 commands`, bot.user.avatarURL)
    .setTimestamp()
    
    bot.send(embed);
    

};
module.exports.help = {
    name: "help"
};
