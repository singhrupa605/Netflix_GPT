import Body from "./components/Body.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";


const LoginPage = lazy(()=>import("./components/LoginPage.jsx"))
const Browse = lazy(() => import("./components/Browse.jsx"))
function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      
      children: [
        { path: "/", element:(<Suspense fallback={<div>Loading...</div>}><LoginPage /></Suspense>) },
        { path: "browse", element:(<Suspense fallback={<div>Loading...</div>}><Browse /></Suspense>)},
      ],
    },
  ]);
  return (
    <>
      <Provider store={appStore}>
        {" "}
        <RouterProvider router={appRouter}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
