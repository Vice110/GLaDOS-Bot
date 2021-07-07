module.exports = {
    name: 'userinfo',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}userinfo',

    execute(client, message) {
        
        
        let user = message.mentions.users.first(); // As a shortcut to it
        
        if(!user) {
            return message.reply("You need to mention someone!");
          }
          
        
        let mentionedMember = message.mentions.members.first();
        let mentionedUser = message.mentions.users.first();
        
        message.channel.send(`Your username: ${mentionedUser.username}\nYour ID: ${mentionedUser.id}\nAccount created: ${mentionedUser.createdAt}`);
    },
};