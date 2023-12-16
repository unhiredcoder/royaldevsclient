import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../types';
import { formatDate } from '../utils';
import {motion} from 'framer-motion'
interface IPropType {
    article: IArticle;
}

const Blogcard = ({ article }: IPropType) => {
    console.log("tttttttttttttt",article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url);
    return (
        <div>
            <Link href={`/article/${article.attributes.slug}`}>
                <motion.h1    initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
                    {article.attributes.title}
                </motion.h1>
            </Link>
            <motion.div className="flex items-center my-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ staggerChildren: 0.2 }}>
                <motion.div className="rounded-full overflow-hidden flex items-center justify-center mr-2" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <Image
                        className='w-full'
                        src={article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}
                        height={40}
                        width={40}
                        alt='iamge'
                    />
                </motion.div>
                <motion.span className="text-sm font-bold text-gray-600" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    {article.attributes.author.data.attributes.firstname}{' '}
                    {article.attributes.author.data.attributes.lastname} on
                    &nbsp;
                    <span className="text-gray-400">
                        {formatDate(article.attributes.createdAt)}
                    </span>
                </motion.span>
            </motion.div>

            {/* Animate the short description */}
            <motion.div className="text-gray-500" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                {article.attributes.shortDescription.slice(0, 250)}{' '}
                {article.attributes.shortDescription.length > 250 ? '...' : ''}
            </motion.div>
        </div>
    );
};

export default Blogcard;
