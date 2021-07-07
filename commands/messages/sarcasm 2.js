module.exports = {
    name: 'i love you',
    aliases: [],
    category: 'Messages',
    utilisation: 'i love you',
    execute( args ,message) {
        
      const responses = ["SARCASM DETECTED.."]; //responses - Each must be a string and separated by a comma. Example; "hi", "hello"
        

        
      const reply = responses[Math.floor(Math.random() * responses.length)];
      message.channel.send(`${reply}`)
    
    }}