const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle('🔗 Links')
    .setDescription(`Links Importantes, para lista de comandos: **(prefixo)comandos**`)
    .setTimestamp()
    .setFooter(` Comando feito pelo usuario: ${message.author.username}`)
    .addFields(
        {
            name: 'adicione o bot',
            value: `[convide](https://discord.com/oauth2/authorize?client_id=786035170192261121&scope=bot&permissions=2147483647)`
        },
        {
            name: 'entre no servidor do meu criador!',
            value: `[entre](https://discord.gg/KJRkCAyhSQ)`
        },
        {
            name: 'entre no servidor de suporte!',
            value: `[entre](https://discord.gg/Nact8n3WgX)`
        },
        {
            name: "site",
            value: `[aqui](https://berrywingg.glitch.me/#)`
        },
        {
            name: 'Facebook',
            value: `[meu fb :)](https://m.facebook.com/home.php?ref=m_nux_wizard)`
        }
      )  
    message.channel.send(embed);
}