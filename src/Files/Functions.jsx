const Functions = () => {
  // Пример использования функции
  const text = `
  71. Děti diabetických matek nejčastěji postiženy: 😊 
  - herniemi
  - m. Down
  + syndromem kaudální regrese ✅
  - teratomy
  

  72. U jaké komplikace u pacienta s diabetes mellitus II typu bude porušení testu tolerance k glukóze? 
  + chronická renální insuficience ✅
  - progrese srdeční insuficience
  - inzulinom
  - hypotyreóza
  + hyperkortisolismus ✅
  

  73. Diabetes insipidus centralis: 😊 - ЭНДОКРИНОЛОГИЯ
  + nedostatek antidiuretického hormonu (vazopresin) ✅
  - necitlivost ledvinové tkáně na vazopresin
  

  
  74. Centrální diabetes insipidus je působen (Klener)  - ЭНДОКРИНОЛОГИЯ
  - poruchou sekrece aldosteronu
  - necitlivostí ledvin na vazopresin 
  + deficitem vazopresinu ✅
  - primární polydipsií
  

  
  75. Nefrogenní diabetes insipidus patří mezi (Klener) - - ЭНДОКРИНОЛОГИЯ
  
  - centrální hypokortikalismy 
  - periferní hypokortikalismy 
  + receptorové nemoci ✅
  - psychosomatické nemoci
  

  
  76. Diabetická nefropatie (Klener) - ЭНДОКРИНОЛОГИЯ
  - se vyskytuje po cca 5 letech asi u 90 % diabetiků 2. typu
  - je kontraindikací zařazení do dialyzačního programu
  - je indikována k časné imunosupresívní terapii
  + se vyskytuje po cca 15 letech asi u 40 % diabetiků 1 typu ✅
  

  77. Renální biopsie u pacienta s 15letou anamnézou diabetu, proteinurií a diabetickou retinopatií (Klener) - ЭНДОКРИНОЛОГИЯ
  - je nezbytná k posouzení indikace imunosupresívní terapie
  - je indikována u všech pacientů s nefrotickým syndromem, diabetická nefropatie totiž nikdy k nefrotickému syndromu nevede
  + není nutná, jde-li o izolovanou proteinurii (bez hematurie), diagnóza diabetické nefropatie je v takovém případe pravděpodobná ✅
  - není nutná v těch případech, kdy je proteinurie provázen erytrocyturií glomerulárního původu
  

  78. Diabetická nefropatie (Klener)- ЭНДОКРИНОЛОГИЯ
  - vzniká pouze u pacientů, u kterých se ranní glykémie často dostávají nad 15 mmol/l 
  - je obvykle přítomna již v době diagnózy diabetu
  + všechny uvedené možnosti NEJSOU správné ✅
  - je obvyklou komplikací u těch diabetiků, kteří jsou léčeni perorálními antidiabetiky

  
  79. Při léčbě diabetu NEmůže dojít k hypoglykémiím po (Klener) - ЭНДОКРИНОЛОГИЯ
  - inzulinu
  + biguanidech ✅ *(metforminu) 
  - kombinované terapii inzulinem a perorálními antidiabetiky 
  - sulfonylmočovinových antidiabeticích
  

  
  80. Diabetická neuroangiopatie s žilní insuficiencí, komplikace? 😊 - ЭНДОКРИНОЛОГИЯ
  
  + rozrůstající vředy na místech největšího tlaku ✅
  

  `;

  //Legislativa

  function parseTextToQuestions(text) {
    const questions = [];

    // Разделяем текст на отдельные блоки вопросов
    const questionBlocks = text.split(/\n\n/);

    // Проходимся по каждому блоку
    questionBlocks.forEach(block => {
      // Ищем номер вопроса и сам вопрос
      const questionMatch = block.match(/^\s*(\d+\..+?)\n/);
      if (questionMatch) {
        const question = questionMatch[1].trim();
        const questionObj = {
          question: question,
          answers: [],
          book: ['Base_2023_medicine'],
          topic: ['Base_2023_medicine'],
          correctAnswers: [],
          description: [''],
          img: [''],
        };

        // Ищем ответы на вопрос
        const answerMatches = block.match(/^\s*([+-].+?)\s*(?:✅)?$/gm);
        if (answerMatches) {
          answerMatches.forEach(answerMatch => {
            const trimmedAnswer = answerMatch.trim();
            questionObj.answers.push(trimmedAnswer);
            if (trimmedAnswer.startsWith('+')) {
              questionObj.correctAnswers.push(trimmedAnswer);
            }
          });
        }

        questions.push(questionObj);
      }
    });
    console.log(questions);
    return questions;
  }

  const result = parseTextToQuestions(text);
  console.log(result);

  //KLENER - 1 возвращает вопрос и ответы сначала поменять на }{
  //   const parseText = text => {
  //     return text[0]
  //       .split(/\d+\.\d+\. /)
  //       .filter(item => item.trim())
  //       .map(item => {
  //         const [question, ...options] = item
  //           .split('\n')
  //           .map(line => line.trim());
  //         const optionsArray = options.map(option => option.trim());
  //         const newText = optionsArray
  //           .map(el => el.split(')').slice(1).join(')').trim())
  //           .filter(text => text !== ''); // Фильтруем пустые строки;
  //         // console.log(newText);
  //         const answers = optionsArray.filter(elem => elem.includes('}{'));
  //         // console.log(answers);

  //         const newAnswers = answers.map(el => el.replace(/^A}\{[a-z]\)\s*/, ''));
  //         console.log(newAnswers);

  //         return {
  //           question,
  //           answers: newText,
  //           book: ['Klener'], // Пример значения для поля "book"
  //           topic: ['Geriartrie'], // Пример значения для поля "topic"
  //           correctAnswers: newAnswers, // Массив с правильными ответами
  //         };
  //       });
  //   };

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
                "correctAnswers": ["{el.correctAnswers.join('", "')}"]{','}
              </div>
              <div>"description": ["{el.description}"],</div>
              <div>
                <img src={el.img} alt="" />
                "img": ["{el.img}"]{'},'}
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
