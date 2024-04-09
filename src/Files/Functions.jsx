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
  1. К základnímu gynekologickému vyšetření nepatří
  a) pečlivý rozbor anamnézy a palpačm vyšetření
  b) vyšetření v zrcadlech a palpační vyšetření
  c) laparoskopie ji onkologická cytologie
  2 Cervikální hlen jako součást cervikálního faktoru vyšetřujeme při
  a) kolpitidě
  b) infertilitě
  c) sterilitě
  d) pánevní bolesti
  3. Tažnost cervikálního hlenu je maximální
  a) v časné folikulámí fázi
  b) v časné luteální fázi
  c) v pozdní luteální fázi
  d) v preovulaění fázi
  4. Onkologickou cytologii při screeningu karcinomu děložního hrdla odebíráme
  a) necíleně z exocervixu a necíleně z endocervixu
  b) cíleně z exocervixu a cíleně z endocervixu
  c) necíleně z exocervixu a cíleně z endocervixu
  d) cíleně z exocervixu a necíleně z endocervixu
  5. Mezi kontrastní vyšetřovací metody při vyšetřování mléčné žlázy patří
  a) nativní mamografie
  b) xerografie
  c) duktografie
  d) termografie
  6. Bazální teplotu si žena měří
  a) 2krát týdně
  b) ob den
  c) denně
  d) jednou v období menstruace, folikulámí fáze, ovulace a luteální fáze
  7. Bazální teplotu si žena měří
  a) ráno
  b) pravidelně v libovolně zvolenou hodinu
  c) kdykoli před jídlem
  d) večer
  8. Bazální teplota se neměří
  a) vaginálně
  b) axilámě
  c) rektálně ж
  d) orálně
  9. Před chromopertubací není třeba vyloučit
  a) proběhlou salpingitidu
  b) akutní zánět v oblasti pohlavních orgánů
  c) krvácení z dělohy
  d) možnost gravidity
  10. Veressova jehla se používá
  a) к biopsii ovaria
  b) к aspiraci oocytů při in vitro fertilizaci
  c) к punkci Douglasova prostoru
  d) к založení pneumoperitonea při laparoskopii
  11. Křivku bazální teploty lze hodnotit minimálně po
  a) jednom cyklu
  b) třech cyklech
  c) dvanácti cyklech
  d) šesti cyklech
  12. Menarché nastává v našich podmínkách průměrně
  a) v 10-12 letech
  b) v 8-10 letech
  c) ve 12-13 letech
  d) ve 14-17 letech
  13. Menstruace trvá průměrně
  a) 1-2 dny
  b) 2-3 dny
  c) 3-7 dnů
  d) 7-9 dnů
  14. Normální krevní ztráta během menstruace je
  a) 200-250 ml
  b) 150-200 ml
  c) 100-150 ml
  d) 20-100 ml

15. Ve folikulární fázi se bazální teploty pohybují maximálně pod
a) 36,9 °C
b) 36,6 °C
c) 36,3 °C
d) 36,0 °C
16. V průběhu ovulačního cyklu je obvyklý rozdíl mezi minimální a maximální bazální teplotou
a) 0,6-1,2 °C
b) 0,3-0,6 °C
c) jakékoli zvýšení
d) do 0,3 °C
17. Při funkčním corpus luteum trvá hypertermická fáze minimálně
a) 9 dnů
b) 7 dnů
c) 10 dnů
d) 8 dnů
18. Indikací к mikroabrazi endometria není
a) porucha menstruačního cyklu
b) metroragie
c) sterilita
d) infertilita
19. O předchozím porodu pacientky nezjišťujeme v anamnéze tento údaj
a) délku porodních dob
b) způsob ukončení porodu
c) hmotnost a délku novorozence
d) průběh šestinedělí
20. Při život ohrožujících akutních stavech odebíráme anamnézu
a) gynekologickou v celém rozsahu
b) gynekologickou a urologickou
c) omezujeme se na nejdůležitější údaje týkající se nynějšího onemocnění
d) vždy v celém rozsahu
21. Při hodnocení buněk v onkologické cytologii jsou nejdůležitější změny
a) plazmatické
b) buněčné
c) změny jadérek
d) jaderné
22. Mezi kontraindikace kymoinsuflace nepatří
a) výtok
b) menstruace či krvácení
c) předchozí oboustranná operace na vejcovodech
d) aktuální gynekologický zánět
23. Hodnocení cervikálního faktoru sterility; v preovulačním období se vlivem estrogenů v cervikálním hlenu tvoří typické krystaly
a) žádné
b) CaCl2
c) KC1
d) NaCl
24. Hodnocení cervikálního faktoru sterility; cervikální hlen je maximálně transparentní v době
a) ovulace
b) pozdní luteální fáze
c) časné folikulární fáze
d) časné luteální fáze
25. Při screeningu cervikálního karcinomu se uplatňují následující vyšetřovací metody
a) kolposkopie
b) punch biopsie
c) pouze cytologie
d) cytologie a selektivně HPV testace
26. К prebioptickým vyšetřovacím metodám při vyšetření děložního hrdla nepatří
a) kolposkopie
b) cytologie
c) HPV testace
d) punch biopsie
27. Kolposkopie je
a) základní screeningová metoda pro diagnostiku děložního hrdla
b) základní prebioptická metoda pro diagnostiku karcinomu děložního hrdla
c) je indikována při každém gynekologickém vyšetření
d) provedení není indikováno při abnormální cytologii
28. Nativní kolposkopii provádíme
a) po aplikaci 3% kyseliny octové
b) po aplikaci 5% kyseliny octové
c) po zastavení děložního hrdla
d) po aplikaci Lugolova roztoku
29. Collinsova zkouška slouží
a) к detekci patologického ložiska na děložním hrdle
b) к detekci patologického ložiska v pochvě
c) к detekci patologického ložiska na vulvě
d) к detekci patologického ložiska na endocervixu
30. Při kolposkopii léze na vulvě používáme
a) 3% kyselinu octovou
b) 5% kyselinu octovu
c) patentovou modř
d) Lugolův roztok
31. Nejvýhodnějeím tumorovým markérem při
vyšetření ovariální cyst u starších žen je
a) Ca 15-3
b) Ca 19-9
c) CEA
d) Ca 125
32. Při histologickém vyšetření biopsie endometria svědčí pro insufícienci žlutého tělíska časový posun mezi morfologickým vývojem a vypočtenou fází cyklu
a) o více než 1 den
b) o více než 2 dny
c) o více než 3 dny
d) o více než 4 dny
33. Kurcrokův-Millerův test
a) je synonymum pro postkoitální test
b) slouží к prověření invazivní schopnosti spermií v cervikálním hlenu
c) shoduje se s Kremerovým testem
d) Nižně se nepoužívá
34. test provádíme
a) při negativním progesteronovém testu
b) pn pozitivním progesteronovém testu
c) při pozitivním metoklopramidovém testu
d) pn negativním metoklopramidovém testu
35. Odběry krve na kontrolu koncentrace prolaktinu se nejlépe provádějí
a) ihned po probuzení
b) minimálně dvě hodiny po probuzení
c) v odpoleních hodinách
d) ve večerních hodinách
36. Při hysteroskopii není možné operačně odstranit
a) submukózní myom
b) subserózní myom
c) intrauterinní synechie
d) endometrialní polyp
37. Pro vyšetření hypofýzy je metodou volby
a) CT
b) NMR
c) UZ
d) rtg tureckého sedla
38. Kymoinsuflace patří mezi metody
a) Ienzometrické
b) endoskopické
c) prehiopticke
d) ultrazvukové
39. Po kymoinsuflaci
a) pacientka může ordinaci opustit ihned
b) do[»iručujeine krátkodobou hospitalizaci
c) pacientka může opustit ordinaci asi za 30 minut
d) paccentka může opustit ordinaci asi za 3 hodiny
40. Mezi tenzometrické metody nepatří
a) kymoinsuflace
b) plnicí cystometrie
c) profilometrie
d) uroflowmetrie
41. Nejvyšší senzitivitu pro záchyt chlamydiové urogenitální infekce mají
a) EIA
b) DFA
c) hybridizační metody
d) amplifikační metody
42. К endoskopickým metodám nepatří
a) hysteroskopie
b) laparoskopie
c) kolposkopie
d) cystoskopie
43. К indikacím hysteroskopie nepatří
a) podezření na vývojové anomálie
b) podezření na endometriózu
c) podezření na intrauterinní adheze (synechie)
d) podezření na submukózní myomy a polypy
44. Při kuldoskopii se endoskop zavádí
a) do peritoneální dutiny zadní poševní klenbou
b) do pochvy
c) do močového měchýře
d) do rekta
45. Vyšetření průchodnosti vejcovodů prováděné v průběhu laparoskopie z indikace sterility se nazývá
a) kymoinsuflace
b) chromopertubace
c) hydrotubace
d) salpingografie
46 К vyšetřovacím metodám u sterility nepatří
a) hysteroskopie
b) laparoskopie
c) kymoinsuflace
d) kolposkopie
47. Při diagnostické hysteroskopii se jako distenční médium používá
a) metylenová modř
b) rtg kontrastní látka
c) bezbarvá tekutina nebo plyn
d) cévkovaná moč
48. Mezi rtg vyšetřovací metody při vyšetřování mléčné žlázy nepatří
a) termografie
b) duktografie
c) cystografie
d) nativní mamografie
49. Hysteroskopické vyšetření neprovádíme
a) u nuligravid
b) u těhotných žen
c) u žen v postmenopauze
d) u žen užívajících hormonální antikoncepci
50. Základní urologickou anamnézu při neakutním přijetí u gynekologické pacientky odebíráme
a) jen při urologických potížích pacientky
b) jen při předchozích gynekologických nebo urologických operacích
c) vždy
d) jen při předchozích urologických onemocněních
51. Nykturie znamená
a) časté nucení na močení
b) pálení a řezání na močení
c) nutnost jít více než jedenkrát v noci močit
d) nutnost jít více než třikrát v noci močit
52. К typickým příznakům urgentní inkontinence nepatří
a) polakisurie
b) nykturie
c) dysurie
d) dyspareunie
53. O předchozím porodu pacientky zjišťujeme v anamenéze
a) hmotnost a délku novorozence
b) délku I. porodní doby
c) délku II. porodní doby
d) délku III. porodní doby
54. Při preventivní gynekologické prohlídce neprovádíme
a) vyšetření mikrobního poševního obrazu
b) kolposkopii
c) funkční cytologii
d) onkologickou cytologii
55. Laparoskopický přístup oproti přístupu laparotomickému zpravidla není lepší z hlediska
a) menší pooperační bolesti
b) celkového pooperačního dyskomfortu
c) délky operace
d) délky pooperační rekonvalescence
56. Při hodnocení buněk v onkologické cytologii jsou nejdůležitější změny
a) plazmatické
b) buněčné membrány
c) změny mitochondrií
d) změny jader buňky
57. Polymorfie znamená
a) rozdílné tvary buněk
b) změny jader
c) nestejně velké buňky
d) změnu nukleoplazmatického poměru
58. Po zjištění tubární gravidity při laparoskopické diagnostice je standardním řešením
a) laparoskopická adnexektomie
b) laparoskopická salpingotomie
c) laparoskopická salpingektomie
d) laparotomická salpingektomie
59. Vhodným tumorovým markérem pro sledování pacientek po operaci karcinomu děložního hrdla je
a) Ca I25
b) CEA
c) Ca I5-3
d) SCC
60. Ca 15-3 se zvyšuje hlavně
a) u karcinomu prsu
b) u karcinomu jater
c) u karcinomu děložního hrdla
d) u ovariálního karcinomu
61. Fyziologicky je menstruační krvácení nejsilnější
a) I.-2. den
b) 2.-3. den
c) stejná intenzita v průběhu celého cyklu
d) 3.-5. den
62. V diagnostice ektopické gravidity má největší výpovědní hodnotu
a) údaj o začátku poslední menstruace
b) výše B-hCG podjednotky
c) absence intrauterinní gravidity při UZ vyšetření
d) laparoskopie
63. Nejkratší trvání bifázického cyklu se udává
a) 19 dnů
b) I7 dnů
c) 2I dnů
d) 23 dnů
64. Při trichomoniáze je makroskopický výtok typicky
a) velmi sporý bílý
b) řídký pěnivý
c) tvarohovitý
d) zelený vazký hustý
65. V luteální fázi se bazální teploty pohybují minimálně nad
a) 37,8 °C
b) 39,2 °C
c) 36,9 °C
d) 37,5 °C
66. Při kapavce při vyšetření barveného preparátu nacházíme
a) grampozitivní diplokoky
b) gramnegativní diplokoky intracelulámě uložené
c) vibria
d) úlomky mycélií
67. Při baktírialní vaginóze zjišťujeme
a) pH < 3,5
b) pH 3,545
c) pH > 4,5
d) pH >6,0
68. Cervikální hlen jako součást cervikálního faktoru vyšetřujeme při
a) kolpitidě
b) infertilitě
c) sterilitě
d) pánevní bolesti
69. Tažnost cervikálního hlenu je maximální
a) v časné folikulíámí fázi
b) v časné luteální fázi
c) v pozdní luteální fázi
d) v preovulační fázi
70. IgA protilátky
a) jsou slizniční protilátky a v séru je nelze prokázat
b) jsou v séru přítomny u akutní infekce
c) mohou být markérem chronicky probíhající infekce
d) jsou přítomny pouze v séru
71. Po proběhlé infekci v séru běžně zjišťujeme
a) přítomnost IgM protilátek
b) přítomnost IgM a IgA protilátek
c) přítomnost IgG protilátek
d) přítomnost IgE protilátek
72. Bazální teplota se měří
a) vaginálně
b) axilámě
c) večer
d) 2krát denně
73. Křivku bazální teploty lze hodnotit minimálně po
a) jednom roce
b) třech cyklech
c) dvanácti cyklech
d) 14 dnech
74. Křivka bazálních teplot měřených denně v průběhu menstruačního cyklu prokazuje ovulaci/anovulaci se spolehlivostí
a) 100%
b) je neprůkazná
c) «0-95%
d) 50-80%
75. Která z uvedených metod nejspolehlivěji určuje protáhlou ovulaci
a) biopsie endometna
b) měření bazálních teplot
c) poševní cytologie
d) vyšetření cervikálního hlenu
76. Přítomnost IgM protilátek svědčí pro
a) chronickou infekci
b) proběhlou infekci
c) akutní infekci
d) anamnestické protilátky
77. Při fyziologické frekvenci menstruačního cyklu a sterilitě provádíme mikroabrazi nejvhodněji
a) při končící menstruaci
b) 26. den menstruačního cyklu
c) 16.-21. den menstruačního cyklu
d) 1. den menstruace
78. Biopsii endometria provádíme
a) v časné folikulámí fázi
b) v pozdní folikulámí fázi
c) v časné luteální fázi
d) v pozdní luteální fází těsně před očekávanou menstruací
79. V průběhu ovulace se v cervikálním hlenu snižuje
a) tažnost
b) množství
c) průhlednost
d) viskozita
80. Kvalitativní průkaz IgG protilátek v séru při diagnostice infekčního onemocněn' znamená
a) přítomnost akutní infekce
b) přítomnost chronické infekce
c) anamnestické protilátky
d) pacient přišel do kontaktu s onemocněním
81. Hodnocení cervikálního faktoru sterility. Vzhled zevní branky, tzv. »fenomén zračky«. Zevní branka je cyklicky maximálně rozšířena v období
a) ovulace
b) menstruace
c) luteální fáze
d) časné folikulá^ní fáze
82. Hodnocení cervikálního faktoru sterility. Cervikální hlen je maximálně transparentní v době
a) ovulace
b) pozdní luteální fáze
c) časné folikulámí fáze
d) časné luteální fáze
83. Hodnocení cervikálního faktoru sterility. Vyšetření cervikálního hlenu. Jeho viskozita je nejnižší
a) v časné luteální fázi
b) v době ovulace
c) v pozdní luteální fázi
d) v časné folikulámí fáz
84. Coeliskopie je
a) jiný název pro hysteroskopii
b) jiný název pro laparoskopii
c) název pro laparoskopii a kuldoskopii
d) jiný název pro kuldoskopii
85. Lokalizaci stenózy nebo uzávěru istmu vejcovodu určíme nejpřesněji při
a) laparoskopii
b) hysteroskopii
c) kombinaci laparoskopie a hysteroskopie
d) hysterosalpingografii
86. Hodnocení cervikálního faktoru sterility. Pokles viskozity cervikálního hlenu předchází zvýšení bazální teploty
a) o 10 dnů
b) o 5 dnů
c) o 3 dny
d) o 1 den
  
  `;

  const answers = `1c 2c 3d 4a 5c 6c 7a 8b 9a
  lOd 11b 12c 13c 14d 15a 16b 17c 18b 19a
  20c 21d 22c 23d 24a 25d 26d 27b 28c 29c
  30b 31d 32b 33b 34a 35b 36b 37b 38a 39c
  40d 41d 42c 43b 44a 45b 46d 47c 48a 49b
  50c 51c 52d 53a 54c 55c 56d 57a 58c 59d
  60a 61b 62d 63c 64b 65c 66b 67c 68c 69d
  70c 71c 72a 73b 74c 75a 76c 77b 78d 79d
  80d 81a 82a 83b 84c 85d 86c
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
        topic: ['3. Vyšetřovací metody v gynekologii. I. část'],
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
