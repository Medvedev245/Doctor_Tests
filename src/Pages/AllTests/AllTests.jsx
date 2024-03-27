// import { useState } from 'react';
// import Klener from '../../Files/Checed';
// import { Item, List } from './AllTests.styled';
// import Legislativa from '../../Files/Legislativa_Báze_2023.json';
// import Functions from 'Files/Functions';

// const AllTests = () => {
//   const [allTests, setAllTests] = useState(Legislativa);

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
//             <Item key={index} style={{ marginBottom: '70px' }}>
//               <span>Вопрос</span>
//               <p>{test.question}</p>
//               <ul>
//                 {test.answers.map((answer, answerIndex) => (
//                   <li key={answerIndex}>
//                     {renderAnswer(answer, test.correctAnswers.includes(answer))}
//                   </li>
//                 ))}
//                 <p>{test.description}</p>
//                 <ul>
//                   {test.img.map(image => {
//                     return (
//                       <li>
//                         <img
//                           src={image}
//                           alt="myPhoto"
//                           width={150}
//                           height={150}
//                         />
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </ul>
//             </Item>
//           ))}
//         </List>
//       </div>
//       <Functions></Functions>
//     </>
//   );
// };

// export default AllTests;
