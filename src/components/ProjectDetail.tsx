import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Award,
  Target,
  Wrench,
  Clock,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import Method3 from '../assets/Method3.jpg';
import Method4 from '../assets/Method4.jpg';
import Method2 from '../assets/Method2.jpg';
import Method1 from '../assets/Method1.jpg';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isDark } = useTheme();

  const projects = {
    '1': {
      id: 1,
      title: 'RevoGrocers Sales Performance Analysis',
      description:
        'Comprehensive SQL-based retail analytics identifying top profit drivers, pricing-to-reach correlations, and repeat purchase patterns to optimize store-wide sales performance.',
      image: Method1,
      slideUrl:
        'https://drive.google.com/file/d/1T9datE_gJZMYSW5Cf0hEHEsE7Wk5u4A6/view?usp=drive_link',
      duration: '2 Weeks',
      team: 'Individual',
      tools: ['SQL', 'BigQuery'], 
      details: {
        background:
          'RevoGrocers sought to optimize its multi-location retail operations by uncovering actionable insights from its transactional data. The analysis focused on identifying high-performing product categories and understanding the relationship between pricing and customer reach. The primary goal was to shift toward a data-driven inventory and pricing strategy to maximize net revenue and improve long-term customer retention',
        method: {
          text: '',
          points: [
            'Scalable Data Processing: Utilized Google BigQuery to process and integrate large-scale retail datasets, performing advanced SQL analytics for revenue and behavior mapping.',
            'Performance Metrics: Calculated Net Revenue and used SQL Window Functions to identify top-tier customers and cumulative sales trends across different product niches.',
            'Pricing & Loyalty Analysis: Evaluated the correlation between average unit prices and customer reach, alongside calculating Repeat Purchase Rates to measure category-level loyalty.',
          ],
        },
        result: {
          text: 'Key insights and actions included:',
          points: [
            'Revenue Optimization: Identified Confections as the dominant revenue driver, contributing 12.87% to total net revenue with an exceptional 99.85% repeat purchase rate, signifying its status as a core "anchor" category.',
            'Pricing Anomalies: Discovered that the Grain category carries the highest average unit price with the lowest customer reach, while Shellfish captures the highest volume of unique buyers at the lowest price point',
            'Strategic Actions: Recommended inventory prioritization for high-growth segments (Meat, Poultry, Confections) and suggested a premium pricing strategy for the high-value/low-reach Grain segment to refine margin capture',
          ],
        },
      },
    },
    '2': {
      id: 2,
      title: 'Olist Payment Share & Performance Dashboard',
      description:
        'A comprehensive e-commerce analytics project utilizing Python and Tableau to optimize payment method shares, analyze installment impacts on GMV, and map RFM customer segments for targeted growth.',
      image: Method2,
      slideUrl:
        'https://drive.google.com/file/d/13kZzqGCq5SzfjUe9gCiIKadHa2Ffs-5-/view?usp=drive_link',
      duration: '6 Weeks',
      team: 'Individual',
      tools: ['Google Sheets, Python,Tableau'],
      details: {
        background:
          'Olist, a major Brazilian marketplace ecosystem, sought to optimize its payment portfolio by deeply understanding customer behavior across different payment methods. This project analyzed over 103,000 transactional records to identify value drivers and aimed to increase the Credit Card usage share by 10% within six months. The primary focus was leveraging installment options to boost average order value (GMV) while maintaining a high order completion rate.',
        method: {
          text: '',
          points: [
            'Python-Driven Data Pipeline: Utilized Python for comprehensive data cleaning, merging order and payment datasets, and handling outliers via the Interquartile Range (IQR) method for the period of January 2017 to September 2018.',
            'RFM Segmentation for Dashboarding: Implemented Recency, Frequency, and Monetary (RFM) analysis to categorize the customer base into strategic segments such as "Champions," "Potential Loyalists," and "At Risk." These segments were integrated directly into the dashboard to drive targeted marketing insights',
            'Interactive Tableau Visualization: Developed a robust Tableau dashboard to track monthly growth trends (notably Black Friday peaks), visualize the correlation between installments and GMV, and map market concentration across Brazilian states like São Paulo and Rio de Janeiro.',
          ],
        },
        result: {
          text: '',
          points: [
            'Revenue Drivers: Identified Credit Cards as the primary business engine, accounting for 74% of total orders and 81% of high-value transactions (>R$200), largely driven by installment options which are used 3.5x more frequently than other methods.',
            'Strategic Segment Insights: The Potential Loyalist segment (20% of the base) was identified as the most efficient target for the 84% usage share goal, as this group already shows a strong affinity for credit card payments (77%).',
            'Actionable Recommendations: Recommended prioritizing installment visibility for high-value items, launching loyalty campaigns for the identified RFM segments, and implementing a selective migration strategy for "Boleto" (invoice) users toward Credit Cards to improve cash flow and order certainty.',
          ],
        },
      },
    },
    '3': {
      id: 3,
      title: 'TokoBli Campaign Evaluation & Product Page Analysis',
      description:
        'A comprehensive data-driven evaluation of "Twin Date" e-commerce campaigns and A/B testing for product page optimization, focusing on promotional ROI, category performance, and statistical significance.',
      image: Method3,
      slideUrl:
        'https://drive.google.com/file/d/1vfsWhNZ2hsNRpx9SMQPLkB0oxVok_qBf/view?usp=drive_link',
      duration: '2 weeks',
      team: 'Individual',
      tools: ['Google Sheets'],
      details: {
        background:
          'TokoBli, E-commerce Industry Application, aimed to evaluate the effectiveness of its digital marketing efforts by analyzing the performance of "Twin Dates" promotional campaigns (10/10, 11/11, and 12/12). Additionally, the project sought to validate a new Product Page design through A/B testing to enhance user experience and increase transaction values. The primary objective was to transition toward a data-driven marketing strategy to maximize promotional ROI and ensure efficient discount allocation.',
        method: {
          text: 'Conducted a thorough analysis using Google Sheets:',
          points: [
            'Data Cleaning & Integrity: Processed a dataset of 10,000+ transactional entries, handling missing values and managing outliers using the Interquartile Range (IQR) method to ensure statistical reliability.',
            'Efficiency Mapping: Evaluated campaign performance using the Revenue-to-Discount Ratio and a Composite Score to rank the most profitable product categories.',
            'A/B Testing & Statistical Validation: Conducted Hypothesis Testing (two-tail p-value) to compare the transaction values of the old vs. new Product Page designs, ensuring that the improvements were statistically significant rather than due to chance.',
          ],
        },
        result: {
          text: '',
          points: [
            'Campaign Optimization: While the 11/11 campaign generated the highest gross revenue, the 12/12 campaign was identified as the most efficient, achieving a promotional ROI of 58.6x.',
            'Category Hero: Men Fashion was determined to be the "Winner Category," boasting an impressive ROI of 139.3x during the promotional period.',
            'Design Validation: The A/B Test results provided statistical evidence that the new Product Page design successfully increased customer transaction values, leading to a recommendation for full-scale implementation',
            'Full-Scale Rollout: Immediately implement the New Product Page design across all categories, as it is statistically proven to increase transaction values.',
            'Efficiency Focus: Replicate the 12/12 discount structure for future "Twin Date" events to maintain high ROI without over-discounting.',
            'Targeted Promotion: Allocate more marketing budget and hero-banner space for the Men Fashion category to maximize profit margins.',
          ],
        },
      },
    },
    '4': {
      id: 4,
      title: 'Customer Segmentation RevoBank using K-Means',
      description:
        'Analysis about RevoBank Customer using K-Means clustering for business insights.',
      image: Method4,
      slideUrl:
        'https://drive.google.com/file/d/1OSiRpPLzc0a1d8_EUC5UP-kSQXB5BC_X/view?usp=drive_link',
      duration: '3 weeks',
      team: 'Individual',
      tools: ['Python'],
      details: {
        background:
          'RevoBank sought to optimize its credit card portfolio by gaining deep behavioral insights from its diverse customer base. The project involved cleaning and merging disparate user and card datasets to identify distinct risk profiles and spending patterns. The ultimate goal was to move away from "one-size-fits-all" marketing and implement data-driven strategies for revenue growth and risk mitigation.',
        method: {
          text: '',
          points: [
            'Customer Segmentation & Insights: Implemented K-Means clustering to categorize customers into three strategic groups based on demographics, financial risk (DTI), and monetary value.',
            'Data Science Pipeline: Executed a full end-to-end pipeline including data cleaning, robust scaling to handle extreme outliers, and model validation using the Elbow Method and Silhouette Score (K=3)',
            'Actionable Recommendations: Developed specialized business frameworks for each segment, focusing on high-limit upselling, loyalty retention, and risk-based reactivation',
          ],
        },
        result: {
          text: '',
          points: [
            'Strategic Segment Identification: Successfully mapped the customer base into three personas: The Whales (High-value/Elite), The Regulars (Consistent/Loyal), and The Sleepers (High-risk/Inactive).',
            'Impactful Insights: Uncovered that high-debt (DTI) nasabah do not necessarily correlate with high spending, allowing the bank to refine its credit limit allocation and prevent potential bad debt while maximizing profit from top-tier spenders.',
          ],
        },
      },
    },
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark ? 'bg-slate-900 text-white' : 'bg-[#dad8cf] text-gray-900'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-800 flex items-center justify-center">
            <Target
              className={`w-12 h-12 ${isDark ? 'text-blue-500' : 'text-[#a29274]'}`}
            />
          </div>
          <h1 className="text-xl font-bold mb-4">Project Not Found</h1>
          <Link
            to="/"
            className={`inline-flex items-center px-5 py-2.5 rounded-lg transition-colors shadow-md font-medium text-sm ${
              isDark
                ? 'bg-blue-600 text-white hover:bg-blue-500'
                : 'bg-[#a29274] text-white hover:bg-[#8c7a5f]'
            }`}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Portfolio
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? 'bg-slate-900' : 'bg-[#dad8cf]'
      }`}
    >
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
          isDark
            ? 'bg-slate-900/90 border-slate-700'
            : 'bg-white/80 border-[#c1beaf]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className={`inline-flex items-center font-semibold text-sm transition-all duration-200 ${
                isDark
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-[#a29274] hover:text-[#8c7a5f]'
              }`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>

            <a
              href={project.slideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-5 py-2 rounded-lg transition-all duration-200 shadow-md font-medium text-sm ${
                isDark
                  ? 'bg-blue-600 text-white hover:bg-blue-500'
                  : 'bg-[#a29274] text-white hover:bg-[#8c7a5f]'
              }`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Open Slides
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1
            className={`text-xl md:text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {project.title}
          </h1>
        </motion.div>

        {/* Image + Project Details + Overview Side by Side */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
          {/* Left Column: Image + Project Details */}
          <div className="lg:w-1/2 w-full flex flex-col gap-6">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`rounded-2xl p-6 border shadow-md ${
                isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#c1beaf]'
              }`}
            >
              <h3
                className={`text-base font-bold mb-5 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Project Details
              </h3>
              <ul
                className={`space-y-3 text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <li className="flex items-center">
                  <Clock
                    className={`w-4 h-4 mr-2 ${
                      isDark ? 'text-blue-500' : 'text-[#a29274]'
                    }`}
                  />
                  Duration: {project.duration}
                </li>
                <li className="flex items-center">
                  <Users
                    className={`w-4 h-4 mr-2 ${
                      isDark ? 'text-blue-500' : 'text-[#a29274]'
                    }`}
                  />
                  Team: {project.team}
                </li>
                <li className="flex items-start">
                  <Wrench
                    className={`w-4 h-4 mr-2 mt-0.5 ${
                      isDark ? 'text-blue-500' : 'text-[#a29274]'
                    }`}
                  />
                  <div>
                    <span className="font-medium">Tools: </span>
                    {project.tools.join(', ')}
                  </div>
                </li>
              </ul>

              {/* Disclaimer – only show for project 2 */}
              {(id === '2') && (
                <p className="mt-4 text-xs text-gray-500 italic">
                  *Disclaimer: The project is a part of RevoU Data Insight Project, a 4-week case study designed to analyze customized datasets and address business challenges. Supervised by RevoU, this project hones analytical skills, strengthens problem-solving abilities, and guides students in delivering actionable insights.
                </p>
              )}
              </motion.div>
          </div>

          {/* Right Column: Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`lg:w-1/2 w-full rounded-2xl p-6 border shadow-md ${
              isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#c1beaf]'
            }`}
          >
            <div className="flex items-center mb-5">
              <Award
                className={`w-5 h-5 mr-2 ${
                  isDark ? 'text-blue-500' : 'text-[#a29274]'
                }`}
              />
              <h3
                className={`text-base font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Project Overview
              </h3>
            </div>

            <div className="space-y-5">
              {[
                { title: 'Background', text: project.details.background },
                {
                  title: 'Method',
                  text: project.details.method.text,
                  points: project.details.method.points,
                },
                {
                  title: 'Result',
                  text: project.details.result.text,
                  points: project.details.result.points,
                },
              ].map((section, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg transition ${
                    isDark
                      ? 'bg-slate-900 hover:bg-slate-700'
                      : 'bg-[#dad8cf] hover:bg-[#c1beaf]'
                  }`}
                >
                  <h4
                    className={`font-semibold mb-1 ${
                      isDark ? 'text-blue-400' : 'text-[#a29274]'
                    }`}
                  >
                    {section.title}
                  </h4>
                  <p className={`text-sm text-gray-700 dark:text-gray-300`}>
                    {section.text}
                  </p>
                  {section.points && (
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {section.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
