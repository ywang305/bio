import Head from "next/head";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yao's Profile</title>
        <meta name="description" content="Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box p={16}>
          <p>
            {`I am a software engineer, based in NYC, 
          ${new Date().getFullYear() - 2017} years of experience in professional
          fullstack development. `}
          </p>
          <ul>
            <li>React + SpringBoot + MSSQL</li>
            <li>Vue + SpringBoot + MySQL</li>
            <li>Vue + Node + Mongo</li>
            <li>React + Rails + Postgre</li>
          </ul>
        </Box>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
