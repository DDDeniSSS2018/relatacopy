const Discord = require('discord.js'); 
 
exports.run = (bot,message,args) => {
  let pages = []; 
  let page = 1;
  message.delete().catch();
  var args = args.join(" ");
  const embed = new Discord.RichEmbed() 
    .setColor(0xffffff)
    .setFooter(`Poll by `+ message.author.tag) 
    .setDescription(`📊 ${args} `)
    .setTimestamp()
  message.channel.send(embed).then(msg => { 
    msg.react('✅').then( r => { 
     msg.react('❎')
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '👍' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '👎' && user.id === message.author.id;
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setDescription(`${args}`); 
        embed.setFooter(`Poll by`+ message.author.tag);
        embed.setTimestamp()
        msg.edit(embed) 
      })
      forwards.on('collect', r => { 
        if (page === pages.length) return; 
        page++; 
        embed.setDescription(`${args}`); 
        embed.setFooter(`Poll by `+ message.author.tag);
        embed.setTimestamp()
        msg.edit(embed) 
      }) 
    })
  })
}
module.exports.help = {
    name: "poll",
    aliases: []
};
 
