module.exports = {
    name: 'help',
    aliases: [],
    category: 'Messages',
    utilisation: '{prefix}help',

    execute(client, message) {
        message.channel.send(`
        Music Commands:
        **&play:** If given a url plays that song/playlist.
        **&skip** Skips the current song.
        **&queue:** Shows the next song.
        **&pause:** Pauses the current song.
        **&stop:** Stops the song entirely.
        -------------------------------------
        Random Commands:
        **&russianroulette:** Try it out and be surprised.
        **&scheck:** Checks the current statement 
        for sarcasm.
        ---------------------------------------------------
        NSFW Commands:
        **USE AT YOUR OWN RISK AND MAY 
        GOD HELP YOU**
        **THESE ARE ALL HENTAI**
        **&hentai:** Shows a random picture of hentai.
        **&hentaigif:** Shows a random gif of hentai.
        **&anal:** Shows a picture/gif of anal.
        **&blowjob:** Shows a picture of a blowjob.
        **&boobs:** Shows a picture of boobs.
        **&cumsluts:** Shows a  picture of someone 
        covered in cum.
        **&femdom:** Shows a picture of femdom.
        **&girlsolo:** Shows a picture of solo 
        masturbation.
        **&yuri:** Shows a picture of lesbian hentai.
        **&pussy:** Shows a picture of a pussy.
        **&pussywank:** Also masturbation.
        **&tits:** Shows a picture of tits.
        **&trap** Shows a picture of a trap.
        -----------------------------------------------
        Fun Commands:
        **&hug:** Hugs the mentioned person.
        **&kiss:** Kisses the mentioned person.
        **&cuddle:** Cuddles the mentioned person.
        **&pat:** Pats the mentioned person.
        **&poke:** Pokes the mentioned person.
        **&slap:** Slaps the mentioned person.
        **&tickle:** Tickles the mentioned person.
         `);
    },
};