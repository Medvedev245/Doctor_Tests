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
  1. Následující hormon je převážně estrogen
  a) androstendion
  b) norgestrel
  c) dienoestrol
  d) noretynodrel
  2. Který z následujících hormonů se používá pro estrogenní účinky
  a) levonorgestrel
  b) gestoden
  c) tibolon
  d) cyproteron acetát
  3. Všechny následující látky se vážou na receptory, které aktivují adenylát cyklázu s výjimkou
  a) LH
  b) glukokortikoidů
  c) vazopresinu
  d) glukagonu
4. Všechny následující hormony užívají cyklický AMPjako «druhého posla« s výjimkou
a) estrogenů
b) FSH
с) glukagonu
d) LH
5. Hlavním zdrojem extracelulárního cholesterolu je
a) VLDL (very low-density lipoprotein)
b) LDL (low-density lipoprotien)
c) albumin
d) HDL (high-density lipoprotein)
6. Následující molekuly snižují afinitu hemoglobinu pro kyslík, výjimkou jsou
a) i 2,3-difosfoglycerát
b) hydroxylové ionty
c) co2
d) vodíkové ionty
7. Principem parakrinního způsobu komunikace mezi buňkami je
a) uvolnění chemických mediátorů do krve a jejich účinek na specifické receptory ve vzdálených I cílových tkáních
b) uvolnění a difúze chemických mediátorů extracelulární tekutinou do cílových buněk
c) přímý kontakt buněk, které jsou těsně vedle sebe
d) uvolnění chemických mediátorů na synaptických I spojeních
8. Nucleus supraopticus v hypotalamu pravděpodobně ovlivňuje sekreci
a) oxytocinu
b) adrenokortikotropního hormonu (ACTH)
c) Mmfflnilostimiilačního hormonu (FSH)
d) antidiuretického hormonu (ADH)
9. Všechny údaje o B-endorfinech jsou správné I s výjimkou
a) jsou secemovány z hypofýzy při stresu
b) snižují práh pro bolestivost
c) jejich koncentrace se zvyšuje v těhotenství a za porodu
d) vznikají odštěpením z molekuly, která obsahuje I sekvence pro ACTH
10. Všechny údaje o testosteronu jsou správné s výjimkou
a) je intermediálním produktem pří syntéze estrogenů
b) je syntetizován z cholesterolu
c) inhibuje sekrecí LH na úrovni hypotalamu
d) je biologicky méně aktivní po redukci na dihydrotesI tosteron
11. Zvýšené ochlupení v obličeji a ústup vlasové pokrývky z čela nesvědčí pro tuto diagnózu
a) deficit l7B-hydroxylázy
b) tumor ovaria
c) familiární hyperlipoproteinémii
d) tumor nadledvin
12. Cholesterol je prekurzorem těchto látek3 s výjimkou
a) tamoxifenu
b) testosteronu
c) progesteronu
d) estradiolu
13. Mechanismus účinku luteinizačního hormonu (LH) nejlépe vysvětluje tato věta
a) váže se na povrchový receptor buňky a stimuluje syntézu cyklických nukleotidů v cytoplazmě
b) po vazbě na cytoplazmatický receptor se dostává do jádra a přímo stimuluje syntézu proteinů
c) váže se na povrchový receptor buňky a aktivuje jiný mediátor než cyklické nukleotidy
d) po vazbě na cytoplazmatický receptor se dále váže na mitochondrie a stimuluje jejich oxidativní metabolismus
14. Progesteron
a) má základní význam pro vývoj prsu
b) stimuluje růst alveolámí složky prsu
c) zvyšuje tlak v mlékovodech a umožňuje ejekci mléka
d) stimuluje růst duktálního systému prsu
15. Estradiol
a) stimuluje růst duktálního systému prsu
b) stimuluje růst alveolámí složky prsu
c) má základní význam pro vývoj prsu
d) zvyšuje tlak v mlékovodech a umožňuje ejekci mléka
16. Z hlediska »two-cells« teorie jsou všechnyodpovědi správné kromě
a) LH stimuluje buňky theca interna
b) estradiol je transportován do buněk theca interna
c) FSH stimuluje produkci enzymu aromatázy
d) buňky theca interna produkují androgeny
17. Estrogenovým testem zjišťujeme
a) poruchu hypotalamo-hypofyzámí osy
b) reaktivitu endometria na podaný estrogen
c) perzistující corpus luteum
d) poruchu dozrávání corpus luteum
18. Gonadotropinový test odhaluje
a) chromosomální aberace
b) reaktivitu ovaria
c) insuficienci nadledvin
d) reaktivitu hypotalamu
19. LH-Rh test slouží к odhalení reaktivity
a) ovaria
b) dělohy
c) mozkové kůry
d) hypofýzy
20. Do obrazu adrenogenitálního syndromu nepatří
a) hypertrofie klitorisu
b) akné
c) hirsutismus
d) sklon к tvorbě varixů
21. Prekurzorem ovariálních steroidů je
a) adenosin 3’-5’- monofosfát
b) prostaglandiny
c) cholesterol
d) kyselina mléčná
22. Na regulaci neuroendokrinních mechanismů se nepodílí
a) serotonin
b) dopamin
c) prostaglandiny
d) noradrenalin
23. Zvýšená prolaktinémie není typická
a) u adenomu hypofýzy
b) u Albrightova-Forbesova syndromu
c) pro puerperium
d) pro Aschermannův syndrom
24. Idiopatická dysmenorea je vázána na
a) děložní hypoplazii
b) adenom hypofýzy
c) ovulační cyklus
d) anovulační cyklus
25. Klinefelterův syndrom má genotyp
a) 47.XXY
b) 45,XXX
c) 45,X0
d) 46,X0
26. Sexuálním infantilismem rozumíme
a) setrvání na dětském vývoji psychologickém i anatomickém
b) psychickou retardaci v sexuálním období
c) primární amenoreu
d) pouze řídké pubické a axilámí ochlupení
27. Sheehanův syndrom je podmíněn
a) malnutricí
b) poporodní nekrózou hypofýzy
c) tyreopatií
d) diabetes mellitus
28. Příčinou Chiariho-Frommelova syndromu je
a) tumor adenohypofyzy
b) tumor bazálních ganglií
c) tumor hypotalamu
d) funkční porucha hypotalamu
29. Před léčbou polymenorey je zbytečné vyšetřit
a) endometrium
b) koncentraci gonadotropinů
c) koncentraci B-hCG
d) koncentraci 17B-estradiolu
30. Intermenstruační krvácení se léčí nejčastěji
a) gestageny
b) vitaminy skupiny В
c) estrogeny
d) gonadotropiny
31. К premenstruačnímu syndromu nepatří
a) mastodynie
b) retence vody
c) opakované tromboflebitidy
d) cefalea
32. Při léčbě retence oocytu v ovariu používáme
a) gestageny
b) klomifen
c) estrogeny
d) žádná odpověď není správná
33. Klomifen užíváme к terapii
a) mastodynie
b) anovulačních cyklů
c) dysmenorey
d) metroragie
34. Medroxyprogesteron není vhodný pro
a) antikoncepci
b) léčbu carcinoma colli uteri
c) inhibici ovulace
d) léčbu karcinomu endometria
35. U zdravé ženy ve fertilním období života se ovaria3 podílejí na tvorbě testosteronu
a) v 25%
b) ve 40 %
c) v 15%
d) v 10%
36. Při hirsutismu je zvýšená koncentrace
a) estrogenů
b) androstendionu
c) testosteronu
d) gonadotropinů
37. Cyproteron acetát se používá к léčbě
a) hepatopatií
b) anovulačních cyklů
c) hirsutismu
d) sterility
38. V etiologii luteální insuflcience se uplatňuje3 nejčastěji
a) porucha neurotransmise v hypotalamu
b) nedostatek estrogenů
c) adenom hypofýzy
d) pubertas tarda
39. Anorexia nervosa je charakteristická pro věkovou skupinu
a) v menopauze
b) do 15 let
c) do 25 let
d) do nástupu klimakteria: 35^40 let
40. U anorexia nervosa je sekrece gonadotropinů
a) kolísavá
b) snížená
c) ve fyziologických mezích
d) zvýšená
41. U Steinova-Leventhalova syndromu je typické
a) výrazné ztluštění theca extema
b) ztluštění theca interna
c) ztenčení theca interna
d) výška theca interna není ovlivněna
42. U Steinova-Leventhalova syndromu je abnormální syntéza androgenů typická pro
a) Leydigovy buňky
b) theca interna
c) theca extema
d) hilové buňky
43. Gaiaktorea je spojena s amenoreou
a) vždy
b) ve 3-15%
c) není s ní spojena
d) v méně než 1 %
44. U Chiariho-Frommelova syndromu je typický nástup galaktorey
a) po porodu
b) v graviditě
c) v pubertě
d) před porodem
45. U syndromu Argonzova-Del Castillova je typický nástup galaktorey
a) spontánně bez závislosti na graviditě
b) v raném těhotenství
c) po porodu
d) před porodem
46. U Chiariho-Frimmelova syndromu je NMR nález (rtg nález) na sella turcica
a) normální nález
b) seilajedestruována
c) sella není patrná
d) sella je rozšířená
47. U Forbesova-Albrightova syndromu je NMR nález (rtg nález) na sella turcica
a) sella není patrná
b) sella je destruována
c) normální nález
d) sella je rozšířená
48. Sheehanův syndrom vzniká při postižení tkáně předního laloku hypofýzy
a) ve 25 %
b) nad 90 %
c) v 10%
d) v 50%
49. Simondsova kachexie je časově vázána na
a) II a III trimestr těhotenství
b) I trimestr těhotenství
c) období porodu
d) není vázána na graviditu a porod
50. U Turnérova syndromu jsou hodnoty plazmatického estradiolu
a) snížené
b) cyklicky kolísají
c) v normě
d) zvýšené
51. U Tůmerova syndromu jsou hodnoty FSH a LH
a) v normálních mezích
b) trvale snížené
c) cyklicky kolísají
d) trvale zvýšené
52. Connův syndrom je
a) agenze vnitřního genitálu
b) dysgeneze gonád
c) primární hyperaldosteronismus
d) sekundární hyperaldosteronismus
53. Mezi maskulinizující nádory ovaria nepatří
a) tumor z intersticiálních buněk
b) arhenoblastom
c) cystadenom
d) thekom
54. Feminizující nádory ovaria nevyvolávají
a) krvácení v postmenopauze
b) osteoporózu
c) dysfunkční krvácení ve fertilním věku
d) pseudopubertas praecox
55. Pro odlišení hormonálně aktivních nádorů ovaria a nadledvin při maskulinizaci slouží vyšetření
a) plazmatického progesteronu
b) estrogenů
c) frakce 17-ketosteroidů
d) 17-oxosteroidů
56. Syndrom testikulární feminizace je determinován3 genotypem
a) 46,X0
b) 46,XX
c) 46,XX0
d) 46,XY
57. U Rokitanského-Kiisterova-Hauserova syndromu nacházíme
a) monofázickou teplotu
b) nevyvinuté sekundární znaky
c) funkčně zdatná ovaria
d) sníženou koncentraci gonadotropinů
58. U Rokitanského-Kiisterova-Hauserova syndromu je
a) totální ageneze dělohy
b) ageneze pochvy
c) ageneze ovarií
d) ageneze vejcovodů

  `;

  const answers = `
  1c 2c 3b 4a 5b 6b 7a 8d 9b
  10d 11c 12a 13a 14b 15a 16b 17b 18b 19d
  20d 21c 22c 23d 24c 25a 26a 27b 28d 29c
  30c 31c 32b 33b 34b 35b 36c 37c 38a 39c
  40b 41b 42b 43b 44a 45a 46a 47d 48b 49d
  50a 51c 52c 53d 54b 55c 56d 57c 58b
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

      let myCorrectNewAnswers = [];

      correctNewAnswers.forEach(element => {
        const letter = element.charAt(element.length - 1);
        const numberChar = element.slice(0, -1);
        const restOfQ = questionNumber.slice(0, -2);

        if (numberChar === restOfQ) {
          for (let ans of newAnswers) {
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
          '6. Gynecologická endokrinologie a fyziologie ženského reprodukčního systému. II část pregraduální',
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
