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
  1. U hraničně zúžené pánve je conjugata diagonalis
  a) 11-12 cm
  b) 16-17cm
  c) 17-18cm
  d) 18-19cm
  2. Hraničně zúženou pánev definuje rozměr conjugata externa
  a) menší než 17 cm
  b) 17-18cm
  c) 18-19cm
  d) větší než 20 cm
  3. Vakumextrakce je
  a) operační metoda pro vybavení donošeného plodu
  b) metoda pro ukončení těhotenství do 12 týdne
  c) metoda pro odstranění dělohy vaginální cestou
  d) endoskopická metoda pro získání zralého oocytů
  4. U patologicky zúžené pánve je conjugata diagonalis
  a) menší než 11 cm
  b) menší než 14 cm
  c) menší než 16 cm
  d) menší než 18 cm
  5. U patologicky zúžené pánve je conjugata externa
  a) menší než 22 cm
  b) menší než 20 cm
  c) menší než 17 cm
  d) menší než 15 cm
  6. Příznakem kefalopelvického nepoměru není
  a) zevní nepoměr
  b) při vaginálním vyšetření je hlavička nad rovinou pánevního vchodu
  c) při vyšetření se švy začínají překládat
  d) hypoxie plodu na monitoru
  7. Při kefalopelvickém nepoměru ukončíme porod
  a) císařským řezem
  b) vakuumextrakcí
  c) kleštěmi
  d) spontánně
  8. Nejčastější příčinou kefalopelvického nepoměru je
  a) hypertrofie plodu
  b) indiferentní naléhání hlavičky
  c) deflexní poloha
  d) spastická branka
  9. Do skupiny příčně zúžených pánví patří
  a) pánev prostě plochá
  b) pánev nálevkovitá
  c) pánev luxační
  d) pánev osteomalatická
  10. Jako pánev šikmo zúženou označujeme
  a) pánev luxační
  b) pánev asimilační
  c) pánev kyfotickou
  d) pánev všeobecně stejnoměrně zúženou
  11. Přední asynklytismus - obliquitas Naegele - při vaginálním vyšetření
  a) šev šípový se nachází blíže promontoria
  b) šev šípový se nachází blíže symfýzy
  c) šev šípový je v přímém průměru pánevního vchodu
  d) šev šípový je v prvním šikmém průměru
  12. Zadní asynklitismus se nazývá podle
  a) Litzmanna
  b) Naegeleho
  c) Baudelocquea
  d) Simpsona
  13. Při vaginálním vyšetření hmatáme při zadním  asynklitismu
  a) šev šípový za sponou
  b) šev šípový blíže promontoria
  c) šev šípový centrálně
  d) šev šípový v druhém šikmém průměru
  14. Příčinou vysokého přímého stavu hlavičky je
  a) patologická pánev
  b) krátký pupečník
  c) hyperaktivita děložní
  d) plný močový měchýř
  15. Při asynklitismu ukončíme porod
  a) císařským řezem
  b) klešťovým porodem
  c) vakuumextrakcí
  d) per vias naturales
  16. Pelveolýza je způsobena
  a) tlakem hlavičky na sponu v těhotenství
  b) hormonálními vlivy
  c) přírůstkem váhy u žen v těhotenství
  d) na základě dysplazie v dětství
  17. Za předčasný označujeme odtok plodové vody  v případě
  a) spontánního odtoku plodové vody před děložní činností
  b) spontánního odtoku nebo při arteficiálním protržení vaku blan během I doby porodní
  c) spontánního odtoku nebo při arteficiálním protržení vaku blan ve П době porodní
  d) spontánního odtoku nebo při arteficiálním protržení  vaku blan po začátku děložní činnosti
  18. Při deflexních polohách není nikdy vedoucím bodem
  a) malá fontanela
  b) velká fontanela
  c) čelo
  d) obličej
  19. Kittrichovou metodou je
  a) barvení nátěru sekretu z děložního hrdla
  b) barvení 0,5 % roztokem sulfátu nilské modři
  c) mikroskopicky prokazuje přítomnost mázku a kožních epitelií plodu
  d) vše je správně
  20. Po předčasném odtoku plodové vody u těhotenství 37 týdne provokujeme obvykle porod
  a) za 10 hodin
  b) za 24 hodin
  c) za 48 hodin
  d) čekáme na spontánní začátek porodu
  21. Děložní hyperaktivita se na monitoru projevuje
  a) vzestupem amplitud
  b) zkrácením mezikontrakčního období
  c) zvýšenou frekvencí kontrakcí
  d) všechna tvrzení jsou pravdivá
  22. Děložní hyperaktivitu tlumíme
  a) infúzí s magnéziem
  b) infúzí s atosibanem
  c) infúzí s Gynipralem
  d) všechny možnosti jsou správné
  23. Jako hysterostomatotomii označujeme
  a) mělké nástřihy branky nůžkami
  b) digitální dilataci branky
  c) roztržení branky peánem
  d) incize branky skalpelem
  24. U vysokého přímého stavu
  a) hlavička prochází pánví bez rotace
  b) hlavička je nad vchodem a je flektována
  c) hlavička vstupuje do pánve švem šípovým v přímém průměru
  d) všechna tvrzení jsou správná
  25. U hlubokého příčného stavu
  a) hlavička neprovede na dně pánevním vnitřní rotaci
  b) hlavička se při vnitřní rotaci otočí záhlavím к symfýze
  c) hlavička nevstupuje do pánve
  d) hlavička se při vnitřní rotaci otočí záhlavím do vyhloubení kosti křížové
  26. Abnormální rotace hlavičky při porodu záhlavím znamená
  a) při vnitřní rotaci se hlavička otáčí záhlavím ke sponě
  b) při vnitřní rotaci se hlavička otáčí záhlavím do vyhloubení kosti křížové
  c) při vnitřní rotaci dochází к rotaci o 180 stupňů
  d) hlavička se konformuje
  27. Vedoucím bodem při poloze předhlavím je
  a) malá fontanela
  b) bregma
  c) čelo
  d) maxilla
  28. Prostupujícím obvodem u čelní polohy je
  a) obvod frontookcipitální
  b) obvod maxilloparietální
  c) obvod subokcipitobregmatický
  d) obvod frontookcipitální
  29. Při deflexních polohách dochází к poruše držení
  a) hlavičky
  b) horních končetin plodu
  c) dolních končetin plodu
  d) horních i dolních končetin plodu
  30. Temenní poloha je
  a) u donošeného plodu neporoditelná
  b) nejedná se o deflexní polohu
  c) jedná se o nejtěžší stupeň deflexe hlavičky
  d) jedná se o nejmímější stupeň deflexe
  31. U deflexních poloh rotuje vedoucí bod
  a) pod sponu
  b) do vyhloubení kosti křížové
  c) к rotaci dochází nad vchodem
  d) vedoucí bod nerotuje  
  32. Z deflexních poloh donošeného plodu je neporoditelná spontánně
  a) čelní poloha
  b) poloha koncem pánevním
  c) poloha záhlavím
  d) poloha předhlavím
  33. U polohy předhlavím je vedoucím bodem
  a) velká fontanela
  b) malá fontanela
  c) kořen nosu
  d) obličej
  34. Zjištěnou deflexní polohu řešíme
  a) posílením kontrakcí infúzi s oxytocinem
  b) operačním ukončením porodu kleštěmi
  c) vakuumextrakcí
  d) primárně císařským řezem
  35. U neúplného konce pánevního vedeme porod
  a) spontánně
  b) per sectionem caesaream
  c) provedeme extrakci
  d) vedeme porod medikamentózně
  36. Zjištěná příčná poloha je indikací
  a) к ukončení porodu per sectionem caesaream
  b) к indukci porodu
  c) к obratu plodu sdruženými hmaty na polohu koncem pánevním
  d) к obratu plodu na hlavičku zevními hmaty v průběhu porodu
  37. Ve druhé době porodní při vztyčení ruček u konce pánevního je indikováno
  a) stažení ruček a dokončení porodu extrakcí
  b) podpora kontrakcí infúzi s oxytocinem
  c) provedení sectio caesarea
  d) použití forcepsu na konec pánevní
  38. Při hypoaktivitě děložní v průběhu porodu podáváme
  a) oxytocin v infúzi
  b) Prepidil gel
  c) aplikujeme Enzaprost intracervikálně
  d) podáváme Partussisten v infúzi
  39. Při abnormální rotaci záhlavím je vedoucím bodem
  a) malá fontanela
  b) velká fontanela
  c) glabela
  d) temeno
  40. Po spontánním porodu dvojčat a placenty dochází к silnému krvácení, jehož příčinou je nejčastěji
  a) atonie děložní
  b) diseminovaná intravaskulámí koagulace (DIC)
  c) poranění porodních cest
  d) retence blan
  41. Po spontánním porodu rodička začíná silně krvácet. Jaké opatření provedeme
  a) aplikujme oxytocin v infúzi
  b) provedeme manuální a instrumentální revizi
  c) aplikujeme cervikálně prostaglandiny
  d) všechna opatření jsou správná
  42. Po spontánním porodu dlouho odumřelého plodu a placenty rodička začíná silně krvácet - nejpravděpodobnější příčinou je
  a) afibrinogenémie
  b) retence kotyledonu
  c) poranění rodidel
  d) atonie děložní
  43. V případě odumřelého plodu během porodu neaplikujeme
  a) antibiotika
  b) Clexane
  c) antitrombin
  d) oxytocin
  44. Velmi silné krvácení po dirupci vaku blan nejspíše svědčí pro
  a) nepoznaná vasa praevia
  b) placenta praevia
  c) rychlou dilataci děložního hrdla
  d) není významné
  45. Jaký lék nesmím použít к provokaci porodu
  a) Methylergometrin
  b) Oxytocin
  c) Prepidil gel
  d) Enzaprost
  46. Obrat vnitřními hmaty může být indikován pouze
  a) u porodu plodu v poloze příčné
  b) u porodu dvojčat v případě stočení plodu В do polohy příčné
  c) u polohy koncem pánevním
  d) u hlubokého příčného stavu
  47. U dvojčat v případě uložení plodu A v poloze podélné hlavičkou a plodu В koncem pánevním indikujeme
  a) primárně císařský řez
  b) porod vedeme per vias naturales
  c) indikujeme porod v 37 týdnu těhotenství
  d) provedeme klasickou indukci
  48. Za adekvátní terapii při atonickém postpartálním krvácení (placenta včetně blan je kompletní!) primárně považujeme
  a) aplikaci kontrakčních látek
  b) hysterektomii
  c) tamponádu děložní
  d) Credého hmat
  49. Při Pfannestielově řezu jsou příčně přestřiženy tyto svaly
  a) žádný sval
  b) mm. obliqus extemus a intemus
  c) m. pyramidalis
  d) m. rectus abdominis
  50. V případě sekundigravidy, u nichž první těhotenství bylo ukončeno pro hypoxii císařským řezem, v případě druhého porodu
  a) porod vedeme per vias naturales v termínu porodu
  b) indukujeme porod před termínem
  c) ukončujeme vždy těhotenství per sectionem caesaream
  d) ve II. době porod ukončujeme per forcipem
  51. U spontánního porodu primipary došlo к zániku branky. Nález se nemění 2 hodiny přes dobrou kontrakční činnost, hlavička je sotva malým oddílem a oxymetrie ukazuje saturaci 30 %. Jaký postup zvolíme
  a) císařský řez
  b) aplikujeme infuzi s oxytocinem
  c) ukončíme porod per forcipem Breus
  d) dále polohujeme pacientku
  52. U 301eté potřetí rodící ženy s pravidelnými kontrakcemi při přijmu zjistíme v amnioskopu silně zeleně zkalenou vodu. Volíme tento postup
  a) pacientku bez přípravy přeložíme na sál, protrhneme vak blan a monitorujeme
  b) ihned indikujeme císařský řez
  c) uložíme na čekatelský pokoj a pacientku monitorujeme
  d) pacientku dáme do přípravy a čekáme další vývoj porodu
  53. Při příjmu 351eté pacientky po IVF, s odteklou silně zkalenou vodou, při nálezu 4centimetrové branky, nepravidelnými kontrakcemi a tachykardií nad 180, provedeme následující opatření
  a) pacientku ihned indikujeme к primárnímu císařskému řezu
  b) pacientku uložíme na čekatelský pokoj к dalšímu sledování
  c) pacientku dáme do přípravy
  d) pacientku ihned přeložíme na sál a pokusíme se pomocí oxymetrie monitorovat stav plodu
  54. U pacientky s nepravidelnými kontrakcemi a ještě těhotenským nálezem zjišťujeme v moči proteinurii »na jeden kříž«, TK 140/95, otoky dolních končetin
  a) pacientku přijmeme к observaci
  b) pacientku objednáme ke kontrole za 3 dny
  c) pacientku ihned indikujeme к císařskému řezu
  d) pacientku indukujeme
  55. К příznakům hrozící preeklampie nepatří
  a) bolesti zad kolikovitého charakteru
  b) bolesti v podbřišku a nauzea
  c) bolesti hlavy
  d) poruchy vidění
  56. Při odtoku plodové vody ve 28 týdnu těhotenství
  a) ihned provedeme provokaci a vyvoláme porod
  b) podáváme antibiotika a kortikoidy, provedeme laboratorní vyšetření a pacientku a plod sledujeme
  c) ihned indikujeme císařský řez
  d) pouze pacientku hospitalizujeme a vyčkáme spontánního nástupu porodu
  57. Při odtoku čiré plodové vody ve 34 týdnu těhotenství u pacientky s těhotenským nálezem na hrdle bez kontrakcí
  a) provedeme provokaci porodu pomocí prostaglandinů do 24 hodin
  b) pouze pacientku sledujeme
  c) ukončíme těhotenství primárním císařským řezem
  d) provokaci porodu provedeme infúzi s oxytocinem
  58. U diabetické pacientky s pravidelnými kontrakcemi při přijetí zjišťujeme při zevním vyšetření zevní nepoměr, UZ potvrzuje plod váhové kategorie nad 4500 g, při vaginálním vyšetření zjišťujeme asynklitismus Litzmannův
  a) porod vedeme císařským řezem
  b) porod vedeme spontánně
  c) ve druhé době porodní vedeme porod per forcipem
  d) porod vedeme aktivně pomocí infúze s oxytocinem v epidurální anestezii
  59. Mezi nejzávažnější rizika předčasného odtoku plodové vody patří
  a) hypoxie plodu
  b) předčasný porod
  c) slabé kontrakce v I а II době porodní
  d) infekce
  60. Nejčastější příčinou předčasného porodu je
  a) infekce
  b) inkompetence hrdla
  c) námaha rodičky
  d) předčasný odtok plodové vody
  61. Parciální tokolýza je
  a) snížení děložní hyperaktivity pomocí tokolytik
  b) zástava porodní činnosti pomocí tokolytik
  c) úprava nadměrné děložní činnosti aplikací epidurální analgezie
  d) všechny uvedené způsoby označujeme jako parciální tokolýzu
  62. Obrat zevními hmaty provádíme
  a) při začátku porodu
  b) ve 38 týdnu ambulantně
  c) v 38 týdnu při hospitalizaci za současné tokolýzy
  d) v 36 týdnu, kdy je plod ještě pohyblivý
  63. Při eklamptickém záchvatu je nejdůležitější
  a) zajistit žilní vstupy
  b) provést intubaci
  c) umístit pacientku do klidu
  d) dát pacientce masku s kyslíkem
  64. Obrat vnitřními hmaty může být indikován ve zcela výjimečném případě
  a) u polohy příčné
  b) u tzv. vysokého přímého stavu
  c) u polohy koncem pánevním
  d) u tzv. hlubokého příčného stavu
  65. Při kterém chorobném stavu neočekáváme předčasné odlučování lůžka
  a) sérologickém konfliktu
  b) preeklampsii
  c) úrazu břicha
  d) hypertenzní chorobě matky
  66. Při abrupci placenty je podání tokolytik
  a) jednoznačně kontraindikované
  b) indikované
  c) indikované v některých případech
  d) kontraindikované pouze v některých případech
  67. Frekvence příčné polohy u donošeného plodu je
  a) 0,3-0,5%
  b) 5-10%
  c) 5%
  d) 1%
  68. Příčnou polohu nejlépe diagnostikujeme
  a) amnioskopií
  b) zevním vyšetřením
  c) vnitřním vyšetřením
  d) ultrazvukem
  69. Sekundárně slabé kontrakce definujeme
  a) jako slabé kontrakce po původně normální děložní činnosti
  b) jako kontrakce navazující na primárně slabé kontrakce
  c) kontrakce vznikající na podkladě parciální tokolýzy
  d) jako kontrakce fyziologické ve druhé době porodní
  70. Partus precipitatus znamená
  a) překotný porod
  b) předčasný porod
  c) porod precipitovaného plodu
  d) žádná odpověď není správná
  71. Dystokia cervicocorporalisje
  a) porucha souhry kontrakční činnosti těla a dolního děložního segmentu
  b) rigita děložního hrdla
  c) jiný výraz pro Bandlovu rýhu
  d) častá u polohy podélné hlavičkou
  72. Překotný porod trvá
  a) méně než 3 hodiny
  b) více než 4 hodiny
  c) méně než 30 minut
  d) proběhne bez účasti porodníka
  73. Nejčastějším porodním poraněním plodu je
  a) kefalhematom
  b) porodní nádor
  c) zlomenina humeru
  d) paréza krčních svalů
  74. Placenta praevia marginalis
  a) placenta zasahuje svým okrajem к vnitřní brance
  b) placenta je umístěna ve hraně děložní
  c) placenta zasahuje к zevní brance
  d) placentu hmatáme při vnitřním vyšetření
  75. Při podezření na placenta praevia provedeme okamžitě
  a) ultrazvukové vyšetření
  b) palpační vyšetření
  c) amnioskopii к potvrzení diagnózy
  d) všechny odpovědi jsou správné
  76. Příčinou předčasného porodu nebývá
  a) makrosomie plodu
  b) inkompetence hrdla
  c) malformace plodu
  d) předčasný odtok vody plodové
  77. Placentami dysfunkce může vést za porodu
  a) к hypoxii plodu
  b) к překotnému porodu
  c) ke krvácení
  d) к poruše děložní činnosti
  78. К zamezení krvácení po porodu placenty je nezbytná
  a) retrakce dělohy
  b) kontrakce děložního svalu
  c) trombotizace děložních cév
  d) všechny odpovědi jsou správné
  79. Při porodu mrtvého plodu je pacientka nejčastěji ohrožena
  a) sepsí
  b) psychózou
  c) velkým poraněním
  d) vykrvácením
  80. Vasa praevia při začátku porodu při nálezu branky diagnostikujeme nejbezpečněji
  a) při vyšetření v zrcadlech
  b) palpačně
  c) amnioskopem
  d) ultrazvukem
  81. Při předčasném porodu se nejčastěji setkáváme
  a) s hyperaktivitou děložní
  b) s hypoaktivitou děložní
  c) s hypertonem děložním
  d) s hypotonií děložní
  82. Hypertonie děložní je typický znak
  a) pro abrupci placenty
  b) předčasný porod
  c) postmaturitu
  d) všechny odpovědi jsou správné
  83. Děložní činnost u porodu dvojčat je nejčastěji
  a) slabá
  b) silná
  c) normální
  d) diskoordinovaná
  84. U porodu dvojčat ve třetí době porodníje nejčastější komplikací
  a) hypotonie děložní
  b) zadržení placenty následkem spazmu branky
  c) třetí doba porodní probíhá jako po porodu jednoho dítěte
  d) kontrakční a retrakční schopnost dělohy je větší - ztráta krevní je menší
  85. Lékem použitelným při eklamptickém záchvatu není
  a) magnézium
  b) Diazepam
  c) Nepresol
  d) Vasocardin
  86. Atonii děložní zásadně neléčíme
  a) tamponádou děložní
  b) podáním prostaglandinů intracervikálně
  c) podáním oxytocinu v infůzi
  d) aplikací námelových alkaloidů
  87. Cervenohnědé zabarvení plodové vody nejčastěji nacházíme
  a) v případě intrauterinní smrti plodu
  b) při onemocnění matky hepatopatií
  c) v případě onemocnění matky diabetem
  d) v případě morbus haemolyticus fetalis
  88. Žluté zabarvení plodové vody nacházíme
  a) u morbus haemolyticum neonatorum
  b) u hydrops fetus universalis
  c) u infekční žloutenky novorozence
  d) u preeklapsie matky
  89. Příčinou děložní atonie je
  a) únava děložního svalu
  b) těhotenská hepatopatie
  c) preekiampsie
  d) porucha srážlivosti krve
  90. Příznakem hypovolemického šoku není
  a) náhlá ztráta vědomí
  b) zrychlení pulsů
  c) pokles krevního tlaku
  d) oligurie
  91. Při zjištění inkancerované dělohy
  a) podáme námelové alkaloidy
  b) podáme spazmolytika
  c) vybavíme placentu tahem za pupečník
  d) vybavíme placentu Credého hmatem
  92. V případě endomyometritidy v šestinedělí  nepodáváme
  a) Mysalfon
  b) Methylergometrin
  c) antibiotika
  d) oxytocin
  93. Mezi metody porodnické analgezie v průběhu spontánního porodu nepatří
  a) spinální anestezie
  b) epidurální analgezie
  c) pudendální blok
  d) neuroplegická analgezie
  94. Při monitorování plodu na zádech dojde v těhotenství u plodu к deceleraci ozev
  a) pravděpodobně se jedná o syndrom vena cava caudalis
  b) jde o těžkou hypoxii
  c) pravděpodobně se jedná o pupečníkovou komplikaci
  d) jedná se o placentám! insuficienci
  95. Syndrom vena cava caudalis v těhotenstvíje výrazem
  a) stištění dolní duté žíly objemnou a těžkou dělohou v poloze vleže na zádech matky
  b) placentámí insuficienci
  c) stištění pupečmku plodu
  d) vysokého stavu bránice a reflexního působení na myokard
  96. Při výhřezu pupečníku při porodu v poloze hlavičkou
a) provedeme protržení vaku blan a obrat vnitřními I hmaty
b) je plod bezprostředně ohrožen hypoxii a provádíme císařský řez, výjimečně při splněných podmínkách užijeme forceps
c) neprovádíme žádná opatřeni, protože ohrožení plodu je malé, pouze sledujeme frekvence ozev plodu kardiotokograficky
d) vyčkáme zániku branky a pak provedeme repozici pupečníku
97. Kraniotomie je
a) řez na děloze při císařském řezu v její kraniální části
b) je část operace porodními kleštěmi (uchopení hlavičky kleštěmi)
c) souhrnný název zmenšovacích operací na hlavičce plodu
d) naříznutí nebo nástřih hráze nad dolní třetinou obvodu poševního vchodu, prováděný při některých vaginálních porodnických operacích
98. Perinatální úmrtnost a riziko poškození plodu při spontánním vedení porodu v poloze podélné koncem pánevním
a) záleží na stupni deflexe hlavičky
b) je nižší než při poloze podélné hlavičkou
c) je stejné jako při poloze podélné hlavičkou
d) je asi o 4-5 % vyšší než v poloze podélné hlavičkou
99. Vasa praevia za porodu
a) ohrožují plod i rodičku
b) ohrožují zejména plod
c) neohrožují ani plod ani rodičku
d) ohrožují rodičku
100. Jestliže jsou volné porodní cesty, není přítomen kefalopelvický nepoměr, a i při vydatných kontrakcích vázne porod v druhé době porodní, můžeme usuzovat na
a) placentu adherens
b) dlouhý pupečník
c) patologický úpon pupečníku
d) krátký pupečník
101. Při insertio velamentosa funiculi
a) je za porodu ohrožen plod při ruptuře vasa praevia
b) nemá pro porod žádný význam
c) vázne porod v druhé době porodní
d) je za porodu ohrožena rodička vykrvácením z přetrzených cév
102. Placentární dysfunkce může vést za porodu
а) к hypotrofizaci plodu
b) к překotnému porodu
с) к poruše děložní činnosti
d) к akutní hypoxii plodu
103. Při slabé primární nebo sekundární děložní činnosti
a) podáváme oxytocin v i.v. infúzi
b) podáváme uterotonika typu prostagladinu F2 a, nejlépe intraamniálně
c) podáváme uterotonika typu námelových alkaloidů,a to ergometrin nebo methylergometrin i.m. nebo i.v.
d) podáváme současně oxytocin a methylergometrin jednorázově i.m.
104. Bandlova rýha je
a) kožní záhyb mezi fundem děložním a processus xiphoideus
b) krční rýha hmatná ve fundu děložním při poloze plodu koncem pánevním
c) kontrakční kruh, který se objevuje na děloze při hrozící ruptuře děložní
d) kožní záhyb mezi úponem musculus gluteus maximus a musculus gluteus minimus
105. Při abnormální rotaci záhlavím je vedoucím bodem
a) velká fontanela
b) střed vzdálenosti mezi malou a velkou fontanelou
c) malá fontanela
d) temeno
106. Při porodu mrtvého plodu a váznoucím porodu hlavičky
a) zklidníme rodičku vhodnou medikací a vyčkáme spontánní konformace hlavičky
b) stimulujeme děložní činnost a provádíme vydatnou epiziotomii
c) provádíme zmenšovací operaci na hlavičce nejlépe v celkové anestezii
d) urychlujeme druhou dobu porodní forcepsem
107. Při porodu mrtvého plodu je rodička nejvíce ohrožena
a) sepsí
b) psychózou
c) velkým porodním poraněním
d) vykrvácením
108. Embolie plodovou vodou způsobí u rodičky
a) srdeční selhání z hypervolémie
b) diseminovanou intravaskulámí koagulaci
c) postižení glomerulů ledvin
d) akutní dušnost
109. Ke vzduchové embolii může nejspíše dojít
a) při manuálním vybavení placenty
b) při násilné expresi v druhé době porodní
c) při extrakci konce pánevního
d) při odtoku plodové vody při poloze příčné
110. Pozdní decelerace (DIP II) je v průběhu porodu známkou
a) poruchy děložní činnosti
b) přílišného tlaku na hlavičku plodu
c) hypoxie plodu
d) dobrého stavu vegetativního nervstva
111. Silentní záznam na kardiotokogramu za porodu
a) svědčí pro spánek plodu
b) nemá klinický význam
c) svědčí pro vrozenou srdeční vadu plodu
d) svědčí pro hypoxii plodu
112. Děložní činnost při porodu dvojčat bývá obvykle
a) slabá
b) silná a nadměrná
c) stejná jako při porodu jednoho plodu
d) kontrakce jsou delší a frekventnější
113. V třetí době porodní po porodu dvojčat můžeme očekávat
a) zadržení části placenty
b) placenta accreta
c) rychlý průběh s malou krevní ztrátou
d) poruchy odlučování lůžka a hypotonii
114. Při kterém chorobném stavu neočekáváme
předčasné odlučování lůžka
a) sérologický konflikt
b) úrazy břicha
c) preeklampsie
d) hypertenzní nemoc
115. Při těžké formě abrupce placenty
a) podáváme hemostyptické léky a Dextran
b) dominuje šok rodičky
c) indukujeme rychle vaginální porod
d) podáme urychleně tokolytické léky
116. Mezi typické klinické příznaky těžké abrupce placenty nepatří
a) známky hypoxie plodu
b) slabé krvácení z dělohy
c) hypertonus děložní
d) bradykardie matky
117. Střední a těžkou abrupci placenty řešíme vždy
a) obratem a extrakcí
b) okamžitým porodem
c) aplikací fibrinogenu a náhradních roztoků
d) aplikací Dextranu (podle ztráty krve)
118. Podání uterolytik při abrupci placenty
a) je možné
b) je kontraindikované
c) je možné pouze u těžších forem
d) je nutné
119. Plod je při předčasném odlučování placenty ohrožen hlavně
a) sérologickým konfliktem
b) vykrvácením
c) akutní hypoxii
d) nezralostí
120. Frekvence příčné polohy u donošeného ploduje
a) 5-10%
b) O,3-O,5%
c) 1-2%
d) 5%
121. Příčnou polohu nejlépe diagnostikujeme
a) amnioskopií
b) zevním vyšetřením
c) vnitřním vyšetřením
d) ultrazvukem
122. Porod živého plodu v poloze příčné vedeme
a) císařským řezem
b) pomocí zevního obratu spontánně
c) obratem vnitřními hmaty a extrakcí
d) spontánně, pokud je hřbet plodu dolů (dorsoinferiore)
123. Přední asynklitismus (obliquitas Naegele) znamená
a) hlavička vstupuje švem šípovým v druhém šikmém průměru
b) hlavička naléhá zadní parietální kostí
c) hlavička vstupuje do pánve švem šípovým blíže ke sponě stydké
d) hlavička vstupuje švem šípovým blíže к promontoriu
124. Porucha v odlučování placenty je způsobena nejčastěji
a) málo vydatnými kontrakcemi
b) spazmem branky
c) malou retrakcí
d) hyperaktivitou děložní
125. Zadní asynklitismus značí
a) šev šípový je blíž к symfýze
b) hlavička vstupuje se švem šípovým v druhém šikmém průměru
c) šev šípový je blíže promontoria
d) šev šípový je centrálně
126. U vysokého přímého stavu
a) hlavička prochází pánví bez rotace
b) hlavička je vysoko nad vchodem a není flektována
c) hlavička vstupuje do vchodu pánevního se švem šípovým v přímém průměru
d) hlavička je vysoko nad vchodem
127. Abnormální rotace hlavičky při porodu záhlavím znamená
a) při vnitřní rotaci se otáčí záhlavím ke sponě
b) při vnitřní rotaci se otáčí záhlaví do vyhloubení kosti křížové
c) hlavička vstupuje do pánve švem šípovým v přímém průměru
d) nedochází к vnitřní rotaci hlavičky
128. U hlubokého příčného stavu
a) hlavička neprovede na dně pánevním vnitřní rotaci
b) hlavička se při vnitřní rotaci otočí záhlavím к symfyze
c) hlavička nevstupuje do pánve
d) hlavička se při vnitřní rotaci otočí záhlavím do vyhloubení kosti křížové
129. Porucha v odlučování placenty u placenta adherens je způsobena
a) hypertrofickými uteroplacentámími septy
b) hypoaktivitou děložní
c) spazmem branky po porodu
d) uložením placenty v oblasti jizvy po předchozím císařském řezu
130. Při deflexních polohách není nikdy vedoucím bodem
a) velká fontanela
b) malá fontanela
c) čelo
d) obličej
131. Placenta accreta je charakterizována takto
a) fixační klky prorůstají až ke svalovině
b) klky prorůstají celou děložní stěnou
c) hypertrofickými uteroplacentámími septy
d) ani jedna charakteristika neodpovídá pravdě
132. Placenta increta je charakterizována takto
a) fixační klky prorůstají až do hloubky svaloviny
b) hypertrofickými uteroplacentámími septy
c) fixační klky prorůstají celou děložní stěnou
d) patologicky změněnými kotyledony
133. Z deflexních poloh má nejhorší prognózu spontánního porodu
a) čelní poloha
b) obličejová poloha
c) poloha záhlavím
d) temenní poloha
134. Při aktivním vedení III. doby porodní při poloze plodu hlavičkou aplikujeme uterotonika
a) po porodu hlavičky
b) po podvázání pupečníku
c) po porodu ramének
d) po porodu celého plodu
135. Placenta adherens zasahuje svými klky
a) do decidua basalis - pars spongiosa
b) pars spongiosa
c) do myometria
d) do decidua basalis - pars compacta
136. Placenta percreta zasahuje svými klky
a) do myometria
b) přes serózu
c) do decidua basalis
d) pod serózou
137. Placentu adherens vybavujeme
a) manuálně, rukou zavedenou do dutiny děložní
b) pomocí vakuumexhaustoru
c) Bummovou kyretou
d) pomocí Credého hmatu
138. Který stav neznamená poruchu nidace plodového vejce
a) placenta praevia marginalis
b) placenta incarcerata
c) placenta increta
d) placenta adherens
139. Inkarcerace placenty může nastat při
a) konstrikci svaloviny v oblasti vnitřní branky
b) předávkováni uterotonik
c) forsírované expresi
d) všechny odpovědi jsou správné
140. Jak dlouho čekáme po porodu plodu na porod placenty
a) 60 minut, pokud rodička nekrvácí a není febrilní
b) 10 minut
c) podle krevní ztráty a stavu rodičky - nejdéle 30 minut
d) 120 minut
141. Při zjištění inkarcerace placenty
a) podáme námelová uterotonika, intramuskulámě
b) podáme spazmolytika intravenózně
c) vybavíme placentu tahem za pupečník
d) provedeme Credého hmat
142. Při diagnóze placenta accreta provádíme nejčastěji
a) hysterektomii
b) manuální vybavení s ponecháním vrostlých klků in situ
c) manuální vybavení s následnou revizí Bummovou kyretou
d) podvážeme pupečník nakrátko a placentu ponecháme in situ
143. К zamezení většího krvácení po porodu placenty je třeba
a) dobré kontrakční schopnosti myometria
b) dobré retrakce děložní
c) dobré trombotizace cév děložních
d) všechny odpovědi jsou správné
144. Hysterektomii nejsme nuceni provést v případě
a) placenta increta
b) placenta adherens
c) placenta percreta
d) placenta accreta
145. Pro diseminovanou intravaskulární koagulopatii je typické
a) zkrácení času u trombinového testu
b) zkrácení času u Quickova testu
c) nadměrná tvorba trombinu a faktoru X v krevním oběhu
d) vzestup počtu trombocytů
146. Děložní hypoaktivita není charakterizována
a) krátce trvajícími kontrakcemi
b) překotným porodem
c) slabými kontrakcemi (pod 25 kPa)
d) málo častými kontrakcemi (méně než 2 za 10 minut)
147. Sekundárně slabá děložní činnost znamená oslabenou činnost dělohy
a) po primárně slabé děložní činnosti
b) vedoucí к překotnému porodu
c) po původně normální porodní činnosti
d) po vypuzení placenty
148. Důsledkem hyperaktivity dělohy není
a) riziko hypoxie plodu
b) riziko snížené látkové výměny v placentě
c) zlepšená uteroplacentámí perfúze
d) riziko kraniálního krvácení plodu
149. Hypertonní motilita dělohy (děložní hypertonus) je typická pro
a) polohu příčnou
b) myomatózní dělohu
c) předčasné odlučování lůžka
d) placenta praevia
150. Partus precipitatus znamená
a) porod předhlavím
b) předčasný porod
c) překotný porod
d) porodní »poslíčky«
151. Dystokia cervicocorporalis je
a) rigidita cervixu
b) porucha souhry kontrakční činnosti těla a hrdla uteru
c) synonymum pro Bandlovu rýhu
d) opožděný porod placenty při poruše kontrakce a retrakce dělohy
152. Rigidita colli uteri vzniká v důsledku
a) anatomických změn
b) špatné medikace intra partům
c) uskřinutí hrdla
d) špatného CTG monitorování
153. Spazmus colli uteri vzniká v důsledku
a) funkčních změn stavu hrdla děložního
b) špatného CTG monitorování
c) provedení amnioskopie před porodem
d) anatomických změn
154. Terapie děložního hypertonu se během porodu provádí
a) CTG
b) oxytocinem
c) ergometrinem
d) tokolytikem
155. Inkarcerace placenty může nastat při
a) konstrikci svaloviny v oblasti vnitřní branky
b) při předávkování uterotonik
c) forsírované expresi
d) všechny odpovědi jsou správné
156. Carunculae myrtiformesjsou
a) drobné uzlíky v jizvě po sutuře epiziotomie, které mají původ v granulomech vytvořených kolem jednotlivých stehů
b) věnec drobných hemoroidálních uzlíků, který pozorujeme první 3 dny po porodu
c) infekčního virového původu
d) laločnaté výrůstky zbylé z hymenu následkem porodu
157. Trhliny hráze při porodu vznikají
a) nejčastěji předčasnou deflexí hlavičky při porodu přes hráz
b) vždy, když neprovedeme epiziotomii
c) jen u primipar
d) jen u hrází, které jsou příliš vysoké
158. Trhlina hráze II. stupně zahrnuje poškozenou
a) kůži, sliznici, fascii a svalstvo
b) kůži a sliznici
c) kůži, sliznici, fascii a svalstvo, s výjimkou m. perinei profundus
d) kůži, sliznici, fascii, svalstvo hráze a vlákna m. sphincter ani
159. Zasáhne-li trhlina hráze i sliznici rekta, jedná se
a) inkompletní rupturu III. stupně
b) colporrhexis
c) kompletní rupturu III. stupně
d) centrální rupturu
160. Při poranění hráze spolu s poraněním svěrače konečníku
a) ošetříme hráz i konečník bezodkladně a založíme kolostomii
b) ošetříme hráz, suturu svěrače odložíme po šestinedělí
c) ošetříme hráz i konečník bezodkladně
d) suturu takového poranění svěříme chirurgovi - proktologovi
161. Colpaporrhexis
a) je tangenciální hluboká trhlina pochvy
b) je cirkulární odtržení pochvy od děložního hrdla
c) je cirkulární odtržení pochvy od poševního intrositu
d) je paravaginální hematom
162. Pro rupturu dělohy není charakteristické
a) zesílení kontrakcí
b) plod obvykle umírá
c) náhlá prudká bolest v břiše
d) děložní kontrakce náhle ustanou
163. Placenta percreta je charakterizována
a) fixačními klky prorůstajícími celou děložní stěnou
b) klky prorůstajícími pouze do hloubky děložní svaloviny
c) fixačními klky prorůstajícími ke svalovině
d) hypertrofickými uteroplacentámími septy
164. Bandlova rýha
a) rýha, kterou hmatáme při vaginálním vyšetření u polohy koncem pánevním mezi hýžděmi
b) se objevuje bezprostředně po proběhlé ruptuře děložní jako rozhraní mezi retrahovanou dělohou a plodem, který vyputoval do břišní dutiny
c) se objevuje na hranici aktivní a pasivní části dělohy při hrozící ruptuře dělohy
d) je zářez mezi hlavičkou a raménkem plodu
165. Nález vcestného lůžka ve 20 týdnu gravidity vyžaduje
a) opakování ultrazvukového vyšetření za několik týdnů i při asymptomatickém průběhu
b) ukončení těhotenství, jen pokud těhotná již v této době slabě krvácí
c) ukončení těhotenství z indikace matky i při asymptomatickém průběhu
d) hospitalizace do konce těhotenství
166. Příčinou předčasného porodu není
a) makrosomia plodu
b) inkompetence hrdla
c) malformace plodu
d) předčasný odtok vody plodové
167. Ke krvácení za porodu predisponují tyto stavy, výjimkou je
a) porod koncem pánevním
b) placenta praevia
c) placenta accreta
d) abrubce placenty
168. Stavy, které mohou predisponovat ke krvácení v těhotenství
a) Rh inkompatibilita
b) mola hydatidosa
c) diabetes mellitus
d) EPH gestóza
169. Ke krvácení za porodu mohou vést tyto stavy, výjimkou je
a) prolaps pupečníku
b) těžká preeklampsie
c) nadměrná distenze dělohy
d) eklampsie
170. Ke krvácení v III době porodní mohou vést tyto stavy, výjimkou je
a) mnohočetné těhotenství
b) Rh inkompatibilita
c) protrahovaný porod
d) polyhydramnion
171. Ke krvácení v III době porodní mohou vést tyto stavy s výjimkou
a) vasa praevia
b) embolie plodovou vodou
c) mrtvý plod
d) abrupce placenty
172. Placenta praevia znamená, že
a) plod je ohrožen krvácením
b) těhotná je ohrožena krvácením
c) těhotná může požádat o ukončení těhotenství ze zdravotní indikace
d) těhotná musí být hospitalizována do konce těhotenství
173. Placenta praevia marginalis znamená, že
a) placenta je umístěna v hraně děložní
b) placenta zasahuje к zevní brance
c) placenta zasahuje okrajem к vnitřní brance
d) placenta přesahuje částečně přes vnitřní branku
174. Placenta praevia totalis
a) nevylučuje spontánní porod za zvýšených bezpečnostních opatření
b) je kontraindikací císařského řezu, pokud je umístěna na přední stěně dolního děložního segmentu
c) vylučuje spontánní porod
d) vyplňuje celou dělohu
175. Placenta praevia může být diagnostikována těmito metodami s výjimkou
a) sonografie
b) rtg vyšetření
c) zevního vyšetření
d) termografie
176. Při výhřezu pupečníku při poloze podélné hlavičkou
a) provedeme obrat vnitřními hmaty a extrakci plodu
b) provedeme císařský řez
c) rodíme dále per vias naturales a monitorujeme
d) provedeme repozici pupečníku
177. Primárně slabá děložní činnost znamená oslabenou činnost dělohy
a) od doby, kdy zanikne děložní hrdlo
b) od počátku porodu
c) od doby, kdy zanikne děložní branka
d) od doby, kdy vznikne děložní branka
178. Uzurace vzniká
a) z nekrózy tkáně hrdla resp. branky eventuálně pochvy při protrahovaném porodu
b) poraněním hrdla při vyšetření
c) roztržením měkkých porodních cest
d) poškozením měkkých porodních cest operačním porodem
179. Uzurace je způsobena nejčastěji při porodu
a) hlavičkou plodu
b) koncem pánevním
c) extrakcí plodu koncem pánevním
d) při porodu per forcipem
180. Následkem uzurace je
a) pištěl
b) edém vulvy a hráze
c) sekundární hojení nástřihu branky
d) stresová inkontinence
181. V případě placenta accreta a krvácení
a) hradíme ztráty krevní transfúzí a čekáme na odloučení placenty
b) podpoříme odloučení placenty infúzí s oxytocinem
c) provedeme manuální vybavení lůžka
d) provedeme hysterektomii
182. Trhliny hrdla vznikají nejčastěji
a) u primipary
b) u sekundipary
c) u tercipary
d) u kvartipary
183. Hlavním příznakem ruptury hrdla po porodu je
a) bolest v oblasti podbřišku
b) krvácení
c) nekontrahující se děloha
d) bolest v oblasti rodidel
184. Rigidita hrdla vzniká v důsledku
a) anatomických změn
b) špatné medikace během porodu
c) spazmu děložního hrdla
d) hypoaktivity děložní
185. Trhliny děložního hrdla neošetřujeme, pokud jsou
a) menší než 1 cm a nekrvácejí
b) větší než lem
c) větší než 2 cm
d) větší než 3 cm
186. Trhliny hrdla ošetřujeme, pokud krvácejí, jsou-li
a) větší než 1 cm
b) větší než 2 cm
c) větší než 3 cm
d) vždy
187. Drobné trhliny hráze neošetřujeme, pokud jsou
a) menší než 1 cm a krvácejí
b) menší než 1 cm a nekrvácejí
c) větší nad 1 cm a nekrvácejí
d) větší nad 1 cm a krvácejí
188. Colpaporrhesis nazýváme
a) odtržení hrdla od pochvy
b) trhlinu jdoucí do pochvy
c) trhlinu poševní klenby
d) trhlinu jdoucí do parakolpia
189. Bezprostředním klinickým příznakem trhliny pochvy po porodu je
a) zánět
b) krvácení
c) bolest rodidel
d) všechny příznaky jsou přítomny
190. Trhlina děložního hrdla po porodu přecházející do dolního děložního segmentu masivně krvácejícíje indikací
a) к hysterektomii
b) к supravaginální amputaci dělohy
c) к vaginální hysterektomii
d) к podvazu arteria iliaca interna
191. Rozsáhlá trhlina pochvy vzniká nejčastěji
a) při spontánním porodu
b) klešťovém porodu
c) opakovaným častým vaginálním palpačním vyšetřením v průběhu porodu
d) při spontánním porodu koncem pánevním
192. Nejčastějším poraněním za porodu je
a) ruptura hrdla
b) ruptura pochvy
c) ruptura hráze
d) uzurace
193. Ruptura I stupně postihuje
a) kůži, podkoží, část poševní stěny
b) kůži, podkoží, svaly
c) pouze poševní stěnu
d) pouze kůži
194. Příčinou ruptury hráze nebývá
a) velký plod
b) špatné chránění hráze
c) zánět pochvy v těhotenství
d) porod koncem pánevním
195. Ruptura II stupně postihuje
a) kůži, podkoží a svaly hráze
b) kůži, podkoží, svaly a musculus sphfincter ani včetně střeva
c) pouze poševní stěnu a kůži s podkožím
d) pouze m. sphfincter ani
196. Ruptura III. stupně inkompletní postihuje
a) kůži, podkoží, svaly hráze, m. sphfincter ani
b) kůži, podkoží, svaly hráze, m. sphfincter ani a střevo
c) kůži, podkoží, svaly a poševní stěnu
d) struktury jsou porušeny bez porušení kůže
197. Ruptura kompletní III. stupně postihuje
a) kůži, podkoží, svaly hráze, m. sphincter ani a střevo
b) kůži, podkoží, svaly
c) poševní sliznici, kůži, podkoží a svaly
d) kůži, podkoží, svaly, m. sphincter ani
198. Při kompletní suture III. stupně provádíme izolovaně suturu
a) střeva, m. sphincter ani, svalů diafragma urogenitale, podkoží, kůže
b) pouze m. sfincter ani a svalů diaphragma urogenitale
c) svalů diafragma urogenitále a kůže
d) suturu neprovádíme
199. Příčinou rektovaginální píštěle je nejčastěji
a) latentm trhlina hráze
b) epiziotomie mediana
c) kompletní ruptura 1П. stupně
d) lacerace hráze
200. Incontinentia alvi je neschopnost udržet
a) stolici
b) moč
c) moč i stolici
d) žádná odpověď není správná
201. Incontinentia urinae je neschopnost udržet
a) stolici
b) moč
c) plyny
d) žádná odpověď není správná
202. Špatně zhojené trhliny hráze především
a) se podílejí na sestupu dělohy a poševních stěn
b) znemožňují pohlavní styk
c) jsou indikací vždy к provedení císařského řezu u dalšího porodu
d) mají význam pro další fertilitu
203. Nejčastější příčinou ruptury dělohy byla
a) děložní hyperaktivita
b) nepoměr mezi hlavičkou plodu a pánví
c) velký plod
d) překotný porod
204. Rupturou dělohy rozumíme porušeníjejí celistvosti v souvislosti
a) s porodem a těhotenstvím
b) s gynekologickým operačním výkonem
c) s násilným porušenímjejí stěny nástrojem
d) s rupturou hrdla
205. Nejčastěji vzniká děložní ruptura
a) v těhotenství
b) za porodu v I а II době porodní
c) za porodu ve III. době porodní
d) v šestinedělí
206. Kompletní ruptura děložní postihuje
a) celou stěnu děložní včetně perimetria
b) postihuje pouze svalovinu stěny děložní
c) vzniká v místě úponu placenty
d) vzniká v děložním rohu
207. Klasickým obrazem hrozící děložní ruptury při porodu je
a) Bandlova rýha
b) defenze
c) Pléniesův příznak
d) Rovsignův příznak
208. Nejčastější příčinou děložní ruptury dnesje
a) rozvolnění jizvy po předešlém porodu vedeném per sectionem caesaream
b) stav po opakovaných interrupcích
c) multiparita -stav po více porodech
d) malformace děložní
209. Při krvácení v průběhu III. doby porodní nejprve
a) hradíme krevní ztrátu transfúzemi
b) provedeme lysis manualis placentae
c) provedeme hysterektomii
d) vybavíme placentu instrumentálně
210. Mezi klinické příznaky hrozící ruptury nepatří
a) krvácení
b) Bandlova rýha
c) bolestivost dolního děložního segmentu
d) napjaté bolestivé oblé vazy
211. Děložní rupturu řešíme
a) laparotomií
b) dokončením porodu per vias naturales
c) léčbou šokového stavu
d) léčbou hemoperitonea
212. Komplikovanou rozsáhlou rupturu řešíme
a) prostou hysterektomii
b) supravaginální amputací dělohy
c) suturou ruptury
d) hysterektomii s adnexetomií a podvazem art. iliaca interna
213. Pro rupturu dělohy není charakteristické
a) zástava kontrakcí
b) zesílení kontrakcí
c) mrtvý plod
d) náhlá prudká bolest v břiše
214. Bandlova rýha je rýha, kterou hmatáme
a) při poloze podélné hlavičkou - záhlaví
b) při hrozící ruptuře mezi aktivní a pasivní částí dělohy
c) při vaginálním vyšetření u polohy řitní
d) po proběhlé děložní ruptuře, mezi dělohou a plodem
215. Indikací к provedení epiziotomie je
a) porod u primipary
b) porod mrtvého plodu
c) porod nezralého plodu
d) porod donošeného plodu
216. Preventivní epiziotomie na nerozvinutou hráz se provádí v případě
a) spontánního porodu
b) před porodnickou operací
c) porodu koncem pánevním
d) porodu mrtvého plodu
217. Mezi komplikace epiziotomie nepatří
a) dehiscence
b) hematom
c) zánět
d) lochiometra
218. Resutura dehiscence epiziotomie se provádí
a) ihned
b) na konci šestinedělí
c) po vyčištění spodiny dehiscence
d) nechá se hojit sekundárně
219. Příčinou děložní ruptury bývá
a) iatrogenní poškození
b) jizva na děloze
c) preeklampsie
d) kefalopelvický nepoměr
220. Mezi příznaky proběhlé ruptury dělohy nepatří
a) kontrahovaná děloha uchýlená do strany
b) palpace plodu pod stěnou břišní
c) známky hemoragického a peritoneálního šoku
d) krvácení z rodidel
221. Při medikamentózním, aktivním vedení porodu je nutné porodit placentu
a) ihned
b) do 10 minut
c) do 30 minut
d) do 1 hodiny


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
          '9. Patologický porod, komplikace za porodu, porodní poranění. I. ČÁST PREGRADUÁLNÍ',
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
