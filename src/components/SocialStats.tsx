import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialStats = () => {
  const socialData = [
    {
      platform: 'Facebook',
      icon: Facebook,
      followers: '30,000',
      bgColor: 'bg-blue-600',
      textColor: 'text-white'
    },
    {
      platform: 'Twitter',
      icon: Twitter,
      followers: '1,11,000',
      bgColor: 'bg-sky-400',
      textColor: 'text-white'
    },
    {
      platform: 'Google+',
      icon: Instagram,
      followers: '19,000',
      bgColor: 'bg-red-500',
      textColor: 'text-white'
    },
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      followers: '45,000',
      bgColor: 'bg-blue-700',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {socialData.map((social, index) => (
        <div key={index} className={`${social.bgColor} ${social.textColor} rounded-lg p-4 text-center`}>
          <social.icon className="w-6 h-6 mx-auto mb-2" />
          <div className="text-lg font-bold">{social.followers}</div>
          <div className="text-sm opacity-90">{social.platform}</div>
        </div>
      ))}
    </div>
  );
};

export default SocialStats;