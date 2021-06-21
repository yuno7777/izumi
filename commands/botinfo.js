const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.MessageEmbed()
    .setColor("#FFE5B4")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Bot Name", `<a:green_tick:849451639404494888> ${bot.user.username}`, inline)
    .addField("Bot Owner", "<a:green_tick:849451639404494888> Yuno#0420", inline )
  
    
    .addField("Created On", bot.user.createdAt)
    .setFooter(`${bot.user.username}. Developed by Yuno#0420`,bot.user.displayAvatarURL())
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}