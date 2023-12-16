import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../types';

interface IPropType {
    article: IArticle;
}

const BlogCardWithImage = ({ article }: IPropType) => {
    return (
        <div
            className="rounded-md flex items-center h-64"
            style={{
                background:
                    'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)',
            }}
        >
            <Link href={`/article/${article.attributes.slug}`}>
                <span className="text-2xl w-2/3 text-[#FFF] p-6 font-bold after:content-[''] after:bg-[#FFF] after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
                    {article.attributes.title}
                </span>
            </Link>
            <Image src="/gitbook.svg" width={140} height={140} />
        </div>
    );
};

export default BlogCardWithImage;
