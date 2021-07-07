module.exports = {
    name: 'scheck',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}scheck',

    execute(client, message) {
        message.channel.send(`SARCASM CHECK COMPLETE..!`);
    },
};