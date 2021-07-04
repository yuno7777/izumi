const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const client = new discord.Client({
    disableEveryone: false
  });

client.aliases = new discord.Collection();  

client.commands = new Discord.Collection();
client.config = config;

// Init discord giveaways
const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./database.json",
    updateCountdownEvery: 3000,
    default: {
        botsCanWin: false,
        embedColor: "#FFE5B4",
        reaction: "🎉"
    }
});

fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(` Event loaded: ${eventName}`);
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Discord.Collection();

/* Load all commands */
fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`Command loaded: ${commandName}`);
    });
});

client.on('guildMemberAdd', member =>{
    let embed = new Discord.MessageEmbed()
        .setDescription(':tada: **' + member.user.username + '** joined ' + member.guild.name)
        .setFooter('We are now ' + member.guild.memberCount)
    member.guild.channels.get('824642051886546964').send(embed)
});

client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})

require('http').createServer((req, res) => res.end('Im alive')).listen(3000)

// Login through the client
client.login(process.env.token);
