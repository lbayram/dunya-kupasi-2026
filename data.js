// =====================================================================
// FIFA DÜNYA KUPASI 2026 — DASHBOARD VERİSİ (v2)
// Bu dosya 2 saatte bir otomatik güncellenir.
// Tüm saatler Türkiye saati (TSİ). Takım adları groups ile birebir aynı olmalı.
// Kaynaklar: fifa.com, ESPN, Sky Sports, Wikipedia
// =====================================================================
window.WC_DATA = {
  lastUpdate: "14 Haziran 2026, 21:15 TSİ",
  headline_en: "Germany opened their Group E campaign with a 3-1 win over debutants Curaçao at NRG Stadium in Houston: Nmecha scored after just 6 minutes, Comenencia equalised (21') with the smallest qualifying nation's first ever World Cup goal, then Schlotterbeck headed in from a corner (37') and Havertz converted a penalty deep in stoppage time (45+4'). Tonight at 23:00 TSİ the Netherlands take on Japan in Arlington, followed by Côte d'Ivoire–Ecuador (02:00) and Sweden–Tunisia (05:00). Türkiye's tournament still hinges on the June 20 game vs Paraguay after Saturday morning's 2-0 loss to Australia in Vancouver.",
  headline: "Almanya, E Grubu'na NRG Stadyumu'nda Curaçao'yu 3-1 yenerek başladı: Nmecha henüz 6. dakikada attı, Comenencia (21') turnuvaya katılan en küçük ülkenin tarihindeki ilk DK golüyle eşitledi; sonra Schlotterbeck kornerden kafayla (37') ve Havertz uzatmada penaltıdan (45+4') farkı yaptı. Bu gece 23:00 TSİ'de Arlington'da Hollanda–Japonya, ardından 02:00'de Fildişi Sahili–Ekvador ve 05:00'te İsveç–Tunus oynanacak. Türkiye'nin turu hâlâ 20 Haziran'daki Paraguay maçına bakıyor — Ay-Yıldızlılar Vancouver'da Avustralya'ya 2-0 yenilmişti.",

  // ---------------- GOL KRALLIĞI ----------------
  topScorers: [
    { sira: 1, oyuncu: "Folarin Balogun", takim: "ABD", flag: "🇺🇸", gol: 2 },
    { sira: 2, oyuncu: "Felix Nmecha", takim: "Almanya", flag: "🇩🇪", gol: 1 },
    { sira: 2, oyuncu: "Nico Schlotterbeck", takim: "Almanya", flag: "🇩🇪", gol: 1 },
    { sira: 2, oyuncu: "Kai Havertz", takim: "Almanya", flag: "🇩🇪", gol: 1 },
    { sira: 2, oyuncu: "Livano Comenencia", takim: "Curaçao", flag: "🇨🇼", gol: 1 },
    { sira: 2, oyuncu: "Vinícius Júnior", takim: "Brezilya", flag: "🇧🇷", gol: 1 },
    { sira: 2, oyuncu: "Ismael Saibari", takim: "Fas", flag: "🇲🇦", gol: 1 },
    { sira: 2, oyuncu: "John McGinn", takim: "İskoçya", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", gol: 1 },
    { sira: 2, oyuncu: "Nestory Irankunda", takim: "Avustralya", flag: "🇦🇺", gol: 1 },
    { sira: 2, oyuncu: "Connor Metcalfe", takim: "Avustralya", flag: "🇦🇺", gol: 1 }
  ],
  topScorersNote: "9 maç tamamlandı; Folarin Balogun (ABD) 2 golle tek başına lider. Almanya'nın Curaçao galibiyetinden Nmecha, Schlotterbeck ve Havertz; Curaçao adına tarihi golü atan Comenencia listeye girdi. Toplam 11 farklı oyuncu 1 gol attı.",
  topScorersNote_en: "9 matches completed; Folarin Balogun (USA) still leads alone on 2 goals. Germany's win over Curaçao added Nmecha, Schlotterbeck and Havertz; Comenencia, scorer of Curaçao's historic first World Cup goal, also features. Eleven different players are tied on one goal.",

  // ---------------- TAKIM NOTLARI (favori kartlarında gösterilir) ----------------
  teamNotes: {
    "Türkiye": "2002 dünya üçüncülüğünden sonraki ilk Dünya Kupası kötü başladı: Vancouver'da Avustralya'ya 2-0 yenildi (Irankunda 27', Metcalfe 75'). Türkiye topa daha çok sahip oldu, Bardakcı'nın şutu direkten döndü ama kaleci Patrick Beach aşılamadı. Gruptan çıkmak için 20 Haziran'daki Paraguay maçı kritik. Gruptan lider çıkarsa yol: 81 → 94 → 98 → 101 → Final.",
    "ABD": "Açılış maçında Paraguay'ı 4-1 yendi — Folarin Balogun 2 gol attı, Gio Reyna uzatmalarda farkı açtı. D Grubu'nda 3 puanla Avustralya ile birlikte zirvede; ev sahibi avantajıyla favori konumda.",
    "Avustralya": "Vancouver'da Türkiye'yi 2-0 yenerek turnuvaya güçlü başladı. Irankunda (27') Avustralya tarihinin en genç DK golcüsü oldu; Metcalfe (75') uzaktan attı. D Grubu'nda ABD ile zirvede.",
    "Kanada": "Ev sahibi Kanada, Bosna Hersek ile 1-1 berabere kalarak Dünya Kupası tarihindeki ilk puanını aldı (1986 ve 2022'de 6 maçta 6 mağlubiyet vardı).",
    "Katar": "Katar, B Grubu'nda İsviçre ile 1-1 berabere kalarak Dünya Kupası tarihindeki ilk puanını aldı — kaptan Boualem Khoukhi'nin 90+4. dakikadaki kafa golü kurtardı.",
    "İsviçre": "İsviçre, Embolo'nun 17. dakikada penaltıdan attığı golle öne geçti ve 26 şutla maça baskın kurdu, ancak Katar'ın son dakika golüyle 1-1'e razı oldu.",
    "İspanya": "FIFA sıralamasının 1 numarası, turnuvanın favorisi. Kura gereği Arjantin'le ancak finalde karşılaşabilir.",
    "Almanya": "E Grubu'na NRG Stadyumu'nda Curaçao'yu 3-1 yenerek başladı. Nmecha (6'), Schlotterbeck (37' kafa) ve Havertz (45+4' penaltı) attı; Comenencia'nın 21'de eşitlik golüne izin vermek dışında ilk yarıda baskındı. Nagelsmann'ın takımı 3 puanla E Grubu'nun zirvesinde.",
    "Arjantin": "Son şampiyon. Messi 5. Dünya Kupası'nda — üst üste ikinci kupa hedefi.",
    "İngiltere": "FIFA sıralamasında 4. İlk maçı Hırvatistan'la — grubun en kritik karşılaşması.",
    "Brezilya": "Fas ile 1-1 berabere kaldı (Saibari 21', Vinícius Júnior 32') — Alisson'un son dakika çift kurtarışı puanı korudu. Rekor 5 kez şampiyon; 2002'den beri kupa hasreti sürüyor.",
    "Fransa": "2018 şampiyonu, 2022 finalisti. Mbappé yine en büyük koz.",
    "İskoçya": "Haiti'yi McGinn'in 28. dakika golüyle 1-0 yendi — 1990'dan sonraki ilk Dünya Kupası galibiyeti. C Grubu'nda lider durumda."
  },

  teamNotesEn: {
    "Türkiye": "First World Cup since finishing 3rd in 2002 began badly: a 2-0 defeat to Australia in Vancouver (Irankunda 27', Metcalfe 75'). Türkiye dominated possession and Bardakcı hit the post, but couldn't beat goalkeeper Patrick Beach. The June 20 game vs Paraguay is now critical to reach the Round of 32. If they top the group: 81 → 94 → 98 → 101 → Final.",
    "ABD": "Opened with a 4-1 win over Paraguay — Folarin Balogun scored twice and Gio Reyna added a stoppage-time goal. Level with Australia at the top of Group D on 3 points, riding home advantage.",
    "Avustralya": "Strong start to the tournament with a 2-0 win over Türkiye in Vancouver. Irankunda (27') became Australia's youngest ever World Cup scorer; Metcalfe (75') struck from range. Level with the USA at the top of Group D.",
    "Kanada": "Hosts Canada earned their first-ever World Cup point, drawing 1-1 with Bosnia and Herzegovina (they had lost all 6 previous matches in 1986 and 2022).",
    "Katar": "Qatar earned their first-ever World Cup point with a 1-1 draw against Switzerland — captain Boualem Khoukhi's stoppage-time header (90+4') rescued the point.",
    "İsviçre": "Switzerland took the lead through Embolo's 17th-minute penalty and dominated with 26 shots, but had to settle for a 1-1 draw after Qatar's late equaliser.",
    "İspanya": "FIFA's No. 1 and tournament favourite. Due to the draw, they can only meet Argentina in the final.",
    "Almanya": "Opened their Group E campaign with a 3-1 win over Curaçao at NRG Stadium. Nmecha (6'), Schlotterbeck (37', header) and Havertz (45+4', pen) scored; aside from Comenencia's 21st-minute equaliser, Nagelsmann's side dominated the first half. Three points and top of Group E.",
    "Arjantin": "Defending champions. Messi's 5th World Cup — chasing back-to-back titles.",
    "İngiltere": "Ranked 4th by FIFA. Opening match vs Croatia is the group's key fixture.",
    "Brezilya": "Drew 1-1 with Morocco (Saibari 21', Vinícius Júnior 32') — a late Alisson double save preserved the point. Record 5-time champions, still chasing a title since 2002.",
    "Fransa": "2018 champions, 2022 finalists. Mbappé remains their biggest asset.",
    "İskoçya": "Beat Haiti 1-0 thanks to John McGinn's 28th-minute goal — their first World Cup win since 1990. They top Group C."
  },

  // ---------------- TÜM GRUP MAÇLARI (72 maç) ----------------
  // skor: null = oynanmadı. Oynanınca "2 - 0" formatında yazılır, "not" alanına golcüler eklenebilir.
  fixtures: [
    { iso: "2026-06-11", saat: "22:00", grup: "A", ev: "Meksika", dep: "Güney Afrika", yer: "Mexico City", skor: "2 - 0", not: "Goller: Quiñones (9'), Jiménez (66'). Maçta 3 kırmızı kart çıktı (G. Afrika'dan Sithole ve Zwane, Meksika'dan Montes) — açılış maçları tarihinde bir ilk." },
    { iso: "2026-06-12", saat: "05:00", grup: "A", ev: "Güney Kore", dep: "Çekya", yer: "Guadalajara", skor: "2 - 1", not: "Goller: Krejčí (59' - Çekya), Hwang In-beom (67'), Oh Hyeon-gyu (80')." },
    { iso: "2026-06-12", saat: "22:00", grup: "B", ev: "Kanada", dep: "Bosna Hersek", yer: "Toronto", skor: "1 - 1", not: "Goller: Lukić (21' - Bosna Hersek), Larin (78' - Kanada). Kanada, Dünya Kupası tarihindeki ilk puanını aldı." },
    { iso: "2026-06-13", saat: "04:00", grup: "D", ev: "ABD", dep: "Paraguay", yer: "Los Angeles", skor: "4 - 1", not: "Goller: Bobadilla (7' kendi kalesine - ABD), Balogun (31'), Balogun (45+5'), Maurício (73' - Paraguay), Reyna (90+8')." },
    { iso: "2026-06-13", saat: "22:00", grup: "B", ev: "Katar", dep: "İsviçre", yer: "Santa Clara", skor: "1 - 1", not: "Goller: Embolo (17' penaltı - İsviçre), Khoukhi (90+4' - Katar). Katar, Dünya Kupası tarihindeki ilk puanını aldı." },
    { iso: "2026-06-14", saat: "01:00", grup: "C", ev: "Brezilya", dep: "Fas", yer: "New Jersey", skor: "1 - 1", not: "Goller: Saibari (21' - Fas), Vinícius Júnior (32' - Brezilya)." },
    { iso: "2026-06-14", saat: "04:00", grup: "C", ev: "Haiti", dep: "İskoçya", yer: "Boston", skor: "0 - 1", not: "Goller: McGinn (28' - İskoçya). İskoçya, 1990'dan sonraki ilk Dünya Kupası galibiyetini aldı." },
    { iso: "2026-06-14", saat: "07:00", grup: "D", ev: "Avustralya", dep: "Türkiye", yer: "Vancouver", skor: "2 - 0", not: "Goller: Irankunda (27'), Metcalfe (75'). Irankunda, Avustralya tarihinin en genç DK golcüsü oldu. Türkiye topa daha çok sahip oldu, Bardakcı'nın şutu direkten döndü (30')." },
    { iso: "2026-06-14", saat: "20:00", grup: "E", ev: "Almanya", dep: "Curaçao", yer: "Houston", skor: "3 - 1", not: "Goller: Nmecha (6' - Almanya), Comenencia (21' - Curaçao), Schlotterbeck (37' kafa - Almanya), Havertz (45+4' penaltı - Almanya). Comenencia'nın golü, Curaçao'nun Dünya Kupası tarihindeki ilk golü oldu." },
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
      { takim: "Kanada", flag: "🇨🇦", ev: true, o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 },
      { takim: "Bosna Hersek", flag: "🇧🇦", o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 },
      { takim: "Katar", flag: "🇶🇦", o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 },
      { takim: "İsviçre", flag: "🇨🇭", o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 }
    ],
    "C": [
      { takim: "İskoçya", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", o: 1, g: 1, b: 0, m: 0, a: 1, y: 0, p: 3 },
      { takim: "Brezilya", flag: "🇧🇷", o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 },
      { takim: "Fas", flag: "🇲🇦", o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 },
      { takim: "Haiti", flag: "🇭🇹", o: 1, g: 0, b: 0, m: 1, a: 0, y: 1, p: 0 }
    ],
    "D": [
      { takim: "ABD", flag: "🇺🇸", ev: true, o: 1, g: 1, b: 0, m: 0, a: 4, y: 1, p: 3 },
      { takim: "Avustralya", flag: "🇦🇺", o: 1, g: 1, b: 0, m: 0, a: 2, y: 0, p: 3 },
      { takim: "Türkiye", flag: "🇹🇷", o: 1, g: 0, b: 0, m: 1, a: 0, y: 2, p: 0 },
      { takim: "Paraguay", flag: "🇵🇾", o: 1, g: 0, b: 0, m: 1, a: 1, y: 4, p: 0 }
    ],
    "E": [
      { takim: "Almanya", flag: "🇩🇪", o: 1, g: 1, b: 0, m: 0, a: 3, y: 1, p: 3 },
      { takim: "Fildişi Sahili", flag: "🇨🇮", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Ekvador", flag: "🇪🇨", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, p: 0 },
      { takim: "Curaçao", flag: "🇨🇼", o: 1, g: 0, b: 0, m: 1, a: 1, y: 3, p: 0 }
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
    note_en: "Türkiye lost their opener 2-0 to Australia, making the June 20 match vs Paraguay decisive for reaching the Round of 32. If they still top Group D, their path is: 81 → 94 → 98 → 101 → Final. (orange boxes)",
    note: "Türkiye, Avustralya'ya 2-0 yenilerek kötü başladı; 20 Haziran'daki Paraguay maçı eleme turuna kalmak için kritik. Yine de D Grubu'nu lider bitirirse yolu: 81 → 94 → 98 → 101 → Final. (turuncu işaretli kutular)"
  },

  // ---------------- BİLGİ KUTUSU ----------------
  facts_en: [
    "First World Cup with 48 teams and 3 host nations (USA, Canada, Mexico). 104 matches in total.",
    "Top 2 of each group + the 8 best third-placed teams advance to the Round of 32.",
    "Türkiye are back at the World Cup for the first time since finishing 3rd in 2002 — but lost their opener 2-0 to Australia in Vancouver (Irankunda 27', Metcalfe 75').",
    "The final is on July 19 at MetLife Stadium, New Jersey (around 22:00 GMT+3).",
    "Germany opened Group E with a 3-1 win over Curaçao at NRG Stadium (Nmecha 6', Schlotterbeck 37', Havertz 45+4' pen; Comenencia 21').",
    "Curaçao — the smallest nation ever to qualify for the men's World Cup — scored their first ever World Cup goal through Livano Comenencia (21')."
  ],
  facts: [
    "İlk kez 48 takım ve 3 ev sahibi ülke (ABD, Kanada, Meksika). Toplam 104 maç.",
    "Her gruptan ilk 2 takım + en iyi 8 üçüncü, Son 32 turuna kalıyor.",
    "Türkiye, 2002 dünya üçüncülüğünden sonraki ilk Dünya Kupası'na Avustralya'ya Vancouver'da 2-0 yenilerek başladı (Irankunda 27', Metcalfe 75').",
    "Final 19 Temmuz'da New Jersey MetLife Stadyumu'nda (TSİ 22:00 civarı).",
    "Almanya, E Grubu'na NRG Stadyumu'nda Curaçao'yu 3-1 yenerek başladı (Nmecha 6', Schlotterbeck 37', Havertz 45+4' pen; Comenencia 21').",
    "Curaçao, erkekler Dünya Kupası'na katılan en küçük ülke; tarihindeki ilk DK golünü Livano Comenencia 21'de attı."
  ]
};
