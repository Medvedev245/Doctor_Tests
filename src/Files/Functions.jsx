const Functions = () => {
  // Пример использования функции

  //Legislativa

  //   function parseTextToQuestions(text) {
  //   const questions = [];

  //     // Разделяем текст на отдельные блоки вопросов
  //     const questionBlocks = text.split(/\n\n/);

  //     // Проходимся по каждому блоку
  //     questionBlocks.forEach(block => {
  //       // Ищем номер вопроса и сам вопрос
  //       const questionMatch = block.match(/^\s*(\d+\..+?)\n/);
  //       if (questionMatch) {
  //         const question = questionMatch[1].trim();
  //   const questionObj = {
  //     question: question,
  //     answers: [],
  //     book: ['Base_2023_medicine'],
  //     topic: ['Base_2023_medicine'],
  //     correctAnswers: [],
  //     description: [], // Изменено на пустой массив для description
  //     img: [''],
  //   };

  //         // Ищем ответы на вопрос
  //         const answerMatches = block.match(/^\s*([+-].+?)\s*(?:✅)?$/gm);
  //         if (answerMatches) {
  //           answerMatches.forEach(answerMatch => {
  //             const trimmedAnswer = answerMatch.trim();
  //             questionObj.answers.push(trimmedAnswer);
  //             if (trimmedAnswer.startsWith('+')) {
  //               questionObj.correctAnswers.push(trimmedAnswer);
  //             }
  //           });
  //         }

  //         // Ищем описание вопроса
  //         const descriptionMatches = block.match(/\[(.+?)\]/g);
  //         if (descriptionMatches) {
  //           const descriptions = descriptionMatches.map(desc =>
  //             desc.slice(1, -1)
  //           );
  //           questionObj.description = descriptions;
  //         }

  //         questions.push(questionObj);
  //       }
  //     });

  //     return questions;
  //   }

  //   const result = parseTextToQuestions(text);
  //   console.log(result);

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
  const text = `
  1. Konstrukce kombinované hormonální kontracepce může být
  a) jednofázová
  b) dvoufázová
  c) třífázová
  d) kombifázová
  2. Antiandrogenní účinek nemá
  a) cyproteron-acetát
  b) dienogest
  c) norgestimát
  d) levonorgestrel
  3. Částečně estrogenní aktivitu nemá
  a) gestoden
  b) dienogest
  c) norethisteron
  d) lynestrenol
  4. Širokospektrá antibiotika mohou snížit spolehlivost hormonální kontracepce v důsledku
  a) omezení vstřebávání při změně střevní flóry
  b) natriuretického efektu
  c) opakovaného zvracení při nevolnosti
  d) zvýšení aktivity jatemích enzymů
  5. Uživatelky kombinované hormonální kontracepce mají ve srovnání s ženami, které užívají bariérovou antikoncepci
  a) vyšší riziko mimoděložního těhotenství
  b) nižší riziko mimoděložního těhotenství
  c) nižší riziko funkčních ovariálních cyst
  d) vyšší riziko funkčních ovariálních cyst
  6. Přípravky kombinované hormonální kontracepce snižují riziko
  a) ovariálních koetánních teratomů
  b) serózních kystadenomů ovaria
  c) korpusluteálních ovariálních cyst
  d) folikulámích ovariálních cyst
  7. Přípravky kombinované hormonální kontracepce lze využít v léčbě
  a) dysmenorey
  b) katameniální epilepsie
  c) karcinomu endometria
  d) premenstruálního syndromu
  8. Užívání kombinované hormonální kontracepce může způsobit
  a) manifestaci akné
  b) zlepšení akné
  c) zvýšenou pigmentaci kůže
  d) zvýšenou fotosenzitivitu kůže

9. Riziko tromboembolické nemoci při užívání kombinované hormonální kontracepce
a) je nejnižší během prvních tří měsíců užívání
b) je nejvyšší během prvních tří měsíců užívání
c) postupně se snižuje s celkovou dobou užívání
d) postupně se zvyšuje s celkovou dobou užívání
10. Riziko tromboembolické nemoci při užívání kombinované hormonální antikoncepce je závislé na
a) konstrukci přípravku
b) dávce estrogenů
c) zvoleném estrogenů
d) typu progestinu
11. »Leidenská mutace«
a) je jednou z vrozených trombofilních stavů
b) zvyšuje významně riziko tromboembolické nemoci
c) je relativní kontraindikací kombinované hormonální kontracepce
d) je absolutní kontraindikací kombinované hormonální kontracepce
12. Riziko infarktu myokardu je při užívání kombinované hormonální antikoncepce
a) sníženo
b) sníženo, především u mladších žen s rizikem ICHS
c) zvýšeno, především u starších kuřaček
d) zvýšeno, především u starších žen s hypertenzí
13. Měření krevního tlaku u uživatelek hormonální kontracepce
a) není nutné
b) je významné především pro riziko kardiovaskulárního onemocnění
c) se provádí při každé kontrole
d) se provádí pouze u žen s hypertenzí
14. Vyšetřeníjatemích testů u uživatelek hormonální antikoncepce
a) u zdravých žen není nutné
b) se provádí jednou za rok
c) je doporučené u žen nad 35 let
d) je doporučené u žen s anamnézou jatemího onemocnění
15. Riziko karcinomu děložního čípku
a) je mírně zvýšené u uživatelek kombinované hormonální kontracepce
b) je mírně zvýšené u nositelek nitroděložního tělíska
c) je mírně zvýšené u žen, které používají pravidelně bariérovou antikoncepci
d) není ovlivněné tubámí sterilizací
16. Tůbární sterilizaci lze podle platného zákona provést u ženy
a) starší 35 let, pokud má alespoň dvě děti
b) starší 40 let
c) starší 30 let, pokud má alespoň tři děti
d) mladší 30 let, pokud má alespoň čtyři děti
17. Kombinovanou hormonální kontracepci můžeme doporučit ženě
a) s léčenou hypertenzí
b) s anamnézou hluboké žilní trombózy
c) s varixy
d) s anamnézou hepatitidy A
18. Kombinovaná hormonální kontracepce by měla být vysazena
a) při plánované cestě letadlem delší než 10 hodin
b) při plánovaném větším chirurgickém výkonu
c) při každé hospitalizaci
d) při úrazu, jehož důsledkem je dlouhodobá imobilizace
19. Významným rizikovým faktorem tromboembolické nemoci je
a) antifosfolipidový syndrom
b) rodinná anamnéza tromboembolické nemoci
c) deficit proteinu S
d) osobní anamnéza tromboembolické nemoci
20. Mezi ženské bariérové kontracepční metody patří
a) ženský kondom
b) diafragma
c) cervikální klobouček
d) vaginální houba
21. Chybění pseudomenstruačního krvácení během užívání kombinované hormonální kontracepce může být důsledkem
a) těhotenství
b) karcinomu endometria
c) porušení zpětné vazby
d) Ashermannova syndromu
22. Mezi používaná nitroděložní tělíska patří
a) tělíska z inertních plastických hmot, nemedikovaná
b) medikovaná tělíska s obsahem mědi
c) medikovaná tělíska uvolňující estrogeny
d) medikovaná tělíska uvolňující gestagen
23. Mezi relativní kontraindikace nitroděložního tělíska s gestagenem patří
a) stav po opakované léčbě ovariálních cyst
b) intolerance hypomenorey či amenorey
c) závažná onemocnění jater
d) dysfunkční děložní krvácení
24. Kombinované přípravky hormonální kontracepce mohou
a) snižovat glukózovou toleranci
b) zvyšovat glukózovou toleranci
c) snižovat periferní inzulínovou senzitivitu
d) zvyšovat periferní inzulínovou senzitivitu
25. Vyberte správné odpovědi
a) nuliparita je kontraindikací nitroděložní kontracepce
b) podmínkou použití nitroděložního tělíska u nuliparje děložní hrdlo prostupné pro zavaděč
c) z nitroděložních tělísek preferujeme u nulipar medikované tělísko uvolňující gestagen
d) jako postkoitálm kontracepci lze nitroděložní tělísko zavést do 5 dnů po nechráněném styku
26. Implantace Norplantu zabraňuje otěhotnění po dobu
a) 3 let
b) 8 let
c) 1 roku
d) 5 let
27. Mezi nekontracepční terapeutické účinky nitroděložního tělíska s levonorgestrelem nepatří vliv na
a) mastodynii
b) prekancerózy děložního hrdla
c) hyperplazii endometria
d) dysfunkční děložní krvácení
28. Při přítomnosti cervikálních dysplazií nitroděložní tělísko
a) není možno zavést vůbec
b) lze zavést po léčbě
c) lze zavést kdykoliv
d) lze zavést pouze u CIN I
29. Po zavedení nitroděložního tělíska má být jeho vzdálenost od fundu děložního nejvýše
a) lem
b) 2 cm
c) 3cm
d) 4 cm
30. Dojde-li к otěhotnění při zavedené nitroděložní kontracepci, je riziko mimoděložního těhotenství
a) obdobné jako u jiných forem kontracepce
b) zvýšené
c) zvýšené pouze v prvním roce od zavedení
d) nižší ve srovnám s jinými kontracepčními metodami
31. Mezi běžně užívané aplikační cesty gestagenní kontracepce nepatří
a) perorální
b) injekční
c) podkožní implantáty
d) transdermální
32. Nejvhodnější hormonální kontracepci pro ženy s velmi špatnou compliance je forma
a) subkutánní
b) injekční
c) perorální
d) vaginální
33. Amenorea se po roce užívání Depo-Provery objevuje
a) v 10%
b) ve 25%
c) v 50%
d) ve 100%
34. Depotní subkutánní gestagenní systém Norplant obsahuje
a) 4 silastikové kapsle
b) 6 silastikových kapslí
c) 8 silastikových kapslí
d) 12 silastikových kapslí
35. Diafragma se extrahuje z pochvy
a) 1 hodinu po styku
b) bezprostředně po styku
c) nejdříve za 6 hodin po styku
d) 24 hodin po styku
36. Kontracepční spolehlivost diafragmy zvyšuje
a) použití spermicidních prostředků
b) její nasazení po styku
c) výplach pochvy po styku
d) větší průměr diafragmy

`;

  const answers = `
  1a,b,c,d 2d 3a,b 4a,d 5b,c 6c,d 7a,b,d 8a,b,c,d 9b,c
  1Ob,d 11a,b,c 12c,d 13b,c 14a,d 15a,d 16b,c,d 17a,c,d 18b,d 19a,b,c,d
  20a,b,c,d 21a,c 22a,b,d 23a,b,c 24a,c 25b,c,d 26d 27b 28b 29b
  30b 31d 32a,b 33c 34b 35c 36a
  `;
  const correctNewAnswers = answers.split(' ');
  //   console.log(correctNewAnswers);

  function parseQuestions(text, correctNewAnswers) {
    const questionBlocks = text
      .split(/(\d+\.\s+)/)
      .filter(Boolean)
      .slice(1); // Используем filter(Boolean), чтобы удалить пустые элементы массива
    const questions = [];

    for (let i = 0; i < questionBlocks.length; i += 2) {
      const questionNumber = questionBlocks[i];

      const questionAndAnswers = questionBlocks[i + 1]
        .split('\n')
        .filter(Boolean);
      const question = questionAndAnswers[0].trim();
      const answers = questionAndAnswers.slice(1).map(answer => answer.trim());
      const newAnswers = answers.filter(answer => answer !== '');
      // console.log(newAnswers);

      let myCorrectNewAnswers = [];

      correctNewAnswers.forEach(element => {
        const letter = element.charAt(element.length - 1);
        const numberChar = element.slice(0, -1);
        const restOfQ = questionNumber.slice(0, -2);

        if (numberChar === restOfQ) {
          // console.log(newAnswers);
          for (let ans of newAnswers) {
            // console.log(ans);
            const restOfAns = ans.slice(0, 1);

            if (restOfAns === letter) {
              myCorrectNewAnswers.push(ans);
            }
          }
        }
      });

      questions.push({
        question: `${questionNumber + question}`,
        answers: newAnswers,
        book: ['Živný'], // Пример значения для поля "book"
        topic: ['11. KONTRACEPCE. II. ČÁST POSTGRADUÁLNÍ'],
        correctAnswers: myCorrectNewAnswers, // Массив с правильными ответами
      });
    }

    return questions;
  }

  const result = parseQuestions(text, correctNewAnswers);
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
              <div>"correctAnswers": ["{el.correctAnswers}"],</div>
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
