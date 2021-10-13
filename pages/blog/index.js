import Layout from "../../components/Layout";
import { blogPost } from "../../lib/data.js";
import Link from "next/link";
import { format, parseISO, add } from "date-fns";

export default function blog() {
  return (
    <Layout title="Blog | Proanalytics" description="Agregue una descripcion">
      <h1 className="font-mont text-center pt-8 font-bold text-4xl text-keppel-600">
        Nuestro Blog
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-2/3 mb-12 font-mont space-y-4 content-center items-center mx-auto">
          {blogPost.map((item) => (
            <BlogListItem key={item.slug} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="border border-keppel-300 rounded-md shadow p-4 hover:shadow-xl transition duration-300 ease-in-out">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold text-keppel-500 text-xl"> {title} </a>
        </Link>
      </div>
      <div className="text-keppel-400 text-sm">
          {format(parseISO(date), "do MMMM, uuu")}
          </div>
      <div className="text-green-500 py-4">{content}</div>
    </div>
  );
}
