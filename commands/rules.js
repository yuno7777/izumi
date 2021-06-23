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
      .setTitle("<:pink:850727927049879582> rules <a:green_tick:849451639404494888>")
      .addField("<:lime:850727712092061736> Be respectful","You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.")
      .addField("<:lime:850727712092061736> No Inappropriate Language", "The use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.")
      .addField("<:lime:850727712092061736> No pornographic/adult/other NSFW material","This is a community server and not meant to share this kind of material.")
      .addField("<:lime:850727712092061736> Follow the Discord Community Guidelines and Terms Of Service", "You can find them here:\n[community guidelines](https://discord.com/guidelines)\n[terms of service](https://discord.com/terms)")
      .addField("<:lime:850727712092061736> Follow Dank tos","This includes but isn't limited to real money trading, autotypers, alt accounts. if you are caught violating any of these rules, we will not hesitate to report your account to DMO staff.\n[dank-memer tos](https://dankmemer.lol/rules)")
      .addField("<:lime:850727712092061736> Direct & Indirect Threats", "Threats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.")
      .setImage('https://imgur.com/rWoyyy7')

      .setTimestamp()
      .setFooter(`Rules | ©️ 2021 Kanae`, client.user.displayAvatarURL());
  

    return message.channel.send(rules);
}

module.exports.help = {
  name: "rules"
}