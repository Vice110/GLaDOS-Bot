module.exports = {
    name: 'serverinfo',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}serverinfo',

    execute(client, message) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};