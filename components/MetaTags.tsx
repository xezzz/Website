import Head from 'next/head';
import { useRouter } from 'next/router';



export function MetaTags({
    url = "http://localhost:3000",
    pathname,
    title = "xezzz",
    description = "~ think deep, don't sink"
}: {
    url?: string;
    pathname?: string;
    title?: string;
    description?: string;
}) {
    const router = useRouter();

    return (
        <Head>
            <title>{title}</title>
            <meta content={description}  name="description" />
            <meta content="280" property="og:image:width" />
            <meta content="280" property="og:image:height" />
            <meta content={description} property="og:description" />
            <meta content={title} property="og:title" />
            <meta content={`${url}${pathname || router.asPath}`} property="og:url" />
            <meta content={`${url}/m-img.png`} property="og:image" />
        </Head>
    )
}