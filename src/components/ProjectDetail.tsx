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

// Import Gambar Asli
import Method1 from '../assets/Method1.jpg';
import Method2 from '../assets/Method2.jpg';
import Method3 from '../assets/Method3.jpg';
import Method4 from '../assets/Method4.jpg';


// Import Gambar Baru (Pastikan namanya sama persis dengan yang ada di folder assets)
import OcaUserCover from '../assets/OcaUserSegTitle.jpg';
import OcaDashboardCover from '../assets/OcaDashboardTitle.jpg';
import Method5 from '../assets/Method5.jpg';
import Method6 from '../assets/Method6.jpg';
import QuickU from '../assets/QuickU.jpg';
import RevoFin from '../assets/RevoFin.jpg';


const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isDark } = useTheme();

  const projects = {
    '1': {
      id: 1,
      title: 'Active User Behavior & Segmentation',
      description: 'Conducted in-depth analysis of active user behavior patterns and built a clustering model to understand user characteristics, aiding in targeted engagement and retention strategies.',
      image: Method6,
      slideUrl: 'https://canva.link/smxdum665pn07yz',
      duration: '4 Weeks',
      team: 'OCA Indonesia',
      tools: ['BigQuery', 'SQL'],
      disclaimer: '*Disclaimer: The data provided is a representation of the original data which amount has been adjusted. The data used is NOT representation of original data, adjusted for educational purposes and does not reflect the actual business condition of the company.',
      details: {
        background: 'To improve user retention and engagement, OCA Indonesia required a deeper understanding of its active user base. This project involved analyzing behavioral data across 4 channels to identify distinct user segments and their defining characteristics, allowing for more personalized marketing and product strategies.',
        method: {
          text: '',
          points: [
            'Data Unification: Combined 4 channel tables into a unified transactions dataset using SQL UNION ALL.',
            'Exploratory Analysis: Analyzed revenue distribution, calculated MoM growth, and examined channel mix, frequency, and active hours.',
            'Segmentation Design: Implemented a Rule-Based segmentation model evaluating 2 dimensions (Client Value and Growth Trajectory) resulting in 6 targeted segments across 20 clients.'
          ],
        },
        result: {
          text: '',
          points: [
            'Distinct User Profiles: Successfully mapped 20 clients into 6 actionable segments such as "Key Accounts", "Reliable Mid-Tier", and "At-Risk Mid-Tier".',
            'Targeted Strategies: Defined clear risk levels and treatments for each segment based on their usage intensity and MoM growth.',
            'Retention Optimization: Laid the groundwork for proactive intervention, especially for the "Declining Small" and "At-Risk" segments.'
          ],
        },
      },
    },
    '2': {
      id: 2,
      title: 'Unified Channel Performance Dashboard',
      description: 'Developed a unified analytics dashboard to monitor, track, and visualize performance metrics across multiple communication channels, enabling centralized data-driven decision making.',
      image: Method5,
      slideUrl: 'https://canva.link/feeh3z944vsy7i5',
      duration: '4 Weeks',
      team: 'OCA Indonesia',
      tools: ['BigQuery', 'SQL', 'React', 'Recharts'],
      disclaimer: '*Disclaimer: The data provided is a representation of the original data which amount has been adjusted. The data used is NOT representation of original data, adjusted for educational purposes and does not reflect the actual business condition of the company.',
      details: {
        background: 'OCA Indonesia processed 122,749 messages across 4 channels in Q1 2025. Previously, channels were monitored separately with no cross-channel view. This project built an interactive dashboard to consolidate metrics, providing stakeholders with clear insights into channel efficiency and anomaly detection.',
        method: {
          text: '',
          points: [
            'Data Cleaning: Prepared all datasets by standardizing status labels, handling null values, and fixing date formats via BigQuery SQL.',
            'Metric Computation: Defined core metrics including Total Messages, Delivery Rate, MoM Volume Trends, and Client Health.',
            'Dashboard Development: Built an interactive dashboard using React and Recharts, integrating dynamic time periods and channel filters.'
          ],
        },
        result: {
          text: '',
          points: [
            'Centralized Monitoring: Created a unified view for all 4 channels, revealing critical insights such as a 60% decline in Email volume.',
            'Anomaly Detection: Flagged critical churn signals for two specific clients (-24% and -22% MoM) enabling rapid response.',
            'Actionable Recommendations: Delivered 5 prioritized actions including investigating the email drop, optimizing blast scheduling, and fixing Call IVR delivery rates.'
          ],
        },
      },
    },
    '3': {
      id: 3,
      title: 'RevoFin Loan Portfolio & Risk Analysis',
      description: 'Cohort-based risk analysis of 176,087 borrowers ($2.80B portfolio) using SQL, identifying the 2014 cohort anomaly and confirming 3 key risk drivers to strengthen underwriting strategy.',
      image: RevoFin,
      slideUrl: 'https://drive.google.com/file/d/163S3b3mNEWew_ng0WAPYmpHp8nb-cQlH/view?usp=drive_link',
      duration: '4 Weeks',
      team: 'Individual',
      tools: ['SQL', 'BigQuery'],
      disclaimer: '*Disclaimer: This project is a part of RevoU Data Insight Project, a 4-week case study designed to analyze customized datasets and address business challenges. Supervised by RevoU, this project hones analytical skills, strengthens problem-solving abilities, and guides students in delivering actionable insights.',
      details: {
        background: 'RevoFin is a fintech company connecting borrowers with personal loan products through a fully digital experience. As the portfolio expanded to over 176,000 customers and $2.80B in outstanding loans, understanding how different borrower cohorts perform over time became critical. This project applies cohort analysis to evaluate lending quality, detect risk anomalies, and uncover the borrower characteristics behind underperforming segments.',
        method: {
          text: '',
          points: [
            'Portfolio Health Assessment: Measured overall portfolio performance using OS (Outstanding), ENR (Earning Not at Risk), and TKB30 (Tingkat Keberhasilan Bayar 30) across all issuance cohorts from 2012–2019.',
            'Cohort Anomaly Detection: Identified the 2014 cohort as the weakest (TKB30 96.58% vs portfolio average 98.11%) and profiled it against the best cohort (2019, TKB30 98.83%) across 6 borrower dimensions.',
            'Root Cause Analysis: Examined income, home ownership, employment length, regional distribution, loan purpose, and interest rate to determine which factors are true risk drivers vs. non-significant.',
          ],
        },
        result: {
          text: '',
          points: [
            'Risk Driver Identification: Confirmed 3 key risk drivers — lower borrower income (–13.5%), higher interest rate (+7%), and higher debt consolidation concentration (+5.2%). Ruled out home ownership, employment length, and geography as non-significant.',
            'Portfolio Concentration: 92% of outstanding balance concentrated in 2016–2019 vintages, with the 2014 cohort requiring prioritized monitoring due to elevated delinquency.',
            'Actionable Recommendations: Delivered 5 data-driven recommendations including stricter DTI requirements for consolidation loans, income-based risk tiering, interest rate re-evaluation, cohort-level early warning system, and loan purpose diversification caps.',
          ],
        },
      },
    },
    '4': {
      id: 4,
      title: 'Olist Payment Share & Performance Dashboard',
      description: 'A comprehensive e-commerce analytics project utilizing Python and Tableau to optimize payment method shares, analyze installment impacts on GMV, and map RFM customer segments for targeted growth.',
      image: Method2,
      slideUrl: 'https://drive.google.com/file/d/13kZzqGCq5SzfjUe9gCiIKadHa2Ffs-5-/view?usp=drive_link',
      duration: '6 Weeks',
      team: 'Individual',
      tools: ['Google Sheets, Python,Tableau'],
      disclaimer: '*Disclaimer: This project is a part of RevoU Data Insight Project, a 4-week case study designed to analyze customized datasets and address business challenges. Supervised by RevoU, this project hones analytical skills, strengthens problem-solving abilities, and guides students in delivering actionable insights.',
      details: {
        background: 'Olist, a major Brazilian marketplace ecosystem, sought to optimize its payment portfolio by deeply understanding customer behavior across different payment methods. This project analyzed over 103,000 transactional records to identify value drivers and aimed to increase the Credit Card usage share by 10% within six months. The primary focus was leveraging installment options to boost average order value (GMV) while maintaining a high order completion rate.',
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
    '5': {
      id: 5,
      title: 'QuickU App Funnel Analysis & Cluster Optimization',
      description: 'End-to-end funnel analysis of 192,524 sessions using BigQuery SQL, identifying 3 critical bottlenecks and building a P0–P3 priority framework with 5-cluster user segmentation.',
      image: QuickU,
      slideUrl: 'https://drive.google.com/file/d/1_atPmeHgOOoAWyveRJbZcSiU89rFtY7K/view?usp=drive_link',
      duration: '4 Weeks',
      team: 'Individual',
      tools: ['SQL', 'BigQuery', 'Tableau'],
      disclaimer: '*Disclaimer: This project is a part of RevoU Data Insight Project, a 4-week case study designed to analyze customized datasets and address business challenges. Supervised by RevoU, this project hones analytical skills, strengthens problem-solving abilities, and guides students in delivering actionable insights.',
      details: {
        background: 'QuickU is a fast-growing q-commerce platform whose transaction volume grew 2.6x from 2020 to 2022. Despite strong traffic with 192,524 sessions and 11,102 registered users, overall conversion rate declined every year — from 17% down to 12%. This project analyzed the full user funnel, investigated a cancel rate spike from 15.85% to 39.61%, and segmented users across 5 clusters to identify targeted optimization opportunities.',
        method: {
          text: '',
          points: [
            'Funnel Analysis: Mapped the complete 8-stage user journey (Homepage → Complete) using BigQuery SQL, calculating stage-by-stage drop-off rates and identifying the 3 largest friction points.',
            'Anomaly Investigation: Analyzed the 2022 cancel rate spike through price stability checks, operational capacity assessment, and UTM tracking gap analysis (~36,000 untracked sessions from Instagram & Google).',
            'User Segmentation: Segmented 11,102 users across 5 clusters — age group, traffic source, transaction value, location, and payment method — to identify which groups have the highest cancel rates and conversion potential.',
          ],
        },
        result: {
          text: '',
          points: [
            'Bottleneck Discovery: Identified 3 critical drops — address page (45.27%, largest single drop, caused by shipping cost shock and no saved address), payment page (31.9%, price shock at confirmation), and post-payment cancellations (30.35%, worsening yearly).',
            'Data Quality Finding: Uncovered ~36,000 sessions with broken UTM tracking (Instagram & Google), meaning all marketing budget decisions were based on partially inaccurate channel data.',
            'Priority Framework: Built a P0–P3 action plan — P0: fix UTM tracking immediately, P1: address page UX + payment friction, P2: channel budget reallocation, P3: long-term loyalty programs. Targeting conversion recovery from 13.76% to above 20%.',
          ],
        },
      },
    },
    '6': {
      id: 6,
      title: 'Customer Segmentation RevoBank using K-Means',
      description: 'Analysis about RevoBank Customer using K-Means clustering for business insights.',
      image: Method4,
      slideUrl: 'https://drive.google.com/file/d/1OSiRpPLzc0a1d8_EUC5UP-kSQXB5BC_X/view?usp=drive_link',
      duration: '3 weeks',
      team: 'Individual',
      tools: ['Python'],
      disclaimer: '*Disclaimer: This project is a part of RevoU Data Insight Project, a 4-week case study designed to analyze customized datasets and address business challenges. Supervised by RevoU, this project hones analytical skills, strengthens problem-solving abilities, and guides students in delivering actionable insights.',
      details: {
        background: 'RevoBank sought to optimize its credit card portfolio by gaining deep behavioral insights from its diverse customer base. The project involved cleaning and merging disparate user and card datasets to identify distinct risk profiles and spending patterns. The ultimate goal was to move away from "one-size-fits-all" marketing and implement data-driven strategies for revenue growth and risk mitigation.',
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

              {/* Dynamic Disclaimer - otomatis menyesuaikan tiap project */}
              {project.disclaimer && (
                <p className="mt-4 text-xs text-gray-500 italic">
                  {project.disclaimer}
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