// =====================================================================
// FIFA DÜNYA KUPASI 2026 — DASHBOARD VERİSİ (v2)
// Bu dosya 2 saatte bir otomatik güncellenir.
// Tüm saatler Türkiye saati (TSİ). Takım adları groups ile birebir aynı olmalı.
// Kaynaklar: fifa.com, ESPN, Sky Sports, Wikipedia
// =====================================================================
window.WC_DATA = {
  lastUpdate: "12 Haziran 2026, 14:10 TSİ",
  headline_en: "No new official results yet — tonight Canada face Bosnia and Herzegovina at 22:00 TSİ, followed by USA vs Paraguay at 04:00. Mexico and South Korea still lead Group A on goal difference after Day 1. Türkiye's 26-man World Cup squad has been confirmed, featuring Arda Güler, Hakan Çalhanoğlu and Kenan Yıldız, ahead of their opener against Australia on Sunday, June 14 at 07:00 TSİ.",
  headline: "Yeni resmi sonuç yok — bu akşam TSİ 22:00'de Kanada-Bosna Hersek, gece 04:00'te ABD-Paraguay oynanacak. 1. gün sonrası A Grubu'nda Meksika ve Güney Kore averajla başı çekiyor. Türkiye'nin 26 kişilik Dünya Kupası kadrosu açıklandı (Arda Güler, Hakan Çalhanoğlu, Kenan Yıldız); 14 Haziran Pazar TSİ 07:00'de Avustralya ile ilk maça çıkılacak.",

  // ---------------- GOL KRALLIĞI ----------------
  topScorers: [
    { sira: 1, oyuncu: "Julián Quiñones", takim: "Meksika", flag: "🇲🇽", gol: 1 },
    { sira: 1, oyuncu: "Raúl Jiménez", takim: "Meksika", flag: "🇲🇽", gol: 1 },
    { sira: 1, oyuncu: "Ladislav Krejčí", takim: "Çekya", flag: "🇨🇿", gol: 1 },
    { sira: 1, oyuncu: "Hwang In-beom", takim: "Güney Kore", flag: "🇰🇷", gol: 1 },
    { sira: 1, oyuncu: "Oh Hyeon-gyu", takim: "Güney Kore", flag: "🇰🇷", gol: 1 }
  ],
  topScorersNote: "2 maç oynandı; 5 farklı oyuncu birer gol attı. Liste her güncellemede yenilenir.",
  topScorersNote_en: "2 matches played; 5 different players have scored once each. Updated regularly.",

  // ---------------- TAKIM NOTLARI (favori kartlarında gösterilir) ----------------
  teamNotes: {
    "Türkiye": "2002 dünya üçüncülüğünden bu yana ilk Dünya Kupası. Hazırlık maçlarında Kuzey Makedonya'yı 4-0, Venezuela'yı 2-1 yendi. Kamp: Mesa, Arizona. Gruptan lider çıkarsa yol: 81 → 94 → 98 → 101 → Final.",
    "İspanya": "FIFA sıralamasının 1 numarası, turnuvanın favorisi. Kura gereği Arjantin'le ancak finalde karşılaşabilir.",
    "Almanya": "E Grubu'nun açık favorisi. İlk rakibi Curaçao, tarihindeki ilk Dünya Kupası maçına çıkacak.",
    "Arjantin": "Son şampiyon. Messi 5. Dünya Kupası'nda — üst üste ikinci kupa hedefi.",
    "İngiltere": "FIFA sıralamasında 4. İlk maçı Hırvatistan'la — grubun en kritik karşılaşması.",
    "Brezilya": "Rekor 5 kez şampiyon; 2002'den beri kupa hasreti sürüyor.",
    "Fransa": "2018 şampiyonu, 2022 finalisti. Mbappé yine en büyük koz."
  },

  teamNotesEn: {
    "Türkiye": "First World Cup since finishing 3rd in 2002. Warmed up with wins over North Macedonia (4-0) and Venezuela (2-1). Base camp: Mesa, Arizona. If they top the group: 81 → 94 → 98 → 101 → Final.",
    "İspanya": "FIFA's No. 1 and tournament favourite. Due to the draw, they can only meet Argentina in the final.",
    "Almanya": "Clear favourite of Group E. First opponent Curaçao play their first ever World Cup match.",
    "Arjantin": "Defending champions. Messi's 5th World Cup — chasing back-to-back titles.",
    "İngiltere": "Ranked 4th by FIFA. Opening match vs Croatia is the group's key fixture.",
    "Brezilya": "Record 5-time champions; waiting for a title since 2002.",
    "Fransa": "2018 champions, 2022 finalists. Mbappé remains their biggest asset."
  },

  // ---------------- TÜM GRUP MAÇLARI (72 maç) ----------------
  // skor: null = oynanmadı. Oynanınca "2 - 0" formatında yazılır, "not" alanına golcüler eklenebilir.
  fixtures: [
    { iso: "2026-06-11", saat: "22:00", grup: "A", ev: "Meksika", dep: "Güney Afrika", yer: "Mexico City", skor: "2 - 0", not: "Goller: Quiñones (9'), Jiménez (66'). Maçta 3 kırmızı kart çıktı (G. Afrika'dan Sithole ve Zwane, Meksika'dan Montes) — açılış maçları tarihinde bir ilk." },
    { iso: "2026-06-12", saat: "05:00", grup: "A", ev: "Güney Kore", dep: "Çekya", yer: "Guadalajara", skor: "2 - 1", not: "Goller: Krejčí (59' - Çekya), Hwang In-beom (67'), Oh Hyeon-gyu (80')." },
    { iso: "2026-06-12", saat: "22:00", grup: "B", ev: "Kanada", dep: "Bosna Hersek", yer: "Toronto", skor: null },
    { iso: "2026-06-13", saat: "04:00", grup: "D", ev: "ABD", dep: "Paraguay", yer: "Los Angeles", skor: null },
    { iso: "2026-06-13", saat: "22:00", grup: "B", ev: "Katar", dep: "İsviçre", yer: "Santa Clara", skor: null },
    { iso: "2026-06-14", saat: "01:00", grup: "C", ev: "Brezilya", dep: "Fas", yer: "New Jersey", skor: null },
    { iso: "2026-06-14", saat: "04:00", grup: "C", ev: "Haiti", dep: "İskoçya", yer: "Boston", skor: null },
    { iso: "2026-06-14", saat: "07:00", grup: "D", ev: "Avustralya", dep: "Türkiye", yer: "Vancouver", skor: null },
    { iso: "2026-06-14", saat: "20:00", grup: "E", ev: "Almanya", dep: "Curaçao", yer: "Houston", skor: null },
    { iso: "2026-06-14", saat: "23:00", grup: "F", ev: "Hollanda", dep: "Japonya", yer: "Arlington", skor: null },
    { iso: "2026-06-15", saat: "02:00", grup: "E", ev: "Fildişi Sahili", dep: "Ekvador", yer: "Philadelphia", skor: null },
    { iso: "2026-06-15", saat: "05:00", grup: "F", ev: "İsveç", dep: "Tunus", yer: "Monterrey", skor: null },
    { iso: "2026-06-15", saat: "19:00", grup: "H", ev: "İspanya", dep: "Cape Verde", yer: "Atlanta", skor: null },
    { iso: "2026-06-15", saat: "22:00", grup: "G", ev: "Belçika", dep: "Mısır", yer: "Seattle", skor: null },
    { iso: "2026-06-16", saat: "01:00", grup: "H", ev: "S. Arabistan", dep: "Uruguay", yer: "Miami", skor: null },
    { iso: "2026-06-16", saat: "04:00", grup: "G", ev: "İran", dep: "Yeni Zelanda", yer: "Los Angeles", skor: null },
    { iso: "2026-06-16", saat: "22:00", grup: "I", ev: "Fransa", dep: "Senegal", yer: "New Jersey", skor: null },
    { iso: "2026-06-17", saat: "01:00", grup: "I", ev: "Irak", dep: "Norveç", yer: "Boston", skor: null },
    { iso: "2026-06-17", saat: "04:00", grup: "J", ev: "Arjantin", dep: "Cezayir", yer: "Kansas City", skor: null },
    { iso: "2026-06-17", saat: "07:00", grup: "J", ev: "Avusturya", dep: "Ürdün", yer: "Santa Clara", skor: null },
    { iso: "2026-06-17", saat: "20:00", grup: "K", ev: "Portekiz", dep: "DR Kongo", yer: "Houston", skor: null },
    { iso: "2026-06-17", saat: "23:00", grup: "L", ev: "İngiltere", dep: "Hırvatistan", yer: "Arlington", skor: null },
    { iso: "2026-06-18", saat: "02:00", grup: "L", ev: "Gana", dep: "Panama", yer: "Toronto", skor: null },
    { iso: "2026-06-18", saat: "05:00", grup: "K", ev: "Özbekistan", dep: "Kolombiya", yer: "Mexico City", skor: null },
    { iso: "2026-06-18", saat: "19:00", grup: "A", ev: "Çekya", dep: "Güney Afrika", yer: "Atlanta", skor: null },
    { iso: "2026-06-18", saat: "22:00", grup: "B", ev: "İsviçre", dep: "Bosna Hersek", yer: "Los Angeles", skor: null },
    { iso: "2026-06-19", saat: "01:00", grup: "B", ev: "Kanada", dep: "Katar", yer: "Vancouver", skor: null },
    { iso: "2026-06-19", saat: "04:00", grup: "A", ev: "Meksika", dep: "Güney Kore", yer: "Guadalajara", skor: null },
    { iso: "2026-06-19", saat: "22:00", grup: "D", ev: "ABD", dep: "Avustralya", yer: "Seattle", skor: null },
    { iso: "2026-06-20", saat: "01:00", grup: "C", ev: "İskoçya", dep: "Fas", yer: "Boston", skor: null },
    { iso: "2026-06-20", saat: "03:30", grup: "C", ev: "Brezilya", dep: "Haiti", yer: "Philadelphia", skor: null },
    { iso: "2026-06-20", saat: "06:00", grup: "D", ev: "Türkiye", dep: "Paraguay", yer: "Santa Clara", skor: null },
    { iso: "2026-06-20", saat: "20:00", grup: "F", ev: "Hollanda", dep: "İsveç", yer: "Houston", skor: null },
    { iso: "2026-06-20", saat: "23:00", grup: "E", ev: "Almanya", dep: "Fildişi Sahili", yer: "Toronto", skor: null },
    { iso: "2026-06-21", saat: "03:00", grup: "E", ev: "Ekvador", dep: "Curaçao", yer: "Kansas City", skor: null },
    { iso: "2026-06-21", saat: "07:00", grup: "F", ev: "Tunus", dep: "Japonya", yer: "Monterrey", skor: null },
    { iso: "2026-06-21", saat: "19:00", grup: "H", ev: "İspanya", dep: "S. Arabistan", yer: "Atlanta", skor: null },
    { iso: "2026-06-21", saat: "22:00", grup: "G", ev: "Belçika", dep: "İran", yer: "Los Angeles", skor: null },
    { iso: "2026-06-22", saat: "01:00", grup: "H", ev: "Uruguay", dep: "Cape Verde", yer: "Miami", skor: null },
    { iso: "2026-06-22", saat: "04:00", grup: "G", ev: "Yeni Zelanda", dep: "Mısır", yer: "Vancouver", skor: null },
    { iso: "2026-06-22", saat: "20:00", grup: "J", ev: "Arjantin", dep: "Avusturya", yer: "Arlington", skor: null },
    { iso: "2026-06-23", saat: "00:00", grup: "I", ev: "Fransa", dep: "Irak", yer: "Philadelphia", skor: null },
    { iso: "2026-06-23", saat: "03:00", grup: "I", ev: "Norveç", dep: "Senegal", yer: "Toronto", skor: null },
    { iso: "2026-06-23", saat: "06:00", grup: "J", ev: "Ürdün", dep: "Cezayir", yer: "Santa Clara", skor: null },
    { iso: "2026-06-23", saat: "20:00", grup: "K", ev: "Portekiz", dep: "Özbekistan", yer: "Houston", skor: null },
    { iso: "2026-06-23", saat: "23:00", grup: "L", ev: "İngiltere", dep: "Gana", yer: "Boston", skor: null },
    { iso: "2026-06-24", saat: "02:00", grup: "L", ev: "Panama", dep: "Hırvatistan", yer: "Boston", skor: null },
    { iso: "2026-06-24", saat: "05:00", grup: "K", ev: "Kolombiya", dep: "DR Kongo", yer: "Guadalajara", skor: null },
    { iso: "2026-06-24", saat: "22:00", grup: "B", ev: "İsviçre", dep: "Kanada", yer: "Vancouver", skor: null },
    { iso: "2026-06-24", saat: "22:00", grup: "B", ev: "Bosna Hersek", dep: "Katar", yer: "Seattle", skor: null },
    { iso: "2026-06-25", saat: "01:00", grup: "C", ev: "Fas", dep: "Haiti", yer: "Atlanta", skor: null },
    { iso: "2026-06-25", saat: "01:00", grup: "C", ev: "İskoçya", dep: "Brezilya", yer: "Miami", skor: null },
    { iso: "2026-06-25", saat: "04:00", grup: "A", ev: "Güney Afrika", dep: "Güney Kore", yer: "Monterrey", skor: null },
    { iso: "2026-06-25", saat: "04:00", grup: "A", ev: "Çekya", dep: "Meksika", yer: "Mexico City", skor: null },
    { iso: "2026-06-25", saat: "23:00", grup: "E", ev: "Curaçao", dep: "Fildişi Sahili", yer: "Philadelphia", skor: null },
    { iso: "2026-06-25", saat: "23:00", grup: "E", ev: "Ekvador", dep: "Almanya", yer: "New Jersey", skor: null },
    { iso: "2026-06-26", saat: "02:00", grup: "F", ev: "Tunus", dep: "Hollanda", yer: "Kansas City", skor: null },
    { iso: "2026-06-26", saat: "02:00", grup: "F", ev: "Japonya", dep: "İsveç", yer: "Arlington", skor: null },
    { iso: "2026-06-26", saat: "05:00", grup: "D", ev: "Türkiye", dep: "ABD", yer: "Los Angeles", skor: null },
    { iso: "2026-06-26", saat: "05:00", grup: "D", ev: "Paraguay", dep: "Avustralya", yer: "Santa Clara", skor: null },
    { iso: "2026-06-26", saat: "22:00", grup: "I", ev: "Norveç", dep: "Fransa", yer: "Boston", skor: null },
    { iso: "2026-06-26", saat: "22:00", grup: "I", ev: "Senegal", dep: "Irak", yer: "Toronto", skor: null },
    { iso: "2026-06-27", saat: "03:00", grup: "H", ev: "Cape Verde", dep: "S. Arabistan", yer: "Houston", skor: null },
    { iso: "2026-06-27", saat: "03:00", grup: "H", ev: "Uruguay", dep: "İspanya", yer: "Guadalajara", skor: null },
    { iso: "2026-06-27", saat: "06:00", grup: "G", ev: "Yeni Zelanda", dep: "Belçika", yer: "Vancouver", skor: null },
    { iso: "2026-06-27", saat: "06:00", grup: "G", ev: "Mısır", dep: "İran", yer: "Seattle", skor: null },
    { iso: "2026-06-28", saat: "00:00", grup: "L", ev: "Panama", dep: "İngiltere", yer: "New Jersey", skor: null },
    { iso: "2026-06-28", saat: "00:00", grup: "L", ev: "Hırvatistan", dep: "Gana", yer: "Philadelphia", skor: null },
    { iso: "2026-06-28", saat: "02:30", grup: "K", ev: "Kolombiya", dep: "Portekiz", yer: "Miami", skor: null },
    { iso: "2026-06-28", saat: "02:30", grup: "K", ev: "DR Kongo", dep: "Özbekistan", yer: "Atlanta", skor: null },
    { iso: "2026-06-28", saat: "05:00", grup: "J", ev: "Cezayir", dep: "Avusturya", yer: "Kansas City", skor: null },
    { iso: "2026-06-28", saat: "05:00", grup: "J", ev: "Ürdün", dep: "Arjantin", yer: "Arlington", skor: null }
  ],

  // ---------------- GRUPLAR VE PUAN DURUMU ----------------
  groups: {
    "A": [
      { takim: "Meksika", flag: "🇲🇽", ev: true, o: 1, g: 1, b: 0, m: 0, a: 2, y: 0, p: 3 },
      { takim: "Güney Kore", flag: "🇰🇷", o: 1, g: 1, b: 0, m: 0, a: 2, y: 1, p: 3 },
      { takim: "Çekya", flag: "🇨🇿", o: 1, g: 0, b: 0, m: 1, a: 1, y: 2, p: 0 },
      { takim: "Güney Afrika", flag: "🇿🇦", o: 1, g: 0, b: 0, m: 1, a: 0, y: 2, p: 0 }
    ],
    "B": [
      { takim: "Kanada", flag: "🇨🇦", ev: true, o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Bosna Hersek", flag: "🇧🇦", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Katar", flag: "🇶🇦", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "İsviçre", flag: "🇨🇭", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ],
    "C": [
      { takim: "Brezilya", flag: "🇧🇷", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Fas", flag: "🇲🇦", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Haiti", flag: "🇭🇹", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "İskoçya", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ],
    "D": [
      { takim: "ABD", flag: "🇺🇸", ev: true, o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Paraguay", flag: "🇵🇾", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Avustralya", flag: "🇦🇺", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Türkiye", flag: "🇹🇷", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ],
    "E": [
      { takim: "Almanya", flag: "🇩🇪", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Curaçao", flag: "🇨🇼", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Fildişi Sahili", flag: "🇨🇮", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Ekvador", flag: "🇪🇨", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ],
    "F": [
      { takim: "Hollanda", flag: "🇳🇱", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Japonya", flag: "🇯🇵", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "İsveç", flag: "🇸🇪", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Tunus", flag: "🇹🇳", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ],
    "G": [
      { takim: "Belçika", flag: "🇧🇪", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Mısır", flag: "🇪🇬", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "İran", flag: "🇮🇷", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Yeni Zelanda", flag: "🇳🇿", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ],
    "H": [
      { takim: "İspanya", flag: "🇪🇸", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Cape Verde", flag: "🇨🇻", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "S. Arabistan", flag: "🇸🇦", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Uruguay", flag: "🇺🇾", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ],
    "I": [
      { takim: "Fransa", flag: "🇫🇷", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Senegal", flag: "🇸🇳", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Irak", flag: "🇮🇶", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Norveç", flag: "🇳🇴", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ],
    "J": [
      { takim: "Arjantin", flag: "🇦🇷", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Cezayir", flag: "🇩🇿", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Avusturya", flag: "🇦🇹", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Ürdün", flag: "🇯🇴", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ],
    "K": [
      { takim: "Portekiz", flag: "🇵🇹", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "DR Kongo", flag: "🇨🇩", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Özbekistan", flag: "🇺🇿", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Kolombiya", flag: "🇨🇴", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ],
    "L": [
      { takim: "İngiltere", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Hırvatistan", flag: "🇭🇷", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Gana", flag: "🇬🇭", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Panama", flag: "🇵🇦", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ]
  },

  // ---------------- ELEME AĞACI ----------------
  bracket: {
    r32: [
      { id: 73, ev: "A 2.si", dep: "B 2.si", tarih: "29 Haz 03:00", yer: "Los Angeles" },
      { id: 74, ev: "E 1.si", dep: "3. (A/B/C/D/F)", tarih: "29 Haz 23:30", yer: "Boston" },
      { id: 75, ev: "F 1.si", dep: "C 2.si", tarih: "30 Haz 04:00", yer: "Monterrey" },
      { id: 76, ev: "C 1.si", dep: "F 2.si", tarih: "29 Haz 20:00", yer: "Houston" },
      { id: 77, ev: "I 1.si", dep: "3. (C/D/F/G/H)", tarih: "1 Tem 00:00", yer: "New Jersey" },
      { id: 78, ev: "E 2.si", dep: "I 2.si", tarih: "30 Haz 20:00", yer: "Arlington" },
      { id: 79, ev: "A 1.si", dep: "3. (C/E/F/H/I)", tarih: "1 Tem 04:00", yer: "Mexico City" },
      { id: 80, ev: "L 1.si", dep: "3. (E/H/I/J/K)", tarih: "1 Tem 19:00", yer: "Atlanta" },
      { id: 81, ev: "D 1.si", dep: "3. (B/E/F/I/J)", tarih: "2 Tem 03:00", yer: "Santa Clara", tur: true },
      { id: 82, ev: "G 1.si", dep: "3. (A/E/H/I/J)", tarih: "1 Tem 23:00", yer: "Seattle" },
      { id: 83, ev: "K 2.si", dep: "L 2.si", tarih: "3 Tem 02:00", yer: "Toronto" },
      { id: 84, ev: "H 1.si", dep: "J 2.si", tarih: "2 Tem 22:00", yer: "Los Angeles" },
      { id: 85, ev: "B 1.si", dep: "3. (E/F/G/I/J)", tarih: "3 Tem 06:00", yer: "Vancouver" },
      { id: 86, ev: "J 1.si", dep: "H 2.si", tarih: "4 Tem 01:00", yer: "Miami" },
      { id: 87, ev: "K 1.si", dep: "3. (D/E/I/J/L)", tarih: "4 Tem 04:30", yer: "Kansas City" },
      { id: 88, ev: "D 2.si", dep: "G 2.si", tarih: "2 Tem 21:00", yer: "Arlington", tur: true }
    ],
    r16: [
      { id: 89, ev: "M74 galibi", dep: "M77 galibi", tarih: "5 Tem 00:00", yer: "Philadelphia" },
      { id: 90, ev: "M73 galibi", dep: "M75 galibi", tarih: "4 Tem 20:00", yer: "Houston" },
      { id: 91, ev: "M76 galibi", dep: "M78 galibi", tarih: "5 Tem 23:00", yer: "New Jersey" },
      { id: 92, ev: "M79 galibi", dep: "M80 galibi", tarih: "6 Tem 03:00", yer: "Mexico City" },
      { id: 93, ev: "M83 galibi", dep: "M84 galibi", tarih: "6 Tem 22:00", yer: "Arlington" },
      { id: 94, ev: "M81 galibi", dep: "M82 galibi", tarih: "7 Tem 03:00", yer: "Seattle", tur: true },
      { id: 95, ev: "M86 galibi", dep: "M88 galibi", tarih: "7 Tem 19:00", yer: "Atlanta" },
      { id: 96, ev: "M85 galibi", dep: "M87 galibi", tarih: "7 Tem 23:00", yer: "Vancouver" }
    ],
    qf: [
      { id: 97, ev: "M89 galibi", dep: "M90 galibi", tarih: "9 Tem 23:00", yer: "Boston" },
      { id: 98, ev: "M93 galibi", dep: "M94 galibi", tarih: "10 Tem 22:00", yer: "Los Angeles", tur: true },
      { id: 99, ev: "M91 galibi", dep: "M92 galibi", tarih: "12 Tem 00:00", yer: "Miami" },
      { id: 100, ev: "M95 galibi", dep: "M96 galibi", tarih: "12 Tem 04:00", yer: "Kansas City" }
    ],
    sf: [
      { id: 101, ev: "M97 galibi", dep: "M98 galibi", tarih: "14 Tem 22:00", yer: "Arlington", tur: true },
      { id: 102, ev: "M99 galibi", dep: "M100 galibi", tarih: "15 Tem 22:00", yer: "Atlanta" }
    ],
    final: { id: 104, ev: "M101 galibi", dep: "M102 galibi", tarih: "19 Temmuz Pazar 22:00 TSİ", yer: "MetLife Stadyumu, New Jersey" },
    note_en: "If Türkiye top Group D, their path is: 81 → 94 → 98 → 101 → Final. (orange boxes)",
    note: "Türkiye D Grubu'nu lider bitirirse yolu: 81 → 94 → 98 → 101 → Final. (turuncu işaretli kutular)"
  },

  // ---------------- BİLGİ KUTUSU ----------------
  facts_en: [
    "First World Cup with 48 teams and 3 host nations (USA, Canada, Mexico). 104 matches in total.",
    "Top 2 of each group + the 8 best third-placed teams advance to the Round of 32.",
    "Türkiye are back at the World Cup for the first time since finishing 3rd in 2002.",
    "The final is on July 19 at MetLife Stadium, New Jersey (around 22:00 GMT+3).",
    "The opening match saw 3 red cards — a first in World Cup opening match history.",
    "Türkiye's 26-man World Cup squad has been confirmed, featuring Arda Güler, Hakan Çalhanoğlu and Kenan Yıldız."
  ],
  facts: [
    "İlk kez 48 takım ve 3 ev sahibi ülke (ABD, Kanada, Meksika). Toplam 104 maç.",
    "Her gruptan ilk 2 takım + en iyi 8 üçüncü, Son 32 turuna kalıyor.",
    "Türkiye, 2002'de aldığı dünya üçüncülüğünden bu yana ilk kez Dünya Kupası'nda.",
    "Final 19 Temmuz'da New Jersey MetLife Stadyumu'nda (TSİ 22:00 civarı).",
    "Açılış maçında 3 kırmızı kart çıktı — Dünya Kupası açılış maçlarında bir ilk.",
    "Türkiye'nin 26 kişilik Dünya Kupası kadrosu açıklandı; kadroda Arda Güler, Hakan Çalhanoğlu ve Kenan Yıldız var."
  ]
};
