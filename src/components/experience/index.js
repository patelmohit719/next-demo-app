"use client"

import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';

const TabComponent = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="flex">
      <div className="w-1/4">
        <ul className="list-none p-0">
          {tabs.map((tab, index) => (
            <motion.li
              key={index}
              className={`cursor-pointer p-2 border-l-2 hover:bg-lightNavy hover:text-green ${index === activeTabIndex ? 'text-green border-green' : 'text-gray-400 border-gray-600'
                }`}
              onClick={() => setActiveTabIndex(index)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p>{tab.title}</p>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <AnimatePresence mode="wait">
          {tabs[activeTabIndex] && (
            <motion.div
              key={activeTabIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-300 text-xl mb-3">{tabs[activeTabIndex].content.position} <span className="text-green">@{tabs[activeTabIndex].title}</span></p>
              <p className="text-gray-400 text-sm mb-6">{tabs[activeTabIndex].content.years}</p>
              <ul className="list-disc pl-5 space-y-2">
                {tabs[activeTabIndex].content.description.map((d, index) => <li key={`desc-${index + 1}`} className="text-gray-400">{d}</li>)}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const tabData = [
  {
    title: 'Ksolves',
    content: {
      position: 'Senior Software Engineer',
      years: 'October, 2020 - current',
      description: [
        "Executed multiple front-end development projects utilizing Next.js, React.js, and Node.js, directly contributing to a 20% in-crease in client project satisfaction.",
        "Orchestrated the simultaneous delivery of two high-priority projects, while ensuring a zero-compromise policy on quality.",
        "Streamlined the technical hiring process by conducting over 50+ interviews, significantly enhancing the team’s composition with highly skilled professionals.",
        "Facilitated internal knowledge exchange workshops, promoting a culture of learning and development within the team and improving overall team competence in new technologies",
      ],
    },
  },
  {
    title: 'Cyber Infrastructure',
    content: {
      position: 'Software Engineer',
      years: 'June 2019 - September 2020',
      description: [
        "Embarked on my professional journey in software development, quickly mastering core web technologies such as React.js and Node.js through intensive training and hands-on application, laying a solid foundation for future growth.",
        "Applied newly acquired skills to contribute effectively to key projects, employing emerging technologies that led to a 15% improvement in project delivery times.",
        "Engaged in client requirement sessions under supervision, gaining valuable insights into client expectations, project requirements gathering, and the importance of clear communication, which honed my client interaction skills.",
      ],
    },
  },
];

const Experience = () => {
  return (
    <section id='experience' class="min-h-screen flex flex-col items-start justify-center">
      <h1 className='container text-gray-300 text-3xl font-bold mb-12'><span className='text-green'>02.</span> Where I&apos;ve Worked</h1>
      <div className="container mx-auto p-4">
        <TabComponent tabs={tabData} />
      </div>
    </section>
  )
}

export default Experience