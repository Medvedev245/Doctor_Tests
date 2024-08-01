import React from 'react';
import { Path, SvgIcons } from 'components/Footer/Footer.styled';
import { useDispatch } from 'react-redux';
import {
  SectionPic,
  MainDescr,
  ContainerText,
  MainText,
  ContainerDesc,
} from './MainPage.styled';
import { CLEAR_STATE } from 'store/testsReducer';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const clearState = () => {
    dispatch(CLEAR_STATE());
  };

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
          <ContainerText onClick={clearState} to="page">
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
        </ContainerDesc>
      </SectionPic>
      <SectionPic>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Описание</h3>
        <p style={{ textIndent: '15px', color: 'rgb(0 119 255)' }}>
          Какую базу вы бы еще хотели видеть на сайте ? Скидывайте в телеграмм.
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
