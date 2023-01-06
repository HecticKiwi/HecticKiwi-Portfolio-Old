import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import RootLayout from './layouts/RootLayout';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="blog" element={<Blog />} />
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
