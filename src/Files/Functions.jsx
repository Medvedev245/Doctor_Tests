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
  1. Krvácení při operaci v Retziově prostoru stavíme
  a) aplikací fibrinogenu
  b) kompresí horkou rouškou
  c) opichy
  d) elektrokoagulací
  2. Při nálezu endometriózy u 471eté pacientky volíme
  a) hysterektomii s oboustranou adnexektomii
  b) oboustrannou adnexektomii s ponecháním dělohy
  c) hysterektomii bez adnexektomie
  d) hormonální léčbu agonisty GnRH
  3. Při podezření na maligní tumor ovaria
  a) odešleme pacientku na onkochirurgické pracoviště
  b) na počátku operace odebereme výplachovou cytologu
  c) se vždy snažíme exstirpovat tumor s neporušeným pouzdrem
  d) provedeme oboustrannou adnexektomii
  4. Chceme-li při laparotomii vypreparovat ureter, hledáme jej
  a) v těsném sousedství a. uterina
  b) na zadním listu plica lata
  c) v retroperitoneu
  d) při vstupu do močového měchýře
  5. Nejčastější místo možného podvázání ureteru při  abdominální hysterektomii je
  a) při opichu lig. sacrouterinum
  b) při opichu lig. cardinale uteri
  c) při opichu a. ovarica
  d) při sutuře pochvy
  6. Zjistíte-li v průběhu operace, že došlo к podvazu ureteru,
  a) zavoláte urologa
  b) uvolníte ligaturu
  c) uložíte do ureteru stent
  d) provedete nefrostomii
  7. Dojde-li při operaci к poruše kontinuity ureteru,
  a) okamžitě ukončíte gynekologickou operaci a zavolát  urologa
  b) dokončíte gynekologickou operaci a s urologem ošetříte poranění
  c) s urologem ošetříte poraněni a pak dokončíte  gynekologickou operaci
  d) ošetříte poranění a zavoláte urologa
  8. Boariho plastika je
  a) náhrada distální části ureteru lalokem z močového měchýře
  b) náhrada distální části ureteru kličkou tenkého střeva
  c) plastika ureteru
  d) historická metoda uzavření pochvy
  9. Pozdní komplikací Burchovy kolpopexe bývá
  a) stenóza ureteru
  b) periostitis pubis
  c) enterokéla
  d) rektokéla
  10. Když má pacientka týden po abdominální  hysterektomii teploty a bolesti v bedrech,
  a) provedeme vylučovací urografii
  b) zavoláme urologické konzilium
  c) podáme antibiotika
  d) provedeme ultrasonografii malé pánve a kalichopánvičkového systému ledvin
11. Pacientka udává opožděnou menstruaci a koliko- vitou bolest v podbřišku. Diferenciálně diagnosI ticky lze uvažovat o
a) torzi adnex
b) abortus in cursu
c) graviditas extrauterina
d) adnexitidě
12. Pacientka udává několik dní trvajícíjednostran-nou bolest v pravém podbřišku. Při palpačním I vyšetření hmatáme bolestivý tumor vedle dělohy, teplotu má 37,3 °C. Myslíme na
a) torzi adnex
b) inflamatomí adnextumor
c) tubární abort
d) periapendikulární infiltrát
13. Ligatura ureteru se obvykle projeví
a) tupou bolestí v bederní krajině
b) teplotou event, zimnicí a třesavkou
c) anurií
d) retencí moči
14. Intrafasciální abdominální hysterektomie má j výhodu
a) v neporušeném cévním zásobení
b) v neporušeném nervovém zásobení
c) v neporušeném podpůrném aparátu
d) ve snížení rizika poranění močovodu
15. Ligaturu arteria iliaca int a hypogastrica provádíme
a) podbifurkací a. iliaca com.
b) ipodvazem spolu s lig. suspensorium ovarii
c) přímo v bifurkaci a. iliaca com.
d) v bázi postranního parametria
16. Indikací к ligatuře arteria iliaca int a hypogastI rical je nejčastěji
a) graviditas extrauterina tubaria rupta Ktenorrhagn
b) ?? tenorrhagn ??
c) nezvladatelné porodnické krvácení
d) krvácení z nekrotického karcinomu colli uteri
17. Při děložní myomatóze indikujeme
a) ve vhodných případech embolizaci uterinních arterií
b) vaginální nebo abdominální hysterektomii
c) laparoskopicky asistovanou vaginální hysterektomii
d) Вenukleaci myomů (při příznivém nálezu)
18. Extrauterinní gravidita může proběhnout
a) asymptomaticky a dojde к její resorpci
b) nsymptomalicky a dosáhnout velikosti zralého plodu
c) s výraznými klinickými projevy
d) současně s graviditou intrauterinní
19. Nejnebezpečnější lokalizací extrauterinní gravidity je gravidita
a) intraabdominální
b) ampulámí
c) ovariální
d) v děložním rohu
20. Z níže uvedených stavů jsou absolutní indikací к operaci
a) obstrukčm ileus
b) hemoperitoneum
c) ovulační krize
d) endotoxinový šok
21. Prevence tromboembolické choroby spočívá
a) v časné pooperační mobilizaci
b) v miniheparinizaci
c) v šetrné operační technice
d) v předoperační infúzi 5000 j. heparinu
22. Za dezinfekci operačního pole zodpovídá
a) operatér
b) staniční sestra operačního sálu
c) instrumentářka u operace
d) staniční sestra na předoperačním oddělení
23. Po embolizaci uterinních arterií pro děložní myomatózu bývá obvykle
a) krvácení z rodidel
b) bolest v podbřišku
c) subfebrilie
d) retence moči
24. Z uvedených operací má největší riziko podvázání ureteru
a) vaginální hysterektomie
b) abdominální hysterektomie pro endometriózu ovarií
c) pánevní lymfadenektomie
d) kolpopexe podle Burche
25. Při peroperačně zjištěné akutní apendicitidě gynekolog
a) z forenzních důvodů vždy přivolá chirurga
b) ukončí gynekologickou operaci a pacientku přeloží na chirurgické oddělení
c) dokončí gynekologickou operaci a do propouštěcí zprávy uvede doporučení к provedení apendektomie
d) může provést sám apendektomii -tuto operaci musí ovládat
26. Z níže uvedených stavů jsou absolutní indikací к operaci
a) bolesti v podbřišku nejasné etiologie
b) pelveoperitonitida
c) peritonitida
d) hemoperitoneum
27. Zmnožení a rozšíření žil na břiše, tzv. caput Medusae, vídáme při
a) masivním hemoperitoneu
b) cirhóze jater
c) těžké těhotenské hepatopatii
d) karcinomu ovaria
28. Monopolární elektrochirurgické výkony smíme provádět při operaci
a) pacientek se zdravým kardiovaskulárním aparátem
b) pacientek s kardiostimulátorem
c) pacientek s epilepsií
d) pacientek na řízené ventilaci
29. Příměs adrenalinu к lokálnímu znecitlivění je kontraindikovaná
a) u diabetů
b) u toxické strumy
c) u těhotných žen
d) u ranné infekce
30. Autotransfúze není indikována při operačním řešení
a) u onkologických pacientek
b) u pacientek s těžší anémií
c) u děložní myomatózy
d) u těhotných žen
31. Sutura pokračujícím stehem je vhodná
a) к šití střeva
b) к šití močového měchýře
c) к šití cévní stěny
d) к šití fascie
32. Nevstřebatelný šicí materiál je
a) silon
b) ethilon
c) ethibond
d) nurolon
33. Propustnost kapilár ovlivňují
a) vitamin К
b) trasylol
c) vitamin C
d) kortikosteroidy
34. Kolostomii provádíme při gynekologické operaci
a) u pacientek s karcinomem ovaria s inoperabilním tumorem v malé pánvi
b) při známkách nízkého ileu
c) při známkách vysokého ileu
d) při zjištění tumoru střeva
35. Vstřebatelný šicí materiál se používá na suturu
a) fascie
b) střeva
c) dělohy
d) kůže
36. Transfúze jedné transfúzníjednotky (TU) erymasy zvýší hematokrit asi o
a) 4%
b) 8%
c) 10%
d) 12%
37. Při radikální operaci pro karcinom ovarií provádíme apendektomii
a) vždy, kdy je to možné
b) jen při makroskopickém postižení apendixu
c) jen u mladších pacientek v dobrém celkovém stavu
d) provádí ji pouze chirurg
38. Při nádorovém postižení sentinelové uzliny u karcinomu děložního hrdla
a) ukončíme operaci a indikujeme radioterapii
b) provedeme radikální hysterektomii s pánevní lymfadenektomií
c) provedeme radikální hysterektomii s pánevní a paraaortální lymfadenektomií
d) provedeme radikální hysterektomii s pánevní, paraaortální a ingvinální lymfadenektomií
39. К radiklání vulvektomii patří
a) odstranění vulvy i s pokožím až na fascii včetně perinea až к řitnímu svěrači a pánevní lymfadenektomie
b) odstranění ingvinálních uzlin
c) odstranění uzlin z fossa femoralis
d) odstranění vulvy i s podkožím až na fascii včetně perinea až řitnímu svěrači
40. Při nádorovém postižení pánevních uzlin při karcinomu děložního těla
a) ukončíme operaci a indikujeme radioterapii
b) provedeme rozšířenou hysterektomii s pánevní lymfadenektomií
c) provedeme abdominální hysterektomii s oboustrannou adnexektomií, pánevní a paraaortální lymfadenektomii
d) provedeme rozšířenou hysterekotomii s pánevní  a paraaorální lymfadenektomii
41. Při invazi karcinomu do děložního těla a do děložního hrdla indikujeme
a) primární radioterapii
b) rozšířenou hysterektromii s pánevní lymfadenektomií
c) extrafasciální hysterekotmii s oboustrannou adnexektomií
d) primární radioterapii jen u pacientek neschopných operace
42. Při radikální operaci pro karcinom ovaria je indikována omentektomie
a) infrakolická a suprakolická vždy, kdy je to možné
b) jen při prokázaném nádorovém postižení omenta v peroperační histologií
c) jen infrakolická, u případů bez prokázaného nádorového postižení v peroperační histologii
d) jen při jeho makroskopickém postižení

`;

  const answers = `
  1b,c,d 2a 3a,b,c 4b,c 5b,c 6a,b 7b 8a,c 9c,d
  10c,d 11a,b,c 12a,b,c,d 13a,b 14d 15a 16c 17a,b,c,d 18a,b,c,d 19d
  20a,b 21a,b,c 22a 23b,c 24b 25d 26c,d 27b 28a,c,d 29b
  30b,d 31a,b,c,d 32a,b,c,d 33c,d 34b 35a,b,c,d 36a 37a 38c 39b,c,d
  40c 41b,d 42a
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
        topic: ['13. Gynekologická operativa. II. ČÁST POSTGRADUÁLNÍ'],
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
