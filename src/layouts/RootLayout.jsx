import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../components/Header';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, type: 'tween' },
  },
};

function RootLayout() {
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

export default RootLayout;
