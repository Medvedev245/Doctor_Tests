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
  1. Je-li závěrem biochemického screeningu AFP, hCG a Ej z krve těhotné v 16 týdnu těhotenství  zvýšené riziko NTD
  a) provedeme amniocentézu
  b) je u těhotné indikováno konziliámí UZ vyšetření
  c) začneme těhotné podávat 400mg kyseliny listové  3krát denně
  d) provedeme kordocentézu
  2. Je-li biochemický screening AFP, hCG a E, z krve  těhotné v 16 týdnu těhotenství pozitivní
  a) provedeme nový odběr krve těhotné, a je-li pozitivní,  doporučíme další vyšetření
  b) provedeme amniocentézu
  c) odešleme těhotnou na genetickou konzultaci
  d) není třeba činit nic, pozitivita biochemického  screeningu je bezvýznamná
  3. Amniocentézu provádíme
  a) klasickou po ukončeném 15 týdnu těhotenství
  b) v lokální anestezii
  c) vždy vpichem ve střední čáře asi 2 cm pod pupkem
  d) za kontinuální kontroly ultrazvukem
  4. Amniocentézu provádíme
  a) za žádných okolností ne transplacentámě
  b) u těhotné se zvýšeným rizikem chromosomální aberace plodu
  c) u všech těhotných před 35 rokem věku
  d) za kontinuální fetoskopické kontroly
  5. Který z následujících výroků o CVS je pravdivý
  a) riziko abortu po CVS je 7 %
  b) nevýhodou metody je 4 týdny trvající kultivace odebraného vzorku
  c) je nejčastěji používanou metodou prenatální diagnostiky
  d) je to zkratka anglického termínu pro biopsii choria
  6. Které z následujících výroků o biopsii choria jsou pravdivé
a) v současné době se provádí již jen transabdominálně, transcervikální přístup je zcela zavržen
b) к provedení analýzy je nezbytné získat 60 mg materiálu
c) nemá se provádět před ukončeným 10 týdnem těhotenství
d) v současnosti ji z větší části nahradila amniocentéza
7. Punkce pupečníku
a) vyžaduje několikadenní hospitalizaci
b) je jako diagnostická metoda indikována pro stanovení karyotypu, není-li dostatek času pro kultivaci amniocytů
c) se provádí vždy v lokální anestezii
d) se provádí výhradně za kontinuální ultrazvukové kontroly
8. Punkce pupečníku
a) kontaminace odebrané fetálm krve krví matky je vzhledem к přímé vizualizaci odběru vyloučena
b) je indikována zejména pro stanovení karyotypu a při ohrožení plodu Rh izoimunizací
c) umožňuje stanovení fetálního karyotypu během řádově několika hodin, protože se vyšetřují fetální erytrocyty
d) je metodou volby pro stanovení karyotypu, selže-li kultivace plodové vody
9. Indikací к punkci pupečníku může být
a) diagnostika NTD
b) žádná odpověď neplatí
c) preeklampsie
d) hrozící předčasný porod
10. Který z následujících stavů je spojen se zvýšenou koncentrací AFP
a) trisomiežl
b) hrozící potrat
c) stav po krvácení v prvním trimestru
d) trisomie 18
11. Nuchální translucence
a) nad 2 mm je vždy patologická
b) cut-off hodnota závisí na gestačním stáří
c) je prosvětlení v oblasti nosu plodu
d) je nejsilnějším markérem chromosomální aberace v II trimestru gravidity
12. Pro rtg vyšetření v těhotenství platí
a) rtg vyšetření je v těhotenství metodou volby
b) dávka záření při jednom snímku je hluboko pod hranicí považovanou za teratogenní
c) rtg pelvimetrie je indikována před porodem u plodu v poloze koncem pánevním
d) dávka rtg záření v I. trimestru způsobující VVV plodu je 500 m/Gy
13. Který výrok o poloze plodu je pravdivý
a) je-li plod v poloze koncem pánevním, je vždy hodnocení srdeční struktury obtížnější
b) je-li plod uložen přední stěnou břišní směrem к sondě, je hodnocení srdce většinou nemožné
c) je-li plod v poloze KP, lze provádět biometrii obdobně jako při poloze podélné hlavičkou
d) je-li plod v poloze příčné, není možné měřit BPD
14. Které následující výroky o měření HC jsou pravdivá
a) je prováděno na úrovni cerebela
b) je většinou považováno za méně přesné než BPD
c) je většinou považováno za přesnější než BPD
d) je prováděno na úrovni cavum septi pellucidum
15. Vizualizace čtyřdutinové srdeční projekce umožňuje posouzení
a) pozice srdce a velikosti komor
b) průchodnost venrikuloarteriálních chlopní
c) průchodnost atrioventrikulámích chlopní
d) relativní šířku odstupu aortálního kmene z levé komory
16. V čtyřdutinové projekci srdeční není možno diagnostikovat
a) transpozici velkých cév
b) Ebsteinovu anomálii
c) hypoplastické levé srdce
d) ductus arteriosus patens
17. Který ze srdečních oddílů se v čtyřdutinové projekci zobrazuje nejblíže к páteři
a) levá komora
b) pravá síň
c) pravá komora
d) levá síň
18. O čtyřdutinové projekci srdce plodu v 18-22 týdnu těhotenství platí
a) velikost levé a pravé srdeční komory je přibližně stejná
b) velikost pravé komory je zřetelně větší než komory levé
c) interventrikulámí septumje kontinuální (intaktní)
d) úpon trojcípé chlopně na interventrikulámí septumje asi ve dvou třetinách vzdálenosti mezi hrotem srdce a úponem chlopně dvojcípé
19. Přítomnost křížení velkých cév můžeme hodnotit
a) ve čtyřdutinové projekci
b) v krátké srdeční ose
c) v dlouhé srdeční ose
d) v jakékoli projekci, ale nejdříve v 22 týdnu těhotenství
20. Příznak »pečetního prstenu*
a) je známkou rozštěpu neurální trubice
b) nás vede к podrobnějšímu zhodnocení morfologie uropoetického systému
c) je známkou přítomnosti pouze 2 cév pupečníku
d) nás vede к podrobnějšímu zhodnocení morfologie plosky plodu
21. Za UZ marker Downova syndromu považujeme
a) nepřítomnost nosní kosti plodu
b) patologický nález srdeční anatomie typu septum secundum
c) patologický nález srdeční anatomie typu septum primům
d) sandal gap
22. Které z následujících tvrzení o fetálním močovém měchýři je pravdivé
a) pokud není močový měchýř vidět, je přítomna malformace uropoetického systému
b) plod močí asi jednou za hodinu
c) pokud se močový měchýřjeví distendovaný, je přítomna malformace uropoetického systému
d) přítomnost plného močového měchýře znamená, že je funkční alespoň jedna ledvina
23. Golf ball sign hledáme
a) v postranní mozkové komoře
b) v levé srdeční komoře
c) v pravé srdeční síni
d) v plodové vodě
24. Při nálezu lemon sign máme podezření na
a) zvýšenou kyselost vnitřního prostředí plodu
b) NTD
c) defekt přední stěny břišní
d) meningomyelokéla
25. Lemon sign je
a) suspektní UZ nález odchylky tvaru lebečních kostí na příčném průřezu svědčící pro možnou přítomnost rozštěpu rtu
b) suspektní UZ nález odchylky tvaru lebečních kostí na příčném průřezu svědčící pro možnou přítomnost rozštěpu páteřního kanálu
c) diagnostický nález potvrzující přítomnost NTD
d) změna konfigurace lebečních kostí s maximem v okcipitální oblasti
26. Která z následujících tvrzení o normální noze plodu v 19 týdnu těhotenstvíjsou pravdivá
a) ploska nohy je viditelná ve stejné rovině jako tibie
b) femurje o trochu delší než humerus
c) ještě není možno zhodnotit počet prstů
d) je již možné zobrazit fibulu
27. V kterém týdnu těhotenstvíje možné transvaginálně hodnotit všechny dlouhé kosti a prsty nohou a rukou
a) v 6
b) v 10
c) v 14
d) v 18
28. Které z následujících tvrzení o fetálním střevě je pravdivé
a) peristaltika je viditelná na tenkém střevě, na tlustém ne
b) peristaltika je viditelná na tlustém střevě, ale na tenkém ne
c) přítomnost hyperechogenního mekonia v tenkém střevě na počátku druhého trimestru je normální
d) přítomnost hyperechogenního mekonia v tenkém střevě na počátku druhého trimestru je příznakem intrauterinního stresu plodu
29. Co není součástí UZ zhodnocení hrudní oblasti plodu
a) zhodnocení kontinuity bránice
b) stanovení L-S ratio
c) zhodnocení polohy srdce
d) zhodnocení tvaru hrudníku
30. Která z tvrzení o placentě jsou pravdivá
a) úpon pupečníku není možno zobrazit
b) tloušťka normální placenty je 1,5-4cm
c) placenta může být uložena kdekoli v děloze
d) matemální žíly drénující krev z oblasti placenty jsou uloženy při placentámím okraji
31. Při přítomnosti pouze jedné umbilikální arterie je vyšší riziko vývojových vad v systému
a) uropoetickém
b) centrálním nervovém
c) gastrointestinálním
d) kardiovaskulárním
32. Herniace střeva do úponu pupečníku u plodu v 11 týdnu těhotenstvíje nejspíše
a) gastroschíza
b) omfalokéla
c) fyziologická hemiace
d) peristaltika
33. Redukci počtu plodů u vícečetného těhotenství provádíme
a) v I. trimestru
b) podvazem pupečníku redukovaného plodu
c) intrakardiální injekcí roztoku KC1
d) pouze při prokázané chromosomální aberaci některého z plodů
34. Charakteristickou známkou bichorionicity je
a) lemon sign
b) golf ball sign
c) lambda sign
d) banana sign
35. Srostlice vznikají
a) jen u jednovaječných dvojčat
b) i u dvojvaječných dvojčat
c) při rozdělení blastomery před 9 dnem od fertilizace
d) při rozdělení blastomery po 12 dnu od fertilizace
36. Pro průtok spirální arterií od začátku druhého trimestru je charakteristická
a) vysoká rezistence a vysoký tok v diastole
b) nízká rezistence a nízký tok v diastole
c) vysoká rezistence a nízký tok v diastole
d) nízká rezistence a vysoký tok v diastole
37. Přítomnost bilaterálního notch v časné diastole a. uterina je
a) normální nález v celém průběhu těhotenství
b) normální před 16 týdnem, ale abnormální po 20 týdnu těhotenství
c) abnormální celé těhotenství
d) běžně přítomen po 20 týdnu těhotenství
38. Které z následujících výroků o fetálním dopplerovském vyšetřeníjsou pravdivé
a) u fyziologického plodu není nikdy přítomen pozitivní tok v endiastole
b) nízké PI v a. umbilicalisje známkou intrauterinního stresu plodu
c) přítomnost pulsace v umbilikální žíle je známkou dobrého stavu plodu
d) dýchací pohyby plodu ovlivňují křivku průtoku v umbilikální žíle
39. UZ nález u abrupce placenty může být
a) retroplacentámí hypoechogenní ložisko
b) ztluštění placenty
c) retroplacentámí ložisko různé echogenity
d) normální
40. Chorioangiom placenty
a) není vždy možno detekovat pomocí UZ
b) je maligní lézí placenty cévního původu
c) je velmi často spojen s dalšími patologiemi placenty
d) je nejčastějším placentámím tumorem
41. Který z následujících nálezů cervikometrie nejvíce svědčí pro diagnózu zvýšeného rizika předčasného porodu
a) délka cervikálního kanálu 20 mm, vnitřní branka tvaru Y bez progrese při Valsalvově manévru
b) délka cervikálního kanálu 30 mm, vnitřní branka tvaru T
c) délka cervikálního kanálu 11 mm, funneling s progresí při Valsalvově manévru
d) žádný z uvedených nálezů pro riziko předčasného porodu nesvědčí
42. Amniální pruh
a) je provazcovitá struktura tvořená převážně amniem, která nijak neohrožuje vývoj plodu
b) je provazcovitá struktura tvořená převážně choriem, která nijak neohrožuje vývoj plodu
c) může být etiologickým odkladem redukčních transverzálních abnormalit končetin plodu
d) je hyperpigmentace amnia způsobená zvýšenou produkcí melaninu v těhotenství
43. Který z následujících nálezů provází IUGR
a) snížení rezitence v a. uterina
b) polyhydramnion
c) oligohydramnion
d) zvýšený diastolický tok v a. umbilicalis
44. Nález zvýšené rezistence v a. umbilicalis je často provázen
a) symetrickou IUGR
b) asymetrickou IUGR
c) sníženou rezistencí v arteria cerebri media
d) zvýšenou rezistencí v arteria cerebri media
45. Při anencefalii plodu
a) je vždy přítomen lemon sign
b) BPD není možno změřit
c) chybí obličejová část lebky
d) vývoj mozku plodu je až do porodu normální
46. Ultrazvukové vyšetření v I. trimestru
a) neprovádíme, UZ má prokazatelně teratogenní účinek
b) je zásadní pro určení chorionicity vícečetného těhotenství
c) umožňuje přesnější odhad stáří těhotenství než po 20 týdnu těhotenství
d) nemá smysl


  
`;

  const answers = `
  1b 2c 3a,d 4b 5d 6c 7b,d 8b,d 9b
10b.c 11b 12b 13c 14c,d 15a,c 16a,d 17d 18a,c 19b,c
20b,c 21a,b,d 22b,d 23b 24b,d 25b 26b,d 27c 28a,c 29b
30b,c 31a,b,d 32c 33a,c 34c 35a,d 36d 37b 38d 39a,b,c,d
40a,d 41c 42c 43c 44b,c 45b 46b,c
  
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
          '14. Genetické poradenství a fetální medicína. II. ČÁST POSTGRADUÁLNÍ',
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
