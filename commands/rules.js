const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;
    if(!message.member.hasPermission('MANAGE_GUILD') && !message.member.roles.cache.some((r) => r.name === "・server manager")){
        return message.channel.send('Seems like you dont have enough permission');

    }   

    let rules = new Discord.MessageEmbed()
      .setColor('#FFE5B4')    
      .setTitle("・rules <a:green_tick:849451639404494888>")
      .addField("1. Be respectful","You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.")
      .addField("2. No Inappropriate Language", "The use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.")
      .addField("3. No pornographic/adult/other NSFW material","This is a community server and not meant to share this kind of material.")
      .addField("4. Follow the Discord Community Guidelines and Terms Of Service", "You can find them here:\n[community guidelines](https://discord.com/guidelines)\n[terms of service](https://discord.com/terms)")
      .setTimestamp()
      .setFooter(`Mai Sakurajima | Developed by Levi ❅#0420`, client.user.displayAvatarURL());
  

    return message.channel.send(rules);
}

module.exports.help = {
  name: "rules"
}