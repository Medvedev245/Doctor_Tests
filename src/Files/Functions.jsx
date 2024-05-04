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
  1. Na porodné má nárok
  a) každá matka
  b) matka rodící maximálně druhé dítě
  c) jen matka řádně navštěvující těhotenskou poradnu
  d) matka z rodiny sociálně slabé
  2. Porodné je
  a) vydáváno automaticky s rodným listem
  b) vydáno na základě žádosti na matričním úřadě
  c) se uplatňuje na úřadu práce či referátu státní sociální podpory podle místa bydliště matky
  d) se uplatňuje na místním úřadě příslušném bydlišti  jednoho z rodičů
  3. Peněžitá pomoc v mateřství je
  a) paušálně stanovena na 3635,- Kč
  b) činí 69 % hrubého měsíčního příjmu
  c) činí 69 % minimální mzdy
  d) činí 69 % hrubého měsíčního příjmu, nejvýše však 12 500,-Kč
  4. Peněžitá pomoc v mateřství se čerpá
  a) po celé těhotenství
  b) po celé těhotenství a šestinedělí
  c) po dobu 28 týdnů, případně 37 týdnů u matek svobodných nežijících ve společné domácnosti s otcem dítěte
  d) po dobu 40 týdnů a do věku 3 let dítěte u svobodných matek
  5. Mateřská dovolená je jiný název pro
  a) pracovní neschopnost v těhotenství
  b) pracovní neschopnost při kojení
  c) peněžitou pomoc v mateřství
  d) dovolenou s dětmi
  6. Rodičovský příspěvek
  a) se vypočítává z průměrné mzdy matky
  b) se vypočítává z celkového příjmu rodiny
  c) činí trojnásobek životního minima
  d) lze pobírat do 4 let dítěte
  7. Předpokládaná hmotnost zdravého plodu ve 24 týdnu je přibližně
  a) 350 g
  b) 500-700g
  c) 900 g
  d) 1200g
  8. Předpokládaná hmotnost plodu v 32 týdnu těhotenstvíje
  a) 500 g
  b) 500-700g
  c) 1500-1900g
  d) 2200g
  9. Nerizikové těhotenství sledujeme do 36 týdne v pravidelných intervalech minimálně každé
  a) 2 týdny
  b) 3 týdny
  c) 4 týdny
  d) 5 týdnů
  10. Nerizikové těhotenství sledujeme od 36 týdne těhotenství minimálně každé
  a) 3 dny
  b) 5 dní
  c) 7 dní
  d) lOdní
  11. Nerizikové těhotenství sleduje praktický gynekolog nejdéle do
  a) 36 týdne
  b) 38 týdne
  c) 40 týdne
  d) až do porodu
  12. Klinická a laboratorní vyšetření v těhotenství dělíme na
  a) pravidelná a nepravidelná
  b) řádná a mimořádná
  c) povinná a nepovinná
  d) důležitá a zbytečná
  13. Mezi pravidelná vyšetření nepatří
  a) zevní vyšetření těhotné, určení krevního tlaku a hmotnosti
  b) chemická analýza moči
  c) stanovení cervix skóre
  d) zevní vyšetření těhotné a změření jejího pulsu
  14. těhotenská průkazka by měla být vystavena do
  a) porodu
  b) 20 týdne
  c) 16 týdne
  d) 12 týdne
  15. Detekce známek vitality plodu je povinná od
  a) 12 týdne
  b) 18 týdne
  c) 24 týdne
  d) 34 týdne
  16. К nepravidelným vyšetřením v 16 týdnu nepatří
  a) stanovení krevní skupiny a protilátek
  b) vyšetření krevního obrazu
  c) vyšetření protilátek proti rubeole
  d) vyšetření protilátek proti syfilis
  17. Kontrolní vyšetření erytrocytárních protilátek provádíme
  a) ve 24 týdnu
  b) ve 28 týdnu
  c) ve 32 týdnu
  d) ve 36 týdnu
  18. Dvě vyšetření titru erytrocytárních protilátek jsou povinné u žen
  a) s anamnézou krevní transfúze
  b) s anamnézou porodu či potratu
  c) s krevní skupinou 0 a Rh negativních
  d) všech
  19. Kardiotokografický non-stress test je povinnou součástí vyšetření od
  a) 32 týdne
  b) 34 týdne
  c) 36 týdne
  d) 38 týdne
  20. Screening poruch glukózové tolerance neprovádíme zdravým ženám
  a) mladším 20 let
  b) mladším 25 let
  c) mladším 30 let
  d) mladším 35 let
  21. Screening poruch glukózové tolerance provádíme
  a) v 12-16. týdnu
  b) v 20 - 24 týdnu
  c) v 24-28 týdnu
  d) v 28-32 týdnu
  22. К určení stáří těhotenstvíje nejdůležitější
  a) datum oplozující soulože
  b) první ultrazvukové vyšetření
  c) datum poslední menstruace
  d) aktuální ultrazvukové vyšetření
  23. V prodloužené graviditě je nutné pravidelné vyšetření
  a) každý den
  b) každý druhý den
  c) dvakrát týdně
  d) jednou týdně
  24. Kardiotokografický non-stress test má trvat
  a) 10 minut
  b) 20 minut
  c) 30 minut
  d) 40 minut
  25. Kradiotokografický test hodnotíme podle
  a) WHO
  b) profesora Srpa
  c) UNICEF
  d) CGPS
  26. Primipara cítí pohyby plodu obvykle od
  a) 12 týdne
  b) 14 týdne
  c) 16 týdne
  d) 18 týdne
  27. Normální délka trvání těhotenstvíje
  a) 200 dnů
  b) 250 dnů
  c) 280 dnů
  d) 300 dnů
  28. Hmotnost dělohy se během těhotenství zvětší na
  a) 200 g
  b) 500g
  c) 750 g
  d) lOOOg
  29. Kapacita děložní dutiny se zvětšuje u donošeného těhotenství
  a) lOOkrát
  b) 200krát
  c) 500krát
  d) lOOOkrát
  30. Průtok krve dělohou se zvyšuje z 50ml/min na
  a) 500-700 ml
  b) 200-400 ml
  c) 150-300 ml
  d) 750-1000 ml
  31. pH metrie má zjistit
a) kyselost moči těhotné
b) snížení pH jako známku vaginální infekce
c) zvýšení pH jako známku vaginální infekce
d) přesnou hodnotu pH poševního prostředí
32. Těhotenská nauzea se vyskytuje nejčastěji
a) mezi 4 a 10 týdnem
b) mezi 6 a 14 týdnem
c) mezi 10 a 20 týdnem
d) mezi 30 a 40 týdnem
33. Pálení žáhy je příznakem
a) gestačního diabetů
b) raného těhotenství
c) běžným v II trimestru
d) obvyklým v III trimestru
34. Tvorba žaludeční šťávy a motilita žaludku se v těhotenství
a) nemění
b) snižují
c) zvyšují
d) v prvním trimestru zvyšují a v třetím snižují
35. Motilita střev se v těhotenství
a) nemění
b) snižuje
c) zvyšuje
d) v prvním trimestru snižuje a v třetím zvyšuje
36. Zácpa v těhotenstvíje způsobena
a) progesteronem
b) estrogenem
c) oxytocinem
d) prostaglandiny
37. Zácpa v těhotenství není způsobena
a) zvýšením progesteronu
b) zvýšením reabsorpce sodíku a vody v tlustém střevě
c) fyziologickými těhotenskými změnami
d) zvětšením dělohy
38. Pica syndrom je
a) zvýšení chuti к jídlu u těhotných
b) zvracení u těhotných
c) chuť na neobvyklé látky u těhotných
d) nechuť к masu u těhotných
39. Asymptomatická bakteriurie je v těhotenství
a) běžná a nepotřebuje léčbu
b) výjimečná
c) výjimečná a nepotřebuje léčbu
d) častější a je vhodněji léčit
40. Stáza moči v těhotenství je
a) častější vlevo
b) častější vpravo
c) stejně častá oboustranně
d) příznakem urolitiázy
41. V těhotenství se průtok krve ledvinami
a) snižuje z důvodu zvýšení prokrvení dělohy
b) snižuje pro zachovám minerálů
c) zvyšuje
d) nemění
42. Glomerulámí filtrace v těhotenství
a) se nemění
b) se snižuje
c) se zvyšuje
d) se snižuje až od 32 týdne
43. V průběhu těhotenství stoupá tvorba
a) prolaktinu, tyreotropního hormonu (TSH), adenokortikotropního hormonu (ACTH), hormonu stimulujícího melanocyty (MSH)
b) gonadotropinů a prolaktinu
c) ACTH a testosteronu
d) MSH
44. Štítná žláza se v těhotenství
a) nemění
b) zvětšuje 2krát
c) zvětšuje 4krát
d) zmenšuje
45. Sekrece z prsů na počátku těhotenstvíje
a) příznakem poruchy hypofýzy
b) vyžaduje cytologické vyšetření
c) je indikací к mamografii
d) je nejistou známkou těhotenství
46. Chloasma gravidarum jsou důsledkem
a) zvýšení množství podkožního tuku
b) zvýšení koncentrace progesteronu
c) zvýšení koncentrace hormonu stimulujícího melanocyty (MSH)
d) snížení koncentrace gonadotropinů
47. Strie je jiné označení pro
a) chloasma gravidarum
b) pajizévky
c) linea fusca
d) flíčky
48. Průměrné zvýšení tělesné hmotnosti v těhotenstvíje
a) 6kg
b) 9 kg
c) 12kg
d) 15kg
49. Fyziologické umístění placenty není
a) na přední stěně
b) na zadní stěně
c) ve fundu
d) v dolním děložní segmentu
50. Fyziologický pupečník má
a) 2 cévy
b) 3 cévy
c) 2 žíly
d) 1 tepnu
51. Průměrná tloušťka pupečníku je
a) 1-2 cm
b) 5-lOcm
c) 25 cm
d) 50 cm
52. Průměrná délka pupečníku je
a) 20cm
b) 150 cm
c) 70cm
d) 50cm
53. Pupečník je tvořen takto
a) 1 žíla, 2 tepny, Whartonův rosol
b) 2 žíly, 1 tepna, Whartonův rosol
c) 1 žíla, 2 tepny, Warholův rosol
d) 2 žíly, 1 tepna, Warholův rosol
54. Humánní choriogonadotropin je
a) steroidní hormon
b) glykoprotein
c) mukopolysacharid
d) aminoglykan
55. Nejvyšší koncentrace choriogonadotropinu je dosažena v
a) 6 týdnu těhotenství
b) 10 týdnu těhotenství
c) 18 týdnu těhotenství
d) 24 týdnu těhotenství
56. Choriogonadotropin je tvořen
a) trofoblastem
b) nadledvinami plodu
c) žlutým tělískem
d) žloutkovým váčkem
57. Placenta přebírá funkci žlutého tělíska
a) v 6 týdnu
b) v 9 týdnu
c) v 12 týdnu
d) v 16 týdnu
58. Objem plodové vody dosahuje maxima kolem
a) 20 týdne
b) 30 týdne
c) 38 týdne
d) 41 týdne
59. Výměna plodové vody je koncem těhotenství
a) 20ml/24h
b) 100ml/24h
c) 250ml/24h
d) 500ml/24h
60. Poloha (situs) plodu je
a) vztah podélné osy plodu к podélné ose dělohy
b) určena uložením hřbetu plodu nebo vztahem hlavičky к lopatě kyčelní kosti
c) vzájemný vztah částí plodu к sobě
d) vztah hlavičky к pánevnímu vchodu
61. Postavení (presentatio) ploduje
a) vztah podélné osy plodu к podélné ose dělohy
b) určeno uložením hřbetu plodu nebo vztahem hlavičky к lopatě kyčelní kosti
c) vzájemný vztah částí plodu к sobě
d) vztah hlavičky к pánevnímu vchodu
62. Poloha koncem pánevním úplná znamená, že naléhají
a) nožky plodu
b) kolínka plodu
c) hýždě plodu
d) obě nožky a hýždě plodu
63. Poloha podélná koncem pánevním je na konci těhotenství asi v
a) 3%
b) 13%
c) 23%
d) 33%
64. Poloha podélná hlavičkou deflexní má na konci těhotenství četnost
a) 0,5%
b) 1,5%
c) 2%
d) 2,5%
65. Nejčastější postavení plodu v podélné poloze je
a) pravé přední
b) levé zadní
c) pravé zadní
d) levé přední
66. U polohy příčné je levé postavení charakterizováno
a) zadečkem na levé lopatě kyčelní kosti
b) hlavičkou na levé lopatě kyčelní kosti
c) pravým raménkem na levé lopatě kyčelní kosti
d) dorzoanteriomím postavením plodu
67. Hlavička naléhá na střed pánevního vchodu při naléhám
a) centrickém
b) excentrickém
c) předním asynklitismu
d) zadním asynklitismu
68. Hlavička naléhá na vchod pánevní větší plochou své přední pánevní parietální kosti při naléhám
a) synklitickém
b) asynklitickém podle Naegeleho
c) asynklitickém podle Litzmana
d) zadním asynklitismu
69. Hlavička je vstouplá velkým oddílem, pokud
a) krční rýha je 3 prsty nad sponou
b) je hmatná celá zadní stěna stydké spony
c) krční rýha je 4 prsty nad sponou
d) krční rýha je 2 prsty nad sponou
70. Hlavička není vstouplá velkým oddílem, pokud
a) krční rýha je 2 prsty nad sponou
b) horní třetina zadní stěny stydké spony není hmatná
c) je hmatná celá zadní stěna stydké spony
d) prošla biparietálním průměrem rovinou pánevního vchodu
71. Při nadměrném váhovém přírůstku v těhotenství ordinujeme
a) přísnou redukční dietu
b) bezzbytkovou dietu
c) vyšetření glukózové tolerance
d) vyšetření clearance
72. Doporučený denní přísun bílkovin ve stravě těhotné ženy je
a) 0,5g/kg
b) l,3g/kg
c) 2,5g/kg
d) 5g/kg
73. Denní příjem železa v těhotenství by měl dosahovat
a) 5 mg
b) 30 mg
c) 50 mg
d) 80 mg
74. Pohlavní styk u těhotné je
a) možný v celé délce těhotenství
b) možný jen v druhém trimestru těhotenství
c) je příznakem poruchy sexuální orientace
d) je přísně zakázán
75. Masturbace u těhotné ženy
a) je nejčastější příčinou předčasného porodu
b) je důvodem pro psychiatrické vyšetření
c) je doporučenou náhražkou partnerského sexu
d) se neliší od masturbace mimo těhotenství
76. Užívání multivitaminových preparátů
a) je obchodní trik
b) způsobuje makrosomii plodu
c) může vhodně doplnit potřeby organismu
d) je naprosto nevhodné před otěhotněním
77. Podávání prostaglandinů ambulantně
a) umožní těhotné porodit v příjemném prostředí domova
b) sníží náklady na péči o přenášející rodičky
c) je postupem non lege artis
d) je nutné spojit se s kontrolním kardiotokografem za 1 hodinu po aplikaci
78. Těhotná žena má spát
a) 6 hodin denně
b) 8 hodin denně
c) 8 hodin v noci a 2 hodiny po obědě
d) 10 hodin v noci a 2 hodiny po obědě
79. Z hlediska vývoje a růstu plodu je nejhorší drogou
a) marihuana
b) kokain
c) kofein
d) nikotin
80. Těhotná nesmí podle vyhlášky ministerstva zdravotnictví zvedat břemena těžší než
a) 5 kg
b) 10kg
c) 15kg
d) 20 kg
81. Objem krve u těhotné se zvyšuje o
a) 500ml
b) 1-1,51
c) 21
d) 2,51
82. Anémie vyžadující perorální podávání železa je charakterizována
a) hodnotou hemoglobinu pod 80g/1
b) hodnotou hemoglobinu pod 115 g/1
c) hodnotou hemoglobinu pod 60 g/1
d) hodnotou hemoglobinu pod 140 g/1
83. Piskáčkovo znamení je
a) vyklenutí rohu děložního ve 4-8 týdnu těhotenství
b) změknutí dělohy v místě nidace
c) změknutí istmu děložního
d) možnost vytvořit příčnou řasu na přední stěně děložní
84. Mezi známky časného těhotenství nepatří
a) Dickinsonovo-Braunovo znamení
b) Gaussovo znamení
c) Hegarovo znamení
d) Chvostkův příznak
85. Friedmanova reakce byla prováděna na
a) infantilních myškách
b) králících
c) samcích skokana
d) morčatech
86. V těhotenské cytologiije příznakem blížícího se porodu
a) nárůst počtu navikulámích buněk
b) převaha navikulámích buněk nad intermediálními
c) převaha intermediálních buněk nad navikulámími
d) Arias-Stella fenomén
87. Nositelky mutace MTHFR jsou v těhotenství ohroženy zejména
a) diseminovanou intravaskulámí koagulopatií
b) předčasným porodem
c) trombembolickou nemocí
d) preeklampsií
88. Amnioskopie je
a) obsoletní metoda
b) metoda zjišťující množství plodové vody
c) metoda verifikující podezření na vrozenou vadu plodu
d) metoda hodnocení plodové vody
89. Při potermínové graviditě musí být
a) vyšetření každý druhý den
b) preventivní hospitalizace
c) proveden biofyzikální profil
d) tato ukončena do 42. ukončeného týdne
90. Součástí pravidelných vyšetření v těhotenství není
a) měření tlaku krve
b) chemické vyšetření moči
c) pH metrie
d) stanovení cervix skóre
91. Cervikální skóre nezahrnuje
a) délku hrdla
b) konzistenci hrdla
c) prostupnost hrdla
d) míru vyklenutí vaku blan
92. Součástí laboratorních vyšetření v těhotenství není
a) stanovení HIV
b) stanovém BWR
c) stanovení krevní skupiny matky
d) stanovení krevní skupiny otce
93. Měření zevních pánevních rozměrů je
a) překonané vyšetření
b) součástí vyšetření v I trimestru
c) součástí vyšetření před porodem
d) nahrazeno vnitřním vyšetřením
94. Conjugate externa je
a) vzdálenost mezi středem horního okraje spony stydké a trnem 5 bederního obratle
b) vzdálenost mezi středem dolního okraje spony stydké a trnem 5 bederního obratle
c) vzdálenost mezi středem dolního okraje spony stydké a tělem 5 bederního obratle
d) vzdálenost mezi středem horního okraje spony stydké a tělem 5 bederního obratle
96. První Pawlikův hmat hodnotí
a) výšku děložního fundu
b) největší objem hlavičky plodu
c) výšku krční rýhy plodu
d) držení malých částí plodu
97. Conjugata externa má fyziologickou hodnotu
a) 17cm
b) 20 cm
c) 25-26cm
d) 31-32 cm
98. Obligatorní vyšetřovací metodou při prodlouženém těhotenstvíje
a) amnioskopie
b) ultrazvuková biometrie
c) ílowmetrie
d) non-stress test
99. Vyberte správné tvrzení
a) Streptococcus agalactiae může způsobit novorozeneckou sepsi
b) výskyt streptokoků skupiny В v porodních cestách může být spojen s výskytem vrozených vývojových vad plodu
c) výskyt streptokoků skupiny В v porodních cestách není spojen s výskytem předčasného porodu
d) screeningovou kultivaci z porodních cest se zaměřením na výskyt streptokoků skupiny В provádíme několikrát za těhotenství
100. Vyberte chybné tvrzení
a) výskyt streptokoků skupiny В v porodních cestách může být spojen s předčasným porodem
b) výskyt streptokoků skupiny В v porodních cestách může být spojen s výskytem novorozenecké sepse
c) výskyt streptokoků skupiny В v porodních cestách není spojen s předčasným porodem
d) výskyt streptokoků skupiny В v moči může být spojen s předčasným porodem
101. Mezi základní infekční choroby sledované screeningem v těhotenství patří
a) syfilis
b) černý kašel
c) žlutá zimnice
d) borrelióza
102. Mezi základní infekční choroby sledované screeningem v těhotenství nepatří
a) spalničky
b) infekční žloutenka typu В
c) syfilis
d) AIDS


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
        topic: [
          '6. Fyziologické těhotenství, prenatální péče, očkování v těhotenství. I. ČÁST PREGRADUÁLN',
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
