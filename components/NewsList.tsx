import React from "react";
import { motion } from "framer-motion";

interface NewsItem {
  title: string;
  link: string;
}

interface NewsListProps {
  newsData: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ newsData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="grid gap-4">
        {newsData.map((news, index) => (
          <motion.a
            key={index}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card group relative overflow-hidden"
            whileHover={{ y: -2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
                  {news.title}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[var(--primary)]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default NewsList;
