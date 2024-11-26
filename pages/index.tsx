import React, { useState } from 'react';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import TabContent from '../components/TabContent';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [activeYear, setActiveYear] = useState('전체');

  return (
    <div className="container">
      <Header />
      <div className="tabs-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} activeYear={activeYear} setActiveYear={setActiveYear} />
        <TabContent activeTab={activeTab} activeYear={activeYear} />
      </div>
    </div>
  );
};

export default HomePage;
