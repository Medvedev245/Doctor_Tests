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
  1. Prvním důkazem ovulace na endometriu je
  a) povrchový edém stromatu
  b) vakuolizace pod jádrem buněk
  c) mitózy v epitelu a ve stromatu
  d) pseudostratifikace jader ve žlázách
  2. Cytodiagnostika maligních změn na endometriupředpokládá
  a) odběr aspirační technikou
  b) odběr buněk z endometria jakoukoli cytologickoutechnikou, stěr z cervixu a stěr z poševní klenby
  c) získání buněk výplachem
  d) odběr z endometria brush technikou
  3. Maturační index v cytodiagnostice je vyjádřen
  a) poměrem procenta buněk bazální vrstvy dlaždicovéhoepitelu к procentu buněk intermediálních a povrchových
  b) počtem povrchových buněk к počtu buněk bazálnícha parabazálních
  c) počtem buněk povrchové vrstvy dlaždicového epitelu к počtu buněk cyanofilních a eozinofilních
  d) počtem intermediárních epitelií na 100 spočtených
  4. Maturační index u testikulární feminizace bývá
  a) 100/0/0
  b) 50/50/0
  c) 30/70/0
  d) 0/20/80
  5. U syndromu gonadální dysgeneze nacházíme maturační index
  a) 90/10/0
  b) 0/20/80
  c) 0/0/90
  d) 1/10/90
  6. Umístění jádra v endocervikálních buňkách závisí na
  a) přítomností nebo nepřítomnosti zánětu
  b) funkčním stavu buňky
  c) zpracování cytologického stěru
  d) způsobu odběru a roztěru buněk
  7. Který stav na endometriu má nejnižší potenciál v jeho karcinogenezi
  a) atypická hyperplazie
  b) hyperplastické endometrium
  c) carcinoma in situ
  d) adenomatoidní hyperplazie
  8. Pro který typ karcinomu jsou nejcharakterističtějším znakem změny ve velikosti a tvaru jádra buněk doprovázené hyperchromazií
  a) pro adenoskvamózní karcinom
  b) pro carcinoma in situ
  c) pro endocervikální karcinom
  d) keratinizující dlaždicový karcinom
  9. Zdrojem buněk, které připomínají buňky parabazální v cytologickém stěru z portio vaginalis u ženy v reprodukčním období, je nejčastěji
  a) cervicitida
  b) dlaždicová metaplazie
  c) hyperkeratóza
  d) parakeratóza
  10. Maturační index u ročního děvčátka je
  a) 0/100/0
  b) 0/50/50
  c) 100/0/0
  d) 50/50/0
11. Index svinování buněk (folded index) dlaždicového epitelu znamená (při počtu na 100 buněk)
a) procento buněk hluboké vrstvy se stočenou cytoplazmou к buňkám nestočeným
b) méně než 7 buněk ve shlucích к procentu buněk I izolovánu),
c) procento stočených buněk hluboké vrstvy epitelu
d) procento zralých buněk se stočenou cytoplazmou к buňkám nestočeným bez ohledu na vzhled jádra
12. Crowded index (index shlukovací) znamená v hormonální cytodiagnostice 
a) %%crnofilnính huuěkve ehlucích : % inteemediáánich buněk izolovaných
b) (superficiálních) buněk ve shlucích : % buněk izohv^ých
c) ibuněk ve shlucích (více než 4): % buněk izolovaných
d) %liSogených buněk ve shlucích : ostatním buňkám nessočeinm izolovaným
18. Pro cytodiagnostiku benignity a malignity změn na cervixu odebíráme stěr
a) ze zadní poševní klenby
b) z portio vaginalis a postranní poševní klenby
c) z ektocervixu a endocervixu
d) z viditelné léze na ektocevixu
19. Junkční zóna u těhotných žen je nejpravděpodobněji
a) na vulvě
b) v endocervixu
c) v pochvě
d) na ektocervixu
20. Kolik Barrových tělísek můžeme očekávat v jádru buněk u pacientek s karyotypem XXXY
a) 4
b) 3
c) 1
d) 2
13. Froievem změněné polarity buněk a rychlého růstu ve tkáni jsou v cytologickém stěru
a) she^t like formace
b) uspořádím buněk do perel
c) izolované buňky superficiální z dlaždicového epitelu
d) jyncytiúlní shluky
21. Portio vaginalis z anatomického hlediska je synonymem pro
a) ektocervix
b) vagínu
c) vulvu
d) endocervix
14. Flazmafické buňky v cytologických sterech jsou ve všech uvedených případech kromě
a) dhždicové metaplazie
b) prollferace fbroblastů ve formacích granulační tkáně
c) u chronické cervicitidy bakteriálního původu
d) reakce epitelu na steroidní kontracepci
15. Cytologické změny sdružené s deficitem kyseliny listové můžeme snadno zaměnit za
a) změny po porodu
b) změny v těhotenství
c) irtpetickou infekci
d) změny po záření
16. Edrojem holých hypochrommích a zvětšených jader v cytologických stěrech z cervixu jsou  obvykle
a) amkterialni cytolýza buněk
b) buňky pocházející ze zhoubného nádoru
c) endocervikální buňky
d) autolýza parabazálních buněk
17. Jaký je vztah androgenů aplikovaných parente1 rálně nebo per os к epitelu horní třetiny pochvy  v generačním období
a) kariopicnoticky index stoupá
b) ba poševní epitel nepůsobí vůbec
c) navodí zvýšené odlučování buněk
d) zvyšují počet povrchových (superficiálních) buněk
22. Lidský papilomavirus (HPV) se v cytologických obrazech může projevit
a) změnami na buňkách, které označujeme jako koilocyty
b) změní mikrobní obraz poševní
c) cytolýzou buněk
d) sníží vyzrávání dlaždicového epitelu
23. Hrozící předčasný porod se projeví v cytologických obrazech získaných stěrem horní třetiny pochvy
a) sníženým zráním poševního epitelu
b) zvýšeným počtem povrchových buněk
c) zvýšeným počtem eozinofilních intermediámích buněk
d) shlukováním buněk
24. Jakou úlohu má dlaždicový epitel na portio vaginalis uteri
a) ochrannou
b) regenerační
c) absorpční
d) sekreční
25. Maturační index v cytodiagnostice je vyjádřen
a) počtem buněk povrchové vrstvy dlaždicového epitelu к počtu buněk cyanofilních a eozinofilních
b) poměrem procenta buněk bazální vrstvy dlaždicového epitelu к procentu buněk intermedármích a povrchových
c) počtem povrchových buněk к počtu buněk bazálních a parabazálních
d) počtem intermediálních epitelií na 100 spočtených
26. Buňky, které zřídka najdeme v cervikálním cytologickém stěru, mají však vztah к mimoděložnímu těhotenství, jsou
a) deciduální buňky
b) Langhanzovy buňky
c) buňky Arias Stella
d) buňky trofoblastu
27. Nemocná ve věku 65 let s granulózovým tumorem ovaria bude mít karyopyknotický cytologický index pravděpodobně
a) 30/70
b) 100/0
c) 0/100
d) 0/50
28. Biocenóza pochvy matky ohrožuje plod, pokud je osídlena uvedenými mikroorganismy kromě
a) Dóderleinova bacilu
b) chlamydií
c) neisserií
d) HSV
29. Nejčastějším histologickým důkazem ovulace je na endometriu
a) povrchový edém stromatu
b) pseudodeciduální reakce
c) mitóza v epitelu a stromatu
d) subnukleální vakuolizace
30. Proliferace buněk pod cylindrickým epitelem nad bazální membránou je formou
a) vaginální adenózy
b) dlaždicové metaplazie
c) nekrózy žláz
d) tuberkulózy
31. Polychromatická barvení pro funkční a onkologickou cytodiagnostiku jsou všechna kromě
a) barvení Magandiho
b) barvení Papanicolauova
c) barvení Massonova
d) barvení Mayova-Giemsova-Griinwaldova-Romanowského
32. Karyopyknotický index v cytologické diagnostice znamená (při počtu na 100 buněk)
a) % buněk eozinofilních : % superficiálních buněk
b) počet eozinofilních buněk ve stěru
c) % buněk superficiálních : % intermediálních buněk
d) počet povrchových cyanofilních epitelií ve stěru
33. Cytologický eozinofilní index je
a) počet eozinofilních intermediálních buněk
b) % superficiálních cyanofilních buněk : % intermediárních buněk
c) počet shluklých eozinofilních buněk
d) % eozinofilních buněk dlaždicového epitelu : % cyanofilních epitelií Gynekologie a porodnictví. Test]
34. Buňky pro hormonální cytodiagnostiku můžeme odebírat
a) ze všech oddílů pochvy
b) ze střední části pochvy
c) jen z horní třetiny pochvy
d) z ektocervixu a endocervixu
35. Nejlepší preparát pro hormonální cytodiagnostiku zhotovíme
a) stěrem z děložního čípku
b) jemným stěrem z postranní poševní klenby
c) aspirací ze zadní poševní klenby
d) aspirací z endocervixu
36. Který z roztoků nesmíme použít к fixaci cytologických preparátů
a) 90% etanol
b) izopropylalkohol
c) 100% metanol
d) 10% formalin
37. Buňky retikula, které jsou přítomny u některých pacientek při chronické cervicitidě, pocházejí
a) z granulační tkáně
b) z ulcerace submukózního myomu
c) z germinativní vrstvy lymfatických folikulů
d) z glykogenem bohatého epitelu cervixu
38. Polychromatické barvení v gynekologické cytodiagnostice se na buňkách neprojeví
a) diferenčním barvením (cytoplazma -jádro)
b) na cytoplazmě (eozinofilií a cyanofilií)
c) tak, že znázorní podrobnosti v jádru
d) tak, že dobře barví organely
39. Kolik různých barviv obsahuje polychromatické cytologické barvení podle Papanicolaoua
a) 2
b) 3
c) 5
d) 4
40. Liquid based cytologická technika zhotovení cytologických preparátů vyžaduje od klinika následující úkony kromě
a) instrument s odebranými buňkami ponořit do Tyrodova roztoku
b) instrument s odebranými buňkami oprat ve formolu
c) instrument s odebranými buňkami oprat v alkoholu
d) ponořit do jakékoli fixace v cytodiagnostice
41. Maligní buňky odlišuje od buněk z regeneračních (reparačních) procesů vše uvedené kromě
a) diatézy mezibuněčných prostor
b) syncytiálního uspořádání jader
c) hrubě chromatinové sítě
d) přítomnosti velikých jadérek
42. Charakteristický znak к rozlišení histiocytů od ostatních buněk je
a) barva cytoplazmy
b) zrnitý chromatin
c) vezikulámí (měchýřkovité)jádro
d) »pěnová« cytoplazma
43. Trhliny v buňkách způsobené jejich scvrknutím jsou často v preparátech, které obsahují
a) parazity
b) hlen
c) cytolýzu
d) erytrocyty
44. Psamomatózní tělíska jsou obsažena nejčastěji v genitálních adenokarcinomech z
a) vejcovodů
b) dělohy
c) ovaria
d) vulvy
45. Je-li na ektocervixu ektopie nebo ektropium, bude cytologický stěr z těchto míst obsahovat
a) cylindrické buňky
b) parabazální buňky
c) beziademé šupiny (squamy)
d) nezralé metaplastické buňky
46. Pro screeningové cytologické posouzení patologie na endometriu musí klinik pro cytopatologa odebrat stěry
a) z endocervixu a endometria
b) z ektocervixu a endometria
c) postačující je jen stěr z endometria
d) z pochvy, endocervixu a endometria
47. Při klinické diagnóze primární amenorey bude žádat klinik od cytopatologa vyšetření
a) Barrova tělíska
b) buněk endometria
c) maturačního indexu
d) biocenózy
48. Buněčný materiál pro cytodiagnostiku endometria se optimálně získává
a) výplachem děložní dutiny
b) výtěrem děložní dutiny
c) aspirací buněk z děložní dutiny
d) brush technikou za vizualizace
49. Pro rozlišení maligních buněk od buněk hyperplastických je nejdůležitější
a) zvětšení jádra
b) hyperchromazie jádra
c) uvolňování buněk ze skupin
d) atypická mitóza
50. Který z těchto nálezů v cervikovaginálních stěrech je důležitý v postmenopauze pro časné odhalení malignity endometria
a) normální buňky endometria během sekreční fáze cyklu
b) nevysvětlitelná estrogenní cytologická aktivita v seniu
c) jádra buněk endometria jsou 2krát větší než jádra intermediárních buněk
d) špinění nebo krvácení v postmenopauze
51. Které léze na děložním hrdle mají buňky s neprůhlednými hutnými jádry
a) velkobuněčný nerohovějící karcinom
b) keratinizující dlaždicový karcinom
c) malobuněčný karcinom
d) všechny adenokarcinomy
52. Který úkon v procesu přípravy cytologických preparátů způsobuje největší poškození buňky
a) air drying buněk před jejich fixací
b) veliký negativní tlak při filtraci
c) užití silného krycího skla při montování preparátu
d) buněčné vzorky dlouho uchovávané v konzervačním  prostředí
53. Nejdůležitějším cytologickým znakem, který pomáhá rozlišit maligní buňky od buněk hyperplastických, jsou
a) nepravidelnosti jadérek
b) atypické mitózy
c) snížení soudržnosti buněk
d) zvětšení jádra

  `;

  const answers = `
  1b 2b 3a 4d 5a 6b 7b 8d 9b
10c 11d 12c 13d 14d 15d 16c 17c 18c 19d
20d 21a 22a 23b 24a 25b 26c 27b 28a 29d
30b 31d 32c 33d 34c 35b 36d 37c 38d 39c
40b 41d 42d 43b 44c 45a,d 46d 47a,c 48d 49c
50b 51b 52a 53c
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
        topic: ['5. Cytodiagnostika v gynekologii. II. část postgraduální'],
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
