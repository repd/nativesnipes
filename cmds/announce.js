const Discord = require('discord.js');

module.exports.run = async (bot,message,args) => {

    let startMessage = new Discord.RichEmbed()
        .setTitle("Native Scrims")
        .setDescription("New announcements:")
        .addField("Discord link invite:",
        "https://discord.me/nativescrims")
        .setColor("#c37d75")

    message.channel.send({embed: startMessage});



}

module.exports.help = {
    name: "announcement"
}