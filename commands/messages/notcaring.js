module.exports = {
    name: 'care',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}care',

    execute(client, message) {
        message.channel.send(`No, no one cares what so ever,`);
    },
};