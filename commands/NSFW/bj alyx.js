module.exports = {
    name: 'bjalex',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}bjalex',
    execute( args ,message) {
        
      const responses = ["https://cdn.discordapp.com/attachments/798538789193777198/814063941621383228/image1.jpg", "https://cdn.discordapp.com/attachments/798538789193777198/814063941374050304/image0.jpg", "https://cdn.discordapp.com/attachments/798538789193777198/814063952580313108/image0.jpg", "https://cdn.discordapp.com/attachments/798538789193777198/814063928450875432/image0.jpg"]; //responses - Each must be a string and separated by a comma. Example; "hi", "hello"
        

        
      const reply = responses[Math.floor(Math.random() * responses.length)];
      message.channel.send(`${reply}`)
    
    }}