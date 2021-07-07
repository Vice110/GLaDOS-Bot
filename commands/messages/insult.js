module.exports = {
    name: 'russianroulette',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}russianroulette',
    execute( args ,message) {
        
      const responses = ["You are a tumor.", "You are very lovely", "Kill yourself."]; //responses - Each must be a string and separated by a comma. Example; "hi", "hello"
        

        
      const reply = responses[Math.floor(Math.random() * responses.length)];
      message.channel.send(`${reply}`)
    
    }}