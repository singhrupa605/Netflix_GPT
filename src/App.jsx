import Body from "./components/Body.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import LoginPage  from "./components/LoginPage.jsx"
import Browse from "./components/Browse.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <LoginPage /> },
        { path: "browse", element: <Browse /> },
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
