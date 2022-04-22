import Layout from "../../components/Layout";
import { getAllPosts } from "../../lib/data.js";
import Link from "next/link";


export default function blog({ posts }) {
  return (
    <Layout title="Blog | Proanalytics" description="Agregue una descripcion">
      <div>
        <div
            className="bg-no-repeat bg-cover bg-center relative h-[300px] flex items-center"
            style={{
              backgroundImage: `url(/img/home/portada-general.jpeg)`,
            }}
        />
      </div>
      <h1 className="font-mont text-center pt-8 font-bold text-4xl text-indigo-500">
        Nuestro Blog
      </h1>
      <div className="container px-5 py-10 md:py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 font-mont">
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

function BlogListItem({ slug, title, img }) {
  return (
    <div className="border border-gray-100 hover:border-gray-200 rounded-md shadow p-4 hover:shadow-xl transition duration-300 ease-in">
      <div>
        <div>
          <img src={img} alt="" className="w-full h-200 pb-4"/>
        </div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold text-black uppercase text-xl hover:text-indigo-400 transition duration-250 ease-in font-jost">
            {" "}
            {title}{" "}
          </a>
        </Link>
      </div>
    </div>
  );
}
