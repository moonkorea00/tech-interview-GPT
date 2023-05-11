import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { FormProvider } from '@store/FormContext';
import RootLayout from './components/common/Layout';
import Main from './components/Main';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />
      </Route>
    )
  );

  return (
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  );
};

export default Router;
