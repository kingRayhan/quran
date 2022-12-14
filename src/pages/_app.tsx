import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.scss";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
