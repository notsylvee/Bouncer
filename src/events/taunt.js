const { PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.bot || !message.guild) return;
        if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
        const chance = Math.random() * 500;
        const taunts = [
          "YOU WON'T GET AWAY FROM ME THAT EASY, YE PILFERING PARASITES!",
          "GET BACK 'ERE', YOU RAT!",
          "YER A GOWK FOR RUNNING, PAL!",
          "COME HERE, YE PILFERING SWINE!",
          "YER NOTHING BUT A SOUR-BONED SASSONACK!",
          "TAKE THIS, YE BLOODY VERMIN!",
          "OPEN THE GATE! YE BLISTERING BARNACLES!",
          "Come back when ye've learned to read, ya nimwit!",
          "And stay out, ye frollocking fleshbag!",
          "WHAT ARE YE, A TWO TIMING TROGLODYTE? YOU'RE NOT PERMITTED INTO THIS PARTY!",
          "OH LOVELY! WE'RE DEALING WITH A MOR-OOOONNN!!! GET BACK HERE YE DEADBEAT!",
          "Get out of here, sour-face."
        ];
        const taunt = taunts[Math.floor(Math.random() * taunts.length)];
        if (chance < 497) {
            return;
          } else {
            message.channel.send(`${taunt}`);
          };
    },
};