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
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              M. Said Ugurlu
            </h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
