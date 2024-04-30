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
  1. Pro Kallmanův syndrom platí
  a) je to vrozená vada
  b) koncentrace gonadotropinů je zvýšená
  c) koncentrace prolaktinu je zvýšená
  d) koncentrace estrogenů je snížená
  2. Po traumatickém přerušení stopky hypofýzy
  a) stoupne koncentrace estrogenů
  b) stoupne koncentrace gonadotropinů
  c) stoupne koncentrace prolaktinu
  d) plodnost ženy není narušena
  3. Schizofrenie
  a) vzestup koncentrace prolaktinu je dobrým prediktorem účinku farmakoterapie
  b) neléčená je často provázena amenoreou
  c) v těhotenství je provázena vyšším výskytem preeklampsie
  d) je častější u žen s pozdní menarché
  4. U 181eté dívky s hmotností 40 kg a amenoreou očekáváme
  a) nízkou koncentraci FSH
  b) vysokou koncentraci LH
  c) nízkou nebo normální koncentraci prolaktinu
  d) nízkou koncentraci estrogenů
  5. Při tzv amenoree sportovkyň je
  a) zvýšená koncentrace kortizolu
  b) zvýšená koncentrace katecholestrogenů
  c) vzestup pulsní sekrece gonadoliberinu
  d) snížená koncentrace estradiolu
  6. Pacientky s Túrnerovým syndromem
  a) mají nižší inteligenci
  b) mají horší matematickou schopnost
  c) mají horší zrakovou pamět
  d) jsou častěji homosexuální
  7. V diagnóze pelvipatie (pelipatie) (pánevní bolesti bez organické patologie) je laparoskopická metoda
  a) nutná, ale nepostačující
  b) doporučená, ale ne nutná
  c) nutná a postačující
  d) zbytečná, stačí gynekologické vyšetření doplněné ultrazvukem s vaginální sondou a psychologické  vyšetření
  8. Mezi možné příčiny nevysvětlitelné pánevní bolesti patří
  a) deprese
  b) schizofrenie
  c) opakovaná hyperémie pánve při coitus interruptus
  d) endometrióza
  9. V terapii pelvipatie (pelipatie) se uplatní
  a) inhibitory zpětného vychytávání serotoninu
  b) analoga gonadoliberinu
  c) benzodiazepiny
  d) kombinovaná hormonální kontraceptiva
  10. Tzv psychogenní sterilita
  a) diagnostikuje se při normálních výsledcích somatického a laboratorního vyšetření na základě psychologického vyšetření
  b) v terapii se uplatní metody asistované reprodukce
  c) v terapii je vhodná kognitivně-racionální psychoterapie
  d) v terapii je vhodná hypnóza
  11. Předoperační úzkost
  a) u mladších žen je vyšší než u starších žen
  b) u hysterektomie je vyšší než u mastektomie
  c) u operace většího rozsahu je vyšší než u menšího výkonu
  d) u žen je vyšší než u mužů
  12. Pooperační delirium
  a) dlouhodobá prognóza kognitivní výkonnosti je špatná
  b) v terapii se uplatní haloperidol
  c) může být prvním projevem pneumonie
  d) v patogenezi je důležitý adrenergní systém
13. Posthysterektomická deprese
a) je běžnou, ale dočasnou komplikací hysterektomie
b) je jen metodologický artefakt - depresivním ženám se hysterektomie provádí častěji
c) je častější po abdominální než po vaginální operaci
d) je častější u žen s psychiatrickou anamnézou
14. Vliv hormonů na psychiku ženy je následující
a) progesteron působí antidepresivně
b) estradiol působí antidepresivně
c) progesteron působí anxiolyticky
d) testosteron snižuje libido
15. Primární dysmenorea
a) je způsobena nevědomým konfliktem s matkou, mateřskou rolí nebo nevědomou protestní reakcí proti přísnému otci
b) je způsobena zvýšenou produkcí oxytocinu
c) je způsobena zvýšenou produkcí prostaglandinů
d) je známkou anovulačního cyklu (a s nástupem ovulace mizí)
16. Která z těchto žen splňuje podmínky pro diagnózu premenstruační dysforické poruchy (ve všech případech symptomy interferují s denními aktivitami)
a) afektivní labilita, podrážděnost, špatná koncentrace, insomnie
b) afektivní labilita, podrážděnost, špatná koncentrace, insomnie, bolesti prsů
c) únava, poruchy koncentrace, bolesti prsů, přejídání, insomnie
d) úzkost, špatná koncentrace, hypersomnie, únava, nadýmání
17. V terapii premenstruačního syndromu mají ve srovnání s placebem účinek
a) progestiny
b) estrogeny
c) inhibitory zpětného vychytávání serotoninu
d) pyridoxin


  
`;

  const answers = `
  1a,d 2c 3a,b,d 4a,c,d 5a,b,d 6b,c 7c 8a,b,d 9a,d
  10b 11a,d 12b,c 13b,c,d
  14b,c 15c 16b,d 17c
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
        topic: ['20. PSYCHOSOMATIKA V GYNEKOLOGII . II. ČÁST POSTGRADUÁLNÍ'],
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
