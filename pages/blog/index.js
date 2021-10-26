import Layout from "../../components/Layout";
import { getAllPosts } from "../../lib/data.js";
import Link from "next/link";


export default function blog({ posts }) {
  return (
    <Layout title="Blog | Proanalytics" description="Agregue una descripcion">
      
      <h1 className="font-mont text-center pt-8 font-bold text-4xl text-keppel-600">
        Nuestro Blog
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-row mb-12 font-mont space-x-4">
          {posts.map((item) => (
            <BlogListItem key={item.slug} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="border border-gray-100 hover:border-gray-200 rounded-md shadow p-4 hover:shadow-xl transition duration-300 ease-in">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold text-keppel-500 text-2xl hover:text-curious-blue-400 transition duration-300 ease-in">
            {" "}
            {title}{" "}
          </a>
        </Link>
      </div>
      <div className="text-keppel-400 text-sm">
      </div>
      <div className="text-black py-4">{content.substr(0, 200)}</div>
    </div>
  );
}
