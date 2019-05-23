const Discord = require("discord.js");
var fs = require('fs'); //FileSystem
let config = JSON.parse(fs.readFileSync("./botconfig.json", "utf8")); //Config file

exports.run = (client, message, args) => {
  let time1 = args[0];
message.delete().catch();
  let args1 = message.content.slice("n-poll".length).trim().split('|'); //Setting-up arguments of command

  let choices = ["", "1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣", "7⃣", "8⃣", "9⃣"];

  let question = args1[0].trim();
  var answers = "";
  for (var i = 1; i < args1.length; i++) {
    answers += "\n" + choices[i] + " " + args1[i].trim();
  }
  console.log(question + " - " + time1 + " - " + answers);
  if (!isNaN(time1)) {
    time1 = time1 * 1000;
  } else {
    question = time1 + " " + question;
    time1 = 3600 * 1000;
  }
  console.log(question + time1);

  const embed = new Discord.RichEmbed()
    .setColor("#31D1B0")
    .setDescription(answers)
    .setFooter(`Poll by ${message.author.username}`, message.author.avatarURL);

  if (args1 === null || args1.length < 3 || args1.length > 10) {
    message.reply("invalid survey format - `mpoll <question>|<answer1>|...|<answer9>`");
  } else {
    message.channel.send('❓ **' + question + '**', {
      embed
    }).then(async function(msg) {
      for (var i = 1; i < args1.length; i++) {
        await msg.react(choices[i]);
      }

      var reactions = await msg.awaitReactions(reaction => reaction.emoji.name === '1⃣' || reaction.emoji.name === '2⃣' || reaction.emoji.name === '3⃣' || reaction.emoji.name === '4⃣' || reaction.emoji.name === '5⃣' || reaction.emoji.name === '6⃣' || reaction.emoji.name === '7⃣' || reaction.emoji.name === '8⃣' || reaction.emoji.name === '9⃣', {
        time: time1
      });

      var final = "**The survey is over!**\n\n"

      for (let i = 1; i < args.length; i++) {
        final += choices[i] + ": " + msg.reaction.get(choices[i]).count - 1 + "\n";
        console.log(final);
      }

      msg.channel.send({
        embed: {
          "title": question,
          "description": final,
          "color": 3264944,
          "footer": {
            "text": "a"
          }
        }
      });
    });
  }
}
  module.exports.help = {
    name: "n-poll"
  }
