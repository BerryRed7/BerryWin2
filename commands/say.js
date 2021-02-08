const Discord = require ('discord.js');

exports.run = async (client, message, args) => {
  const SayMessage = args.join (' ');
  message.delete ().catch (O_o => {});
  const sayEmbed = new Discord.MessageEmbed ()
  .setDescription (SayMessage)
  .setTimestamp ()
  .setFooter (`id de quem enviou: ${message.author.id}`)
  .setColor ('RANDOM')
  
  await message.channel.send (sayEmbed)
}