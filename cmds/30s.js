const Discord = require('discord.js');

module.exports.run = async (bot,message,args) => {

    let startMessage = new Discord.RichEmbed()
        .setTitle("Native Scrims")
        .setDescription("Match starting in 30 seconds!")
        .setColor("#c37d75")
        .setFooter("Announced by " + message.author.username);
    startMessage.setTimestamp()

    message.channel.send({embed: startMessage});



}

module.exports.help = {
    name: "30s"
}

