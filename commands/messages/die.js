module.exports = {
    name: 'die',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}die',
    execute(client, message) {
        let user = message.mentions.users.first(); // As a shortcut to it

        // Check if there is actually a mention
        if(!user) {
          return message.reply("You need to mention someone!");
        }
        
        // If there is a user, do this code
        message.channel.send(`${user.toString()}, kill yourself https://media.giphy.com/media/VbYj3DTDjOCXyECu8M/giphy.gif`);
        // user.toString() will convert the user object to a mention
    }}