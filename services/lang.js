const lang = {
  home: {
    th: 'หน้าแรก',
    en: 'home'
  }
}

function mod(lg, lc) {
  let rt = {}
  for (let o in lg) {
    rt[o] = lg[o][lc]
  }
  return rt
}

module.exports = {
  th: mod(lang, 'th'),
  en: mod(lang, 'en')
}
