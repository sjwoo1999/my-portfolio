import React from "react";
import styles from "../styles/NewsList.module.css";

interface NewsItem {
  title: string;
  link: string;
}

interface NewsListProps {
  newsData: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ newsData }) => {
  return (
    <div className={styles.newsContainer}>
      <h2 className={styles.title}>📰 News</h2>
      <ul className={styles.newsList}>
        {newsData.map((news, index) => (
          <li key={index} className={styles.newsItem}>
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.newsLink}
            >
              {news.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
