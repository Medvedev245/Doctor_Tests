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
  1. U každého porodu vedeného v ústavním zařízení by měl být vždy přítomen
  a) pediatr
  b) neonatolog
  c) zdravotník, který umí zahájit resuscitaci novorozence
  d) sestra se specializací ARIP
  2. Odsávání z horních cest dýchacích po porodu ramének provádíme
  a) u všech novorozenců
  b) neprovádíme nikdy
  c) u nezralých novorozenců
  d) u novorozenců s obsahem mekonia v plodové vodě
  3. Tracheální odsávání pod laryngoskopickou kontrolou provádíme u novorozenců
  a) asfyktických
  b) s aspirací plodové vody
  c) nedýchajících, s aspirací mekonia
  d) u všech se zkalenou plodovou vodou
  4. Při kardiopulmonální resuscitaci je poměr kompresí hrudníku a vdechů u novorozence
  a) 3:1
  b) 4:1
  c) 2:1
  d) 5:1
  5. Při farmakologické resuscitaci novorozence  nepoužíváme
  a) adrenalin
  b) 8,4% NaHCO3
  t) 4,2% NaHCO3
  d) fyziologický roztok
  6. Kolik novorozenců potřebuje na sále nějaký stupeň resuscitace
  a) 10-15%
  b) 3-5%
  c) 5-10%
  d) 5-10%
  7. Kardiopulmonální resuscitaci po porodu asfyktického novorozence ukončujeme
  a) pokud asystolie trvá více než 15 minut
  b) při sekundárním apnoe
  c) pokud pacient spontánně nedýchá 15 minut
  d) při známkách mozkové smrti
  8. Adrenalin při farmakologické resuscitaci novorozence
  a) podává se v dávce 1 ml/kg
  b) podává se intrakardiálně
  c) ředí se 1 : 20
  d) lze podat intratracheálně
  9. Jaký je obvod hlavy donošeného fyziologického novorozence
  a) 28-30cm
  b) 31-34cm
  c) 35-38 cm
  d) 28-38 cm
  10. Které změny jsou charakteristické pro kardiovaskulární systém novorozence
  a) dilatace ductus venosus
  b) dilatace pravé síně
  c) bifázická P vlna na EKG
  d) pokles tlaku v plicnici
  11. Nejčastější kardiální příčina cyanózy u novorozenců je
  a) Fallotova tetralogie
  b) transpozice velkých cév
  c) plicní hypertenze
  d) otevřený ductus arteriosus
  12. Které z následujících onemocnění není spojeno s novorozeneckou žloutenkou
  a) galaktosémie
  b) diabetes mellitus matky
  c) kongenitální syfilis
  d) Reyův syndrom
  13. Součástí skóre podle Apgarové není
  a) krevní tlak
  b) srdeční akce
  c) svalový tonus
  d) barva
  14. Co nepatří к symptomům diabetické fetopatie
  a) spinální ageneze
  b) katarakta
  c) transpozice velkých cév
  d) hyperbilirubinémie
  15. Která z následujících cév u plodu přivádí okysličenou krev
  a) ductus arteriosus
  b) umbilikalní tepna
  c) umbilikalní žíla
  d) žádná z výše uvedených
  16. Při odsávám novorozence na porodním sále používáme odsávací podtlak
  a) 3-5 cm H,O
  b) 10-15cmH,O
  c) 50-60cm H^O
  d) minimálně 100cm H2O
  17. Fyziologické rozmezí dechové frekvence u zdravého donošeného novorozence činí
  a) 20-30 dechů/min
  b) 40-60 dechů/min
  c) 80-90 dechů/min
  d) 100-120 dechů/min
  18. Kredeizace chrání novorozence před
  a) adnátní В streptokokovou infekcí
  b) pneumopatií
  c) chlamydiovou infekcí
  d) gonokokovým zánětem spojivky
  19. Hypotrofický novorozenec má porodní hmotnost
  a) pod 1500g
  b) pod 2000 g
  c) pod 2500 g
  d) pod 10 percentil hmotnosti odpovídající týdnu těhotenství
  20. Vitamin K1 aplikovaný novorozenci po porodu chrání novorozence před
  a) krvácivou nemocí
  b) retinopatií
  c) žloutenkou
  d) apnoickou pauzou
  21. Mezi úvodní kroky resuscitace novorozence patří
  a) intubace
  b) zevní srdeční masáž
  c) insuflace kyslíku samorozpínacím vakem
  d) zevní stimulace a inhalace kyslíku
  22. O bradykardii novorozence hovoříme při akci srdeční (horní hranice)
  a) pod 120/min
  b) pod 80/min
  c) pod 140/min
  d) pod 40/min
  23. Absolutní kontraindikací kojení ze strany matky je
  a) febrilie 38 °C
  b) hepatitida В
  c) léčba cytostatiky
  d) ragády bradavek
  24. Mateřské mléko má oproti mléku kravskému
  a) vyšší obsah bílkovin
  b) stejný obsah bílkovin
  c) nižší obsah bílkovin
  d) neobsahuje imunoglobulin A
  25. Mezi výhody kojení nepatří
  a) ochrana před průjmy
  b) nižší výskyt fenylketonurie
  c) nižší riziko výskytu alergických onemocnění v dětském věku
  d) nižší riziko výskytu cukrovky v dětském věku
  26. Který reflex neřadíme mezi základní novorozenecké reflexy
  a) hledači
  b) úchopový
  c) Moroův
  d) optikofaciální
  27. Jaká hodnota acidobazické rovnováhy z pupečníkové tepny je kritériem těžké perinatálm asfyxie
  a) pO, pod 50 kPa
  b) pH pod 7,0
  c) BE pod -8
  d) pCO2 nad 50 kPa
  28. Hypotermií jsou ohroženi hlavně novorozenci
  a) přenášení
  b) s diabetickou fetopatií
  c) nedonošení
  d) s váhovým úbytkem nad 10%
  29. Mezi novorozence s velmi nízkou porodní hmotností řadíme děti s porodní hmotností
  a) pod lOOOg
  b) pod 1500g
  c) pod 2000 g
  d) pod 2500 g
  30. Při hyperbilirubinémii ohrožuje novorozence jádrovým ikterem
  a) bilirubin nekonjugovaný
  b) bilirubin konjugovaný
  c) bilirubin konjugovaný i nekonjugovaný
  d) rozpadové produkty bilirubinu
  31. Centrální cyanóza u novorozence může být způsobena
  a) chladovým stresem
  b) srdečními vadami s L-P zkratem
  c) poruchami dýchání
  d) opožděným uzávěrem tepenné dučeje
  14. Co nepatří к symptomům diabetické fetopatie
a) spinální ageneze
b) katarakta
c) transpozice velkých cév
d) hyperbilirubinémie
15. Která z následujících cév u plodu přivádí okysličenou krev
a) ductus arteriosus
b) umbilikalní tepna
c) umbilikalní žíla
d) žádná z výše uvedených
16. Při odsávám novorozence na porodním sále používáme odsávací podtlak
a) 3-5 cm H,O
b) 10-15cmH,O
c) 50-60cm H^O
d) minimálně 100cm H2O
17. Fyziologické rozmezí dechové frekvence u zdravého donošeného novorozence činí
a) 20-30 dechů/min
b) 40-60 dechů/min
c) 80-90 dechů/min
d) 100-120 dechů/min
18. Kredeizace chrání novorozence před
a) adnátní В streptokokovou infekcí
b) pneumopatií
c) chlamydiovou infekcí
d) gonokokovým zánětem spojivky
19. Hypotrofický novorozenec má porodní hmotnost
a) pod 1500g
b) pod 2000 g
c) pod 2500 g
d) pod 10 percentil hmotnosti odpovídající týdnu těhotenství
20. Vitamin K1 aplikovaný novorozenci po porodu chrání novorozence před
a) krvácivou nemocí
b) retinopatií
c) žloutenkou
d) apnoickou pauzou
21. Mezi úvodní kroky resuscitace novorozence patří
a) intubace
b) zevní srdeční masáž
c) insuflace kyslíku samorozpínacím vakem
d) zevní stimulace a inhalace kyslíku
22. O bradykardii novorozence hovoříme při akci srdeční (horní hranice)
a) pod 120/min
b) pod 80/min
c) pod 140/min
d) pod 40/min
23. Absolutní kontraindikací kojení ze strany matky je
a) febrilie 38 °C
b) hepatitida В
c) léčba cytostatiky
d) ragády bradavek
24. Mateřské mléko má oproti mléku kravskému
a) vyšší obsah bílkovin
b) stejný obsah bílkovin
c) nižší obsah bílkovin
d) neobsahuje imunoglobulin A
25. Mezi výhody kojení nepatří
a) ochrana před průjmy
b) nižší výskyt fenylketonurie
c) nižší riziko výskytu alergických onemocnění v dětském věku
d) nižší riziko výskytu cukrovky v dětském věku
26. Který reflex neřadíme mezi základní novorozenecké reflexy
a) hledači
b) úchopový
c) Moroův
d) optikofaciální
27. Jaká hodnota acidobazické rovnováhy z pupečníkové tepny je kritériem těžké perinatálm asfyxie
a) pO, pod 50 kPa
b) pH pod 7,0
c) BE pod -8
d) pCO2 nad 50 kPa
28. Hypotermií jsou ohroženi hlavně novorozenci
a) přenášení
b) s diabetickou fetopatií
c) nedonošení
d) s váhovým úbytkem nad 10%
29. Mezi novorozence s velmi nízkou porodní hmotností řadíme děti s porodní hmotností
a) pod lOOOg
b) pod 1500g
c) pod 2000 g
d) pod 2500 g
30. Při hyperbilirubinémii ohrožuje novorozence jádrovým ikterem
a) bilirubin nekonjugovaný
b) bilirubin konjugovaný
c) bilirubin konjugovaný i nekonjugovaný
d) rozpadové produkty bilirubinu
31. Centrální cyanóza u novorozence může být způsobena
a) chladovým stresem
b) srdečními vadami s L-P zkratem
c) poruchami dýchání
d) opožděným uzávěrem tepenné dučeje
49. Příčinou syndromu respirační tísně nedonošených (RDS) je
a) anatomická nezralost plic
b) aspirace plodové vody
c) infekce
d) anatomická a funkční nezralost plic s nedostatkem surfaktantu
50. Mezi klinické známky syndromu respirační tísně nedonošených (RDS) nepatří
a) dyspnoe a tachypnoe
b) cyanóza
c) hypertenze
d) grunting
51. V léčbě syndromu respirační tísně nedonošených(RDS) se aplikuje surfaktant
a) intravenózně
b) perorálně
c) endotracheálně
d) inhalační formou
52. Které onemocnění novorozence je kontraindikací kojení
a) adnátní В streptokoková infekce
b) Rh izoimunizace
c) hypotrofie
d) galaktosémie
53. U donošeného fyziologického novorozence bývá malá fontanela
a) otevřená
b) v niveu
c) vpadlá
d) uzavřená
54. Hyperbilirubinémii novorozence neléčíme
a) výměnnou transfúzí
b) infuzí glukózy
c) intermitentní fototerapií
d) kontinuální fototerapií
55. Nejčastější pozdní formou В streptokokové infekce novorozenců bývá
a) meningitida
b) bronchitida
c) pneumonie
d) otitida
56. Mezi časné formy adnátní В streptokokové infekce novorozenců nepatří
a) sepse
b) pneumonie
c) meningitida
d) faryngitida
57. Mikrocefalie donošeného novorozence má obvod hlavy (uveďte hraniční hodnotu)
a) pod 35 cm
b) pod 33 cm
c) pod 31 cm
d) pod 29 cm
58. Do jakého věku dítěte doporučujeme plné kojení bez přídavků stravy
a) maximálně do 1 měsíce
b) maximálně do 3 měsíců
c) minimálně do 6 měsíců
d) minimálně do 24 měsíců
59. Kolostrum má proti mateřskému mléku
a) méně bílkovin
b) více bílkovin
c) více cukrů
d) více tuků
60. Jaká poloha novorozence a kojence ve spánku zvyšuje riziko náhlého úmrtí (SIDS)
a) na zádech
b) na levém boku
c) na pravém boku
d) na bříšku
61. Horní typ parézy plexus brachialis (Duchenne­ Erb) má poranění v rozsahu
a) C3-C4
b) cs c6
c) C7-Th,
d) Th-Th3
62. Fraktura klíční kosti jako porodní poranění u novorozenců
a) vyžaduje okamžité zahájení rehabilitace
b) sádrovou fixaci
c) podávání analgetik
d) projeví se při palpaci typickou krepitací
63. Co jsou milia
a) benigní kožní afekce -retenční cystičky mazových žláz
b) kožní příznak kandidové infekce
c) kožní příznak stafylodermie
d) pigmentové névy
64. Kritické vrozené srdeční vady se v novorozeneckém období projeví
a) vždy šelestem
b) cyanózou nebo srdečním selháním
c) vždy cyanózou
d) vždy srdečním selháním
65. Při jaké konstelaci může nastat hemolytická nemoc novorozence
a) matka Rh pozitivní, novorozenec Rh negativní
b) matka krevní skupina 0, novorozenec skupina В
c) matka krevní skupina A, novorozenec skupina В
d) matka krevní skupina A, novorozenec skupina 0
66. Očkování proti tuberkulóze - BCG vakcinace - se aplikuje
a) perorálně
b) intramuskulámě
c) intravenózně
d) intradermálně
67. Paréza nervus facialis se u novorozence projeví
a) asymetrickým pláčem
b) poruchou sání
c) poruchou polykání
d) afonií
68. Fyziologické rozmezí leukocytů novorozence 1 den je
a) 5—8-109/l
b) 9-45 109/l
c) 5-15 109/l
d) 9-36 109/l
69. Průměrná porodní hmotnost donošeného novorozence v populaci ČR je asi
a) 4200 g
b) 3900 g
c) 3500 g
d) 3000 g
70. Jako rizikový faktor se počítá odtok plodové vody více než (uveďte hraniční hodnotu)
a) 12 hodin
b) 18 hodin
c) 48 hodin
d) 72 hodin
71. Indikace zahájení ventilace vakem a maskou u novorozence po porodu je
a) skóre Apgarové v 1 minutě 3-5
b) dyspnoe
c) srdeční akce 100-120/min
d) apnoe a bradykardie pod 100 nereagující na taktilní stimulaci
72. Termín porodu se počítá
a) z data oplodňující soulože
b) z ovulace
c) z posledního dne posledních menses
d) z prvního dne posledních menses
73. Správné pásmo délky těhotenství pro donošeného novorozence je
a) 38-40 ukončený týden těhotenství
b) 36-38 ukončený týden těhotenství
c) 38^12 ukončený týden těhotenství
d) 38-39 ukončený týden těhotenství
74. Hypotrofii plodu lze očekávat při této patologii těhotenství
a) ulcus ventriculi matky
b) EPH gestóza
c) cholecystopatie matky
d) diabetes mellitus matky
75. Mezi klinicky hodnocené známky zralosti novorozence nepatří
a) vývoj dentice
b) vývoj ušního boltce
c) lokalizace ůponu pupečníku
d) rýhování plosek nohou
76. Přenošené dítě zpravidla nemá
a) inhibici kůže a pupečníku zkalenou plodovou vodou
b) hypoglykémii první den po porodu
c) redukci podkožního tuku při porodu
d) tenkou pokožku s prosvítající cévní kresbou
77. Děti z vícečetných těhotenství nemají zpravidla
a) vyšší riziko komplikací za porodu
b) nižší gestační stáří než průměr populace
c) nižší porodní hmotnost než průměr populace
d) vyšší gestační stáří než průměr populace
78. Perinatální úmrtnost je počet dětí zemřelých
a) před porodem, během porodu a 7 dní po porodu/100 000 narozených
b) před porodem, během porodu a 7 dní po porodu/1000 narozených
c) za porodu/100 000 narozených
d) za porodu/1000 narozených
79. Mezi infekce označované »TORCH« nepatří
a) listerie
b) rubeola
c) toxoplazmóza
d) cytomegalovirus
80. Mezi standardní screeningové vyšetření novorozence nepatří
a) screeningové vyšetření galaktosémie
b) screeningové vyšetření kyčelních kloubů
c) screening fenylketonurie
d) Guthrieho zkouška
81. Nejčastější adnátní bakteriální infekci způsobuje(í)
a) Staphylococcus aureus
b) streptokoky
c) atypické mikroorganismy (chlamydie, ureaplazmy, mykoplazmy)
d) Escherichia coli
82. Infekce vzniklé in utero se nejčastěji projeví do
a) 72 hodin po porodu
b) 24 hodin po porodu
c) známky infekce jsou patrny ihned po narození
d) 48 hodin po porodu
83. Infekce vzniklé kolonizací při průchodu porodním kanálem se projeví nejčastěji
a) během 24 hodin po porodu
b) po 7 dnu života
c) během prvých 2 dnů života
d) během prvých 7 dnů života
84. Kongenitální diafragmatická hernie novorozence
a) může mít rychlý infaustní průběh
b) vyžaduje okamžitý transport na chirurgické pracoviště
c) vyžaduje resuscitaci, dýchání maskou s vakem
d) se projeví vždy ihned po porodu
85. Galaktosémie je onemocnění novorozence, který nemá
a) zvýšené jatemí testy
b) hyperglykémii
c) hypoglykémii
d) hepatosplenomegalii
86. Atrézie jícnu novorozence se po porodu nejčastěji projevuje
a) zvracením
b) dušností
c) pozdním odchodem šmolky
d) zvýšeným sliněním
87. Oligurie u novorozence je produkce moči menší než
a) 1 ml/kg/h
b) 2 ml/kg/h
c) 0,3 ml/kg/h
d) 0,5 ml/kg/h
88. Fyziologický úbytek porodní hmotnosti u donošeného novorozence bývá
a) 9-13%
b) 2-3%
c) 1^1%
d) 5-8%
89. Maximum hmotnostního úbytku u donošeného novorozence lze očekávat
a) 3-5 týden života
b) 4-8 den života
c) 3-5 den života
d) 2 den života
90. Nejčastějším laboratorním příznakem galaktosémie je
a) metabolická alkalóza
b) metabolická acidóza
c) hyperglykémie
d) hypoglykémie
91. Fyziologický ikterus u donošeného novorozence dosahuje 3 den života bilirubinémie
a) 215 nmol/1
b) 215 pkat/l
c) 215 mmol/1
d) 215 pmol/1
92. První močení se objeví do 24 hodin po porodu
a) u 93 % donošených novorozenců
b) u 100 % donošených novorozenců
c) u 40% donošených novorozenců
d) u 66 % donošených novorozenců
93. První stolice odejde u 94 % donošených novorozenců do
a) 12 hodin života
b) 24 hodin života
c) 36 hodin života
d) 48 hodin života
94. Apgarové skóre hodnotí
a) vztah výživy к délce gestace
b) časnou poporodní adaptaci
c) hmotnostní přírůstky po narození
d) pozdní poporodní adaptaci
95. Nekorigovaná transpozice velkých tepen se projevuje
a) během 48 hodin po porodu
b) většinou až po týdnu života
c) manifestace závisí na příjmu stravy
d) okamžitě po porodu
96. Pneumotorax u novorozence
a) vyžaduje vždy hrudní drenáž
b) vzniká pouze u arteficiální plicní ventilace
c) léčí se vždy umělou plicní ventilací
d) může vzniknout spontánně
97. Žlutozelenavý kožní kolorit u novorozence bezprostředně po porodu nejčastěji způsobuje
a) zkalená plodová voda
b) syndrom »yellow skin baby«
c) anemizace novorozence
d) Rh inkompatibilita mezi matkou a plodem
98. HBsAg pozitivní matky
a) mohou kojit své novorozence
b) mohou kojit až po vyšetření HBsAg
c) rodí novorozence s poškozením jater
d) nesmějí kojit
99. Polycytémie může být spojena
a) s polyploidií
b) s polymorfonukleáry
c) s polycystickými ledvinami
d) s polyhydramniem
100. Obstrukční nekomunikující hydrocefalus nemá průchodné
a) aquaeductus Sylvii
b) foramina Magendi et Luschkae
c) foramina Monroi
d) foramen ovale
  
`;

  const answers = `
done
  
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
        topic: ['15. Fyziologie a patologie novorozence. I.ČÁST PREGRADUÁLNÍ'],
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
