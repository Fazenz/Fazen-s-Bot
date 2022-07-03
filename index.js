const Discord = require ("discord.js");
//const { readdirSync } = require('fs');
const memberCount = require('./Redline/Redline counter/member-counter');
const ping = require ('./Redline/Redline ping/ping');
//const antiCrash = require('./Anticrash/Anticrash')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const Client =new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ],
    partials:[
        "CHANNEL",
        "GUILD_MEMBER",
        "GUILD_SCHEDULED_EVENT",
        "MESSAGE",
        "REACTION",
        "USER",
    ]
});

var nbTicket = 0;
var data = new SlashCommandBuilder()
    .setName("clear")
    .setDescription("commande pour supprimer des messages")
    .addIntegerOption(option =>
        option.setName("number")
            .setDescription("Nombre de Messages que vous souhaitez supprimer")
            .setRequired(true)
        );

Client.on("ready", async () => {

    console.log("Clear Command: ON");
    console.log("MemberCount: ON ")
    console.log("Ticket System: ON")
    console.log("Verification: ON")
    console.log("Commands: ON")
    console.log("Selection Menu: ON")
    console.log("Ping System: ON")
    console.log("Anti-Crash: ON")
    console.log("Anti-Hack: ON")
    console.log("System checked: \n All Ready and Running. \n Fazen's Bot Status: Ready")

    const Channel = Client.channels.cache.get('993178577690443928')
    const CommandsEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Liste des logs \nㅤ')
		.addFields(
            { name: '⚡ㅤDémarrage du Botㅤ⚡', value: 'ㅤ', inline: false },
            { name: 'Clear Command Status', value: '✅', inline: false },
            { name: 'MemberCount Status', value: '✅', inline: false },
            { name: 'Ticket System', value: '✅', inline: false },
            { name: 'Verification System', value: '✅', inline: false },
            { name: 'Commands', value: '✅', inline: false },
            { name: 'Selection Menu', value: '✅', inline: false },
            {name: 'Ping System', value: '✅', inline: false},
            {name: `Anti-Crash`, value: '✅', inline: false},
            {name: `Anti-Hack`, value: '✅\n ㅤ', inline: false},
            {name: `🕐ㅤClient Latency On Bot Startupㅤ🕐`, value: `${Math.round(Client.ws.ping)}ms \n ㅤ`, inline: false},
            {name: `🖥️ㅤSystem Checkedㅤ🖥️`, value: `⚙️ㅤ**All Ready and Running**ㅤ⚙️ \n 🤖ㅤ**Fazen's Bot Status**ㅤ🤖**:**ㅤ✅ `, inline: false}

        )
        .setTimestamp()
        .setFooter({ text: 'Powered by Fazen', iconURL: 'https://wallpapercave.com/wp/wp4471366.jpg' });
    
        Channel.send({ embeds: [CommandsEmbed] });
    

    memberCount(Client);
    ping(Client);


   

    Client.application.commands.create(data);

   var row = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
            .setCustomId("open-ticket")
            .setLabel("Ouvrir un ticket")
            .setStyle("PRIMARY")
        );

    Client.channels.cache.get("982966681511018516").send({content: 
        setColor('#0099ff')
        .setTitle('Ouvrir un ticket\nㅤ')
		.addFields(
            { name: '⚡ㅤDémarrage du Botㅤ⚡', value: 'ㅤ', inline: false }
            )
        , components: [row]});
    //(await Client.channels.fetch("987464552939679774")).send({content: "Cliquez sur le boutton pour ouvrir un ticket", components: [row]});*/
                                                     

    
    
    var interval = setInterval (function () {
        Client.user.setPresence({
       
            activities: [{
                name: 'fais !help pour en connaître plus',
                type: 'WATCHING'
            }],
            status: 'online'
    
        });
      }, 1 * 10000); 
      
 }); 

//Partie Tickets

 Client.on("interactionCreate", interaction => {
     if(interaction.isButton()){
         if(interaction.customId === "open-ticket"){
             nbTicket++;

             interaction.guild.channels.create("ticket-" + nbTicket, {
                 parent: "993154399641808906",
                 permissionOverwrites: [
                    {
                      id: interaction.user.id,
                      type: 'member',
                      allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                    },
                    {
                        id: interaction.guild.id,
                        type: 'role',
                        deny: 'VIEW_CHANNEL'
                      },
                    {
                        id: '982659694940286996',
                        type: 'role',
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                    }  
                  ]
             }).then(channel =>{
                 var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("close-ticket")
                        .setLabel("Fermer le ticket")
                        .setStyle("DANGER")
                    );

                    channel.send({content: "<@" + interaction.user.id +"> Voici votre ticket, vous pouvez le fermer en appuyant que le boutton ci-dessous", components: [row]});

                    interaction.reply({content: "Ticket correctement crée", ephemeral: true});
             });
         }
         else if(interaction.customId === "close-ticket"){
             interaction.channel.setParent("993154520571969666");

    if(message.content === prefix + "ticket"){
             var row = new Discord.MessageActionRow()
             .addComponents(new Discord.MessageButton()
                .setCustomId("delete-ticket")
                .setLabel("supprimer le ticket")
                .setStyle("DANGER")
             )};

             interaction.message.delete();

             interaction.channel.send({content: "Fermer le Ticket", components: [row]});

             interaction.reply({content: "Ticket Supprimé", ephemeral: true});
                
         }
         else if(interaction.customId === "delete-ticket" ){
             interaction.channel.delete();

             interaction.reply({content: "Ticket supprimé", ephemeral: true});

            
            
         }
     }
 });
//Partie Commande Clear

//Partie Message de Bienvenue

Client.on("guildMemberAdd", async(member) => {
    console.log("un membre est arrivé");
    member.roles.add("982225346369822741");
});


//Partie Commandes et Prefix

const prefix = "!"

Client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === prefix + "commandes"){

        message.reply("**__Voici la liste des commandes et des fonctionnalités__**\n \n  - !mute: Permet de mute un membre (réservé à l'équipe d'administration)\n \n - !ban: Permet de bannir un membre (réservé à l'équipe d'administration)\n \n  - !unmute: Permet de redonner la parole à un membre\n \n  - !staff: Permet de passer un membre en staff\n \n - !unStaff: Permet de repasser un staff en membre\n \n - !VIP: Permet de passer un membre en VIP\n \n -unVIP: Permet de passer un VIP en membre \n \n - !info: Permet de connaître mon créateur\n \n - /clear: Permet de supprimer des messages (réservé à l'équipe d'administration)\n \n - !dev+: Permet d'attribuer le rôle Développeur confirmé.\n \n -!dev-: Permet de retirer le role Développeur confirmé \n \n - !kick: Permet d'exclure un joueur du serveur sans le bannir (réservé à l'équipe d'administration.\n \n - !lien: Permet d'avoir un lien direct vers le serveur de mon créateur. ")
    }   

    if(message.content === prefix + "info"){
        message.reply("Mon créateur se nomme Fazen ! ")
    }
    if(message.content === prefix + "lien"){

        message.reply("Voici le lien d'invitation du serveur que mon créateur à choisi : - https://discord.gg/XP8JGeja5u ")
    }
    if(message.content === prefix + "help"){
        const CommandsEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Liste des fonctions\nㅤ')
        .setThumbnail('https://wallpapercave.com/wp/wp4471366.jpg')
        .setDescription('**Fais !commandes pour en savoir plus**\n ㅤ ')
        .addFields(
            { name: 'Compteur de membre', value: 'Affiche dans un salon (vocal) le nombre de membre en temps réel\n ㅤ', inline: false },
            { name: 'Message de bienvenue', value: 'Envoie un message de bienvenue et aurevoir\n ㅤ', inline: false },
            { name: 'Système de tickets', value: 'Permet à un membre de crée un ticket, le mettant en lien avec l`équipe de modération\n ㅤ', inline: false },
            { name: 'Commande Clear', value: 'Une commande en / qui permet de supprimer des messages\n ㅤ', inline: false },
            { name: 'Système de modération', value: 'Plusieurs commandes pour vous aider dans vos tâches de modération\n ㅤ', inline: false },
            { name: 'Système de rôle à choix', value: 'Vous permet via un menu déroulant de choisir vos grades\n ㅤ', inline: false },
            {name: 'Système de ping', value: 'Permet de connâitre le temps de réponse du bot\n ㅤ', inline: false},
            {name: `Version de Fazen's Bot`, value: '**__1.1__**\n ㅤ', inline: false}
        )
        .addField('C`est déjà pas mal non ? ', `D'autres mises à jour arriveront par la suite\n ㅤ`, false)
        .addField('N`hésite pas à rejoindre le serveur de mon créateur', 'https://discord.gg/XP8JGeja5u', true)
        .setTimestamp()
        .setFooter({ text: 'Powered by Fazen', iconURL: 'https://wallpapercave.com/wp/wp4471366.jpg' });
    
    message.reply({ embeds: [CommandsEmbed] });
     
    
    
    



//vérification

Client.on("messageCreate", message => {
    if(message.member.permissions.has("MANAGE_NICKNAMES")){
    if(message.content === prefix + 'bouton'){
        var row = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
            .setCustomId("bouton 1")
            .setLabel("Appuyez")
            .setStyle("SUCCESS")
            .setEmoji('✅')
        
        );
        message.channel.send({content: "Cliquez ci-dessous pour avoir accès à l'entiereté du serveur <@993156238290456706>", components: [row]});
    }


}})

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton 1"){
            interaction.member.roles.add('982659821146882049')
            interaction.member.roles.remove("993156238290456706")
            console.log("Vérification passée")
            interaction.reply({ content: 'Vérification passée, bienvenue.', ephemeral: true })
        }
    }
})
  
//Menu

Client.on("messageCreate", message => {
    if(message.author.bot) return;
    if(message.member.permissions.has("MANAGE_NICKNAMES")){
    if(message.content === prefix + 'menu1'){
    var row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
                .setCustomId("select")
                .setPlaceholder("Selectionnez un rôle")
                .addOptions([
                    {
                        label: "Noir",
                        description: "Selectionnez ce rôle si vous souhaitez ce role",
                        value: "Noir"
                    },
                    {
                        label: "Bleu",
                        description: "Selectionnez ce rôle si vous souhaitez ce role",
                        value: "Bleu"
                    },
                    {
                        label: "Blanc",
                        description: "Selectionnez ce rôle si vous souhaitez ce role",
                        value: "Blanc"
                    },
                    {
                        label: "Jaune",
                        description: "Selectionnez ce rôle si vous souhaitez ce role",
                        value: "Jaune"
                    },
                    {
                        label: "Rose",
                        description: "Selectionnez ce rôle si vous souhaitez ce role",
                        value: "Rose"
                    },
                    {
                        label: "Violet",
                        description: "Selectionnez ce rôle si vous souhaitez ce role",
                        value: "Violet"
                    },
                    {
                        label: "Vert",
                        description: "Selectionnez ce rôle si vous souhaitez ce role",
                        value: "Vert"
                    },
                    {
                        label: "Orange",
                        description: "Selectionnez ce rôle si vous souhaitez ce role",
                        value: "Orange"
                    },
                    {
                        label: "Rouge",
                        description: "Selectionnez ce rôle si vous souhaitez ce role",
                        value: "Rouge"
                    }
                ])
        );
    message.channel.send({content: "Selectionnez vos Rôles parmis cette liste", components: [row]});
}}})


Client.on("interactionCreate", interaction =>{
    if(interaction.isSelectMenu()){
        if(interaction.customId === "select"){
            console.log(interaction.values);

            if(interaction.values == "Noir"){
                interaction.member.roles.add('982659733834067989')
                interaction.reply({content: "Le role Noir vous à été attribué", ephemeral: true});
            }
            if(interaction.values == "Bleu"){
                interaction.member.roles.add('982659731690754108')
                interaction.reply({content: "Le role Bleu vous à été attribué", ephemeral: true});
            }
            if(interaction.values == "Blanc"){
                interaction.member.roles.add('982659730122104944')
                interaction.reply({content: "Le role Blanc vous à été attribué", ephemeral: true});
            }
            if(interaction.values == "Jaune"){
                interaction.member.roles.add('982659732898742292')
                interaction.reply({content: "Le role Jaune vous à été attribué", ephemeral: true});
            }
            if(interaction.values == "Rose"){
                interaction.member.roles.add('982659735578869791')
                interaction.reply({content: "Le role Rose vous à été attribué", ephemeral: true});
            }
            if(interaction.values == "Orange"){
                interaction.member.roles.add('982659736463888464')
                interaction.reply({content: "Le role Orange vous à été attribué", ephemeral: true});
            }
            if(interaction.values == "Rouge"){
                interaction.member.roles.add('982659737294352384')
                interaction.reply({content: "Le role Rouge vous à été attribué", ephemeral: true});
            }
            if(interaction.values == "Vert"){
                interaction.member.roles.add('982659738309361694')
                interaction.reply({content: "Le role Vert vous à été attribué", ephemeral: true});
            }
            if(interaction.values == "Violet"){
                interaction.member.roles.add('982659740024864809')
                interaction.reply({content: "Le role Violet vous à été attribué", ephemeral: true});
            }
        }
    }
});

Client.on("messageCreate", message => {
    if(message.author.bot) return;
    if(message.member.permissions.has("MANAGE_NICKNAMES")){
    if(message.content === prefix + 'menu2'){
    var row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
                .setCustomId("select1")
                .setPlaceholder("Selectionnez un rôle")
                .addOptions([
                    {
                        label: "Céliataire",
                        description: "Selectionnez ce rôle si vous êtes célibataire",
                        value: "celib"
                    },
                    {
                        label: "Couple",
                        description: "Selectionnez ce rôle si vous êtes en couple",
                        value: "couple"
                    },
                    {
                        label: "Compliqué",
                        description: "Selectionnez ce rôle si votre relation est compliqué",
                        value: "compliqué"
                    }
                ])
        );
    message.channel.send({content: "Selectionnez vos Rôles parmis cette liste", components: [row]});
}}})


Client.on("interactionCreate", interaction =>{
    if(interaction.isSelectMenu()){
        if(interaction.customId === "select"){
            console.log(interaction.values);

            if(interaction.values == "celib"){
                interaction.member.roles.add('982659773638012968')
                interaction.reply({content: "Le role célibataire vous à été attribué", ephemeral: true});
            }
            if(interaction.values == "couple"){
                interaction.member.roles.add('982659774485245962')
                interaction.reply({content: "Le role Couple vous à été attribué", ephemeral: true});
            }
            if(interaction.values == "compliqué"){
                interaction.member.roles.add('982659775403794502')
                interaction.reply({content: "Le role Compliqué vous à été attribué", ephemeral: true});
            }
        }
    }
});
}})

































































Client.login("OTkwNjM2MDgwNTY5MTMxMTE5.G7Iy6Q.unIgLI0akCKl4Nl6TUAHMFHB9MPIrtJ5wNKInY");

/*- Mémo:

- Mémo Rôles:

- Rôle Founder: 982225147291369473
- Rôle Bot Up: 982224834908004352
- Rôle Staff: 982224992169254932
- Rôle Bot: 983106571838038048
- Rôle Mute: 983103175282262026
- Rôle VIP: 983114918066786374
- Rôle Membre: 982224610886049885
- Rôle New Buddy: 982225346369822741
- Rôle Puni: 983109994805346384
- Rôle The Bot: 983106116017864767
- Rôle Développeur: 985634121244106843
- Rôle Jeux Vidéos: 985634242761482270
- Rôle -18 ans: 985634307773202482
- Rôle 18et +: 985634384587673691
- Rôle Développeur confirmé: 985634556847734855
- Rôle Annonces Serveur: 986730431389007914
- Rôle Annonces Bot: 986730547634135070
- Rôle: ****
- Rôle: ****

- Mémo émojis: 

👥📊✅
// Mémo caractère invisible 
-ㅤ- entre les deux 
*/
