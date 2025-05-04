import React from 'react';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiFlutter } from 'react-icons/si';

interface TechStackLogoProps {
  name: string;
  className?: string;
}

const TechStackLogo: React.FC<TechStackLogoProps> = ({ name, className = "" }) => {
  const iconSize = "w-6 h-6";
  const combinedClassName = `${iconSize} ${className}`;
  
  switch (name.toLowerCase()) {
    case 'react':
      return <SiReact className={`text-blue-500 ${combinedClassName}`} title="React" />;
    case 'node.js':
      return <SiNodedotjs className={`text-green-600 ${combinedClassName}`} title="Node.js" />;
    case 'mongodb':
      return <SiMongodb className={`text-green-500 ${combinedClassName}`} title="MongoDB" />;
    case 'tailwind css':
      return <SiTailwindcss className={`text-cyan-500 ${combinedClassName}`} title="Tailwind CSS" />;
    case 'flutter':
      return <SiFlutter className={`text-blue-400 ${combinedClassName}`} title="Flutter" />;
    default:
      return null;
  }
};

export default TechStackLogo;
