//Изменить сообщение

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Sorry, you don't permission!`)

    let msgid = args[0]
    let content = args.slice(1).join(' ')

    if (!msgid || !content) return message.channel.send(`Please, paste I'd message!`)

    await message.channel.fetchMessage(msgid)
        .then(async msg => {
            if (!msg) return message.channel.send('Message not found')
            await msg.edit(content)
        }).catch(console.error)
  message.delete();
}

module.exports.help = {
    name: 'edit'
}