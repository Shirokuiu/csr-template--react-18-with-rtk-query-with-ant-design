import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from 'src/components/pages/main-page/main-page';
import SvgSprite from 'src/components/shared/svg-sprite/svg-sprite';
import { PageRoutes } from 'src/constants/routes';

const FormModalSvgIconsExample = lazy(
  () => import('src/components/pages/form-modal-svg-icons-example/form-modal-svg-icons-example'),
);
const ReduxExamplePage = lazy(
  () => import('src/components/pages/redux-example-page/redux-example-page'),
);
const FontsExamplePage = lazy(
  () => import('src/components/pages/fonts-example-page/fonts-example-page'),
);
const DataFetchByRtkQueryExamplePage = lazy(
  () =>
    import(
      'src/components/pages/data-fetch-by-rtk-query-example-page/data-fetch-by-rtk-query-example-page'
    ),
);

function App() {
  return (
    <>
      <Routes>
        <Route path={PageRoutes.Index}>
          <Route index element={<MainPage />} />
          <Route
            path={PageRoutes.FormModalSvgIconsExample}
            element={
              <Suspense fallback={<>...</>}>
                <FormModalSvgIconsExample />
              </Suspense>
            }
          />
          <Route
            path={PageRoutes.ReduxExamplePage}
            element={
              <Suspense fallback={<>...</>}>
                <ReduxExamplePage />
              </Suspense>
            }
          />
          <Route
            path={PageRoutes.FontsExamplePage}
            element={
              <Suspense fallback={<>...</>}>
                <FontsExamplePage />
              </Suspense>
            }
          />
          <Route
            path={PageRoutes.DataFetchByRtkQueryExamplePage}
            element={
              <Suspense fallback={<>...</>}>
                <DataFetchByRtkQueryExamplePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <SvgSprite />
    </>
  );
}

export default App;
