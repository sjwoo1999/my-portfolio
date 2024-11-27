import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --background: #F7F7F7;
          --foreground: #171717;
          --primary-color: #7C001A;
          --accent-color: #E30547;
          --font-size-large: 1.25rem;
          --font-size-medium: 1rem;
          --font-size-small: 0.875rem;
          --font-weight-bold: bold;
        }

        body {
          color: var(--foreground);
          background-color: var(--background);
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        a {
          color: var(--accent-color);
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        button {
          background-color: var(--accent-color);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #c0043b; /* 강조 색상보다 약간 어두운 색으로 호버 효과 추가 */
        }

        button:hover {
          background-color: #c0043b;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
