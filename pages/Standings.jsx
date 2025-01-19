import React, { useEffect, useState } from 'react';

const Standings = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch('https://standings-decorde.netlify.app');
        const html = await response.text();
        setContent(html);
      } catch (error) {
        console.error('Error fetching standings:', error);
      }
    };

    fetchStandings();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Standings;
