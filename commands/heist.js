const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.member.hasPermission('MANAGE_GUILD') && !message.member.roles.cache.some((r) => r.name === "・heist manager")){
        return message.channel.send('You need to have the manage server permissions to start heists.');
    }
    if(!message.content.startsWith(prefix)) return;
    const m = await message.channel.send("<@&824654448944873552>")

    let amount = args.join(" ").replace(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi, "").trim().split(" ")[0];
    let time = args.join(" ").replace(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi, "").trim().split(" ")[1];



    let heist = new Discord.MessageEmbed()
      .setColor('#FFE5B4')    
      .setTitle("<a:fh_Money:855812533155659807> Heist Time!! <a:fh_Money:855812533155659807>")
      
      .addField("<a:pinkarrow:849119402905436210> Heist Amount", `<a:DM_whitearrow:849122644439072799> Amount - ${amount}`)
      .addField("<a:pinkarrow:849119402905436210> Heist Timer", `<a:DM_whitearrow:849122644439072799> Time - ${time}`, true)
      .addField("<a:pinkarrow:849119402905436210> Things to remember:", "<a:DM_whitearrow:849122644439072799> Type `join heist` after this channel is unlocked\n<a:DM_whitearrow:849122644439072799> Withdraw `2000` before joining the heist\n<a:DM_whitearrow:849122644439072799> Use life saver before joining\n<a:DM_whitearrow:849122644439072799> We will not remove the slowmode anytime during the heist")
      .setTimestamp()
      .setFooter(`Mai Sakurajima | Developed by Levi ❅#0420`, client.user.displayAvatarURL());
  

    m.edit(heist)

    
    message.delete();
}

module.exports.help = {
  name: "heist"
}