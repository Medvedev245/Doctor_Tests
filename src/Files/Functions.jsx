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
  1. Amnioskopem se hodnotí
  a) ložení plodu
  b) motnost plodu
  c) inkce placenty
  d) abarvení plodové vody
  2. Saltatomí oscilace kardiotokografie (CTG) patří ftmezi
  a)rátkodobé frekvenční jevy
  b) dlouhodobé frekvenční jevy
  c) Středně dlouhé frekvenční jevy
  d) Bev, který se nehodnotí
  3. llndulatorní oscilace CTG patří mezi
  a) krátkodobé frekvenční jevy
  b) dlouhodobé frekvenční jevy
  c) středně dlouhé frekvenční jevy
  d) jevy, které se nehodnotí
  4. Undulatorní oscilace CTG patří mezi
  a) patologické jevy
  b) dlouhodobé frekvenční jevy
  c) středně dlouhé frekvenční jevy
  d) fyziologické jevy
  5. Undulatorní oscilace CTG
  a) jsou indikací к ukončení porodu
  b) neregistruje
  c) jsou středně dlouhé frekvenční jevy
  d) nejsou indikací к ukončení porodu
  8. Silentní/sinusoidní CTG záznam je
  a) fyziologický záznam
  b) suspektní záznam
  c) jednoznačně patologický záznam
  d) fyziologický u předčasného porodu
  9. Silentní/sinusoidní CTG záznam znamená
  a) fyziologický záznam dvojčat
  b) suspektní záznam u předčasného porodu
  c) indikaci к porodu per forcipem jen v I. době porodní
  d) indikaci к ukončení porodu/těhotenství
  10. Aortokavální kompresivní syndrom se na CTG projeví
  a) bradykardií plodu
  b) tachykardií plodu
  c) silentním záznamem
  d) asystolií plodu
  11. Aortokavální kompresivní syndrom způsobí u matky
  a) vyplavení oxytocinu
  b) snížení minutového srdečního výdeje
  c) hypertenzi v dolních končetinách
  d) dilataci pyloru
  12. Aortokavální kompresivní syndrom vzniká u matky
  a) v I trimestru
  b) zejména ve III trimestru
  c) zejména ve II trimetru
  d) zejména ve IV trimestru
  6. Periodické akcelerace v CTG obraze svědčí
  a) pro začátek porodu
  b) pro polohu plodu koncem pánevním napřed
  c) o febrilním stavu rodičky
  d) o projevech kompenzatorních mechanismů plodu
  13. Vstupní fenomén při CTG monitoringu
  a) představuje indikaci к operačnímu ukončení porodu
  b) může být zaměněn za syndrom dolní duté žíly
  c) představuje riziko po podání kyslíku
  d) představuje ohrožení matky embolizací do plic
  7. Periodické akcelerace v CTG jsou indikací
  a) к okamžitému ukončení porodu
  b) к obratu plodu zevními hmaty
  c) nejsou indikací к ukončení porodu
  d) к ukončení porodu per forcipem
  14. Při hodnocení CTG záznamu není třeba respektovat
  a) zralost plodu
  b) aplikaci farmak matce
  c) uložení plodu
  d) charakter plodové vody
  15. Při hodnocení CTG záznamu je třeba respektovat
a) výsledek oGTT
b) útlum plodu po podání medikace
c) uložení placenty
d) názor rodičky
16. Při patologickém CTG záznamu během porodu
a) okamžitě volíme způsob porodu v relaxační vaně
b) vypneme CTG přístroj, abychom rodičce nenarušili klidnou atmosféru
c) podáme pethidin a počkáme na reakci plodu
d) použijeme jinou metodu pro intrauterinní sledování plodu nebo ukončíme bez časové prodlevy porod
17. Mikroodběr krve z hlavičky plodu během porodu
a) se provádí pro určení karyotypu plodu
b) se provádí pro určení karyotypu pouze u porodu plodu koncem pánevním napřed
c) je metoda zavedená E Salingem na začátku 60 let minulého století
d) se provádí pro určení karyotypu při podezření na m Down
18. Mikroodběr krve z hlavičky u plodu je
a) rutinní porodnická metoda
b) z hlediska matky invazivní metoda
c) výhodná metoda, protože dovoluje kontinuální sledování glykémie plodu
d) metoda z hlediska plodu invazivní a z porodnického hlediska metoda technicky náročná
19. Mikroodběr krve z hlavičky plodu slouží
a) к vyšetření plodu na TORCH
b) zejména к určení glykémie plodu
c) к určení acidobazické rovnováhy plodu
d) к určení acidobazické rovnováhy plodu pouze u nezralých plodů
20. Mikroodběr krve hlavičky plodu se provádí
a) amnioskopem pouze z velké fontanely
b) amnioskopem pouze z malé fontanely
c) amnioskopem pouze z velké nebo malé fontaleny
d) pomocí amnioskopu, šetrnou incizí skalpu plodu
21. Intrapartální fetální pulsní oxymetrie se provádí
a) po puknutí vaku blan a po odtoku plodové vody
b) před odtokem plodové vody; je zajištěna lepší elektrická vodivost
c) jen za přítomnosti u porodu
d) skalpovou elektrodou a pomocí CTG přístroje
22. Intrapartální fetální pulsní oxymetrie
a) je metoda, která se 100% spolehlivostí určí diagnózu hypoxie plodu
b) je metoda, která se již dnes nepoužívá
c) pomáhá hodnotit saturaci krve kyslíkem u novorozence
d) je metoda z hlediska plodu neinvanzivní
23. Intrapartální fetální pulsní oxymetrie vyhodnocuje
a) pO,
b) intenzitu zvuku, kterou pohltila zkoumaná tkáň plodu
c) acidobazickou rovnováhu plodu
d) saturaci uterinní krve kyslíkem
24. Hemoglobin i deoxyhemoglobin
a) absorbují shodně světlo
b) nelze fyzikálně u plodu vyhodnotit
c) absorbují odlišně světlo
d) absorbují odlišně světlo pouze u plodu
25. Systém STAN je
a) firemní název pro fetální oxymetr
b) název pro fetální elektrokardiografii a hodnocení ST úseku
c) název metody podle Stanleye Angoly
d) akronym pro stanovení acidobazické nerovnováhy
26. Elevace ST úseku EKG u plodu je způsobena
a) pouze hypokalémií plodu
b) anaerobním metabolismem plodu
c) zkalenou plodovou vodu
d) vcestným lůžkem
27. Deprese ST úseku u plodu je způsobena
a) pouze hypokalémií plodu
b) těžkou formou hypoxie plodu
c) zkalenou plodovou vodou
d) vcestným lůžkem
28. Hypoxémie způsobuje u plodu
a) sekreci adrenalinu
b) zvýšenou kontrakční aktivitu myokardu
c) glykogenolýzu
d) všechny odpovědi jsou správné
29. Předčasný odtok plodové vody nastává
a) před 38 týdnem těhotenství
b) před 40 týdnem těhotenství
c) před příchodem těhotné do porodnického zařízení
d) před nástupem děložních kontrakcí
30. Porodní nádor je
a) edém kůže a podkoží hlavičky plodu, který není ohraničený švy lebečních kostí
b) vedoucí část plodu
c) kostní tumor os parietum
d) všechny odpovědi jsou správně
31. Zeleně zkalená plodová voda znamená
a) pozdní symptom pro intrauterinně odumřelý plod
b) odchod mekonia plodu
c) podezření na chorobu krve plodu
d) podezření na poruchu trávicího ústrojí plodu
32. Žlutavě zakalená plodová voda znamená
a) podezření na Rh izoimunizaci plodu
b) hypoxii plodu
c) podezření na utažený pupečník kolem krku plodu
d) poloha podélná plodu koncem pánevním
33. Polyhydramnion představuje
a) více amniálních dutin
b) cysty v amniálním vaku
c) nadměrné množství mozkomíšního moku v CNS plodu
d) zvýšené množství plodové vody
34. Ahlfeldovo znamení představuje
a) začátek porodu - pravidelnou děložní činnost po 10 minutách
b) utažený pupečník kolem krku plodu, nadměrné pohyby plodu
c) odloučenou placentu, označené místo na pupečníku se posouvá směrem od vulvy
d) ani jedna odpověď není správná
35. Patologická inzerce placenty je v případě
a) placenta adhaerens
b) placenta accreta
c) placenta increta
d) všechny odpovědi jsou správné
36. Placentu adhaerens nejčastěji diagnostikujeme
a) klinicky, teprve při manuálním vybavování placenty
b) biochemicky
c) ultrazvukem
d) podle vyšetření koagulačních parametrů
37. Placenta incarcerate vzniká
a) při poruše děložní motility
b) při poruše placentám! inzerce
c) po předchozím císařském řezu
d) při spazmu děložní branky
38. Naléhání pupečníku znamená, že
a) se pupečník dotýká plodu, naléhá na plod
b) se pupečník otočí, naléhá na krk plodu
c) pupečník probíhá pod dolní částí plodu, je hmatný pupečníkový tep, ale je zachovaný vak blan
d) pupečník probíhá pod dolní částí plodu, je hmatný pupečníkový tep, ale není zachovaný vak blan
39. Vysoký přímý stav hlavičky plodu je
a) indikací к porodu per forcipem
b) indikací к nasazení vakuumextraktoru
c) indikací к císařskému řezu
d) ani jedna odpověď není správná
40. Když zevním vyšetřením palpujeme krční rýhu 4 prsty nad sponou, je hlavička
a) v pánevním východu
b) v pánevní úžině
c) je hlavička již porozena
d) hlavička volně naléhá na pánevní vchod
41. Výskyt přirozených dvojčatje v poměru к jednočetným těhotenstvím
a) 2 : 85
b) 3 : 85
c) 1 : 85
d) ani jedna odpověď není správná
42. U porodního děje rozlišujeme
a) porodní cesty
b) porodní objekt (plod)
c) porodní síly
d) všechny odpovědi jsou správné
43. Pokud hlavička při levém předním postavení pravidelně (normálně) rotuje, pak rotuje o
a) 135 stupňů
b) 45 stupňů
c) 90 stupňů
d) nerotuje
44. Pokud hlavička při pravém zadním postavení pravidelně (normálně) rotuje, pak rotuje o
a) 135 stupňů
b) 45 stupňů
c) 90 stupňů
d) nerotuje
45. Pokud hlavička abnormálně rotuje při pravém zadním postavení, pak rotuje o
a) 135 stupňů
b) 45 stupňů
c) 90 stupňů
d) nerotuje
46. Konec pánevní neúplný zamená, že
a) na pánevní vchod naléhají nožky plodu
b) na pánevní vchod naléhají hýždě plodu
c) na pánevní vchod naléhají kolínka plodu
d) všechny odpovědi jsou správné
47. Plod je v poloze podélné koncem pánevním, podle UZ vyšetření je odhad hmotnosti plodu 3000 g a rodička je zcela zdráva, pak následuje pokus o
a) spontánní vedení porodu
b) pokus o vedení porodu per sectionem Caesaream
c) pokus o vedení porodu per forcipem Simpson
d) ani jedna odpověď není správná
48. Rizika a komplikace porodnických operacíjsou
a) hemoragické
b) trombembolické
c) infekční
d) všechny odpovědi jsou správné
49. Inkompabilita v АВ0 systému
a) neovlivňuje výskyt Rh izoimunizace
b) zvyšuje riziko Rh izoimunizace
c) projeví se po porodu
d) izoimunizace není v tomto případě možná
50. Amnioskopii lze provést
a) do 35 týdne gravidity
b) jsou-li pravidelné kontrakce
c) vždy
d) je-li prostupné hrdlo děložní
51. Fyziologickou příměsí plodové vody jsou
a) nemá fyziologické příměsi
b) mázkové vločky
b) částečky šmolky
d) částečky hlenu
52. Fyziologická barva vody plodové je
a) čirá
b) šedomodrá
c) zelenkavá
d) nažloutlá
53. Amnioskopii lze diagnostikovat
a) délku děložního hrdla
b) zánět plodových blan
c) hypoxii plodu
d) množství plodové vody
54. Fetoskopie je
a) rtg vyšetření plodu
b) endoskopické vyšetření plodu
c) sonografické vyšetření plodu
d) vyšetření plodu computerovým tomografem
55. Fetoskopii provádíme
a) po 20 týdnu gravidity
b) mezi 13-15 týdnem gravidity
c) do 12 týdne gravidity
d) mezi 15 a 20 týdnem gravidity
56. Komplikací souvisejících s fetoskopiije
a) méně než 5 %
b) 5-10%
c) 25%
d) více než 25 %
57. Poměrné zastoupení Rh pozitivních к Rh negativním v bílé populaci ie
a) 60:40%
b) 85 : 15%
c) 50:50%
d) 75 : 25%
58. Jestliže Rh negativní matce proniknou do oběhu erytrocyty Rh pozitivního plodu, vytvoří se v mateřském organismu protilátky typu
a) IgA
b) žádné
c) anti-D, anti-C, Kell
d) IgG
59. К nejzávažnější feto-maternální transfúzi dochází
a) v průběhu П trimestru
b) ve III trimestru
c) při porodu
d) v I trimestru
60. Amniocentéza je vhodná při titru protilátek
a) 1 : 16 až 1 : 32
b) při jakémkoliv titru protilátek
c) nezávisí na výskytu protilátek
d) 1 : 8
61. Největší význam při amniocentéze к vyšetření stupně Rh izoimunizace připisujeme
a) koncentraci kreatininu
b) L-S indexu
c) počtu oranžových buněk
d) hodnotám bilirubinoidů
62. Aplikace anti-D protilátky (Rhega) je nutná
a) do 24 hodin po porodu
b) do 48 hodin po porodu
c) ihned po porodu či umělém přerušení těhotenství
d) do 72 hodin po porodu
63. Při vyšetření AFP v séru matky
a) vyšetření není významné
b) mají význam jen snížené hodnoty
c) jsou zvýšené i snížené hodnoty významné
d) mají význam jen zvýšené hodnoty
64. Zvýšené hodnoty AFP v séru matky se obvykle nevyskytují
a) u ezofageální a duodenální atrézie
b) u spina bifida
c) u anencefalie
d) u Downova syndromu
65. Vynechání menstruace a UZ nepřítomnost plodového vejce v dutině děložní nás nutí v první řadě vyloučit
a) ektopickou graviditu
b) hormonální poruchu
c) ovariální cystu
d) hrozící potrat
66. Ektopická gravidita je nejčastěji lokalizována
a) ve vejcovodu
b) ve vaječníku
c) volně v peritoneální dutině
d) v děložním rohu
67. Při ektopické graviditě ženu nejvíce ohrožuje
a) děložní ruptura
b) metroragie
c) septický šok
d) hemoragický šok
68. V histologickém obraze endometria je pro ektopickou graviditu příznačné
a) hypersekreční endometrium
b) hyperproliferační endometrium
c) navikulámí buňky
d) fenomén Arias Stella
69. Pro apendicitidu v rané graviditě není typické
a) slabé krvácení z děložního hrdla
b) urychlení tepové frekvence nad 90-100/min
c) pozitivní Blumbergův příznak
d) pozitivní Rovsinův příznak
70. Náhle vzniklá bolest na hrudi, dusnost, kašel, úzkost, krvavé sputum je příznakem
a) eklampsie
b) plicní embolie
c) infarktu myokardu
d) angíny pectoris
71. Příčinou plicní embolie není
a) vmetek vzduchové bubliny
b) vmetek částečky placentámí tkáně
c) vmetek plodové vody
d) vmetek sražené krve do plicnice
72. Amniocentézu z věkové indikace provádíme u žen
a) nad 40 let
b) nad 42 let
c) nad 35 let
d) nad30let
73. Ke zjištění plicní zralosti plodu je nutno vyšetřit
a) kreatinin z plodové vody
b) ultrazvukově plicní tkáň plodu
c) bilirubinoidy z plodové vody
d) L/S index z plodové vody
74. Mezi klinické a laboratorní příznaky ektopické gravidity nepatří
a) zvětšená děloha
b) leukocytóza
c) pozitivita hCG
d) febrilní stav
75. Biopsie choria (CVS)
a) může poskytnout prvé výsledky do 15 minut po odběru
b) může vzácně vést к redukčním defektům končetin plodu
c) nemá se provádět před 15 týdnem gravidity
d) výsledek přímé preparace se nemusí potvrzovat dlouhodobou kultivací
76. Prenatální biopsie jater
a) byla pro minimální diagnostický přínos opuštěna
b) se nyní provádí výhradně punkcí pomocí ultrazvuko- vé vizualizace
c) většinou se odběr provádí až po 30 týdnu těhotenství
d) provádí se v 9 týdnu těhotenství
77. Rezistentní perioda, kdy v důsledku působení teratogenního agens buď embryo zhyne, nebo přežije bez poškození, trvá
a) od 0 do 21 dne po ovulaci
b) rezistentní období neexistuje
c) od 0 do 11 dne po poslední menstruaci
d) od 0 do 11 dne po ovulaci
78. Období maximální vnímavosti na teratogenní činitele (embryonální období) trvá
a) od 11 do 57 dne po ovulaci
b) od 11 do 57 dne po poslední menstruaci
c) od 0 dne do 10 dne po ovulaci
d) od 21 do 70 dne po ovulaci
79. Období snížené vnímavosti na teratogenní činitele (fetální období)
a) trvá od 70 dne po poslední menstruaci do porodu
b) trvá od 57 dne po poslední menstruaci do porodu
c) trvá od 57 dne po ovulaci do porodu
d) je v П а III trimestru
80. Teratogen působící ve fetálním období může vyvolat
a) rozštěp páteře či břišní stěny plodu
b) úmrtí plodu
c) růstovou retardaci, zmenšení velikosti orgánů, funkční změny
d) nemá vliv na plod
81. Lokalizaci placenty určujeme nejčastěji pomocí
a) ultrazvuku
b) izotopové placentografie
c) termografie
d) magnetické rezonance
82. O nízko nasedajícím lůžku mluvíme, pokud
a) placenta přesahuje přes vnitřní branku
b) placenta zasahuje pod vezikouterinní pliku
c) ani magnetickou rezonancí nenalezneme placentu v děložním fundu
d) se ultrazvukem nedaří zobrazit placentu na přední či zadní stěně
83. Normální hodnoty pO, v pupečníkových cévách
a) tepna 40, žíla 14
b) tepna 27, žíla 15
c) tepna 20, žíla 60
d) tepna 15, žíla 27
84. Normální hodnoty pCO2 (mm Hg) v pupečníkových cévách
a) tepna 48, žíla 43
b) tepna 43, žíla 48
c) tepna 20, žíla 35
d) tepna 20, žíla 20
85. Normální hodnoty pH v pupečníkových cévách
a) tepna 7,35, žíla 7,38
b) tepna 7,34, žíla 7,36
c) tepna 7,24, žíla 7,30
d) tepna 7,38, žíla 7,35
86. pO2 u plodu za porodu je normálně
a) 50mm Hg
b) 16mm Hg
c) 60mm Hg
d) 40 mm Hg
87. Těžká fetální hypoxie je charakterizovaná hodnotou pO2 nižší než
a) 16 mm Hg, trvající déle než 15 min
b) 6mm Hg, trvající déle než 15 min
c) 30 mm Hg, trvající déle než 10 min
d) 40mm Hg, trvající déle než 15 min
88. Beta-hemolytické streptokoky skupiny В
a) u plodu vyvolávají prchavý exantém
b) mohou se u matky manifestovat jako chorioamnionitida, septický potrat, puerperální sepse
c) až na výjimky nejsou vyvolavateli porodnických infekcí
d) jsou nejčastějším vyvolavatelem novorozeneckých průjmových onemocnění
89. Nejčastějším původcem novorozeneckých průjmových onemocnění jsou
a) Neisseria gonorrhoeae
b) B-hemolytický streptokok
c) enteropatogenní Escherichia coli, Salmonella, organismy Shigella
d) vibrio fetus
90. Tloušťka placenty
a) během těhotenství se lineárně zvětšuje do 30 týdne gravidity
b) tloušťka placenty dosahuje obvykle 5-7 cm
c) produkce hormonů je úměrná tloušťce placenty
d) se během těhotenství lineárně zvětšuje až do 40 týdne gravidity
91. Která z těchto metod umožňuje nejčasnější získání DNA к prenatální diagnostice
a) fetoskopie
b) amniocentéza
c) biopsie choria
d) punkce pupečníku
92. Jaké je riziko opakování trisomie 21 u 251eté ženy, které má jedno dítě postižené trisomií
a) 3%
b) 1,50%
c) 4,50%
d) 6%
93. Pro asymetrickou intrauterinní růstovou retardaci plodu je charakteristické, že
a) poměr velikosti hlavy a trupu je snížen vzhledem к délce gravidity
b) poměr velikosti hlavy a trupu je nesignifikantní
c) poměr velikosti hlavy a trupu je zvýšen vzhledem к délce gravidity
d) poměr velikosti hlavy a trupu odpovídá délce  gravidity
94. 381etá Rh negativní žena prodělala amniocentézu v 18 týdnu gravidity. Protože měla negativní Coombsův test, dostala 300 mikrogramů RhO (anti-D) imunoglobulinu. Po 8 týdnech byl nepřímý Coombsův test pozitivní s titrem 1:4 Nejpravděpodobnější vysvětleníje, že
a) к imunizaci došlo po amniocentéze
b) nebylo aplikováno dostatečné množství imunoglobulinu po amniocentéze
c) titr reprezentuje Rh imunoglobin, který přetrvává v mateřské cirkulaci
d) nepřímý Coombsův test s titrem 1:4 je falešně pozitivní a může být ignorován
95. Pro stanovení diagnózy vcestného lůžka je rozhodující
a) vyšetření ultrazvukem
b) zevní palpační vyšetření
c) vnitřní vaginální vyšetření
d) amnioskopie
96. Při stanovení diagnózy abrupce placenty u pacientky ve 36 týdnu gravidity je správné řešení
a) okamžité ukončení gravidity
b) léčba uterotoniky
c) léčba hemostatiky společně s klidovým režimem
d) absolutní klid na lůžku a tišící prostředky
97. U syndromu mrtvého plodu těhotnou nejvíce ohrožuje
a) infekce
b) jatemí selhání
c) diseminovaná intravaskulámí koagulace (DIC)
d) ruptura děložní
98. Prodělá-li těhotná hepatitidu В blízko termínu porodu nebo je chronickou nosičkou viru hepatitidy B, je třeba
a) léčit novorozence výměnnou transfúzí
b) není třeba léčit
c) podat antibiotika
d) aplikovat bezprostředně po porodu hepatitis В imunoglobulin
99. Lékem volby při onemocnění listeriózou jsou
a) salvarzan
b) ampicilin
c) vitaminová léčba
d) sulfonamidy
100. Oční vyšetření u preeklampsie vyžadujeme, abychom zjistili
a) kataraktu
b) poruchu vizu
c) změny na očním pozadí
d) zánět rohovky
101. Která z následujících infekcí se obvykle diagnostikuje kultivací infekčního agens
a) toxoplazmóza
b) rubeola
c) listerióza
d) hepatitidaA
102. Genitální infekce Chlamydia trachomatis v těhotenství může být příčinou nejčastěji
a) prodlouženého těhotenství
b) předčasného odtoku plodové vody s následným předčasným porodem
c) krvácení do trávicího ústrojí
d) anémie u plodu
103. Vstup hlavičky do pánve se určuje hmatem
a) Pawlikovým
b) Rubeškovým
c) Boudinovým
d) Credeho
104. V těhotenství se při akutním onemocnění toxoplazmózou léčí
a) Pyrimethaminem a Sulfadiazinem
b) Spiramycinem, Pyrimethaminem a Sulfadiazinem s doplněním kyselinou listovou
c) Spiramycinem
d) všechny odpovědi jsou správné
105. Nejpřesnější hodnotu intenzity děložní kontrakce přináší
a) zevní tokometrie mechanickou sondou
b) zevní tokometrie měřená balónkem
c) tokometrie měřením změny tlaku v konečníku
d) vnitřní tokometrie
106. Těhotná děloha se uchyluje do
a) dextroverze a torze
b) anteflexe
c) retroverze
d) sinistropozice
107. Kontrolami hmotnosti těhotné ženy v prenatální poradně zjistíme
a) velikost plodu
b) odtékající plodovou vodu
c) retenci tekutiny při počínajících edémech
d) těhotenskou bulimii
108. Kyselina močová se v těhotenství vyšetřuje
a) při krvácení
b) u diabetické fetopatie
c) u preeklampsie
d) při hrozícím předčasném porodu
109. Kyselina močová se v těhotenství vyšetřuje
a) ze séra matky
b) z ranní moči
c) z celé krve
d) z moči matky za 24 hodin
110. К obrazu HELLP syndromu patří
a) dilatace pravého srdce
b) koarktace aorty
c) insuficience mitrální chlopně
d) porucha jatemích funkcí a nízký počet destiček
111. Děložní fundus v 10 měsíci gravidity
a) uchyluje se do levé poloviny břicha
b) sahá níže než v 9 měsíci
c) sahá stejně vysoko
d) sahá výše než v 9 měsíci
112. Děloha v 6 měsíci gravidity u těhotné ženy
v poloze vleže na zádech sahá fundem
a) do dvou třetin vzdálenosti spona - pupek
b) do výše pupku
c) do poloviny vzdálenosti pupek - processus xiphoideus
d) do dvou třetin vzdálenosti pupek - processus
xiphoideus
113. Koncentrace acetylcholinesterázy v plodové vodě se vyšetřuje к predikci
a) defektu neurální trubice
b) amniitidy
c) hrozícího nitroděložního odumření
d) infekce plodu
114. Který z laboratorních testů v plodové vodě má nejvyšší výpovědní hodnotu při defektu neurální trubice
a) alkalická fosfáza
b) a-fetoprotein
c) acetylcholinesteráza
d) amyláza
115. Pro zjištění, že jde o oligohydramnion, svědčí nejpřesněji
a) vyšetření UZ
b) hysterometrie
c) měření objemu břicha
d) palpace
116. Celkové množství plodové vody se vymění na konci těhotenství během
a) 36 hodin
b) 1 dne
c) 2 hodin
d) 2 dnů
117. Množství plodové vody je během těhotenství největší
a) v 36 týdnu
b) v 16 týdnu
c) v 40 týdnu
d) v 28 týdnu
118. Koncentraci močového estriolu vyšetřujeme
a) z ranní moči
b) v moči za 24 hodin
c) ze středního proudu moči
d) ze vzorku čerstvé moči kdykoli během dne
119. O polyhydramnion či hydramnion jde,je-li na konci těhotenství
a) 750 ml plodové vody
b) 900 ml plodové vody
c) 1000 ml plodové vody
d) 2000 ml plodové vody
120. Reaktivní záznam při non-stress testuje,
a) zvýší-li se TK matky
b) reaguje-li děložní hrdlo dilatací
c) zvýší-li se frekvence ozev při pohybech plodu
d) dojde-li к děložním kontrakcím
121. Oxytocinový zátěžový test slouží
a) ke zjištění, jak reaguje srdeční frekvence plodu při kontrakcích dělohy
b) к vyvolání ovulace
c) к indukci porodu
d) к vyvolání ejekce mléka
122. Non-stress testje
a) reakce ozev plodu po půlhodinovém klidu na lůžku
b) reakce ozev plodu po aplikaci Diazepamu
c) sledování změny frekvence ozev plodu v těhotenství v závislosti na pohybech plodu
d) reakce ozev plodu po akustickém podnětu
123. Montevidejské jednotky vyjadřují
a) délku trvání porodu v cm porodní křivky
b) kvantitu porodní činnosti
c) nevztahují se к porodní činnosti
d) intervaly mezi jednotlivými kontrakcemi
124. Při tachysystolii tonus dělohy v intervalech mezi kontrakcemi nejčastěji
a) pomalu klesá
b) je nezměněný
c) je snížený
d) je zvýšený
125. Při step testu sledujeme
a) frekvenci děložních kontrakcí
b) vitální kapacitu plic
c) kardiovaskulární aparát ženy
d) srdeční frekvenci plodu
126. Step test ovlivňuje distribuci krve v mateřském organismu tak, že
a) zvyšuje přítok krve od plodu к placentě
b) nemění distribuci krve v mateřském organismu
c) snižuje přítok krve к děloze redistribucí do kosterního svalstva
d) způsobuje vykrvácení do splanchnické oblasti
127. Kyslíkový test je pozitivní, pokud po přerušení inhalace kyslíku
a) zůstanou ozvy plodu nezměněny
b) dojde к bradykardii u plodu
c) dojde к nástupu děložních kontrakcí
d) dojde к tachykardii u plodu
128. Pacientka si ve 32 týdnu těhotenství stěžuje, že méně cítí pohyby plodu, a je zjištěno, že plod je menší, než odpovídá délce těhotenství. Na jakou patologii myslíte
a) na pupečníkovou komplikaci
b) na sníženou koncentraci estriolu
c) na intrauterinm růstovou retardaci (IUGR) a placentám! insuficienci
d) na etnicky podmíněný menší plod
129. Časná decelerace přichází při
a) tlaku na hlavičku při jejím vstupu do pánve
b) kompresi pupečníku
c) výhřezu pupečníku
d) je výrazem těžké hypoxie plodu
130. U které z následujících situací nedochází к poklesu variability
a) použití hypnotik a barbiturátů
b) chronická hypoxie
c) stimulace plodu palpací
d) spánek plodu
131. Modré zbarvení po přidání bromthymolové modři (Temessvaryho zkouška) к plodové vodě na vložce je způsobeno
a) alkalickou reakcí plodové vody
b) buněčnými elementy v ní obsaženými
c) kyselou reakcí plodové vody
d) bílkovinou obsaženou v plodové vodě
132. Rozšíření krevního řečiště v těhotenství je kompenzováno expanzí krevního volumu a je způsobeno
a) hemolýzou
b) expanzí plazmy
c) snížením počtu krevních elementů
d) únikem krve do splanchnické oblasti
133. Když se rozhodujeme pro indukci porodu při nitroděložním odumření plodu, vyšetřujeme vždy
a) acidobazickou rovnováhu matky
b) koncentraci kyseliny močové
c) tenzi kyslíku
d) koncentraci fibrinogenu
134. Pro určení plicní zralosti plodu se určuje v plodové vodě
a) množství minerálů
b) poměr lecitinu a sfingomyelinu
c) poměr albuminu a globulinu
d) počet buněčných elementů
135. Pánev všeobecně stejnoměrně zúžená má užší
a) jen přímý průměr pánevního vchodu, šíře, úžiny i východu
b) jen příčný průměr pánevního vchodu, úžiny a východu
c) všechny průměry pánve
d) jen přímý průměr pánevního vchodu, úžiny a šíře
136. Pelvimetrem nelze měřit
a) příčný průměr pánevního východu
b) conjugata vera obstetrica
c) diameter bispinalis
d) conjugata diagonalis
137. Conjugata diagonalis interna se měří
a) vnitřním vyšetřením v centimetrech od dolního okraje spony к promontoriu
b) hmatem za sponou
c) pelvimetrem
d) zavedením sondy do pochvy
138. Pravděpodobnou známkou těhotenstvíje
a) změna chuti к jídlu
b) přibýváni na váze
c) proměnlivost nálad
d) vynechání menstruace
139. Jistou známkou těhotenstvíje
a) srdeční akce plodu
b) zvětšení dělohy
c) vynechání měsíčků
d) prosáknutí a překrvení vulvy
140. U těhotné, kde je podezření, že šlo o rubeolu, je možno potvrdit po kožní erupci diagnózu akutního onemocnění hemaglutinační reakcí za
a) 3 dny
b) týden
c) později
d) 3 týdny
141. Nejčastější postižení plodu při akutním onemocněním těhotné rubeolou je
a) spina bifida
b) rozštěp břišní stěny
c) slepota jako následek katarakty
d) fokomelie
142. Imunita ženy po prodělaném onemocnění rubeolou chrání plod
a) celoživotně
b) 1 rok
c) 10 let
d) 3 roky
143. Pro laboratorní průkaz akutní primoinfekce rubeolou je rozhodující zjištění protilátek
a) ve skupině IgM
b) ve skupině IgG
c) průkaz nelze stanovením protilátek provést
d) jiných protilátek
144. Toxoplazmóza je na člověka přenášena nejčastěji
a) stykem s postiženou osobou
b) kapénkovou infekcí
c) transfúzí
d) alimentární cestou
145. К postižení plodu toxoplazmózou dochází pouze
a) u chronického onemocnění ženy
b) nedochází vůbec
c) při primoinfekci v těhotenství
d) u infekce proběhlé nejméně 2 roky před otěhotněním
146. Sérologický průkaz protilátek na toxoplazmózu ve skupině IgG je u žen ve fertilním věku pozitivní
a) ve 100%
b) v 5%
c) není možný
d) až 30%
147. Braxtonovy-Hicksovy kontrakce začínají obvykle od
a) 28 týdne gravidity
b) 12 týdne gravidity
c) 20 týdne gravidity
d) 36 týdne gravidity
148. Nitroděložní tlak během Braxtonových-Hicksových kontrakcí po 20 týdnu gravidity je
a) 5-10 mm Hg
b) 10-20 mm Hg
c) 20-30 mm Hg
d) 30-40 mm Hg
149. Při hrozícím potratu nebo předčasném porodu neprovedeme cerclage, když
a) v anamnéze byl předčasný porod
b) zjistíme ojedinělé děložní kontrakce
c) nenalezneme u plodu srdeční akci
d) cervikální skóre je větší než 4
150. Stimulace bradavek na konci těhotenství
a) způsobí relaxaci děložního svalu
b) vyvolá děložní kontrakce jako následek vylučování oxytocinu v hypofýze
c) nemůže vyvolat děložní kontrakce pro vysokou koncentraci prolaktinu
d) nemá žádný vliv na děložní kontraktibilitu
151. Stimulaci bradavek na konci těhotenství
a) lze použít jako non-stress test
b) lze použít jako stresový test
c) není žádným testem
d) je neodůvodněná
152. Hypofibrinogenémie se po odumření plodu objeví nejčastěji
a) za 4 až 5 týdnů
b) za 6 hodin
c) za týden
d) za 24 hodin
153. Tlak mezi porodnickou brankou a hlavou plodu v oblasti prostupujícího obvodu na vrcholu kontrakce je
a) nižší než intraamniální tlak
b) dosahuje až 200 mm Hg
c) nejvýše dvojnásobný
d) stejný jako tlak intraamniální
154. Zažloutlé zbarvení plodové vody při amnioskopii svědčí pro obsah
a) bilirubinu při Rh inkompatibilitě
b) šmolky při zvýšené peristaltice plodu
c) krve při abrupci placenty
d) fosfolipidů při prodlouženém těhotenství
155. Falešně pozitivní imunologický těhotenský test bývá následek
a) zvýšené koncentrace luteinizačního hormonu
b) špatného sběru moči
c) zvýšené koncentrace prolaktinu
d) zvýšené koncentrace estrogenů
156. Cerclage »a chaude« (akutní) znamená, že provádíme operaci
a) při zvýšené teplotě matky
b) při odteklé plodové vodě
c) při pokročilém nálezu na hrdle (prolapsu vaku blan) bez obvyklé přípravy
d) při krvácení z děložního hrdla
157. Nejprůkaznější záznam srdeční akce při kardiotokografii dostaneme
a) zevním záznamem na podkladě EKG
b) vnitřním záznamem na podkladě EKG
c) zevním záznamem na podkladě fonokardiografie
d) zevním záznamem na podkladě Dopplerova principu
158. Při vnitřním monitorování umístěním sondy na hlavičku plodu je záznam získáván pomocí EKG plodu. V které fázi porodu lze tuto metodu užít
a) při zachovaném vaku blan a brance 3 cm
b) po odtoku plodové vody, brance prostupné alespoň pro prst
c) od prvních děložních stahů
d) v těhotenství
159. Zevní měření děložních kontrakcí je možné na podkladě
a) změn svalového napětí břišní stěny
b) mechanického tlaku na sondu, který vzniká změnou tvaru břicha při děložní kontrakci
c) na zvětšení lordózy u plodu při děložní kontrakci
d) na podkladě pletyzmografie
160. Normální CTG nesmí obsahovat
a) akcelerace
b) decelerace
c) srdeční frekvenci > 110 úderů/min
d) oscilace 10-25 úderů/min
161. Akcelerace v CTG záznamu znamená
a) > 15 úderů po více než 15 sekundách v závislosti na pohybu
b) > 15 úderů v závislosti na kontrakci
c) zvýšení srdeční frekvence ve II době porodní
d) hodnotí se jen při začátku porodu
162. Suspektní CTG záznam charakterizuje
a) chybí akcelerace během 40minutového záznamu
b) bazální frekvence 150-170/min
c) sporadické decelerace
d) všechny odpovědi jsou správné
163. Nereaktivní záznam CTG nemusí znamenat ohrožení plodu
a) při aplikaci neuroplegické analgezie
b) při podání peridurální analgezii matce
c) při fyziologickém spánku plodu
d) ve П. době porodní
164. Patologický CTG záznam neobsahuje
a) decelerace
b) akcelerace
c) silentní záznam
d) sinusoidní křivku
165. Který CTG záznam je nejčastěji spojen s postnatálním handicapem novorozence
a) pozdní decelerace
b) variabilní decelerace
c) tachykardie + decelerace
d) sinusoida
166. Bradykardii plodu trvající déle než 10 minut řešíme
a) podáním O2 matce
b) infúzí 10% glukózy matce
c) polohováním matky
d) podáním tokolýzy a ukončením porodu
167. Kontinuální monitorování plodu je nutné
a) při neklidu rodičky
b) u rodičky v termínu porodu
c) při bazální frekvenci nad 120/min
d) při suspektním a patologickém vstupním CTG
168. Patologický CTG záznam za porodu obsahuje
a) časné decelerace
b) pozdní decelerace
c) zvýšení bazální frekvence o 10 úderů/min
d) mělké variabilní decelerace < 60/min
169. Jasnou známkou dobrého stavu plodu je
a) akcelerace v závislosti na pohybech plodu
b) bazální frekvence 110-150/min
c) žádné decelerace
d) žádná odpověď není správná
170. Fetální pulsní oxymetrie se používá
a) v těhotenství
b) za porodu
c) jen ve П době porodní
d) jako vstupní vyšetření na začátku porodu
171. Senzor fetální pulsní oxymetrie se nakládá na
a) temenní část plodu
b) krční krajinu plodu
c) tvář plodu
d) trup plodu
172. Fetální pulsní oxymetrie prokazuje ohrožení plodu hypoxií, pokud saturace O2 poklesne pod
a) 50% nebo méně
b) 40% nebo méně
c) 30% nebo méně
d) žádná odpověď není správná
173. Fetální pulsní oxymetrie se hodnotí společně
a) s pH ze skalpu plodu
b) s pohyby plodu
c) v závislosti na kontrakci
d) s CTG plodu
174. Která z metod diagnostiky fetální hypoxie je nejméně spolehlivá
a) CTG
b) FpO,
c) STAŇ
d) stetoskop
175. Která z placentárních patologií nejvíce (ne však nejčastěji) ohrožuje plod
a) placenta praevia
b) placenta marginalis
c) placenta succenturiata
d) vasa praevia
176. Ruptura dělohy se klinicky projeví nejdříve
a) vymizením děložních kontrakcí
b) akutní hypoxií plodu
c) subjektivní úlevou rodičky
d) všechny tyto skutečnosti jsou přítomny
177. Aktokardiografie
a) znázorní akcelerace
b) znázorní bazální frekvence plodu
c) hodnotí CTG v závislosti na pohybech
d) znázorní dýchací pohyby plodu
178. Monitorovat dvojčata za porodu můžeme
a) plod A skalpovou elektrodou, plod В UZ sondou
b) oba plody zevní UZ sondou
c) dvěma monitory
d) všechny tyto možnosti lze použít
179. Hypoxémie je
a) snížená saturace O2 v centrálních orgánech plodu
b) sražená saturace O2 v arteriální krvi
c) snížená saturace O2 v žilní krvi
d) žádná odpověď není správná
180. Při hypoxémii plod
a) redukuje pohybovou aktivitu
b) redukuje dýchací pohyby
c) zpomaluje růst
d) všechny se uplatňují
181. Hypoxie ploduje
a) snížení saturace O, v periferních tkáních
b) snížení saturace O2 jen v žilním systému
c) snížení saturace O2 v ledvinách
d) žádná odpověď není správná
182. Při hypoxii plod
a) vyplavuje stresové hormony (adrenalin, noradrenalin)
b) zvyšuje koncentraci kyseliny uhličité
c) zvyšuje bazální metabolismus
d) zvyšuje pohybovou aktivitu
183. Asfyxie plodu je
a) snížená saturace O2 v centrálních orgánech plodu
b) snížená saturace O2 v periferii plodu
c) snížené prokrvení v končetinách
d) žádná odpověď není správná
184. Tachykardii plodu způsobuje
a) nedostatek kyslíku v periferních orgánech plodu
b) podráždění sympatiku
c) podráždění parasympatiku
d) zvýšení kyseliny mléčné v oběhu plodu
185. Na změnách srdeční frekvence plodu se podílí
a) změna placentámího průtoku
b) zevní stimul
c) zvýšená tělesná teplota matky
d) všechny odpovědi jsou správné
186. STAN analýza hodnotí
a) QRS interval
b) ST úsek EKG
c) R-R interval
d) vlnu P
187. Hlavička vstouplá malým oddílem znamená,
a) že malá fontanela je nad rovinou pánevního vchodu
b) že malá fontanela je v rovině pánevního vchodu
c) že malá fontanela je pod rovinou pánevního vchodu
d) vedoucí bod v pánevní šíři
188. Při hlavičce vstouplé v pánevní šíři palpujeme
a) horní zadní okraj spony stydké
b) celé vyhloubení kosti křížové
c) jen horní třetinu zadní stěny spony stydké
d) jen dolní třetinu zadní stěny spony stydké
189. Při vakuumextrakci nemusí být podmínkou
a) hlavička vstouplá velkým oddílem
b) branka zašlá
c) plod živý
d) pánev prostorná
190. Amniocentézu je vhodné provést
a) na začátku II trimestru
b) v 8 týdnu těhotenství
c) transvaginálně
d) na konci těhotenství
191. Nejčastější komplikace po amniocentéze
a) poranění střeva těhotné
b) poranění děložních cév
c) poranění močového měchýře těhotné
d) potrat
192. Biofyzikální profil neobsahuje
a) dýchací pohyby
b) pohyby končetin
c) množství plodové vody
d) CTG
193. Nuchální translucence se měří u plodu
a) v 16-17 týdnu gravidity
b) v 11-13 týdnu gravidity
c) ve 2 polovině gravidity
d) před porodem
194. Edwardsův syndrom znamená
a) karyotyp plodu obsahuje trisomii 18 chromosomů
b) karyotyp plodu je 45 chromosomů
c) novorozenec má snížený intelekt
d) novorozenec má mnohočetné malformace
195. Tůmerův syndrom znamená
a) karyotyp jedince je 47 chromosomů
b) karyotyp jedince je 45,X0
c) je přítomen mentální handicap
d) žena je infertilní
196. IUGR při placentám! insuficienci souvisí
a) s asymetrickým vývojem plodu
b) s chromosomální vadou
c) s vyšší váhou plodu
d) žádná odpověď není správná
197. Funneling je
a) rozšíření vnitřní branky děložního hrdla
b) dilatace zevní branky děložního hrdla
c) vyklenutí děložní stěny
d) náplň děložní dutiny při hysteroskopií
198. Incidence předčasného porodu je
a) 5-6%
b) 1%
c) 10%
d) > 10%
199. Nejčastější příčinou předčasného porodu je
a) špatná životospráva těhotné
b) malá návštěvnost poradny
c) infekce
d) úraz
200. Sexuálně přenosné patogeny jsou
a) mykoplazmata
b) ureaplazmata
c) chlamydie
d) všechny vyjmenované
201. Chorioamnionitis je infekce
a) chorioamniálního prostoru
b) plodových obalů
c) plodové vody
d) všechny odpovědi jsou správné
202. Které bakteriální agens se rutinně vyšetřuje u těhotných ve 36 týdnu gravidity
a) stafylokoky
b) skupina streptokoků В (GBS)
c) Escherichia colli
d) chlamydie
203. Bakteriální vaginóza
a) způsobuje u ženy svědivý fluor
b) mění pH poševního sekretu
c) nemá souvislost s předčasným porodem
d) způsobuje horečky u ženy
204. Mezi cytokiny nepatří
a) IL-6
b) TNF-a
c) IL-8
d) fetální fibronektin
205. Cervix skóre nehodnotí
a) tvar děložního hrdla
b) dilataci hrdla
c) konzistenci čípku
d) zkrácení čípku
206. Budínův hmat hodnotí
a) tvar dělohy
b) sklon krční rýhy
c) umístění hřbetu a malých částí plodu v děložních hranách
d) dolní děložní segment
207. Conjugate diagonalis měří
a) 11 cm
b) 12cm
c) 13cm
d) 15 cm
208. Při Fergussonově reflexu se vyplavuje
a) prostaglandin
b) oxytocin
c) oxytocináza
d) estriol
209. Kíistnerův manévr používáme při
a) porodu hlavičky
b) extrakci koncem pánevním
c) hodnocení odlučování placenty
d) revizi dutiny děložní

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
        topic: ['4. Vyšetřovací metody v porodnictví. I. ČÁST PREGRADUÁLNÍ'],
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
