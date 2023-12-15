import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../types';
interface IPropType {
    article: IArticle;
}
const BlogCardWithImage = ({ article }: IPropType) => {
    return (
        <div className="rounded-md flex items-center h-64 bg-gradient-to-br from-green-300 to-yellow-400">
            <Link href={`/article/${article.attributes.slug}`}>
                <span className="text-2xl w-2/3 text-[#4169E1] p-6 font-bold after:content-[''] after:bg-black after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
                    {article.attributes.title}
                </span>
            </Link>
            <Image src="/gitbook.svg" width={140} height={140} />
        </div>
    );
};

export default BlogCardWithImage;
