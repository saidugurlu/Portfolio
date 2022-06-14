import Layout from "../components/Layout";
 
export default function Home() {
  return (
    <Layout title="Portfolio" description={"My Portfolio"}>
      <img src="/images/ball-1.svg" className="hidden md:block h-auto absolute top-48 right-10 z-{1}"  alt="ball-img"/>
      <img src="/images/ball-2.svg" className="hidden md:block h-auto absolute bottom-10 left-10 z-{1}"  alt="ball-img"/>
      <main>
        <h1 className="text-red-500">hello world</h1>
      </main>
    </Layout>
  );
}
