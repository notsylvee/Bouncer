const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    client.user.setPresence({
      status: "dnd",
      activities: [
        {
          type: ActivityType.Custom,
          name: "customstatus",
          state: "YER NOTHING BUT A SOUR-BONED SASSONACK!",
        },
      ],
    });

    const updates = await client.channels.fetch("1344570100589662268");
    updates.send("I am now online/have been updated!");
  },
};