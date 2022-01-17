const aoijs = require("aoi.js")
 
const bot = new aoijs.Bot({
  token: "token", 
  prefix: "prefix" 
})
bot.onMessage() // Allows Commands to Executed
bot.loadCommands(`./command/`)
bot.variables({
blacklist: "false",
name: ""
  })
bot.status({
    text: "Préfix : thepref",
    type: "PLAYING",
    status: "dnd",
    time: 12
  })
bot.onInteractionCreate() // allow the button interaction an slash command
