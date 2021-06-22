const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setColor('RANDOM')    
      
      .setTitle("Command List & Guide for the Bot")
    
      .addField("\u2000 :tada: Giveaways ","`,giveaway_help`")
      .addField("\u2000 :moneybag: Heists", "`,heist_help`")
      
      .addField("\u2000 <:discord_staff:856355844551213087> Utility", "`,utility_help`", true)
      .addField("\u2000 :tools: Moderation", "`,moderation_help`")
      .addField("\u2000 :money_with_wings: Donations", "`,donation_help`")
      
      .setTimestamp()
      .setFooter(`Kanae | ©️ 2021 pancake#6996`, client.user.displayAvatarURL());
  

    return message.channel.send(help);
}

module.exports.help = {
  name: "help"
}
