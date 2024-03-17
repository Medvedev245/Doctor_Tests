const functions = () => {
  const text = [
    `39.1. Dlouhověkost je stáří nad
          1 a) 100 let
          1 b) 80 let
          A}{c) 90 let
            1 d) 75 let
          39.2. Progerické syndromy
          1 a) projeví se v závislosti na způsobu života
          1 b) nezahrnují Wernerův syndrom
          1 c) postihují asi 7 % obyvatel
          A}{d) jsou geneticky podmíněné
          39.3. Střední délka života (life expectancy) je
          1 a) nezávislá na pohlaví
          A}{b) delší pro ženy
          1 c) delší pro ženy nebo pro muže v různých populacích
          1 d) delší pro muže
          39.4. Akutní infarkt myokardu ve věku nad 75 let se nejméně často projevuje
          1 a) dušností
          1 b) zhoršením stability s pády
          A}{c) bolestí
            1 d) stavem zmatenosti
          39.5. Bezbolestný infarkt myokardu se ve věku nad 75 let vyskytuje přibližně
          1 a) ve 40 % případů
          1 b) v 60 % případů
          A}{c) v 80 % případů
          1 d) ve 30 % případů
          `,
  ];

  //1 возвращает вопрос и ответы сначала поменять на }{
  const parseText = text => {
    return text[0]
      .split(/\d+\.\d+\. /)
      .filter(item => item.trim())
      .map(item => {
        const [question, ...options] = item
          .split('\n')
          .map(line => line.trim());
        const optionsArray = options.map(option => option.trim());
        const newText = optionsArray
          .map(el => el.split(')').slice(1).join(')').trim())
          .filter(text => text !== ''); // Фильтруем пустые строки;
        console.log(newText);
        const answers = optionsArray.filter(elem => elem.includes('}{'));
        const newAnswer = answers.map(el =>
          el.split(')').slice(1).join(')').trim()
        );
        console.log(answers);

        return {
          question,
          answers: newText,
          book: ['Klener'], // Пример значения для поля "book"
          topic: ['Geriatrie'], // Пример значения для поля "topic"
          correctAnswers: newAnswer, // Массив с правильными ответами
        };
      });
  };

  const result = parseText(text);
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
              <div>
                "correctAnswers": ["{el.correctAnswers}"]{'},'}
              </div>
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default functions;
