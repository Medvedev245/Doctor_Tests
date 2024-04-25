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
1. К zástavě krvácení г dutiny děložní pro menoragii použijeme
a) ostrou kyretu
b) tupou kyretu
c) vakuumexhausci
d) Bummovu kyretu
2. Chirurgickou kastraci u žen provádíme
a) při syndromu polycystických ovarií
b) к zamezení početí
c) pň léčbě agresivních sexuálních poruch
d) při carcinoma mammae
3. К mikroabrazi endometria použijeme
a) Bummovu kyretu
b) «fine needle« aspiraci
c) Nowakovu kyretu
d) ostrou kyretu
4. Při supravaginální hysterektomii
a) provádíme tzv. poševní manžetu
b) ponecháváme děložní hrdlo
c) ponecháváme děložní hrdlo a dolní děložní segment
d) odstraňujeme postranní parametria
5. Zánětlivé adnexální tumory řešíme
a) vždy adnexektomií
b) ligací a. ovarica
c) léčbou antibiotiky
d) s ohledem na věk pacientky, klinický stav a charakter tumoru někdy chirurgicky, někdy konzervativně
6. Gravidita je kontraindikována po
a) enukleaci myomu
b) amputaci děložního hrdla
c) operaci umbilikální kýly
d) ablaci endometria
7. Empyém Bartholiniho žlázy neléčíme
a) studenými obklady
b) prostou incizí
c) incizí a drenáží
d) chemickou exstirpací
8. Colpocleisisje
a) chirurgický uzávěr pochvy
b) založení poševního pesaru
c) mikrobiální vyšetření pochvy
d) reverze pochvy
9. Colpocleisisje vhodná u pacientky
a) s inkontinencí moči
b) s lézí čípku
c) s děložním myomem
d) s prolapsem dělohy
10. Colpocleisisje kontraindikovaná při
a) enterokéle
b) lézi čípku
c) inkontinencí moči
d) elongaci hrdla
11. Miniinterrupci provádíme
a) aplikací vysoké dávky estrogenů
b) vakuumexhausci
c) ostrou kyretou
d) Nowakovou kyretou
12. Amreichova operace je
a) závěs poševního pahýlu
b) neoplastika pochvy
c) uzávěr pochvy
d) synonymum pro operaci enterokély
13. Chemickou exstirpaci děláme u
a) zánětu Bartholiniho žlázy
b) empyému Bartholiniho žlázy
c) cysty Bartholiniho žlázy
d) furunldu vulvy
14. Laparotomie střídavým řezem
a) umožňuje lepší přístup do malé pánve
b) je vhodná pro apendektomii
c) je vhodná pro nefrektomii
d) je vhodná pro operaci hemie v jizvě
15. Pfannenstielovu laparotomii je vhodné užít
a) operací velkých tumorů
b) operací náhlých příhod břišních
c) rozšířené hysterektomie s lymfadenektomií
d) závěsných operací močového měchýře
16. Prostá vulvektomie znamená odstranění
a) velkých stydkých pysků
b) velkých a malých stydkých pysků
c) velkých a malých stydkých pysků a klitorisu
d) velkých a malých stydkých pysků, klitorisu a jedné I třetiny uretry
17. Radikální vulvektomie znamená odstranění
a) velkých a malých stydkých pysků, klitorisu a ingviI nálních uzlin
b) velkých a malých stydkých pysků, klitorisu, I ingvinálních a ilických uzlin a jedné třetiny uretry
c) velkých a malých stydkých pysků, klitorisu, ingvinálních a paraaortálních uzlin
d) velkých a malých stydkých pysků, klitorisu a celé uretry
18. Pod názvem Hornova operace se rozumí
a) přerušení nervových zakončení v podkoží vulvy u dystrofických onemocnění vulvy
b) jedna ze závěsných operací močového měchýře
c) neoplastika pochvy
d) amputace děložního hrdla s transpozicí ligg. sacrouterina
19. Konizace hrdla
a) znemožňuje další otěhotnění
b) má jen kosmetický efekt
c) umožňuje dokonalé histologické vyšetření
d) řeší elongaci hrdla
20. Adnexektomie je
a) synonymum neostomie
b) incize a drenáž adnexálního zánětlivého tumoru
c) odstranění obou ovarií
d) odstranění ovaria a vejcovodu
21. Punkcí Douglasova prostoru získáme tmavou hustou krev; o který z uvedených stavů nejde
a) napunktovaná stěna při retroverzi, retroflexi (RVF)  dělohy
b) endometrióza
c) napunktovaná hemoragická cysta ovaria
d) tubámí abort
22. Na arteriálním zásobení vnitřního genitálu se nepodílí
a) arteria ovarica
b) a. uterina
c) a. pudenda
d) a. obturatoria
23. Správný název pro odstranění ovaria a vejcovodu je
a) adnexotomie
b) adnexektomie
c) parciální hysterektomie
d) supravaginální hysterektomie
24. К chemické exstirpaci Bartholiniho žlázy užíváme
a) argentum nitricum
b) 3% kyselinu octovou
c) nasycený roztok NaCl
d) kyselinu dusičnou
25. Jako první krok к zástavě krvácení při uterus myomatosus užijeme
a) abdominální hysterektomii
b) hysteroskopii
c) kyretáž dutiny děložní
d) prostaglandiny
26. Nejčastější komplikaci přední poševní plastiky je
a) anurie
b) retence moči
c) obstipace
d) krvácení
27. Nowakovu kyretu užíváme pro
a) zástavu krvácení po porodu
b) odběr endometria к jeho dataci
c) interrupci do 8. týdne
d) cytologický odběr z cervikální léze
28. Stopkatý polyp děložního hrdla řešíme
a) opakovanou cytologickou kontrolou
b) amputací hrdla
c) cerclage hrdla
d) abtorzí a kyretáží hrdla
29. Jaký je nejvhodnější dlouhodobý způsob derivace moči po gynekologických operacích
a) intermitentní cévkování
b) permanentní katétr
c) suprapubická drenáž
d) punkční nefrostomie
30. Která г následujících operací není operací na vejcovodu
a) ampulolýza
b) fimbriolýza
c) tracheloplastika
d) neostomie
31. Ventrosuspenze se provádí ke korekci
a) elongace děložního hrdla
b) venter pendulum
c) RVF dělohy
d) žádná odpověď není správná
32. Panhysterektomii s pánevní lymfadenektomií provádíme při
a) karcinomu ovarií
b) karcinomu colli uteri lib
c) karcinomu endometria Ia
d) karcinomu colli uteri lb
33. Lymfadenektomie paraaortální se nejčastěji provádí u
a) karcinomu ovarií
b) karcinomu colli uteri
c) karcinomu endometria
d) karcinomu vulvy
34. Při panhysterektomii odstraňujeme
a) dělohu s adnexy
b) dělohu s adnexy a parametrium
c) dělohu s adnexy, parametrium a horní část pochvy
d) dělohu s adnexy, parametrium, část pochvy a část rekta
35. Nebezpečí podvázání ureteru nehrozí
a) při opichu krvácení pod měchýřem při hysterektomii
b) při podvazu lig. suspensorium ovarii vpravo
c) při podvazu a. uterina u hrany děložní
d) při podvazu lig. ovarii proprium
36. Punkce Douglasova prostoru se prováděla zavedením jehly
a) přes zadní stěnu poševní
b) mezi sakrouterinními vazy
c) u čísla 3 a 9 v postranní klenbě poševní
d) ze suprapubického přístupu
37. Omentektomii provádíme u
a) karcinomu colli uteri s metastázami
b) peritonitidě
c) karcinomu endometria
d) karcinomu ovaria
38. Kolpopexe sec. Burch je operací při
a) prolapsu dělohy
b) inkontinenci moči
c) prolapsu poševního pahýlu po hysterektomii
d) úpravě enterokély
39. Diagnózu ascitu stanovíme nejlépe
a) punkcí Douglasova prostoru
b) laparoskopii
c) poklepem
d) ultrazvukem
40. Přerušení těhotenství na žádost, bez udání důvodu, je možné provést jen do
a) 8 týdne těhotenství
b) 10 týdne těhotenství
c) 12 týdne těhotenství
d) 24 týdne těhotenství
41. Manchesterská operace byla určena
a) léčbě inkontinence moči
b) к léčbě descenze dělohy
c) léčbě endometriózy
d) léčbě sterility
42. Strassmanova plastika je
a) neoplastika pochvy
b) operace к úpravě enterokély
c) operace к odstranění děložního septa
d) operace ke zprůchodnění vejcovodů
43. Drenáž po operaci difúzní peritonitidy
a) zásadně není vhodná pro nebezpečí vzniku píštěle
b) je nutná ve všech případech
c) je vhodná podle rozsahu operace
d) je vhodná jen u komplikovaných případů
44. Nejčastější časnou komplikací vaginální hvsterek tomie je
a) inkontinence moči
b) prolaps poševního pahýlu
c) retence moči
d) krvácení z poševního pahýlu
45. К léčbě do klenby jdoucích ruptur děložního hrdla se užívá
a) Emmetova plastika
b) Stumdorfova plastika hrdla
c) konizace hrdla
d) diatermokoagulace
46. Metody operačního zprůchodnění uzavřených vejcovodů nejsou příliš úspěšné; největší úspěch můžeme očekávat od
a) resekce neprůchodné části a anastomózy end-to-end
b) neostomie
c) resekce neprůchodné části a implantaci tuby do děložního rohu
d) íimbriolýzy
47. К interrupci v 8. týdnu těhotenství nepoužijeme
a) kyretu
b) vakuumexhausci
c) abortové kleště
d) děložní sondu
48. Sondáž dělohy při kyretáži děložní dutiny
a) neprovádíme
b) provádíme jen při RVF uteri
c) provádíme vždy
d) provádíme jen u vrozených vývojových vad dělohy
49. Suspektní lézi hrdla neověřujeme
a) cerclage
b) »punch« biopsií
c) konizací
d) excizí
50. Mikroabrazi endometria použijeme
a) к zástavě děložního krvácení
b) к získání endometria к jeho dataci
c) jako miniinterrupci
d) к diagnostice graviditas extrauterina
51. «Punch hiopsii« užijeme
a) к získání tkáně z leze hrdla pro histologické vyšetření
b) к získání tkáně z endometria pro histologické vyšetření
c) к cytologickému vyšetření z punktátu z Douglasova prostoru
d) při výplachové cytologii z dutiny břišní
52. Sterilizace znamená
a) odstranění vaječníků
b) odstranění vejcovodů
c) odstranění vejcovodů i vaječníků
d) přerušení kontinuity vejcovodů u děložních rohů
53. Chirurgickou kastrací není
a) odstranění obou ovarií
b) odstranění obou ovarií i vejcovodů
c) odstranění dělohy a adnex
d) koagulace vejcovodů
54. Při diagnóze tubární gravidity obvykle
a) provedeme salpingektomii
b) pacientku sledujeme až do prvých klinických příznaků krvácení do břišní dutiny
c) podáme postkoitální antikoncepci
d) podáme prostaglandiny к vyvolání abortu
55. Prostou nesuspektní cystu u 251eté pacientky operačně nejlépe řešíme
a) laparoskopickou unilaterální adnexektomií
b) punkcí Douglasova prostoru
c) laparoskopickou enukleací cysty
d) laparotomickou ovarektomií
56. U klinicky nestabilní pacientky s hemoperitoneem volíme
a) laparoskopický přístup
b) laparotomii
c) ve spolupráci s hematologem konzervativní postup
d) odlehčující punkci cavi Douglasi
57. Atypickou hyperplazii endometria u žen, které již nechtějí mít dítě, řešíme
a) hormonální terapií s následným histologickým ověřením
b) hysterektomií
c) ablací endometria
d) ultrazvukovými kontrolami výšky endometria
58. Perforace děložní stěny může způsobit
a) krvácení do břišní dutiny
b) sterkorální peritonitidu
c) synechie dutiny děložní
d) Ashermannův syndrom
59. Kyretáž dutiny děložníje považována
a) za léčebnou, ale nikoli definitivní metodu při dysfunkčním děložním krvácení
b) za obsolentní metodu z hlediska diagnostiky děložního krvácení
c) za jedině možnou v diagnostice děložního krvácení
d) za metodu kontraindikovanou u žen ve fertilním věku
60. К závěsnému děložnímu aparátu nepatří
a) chordy uteroingvinální
b) ligg sacrouterina
c) ligg sacrospinosum
d) ligg cardinalia
61. Redonova drenáž je
a) drenáž rány spolu s kontraincizí
b) spádová drenáž
c) mulová drenáž
d) odsávací drenáž
62. Podám atropinu před anestezií
a) neovlivňuje množství podaného anestetika
b) brání vzniku vagového reflexu při intubaci
c) usnadňuje ventilaci plic
d) snižuje tvorbu sekretu v dýchacích cestách
63. Před kyretáží dělohy je vhodné
a) zavést permanentní katétr do močového měchýře
b) podat klyzma
c) vycévkovat močový měchýř
d) provést odběr sekretu z pochvy na kultivaci chlamydií a diplokoků
64. Nejrychleji a nejbouřlivěji se rozvíjí šok
a) hemoragický
b) neurogenní
c) septický
d) anafylaktický
65. Vyberte, který z uvedených léčebných postupů u pacientky s diagnózou diabetes mellitus je před operací nadbytečný
a) preventivní podání antibiotik
b) preventivní heparinizace
c) měření bilance tekutin - příjem a výdej
d) převedení na krystalický inzulin
66. Antidotem heparinu je
a) Kanavit
b) Prothazin
c) kyselina kapronová
d) Prothamin
67. Cílem sterilizace nástrojů je
a) zničení všech patogenních zárodků
b) zneškodnění všech anaerobních zárodků
c) zneškodnění jakýchkoli choroboplodných zárodků
d) mechanické odstranění choroboplodných zárodků
68. Velký křížový pokus je reakce mezi
a) krví dárce a krví příjemce
b) sérem dárce a sérem příjemce
c) sérem dárce a krvinkami příjemce
d) sérem příjemce a krvinkami dárce
69. Jako Schloferův nádor označujeme
a) fibroadenom prsní žlázy
b) granulom kolem stehu
c) zhoubný ovariální tumor hormonálně aktivní
d) benigní tumor močového měchýře
70. Dilatace hrdla může způsobit jeho rupturu, která
může mít za následek krvácení do okolí. Označte
kam nekrvácí
a) do parametria
b) retroperitoneálně až pod ledvinu
c) do Douglasova prostoru
d) krev vytéká z pochvy
71. Perforaci děložní stěny po kyretáži nejčastěji
ošetříme
a) hysteroskopicky
b) laparoskopicky
c) laparotomicky
d) vaginálně
72. Příčinou srdečního přetížení při rychlých
a objemných transfúzích je
a) penízkování erytrocytů
b) vazokonstrikce ve velkém oběhu po citrátu z konzervy
c) oslabování srdečního svalu přímým účinkem citrátu
cestou věnčitých tepen
d) rychlost, kterou je transfúze podávána
73. Většina embolizací plicnice po gynekologických
operacích je
a) z oblasti dolní duté žíly
b) z povrchových žil dolních končetin
c) z oblasti horní duté žíly
d) žádná odpověď není správná
74. Při rychlých transfúzích velkého množství krve se
má podat nitrožilně
a) adrenalin
b) kalcium
c) 40% glukóza
d) kalium
`;

  const answers = `
  1a 2d 3c 4b 5d 6d 7a 8a 9d
10b lib 12a 13b 14b 15d 16c 17a 18a 19c
20d 21a 22d 23b 24a 25c 26b 27b 28d 29c
30c 31c 32d 33a 34c 35d 36b 37d 38b 39d
40c 41b 42c 43b 44c 45a 46d 47c 48c 49a
50b 51a 52d 53d 54a 55c 56b 57b 58a 59a
60c 61d 62a 63c 64d 65c 66d 67a 68d 69b
70c 71b 72c 73a 74b
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
        topic: ['13. Gynekologická operativa. I. CAST PREGRADUALNÍ'],
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
