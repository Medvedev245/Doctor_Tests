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
  1. Obvod hlavičky plodu značíme zkratkou
  a) HC
  b) HL
  c) HV
  d) HK
  2. Průměr hlavičky plodu značíme zkratkou
  a) DCP
  b) BPH
  c) BPD
  d) CPD
  3. Obvod trupu plodu značíme zkratkou
  a) AV
  b) AM
  c) AC
  d) BL
  4. Při rutinní biometrii neměříme obvykle tuto část plodu
  a) obvod trupu
  b) obvod hlavy
  c) průměr hlavičky
  d) délku tibie
  5. Délku femuru značíme zkratkou
  a) F1
  c) Fc
  d) Fv
  e) FD
  6. V kterém týdnu těhotenství lze ultrazvukem (UZ) zobrazit srdeční akci
  a) 8 týdnu gestace
  b) 7 týdnu gestace
  c) 6 týdnu gestace
  d) 10 týdnu gestace
  7. Od kterého týdne gestace lze ultrazvukem  bezpečně zobrazit čtyřdutinový obraz srdeční
  a) od 14 týdne gestace
  b) od 18 týdne gestace
  c) od 16 týdne gestace
  d) od 7 týdne gestace
  8. Temenokostrční vzdálenost se označuje zkratkou
  a) CRL
  b) CRP
  c) CRV
  d) CSV
  9. V kterém časovém rozmezí se provádí první ultrazvukový screening
  a) v 18-22 týdnu gestace
  b) v 16-18 týdnu gestace
  c) ve 22-24 týdnu gestace
  d) ve 20-22 týdnu gestace
  10. V kterém časovém rozmezí se provádí druhý ultrazvukový screening
  a) ve 33-35 týdnu gestace
  b) ve 32-34 týdnu gestace
  c) ve 30-32 týdnu gestace
  d) ve 26 týdnu gestace
  11. V kterém časovém úseku nejčastěji diagnostikujeme symetrickou růstovou retardaci plodu
  a) v I trimestru
  b) ve II trimestru
  c) ve III trimestru
  d) kdykoli
  12. V kterém časovém úseku nejčastěji diagnostikujeme asymetrickou růstovou retardaci plodu
  a) ve III trimestru
  b) ve II trimestru
  c) v I trimestru
  d) kdykoli
  13. Která z příčin obvykle nevede к symetrické růstové retardaci
  a) preeklampsie
  b) chromosomální aberace
  c) vrozené vývojové vady
  d) exogenní noxy - alkohol, drogy
  14. Která z příčin obvykle nevede к asymetrické růstové retardaci
  a) preeklampsie
  b) porucha funkce placenty
  c) exogenní noxy - alkohol, drogy
  d) renální/cévní onemocnění matky
  15. Které cévy jsou v pupečníku
  a) 2 žíly a 1 tepna
  b) 1 žíla a 1 tepna
  c) 1 žíla a 2 tepny
  d) 2 žíly a 2 tepny
  16. Při nálezu oligohydramnia nebo anhydramnia nepátráme po
  a) předčasném odtoku plodové vody
  b) nitroděložní růstové retardaci u plodu
  c) normální anatomii ledvin a vývodných močových  cest u plodu
  d) gestačním diabetů u matky
  17. Mezi příčiny polyhydramnia jistě nepatří
  a) atrézie GIT
  b) gestační diabetes matky
  c) srdeční vada plodu
  d) ageneze ledvin
  18. V kterém gestačním týdnu se provádí měření nuchální translucence (šíjového projasnění, NT)
  a) ve 12-14 týdnu
  b) ve 20 týdnu
  c) v 6 týdnu
  d) před porodem
  19. Od kolika mm je nuchální translucence patologická
  a) od 10mm
  b) od 3 mm
  c) od 1 mm
  d) od 20mm
  20. Kolik ml plodové vody se obvykle odebírá při amniocentéze
  a) množství vody plodové v ml odpovídá délce gravidity
  v týdnech - max 20 ml
  b) 24 ml
  c) 10 ml
  d) 5 ml
  21. Jaké je riziko spontánního potratu po amniocentéze
  a) 10%
  b) 20%
  c) 0,5-1 %
  d) není žádné riziko
  22. Od kterého gestačního týdne se amniocentéza nejčastěji provádí
  a) od 30 týdne
  b) od 10 týdne
  c) od 7 týdne
  d) od 15 týdne
  23. Co je cervikometrie
  a) ultrazvukové měření délky děložního hrdla
  b) ultrazvukové zobrazování tvaru vnitřní branky
  c) zjišťování inkompetence hrdla děložního
  d) vše je správné
  24. Do kterého gestačního týdne je indikována cervikometrie
  a) do 20 týdne
  b) do 28 týdne
  c) do porodu
  d) do 32 týdne
  25. Od kolika centimetrů je patologická tlouštka placenty (měřeno u úponu pupečníku)
  a) od 8 cm
  b) od 6 cm
  c) od 12cm
  d) od 15 cm
  26. Hygroma colli cysticum bývá obvykle při
  a) chromosomálních aberacích (trisomie 21, 13, 18)
  b) imunologických defektech
  c) chromosomální aberaci (45,X - Turnérův syndrom)
  a) gestačním diabetů matky
  27. Omfalokélu charakterizuje
  a) přemístění orgánů před stěnu břišní
  b) orgán nebo skupina orgánů před stěnou břišní jsou kryty kýlním vakem - amniem
  c) v kýlním vaku je vzat i pupečník
  d) všechny varianty jsou správné
  28. Která z atrézií jícnu je nejčastější
  a) izolovaná atrézie
  b) atrézie jícnu s pištěli spojující jeho proximální část s tracheou
  c) atrézie jícnu s pištěli spojující jeho distální část s tracheou
  d) atrézie jícnu s dvojitou pištěli mezi tracheou a jícnem
  29. Která z atréziíjícnu je nejvzácnější
  a) izolovaná atrézie
  b) atrézie jícnu s pištěli spojující jeho proximální část s tracheou
  c) atrézie jícnu s pištěli spojující jeho distální část s tracheou
  d) atrézie jícnu s dvojitou pištěli mezi tracheou a jícnem
  30. Brániční hernie je charakterizována
  a) vznikem v 8 týdnu těhotenství
  b) dělením na pravostrannou a levostrannou
  c) žaludek se nezobrazuje na stejné straně jako srdeční hrot
  d) všechny varianty jsou správné
  31. Mezi sonografické známky charakteristické pro chromosomální aberaci nepatří
  a) ageneze nosní kosti u plodu
  b) dilatace pánviček ledvinných u plodu
  c) hyperechogenní střevo plodu
  d) čtyřdutinový obraz srdce
  32. Bilaterální ageneze ledvin
  a) diagnostikuje se obtížně a pozdě (obvykle po 20 týdnu gravidity)
  b) je pro plod infaustní
  c) je charakterizována anhydramniem
  d) všechny varianty jsou správné
  33. Pro vrozenou vývojovou vadu spina bifida neplatí
  a) nejčastěji bývá v oblasti lumbosakrální
  b) nejlépe je diagnostikovatelná při prvním ultrazvukovém screeningu
  c) u plodu lze zobrazit »lemon sign«
  d) nelze ji diagnostikovat ultrazvukem, ale pouze biochemickým vyšetřením
  34. Od kterého týdne lze u plodu prokázat jednotlivé části končetin
  a) od 12 týdne
  b) od 16 týdne
  c) od 20 týdne
  d) od 10 týdne
  35. V kterém rozmezí se obvykle provádí biopsie choria (CVS)
  a) ve 20 týdnu
  b) ve 25 týdnu
  c) mezi 11-12 týdnem
  d) ve 30 týdnu
  36. Je gastroschíza krytá
  a) ano
  b) někdy
  c) ne
  d) vždy
  37. Jaký je sonografický obraz VVV mola hydatidosa
  a) obraz sněhové bouře
  b) obraz není typický
  c) obraz anechogenní dutiny děložní
  d) obraz hyperechogenní dutiny děložní
  38. Který marker je zvýšen u VVV spina bifida ve vodě plodové
  a) ALT
  b) AST
  c) žádný
  d) AFP
  39. Do kterého týdne lze pozorovat tzv. placentámí migraci v ultrazvukovém obrazu
  a) do 32 týdne
  b) do 15 týdne
  c) do 25 týdne
  d) nikdy к ní nedochází
  40. Infarkty na placentě se zobrazujíjako
  a) hyperechogenní ložiska
  b) hypoechogenní ložiska
  c) anechogenní ložiska
  d) nedají se ultrazvukem zobrazit
  41. Kolik je povinných ultrazvukových vyšetření u fyziologické gravidity
  a) jedno vyšetření
  b) při každé návštěvě v prenatální poradně
  c) dvě vyšetření
  d) vyšetření nejsou povinná
  42. Cervikometrie se provádí nejčastěji
  a) vaginální sondou
  b) abdominální sondou
  c) cervikometrem
  d) nejedná se o UZ vyšetření
  43. Mezi indikace к amniocentéze obvykle nepatří
  a) věk matky nad 35 let
  b) pozitivní triple test
  c) UZ zjištění morfologických odchylek u plodu, tzv »soft markerů«
  d) přání matky
  44. Kordocentéza se provádí od
  a) 30 týdne gestace
  b) od 15 týdne gestace
  c) lze ji provést pouze těsně před porodem
  d) od 20 týdne
  45. Riziko potratu po kordocentéze je
  a) 0,5-1%
  b) 20%
  c) 10%
  d) žádné
  46. Při kordocentéze odebíráme obvykle fetální krve
  a) 2-5 ml
  b) 10ml
  c) pod 1 ml
  d) 15 ml
  47. Amniocentéza se provádí
  a) v analgosedaci
  b) v lokální anestezii
  c) bez anestezie
  d) v celkové anestezii
48. Co platí pro kordocentézu
a) provádí se po 20 týdnu gravidity
b) odebírá se krev z vena umbilicalis
c) odebírá se asi 2-5 ml fetální krve
d) všechny varianty jsou správné
49. Který UZ parametr se při podezření na hypotrofizaci plodu nevyšetřuje
a) biometrie
b) průtoky v a umbilicalis
c) množství plodové vody
d) cervikometrie
50. U defektu neurální trubice (NTD) riziko postižení
a) stoupá s hodnotou sérového a-fetoproteinu (MS AFP)
b) klesá s rostoucí hodnotou MS AFP
c) klesá s rostoucí hodnotou hCG
d) stoupá s hodnotou hCG
51. Indikací к provedení amniocentézy je věk těhotné v době porodu
a) nad 30 let
b) nad 33 let
c) nad 35 let
d) pouze věk není indikací к provedení invazivní prenatální diagnostiky
52. Zvýšení hodnoty nuchální translucence (NT) je mimo jiné také spojeno s rizikem
a) spontánního potratu
b) makrosomie plodu
c) předčasného porodu
d) defektu obličeje novorozence
53. Koncentrace PAPP-A jsou v I trimestru u plodu s trisomií 21 nebo 18 chromosomů
a) zvýšené
b) snížené
c) PAPP-A se měří pouze ve II trimestru
d) není signifikantní rozdíl jeho koncentrace ve srovnám se zdravými plody
54. Co nepatří mezi tzv »soft« (minor) markéry trisomie 21
a) cysty choroidálního plexu
b) pyelektazie
c) hyperechogenní střevo
d) zkrácený femur
55. Mezi povinná sonografická vyšetření v porodnictví patří
a) sonografický screening ve 20 a 38-40 týdnu gravidity
b) sonografický screening v 18-20 týdnu gravidity
c) sonografický screening v I trimestru, 18-20 a 30-32 týdnu gravidity
d) sonografický screening v 20-22 a 30-32 týdnu gravidity
56. V jakém týdnu gravidity provádíme první UZ screening
a) v 10-12
b) ve 14
c) ve 20-22
d) ve 30-32
57. V jakém týdnu gravidity provádíme druhý UZ screening
a) v 18-20
b) ve 24-26
c) ve 30-32
d) ve 38-40
58. Pseudogestační váček vzniká
a) nahromaděním tekutiny mezi vrstvami deciduy při mimoděložním těhotenství
b) při neprosperujícím nitroděložním těhotenství
c) u syndromu mizejícího dvojčete
d) ani jedna z uvedených odpovědí není správná
59. Mezi nepřímé známky vitality gravidity nepatří
a) normálně rostoucí a dobře tonizovaný plodový váček
b) dobře tonizovaný a normálně velký žloutkový váček
c) subtrofoblastický průtok
d) normálně velký plod
60. Kdy můžeme poprvé při ultrazvukovém vyšetření vaginální sondou vizualizovat srdeční akci plodu (jako pulsaci septum primům)
a) ve 4 týdnu gravidity
b) v 5-6 týdnu gravidity
c) v 7-8 týdnu gravidity
d) v 9-10 týdnu gravidity
61. Hyperechogenní dvouvrstvý obal (DDS - double decidual sac) je charakteristický pro
a) gestační váček
b) pseudogestační váček
c) žloutkový váček
d) dvoučetnou graviditu
62. V 9 týdnu gravidity provádíme biometrii měřením
a) BPD
b) GS
c) HC
d) CRL
63. Anhydramnion vídáme při
a) obstrukci GIT
b) makrosomii plodu
c) agenezi ledvin
d) rozštěpu rtu i patra
64. Polyhydramnion vídáme zejména při
a) obstrukci GIT
b) agenezi ledvin
c) IUGR
d) rozštěpu rtu i patra
65. Funkční délka hrdla děložního při cervikometrii
a) má měřit alespoň 15 mm
b) ultrazvukově nelze změřit
c) je synonymum pro celkovou délku čípku
d) je měření nedilatované části cervikálního kanálu
66. Normální nález při cervikometrii je
a) délka hrdla 20-25 mm
b) délka hrdla nad 30 mm
c) šířka hrdla nad 30mm
d) dilatace vnitřní branky více než 10mm
67. Jaké množství vody plodové ve Ш trimestru hodnotíme jako oligohydramnion
a) < 100ml
b) < 300ml
c) 300-1000 ml
d) >1000ml
68. Jaké množství vody plodové ve III trimestru hodnotíme jako normohydramnion
a) 300-1000 ml
b) < 300 ml
c) 1000-2000 ml
d) > 2000 ml
69. Při hodnocení množství vody plodové metodou
měření největšího depa je oligohydramnion při
a) vertikálním rozměru největšího depa < 10mm
b) vertikálním rozměru největšího depa < 30mm
c) vertikálním rozměru největšího depa 30-100mm
d) vertikálním rozměru největšího depa > 100mm
70. Při hodnocení množství vody plodové metodou měření největšího depa je polyhydramnion při
a) vertikálním rozměru největšího depa < 30mm
b) vertikálním rozměru největšího depa 30-100mm
c) vertikálním rozměru největšího depa > 100 mm
d) touto metodou nelze polyhydramnion určit
71. Co to je NT
a) měření délky nosní kosti plodu
b) měření délky stehenní kosti plodu
c) měření šíjového projasnění plodu v I trimestru
d) ani jedna odpověď není správná
72. Monozygotická dvojčata jsou nejčastěji
a) bichoriální, biamniální
b) monochoriální, biamniální
c) monochoriální monoamniální
d) bichoriální, monoamniální
73. Kdy je nejlepší doba pro ultrazvukové vyšetření s cílem stanovení typu chorionicity a amnionicity u dvojčat
a) v I trimestru
b) při prvním UZ screeningu v 18-20 týdnu gravidity
c) při druhém UZ screeningu ve 30-32 týdnu gravidity
d) nejlépe těsně před porodem
74. Při ultrazvukovém vyšetření v I trimestru gravidity dáváme přednost vyšetření
a) transabdominální sondou
b) vysokofrekvenční vaginální sondou
c) je jedno, zda vyšetřujeme abdominální či vaginální sondou, jelikož obě vyšetření mají stejnou rozlišovací schopnost
d) raději se vyhýbáme vyšetření vaginální sondou pro  nebezpečí krvácení
75. U bichoriálních biamniálních dvojčat jsou odděleny obě amniové dutiny membránou skládající se
a) ze dvou vrstev choria a jedné vrstvy amnia
b) pouze ze dvou vrstev amnia
c) z jedné vrstvy choria a jedné vrstvy amnia
d) ze dvou vrstev choria a dvou vrstev amnia
76. Znak »lambda«
a) slouží ke stanovení chorionicity u dvojčat
b) absence tohoto znaku není charakteristická pro monochoriální dvojčata
c) absence tohoto znaku je charakteristická pro bichoriální dvojčata
d) bývá patrný na hlavičce při hydrocefalu plodu
77. Fyziologická omfalokéla se ztrácí do
a) 12-13 týdne gravidity
b) 20 týdne gravidity
c) 30 týdne gravidity
d) 8 týdne gravidity
78. Hygroma colli cysticum může být nejdříve diagnostikována
a) v I trimestru
b) ve П trimestru
c) ve III trimestru
d) většinou se nedaří ultrazvukově diagnostikovat
79. Hydrops plodu může být součástí některých patologických jevů, jako jsou
a) Rh inkompatibilita
b) jiné příčiny anémie plodu
c) některé srdeční vady plodu
d) všechny odpovědi jsou správné
80. Co je příčinou ultrazvukového obrazu double bubble
a) atrézie jícnu
b) pylorostenóza
c) ageneze žaludku
d) diafragmatická hemie
81. Strawberry haed můžeme vidět u
a) trisomie 21 chromosomu
b) trisomie 13 chromosomu
c) Turnérova syndromu
d) trisomie 18 chromosomu
82. Pro horní hranici dolního děložního segmentu při UZ klasifikaci uložení placenty se využívá zobrazení
a) symfýzy
b) vnitřní branky
c) vezikouterinní pliky při mírné náplni močového měchýře
d) spina iliaca anterior superior
83. Co nepatří mezi rizikové faktory pro Downův syndrom
a) věk ženy nad 35 let
b) pozitivní screening PAPP-A a free B-hCG
c) větší AC
d) přítomnost nuchálního edému
84. Od jakého týdne gravidity je uložení placenty definitivní, pokud jde o vztah к dolnímu děložnímu segmentu
a) od 12 týdne
b) od 20 týdne
c) od 32 týdne
d) od 37 týdne
85. Placenta praevia I stupně je při UZ klasifikaci definována, pokud
a) překračuje honu hranici dolního děložního segmentu nejvýše o 50mm
b) zasahuje 20 mm nad йроп pliky vezikouterinní
c) překračuje horní hranici dolního děložního segmentu o více než 50mm
d) odpovídá klinické diagnóze placenta praevia centralis
86. Jaká je prevalence Downova syndromu v populaci
a) 1 : 1000
b) 1 : 5000
c) 1 : 10 000
d) 1 : 350
87. Za hranici významného zvýšení koncentrace sérového a-fetoproteinu při biochemickém screeningu u jednočetného těhotenstvíje považováno
a) l,5násobku mediánu (MoM)
b) 2,5násobku mediánu
c) 3,5násobku mediánu
d) 4,5násobku mediánu
88. Biometrický parametr, který lze využít к určení délky těhotenství v I trimestru je měření
a) délky femuru (FL)
b) obvodu hlavičky (HC)
c) šíjového projasnění (NT)
d) temeno-kostrční vzdálenosti (CRL)
89. Nuchální translucence měřená v I trimestru je
a) patrná pouze u plodů s chromosomální aberací
b) hypoechogenní oblast lokalizovaná mezi kůží a měkkými tkáněmi plodu v oblasti krční páteře
c) hypoechogenní oblast lokalizovaná mezi kůží plodu v oblasti krční páteře a amniem
d) u zdravých plodů vždy více než 3 mm
90. Co znamená termín fetální echokardiografíe
a) zjišťování srdeční frekvence plodu
b) je to metoda snímání ozev plodu při kardiotokografu
c) UZ vyšetření srdce plodu specialistou
d) vyšetření srdce novorozence
91. Co je to zobrazení v šedé škále
a) zhoršení obrazu šumem
b) různě silnému echu odpovídá stupeň šedé barvy
c) výskyt šedých artefaktů v UZ obrazu
d) šedý obraz u starého monitoru
92. Akci srdeční embrya detekujeme bezpečně
a) v 6 menstruačním týdnu těhotenství
b) ve 12 menstruačním týdnu těhotenství
c) v 8 menstruačním týdnu těhotenství
d) v 10 menstruačním týdnu těhotenství
93. Ultrazvukové vlnění se vytváří pomocí
a) cívky
b) speciálního reproduktoru
c) piezoelektrických krystalů
d) integrovaného obvodu
94. Dopplerův jev znamená
a) pravidelně se opakující zatmění měsíce
b) popis slapových sil
c) posun frekvence zvuku při odrazu od pohyblivé překážky
d) odraz ultrazvukového vlnění od překážky
95. Používané frekvence ultrazvukových sond v porodnictví
a) 200-350 kHz
b) 2,5-8 MHz
c) 250-800 kHz
d) 2,5-5 kHz
96. Hmotnostní odhad plodu v poloze koncem pánevním
a) provádíme stejně jako u plodu v poloze podélné hlavičkou
b) neprovádíme
c) není vzhledem к poloze plodu možný
d) je sice nejméně přesnou metodou odhadu, ale přesto jej provádíme
97. Biometrie plodu se využívá též
a) к měření průtoku v arteria umbilicalis
b) ke stanovení hmotnostního odhadu plodu
c) ke zhodnocení množství vody plodové
d) к změření bazální frekvence srdce plodu
98. Ke stanovenístáří těhotenství před 12 týdnem gestace používáme
a) délku femuru (FL)
b) měření srdeční frekvence
c) měření temeno-kostrční délky (CRL)
d) zhodnocení morfologie vývoje mozkových struktur
99. Hmotnost plodu běžně odhadujeme
a) výpočtem z UZ měření BPD, KP a FL
b) odhadem podle CRL
c) nejpřesnější je odhad podle měření vzdálenosti spona -fundus děložní
d) výpočtem z UZ měření BPD, AC a FL
100. Při screeningovém vyšetření ve 20-22 týdnu standardně neprovádíme
a) zhodnocení morfologie srdce
b) zjištění počtu plodů
c) karyotypizaci
d) zhodnocení morfologie končetin
101. V rámci ultrazvukového screeningu ve 20-22 týdnu těhotenství běžně neprovádíme
a) biometrii plodu
b) zhodnocení množství plodové vody
c) flowmetrii - měření průtoků v arteria umbilicalis
d) zhodnocení uložení placenty
102. Co není běžnou součástí prvního screeningového ultrazvukového vyšetření
a) kontrola kontinuity horního rtu plodu
b) zhodnocení morfologie srdce plodu
c) kontrola morfologie a počtu prstů končetin plodu
d) stanovení pohlaví plodu
103. Co platí pro ultrazvukové screeningové vyšetření ve 30-32 týdnu těhotenství
a) biometrii již neprovádíme
b) zhodnocení srdeční anatomie již není možné
c) ověřujeme mimo jiné i polohu plodu a množství plodové vody
d) mozek plodu ještě není plně vyvinut
104. Co běžně neprovádíme při vyšetření ve 20-22 týdnu těhotenství
a) hodnocení šíře postranních mozkových komor plodu
b) zhodnocení srdeční anatomie plodu
c) ověření počtu plodů
d) měření délky plosky nohy plodu
105. Měření délky děložního hrdla je
a) standardní a povinnou součástí ultrazvukového screeningového vyšetření
b) měření délky děložního hrdla a zhodnocení tvaru vnitřní branky v těhotenství
c) měření obvodu krčku plodu
d) součástí onkologického screeningu
106. Jaká je poloha a uložení plodu při ultrazvukovém vyšetření ve 20-22 týdnu
a) již téměř stabilní, u 95 % plodů zjištěná poloha plodu přetrvá až do porodu
b) u naprosté většiny plodů je poloha koncem pánevním
c) poloha plodu je volná
d) ještě není zjistitelná
107. Ultrazvukový screening u nás provádíme standardně
a) ve 20-22 týdnu a ve 30-32 týdnu těhotenství
b) v 11 -13 týdnu a 22-24 týdnu těhotenství
c) jen u rizikových těhotných
d) screeningový program není plošně zaveden
108. Které z následujících měřeníje nejpřesnější pro určení gestačního stáří podle ultrazvuku
a) transvaginální měření gestačního váčku v 5 týdnu těhotenství
b) měření FL (femuru) ve 20 týdnu těhotenství
c) měření CRL (crown-rump length) v 7 týdnu
d) měření BPD (bipatrietálního průměru) ve 24 týdnu těhotenství
109. Která z následujících metod je nejpřesnější pro stanovení gestačního stáří resp termínu porodu
a) měření vzdálenosti SF (symfýza -fundus)
b) stanovení podle PM (poslední menstruace)
c) ultrazvukové měření vzdálenosti CRL (crown-rump length) v I trimestru těhotenství
d) ultrazvukové měření průměru gestačního váčku
110. Co je zvláště důležité při ultrazvukovém vyšetření plodu v poloze koncem pánevním
a) stanovení postavení plodu
b) popis uložení ruček plodu
c) přesný hmotnostní odhad plodu
d) pohlaví plodu
111. Stanovení chorionicity vícečetného těhotenství
a) neprovádíme ultrazvukem
b) je možné provést ultrazvukem, nejpřesněji v I trimestru
c) je možné provést ultrazvukem, nejpřesněji ve П trimestru
d) je možné až při porodu
112. Indikací к provedení flowmetrie (měření průtoku v arteria umbilicalis) je
a) podezření na růstovou retardaci plodu
b) nadměrné množství plodové vody
c) volná poloha plodu v 16 týdnu těhotenství
d) nález zkalené plodové vody na UZ


`;

  const answers = `
  1a 2c 3c 4d 5a 6c 7a 8a 9d
10c 11b 12a 13a 14c 15c 16d 17d 18a 19b
20a 21c 22d 23d 24d 25c 26c 27d 28c 29a
30d 31d 32d 33d 34d 35c 36c 37a 38d 39a
40a 41c 42a 43d 44d 45a 46a 47c 48d 49d
50a 51c 52a 53b 54a 55d 56c 57c 58a 59c
60b 61a 62d 63c 64a 65d 66b 67b 68a 69b
70c 71c 72b 73a 74b 75d 76a 77a 78a 79d
80b 81d 82c 83c 84c 85a 86a 87b 88d 89b
90c 91b 92a 93c 94c 95b 96a 97b 98c 99d
100c 101c 102d 103c 104d 105b 106c 107a 108c 109c
110c 111b 112a
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
        topic: ['5. Ultrasonografie v porodnictví. I. ČÁST pregraduální'],
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
