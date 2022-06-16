/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout title="Portfolio" description={"My Portfolio"}>
      <motion.img
        src="/images/ball-1.svg"
        className="hidden md:block h-auto absolute top-48 right-10 z-{1}"
        alt="ball-img"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <motion.img
        src="/images/ball-2.svg"
        className="hidden md:block h-auto absolute bottom-10 left-10 z-{1}"
        alt="ball-img"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <main>
        <h1 className="text-red-500">hello world</h1>
      </main>
    </Layout>
  );
}
