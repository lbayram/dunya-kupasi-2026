// =====================================================================
// FIFA DÜNYA KUPASI 2026 — DASHBOARD VERİSİ
// Bu dosya 2 saatte bir otomatik güncellenir.
// Tüm saatler Türkiye saati (TSİ) ile verilmiştir.
// Kaynaklar: fifa.com, ESPN, Sky Sports, Wikipedia
// =====================================================================
window.WC_DATA = {
  lastUpdate: "12 Haziran 2026, 01:00 TSİ",
  tournamentDay: 2,
  headline: "Meksika açılışı 2-0 kazandı (Quiñones 9', Jiménez 67'). Bu sabah 05:00'te Güney Kore–Çekya, gece 04:00'te Türkiye'nin grubunda ABD–Paraguay var.",

  // ---------------- FAVORİ TAKIMLAR ----------------
  favorites: [
    {
      code: "TUR", flag: "🇹🇷", name: "Türkiye", group: "D",
      groupRivals: "ABD, Paraguay, Avustralya",
      status: "Henüz oynamadı — 2002'den sonra ilk Dünya Kupası!",
      position: "D Grubu: 4 takım da henüz puansız (ABD-Paraguay maçı 13 Haz 04:00)",
      nextMatch: "Avustralya — 14 Haziran Pazar, 07:00 TSİ (Vancouver)",
      fixtures: [
        { rakip: "Avustralya 🇦🇺", tarih: "14 Haz Paz 07:00", yer: "Vancouver", sonuc: null },
        { rakip: "Paraguay 🇵🇾", tarih: "20 Haz Cmt 06:00", yer: "Santa Clara", sonuc: null },
        { rakip: "ABD 🇺🇸", tarih: "26 Haz Cum 05:00", yer: "Los Angeles", sonuc: null }
      ],
      note: "Milliler kampı Mesa, Arizona'da kurdu. Gruptan çıkarsa muhtemel yol: D1 → 81 No.lu maç (Santa Clara)."
    },
    {
      code: "ESP", flag: "🇪🇸", name: "İspanya", group: "H",
      groupRivals: "Cape Verde, S. Arabistan, Uruguay",
      status: "Henüz oynamadı — FIFA sıralamasının 1 numarası, turnuvanın favorisi",
      position: "H Grubu: tüm takımlar henüz puansız (ilk maçlar 15 Haziran)",
      nextMatch: "Cape Verde — 15 Haziran Pzt, 19:00 TSİ (Atlanta)",
      fixtures: [
        { rakip: "Cape Verde 🇨🇻", tarih: "15 Haz Pzt 19:00", yer: "Atlanta", sonuc: null },
        { rakip: "S. Arabistan 🇸🇦", tarih: "21 Haz Paz 19:00", yer: "Atlanta", sonuc: null },
        { rakip: "Uruguay 🇺🇾", tarih: "27 Haz Cmt 03:00", yer: "Guadalajara", sonuc: null }
      ],
      note: "Kura gereği İspanya ve Arjantin ağacın zıt taraflarında: ikisi de grubunu kazanırsa ancak finalde karşılaşabilirler."
    },
    {
      code: "GER", flag: "🇩🇪", name: "Almanya", group: "E",
      groupRivals: "Curaçao, Fildişi Sahili, Ekvador",
      status: "Henüz oynamadı — grubun açık favorisi",
      position: "E Grubu: tüm takımlar henüz puansız (ilk maçlar 14 Haziran)",
      nextMatch: "Curaçao — 14 Haziran Paz, 20:00 TSİ (Houston)",
      fixtures: [
        { rakip: "Curaçao 🇨🇼", tarih: "14 Haz Paz 20:00", yer: "Houston", sonuc: null },
        { rakip: "Fildişi Sahili 🇨🇮", tarih: "20 Haz Cmt 23:00", yer: "Toronto", sonuc: null },
        { rakip: "Ekvador 🇪🇨", tarih: "25 Haz Per 23:00", yer: "New Jersey", sonuc: null }
      ],
      note: "Curaçao turnuva tarihindeki ilk Dünya Kupası maçına çıkacak."
    },
    {
      code: "ARG", flag: "🇦🇷", name: "Arjantin", group: "J",
      groupRivals: "Cezayir, Avusturya, Ürdün",
      status: "Henüz oynamadı — son şampiyon, kupayı koruma peşinde",
      position: "J Grubu: tüm takımlar henüz puansız (ilk maçlar 16-17 Haziran)",
      nextMatch: "Cezayir — 17 Haziran Çar, 04:00 TSİ (Kansas City)",
      fixtures: [
        { rakip: "Cezayir 🇩🇿", tarih: "17 Haz Çar 04:00", yer: "Kansas City", sonuc: null },
        { rakip: "Avusturya 🇦🇹", tarih: "22 Haz Pzt 20:00", yer: "Arlington", sonuc: null },
        { rakip: "Ürdün 🇯🇴", tarih: "28 Haz Paz 05:00", yer: "Arlington", sonuc: null }
      ],
      note: "Messi 5. Dünya Kupası'nda — 2022 Katar'ın ardından üst üste ikinci kupa hedefi."
    },
    {
      code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "İngiltere", group: "L",
      groupRivals: "Hırvatistan, Gana, Panama",
      status: "Henüz oynamadı — FIFA sıralamasında 4. sıradaki güçlü aday",
      position: "L Grubu: tüm takımlar henüz puansız (ilk maçlar 17-18 Haziran)",
      nextMatch: "Hırvatistan — 17 Haziran Çar, 23:00 TSİ (Dallas/Arlington)",
      fixtures: [
        { rakip: "Hırvatistan 🇭🇷", tarih: "17 Haz Çar 23:00", yer: "Arlington", sonuc: null },
        { rakip: "Gana 🇬🇭", tarih: "23 Haz Sal 23:00", yer: "Boston", sonuc: null },
        { rakip: "Panama 🇵🇦", tarih: "28 Haz Paz 00:00", yer: "New Jersey", sonuc: null }
      ],
      note: "İlk maç İngiltere-Hırvatistan, grubun en kritik karşılaşması."
    }
  ],

  // ---------------- GOL KRALLIĞI ----------------
  topScorers: [
    { sira: 1, oyuncu: "Julián Quiñones", takim: "Meksika", flag: "🇲🇽", gol: 1 },
    { sira: 1, oyuncu: "Raúl Jiménez", takim: "Meksika", flag: "🇲🇽", gol: 1 }
  ],
  topScorersNote: "Turnuva henüz başladı; tek maç oynandı. Liste her sabah güncellenir.",

  // ---------------- BUGÜNÜN MAÇLARI (TSİ) ----------------
  todayLabel: "12 Haziran Cuma (TSİ)",
  todayMatches: [
    { saat: "05:00", grup: "A", ev: "🇰🇷 Güney Kore", dep: "🇨🇿 Çekya", yer: "Guadalajara, Meksika", durum: "bekliyor" },
    { saat: "22:00", grup: "B", ev: "🇨🇦 Kanada", dep: "🇧🇦 Bosna Hersek", yer: "Toronto, Kanada", durum: "bekliyor" }
  ],
  tonightMatches: [
    { saat: "13 Haz 04:00", grup: "D", ev: "🇺🇸 ABD", dep: "🇵🇾 Paraguay", yer: "Los Angeles (SoFi)", not: "Türkiye'nin grubundaki ilk maç — takip et!" }
  ],

  // ---------------- SON SONUÇLAR ----------------
  recentResults: [
    { tarih: "11 Haz", grup: "A", ev: "🇲🇽 Meksika", dep: "🇿🇦 Güney Afrika", skor: "2 - 0", not: "Goller: Quiñones (9') ve Jiménez. Maçta 3 kırmızı kart çıktı — açılış maçları tarihinde bir ilk." }
  ],

  // ---------------- GRUPLAR VE PUAN DURUMU ----------------
  // o:1/2 ilk iki (Son 32'ye direkt), o:3 en iyi 8 üçüncü ihtimali
  groups: {
    "A": [
      { takim: "Meksika", flag: "🇲🇽", ev: true, o: 1, g: 1, b: 0, m: 0, a: 2, y: 0, p: 3 },
      { takim: "Güney Kore", flag: "🇰🇷", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Çekya", flag: "🇨🇿", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
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
      { takim: "Türkiye", flag: "🇹🇷", fav: true, o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ],
    "E": [
      { takim: "Almanya", flag: "🇩🇪", fav: true, o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
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
      { takim: "İspanya", flag: "🇪🇸", fav: true, o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
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
      { takim: "Arjantin", flag: "🇦🇷", fav: true, o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
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
      { takim: "İngiltere", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", fav: true, o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Hırvatistan", flag: "🇭🇷", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Gana", flag: "🇬🇭", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Panama", flag: "🇵🇦", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 }
    ]
  },

  // ---------------- ELEME AĞACI ----------------
  // Takımlar belli oldukça "ev"/"dep" alanlarına gerçek isimler yazılır.
  // Format: A1 = A Grubu birincisi, A2 = ikincisi, 3.(B/E..) = üçüncülerden biri
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
    note: "Türkiye D Grubu'nu lider bitirirse yolu: 81 → 94 → 98 → 101 → Final. (turuncu işaretli kutular)"
  },

  // ---------------- BİLGİ KUTUSU ----------------
  facts: [
    "İlk kez 48 takım ve 3 ev sahibi ülke (ABD, Kanada, Meksika). Toplam 104 maç.",
    "Her gruptan ilk 2 takım + en iyi 8 üçüncü, Son 32 turuna kalıyor.",
    "Türkiye, 2002'de aldığı dünya üçüncülüğünden bu yana ilk kez Dünya Kupası'nda.",
    "Final 19 Temmuz'da New Jersey MetLife Stadyumu'nda (TSİ 22:00 civarı).",
    "Açılış maçında 3 kırmızı kart çıktı — Dünya Kupası açılış maçlarında bir ilk."
  ]
};
