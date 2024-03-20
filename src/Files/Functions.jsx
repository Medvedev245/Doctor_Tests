const Functions = () => {
  const text = [
    `31.20. Po podávání spazmolytik zvláště parenterální cestou se může objevit u pacienta zejména
    A}{a) akutní retence moči
    A}{b) porucha vizu
    1 c) zhoršení dechu
    1 d) nevolnost se zvracením
    31.21. Atropin bychom neměli nikdy podat u
    1 a) chronické exacerbované bronchitidy
    1 b) městnavého srdečního selhání
    1 c) ischemické choroby dolních končetin s klaudikacemi
    A}{d) zeleného zákalu (glaukomu)
    31.22. Při chronickém podávání glukokortikoidů musíme počítat se vznikem
    A}{a) hypokaliémie
    1 b) hypersekrece HCl v žaludku
    A}{c) poruchy glukózové tolerance
    1 d) spazmu dýchacích cest
    39.38. Úbytek funkčních buněk v sinoatriálním uzlu může po 75. roce věku činit až
    1 a) 60 %
    1 b) 20 %
    A}{c) 80 %
    1 d) 40 %
    36.74. Mezi peroxisomální onemocnění patří
    A}{a) X-vázaná adrenoleukodystrofie
    A}{b) Zellwegerův (cerebrohepatorenální) syndrom
    1 c) Reyův (cerebrohepatální) syndrom
    A}{d) Refsumova nemoc

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
        // console.log(newText);
        const answers = optionsArray.filter(elem => elem.includes('}{'));
        // console.log(answers);

        const newAnswers = answers.map(el => el.replace(/^A}\{[a-z]\)\s*/, ''));
        console.log(newAnswers);

        return {
          question,
          answers: newText,
          book: ['Klener'], // Пример значения для поля "book"
          topic: ['Geriatrie'], // Пример значения для поля "topic"
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
