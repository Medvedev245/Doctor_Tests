import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../Pages/Home/Home'));

const AllTests = lazy(() => import('../../Pages/AllTests/AllTests'));
const Tests = lazy(() => import('../../Pages/Tests/Tests'));
const AnsweredQuestions = lazy(() =>
  import('../../Pages/AnsweredQuestions/AnsweredQuestions')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tests" element={<Tests />} />
        <Route path="AnsweredQuestions" element={<AnsweredQuestions />} />
        <Route path="alltests" element={<AllTests />} />
      </Route>
    </Routes>
  );
};
