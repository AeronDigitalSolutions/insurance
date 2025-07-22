import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import styles from "@/styles/components/ui/Carousal.module.css";

interface CarouselProps {
  images: StaticImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.2},
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.carousel}>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          className={styles.imageWrapper}
          variants={slideVariants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <Image
            src={images[current]}
            alt={`Slide ${current}`}
            fill
            className={styles.image}
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className={`${styles.navButton} ${styles.left}`}
        aria-label="Previous"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className={`${styles.navButton} ${styles.right}`}
        aria-label="Next"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
