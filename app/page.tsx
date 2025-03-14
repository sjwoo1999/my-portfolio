"use client";

import React, { useState, useEffect } from "react";
import Tabs from "../components/Tabs";
import TabContent from "../components/TabContent";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Page = () => {
  const [activeTab, setActiveTab] = useState<string>("education");
  const [activeYear, setActiveYear] = useState<string>("전체");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const awardsSizes = {
    "/images/Award/2022/award_kuding_2022.png": { width: 300, height: 400 },
    "/images/Award/2023/seasonthon.png": { width: 300, height: 400 },
    "/images/Award/2023/dsc.png": { width: 300, height: 400 },
  };

  const careerSizes = {
    "/images/Career/2022/likelion-10th.png": { width: 300, height: 400 },
    "/images/Career/2023/united.png": { width: 300, height: 400 },
    "/images/Career/2023/likelion-11th.png": { width: 300, height: 400 },
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loadingScreen}>
          <div className={styles.loadingAnimation}>
            <div className={styles.circle}></div>
            <h1>Welcome to SJWoo&apos;s Portfolio</h1>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeYear={activeYear}
            setActiveYear={setActiveYear}
          />
          <TabContent
            activeTab={activeTab}
            activeYear={activeYear}
            awardsSizes={awardsSizes}
            careerSizes={careerSizes}
          />
        </>
      )}
    </div>
  );
};

export default Page;
