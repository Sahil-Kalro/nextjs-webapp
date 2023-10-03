import Head from 'next/head';
import Template from '../components/template/Template';
import Landing from '../components/landing/Landing';
import content from '../json/content.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>{content.title}</title>
      </Head>
      <Template>
        <Landing />
      </Template>
    </>
  );
}