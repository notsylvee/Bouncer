const fs = require("fs/promises");

module.exports = {
  name: "messageCreate",
  async execute(message) {

    if (message.author.bot || !message.guild) return;
        
    const tauntsJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
    const tauntsMap = JSON.parse(tauntsJsonData);
    const taunts = tauntsMap["taunts"];
    const taunt = taunts[Math.floor(Math.random() * taunts.length)];

    const chance = Math.random() * 500;
    if (chance < 497) {
      return;
    } else {
      message.channel.send(`<:Bouncer:1395295204163981404> ${taunt.text}`).catch((err) => {return});
    };
  },
};