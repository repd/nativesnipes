const Discord = require('discord.js');

module.exports.run = async (bot,message,args) => {

    let startMessage = new Discord.RichEmbed()
        .setTitle("Native Scrims")
        .setDescription("Match starting in 30 seconds!")
        .setColor("#c37d75")
        .setFooter("repd");

    message.channel.send({embed: startMessage});



}

module.exports.help = {
    name: "30s"
}

