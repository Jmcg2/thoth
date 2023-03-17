import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { createContext, useState } from "react";

export const BannerContext = createContext();

function MyApp({ Component, pageProps }) {
  const [bannerToggle, setBannerToggle] = useState(true);
  const context = { bannerToggle, setBannerToggle };

  return (
    <BannerContext.Provider value={context}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </BannerContext.Provider>
  );
}

export default MyApp;
