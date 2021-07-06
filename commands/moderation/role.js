const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith('m?')) return;

    let role = new Discord.MessageEmbed()
      .setColor('#FFE5B4')   
      .setTitle("・roles <a:nyaCute2:849652058830536725>")
      .setDescription("・ping roles")
      .addField("<a:announcement:849652995888775208> <@&824662679330226278>\n<a:giveaway:850670420239712276> <@&824647117657997383>\n:tada: <@&824654902226583594>\n<a:pd_Booster:841236081567203328> <@&824671710451204136>\n<a:fh_pepeheist:850672575536693269> <@&824654448944873552>\n:bank: <@&824654648366596146>\n:jack_o_lantern: <@&824654563268624384>\n:tickets: <@&824673151140364309>\n:shopping_cart: <@&824655392998555698>\n<:DeadChat:850674059406213132> <@&824655037778493501>\n<a:SD2_Bump:850674465406189578> <@&824654592943718480>")
      
      .setFooter('Roles',message.guild.iconURL());
  

    return message.channel.send(role);
}

module.exports.help = {
  name: "role"
}