// const Functions = () => {
//   // Пример использования функции
//   const text = `

//   `;

//   //Legislativa

//   function parseTextToQuestions(text) {
//     const questions = [];

//     // Разделяем текст на отдельные блоки вопросов
//     const questionBlocks = text.split(/\n\n/);

//     // Проходимся по каждому блоку
//     questionBlocks.forEach(block => {
//       // Ищем номер вопроса и сам вопрос
//       const questionMatch = block.match(/^\s*(\d+\..+?)\n/);
//       if (questionMatch) {
//         const question = questionMatch[1].trim();
//         const questionObj = {
//           question: question,
//           answers: [],
//           book: ['Base_2023_medicine'],
//           topic: ['Base_2023_medicine'],
//           correctAnswers: [],
//           description: [], // Изменено на пустой массив для description
//           img: [''],
//         };

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

//   return (
//     <div>
//       {result.length > 0 && (
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
//       )}
//     </div>
//   );
// };

// export default Functions;
