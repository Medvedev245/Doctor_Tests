import { useState } from 'react';
import Klener from '../../Files/ClenerNew.json';
import Legislativa from '../../Files/Legislativa_Báze_2023.json';
import { Item, List } from './AllTests.styled';
// import Functions from 'Files/Functions';

const AllTests = () => {
  const [allTests, setAllTests] = useState(Legislativa);
  //   const [modalActive, setModalActive] = useState(false);

  const renderAnswer = (answer, isCorrect) => {
    return isCorrect ? (
      <span style={{ backgroundColor: '#1fa01f6f' }}>{answer}</span>
    ) : (
      <span>{answer}</span>
    );
  };

  const handleOption1Change = event => {
    const selectedValue = event.target.value;
    if (selectedValue === 'Legislativa_Báze_2023') {
      setAllTests(Legislativa);
    } else if (selectedValue === 'Klener') {
      setAllTests(Klener);
    }
  };

  return (
    <>
      <form action="formBase">
        <label htmlFor="formBase">Vyberte testy</label>
        <select id="formBase" onChange={handleOption1Change}>
          {/* <option value="Klener">Klener</option> */}
          <option value="Legislativa_Báze_2023">Legislativa_Báze_2023</option>
          {/* <option value="Klener">Klener</option> */}
        </select>
      </form>
      <div>
        <List>
          {allTests.map((test, index) => (
            <Item key={index} style={{ marginBottom: '70px' }}>
              <span>Вопрос</span>
              <p>{test.question}</p>
              <ul>
                {test.answers.map((answer, answerIndex) => (
                  <li key={answerIndex}>
                    {renderAnswer(answer, test.correctAnswers.includes(answer))}
                  </li>
                ))}
                {/* <p>{test.description}</p>
                <ul>
                  {test.img.map((image, idx) => {
                    return (
                      <li key={idx}>
                        <img
                          src={image}
                          alt="myPhoto"
                          width={150}
                          height={150}
                        />
                      </li>
                    );
                  })}
                </ul> */}
              </ul>
            </Item>
          ))}
        </List>
      </div>
      {/* <Functions></Functions> */}
    </>
  );
};

export default AllTests;
