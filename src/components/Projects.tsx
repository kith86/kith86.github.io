import * as React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';
import Title3 from '../assets/Title3.jpg';
import Title4 from '../assets/Title4.jpg';
import Title2 from '../assets/Title2.jpg';
import Title1 from '../assets/Title1.jpg';

// 🧩 Import skill icons
import pythonIcon from '../assets/python.png';
import sqlIcon from '../assets/sqlpict.png';
import tableauIcon from '../assets/Tableaulogo.png';
import sheetsIcon from '../assets/sheets.png';
import officeIcon from '../assets/officelogo.png';
import webscraperIcon from '../assets/webscraper.png';
import powerbiIcon from '../assets/Power bi.jpg';

// warna pastel ala stabilo
const tagColors: Record<string, string> = {
  EDA: "bg-purple-200",
  "Linear Regression": "bg-[#f7c290]",
  "Clustering Analysis": "bg-pink-200",
  Python: "bg-[#abddc4]",
  Tableau: "bg-blue-200",
  SQL: "bg-red-200",
  "Performance Metrics": "bg-indigo-200",
};

const Projects: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const { isDark } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'RevoGrocers Sales Performance Analysis',
      description: 'Comprehensive SQL-based retail analytics identifying top profit drivers, pricing-to-reach correlations, and repeat purchase patterns to optimize store-wide sales performance.',
      tags: ['SQL', 'BigQuery', 'Retail Analysis'],
      image: Title1,
      slideUrl:
        'https://drive.google.com/file/d/1T9datE_gJZMYSW5Cf0hEHEsE7Wk5u4A6/view?usp=drive_link',
    },
    {
      id: 2,
      title: 'Olist Payment Share & Performance Dashboard',
      description: 'A comprehensive e-commerce analytics project utilizing Python and Tableau to optimize payment method shares, analyze installment impacts on GMV, and map RFM customer segments for targeted growth.',
      tags: ['EDA', 'RFM Analysis', 'Python', 'Tableau'],
      image: Title2,
      slideUrl:
        'https://drive.google.com/file/d/13kZzqGCq5SzfjUe9gCiIKadHa2Ffs-5-/view?usp=drive_link',
    },
    {
      id: 3,
      title: 'TokoBli Campaign Evaluation & Product Page Analysis',
      description: 'A comprehensive data-driven evaluation of "Twin Date" e-commerce campaigns and A/B testing for product page optimization, focusing on promotional ROI, category performance, and statistical significance.',
      tags: ['A/B Testing', 'E-Commerce Analytics', 'Hypothesis Testing', 'Google Sheets'],
      image: Title3,
      slideUrl:
        'https://drive.google.com/file/d/1vfsWhNZ2hsNRpx9SMQPLkB0oxVok_qBf/view?usp=drive_link',
    },
    {
      id: 4,
      title: 'Customer Segmentation RevoBank using K-Means',
      description: 'Analysis about RevoBank Customer using K-Means clustering.',
      tags: ['EDA', 'Clustering Analysis', 'Python'],
      image: Title4,
      slideUrl:
        'https://drive.google.com/file/d/1OSiRpPLzc0a1d8_EUC5UP-kSQXB5BC_X/view?usp=drive_link',
    },
  ];

  // 🧠 Skill icons
  const skills = [
    { name: 'Python', icon: pythonIcon },
    { name: 'SQL', icon: sqlIcon },
    { name: 'Tableau', icon: tableauIcon },
    { name: 'Google Sheets', icon: sheetsIcon },
    { name: 'Microsoft Office', icon: officeIcon },
    { name: 'Web Scraping', icon: webscraperIcon },
     { name: 'Power BI', icon: powerbiIcon },
  ];

  const softSkills = [
    'Analytical Thinking',
    'High Autonomy',
    'Meticulousness',
    'Deep Focus (Deep Work)',
    'Problem Solving',
    'Independent Research',
  ];

  return (
    <section
      id="projects"
      className={`py-24 transition-colors duration-500 ${
        isDark ? 'bg-gray-800' : 'bg-[#e8e3da]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className={`text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Projects
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#83562e] to-[#e0c2a8] mx-auto mb-6 rounded-full"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Selected projects demonstrating practical application of data analytics to generate actionable insights.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`group rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${
                  isDark
                    ? 'bg-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-gray-100 via-[#e6dccf] to-gray-200'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-3 group-hover:text-[#d18a4c] transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* description */}
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* render tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-1.5 text-xs font-medium ${tagColors[tag] || 'bg-gray-200'} ${
                          isDark ? 'text-gray-900' : 'text-gray-800'
                        }`}
                        style={{ borderRadius: "2px" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`flex items-center justify-between pt-4 border-t mt-4 ${
                      isDark ? 'border-gray-700' : 'border-gray-300'
                    }`}
                  >
                    <Link
                      to={`/project/${project.id}`}
                      className={`inline-flex items-center font-medium text-sm transition-colors duration-200 ${
                        isDark
                          ? 'text-[#e0b48d] hover:text-[#f0c89b]'
                          : 'text-[#51505c] hover:text-[#d18a4c]'
                      }`}
                    >
                      View Details
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                    <a
                      href={project.slideUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center font-medium text-sm transition-colors duration-200 ${
                        isDark
                          ? 'text-[#e0b48d] hover:text-[#f0c89b]'
                          : 'text-[#51505c] hover:text-[#d18a4c]'
                      }`}
                    >
                      <FileText className="mr-1 w-4 h-4" />
                      Open Slides
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 🌿 Skills Section di bawah Projects */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-40 text-center"
          >
            {/* Technical Skills */}
            <h4
              className={`text-2xl font-semibold mb-10 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Technical Skills
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 justify-items-center items-center mb-16">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      title={skill.name}
                      className="w-12 h-12 object-contain mb-2 filter grayscale hover:grayscale-0 transition"
                    />
                  </div>
                  <span
                    className={`text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-800'
                    }`}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Soft Skills */}
            <h4
              className={`text-2xl font-semibold mb-10 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Soft Skills
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    isDark
                      ? 'bg-gray-700 text-gray-200'
                      : 'bg-[#dcd3c2] text-gray-800'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
