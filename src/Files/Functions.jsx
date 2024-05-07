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
  1. Ve kterých letech byla přijata nejdůležitější zákonná ustanovení liberalizující provádění umělého ukončení těhotenství v České republice
  a) 1957
  b) 1969
  c) 1986
  d) 1991
  2. UUT je v ČR umožněno a provádění upřesněno
  a) zákonem
  b) směrnicí MZ ČR
  c) vyhláškou
  d) metodickým listem
  3. Na 100 000 UUT připadá v CR počet úmrtí žen
  a) 3
  b) méně než 1
  c) 5
  d) 2
  4. Tzv. regulace menstruace (vakuumaspirace endometria) je výkon do
  a) 35 dne cyklu
  b) 38 dne cyklu
  c) 42 dne cyklu
  d) 50 dne cyklu
  5. Při interrupci gravidity 12 týdne dilatujeme hrdlo děložní obvykle do
  a) 8-10mm
  b) 10-12mm
  c) 12-13 mm
  d) 14-15 mm
  6. Při vakuumaspiraci se používá podtlak
  a) 0,l-0,2kg/cm2
  b) 0,3-0,5 kg/cm2
  c) 0,6-0,8 kg/cm2
  d) 0,9-1,0 kg/cm2
  7. Ashermannův syndrom může být jako následek
  a) chemických vlivů
  b) vrozené změny
  c) nešetrné kyretáže
  d) zánětu
  8. Kontraindikací aplikace prostaglandinů před porodem je
a) poloha plodu jiná než hlavičkou
b) předchozí operace na děloze
c) porodnické krvácení
d) více než 5 porodů v anamnéze
9. Při intraovulární aplikaci v rámci indukce potratu ve II trimestru se v současnosti používá
a) prostaglandin E2
b) prostaglandin F2-a
c) Misopristol
d) Prostin 15 M
10. Pro diagnózu funkční inkompetence děložního hrdla je důležité
a) vaginální vyšetření
b) zhodnocení gestační anamnézy
c) trachelografie
d) vyšetření ultrazvukem
11. Důvodem pro přestřižení a vytažení stehu cerclage je
a) odtok plodové vody
b) pravidelné děložní kontrakce
c) intraovulární infekce plodu
d) preventivní zásah v termínu porodu
12. Kontraindikací cerclage je
a) infekce porodních cest
b) neprovedené genetické vyšetření
c) zjizvení děložního hrdla
d) pokračující kontrakce
13. Klasické chirurgické metody tubární sterilizace podle autorů jsou
a) sec. Pomeroy
b) sec. Jene
c) sec. Palmer
d) sec. Madlener
14. Ženská sterilizace je v ČR umožněna a provádění upřesněno
a) zákonem
b) vyhláškou
c) směrnicí MZ ČR
d) metodickým návodem
15. Při vakuumextrakci plodu nemá podtlak přesáhnout
a) 0,6kg/cm2
b) 0,2kg/cm2
c) 0,8kg/cm2
d) 0,4kg/cm2
16. Kontraindikací vakuumextrakce je
a) branka 8 cm a méně
b) obličejová poloha
c) hlavička ve vchodu, vstouplá malým oddílem
d) hlavička v úžině
17. Nejvhodnější indikací pro vakuumextrakci je
a) unavená rodička
b) silné krvácení
c) eklampsie
d) onemocnění matky (kardiopatie, neurologická onemocnění aj.)
18. Nevhodné indikace pro vakuumextrakci
a) akutní hypoxie plodu
b) nedostatečnost břišního lisu
c) hluboký příčný stav hlavičky plodu
d) abnormální rotace hlavičky
19. Průměr peloty užívané při vakuumextrakci je
a) 10-20 mm
b) 20-30mm
c) 30-60mm
d) 70-80mm
20. К uchopení děložního hrdla slouží kleště
a) Allisovy
b) Bartoňovy
c) jednozubé americké
d) Collinsovy
21. Epiziotomie se provádí při těchto vaginálních porodnických operacích
a) obrat a extrakce
b) vakuumextrakce
c) zmenšovací operace
d) klešťový porod
22. Nástřih děložní branky sešíváme obvykle
a) jednotlivými vicrylovými stehy
b) pokračujícím catgutovým stehem
c) pokračujícím silonovým stehem
d) jednotlivými catgutovými stehy
23. Z uvedených kleštíjsou nejdelší a nejkratší
a) forceps Shute
b) forceps Kjelland
c) forceps Breus
d) forceps Simpson
24. Anglický zámek mají kleště
a) forceps Shute
b) forceps Kjelland
c) forceps Breus
d) forceps Simpson
25. Pro forceps na hlavičku plodu v šíři nemůžeme použít tento typ kleští
a) Breusovy kleště
b) Shutteho kleště
c) Kjellandovy kleště
d) Simpsonovy kleště
26. Při vysokém přímém stavu hlavičky hmatáme
a) malou fontanelu pod sponou
b) pouze velkou fontanelu
c) malou fontanelu před promontoriem
d) nehmatáme žádnou fontanelu
27. Při hlubokém příčném stavu u polohy záhlavím nacházíme hlavičku plodu
a) se švem šípovým v šikmém průměru pánevního východu, malá fontanela vpravo
b) se švem šípovým v šikmém průměru pánevního východu, malá fontanela vlevo
c) se švem šípovým v příčném průměru pánevní úžiny
d) se švem šípovým v příčném průměru pánevní šíře
28. U donošeného plodu je kontraindikováno použití kleští u deflexních poloh při
a) poloze obličejové
b) poloze předhlavím
c) poloze čelní
d) všech deflexních polohách
29. Nezkřížené paralelní kleště jsou
a) forceps Simpson
b) forceps Kjelland
c) forceps Breus
d) forceps Shute
30. Které kleště jsou nejdelší
a) forceps Simpson
b) forceps Breus
c) forceps Kjelland
d) forceps Shute
31. Které kleště jsou nejstarší
a) forceps Simpson
b) forceps Breus
c) forceps Kjelland
d) forceps Shute
32. V libovolném pořadí branží lze zavádět kleště
a) forceps Simpson
b) forceps Breus
c) forceps Kjelland
d) forceps Shute
33. Vybavení hlavičky při extrakci plodu pánevním koncem se nejčastěji provádí hmatem
a) Martinovým-Wiegandovým
b) Mauriceauovým-Smelieovým
c) Fritschovým-Naujocksovým
d) Kiwischovým
34. Při hlubokém příčném stavu hlavičky lze použít tyto kleště
a) forceps Shute
b) forceps Breus
c) forceps Simpson
d) forceps Kjelland
35. Nejnovějšíjsou kleště
a) forceps Breus
b) forceps Shute
c) forceps Simpson
d) forceps Kjelland
36. Do příčných průměrů pánve se mohou nakládat pouze tyto kleště
a) forceps Kjelland
b) forceps Simpson
c) forceps Breus
d) forceps Shute
37. Největší zakřivení lžic podle hlavičky plodu mají tyto kleště
a) forceps Simpson
b) forceps Breus
c) forcpes Kjelland
d) forceps Shute
38. Buschovy háky jsou součástí
a) kleští
b) Guyonova perforatoria
c) Braunova dekapitačního háku
d) Braunova kranioklastu
39. Poranění močového měchýře vzniká nejčastěji při použití
a) forceps Shute
b) forceps Breus
c) forceps Kjelland
d) forceps Simpson
40. Nejvíce prostoru mezi vstouplými částmi plodu a pánví je
a) pod sponou
b) v příčných pánevních průměrech
c) v šikmých pánevních průměrech
d) ve vyhloubení křížové kosti
41. К porodu per forcipem slouží tyto kleště
a) Champetierovy
b) Naegeleho
c) Musseuxovy
d) Tamierovy
42. Vztyčí-li se při porodu koncem pánevním ručky, vybavuje je porodník
a) střídavě rukou stejnostrannou i opačnou
b) ručky není třeba vybavovat, netvoří překážku porodu
c) rukou opačnou, než je vztyčená ručka
d) rukou stejnostrannou s ručkou plodu
43. Možná komplikace při obratech
a) strangulace pupečníku
b) deflexní poloha hlavičky
c) ruptura dělohy
d) odloučení placenty
44. Možné poškození plodu při obratech
a) fraktura dlouhých kostí končetin
b) zevní kefalhematom
c) nervové parézy horních končetin
d) fraktura klíční kosti
45. V moderním porodnictví se provádí hmat
a) Pawlikův
b) pražský
c) obrácený pražský
d) Rubeškův
46. Návrh a techniku tzv. pražského hmatu к extrakci následné hlavičky při porodu koncem pánevním vypracoval
a) Kiwisch
b) Rubeška
c) Pawlik
d) Martin-Wiegand
47. Vztyčené ručky při extrakci plodu v poloze podélné pánevním koncem se vybavují metodou
a) Miillerovou
b) kombinovanou
c) klasickou
d) všemi uvedenými
48. Příčná suprapubická laparotomie při císařském řezu je výhodná
a) z estetického důvodu
b) je rychlejší
c) má menší krevní ztrátu
d) nevznikají kýly v jizvě
49. Nejčastější komplikací příčného suprapubického řezu při císařském řezu je
a) častější sekundární hojení
b) nedostatečná prostornost
c) vznik subfasciálního hematomu
d) větší poruchy střevní peristaltiky po operaci
50. Střední dolní laparotomie při císařském řezu se dělá
a) při původní jizvě v této lokalizaci
b) pro větší pevnost břišní stěny
c) pro menší krevní ztrátu
d) pro větší rychlost provedení
51. Český porodník Chmelík navrhl tento typ řezu na děloze při císařském řezu
a) U řez
b) obrácený T řez
c) spirální řez
d) příčný poloobloukovitý řez
52. Nejmenší riziko poranění aa. uterinae má řez na děloze při císařském řezu
a) příčný
b) U řez
c) poloobloukovitý
d) obrácený T řez
53. Frekvence smrtelných komplikací je po císařském řezu častější než celková letalita v souvislosti a těhotenstvím a porodem
a) 1 Okřát
b) 4krát
c) 3krát
d) 8krát
54. Schuchardtův řez se provádí
a) na břišní stěně při císařském řezu
b) na děloze při císařském řezu
c) na hrázi a pochvě při porodu per forcipem na hlavičku v šíři
d) při zmenšovací operaci
55. Stupeň patologické fixace placenty к děložní stěně (placenta adherens, accreta, percerta, increta) se přesně určí
a) podle klinického průběhu 1П. porodní doby
b) ultrazvukem
c) při manuálním vybavení placenty
d) histologicky
56. Spolehlivě vybavit manuální lýzou lze tento stupeň patologické fixace placenty
a) adherens
b) accreta
c) percreta
d) increta
57. Ke zmenšovací operaci mrtvého plodu neslouží
a) Sieboldovy nůžky
b) kranioklast
c) metreurynter
d) Braunův hák
58. Spirální řez a U řez na dolním děložním segmentu má výhody
a) větší prostornost pro vybavení plodu
b) je rychlejší
c) méně krvácí
d) lépe se hojí
59. Kraniotomii musíme zahájit
a) kranioklasií
b) perforací
c) extrakcí
d) excerebrací
60. Zbytky placenty se z děložní dutiny po porodu odstraňují
a) ostrou kyretou
b) Bummovou kyretou
c) manuální revizí
d) vakuumaspirac
61. Mendelsonův syndrom je komplikace
a) neonatologická
b) hematologická
c) porodnická
d) anesteziologická
62. Hmat podle Riebemonta-Dessaignese-Lepage se užívá při
a) abnormální rotaci hlavičky
b) deflexních polohách hlavičky
c) dystokii ramének
d) zaklesnutí hlaviček dvojčat
63. Zavanelliho manévr byl užíván
a) při vtlačení hlavičky do pánve
b) při vytlačení vstouplé hlavičky směrem kraniálním nad vchod pánevní
c) jako pomoc hlavičce při dokončení její rotace
d) při obratu
64. Ligatura hypogastrických cév při značném krvácení se provádí
a) v I porodní době
b) v П porodní době
c) v III porodní době
d) po porodu
65. Chirurgická plocha přední stěny rozvinutého dolního děložního segmentu má tvar
a) obdélníku napříč segmentem
b) čtverce
c) podélně situovaného obdélníku
d) romboidu
66. Tloušťka zadní stěny rozvinutého dolního děložního segmentu je v porovnání s přední stěnou
a) o 3 mm větší
b) o 3 mm menší
c) o 6 mm větší
d) stejná


  
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
          '10. Operace v souvislosti s těhotenstvím a porodem. II. ČÁST POSTGRADUÁLNÍ',
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
