import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<div>hello</div>}></Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
