import Head from "next/head";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import MyBio from "../components/bio/my-bio";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yao Profile</title>
        <meta name="description" content="Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box p={16}>
          <MyBio />
        </Box>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
