import Head from 'next/head';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import TopBar from '../components/topbar';
import Header from '../components/header';
import Intro from '../components/intro';
import Courses from '../components/courses';
import Layout from '../components/layout';
import { getAllPostsForHome, getMenu, getAllCourses } from '../lib/api';
import { CMS_NAME } from '../lib/constants';

export default function Index({
  allPosts: { edges },
  preview,
  menu: { menuItems },
  allCourses: { nodes },
}) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <>
      <Layout preview={preview}>
        <TopBar />
        <Header menuItems={menuItems} />
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Intro />
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <Courses courses={nodes} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false, menuName = 'Header' }) {
  const allPosts = await getAllPostsForHome(preview);
  const menu = await getMenu(menuName);
  const allCourses = await getAllCourses(preview);

  return {
    props: { allPosts, preview, menu, allCourses },
  };
}
