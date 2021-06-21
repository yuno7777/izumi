const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let giveaway = new Discord.MessageEmbed()
      .setColor('RANDOM')    
      
    
      .addField(":moneybag: Heist Help","`,heist <amount> <time>`")
      
      
      .setTimestamp()
      .setFooter(`Izumi | pancake#6996`, client.user.displayAvatarURL());
  

    return message.channel.send(giveaway);
}

module.exports.help = {
  name: "heist_help"
}