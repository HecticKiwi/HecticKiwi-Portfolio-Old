import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation, useOutlet,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';

import Projects from './pages/Projects';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, type: 'tween' },
  },
};

function Root() {
  const outlet = useOutlet();

  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={useLocation().pathname}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
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
