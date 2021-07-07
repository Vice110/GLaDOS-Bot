module.exports = {
    name: 'hug',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}hug',
    execute( args ,message) {
        let user = message.mentions.users.first(); // As a shortcut to it
        let mentionedUser = message.mentions.users.first();
        // Check if there is actually a mention
        if(!user) {
          return message.reply("You need to mention someone!");
        }
        const responses = ["https://tenor.com/view/peach-cat-hug-hug-up-love-mochi-mochi-peach-cat-gif-16334628", "https://tenor.com/view/warm-hug-gif-10592083", " https://tenor.com/view/hug-cuddle-comfort-love-friends-gif-5166500"];
      const reply = responses[Math.floor(Math.random() * responses.length)];
    
         message.channel.send(`${reply}`)
      }}
