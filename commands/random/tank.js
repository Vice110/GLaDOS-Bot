module.exports = {
    name: 'tank',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}tank',
    execute( args ,message) {
        
      const responses = ["https://cdn.discordapp.com/attachments/789935860073234432/814383228261236776/unknown.png", "https://cdn.discordapp.com/attachments/789935860073234432/814383390295982100/unknown.png", "https://cdn.discordapp.com/attachments/798432672179027998/814384772834131978/sample_fd73f636401302df94c07fffbcb1b0a03cc2f7fc.png", "https://cdn.discordapp.com/attachments/789935860073234432/814383546265108480/unknown.png", "https://cdn.discordapp.com/attachments/789935860073234432/814383514785939476/unknown.png", "https://cdn.discordapp.com/attachments/789935860073234432/814383503545466890/unknown.png", "https://cdn.discordapp.com/attachments/789935860073234432/814383695682338836/unknown.png"]; //responses - Each must be a string and separated by a comma. Example; "hi", "hello"
        

        
      const reply = responses[Math.floor(Math.random() * responses.length)];
      message.channel.send(`${reply}`)
    
    }}