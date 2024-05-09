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
  1. Ultrazvukový váhový odhad plodu v poloze koncem pánevním
a) provádíme stejně jako u plodu v poloze podélné hlavičkou
b) neprovádíme
c) není vzhledem к poloze plodu možný
d) je sice nejméně přesnou metodou odhadu, ale přesto jej provádíme
2. Biometrie plodu je
a) měření průtoku v a. umbilicalis
b) měření plodu a jeho částí
c) zhodnocení množství vody plodové
d) změření bazální frekvence srdce plodu 
3. К odhadu stáří těhotenství podle UZ před 12 týdnem těhotenství používáme
a) délku femuru (FL)
b) měření srdeční frekvence
c) měření temeno-kostrční délky (CRL)
d) zhodnocení morfologie vývoje mozkových struktur
4. Váhový odhad plodu standardně získáváme
a) výpočtem z UZ měření BPD, KP a FL
b) odhadem podle CRL
c) nejpřesnější je odhad podle měření vzdálenosti spona -fundus děložní
d) výpočtem z UZ měření BPD, НС, AC a FL
5. Při screeningu v 18-22 týdnu těhotenství standardně neprovádíme
a) zhodnocení morfologie srdce
b) zjištění počtu plodů
c) karyotypizaci
d) zhodnocení morfologie končetin
6. Které z následujících vyšetření rutinně neprovádíme v rámci UZ screeningu v 18-22 týdnu těhotenství
a) biometrii plodu
b) zhodnocení množství plodové vody
c) flowmetrii - měření průtoků v a. umbilicalis
d) zhodnocení polohy placenty
7. Součástí UZ screeningu není
a) kontrola kontinuity horního rtu plodu
b) zhodnocení morfologie srdce plodu
c) kontrola morfologie a počtu prstů končetin plodu
d) zhodnocení lokalizace ušního boltce plodu
8. Při UZ screeningu v 30-32 týdnu těhotenství
a) biometrii již neprovádíme
b) zhodnocení srdeční anatomie již není možné
c) ověřujeme mimo jiné i polohu plodu a množství plodové vody
d) je mozek plodu již plně vyvinut
9. Při UZ screeningu v 18-22 týdnu těhotenství standardně neprovádíme
a) hodnocení šíře postranních mozkových komor plodu
b) zhodnocení srdeční anatomie plodu
c) ověření počtu plodů
d) měření délky plosky plodu
10. Cervikometrie je
a) standardní a povinnou součástí UZ screeningu
b) měření délky hrdla děložního a zhodnocení tvaru vnitřní branky v těhotenství
c) měření obvodu krčku plodu
d) součástí onkologického screeningu
11. Poloha plodu při UZ screeningu v 18-20 týdnu těhotenství
a) je již téměř stabilní, u 95 % plodů zjištěná poloha plodu přetrvá až do porodu
b) u naprosté většiny plodů je poloha koncem pánevním, poloha podélná hlavičkou se ustavuje až po 36 týdnu těhotenství
c) poloha plodu je volná
d) není zjistitelná
12. Ultrazvukový screening provádíme v CR standardně
a) v 18-22 týdnu a v 30-32 týdnu těhotenství
b) v 1 l-13 týdnu a 22-24 týdnu těhotenství
c) UZ screening provádíme jen u rizikových těhotných
d) screeningový program není plošně zaveden
13. Deoxygenovanou krev do placenty přivádí
a) arteria umbilicalis
b) vena umbilicalis
c) ductus venosus
d) arteria cerebri media
14. Které z následujících měřeníje nejrelevantnější pro určení gestačního stáří podle UZ
a) transvaginální měření gestačního váčku v 5 týdnu těhotenství
b) měření FL ve 20 týdnu těhotenství
c) měření CRL v 7 týdnu
d) měření BPD v 24 týdnu těhotenství
15. Která z následujících metod je nejpřesnější pro stanovení gestačního stáří resp. termínu porodu
a) měření vzdálenosti spona -fundus
b) stanovení podle poslední menstruace
c) UZ měření CRL v prvním trimestru
d) UZ měření průměru gestačního váčku
16. Který z následujících výroků o kordocentéze (punkci pupečníku) je pravdivý
a) kordocentéza je provedení spinální punkce plodu
b) kordocentézu provádíme za kontinuální fetoskopické kontoly
c) při kordocentéze provádíme odběr fetální krve
d) při kordocentéze provádíme odběr smíšené mateřské a fetální krve
17. Při amniocentéze získáváme
a) fetální krev
b) plodovou vodu
c) vzorek amnia
d) nic z výše uvedeného
18. Odběr plodové vody v současné době standardně provádíme
a) v celkové anestezii
b) v lokální anestezii
c) vzhledem к vysoké rizikovosti výkonu zcela výjimečně
d) za kontinuální ultrazvukové kontroly
19. Při biopsii choria získáváme
a) vzorek choroidálního plexu
b) vždy též vzorek plodové vody
c) vzorek extraembryonální tkáně použitelný např. ke karyotypizaci plodu
d) nic z výše uvedeného
20. Mezi invazivní metody prenatální diagnostiky patří
a) amniorexe
b) biopsie choria CVS
c) kardiotokografie CTG
d) intraumbilikální transfúze
21. Při UZ vyšetření plodu v poloze koncem pánevním před předpokládaným porodem je zvláště důležité
a) stanovení množství plodové vody
b) popis uložení ruček plodu
c) přesný váhový odhad plodu
d) pohlaví plodu
22. Stanovení chorionicity vícečetného těhotenství
a) není ultrazvukem možné
b) je možné provést ultrazvukem, nejpřesněji v prvním trimestru
c) je možné provést ultrazvukem, nejpřesněji ve druhém trimestru
d) je možné až při porodu
23. Diagnostickou známkou pro určení chorionicity může být
a) změření BPD obou plodů
b) stanovení pohlaví plodů
c) stanovení poloh plodů
d) nalezení přepážky dělící amniální dutiny
24. Indikací к provedení flowmetrie (měření průtoku v a. umbilicalis) je
a) podezření na růstovou retardaci plodu
b) normální množství plodové vody
c) volná poloha plodu v 16 týdnu těhotenství
d) přítomnost choroidálního plexu
25. Nuchální translucence je
a) UZ makrer sloužící к diagnostice Downova syndromu
b) screeningový marker VVV v prvním trimestru
c) prosvětlení v oblasti nosu plodu
d) hyperechogenní útvar v levé srdeční komoře plodu
26. Nuchální translucence je
a) rtg marker rozštěpu patra u plodu
b) oblast krku plodu barvící se fluoresceinem
c) žádná z uvedených variant
d) šíjové ztluštění (projasnění) u plodu v prvním trimestru
27. Screening VVV plodu
a) je v ČR omezen na vyhledávání plodů s trisomií 21
b) je systém vyhledávání těhotných se zvýšeným rizikem plodu s VVV
c) je celosvětově jednotný systém vyhledávání těhotných se zvýšeným rizikem plodu s VVV
d) je v ČR založen pouze na věku těhotné
28. screeningu rizika Downova syndromu plodu I v CR platí
a) je založen pouze na věku matky (amniocentézu I podstupují pouze těhotné starší 35 let)
b) věk již není považován za marker zvýšeného rizika (žádné těhotné starší 35 let není amniocentéza I nabídnuta)
k) je komplexní zhodnocení rizika plodu na podkladě věku těhotné, biochemického a ultrazvukového screeningu
d) screeningový program v ČR není ustanoven
29. Amniocentéza ta) je výkon s nulovým rizikem, proto jej můžeme provádět u všech těhotných, kde jej proplatí pojišťovna
b) je laparoskopický výkon
c) s sebou nese asi 0,5-1% riziko potratu plodu
d) s sebou nese asi 10% riziko potratu plodu
30. Indikací pro punkci pupečníku může být
a) screeningové stanovení pH plodu ve 22 týdnu gravidity
b) prenatální diagnostika genetických onemocnění
c) prenatální diagnostika DMO
d) stanovení pohlaví plodu
31. Amniocentéza je
a) incize amnia pomocí skalpelu
b) protětí bubínku u otitis media plodu
c) žádná z uvedených možností
d) odběr plodové vody
32. Klasickou amniocentézu provádíme
a) v kterékoli fázi těhotenství
b) po dokončeném 15 týdnu těhotenství
c) neprovádíme, je to metoda obsoletní
d) pouze hrozí-li intrauterinní smrt plodu
33. V ČR nejpoužívanější invazivní metodou prenatální diagnostiky je
a) biopsie choria
b) kordocentéza (punkce pupečníku a odběr vzorku fetální krve)
c) amniocentéza
d) coelocentéza
34. Který stav je spojen se zvýšenou koncentrací AFP
a) trisomie 21
b) atopický ekzém
c) trisomie 18
d) gastroschíza
35. Který stav je spojen se zvýšenou koncentrací AFP
a) trisomie 21
b) preeklampsie jel hrozící potrat
d) seboroická dermatitida
36. Která z následujících chromosomálních poruch není diagnostikovatelná z kultury amniocytů
a) Klinefertův syndrom
b) autosomální trisomie (T 21, 18, 13)
c) mozaicismus lokalizovaný na placentu
d) balancovaná delece
37. Chromosomální poruchy diagnostikovatelné z kultury amniocytů
a) uniparentální disomie lokalizovaná na placentu
b) Klinefertův syndrom a ostatní aneuploidie vázané na mužské pohlaví
c) big eye syndrom a ostatní senzorické X vázané poruchy
d) žádná z uvedených odpovědí není správná
38. Prenatální biopsie kůže plodu se provádí
a) pomocí fetoskopie
b) jako screeningové vyšetření
c) u plodů s podezřením na chromosomální aberace
d) u matek s podezřením na syfilis
39. Prenatální biopsie jater
a) je používanou alternativní metodou pro stanovení karyotypu
b) je rutinní metodou prenatální diagnostiky
c) se používá, jen je-li jatemí tkáň jediným místem exprese genu
d) umožňuje stanovení běžné Y vázané mentální retardace
40. К invazivním metodám prenatální diagnostiky jednoznačně řadíme
a) ultrazvukové vyšetření
b) kardiotokografii
c) amniocentézu
d) biochemický screening
41. Kterou z následujících typů genetických poruch nezjistíme klasickým vyšetřením karyotypu
a) Downův syndrom
b) balancovanou translokaci
c) uniparentální disomii
d) Turnérův syndrom
42. Amniocentézou získáváme
a) vzorek fetální krve
b) výhradně amniocyty
c) vzorek kůže plodu
d) amniocyty pro karyotipizaci a amniální tekutinu к biochemickému rozboru
43. Pro amniocentézu platí, že
a) je to screeningové metoda prenatální diagnostiky
b) riziko výkonu je 8 %
c) je to obsoletní metoda prenatální diagnostiky
d) je to nejčastější invazivní metoda prenatální diagnostiky
44. Vrchol A udává distribuci AFP (obr. 1)
a) u plodů s Downovým syndromem
b) u plodů s rozštěpem neurální trubice
c) u normálních plodů
d) u plodů se srdečními anomáliemi
45. Vrchol В udává distribuci AFP (obr. 1)
a) u normálních plodů
b) u plodů s rozštěpem neurální trubice
c) u plodů s Downovým syndromem
d) u plodů se srdečními anomáliemi
46. Vrchol C udává distribuci AFP (obr. 1)
a) u plodů s rozštěpem neurální trubice
b) u normálních plodů
c) u plodů s Downovým syndromem
d) u plodů se srdečními anomáliemi
47. Z uvedených chromosomálních poruch není z kultury amniocytů diagnostikovatelná
a) uniparentální disomie s mozaicismem lokalizovaným na placentu
b) Klinefelterův syndrom
c) autosomální trisomie (21, 18, 13)
d) chromosomální přestavby, delece balancované nebo aneuploidie
48. Chromosomální poruchy diagnostikovatelné z kultury amniocytů
a) uniparentální disomie s mozaicismem lokalizovaným na placentu
b) Klinefelterův syndrom a ostatní aneuploidie vázané na mužské pohlaví
c) big eye syndrom a ostatní senzorické X vázané poruchy
d) žádná z výše uvedených odpovědí není správná
49. Chromosomální poruchy diagnostikovatelné z kultury amniocytů
a) žádná z uvedených odpovědí není správná
b) chromosomální přestavby, delece, balancované nebo aneuploidie
c) placentámí mozaicismus
d) omezený placentámí mozaicismus
50. Který stav je spojen se zvýšenou koncentrací AFP
a) atopický ekzém
b) hrozící potrat
c) trisomie 21
d) EPH gestóza
51. Který stav je spojen se zvýšenou koncentrací AFP
a) trisomie 18
b) trisomie 21
c) gastroschíza
d) atopický ekzém
52. Pro CVS platí, že
a) je to nejčastěji používaná metoda prenatální invazivní diagnostiky
b) riziko metody je 7 %
c) je to zkratka pro chorionic villus sampling
d) nevýhodou metody je 4 týdny trvající kultivace
53. U biopsie choria platí, že
a) pro provedení analýzy je nezbytné 60mg materiálu
b) vzorky získané biopsií choria к vyšetření enzymatické aktivity musí být zpracovány do 24 hodin
c) nejčastěji se provádí transcervikálně
d) nemá se provádět před 10 týdnem gravidity
54. Punkce pupečníku
a) se provádí převážně za hospitalizace
b) indikuje se v případě, kdy je dostatek času ke kultivaci amniocytů
c) se provádí výhradně za přímé vizualizace pomocí ultrazvuku
d) vyžaduje celkovou narkózu
55. Punkce pupečníku
a) kontaminace odebrané fetální krve krví mateřskou je díky přímé vizualizaci odběru vyloučena
b) je vhodnou metodou pro diagnózu hypoxie plodu
c) je indikována zejména pro stanovení karyotypu plodu a při ohrožení plodu Rh izoimunizací
d) umožňuje stanovení karyotypu řádově za několik hodin, protože se vyšetřují fetální erytrocyty
56. Indikací к punkci pupečníku může být
a) stanovení pH u plodu ve 22  týdnu gravidity (screening)
b) prenatální diagnostika genetických onemocnění
c) prenatální diagnostika dětské mozkové obrny
d) zjištění pohlaví plodu
57. Indikací к punkci pupečníku může být
a) dětská mozková obrna
b) žádná odpověď neplatí
c) EPH gestóza
d) hrozící předčasný porod
58. Prenatální biopsie kůže plodu se provádí
a) pomocí fetoskopie
b) jako screeningové vyšetření
c) u matek s podezřením na syfilis
d) u plodů s podezřením na chromosomální aberace
59. Prenatální biopsie jater
a) je používanou alternativní metodou stanovení fetálního karyotypu
b) se používá jen, je-li jatemí tkáň jediným místem exprese proteinu
c) je rutinní metodou prenatální diagnostiky
d) umožňuje stanovení diagnózy X vázané mentální retardace
60. К prenatálním metodám invazivní diagnostiky (z pohledu plodu) patří
a) biochemický screening AFP, hCG, E3
b) žádná odpověď není správná
c) ultrazvukový screening
d) amniocentéza
61. O rtg vyšetření v těhotenství platí, že
a) dávka rtg záření při jednom snímku je hluboko podhranicí považovanou za teratogenní
b) dávka rtg záření v I trimestru způsobující vrozenou vadu u plodu je 500 m/Gy
c) rtg pelvimetrie je indikována před porodem plodu v poloze koncem pánevním
d) rtg vyšetření v těhotenství je metodou volby
62. Trisomie 18 (Edwardsův syndrom)
a) je druhá nejčastější prenatálně zjišťovaná chromosomální aberace
b) všechny odpovědi jsou správné
c) je většinou letální do 20 let dítěte, ale i delší přežití je možné
d) se u nás nevyskytuje
63. Downův syndrom (trisomie 21)
a) je charakterizován mentální retardací, rizikem srdeční vady, imunologickými poruchami a předčasným stárnutím připomínajícím Alzheimerovu chorobu
b) je druhá nejčastější autosomální aberace zjišťovaná v těhotenství a za porodu
c) vyskytuje se převážně u velmi mladých primipar
d) není důvodem к ukončení gravidity z genetické indikace před 24 týdnem těhotenství
64. Pacientka, 251etá primigravida, absolvovala v 16 týdnu biochemický screening pomocí stanovení AFP, hCG a E, a riziko postižení plodu bylo stanoveno na 1: 380, což je vyšší než u žen stejného věku. Při pohovoru pacientce vysvětlíme, že
a) tato míra rizika není indikací к prenatální invazivní diagnostice
b) měla by absolvovat amniocentézu
c) měla by absolvovat biopsii choria
d) měla by absolvovat punkci pupečníku
65. Pacientka, 251etá primigravida, absolvovala v 16 týdnu biochemický screening pomocí stanovení AFP, hCG a E, a riziko postižení plodu trisomií 21 bylo stanoveno na 1 : 200, což je vyšší než u žen stejného věku. Při pohovoru s pacientkou vysvětlíme, že v 17 týdnu gravidity, ve kterém se právě nachází,
a) by měla absolvovat punkci pupečníku
b) je na prenatální diagnostiku pozdě
c) by pro ní byla vhodná karyotypizace
d) tato míra rizika není indikací к prenatální invazivní diagnostice


  
`;

  const answers = `
  
  
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
          '14. Genetické poradenství a fetální medicína. I. ČÁST PREGRADUÁLNÍ',
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
