// const Functions = () => {
//   // Пример использования функции

//   //Legislativa

//   //   function parseTextToQuestions(text) {
//   //   const questions = [];

//   //     // Разделяем текст на отдельные блоки вопросов
//   //     const questionBlocks = text.split(/\n\n/);

//   //     // Проходимся по каждому блоку
//   //     questionBlocks.forEach(block => {
//   //       // Ищем номер вопроса и сам вопрос
//   //       const questionMatch = block.match(/^\s*(\d+\..+?)\n/);
//   //       if (questionMatch) {
//   //         const question = questionMatch[1].trim();
//   //   const questionObj = {
//   //     question: question,
//   //     answers: [],
//   //     book: ['Base_2023_medicine'],
//   //     topic: ['Base_2023_medicine'],
//   //     correctAnswers: [],
//   //     description: [], // Изменено на пустой массив для description
//   //     img: [''],
//   //   };

//   //         // Ищем ответы на вопрос
//   //         const answerMatches = block.match(/^\s*([+-].+?)\s*(?:✅)?$/gm);
//   //         if (answerMatches) {
//   //           answerMatches.forEach(answerMatch => {
//   //             const trimmedAnswer = answerMatch.trim();
//   //             questionObj.answers.push(trimmedAnswer);
//   //             if (trimmedAnswer.startsWith('+')) {
//   //               questionObj.correctAnswers.push(trimmedAnswer);
//   //             }
//   //           });
//   //         }

//   //         // Ищем описание вопроса
//   //         const descriptionMatches = block.match(/\[(.+?)\]/g);
//   //         if (descriptionMatches) {
//   //           const descriptions = descriptionMatches.map(desc =>
//   //             desc.slice(1, -1)
//   //           );
//   //           questionObj.description = descriptions;
//   //         }

//   //         questions.push(questionObj);
//   //       }
//   //     });

//   //     return questions;
//   //   }

//   //   const result = parseTextToQuestions(text);
//   //   console.log(result);

//   //KLENER - 1 возвращает вопрос и ответы сначала поменять на }{
//   //   const parseText = text => {
//   //     return text[0]
//   //       .split(/\d+\.\d+\. /)
//   //       .filter(item => item.trim())
//   //       .map(item => {
//   //         const [question, ...options] = item
//   //           .split('\n')
//   //           .map(line => line.trim());
//   //         const optionsArray = options.map(option => option.trim());
//   //         const newText = optionsArray
//   //           .map(el => el.split(')').slice(1).join(')').trim())
//   //           .filter(text => text !== ''); // Фильтруем пустые строки;
//   //         // console.log(newText);
//   //         const answers = optionsArray.filter(elem => elem.includes('}{'));
//   //         // console.log(answers);

//   //         const newAnswers = answers.map(el => el.replace(/^A}\{[a-z]\)\s*/, ''));
//   //         console.log(newAnswers);

//   //         return {
//   //           question,
//   //           answers: newText,
//   //           book: ['Klener'], // Пример значения для поля "book"
//   //           topic: ['Geriartrie'], // Пример значения для поля "topic"
//   //           correctAnswers: newAnswers, // Массив с правильными ответами
//   //         };
//   //       });
//   //   };
//   const text = `
//   10. Při oogenezi vzniká následující počet plnohodnotných buněk
//   a) 1
//   b) 2
//   c) 3
//   d) 4
//   11. Při spermatogenezi vzniká následující počet
//   plnohodnotných buněk
//   a) 1
//   b) 2
//   c) 3
//   d) 4

//   `;

//   function parseQuestions(text) {
//     const questionBlocks = text
//       .split(/(\d+\.\s+)/)
//       .filter(Boolean)
//       .slice(1); // Используем filter(Boolean), чтобы удалить пустые элементы массива
//     const questions = [];

//     for (let i = 0; i < questionBlocks.length; i += 2) {
//       const questionNumber = questionBlocks[i];
//       const questionAndAnswers = questionBlocks[i + 1]
//         .split('\n')
//         .filter(Boolean);
//       const question = questionAndAnswers[0].trim();
//       const answers = questionAndAnswers.slice(1).map(answer => answer.trim());
//       const newAnswers = [];
//       for (const answer of answers) {
//         if (answer !== '') {
//           console.log(answer);
//           newAnswers.push(answer);
//         }
//         // console.log(newAnswers);
//       }

//       questions.push({
//         question: questionNumber + question,
//         answers: newAnswers,
//         book: ['Živný'], // Пример значения для поля "book"
//         topic: ['SEXUÁLNÍ DIFERENCIACE A JEJÍ PORUCHY'], // Пример значения для поля "topic"
//         correctAnswers: [], // Массив с правильными ответами
//       });
//     }

//     return questions;
//   }

//   const questions = parseQuestions(text);
//   console.log(questions);

//   return (
//     <div>
//       {/* {result.length > 0 && (
//         <ul>
//           {result.map((el, index) => (
//             <li key={index} style={{ listStyle: 'none' }}>
//               <div>
//                 {'{'}"question": "{el.question}",
//               </div>

//               <div>
//                 "answers": [
//                 {el.answers.map(el => (
//                   <div>"{el}",</div>
//                 ))}
//                 ],
//               </div>
//               <div>"book": ["{el.book}"],</div>
//               <div>"topic": ["{el.topic}"],</div>
//               <div>
//                 "correctAnswers": ["{el.correctAnswers.join('", "')}"]{','}
//               </div>
//               <div>"description": ["{el.description}"],</div>
//               <div>
//                 <img src={el.img} alt="" />
//                 "img": ["{el.img}"]{'},'}
//               </div>
//               <br />
//             </li>
//           ))}
//         </ul>
//       )} */}
//     </div>
//   );
// };

// export default Functions;
