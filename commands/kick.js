const discord = require('discord.js')
module.exports = { 
    name: "kick",
    description: "kicka alguém",
    run: async(client, message, args) => {
	  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não tem permissão para usar este comando!")
        let target = message.mentions.members.first()

        if(!target) return message.reply("Mencione alguém para kickar!")

        if(target.id === message.author.id) {
            return message.reply("Você não pode se kickar!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Por favor, dê um motivo!")

        let embed = new discord.MessageEmbed()
        .setTitle("Membro kickado")
        .setDescription("quem mandou quebrar as regras <:bravo:790623836806316032>")
        .addField("Alvo", target.user.tag)
        .addField("Administrador", message.author.tag)
        .addField("Motivo", `${reason}`)
        await message.channel.send(embed)
        await target.kick(reason)
    }
}