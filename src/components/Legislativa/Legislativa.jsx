import { ItemContainer, ItemElement } from './Legislativa.styled';

const Legislativa = () => {
  //   console.log(VideoCanals);
  return (
    <>
      <div>
        <ItemContainer>
          <ItemElement>
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/2q6b5R9xyfE"
              title="1"
              allowFullScreen
            />
          </ItemElement>
          <ItemElement>
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/XsrQ6lu0UgQ"
              title="1"
              allowFullScreen
            />
          </ItemElement>
          <ItemElement>
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/KSkeUONtmIE"
              title="1"
              allowFullScreen
            />
          </ItemElement>
        </ItemContainer>
      </div>
    </>
  );
};

export default Legislativa;
