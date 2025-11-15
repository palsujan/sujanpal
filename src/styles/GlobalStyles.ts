import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-primary: #ffffff;
    --bg-secondary: #f9f9f9;
    --text-primary: #333333;
    --text-secondary: #666666;
    --accent-color: #0066cc;
    --border-color: #e0e0e0;
    --card-bg: #ffffff;
    --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --header-height: 70px;
    --transition: all 0.3s ease;
  }

  [data-theme="dark"] {
    --bg-primary: #121212;
    --bg-secondary: #1e1e1e;
    --text-primary: #f5f5f5;
    --text-secondary: #b3b3b3;
    --accent-color: #4d9fff;
    --border-color: #333333;
    --card-bg: #1e1e1e;
    --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: var(--transition);
    overflow-x: hidden;
  }

  a {
    color: var(--accent-color);
    text-decoration: none;
    transition: var(--transition);
  }

  button {
    font-family: inherit;
    cursor: pointer;
    transition: var(--transition);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .section {
    padding: 5rem 0;
  }

  @media (max-width: 768px) {
    .section {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyles; 