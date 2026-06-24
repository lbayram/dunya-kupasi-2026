// =====================================================================
// FIFA DÜNYA KUPASI 2026 — DASHBOARD VERİSİ (v2)
// Bu dosya 2 saatte bir otomatik güncellenir.
// Tüm saatler Türkiye saati (TSİ). Takım adları groups ile birebir aynı olmalı.
// Kaynaklar: fifa.com, ESPN, Sky Sports, Wikipedia
// =====================================================================
window.WC_DATA = {
  lastUpdate: "24 Haziran 2026, 05:08 TSİ",
  headline_en: "Matchday 2 Group L complete: England 0-0 Ghana — both teams on 4 points. Croatia 1-0 Panama (Budimir 54', sub) — Panama eliminated, Croatia alive. Portugal 5-0 Uzbekistan: Ronaldo brace (6', 39'), Nuno Mendes free-kick (17'), Nematov OG (60'), Leão (87'). Ronaldo became the first player in history to score in SIX different World Cups at age 41. Colombia vs DR Congo (Group K) just kicked off at 05:00 TSİ.",
  headline: "L Grubu 2. maçları tamamlandı: İngiltere 0-0 Gana — her iki takım 4'er puana ulaştı. Hırvatistan 1-0 Panama (yedek Budimir 54') — Panama elendi, Hırvatistan ayakta. Portekiz 5-0 Özbekistan: Ronaldo çift gol (6', 39'), Nuno Mendes serbest vuruş (17'), Nematov KG (60'), Leão (87') — Ronaldo 41 yaşında 6 farklı DK'da gol atan tarihin ilk oyuncusu. K Grubunda Kolombiya-DR Kongo maçı 05:00'de başladı.",
  // ---------------- GOL KRALLIĞI ----------------
  topScorers: [
    { sira: 1, oyuncu: "Lionel Messi", takim: "Arjantin", flag: "🇦🇷", gol: 5 },
    { sira: 1, oyuncu: "Erling Haaland", takim: "Norveç", flag: "🇳🇴", gol: 5 },
    { sira: 3, oyuncu: "Kylian Mbappé", takim: "Fransa", flag: "🇫🇷", gol: 4 },
    { sira: 4, oyuncu: "Jonathan David", takim: "Kanada", flag: "🇨🇦", gol: 3 },
    { sira: 4, oyuncu: "Deniz Undav", takim: "Almanya", flag: "🇩🇪", gol: 3 },
    { sira: 6, oyuncu: "Brian Brobbey", takim: "Hollanda", flag: "🇳🇱", gol: 2 },
    { sira: 6, oyuncu: "Cody Gakpo", takim: "Hollanda", flag: "🇳🇱", gol: 2 },
    { sira: 6, oyuncu: "Harry Kane", takim: "İngiltere", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", gol: 2 },
    { sira: 6, oyuncu: "Cristiano Ronaldo", takim: "Portekiz", flag: "🇵🇹", gol: 2 },
    { sira: 6, oyuncu: "Ismaïla Sarr", takim: "Senegal", flag: "🇸🇳", gol: 2 }
  ],
  topScorersNote: "49 maç tamamlandı, 1 maç devam ediyor (Kolombiya-DR Kongo). Messi ve Haaland 5'er golle ortak lider. Mbappé 4 golle 3. Ronaldo, Özbekistan'a attığı çift golle (6' + 39') bu turnuvada 2. golüne ulaştı; aynı zamanda 6 farklı Dünya Kupasında gol atan tarihin ilk oyuncusu oldu (41 yaşında!). Portekiz 5-0 bitti, Leão (87') ve Nematov KG (60') da gol attı. 2 gol grubunda: Brobbey, Gakpo, Kane, Ronaldo, Sarr, Summerville, Kamada, Ueda, Araujo, Havertz, Balogun, Larin, Saibari, Manzambi, Oyarzabal ve Vinícius Júnior.",
  topScorersNote_en: "49 matches played, 1 in progress (Colombia vs DR Congo). Messi and Haaland joint top on 5 goals each. Mbappé 3rd on 4. Ronaldo scored a brace vs Uzbekistan (6' + 39') — both in the first half — reaching 2 WC goals and becoming the first player in history to score in SIX different World Cups at age 41. Portugal won 5-0 with Nematov OG (60') and Leão (87') completing the rout. 2-goal group: Brobbey, Gakpo, Kane, Ronaldo, Sarr, Summerville, Kamada, Ueda, Araujo, Havertz, Balogun, Larin, Saibari, Manzambi, Oyarzabal and Vinícius Júnior.",
  // ---------------- TAKIM NOTLARI (favori kartlarında gösterilir) ----------------
  teamNotes: {
    "Türkiye": "2002 dünya üçüncülüğünden sonraki ilk Dünya Kupası hayal kırıklığıyla sona erdi: Avustralya'ya 2-0, Paraguay'a 0-1 yenilerek D Grubu'ndan elendi. Galarza'nın 2. dakikadaki (65. saniye) golü yeterli oldu; Almiron'ın 45. dakikada ağzını kapatan kırmızı kart görmesi de skor değiştirmedi. 3. maç (26 Haz ABD'ye karşı) sadece gurur mücadelesi.",
    "ABD": "İki maçta 2 galibiyet ve 6 puan — D Grubu'nda lider, Son 32'ye kaldı! Paraguay'ı 4-1, Avustralya'yı 2-0 yendi. Balogun (2+0), Freeman (1), Reyna, Burgess KK. Son maç 26 Haziran Türkiye'ye karşı.",
    "Avustralya": "Vancouver'da Türkiye'yi 2-0 yenerek turnuvaya güçlü başladı (Irankunda 27', Metcalfe 75'). Ardından Seattle'da ABD'ye 0-2 yenildi — Burgess'in 11. dakikadaki kendi golü ve Freeman'ın (43') kafası bitti. 3 puanla gruptan çıkma şansı devam ediyor; 26 Haziran Paraguay maçı kritik.",
    "Kanada": "Ev sahibi Kanada, Bosna Hersek ile 1-1 berabere kalarak (Larin 78') Dünya Kupası tarihindeki ilk puanını aldı. Ardından Katar'ı 6-0 ezerek tarihindeki ilk DK galibiyetini aldı — Jonathan David hat-trick (29', 45+3', 90+2'), Larin (16'), Saliba (64') ve Manai KK (75'). 4 puanla B Grubuna lider; gol averajıyla İsviçre'nin önünde.",
    "Katar": "B Grubu'nda İsviçre ile 1-1 berabere kalarak (Khoukhi 90+4' kafa) Dünya Kupası tarihindeki ilk puanını aldı. Ancak ikinci maçta Kanada'ya 0-6 yenildi — DK tarihinin en büyük mağlubiyetlerinden biri. 2 maçta 1 puan ve -6 averajla gruptan çıkması çok zor.",
    "İsviçre": "Katar'la 1-1 berabere kaldıktan (Embolo 17' pen) sonra Bosna Hersek'i 4-1 yenerek toparlandı. Son çeyrek inanılmazdı: Manzambi (74', 90'), Vargas (84') ve Xhaka (90+7' pen) gollerle B Grubunu gol averajıyla Kanada'nın hemen arkasında 4 puanla kapattı. Mahmić'in (90+3') Bosna için tek golü teselli ödülüydü.",
    "İspanya": "Cape Verde beraberliğinin (0-0) şokundan çıkan İspanya, Atlanta'da S. Arabistan'ı 4-0 ezerek H Grubu'nda 4 puanla liderliğe fırladı. Yamal (10'), Oyarzabal (21', 24') ve Altambakti'nin kendi golü (49') mükemmel bir gece sundu. Son maçta (27 Haz Uruguay) puan kaybetmeden Son 32'ye kalmak hedefiyle yürüyorlar.",
    "Cape Verde": "İspanya'yı 0-0'a tuttuktan sonra Miami'de Uruguay ile de 2-2 berabere kaldı. Kevin Pina'nın 21. dakikadaki 32 metrelik serbest vuruş golü (turnuvanın en uzun mesafeli golü) Cape Verde'nin DK tarihindeki ilk golü oldu. Helio Varela da 61'de ikinci golü ekledi. 2 puanla H Grubu'nda Uruguay ile birlikte ikinci sırada. Turnuvanın sürpriz takımı olmayı sürdürüyor.",
    "Almanya": "E Grubuna Curaçao'yu 7-1 ezerek başlayan Almanya, Toronto'da Fildişi Sahili'ne Kessié'nin 30. dakika golüyle 0-1 geride kaldı; ancak yedek Deniz Undav 68' (Amiri asisti) ve 90+4' (Nmecha asisti) çifte golüyle durumu 2-1'e çevirdi. Almanya 12 yıl aradan sonra Son 32'yi garantiledi — 6 puanla E Grubu birincisi. Undav 3 golle (1 Curaçao + 2 CIV) turnuvanın ortak gol kraliçesi.",
    "İran": "Yeni Zelanda'ya karşı 2-2 beraberliğin ardından Los Angeles'ta 10 kişilik Belçika'yı 0-0'a tuttu — Beiranvand 7 kurtarış yaptı, Ngoy'un 66. dakika kırmızı kartı da İran'a avantaj sağladı. 2 puanla G Grubu'nda ikinci sırada. 26 Haziran'da Mısır maçı Son 32 için belirleyici.",
    "Yeni Zelanda": "İran ile 2-2 berabere kaldıktan sonra Vancouver'da Mısır'a 1-3 yenildi. Surman'ın (15') güzel golüyle öne geçtiler ama Mısır üç golle yanıt verdi. Just'ın başarısından sonra ikinci maçta boş geçti. 1 puanla G Grubunda son sırada — gruptan çıkma şansı çok zor.",
    "Arjantin": "Son şampiyon Arjantin, 2 maçta 6 puan ve Son 32'de. Cezayir'e 3-0 (Messi hat-trick, 17', 60', 76') ve Avusturya'ya 2-0 (Messi 38' + 90+5'). Messi'nin 18 kariyer DK golü, tüm zamanlar rekorunu kırıyor. 8. dakika penaltısını kaçırdı ama rakibe nefes aldırmadı — tarihî brace. 28 Haziran son maç Ürdün'e karşı.",
    "İngiltere": "Tuchel yönetimindeki İngiltere, Hırvatistan'ı 4-2 yenerek başladı ardından Gana ile 0-0 berabere kaldı. Kane direkten dönen şutla ve son dakika fırsatını kaçıran performansıyla gol bulamayan İngiltere 4 puanla L Grubu'nda lider. Gana da 4 puana ulaştı — son maçta 28 Haziran Panama karşılaşması grubu bitiriyor.",
    "Hırvatistan": "İngiltere'ye 2-4 yenilen Hırvatistan, Toronto'da Panama'yı yedek giren Budimir'in 54. dakika kafasıyla 1-0 yenerek canlandı. 3 puanla L Grubu'nda üçüncü sıraya çıktı. 28 Haziran'daki son maçta İngiltere karşısında mutlak galibiyet gerekmekte — puan durumuna göre beraberlik de yeterli olabilir.",
    "Avusturya": "J Grubu'na Ürdün'ü 3-1 yenerek güçlü başlayan Avusturya, 2. maçta Arjantin'e 0-2 yenildi. Schlager 8. dakika Messi penaltısını kurtarsa da Messi 38' ve 90+5'te çift gol attı. 3 puanla ikinci sırada; 28 Haziran Cezayir maçını kazanırsa Son 32'ye kalır.",
    "Ürdün": "İlk Dünya Kupası maceraları 2 maç 2 mağlubiyetle sona erdi. Avusturya'ya 1-3 yenildi (Olwan 50' ülkenin DK tarihindeki ilk golü); Cezayir'e de 1-2 mağlup oldu (Al-Rashdan 36' öne geçmişti ama Benbouali 69' ve Gouiri 82' döndürdü). Ürdün elendi.",
    "Brezilya": "Fas ile 1-1 berabere kaldıktan (Saibari 21', Vinícius Júnior 32') sonra Haiti'yi 3-0 ezdi — Cunha çift attı (23', 36'), Vinícius Júnior tamamladı (40'). C Grubu'nda 4 puanla Fas ile birlikte lider; gruptan çıkma güçlü.",
    "Fransa": "I Grubu'nda 2 maç 2 galibiyet, 6 puan — Son 32'de! Senegal'i 3-1 (Mbappé 66', 90+6', Barcola 82'), Irak'ı 3-0 yendi (Mbappé 14', 2. yarıda çift; Dembélé 3.). Irak maçında şiddetli yıldırım fırtınası nedeniyle ilk yarı sonrası 130 dk erteleme yaşandı. Mbappé bu turnuvada 4 golle 3. sırada; Dembélé ilk DK golünü kaydetti. 26 Haziran son maç Norveç'e karşı — I Grubu liderliği için kritik.",
    "İskoçya": "Haiti'yi 1-0 yendi (McGinn 28') — 1990'dan beri ilk DK galibiyeti. Ardından Fas'a 0-1 yenildi (Saibari 2', turnuvanın en hızlı golü). 3 puanla üçüncü sırada; son maç 25 Haziran Brezilya'ya karşı.",
    "Fas": "Brezilya ile 1-1 berabere kaldıktan (Saibari 21') sonra İskoçya'yı Saibari'nin 2. dakika golüyle (turnuvanın en hızlı golü) 1-0 yendi. 4 puanla C Grubu'nda Brezilya ile birlikte lider; Son 32 yolunda güçlü konumda.",
    "Hollanda": "Japonya ile 2-2 berabere kaldıktan (Van Dijk 51', Summerville 64'; Nakamura 57', Kamada 88') sonra Houston'da İsveç'i 5-1 ezerek turnuvanın en büyük sürprizlerinden birini üretti — Brobbey (5', 17') ve Gakpo (47', 54') çifter, Summerville (89') tamamladı; İsveç için Elanga (59') tek golü attı. Brobbey'nin brace'i DK tarihinin en hızlı 4. çifti. F Grubu'nda 4 puanla lider.",
    "Japonya": "Hollanda ile 2-2 berabere kalan Japonya, ardından Monterrey'de Tunus'u 4-0 ezerek F Grubu'nda Hollanda ile birlikte zirveye çıktı (4 puan). Kamada (4'), Ueda (31', 82') ve İtō (69') görkemli bir gece yaşattı — ülkenin DK tarihindeki en golcü performansı. 26 Haziran İsveç'e karşı kritik maç.",
    "Fildişi Sahili": "Ekvador'u Amad Diallo'nun 90. dakika golüyle 1-0 yenerek başlayan turnuvada Toronto'da Almanya'ya 1-2 yenildi: Kessié 30. dakikada öne geçirse de Undav'ın çifte gol (68', 90+4') maçı devirdi. 3 puanla ikinci sırada; 25 Haziran Ekvador maçını kazanırsa gruptan çıkar.",
    "Ekvador": "Fildişi Sahili'ne 0-1 yenilip puansız başladıktan sonra Kansas City'de Curaçao ile 0-0 berabere kaldı — 27 şut (15 isabetli) çekti ama kaleci Eloy Room'u geçemedi. 1 puanla E Grubu'nda üçüncü; 25 Haziran Almanya maçı gruptan çıkmak için bir şans değil.",
    "İsveç": "Tunus'u 5-1 yenerek başlayan turnuvada Houston'da Hollanda'ya 1-5 ağır yenilgi aldı — Brobbey (5', 17'), Gakpo (47', 54') ve Summerville (89') karşısında sadece Elanga'nın 59. dakika golü bulabildi. 3 puanla F Grubunda 2. sıraya geriledi. 26 Haziran Japonya maçı (Japonya berabere kalmadıysa) gruptan çıkış için kritik.",
    "Tunus": "İsveç'e 5-1 yenildikten sonra Monterrey'de Japonya'ya da 4-0 mağlup oldu; 2 maçta 9 gol yiyerek gruptan elendi. DK'daki tek golü Rekik'in (43') İsveç'e karşı attığı golydi.",
    "Mısır": "Belçika ile 1-1 beraberliğin ardından Vancouver'da Yeni Zelanda'yı 3-1 yenerek Dünya Kupası tarihindeki ilk galibiyetini aldı! Surman'ın (15') erken golüne rağmen Mostafa Zico (58'), Salah (67') ve Trezeguet (82', Salah asist, kafa) net cevap verdi. 4 puanla G Grubunda lider; Son 32 kapısı açıldı.",
    "Belçika": "İki maçta 0 galibiyet ve 2 puan — Mısır'la 1-1, İran'la 0-0. Los Angeles'ta İran'a karşı 23 şut çekti ama Beiranvand'ı geçemedi; Ngoy'un 66. dakika kırmızı kartıyla da 10 kişiyle bitirdi. De Bruyne ve Lukaku etkisiz; 26 Haziran'da Yeni Zelanda maçı hayatta kalma maçı.",
    "S. Arabistan": "Miami'de Uruguay ile 1-1 berabere kaldıktan sonra Atlanta'da İspanya'ya 4-0 yenilerek zor duruma düştü. 1 puan ve -4 averajla H Grubu'nda son sıraya geriledi. Gruptan çıkış için son maçta Cape Verde'yi yenmek şart.",
    "Uruguay": "S. Arabistan'la 1-1 beraberliğin ardından Miami'de Cape Verde'ye 2-1 öne geçti (Araujo 44', Canobbio 45+6') ama Helio Varela'nın 61. dakika golüyle 2-2'ye düşürüldü. Cape Verde'nin DK sürprizi devam etti. Araujo turnuvada 2 gole ulaştı. 2 puanla H Grubu'nda Cape Verde ile birlikte ikinci sırada (gol averajıyla önde); 27 Haziran'da İspanya maçı belirleyici.",
    "Senegal": "2 maçta 0 puan — Fransa'ya 1-3, Norveç'e 2-3 yenildi. Norveç maçında Sarr çift gol atarak (Mané asisti, Jackson asisti) geriye döndürmeye çalıştı ama Haaland'ın hat-trick'i karşısında yetmedi. 26 Haziran son maç Irak'a karşı — bir teselli galibiyeti hedefi.",
    "Norveç": "I Grubu'nda 2 maç 2 galibiyet, 6 puan — Son 32'de! Irak'ı 4-1 (Haaland 28', 42', Østigård 76', Thorstvedt), Senegal'i 3-2 yendi. Senegal maçında Haaland hat-trick (48' + 2 gol); Sarr çiftle geri döndüyse de Norveç tutundu. Haaland bu turnuvada 5 golle Messi ile birlikte gol krallığı lideri. 26 Haziran son maç Fransa'ya karşı — I Grubu zirvesi için.",
    "Irak": "2 maçta 0 puan — Norveç'e 1-4, Fransa'ya 0-3 yenildi. Fransa maçında şiddetli fırtına nedeniyle 130 dk erteleme yaşandı; ikinci yarı başlayınca Mbappé ve Dembélé farkı açtı. Grubun son maçı 26 Haziran'da Senegal'e karşı — gruptan çıkış artık çok zor.",
    "Cezayir": "Arjantin'e 0-3 yenildikten (Messi hat-trick) sonra diriliş: Ürdün'ü Santa Clara'da 2-1 yendi. Al-Rashdan 36'da öne geçmişti; yedek Benbouali Mahrez köşesinden kafayla eşitledi (69'), Gouiri serbest toptan kazandırdı (82'). 3 puanla J Grubunda Avusturya ile eşit ama gol averajıyla (-2) 3. sırada. 28 Haziran'da Avusturya maçı Son 32 belirleyici.",
    "Portekiz": "Özbekistan'ı Houston'da 5-0 ezerek Son 32'ye kaldı! Ronaldo (6' + 39') ve Nuno Mendes (17' serbest vuruş) ilk yarıda 3-0 yaptı; ikinci yarıda Nematov kendi kalesine (60') ve Leão (87') maçı kapattı. Ronaldo bu turnuvada 2 gol kaydederek 6 farklı Dünya Kupasında gol atan tarihin ilk oyuncusu oldu (41 yaşında). 4 puanla K Grubu liderliği sürüyor.",
    "DR Kongo": "1974'ten bu yana ilk Dünya Kupası'nda K Grubunu çarpıcı açtılar: Houston'da favori Portekiz'i 1-1'e tuttular. Wissa'nın 45+5. dakika kafa golü (Masuaku asisti) tarihî bir puan getirdi. Kongo'nun 1974'ten bu yana ilk DK maçı ve ilk DK puanı. 24 Haziran Kolombiya maçı belirleyici olacak.",
    "Kolombiya": "K Grubuna Azteca'da Özbekistan'ı 3-1 yenerek lider başladı. Muñoz (41') erken golü attı; Fayzullaev (60') eşitlese de Díaz (65') ve Campaz (90+') galibiyeti garantiledi. Luis Díaz turnuvada etkileyici bir debut yaptı. 24 Haziran DR Kongo maçına güçlü geliyor.",
    "Gana": "Panama'yı 1-0 yenerek (Yirenkyi 90+5') başlayan Gana, Boston'da İngiltere ile 0-0 berabere kaldı — derinlerde savunma yaparak İngiltere'ye büyük fırsatları kaçırttı. 4 puanla İngiltere ile birlikte L Grubu'nun zirvesinde. 28 Haziran son maçta Hırvatistan'a karşı 1 puan yeterli olabilir.",
    "Meksika": "Ev sahibi Meksika, A Grubunu 6 puanla ve iki galibiyetle kapattı — turnuvanın ilk gruptan çıkan takımı oldu. G. Afrika'yı 2-0 (Quiñones 9', Jiménez 66'), Güney Kore'yi 1-0 (Romo 50') yendi. Final için yolu: Mexico City (Son 32) → muhtemel B 1. veya B 2. eşleşmesi. Baskı ev sahibi sıfatıyla her zaman var."
  },
  teamNotesEn: {
    "Türkiye": "First World Cup since finishing 3rd in 2002 ended in elimination: beaten 2-0 by Australia and 1-0 by Paraguay (Galarza 2', 65 seconds — the tournament's fastest goal). Almirón's red card (45') for covering his mouth under FIFA's new rule reduced Paraguay to 10 men but Türkiye still couldn't equalise. The June 26 match vs USA is now a dead rubber.",
    "ABD": "Two wins, 6 points — Group D leaders, through to the Round of 32! Beat Paraguay 4-1 and Australia 2-0 (Burgess OG 11', Freeman 43'). Balogun leads the line; final group game vs Türkiye on June 26.",
    "Avustralya": "Strong start with a 2-0 win over Türkiye in Vancouver (Irankunda 27', Metcalfe 75'). Then beaten 0-2 by the USA in Seattle — Burgess's 11th-minute own goal and Freeman's 43rd-minute header ended their chances of topping the group. Still on 3 points; the June 26 match vs Paraguay is must-win to advance.",
    "Kanada": "Hosts Canada earned their first-ever World Cup point drawing 1-1 with Bosnia (Larin 78'), then recorded their first-ever World Cup win in stunning fashion: 6-0 over Qatar (Larin 16', David 29'/45+3'/90+2' hat-trick, Saliba 64', Manai OG 75'). Jonathan David's hat-trick was the tournament's best individual performance so far. Canada lead Group B on 4 points ahead of Switzerland on goal difference.",
    "Katar": "Qatar earned their first-ever World Cup point with a 1-1 draw against Switzerland (Khoukhi 90+4' header). However, their second match ended in a 0-6 humiliation against hosts Canada — Jonathan David hat-trick (29', 45+3', 90+2'). Qatar now have 1 point and -6 goal difference after two games, making qualification near-impossible.",
    "İsviçre": "Switzerland drew 1-1 with Qatar (Embolo 17' pen, Khoukhi 90+4') in their opener, then bounced back to beat Bosnia 4-1. The last quarter-hour was extraordinary: Manzambi (74', 90'), Vargas (84') and Xhaka (90+7' pen) ran riot. Mahmić (90+3') consoled Bosnia. Switzerland sit 2nd in Group B on 4 points, behind Canada on goal difference.",
    "İspanya": "Spain bounced back emphatically from the Cape Verde stalemate to thrash Saudi Arabia 4-0 in Atlanta. Lamine Yamal (10'), Mikel Oyarzabal's brace (21', 24') and an Altambakti own goal (49') powered a dominant display. Spain lead Group H on 4 points and are on course for the Round of 32 heading into the final group game vs Uruguay (June 27).",
    "Cape Verde": "First-time World Cup participants Cape Verde continue to stun: after holding Spain 0-0, they fought back from 1-2 down to draw 2-2 with Uruguay in Miami. Kevin Pina's sensational 32-metre free-kick (21') — the longest-range goal of the tournament — was Cape Verde's first-ever World Cup goal. Helio Varela equalised again (61'). They have 2 points and sit joint-2nd in Group H alongside Uruguay. The tournament's biggest surprise package.",
    "Almanya": "After thrashing Curaçao 7-1 on matchday 1, Germany came from behind to beat Ivory Coast 2-1 in Toronto — Kessié (30') put the Ivorians ahead but super-sub Deniz Undav levelled (68', Amiri assist) and then scored the winner deep into stoppage time (90+4', Nmecha assist). Germany are through to the Round of 32 after a 12-year absence, topping Group E on 6 points. Undav now has 3 World Cup goals — joint top scorer alongside Messi and Jonathan David.",
    "İran": "After a 2-2 draw with New Zealand, Iran earned a vital goalless draw against 10-man Belgium in Los Angeles — goalkeeper Beiranvand made 7 saves, and Ngoy's 66th-minute red card helped protect the point. On 2 points and 2nd in Group G. The June 26 match vs Egypt will decide their fate.",
    "Yeni Zelanda": "After drawing 2-2 with Iran, New Zealand lost 1-3 to Egypt in Vancouver. Surman's (15') opener looked promising but Zico (58'), Salah (67') and Trezeguet (82') sealed a historic Egyptian win. Just's early form faded; New Zealand sit bottom of Group G on 1 point with very slim qualification hopes.",
    "Arjantin": "Defending champions Argentina through to the Round of 32 with 6 points (2 wins). Messi's hat-trick (17', 60', 76') demolished Algeria 3-0 in game 1. Against Austria, Messi missed an 8th-minute penalty but scored in the 38th (Medina assist — 17th WC goal, record-breaking) and again in the 90+5th minute (dribbled through defenders — 18th WC goal, extending the record) for a 2-0 win. Messi is the all-time World Cup scoring leader with 18 goals. Final group game vs Jordan on June 28.",
    "İngiltere": "England beat Croatia 4-2 on matchday 1 then were held 0-0 by Ghana on matchday 2 in Boston. Despite 27 shots, England couldn't break through Ghana's disciplined defensive block — O'Reilly hit the post and Kane squandered a late chance. England still top Group L on 4 points alongside Ghana. Final group game vs Panama on June 28.",
    "Hırvatistan": "After losing 2-4 to England on matchday 1, Croatia bounced back with a 1-0 win over Panama in Toronto — substitute Ante Budimir tapped home a Stanišić cross at the far post in the 54th minute. Croatia move to 3 points and into third. They need to beat England on June 28 to advance (or hope for help from Ghana vs Panama).",
    "Avusturya": "Austria beat Jordan 3-1 on matchday 1 (first WC win in 36 years). On matchday 2 vs Argentina, Schlager heroically saved Messi's 8th-minute penalty, but Messi scored twice (38' and 90+5') for a 2-0 defeat. Austria sit 2nd in Group J on 3 points — a win vs Algeria on June 28 secures the Round of 32.",
    "Ürdün": "Jordan's first-ever World Cup campaign ended with two defeats. Lost 1-3 to Austria (Olwan 50' — Jordan's first-ever WC goal) then 1-2 to Algeria: Al-Rashdan (36') gave them a stunning lead but Benbouali (69') and Gouiri (82') completed Algeria's comeback. Jordan are eliminated.",
    "Brezilya": "Drew 1-1 with Morocco (Saibari 21', Vinícius Júnior 32') then crushed Haiti 3-0 — Cunha brace (23', 36') and Vinícius Júnior (40'). Top of Group C alongside Morocco on 4 points. Record 5-time champions on track.",
    "Fransa": "France through to the Round of 32 with 6 points (2 wins). Beat Senegal 3-1 (Mbappé 66', 90+6'; Barcola 82') on matchday 1, then beat Iraq 3-0 on matchday 2 (Mbappé 14' Olise assist; Mbappé 2nd-half brace; Dembélé 3rd). The Iraq match made history as the first WC game delayed by weather — a 130-minute lightning storm stoppage at halftime. Mbappé now has 4 WC goals in this tournament and 60 international goals total. June 26 vs Norway decides Group I leadership.",
    "İskoçya": "Beat Haiti 1-0 (McGinn 28') — first World Cup win since 1990. Then lost 0-1 to Morocco (Saibari 2', the tournament's fastest goal). On 3 points in third place; final group game vs Brazil on June 25.",
    "Fas": "Drew 1-1 with Brazil (Saibari 21') then beat Scotland 1-0 with Saibari's 2nd-minute goal — the fastest of the tournament. On 4 points alongside Brazil at the top of Group C. Strong Round of 32 prospects.",
    "Hollanda": "After a 2-2 draw with Japan, the Dutch demolished Sweden 5-1 in Houston — Brobbey (5', 17') and Gakpo (47', 54') each scored twice, with Summerville (89') adding a fifth; Elanga (59') pulled one back for Sweden. Brobbey's opening brace was the 4th fastest in World Cup history. Netherlands lead Group F on 4 points.",
    "Japonya": "After drawing 2-2 with the Netherlands on matchday 1, Japan thrashed Tunisia 4-0 in Monterrey to join the Dutch at the top of Group F on 4 points. Kamada (4'), Ueda (31', 82') and Itō (69') produced Japan's biggest-ever World Cup scoring performance. The June 26 clash with Sweden is now a potential group decider.",
    "Fildişi Sahili": "Beat Ecuador 1-0 with a 90th-minute Amad Diallo goal to open the tournament, then lost 1-2 to Germany in Toronto: Kessié (30') put them ahead but Undav's late brace (68', 90+4') turned the match. On 3 points and second in Group E; a win vs Ecuador on June 25 would secure progress.",
    "Ekvador": "Lost 0-1 to Ivory Coast (Diallo 90') then drew 0-0 with Curaçao in Kansas City — 27 shots (15 on target) but couldn't beat keeper Eloy Room. On 1 point in third place in Group E; their final group game vs Germany on June 25 is all but a dead rubber.",
    "İsveç": "After thrashing Tunisia 5-1 on matchday 1, Sweden were hammered 1-5 by the Netherlands in Houston — Brobbey (5', 17'), Gakpo (47', 54') and Summerville (89') ran riot; only Elanga (59') offered consolation. They drop to 2nd in Group F on 3 points. The June 26 clash with Japan is now must-win.",
    "Tunus": "Lost 5-1 to Sweden then 0-4 to Japan in Monterrey — eliminated with 0 points and -8 goal difference after two matches. Omar Rekik's 43rd-minute goal against Sweden was their only World Cup moment.",
    "Mısır": "After a 1-1 draw with Belgium, Egypt recorded their first-ever World Cup win, beating New Zealand 3-1 in Vancouver. Despite Surman's (15') early goal, Mostafa Zico (58'), Salah (67') and Trezeguet (82', Salah assist, header) turned it around emphatically. On 4 points and top of Group G — the Round of 32 is in sight.",
    "Belçika": "Two matches, zero wins, 2 points — 1-1 with Egypt and 0-0 with Iran in Los Angeles. Belgium had 23 shots against Iran but couldn't beat Beiranvand; Ngoy's 66th-minute red card left them with 10 men. De Bruyne and Lukaku both underwhelming. The June 26 match vs New Zealand is a must-win.",
    "S. Arabistan": "After a promising 1-1 draw with Uruguay, Saudi Arabia were overwhelmed 4-0 by Spain in Atlanta — Yamal (10'), Oyarzabal (21', 24') and an Altambakti own goal (49') sealed a heavy defeat. They drop to last in Group H on 1 point with -4 goal difference. Must beat Cape Verde in the final group game to have any chance of advancing.",
    "Uruguay": "After drawing 1-1 with Saudi Arabia, Uruguay led Cape Verde 2-1 (Araujo 44', Canobbio 45+6') but were pegged back by Helio Varela's 61st-minute equaliser in Miami. Araujo now has 2 tournament goals. Uruguay sit joint-2nd in Group H on 2 points alongside Cape Verde (Uruguay ahead on goals scored). The June 27 match vs Spain will be decisive for advancement.",
    "Senegal": "Senegal winless after two matches (0 points) — lost 1-3 to France and 2-3 to Norway. Against Norway, Ismaïla Sarr scored twice (Mané assist, Jackson assist) to bring Senegal back into contention, but Haaland's hat-trick proved too much. June 26 vs Iraq is a dead rubber but a chance to salvage pride.",
    "Norveç": "Norway through to the Round of 32 with 6 points (2 wins). Beat Iraq 4-1 on matchday 1 (Haaland 28', 42'; Østigård 76'; Thorstvedt), then held off Senegal 3-2 on matchday 2. Haaland scored a hat-trick against Senegal (48' + 2 more goals; Ødegaard and Berg assisting) for a total of 5 WC goals in the tournament — tied with Messi for the Golden Boot. Sarr's brace gave Senegal hope but Norway held on. June 26 vs France is a Group I title decider.",
    "Irak": "Iraq winless after two matches (0 points) — lost 1-4 to Norway and 0-3 to France. The France game made WC history with a 130-minute weather stoppage at halftime; Mbappé and Dembélé put the game away after the break. Iraq face Senegal on June 26 in a match with little at stake for either side.",
    "Cezayir": "After the 0-3 hammering by Argentina (Messi hat-trick), Algeria bounced back with a 2-1 win over Jordan in Santa Clara. Al-Rashdan (36') gave Jordan an early lead but substitute Benbouali headed in a Mahrez corner (69') and Gouiri poked home the winner (82'). Algeria sit 3rd in Group J on 3 points, level with Austria but behind on goal difference (-2). The June 28 clash with Austria decides who joins Argentina in the Round of 32.",
    "Portekiz": "Portugal demolished Uzbekistan 5-0 in Houston to secure the Round of 32! Ronaldo's brace (6' + 39', both in the first half) made him the first player in history to score in SIX different World Cups at age 41. Nuno Mendes added a free-kick (17'), then Nematov's own goal (60') and Leão's strike (87') completed the rout. Portugal lead Group K with 4 points.",
    "DR Kongo": "DR Congo made a stunning return to the World Cup for the first time since 1974, holding favourites Portugal to a 1-1 draw in Houston. Yoane Wissa's 45+5' header (Masuaku assist) earned a historic first World Cup point. First WC appearance since 1974. The June 24 clash with Colombia will be decisive.",
    "Kolombiya": "Colombia topped Group K after beating Uzbekistan 3-1 at Azteca Stadium. Muñoz (41') opened the scoring; Fayzullaev (60') levelled for Uzbekistan, but Díaz (65') and Campaz (90+') sealed the win. Luis Díaz impressed on his debut stage. June 24 vs DR Congo is next.",
    "Meksika": "Host nation Mexico topped Group A with a perfect 6 points from two wins — the first team to qualify for the Round of 32. Beat South Africa 2-0 (Quiñones 9', Jiménez 66') and South Korea 1-0 (Romo 50'). Their route: Mexico City (R32) → likely vs Group B 1st or 2nd. Home crowd pressure is a factor but also a massive advantage.",
    "Gana": "Ghana won 1-0 against Panama (Yirenkyi 90+5') then held England to a 0-0 draw in Boston, frustrating the Three Lions with a deep defensive shape that forced 27 shots but conceded nothing. Ghana sit joint-top of Group L on 4 points alongside England. One point from the June 28 match vs Croatia should be enough to advance."
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
    { iso: "2026-06-20", saat: "20:00", grup: "F", ev: "Hollanda", dep: "İsveç", yer: "Houston", skor: "5 - 1", not: "Goller: Brobbey (5'), Brobbey (17'), Gakpo (47'), Gakpo (54'), Summerville (89') - Hollanda; Elanga (59') - İsveç. Brobbey'nin çifti DK tarihinin en hızlı 4. çifti. Hollanda, 5-1'lik galibiyetle F Grubu'nda belirleyici üstünlüğü kurdu." },
    { iso: "2026-06-20", saat: "23:00", grup: "E", ev: "Almanya", dep: "Fildişi Sahili", yer: "Toronto", skor: "2 - 1", not: "Goller: Kessié (30' - Fildişi Sahili), Undav (68', Amiri asisti - Almanya), Undav (90+4', Nmecha asisti - Almanya). Fildişi Sahili öne geçti ama yedek Undav'ın dramatik çifte golü maçı devirdi; Almanya 12 yıl aradan sonra Son 32'ye kaldı." },
    { iso: "2026-06-21", saat: "03:00", grup: "E", ev: "Ekvador", dep: "Curaçao", yer: "Kansas City", skor: "0 - 0", not: "Gol yok. Curaçao kalecisi Eloy Room maçın adamı oldu; Ekvador 27 şut çekti (15 isabetli) ama geçemedi. Curaçao E Grubu'ndaki ilk puanını aldı." },
    { iso: "2026-06-21", saat: "07:00", grup: "F", ev: "Tunus", dep: "Japonya", yer: "Monterrey", skor: "0 - 4", not: "Goller: Kamada (4'), Ueda (31'), İtō (69'), Ueda (82') - Japonya. Ülkenin DK tarihindeki en golcü performansı; Ueda çift attı. Tunus elendi." },
    { iso: "2026-06-21", saat: "19:00", grup: "H", ev: "İspanya", dep: "S. Arabistan", yer: "Atlanta", skor: "4 - 0", not: "Goller: Yamal (10' - İspanya), Oyarzabal (21' - İspanya), Oyarzabal (24' - İspanya), Altambakti KG (49' - İspanya). İspanya Cape Verde beraberliğinin (0-0) intikamını aldı; Oyarzabal çift gol, Yamal görkemli debut golü." },
    { iso: "2026-06-21", saat: "22:00", grup: "G", ev: "Belçika", dep: "İran", yer: "Los Angeles", skor: "0 - 0", not: "Gol yok. Ngoy (66') kırmızı kart — Taremi'yi serbest gol pozisyonunda düşürme. İran kalecisi Beiranvand 7 kurtarış yaptı. Belçika 23 şut çekti ama 10 kişiyle bitirdi ve gol bulamadı." },
    { iso: "2026-06-22", saat: "01:00", grup: "H", ev: "Uruguay", dep: "Cape Verde", yer: "Miami", skor: "2 - 2", not: "Goller: Pina (21', serbest vuruş, 32 metreden — Cape Verde'nin DK tarihindeki ilk golü ve turnuvanın en uzun mesafeli golü), Araujo (44' - Uruguay), Canobbio (45+6' - Uruguay), Helio Varela (61' - Cape Verde). Cape Verde ikinci kez beraberliğe yetti." },
    { iso: "2026-06-22", saat: "04:00", grup: "G", ev: "Yeni Zelanda", dep: "Mısır", yer: "Vancouver", skor: "1 - 3", not: "Goller: Surman (15' - Yeni Zelanda), Mostafa Zico (58' - Mısır), Salah (67' - Mısır), Trezeguet (82' - Mısır, Salah asist, kafa). Mısır Dünya Kupası tarihindeki ilk galibiyetini aldı." },
    { iso: "2026-06-22", saat: "20:00", grup: "J", ev: "Arjantin", dep: "Avusturya", yer: "Arlington", skor: "2 - 0", not: "Goller: Messi (38', Almada cutback/Medina asisti — 17. DK golü, tüm zamanlar rekoru kırıldı), Messi (90+5', rakip defansçıları çalımladı — 18. DK golü). Arjantin Son 32'ye kaldı." },
    { iso: "2026-06-23", saat: "00:00", grup: "I", ev: "Fransa", dep: "Irak", yer: "Philadelphia", skor: "3 - 0", not: "Goller: Mbappé (14', Olise asisti, sol ayakla uzaktan), Mbappé (2. yarı, Irak kalecisinin hatası), Dembélé (2. yarı). İlk yarı sonrası şiddetli yıldırım fırtınası nedeniyle 130 dakikalık tarihî erteleme — DK tarihinde bir ilk. Fransa Son 32'ye kaldı." },
    { iso: "2026-06-23", saat: "03:00", grup: "I", ev: "Norveç", dep: "Senegal", yer: "Toronto", skor: "3 - 2", not: "Goller: Haaland (48'), Haaland (Ødegaard asisti), Haaland (Berg asisti) - Norveç; Sarr (Mané asisti), Sarr (Jackson asisti) - Senegal. Haaland hat-trick yaptı, 5. DK golüne ulaştı; Sarr çiftle geri döndürmeye çalıştı ama yetmedi. Norveç Son 32'ye kaldı." },
    { iso: "2026-06-23", saat: "06:00", grup: "J", ev: "Ürdün", dep: "Cezayir", yer: "Santa Clara", skor: "1 - 2", not: "Goller: Al-Rashdan (36' - Ürdün, Tamari asisti), Benbouali (69' - Cezayir, Mahrez köşe asisti, kafa), Gouiri (82' - Cezayir, serbest toptan. Ürdün elendi; Cezayir 3 puana ulaştı." },
    { iso: "2026-06-23", saat: "20:00", grup: "K", ev: "Portekiz", dep: "Özbekistan", yer: "Houston", skor: "5 - 0", not: "Goller: Ronaldo (6' — tarihi: 6 farklı DK'da gol atan ilk oyuncu, 41 yaşında!), N. Mendes (17', serbest vuruş sol ayakla), Ronaldo (39', Fernandes asisti), Nematov KG (60'), Leão (87'). Portekiz Son 32'ye kaldı." },
    { iso: "2026-06-23", saat: "23:00", grup: "L", ev: "İngiltere", dep: "Gana", yer: "Boston", skor: "0 - 0", not: "Gol yok — İngiltere 27 şut çekti ama derinlerde oynayan Gana'yı yedemedi; O'Reilly direkten döndü, Kane son dakikada büyük fırsatı kaçırdı. Her iki takım 4'er puana ulaştı." },
    { iso: "2026-06-24", saat: "02:00", grup: "L", ev: "Panama", dep: "Hırvatistan", yer: "Toronto", skor: "0 - 1", not: "Goller: Budimir (54', Stanišić asisti — yedek olarak giren Budimir uzak direkte kafayla tamamladı). Panama elendi; Hırvatistan 3 puana ulaşarak son maç İngiltere'ye karşı umutla gidiyor." },
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
      { takim: "Hollanda", flag: "🇳🇱", o: 2, g: 1, b: 1, m: 0, a: 7, y: 3, p: 4 },
      { takim: "Japonya", flag: "🇯🇵", o: 2, g: 1, b: 1, m: 0, a: 6, y: 2, p: 4 },
      { takim: "İsveç", flag: "🇸🇪", o: 2, g: 1, b: 0, m: 1, a: 6, y: 6, p: 3 },
      { takim: "Tunus", flag: "🇹🇳", o: 2, g: 0, b: 0, m: 2, a: 1, y: 9, p: 0 }
    ],
    "G": [
      { takim: "Mısır", flag: "🇪🇬", o: 2, g: 1, b: 1, m: 0, a: 4, y: 2, p: 4 },
      { takim: "İran", flag: "🇮🇷", o: 2, g: 0, b: 2, m: 0, a: 2, y: 2, p: 2 },
      { takim: "Belçika", flag: "🇧🇪", o: 2, g: 0, b: 2, m: 0, a: 1, y: 1, p: 2 },
      { takim: "Yeni Zelanda", flag: "🇳🇿", o: 2, g: 0, b: 1, m: 1, a: 3, y: 5, p: 1 }
    ],
    "H": [
      { takim: "İspanya", flag: "🇪🇸", o: 2, g: 1, b: 1, m: 0, a: 4, y: 0, p: 4 },
      { takim: "Uruguay", flag: "🇺🇾", o: 2, g: 0, b: 2, m: 0, a: 3, y: 3, p: 2 },
      { takim: "Cape Verde", flag: "🇨🇻", o: 2, g: 0, b: 2, m: 0, a: 2, y: 2, p: 2 },
      { takim: "S. Arabistan", flag: "🇸🇦", o: 2, g: 0, b: 1, m: 1, a: 1, y: 5, p: 1 }
    ],
    "I": [
      { takim: "Fransa", flag: "🇫🇷", o: 2, g: 2, b: 0, m: 0, a: 6, y: 1, p: 6 },
      { takim: "Norveç", flag: "🇳🇴", o: 2, g: 2, b: 0, m: 0, a: 7, y: 3, p: 6 },
      { takim: "Senegal", flag: "🇸🇳", o: 2, g: 0, b: 0, m: 2, a: 3, y: 6, p: 0 },
      { takim: "Irak", flag: "🇮🇶", o: 2, g: 0, b: 0, m: 2, a: 1, y: 7, p: 0 }
    ],
    "J": [
      { takim: "Arjantin", flag: "🇦🇷", o: 2, g: 2, b: 0, m: 0, a: 5, y: 0, p: 6 },
      { takim: "Avusturya", flag: "🇦🇹", o: 2, g: 1, b: 0, m: 1, a: 3, y: 3, p: 3 },
      { takim: "Cezayir", flag: "🇩🇿", o: 2, g: 1, b: 0, m: 1, a: 2, y: 4, p: 3 },
      { takim: "Ürdün", flag: "🇯🇴", o: 2, g: 0, b: 0, m: 2, a: 2, y: 5, p: 0 }
    ],
    "K": [
      { takim: "Portekiz", flag: "🇵🇹", o: 2, g: 1, b: 1, m: 0, a: 6, y: 1, p: 4 },
      { takim: "Kolombiya", flag: "🇨🇴", o: 1, g: 1, b: 0, m: 0, a: 3, y: 1, p: 3 },
      { takim: "DR Kongo", flag: "🇨🇩", o: 1, g: 0, b: 1, m: 0, a: 1, y: 1, p: 1 },
      { takim: "Özbekistan", flag: "🇺🇿", o: 2, g: 0, b: 0, m: 2, a: 1, y: 8, p: 0 }
    ],
    "L": [
      { takim: "İngiltere", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", o: 2, g: 1, b: 1, m: 0, a: 4, y: 2, p: 4 },
      { takim: "Gana", flag: "🇬🇭", o: 2, g: 1, b: 1, m: 0, a: 1, y: 0, p: 4 },
      { takim: "Hırvatistan", flag: "🇭🇷", o: 2, g: 1, b: 0, m: 1, a: 3, y: 4, p: 3 },
      { takim: "Panama", flag: "🇵🇦", o: 2, g: 0, b: 0, m: 2, a: 0, y: 2, p: 0 }
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
    note_en: "Qualified for Round of 32: Mexico (A, 6pts), USA (D, 6pts), Germany (E, 6pts), Argentina (J, 6pts), France (I, 6pts), Norway (I, 6pts), Portugal (K, 4pts). Türkiye & Jordan & Panama ELIMINATED. England and Ghana lead Group L (4pts each); Croatia 3pts. Netherlands and Japan lead Group F (4pts each). Brazil and Morocco lead Group C (4pts). Canada lead Group B (4pts). Spain lead Group H (4pts). Egypt lead Group G (4pts). Algeria & Austria level on 3pts in Group J. Belgium and Iran level on 2pts; Uruguay and Cape Verde level on 2pts. Colombia vs DR Congo (Group K) in progress.",
    note: "Son 32'ye kalanlar: Meksika (A), ABD (D), Almanya (E), Arjantin (J), Fransa (I), Norveç (I), Portekiz (K). Türkiye, Ürdün ve Panama elendi. İngiltere ve Gana L'de 4'er puanla lider; Hırvatistan 3 puan. Hollanda ve Japonya F'de 4'er puan. Brezilya ve Fas C'de 4'er puan. Kanada B'de 4 puan. İspanya H'de 4 puan. Mısır G'de 4 puan. J Grubu'nda Cezayir ve Avusturya 3'er puan. Belçika ve İran 2'şer puan; Uruguay ve Cape Verde 2'şer puan. Kolombiya-DR Kongo (K Grubu) devam ediyor."
  },
  // ---------------- BİLGİ KUTUSU ----------------
  facts_en: [
    "First World Cup with 48 teams and 3 host nations (USA, Canada, Mexico). 104 matches in total.",
    "Top 2 of each group + the 8 best third-placed teams advance to the Round of 32.",
    "Türkiye are eliminated at the group stage — beaten 2-0 by Australia and 1-0 by Paraguay (Galarza 65 seconds, the tournament’s fastest goal). Their first World Cup since 2002 ends without a win.",
    "The final is on July 19 at MetLife Stadium, New Jersey (around 22:00 GMT+3).",
    "Messi’s hat-trick vs Algeria + brace vs Austria: 18 WC goals total — all-time record. Haaland 5 goals (2 vs Iraq + hat-trick vs Senegal). Mbappé 4 goals. Ronaldo 2 goals, became first player to score in SIX different World Cups (age 41).",
    "Portugal 5-0 Uzbekistan: Ronaldo brace (6’, 39’), Nuno Mendes (17’), Nematov OG (60’), Leão (87’). England 0-0 Ghana — both on 4pts. Croatia 1-0 Panama (Budimir 54’) — Panama eliminated. Group L finale on June 28: England vs Panama, Croatia vs Ghana.",
    "7 teams through to the Round of 32: Mexico, USA, Germany, Argentina, France, Norway, Portugal. Türkiye, Jordan and Panama eliminated. Group J (Algeria vs Austria June 28) and Groups B, C, F, G, H, I, K, L still to be decided.",
    "Colombia vs DR Congo (Group K) kicked off at 05:00 TSİ on June 24. Today at 22:00 TSİ: Switzerland vs Canada and Bosnia vs Qatar (Group B). June 25: Group A and C final matches."
  ],
  facts: [
    "İlk kez 48 takım ve 3 ev sahibi ülke (ABD, Kanada, Meksika). Toplam 104 maç.",
    "Her gruptan ilk 2 takım + en iyi 8 üçüncü, Son 32 turuna kalıyor.",
    "Türkiye, 2002 dünya üçüncülüğünden sonraki ilk Dünya Kupası’nda Avustralya (0-2) ve Paraguay’a (0-1) yenilerek elendi. Galarza 65. saniyede (2’) gol attı — turnuvanın en hızlı golü.",
    "Final 19 Temmuz’da New Jersey MetLife Stadyumu’nda (TSİ 22:00 civarı).",
    "Messi 18 DK goluyla tüm zamanlar rekorcusu. Haaland 5 gol (Irak’a 2 + Senegal’e hat-trick). Mbappé 4 gol. Ronaldo 2 gol ve 6 farklı DK’da gol atan ilk oyuncu (41 yaşında).",
    "Portekiz 5-0 Özbekistan: Ronaldo çift (6’, 39’), Nuno Mendes (17’), Nematov KG (60’), Leão (87’). İngiltere 0-0 Gana — her ikisi 4 puan. Hırvatistan 1-0 Panama (Budimir 54’) — Panama elendi. L Grubu finali 28 Haziran’da.",
    "Son 32’ye kalan 7 takım: Meksika, ABD, Almanya, Arjantin, Fransa, Norveç, Portekiz. Türkiye, Ürdün ve Panama elendi. B, C, F, G, H, I, J, K, L grupları henüz bitmedi.",
    "24 Haziran sabahı 05:00 TSİ’de başlayan Kolombiya-DR Kongo maçı devam ediyor. Bugün 22:00’de B Grubunun 3. maçları: İsviçre-Kanada ve Bosna-Katar."
  ]
};

};
