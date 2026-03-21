import * as React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';
import { FaFileDownload } from 'react-icons/fa';

const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-500 ${
        isDark ? 'bg-gray-800' : 'bg-[#e8e3da]' // tone netral, nyambung Hero
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-4xl font-bold mb-4 tracking-wide ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-gradient-to-r from-[#83562e] to-[#e0c2a8] mx-auto mb-6 rounded-full"
            />
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-5xl mx-auto text-center"
          >
            <p
              className={`text-lg leading-relaxed text-justify ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Leveraging a 7-year foundation in meticulous regulatory reporting, I have dedicated my recent transition to mastering Data Analytics, 
              combining my background in data integrity with technical modeling. I thrive in environments that require quiet, 
              analytical focus—where I can spend hours 'behind the screen' transforming complex datasets into structured narratives. 
              Having analyzed 100,000+ records using SQL, Python, and Tableau, I am now ready to apply my high threshold for analytical rigor and deep work to deliver trustworthy, data-driven insights.
            </p>
            {/* Tombol Download CV */}
            <div className="mt-8 flex justify-center lg:justify-start">
            <motion.a
            href="https://drive.google.com/file/d/1CNANFGrdaixX6S4ZREpCHtpAZxlNvdt5/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#d18a4c] hover:bg-[#b0723d] text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg"
  >
    <FaFileDownload size={20} />
    DOWNLOAD CV
  </motion.a>
</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
