import Head from "next/head";
import HomeComponents from "../components/custom/HomeComponents";

export default function Home() {
  return (
    <>
      <Head>
        <title>Get virús</title>
        <meta name="description" content="Get virús" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponents />
    </>
  );
}
