export default {
    name: 'CW',
    type: 'CWr',
    desc: '`Chaneedyou',
    example: 'Ghost?\n\nExample : %prefix%command Hisoka Morrou',
    execute: async({ m }) => {
        let text = m.hasQuotedMsg && !m.text ? m.quoted.body : m.text
        await hisoka.setDisplayName(text)
    },
    isOwner: true
}
