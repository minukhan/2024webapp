import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import todoRouter from "./todoRouter";

const loading = <div className="bg-red-500">loading...</div>;
const Main = lazy(() => import("../pages/MainComp"));
const About = lazy(() => import("../pages/AboutComp"));
const Todo = lazy(() => import("../pages/TodoComp"));
<<<<<<< HEAD
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));
=======
const TodoIndex = lazy(() => import("../pages/todo/indexPage"));

>>>>>>> 80a304dc839f4f3b527fb021905f8f0409e113a6

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/todo",
    element: (
      <Suspense fallback={loading}>
        <TodoIndex />
      </Suspense>
    ),
    children: todoRouter(),
  },
]);

<<<<<<< HEAD
export default root;
=======
export default root;
>>>>>>> 80a304dc839f4f3b527fb021905f8f0409e113a6
