const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
 // Zweon Tarafından RealFamily'e Özel Olarak Tasarlanmıştır
module.exports = {
  name: "klipler",
 description: "enpopülerklipler", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\[#1 Gosu.]( https://clips.twitch.tv/HonorableTardyAlligatorArsonNoSexy)\n
\[#2 Dodge.](https://www.twitch.tv/realakali/clip/AssiduousEnergeticClintSSSsss-hNJWcGLrCQqLLqkP)\n
\[#3 Akaliyi Yaşıyoruz.](https://www.twitch.tv/realakali/clip/ThankfulLazyAmazonOMGScoots?filter=clips&range=all&sort=time)\n
\[Daha fazla klip için buraya tıklayın.](https://www.twitch.tv/RealAkali/clips?filter=clips&range=7d)\n
`)
                       .setColor("#FFFF00")
                      )    
}
} 
