import * as React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';

interface WorkItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  additional: string[];
}

const workData: WorkItem[] = [
  {
    role: 'Administrator Staff/License Officer',
    company: 'PT Midasindo Teknik Utama',
    period: 'Feb 2013 - Feb 2020',
    description: [],
    additional: [
      'Administered the end-to-end hardware-key (dongle) authorization using a proprietary license management system, preventing unauthorized access or financial loss over 7 years',
      'Optimized annual sales and inventory data consolidation  by utilizing Excel functions and Pivot Tables to build a structured digital classification system, boosting reporting efficiency by 15%',
      'Reconciled monthly stock reports and petty cash audits through standardized Excel data entry and digital filing systems, resulting in a documented 85% improvement in audit accuracy and administrative speed',
    ],
  },
  {
    role: 'Customer Service Representative (CSR)',
    company: 'PT Capple Indonesia',
    period: 'Jun 2011 - Jul 2012',
    description: [],
    additional: [
      'Handled user complaints by coordinating with Game Masters and maintaining issue/translation logs in Excel, sustaining ~90% customer satisfaction (CSAT)',
      'Managed forum maintenance and high-volume email communications; compiled community feedback trends from forum and email logs, contributing to a 25% increase in user engagement.',
    ],
  },
    {
    role: 'Marketing Support',
    company: 'PT Transko Interlink Raya',
    period: 'Jul 2010 - Oct 2010',
    description: [],
    additional: [
      'Optimized freight procurement by benchmarking carrier rates and negotiating with local/global partners, cutting total shipping costs by 10%',
      'Coordinated high-volume shipments and vendor communications using Outlook and Excel trackers, improving on-time delivery performance and reducing shipment discrepancies',
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WorkExperience: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const { isDark } = useTheme();

  return (
    <section
      id="work-experience"
      className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-[#0f172a]'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Work Experience
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-[#83562e] to-[#e0c2a8] mx-auto mb-6 rounded-full"
            />
            <motion.p
              variants={itemVariants}
              className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-700'}`}
            >
              Professional experience and key contributions.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className={`absolute left-3 top-0 w-0.5 h-full ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`} />

            <motion.div variants={containerVariants} className="space-y-12">
              {workData.map((work, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-0 mt-2 w-4 h-4 rounded-full ring-4 ${isDark ? 'bg-[#8c8c9a] ring-gray-900' : 'bg-[#51505c] ring-[#cfc8b9]'}`}
                  />

                  {/* Card */}
                  <div
                    className={`ml-8 flex-1 p-6 rounded-xl border shadow-md hover:shadow-lg transition-shadow duration-300 ${
                      isDark ? 'bg-gray-800/80 border-gray-700' : 'bg-[#f4f2ed] border-gray-200'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {work.role}
                        </h3>
                        <p className="flex items-center gap-2 text-sm text-[#51505c] font-medium">
                          <Briefcase className="w-4 h-4" />
                          {work.company}
                        </p>
                      </div>
                      <div className={`flex items-center px-3 py-1 mt-3 md:mt-0 rounded-full text-xs font-medium ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                        <Calendar className="w-4 h-4 mr-1" />
                        {work.period}
                      </div>
                    </div>

                    {/* Description */}
                    <div className={`mb-4 space-y-2 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {work.description.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>

                    {/* Additional section */}
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      {work.additional.map((ach, i) => (
                        <li key={i} className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
