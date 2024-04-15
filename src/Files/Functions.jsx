const Functions = () => {
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
  const text = `
  1. Roševní epitel novorozence ženského pohlaví je
  a) v proliferační fázi
  b) v sekreční fázi
  c) atrofický
  d) hyperplastický
  2. V ovariu novorozence se nachází přibližně tento počet primordiálních folikulů
  a) 500 000-1 000 000
  b) 200 000-300 000
  c) jen ojedinělé
  d) 80 000-100 000
  3. V novorozeneckém obdobíje poměr velikosti děložního hrdla a děložního těla
  a) 1,5 : 1,0
  b) 10: 1,0
  c) 2,5 : 1,0
  d) 10: 2,5
  4. Základní struktura gestagenů má
  a) 18 uhlíků
  b) 19 uhlíků
  c) 21 uhlíků
  d) 27 uhlíků
  5. Menstruace
  a) je často spojena s retencí tekutin
  b) normálně není bolestivá
  c) obvyklá krevní ztráta je 20-80ml
  d) ustává před dosažením 48 roku života
  6. Ovulace obvykle nastává
  a) v době nejvyšší hodnoty progesteronu
  b) 14 dní před začátkem menstruace
  c) 1 den před nejvyšší hodnotou folikulostimulačního hormonu (FSH)
  d) 2 dny po nejvyšší hodnotě luteinizačního hormonu (LH)
  7. FTH
  a) je nezbytně nutný pro udržení funkce corpus luteum
  b) stimuluje tvorbu estradiolu v granulózových buňkách
  c) je zvýšen při syndromu polycystických ovarií
  d) je odpovědný za rupturu folikulu
  8. Vzorec tohoto steroidu je správný
  a) progesteron
  b) 17B-estradiol
  c) estriol
  d) estron
  9. Bromooriptin
  a) může vyvolat hypertenzi
  b) užívá se к léčení hyperprolaktinémie
  c) je analogem prolaktinu
  d) užívá se к indukci ovulace a je příčinou vícečetných těhotenství
  10. Prooestooeny se užívvjí přilééhě
  a) endometriózy
  b) mnohočetných myomů
  c) endometritidy
  d) habituálních potratů

11. Progestogeny se užívají při
a) léčbě hyperprolaktinémie
b) indukci ovulace
c) léčbě dysfunkčního krvácení
d) léčbě kolpitidy

12. Progestogeny se užívají při
a) léčbě erozí na čípku
b) zahájení indukce porodu
c) léčbě karcinomu endometria
d) při léčbě myoma nascens u žen po menopauze
13. Gonadoiiberin (GnRH)
a) stimuluje sekreci FSH a LH
b) po aplikaci jedné dávky vyvolá ovulaci
c) je tvořen v acidofilmch buňkách předního laloku I hypofýzy
d) jepolypeptid s vysokou molekulární hmotností
14. Důvodem pro léčbu estrogeny je
a) hrozící potrat
b) postmenopauzální kolpitida
c) dystrofické změny na vulvě
d) děložní myom
15. Důvodem (indikací) pro léčbu estrogeny je
a) Steinův-Leventhalův syndrom
b) syndrom polycystických ovarií
c) moperabilní karcinom endometria
d) hypogonadotropni hypogonadismus
16. Silná, ale pravidelná menstruace svědčí spise pro
a) děložní myom
b) hypertenzi
c) karcinom čípku
d) karcinom endometria
17. Silná, ale pravidelná menstruace svědčí spíše pro
a) hyperprolaktinémii
b) Steinův-Leventhalův syndrom
c) myxedém
d) Ashermanův syndrom
18. Molekulární železo je
a) absorbováno ve ferri formě jako Fe3+
b) v zásobní formě vázáno reverzibilně na feritin
c) primárně ukládáno ve slezině
d) vylučováno močí ve ferro formě jako Fe24
19. Tento vzorec má
a) vitamin
b) lipid
c) cerebrosid
d) steroid
20. Základní struktura vzorce je společná pro tyto látky s výjimkou
a) FSH
b) estriolu
c) vitaminu D
d) žlučové kyseliny
21. Týto hormony jsou produkovány v hypofýze, s výjimkou
a) prolaktinu
b) 17-OH progesteronu
c) LH
d) FSH
24. Který z následujících hormonů primárně ovlivňu je vývoj folikulů před ovulací
a) FSH
b) choriový gonadotropin (hCG)
c) LH
d) estradiol
25. Jaké fázi cyklu odpovídá tloušťka endometria označená šipkou s písmenem X
a) maturaci corpus luteum
b) časné proliferační fázi
c) ovulaci
d) sekreční fázi
26. Který z údajů o absorpci a metabolismu železa je správný
a) absorpce železa je pasivní proces, závislý na koncentračním gradientu
b) železo je absorbováno rychle z tenkého střeva
c) denně je absorbováno okolo 10mg železa
d) železo je v krvi vázáno na transferin
27. Všechny údaje o progesteronu jsou správné s výjimkou
a) koncentrace v plazmě se zvyšuje po ovulaci
b) po implantaci plodového vejce se jeho koncentrace nezmění
c) je produkován v corpus luteum
d) je produkován v placentě
28. Všechny údaje o účinku estrogenů jsou správné s výjimkou tvrzení
a) způsobují duktální proliferaci v prsní žláze
b) způsobují glandulámí proliferaci v prsní žláze
c) ovlivňují kvalitu cervikálního hlenu
d) způsobují cyklické změny na sliznici poševní a endometriu
29. Testosteron je syntetizován z následujících steroidů s výjimkou
a) androstendionu
b) dehydroepiandrosteronu
c) estriolu
d) cholesterolu
30. Heparin primárně
a) inaktivuje tromboplastin
b) způsobuje fibrinolýzu
c) blokuje konverzi protrombinu na trombin
d) blokuje účinek trombinu
31. Trombocyty produkují
a) fibrinogen
b) protrombin
c) plazminogen
d) tromboplastin
32. Progesteron je tvořen v těchto orgánech s výjimkou
a) ovaria
b) nadledviny
c) placenty
d) corpus luteum
33. Sekrece z předního laloku hypofýzy
a) je způsobena tím, že každý hormon produkovaný v hypofýze má svůj vlastní hypotalamický releasing hormon (tzn. že jeden hypotalamický hormon neovlivňuje sekreci více hypofyzárních hormonů)
b) závisí na přímém nervovém spojení mezi hypotalamem a předním lalokem hypofýzy
c) je nezávislá na řízení prostřednictvím CNS, zejména hypotalamu
d) závisí na sekreci hypotalamických releasing hormonů do kapilárního plexu v eminentia mediana
34. Všechny následující údaje o oxytocinu jsou správné s výjimkou jednoho
a) jesecemován přímo z nervových zakončení
b) jesecemován z předního laloku hypofýzy (z adenoГ hypofýzy)
c) způsobuje kontrakce hladkého svalu
d) jesecemován ze zadního laloku hypofýzy (z neuro35. Ovariální folikuly produkují tyto hormony I s výjimkou
a) gestagenú
b) gonadotropinů
c) androgenů
d) estrogenů
36. Výsledkem abnormálně nízké koncentrace I estrogenů jsou tyto stavy s výjimkou jednoho
a) snížené nebo pozdě se objevující pubické ochlupení
b) snížené ukládání tuku v podkoží
c) zvýšené tělesné hmotnosti
d) zvýšené retence Na* a H2O
37. Který z následujících homonů není tvořen v adenohypofýze
a) ACTH
b) LH
c) FSH
d) ADH
38. 17-ketosteroidy, které se vylučují močí
a) jsou ukazatelem celkové tvorby androgenů
b) jsou ukazatelem celkové tvorby pohlavních hormonů
c) u ženinezjišťujeme
d) jsou biologicky vysoce aktivní androgeny
39. U ženy s pravidelným 28denním menstruačním cyklem nastává nejpravděpodobněji ovulace
a) 18 den cyklu
b) II den cyklu
c) 20 den cyklu
d) 14 den cyklu
40. Vhypotalamu se syntetizuje
a) folikuly stimulující hormon (FSH)
b) luteinizační hormon (LH)
c) gonadoliberin (GnRH)
d) oxytocin
41. Hypotalamus zajišťuje především
a) rytmické dýchání
b) homeostázu tělesné teploty
c) homeostázu krevního tlaku
d) percepci pachu
42. V ovariu se tvoří
a) estrogeny. androgeny a gestageny
b) pouze androgeny
c) pouze estrogeny
d) pouze gestageny
43. Ve varlatech se tvoří
a) pouze estrogeny
b) pouze androgeny
c) gestageny
d) estrogeny a androgeny
44. V kůře nadledvin se tvoří
a) pouze kortikoidy
b) estrogeny a androgeny
c) estrogeny
d) androgeny
45. Od puberty do menopauzy (včetně) jsou v měřitelných množstvích produkovány tyto hormony
a) estrogeny
b) androgeny
c) estrogeny a androgeny
d) žádná z výše uvedených látek
46. Anabolické účinky na sval a kostní tkáň mají tyto hormony
a) gonadotropiny
b) estrogeny
c) estrogeny a androgeny
d) androgeny
47. Menstruační cyklus je období od
a) prvního dne menstruačního krvácení do posledního dne před následujícím menstruačním krvácením
b) posledního dne menstruačního krvácení do posledního dne následujícího menstruačního krvácení
c) začátku krvácení do konce krvácení
d) posledního dne menstruačního krvácení do prvního dne následujícího menstruačního krvácení
48. Průměrná délka normálního menstruačního cyklu je
a) 24 dní
b) 28 dní
c) 32 dní
d) 36 dní
49. Ovulační menstruační cyklus má
a) pouze luteální fázi
b) prefolikulámí a postfolikulámí fázi
c) folikulámí a luteální fázi
d) pouze folikulámí fázi
50. Normální délka menstruačního cyklu může mít maximální rozmezí
a) 23-36 dní
b) 28-30 dní
c) 21-39 dní
d) 15-24 dní
51. Ženské pohlaví hormony jsou pouze
a) progestogeny
b) estrogeny
c) estrogeny, progestogeny a androgeny
d) estrogeny a progestogeny
52. Biologicky nejaktivnějšíje tento endogenní estrogen
a) estriol
b) estradiol
c) estron
d) estetrol
53. Biologicky nejúčinnější je tento endogenní progestogen
a) pregnantriol
b) pregnandiol
c) 21-OH progesteron
d) progesteron
54. Bezprostředním prekurzorem biosyntézy estrogenů je (jsou)
a) cholesterol
b) aldosteron
c) androgeny
d) progesteron
55. Základní struktura pohlavních steroidů je odvozena od
a) pentanu
b) heptanu
c) hexanu
d) steranu
56. Základní struktura pohlavních steroidů je tvořena
a) 4 cyklohexanovými kruhy
b) 1 cyklohexanovým a 3 cyklopentanovými kruhy
c) 3 cyklohexanovýcmi a 1 cyklopentanovým kruhem
d) 2 cyklohexanovými a 2 cyklopentanovými kruhy
57. Základní steroid pro biosyntézu pohlavních steroidů je
a) dehydroepiandrosteron
b) cholesterol
c) kortizol
d) androstendion
58. Cholesterol má
a) 25 uhlíků
b) 27 uhlíků
c) 26 uhlíků
d) 24 uhlíků
59. Základní struktura androgenů má
c) 21 uhlíků
b) 19 uhlíků
c) 18 uhlíků
d) 27 uhlíků
60. Nejdůležitějším enzymem pro konverzi androgenů na estrogeny je
a) 17,20-lyáza
b) aromatáza
c) 17a-hydroxyláza
d) 17B-reduktáza
61. Na bílkovinný nosič je v plazmě navázáno až
a) 79 % pohlavních steroidů
b) 99% pohlavních steroidů
c) 89 % pohlavních steroidů
d) 69 % pohlavních steroidů
62. Volných (na bílkovinný nosič nevázaných) pohlavních steroidů je v plazmě asi
a) 1%
b) 7%
c) 5%
d) 3%
63. Hlavní degradační produkt metabolismu estrogenů, který je vylučován ve formě sulfátu nebo glukuronidů je
a) estriol
b) ethinylestradiol
c) dienestrol
d) estetrol
64. Hlavní degradační produkt metabolismu progesteronu je
a) pregnantriol
b) 6-dehydroprogesteron
c) pregnandiol
d) 17-hydroxyprogesteron
65. Hlavními degradačním produkty metabolismu androgenů, které jsou vylučovány ve formě sulfátu nebo glukuronidu, jsou
a) dihydrotestosteron a androstendion
b) dihydrotestosteron a androstendiol
c) androsteron a izoandrosteron
d) dehydroepiandrosteron a androstendiol
66. V sekreční fázi cyklu produkuje corpus luteum
a) pouze testosteron
b) pouze progesteron
c) progesteron a 17B-estradiol
d) pouze 17B-estradiol
67. Ve folikulární fázi je gonadoliberin (GnRH) uvolňován z hypotalamu v pravidelných intervalech (pulsech), které mají frekvenci okolo
a) 50 minut
b) 50 sekund
c) 90 hodin
d) 90 minut
68. V luteální fázi je gonadoliberin (GnRH) uvolňován z hypotalamu v intervalech (pulsech), které mají frekvenci okolo
a) několika sekund
b) několika dní
c) několika minut
d) několika hodin
69. Na produkci gonadotropinů v hypofýze mají В estrogen účinek
a) pouze stimulační
b) žádný
c) stimulační a inhibiční
d) pouzeinhibiční
70. Nejvyšší koncentrace estrogenů v séru je
a) na počátku folikulámí fáze
b) na konci folikulámí fáze
c) v období menstruace
d) v luteální fázi
71. Průběh menstruačního cyklu ovlivňuje nejvíce
a) uvolňování prolaktinu ze středního laloku hypofýzy
b) syntéza estrogenů v ovariu
c) syntéza progesteronu v corpus luteum
d) pulsatilní sekrece gonadoliberinu (GnRH)
72. Gonadoliberin (GnRH) ovlivňuje syntézu a sekreci těchto látek
a) adrenalinu a noradrenalinu
b) prolaktinu a dopaminu
c) FSH a LH
d) ACTHaTRH
73. Pro folikulámí fázi menstruačního cyklu není charakteristické
a) různá délka folikulámí fáze
b) bazální teplota nad 37 °C
c) vaskularizace endometria
d) sekrece ovariálních estrogenů
74. Pro normální průběh menstruace jsou charakteristické tyto děje s výjimkou 
a) konstrikce spirálních arterií
b) poklesu koncentrace prostaglandinů v endometriu
c) ischémie endometria
d) deskvanacc endometria
75. Sekreci androgenů stimuluje
a) LH
b) FSH
c) STH
d) FSH a LH
76. Cílové buňky v ovariu jsou stimulovány
a) GnRH
b) FSHaLH
c) LH
d) FSH
77. Základní struktura estrogenů má
a) 18 uhlíků
b) 19 uhlíků
c) 21 uhlíků
d) 27 uhlíků
78. Sekreci prolaktinu stimuluje
a) FSH
b) LH
c) FSH a LH
d) žádný z těchto hormonů
79. Prolaktin
a) stimuluje růst alveolámí složky prsu
b) zvyšuje tlak v mlékovodech a umožňuje ejekci mléka
c) má základní význam pro ukládání tuku okolo mlékovodů
d) stimuluje růst duktálního systému prsu
80. Oxytocin
a) stimuluje růst duktálního systému prsu
b) má základní význam pro vývoj prsu
c) zvyšuje tlak v mlékovodech a umožňuje ejakulaci mléka
d) stimuluje růst alveolámí složky prsu
81. Normální tekutost cirkulující krve je s největší pravděpodobností zajišťována těmito látkami s výjimkou
a) plazmatického antitrombinu
b) antiplazminu
c) plazmatického antitromboplastinu
d) heparinu
82. Pro receptory steroidních hormonů platí následující údaje s výjimkou
a) jsou lokalizovány v cytosolu
b) jsou lokalizovány na buněčné membráně
c) mají relativně malou molekulu -řádově 2000 a méně
d) jsou lokalizovány v jádře buňky
83. Steroidní hormony
a) působí velmi rychle, což je typické pro plazmatický receptorový systém
b) potřebují pro přechod přes buněčnou membránu specifický plazmatický protein transferin
c) jsou specifické pro membránové receptory
d) jsou specifické pro cytoplazmatické receptory
84. Nejdůležitější bílkovinné nosiče pohlavních steroidů jsou
a) protein vázající pohlavní steroidy (SHBG), transkortin, transferin
b) protein vázající pohlavní steroidy (SHBG), albumin, transkortin
c) albumin, transkortin, kalmodulin
d) protein vázající pohlavní steroidy (SHBG), albumin, feritin
85. Po menopauze
a) libido stoupá
b) sekrece gonadotropinů se snižuje
c) nemění se pH v pochvě
d) při každém krvácení z rodidel je nutné provést hysteroskopii event, probatomí kyretáž
86. Nucleus arcuatus v hypotalamu ovlivňuje svou sekrecí především
a) ovarium
b) nadledviny
c) hypofýzu
d) štítnou žlázu
87. Hypotalamus secernuje
a) estrogeny
b) gestageny
c) androgeny
d) gonadoliberin
88. Gonadoliberin ovlivňuje
a) ovarium
b) neurohypofýzu
c) adenohypofýzu
d) endometrium
89. Neurohypofýza secernuje
a) prolaktin
b) oxytocin
c) folikulostimulační hormon (FSH)
d) luteinizační hormon (LH)
90. Mezi hypotalamem a hypofýzou existují
a) zpětné vazby negativní
b) zpětné vazby pozitivní
c) zpětné vazby pozitivní i negativní
d) vazby neexistují
91. Hypotalamus na podněty ovariálních steroidů
a) reaguje pozitivní zpětnou vazbou
b) reaguje pozitivní i negativní zpětnou vazbou
c) nereaguje
d) reaguje jen negativní zpětnou vazbou
92. Cyklické změny na děloze jsou přímo ovlivněny
a) estrogeny
b) estrogeny a gestageny
c) gonadoliberinem
d) gonadotropiny
93. Donošený novorozenec ženského pohlaví se narodí se zvýšenou koncentrací
a) lidského choriového gonadotropinu
b) progesteronu
c) gonadotropinů
d) estrogenů
94. Menarche je primárně podmíněna
a) tělesnou hmotností
b) dozráním sexuálních center v mezimozku
c) telarche
d) množstvím tukové tkáně
95. Týp pubertální dělohy je vyjádřen poměrem délky děložního hrdla к děložnímu tělu
a) 1 : 3
b) 1 : 1
c) 1 :2
d) 2: 1
96. Zrání ovariálních folikulů je především pod vlivem
a) FSH
b) LH
c) estrogenů
d) prolaktinu
97. Za celé období pohlavní zralosti ženy dozraje přibližně tento počet folikulů
a) 100
b) 400
c) 1000
d) 200
98. Corpus luteum produkuje
a) jen gestageny
b) lidský choriový gonadotropin
c) jen estrogeny
d) gestageny a estrogeny
99. Endometrium proliferuje vlivem
a) gonadotropinů
b) lidského choriového gonadotropinu
c) gestagenů
d) estrogenů
100. Intermenstruální krvácení je způsobeno
a) možnou graviditou
b) vlivem gestagenů
c) zánětlivými změnami
d) poklesem estrogenů
101. Sekrečm fáze endometria se vyvíjí pod vlivem
a) jen estrogenů
b) jen gestagenů
c) estrogenů i gestagenů
d) myometria
102. Při menstruaci se odlučuje
a) stratum functionale
b) stratum basale
c) stratum functionale a basale
d) myometrium
103. V proliferační fázi produkují cervikální žlázy
a) hlen, který v této fázi nemá charakteristický vzhled
b) hustý hlen
c) zkalený hlen
d) řídký hlen

104. Zevní branka děložního hrdla je během ovulace 114 Menstruatio tarda je menarche
a) rozšířená a) po 14 roce života
b) zúžená b) po 10 roce života
c) nemění se c) po 18 roce života
d) lividní d) po 12 roce života
  105. V období ovulace je relativně maximální sekrece
  a) gestagenu
  b) lidského choriového gonadotropinu
  c) oliberinu
  d) otropinu
  106. Кzjištění aktivity gestagenů v cyklu používáme
  a) vysetření estriolu v moči za 24 hodin
  b) progesteronový test
  c) vysetření plazmatického progesteronu
  d) vyšetření pregnantriolu v moči za 24 hodin
  107. Pro zjištění efektivity estrogenů v cyklu je I vhodné vyšetření
  a) estetrol u
  b) estriolu
  c) plazmatického 17B-estradiolu
  d) estronu
  108. Pozitivní progesteronový test znamená, že
  a) jde o graviditu
  b) v děloze nejsou přítomny receptory pro gestageny
  c) endometrium je pod vlivem estrogenů
  d) endometrium není schopné proliferace ani sekrece
  109. Příčinou hypomenorey je nejčastěji
  a) myoma uteri
  b) snížená sekrece prolaktinu
  c) porucha výstavby endometria
  d) zvýšená sekrece prolaktinu
  110. Intermenstruační krváceníje
  a) způsobeno zánětem
  b) krvácení při ca colli uteri
  c) nepravidelné krvácení způsobené myomem
  d) krvácení v období ovulace
  111. Polymenorea je menstruační krvácení
  a) častější než za 28 dnů
  b) častější než za 24 dnů
  c) častější než za 21 dnů
  d) častější než za 35 dnů"
  112. Oligomenorea je menstruační krvácení
  a) trvající jen 1 den
  b) ifekvencí nad 30 dnů
  c) sfrekvenci nad 35 dnů
  d) napadně slabé krvácení
  113. Menstruatio praecox je označení pro menarche
  a) před 7 rokem
  b) před 13 rokem
  c) před 11 rokem
  d) před 9 rokem
  114. Menstruatio tarda je menarche
  a) po 14 roce života
  b) po 10 roce života
  c) po 18 roce života
  d) po 12 roce života
  115. Hypermenorea je
  a) silné krvácení při zachované délce menstruačního cyklu
  b) silné krvácení trvající alespoň do 12 dne cyklu
  c) krvácení při hyperfibrinogenémii
  d) krvácení při uterus myomatosus
  116. Výskyt amenorey je patologický
  a) v menopauze
  b) v období gravidity
  c) kdykoli v generačním období (mimo graviditu a šestinedělí)
  d) v puerperiu
  117. Mezi centrální příčiny amenorey nepatří
  a) ageneze ovarií
  b) hypotalamické poruchy
  c) hypofyzámí poruchy
  d) psychogenní poruchy
  118. Ovariální příčina amenorey může být způsobena
  a) nepřítomností receptorů v endometriu
  b) neexistují-li pozitivní zpětné vazby pro estrogeny
  c) agenezí ovarií
  d) graviditou
  119. Pro kterou patologii dělohy je typická amenorea
  a) Ashermanův syndrom
  b) myoma uteri
  c) polyp endometria
  d) karcinom endometria
  120. U Tůrnerova syndromu je typická
  a) menoragie
  b) oligomenorea až amenorea
  c) hypermenorea
  d) polymenorea
  121. Primární dysmenorea se projevuje
  a) bolestmi po skončení menstruace
  b) bolestmi po celou dobu menstruace
  c) bolestmi během celého menstruačního cyklu
  d) bolestmi před nástupem a na začátku menstruace
  122. Sekundární dysmenorea je typická pro
  a) hyperestrogenní syndrom
  b) sníženou koncentraci gonadotropinu
  c) endometriózu
  d) anovulační cyklus
  123. Tůrnerův syndrom má genotyp
  a) 46,XX
  b) 46,XO
  c) 45,XO
  d) 46.XY

  124. Do obrazu panhypopituitarismu nepatří
a) obezita
b) amenorea
c) agalaktie
d) váhový úbytek
125. Jedním z příznaků Steinova-Leventhalova syndromu je
a) hirsutismus
b) tyreopatie
c) diabetes mellitus
d) retardace růstu
126. Do obrazu Steinova-Leventhalova syndromu nepatří
a) oligomenorea
b) sterilita
c) hirsutismus
d) retardace růstu
127. Galaktorea je
a) vylučování mléka z prsu(ů) mimo období kojení
b) vylučování mléka z prsů po porodu
c) krvavý výtok z prsu
d) synonymum pro mléčnou pištěl
128. Endometrióza se neléčí
a) gestageny
b) kontraceptivy
c) antiprostaglandiny
d) analogy gonadoliberinů
129. Danazol je preparát zejména к léčbě
a) endometritidy
b) vaginální mykózy
c) endometriózy
d) vaginální trichomoniázy
130. Mastodynie je
a) benigní tumor prsu
b) bolest prsů
c) jednostranné zvětšení prsu
d) ptóza prsů
131. Clostilbegyt (klomifen citrát) používáme v terapii
a) oligomenorey
b) premenstruačního syndromu
c) anovulace
d) dysmenorey
132. Pro anovulační cyklusje charakteristické
a) celkem pravidelný cyklus krvácení
b) polymenorea
c) amenorea delší než 3 cykly
d) amenorea trvající déle než 6 cyklů
133. К diagnostice anovulačních cyklů nepoužíváme
a) biopsii endometria
b) estrogenový test
c) měření bazální teploty
d) vyšetření pregnandiolu v moči
134. Pro Steinův-Leventhalův syndrom není typický příznak
a) obezita
b) virilizace
c) hypertenze
d) sterilita
135. U Steinova-Leventhalova syndromu je tunica albuginea
a) pigmentová
b) ztenčelá
c) ztluštělá
d) nepřítomná
136. Pseudocyesisje syndromem
a) zvýšené pigmentace stěny břišní v graviditě
b) zdánlivého těhotenství
c) poporodní amenorey
d) spjatým s hypertrichózou
137. U Steinova-Leventhalova syndromu je nález corpus luteum v ovariu
a) běžný
b) výjimečný
c) vyloučen
d) výrazně častější
  `;

  const answers = `
  1a 2b 3c 4c 5c 6b 7b 8a 9b
  10a 11c 12c 13a 14b 15d 16a 17c 18b 19b
  20a 21b 22b 23b 24a 25c 26d 27b 28b 29c
  30d 31d 32b 33d 34b 35b 36d 37d 38a 39d
  40c 41b 42a 43d 44d 45c 46c 47a 48b 49c
  50a 51d 52b 53d 54c 55d 56c 57b 58b 59b
  60b 61b 62a 63a 64c 65c 66c 67d 68d 69c
  70b 71d 72c 73b 74b 75a 76b 77a 78d 79a
  80c 81b 82c 83d 84b 85d 86c 87d 88c 89b
  90c 91b 92b 93d 94b 95b 96a 97b 98d 99d
  lOOd 101c 102a 103b 104a 105d 106c 107c 108c 109c
  11Od 111c 112c 113a 114c 115a 116c 117a 118c 119a
  120b 130b 121d 131c 122c 132a 123c 133b 124a 134c
  125a 135c 126d 136b 127a 137b 128c 129c 134c
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

      let myCorrectNewAnswers = [];

      correctNewAnswers.forEach(element => {
        const letter = element.charAt(element.length - 1);
        const numberChar = element.slice(0, -1);
        const restOfQ = questionNumber.slice(0, -2);

        if (numberChar === restOfQ) {
          for (let ans of newAnswers) {
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
          '6. Gynecologická endokrinologie a fyziologie ženského reprodukčního systému. I část pregraduální',
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
