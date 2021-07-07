module.exports = { 
    name: 'playhl2',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}playhl2',
    execute(client, message,) 
    
     {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send("No voice channel.");
      
        voiceChannel.join()
   .then(connection => {
    const dispatcher = connection.play('/home/ec2-user/GLaDOS Bot/Half-Life-Alyx-voice-lines/russell2.wav');

        dispatcher.on('start', () => {
            console.log('audio.mp3 is now playing!');
        });
        
        dispatcher.on('finish', () => {
            console.log('audio.mp3 has finished playing!');
        });
        
        // Always remember to handle errors appropriately!
        dispatcher.on('error', console.error);
   

    })}}