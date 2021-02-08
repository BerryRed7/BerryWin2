 const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif',
  'https://media.tenor.com/images/9197f2a198c6d940b0b2d80b8f5a311c/tenor.gif',
  'https://media.tenor.com/images/6083940bcb961a54a8d84d6f6ba73faf/tenor.gif',
  'https://media.tenor.com/images/44c4a3fed030e9d340d79a3ad3c8fd61/tenor.gif',
  'https://media.tenor.com/images/e5fd6389e6810cd1749e620f61e73a55/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para bater');
}
/*
message.channel.send(`${message.author.username} **acaba de bater em** ${user.username}! 😠`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('tapa')
        .setColor('RANDOM')
        .setDescription(`${message.author} acaba de bater em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('doeu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}