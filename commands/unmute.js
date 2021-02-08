const discord = require('discord.js')
module.exports = {
    name: "Desmutar",
    description: "Desmuta alguém",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para usar este comando!");

        const target = message.mentions.members.first()
        if(!target) return message.reply("Mencione alguém para mutar!");

        if(target.id === message.author.id) {
            return message.reply("Você não pode se desmutar!")
        }

        let reason = args.slice(1).join(" ");
        if(!reason) return message.reply("Por favor, dê um motivo para desmutar a pessoa!")

        const memberrole = message.guild.roles.cache.find(r => r.name === "Membro")
        const mutedrole = message.guild.roles.cache.find(r => r.name === "Muted");
        if(!memberrole) return message.reply("Não achei o cargo `Membro`!")
        if(!mutedrole) return message.reply("Não achei o cargo `Muted`!")

        if(!target.roles.cache.some(r => r.name === "Muted")) {
            return message.reply("Este usuário já está desmutado!");
        }

        let embed = new discord.MessageEmbed()
        .setTitle("Membro desmutado!")
        .addField("Alvo", target.user.tag)
        .addField("Administrador", message.author.tag)
        .addField("Motivo", reason)
        await message.channel.send(embed)
        target.roles.add(memberrole)
        target.roles.remove(mutedrole)
    }
}