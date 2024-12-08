import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AwarenessListItem {
  title: string;
  description: string;
  logo: string; // URL for the logo image
}

const awarenessListData: AwarenessListItem[] = [
  {
    title: 'Programming',
    description:
      'Ability to write and debug code in languages like Python, Java and other compiled languages. Familiarity with data structures and algorithms.',
    logo: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww',
  },
  {
    title: 'Database Management',
    description:
      'Knowledge of storing, retrieving, and managing data using SQL or SQLite. Familiarity with database design and optimization.',
    logo: 'https://media.istockphoto.com/id/1710820813/photo/shot-of-data-center-with-multiple-rows-of-fully-operational-server-racks-modern.webp?a=1&b=1&s=612x612&w=0&k=20&c=vwb9Pk9wj0v3Hxjzrow44WB84oo8fJeoqoC17pS8eCs=',
  },
  {
    title: 'Problem-Solving',
    description:
      'Logical thinking to identify and resolve technical challenges effectively. Ability to break down complex problems into smaller, solvable parts.',
    logo: 'https://plus.unsplash.com/premium_photo-1695185954894-e9382c6f4da8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvYmxlbSUyMHNvbHZpbmd8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Networking Basics',
    description:
      'Understanding of computer networks, IP addresses, and internet protocols. Ability to configure and troubleshoot network connections.',
    logo: 'https://plus.unsplash.com/premium_photo-1682145728214-dbd62535af3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBuZXR3b3JrfGVufDB8fDB8fHww',
  },
];

const AwarenessList: React.FC = () => {
  return (
    <div className="max-w-4xl gap-5 grid grid-cols-1 md:grid-cols-2 mx-auto pb-10">
      {awarenessListData.map((item, index) => (
        <AwarenessListItemComponent key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const AwarenessListItemComponent: React.FC<{ item: AwarenessListItem; index: number }> = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className="flex items-start mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Reset the animation when out of view
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Vertical Line */}
      <div className="relative">
        <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center border border-gray-300 relative z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.logo} alt={item.title} className="w-12 h-12 rounded-full object-cover" />
        </div>
      </div>

      {/* Event Details */}
      <div className="ml-6">
        <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
        <p className="text-gray-500 text-xs">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default AwarenessList;