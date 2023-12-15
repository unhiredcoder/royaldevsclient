import { AxiosResponse } from 'axios';
import React from 'react';
import qs from 'qs';
import Image from 'next/image';
import { formatDate, serializeMarkdown } from '../../utils';
import { fetchArticleBySlug } from '../../http';
import { IArticle, ICollectionResponse } from '../../types';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface IPropType {
    article: IArticle;
    notFound?: boolean;
}

const slug = ({ article, notFound = false }: IPropType) => {

    return (
        <>
            <Head>
                <title>{article.attributes.title}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="my-12 grid lg:grid-cols-3 gap-12 single-article">
            <motion.div className="col-span-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1 className="text-3xl font-bold py-2">
                    {article.attributes.title}
                </h1>
                <div className="flex items-center my-4">
                    <div className="rounded-full overflow-hidden flex items-center justify-center mr-2">
                        <Image
                            src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                            height={40}
                            width={40}
                            alt=''
                        />
                    </div>
                    <span className="text-sm font-bold text-gray-600">
                        {article.attributes.author.data.attributes.firstname}{' '}
                        {article.attributes.author.data.attributes.lastname}{' '}
                        on &nbsp;
                        <span className="text-gray-400">
                            {formatDate(article.attributes.createdAt)}
                        </span>
                    </span>
                </div>
                <div className="slug text-lg text-gray-600 leading-8">
                    <img
                        className="slug-img w-full my-12 mb-6"
                        src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
                        alt={article.attributes.title}
                    />
                    <div className="p-6">
                        <MDXRemote
                            {...(article.attributes.body as MDXRemoteSerializeResult)}
                        />
                    </div>
                </div>
            </motion.div>
            <motion.div className="center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="form sticky top-0">
                    <h2 className="font-bold text-gray-600 text-lg">
                        Signup to our newsletter
                    </h2>
                    <p className="mt-4 text-gray-500">
                        Get the latest article on all things data delivered
                        straight to your inbox
                    </p>
                    <input
                        className="border w-full p-2 pl-3 my-6 outline-primary"
                        type="email"
                        placeholder="Your work email"
                    />
                    <button className="border-2 border-primary rounded py-1 px-6 text-primary font-bold">
                        Subscribe
                    </button>
                    <hr className="my-6 border-gray-100" />
                </div>
            </motion.div>
        </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const queryString = qs.stringify({
        populate: ['image', 'author.avatar'],
        filters: {
            slug: {
                $eq: query.slug,
            },
        },
    });

    const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
        await fetchArticleBySlug(queryString);
    if (articles.data.length === 0) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            article: await serializeMarkdown(articles.data[0]),
        },
    };
};

export default slug;
