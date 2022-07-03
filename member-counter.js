//const Discord = require("discord.js");

/*module.exports = (Client) => {
    const channelId = ('983373482962329650')

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get('983373482962329650')
        channel.setName(`Membres: ${guild.memberCount.toLocaleString()}`)
    }

    Client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    Client.on('guildmemberRemove', (member) => updateMembers(member.guild))

    const guild = Client.guilds.cache.get('982028079188819968')
    updateMembers(guild)

}
*/

//Utile `

module.exports = (Client) => {
    const channelId = ('993160034873778216');
    const guild = Client.guilds.cache.get('980014605906608138');

    setInterval(() => {
        const channel = Client.channels.cache.get('993160034873778216');
        channel.setName(`📊 Membres: ${guild.memberCount.toLocaleString()}`);
    }, 5000);
} 