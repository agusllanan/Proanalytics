import Layout from "../../components/Layout";
import { getAllPosts } from '../../lib/data';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'


export default function BlogPage({ title, date, content, description}) {
  const components = (content);

  return (
    <Layout title={title} description={description}>
      <main className=" bg-gray-100">
        <div className="border-b-2 border-gray-200 mb-4 mx-auto text-center">
          <h2 className="text-3xl font-regular text-black uppercase bg-white py-4 font-jost">{title}</h2>
          <div className="text-gray-600 text-md">
          </div>
        </div>
        <div className="shadow-xl flex justify-center aling-center">
          <div className="rounded-xl prose prose-xl p-5">
            <MDXRemote {...content} components={components} />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  const mdxSource = await serialize(content);

  return {
    props: {
      ...data,
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}