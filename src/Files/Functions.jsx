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
  1. mendelenburgova poloha způsobuje
  a) pokles vitální kapacity plic, pokles plicní compliance poddajnost)
  b)kvýšení návratu krve z dolních končetin s nebezpečím řetížení srdce u kardiaček
  c)bvýšené nebezpečí vzduchové embolie při operačním poli nad úrovní procházející srdcem výšený nitrobřišní tlak a zvýšené nebezpečí
  d) egurgitace a aspirace
  2. Gynekologická poloha
  a) cvyšuje nitrobřišní tlak, a tím omezuje žilní návrat
  b) «zvyšuje nitrobřišní tlak, a tím stoupá i nebezpečí egurgitace
  c) nemá vliv na nitrobřišní tlak a frekvenci regurgitace (Ijomezuje pohyb bránice a ohrožuje dechovou
  d)isuficiencí hlavně obézní pacientky a pacientky s obnikční bronchopulmonální chorobou
  3. při TUR syndromu může dojít
  a) kpřetížení oběhu izotonickou tekutinou
  b) khypoosmolámímu syndromu (otrava vodou) při užití
  c) beziontové výplachové tekutiny
  d) suficiencí hlavně obézní pacientky a pacientky s obnikční bronchopulmonální chorobou

  4. Klinické příznaky TUR syndromu jsou
  a) k Hhypertenze, bradykardie
  b) kHhypotenze a porucha střevní peristaltiky
  c) zmatenost, nauzea, křeče, kóma
  d) dyspnoe, plicní otok
  5. Varovné známky před křečemi při toxické reakci  při předávkování lokálními anestetiky jsou
  a) tupý pocit na jazyku a rtech
  b) kovová pachuť v ústech
  c) ospalost, opilost, smazaná řeč
  d) svalový třes
  6. Nejčastější pozdní komplikace po subarachnoidální anestezii jsou
  a) snížená hybnost dolních končetin
  b) retence moči a postpunkční bolesti hlavy
  c) poruchy sluchu a vizu
  d) poruchy motility trávicího ústrojí
  7. Pro vzácnou komplikaci epidurální nebo subarachnoidální anestezie pro epidurální hematom svědčí
  a) bolesti v zádech nebo dolních končetinách nebo  slabost či obrna dolních končetin
  b) bolesti na hrudi, palpitace, hypotenze
  c) svalový třes, smazaná řeč
  d) porucha pasáže trávicím ústrojím trvající asil2 hodin
  8. Podezření na dehydrataci u pacienta máme  u následujících stavů
  a) průjem, střevní příprava
  b) zvracení, střevní píštěle
  c) teplota
  d) hyperglykémie
  9. Ke klinickému obrazu dehydratace patří
  a) apatie, poruchy vědomí
  b) suché sliznice
  c) tachykardie, hypotenze
  d) oligurie
  10. Hypokalémie vede
  a) к poruchám srdečního rytmu
  b) к atonii střevní a žaludeční
  c) ke svalové slabosti
  d) к hypoventilaci až zástavě dechu
  11. Konzervativní léčba akutní hyperkalémie  zahrnuje
  a) infúzní léčbu koncentrovaného roztoku glukózy a inzulínu
  b) intravenózní podání iontů kalcia
  c) alkalizaci vnitřního prostředí bikarbonátem
  d) léčbu kličkovými diuretiky (Furosemid)
  12. Varovné příznaky hemolytické potransfúzní reakce jsou
  a) pálení a bolest v průběhu žíly, do které je aplikováno
  b) sevření na hrudi, neklid, nevolnost, oprese, bolest v bedrech
  c) třesavka, teplota, studený pot, bolesti hlavy
  d) tachykardie, hypotenze, tachypnoe
13. Léčba potransfúzní hemolytické reakce zahrnuje
a) přerušení transfúze
b) volumoterapii a vazopresory
c) kortikoidy ve vysokých dávkách
d) forsírovanou diurézu s alkalizací moči
14. Pooperačně špatně tlumená bolest může vést
a) к sníženému dechovému objemu, snížené vitální kapacitě, špatné toaletě dýchacích cest a atelektázám
b) к hypertenzi a tachykardii a zvýšené srdeční práci a ischémii myokardu
c) к poruše motility trávicího ústrojí s nauzeou a zvracením a subileózním stavem
d) к retenci moči
15. Parenterálně podaný pethidin (Dolsin)
a) má střední délku účinku 2—4 hodin
b) je vhodný ke kontinuálnímu podání
c) při opakovaném podání se kumuluje jeho neurotoxický metabolit, který může vést к halucinacím, myoklonu a křečím
d) má střední délku účinku 6-8 hodin
16. Známky zástavy oběhu jsou
a) nehmatný tep na velkých cévách (a. carotis, a. femoralis)
b) bezvědomí
c) lapavé dechy či bezdeší
d) mrtvolný vzhled pacienta
17. Pooperační drobné atelektázy léčíme
a) farmakologicky (bronchodilatanciemi, mukoiytiky, inhalacemi)
b) kvalitní analgezií
c) rehabilitací dechovou (hluboké vdechy, dýchám proti odporu, poklepovou masáží)
d) proto, abychom zabránili vzniku bronchopneumonie
18. Nedostatečná pooperační analgezie způsobuje
a) neklid, nespolupráci, nespavost
b) nedostatečnou ventilaci, neschopnost odkašlat, hypoxémii
c) menší útlum a časnější rehabilitaci pacientky
d) tachykardii, hypertenzi, asymptomatickou ischémii myokardu
19. Drenáž močového měchýře u operovaných žen se provádí
a) transuretrálně Foleyovým permanentním katétrem s balónkem
b) transuretrálně polyetylenovou cévkou bez balónku
c) suprapubicky epicystostomií
d) cystoskopicky
20. Komplikací suprapubické drenáže je
a) intravezikální krvácení
b) infekce místa vpichu
c) poranění střeva
d) retence moči
21. Neodkladnou resuscitaci ve fakultní nemocnici
a) zahajujeme v případě nutnosti vždy
b) nezahajujeme při hypovolemickém šoku a intoxikaci
c) zahajujeme přivoláním anesteziologického týmu
d) nezahajujeme u pacientů s prokázaným terminálním stadiem nevyléčitelného onemocnění nebo jasnými známkami smrti (posmrtné skvrny, ztuhlost)
22. Při asystolii u dospělého člověka je indikováno podání
a) Mesocainu
b) kalcia
c) adrenalinu
d) noradrenalinu
23. První deflbrilační výboj při fibrilaci komor nebo komorové tachykardii provedeme energií při monofázické defibrilaci
a) 12 J
b) 400J
c) 200 J
d) 100 J


`;

  const answers = `
  1a,b,c,d 2b,d 3a,b,d 4a,c,d 5a,b,c,d 6b 7a 8a,b,c,d 9a,b,c,d
  10a,b,c 11a,b,c,d 12a,b,c,d 13a,b,c,d 14a,b,c,d 15a,c 16a,b,c,d 17a,b,c,d 18a,b,d 19a,b,c
  20a,b,c 21d 22c 23c
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
        topic: [
          '15. Anestezie, pooperační péče a základy resuscitace. II. ČÁST POSTGRADUÁLNÍ',
        ],
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
