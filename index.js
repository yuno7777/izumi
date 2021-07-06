const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');


client.aliases = new Discord.Collection();  

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


/* Load all commands */
fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`Command loaded: ${commandName}`);
        if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    
    });
});


client.on("message", async message => {
 

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
  
    if (!message.member)
      message.member = message.guild.fetchMember(message);
  
    const args = message.content
      .slice(default_prefix.length)
      .trim()
      .split(/ +/g);
    const cmd = args.shift().toLowerCase();
  
    if (cmd.length === 0) return;
  
    let command = client.commands.get(cmd);
  
    if (!command) command = client.commands.get(client.aliases.get(cmd));
  
    if (command) command.run(client, message, args);
  });

// Login through the client
client.login(process.env.token);
