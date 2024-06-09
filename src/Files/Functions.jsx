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
const Functions = () => {
  const text = `
  1. V těhotenství
  a) klesá práh vnímání bolesti
  b) prodlužuje se reakční doba
  c) klesá chuť slaného
  d) klesá chuť sladkého
  2. Pica u těhotných znamená
  a) odpor к některým speciálním pachům
  b) nutkavou chuť na kyselá jídla
  c) pojídání substancí, obvykle pokládaných za nejedlé
  d) různé změny chutě v těhotenství
  3. Nejčastější příčinou těhotenských úzkostí jsou
  a) obavy z poškození plodu
  b) hormonální změny (vzestup katecholestrogenů)
  c) obavy z ekonomických změn po porodu
  d) obavy z výchovy dítěte
  4. Benigní těhotenská encefalopatie
  a) je běžná porucha postihující zhruba polovinu těhotných žen
  b) je název specifického neurologického syndromu, který souvisí s vyšším intracerebrálním tlakem
  c) její projevy lze takřka úplně korigovat větším volním úsilím
  d) v terapii se doporučují parasympatomimetika
  5. Bonding
  a) je termín znamenající vytváření vazby matky (event, otce) a dítěte
  b) začíná už během těhotenství
  c) rozhodující pro jeho průběh je období bezprostředně následující po porodu
  d) při anamnéze perinatálního úmrtí je urychlen
  6. Syndrom Miinchhausenův by proxy v těhotenství
  a) je projevem vysokého stupně alexitymie
  b) je jiný termín pro předstírané těhotenství
  c) je název pro stav, kdy žena předstírá patologii plodu
  d) je pojmenován podle barona Prášila
  7. Couvade
  a) je synonymum pro bonding, tj. vytváření vazby rodiče a dítěte (zde z francouzštiny: couver - hnízdit)
  b) je termín pro «stavění hnízda« v posledních šesti týdnech těhotenství
  c) znamená přítomnost somatických symptomů u partnerů těhotných žen
  d) začíná obvykle ve 3-4 měsíci těhotenství
  8. Ultrazvukové vyšetření v časné graviditě
  a) urychluje rozvoj vazby matky a plodu
  b) komplikuje rozvoj vazby matky a plodu (následek toho, že plod je viditelný dřív, než žena cítí pohyby, a nemůže tak normálně proběhnout první fáze adaptace)
  c) vede к poklesu úzkosti těhotné ženy
  d) asi u 10% těhotných lze nalézt obavy z možného negativního vlivu ultrazvuku na plod
  9. Úzkost při provádění amniocentézy
  a) je zaměřena na výkon
  b) je zaměřena na výsledek
  c) je vyšší u žen vyššího věku
  d) je nejvyšší během čekání na výsledek
  10. Benzodiazepiny v těhotenství
  a) jsou absolutně kontraindikovány
  b) při dlouhodobém užívání mohou být příčinou abstinenčního syndromu novorozence
  c) příležitostné užívání ve U. а III. trimestru je bezpečné
  d) aplikace intra partům je bezpečná
  11. Při terapii deprese v těhotenství
  a) elektrošoky jsou bezpečné
  b) lithium je bezpečné
  c) tricyklická antidepresiva jsou bezpečná
  d) inhibitory zpětného vychytávání serotoninu jsou bezpečné
  12. Teratogenní účinek se může projevit při užívání
  a) fenothiazinů
  b) lithia
  c) alkoholu
  d) kokainu
  13. Riziko pro plod je vyšší
a) při kouření tabáku než při kouření marihuany
b) při příležitostném pití kávy než při příležitostném užívání benzodiazepinů
c) při terapii inhibitory monoaminooxidázy než při terapii lithiem
d) při abúzu kokainu než při abúzu heroinu
14. Kouření tabáku v těhotenství
a) snižuje výskyt mimoděložního těhotenství
b) snižuje výskyt předčasného odloučení placenty
c) snižuje výskyt preeklampsie
d) snižuje výskyt syndromu nezralých plic (RDS) novorozence
15. Kouření tabáku v těhotenství
a) zvyšuje výskyt časných potratů (do konce III. měsíce)
b) zvyšuje výskyt pozdních potratů (od IV. měsíce)
c) zvyšuje výskyt preeklampsie
d) zvyšuje výskyt novorozenecké žloutenky
16. Transdermální substituce nikotinem u těhotných kuřaček ve srovnání s kouřením
a) výskyt komplikací ze strany plodu neovlivňuje
b) výskyt komplikací ze strany plodu zvyšuje
c) výskyt komplikací ze strany plodu snižuje
d) je kontraindikována
17. Do fetálního akoholového syndromu nepatří
a) zkrácené rozšířené filtrům
b) mikrocefalie
c) hypotrofie asymetrického typu
d) dlouhé palpebrální štěrbiny
18. Abúzus kokainu v těhotenství může způsobit
a) mikrocefalii
b) intrakraniální krvácení
c) abrupci placenty
d) překotný porod
19. Při sportování v těhotenství nastává redistribuce oběhu z dělohy a splanchnické oblasti do svaloviny
a) jestliže intenzita cvičení přesahuje 20 % VO2max
b) jestliže intenzita cvičení přesahuje 35 % VO2max
c) jestliže intenzita cvičení přesahuje 50 % VO2max
d) jestliže intenzita cvičení přesahuje 65 % VO2max
20. Příznivý vliv sportování v těhotenství spočívá ve
a) zkrácení první doby porodní
b) zkrácení druhé doby porodní
c) snížení výskytu těhotenského diabetů
d) snížení výskytu preeklampsie
21. Vomitus matutinus
a) může začít i ve 3 měsíci gravidity
b) obvykle přestává do konce 4 měsíce gravidity
c) koreluje s nižší porodní hmotností
d) je provázen váhovým úbytkem těhotné ženy
22. Emesis gravidarum je častější
a) u plodů ženského pohlaví
b) u kuřaček
c) u vysokoškolaček
d) u plodů s Downovým syndromem
23. V terapii těžkých případů emesis gravidarum se uplatní
a) antihistaminika
b) trankvilizéry
c) kortikosteroidy
d) thiamin
24. U žen prenatálně exponovaných diethylstilbestrolu jsou přítomny
a) změny sexuality (vyšší výskyt homosexuality, hypolibidie)
b) nižší IQ
c) obavy z karcinomu
d) vyšší výskyt leváctví
25. O Lamazově metodě platí
a) vynalezl ji Velvovskij
b) vynalezl ji Lamaze
c) vynalezl ji Dick-Read
d) nemá jediného autora, vyvinula se časem z tradičních metod přípravy к porodu
26. Lamazova metoda
a) spočívá v nejméně 4 besedách s těhotnými
b) těhotenský tělocvik je její nedílnou součástí
c) je synonymum pro porodnickou psychoprofylaxi
d) je neslučitelná s porodnickou farmakoanalgezií
27. Na porodní bolesti se zapomíná, což je způsobeno účinkem
a) endorfinů
c) kortikosteroidů
d) ACTH
d) oxytocinu
28. Přítomnost otce u porodu v západní kultuře se prvně objevuje
a) v antice
b) v renesanci
c) ve druhé polovině 19 století
d) ve druhé polovině 20 století
29. Zavedení polohy rodičky vleže na zádech
a) souviselo s neklidem rodičky při použití klasických metod porodnické analgezie (metoda mrákotného
spánku)
b) souviselo se snazším prováděním porodnického forcepsu
c) souviselo se sexuální deviací Ludvíka XIV.
d) objevilo se kolem roku 1800
30. Mezi zásady Leboyerovy metody nepatří
a) podvaz pupečníku až poté, co dotepal
b) umístění dítěte do ošetřovacího boxu s teplotou 38 °C
c) umístění dítěte do vany s teplotou 38 °C
d) odsátí hlenů z dýchacích cest
31. Poporodní blues
a) v terapii se uplatní inhibitory zpětného vychytávání serotoninu
b) postihuje méně než 50% nedělek
c) nemá žádný klinický význam
d) typická je pro něj »suchá depresee, tj. bez pláče
32. Výskyt poporodního blues koreluje
a) s psychiatrickou anamnézou
b) s premenstruačním syndromem před otěhotněním
c) s preeklampsií
d) s nižším sociálním statutem
33. Suicidium v šestinedělí
a) je častější než u »normálních« žen (stejného věku)
b) je méně časté než u »normálních« žen, ale častější než u těhotných žen (stejného věku)
c) je méně časté než u těhotných žen (stejného věku)
d) je vzácné u zdravých nedělek, ale riziko je vysoké u žen s poporodní depresí
34. Laktační psychózy
a) souvisí s tvorbou mléka a zlepší se po zástavě laktace
b) mají obvykle specifický klinický obraz charakterizovaný amentním stavem
c) léčba se neliší od psychóz bez souvislosti s reprodukcí
d) nejčastější je deprese
35. S kojením negativně koreluje
a) vyšší vzdělání ženy
b) užití umělé výživy v prvních dnech po porodu
c) délka poporodní amenorhey
d) brzké znovuobnovení sexuálního života
36. Po perinatálním úmrtí
a) dítě matce neukazujeme vzhledem к vysokému riziku panické reakce
b) dítě matce ukazujeme jako prevenci pozdějších pocitů nereality
c) adaptace matky je snazší v případech, kdy dítě nějakou dobu žilo
d) adaptace matky je snažší v případech, kdy se dítě narodilo mrtvé
37. Při požívání alkoholu v těhotenství není známo somatické poškození plodu při dávce
a) nižší než 10 g týdně
b) nižší než 50 g týdně
c) nižší než 100 g týdně
d) nižší než 2 sklenky běžné velikosti týdně



  
`;

  const answers = `
  1b,c 2c 3c 4a,c 5a,b 6a,c 7c,d 8c 9b
  10b,c 11a,c,d 12b,c,d 13a,d 14c,d 15b 16c 17a,c,d 18a,b,c,d 19c,d
  20c 21b 22a,d 23a,c,d 24c,d 25a 26c 27d 28d 29c
  30b,d 31c 32b 33b 34c,d 35b,d 36b,c
  
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
<<<<<<< Updated upstream
        topic: ['19. Psychosomatika v porodnictví. I.ČÁST PREGRADUÁLNÍ'],
=======
        topic: ['15. Fyziologie a patologie novorozence. II.ČÁST PREGRADUÁLNÍ'],
>>>>>>> Stashed changes
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
