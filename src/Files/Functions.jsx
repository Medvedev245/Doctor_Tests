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
  1. Hyperplazie endometria (simplexní nebo komplexní) s atypiemi je obvykle
  a) stacionární prekancerózou
  b) totožná s ca endometrii in situ
  c) progradientní prekancerózou
  d) regredující prekancerózou
  2. Sekundární prevence v gynekologické onkologii znamená
  a) likvidaci pokročilých stadií nádoru
  b) likvidaci přednádorových stavů
  c) dočasnou zábranu početí u onkologicky nemocných
  d) eliminaci etiologických činitelů nádoru
  3. Rizikovým faktorem karcinomu děložního hrdla je
  a) pozdní menopauza
  b) obezita
  c) diabetes mellitus
  d) časná koitarche
  4. Z uvedených stavů není rizikovým faktorem karcinomu děložního hrdla
  a) nízký věk při prvním porodu
  b) pohlavní promiskuita
  c) kouření
  d) anovulace
  5. Mezi rizikové faktory karcinomu endometria nepatří
  a) předčasná menopauza
  b) obezita
  c) hypertenze
  d) diabetes mellitus
  6. Lichen sclerosus et atrophicus vulvae
  a) je skvamózní hyperplazie vulvy
  b) je totožný se starším termínem krauróza vulvy
  c) je prekancerózou
  d) je totožný s VIN 1
  7. Jako VIN III lze klasifikovat
  a) lehkou dysplazii vulvy
  b) lehkou dysplazii pochvy
  c) carcinoma in situ vaginae
  d) carcinoma in situ vulvae
  8. Carcinoma in situ vulvae se z uvedených obrazů nejčastěji skrývá pod klinickým obrazem
  a) lichen sclerosus
  b) leukoplakie
  c) verruca vulgaris
  d) lentigo maligna
  9. Preinvazivni adenokarcinom s velkými světlými buňkami na vulvě nebo prsní bradavce odpovídá diagnóze
  a) erythroplasia Queyrati
  b) Pagetův karcinom
  c) Bowenova dermatóza
  d) melanosis circumscripta Dubreyi
  10. Z uvedených afekcí je prekancerózou vulvy
  a) fibrom
  b) lipom
  c) VIN III
  d) lichen sclerosus
  11. Adenosis vaginae
  a) je předstupněm skvamocelulámího karcinomu
  b) je maligní nádor pochvy dětského věku
  c) odpovídá diagnóze VIN III
  d) může přejít do jasnobuněčného adenokarcinomu
  12. Atypická hyperplazie endometria má vztah
  a) к hyperandrogenismu
  b) к hyperestrinismu
  c) к hyperkortikalismu
  d) к hyperprolaktinémii
  13. Hlavní diagnostickou metodou ke zjištění prekancerózy pochvy je
  a) colpocleisis
  b) colpectomia
  c) excisio probatoria
  d) colpoplastica
  14. Riziko maligního zvratu hydatidózní moly je
  a) 20-30%
  b) 2-4%
  c) 0,2-0,5%
  d) 40-50%
15. Adekvátním řešením atypické hyperplazie endometria u 501eté nemocné je
a) aplikace estrogenů a kontrolní kyretáž
b) intrauterinní aplikace cytostatika
c) probatomí kyretáž
d) hysterektomie
16. Poševní adenóza děvčat může souviset s expozicí
a) ethinylestradiolu
b) dietylstilbestrolu
c) norethisteronu
d) hydroxyprogesteronacetátu
17. Jako borderline (hraniční) epitelový nádor ovaria je označován
a) Brennerův tumor
b) nádor žloutkového váčku
c) dysgerminom
d) proliferující kystadenom
18. Transformační zóna cervixu odpovídá metaplazii epitelu
a) cylindrického do žlázového
b) dlaždicového do přechodního
c) kubického do přechodního
d) cylindrického do dlaždicového
19. Jodpozitivní v Schillerově zkoušce je
a) cylindrický epitel
b) carcinoma in situ
c) vyzrálý dlaždicový epitel
d) těžce dysplastický epitel
20. Koilocytární atypie znamená dlaždicové buňky
a) s akantózou
b) s řasinkami
c) s chyběním glykogenu
d) s perinukleámí vakuolizací
21. Terapie carcinoma in situ děložního čípku může I být provedena
a) skarifikací
b) chemoterapií
c) iradiací
d) konizací
22. К terapii CIN II je nejvhodnější
a) abdominální hysterektomie
b) konizace
c) vaginální hysterektomie
d) poševní krém s antibiotikem
23. Střední dysplazie odpovídá v CIN klasifikaci
a) carcinoma in situ
b) CIN П
c) CIN I
d) CIN III
24. CIN III je totéž jako
a) těžká dysplazie a carcinoma in situ
b) střední a těžká dysplazie
c) metaplazie 3. stupně
d) invazivní karcinom 3. stupně
25. Mezi cytologická kritéria malignity nepatří
a) polynukleóza
b) anizonukleóza
c) hypochromazie jader
d) makronukleóza
26. Prebioptickou předpověď cervikální léze lze upřesnit
a) kyretáží děložního těla
b) Collinsovým testem
c) punch biopsii a mikroabrazí hrdla
d) vaginální sonografií
27. К ošetření projevů papilomavirové infekce cervixu je zcela neúčinná aplikace
a) brilantové zeleně
b) kryoterapie
c) interferonu
d) podofylotoxinu
28. Pro screening karcinomu mamy je vedle palpač ního nálezu nejvhodnější
a) ultrasonografie
b) fine-needle biopsie
c) termografie
d) mamografie
29. Při kolposkopii se užívá zvětšení
a) 6—40násobné
b) 80-200násobné
c) 40-80násobné
d) 2-6násobné
30. Rozšířená kolposkopie předpokládá potření ektocervixu
a) 3-6% roztokem glykogenu
b) 3% roztokem podofylinu
c) 3-5% roztokem kyseliny octové
d) 3—4% roztokem kyseliny trichloroctové
31. Lugolův roztok se používá při
a) Collinsově zkoušce
b) Papanicolaouově zkoušce
c) Schillerově zkoušce
d) Chrobakově zkoušce
32. Abnormálním kolposkopickým nálezem je
a) ektopie
b) typická transformační zóna
c) puntíčkování
d) originální epitel
33. Pokud je к ošetření cervikální léze použit laser, pak je to nejčastěji
a) Nd:YAG laser
b) helium-neon laser
c) argon laser
d) CO2 laser
34. Nejčastějším benigním nádorem dělohy je
a) myom
b) cysta
c) lipom
d) polyp
35. Nejčastějším benigním nádorem děložního hrdla je
a) polyp
b) myom
c) cysta
d) lipom
36. Jaká je nejčastější léčba děložních myomů
a) aktinoterapie
b) chemoterapie
c) hormonální léčba
d) operační léčba
37. Ovula Nabothi jsou
a) paraovariální cysty
b) cysty na ovariích vznikající zráním folikulu
c) retenční cystičky na exocervixu
d) cervikální myomy
38. Samovolné vypuzení myomu do pochvy (myoma nascens) může nastat v případě
a) myoma intramurale
b) myoma fundi
c) myoma submucosum
d) myoma subserosum
39. Z hormonálně aktivních nádorů ovaria má jeden z níže uvedených virilizující účinky
a) nádor z buněk granulózy
b) nádor z buněk theky
c) hypemefrom
d) arhenoblastom
40. Růst myomů souvisí
a) s anovulací
b) s hyperestrinismem
c) s hypopituitarismem
d) s hypoestrinismem
41. Histologicky je myom složen převážně z buněk
a) příčně pruhovaných svalových
b) epitelových
c) hladkých svalových
d) vazivových
42. Serózní obsah benigního cystického tumoru ovaria je
a) hustý, hlenovitý
b) tvarohovitý
c) řídký, vodnatý
d) kazeózní
43. Fibroepitelové papilomy vulvy eventuálně exocervixu (condylomata accuminata) jsou původu
a) bakteriálního
b) jsou vrozené
c) virového
d) iatrogenního
44. Dermoidální cysty jsou tvořeny strukturami pocházejícími
a) z entodermu
b) z ektodermu
c) z mezodermu
d) ze všech tří zárodečných listů
45. Brennerův nádor je
a) estrogenně aktivní
b) virilizující
c) hormonálně inaktivní
d) smíšeně hormonálně aktivní
46. Nejčastější benigní tumor ovaria je
a) mucinózní kystom
b) serózní kystom
c) Brennerův tumor
d) Krukenbergův nádor
47. Co označujeme za nepravý nádor ovaria
a) cystu
b) Krukenbergův nádor
c) sarkom
d) Brennerův nádor
48. Nejčastějším pseudotumorem vulvy je
a) caruncula urethralis
b) cystis glandulae Bartholini
c) inkluzní cysta
d) condylomata accuminata
49. Endometriální polyp diagnostikujeme nejspolehlivěji
a) klinickým vyšetřením
b) kyretáží
c) hysteroskopií
d) hysterosalpingografií
50. Submukózní myom vede
a) к amenoree
b) к oligomenoree
c) к hypermenoree
d) к polymenoree
51. Nejčastějším příznakem endometriálního polypu je
a) růst dělohy
b) abnormální krvácení
c) amenorea
d) bolesti v podbřišku
52. V těhotenství nastává
a) regrese myomů
b) růst myomů
c) velikost myomů se nemění
d) vymizení myomů
53. Torze myomů vzniká nejčastěji u
a) intramurálního myomů
b) aabserózního myomů
c) 'cervikálního myomů
d) ísibmukózního myomů
54. Abnormální děložní krvácení nejméně často vyvolá
a) myoma nascens
b) myoma submucosum
c) myoma subserosum
d) myoma intramurale
55. Terapií symptomatického hemangiomu pochvy je
a) chemoterapie
b). radioterapie
c) operace
d) pouze dispenzarizace
56. Terapie condylomata accuminata na vulvě je
a) antibakteriální
b) pádioterapie
c) operační
d) Bostatiky
57. Myomy se vyskytují převážně v období
a) dětského věku
b) fertilního věku
c) těhotenství
d) feostmenopauzy
58. Myom se vyskytuje u
a) 50% žen
b) 90% žen
c) 5% žen
d) 20% žen
59. Sekundární prevence v gynekologické onkologii znamená
a) likvidaci pokročilých stadií nádoru
b) likvidaci přednádorového stavu
c) dočasnou zábranu početí u onkologicky nemocných
d) eliminaci etiologických činitelů nádoru
60. Rozhodující pro stanovení diagnózy zhoubného bujeníje
a) klinický palpační nález
b) cytologický nález
c) histologie tkáně z tumoru
d) endoskopické vyšetření
61. Biologická povaha zhoubného nádoru je určena
a) histologicky zjištěnou dediferenciací tkáně
b) lokalizací primárního ložiska
c) rozsahem nádorového procesu
d) věkem nemocné
62. К posouzení prognózy zhoubného nádoru je rozhodující
a) staging a často grading nádoru
b) věk nemocné
c) nekrotické změny v nádoru
d) grading nádoru
63. Sekundární nádor je
a) další ložisko zhoubného bujení téže lokalizace
b) vzdálená metastáza primárního nádoru do jiného orgánu
c) zhoubné bujení po odstranění primárního ložiska
d) přerůstání primárního ložiska do okolí
64. Onkogeny jsou
a) tumor supresorové geny
b) mutované formy protoonkogenů
c) mutátorové geny
d) růstové faktory
65. Tůmor supresorové geny
a) kontrolují pouze buněčnou proliferaci
b) korigují chyby v procesu replikace DNA a stabilizují DNA
c) blokují abnormální růst
d) produkují růstové faktory
66. Při použití brachyterapie
a) aplikujeme systémově radionuklidy
b) je zdroj záření umístěn mimo pacientku
c) je zdroj záření umístěn přímo v oblasti nádoru
d) již se nepoužívá
67. Částečná léčebná odpověď při terapii nádoru znamená
a) ústup nádorových změn o méně než 50%
b) vymizení všech měřitelných známek onemocnění
c) zvětšení nádoru nebo existujících měřitelných patologických změn o více než 25 %
d) 50% a větší ústup měřitelných známek onemocnění
68. Žádná změna v léčebné odpovědi nádoru znamená
a) ústup nádorových změn o méně než 50 %
b) vymizení všech měřitelných známek onemocnění
c) zvětšení nádoru nebo existujících měřitelných patologických změn o více než 25 %
d) 50% a větší ústup měřitelných známek onemocnění
69. Nádor s nejvyšší incidencíje
a) karcinom endometria
b) karcinom ovaria
c) karcinom prsu
d) karcinom vulvy
70. Incidence nádoru je
a) počet nově zjištěných nádorových onemocnění v daném čase
b) celkový počet nádorových onemocnění v určitém časovém období
c) počet úmrtí na nádorová onemocnění v určitém časovém období
d) léčebná odpověď
71. Gynekologické epiteliální zhoubné nádory metastazují převážně
a) krevní cestou
b) lymfatickými cévami
c) nemetastazují
d) lymfogenně i hematogenně stejným poměrem
72. Karcinom děložního hrdla se vyskytuje nejčastěji ve věkové skupině žen
a) od 45 do 55 roků
b) od 20 do 30 roků
c) po menopauze
d) od 30 do 40 roků
73. Karcinom děložního hrdla se častěji vyskytuje
a) při totálním prolapsu dělohy
b) u multipar
c) u mladých multipar
d) u židovských žen
74. Vznik karcinomu děložního hrdla je nejčastější
a) ve skvamo-kolumnární junkci
b) na exocervixu mimo skvamo-kolumnární junkci
c) v cervikálních žlázkách
d) v oblasti vnitřní branky
75. Karcinom endocervixu je histologicky nejčastěji
a) bazocelulámí karcinom
b) adenokarcinom
c) spinocelulámí karcinom
d) melanokarcinom
76. Adenokarcinom se vyskytuje z celkového počtu maligních novotvarů hrdla
a) v 10-20%
b) v 40-50%
c) v 0,5-1%
d) v 1-5%
77. Intraepiteliální karcinom děložního hrdla- 0. stupně -je charakterizován
a) bujením povrchového epitelu do stromatu
b) nepřítomností invaze přes bazální membránu
c) obrovskými buňkami
d) přítomností lymfangioinvaze
78. Základní metodou depistáže asymptomatickěho karcinomu děložního hrdla je
a) biopsie
b) vyšetření v zrcadlech
c) Schillerův test
d) cytologické vyšetření
79. К léčbě exofytického karcinomu děložního hrdla pTlbl stupně zvolíme
a) primární aktinoterapii
b) cytostatickou léčbu
c) radikální hysterektomii
d) snesení tumorózní tkáně (event, laserem) a kyretáž
80. Souvislost s pokročilým karcinomem děložního hrdla obvykle nemívá
a) vykrvácení
b) hypertenzní krize
c) karcinomatózní kachexie
d) urémie
81. Nejčastějším zhoubným nádorem u žen je
a) karcinom vaječníku
b) karcinom děložního hrdla
c) karcinom prsu
d) karcinom endometria
82. Nejčastějším zhoubným nádorem rodidel v ČR je
a) karcinom vaječníku
b) karcinom endometria
c) karcinom děložního hrdla
d) karcinom vulvy
83. FIGO klasifikace zařazuje podle rozsahu zhoubný nádor do stupňů
a) různě, podle lokalizace nádorů
b) tří
c) čtyř
d) pěti
84. Mezi cytostatika, která mají vysoký emetogenní potenciál, patří
a) paklitaxel
b) metotrexát
c) cisplatina
d) 5-fluorouracil
85. Sarkomy metastazují převážně
a) krevní i lymfatickou cestou
b) lymfatickými cévami
c) nemetastazují
d) perineurálním šířením
86. Pozitivitu high-risk skupiny lidských papilomavirů nacházíme u dlaždicového karcinomu děložního hrdla
a) v 14-18%
b) v 34-38%
c) v 55-60%
d) v 93-100%
87. Karcinom děložního hrdla stadia Tlal má při plošném rozsahu max. 7x 7 mm hloubku invaze
a) do 1 mm
b) do 2 mm
c) do3mm
d) do 5 mm
88. Tzv bulky tumor děložního hrdla
a) prorůstá do poševních kleneb
b) odpovídá stadiu Tlb2
c) má maximální průměr do 4 cm
d) jeklinicky latentní
89. К určení rozsahu primárního nádoru (karcinomu I děložního hrdla je nejvhodnější metodou
a) magnetická rezonance
b) počítačová tomografie
c) ultrazvukové vyšetření
d) pozitronová emisní tomografie
90. Průkaz hydronefrózv v souvislosti s karcinomem děložního hrdla znamená stadium
a) Tlb2
b) T2b
c) T3b
d) T4
91. Karcinom děložního hrdla horizontálního rozsahu 5x5 mm a hloubky invaze 5 mm odpovídá stadiu
a) Tlal
b) Tla2
c) Tlbl
d) Tlb2
92. Postižení dolní třetiny pochvy karcinomem děložního hrdla odpovídá stadiu
a) T2b
b) T3a
c) T3b
d) T4
93. Nález bulózního edému v cystoskopickém obraze karcinomu děložního hrdla
a) postačuje ke klasifikaci nádoru T4
b) nepostačuje ke klasifikaci nádoru T4
c) postačuje ke klasifikaci nádoru T3b
d) postačuje ke klasifikaci nádoru T3a
94. Incidence karcinomu děložního hrdla v České republice se pohybuje kolem
a) 5/100 000 žen/rok
b) 10/100 000 žen/rok
c) 20/100 000 žen/rok
d) 30/100 000 žen/rok
95. Adenoskvamózní karcinom děložního hrdla má
a) benigní žlázovou a maligní dlaždicovou složku
b) maligní žlázovou a benigní dlaždicovou složku
c) obě složky maligní
d) žádné tvrzení není správné
96. Incidenci karcinomu děložního hrdla nejefektiV' něji sníží
a) léčba herpetických infekcí genitálu
b) oportunní screening
c) léčba chlamydiových infekcí genitálu
d) organizovaný screening
97. Vyšetřením per rectum u karcinomu děložního hrdla lze nejlépe posoudit
a) infiltraci sakrouterinních vazů
b) prorůstám do močového měchýře
c) metastatické postižení pánevních uzlin
d) ani jedno z výše uvedených
98. Mezi rizikové faktory karcinomu endometria patří
a) předčasná menopauza
b) obezita
c) kouření
d) asthma bronchiale
99. Nejčastějším příznakem karcinomu endometria jsou
a) bolesti v podbřišku
b) zvětšování dělohy
c) krvácení v postmenopauze
d) inkontinence
100. Atypická hyperplazie endometria má vztah
a) к hyperandrogenismu
b) к hyperestrinismu
c) к hyperkortikalismu
d) к hyperprolaktinémii
101. Karcinom endometria obvykle vychází
a) z hladké svaloviny stěny cév
b) ze stromatu děložní sliznice
c) ze spirálních cév endometria
d) ze žlázek endometria
102. Karcinom endometria se vyskytuje s největší frekvencí ve věkové skupině
a) mezi 30-40 rokem
b) stejný výskyt je ve všech věkových skupinách
c) mezi 50-70 rokem
d) mezi 40-50 rokem
103. Nejspolehlivější diagnostickou metodou při podezření na karcinom endometria je
a) hysterosalpingografie
b) ultrazvukové a bimanuální vyšetření
c) hysteroskopie s biopsií endometria a histologickým vyšetřením získaného vzorku
d) laparoskopie
104. Karcinom endometria je podle histopatologického nálezu obvykle
a) nádor ze světlých buněk
b) solidní medulámí karcinom
c) spinocelulámí karcinom
d) adenokarcinom různého stupně zralosti
105. Nejčastějším zhoubným nádorem děložního těla je
a) karcinom endometria
b) sarkom
c) myom
d) choriokarcinom
106. Při hormonální léčbě karcinomu endometria se podávají
a) androgeny
b) gestageny
c) nadledvinové steroidy
d) všechny uvedené
107. Na maligní zvrat myomu pomýšlíme při
a) náhlém vzniku krvácení z dělohy
b) náhle vzniklé inkontinenci moči nebo naopak anurii
c) náhlém prudkém růstu myomu
d) náhle vzniklých bolestech v oblasti dělohy
108. Karcinosarkomy a ostatní děložní sarkomy představují
a) asi 20 % všech maligních nádorů děložního těla
b) méně než 4 % všech maligních nádorů děložního těla
c) nádory, které se ve všech případech vyvíjejí z myomů
d) typické nádory pro ženy s hypertenzí, diabetem, obezitou v anamnéze
109. CT vyšetření umožňuje určit
a) grading nádorového onemocnění
b) rozlišit histologický typ nádoru
c) postižení retroperitoneálních lymfatických uzlin a parenchymatózních orgánů
d) angioinvazi
110. Atypická hyperplazie endometria
a) může přecházet v karcinom
b) je protektivním faktorem při vzniku a rozvoji karcinomu
c) vede к vývoji endometriálních sarkomů
d) je častá u mladých pacientek
111. Nejmalignějším nádorem dělohy z uvedených je
a) low-grade endometriální stromální sarkom
b) leiomyosarkom
c) celulámí leiomyom
d) adenoakantom
112. Lázeňská léčba je u onkologických pacientek
a) zásadně kontraindikována
b) možná po ukončení komplexní protinádorové léčby I v případech nepřítomnosti jakýchkoli známek recidivy
c) vhodná v bezprostřední návaznosti na ukončenou chemoterapii či aktinoterapii
d) doporučována pouze 5 a více let po ukončení léčby I
113. Podpůrná léčba u zhoubných nádorů je zaměřena
a) na zmenšení nádoru a zpomalení jeho růstu
b) na zlepšení celkového stavu pacientky a odstranění či I předcházení komplikací souvisejících se zhoubným nádorem
c) má za cíl úplné vyléčení i za cenu dočasného či trvalého poškození tkání či orgánů pacientky
d) je zaměřena jen na klinické příznaky
114. Kromě histologického vyšetření lze výjimečně diagnózu zhoubného nádoru potvrdit
a) pomocí videolaparoskopie
b) pomocí hysteroskopie
c) ultrazvukovým vyšetřením
d) cytologicky
115. Karcinom vulvy se vyskytuje nejčastěji ve věkové skupině žen
a) mezi 40-50 rokem
b) do 40 let
c) nezávisle na věku
d) po 50 roku
116. Karcinom vulvy je nejčastěji
a) adenokarcinom
b) spinocelulámí karcinom
c) bazocelulámí karcinom
d) melanom
117. Karcinom vulvy má obvykle primární tvar
a) uzlovitý nebo vředovitý
b) vředovitý
c) papilámí
d) uzlovitý
118. Příznakem počínajícího zhoubného nádoru vulvy může být
a) bolest
b) krvácení
c) výtok
d) úporné svědění
119. Při karcinomu vulvy jsou nejdříve postiženy regionální lymfatické uzliny
a) v tříselné krajině
b) paraaortální
c) podél arteria a vena femoralis
d) podél velkých pánevních cév
12O. Primární karcinom pochvy se vyskytuje nejčastěji
a) klimakteriu
b) výskyt není závislý na věku
c) v postmenopuze
d) ve věku adolescence
121. Ložisko nádorové tkáně v poševní stěně je I nejčastěji
a) melanoblastom pochvy
b) sarkom pochvy
C) primární karcinom pochvy
d) sekundární karcinom pochvy - metastáza
122. Primární karcinom pochvy je nejčastěji Hnmocelularni
b) adenokarcinom
c) melanom
d) karcinosarkom
123. »Otiskové« karcinomatózní vředy se mohou I vytvářet nejčastěji při primární lokalizaci I nádoru
a) na klitorisu
b) na zadní komisuře
c) na vnitřních plochách malých stydkých pysků
d) na velkých stydkých pyscích
124. Karcinom Bartholiniho žlázy má obvykle I histologický charakter
a) nádoru z chondroidních struktur
b) multilokulámího mucinózního kystomu
c) ulcerózní
d) solidního adenokarcinomu měkké konzistence
125. Pro rozhodnutí, zda karcinom v pochvě je I primární, nebo sekundární, je rozhodující
a) palpační nález
b) vaginální sonografie
c) ftakcionovaná kyretáž děložního hrdla a těla
d) gynekologické vyšetření a histologický nález
126. Při diferenciální diagnóze primárního karcinomu pochvy neuvažujeme o možnosti
a) karcinomu uretry
b) Meigsova syndromu
c) endometriózy
d) lymfogranulomu
127. Rozhodující léčebnou modalitou u karcinomu I vulvy je
a) systémová chemoterapie
b) kombinovaná radioterapie
c) operační léčba s event, adjuvantní radioterapií
d) chemoradioterapie
128. Nejčastějším patologickým stavem na vulvě je
a) metastazující spinocelulámí karcinom
b) vulvámí intraepiteliální neoplazie (VIN)
c) akutní zánět a klasické kožní choroby
d) lichen sclerosus et atrophicus
129. Destrukční léčba CO, laserem je z uvedených příkladů vyhrazena pro
a) karcinom vulvy v I. stadiu
b) metastatické nádory typu sarkomů velikosti do 1 cm
c) VIN
d) žádný z uvedených případů
130. Nejčastějšími zhoubnými nádory vagíny jsou
a) adenokarcinomy
b) metastatické karcinomy
c) karcinomy z jasných buněk
d) melanomy
131. Lidské papilomaviry hrají roli v etiopatogenezi nádorů vulvy
a) u mladších žen, kde se nádory vyvíjejí přes stadia prekanceróz
b) u nádorů s velkou tendencí к lymfogennímu metastazování
c) u agresivních typů nádorů starších žen
d) u všech spinocelulámích nádorů
132. Jednoznačnou metodou к odlišení benigních forem od premaligních či maligních změn na vulvě je
a) vulvoskopie
b) Collinsův test s použitím toluidinové modři
c) vulvámí biopsie s následným histologickým vyšetřením
d) cytologické vyšetření
133. Mezi hlavní prognostické faktory karcinomu vulvy nepatří
a) staging a grading
b) velikost nádoru a počet pozitivních uzlin
c) histologický typ, lymfangioinvaze
d) velikost povrchové nekrózy nádoru
134. Dobře definované prekancerózy mají
a) spinocelulámí nádory vulvy
b) sarkomy vulvy
c) melanomy vulvy
d) adenokarcinomy
135. Gynekologické nádory typu karcinomů vytvářejí metastázy v regionálních mízních uzlinách
a) krevním oběhem
b) implantací
c) krevním oběhem a implantací
d) lymfatickými dráhami
136. Regionální mízní uzliny, do nichž metastazují gynekologické zhoubné nádory, jsou
a) jen paraaortální uzliny
b) tříselné, paraaortální a uzliny podél pánevních cév
c) mediastinální uzliny
d) supraklavikulámí uzliny
137. Mezi nežádoucí účinky antracyklinů limitující jejich dávku patří
a) kardiotoxicita
b) alopecie
c) nefrotoxicita
d) neurotoxicita
138. Hormonální léčba karcinomu endometria je vhodná zejména u
a) diferencovaného endometroidního karcinomu
b) nediferencovaného endometroidního karcinomu
c) jasnobuněčného karcinomu
d) serózně-papilámího karcinomu
139. Ovariální karcinom diagnostikujeme nejčastěji ve věkovém období
a) 25-35 let
b) 40-50 let
c) 50-70 let
d) po 70 letech
140. Který z uvedených nádorů je nejčastější příčinou úmrtí žen
a) karcinom děložního hrdla
b) karcinom endometria
c) karcinom prsu
d) karcinom ovaria
141. Nejčastějším příznakem karcinomu ovaria je
a) výtok z pochvy
b) nepravidelné krvácení
c) bolest v podbřišku
d) pocit zvětšování dutiny břišní
142. Více než 95 % primárních maligních nádorů vejcovodů jsou
a) choriokarcinomy
b) leiomyosarkomy
c) adenokarcinomy
d) mezodermální sarkomy
143. Nejčastějším typem ovariálního karcinomu je
a) pseudomucinózní kystadenokarcinom
b) nádor ze světlých buněk
c) serózní kystadenokarcinom
d) teratoblastom
144. Charakteristickým příznakem časného stadia ovariálního karcinomu je
a) bolest v podbřišku
b) dyspeptické obtíže
c) nemá charakteristický příznak
d) krvácení z dělohy
145. Kystadenokarcinom ovaria je
a) nádor feminizující
b) nádor bez hormonální aktivity
c) nádor virilizující
d) nejedná se o primární ovariální nádor
146. Arhenoblastom ovaria je
a) nádor feminizující
b) nádor bez hormonální aktivity
c) nádor virilizující
d) není to primární ovariální nádor
147. Krukenbergův nádor ovaria je sekundární nádor a jeho primární ložisko je
a) v močovém měchýři
b) v trávicím ústrojí
c) ve slezině
d) v játrech
148. Incidence karcinomu ovaria je asi
a) 10-15/100 000 žen za rok
b) 20-25/100 000 žen za rok
c) 30-35/100 000 žen za rok
d) 40-45/100 000 žen za rok
149. Incidence karcinomu tuby je
a) do 0,5/100 000 žen za rok
b) 1 -5/100 000 žen za rok
c) 5-10/100 000 žen za rok
d) 10-15/100 000 žen za rok
150. Nejčastějším karcinomem vejcovodu je
a) adenokarcinom
b) choriokarcinom při extrauterinní graviditě
c) sarkom
d) dysgerminom
151. Atypicky proliferující epitelové nádory ovaria jsou
a) nádory s nízkým maligním potenciálem
b) nádory s vysokým maligním potenciálem
c) nádory benigní
d) nádory sekundární
152. Karcinom ovaria diagnostikujeme
a) v časném stadiu při běžném preventivním vyšetření
b) v časném stadiu odběrem cytologie
c) většinou v pozdním stadiu
d) při odběrech krevního obrazu, kde je přítomna anémie
153. Při TNM klasifikaci karcinomu ovaria TI znamená, že
a) nádorje ohraničen na vaječník
b) nádor se šíří v malé pánvi
c) nádor se šíří mimo malou pánev
d) nádor přechází na dělohu
154. TNM klasifikace karcinomu ovaria T3 znamená, že
a) nádorje ohraničen na vaječník
b) nádor se šíří v malé pánvi
c) nádor se šíří mimo malou pánev
d) nádor přechází na dělohu
155. TNM klasifikace karcinomu ovaria T4 znamená, že
a) nádor zakládá vzdálené metastázy
b) nádor se šíří v malé pánvi
c) nádor se šíří mimo malou pánev
d) T4 není v klasifikaci
156. FIGO klasifikace IV karcinomu ovaria znamená, že
a) nádor zakládá vzdálené metastázy
b) nádor se šíří v malé pánvi
c) nádor se šíří mimo malou pánev
d) nádorje ohraničený na ovarium
157. Terapie karcinomu ovaria je většinou zahájena
a) operací
b) chemoterapií
c) radioterapií
d) hormonoterapií
158. Za adekvátní chirurgický staging karcinomu ovaria považujeme
a) odstraněni postiženého ovaria a ponechání dělohy adruhostranných adnex
b) [odstranění adnex, dělohy a omenta
c) pouze odběr tkáně na histologii pro včasné zahájení chemoterapie
d) odstranění adnex, dělohy, omenta, apendixu, L u nižších stadií též pánevní a paraaortální lymfade- nektomii a randombiopsii
159. Pětileté přežití u epiteliálního karcinomu ovaria к stadia Ije
a) P5-8O%
b) 55-65%
c) 15-25%
d) 5-10%
160. Pětileté přežití u epiteliálního karcinomu ovaria B- stadia II je
a) 15-80%
b) 65%
c) 15-25%
d) 5-10%
161. Pětileté přežití u epiteliálního karcinomu ovaria
a) stadia III je
b) te-8o%
c) 55-65%
d) 15-25%
162. Pětileté přežití u epiteliálního karcinomu ovaria stadia IV je
a) 75-80%
b) 55-65%
c) 15-25%
d) 5-10%
163. Při chirurgické terapii dysgerminomu u mladých žen, které si přejí zachovat fertilitu, se provádí
a) konzervativní postup, odstranění postiženého ovaria, biopsie druhostranného ovaria, sampling lymfatických uzlin a ponechání dělohy a druhostranných adnex
b) radikální postup, odstranění adnex, dělohy, omenta, apendixu
c) pouze odběr tkáně na histologii pro včasné zahájení chemoterapie
d) radikální postup - odstranění adnex, dělohy, omenta, apendixu, pánevní a paraaortální lymfadenektomie, splenektomie
164. Teratom patří mezi ovariálm nádory
a) epitelové
b) z germinálních buněk
c) ze zárodečných pruhů a stromatu
d) nepatří mezi ovariální nádory
165. Mezi základní cytostatikum používané při terapii karcinomu ovaria patří
a) platinový derivát
b) metotrexát
c) 5- fluorouracil
d) leukovorin
166. Adjuvantní chemoterapie karcinomu ovaria má obvykle
a) 3 série chemoterapie
b) 6 sérií chemoterapie
c) 9 sérií chemoterapie
d) 12 sérií chemoterapie
167. Nejčastěji používanou kombinací cytostatik při terapii karcinomu ovaria je
a) metotrexát a bleomycin
b) aktinomycin D a 5- fluorouracil
c) paklitaxel a karboplatina
d) ifosfamid a cyklofosfamid
168. Mezi nejčastější nežádoucí účinky karboplatiny patří
a) neurotoxicita
b) nefrotoxicita
c) mukozitida
d) myelotoxicita
169. Mezi nejzávažnější nežádoucí účinky cisplatiny patří
a) neurotoxicita
b) nefrotoxicita
c) mukozitida
d) myelotoxicita
170. Interval «debulking surgery« se používá v terapii karcinomu ovaria
a) u primárně neresekovatelných nádorů, které v průběhu 3-4 sérií chemoterapie jeví progresi
b) u primárně neresekovatelných nádorů, které v průběhu 3-4 sérií chemoterapie jeví regresi
c) po radioterapii
d) při kontraindikaci chemoterapie
171. Nádory vaječníků tvoří
a) 15 % maligních novotvarů u žen
b) 30 % maligních novotvarů u žen
c) 40% maligních novotvarů u žen
d) 50% maligních novotvarů u žen
172. Riziko maligního zvratu mola hydatidosa completa je
a) 20-30%
b) 4-8%
c) 0,2-0,5%
d) 40-50%
173. Z gynekologických nádorů je na chemoterapii nejcitlivější
a) choriokarcinom
b) endometriální karcinom
c) ovariální dysgerminom
d) sérozní ovariální kystadenokarcinom
174. Gestační choriokarcinom je primární nádor
a) nediferencovaných pohlavních buněk
b) deciduy
c) trofoblastu
d) myometria
175. U choriokarcinomu nacházíme vysoké koncentrace
a) gestagenů
b) estrogenů
c) choriového gonadotropinu
d) androgenů
176. Při perzistující trofoblastické invazi koncentrace B-hCG neklesají
a) do 30 dnů po ukončení těhotenství
b) do 20 dnů po ukončení těhotenství
c) do 10 dnů po ukončení těhotenství
d) neklesají do 7 dnů po ukončení těhotenství
177. Riziko maligního zvratu mola hydatidosa partialisje
a) 20-30%
b) 4-8%
c) méně než 0,1%
d) 40-50%
178. Riziko maligního zvratu mola hydatidosa proliferans je
a) 15-20%
b) 4-8%
c) méně než 0,001 %
d) 40-50%
179. Incidence choriokarcinomu je
a) 1/50 000 registrovaných těhotenství
b) 1/25 000 registrovaných těhotenství
c) 1/100 000 registrovaných těhotenství
d) 1/2 000 registrovaných těhotenství
180. Mola hydatidosa partialis vzniká patologickou fertilizací vajíčka a
a) veškeré chromosomy jsou otcovského původu
b) je triploidní
c) je diploidní
d) veškeré chromosomy jsou mateřského původu
181. Vyléčení u nemetastazující gestační trofoblastické nemoci je
a) v 50-70%
b) v 70-80%
c) ve 20-30%
d) ve 100%
182. Vyléčení u gestačního choriokarcinomu s přítomností mozkových metastáz je
a) v 50-70%
b) vyléčit nelze
c) ve 20-30%
d) ve 100%
183. Základní metodou léčby je u gestačního choriokarcinomu
a) operační léčba
b) chemoterapie
c) radioterapie
d) hormonoterapie
184. Incidence parciální hydatidózm moly je
a) 1/50 000 registrovaných těhotenství
b) 1/25 000 registrovaných těhotenství
c) 1/100 000 registrovaných těhotenství
d) 1/2000-3000 registrovaných těhotenství
185. Incidence kompletní hydatidózní moly je
a) 1/50 000 registrovaných těhotenství
b) 1/25 000 registrovaných těhotenství
c) 1/100 000 registrovaných těhotenství
d) 1/3000-4000 registrovaných těhotenství
186. К monitorování úspěšnosti léčby choriokarcinomu je vhodný jako onkomarker
a) Ca 125
b) Ca 19-9
c) B-hCG
d) CEA
187. Většinou používaným cytostatikem při chemoterapii choriokarcinomu je
a) cyklofosfamid
b) ifosfamid
c) metotrexát
d) 5-fluorouracil
188. Incidence karcinomu prsu je
a) 20-30/100 000
b) 40-50/100 000
c) více než 100/100 000
d) 5/100 000
189. Terapií časných stadií karcinomu prsu jepřevážně
a) radioterapie
b) chemoterapie
c) operační
d) hormonoterapie
190. Při segmentektomii pro karcinom prsu je nutné vždy následně provést
a) chemoterapii
b) radioterapii
c) chemoterapii i radioterapii
d) není nutná žádná léčba
191. leté přežití karcinomu prsu je u I. stadia
a) 60%
b) 80%
c) 30%
d) 10%
191. karcinomu prsu velikost nádoru od 2 do 5 cm zařazuje pacientku do stadia
a) TI
b)T3
c) T2
d) T4
193. U karcinomu prsu velikost nádoru od 1 do 2 cm zařazuje pacientku do stadia
a) T3
b) T2
c) TI
d) T4
194. U karcinomu prsu velikost nádoru do 1 cm zařazuje pacientku do stadia
a) TI
b) T2
c) T3
d) T4
195. Při infiltraci karcinomu prsu do hrudní stěny se jedná o stadium
a) TI
b) T2
c) T3
d) T4a
196. Pro screening karcinomu prsu je nejvhodnější
a) ultrasonografie
b) fine needle biopsie
c) termografie
d) mamografie
197. Základem léčby inflamatorního (erysipeloidního) karcinomu prsu je
a) primární operační řešení
b) systémová chemoterapie a lokoregionální léčba
c) hormonoterapie
d) terapie antibiotiky
198. Při infiltraci kůže prsu se jedná o stadium
a) TI
b) T2
c) T3
d) T4b
199. Nádor prsu větší než 5 cm zařazuje pacientku do stadia
a) TI
b) T2
c) T3
d) T4b
200. Mezi rizikové faktory pro karcinom prsu nepatří
a) věk
b) karcinom prsu v rodinné anamnéze
c) karcinom prsu v osobní anamnéze
d) kojení
201. Zánětlivý (infiamatorní) karcinom prsu je charakterizován
a) hmatným nádorem v prsu
b) patologickou sekrecí z bradavky
c) difúzní hnědou indurací kůže s erysipeloidním okrajem
d) nálezem mikrokalcifikací
202. Minimální počet odstraněných lymfatických uzlin při exenteraci axily u karcinomu prsu je
a) 10
b) 20, nebo více než 1 sentinelová uzlina
c) 25
d) 12
203. Nejčastěji diagnostikovaným nádorem prsu je
a) invazivní lobulární karcinom
b) invazivní duktální karcinom
c) Pagetův karcinom
d) erysipeloidní karcinom

`;

  const answers = `
  1c 2b 3d 4d 5a 6b 7d 8b 9b
10c 11d 12b 13c 14b 15d 16b 17d 18d 19c
20d 21d 22b 23b 24a 25c 26c 27a 28d 29a
30c 31c 32c 33d 34a 35a 36d 37c 38c 39d
40b 41c 42c 43c 44d 45c 46b 47a 48b 49c
50c 51b 52b 53b 54c 55c 56c 57b 58d 59b
60c 61a 62a 63b 64b 65c 66c 67d 68a 69c
70a 71b 72a 73b 74a 75b 76a 77b 78d 79c 80b 81c 82b 83c 84c
90c 91b 92b 93b 94c
100b 1O1d 102c 103c 104d
110a 111b 112b 113b 114d
120c 121d 122a 123c 124d
130b 131a 132c 133d 134a
140c 141d 142c 143c 144c
150a 151a 152c 153a 154c
160b 161c 162d 163a 164b
170b 171a 172b 173a 174c
180b 181d 182a 183b 184d
190b 191b 192c 193c 194a
200d 201c 202d 203b 85a 86d 87c 88b 89a
95c 96d 97a 98b 99c
105a 106b 107c 108b 109c
115d 116b 117a 118d 119a
125d 126b 127c 128c 129c
135d 136b 137c 138a 139c
145b 146c 147b 148b 149a
155d 156a 157a 158d 159a
165a 166b 167c 168d 169b
175c 176a 177c 178a 179b
185d 186c 187c 188c 189c
195d 196d 197b 198d 199c

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
          '9. Gynekologická onkologie - prekancerózy, benigní a maligní nádory. I. ČÁST PREGRADUÁLNÍ',
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
