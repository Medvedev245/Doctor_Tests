import { Path, SvgIcons } from 'components/Footer/Footer.styled';
import {
  SectionPic,
  MainDescr,
  ContainerText,
  MainText,
  ContainerDesc,
} from './MainPage.styled';

const MainPage = () => {
  return (
    <>
      <SectionPic>
        <MainText>What we do?</MainText>
        <p style={{ textIndent: '15px', marginBottom: '20px' }}>
          Ahoj všichni! Stránka byla vytvořena pro lékaře jako pomocník při
          přípravě na testy a zkoušky obecně. Prozatím i v budoucnu bude tento
          zdroj zcela zdarma.
        </p>
        <ContainerDesc>
          <ContainerText to="page">
            <MainDescr>Take a tests</MainDescr>
            <p>
              On this page you can take a test on the selected topic. Preview
              the correct answer and the overall test result
            </p>
          </ContainerText>
          <ContainerText to="AllTests">
            <MainDescr>All Tests</MainDescr>
            <p>
              In this tab you can view all existing tests on the site. View any
              test in full with correct answers and description.
            </p>
          </ContainerText>
          <ContainerText to="MyBase">
            <MainDescr>My Base</MainDescr>
            <p>
              In this tab you can create your own selection of tests from all
              existing ones. Add or remove tests.
            </p>
          </ContainerText>
          <ContainerText to="video">
            <MainDescr>Video</MainDescr>
            <p>
              This section of the site contains videos on various specialties.
              YouTube channels with medical topics, IPVZ and more.
            </p>
          </ContainerText>

          {/* <ContainerText>
            <MainDescr>Materials</MainDescr>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed qui
              ipsam iusto, fugit quae eveniet iste illo quam recusandae
              voluptate at sint
            </p>
          </ContainerText> */}
          {/* <ContainerText>
            <MainDescr>Lorem ipsum</MainDescr>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed qui
              ipsam iusto, fugit quae eveniet iste illo quam recusandae
              voluptate at sint
            </p>
          </ContainerText> */}
        </ContainerDesc>
      </SectionPic>
      <SectionPic>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Описание</h3>
        <p style={{ textIndent: '15px' }}>
          Всем привет! Сайт создан для врачей в качестве помощника при
          подготовке к сдаче тестов и экзаменов в целом. На данный момент и в
          дальнейшем ресурс будет абсолютно бесплатным.
        </p>
        <br />
        <p style={{ textIndent: '15px' }}>
          В разделе "Take a test" Вы можете пройти тестирование, выбрав базу,
          количество вопросов и узнать результат.
        </p>
        <br />
        <p style={{ textIndent: '15px' }}>
          В разделе "All tests" Можно выбрать базу для изучения и анализа.
        </p>
        <br />
        <p style={{ textIndent: '15px' }}>
          В разделе "My Base" Вы можете создать свою собственную выборку тестов
          из всех существующих. Добавлять или удалять тесты.
        </p>
        <br />
        <p style={{ textIndent: '15px' }}>
          В разделе "Video" собраны полезные YouTube каналы и видеоматериалы о
          легислативе.
        </p>
        <br />
        <p style={{ textIndent: '15px' }}>
          В разделе "Video" собраны полезные YouTube каналы и видеоматериалы о
          легислативе.
        </p>
        <br />
        <p style={{ textIndent: '15px' }}>
          <strong>
            Если у Вас есть еще полезные видео или кто-то хочет помочь в
            создании базы тестов, пишите мне, буду очень благодарен!
          </strong>
        </p>
        <div>
          <a
            href="https://t.me/Ihor437"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgIcons>
              <Path d="M16 0c-8.838 0-16 7.162-16 16s7.162 16 16 16 16-7.163 16-16-7.163-16-16-16zM23.863 10.969l-2.625 12.369c-0.181 0.881-0.712 1.087-1.45 0.681l-4-2.956-1.919 1.869c-0.225 0.219-0.4 0.4-0.8 0.4-0.519 0-0.431-0.194-0.606-0.688l-1.363-4.475-3.956-1.231c-0.856-0.262-0.862-0.85 0.194-1.269l15.412-5.95c0.7-0.319 1.381 0.169 1.113 1.25z"></Path>
            </SvgIcons>
          </a>
        </div>
      </SectionPic>
    </>
  );
};

export default MainPage;
