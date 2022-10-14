//Compteur de membre

module.exports = (Client) => {
    const channelId = ('993160034873778216');
    const guild = Client.guilds.cache.get('980014605906608138');

    setInterval(() => {
        const channel = Client.channels.cache.get('993160034873778216');
        channel.setName(`📊 Membres: ${guild.memberCount.toLocaleString()}`);
    }, 5000);
} 
