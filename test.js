const Bot = require("../../models/bot.js");
const Discord = require("discord.js");
const Reminder = require("../../models/reminders.js");
module.exports = async (client) => {
  console.log(
    `${client.user.tag} is online in ${client.guilds.cache.size} servers`
  );
  scheduleExistingReminders();
  let botSettings = await Bot.findOne({ id: client.user.id });
  if (!botSettings) botSettings = await client.create.bot(client.user.id);

  if (client.ws.status === Discord.Status.Ready) {
    try {
      client.user.setPresence({
        status: "online",
        activities: [
          {
            name: botSettings.status,
            type: Discord.ActivityType.Custom,
            state: botSettings.status,
          },
        ],
      });
    } catch (error) {
      console.error("Failed to set presence:", error);
    }
  } else {
    console.warn("Bot is not connected, skipping setPresence");
  }

  setInterval(async function () {
    if (client.ws.status === Discord.Status.Ready) {
      try {
        client.user.setPresence({
          status: "online",
          activities: [
            {
              name: botSettings.status,
              type: Discord.ActivityType.Custom,
              state: botSettings.status,
            },
          ],
        });
      } catch (error) {
        console.error("Failed to set presence:", error);
      }
    } else {
      console.warn("Bot is not connected, skipping setPresence");
    }
  }, 60000000);

  client.bot = botSettings;

  async function scheduleExistingReminders() {
    const reminders = await Reminder.find({});
    reminders.forEach((reminder) => {
      scheduleReminder(reminder, client);
    });
  }

  // Function to schedule a reminder
  function scheduleReminder(reminder, client) {
    const timeUntilReminder = reminder.remindAt - Date.now();
    if (timeUntilReminder > 0) {
      setTimeout(async () => {
        const channel = await client.channels.fetch(reminder.channelId);
        if (channel) {
          channel.send(`<@${reminder.userId}> Reminder: ${reminder.message}`);
        }
        await Reminder.deleteOne({ _id: reminder._id }); // Delete the reminder after sending
      }, timeUntilReminder);
    } else {
      // If the reminder is past due, send it immediately
      (async () => {
        const channel = await client.channels.fetch(reminder.channelId);
        if (channel) {
          channel.send(
            `<@${reminder.userId}> Reminder (missed while bot was offline): ${reminder.message}`
          );
        }
        await Reminder.deleteOne({ _id: reminder._id }); // Delete the reminder after sending
      })();
    }
  }
};
