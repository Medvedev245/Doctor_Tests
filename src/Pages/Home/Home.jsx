import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Klener from '../../Files/Clener.json';
import Olomouc from '../../Files/Clener.json';
import Živný from '../../Files/Clener.json';
import { FormContainer } from './Home.styled';
import { Button } from 'Pages/Tests/Tests.styled';

//-----------------------------------------------------------------------

const text = [
  `31.1. Terapeutický efekt nitrátů a nitroglycerinu je limitován jevem, nazývaným
  1 a) inkompatibilita
  1 b) idiosynkrazie
  A}{c) tolerance
  1 d) intolerance
  31.2. Mezi látky, které zvyšují účinek Pelentanu patří
  A}{a) nesteroidní antirevmatika
  A}{b) kyselina acetylsalicylová a salicyláty
  A}{c) anabolické steroidy
  A}{d) cimetidin
  31.3. Mezi komplikace podávání Pelentanu patří
  A}{a) krvácení do GIT
  A}{b) tvorba podkožních hematomů
  A}{c) hematurie
  A}{d) nekrotické postižení pokožky
  31.4. Mezi léky snižující účinek Pelentanu patří
  A}{a) barbituráty
  A}{b) cholestyramin
  A}{c) karbamazepin
  A}{d) rifampicin
  31.5. Hořčík lze terapeuticky použít v kardiologii jako
  A}{a) antiarytmikum (přirozený blokátor kalciového kanálu)
  A}{b) jeden z hlavních léků u terapie digitalisové intoxikace
  1 c) kardiotonický prostředek
  1 d) prostředek, který zlepšuje AV převod
  31.6. Potenciální nebezpečí větších dávek námelových látek spočívá v
  1 a) hypertenzi
  1 b) poruchách krevního obrazu
  1 c) srdečním selhávání
  A}{d) ergotismu
  31.7. Nebezpečí ergotismu spočívá v
  A}{a) vzniku suché gangrény končetin
  A}{b) vzniku cévních vazospazmů
  A}{c) vzniku stavu zmatenosti
  A}{d) pocitech parestézií v končetinách
  31.8. V terapii hluboké žilní trombózy použijeme
  A}{a) injekční solubilní heparin
  A}{b) injekční heparin o nízké molekulární hmotnosti (např. Fraxiparine)
  1 c) venotonika
  1 d) masti s antikoagulačními látkami
  31.9. Mezi léky, které zvyšují krevní hladinu digitalisu patří
  A}{a) chinidin
  A}{b) amiodaron
  A}{c) diltiazem
  A}{d) verapamil
  31.10. K adekvátní terapii digitalisové intoxikace patří
  A}{a) podání specifických protilátek (Digidot)
  A}{b) úprava existující hypokaliémie
  A}{c) podávání injekčního fenytoinu (Epanutin)
  A}{d) podávání injekčního sulfátu hořčíku
  31.11. K digitalisem indukovaným arytmiím patří
  A}{a) komorová extrasystolie
  A}{b) prodloužení síňokomorového vedení
  A}{c) předsíňová tachykardie s AV blokádou
  A}{d) komorová tachykardie
  31.12. S nebezpečím srdeční zástavy je spojeno současné podání digitalisu a injekčního
  A}{a) kalcia
  A}{b) Strophantinu
  1 c) Syntophyllinu
  1 d) Cardilanu
  31.13. V terapii hypertenzní krize používáme
  1 a) teofylin
  A}{b) kaptopril
  1 c) alfa-metyldopa
  A}{d) nifedipin
  31.14. Které léky působí prodloužení intervalu QT na EKG
  A}{a) chinidin
  A}{b) prokainamid
  A}{c) tricyklická antidepresíva
  A}{d) amiodaron
  31.15. Bradykardii nepůsobí z následujících léků
  1 a) atenolol
  1 b) digitoxin
  A}{c) nifedipin
  A}{d) izoprenalin
  31.16. Při předávkování antikoagulancií typu Pelentan-Warfarin podáme
  1 a) i.v. Methiaden-Calcium
  1 b) vitamín C
  1 c) vitamín C + rutin (Ascorutin)
  A}{d) vitamín K (Kanavit) v injekcích či kapkách
  31.17. Při krvácivých projevech při terapii heparinem podáváme
  1 a) čerstvou plnou krev
  1 b) nespecifické inhibitory fibrinolýzy (EAC, Gumbix)
  1 c) injekční antihistaminika
  A}{d) protamin sulfát
  31.18. Akutní první lékařská pomoc u výrazné bradykardie (úplná AV blokáda atd.) spočívá v podání
  1 a) atropinu
  1 b) adrenalinu
  1 c) efedrinu
  A}{d) izoprenalinu
  31.19. K hlavním lékům, které používáme při léčení Raynaudova syndromu patří
  A}{a) pentoxyfylin (Trental)
  A}{b) nifedipin
  1 c) atropin
  1 d) kyselina acetylsalicylová
  31.20. Po podávání spazmolytik zvláště parenterální cestou se může objevit u pacienta zejména
  A}{a) akutní retence moči
  A}{b) porucha vizu
  1 c) zhoršení dechu
  1 d) nevolnost se zvracením
  31.21. Atropin bychom neměli nikdy podat u
  1 a) chronické exacerbované bronchitidy
  1 b) městnavého srdečního selhání
  1 c) ischemické choroby dolních končetin s klaudikacemi
  A}{d) zeleného zákalu (glaukomu)
  31.22. Při chronickém podávání glukokortikoidů musíme počítat se vznikem
  A}{a) hypokaliémie
  1 b) hypersekrece HCl v žaludku
  A}{c) poruchy glukózové tolerance
  1 d) spazmu dýchacích cest
  31.23. První pomoc u intoxikace etylénglykolem (Fridex) a metylalkoholem spočívá v
  A}{a) laváži žaludku
  A}{b) neprodleném požití koncentrovaného alkoholu
  A}{c) odeslání na akutní hemodialýzu
  1 d) podání větších dávek diuretik
  31.24. Hlavními vedlejšími účinky nesteroidních antirevmatik jsou
  A}{a) iritace sliznice žaludku a dvanáctníku
  A}{b) riziko poruch krevního obrazu
  A}{c) retence soli a tekutin
  1 d) poruchy sluchu
  31.25. Při nitrožilním podávání prokainu hrozí
  A}{a) hypotenze
  1 b) hypertenzní krize
  A}{c) alergická reakce
  1 d) fibrilace komor
  31.26. Při terapii hyperurikemického syndromu i při terapii dnavého záchvatu urikosuriky musíme brát v úvahu
  A}{a) nebezpečí akutní blokády ledvinových kanálků krystaly kyseliny močové
  A}{b) nutnost změny pH moči podáním alkalizujících prostředků
  1 c) vznik akutního zánětu vývodných močových cest
  1 d) snížení hodnot glomerulární filtrace
  31.27. Při podání opiátů a jejich derivátů je nutno počítat s nebezpečným ovlivněním
  1 a) stažlivosti myokardu
  A}{b) činnosti dýchacího centra
  1 c) průsvitu průdušinek
  1 d) krevního tlaku
  31.28. Při podávání antibiotik ze skupiny tetracyklinů nemá pacient současně užívat
  A}{a) sloučeniny vápníku
  1 b) vitamín C
  A}{c) mléko a mléčné nápoje
  1 d) paracetamol
  31.29. Jaká bude terapie prudkého vzestupu teploty s meningismem a febrilními křečemi
  1 a) Aspirin p.o.
  A}{b) chladné zábaly trupu a doplnění hydratace
  1 c) diazepam
  A}{d) paracetamolové čípky (Paralen)
  31.30. Při otravě benzodiazepiny je nejúčinnějším antidotem
  1 a) Nalorfin
  1 b) Leukovorin
  1 c) Natrium thiosulfát
  A}{d) Anexate (Flumazenil)
  31.31. Nežádoucí účinky fenytoinu zahrnují
  1 a) hemolytickou anémii
  b) megaloblastovou anémii při nedostatku vitamínu B12 1 B
  A}{c) hyperplazii dásní
  A}{d) neurotoxicitu
  31.32. Nežádoucí účinky podávání lithia zahrnují
  1 a) makrocytární anémie
  A}{b) polyurii a polydipsii
  1 c) poruchy vizu
  A}{d) třes
  31.33. Následující léčiva mají při běžném dávkování bakteriostatické působení
  A}{a) tetracykliny
  1 b) cefalosporiny
  A}{c) kotrimoxazol
  A}{d) erytromycin
  31.34. Následující léčiva způsobují retenci tekutin
  A}{a) nesteroidní antirevmatika
  1 b) chlorpromazin
  1 c) fenobarbital
  A}{d) estrogeny
  31.35. Spazmoanalgetika (typu Algifen) jsou především indikována u
  A}{a) spazmů trávicí trubice
  A}{b) žlučové a ledvinové koliky
  1 c) lumbaga
  1 d) neurologické spasticity
  31.36. Poškození ledvin může vyvolat
  1 a) fenytoin
  1 b) kolchicin
  A}{c) penicilamin
  A}{d) zlato
  31.37. Nežádoucí účinky streptomycinu
  1 a) zvyšuje současný deficit folátů
  A}{b) nevratné poškození sluchu
  1 c) se častěji vyskytují u chronického onemocnění jater
  A}{d) poškození ledvin
  31.38. Léky vyvolávající ikterus zahrnují
  1 a) fenobarbital
  1 b) hydralazin
  A}{c) p.o. anabolické steroidy
  A}{d) chlorpromazin
  31.39. Toxicita digoxinu vyvolává
  A}{a) zvracení
  A}{b) barevné vidění
  A}{c) supraventrikulární tachykardii s AV blokem
  A}{d) bigeminii
  31.40. Poškození jater může vyvolat
  A}{a) tetrachlormetan
  A}{c) tetracykliny
  A}{c) izoniazid
  A}{d) chloroform
  31.41. Ototoxicitu může vyvolat
  A}{a) neomycin
  1 b) lithium carbonicum
  A}{c) streptomycin
  1 d) vitamín A
  31.42. Nefrotoxicita byla popsána při podání
  A}{a) gentamycinu
  A}{b) polymyxinu B
  A}{c) zlata
  1 d) rifampicinu
  31.43. Nifedipin
  1 a) je derivát benzodiazepinu
  A}{b) je účinný u nemocných s vazospastickou anginou
  1 c) působí inhibicí fosfodiesterázy
  A}{d) má koronarodilatační působení
  31.44. Indikace terapie penicilaminem zahrnují
  A}{a) revmatoidní artritidu
  1 b) streptokokovou anginu
  A}{c) Wilsonovu chorobu
  1 d) akutní glomerulonefritidu
  31.45. Terapie digitoxinem
  1 a) je kontraindikována u síňové tachykardie
  A}{b) prodlužuje AV vedení
  1 c) pravděpodobně vyvolá projevy toxicity při hyperkalémii
  1 d) je prospěšná u hypertrofické obstrukční kardiomyopatie
  31.46. Správné je následující tvrzení o nitroglycerinu
  1 a) zhoršuje paroxyzmální noční dušnost
  A}{b) zmírňuje bolest při difúzním spazmu jícnu
  A}{c) může zmírnit bolest při biliární kolice
  1 d) zhoršuje bronchiální astma
  31.47. Terapie doxorubicinem (adriamycinem)
  1 a) se aplikuje formou nitrosvalových injekcí
  A}{b) má myelotoxické působení
  A}{c) vyvolává kardiomyopatii
  1 d) se provádí denně po dobu 21 dnů
  31.48. Chinidin
  1 a) má malý význam při terapii fibrilace síní
  A}{b) prodlužuje interval Q-T na elektrokardiogramu
  1 c) zvyšuje kontraktilitu myokardu
  A}{d) je kontraindikován u intoxikace digitalisovými přípravky
  31.49. Terapie status asthmaticus zahrnuje
  1 a) restrikci tekutin jako prevenci srdečního selhání
  1 b) aplikaci pethidinu při neklidu nemocného
  A}{c) nitrožilní aplikaci hydrokortizonu
  1 d) inhalaci b2-adrenomimetika
  31.50. Ikterus může být vyvolán léky
  1 a) vitamín E
  1 b) žlučové kyseliny
  A}{c) estrogeny
  A}{d) fenothiaziny (např. chlorpromazin)
  31.51. Indikace terapie glukokortikoidy zahrnují
  A}{a) atopická dermatitida (místní terapie)
  A}{b) revmatická polymyalgie
  A}{c) sarkoidóza
  1 d) Cushingův syndrom
  31.52. Správné tvrzení o nitrátech zahrnuje
  A}{a) lze je použít u většiny klinických forem anginy pectoris
  A}{b) u námahové anginy lze vynechat jejich večerní dávku
  1 c) nějběžnějším nežádoucím účinkem je methemoglobinémie
  1 d) mají hypertenzívní působení
  31.53. Při intoxikaci digoxinem lze podat
  A}{a) kalium i.v.
  1 b) kalcium i.v.
  1 c) infúzi NaCl
  A}{d) protilátky proti digoxinu
  31.54. Riziko digitalisové intoxikace zvyšují
  A}{a) anémie, hypoxémie
  1 b) p.o. přívod kalia
  A}{c) ischémie myokardu
  1 d) hyperkalémie
  31.55. Určete správné tvrzení o beta-blokátorech
  A}{a) jsou kontraindikovány u srdeční insuficience
  1 b) mají periferně analeptický účinek
  A}{c) používají se v terapii supraventrikulárních arytmií
  A}{d) snižují mortalitu pacientů po proběhlém infarktu
  31.56. Diuretikem volby plicního edému je
  A}{a) furosemid
  1 b) acetazolamid
  1 c) hydrochlorothiazid
  1 d) chlortalidon
  31.57. Moduretic nebo Rhefluin obsahují
  A}{a) hydrochlorothiazid, amilorid
  1 b) rezerpin, chlortalidon, DH-ergokristin
  1 c) metipranolol, chlortalidon, DH-ergokristin
  1 d) amilorid, chlortalidon
  31.58. Slabost, deprese a porucha koncentrace může být nežádoucí reakcí při 
  A}{a) podávání rezerpinu
  1 b) hypokalémii vlivem thiazidů
  1 c) hyponatrémii vlivem thiazidů
  1 d) podávání DH-ergokristinu
  31.59. Nežádoucí účinky dlouhodobého podávání thiazidových diuretik se projevují jako
  1 a) hyperkalémie, hyperglykémie
  1 b) hypokalémie, hypoglykémie
  A}{c) hypokalémie, hyperglykémie
  1 d) hyperkalémie, hypoglykémie
  31.60. Fyziologické dávky glukokortikoidů vyvolávají následující změny s výjimkou
  1 a) snížení glykogenu v játrech
  1 b) zvýšení glukoneogeneze
  1 c) zvýšení lipolýzy
  A}{d) snížení kardiovaskulární funkce
  31.61. Při terapii dny se jako základní mechanismus uplatňuje snížení syntézy kyseliny močové
  A}{a) alopurinolem
  1 b) kolchicinem
  1 c) kebuzonem (Ketazon)
  1 d) indometacinem
  31.62. Na počátku terapie dny může vyvolat zvýšenou frekvenci akutních dnavých záchvatů
  A}{a) alopurinol
  1 b) kolchicin
  1 c) probenecid
  1 d) indometacin
  31.63. Při trombolytické terapii akutního infarktu myokardu používáme
  A}{a) streptokinázu
  1 b) kyselinu acetylsalicylovou
  1 c) antiarytmika
  1 d) kalciové antagonisty
  31.64. Dlouhodobá glukokortikoidní terapie může mít následující komplikace
  A}{a) akutní nadledvinová nedostatečnost při jejím náhlém přerušení
  A}{b) vznik peptického vředu
  A}{c) akutní nadledvinová nedostatečnost při nadměrné zátěži i za několik měsíců po přerušení dlouhodobé terapie
  A}{d) nebezpečí infekčních komplikací
  31.65. Známé nežádoucí účinky kolchicinu zahrnují
  1 a) svalové křeče
  A}{b) těžkou abdominální bolest
  A}{c) hemoragickou gastroenteritidu
  1 d) reakce fotosenzitivity
  31.66. O D-penicilaminu platí následující tvrzení
  A}{a) vyvolává morbiliformní exantém
  A}{b) způsobuje eozinofilii
  A}{c) vyvolává ztrátu rozpoznání slané chuti
  A}{d) vyvolává poškození ledvin
  31.67. Léky indukovaný lupus erythematodes
  1 a) často způsobuje postižení ledvin
  A}{b) vyvolává artritidu
  A}{c) může vyžadovat glukokortikoidní terapii
  1 d) je vyvolán pyrazinamidem
  31.68. Tolerance na vazodilatační účinky nitrátů
  1 a) je projevem alergické reakce
  1 b) znamená naprostou ztrátu reaktivity na nitráty
  A}{c) zamezení vzniku tolerance napomáhá noční interval bez nitrátů
  A}{d) znamená pokles efektu při udržování trvale vysokých koncentrací nitrátů
  31.69. K sekundární prevenci tranzitorní mozkové ischémie se používají
  A}{a) salicyláty
  1 b) metipranol
  1 c) verapamil
  1 d) jodid draselný
  31.70. ACE-inhibitory se používají v terapii hypertenze, protože
  1 a) kompetitivně blokují účinek angiotenzinu na cévní svalovinu
  A}{b) snižují sekreci aldosteronu
  A}{c) jsou zvláště vhodné u těžší hypertenze provázené srdeční insuficiencí
  1 d) jsou účinné jen při zvýšené aktivitě reninangiotenzinového systému
  31.71. Terapeutické monitorování léčiv se osvědčuje
  A}{a) u antiepileptik
  A}{b) při vysokých dávkách metotrexátu
  A}{c) při podezření na toxicitu digoxinu
  1 d) při užívání diuretik
  31.72. Klinicky významná interakce může vzniknout při současném podání
  A}{a) p.o. antikoagulancia a nesteroidního antirevmatika
  A}{b) tetracyklinů a p.o. podávaného kalcia
  A}{c) nesteroidního antirevmatika a p.o. antidiabetika
  A}{d) chinidinu a digoxinu
  31.73. Nežádoucí účinky léku se projevují jako
  A}{a) nadměrná farmakologická odpověď
  A}{b) imunopatologické reakce
  A}{c) toxické účinky
  A}{d) léková závislost
  31.74. Střední koncentrace léčiva v ustáleném stavu je
  A}{a) přímo úměrná dávce
  1 b) nepřímo úměrná biologické dostupnosti
  1 c) přímo úměrná clearance léčiva
  A}{d) nepřímo úměrná dávkovacímu intervalu
  31.75. Úprava dávkování léčiva u snížené renální funkce zahrnuje
  A}{a) snížení dávky
  1 b) zkrácení dávkového intervalu
  A}{c) snížení dávky a prodloužení dávkového intervalu
  1 d) zvýšený přívod tekutin
  31.76. Při snížení renální funkce snižujeme dávkování
  A}{a) gentamicinu
  A}{b) digoxinu
  1 c) digitoxinu
  1 d) Trimepranolu
  31.77. Podpůrné faktory vzniku nežádoucí lékové reakce zahrnují
  A}{a) současné podávání více léčiv
  A}{b) multimorbidita
  A}{c) nežádoucí polékové reakce v anamnéze
  1 d) správná kompliance (užívání) léčiv
  31.78. Redukce dávkování při snížení renální funkce není nutná u
  1 a) lithia
  1 b) streptomycinu
  1 c) amikacinu
  A}{d) nitroglycerinu
  31.79. Při terapii bronchiální obstrukce používáme
  A}{a) teofylin
  1 b) nitroglycerin
  1 c) trimepranol (metipranolol)
  A}{d) beta-2-mimetika
  31.80. Snížení plazmatické clearance léčiv při ledvinové insuficienci závisí na
  A}{a) snížení glomerulární filtrace
  A}{b) podílu léčiva vyloučeného v nezměněné formě do moči
  1 c) jaterní eliminaci
  1 d) rychlosti konjugačních reakcí, např. vznik glukuronátů
  31.81. Kompliance (spolupráce lékaře s nemocným) při užívání léčiv je ovlivněna
  A}{a) výběrem léčiva a dávkovacím režimem
  1 b) stupněm lékové závislosti
  A}{c) věkem, vzděláním a typem osobnosti
  A}{d) charakterem vlastního onemocnění
  31.82. Ustálený stav (steady-state) při užívání léčiv
  A}{a) je dynamická rovnováha mezi rychlostí přívodu léčiva a jeho eliminací
  1 b) je rovnoměrný přívod léčiva do organismu
  1 c) při p.o. aplikaci koncentrace léčiva neoscilují
  A}{d) je vhodný pro terapeutické monitorování léčiv
  31.83. Vazba léčiva na bílkoviny krevní plazmy
  1 a) je vysoce specifická
  A}{b) brání pronikání molekul léčiva do tkání
  A}{c) může být podkladem nebezpečných interakcí
  1 d) uplatňuje se zejména u bazických léčiv
  31.84. Kumulace léčiva v organismu
  A}{a) znamená postupné zvyšování koncentrace při opakovaném podávání
  1 b) vzniká vždy při opakovaném podávání
  A}{c) je tím výraznější, čím kratší je dávkový interval
  A}{d) rozhodujícím činitelem je poměr biologického poločasu k dávkovému intervalu
  31.85. Distribuční objem látky
  1 a) je objem tělesných tekutin přístupných molekulám léčiva
  A}{b) může přesáhnout celkový objem vody v organismu
  A}{c) větší než objem plazmy je způsoben vazbou na tkáňové bílkoviny
  A}{d) je fiktivní objem, ve kterém je dané množství látky rozloženo rovnoměrně
  31.86. Lékem volby anaerobní infekce je
  1 a) ampicilin
  1 b) ampicilin a gentamicin
  A}{c) metronidazol
  1 d) tetracykliny
  31.87. Biologický poločas eliminace
  1 a) závisí na lékové formě
  1 b) je jediným faktorem kumulace léčiva
  A}{c) je doba, za kterou počáteční koncentrace poklesne na polovinu původní hodnoty
  A}{d) umožňuje určit dobu, za kterou se vyloučí převážná část léčiva
  31.88. Efekt prvního průtoku játry
  A}{a) udává frakci podané dávky, která se při průchodu portální krví v játrech inaktivuje
  1 b) lze stanovit zjištěním množství látky vyloučené stolicí
  1 c) je faktorem metabolické indukce
  1 d) je zvlášť významný u léčiv vylučovaných v nezměněné formě ledvinami
  31.89. Biologická dostupnost
  A}{a) udává frakci podané dávky, která se dostane do systémové cirkulace
  1 b) při p.o. podání závisí pouze na vstřebání z trávicího ústrojí
  1 c) zahrnuje dostupnost přírodních léčiv
  1 d) nezávisí na perorální lékové formě
  31.90. K tetracyklinovým antibiotikům řadíme
  A}{a) doxycyklin
  1 b) amoxycilin
  A}{c) rolitetracyklin
  1 d) amikacin
  31.91. Mezi makrolidy řadíme
  A}{a) erytromycin
  A}{b) roxitromycin
  1 c) streptomycin
  1 d) gentamicin
  31.92. Mezi preventivní imunofarmaka bronchiálního astmatu řadíme
  A}{a) ketotifen
  A}{b) kromoglykát
  1 c) aminofylin
  1 d) mukolytika
  31.93. Statiny v terapii hyperlipoproteinémií snižují zejména
  1 a) cholesterol
  A}{b) triacylglyceroly
  1 c) fosfolipidy
  1 d) žlučové kyseliny
  31.94. Při farmakoterapii akutní anafylaktické polékové reakce lze použít
  A}{a) adrenalin
  A}{b) hydrokortizon
  1 c) ketotifen
  1 d) kromoglykát
  31.95. Parasympatolytika
  A}{a) jsou obsažena ve spazmoanalgeticích
  A}{b) atropin lze použít při otravě organofosfáty
  A}{c) atropin je kontraindikován při glaukomu
  A}{d) se používají jako mydriatika
  31.96. Parasympatomimetika
  1 a) jsou součástí spazmoanalgetik
  A}{b) používáme v terapii glaukomu a myasthenia gravis
  1 c) se používají při otravě organofosfáty
  1 d) se používají v terapii hypertenze
  31.97. Při předávkování vitamínu D vzniká
  A}{a) hyperkalcémie
  1 b) osteomalacie
  1 c) průjem
  1 d) hypernatrémie
  31.98. V terapii megaloblastické anémie přichází v úvahu
  a) vitamín B12 A}{ B
  A}{b) kyselina listová
  1 c) pyridoxin
  1 d) erytropoetin
  31.99. Označte pravdivé tvrzení
  A}{a) flumazenil (Anexate) je antidotum pro benzodiazepiny
  1 b) leukovorin je antidotum pro cyklofosfamid
  A}{c) Nalorfin je antidotum pro morfin
  1 d) acetylcystein je antidotum pro salicyláty
  31.100. Účinek kumarinů hodnotíme
  A}{a) INR protrombinového času
  1 b) APTT ve vteřinách
  1 c) podle Lea-Whiteho v minutách
  1 d) počtem petechií testu Rumpela-Leeda
  
  `,
];

//1 возвращает вопрос и ответы сначала поменять на }{
const parseText = text => {
  return text[0]
    .split(/\d+\.\d+\. /)
    .filter(item => item.trim())
    .map(item => {
      const [question, ...options] = item.split('\n').map(line => line.trim());
      const optionsArray = options.map(option => option.trim());
      const newText = optionsArray
        .map(el => el.split(')').slice(1).join(')').trim())
        .filter(text => text !== ''); // Фильтруем пустые строки;
      console.log(newText);
      const answers = optionsArray.filter(elem => elem.includes('}{'));
      const newAnswer = answers.map(el =>
        el.split(')').slice(1).join(')').trim()
      );
      console.log(answers);

      return {
        question,
        answers: newText,
        book: ['Klener'], // Пример значения для поля "book"
        topic: ['Farmakologie'], // Пример значения для поля "topic"
        correctAnswers: newAnswer, // Массив с правильными ответами
      };
    });
};

const result = parseText(text);
console.log(result);

//---------------------------------------------------------

const Home = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const dispatch = useDispatch();
  const elements = useSelector(state => state.testsReducer.selectedOption1);
  const elements2 = useSelector(state => state.testsReducer.selectedOption2);
  const elements3 = useSelector(state => state.testsReducer.questions);

  const handleOption1Change = event => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = event => {
    setSelectedOption2(event.target.value);
  };

  const generateTests = (one, two) => {
    let selectedFile;
    switch (one) {
      case 'Klener':
        selectedFile = Klener;
        break;
      case 'Olomouc':
        selectedFile = Olomouc;
        break;
      case 'Živný':
        selectedFile = Živný;
        break;
      default:
        selectedFile = Klener;
    }

    const number = [];
    const selectedNamesArray = [];

    // Generate 3 random numbers
    while (number.length < two) {
      const randomNum = Math.floor(Math.random() * selectedFile.length);
      if (!number.includes(randomNum)) {
        number.push(randomNum);
      }
    }

    // Push names corresponding to the generated numbers
    for (const num of number) {
      selectedNamesArray.push(selectedFile[num]);
    }

    return selectedNamesArray;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const myTests = generateTests(selectedOption1, selectedOption2);
    // addState(selectedOption1, selectedOption2, myTests);
    dispatch({
      type: 'ADD_OPTIONS',
      payload: { selectedOption1, selectedOption2, myTests },
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <label htmlFor="select1">Выбери базу</label>
        <select
          id="select1"
          value={selectedOption1}
          onChange={handleOption1Change}
        >
          <option value="Klener">Klener</option>
          <option value="Olomouc">Olomouc</option>
          <option value="Živný">Živný</option>
        </select>
      </div>
      <div>
        <label htmlFor="select2">Выбери количество тестов</label>
        <select
          id="select2"
          value={selectedOption2}
          onChange={handleOption2Change}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>
      <Button type="submit">Выбрать</Button>
      {elements3.length > 0 && <Link to={'/tests'}>Начать !</Link>}
      <div>
        Ты выбрал -{elements},{elements2}
      </div>
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
                <div>
                  "correctAnswers": ["{el.correctAnswers}"]{'},'}
                </div>
                <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    </FormContainer>
  );
};

export default Home;
