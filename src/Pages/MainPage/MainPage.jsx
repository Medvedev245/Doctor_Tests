import {
  SectionPic,
  SectionDescr,
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
        <ContainerDesc>
          {/* <ContainerText to="/">
            <MainDescr>Lékařské Zkoušky Online</MainDescr>
            <p>
              Your Essential Medical Exam Aid. Whether it's exam prep or
              expanding medical knowledge, find all you need for success at your
              fingertips.
            </p>
          </ContainerText> */}
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
              On this page you can familiarize yourself with all the existing
              tests on the site. View any test in full with correct answers and
              description.
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
      <SectionDescr>description</SectionDescr>
    </>
  );
};

export default MainPage;
