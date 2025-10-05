// Пример использования функции

// Legislativa

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

// Živný
const Functions = () => {
  // const text = `

  //  `;
  // const correctNewAnswers = answers.split(' ');
  // //   console.log(correctNewAnswers);

  // function parseQuestions(text, correctNewAnswers) {
  //   const questionBlocks = text
  //     .split(/(\d+\.\s+)/)
  //     .filter(Boolean)
  //     .slice(1); // Используем filter(Boolean), чтобы удалить пустые элементы массива
  //   const questions = [];

  //   for (let i = 0; i < questionBlocks.length; i += 2) {
  //     const questionNumber = questionBlocks[i];

  //     const questionAndAnswers = questionBlocks[i + 1]
  //       .split('\n')
  //       .filter(Boolean);
  //     const question = questionAndAnswers[0].trim();
  //     const answers = questionAndAnswers.slice(1).map(answer => answer.trim());
  //     const newAnswers = answers.filter(answer => answer !== '');
  //     // console.log(newAnswers);

  //     let myCorrectNewAnswers = [];

  //     correctNewAnswers.forEach(element => {
  //       const letter = element.charAt(element.length - 1);
  //       const numberChar = element.slice(0, -1);
  //       const restOfQ = questionNumber.slice(0, -2);

  //       if (numberChar === restOfQ) {
  //         // console.log(newAnswers);
  //         for (let ans of newAnswers) {
  //           // console.log(ans);
  //           const restOfAns = ans.slice(0, 1);

  //           if (restOfAns === letter) {
  //             myCorrectNewAnswers.push(ans);
  //           }
  //         }
  //       }
  //     });

  //     questions.push({
  //       question: `${questionNumber + question}`,
  //       answers: newAnswers,
  //       book: ['Živný'], // Пример значения для поля "book"
  //       topic: ['19. Psychosomatika v porodnictví. I.ČÁST PREGRADUÁLNÍ'],
  //       correctAnswers: myCorrectNewAnswers, // Массив с правильными ответами
  //     });
  //   }

  //   return questions;
  // }

  // const result = parseQuestions(text, correctNewAnswers);
  // console.log(result);
  const text = `
51. Perforace děložní stěny po kyretáži nejčastěji ošetříme
+ Laparoskopicky ✅
- Laparotomicky
- Vaginálně
Urgentní diagnostické výkony • podezření na děložní perforaci (sonda, sukční kanyla,
hysteroskop)
E. Kučera Katedra gynekologie a porodnictví IPVZ, Praha
Gynekologie- karel citterbart Стр 46
52. Trubicové dýchání(Бронхіальне дихання) nacházíme u (Klener)
- emfyzému
+ infiltrace plicní tkáně ✅
- pneumotoraxu
11
11. Unknown Author
6 лютого 2025 р. о 22:25:27
Бронхіальне дихання виникає
при ущільнені тканини
- zánětu průdušek
vyplnění sklípků – zánětlivý infiltrát při pneumonii, krev při plicním infarktu, nádorová tkáň…
Trubicové dýchání je slyšitelné pouze nad jugulem, horním sternem a mezi lopatkami(u
zdravých lidí)
https://www.wikiskripta.eu/w/
Vyšetření_hrudníku_(pneumologie)#:~:text=Za%20fyziologických%20okolností%20je%20nad,h
orním%20sternem%20a%20mezi%20lopatkami.
Klener vnitříní lékařství стр 271
53. Štěkavý kašel(гавкаючий) je příznakem? (barking cough)
 + akutní laryngotracheitida ✅
Laryngitida je zánět hrtanu nejčastěji vyvolaný virovou infekcí. Hlavním příznakem laryngitidy
je suchý štěkavý kašel
Klinická pediatrie, Jan Lebl - Стр 405
53а. Dítě, 3 roky, s štěkavým kašlem, lehkou dušností a nízkou horečkou bylo přijato na
oddělení. Diagnoza? 2024
 + akutní laryngotracheitida ✅
54. Nejčastější příčinou akutního inspiratorního stridoru je:
+ akutní laryngotracheitida ✅
Klinická pediatrie, Jan Lebl -92
55. Projevy akutní subglotické laryngitidy jsou: (Olomouc) - ПЕДИАТРИЯ
- dítě nikdy nekašle
+ inspirační stridor ✅
- izolovaný exspirační stridor
+ laryngeální štěkavý kašel ✅
Subglotická laryngitida (pseudokrup, stenozujicí laryngotracheitida): nahle se objeví štěkavý
kašel a inspirační stridor
Muntau, Pediatrie, str. 333
56. Izolovaná systolická hypertenze u starých osob (Klener) - КАРДИОЛОГИЯ
- je nezávažným nálezem, který není třeba léčit
- je způsobena hyperkinetickou cirkulací
+ je stejně závažným nálezem jako hypertenze systolicko-diastolická ✅
- je projevem dehydratace u hypertonika
Na základě výsledků mnoha studií je prokázáno(доведено), že s léčby vysokého krevního tlaku
maji prospech v podobě snížení kardiovaskulární morbidity a mortality i pacienti ve vyšším věku
, a to bez ohladu na to, zda trpí systolicko-diastilickou nebo izolovanou systolickou hypertenzi.
Štejfa Miloš: Kardiologie str. 555
Ізольована систолічна гіпертензія у більшості випадків розвивається внаслідок
зниження еластичності артеріальної системи. Це зазвичай спостерігається у людей
старшого віку, оскільки спостерігається підвищене відкладення кальцію та колагену на
артеріальній стінці. [6] В результаті ці жорсткі артерії-проводники призводять до
збільшення пульсового тиску та швидкості пульсової хвилі, що спричиняє підвищення
систолічного артеріального тиску та подальше зниження діастолічного артеріального
тиску. Аналогічно, хронічні захворювання, такі як вищезазначені причини вторинної
гіпертензії, можуть сприяти тому ж патологічному процесу, прискорюючи відкладення
кальцію та колагену в артеріальній системі та фіброзне ремоделювання судинних стінок
57. Jaká je léčba diabetu 2 typu u pacienta s obezitou? 😊 - ЭНДОКРИНОЛОГИЯ
- inzulin
+ metformin ✅
- deriváty sulfonylmočoviny
- glibenklamidy
Velmi výhodnou vlastnosti metforminu je, že při terapii pacienti neiklinuji(не проявляють
схильність) k nárůstu hmotnosti, naopak metformin spíše pomůže k jejímu snížení.
Švihovec Jan: Farmakologie, str. 844
58. Diagnóza Diabetes mellitus je založena na: (Olomouc) - ЭНДОКРИНОЛОГИЯ
- pouze pozitivním nálezu cukru v moči
- pouze pozitivním nálezu acetonu v moči
- pouze přítomnosti charakteristických symptomů
+ hyperglykémii nalačno (7 mmol/l a více) a/nebo náhodné(випадкова) hyperglykémii
(11,1mmol/l a více) minimálně ve 2 měřeních ✅
Diagnóza založená na lačné glykemii (2': 7,0 mmol/1) se musí opírat o výsledky alespoň dvojího
měření. Nález náhodné glykemie 2': 11,1mmolll musí být doplněn výsledkem nalačné glykemie
2': 7,0 mmol/1. Při nálezu zvýšené glykemie nalačno (5,6-6,9 mmol/1) je nutné provést oGTT.
Interna Češka str. 226
59. Čerstvě zachycený (спійманий) diabetes mellitus se projevuje: (Klener) -
ЭНДОКРИНОЛОГИЯ
- oligurií
- pyrózou
+ žízní ✅
- průjmem
Mezi klinické příznaky diabetu patří:
● polyurie
● polydypsie (osmotická diureza)
● nykturie
● hubnuti při normalní chuti k jidlu (u děti vlci hlad)
● slabost a vleka unava
● bolesti nebo křeče ve svalech
● svědení kůže, perigenitalní opruzeni, kožni hnisave infekce
● poruchy videni - zrakove ostrosti
● recidivujici mykozy
● paradentoza
● bolest břicha=pseudoperitonitida (ne potřebuje revize)
Rybka J.: Diabetus mellitus - komplikace a přidružena onemocnení
str. 29
Весна 2022: идентичный
60. Do klinického obrazu pacienta s čerstvě prokázaným diabetem NEpatří (Klener)
-ЭНДОКРИНОЛОГИЯ
- polyurie
- polydipsie
+ singultus (Škytavka) ✅
- pruritus (svedeni kůži)
Mezi klinické příznaky diabetu patří:
● polyurie
● polydypsie (osmotická diureza)
● nykturie
● hubnuti při normalní chuti k jidlu (u děti vlci hlad)
● slabost a vleka unava
● bolesti nebo křeče ve svalech
● svědení kůže, perigenitalní opruzeni, kožni hnisave infekce
● poruchy videni - zrakove ostrosti
● recidivujici mykozy
● paradentoza
● bolest břicha=pseudoperitonitida (ne potřebuje revize)
Rybka J.: Diabetus mellitus - komplikace a přidružena onemocnení
str. 29 
`;
  function parseTextToQuestions(text) {
    const questions = [];

    // Разделяем текст на отдельные блоки вопросов
    // const questionBlocks = text.split(/\n\n/);
    const questionBlocks = text.trim().split(/\n(?=\d+\.\s)/);
    console.log(questionBlocks);
    // Проходимся по каждому блоку
    questionBlocks.forEach(block => {
      // Ищем номер вопроса и сам вопрос
      const questionMatch = block.match(/^\s*(\d+\..+?)\n/);
      if (questionMatch) {
        const question = questionMatch[1].trim();
        const questionObj = {
          question: question,
          answers: [],
          book: ['Base_2025_medicine'],
          topic: ['Base_2025_medicine'],
          correctAnswers: [],
          description: [], // Изменено на пустой массив для description
          img: [''],
        };

        // Ищем ответы на вопрос
        const answerMatches = block.match(/^\s*([+-].+?)\s*(?:✅)?$/gm);
        if (answerMatches) {
          answerMatches.forEach(answerMatch => {
            const trimmedAnswer = answerMatch.trim();
            questionObj.answers.push(trimmedAnswer);
            if (trimmedAnswer.startsWith('+')) {
              questionObj.correctAnswers.push(trimmedAnswer);
            }
          });
        }

        // Ищем описание вопроса
        const descriptionMatches = block.match(/\[(.+?)\]/g);
        if (descriptionMatches) {
          const descriptions = descriptionMatches.map(desc =>
            desc.slice(1, -1)
          );
          questionObj.description = descriptions;
        }

        questions.push(questionObj);
      }
    });

    return questions;
  }

  const result = parseTextToQuestions(text);
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
