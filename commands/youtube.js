const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
 // Zweon Tarafından RealFamily'e Özel Olarak Tasarlanmıştır
module.exports = {
  name: "youtube",
  description: "Zweon", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\[RealAkali Youtube kanalını gitmek için buraya tıklayın.](https://www.youtube.com/RealAkali)\n
`)
                       .setColor("#ff0000")
                      )    
}
} 