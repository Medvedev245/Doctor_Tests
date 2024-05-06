// Пример использования функции

//Legislativa

//   function parseTextToQuestions(text) {
//   const questions = [];

//     // Разделяем текст на отдельные блоки вопросов
//     const questionBlocks = text.split(/\n\n/);

//     // Проходимся по каждому блоку
//     questionBlocks.forEach(block => {
//       // Ищем номер вопроса и сам вопрос
//       const questionMatch = block.match(/^\s*(\d+\..+?)\n/);
//       if (questionMatch) {
//         const question = questionMatch[1].trim();
//   const questionObj = {
//     question: question,
//     answers: [],
//     book: ['Base_2023_medicine'],
//     topic: ['Base_2023_medicine'],
//     correctAnswers: [],
//     description: [], // Изменено на пустой массив для description
//     img: [''],
//   };

//         // Ищем ответы на вопрос
//         const answerMatches = block.match(/^\s*([+-].+?)\s*(?:✅)?$/gm);
//         if (answerMatches) {
//           answerMatches.forEach(answerMatch => {
//             const trimmedAnswer = answerMatch.trim();
//             questionObj.answers.push(trimmedAnswer);
//             if (trimmedAnswer.startsWith('+')) {
//               questionObj.correctAnswers.push(trimmedAnswer);
//             }
//           });
//         }

//         // Ищем описание вопроса
//         const descriptionMatches = block.match(/\[(.+?)\]/g);
//         if (descriptionMatches) {
//           const descriptions = descriptionMatches.map(desc =>
//             desc.slice(1, -1)
//           );
//           questionObj.description = descriptions;
//         }

//         questions.push(questionObj);
//       }
//     });

//     return questions;
//   }

//   const result = parseTextToQuestions(text);
//   console.log(result);

//KLENER - 1 возвращает вопрос и ответы сначала поменять на }{
//   const parseText = text => {
//     return text[0]
//       .split(/\d+\.\d+\. /)
//       .filter(item => item.trim())
//       .map(item => {
//         const [question, ...options] = item
//           .split('\n')
//           .map(line => line.trim());
//         const optionsArray = options.map(option => option.trim());
//         const newText = optionsArray
//           .map(el => el.split(')').slice(1).join(')').trim())
//           .filter(text => text !== ''); // Фильтруем пустые строки;
//         // console.log(newText);
//         const answers = optionsArray.filter(elem => elem.includes('}{'));
//         // console.log(answers);

//         const newAnswers = answers.map(el => el.replace(/^A}\{[a-z]\)\s*/, ''));
//         console.log(newAnswers);

//         return {
//           question,
//           answers: newText,
//           book: ['Klener'], // Пример значения для поля "book"
//           topic: ['Geriartrie'], // Пример значения для поля "topic"
//           correctAnswers: newAnswers, // Массив с правильными ответами
//         };
//       });
//   };
const Functions = () => {
  const text = `
  1. Umělé ukončení těhotenství (UUT) na žádost ženy je povoleno do
  a) 10 týdne těhotenství
  b) 11 týdne
  c) 12 týdne
  d) 13 týdne
  2. Časová hranicí pro provedení miniinterrupce je před ukončením
  a) 6 týdne těhotenství
  b) 7 týdne
  c) 8 týdne
  d) 9 týdne
  3. Jak se nejpřesněji stanoví délka trvání těhotenství před UUT
  a) gynekologickým vyšetřením
  b) ultrazvukem
  c) podle posledních menses
  d) laboratorně podle hormonálních koncentrací
  4. Kolize hlaviček dvojčat při porodu hrozí u této kombinace poloh plodů
  a) polohy plodů podélné vně hlavičkou
  b) poloha plodu A hlavičkou a plodu В pánevním koncem
  c) poloha plodu A pánevním konce a plodu В hlavičkou
  d) poloha plodu A hlavičkou a plodu В příčná
  5. Nejšetrnější dilatace děložního hrdla do 24 týdne těhotenstvíje
  a) klasickými laminariemi
  b) syntetickými hydrofilními tyčinkami
  c) nástřihy
  d) kovovými dilatátory
  6. Nejčastější poranění při UUT je
  a) poškození děložního hrdla
  b) perforace děložního fundu
  c) poranění hrdla a parametrií
  d) poškození močového měchýře
  7. UUT u nezletilých musí být se souhlasem zákonného zástupce
  a) do 15 let
  b) do 16 let
  c) do 17 let
  d) vždy
  8. Jak dlouhý musí být časový interval mezi dvěma UUT z nezdravotní indikace
  a) 3 měsíce
  b) 6 měsíců
  c) 9 měsíců
  d) 12 měsíců
  9. Kdo vyřizuje žádost o UUT
  a) každý lékař
  b) obvodní gynekolog
  c) zvláštní komise
  d) vedoucí zdravotnického zařízení
  10. Do kdy po UUT je nutno aplikovat u Rh negativních žen anti-D globulin
  a) do 24 hodin
  b) do 48 hodin
  c) do 72 hodin
  d) do 96 hodin
  11. Od kterého týdne těhotenství se po UUT aplikuje u Rh negativních žen anti-D globulin
  a) od 6 týdne
  b) od 7 týdne
  c) od 8 týdne
  d) vždy
  12. Jak se nejspolehlivěji stanoví diagnóza zbytků plodového vejce po UUT
  a) podle klinického průběhu
  b) gynekologickým vyšetřením
  c) laboratorním vyšetřením hormonů
  d) ultrazvukem
  13. Při interrupci gravidity 9 týdne dilatujeme děložní hrdlo obvykle do
  a) 9-10mm
  b) 10-12mm
  c) 12-13 mm
  d) nedilatujeme
  14. Při interrupci se děložní hrdlo nejčastěji poraní
a) sondou
b) potratovými kleštěmi
c) kyretou
d) dilatátory
15. Nejnebezpečnějšíje perforace dělohy
a) potratovými kleštěmi
b) sondou
c) kyretou
d) dilatátory
16. Nejčastější předčasné ukončení těhotenství v České republice je
a) samovolný potrat
b) mimoděložní těhotenství
c) miniinterrupce
d) ostatní legální potraty
17. Sterilizace ženy se provádí
a) odstraněním adnex (adnexektomií)
b) odstraněním vaječníků (ovarektomií)
c) odstraněním vejcovodů (salpingektomií)
d) zneprůchodněním vejcovodů
18. Nejčastější přístup pro sterilizaci ženy
a) laparoskopie
b) Iaparotomie
c) zadní kolpotomie
d) hysteroskopie
19. Nejčastějším etiologickým faktorem inkompetence děložního hrdla je
a) faktor traumatický
b) faktor imunologický
c) faktor vrozený
d) faktor infekční
20. Cerclage děložního hrdla se provádí nejčastěji
a) na konci П trimestru
b) na začátku III trimestru
c) koncem I trimestru
d) na začátku II trimestru
21. Ve které výši děložního hrdla se cerclage provádí
a) ve výši vnitřní branky
b) v polovině délky děložního hrdla
c) ve výši zevní branky
d) není to důležité
22. Steh po cerclage odstraňujeme před porodním termínem nejčastěji
a) 21 dnů
b) 7 dnů
c) těsně před porodem
d) 14 dnů
23. Hysterostomatotomie jsou
a) mělké nástřihy děložního hrdla
b) hluboké nástňhy
c) nástřih nad vnitřní branku
d) vaginální císařský řez
24. Při hysterostomatotomii provádíme obvykle
a) 2—3 nástřihy
b) 3-4 nástřihy
c) 4—5 nástřihů
d) 1 nástřih
25. Při hysterostomatotomii provádíme nejčastěji nástřih u čísla
a) 3, 7, 11
b) 3a9
c) 6 a 12
d) 2, 6, 10
26. Suturu cervixu po porodu provádíme, je-li ruptura dlouhá alespoň
a) 0,5 cm
b) 1,5 cm
c) 1,0
d) nad 2 cm
27. Dirupci vaku blan provádíme při poloze podélné  hlavičkou v první době porodní nejčastěji při nálezu dilatace branky
a) 1-2cm
b) při zašlé brance
c) 5-6cm
d) 3-4cm
28. Dirupce vaku blan se provádí
a) mimo kontrakci
b) na vrcholu kontrakce
c) při končící kontrakci
d) kdykoliv
29. Dirupce vaku blan se v praxi nejčastěji provádí
a) prstem
b) jednou branží amerických kleští
c) dlouhou punkční jehlou
d) speciální kanylou
30. Dirupce vaku blan způsobuje
a) snižuje bolestivost kontrakcí
b) přímo urychluje dilataci branky
c) zesiluje a zpravidelňuje kontrakce
d) zlepšuje prokrvení hlavičky
31. Dirupci vaku blan provádíme,
a) když hlavička plodu excentricky naléhá na pánevní vchod
b) když je hlavička plodu vysoko nad pánevním vchodem
c) když hlavička plodu centricky naléhá na pánevní vchod
d) při naléhání pupečníku
32. Paracervikálm blok se používá při
a) sutuře poševní klenby
b) sutuře hrdla
c) rigiditě branky
d) sutuře pochvy
33. Akutní příhoda při dirupci vaku blan je
a) naléhání pupečníku
b) výhřez pupečníku
c) vzduchová embolie
d) ascenze infekce
34. Vakuumextrakce se v porodnictví nejčastěji užívá ve
a) Švédsku
b) USA
c) České republice
d) Německu
35. Vlastní trakce při vakuumextrakci nemá přesáhnout časový limit
a) 10 minut
b) 15 minut
c) 20 minut
d) 5 minut
36. Kontraindikací naložení vakuumextraktoru je
a) zašlá branka děložní
b) odteklá plodová voda
c) obličejová poloha
d) váznutí porodu v pánevním východu
37. Credého hmat je
a) zkouška odloučení placenty
b) nevhodná exprese placenty
c) vybavení hlavičky při porodu plodu v poloze pánevním koncem
d) zjišťování výše děložního fundu v těhotenství
38. Nejčastější poruchou ve třetí porodní době je
a) spazmus děložní branky
b) febrilní stav
c) slabá děložní činnost
d) porucha odlučování lůžka
39. Nejčastější poruchou odlučování lůžka je
a) placenta adherens
b) placenta accreta
c) placenta percreta
d) placenta increta
40. Při placenta adherens provedeme
a) instrumentální vybavení lůžka
b) Credého hmat
c) manuální vybavení lůžka
d) digitální vybavení lůžka
41. Manuální vybavení lůžka provádíme
a) v lokální anestezii
b) v bez anestezie
c) v analgetické směsi
d) v celkové anestezii
42. Nejčastější komplikací časné gravidity, která vyžaduje laparoskopický nebo laparotomický výkon je
a) samovolný potrat
b) mimoděložní těhotenství
c) perforace dělohy
d) zamlklý potrat
43. Nejčastější přípravou к vaginální porodnické operaci je
a) exstirpace vaginálního septa
b) incize hymenu
c) nástřih děložní branky
d) epiziotomie
44. Laterální epiziotomie se provádí nad dolním pólem poševního introitu
a) lem
b) 2cm
c) 3cm
d) 5 cm
45. Mediolaterální epiziotomie se provádí od dolního pólu poševního introitu v úhlu
a) 35 stupňů
b) 40 stupňů
c) 45 stupňů
d) 50 stupňů
46. Výhodou mediolaterální epiziotomie proti mediální epiziotomii je
a) snadnější provedení sutury
b) větší rozšíření poševního vchodu
c) lepší výsledný kosmetický efekt
d) menší krevní ztráta
47. Nevýhodou mediální epiziotomie proti laterální epiziotomii při porodu je
a) větší krevní ztráta
b) nebezpečí vzniku ruptury hráze třetího stupně
c) více nepříjemných pocitů při hojení
d) obtížné provedení sutury
48. Při dolní střední laparotomií pronikáme do dutiny břišní
a) 4 anatomickými vrstvami
b) 3 anatomickými vrstvami
c) 6 anatomickými vrstvami
d) 5 anatomickými vrstvami
49. Během laparotomie je při přestřihávání peritonea nebezpečí poranění
a) ovaria
b) vejcovodu
c) močovodu
d) močového měchýře
50. Z operací, které přicházejí v úvahu při porodu plodu v poloze koncem pánevním, je pro plod nejšetmější
a) forceps na následnou hlavičku
b) obrat zevními hmaty
c) císařský řez
d) extrakce plodu
51. Extrakci plodu za konec pánevní provádíme nejčastěji
a) vakuumextraktorem
b) manuálně
c) digitálně
d) forcepsem
52. Císařským řezem při poloze podélné pánevním koncem se doporučuje ukončit těhotenství u primipary při předpokládané hmotnosti plodu nad
a) 3250 g
b) 3000g
c) 3500 g
d) 2750g
53. Frekvence porodů per sectionem caesaream v ČR je
a) 5%
b) 10%
c) 15%
d) 20%
54. Císařským řezem se doporučuje při poloze podélné pánevním koncem ukončit těhotenství při předpokládané hmotnosti plodu pod
a) 2500 g
b) 3000 g
c) 3250 g
d) 2750g
55. Nejčastější indikací císařského řezu ze strany plodu je
a) vícečetné těhotenství
b) vrozená vada slučitelná se životem
c) akutní hypoxie plodu
d) nezralý plod
56. Nejčastější indikací pro ukončení těhotenství a porodu dvojčat císařským řezem je
a) hypoxie plodu
b) předčasný porod
c) dystokie dělohy
d) nepříznivé uložení plodů
57. Nejčastější operace při porodu dvojčat je
a) porod per forcipem
b) císařský řez
c) obrat
d) obrat a extrakce
58. Nejčastější indikace císařského řezu ze společných příčin matka - plod
a) infekce za porodu
b) kefalopelvický nepoměr
c) preeklampsie
d) porodnické krvácení
59. Nejčastější indikací к ukončení těhotenství a porodu plodu v poloze podélné pánevním koncem je
a) fetopelvický nepoměr
b) hypoxie plodu
c) nižší hmotnostní kategorie
d) neúplná poloha plodu koncem pánevním
60. U primipar ukončujeme těhotenství při poloze podélné pánevním koncem císařským řezem
a) u 30% žen
b) u 45 % žen
c) u 75 % žen
d) u 60% žen
61. Vysoký přímý stav hlavičky se řeší
a) císařský řezem
b) kleštěmi
c) vakuumextrakcí
d) manuální pomocí hlavičce
62. Hluboký příčný stav hlavičky se řeší
a) císařským řezem
b) vakuumextrakcí
c) manuální pomocí hlavičce
d) rotačními kleštěmi
63. Sectio minor je
a) zmenšovací operace
b) císařský řez na nezralý plod
c) operační přerušení těhotenství do 24 týdne
d) opakovaný císařský řez
64. Předem se někdy plánuje tato porodnická operace
a) s použitím kleští
b) nástřihy branky
c) obrat a extrakce
d) císařský řez
65. Při císařském řezu se na děloze nejčastěji používá
a) podélný cervikokorporální řez
b) příčný poloobloukovitý řez
c) U řez
d) obrácený T řez
66. Při extrakci následné hlavičky u porodu plodu v poloze podélné koncem pánevním vykonává vlastní trakci
a) ruka zaklesnutá prsty za raménka plodu
b) ruka uložená na obličeji plodu
c) ruka zavedená do úst plodu
d) ruka vykonávající tah za dolní čelist
67. Uváznutí ramének při porodu nastává nejčastěji
a) po předchozím porodu ukončeném císařským řezem
b) při hypertrofii plodu
c) u patologicky změněné pánve
d) při poloze podélné koncem pánevním
68. Obrat je porodnická operace,jejímž cílem je změnit
a) naléhání plodu
b) držení plodu
c) polohu plodu
d) postavení plodu
69. Podmínkou pro obrat zevními hmaty je
a) polyhydramnion
b) pravidelná děložní činnost
c) volná pohyblivost plodu
d) celková anestezie
70. Obrat zevními hmaty provádíme při
a) poloze podélné koncem pánevním
b) poloze obličejové
c) poloze podélné hlavičkou
d) poloze čelní
71. Při obratu zevními hmaty měníme polohu plodu
a) hmaty působícími přes stěnu břišní a stěnu děložní a současně celou rukou zavedenou do dutiny děložní
b) hmaty působícími přes stěnu břišní a stěnu děložní
c) hmaty působícími přes stěnu břišní a děložní a současně pomocí speciálního nitroděložního nástroje
d) hmaty působícími přes stěnu břišní a stěnu děložní a současně 2 prsty zavedenými hrdlem do dutiny děložní
72. Při obratu vnitřními hmaty měníme polohu plodu
a) hmaty působícími přes stěnu bňšní a stěnu děložní
b) hmaty působícími přes stěnu břišní a stěnu děložní a současně celou rukou zavedenou do děložní dutiny
c) hmaty působícími přes stěnu břišní a stěnu děložní a současně 2 prsty zavedenými hrdlem do děložní dutiny
d) hmaty působícími přes stěnu břišní a stěnu děložní a současně pomocí speciálního nitroděložního nástroje
73. Při obratu hmaty sdruženými měníme polohu plodu
a) hmaty působícími přes stěnu břišní a stěnu děložní a současně celou rukou zavedenou do děložní dutiny
b) hmaty působícími přes stěnu břišní a stěnu děložní a současně 2 prsty zavedenými hrdlem do děložní dutiny
c) hmaty působícími přes stěnu břišní a stěnu děložní
d) hmaty působícími přes stěnu břišní a stěnu děložní a současně pomocí speciálního nitroděložního nástroje
74. Hrozící ruptura dělohy při porodu se projevuje zvláště
a) zvýšením počtu pulsů
b) kolapsovým stavem
c) zvýšením teploty
d) bolestmi v dolním děložním segmentu
75. Nejstaršími porodnickými operacemi jsou
a) zmenšovací operace
b) porodnické kleště
c) porodnické obraty
d) císařský řez
76. Poruchy hojení operační rány se vyskytují nejčastěji u pacientek
a) s chorobami plic
b) se srdečními vadami
c) s chorobami ledvin
d) s diabetem
77. Největší hmotnost mají kleště
a) Simpsonovy
b) Kjellandovy
c) Breusovy
d) Shuteho
78. Kleště umožňují extrakci hlavičky plodu
a) tahem
b) kompresí hlavičky
c) kombinací těchto sil
d) jako nástroj páky
79. Mezi podmínky к užití kleští neplatí
a) normální pánev
b) hlavička vstouplá malým oddílem
a) hrdlo a branka zašlé
d) plod musí být živý
80. Pokusnou trakci naloženými kleštěmi provádíme
a) těsně nad začátkem kontrakce
b) na začátku kontrakce
c) v přestávce mezi kontrakcemi
d) těsně po skončení kontrakce
81. Při hlavě velkým oddílem vstouplé do pánve
a) krční rýha je hmatná 3 prsty nad sponou
b) biparietální průměrje pod rovinou pánevního vchodu
c) při vnitřním vyšetření lze hmatat celou zadní stěnu stydké kosti
d) je hmatná horní polovina přední stěny kosti křížové
82. Při abnormální rotaci hlavičky u polohy záhlavím nacházíme ve východu pánevním
a) šev šípový v přímém průměru, obličej pod sponou
b) šev šípový v příčném průměru s malou fontanelou vlevo
c) šev šípový v příčném průměru s malou fontanelou vpravo
d) šev šípový v šikmém průměru
83. Mezi nezbytně nutné podmínky pro ukončení porodu kleštěmi nepatří
a) hlavička fixovaná
b) zašlá děložní branka
c) dorotovaná hlavička plodu
d) odteklá plodová voda
84. Trakci porodnickými kleštěmi vykonáváme
a) během kontrakce
b) nezávisle na kontrakci
c) před kontrakcí
d) po skončení kontrakce
85. К extrakci hlavičky z pánevního východu použijeme nejčastěji
a) forceps Breus
b) forceps Kjelland
c) forceps Shute
d) forceps Simpson
86. К extrakci hlavičky z pánevní úžiny použijeme nejčastěji
a) forceps Simpson
b) forceps Shute
c) forceps Breus
d) forceps Kjelland
87. К extrakci hlavičky z pánevní šíře není vhodný
a) forceps Breus
b) forceps Simpson
c) forceps Shute
d) forceps Kjelland
88. Nejčastější indikací к ukončení porodu kleštěmi je
a) krvácení z rodidel
b) nepostupující porod v I době porodní
c) hypoxie plodu
d) výhřez pupečníku
89. Použití kleští u donošeného plodu kontraindikuje
a) obličejová poloha
b) temenní poloha
c) abnormální rotace u polohy záhlavím
d) čelní poloha
90. Pro matku i plod je nejšetrnější extrakce hlavičky kleštěmi
a) z východu pánevního
b) z vchodu pánevního
c) ze šíře pánevní
d) z úžiny pánevní
91. Nejčastější poranění při porodu per forcipem je
a) ruptura hráze a pochvy
b) poškození poševní klenby
c) ruptura děložního hrdla
d) poranění močového měchýře
92. Bummova kyreta se používá při
a) umělém přerušení těhotenství
b) probatomí kyretáži
c) revizi děložní dutiny v šestinedělí
d) revizi děložní dutiny po porodu
93. Nejčastější porodnickou operací v České republice je
a) císařský řez
b) obrat a extrakce
c) forceps Breus
d) forceps Simpson
94. Při císařském řezu provádíme nejčastěji laparotomii
a) pararektální vpravo
b) příčnou suprapubickou
c) dolní střední
d) horní střední
95. Při císařském řezu otevíráme dělohu nejčastěji řezem
a) korporálním
b) cervikokorporálním
c) příčným poloobloukovitým řezem
d) spirálním řezem
96. Kontraindikací císařského řezu je
a) silné krvácení z rodidel
b) kefalopelvický nepoměr
c) výhřez pupečníku
d) hlavička pevně fixovaná v malé pánvi
97. Po kolika minutách má optimálně porodník dokončit vybavení plodu v poloze pánevním koncem porozeného po pupečník
a) 2 minutách
b) 3 minutách
c) 4 minutách
d) 6 minutách
98. Při nástřihu děložní branky se podle hodinových ruček vyhýbáme číslu
a) 6
b) 12
c) 3
d) 9
99. Pro forceps na hlavičku v pánevní šíři nemůžeme použít tento typ kleští
a) Shutteho kleště
b) Breusovy kleště
c) Simpsonovy kleště
d) Kjellandovy kleště
100. Klasickou indikací к císařskému řezu není
a) kefalopelvický nepoměr
b) krvácení z rodidel
c) přání rodičky
c) výhřez pupečníku
101. Snížení perinatální mortality zvýšením frekvence císařských řezů se týká nejvíce hmotnostní skupiny
a) 2500-3000 g
b) 1500-2000 g
c) 700-1500 g
d) 2000-2500 g
102. Nejčastější následnou mateřskou komplikací císařského řezu je
a) endometritida a infekce operační rány
b) salpingitida
c) sekundární sterilita
d) krvácení z rodidel
103. Nejzávažnější komplikací po císařském řezu s podélnou incizí na děloze je
a) prodloužené hojení laparotomie
b) větší bolestivost v pooperačním průběhu
c) vznik pooperačmch adhezí
d) ruptura děložní jizvy v následujícím těhotenství nebo porodu
104. Při naléhání pupečníku ukládáme rodičku před císařským řezem
a) na bok, na který pupečník nenaléhá
b) na záda
c) na bok, na který pupečník naléhá
d) na břicho
105. Při sectio caesarea cum hysterectomia hrozí zvláště poranění
a) močového měchýře
b) ovarií
c) vejcovodů
d) močovodů
106. Nejčastější skupinou poporodních komplikací po císařském řezu je
a) ileózní komplikace
b) infekční komplikace
c) embolie, krvácení a šok
d) dysurické obtíže
107. Pro opakovaný císařský řez je trvalá tato indikace
a) krvácení
b) zúžená pánev
c) preekiampsie
d) kefalopelvický nepoměr
108. Za maximum se v České republice doporučuje tento počet císařských řezů u jedné rodičky
a) 2
b) 3
c) 4
d) bez omezení
109. Nejčastější příčinou smrti žen po císařském řezu je v České republice
a) komplikace při anestezii
b) krvácení
c) infekce retroperitoneálního hematomu
d) infekce sutury děložní a sepse
110. Nejzávažnějším pozdním následkem císařského řezu je
a) ruptura v jizvě při další graviditě
b) poruchy menstruace
c) sekundární sterilita
d) infertilita
111. Při váznutí hlavičky při porodu koncem pánevním provedeme
a) extrakci hlavičky
b) zmenšovací operací
c) ukončení porodu kleštěmi
d) aplikaci prostaglandinů
112. Při váznutí vstupu hlavičky do pánevního vchodu během porodu při poloze plodu podélné hlavičkou a vydatných kontrakcích provedeme
a) ukončení porodu forcepsem
b) aplikaci oxytocinu
c) ukončení porodu císařským řezem
d) aplikaci spazmolytik
113. Kristeilerova exprese je
a) kompletní náhrada břišního lisu
b) vytlačování koagul při krvácení ve III porodní době
c) doplnění vypuzovacích sil při porodu per forcipem na hlavičku v šíři
d) nevhodné vytlačování plodu v závěru II porodní doby
114. Při (JUT se nejčastěji užívá zrcadlo
a) Šimonovo
b) Scherbakovo
c) Trélatovo
d) Breiského
115. Při klasickém císařském řezu je incize na děloze
a) ve fundu
b) korporální
c) cervikokorporální
d) příčná v korporální oblasti
116. Sectio minor je výkon
a) vaginální
b) transabdominální
c) kombinovaný
d) extraperitoneální
117. К přerušení těhotenství ve II. trimestru je nejvhodnější postup
a) aplikace prostaglandinů i.m., i.v.
b) infúze oxytocinu
c) aplikace laminarií
d) aplikace prostaglandinů intracervikálně a intraovulámě
118. Hysterorrhaphia je
a) luxace těhotné dělohy před laparotomickou ránu
b) otevření děložní dutiny
c) překrytí sutury děložní stěny peritoneem (peritonealizace)
d) sutura děložní stěny
119. Laparotomický Pfannenstielův rez se provádí nad horním okrajem symfýzy
a) 1-2cm
b) 2-3 cm
c) 3-4cm
d) výše
120. Dilatace branky pro kraniotomii musí být alespoň
a) 3—4cm
b) 5-6cm
c) 2 cm lem
d) branka zašlá
121. Zámek řešený per contabulationem mají kleště
a) německé
b) francouzské
c) anglické
d) kanadské
122. Zámek řešený per axim mají kleště
a) německé
b) francouzské
c) anglické
d) norské
123. Zámek řešený per axim et per contabulationem mají kleště
a) německé
b) francouzské
c) anglické
d) norské
124. Proč se při císařském řezu otevírá děložní dutina v dolním děložním segmentu
a) je to nejpřehlednější přístup
b) je rychlejší
c) nepoškozuje svalovinu aktivní části dělohy
d) lépe se vybavuje plod
125. Elektivní císařský řez je
a) plánovaný
b) akutní bez přípravy
c) komplikovaný
d) na přání rodičky
126. V rámci předoperačního vyšetření krve před císařským řezem nemá význam
a) krevní obraz
b) sedimentace
c) krevní skupina
d) hemokoagulační vyšetření

`;

  const answers = `
  1c 2b 3b 4c 5b 6a 7b 8b 9b
  10c 11c 12d 13a 14d 15a 16c 17d 18a 19a
  20d 21a 22d 23a 24a 25d 26a 27d 28b 29b
  30c 31c 32c 33b 34a 35b 36c 37b 38d 39a
  40c 41d 42b 43d 44b 45c 46b 47b 48d 49d
  50c 51b 52c 53c 54a 55c 56d 57b 58b 59a
  60c 61a 62d 63c 64d 65b 66a 67b 68c 69c
  70a 71b 72b 73b 74d 75a 76d 77d 78a 79b
  80c 81b 82a 83c 84a 85d 86a 87b 88c 89d
  90a 91a 92d 93a 94b 95c 96d 97b 98b 99c
  100c 101c 102a 103d 104a 105d 106c 107b 108b 109b
  110a 111a 112c 113d 114b 115b 116b 117d 118d 119b
  120b 121c 122a 123b 124c 125a 126b
  
  
  `;
  const correctNewAnswers = answers.split(' ');
  //   console.log(correctNewAnswers);

  function parseQuestions(text, correctNewAnswers) {
    const questionBlocks = text
      .split(/(\d+\.\s+)/)
      .filter(Boolean)
      .slice(1); // Используем filter(Boolean), чтобы удалить пустые элементы массива
    const questions = [];

    for (let i = 0; i < questionBlocks.length; i += 2) {
      const questionNumber = questionBlocks[i];

      const questionAndAnswers = questionBlocks[i + 1]
        .split('\n')
        .filter(Boolean);
      const question = questionAndAnswers[0].trim();
      const answers = questionAndAnswers.slice(1).map(answer => answer.trim());
      const newAnswers = answers.filter(answer => answer !== '');
      // console.log(newAnswers);

      let myCorrectNewAnswers = [];

      correctNewAnswers.forEach(element => {
        const letter = element.charAt(element.length - 1);
        const numberChar = element.slice(0, -1);
        const restOfQ = questionNumber.slice(0, -2);

        if (numberChar === restOfQ) {
          // console.log(newAnswers);
          for (let ans of newAnswers) {
            // console.log(ans);
            const restOfAns = ans.slice(0, 1);

            if (restOfAns === letter) {
              myCorrectNewAnswers.push(ans);
            }
          }
        }
      });

      questions.push({
        question: `${questionNumber + question}`,
        answers: newAnswers,
        book: ['Živný'], // Пример значения для поля "book"
        topic: [
          '10. Operace v souvislosti s těhotenstvím a porodem. I. ČÁST PREGRADUÁLNÍ',
        ],
        correctAnswers: myCorrectNewAnswers, // Массив с правильными ответами
      });
    }

    return questions;
  }

  const result = parseQuestions(text, correctNewAnswers);
  console.log(result);

  return (
    <div>
      {result.length > 0 && (
        <ul>
          {result.map((el, index) => (
            <li key={index} style={{ listStyle: 'none' }}>
              <div>
                {'{'}"question": "{el.question}",
              </div>

              <div>
                "answers": [
                {el.answers.map(el => (
                  <div>"{el}",</div>
                ))}
                ],
              </div>
              <div>"book": ["{el.book}"],</div>
              <div>"topic": ["{el.topic}"],</div>
              <div>"correctAnswers": ["{el.correctAnswers}"],</div>
              <div>"description": ["{el.description}"],</div>
              <div>
                <img src={el.img} alt="" />
                "img": ["{el.img}"]{'},'}
              </div>
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Functions;
