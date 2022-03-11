const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
 // Zweon Tarafından RealFamily'e Özel Olarak Tasarlanmıştır
module.exports = {
  name: "twitch",
  description: "Zweon", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\[RealAkali Twitch kanalını gitmek için buraya tıklayın.](https://www.twitch.tv/RealAkali)\n
`)
                       .setColor("#660099")
                      )    
}
} 
