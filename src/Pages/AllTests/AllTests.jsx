// import { useState } from 'react';
// import Klener from '../../Files/Clener.json';

const AllTests = () => {
  //   const [isLoading, setIsLoading] = useState(Klener);
  //   const [allTests, setAllTests] = useState(Klener);
  //   const [allTests, setAllTests] = useState(Klener);
  //   const [allTests, setAllTests] = useState(Klener);
  //   console.log(allTests);

  const handleSubmit = event => {
    event.preventDefault();
    console.dir(event.target);
  };
  return (
    <>
      <div></div>
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
