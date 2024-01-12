import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UseState from "./hooks-examples/useState/UseState";
import UseEffectExample from "./hooks-examples/useEffect/UseEffect";
import UseRefExample from "./hooks-examples/useRef/UseRefExample";
import UseReducerExample from "./hooks-examples/useReducer/UseReducerExample";
import UseContextExample from "./hooks-examples/useContext/useContextExample";
import UseMemoExample from "./hooks-examples/useMemo/UseMemoExample";
import UseCallbackExample from "./hooks-examples/useCallback/UseCallback";
import UseLayoutEffectExample from "./hooks-examples/useLayoutEffect/UseLayoutEffectExample";
import Navigation from "./Navigation";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
    },
    {
      path: "/useState",
      element: <UseState />,
    },
    {
      path: "/useEffect",
      element: <UseEffectExample />,
    },
    {
      path: "/useRef",
      element: <UseRefExample />,
    },
    {
      path: "/useReducer",
      element: <UseReducerExample />,
    },
    {
      path: "/useContext",
      element: <UseContextExample />,
    },
    {
      path: "/useMemo",
      element: <UseMemoExample />,
    },
    {
      path: "/useCallback",
      element: <UseCallbackExample />,
    },
    {
      path: "/useLayoutEffect",
      element: <UseLayoutEffectExample />,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
