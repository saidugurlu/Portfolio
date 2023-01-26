/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { memo } from "react";
import GitHubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import EmailIcon from "../components/icons/EmailIcon";
import Link from "next/link";

const TypingAnimation = memo(
  function TypingAnimation() {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={[
          "TypeScript",
          2000,
          "JavaScript",
          2000,
          "React.js",
          2000,
          "Next.js",
          2000,
          "HTML",
          2000,
          "Sass",
          2000,
          "CSS",
          2000,
          "Bootstrap",
          2000,
          "Tailwind CSS",
          2000,
          "Semantic UI",
          2000,
        ]}
      />
    );
  },
  (props, prevProps) => true
);

export default function Home() {
  return (
    <Layout title="Portfolio | M.Said Ugurlu" description={"My Portfolio"}>
      <motion.img
        src="/images/ball-1.svg"
        className="hidden md:block h-auto absolute bottom-5 right-48 z-{1}"
        alt="ball-img"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <motion.img
        src="/images/ball-2.svg"
        className="hidden md:block h-auto absolute top-1  left-10 z-{1}"
        alt="ball-img"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span>I&rsquo;m
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              M. Said Ugurlu
            </h1>
            <div className="mt-5 text-2xl font-semibold-light text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>

            {/* Social Accounts */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/saidugurlu"
                target={"_blank"}
                rel="noopener noreferrer"
                //Noopener, web sitenizin güvenliğini artırmak ve diğer web sitelerinin sayfanıza erişim sağlamasını önlemek için gereklidir (tarayıcı oturumu aracılığıyla).
                //Noreferrer, yönlendirme bilgilerinin hedef web sitesine aktarılmasını önlemek için kullanılır ve bu aynı zamanda Google analitikteki yönlendirme trafiğini de gizler.
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GitHubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="mailto:ugurlumsaid@gmx.de"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <EmailIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ugurlumsaid/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>

          {/* Code Area */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>
                    <span className="text-green-300"> Todo:</span> <span className="text-gray-500">You can drag
                    these balloons, I'm sure it'll be easy with</span> <span className="font-bold text-yellow-300">TypeScript
                    </span>
                    🎈🎈
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/kendiFotomProfil.jpeg"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        <span className="font-bold text-pink-300"> client</span>
                        _side = ["Reactjs", "Angular", "Nextjs", "JavaScript", "TypeScript", "HTML5"];
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        <span className="font-bold text-pink-300"> client</span>
                        _more = ["CSS", "SASS", "Bootstrap", "TailwindCSS",
                        "SemanticUI"];
                      </p>
                      <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                          <span>// currently learning </span>
                        </div>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        <span className="font-bold text-pink-300"> server</span>
                        _side = ["Node JS", "Express JS", "Mongo DB", "SQLite"];{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Link href="/projects">
                      <a className="transition duration-300">Projects</a>
                    </Link>

                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}
