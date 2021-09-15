import Layout from "../../components/Layout";
import { blogPost } from "../../lib/data.js";
import Link from 'next/link';

export default function blog () {
    return (    
        <Layout 
        title="Blog | Proanalytics"
        description="Agregue una descripcion"
        >
            <h1 className="text-center py-8 font-bold text-4xl text-green-600">Blog</h1>
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
        {blogPost.map((item) => (
            <div key={item.slug}>
                <div> 
                    <Link href={`/blog/${item.slug}`}>
                        <a> {item.title} </a>
                    </Link> 
                </div>
                <div>{item.date.toString()}</div>
                <div className="text-green-500">{item.content}</div>
            </div>
        ))}
    </div>
</div>
        </Layout>
    )
}