const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let giveaway = new Discord.MessageEmbed()
      .setColor('RANDOM')    
      
    
      .addField(":tada: Giveaways Help","`,gstart <time> <winners> <prize>`\n`,gend <msgid>\n,greroll <msgid>`")
      
      
      .setTimestamp()
      .setFooter(`Izumi | pancake#6996`, client.user.displayAvatarURL());
  

    return message.channel.send(giveaway);
}

module.exports.help = {
  name: "giveaway_help"
}