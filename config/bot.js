module.exports = {
    emojis: {
        off: ':x:',
        error: ':warning:',
        queue: ':bar_chart:',
        music: ':musical_note:',
        success: ':white_check_mark:',
    },

    discord: {
        token: '',
        prefix: '&',
        Master: "",
        Secret: "",
    },







// —— Dashboard configuration

dashboard: {
    expressSPass: "secret",
    url: "http://localhost:3000"
},

// —— Save events, messages, etc in database
logger : true,





    Presence: {
		status: "Online",
        // —— You can add unlimited number of games, or keep one only
		games: [{
            // — 'type' can be PLAYING STREAMING LISTENING WATCHING COMPETING, you need to provide Twitch URL for STREAMING
            type: "WATCHING",
            name: "You",
            url: "Hentai"
        }, {
            type: "PLAYING",
            name: "Epic Seven",
            url: "Half Life Alyx"
        }],

        // — Status will change every 15 seconds
		interval: 15
	},



    filters: ['8D', 'gate', 'haas', 'phaser', 'treble', 'tremolo', 'vibrato', 'reverse', 'karaoke', 'flanger', 'mcompand', 'pulsator', 'subboost', 'bassboost', 'vaporwave', 'nightcore', 'normalizer', 'surrounding'],
};