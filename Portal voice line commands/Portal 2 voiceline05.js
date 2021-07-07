module.exports = { 
    name: 'playportal5',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}playportal5',
    execute(client, message,) 
    
     {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send("No voice channel.");
      
        voiceChannel.join()
   .then(connection => {
    const dispatcher = connection.play('/home/ec2-user/GLaDOS Bot/Portal voice lines/GLaDOS_chellgladoswakeup05.wav');

        dispatcher.on('start', () => {
            console.log('audio.mp3 is now playing!');
        });
        
        dispatcher.on('finish', () => {
            console.log('audio.mp3 has finished playing!');
        });
        
        // Always remember to handle errors appropriately!
        dispatcher.on('error', console.error);
   

    })}}