import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="blog" element={<Blog />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
