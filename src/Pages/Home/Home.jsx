import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const dispatch = useDispatch();
  const elements = useSelector(state => state.selectedOption1);
  const elements2 = useSelector(state => state.selectedOption2);
  // console.log(elements);
  // console.log(elements2);

  const handleOption1Change = event => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = event => {
    setSelectedOption2(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
    dispatch({
      type: 'ADD_OPTIONS',
      payload: { selectedOption1, selectedOption2 },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="select1">Выбери базу</label>
        <select
          id="select1"
          value={selectedOption1}
          onChange={handleOption1Change}
        >
          <option value="Klener">Klener</option>
          <option value="Olomouc">Olomouc</option>
          <option value="Živný">Živný</option>
        </select>
      </div>
      <div>
        <label htmlFor="select2">Выбери количество тестов</label>
        <select
          id="select2"
          value={selectedOption2}
          onChange={handleOption2Change}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>
      <button type="submit">Выбрать</button>
      <Link to={'/tests'}>Начать !</Link>
      <div>
        Ты выбрал -{elements},{elements2}
      </div>
    </form>
  );
};

export default Home;
