module.exports = {
    name: "slowmode",
    description: "definir slowmode de um canal.",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("você precisa ter a permissão de adm para usar este comando!")
        }
        let duration = args[0]
        if(isNaN(duration)) return message.reply("por favor dê o tempo em segundos.")
        let reason = args.slice(1).join(" ")
        if(!reason) return message.reply("por favor especifique um motivo!")
        
        message.channel.setRateLimitPerUser(duration, reason)
        message.reply(`o slowmode foi alterado para ${duration} segundos com sucesso - ${reason}`)
    }
}