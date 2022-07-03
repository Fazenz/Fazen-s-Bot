const Discord = require ("discord.js");
const { MessageEmbed, Client } = require("discord.js");
const prefix = "!"

module.exports = (Client, message, args) => {
    Client.on('messageCreate', message => {
        if(message.author.bot) return;
        if(message.content === prefix + "ping"){

            const embed = new MessageEmbed()
            .setTitle('⚙️ㅤPing du botㅤ⚙️')
            .setDescription('Voici toutes les latences liées au 🤖')

            .addField("Latence de l'API ", `${Date.now() - message.createdTimestamp}ms`, true)
            .addField("Latence du client ", `${Math.round(Client.ws.ping)}ms`, true)

            message.channel.send({ embeds: [embed] });
        }
      
        }

    )};




   //${Date.now() - message.createdTimestamp}ms
   //${Math.round(Client.ws.ping)}ms