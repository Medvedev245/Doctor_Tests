import { BtnContainer } from './LoadMore.styled';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const LoadMore = ({ currentPage, testsPerPage, totalTests, onPageChange }) => {
  const numPages = Math.ceil(totalTests / testsPerPage);

  const handlePageChange = (event, newPage) => {
    onPageChange(event, newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокрутка страницы в начало
  };

  return (
    <BtnContainer>
      <Stack spacing={2}>
        <Pagination
          count={numPages}
          color="primary"
          size="large"
          page={currentPage}
          onChange={handlePageChange} // Обработчик события с прокруткой в начало
        />
      </Stack>
    </BtnContainer>
  );
};

export default LoadMore;
