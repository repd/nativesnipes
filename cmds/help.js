const Discord = require('discord.js');

module.exports.run = async (bot,message,args) => {

    let startMessage = new Discord.RichEmbed()
        .setTitle("Native Scrims")
        .setDescription("The commands are:")
        .addField("!start",
        "Starts a scrim.")
        .addField("!300s",
        "Announces that the next scrim is in 300s.")
        .addField("!60s",
        "Announces that the next scrim is in 60s.")
        .addField("!30s",
        "Announces that the next scrim is in 30s.")
        .addField("!now",
        "Announces that the next scrim beggining now.")
        .setColor("#c37d75")
        .setFooter("repd");

    message.channel.send({embed: startMessage});



}

module.exports.help = {
    name: "help"
}

