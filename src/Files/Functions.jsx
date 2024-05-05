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
  1. Dolní děložní segment je proti hornímu ohraničen
  a) Múllerovým kontrakčním kruhem
  b) na povrchu břišní stěny Bandlovou rýhou
  c) úponem plica vesicouterina
  d) vena circularis
  2. Do prostaglandinové syntézy zasahují následující složky
  a) fosfolipidy
  b) kyselina arachidonová
  c) fosfolipáza
  d) fibronektin
  3. Při použití externí tokometrie můžeme měřit
  a) bazální tonus v děložní dutině
  b) frekvenci kontrakcí za 10 minut
  c) délku mezikontrakčního období
  d) amplitudu kontrakcí
  4. Montevidejské jednotky se propočítávají
  a) ze součtu délek trvání kontrakcí v období 10 minut
  b) ze součtu amplitud kontrakcí v lOminutovém intervalu
  c) z počtu kontrakcí za deset minut
  d) z délky trvám mezikontrakčních období za 10 minut
  5. V kterém období těhotenství před jeho ukončením jsou aplikovány kortikoidy
  a) od 26 do 32 týdne těhotenství
  b) pouze při rozvoji intraovulámí infekce
  c) od 28-34 týdne těhotenství
  d) pouze při předčasném odtoku plodové vody
  6. Pomocí intrauterinní tenzometrie měříme
  a) bazální tonus v dutině děložní
  b) amplitudu kontrakce
  c) délku trvání kontrakce a mezikontrakčního období
  d) frekvenci kontrakcí za 10 minut
  7. Krevní průtok děložní svalovinou za kontrakce se zastavuje
  a) v okamžiku, kdy intramyometriální tlak převýší intraarteriální tlak v děložních tepnách
  b) v okamžiku, kdy intramyometriální tlak převýší intravenózní tlak v děložních vénách
  c) při kompresi pupečníku
  d) žádná odpověď není správná
  8. Horní hranice normy fyziologických kontrakcí u porodů v termínu je překročena
  a) amplitudou kontrakce nad 80 mm Hg a hodnotou montevidejských jednotek (MJ) nad 300 MJ
  b) délkou mezikontrakčního období pod 30 vteřin
  c) více než počtem 5 kontrakcí za 10 minut
  d) délkou mezikontrakčního období pod 40 vteřin
  9. Jaká známe stadia předčasného porodu
  a) partus praematurus imminens
  b) partus praematurus incipiens
  c) partus praematurus progrediens
  d) rozdělení platí pouze pro potraty
  10. Jaký je rozdíl mezi prodlouženým těhotenstvím a pravým přenášením
  a) prodloužené těhotenství je údaj propočtený podle 1 dne poslední menstruace (trvám > 294 dnů), bez zřetele na skutečnou dobu koncepce
  b) pravé přenášení zohledňuje skutečné nadměrné stáří plodu, provázené růstovou retardací, kožními příznaky a nebezpečím placentámí insuficience
  c) oba termíny vyjadřují stejnou podstatu a případný rozdíl nemá klinický význam
  d) všechny odpovědi jsou nesprávné
  11. Potrat je charakterizován
  a) ukončením těhotenství před 28 týdnem
  b) u živého plodu při hmotnosti < 500 g, pokud zemře do 24 hodin
  c) u mrtvého plodu při hmotnosti < lOOOg
  d) u plodu s délkou < 30 cm
  12. Proč řešíme obličejovou polohu při normální velikosti plodu a normální pánvi císařským řezem
  a) pro nepříznivý rozměr prostupujícího obvodu
  b) pro větší porodní poranění
  c) pro nebezpečí prolongovaného porodu
  d) pro porodní nádor na obličeji plodu
  13. Které z uvedených endokrinních faktorů se podílejí na rozvoji děložních kontrakci
  a) estrogeny
  b) choriogonadotropin
  c) prostaglandiny
  d) oxytocin
  14. Které z uvedených tlakových faktorů měříme intrauterinní tenzometrií
  a) cervikokraniální tlak
  b) intrakraniální tlak
  c) intramyometriální tlak
  d) intrauterinní tlak
  15. Které faktory působí na periodické kolísání intrakraniálního tlaku při děložních kontrakcích
  a) intenzita děložních kontrakcí
  b) stupeň stlačitelnosti hlavičky plodu
  c) velikost cervikokraniálního tlaku
  d) výkyvy krevního průtoku v uteroplacentámím řečišti
  16. Čím je děloha při děložních kontrakcích kraniálně fixována
  a) sakrouterinními vazy
  b) ligamentum teres uteri
  c) ligamentum latum uteri
  d) ligamentum cardinale uteri
  17. Co patří mezi tzv. funkční diagnostiku kefalopelvického nepoměru
  a) při Pawlikově hmatu zjištěný zevní nepoměr mezi velkou částí plodu a horním okrajem stydké spony
  b) přes vydatné kontrakce hlavička nemá tendenci ke vstupu do pánve
  c) výsledky CTG vyšetření
  d) náznak počínající konformace hlavičky
  18. Kontraindikace aplikace tokolytik z řady B-mimetik
  a) dekompenzovaný diabetes mellitus
  b) předčasné odloučení lůžka
  c) ischemická srdeční choroba
  d) hypoxie plodu
  19. Při abnormální rotaci hlavičky u polohy předhlavím je vedoucím bodem
  a) oblast malé fontanely
  b) oblast velké fontanely
  c) glabela
  d) subokciput
  20. Retrakce děložní v různém stupni probíhá
  a) ve všech třech porodních dobách a v poporodním období
  b) pouze v třetí porodní době
  c) pouze v poporodním období
  d) neprobíhá v první porodní době
  21. Fyziologická poporodní hemostáza probíhá formou
  a) koagulační hemostázy
  b) parciální mechanické hemostázy
  c) krvácení se zastaví tvorbou trombů
  d) kompresí, přilehnutím a slepením cévních stěn
  22. Mezi kontraindikace epidurální analgezie nepatří
  a) koagulopatie matky
  b) alergie na lokální anestetikum
  c) deflexm polohy
  d) akutní, urgentní stavy ohrožení matky nebo plodu
  23. Při syndromu dolní duté žíly
  a) aplikujeme tokolytika
  b) urgentně ukončujeme těhotenství
  c) ukládáme ženu na bok
  d) monitorujeme ženu v polosedě
  24. Vpich jehly při epidurální analgezii se provádí obvykle v intervertebrálních štěrbinách
  a) Th,-Th12
  b) Th,-L,
  c) l,-l2
  d) Th,0-Th„
  25. Epidurální prostor bezprostředně ohraničuje
  a) ligamentum interspinatum a arachnoidea spinalis
  b) ligamentum flavum a dura mater spinalis
  c) ligamentum flavum a subarachnoideální prostor
  d) ligamentum interspinatum a dura mater spinalis
  26. Mezi metody porodní analgezie v současné době neřadíme
  a) epidurální analgezii
  b) metodu sugesce a hypnózy
  c) aplikaci rajského plynu
  d) pudendální a paracervikální analgezii
  27. Kontinuální kardiotokografické vyšetření za porodu jsme povinni provádět
  a) při každém porodu
  b) při porodu za použití epidurální analgezie
  c) při rizikovém nebo patologickém porodu
  d) při suspektním vstupním CTG vyšetření
  28. Která je prognosticky nejpříznivější varianta držení plodu při poloze koncem pánevním
  a) konec pánevní úplný
  b) konec pánevní neúplný nožkami
  c) konec pánevní neúplný řitní
  d) konec pánevní neúplný kolínky
  29. Mezi známky hypoxického ohrožení plodu za porodu patří
  a) pozdní decelerace
  b) saltatomí oscilace
  c) periodické akcelerace
  d) bradykardie plodu pod 100 tepů/min
  30. Mezi známky hypoxického ohrožení plodu za porodu nepatří
  a) variabilní decelerace
  b) undulatomí oscilace
  c) neperiodické akcelerace při pohybu plodu
  d) silentní oscilace
  31. Dolní hranice normy u hodnot pulsní oxymetrie je při delším trvání než 10 minut
  a) 50%
  b) 40%
  c) 30%
  d) 20%
  32. Mezi indikace indukce porodu nepatří
a) programovaný porod při cervix score < 7
b) diabetes mellitus
c) přání těhotné ženy bez lékařské indikace
d) obtížná dosažitelnost porodnice a nedostatečná péče o rodičku při začátku porodu
33. Jaké znáte přípustné metody pro zrání či dilataci děložního hrdla
a) intracervikální aplikace hydrofilních laminárií
b) digitální dilatace podle Delmase při rigiditě branky
c) medikamentózní intracervikální nebo vaginální aplikace prostaglandinů
d) všechny metody jsou nesprávné
34. Inkompetenci děložního hrdla ve svých začátcích nejlépe poznáme
a) při amnioskopii
b) při palpačním vyšetření
c) pomocí ultrazvukové cervikometrie
d) podle dráždivě dělohy
35. Při vaginálním předčasném porodu zahajujeme parciální tokolýzu
a) při raných deceleracích s amplitudou > 50 tepů za minutu
b) při poklesu rané decelerace pod 100 tepů za minutu
c) při zkrácení mezikontrakčního období pod 40 sekund
d) při více než třech kontrakcích za 10 minut
36. Co nepatří mezi indikace profylaktického císařského řezu u předčasného porodu
a) plod v poloze koncem pánevním s odhadem hmotnosti < 2500g
b) vícečetné těhotenství do 32. týdne těhotenství
c) všechny předčasné porody s odhadem hmotnosti < 2000g při poloze podélné hlavičkou
d) u všech případů s neúspěšnou preindukcí zralosti hrdla
37. Mezi deflekční polohy patří
a) obliquitas Litzmanni
b) obličejová poloha
c) poloha šikmá příznivá
d) poloha čelní
38. Po vaginálním porodu u ženy s císařským řezem v anamnéze provedeme
a) digitální revizi děložního hrdla
b) manuální revizi děložní dutiny
c) stačí vyšetření v zrcadlech
d) běžnou kontrolu krevních ztrát v raném šestinedělí
39. Při prodlouženém těhotenství nad 42 týden těhotenstvíje vyšší nebezpečí rozvoje
a) patologických poloh plodu
b) placentární insuficience
c) aspirace zkalené plodové vody
d) pupečníkových komplikací
40. Při péči o těhotné po prošlém porodním termínu
a) provádíme bez zřetele na porodní nález indukci porodu
b) kontrolujeme do deseti dnů 2krát týdně CTG
c) po desátém dni těhotnou hospitalizujeme a provedeme zátěžový test
d) při příznivém vaginálním nálezu porod indukujeme
41. Kdy vzniká při porodu koncem pánevním laterální flexe trupu plodu
a) při vstupu hlavičky do pánevního vchodu
b) při průchodu hýžďové části plodu pánevní úžinou a východem
c) při vnitřní rotaci ramének
d) při vnitřní rotaci hýžďové části plodu
42. Kdy nastane při porodu pánevním koncem obvykle zástava průtoku pupečníkem
a) při vstupu následné hlavičky do pánevního vchodu
b) při vnitřní rotaci hlavičky
c) při porodu inzerce pupečníku (pupku plodu) v poševním introitu
d) při vstupu hýždí do pánevního vchodu
43. Kdy provádíme při poloze plodu koncem pánevním primární císařský řez
a) při odhadu hmotnosti plodu < 2500 g a > 3500 g a při byť jen hraničně zúžené pánvi
b) při suspektním případně patologickém CTG nálezu a zvýšeném pulsatomím indexu (PI)
c) při oligohydramniu a dlouhodobě odteklé plodové vodě se vznikem pasivní apozice dělohy
d) při vysoko naléhajícím a nevstupujícím pánevním konci nebo při poloze koncem pánevním neúplné nožkami nebo kolínky
44. Kterou metodu při spontánním porodu pánevním koncem upřednostňujeme
a) metodu podle Covjanova bez manuální pomoci hlavičce
b) metodu podle Brachta
c) metodu podle Covjanova s manuální pomocí hlavičce
d) poloviční extrakci plodu s hmatem podle Mauriceaua-Levreta
45. Které jsou přípravné úkony těsně před porodem plodu v poloze koncem pánevním
a) zevní dezinfekce rodidel, zarouškování a vycévkování močového měchýře gumovou cévkou
b) pudendální blokáda a lokální infiltrace hráze, pokud rodička nemá epidurální analgezii
c) inhalace kyslíku a příprava к aplikaci oxytocinu případně Dolsinu
d) vydatná laterální epiziotomie
46. Jaký je postup při případném spazmu branky při porodu následné hlavičky
a) intravenózní aplikace oxytocinu
b) forsírovaná extrakce hlavičky hmatem podle Mauriceaua-Levreta
c) intravenózní aplikace 50mg Dolsinu nebo 0,5 mg Partussistenu
d) pokus o forceps Kjelland na následnou hlavičku

`;

  const answers = `
  1a,b,c,d 2a,b,c 3b,c 4b 5a 6a,b,c,d 7a 8a,b,c 9a,b,c
  10a,b 11b,c 12b,c,d 13a,c,d 14d 15a,b,c 16b 17a,b,d 18a,b,c 19b
  20a 21b,d 22c 23c,d 24b,c 25b 26b,c 27c,d 28c 29a,d
  30b,c 31c 32a,c 33a,c 34c 35a,b,c 36c 37b,d 38b 39b,c
40b,c,d 41b,d 42a,c 43a,b,c,d 44c 45a,b,c,d 46c
  
  
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
        topic: ['8. Spontánní porod. I. ČÁST PREGRADUÁLNÍ'],
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
