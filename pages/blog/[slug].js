import Layout from "../../components/Layout";
import { blogPost } from "../../lib/data";

export default function BlogPage({ title, date, content }) {
    return (
    <Layout
        title=" {title} | Proanalytics"
        description="Este es una entrada de blog"
    >
        <main className="font-mont my-4">
        <h2 className="text-2xl font-bold text-keppel-500 text-center">{title}</h2>
        <div className="w-full md:w-4/5 mx-auto py-4">
            {content}
        </div>
        </main>
    </Layout>
    );
    }

    export async function getStaticProps(context) {
        console.log('hi!', context);
        const { params } = context;
    return {
        props: blogPost.find(item => item.slug === params.slug),
    };
}

export async function getStaticPaths() {
    return {
                paths : blogPost.map((item) => ({
                params : {
                slug : item.slug,
            },
        })),
        fallback: false,
    };
}   
