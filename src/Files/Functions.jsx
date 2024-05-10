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
  1. Mezi známky donošenosti patří
  a) rýhovaní plosek
  b) nevýbavný Moroův reflex
  c) uzavřená velká fontanela
  d) dobře vyvinutá chrupavka ušních boltců
  2. Co je neonatální úmrtnost
  a) mrtvorozenost a úmrtnost novorozenců do 7 dne
  b) úmrtnost novorozenců mezi 8-28 dnem
  c) úmrtnost novorozenců mezi l-28 dnem
  d) úmrtnost v 1 roce života
  3. Jakou hmotnost má hypotrofický novorozenec
  a) pod 2500 g
  b) pod 1500g
  c) pod 10 percentil odpovídající délce těhotenství
  d) pod 20 percentil odpovídající délce těhotenství
  4. Jaké onemocnění matky není absolutní kontraindikací kojení
  a) hepatitida В
  b) hepatitida C
  c) febrilie 38 °C
  d) ragády bradavek
  5. Při jaké konstelaci hrozí hemolytická nemoc novorozence
  a) matka Rh pozitivní, novorozenec Rh negativní
  b) matka krevní skupina A, novorozenec krevní skupina 0
  c) matka krevní skupina 0, novorozenec krevní skupina В
  d) matka krevní skupina 0, novorozenec krevní skupina A
  6. Jaká jsou kritéria těžké perinatální asfyxie
  a) pH z pupečníkové arterie pod 7,0 a BE pod -15
  b) Apgarové skóre v 1 minutě 3-5 bodů
  c) křeče v časném novorozeneckém období
  d) multiorgánová hypoxicko-ischemická dysfunkce
  7. Odsátí nosohltanu novorozence po porodu
  a) provádíme u všech novorozenců
  b) provádíme pouze u novorozenců nedonošených
  c) provádíme u mekoniem zkalené plodové vody
  d) může způsobit reflexní bradykardii
  8. Při kardiopulmonální resuscitaci je poměr kompresí hrudníku a vdechů
  a) 2 : 1
  b) 3 : 1
  c) 4 : 1
  d) 5 : 1
  9. Při farmakologické resuscitaci používáme
  a) adrenalin
  b) 8,4% bikarbonát
  c) fyziologický roztok
  d) Ringerův roztok
  10. Co patří mezi příznaky velké brániční kýly
  a) po porodu dyspnoe a cyanóza
  b) vpadlé člunkovité bříško
  c) zvracení
  d) žádný z výše jmenovaných příznaků
  11. Jaké mohou být následky a komplikace aspirace mekonia
  a) perzistující plicní hypertenze
  b) pneumonitida
  c) pneumotorax
  d) dyspnoe a cyanóza
  12. Co patří к příznakům diabetické fetopatie novorozence
  a) spinální ageneze
  b) zvýšený výskyt vrozených srdečních vad
  c) hyperglykémie
  d) hyperbilirubinémie
  13. Fyziologické rozmezí dechové frekvence u zdravého donošeného novorozence činí
  a) 20-40 dechů/min
  b) 40-60 dechů/min
  c) 60-80 dechů/min
  d) 80-100 dechů/min
  14. Při odsávám novorozence na porodním sále používáme odsávací podtlak
  a) 3-5 cm H20
  b) 6-8cmH,0
  c) 9-10cmH20
  d) 10-15cmH20
  15. Mezi výhody kojení patří
  a) ochrana před průjmy
  b) nižší riziko výskytu alergických onemocnění v dětském věku
  c) nižší riziko výskytu cukrovky v dětském věku
  d) nižší výskyt fenylketonurie
  16. Hypotermií jsou ohroženi hlavně novorozenci
  a) přenášení
  b) nedonošení
  c) s Rh inkompatibilitou
  d) s diabetickou fetopatií
  17. Čím může být způsobena centrální cyanóza u novorozence
a) chladovým stresem
b) srdečními vadami s levo-pravým zkratem
c) poruchami dýchání
d) perzistující plicní hypertenzí
18. Při hyperbilirubinémii ohrožuje novorozence jádrovým ikterem
a) bilirubin konjugovaný
b) bilirubin nekonjugovaný
c) bilirubin konjugovaný i nekonjugovaný
d) rozpadové produkty bilirubinu
19. Jaké symptomy má hormonální reakce novorozence, způsobená transplacentárním přestupem mateřských hormonů
a) kožní erytém
b) vaginální fluor
c) zduření prsních žláz (Halbanova reakce)
d) hyperbilirubinémii
20. U jaké vrozené vývojové vady nalézáme polyhydramnion
a) ageneze ledvin
b) hypoplazie levého srdce
c) obstrukční hydrocefalus
d) atrézie jícnu
21. Dlouhodobé podávání steroidů v perinatálním období
a) má negativní vliv na alveolarizaci plic
b) způsobuje hypoglykémii
c) může negativně ovlivnit vývoj centrálního nervového systému
d) může způsobit hyperglykémii
22. Pulsním oxymetrem měříme
a) parciální tlak kyslíku (pO2)
b) acidobazickou rovnováhu
c) saturaci hemoglobinu kyslíkem (SpO2)
d) koncentraci kyslíku v inkubátoru
23. Mezi klinické známky infekce novorozence patří
a) apnoické pauzy
b) termolabilita
c) letargie
d) žádný z výše jmenovaných příznaků
24. Aspirace mekonia u novorozence
a) vzniká vždy až po porodu
b) ve většině případů vzniká prepartálně
c) souvisí s perinatální hypoxií
d) bývá vždy spojena s vrozenou vývojovou vadou trávicího ústrojí
25. Které reflexy řadíme mezi základní novorozenecké
a) hledači a sací
b) úchopový
c) Moroův
d) optikofaciální
26. Mateřské mléko
a) má vyšší obsah bílkovin než mléko kravské
b) obsahuje sekreční imunoglobulin A
c) neobsahuje kalcium a fosfor
d) má nižší obsah bílkovin než mléko kravské
27. U galaktosémie novorozence
a) bývá hyperbilirubinémie
b) je kontraindikováno kojení
c) bývá letargie
d) ve výživě se doporučují hydrolyzáty bílkovin
28. V léčbě hyperbilirubinémie se používá
a) kontinuální fototerapie
b) intermitentní fototerapie
c) infúze glukózy
d) výměnná transfúze
29. Mezi časné formy adnátní В streptokokové infekce novorozenců patří
a) sepse
b) pneumonie
c) meningitida
d) otitida
30. Mikrocefalie donošeného novorozence má obvod hlavy (označte hraniční hodnotu)
a) pod 35 cm
b) pod 33 cm
c) pod 31 cm
d) pod 29 cm
31. V jakém rozsahu je poranění u horního typu parézy plexus brachialis (Duchenne-Erb)
a) C3-C4
b) C5-C6
c) C7-TM
d) Th2-Th3
32. Jaké jsou rizikové faktory pro vznik náhlého úmrtí kojence (SIDS)
a) ve spánku poloha na zádech
b) přehřátá místnost
c) ve spánku poloha na bříšku
d) úmrtí sourozence na SIDS
33. Kritické srdeční vady se v novorozeneckém období projevují
a) vždy šelestem
b) centrální cyanózou
c) srdečním selháním
d) vždy poruchami dýchání
34. Spontánní plášťový pneumotorax u donošeného novorozence
a) se projeví vždy cyanózou a dyspnoí
b) může být i klinicky němý
c) vyžaduje vždy zavedení hrudního sání
d) v léčbě vystačíme ve většině případů s oxygenoterapií
35. Jaké je fyziologické rozmezí leukocytů novorozence 1 den
a) 5-8 -1071
b) 9-45 109/l
c) 5-15 -109/l
d) 9-36 -1071
36. Milia jsou
a) pigmentové névy
b) typickým příznakem stafylodermie
c) retenční cystičky mazových žláz
d) drobné hemangiomy
37. Jaké léky se používají v léčbě abstinenčního syndromu novorozence u matek drogově závislých
a) Fenobarbital
b) opiová tinktura
c) Synthofyllin
d) Naloxon
38. Anhydramnion v průběhu těhotenství
a) způsobuje polohové deformity u novorozence
b) může vést к hypoplazii plic novorozence
c) je následkem hypoplazie levého srdce
d) bývá následkem ageneze ledvin
39. Jak hluboko má být zavedena endotracheální cévka u novorozence s hmotností 2000 g
a) 6cm
b) 8 cm
c) 10cm
d) 12cm
40. Mezi screeningová vyšetření novorozence patří vyšetření
a) fenylketonurie
b) hypotyreózy
c) kyčelních kloubů
d) galaktosémie
41. Mezi porodní poranění novorozence nepatří
a) fraktura klíčku
b) paréza nervus brachialis
c) caput succedaneum
d) fraktura dlouhých kostí
42. Příčinou nekonjugované hyperbilirubinémie je
a) intrahepatální cholestáza
b) Rh izoimunizace
c) zvýšená extravazální hemolýza u velkého kefalhematomu
d) 0-A izoimunizace
43. Vitamin К pro prevenci hemoragické nemoci novorozence podáváme
a) i.m.
b) i.v.
c) p.o.
d) jen nedonošeným novorozencům
44. Mezi klinické příznaky respiračních onemocnění novorozenců patří
a) periferní cyanóza
b) grunting
c) tachypnoe
d) dyspnoe
45. Co patří mezi rizikové faktory pro vznik adnátní infekce novorozence
a) předčasně odteklá plodová voda (PROM) více než 18 hodin
b) předčasný porod
c) febrilie matky 38 °C a více
d) přenášení
46. Hypoxicko-ischemickou encefalopatii hodnotíme podle skóre
a) Apgarové
b) Finneganové
c) Samata a Samatové
d) žádná z odpovědí není správná
47. Co patří mezi časté problémy nedonošených novorozenců
a) retinopatie
b) anémie
c) gastroezofageální reflux
d) leukopenie
48. Během intrauterinního vývoje bývá u plodu zkrat přes foramen ovale a tepennou dučej
a) levo-pravý
b) pravo-levý
c) bidirekční
d) žádný
49. Atrézie jícnu donošeného novorozence se po porodu projeví
a) zvýšeným sliněním
b) nemožností nasondovat žaludek
c) zvracením
d) hypoglykémií
50. Mezi úvodní kroky resuscitace nedýchajícího a cyanotického novorozence na porodním sále patří
a) zabezpečení průchodnosti dýchacích cest
b) taktilní stimulace
c) inhalace kyslíku
d) aplikace bikarbonátu

  
`;

  const answers = `
done
  
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
        topic: ['15. Fyziologie a patologie novorozence. I.ČÁST PREGRADUÁLNÍ'],
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
