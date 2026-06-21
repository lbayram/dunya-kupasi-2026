// =====================================================================
// FIFA DÜNYA KUPASI 2026 — DASHBOARD VERİSİ (v2)
// Bu dosya 2 saatte bir otomatik güncellenir.
// Tüm saatler Türkiye saati (TSİ). Takım adları groups ile birebir aynı olmalı.
// Kaynaklar: fifa.com, ESPN, Sky Sports, Wikipedia
// =====================================================================
window.WC_DATA = {
  lastUpdate: "21 Haziran 2026, 10:00 TSİ",
  headline_en: "Day 11-12 wrap: Germany come from behind to beat Ivory Coast 2-1 in Toronto (Kessié 30', Undav 68' & 90+4') — GER through to Round of 32 with 6 pts. Ecuador and Curaçao draw 0-0 in Kansas City. Today: Spain vs Saudi Arabia (19:00) and Belgium vs Iran (22:00) in Group G/H. Deniz Undav now has 3 World Cup goals — joint top scorer with Messi and Jonathan David.",
  headline: "Gün 11-12: Almanya, Toronto'da Fildişi Sahili'ni son dakika Undav çiftiyle 2-1 geçti (Kessié 30', Undav 68' ve 90+4') — 6 puanla Son 32'ye kaldı. Ekvador-Curaçao Kansas City'de 0-0 berabere kaldı. Bugün: İspanya-S. Arabistan (19:00) ve Belçika-İran (22:00). Deniz Undav 3 golle Messi ve Jonathan David ile birlikte gol krallığında zirveye çıktı.",
  // ---------------- GOL KRALLIĞI ----------------
  topScorers: [
    { sira: 1, oyuncu: "Lionel Messi", takim: "Arjantin", flag: "🇦🇷", gol: 3 },
    { sira: 1, oyuncu: "Jonathan David", takim: "Kanada", flag: "🇨🇦", gol: 3 },
    { sira: 1, oyuncu: "Deniz Undav", takim: "Almanya", flag: "🇩🇪", gol: 3 },
    { sira: 4, oyuncu: "Brian Brobbey", takim: "Hollanda", flag: "🇳🇱", gol: 2 },
    { sira: 4, oyuncu: "Harry Kane", takim: "İngiltere", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", gol: 2 },
    { sira: 4, oyuncu: "Kylian Mbappé", takim: "Fransa", flag: "🇫🇷", gol: 2 },
    { sira: 4, oyuncu: "Erling Haaland", takim: "Norveç", flag: "🇳🇴", gol: 2 },
    { sira: 4, oyuncu: "Folarin Balogun", takim: "ABD", flag: "🇺🇸", gol: 2 },
    { sira: 4, oyuncu: "Kai Havertz", takim: "Almanya", flag: "🇩🇪", gol: 2 },
    { sira: 4, oyuncu: "Ismael Saibari", takim: "Fas", flag: "🇲🇦", gol: 2 }
  ],
  topScorersNote: "35 maç tamamlandı. Messi (ARJ), David (KAN) ve Undav (ALM) 3'er golle ortak lider. Undav Fildişi Sahili'ne bugün çift atarak (68', 90+4') zirveye çıktı. Çok sayıda oyuncu 2'şer golde: Brobbey, Kane, Mbappé, Haaland, Balogun, Havertz, Saibari ve diğerleri.",
  topScorersNote_en: "35 matches completed. Messi (ARG), David (CAN) and Undav (GER) are joint top scorers on 3 goals each. Undav's brace vs Ivory Coast today (68', 90+4') propelled him to the summit. Many players on 2 goals: Brobbey, Kane, Mbappé, Haaland, Balogun, Havertz, Saibari and others.",
  // ---------------- TAKIM NOTLARI (favori kartlarında gösterilir) ----------------
  teamNotes: {
    "Türkiye": "2002 dünya üçüncülüğünden sonraki ilk Dünya Kupası hayal kırıklığıyla sona erdi: Avustralya'ya 2-0, Paraguay'a 0-1 yenilerek D Grubu'ndan elendi. Galarza'nın 2. dakikadaki (65. saniye) golü yeterli oldu; Almiron'ın 45. dakikada ağzını kapatan kırmızı kart görmesi de skor değiştirmedi. 3. maç (26 Haz ABD'ye karşı) sadece gurur mücadelesi.",
    "ABD": "İki maçta 2 galibiyet ve 6 puan — D Grubu'nda lider, Son 32'ye kaldı! Paraguay'ı 4-1, Avustralya'yı 2-0 yendi. Balogun (2+0), Freeman (1), Reyna, Burgess KK. Son maç 26 Haziran Türkiye'ye karşı.",
    "Avustralya": "Vancouver'da Türkiye'yi 2-0 yenerek turnuvaya güçlü başladı (Irankunda 27', Metcalfe 75'). Ardından Seattle'da ABD'ye 0-2 yenildi — Burgess'in 11. dakikadaki kendi golü ve Freeman'ın (43') kafası bitti. 3 puanla gruptan çıkma şansı devam ediyor; 26 Haziran Paraguay maçı kritik.",
    "Kanada": "Ev sahibi Kanada, Bosna Hersek ile 1-1 berabere kalarak (Larin 78') Dünya Kupası tarihindeki ilk puanını aldı. Ardından Katar'ı 6-0 ezerek tarihindeki ilk DK galibiyetini aldı — Jonathan David hat-trick (29', 45+3', 90+2'), Larin (16'), Saliba (64') ve Manai KK (75'). 4 puanla B Grubuna lider; gol averajıyla İsviçre'nin önünde.",
    "Katar": "B Grubu'nda İsviçre ile 1-1 berabere kalarak (Khoukhi 90+4' kafa) Dünya Kupası tarihindeki ilk puanını aldı. Ancak ikinci maçta Kanada'ya 0-6 yenildi — DK tarihinin en büyük mağlubiyetlerinden biri. 2 maçta 1 puan ve -6 averajla gruptan çıkması çok zor.",
    "İsviçre": "Katar'la 1-1 berabere kaldıktan (Embolo 17' pen) sonra Bosna Hersek'i 4-1 yenerek toparlandı. Son çeyrek inanılmazdı: Manzambi (74', 90'), Vargas (84') ve Xhaka (90+7' pen) gollerle B Grubunu gol averajıyla Kanada'nın hemen arkasında 4 puanla kapattı. Mahmić'in (90+3') Bosna için tek golü teselli ödülüydü.",
    "İspanya": "FIFA sıralamasının 1 numarası ve Avrupa şampiyonu olan İspanya, Atlanta'da Dünya Kupası'na ilk kez katılan Cape Verde'yi aşamadı ve 0-0'da kaldı. 27 şut (7 isabetli) çekmesine rağmen 40 yaşındaki kaleci Vozinha'nın 7 kurtarışına çarptı; Ferran Torres 39. dakikada direkten döndü. Kura gereği Arjantin'le ancak finalde karşılaşabilir.",
    "Cape Verde": "Dünya Kupası'na ilk kez katılan Cape Verde, Atlanta'da favori İspanya'yı 0-0'a tuttu — turnuvanın en büyük sürprizlerinden biri. 40 yaşındaki kaleci Vozinha 7 kurtarış yaptı. H Grubu'na 1 puanla başladı.",
    "Almanya": "E Grubuna Curaçao'yu 7-1 ezerek başlayan Almanya, Toronto'da Fildişi Sahili'ne Kessié'nin 30. dakika golüyle 0-1 geride kaldı; ancak yedek Deniz Undav 68' (Amiri asisti) ve 90+4' (Nmecha asisti) çifte golüyle durumu 2-1'e çevirdi. Almanya 12 yıl aradan sonra Son 32'yi garantiledi — 6 puanla E Grubu birincisi. Undav 3 golle (1 Curaçao + 2 CIV) turnuvanın ortak gol kraliçesi.",
    "İran": "Los Angeles'ta Yeni Zelanda ile 2-2 berabere kalan İran, nefes kesen bir maç sergiledi. Elijah Just'ın çifte golüne (7', 54') Rezaeian (32') ve Mohebbi (64') birer golle cevap verdi; Mohebbi kafasıyla tamamladığı gol Rezaeian'ın asistinden geldi. G Grubu'nda 4 takım 1'er puanda — Belçika ve Mısır maçları belirleyici olacak.",
    "Yeni Zelanda": "Los Angeles'ta İran ile 2-2 berabere kalan Yeni Zelanda, Just'ın çifte golüyle (7', 54') iki kez öne geçti ama İran iki kez yakaladı (Rezaeian 32', Mohebbi 64'). Just bu performansıyla Dünya Kupası tarihinin en golcü All Whites oyuncuları arasına girdi. G Grubu'nda 1 puanla devam ediyorlar.",
    "Arjantin": "Son şampiyon Arjantin, J Grubu'nu Cezayir'i 3-0 ezerek açtı — Messi DK tarihinin ilk hat-trick'ini attı (17', 60', 76'). 6 farklı Dünya Kupası'nda gol atan ilk oyuncu olan Messi, 16. kariyer goliyle Miroslav Klose'nin tüm zamanlar DK golcülük rekorunu eşitledi. Avusturya ile birlikte J Grubu'nun zirvesinde (gol averajıyla önde); 22 Haziran'da Avusturya ile kritik düello.",
    "İngiltere": "Tuchel yönetimindeki İngiltere, L Grubunu Arlington'da Hırvatistan'ı 4-2 yenerek açtı. Kane penaltıdan (12') ve serbest vuruşla (42') çift gol attı; Bellingham (47') ve Rashford (85') farkı kapattı. Hırvatistan iki kez güzel goller atsa da (Baturina 36', Musa 50') skor değişmedi. 2022 finalistleri Hırvatistan'a karşı bu güçlü başlangıç İngiltere'yi kupanın ciddi adaylarından biri gösteriyor.",
    "Hırvatistan": "2018 finalistleri Hırvatistan, L Grubuna İngiltere'ye 2-4 yenilerek kötü başladı. Baturina (36') ve Musa (50') etkileyici goller attı ama Kane (12', 42'), Bellingham (47') ve Rashford (85')'ın önünde durdurulamadı. 24 Haziran Panama, 28 Haziran İngiltere maçları var — gruptan çıkmak için ardışık galibiyet şart.",
    "Avusturya": "J Grubu'na Santa Clara'da Ürdün'ü 3-1 yenerek güçlü başladı — 1990'dan bu yana ilk Dünya Kupası galibiyeti (36 yıl sonra). Schmid (20') güzel bir uzak şutla açtı, Olwan'ın (50') tarihi Ürdün golünden sonra Al Arab kendi kalesine (76') ve Arnautovic penaltısıyla (90+12') zaferi pekiştirdi. 22 Haziran'da Arjantin karşı son derece çetin bir randevu var.",
    "Ürdün": "İlk Dünya Kupası maçında Santa Clara'da Avusturya'ya 1-3 yenildi. Ali Olwan'ın 50. dakikadaki golü ülkenin DK tarihindeki ilk golü olarak tarihe geçti, ancak Avusturya'nın skor üstünlüğü engel aşılamadı. 23 Haziran'da Cezayir karşısında gruptan çıkmak için 3 puan şart.",
    "Brezilya": "Fas ile 1-1 berabere kaldıktan (Saibari 21', Vinícius Júnior 32') sonra Haiti'yi 3-0 ezdi — Cunha çift attı (23', 36'), Vinícius Júnior tamamladı (40'). C Grubu'nda 4 puanla Fas ile birlikte lider; gruptan çıkma güçlü.",
    "Fransa": "2018 şampiyonu Fransa, I Grubu'na MetLife'da Senegal'i 3-1 yenerek 3 puanla başladı. Mbappé 66' (Olise asisti) ve 90+6'da çift gol attı; Barcola 82'de ikinci golü ekledi. İbrahim Mbaye 90+5'te Senegal'i 1-3'e düşürse de Mbappé son hamlesiyle sonucu kapattı. Mbappé 58. milli golüyle Fransa'nın tüm zamanlar golcü rekorcusu oldu (Giroud'u geçti).",
    "İskoçya": "Haiti'yi 1-0 yendi (McGinn 28') — 1990'dan beri ilk DK galibiyeti. Ardından Fas'a 0-1 yenildi (Saibari 2', turnuvanın en hızlı golü). 3 puanla üçüncü sırada; son maç 25 Haziran Brezilya'ya karşı.",
    "Fas": "Brezilya ile 1-1 berabere kaldıktan (Saibari 21') sonra İskoçya'yı Saibari'nin 2. dakika golüyle (turnuvanın en hızlı golü) 1-0 yendi. 4 puanla C Grubu'nda Brezilya ile birlikte lider; Son 32 yolunda güçlü konumda.",
    "Hollanda": "Japonya ile 2-2 berabere kaldıktan sonra (Van Dijk 51', Summerville 64'; Nakamura 57', Kamada 88') Houston'da İsveç'i 2-0 yenerek toplandı — Brian Brobbey çiftiyle (5' Gakpo asisti, 17' Dumfries asisti) F Grubu'nda 4 puanla liderliği devraldı. Son 32 yolunda güçlü.",
    "Japonya": "2022'de Almanya ve İspanya'yı deviren Japonya, açılış maçında Hollanda karşısında 2-2'lik müthiş bir geri dönüş gösterdi: Nakamura (57') ve Kamada (88', Ito'nun kornerinden Ogawa'nın uzatmasıyla) golleriyle iki kez öne geçen rakibini yakaladı.",
    "Fildişi Sahili": "Ekvador'u Amad Diallo'nun 90. dakika golüyle 1-0 yenerek başlayan turnuvada Toronto'da Almanya'ya 1-2 yenildi: Kessié 30. dakikada öne geçirse de Undav'ın çifte gol (68', 90+4') maçı devirdi. 3 puanla ikinci sırada; 25 Haziran Ekvador maçını kazanırsa gruptan çıkar.",
    "Ekvador": "Fildişi Sahili'ne 0-1 yenilip puansız başladıktan sonra Kansas City'de Curaçao ile 0-0 berabere kaldı — 27 şut (15 isabetli) çekti ama kaleci Eloy Room'u geçemedi. 1 puanla E Grubu'nda üçüncü; 25 Haziran Almanya maçı gruptan çıkmak için bir şans değil.",
    "İsveç": "Tunus'u 5-1 yenerek başlayan turnuvada Houston'da Hollanda'ya 0-2 yenildi — Brobbey'nin çifti (5', 17') belirleyiciydi; İsveç'in devre sonunda attığı gol ofsayt nedeniyle iptal edildi. 3 puanla F Grubunda 2. sıraya geriledi. 25 Haziran Japonya maçı belirleyici.",
    "Tunus": "Monterrey'de İsveç'e 5-1 farkla mağlup oldu; Omar Rekik (43') tek golü kaydetti. F Grubu'na puansız başladı.",
    "Mısır": "Seattle'da Belçika ile 1-1 berabere kaldı. Emam Ashour, Salah'ın asistiyle 19. dakikada attığı golle (A Milli Takım'daki ilk golü) Mısır'ı öne geçirdi; ancak Mohamed Hany'nin 66. dakikadaki kendi kale goluyla (Lukaku baskısı) Belçika denkleştirdi. G Grubu'na 1 puanla başladı.",
    "Belçika": "Seattle'da Mısır ile 1-1 berabere kaldı. Ashour'un 19. dakika golüyle (Salah asist) geriye düşen Belçika, Lukaku'nun baskısının yol açtığı Mohamed Hany kendi kale goluyla (66') denkliği yakaladı. G Grubu'na 1 puanla başladı. De Bruyne ilk yarıda etkisiz kaldı.",
    "S. Arabistan": "Miami'de Uruguay ile gücünü belli eden bir beraberlik: Al-Amri'nin 41. dakika golüyle öne geçti, ancak Araujo'nun 80. dakika golüyle 1-1'e razı oldu. H Grubu'nda 4 takım da 1'er puanda — son iki maç belirleyici olacak.",
    "Uruguay": "Miami'de S. Arabistan karşısında 41. dakikadan itibaren geride kalan Uruguay, Maximiliano Araujo'nun 80. dakika golüyle 1-1'e denkleştirdi. H Grubu'na 1 puanla başlayan Uruguay, İspanya ve Cape Verde ile eşit durumda.",
    "Senegal": "Senegal, MetLife'da Fransa'ya 1-3 yenilerek I Grubu'na puansız başladı. İlk yarıyı 0-0 kapattılar; ancak Mbappé (66') ve Barcola (82') golle 2-0 geride kaldılar. Mbaye geç bir golle 2-1'e düşürse de Mbappé ikinci golüyle 3-1 oldu. Norveç maçı (23 Haziran) kritik.",
    "Norveç": "Erling Haaland, Boston'da Irak'a karşı oynadığı ilk Dünya Kupası maçında 28' ve 42'de birer gol atarak Norveç'i 4-1'lik galibiyete taşıdı. Østigård (76', Ødegaard köşe asisti) kafayla üçüncü golü attı; Thorstvedt son dakika golüyle tamamladı. Aymen Hussein Irak'ın tek golünü kaydetti. 1998'den bu yana ilk DK katılımı olan Norveç, I Grubu'nda Fransa ile birlikte 3 puanda.",
    "Irak": "Irak, 1986'dan bu yana ilk Dünya Kupası maçında Boston'da Norveç'e 1-4 yenildi. Aymen Hussein gol atarak tarihe geçti; ancak Haaland (×2), Østigård (76') ve Thorstvedt'in golleri Norveç'i büyük farka taşıdı. Bolivya'yı 2-1 yenerek inter-konfederasyon play-off'tan kalifikasyonu almışlardı — devam maçları kritik.",
    "Cezayir": "J Grubu'na Kansas City'de şampiyon Arjantin'e 0-3 yenilerek ağır bir başlangıç yaptı. Messi'nin hat-trick'i (17', 60', 76') önünde çaresiz kalan Cezayir, Chaibi'nin golünü de offside nedeniyle sayıramadı. 23 Haziran'daki Ürdün maçı artık mutlak 3 puan zorunluluğu.",
    "Portekiz": "K Grubu'nu Houston'da DR Kongo ile 1-1 berabere kaldı — turnuvanın sürpriz sonuçlarından biri. Neves (6', Neto asisti) kafa golüyle öne geçti ama Wissa (45+5', Masuaku asisti) kafa golüyle eşitledi. Ronaldo ıskaladı; Portekiz 27 şut çekmesine rağmen kazanamadı. 23 Haziran Özbekistan maçı önem kazandı.",
    "DR Kongo": "1974'ten bu yana ilk Dünya Kupası'nda K Grubunu çarpıcı açtılar: Houston'da favori Portekiz'i 1-1'e tuttular. Wissa'nın 45+5. dakika kafa golü (Masuaku asisti) tarihî bir puan getirdi. Kongo'nun 1974'ten bu yana ilk DK maçı ve ilk DK puanı. 24 Haziran Kolombiya maçı belirleyici olacak.",
    "Kolombiya": "K Grubuna Azteca'da Özbekistan'ı 3-1 yenerek lider başladı. Muñoz (41') erken golü attı; Fayzullaev (60') eşitlese de Díaz (65') ve Campaz (90+') galibiyeti garantiledi. Luis Díaz turnuvada etkileyici bir debut yaptı. 24 Haziran DR Kongo maçına güçlü geliyor.",
    "Gana": "L Grubu'na Toronto'da Panama'yı 1-0 yenerek 3 puanla başladı. Thomas-Asante'nin pasından Yirenkyi'nin 90+5. dakika golü kazandırdı. İngiltere ile aynı grupta ama ikinci maçta üst sıra için mücadele edecekler.",
    "Meksika": "Ev sahibi Meksika, A Grubunu 6 puanla ve iki galibiyetle kapattı — turnuvanın ilk gruptan çıkan takımı oldu. G. Afrika'yı 2-0 (Quiñones 9', Jiménez 66'), Güney Kore'yi 1-0 (Romo 50') yendi. Final için yolu: Mexico City (Son 32) → muhtemel B 1. veya B 2. eşleşmesi. Baskı ev sahibi sıfatıyla her zaman var."
  },
  teamNotesEn: {
    "Türkiye": "First World Cup since finishing 3rd in 2002 ended in elimination: beaten 2-0 by Australia and 1-0 by Paraguay (Galarza 2', 65 seconds — the tournament's fastest goal). Almirón's red card (45') for covering his mouth under FIFA's new rule reduced Paraguay to 10 men but Türkiye still couldn't equalise. The June 26 match vs USA is now a dead rubber.",
    "ABD": "Two wins, 6 points — Group D leaders, through to the Round of 32! Beat Paraguay 4-1 and Australia 2-0 (Burgess OG 11', Freeman 43'). Balogun leads the line; final group game vs Türkiye on June 26.",
    "Avustralya": "Strong start with a 2-0 win over Türkiye in Vancouver (Irankunda 27', Metcalfe 75'). Then beaten 0-2 by the USA in Seattle — Burgess's 11th-minute own goal and Freeman's 43rd-minute header ended their chances of topping the group. Still on 3 points; the June 26 match vs Paraguay is must-win to advance.",
    "Kanada": "Hosts Canada earned their first-ever World Cup point drawing 1-1 with Bosnia (Larin 78'), then recorded their first-ever World Cup win in stunning fashion: 6-0 over Qatar (Larin 16', David 29'/45+3'/90+2' hat-trick, Saliba 64', Manai OG 75'). Jonathan David's hat-trick was the tournament's best individual performance so far. Canada lead Group B on 4 points ahead of Switzerland on goal difference.",
    "Katar": "Qatar earned their first-ever World Cup point with a 1-1 draw against Switzerland (Khoukhi 90+4' header). However, their second match ended in a 0-6 humiliation against hosts Canada — Jonathan David hat-trick (29', 45+3', 90+2'). Qatar now have 1 point and -6 goal difference after two games, making qualification near-impossible.",
    "İsviçre": "Switzerland drew 1-1 with Qatar (Embolo 17' pen, Khoukhi 90+4') in their opener, then bounced back to beat Bosnia 4-1. The last quarter-hour was extraordinary: Manzambi (74', 90'), Vargas (84') and Xhaka (90+7' pen) ran riot. Mahmić (90+3') consoled Bosnia. Switzerland sit 2nd in Group B on 4 points, behind Canada on goal difference.",
    "İspanya": "FIFA's No. 1 and reigning European champions Spain were held 0-0 by World Cup debutants Cape Verde in Atlanta. Despite 27 shots (7 on target), they were repelled by 40-year-old goalkeeper Vozinha's 7 saves; Ferran Torres hit the crossbar in the 39th minute. Due to the draw, they can only meet Argentina in the final.",
    "Cape Verde": "World Cup debutants Cape Verde held favourites Spain to a 0-0 draw in Atlanta — one of the tournament's biggest shocks. Veteran goalkeeper Vozinha (40) made 7 saves. They start Group H with 1 point.",
    "Almanya": "After thrashing Curaçao 7-1 on matchday 1, Germany came from behind to beat Ivory Coast 2-1 in Toronto — Kessié (30') put the Ivorians ahead but super-sub Deniz Undav levelled (68', Amiri assist) and then scored the winner deep into stoppage time (90+4', Nmecha assist). Germany are through to the Round of 32 after a 12-year absence, topping Group E on 6 points. Undav now has 3 World Cup goals — joint top scorer alongside Messi and Jonathan David.",
    "İran": "Iran fought back twice to draw 2-2 with New Zealand in Los Angeles. Elijah Just gave New Zealand the lead twice (7', 54'), but Rezaeian (32') and Mohebbi (64' — a header from Rezaeian's cross) earned Iran a point each time. All four Group G teams remain level on 1 point — the Belgium and Egypt matches will be decisive.",
    "Yeni Zelanda": "New Zealand twice led through Elijah Just's brace (7', 54') but couldn't hold on, as Iran equalised twice through Rezaeian (32') and Mohebbi (64') to earn a 2-2 draw in Los Angeles. Just's double makes him one of the most prolific All Whites scorers in World Cup history. They continue on 1 point in Group G.",
    "Arjantin": "Defending champions Argentina opened Group J by thrashing Algeria 3-0 in Kansas City — Messi scored the World Cup's first-ever hat-trick (17', 60', 76'). He became the first player to score at 6 different World Cups and equals Miroslav Klose's all-time World Cup scoring record with 16 goals. Argentina top Group J on goal difference over Austria; their June 22 clash is a major group decider.",
    "İngiltere": "England opened Group L with a dominant 4-2 win over Croatia in Arlington under Thomas Tuchel. Kane scored twice (12' pen, 42'), Bellingham added a third immediately after half-time (47') and Rashford sealed it (85'). Croatia struck back twice through Baturina (36') and Musa (50') but couldn't hold England. A strong start with the trophy very much in sight.",
    "Hırvatistan": "2018 finalists Croatia were beaten 2-4 by England in Arlington in their Group L opener. Baturina (36') and Musa (50') scored impressive goals, but Kane, Bellingham and Rashford proved too much. Two wins from Panama (June 24) and a result vs England (June 28) are now needed to advance.",
    "Avusturya": "Austria opened Group J with a 3-1 win over Jordan in Santa Clara — their first World Cup victory in 36 years (since 1990). Schmid (20') struck from range to open the scoring; Olwan's (50') historic equaliser was cancelled out by an Al Arab own goal (76') and Arnautovic's stoppage-time penalty (90+12'). A massive Group J showdown vs Argentina awaits on June 22.",
    "Ürdün": "Jordan lost 1-3 to Austria in their World Cup debut in Santa Clara. Ali Olwan's 50th-minute goal became the country's first-ever World Cup goal, but Austria's three-goal haul proved too much. The June 23 match vs Algeria is now must-win.",
    "Brezilya": "Drew 1-1 with Morocco (Saibari 21', Vinícius Júnior 32') then crushed Haiti 3-0 — Cunha brace (23', 36') and Vinícius Júnior (40'). Top of Group C alongside Morocco on 4 points. Record 5-time champions on track.",
    "Fransa": "2018 champions France opened Group I with a 3-1 win over Senegal at MetLife. Mbappé struck in the 66th minute (Olise assist) and 90+6', with Barcola adding a second in the 82nd. Ibrahim Mbaye pulled one back in the 90+5' but Mbappé's long-range late strike sealed it. Mbappé's brace made him France's all-time leading scorer with 58 international goals (passing Giroud).",
    "İskoçya": "Beat Haiti 1-0 (McGinn 28') — first World Cup win since 1990. Then lost 0-1 to Morocco (Saibari 2', the tournament's fastest goal). On 3 points in third place; final group game vs Brazil on June 25.",
    "Fas": "Drew 1-1 with Brazil (Saibari 21') then beat Scotland 1-0 with Saibari's 2nd-minute goal — the fastest of the tournament. On 4 points alongside Brazil at the top of Group C. Strong Round of 32 prospects.",
    "Hollanda": "After a 2-2 draw with Japan (Van Dijk 51', Summerville 64'; Nakamura 57', Kamada 88'), the Dutch bounced back with a 2-0 win over Sweden in Houston — Brian Brobbey scored twice (5' Gakpo assist, 17' Dumfries assist) for his first World Cup goals. Sweden had a late first-half header ruled out for offside. Netherlands lead Group F on 4 points.",
    "Japonya": "Having shocked Germany and Spain in 2022, Japan fought back from behind twice to draw 2-2 with the Netherlands in their opener — Nakamura (57') and Kamada (88', turning in an Ogawa flick from an Ito corner) cancelled out two Dutch leads.",
    "Fildişi Sahili": "Beat Ecuador 1-0 with a 90th-minute Amad Diallo goal to open the tournament, then lost 1-2 to Germany in Toronto: Kessié (30') put them ahead but Undav's late brace (68', 90+4') turned the match. On 3 points and second in Group E; a win vs Ecuador on June 25 would secure progress.",
    "Ekvador": "Lost 0-1 to Ivory Coast (Diallo 90') then drew 0-0 with Curaçao in Kansas City — 27 shots (15 on target) but couldn't beat keeper Eloy Room. On 1 point in third place in Group E; their final group game vs Germany on June 25 is all but a dead rubber.",
    "İsveç": "After thrashing Tunisia 5-1 on matchday 1, Sweden were beaten 0-2 by the Netherlands in Houston — Brian Brobbey's brace (5', 17') sealed the win. Sweden's header near half-time was ruled out for offside. They drop to 2nd in Group F on 3 points. The June 25 clash with Japan is now must-win.",
    "Tunus": "Lost 5-1 to Sweden in Monterrey; Omar Rekik (43') scored their only goal. They start Group F with no points.",
    "Mısır": "Drew 1-1 with Belgium in Seattle. Emam Ashour gave Egypt the lead in the 19th minute (Salah assist) — his first international goal — but a Mohamed Hany own goal in the 66th minute (Lukaku pressure) levelled for Belgium. Egypt start Group G with 1 point.",
    "Belçika": "Drew 1-1 with Egypt in Seattle. Ashour put Egypt ahead on 19 minutes (Salah assist), but Lukaku's pressure forced a Mohamed Hany own goal in the 66th minute to earn Belgium a point. They start Group G with 1 point; De Bruyne's impact was limited.",
    "S. Arabistan": "Showed real quality in Miami, taking the lead through Al-Amri's 41st-minute goal against Uruguay, only to be pegged back by Araujo's 80th-minute equaliser. All four Group H teams are level on 1 point — the group is wide open.",
    "Uruguay": "Fought back from a goal down in Miami to earn a 1-1 draw against Saudi Arabia — Maximiliano Araujo's 80th-minute strike cancelled out Al-Amri's first-half opener. Uruguay start Group H on 1 point alongside Spain, Cape Verde and Saudi Arabia.",
    "Senegal": "Senegal lost 1-3 to France at MetLife, opening Group I with 0 points. They held firm through the first half but conceded to Mbappé (66') and Barcola (82'). Mbaye pulled one back late, but Mbappé sealed the result at 3-1. The June 23 clash vs Norway is now must-win.",
    "Norveç": "Erling Haaland delivered on his World Cup debut, scoring in the 28th (Wolfe assist) and 42nd minutes as Norway beat Iraq 4-1 in Boston. Østigård added a 76th-minute header from an Ødegaard corner, and Thorstvedt also scored late. Haaland now joins the golden boot leaders on 2 goals. Norway's first World Cup since 1998, and they've made an emphatic start — top of Group I alongside France on 3 points.",
    "Irak": "Iraq's first World Cup since 1986 ended in a 1-4 defeat to Norway in Boston. Aymen Hussein scored to make history as Iraq's first World Cup scorer since 1986, but Erling Haaland's double, Østigård (76') and Thorstvedt's goals proved too much. They qualified through the inter-confederation playoff beating Bolivia 2-1 — next up is France on June 23.",
    "Cezayir": "Algeria were on the wrong end of a historic night, losing 0-3 to defending champions Argentina in Kansas City. Messi's hat-trick (17', 60', 76') was devastating; Chaibi's goal was also ruled offside. With no points and a -3 goal difference, the June 23 clash vs Jordan is now must-win.",
    "Portekiz": "Portugal were held to a frustrating 1-1 draw by debutants DR Congo in Houston. João Neves (6', Neto assist, header) gave them an early lead but Yoane Wissa (45+5', Masuaku cross) levelled with a header. Ronaldo missed chances and Portugal had 27 shots but couldn't win. June 23 vs Uzbekistan is now must-win for Group K leadership.",
    "DR Kongo": "DR Congo made a stunning return to the World Cup for the first time since 1974, holding favourites Portugal to a 1-1 draw in Houston. Yoane Wissa's 45+5' header (Masuaku assist) earned a historic first World Cup point. First WC appearance since 1974. The June 24 clash with Colombia will be decisive.",
    "Kolombiya": "Colombia topped Group K after beating Uzbekistan 3-1 at Azteca Stadium. Muñoz (41') opened the scoring; Fayzullaev (60') levelled for Uzbekistan, but Díaz (65') and Campaz (90+') sealed the win. Luis Díaz impressed on his debut stage. June 24 vs DR Congo is next.",
    "Meksika": "Host nation Mexico topped Group A with a perfect 6 points from two wins — the first team to qualify for the Round of 32. Beat South Africa 2-0 (Quiñones 9', Jiménez 66') and South Korea 1-0 (Romo 50'). Their route: Mexico City (R32) → likely vs Group B 1st or 2nd. Home crowd pressure is a factor but also a massive advantage.",
    "Gana": "Ghana won 1-0 against Panama in Toronto to top Group L alongside England. Caleb Yirenkyi scored the only goal in the 90+5th minute from a Brandon Thomas-Asante cross. A disciplined defensive performance — tough competition awaits in the remaining group matches."
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
    { iso: "2026-06-16", saat: "22:00", grup: "I", ev: "Fransa", dep: "Senegal", yer: "New Jersey", skor: "3 - 1", not: "Goller: Mbappé (66', Olise asisti), Barcola (82'), Mbappé (90+6') - Fransa; İbrahim Mbaye (90+5') - Senegal. Mbappé 58. milli golüyle Fransa'nın tüm zamanlar golcü rekorcusu oldu (Giroud'u geçti). Fransa 3 puanla I Grubu'na lider başladı." },
    { iso: "2026-06-17", saat: "01:00", grup: "I", ev: "Irak", dep: "Norveç", yer: "Boston", skor: "1 - 4", not: "Goller: Haaland (28', Wolfe asisti), Haaland (42'), Østigård (76', Ødegaard köşe asisti), Thorstvedt (son dk.) - Norveç; Aymen Hussein - Irak. Haaland ilk DK maçında 2 golle patlama; Østigård Ødegaard'ın köşe vuruşundan kafayla tamamladı." },
    { iso: "2026-06-17", saat: "04:00", grup: "J", ev: "Arjantin", dep: "Cezayir", yer: "Kansas City", skor: "3 - 0", not: "Goller: Messi (17' De Paul asisti, uzaktan vuruş), Messi (60', isabetli vuruş), Messi (76', köşeden bükülerek). Messi DK tarihinin ilk hat-trick'ini attı — 16. kariyer goliyle Klose'nin rekorunu eşitledi; 6 farklı DK'da gol atan ilk oyuncu. Cezayir'in Chaibi golü offside nedeniyle iptal." },
    { iso: "2026-06-17", saat: "07:00", grup: "J", ev: "Avusturya", dep: "Ürdün", yer: "Santa Clara", skor: "3 - 1", not: "Goller: Schmid (20' - Avusturya, uzaktan isabetli vuruş), Olwan (50' - Ürdün, ülkenin DK tarihindeki ilk golü), Al Arab kendi kalesine (76' - Avusturya, köşe vuruşundan), Arnautovic (90+12' penaltı - Avusturya). Avusturya, 36 yılın ardından (1990'dan bu yana) ilk DK galibiyetini aldı." },
    { iso: "2026-06-17", saat: "20:00", grup: "K", ev: "Portekiz", dep: "DR Kongo", yer: "Houston", skor: "1 - 1", not: "Goller: Neves (6' - Portekiz, Neto asisti, kafa), Wissa (45+5' - DR Kongo, Masuaku asisti, kafa). DR Kongo 1974'ten bu yana ilk Dünya Kupası maçında tarihi puana ulaştı; Wissa'nın golü ülkenin ilk DK golü. Ronaldo ıskaladı." },
    { iso: "2026-06-17", saat: "23:00", grup: "L", ev: "İngiltere", dep: "Hırvatistan", yer: "Arlington", skor: "4 - 2", not: "Goller: Kane (12' penaltı - İngiltere), Baturina (36' - Hırvatistan), Kane (42' - İngiltere), Bellingham (47' - İngiltere), Musa (50' - Hırvatistan), Rashford (85' - İngiltere). İngiltere Tuchel yönetiminde görkemli başlangıç; Kane çiftiyle gol krallığı sıralamasına girdi." },
    { iso: "2026-06-18", saat: "02:00", grup: "L", ev: "Gana", dep: "Panama", yer: "Toronto", skor: "1 - 0", not: "Goller: Yirenkyi (90+5' - Gana). Thomas-Asante'nin asistinden Yirenkyi son dakikada tamamladı; Gana 3 puanla L Grubuna lider başladı (İngiltere ile eşit, averajla önde)." },
    { iso: "2026-06-18", saat: "05:00", grup: "K", ev: "Özbekistan", dep: "Kolombiya", yer: "Mexico City", skor: "1 - 3", not: "Goller: Muñoz (41' - Kolombiya), Fayzullaev (60' - Özbekistan), Díaz (65' - Kolombiya), Campaz (90+' - Kolombiya). Kolombiya, debutant Özbekistan'ı 3-1 yenerek K Grubuna lider başladı; Luis Díaz parlak debut." },
    { iso: "2026-06-18", saat: "19:00", grup: "A", ev: "Çekya", dep: "Güney Afrika", yer: "Atlanta", skor: "1 - 1", not: "Goller: Sadilek (6' - Çekya), Mokoena (83' penaltı - Güney Afrika). Sulc'ün el ile müdahalesi VAR tarafından tespit edildi; Mokoena son anlarda eşitledi." },
    { iso: "2026-06-18", saat: "22:00", grup: "B", ev: "İsviçre", dep: "Bosna Hersek", yer: "Los Angeles", skor: "4 - 1", not: "Goller: Manzambi (74', 90'), Vargas (84'), Xhaka (90+7' penaltı) - İsviçre; Mahmić (90+3') - Bosna Hersek. İsviçre son 15 dakikada patladı; Manzambi çifteyle maçın adamı oldu." },
    { iso: "2026-06-19", saat: "01:00", grup: "B", ev: "Kanada", dep: "Katar", yer: "Vancouver", skor: "6 - 0", not: "Goller: Larin (16'), David (29', 45+3', 90+2'), Saliba (64'), Manai KK (75') - Kanada. Jonathan David hat-trick yaptı; Kanada Dünya Kupası tarihindeki ilk galibiyetini 6-0'lık muazzam bir skorla aldı." },
    { iso: "2026-06-19", saat: "04:00", grup: "A", ev: "Meksika", dep: "Güney Kore", yer: "Guadalajara", skor: "1 - 0", not: "Goller: Romo (50', Kim'in hatası) - Meksika. Meksika 2 galibiyetle A Grubundan lider çıkışı garantiledi ve Son 32'ye kalan turnuvanın ilk takımı oldu." },
    { iso: "2026-06-19", saat: "22:00", grup: "D", ev: "ABD", dep: "Avustralya", yer: "Seattle", skor: "2 - 0", not: "Goller: Burgess (11' kendi kalesine - ABD), Freeman (43'). ABD 6 puanla Son 32'ye kaldı." },
    { iso: "2026-06-20", saat: "01:00", grup: "C", ev: "İskoçya", dep: "Fas", yer: "Boston", skor: "0 - 1", not: "Goller: Saibari (2' - Fas). Turnuvanın en hızlı golü." },
    { iso: "2026-06-20", saat: "03:30", grup: "C", ev: "Brezilya", dep: "Haiti", yer: "Philadelphia", skor: "3 - 0", not: "Goller: Cunha (23'), Cunha (36'), Vinícius Júnior (40' - Brezilya)." },
    { iso: "2026-06-20", saat: "06:00", grup: "D", ev: "Türkiye", dep: "Paraguay", yer: "Santa Clara", skor: "0 - 1", not: "Goller: Galarza (2', 65. saniye — turnuvanın yeni en hızlı golü, Saibari'nin 70 saniye rekorunu kırdı). Almiron KK (45') — ağzını kapatma yeni FIFA kuralı; DK tarihindeki ilk bu tür kırmızı kart. 10 kişilik Paraguay tutundu, Türkiye elendi." },
    { iso: "2026-06-20", saat: "20:00", grup: "F", ev: "Hollanda", dep: "İsveç", yer: "Houston", skor: "2 - 0", not: "Goller: Brobbey (5', Gakpo asisti), Brobbey (17', Dumfries asisti). İsveç'in devre sonu kafası ofsayt nedeniyle sayılmadı; Hollanda F Grubu liderliğini devraldı." },
    { iso: "2026-06-20", saat: "23:00", grup: "E", ev: "Almanya", dep: "Fildişi Sahili", yer: "Toronto", skor: "2 - 1", not: "Goller: Kessié (30' - Fildişi Sahili), Undav (68', Amiri asisti - Almanya), Undav (90+4', Nmecha asisti - Almanya). Fildişi Sahili öne geçti ama yedek Undav'ın dramatik çifte golü maçı devirdi; Almanya 12 yıl aradan sonra Son 32'ye kaldı." },
    { iso: "2026-06-21", saat: "03:00", grup: "E", ev: "Ekvador", dep: "Curaçao", yer: "Kansas City", skor: "0 - 0", not: "Gol yok. Curaçao kalecisi Eloy Room maçın adamı oldu; Ekvador 27 şut çekti (15 isabetli) ama geçemedi. Curaçao E Grubu'ndaki ilk puanını aldı." },
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
      { takim: "Meksika", flag: "🇲🇽", ev: true, o: 2, g: 2, b: 0, m: 0, a: 3, y: 0, p: 6 },
      { takim: "Güney Kore", flag: "🇰🇷", o: 2, g: 1, b: 0, m: 1, a: 2, y: 2, p: 3 },
      { takim: "Çekya", flag: "🇨🇿", o: 2, g: 0, b: 1, m: 1, a: 2, y: 3, p: 1 },
      { takim: "Güney Afrika", flag: "🇿🇦", o: 2, g: 0, b: 1, m: 1, a: 1, y: 3, p: 1 }
    ],
    "B": [
      { takim: "Kanada", flag: "🇨🇦", ev: true, o: 2, g: 1, b: 1, m: 0, a: 7, y: 1, p: 4 },
      { takim: "İsviçre", flag: "🇨🇭", o: 2, g: 1, b: 1, m: 0, a: 5, y: 2, p: 4 },
      { takim: "Bosna Hersek", flag: "🇧🇦", o: 2, g: 0, b: 1, m: 1, a: 2, y: 5, p: 1 },
      { takim: "Katar", flag: "🇶🇦", o: 2, g: 0, b: 1, m: 1, a: 1, y: 7, p: 1 }
    ],
    "C": [
      { takim: "Brezilya", flag: "🇧🇷", o: 2, g: 1, b: 1, m: 0, a: 4, y: 1, p: 4 },
      { takim: "Fas", flag: "🇲🇦", o: 2, g: 1, b: 1, m: 0, a: 2, y: 1, p: 4 },
      { takim: "İskoçya", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", o: 2, g: 1, b: 0, m: 1, a: 1, y: 1, p: 3 },
      { takim: "Haiti", flag: "🇭🇹", o: 2, g: 0, b: 0, m: 2, a: 0, y: 4, p: 0 }
    ],
    "D": [
      { takim: "ABD", flag: "🇺🇸", ev: true, o: 2, g: 2, b: 0, m: 0, a: 6, y: 1, p: 6 },
      { takim: "Avustralya", flag: "🇦🇺", o: 2, g: 1, b: 0, m: 1, a: 2, y: 2, p: 3 },
      { takim: "Paraguay", flag: "🇵🇾", o: 2, g: 1, b: 0, m: 1, a: 2, y: 4, p: 3 },
      { takim: "Türkiye", flag: "🇹🇷", o: 2, g: 0, b: 0, m: 2, a: 0, y: 3, p: 0 }
    ],
    "E": [
      { takim: "Almanya", flag: "🇩🇪", o: 2, g: 2, b: 0, m: 0, a: 9, y: 2, p: 6 },
      { takim: "Fildişi Sahili", flag: "🇨🇮", o: 2, g: 1, b: 0, m: 1, a: 2, y: 2, p: 3 },
      { takim: "Ekvador", flag: "🇪🇨", o: 2, g: 0, b: 1, m: 1, a: 0, y: 1, p: 1 },
      { takim: "Curaçao", flag: "🇨🇼", o: 2, g: 0, b: 1, m: 1, a: 1, y: 7, p: 1 }
    ],
    "F": [
      { takim: "Hollanda", flag: "🇳🇱", o: 2, g: 1, b: 1, m: 0, a: 4, y: 2, p: 4 },
      { takim: "İsveç", flag: "🇸🇪", o: 2, g: 1, b: 0, m: 1, a: 5, y: 3, p: 3 },
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
      { takim: "Norveç", flag: "🇳🇴", o: 1, g: 1, b: 0, m: 0, a: 4, y: 1, p: 3 },
      { takim: "Fransa", flag: "🇫🇷", o: 1, g: 1, b: 0, m: 0, a: 3, y: 1, p: 3 },
      { takim: "Senegal", flag: "🇸🇳", o: 1, g: 0, b: 0, m: 1, a: 1, y: 3, p: 0 },
      { takim: "Irak", flag: "🇮🇶", o: 1, g: 0, b: 0, m: 1, a: 1, y: 4, p: 0 }
    ],
    "J": [
      { takim: "Arjantin", flag: "🇦🇷", o: 1, g: 1, b: 0, m: 0, a: 3, y: 0, p: 3 },
      { takim: "Avusturya", flag: "🇦🇹", o: 1, g: 1, b: 0, m: 0, a: 3, y: 1, p: 3 },
      { takim: "Ürdün", flag: "🇯🇴", o: 1, g: 0, b: 0, m: 1, a: 1, y: 3, p: 0 },
      { takim: "Cezayir", flag: "🇩🇿", o: 1, g: 0, b: 0, m: 1, a: 0, y: 3, p: 0 }
    ],
    "K": [
      { takim: "Kolombiya", flag: "🇨🇴", o: 1, g: 1, b: 0, m: 0, a: 3, y: 1, p: 3 },
      { takim: "Portekiz", flag: "🇵🇹", o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 },
      { takim: "DR Kongo", flag: "🇨🇩", o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 },
      { takim: "Özbekistan", flag: "🇺🇿", o: 1, g: 0, b: 0, m: 1, a: 1, y: 3, p: 0 }
    ],
    "L": [
      { takim: "İngiltere", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", o: 1, g: 1, b: 0, m: 0, a: 4, y: 2, p: 3 },
      { takim: "Gana", flag: "🇬🇭", o: 1, g: 1, b: 0, m: 0, a: 1, y: 0, p: 3 },
      { takim: "Hırvatistan", flag: "🇭🇷", o: 1, g: 0, b: 0, m: 1, a: 2, y: 4, p: 0 },
      { takim: "Panama", flag: "🇵🇦", o: 1, g: 0, b: 0, m: 1, a: 0, y: 1, p: 0 }
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
    note_en: "Qualified: Mexico (A, 6pts), USA (D, 6pts), Germany (E, 6pts). Türkiye ELIMINATED. Netherlands lead Group F (4pts). Brazil and Morocco lead Group C (4pts each). Canada lead Group B (4pts). England and Ghana lead Group L (3pts each). Messi hat-trick vs Algeria.",
    note: "Kesinleşen gruptan çıkanlar: Meksika (A, 6 puan), ABD (D, 6 puan), Almanya (E, 6 puan). Türkiye elendi. Hollanda F'de 4 puanla lider. Brezilya ve Fas C'de 4'er puan. Kanada B'de 4 puan. İngiltere ve Gana L'de 3'er puan. Messi Cezayir'e hat-trick."
  },
  // ---------------- BİLGİ KUTUSU ----------------
  facts_en: [
    "First World Cup with 48 teams and 3 host nations (USA, Canada, Mexico). 104 matches in total.",
    "Top 2 of each group + the 8 best third-placed teams advance to the Round of 32.",
    "Türkiye are eliminated at the group stage — beaten 2-0 by Australia and 1-0 by Paraguay (Galarza 65 seconds, the tournament’s fastest goal). Their first World Cup since 2002 ends without a win.",
    "The final is on July 19 at MetLife Stadium, New Jersey (around 22:00 GMT+3).",
    "Messi scored a hat-trick against Algeria (17’, 60’, 76’) — his first World Cup hat-trick. His 16th career WC goal equals Miroslav Klose’s all-time record. Mexico are the first qualified team (6pts).",
    "Netherlands beat Sweden 2-0 (Brobbey brace, 5’ & 17’) to top Group F. Germany came from behind to beat Ivory Coast 2-1 (Undav 68’ & 90+4’) and are through to the Round of 32 on 6 points. Canada beat Qatar 6-0 (David hat-trick). England beat Croatia 4-2.",
    "USA qualified from Group D with 6 points. Brazil and Morocco lead Group C on 4 points each. Ismael Saibari (Morocco) scored in the 2nd minute vs Scotland — later surpassed by Galarza (Paraguay, 65 seconds vs Türkiye)."
  ],
  facts: [
    "İlk kez 48 takım ve 3 ev sahibi ülke (ABD, Kanada, Meksika). Toplam 104 maç.",
    "Her gruptan ilk 2 takım + en iyi 8 üçüncü, Son 32 turuna kalıyor.",
    "Türkiye, 2002 dünya üçüncülüğünden sonraki ilk Dünya Kupası’nda Avustralya (0-2) ve Paraguay’a (0-1) yenilerek elendi. Galarza 65. saniyede (2’) gol attı — turnuvanın yeni en hızlı golü.",
    "Final 19 Temmuz’da New Jersey MetLife Stadyumu’nda (TSİ 22:00 civarı).",
    "Messi Cezayir’e hat-trick attı (17’, 60’, 76’) — DK tarihinin ilk hat-trick’i. 16. kariyer DK golüyle Klose’nin tüm zamanlar rekorunu eşitledi. Meksika ilk gruptan çıkan takım.",
    "Hollanda İsveç’i 2-0 yendi (Brobbey çifti: 5’, 17’) — F Grubu’nda 4 puanla lider. Almanya ise Fildişi Sahili’ni son dakika Undav çiftiyle 2-1 geçerek (68’, 90+4’) Son 32’ye kaldı — E Grubu’nda 6 puan. Kanada Katar’ı 6-0 yendi. İngiltere Hırvatistan’ı 4-2 geçti.",
    "ABD 6 puanla D Grubu’ndan çıktı; Brezilya ve Fas C Grubu'nda 4'er puanla lider. Ismael Saibari (Fas) 2. dakikada İskoçya'ya gol attı — rekor sonradan Galarza (Paraguay, 65 saniye) tarafından kırıldı."
  ]
};