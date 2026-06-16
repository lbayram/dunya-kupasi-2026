// =====================================================================
// FIFA DÜNYA KUPASI 2026 — DASHBOARD VERİSİ (v2)
// Bu dosya 2 saatte bir otomatik güncellenir.
// Tüm saatler Türkiye saati (TSİ). Takım adları groups ile birebir aynı olmalı.
// Kaynaklar: fifa.com, ESPN, Sky Sports, Wikipedia
// =====================================================================
window.WC_DATA = {
  lastUpdate: "17 Haziran 2026, 00:13 TSİ",
  headline_en: "France beat Senegal 3-1 at MetLife (Mbappé 66' & late, Barcola 82' — Mbaye for Senegal). Group I: France leads on 3pts, Senegal 0pts. Iraq–Norway result unconfirmed. Today: Argentina vs Algeria (04:00 TST), Austria vs Jordan (07:00 TST), Portugal vs DR Congo (20:00 TST) and England vs Croatia (23:00 TST). Türkiye vs Paraguay on June 20 remains decisive.",
  headline: "Fransa, Senegal'i 3-1 yendi (Mbappé 66' ve geç, Barcola 82' — Mbaye Senegal adına). I Grubu: Fransa 3 puanla lider, Senegal 0. Irak–Norveç sonucu teyit edilemedi. Bugün: Arjantin–Cezayir (04:00), Avusturya–Ürdün (07:00), Portekiz–DR Kongo (20:00), İngiltere–Hırvatistan (23:00). Türkiye 20 Haziran'da Paraguay karşısında — kritik.",

  // ---------------- GOL KRALLIĞI ----------------
  topScorers: [
    { sira: 1, oyuncu: "Folarin Balogun", takim: "ABD", flag: "🇺🇸", gol: 2 },
    { sira: 1, oyuncu: "Kai Havertz", takim: "Almanya", flag: "🇩🇪", gol: 2 },
    { sira: 1, oyuncu: "Yasin Ayari", takim: "İsveç", flag: "🇸🇪", gol: 2 },
    { sira: 1, oyuncu: "Elijah Just", takim: "Yeni Zelanda", flag: "🇳🇿", gol: 2 },
    { sira: 1, oyuncu: "Kylian Mbappé", takim: "Fransa", flag: "🇫🇷", gol: 2 },
    { sira: 6, oyuncu: "Ramin Rezaeian", takim: "İran", flag: "🇮🇷", gol: 1 },
    { sira: 6, oyuncu: "Mohammad Mohebbi", takim: "İran", flag: "🇮🇷", gol: 1 },
    { sira: 6, oyuncu: "Keito Nakamura", takim: "Japonya", flag: "🇯🇵", gol: 1 },
    { sira: 6, oyuncu: "Daichi Kamada", takim: "Japonya", flag: "🇯🇵", gol: 1 },
    { sira: 6, oyuncu: "Amad Diallo", takim: "Fildişi Sahili", flag: "🇨🇮", gol: 1 },
    { sira: 6, oyuncu: "Alexander Isak", takim: "İsveç", flag: "🇸🇪", gol: 1 },
    { sira: 6, oyuncu: "Bradley Barcola", takim: "Fransa", flag: "🇫🇷", gol: 1 }
  ],
  topScorersNote: "17 maç tamamlandı. 5 ortak lider 2'şer gol: Balogun (ABD), Havertz (Almanya), Ayari (İsveç), Just (Yeni Zelanda) ve Mbappé (Fransa). Barcola (Fransa) 1 golle listeye girdi. Irak–Norveç ve Arjantin–Cezayir sonuçları henüz teyit edilemedi.",
  topScorersNote_en: "17 matches confirmed. Five joint leaders on 2 goals: Balogun (USA), Havertz (Germany), Ayari (Sweden), Just (New Zealand) and Mbappé (France). Barcola (France) enters with 1 goal. Iraq–Norway and Argentina–Algeria results not yet confirmed.",

  // ---------------- TAKIM NOTLARI (favori kartlarında gösterilir) ----------------
  teamNotes: {
    "Türkiye": "2002 dünya üçüncülüğünden sonraki ilk Dünya Kupası kötü başladı: Vancouver'da Avustralya'ya 2-0 yenildi (Irankunda 27', Metcalfe 75'). Türkiye topa daha çok sahip oldu, Bardakcı'nın şutu direkten döndü ama kaleci Patrick Beach aşılamadı. Gruptan çıkmak için 20 Haziran'daki Paraguay maçı kritik. Gruptan lider çıkarsa yol: 81 → 94 → 98 → 101 → Final.",
    "ABD": "Açılış maçında Paraguay'ı 4-1 yendi — Folarin Balogun 2 gol attı, Gio Reyna uzatmalarda farkı açtı. D Grubu'nda 3 puanla Avustralya ile birlikte zirvede; ev sahibi avantajıyla favori konumda.",
    "Avustralya": "Vancouver'da Türkiye'yi 2-0 yenerek turnuvaya güçlü başladı. Irankunda (27') Avustralya tarihinin en genç DK golcüsü oldu; Metcalfe (75') uzaktan attı. D Grubu'nda ABD ile zirvede.",
    "Kanada": "Ev sahibi Kanada, Bosna Hersek ile 1-1 berabere kalarak Dünya Kupası tarihindeki ilk puanını aldı (1986 ve 2022'de 6 maçta 6 mağlubiyet vardı).",
    "Katar": "Katar, B Grubu'nda İsviçre ile 1-1 berabere kalarak Dünya Kupası tarihindeki ilk puanını aldı — kaptan Boualem Khoukhi'nin 90+4. dakikadaki kafa golü kurtardı.",
    "İsviçre": "İsviçre, Embolo'nun 17. dakikada penaltıdan attığı golle öne geçti ve 26 şutla maça baskın kurdu, ancak Katar'ın son dakika golüyle 1-1'e razı oldu.",
    "İspanya": "FIFA sıralamasının 1 numarası ve Avrupa şampiyonu olan İspanya, Atlanta'da Dünya Kupası'na ilk kez katılan Cape Verde'yi aşamadı ve 0-0'da kaldı. 27 şut (7 isabetli) çekmesine rağmen 40 yaşındaki kaleci Vozinha'nın 7 kurtarışına çarptı; Ferran Torres 39. dakikada direkten döndü. Kura gereği Arjantin'le ancak finalde karşılaşabilir.",
    "Cape Verde": "Dünya Kupası'na ilk kez katılan Cape Verde, Atlanta'da favori İspanya'yı 0-0'a tuttu — turnuvanın en büyük sürprizlerinden biri. 40 yaşındaki kaleci Vozinha 7 kurtarış yaptı. H Grubu'na 1 puanla başladı.",
    "Almanya": "E Grubu'na NRG Stadyumu'nda Curaçao'yu 7-1 yenerek muhteşem başladı. Nmecha (6'), Schlotterbeck (38'), Havertz (45+5' pen ve 88'), Musiala (47'), Brown (68') ve Undav (78') gol attı; Comenencia (21') Curaçao'nun tarihi golünü kaydetti. Nagelsmann'ın takımı 3 puanla E Grubu'nun zirvesinde, turnuvanın şimdiye kadarki en farklı galibiyetlerinden birini aldı.",
    "İran": "Los Angeles'ta Yeni Zelanda ile 2-2 berabere kalan İran, nefes kesen bir maç sergiledi. Elijah Just'ın çifte golüne (7', 54') Rezaeian (32') ve Mohebbi (64') birer golle cevap verdi; Mohebbi kafasıyla tamamladığı gol Rezaeian'ın asistinden geldi. G Grubu'nda 4 takım 1'er puanda — Belçika ve Mısır maçları belirleyici olacak.",
    "Yeni Zelanda": "Los Angeles'ta İran ile 2-2 berabere kalan Yeni Zelanda, Just'ın çifte golüyle (7', 54') iki kez öne geçti ama İran iki kez yakaladı (Rezaeian 32', Mohebbi 64'). Just bu performansıyla Dünya Kupası tarihinin en golcü All Whites oyuncuları arasına girdi. G Grubu'nda 1 puanla devam ediyorlar.",
    "Arjantin": "Son şampiyon Arjantin, bu akşam 04:00 TSİ'de (yerel 21:00) Kansas City'de Cezayir karşısına çıkıyor. Messi'nin 5. ve muhtemelen son Dünya Kupası'nda üst üste ikinci kupayı hedefliyor. FIFA sıralamasında 8. olan Cezayir zor olabilir.",
    "İngiltere": "FIFA sıralamasında 4. Bu akşam 23:00 TSİ'de Hırvatistan'a karşı L Grubunu açıyor. 2022 Katar'da Yarı Final'e ulaşmış İngiltere, bu sefer kupayı hedefliyor.",
    "Brezilya": "Fas ile 1-1 berabere kaldı (Saibari 21', Vinícius Júnior 32') — Alisson'un son dakika çift kurtarışı puanı korudu. Rekor 5 kez şampiyon; 2002'den beri kupa hasreti sürüyor.",
    "Fransa": "2018 şampiyonu Fransa, I Grubu'na MetLife'da Senegal'i 3-1 yenerek 3 puanla başladı. Mbappé 66. dakikada skoru açtı, Barcola 82'de ikinci golü attı. Senegal geç gollerle 2-1'e düşürse de Mbappé ikinci golüyle skoru 3-1'e taşıdı. Mbappé 2 golle gol krallığında liderlere ortak oldu.",
    "İskoçya": "Haiti'yi McGinn'in 28. dakika golüyle 1-0 yendi — 1990'dan sonraki ilk Dünya Kupası galibiyeti. C Grubu'nda lider durumda.",
    "Hollanda": "Dallas'ta Japonya ile nefes kesen bir 2-2'ye imza attı: Van Dijk (51') ve Summerville (64') ile iki kez öne geçti, ancak Nakamura (57') ve uzatmalarda Kamada'nın (88') golleriyle her seferinde yakalandı. F Grubu'na 1 puanla başladı.",
    "Japonya": "2022'de Almanya ve İspanya'yı deviren Japonya, açılış maçında Hollanda karşısında 2-2'lik müthiş bir geri dönüş gösterdi: Nakamura (57') ve Kamada (88', Ito'nun kornerinden Ogawa'nın uzatmasıyla) golleriyle iki kez öne geçen rakibini yakaladı.",
    "Fildişi Sahili": "Ekvador'u Amad Diallo'nun 90. dakikadaki golüyle 1-0 yenerek 2014'ten sonraki ilk Dünya Kupası'na 3 puanla başladı; E Grubu'nda Almanya ile birlikte zirvede.",
    "Ekvador": "Fildişi Sahili karşısında uzun süre 0-0'ı korudu, ancak 90. dakikada Amad Diallo'nun golüyle 1-0 mağlup oldu ve E Grubu'na puansız başladı.",
    "İsveç": "Monterrey'de Tunus'u 5-1 farkla yenerek F Grubu'na 3 puanla lider başladı. Yasin Ayari iki gol kaydetti (7', 90+6'), Isak (30'), Gyökeres (59') ve Svanberg (84') de farkı açan golleri attı; Rekik (43') Tunus için tek golü buldu.",
    "Tunus": "Monterrey'de İsveç'e 5-1 farkla mağlup oldu; Omar Rekik (43') tek golü kaydetti. F Grubu'na puansız başladı.",
    "Mısır": "Seattle'da Belçika ile 1-1 berabere kaldı. Emam Ashour, Salah'ın asistiyle 19. dakikada attığı golle (A Milli Takım'daki ilk golü) Mısır'ı öne geçirdi; ancak Mohamed Hany'nin 66. dakikadaki kendi kale goluyla (Lukaku baskısı) Belçika denkleştirdi. G Grubu'na 1 puanla başladı.",
    "Belçika": "Seattle'da Mısır ile 1-1 berabere kaldı. Ashour'un 19. dakika golüyle (Salah asist) geriye düşen Belçika, Lukaku'nun baskısının yol açtığı Mohamed Hany kendi kale goluyla (66') denkliği yakaladı. G Grubu'na 1 puanla başladı. De Bruyne ilk yarıda etkisiz kaldı.",
    "S. Arabistan": "Miami'de Uruguay ile gücünü belli eden bir beraberlik: Al-Amri'nin 41. dakika golüyle öne geçti, ancak Araujo'nun 80. dakika golüyle 1-1'e razı oldu. H Grubu'nda 4 takım da 1'er puanda — son iki maç belirleyici olacak.",
    "Uruguay": "Miami'de S. Arabistan karşısında 41. dakikadan itibaren geride kalan Uruguay, Maximiliano Araujo'nun 80. dakika golüyle 1-1'e denkleştirdi. H Grubu'na 1 puanla başlayan Uruguay, İspanya ve Cape Verde ile eşit durumda.",
    "Senegal": "Senegal, MetLife'da Fransa'ya 1-3 yenilerek I Grubu'na puansız başladı. İlk yarıyı 0-0 kapattılar; ancak Mbappé (66') ve Barcola (82') golle 2-0 geride kaldılar. Mbaye geç bir golle 2-1'e düşürse de Mbappé ikinci golüyle 3-1 oldu. Norveç maçı (23 Haziran) kritik.",
    "Norveç": "Erling Haaland liderliğindeki Norveç, bu gece 01:00 TSİ'de Irak karşısında ilk Dünya Kupası maçına çıkıyor. 1998'den bu yana ilk DK katılımı olan Norveç'in şimdiye kadarki en iyi sonucu Son 16'ydı; Haaland ile bu sefer daha ileriye gitmeyi hedefliyor.",
    "Irak": "Irak, 1986'dan bu yana ilk Dünya Kupası'na bu gece 01:00 TSİ'de Norveç karşısında Boston'da başlıyor. Bolivya'yı 2-1 yenerek inter-konfederasyon play-off'tan kalifikasyonu aldılar. Büyük favoriler olmasa da tarihi fırsat peşindeler.",
    "Cezayir": "2022 Dünya Kupası'na katılamamış Cezayir, bu gece 04:00 TSİ'de Kansas City'de şampiyon Arjantin karşısında J Grubunu açıyor. FIFA sıralamasında 8. sırada olan Cezayir, Sofiane Feghouli, İslam Slimani ve Riyad Mahrez nesli kapandıktan sonra yeni kuşakla geliyor."
  },

  teamNotesEn: {
    "Türkiye": "First World Cup since finishing 3rd in 2002 began badly: a 2-0 defeat to Australia in Vancouver (Irankunda 27', Metcalfe 75'). Türkiye dominated possession and Bardakcı hit the post, but couldn't beat goalkeeper Patrick Beach. The June 20 game vs Paraguay is now critical to reach the Round of 32. If they top the group: 81 → 94 → 98 → 101 → Final.",
    "ABD": "Opened with a 4-1 win over Paraguay — Folarin Balogun scored twice and Gio Reyna added a stoppage-time goal. Level with Australia at the top of Group D on 3 points, riding home advantage.",
    "Avustralya": "Strong start to the tournament with a 2-0 win over Türkiye in Vancouver. Irankunda (27') became Australia's youngest ever World Cup scorer; Metcalfe (75') struck from range. Level with the USA at the top of Group D.",
    "Kanada": "Hosts Canada earned their first-ever World Cup point, drawing 1-1 with Bosnia and Herzegovina (they had lost all 6 previous matches in 1986 and 2022).",
    "Katar": "Qatar earned their first-ever World Cup point with a 1-1 draw against Switzerland — captain Boualem Khoukhi's stoppage-time header (90+4') rescued the point.",
    "İsviçre": "Switzerland took the lead through Embolo's 17th-minute penalty and dominated with 26 shots, but had to settle for a 1-1 draw after Qatar's late equaliser.",
    "İspanya": "FIFA's No. 1 and reigning European champions Spain were held 0-0 by World Cup debutants Cape Verde in Atlanta. Despite 27 shots (7 on target), they were repelled by 40-year-old goalkeeper Vozinha's 7 saves; Ferran Torres hit the crossbar in the 39th minute. Due to the draw, they can only meet Argentina in the final.",
    "Cape Verde": "World Cup debutants Cape Verde held favourites Spain to a 0-0 draw in Atlanta — one of the tournament's biggest shocks. Veteran goalkeeper Vozinha (40) made 7 saves. They start Group H with 1 point.",
    "Almanya": "Opened their Group E campaign in style with a 7-1 win over Curaçao at NRG Stadium. Nmecha (6'), Schlotterbeck (38'), Havertz (45+5' pen and 88'), Musiala (47'), Brown (68') and Undav (78') all scored; Comenencia (21') got Curaçao's historic goal. Nagelsmann's side top Group E after one of the tournament's biggest wins so far.",
    "İran": "Iran fought back twice to draw 2-2 with New Zealand in Los Angeles. Elijah Just gave New Zealand the lead twice (7', 54'), but Rezaeian (32') and Mohebbi (64' — a header from Rezaeian's cross) earned Iran a point each time. All four Group G teams remain level on 1 point — the Belgium and Egypt matches will be decisive.",
    "Yeni Zelanda": "New Zealand twice led through Elijah Just's brace (7', 54') but couldn't hold on, as Iran equalised twice through Rezaeian (32') and Mohebbi (64') to earn a 2-2 draw in Los Angeles. Just's double makes him one of the most prolific All Whites scorers in World Cup history. They continue on 1 point in Group G.",
    "Arjantin": "Defending champions Argentina face Algeria tonight at 04:00 TST (9 PM local) in Kansas City. Messi plays in his 5th World Cup chasing back-to-back titles, but FIFA 8th-ranked Algeria could prove a stern test.",
    "İngiltere": "Ranked 4th by FIFA. They open Group L tonight at 23:00 TST against Croatia. England reached the semifinals in Qatar 2022 and are targeting the trophy this time.",
    "Brezilya": "Drew 1-1 with Morocco (Saibari 21', Vinícius Júnior 32') — a late Alisson double save preserved the point. Record 5-time champions, still chasing a title since 2002.",
    "Fransa": "2018 champions France opened Group I with a 3-1 win over Senegal at MetLife. Mbappé scored in the 66th minute, Barcola added a second in the 82nd. Mbaye pulled one back for Senegal late on, but Mbappé sealed it with his second goal to make it 3-1. Mbappé now shares the golden boot lead with 2 goals.",
    "İskoçya": "Beat Haiti 1-0 thanks to John McGinn's 28th-minute goal — their first World Cup win since 1990. They top Group C.",
    "Hollanda": "Produced a thrilling 2-2 draw with Japan in Dallas: Van Dijk (51') and Summerville (64') gave the Dutch the lead twice, but Nakamura (57') and a stoppage-time Kamada goal (88') brought Japan level both times. They open Group F with 1 point.",
    "Japonya": "Having shocked Germany and Spain in 2022, Japan fought back from behind twice to draw 2-2 with the Netherlands in their opener — Nakamura (57') and Kamada (88', turning in an Ogawa flick from an Ito corner) cancelled out two Dutch leads.",
    "Fildişi Sahili": "Beat Ecuador 1-0 thanks to a 90th-minute Amad Diallo goal, opening their first World Cup since 2014 with 3 points and moving level with Germany at the top of Group E.",
    "Ekvador": "Held Côte d'Ivoire to 0-0 for long stretches but conceded a 90th-minute Amad Diallo goal, starting Group E with no points.",
    "İsveç": "Thrashed Tunisia 5-1 in Monterrey to top Group F on matchday 1. Yasin Ayari scored twice (7', 90+6'), with Isak (30'), Gyökeres (59') and Svanberg (84') adding further goals; Rekik (43') got Tunisia's only goal.",
    "Tunus": "Lost 5-1 to Sweden in Monterrey; Omar Rekik (43') scored their only goal. They start Group F with no points.",
    "Mısır": "Drew 1-1 with Belgium in Seattle. Emam Ashour gave Egypt the lead in the 19th minute (Salah assist) — his first international goal — but a Mohamed Hany own goal in the 66th minute (Lukaku pressure) levelled for Belgium. Egypt start Group G with 1 point.",
    "Belçika": "Drew 1-1 with Egypt in Seattle. Ashour put Egypt ahead on 19 minutes (Salah assist), but Lukaku's pressure forced a Mohamed Hany own goal in the 66th minute to earn Belgium a point. They start Group G with 1 point; De Bruyne's impact was limited.",
    "S. Arabistan": "Showed real quality in Miami, taking the lead through Al-Amri's 41st-minute goal against Uruguay, only to be pegged back by Araujo's 80th-minute equaliser. All four Group H teams are level on 1 point — the group is wide open.",
    "Uruguay": "Fought back from a goal down in Miami to earn a 1-1 draw against Saudi Arabia — Maximiliano Araujo's 80th-minute strike cancelled out Al-Amri's first-half opener. Uruguay start Group H on 1 point alongside Spain, Cape Verde and Saudi Arabia.",
    "Senegal": "Senegal lost 1-3 to France at MetLife, opening Group I with 0 points. They held firm through the first half but conceded to Mbappé (66') and Barcola (82'). Mbaye pulled one back late, but Mbappé sealed the result at 3-1. The June 23 clash vs Norway is now must-win.",
    "Norveç": "Erling Haaland leads Norway into their first World Cup since 1998, opening tonight at 01:00 TST against Iraq in Boston. Their best-ever World Cup finish was the Round of 16 in 1998; with Haaland now at his peak, they hope to go further.",
    "Irak": "Iraq return to the World Cup for the first time since 1986, opening against Norway tonight at 01:00 TST in Boston. They qualified through the inter-confederation playoff, beating Bolivia 2-1. Underdogs, but motivated by a historic opportunity.",
    "Cezayir": "Algeria return to the World Cup after missing out in 2022, opening against defending champions Argentina tonight at 04:00 TST in Kansas City. Ranked 8th by FIFA, they represent a genuine threat but face a daunting first test."
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
    { iso: "2026-06-14", saat: "20:00", grup: "E", ev: "Almanya", dep: "Curaçao", yer: "Houston", skor: "7 - 1", not: "Goller: Nmecha (6' - Almanya), Comenencia (21' - Curaçao), Schlotterbeck (38' - Almanya), Havertz (45+5' penaltı - Almanya), Musiala (47' - Almanya), Brown (68' - Almanya), Undav (78' - Almanya), Havertz (88' - Almanya). Comenencia'nın golü, Curaçao'nun Dünya Kupası tarihindeki ilk golü oldu; Almanya 7-1'lik farkla turnuvanın en büyük galibiyetlerinden birini aldı." },
    { iso: "2026-06-14", saat: "23:00", grup: "F", ev: "Hollanda", dep: "Japonya", yer: "Arlington", skor: "2 - 2", not: "Goller: Van Dijk (51' - Hollanda), Nakamura (57' - Japonya), Summerville (64' - Hollanda), Kamada (88' - Japonya)." },
    { iso: "2026-06-15", saat: "02:00", grup: "E", ev: "Fildişi Sahili", dep: "Ekvador", yer: "Philadelphia", skor: "1 - 0", not: "Goller: Diallo (90' - Fildişi Sahili). Ekvador uzun süre 0-0'ı korudu ama son dakikada golü yedi." },
    { iso: "2026-06-15", saat: "05:00", grup: "F", ev: "İsveç", dep: "Tunus", yer: "Monterrey", skor: "5 - 1", not: "Goller: Ayari (7' ve 90+6' - İsveç), Isak (30' - İsveç), Rekik (43' - Tunus), Gyökeres (59' - İsveç), Svanberg (84' - İsveç)." },
    { iso: "2026-06-15", saat: "19:00", grup: "H", ev: "İspanya", dep: "Cape Verde", yer: "Atlanta", skor: "0 - 0", not: "Gol yok — Cape Verde kalecisi Vozinha (40) 7 kurtarış yaptı, İspanya 27 şut çekti (7 isabetli) ama golü bulamadı; Ferran Torres 39. dakikada direkten döndü. Turnuvanın en büyük sürprizlerinden biri." },
    { iso: "2026-06-15", saat: "22:00", grup: "G", ev: "Belçika", dep: "Mısır", yer: "Seattle", skor: "1 - 1", not: "Goller: Ashour (19' - Mısır, Salah asist), Hany OG (66' - Belçika). Ashour'un A Milli Takım'daki ilk golü Mısır'ı öne geçirdi; Lukaku'nun baskısıyla elde edilen Hany kendi kale goluyla Belçika 1-1'e denkleştirdi." },
    { iso: "2026-06-16", saat: "01:00", grup: "H", ev: "S. Arabistan", dep: "Uruguay", yer: "Miami", skor: "1 - 1", not: "Goller: Al-Amri (41' - S. Arabistan), Araujo (80' - Uruguay)." },
    { iso: "2026-06-16", saat: "04:00", grup: "G", ev: "İran", dep: "Yeni Zelanda", yer: "Los Angeles", skor: "2 - 2", not: "Goller: Just (7' ve 54' - Yeni Zelanda), Rezaeian (32' - İran), Mohebbi (64' - İran, Rezaeian asist). Just iki kez öne geçirdi, Rezaeian ve Mohebbi her seferinde yakaladı — heyecanlı beraberlik." },
    { iso: "2026-06-16", saat: "22:00", grup: "I", ev: "Fransa", dep: "Senegal", yer: "New Jersey", skor: "3 - 1", not: "Goller: Mbappé (66'), Barcola (82') - Fransa; Mbaye (dk. teyit edilemedi) - Senegal; Mbappé 2. gol (dk. teyit edilemedi) - Fransa. Fransa 3 puanla I Grubu'na lider başladı." },
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
      { takim: "Almanya", flag: "🇩🇪", o: 1, g: 1, b: 0, m: 0, a: 7, y: 1, p: 3 },
      { takim: "Fildişi Sahili", flag: "🇨🇮", o: 1, g: 1, b: 0, m: 0, a: 1, y: 0, p: 3 },
      { takim: "Ekvador", flag: "🇪🇨", o: 1, g: 0, b: 0, m: 1, a: 0, y: 1, p: 0 },
      { takim: "Curaçao", flag: "🇨🇼", o: 1, g: 0, b: 0, m: 1, a: 1, y: 7, p: 0 }
    ],
    "F": [
      { takim: "İsveç", flag: "🇸🇪", o: 1, g: 1, b: 0, m: 0, a: 5, y: 1, p: 3 },
      { takim: "Hollanda", flag: "🇳🇱", o: 1, g: 0, b: 1, m: 0, a: 2, y: 2, p: 1 },
      { takim: "Japonya", flag: "🇯🇵", o: 1, g: 0, b: 1, m: 0, a: 2, y: 2, p: 1 },
      { takim: "Tunus", flag: "🇹🇳", o: 1, g: 0, b: 0, m: 1, a: 1, y: 5, p: 0 }
    ],
    "G": [
      { takim: "İran", flag: "🇮🇷", o: 1, g: 0, b: 1, m: 0, a: 2, y: 2, p: 1 },
      { takim: "Yeni Zelanda", flag: "🇳🇿", o: 1, g: 0, b: 1, m: 0, a: 2, y: 2, p: 1 },
      { takim: "Belçika", flag: "🇧🇪", o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 },
      { takim: "Mısır", flag: "🇪🇬", o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 }
    ],
    "H": [
      { takim: "S. Arabistan", flag: "🇸🇦", o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 },
      { takim: "Uruguay", flag: "🇺🇾", o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 },
      { takim: "İspanya", flag: "🇪🇸", o: 1, g: 0, b: 1, m: 0, a: 0, y: 0, p: 1 },
      { takim: "Cape Verde", flag: "🇨🇻", o: 1, g: 0, b: 1, m: 0, a: 0, y: 0, p: 1 }
    ],
    "I": [
      { takim: "Fransa", flag: "🇫🇷", o: 1, g: 1, b: 0, m: 0, a: 3, y: 1, p: 3 },
      { takim: "Senegal", flag: "🇸🇳", o: 1, g: 0, b: 0, m: 1, a: 1, y: 3, p: 0 },
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
    note_en: "Türkiye lost their opener 2-0 to Australia, making the June 20 match vs Paraguay decisive for reaching the Round of 32. If they top Group D, their path is: 81 → 94 → 98 → 101 → Final (orange boxes). France beat Senegal 3-1 at MetLife (Mbappé 66’ & late, Barcola 82’). Today: Argentina–Algeria (04:00), Austria–Jordan (07:00), Portugal–DR Congo (20:00), England–Croatia (23:00 TST).",
    note: "Türkiye, Avustralya’ya 2-0 yenilerek kötü başladı; 20 Haziran’daki Paraguay maçı eleme turuna kalmak için kritik. D Grubu’nu lider bitirirse yolu: 81 → 94 → 98 → 101 → Final (turuncu kutular). Fransa, MetLife’da Senegal’i 3-1 yendi (Mbappé 66’ ve geç, Barcola 82’). Bugün: Arjantin–Cezayir (04:00), Avusturya–Ürdün (07:00), Portekiz–DR Kongo (20:00), İngiltere–Hırvatistan (23:00)."
  },

  // ---------------- BİLGİ KUTUSU ----------------
  facts_en: [
    "First World Cup with 48 teams and 3 host nations (USA, Canada, Mexico). 104 matches in total.",
    "Top 2 of each group + the 8 best third-placed teams advance to the Round of 32.",
    "Türkiye are back at the World Cup for the first time since finishing 3rd in 2002 — but lost their opener 2-0 to Australia in Vancouver (Irankunda 27’, Metcalfe 75’). June 20 vs Paraguay is now decisive.",
    "The final is on July 19 at MetLife Stadium, New Jersey (around 22:00 GMT+3).",
    "Group G: All four teams level on 1 point after a dramatic matchday 1 — Belgium–Egypt 1-1 and Iran–New Zealand 2-2 (Just scored twice for NZ; Rezaeian and Mohebbi each equalised for Iran). The group is wide open.",
    "France 3-1 Senegal (MetLife, June 16): Mbappé (66') and Barcola (82') put France 2-0 up; Mbaye pulled one back for Senegal late on but Mbappé sealed it with a second goal. Mbappé joins the golden boot leaders on 2 goals. Today: Argentina–Algeria (04:00), Austria–Jordan (07:00), Portugal–DR Congo (20:00), England–Croatia (23:00 TST)."
  ],
  facts: [
    "İlk kez 48 takım ve 3 ev sahibi ülke (ABD, Kanada, Meksika). Toplam 104 maç.",
    "Her gruptan ilk 2 takım + en iyi 8 üçüncü, Son 32 turuna kalıyor.",
    "Türkiye, 2002 dünya üçüncülüğünden sonraki ilk Dünya Kupası’na Avustralya’ya 2-0 yenilerek başladı. 20 Haziran Paraguay maçı artık kritik.",
    "Final 19 Temmuz’da New Jersey MetLife Stadyumu’nda (TSİ 22:00 civarı).",
    "G Grubu'nda 4 takım 1'er puanda: Belçika–Mısır 1-1, İran–Yeni Zelanda ise 2-2 bitti (Just çifte gol; Rezaeian ve Mohebbi birer gol). Grup tamamen açık.",
    "Fransa 3-1 Senegal (MetLife, 16 Haziran): Mbappé (66') ve Barcola (82') gollerle Fransa 2-0 öne geçti; Mbaye Senegal adına geç gol atsa da Mbappé ikinci golüyle 3-1'i tescilledi. Mbappé 2 golle gol krallığında liderlere ortak oldu. Bugün: Arjantin–Cezayir (04:00), Avusturya–Ürdün (07:00), Portekiz–DR Kongo (20:00), İngiltere–Hırvatistan (23:00)."
  ]
};
