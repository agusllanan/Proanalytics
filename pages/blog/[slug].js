import Layout from "../../components/Layout";
import { blogPost } from "../../lib/data";

export default function BlogPage({ title, date, content }) {
    return (
    <Layout
        title=" {title} | Proanalytics"
        description="Este es una entrada de blog"
    >
        <main>
        <h1>{title}</h1>
        </main>
    </Layout>
    );
    }

    export async function getStaticProps(context) {
        console.log('hi!', context);
    return {
    props: {}, // will be passed to the page component as props
    };
}

export async function getStaticPaths() {
    return {
        path : blogPost.map((item) => ({
            params : {
                slug : item.slug,
            }
        })),
        fallback: false,
    };
    }   
