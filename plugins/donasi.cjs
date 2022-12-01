var handler = async m => m.reply(`
╭─「 Donasi 」
│ • INDOSAT [6285607831412]
│ • DANA [6285607831412]
│ • OVO [6285607831412]
│ • GOPAY [6285607831412]
│ • SHOPPY PAY [6285607831412]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285607831412
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
