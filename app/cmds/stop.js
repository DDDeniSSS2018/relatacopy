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
	
	var server = servers[message.guild.id];
	if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
};

module.exports.help = {
    name: "stop"
}