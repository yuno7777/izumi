const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setColor('RANDOM')    
      
      .setTitle("Command List & Guide for the Bot")
    
      .addField("\u2000 :tada: Giveaways ","`,help giveaway`")
      .addField("\u2000 :moneybag: Heists", "`,help heist`")
      
      .addField("\u2000 <:discord_staff:856355844551213087> Utility", "`,help utility`", true)
      .addField("\u2000 :tools: Moderation", "`,help moderation`")
      .addField("\u2000 :money_with_wings: Donations", "`,help donation`")
      
      .setTimestamp()
      .setFooter(`Izumi | pancake#6996`, client.user.displayAvatarURL());
  

    return message.channel.send(help);
}

module.exports.help = {
  name: "help"
}
