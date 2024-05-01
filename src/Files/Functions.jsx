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
  1. Lividita se projevuje v těhotenství
  a) na kůži břicha
  b) naděložním hrdle
  c) na děložním hrdle, pochvě a vulvě
  d) na očních spojivkách
  2. Děložní sliznice po vzniku těhotenství
  a) hyperproliferuje
  b) odloučí se a přeroste decidua
  c) deciduálně se přeměňuje
  d) atrofuje
  3. Koncem 2 měsíce gravidity je uterus velikosti I přibližně
  a) husího vejce
  b) slepičího vejce
  c) 3-4 cm nad sponou
  d) kokosového ořechu
  4. Hmotnost srdce matky v těhotenství
  a) se zmenšuje asi o 50 g
  b) se nemění
  c) se zvětšuje asi o 25 g
  d) se zvětšuje asi o 300 g
  5. Leží-li těhotná žena na zádech, tlačí často zvětšený ureterus na vena cava, a zpomaluje tak žilní návrat к srdci - žena může zkolabovat. Tento syndrom nazýváme
  a) syndrom ortostatický
  b) syndrom parkinsonský
  c) syndrom horní duté žíly
  d) syndrom dolní duté žíly
  6. Na začátku těhotenství se objevují mimo jiné také
  a) vypadávání vlasů
  b) zvláštní chutě na některá jídla
  c) zvýšení růstu ochlupení
  d) zvýšení inteligenčního koeficientu
  7. hCG s cílem průkazu těhotenství stanovujeme
  a) ve slinách matky
  b) v krvi plodu
  c) v krvi matky
  d) v plodové vodě
  8. Vitální kapacita plic na konci těhotenství
  a) je zcela individuálně rozdílně změněná
  b) klesá
  c) stoupá
  d) nemění se
  9. V těhotenství snáze vzniká
  a) infekce chřipkou
  b) žaludeční vřed
  c) fraktura femuru
  d) zubní kaz
  10. Těhotenská glykosurie se vyskytuje
  a) u všech těhotných
  b) u většiny starších primipar
  c) u žádné těhotné, pokud není diabetičkou
  d) u 20 % těhotných
  11. Chloasma uterinum je způsobeno zvýšenou sekrecí
  a) TRH
  b) FSH
  c) MSH
  d) LH
  12. Počet kotyledonů lidské placenty je přibližně
  a) 40
  b) 16
  c) 8
  d) 2
  13. Placenta donošeného plodu váží přibližně
  a) 500 g
  b) 1000 g
  c) 100 g
  d) 2500 g
  14. Příčinou tonogenní dilatace ureterů těhotné ženy je
  a) účinek progesteronu
  b) účinek hCG
  c) účinek estrogenů
  d) tlak způsobený těhotnou dělohou
15. Glomerulární filtrace v těhotenství
a) klesá
b) mění se individuálně
c) nemění se
d) stoupá
16. К pravděpodobným známkám těhotenství patří
a) zvýšené vylučování protilátek proti hCG
b) trismus
c) krvácení z rodidel
d) lividita děložního hrdla a pochvy
17. К posouzení stavu fetoplacentární jednotky můžeme koncem těhotenství vyšetřovat
a) stanovení L/S indexu
b) množství estriolu v moči těhotné
c) koncentraci hemoglobinu v krvi těhotné
d) koncentraci testosteronu v moči těhotné
18. Choriové klky placenty jsou v intervilózních prostorách omývány
a) plodovou vodou
b) krví plodu
c) mateřskou krví
d) mateřským sérem
19. Bez účasti plodu je v placentě vytvářen
a) estriol
b) estron
c) estradiol
d) progesteron
20. Fyziologicky je největší množství plodové vody přítomno ve 35 týdnu těhotenství, a to
a) 33 ml
b) 1000 ml
c) 330 ml
d) 100 ml
21. Polyhydramnion znamená
a) přítomnost dvou vaků blan u dvojčat
b) předčasný odtok plodové vody
c) snížené množství plodové vody
d) zvýšené množství plodové vody
22. Chorion je histologicky
a) sliznice
b) svalová tkáň
c) převážně vazivo
d) epitel
23. Pupečníkem probíhají
a) 1 tepna a 2 žíly
b) 3 tepny
c) 1 žíla a 1 tepna
d) 2 tepny a 1 žíla
24. Whartonův rosol se nachází
a) v pupečníku
b) na povrchu plodu v době těsně před porodem
c) v placentě
d) mezi plodovými obaly
25. Koncentrace FSH v těhotenstvíje
a) individuálně různá
b) vysoká
c) nízká
d) kolísavá
26. Koncentrace prolaktinu v těhotenství
a) je individuálně rozdílná
b) se zvyšuje
c) se snižuje
d) kolísá
27. Žílou v pupečníku protéká krev
a) bohatá kyslíkem
b) směrem к placentě
c) odkysličená
d) teplejší než v pupeční tepně
28. Koncentrace progesteronu v krvi matky během těhotenstvíje
a) vysoká
b) žádný progesteron se nevyskytuje
c) nízká
d) kolísavá
29. Koncentrace estrogenů je v průběhu těhotenství v krvi matky
a) střídavě vysoká a nízká
b) vysoká
c) žádné estrogenně účinné hormony nejsou přítomny
d) nízká
30. Funiculus umbilicalis má většinou délku
a) 20 cm
b) 80 cm
c) 40 cm
d) 55 cm
31. Atypický úpon pupečníku v blanách nazýváme
a) takový stav nemůže nastat, došlo by к okamžitému úmrtí plodu
b) insertio velamentosa
c) insertio centralis
d) insertio marginalis
32. Za dolní hranici normy koncentrace hemoglobinu v krvi těhotné považujeme
a) 75 g/1
b) 115 g/1
c) 125 g/1
d) 150 g/1
33. Fibrinogenémie na konci těhotenství
a) klesá
b) stoupá
c) fibrinogen vymizí
d) nemění se
34. Největší koncentrace hCG je v těhotenství
a) v 1 měsíci
b) na konci těhotenství
c) v 6 měsíci
d) ve 3 měsíci
35. Mezi subjektivní příznaky těhotenství u ženy patří
a) diplopie
b) vzestup hCG
c) přírůstek na váze
d) ranní nauzea a zvracení
36. Chloasma uterinum se projevuje jako
a) akutní stav vyžadující intenzivní péči
b) zvýšená pigmentace těhotné ženy na obličeji
c) selhání nadledvin vlivem těhotné dělohy
d) tanec svátého Víta
37. Mezi jisté známky těhotenství nepatří
a) průkaz kostry plodu rentgenovým vyšetřením
b) srdeční akce plodu viditelná ultrazvukem
c) kardiotokografický záznam srdeční akce plodu
d) zvětšená a prosáklá děloha
38. Hmotnost svaloviny dělohy se v průběhu těhotenství zvětší
a) z 1000 na 2000 g
b) z 10 na 100 g
c) z 70 na 1000 g
d) ze 100 na 2000 g
39. Po umělém přerušení těhotenství v I a II trimestru klesá koncentrace lidského choriového gonadotropinu v séru matky к neměřitelným hodnotám za
a) lOdní
b) 20 dní
c) 40 dní
d) 60 dní
40. Koncentrace a-fetoproteinu v plazmě matky je zvýšena při těchto vrozených onemocněních plodu
a) defektu neurální trubice
b) hypotrofii
c) hydrocefalu
d) chondrodystrofii
41. U ležící těhotné ženy dosahuje děložní fundus do výše pupku v tomto týdnu těhotenství
a) ve 24
b) v 10
c) v 17
d) ve 36
42. Proti stavu před těhotenstvím stoupá objem cirkulující krve nejvíce mezi 32 a 36 týdnem gravidity, a to o
a) 30%
b) 5%
c) 15%
d) 20 %
43. Prekurzorem estrogenů u těhotné ženy není
a) androstendion
b) cholesterol
c) dehydroepiandrosteron
d) norethisteron
44. Změny ve vylučování estriolu mateřskou močí podávají
a) nepřímou informaci o stavu fetoplacentámí jednotky
b) přímou informaci o blížícím se porodu
c) nepřímou informaci o stavu placenty
d) přímou informaci o stavu plodu
45. Při vyšetřování estriolu v moči těhotné hodnotíme
a) vyšetření ze vzorku moči kdykoli v průběhu dne
b) vývojový trend
c) pouze jedno vyšetření
d) vyšetření z ranní moči
46. DHEAS test byl zaveden jako
a) test zralosti placenty
b) test zralosti plodu
c) test funkce fetoplacentámí jednotky
d) test plicní zralosti plodu
47. Relaxin je
a) steroidní hormon
b) hormon ovlivňující psychiku těhotných žen
c) hormon tvořený ve žlutém tělísku ovlivňující pevnost kloubních spojení
d) polypetidový hormon tvořený v adenohypofýze
48. Progesteron je
a) hormon produkovaný v adenohypofýze
b) steroidní hormon produkovaný žlutým tělískem a placentou
c) hormon produkovaný v neurohypofýze
d) téměř nedetekovatelný v plazmě těhotných žen
49. Hlavním účinkem prolaktinu je
a) spuštění a regulace laktace
b) řízení menstruačního cyklu
c) řízení ovulace
d) řízem růstu organismu
50. Nutriční požadavky organismu se v těhotenství
a) nemění
b) zvyšují
c) snižují
d) snižují ke konci III trimestru
51. Motilita trávicího ústrojí se v těhotenství
a) snižuje
b) nemění
c) je ovlivněna evakuace jen tlustého střeva
d) je ovlivněna evakuace jen tenkého střeva
52. Žlučník v těhotenství
a) bývá často zvětšený
b) snáze dochází к evakuaci jeho obsahu
c) netvoří se ve větší míře žlučové kameny
d) jeho funkce není těhotenstvím ovlivněna
53. Játra v těhotenství
a) se zvětšují až o 30 %
b) jejich morfologie není těhotenstvím ovlivněna
c) funkce jater není ovlivněna
d) jsou zdrojem progesteronu
54. Ledviny v těhotenství
a) se zvětšují až o 1,5 cm
b) nedilatuje se kalicho-pánvičkový systém
c) glomerulámí filtrace se snižuje
d) se zmenšují až o 1,5 cm
55. Renální funkce v těhotenství
a) glomerulámí filtrace je nižší
b) se nemění
c) se mění u těhotných již v I. trimestru
d) snižuje se průtok plazmy ledvinami
56. Lehká glykosurie v těhotenství
a) je vždy známkou diabetes mellitus
b) glukóza je přítomna v moči u 50 % těhotných a nevyžaduje zvláštní opatření
c) může být známkou diabetes mellitus, taková těhotná vyžaduje další sledování
d) není v souvislosti s infekcemi močových cest
57. Kapacita močového měchýře se v těhotenství
a) snižuje
b) nemění
c) zvyšuje až na 1500 ml
d) zvyšuje až na 3000 ml
58. Objem cirkulující krve v těhotenství
a) se snižuje
b) se zvyšuje
c) nemění se
d) je ovlivněn hlavně zvýšeným počtem erytrocytů v mateřské krvi
59. Základní příznaky, které mohou ukázat na těhotnou s hrozící preeklampsií, jsou
a) elevace teploty, glukóza v moči, edémy
b) elevace krevního tlaku, bílkovina v moči, edémy
c) nižší krevní tlak, nižší koncentrace albuminu v plazmě, edémy
d) elevace krevního tlaku, krev v moči, anémie
60. U ženy po transplantaci ledviny
a) je těhotenství kontraindikováno
b) v případě, že otěhotní, musí bezpodmínečně vysadit všechna imunosupresiva chránící štěp
c) během těhotenství ji častěji sledujeme, není vyloučen spontánní porod
d) není nutný zvláštní přístup během těhotenství
61. Sekrečně změněné endometrium je připravené к implantaci blastocysty od
a) 19 dne cyklu
b) 23 dne cyklu
c) 25 dne cyklu
d) 27 dne cyklu
62. hCG dosahuje nejvyšších koncentrací v sérumatky
a) v 6-8 týdnu těhotenství
b) v 9-11 týdnu těhotenství
c) ve 12-13 týdnu těhotenství
d) ve II trimestru
63. Zvýšenou koncentraci hCG nezjišťujeme
a) u vícečetného těhotenství
b) u molámího těhotenství
c) u choriokarcinomu
d) u abortus imminens
64. Lidský placentámí laktogen (lidský choriový somatomamotropin) dosahuje nejvyšších koncentrací v séru matky
a) v 9-11 týdnu těhotenství
b) ve 20-22 týdnu těhotenství
c) ve 30-32 týdnu těhotenství
d) ve 36^40 týdnu těhotenství
65. V těhotenství se prolaktin tvoří kromě hypofýzy matky také
a) v ovariu
b) v nadledvině
c) v decidualizovaném endometriu
d) v cytotrofoblastu
66. Koncentrace a-fetoproteinu je v plazmě matky snížena při těchto onemocněních plodu
a) defekt neurální trubice
b) vrozená nefróza
c) hypotrofie
d) Downův syndrom
67. Do 8 týdne »menstruačního« stáří plodu je progesteron tvořen převážně
a) v corpus luteum
b) v placentě
c) v endometriu
d) v nadledvinách
68. Který z uvedených účinků v těhotenství nemá H progesteron
a) inhibuje funkci T-lymfocytů
b) tlumí účinky estrogenů a zajišťuje relaxaci myometria
c) stimuluje produkci prostaglandinů
d) inhibuje produkci prostaglandinů
69. Který z uvedených hormonů je nezbytně nutný pro zahájení laktace
a) estradiol
b) progesteron
c) oxytocin
d) iprolaktin
70. Ranní nevolnost a zvracení v těhotenství
a) není možno léčit antiemetiky
b) inikdy nevyžaduje hospitalizaci
c) se objevuje typicky v I trimestru
d) se přičítá častějším dietním chybám v těhotenství
71. Který z uvedených hormonů vyvolává kontrakce В myoepitelových buněk, které obklopují alveolv, a podporuje tak vypuzování mléka z alveolů i a alveolárních duktů směrem к bradavce
a) estradiol
b) rorogesteron
c) jxytocin
d) prolaktin
72. V době kojení se zvyšuje sekrece oxytocinu a v důsledku toho se
a) lzvyšují kontrakce dělohy, které šestinedělka pociťuje
b) zvyšuje minutový srdeční výdej
c) [zvyšuje minutová plicní ventilace
d) zvyšuje glomerulámí filtrace a tubulámí resorpce
73. Kolostrumje secernováno do alveolů od II trimestru těhotenství, vlastní sekrece mléka  začíná
a) ve 40 týdnu těhotenství
b) ihned po porodu
c) 1 den po porodu
d) 2-3 den po porodu
74. Jaké změny na děložním hrdle zjišťujeme častěji u těhotných ve srovnání s netěhotnými ženami
a) atypickou glandulámí hyperplazii
b) dysplazii
c) metaplazii
d) neoplazii
75. V 5 měsíci fyziologického těhotenství hmatáme děložní fundus
a) úrovni symfýzy
b) v polovině vzdálenosti pupek - symfýza
c) v úrovní pupku
d) v polovině vzdálenosti pupek - procesus xiphoideus
76. Nejdůležitější hemostatický mechanismus, který zabraňuje závažnému poporodnímu krvácení je
a) zvýšení aktivity koagulačních faktorů
b) vazokonstrikce terminálních částí uterinních cév
c) retrakce a kontrakce dělohy
d) inhibice fibrinolýzy
77. Průměrná délka těhotenstvíje
a) 260 dní
b) 270 dní
c) 280 dní
d) 290 dní
78. Hmotnost dělohy v době termínu porodu je okolo
a) 500 g
b) lOOOg
c) 1500g
d) 2000 g
79. Intrauterinní objem dělohy v době termínu porodu je
a) 1000ml
b) 3000ml
c) 5000ml
d) 8000 ml
80. Objem svaloviny dělohy se v průběhu těhotenství zvětšuje procesem, který nazýváme
a) atypická hyperplazie
b) anaplazie
c) hypertofie a hyperplazie
d) involuce
81. Průměrná denní produkce progesteronu ve III trimestru je okolo
a) 300 pg
b) 300 ng
c) 300 pg
d) 300mg
82. Pro těhotenství je charakteristická
a) bederní lordóza
b) hrudní kyfóza
c) skolióza
d) hrudní kyfóza a bederní lordóza
83. Symptom zvýšené tvorby slin, který se může vyskytnout v těhotenství, nazýváme
a) deglutice
b) emesis
c) ptyalismus
d) pruritus
84. V průběhu fyziologického těhotenství se zvyšuje
a) koncentrace tyroxin-binding globulinu v plazmě
b) koncentrace kreatininu v plazmě
c) hematokrit
d) motilita tenkého střeva
85. Ke změnám trávicího ústrojí v průběhu fyziologického těhotenství patří
a) komprese a vytlačení apendixu těhotnou dělohou směrem kaudálním
b) zvýšení tonu a motility střev
c) zrychlené vyprazdňování žaludku
d) vysunutí žaludku směrem kraniálním
86. Změny ve vylučovacím systému v průběhu fyziologického těhotenství způsobují
a) zvýšení glomerulámí filtrace
b) snížení průtoku plazmy ledvinami
c) zvýšení koncentrace nebílkovinného dusíku a kreatininu v plazmě
d) zvýšení tonu vývodných cest močových
87. Při vylučovací urografii ve III trimestru fyziologického těhotenství můžeme zjistit
a) oboustranné zmenšení ledvin v důsledku útlaku zvětšenou dělohou
b) zúžení event, obstrukci pravého ureteru způsobené tlakem zvětšené dělohy v dextrotorzi
c) zúžení obou ureterů způsobené zvýšeným tonem hladkého svalstva při zvýšených koncentracích estrogenů
d) dilataci ureterů způsobenou zvýšenou sekrecí progesteronu a kompresí kaudální části vývodných cest močových zvětšenou dělohou
88. Hlavní příčinou snížené koncentrace hemoglobinu v průběhu fyziologického těhotenstvíje
a) snížení mobilizovatelných zásob železa
b) transport železa matky do plodu a placenty
c) zvýšení objemu plazmy
d) zvýšená destrukce erytrocytů při hyperkinetické cirkulaci
89. Pro metabolismus železa v těhotenstvíje charakteristické
a) zvýšení zásob železa ve srovnání s netěhotnými ženami
b) zvýšení absorpce železa z trávicího ústrojí
c) snížení absorpce železa z trávicího ústrojí
d) zvýšená spotřeba železa v první polovině těhotenství, větší než v druhé polovině
90. Celkový objem krve se v těhotenství zvyšuje v důsledku
a) zvětšení objemu plazmy
b) zvětšení objemu erytrocytámí masy
c) zvětšení objemu plazmy a erytrocytámí masy, kdy zvětšení objemu plazmy je významně vyšší než zvýšení erytrocytámí masy
d) zvětšení objemu plazmy a erytrocytámí masy, kdy zvětšení objemu erytrocytámí masy je významně vyšší než zvětšení objemu plazmy
91. Které prohlášení týkající se imunitního systému v těhotenstvíje správné
a) humorální imunita proti spalničkám, herpes simplex a chřipce typu A se snižuje
b) interferon a v tkáních matky se snižuje к neměřitelným hodnotám
c) chemotaxe a adherence polymorfonukleámích leukocytů se zvyšuje od П. trimestru ve srovnání s netěhotnými ženami
d) leukocytóza v těhotenství je laboratorní známkou zvýšené imunity matky
92. Které prohlášení týkající se C-reaktivního proteinu v těhotenstvíje správné
a) u většiny těhotných je mírně zvýšený, významné zvýšení zjišťujeme zejména v průběhu porodu
b) jeho hodnoty se významně zvyšují v závislosti na délce gestace
c) v těhotenství ztrácí svůj význam jako marker infekce
d) dvojnásobné zvýšení jeho normální hodnoty je již spolehlivý ukazatel infekce v těhotenství
93. V těhotenstvíje nejvíce estrogenů tvořeno
a) v ovariích matky
b) v nadledvinách matky
c) v placentě
d) u plodu
94. Který z uvedených údajů týkající se respiračního systému v těhotenství je správný
a) dechový objem se zvyšuje
b) snižuje se minutová ventilace
c) funkční reziduální kapacita je zvýšená
d) celková kapacita plic je zvýšená
95. Ve srovnání s netěhotnou těhotná žena hyperventiluje, což je kompenzováno
a) zvýšením dechového objemu
b) respirační alkalózou
c) snížením koncentrace bikarbonátu v plazmě
d) snížením pCO, v krvi
96. V průběhu fyziologického těhotenství nenastává
a) zvýšení minutového výdeje srdečního
b) zvýšení celkového objemu krve
c) zvýšení renální perfúze
d) zvýšení funkčního reziduálního objemu plic
97. V průběhu fyziologického těhotenství nastávají u matky tyto změny v metabolismu kalcia
a) snižuje se koncentrace parathormonu v plazmě
b) zvyšuje se koncentrace ionizovaného kalcia v plazmě
c) snižuje se koncentrace celkového kalcia v plazmě
d) snižuje se absorpce kalcia ze střeva
98. Glomerulární filtrace se může v průběhu fyziologického těhotenství zvýšit až o
a) 10%
b) 25 %
c) 50%
d) 75 %
99. Hodnoty angiotenzinu I а П jsou v těhotenství pětkrát vyšší než u netěhotných žen, přesto nenastává významné zvýšení krevního tlaku.  Příčinou tohoto jevu je
a) I snížení koncentrace aldosteronu
b) snížení koncentrace katecholaminů
c) zvýšení aktivity leucin - aminopeptidázy
d) snížení aktivity endotelinu-1
100. Příčinou zvýšené sekrece inzulínu v těhotenství
a) lprogesteron
b) estriol
c) růstový hormon
d) lidský choriový somatomamotropin/placentámí laktogen
101. Lidský choriový gonadotropin (hCG) se tvoří
a) lve žlutém tělísku
b) v syncytiotrofoblastu
c) vhypofyzeplodu
d) v játrech plodu
  
`;

  const answers = `
  1c 2c 3a 4c 5d 6b 7c 8c 9d
10d 11c 12b 13a 14a 15d 16d 17b 18c 19d
20b 21d 22c 23d 24a 25c 26b 27a 28a 29b
30d 31b 32b 33b 34d 35d 36b 37d 38c 39c
40b 41a 42a 43d 44a 45b 46c 47c 48b 49a
50b 51a 52a 53b 54a 55c 56c 57c 58b 59b
60c 61b 62b 63d 64d 65c 66d 67a 68c 69d
70c 71c 72a 73d 74c 75c 76c 77c 78b 79c
80c 81d 82d 83c 84a 85d 86a 87d 88c 89b
90c 91a 92a 93c 94a 95c 96d 97c 98c 99c
100d 101b
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
          '3. Fyziologie a endokrinologie těhotenství a laktace. I. ČÁST PREGRADUÁLNÍ',
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
