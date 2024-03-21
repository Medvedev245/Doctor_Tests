// import { useState } from 'react';
// import Klener from '../../Files/Checed';
// import { Item, List } from './AllTests.styled';

// const AllTests = () => {
//   const [allTests, setAllTests] = useState(Klener);

//   const renderAnswer = (answer, isCorrect) => {
//     return isCorrect ? (
//       <span style={{ backgroundColor: '#1fa01f6f' }}>{answer}</span>
//     ) : (
//       <span>{answer}</span>
//     );
//   };

//   return (
//     <>
//       <div>
//         <List>
//           {allTests.map((test, index) => (
//             <Item key={index} style={{ marginBottom: '25px' }}>
//               <span>Вопрос</span>
//               <p>{test.question}</p>
//               <ul>
//                 {test.answers.map((answer, answerIndex) => (
//                   <li key={answerIndex}>
//                     {renderAnswer(answer, test.correctAnswers.includes(answer))}
//                   </li>
//                 ))}
//               </ul>
//             </Item>
//           ))}
//         </List>
//       </div>
//     </>
//   );
// };

// export default AllTests;
