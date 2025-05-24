import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #000000; /* Black */
    --color-secondary: #333333; /* Dark grey */
    --color-background: #f8f9fa; /* Light background */
    --color-background-alt: #ffffff; /* White background */
    --color-text: #000000; /* Black text */
    --color-text-light: #666666; /* Light text */
    --color-accent: #f0f0f0; /* Light accent */
    --color-accent-blue: #191970; /* Navy blue */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-sans);
    color: var(--color-text);
    background-color: var(--color-background);
    line-height: 1.6;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5 {
    font-family: var(--font-sans);
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--color-text);
    text-transform: uppercase;
    letter-spacing: -0.5px;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    letter-spacing: -1px;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: var(--color-text-light);
    font-size: 1.1rem;
  }

  a {
    color: var(--color-text);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--color-secondary);
    }
  }

  button {
    cursor: pointer;
    background-color: var(--color-text);
    color: white;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: var(--color-secondary);
    }
  }

  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  section {
    padding: 5rem 0;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 4rem;
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: -0.5px;
  }
`;

export default GlobalStyles;
