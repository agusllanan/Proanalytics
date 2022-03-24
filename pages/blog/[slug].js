import Layout from "../../components/Layout";
import { getAllPosts } from '../../lib/data';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'


export default function BlogPage({ title, date, content }) {
  const components = (content);

  return (
    <Layout title="Blog | Proanalytics" description="Agregue una descripcion">
      <main>
        <div className="border-b-2 border-gray-200 mb-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-500 py-4 font-jost">{title}</h2>
          <div className="text-gray-600 text-md">
            {/* {format(parseISO(date), 'MMMM do, uuu')} */}
          </div>
        </div>
        <div className="w-4/5 px-4 py-4 mx-auto bg-gray-50 rounded-xl m-8 shadow prose-sm">
        <MDXRemote {...content} components={components} />
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