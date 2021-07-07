module.exports = {
    name: 'yaoi',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}yaoi',
    execute( args ,message) {
        
      const responses = ["https://cdn.discordapp.com/attachments/798432672179027998/814379606366748693/image0.jpg", "https://cdn.discordapp.com/attachments/798538789193777198/814063952580313108/image0.jpg", "https://cdn.discordapp.com/attachments/798432672179027998/814379207114752020/image0.jpg", "https://cdn.discordapp.com/attachments/798432672179027998/814380005169692672/image0.jpg", "https://cdn.discordapp.com/attachments/798432672179027998/814379947912069150/image0.jpg", "https://cdn.discordapp.com/attachments/798432672179027998/814380377376030730/image0.jpg", "https://cdn.discordapp.com/attachments/798432672179027998/814380448113360906/image0.jpg", "https://cdn.discordapp.com/attachments/798432672179027998/814380535887298601/image0.jpg", "https://cdn.discordapp.com/attachments/798432672179027998/814380619488034816/image0.jpg", "https://cdn.discordapp.com/attachments/798432672179027998/814380745938305054/image0.jpg", "https://cdn.discordapp.com/attachments/798432672179027998/814380996924276746/image0.jpg", "https://cdn.discordapp.com/attachments/798432672179027998/814381205934964746/image0.jpg"];
        

        
      const reply = responses[Math.floor(Math.random() * responses.length)];
      message.channel.send(`${reply}`)
    
    }}