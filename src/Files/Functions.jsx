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
  1. Část děložní stěny, kterou není možno při ultrazvukovém vyšetřen' rozpoznat,je
  a) endometrium
  b) myometrium
  c) seriózní blána
  d) všechny je možné rozpoznat
  2. Peritoneum, které kryje zadní děložní stěnu a přechází na dně pánve na zadní pánevní stěnu, vytváří prostor, který nazýváme
  a) Douglasův prostor
  b) vezikouterinní prostor
  c) rektouterinní prostor
  d) fossa ischiorectalis
  3. К UZ vyšetřen' přichází žena s pravidelnými menses, B-hCG je negativní, vpravo od dělohy se zobrazuje nehomogenní, nepravidelný útvar o velikosti 70 mm; diferenciálně diagnosticky je z uvedených možností třeba pomýšlet na
  a) prostou cystu ovaria
  b) benigní ovariální tumor
  c) maligní ovariální tumor
  d) všechny možnosti jsou správné
  4. Dopplerovské zhodnocení ovariálního tumoru nejčastěji vykazuje
  a) nízký pulsatilní index
  b) vysoký index rezistence
  c) zvýšený diastolický průtok
  d) chybění toku
5. Dopplerovské zhodnocení torze ovarií většinou vykazuje
a) nízký pulsatilní index
b) vysoký index rezistence
c) zvýšený diastolický průtok
d) chybění toku
6. Podezření na karcinom endometria může budit v ultrazvukovém obraze nález
a) vyšší nehomogenní sliznice neostře ohraničené proti myometriu v období premenopauzy
b) vyšší nehomogenní sliznice ostře ohraničené proti myometriu v období postmenopauzy
c) sliznice, která vytváří obraz dvou souběžných linií
d) sliznice, která vytváří obraz tří souběžných linií
7. Přijde-li žena к ultrazvukovému vyšetření pro amenoreu a v dutině děložníje patrná vysoká sliznice děložní s hypoechogenní kavitací uvnitř, pomýšlíme na možnost
a) cysty ovaria
b) mimoděložního těhotenství
c) začínajícího nitroděložního těhotenství
d) všechny možnosti jsou správné
8. Přijde-li к ultrazvukovému vyšetření žena s amenoreou a hodnota B-hCG je 500 TU/1, pátráme v ultrazvukovém obraze po
a) extrauterinní graviditě
b) intrauterinní graviditě
c) cystě ovaria
d) všechny možnosti jsou správné
9. Incipientní intrauterinní graviditu od gravidity extrauterinní pomáhá při ultrazvukovém vyšetření dělohy odlišit nález
a) hyperechogenního lemu kolem kavitace uvnitř vysoké homogenní sliznice
b) hypoechogenního lemu kolem kavitace uvnitř nehomogenní kavitace
c) přítomnost embryonálního pólu s patrnou srdeční akcí uvnitř gestačního váčku
d) nepřítomnost embryonálního pólu uvnitř kavitace
10. Přijde-li к ultrazvukovému vyšetření žena s amenoreou, B-hCG je pozitivní, v dutině děložníje patrná hypoechogenní kavitace, pomýšlíme na možnost
a) intrauterinní gravidity
b) extrauterinní gravidity
c) cysty ovaria
d) všechny možnosti jsou správné
11. Podle tvaru rozeznáváme tyto druhy ultrazvukových sond
a) lineární
b) konvexní
c) sektorové
d) konkávní
12. V dětské gynekologii provádíme nejčastěji tyto typy ultrazvukových vyšetření
a) transvaginální
b) transabdominální
c) transperineální
d) všechna výše uvedená
13. Které tvrzeníje správné
a) amniochoriální disociace ve 14 týdnu je fyziologická
b) amniochoriální disociace v 10 týdnu by neměla být patrná
c) amniochoriální disociace ve 13 týdnu by něměla být patrná
d) nález amniochoriální disociace ve 14 týdnu může být spojen s pozdějším nálezem strukturální či chromosomové aberace plodu
14. Amniochoriální disociace by neměla být patrná
a) v 10 týdnu gravidity
b) 11 týdnu gravidity
c) ve 12 týdnu gravidity
d) ve 13 týdnu gravidity
15. Známkou vitality embrya v ultrazvukovém obraze při vyšetření v 6 týdnu je
a) pulzace septum primům
b) akce primitivního srdce
c) pulzace žloutkového váčku
d) pulzace gestačního váčku
16. Mezi známky vitality embrya řadíme v 9 týdnu
a) přítomnost pohybů plodu
b) přítomnost srdeční akce
c) přítomnost žloutkového váčku
d) všechny možnosti jsou správné
17. Při UZ vyšetření malé pánve se zobrazuje vícekomorový cystický útvar vedle dělohy o průměru asi 95mm; pro maligní původ by mohl svědčit nález
a) prominencí do lumen jednotlivých cyst, navíc septa jsou nestejně silná
b) nepřítomnosti většího množství volné tekutiny v malé pánvi
c) zvýšené nepravidelné vaskularizace v solidní části tumoru
d) přítomnosti většího množství volné tekutiny v malé pánvi
18. Nuchální translucenci je potřeba diferenciálně diagnosticky odlišit od
a) amnia
b) choria
c) cystického hygromu plodu
d) všechny možnosti jsou správné

  `;

  const answers = `
  1c 2a,c 3b,c 4a,c 5b,d 6a,b 7b,c 8a,b 9a,c
  10a,b 11a,b,c 12b,c 13c,d 14d 15a,b 16a,b 17a,c,d 18a,c
  
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
        topic: ['4. L ltrasonografie v gynekologii. II. ČÁST POSTGRADUÁLNÍ'],
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
