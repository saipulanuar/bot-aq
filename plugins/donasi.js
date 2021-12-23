let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [088279268363]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/Bear
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
