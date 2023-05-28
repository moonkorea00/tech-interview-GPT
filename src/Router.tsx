import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import { FormProvider } from '@store/formContext';
import { InterviewSessionProvider } from '@store/interviewSessionContext';
import RootLayout from './components/common/Layout/Root';
import Main from './components/Main';
import Session from '@components/Session';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />
        <Route path=":id" element={<Session />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );

  return (
    <FormProvider>
      <InterviewSessionProvider>
        <RouterProvider router={router} />
      </InterviewSessionProvider>
    </FormProvider>
  );
};

export default Router;
