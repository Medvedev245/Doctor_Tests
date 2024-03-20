// import { useState } from 'react';
// import Klener from '../../Files/Clener.json';
import Functions from '../../Files/Functions';

const AllTests = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [allTests, setAllTests] = useState('');
  //   const [allTests, setAllTests] = useState(Klener);
  //   const [allTests, setAllTests] = useState(Klener);
  //   console.log(allTests);

  const handleSubmit = event => {
    event.preventDefault();
    console.dir(event.target);
  };
  return (
    <>
      <Functions />
      {/* <div>
          <ul>
            {allTests.map((test, index) => {
              return (
                <li key={index} style={{ marginBottom: '25px' }}>
                  <span>Вопрос</span>
                  <p>{test.question}</p>
                  <ul>
                    {test.answers.map(el => {
                      <span>Ответ</span>;
                      return <li>{el}</li>;
                    })}
                  </ul>

                  <span></span>
                </li>
              );
            })}
          </ul>
        </div> */}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="base">select base</label>
          <select name="base" id="base">
            <option value="All">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div>
          <label htmlFor="topic">select base</label>
          <select name="topic" id="topic">
            <option value="All">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <button type="submit">fdvedv</button>
      </form>
      <div>AllTests</div>
    </>
  );
};

export default AllTests;
