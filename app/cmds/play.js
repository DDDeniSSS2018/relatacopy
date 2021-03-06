const Discord = require("discord.js");
const YTDL = require("ytdl-core");

module.exports.run = async(bot,message) => {
	var args = message.content.substring().split(" ");
	var servers = {};
	
	function play(connention, message) {
        var server = servers[message.guild.id];
        server.dispatcher = connention.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
        server.queue.shift();

        server.dispatcher.on("end", function() {
            if(server.queue[0]) {
                play(connention, message);
            } else {
                connention.disconnect();
                message.channel.send("Остановлено или очередь закончилась!");
            }
        });
    }
	
	if(!message.member.voiceChannel) return message.channel.send("Пожалуйста, зайдите в голосовой чат!");
    if(!args[1]) return message.channel.send("Использование: .play [ссылка]");
    if(!servers[message.guild.id]) servers[message.guild.id] = {queue: []};
    var server = servers[message.guild.id];
    server.queue.push(args[1]);

    if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connention) {
		try {
			play(connention, message);
			message.channel.send("Добавлено в очередь!");
		} catch(e) {
			connention.disconnect();
			message.channel.send("Пожалуйста, дайте правильную ссылку!");
		}
    });
};

module.exports.help = {
    name: "play"
}