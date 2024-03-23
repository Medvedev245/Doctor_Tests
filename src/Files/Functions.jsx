const Functions = () => {
  const text = [
    `
          `,
  ];

  //

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
        // console.log(newText);
        const answers = optionsArray.filter(elem => elem.includes('}{'));
        // console.log(answers);

        const newAnswers = answers.map(el => el.replace(/^A}\{[a-z]\)\s*/, ''));
        console.log(newAnswers);

        return {
          question,
          answers: newText,
          book: ['Klener'], // Пример значения для поля "book"
          topic: ['Geriartrie'], // Пример значения для поля "topic"
          correctAnswers: newAnswers, // Массив с правильными ответами
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
                "correctAnswers": ["{el.correctAnswers.join('", "')}"]{'},'}
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
