module.exports = {
  name: "sıra",
  description: "Zweon",
  execute: (client, message, args) => {
     // Zweon Tarafından RealFamily'e Özel Olarak Tasarlanmıştır
    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**Kuyrukta şarkı bulamadım.**");
    } 
 // Zweon Tarafından RealFamily'e Özel Olarak Tasarlanmıştır
    message.channel.send(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
  }
};