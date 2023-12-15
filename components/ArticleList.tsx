import React from 'react';
import { IArticle } from '../types';
import Blogcard from './Blogcard';
import BlogCardWithImage from './BlogCardWithImage';
import Image from 'next/image';

interface IPropType {
    articles: IArticle[];
}
const ArticleList = ({ articles }: IPropType) => {

    if (articles.length === 0) {
        return (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',zIndex:'99', height:'50%',width:'100%',position:'absolute',background:'#fff'}}>
                <img src="/notfound.gif" className='notfound-mob' width='20%' alt="Not Found" />
            </div>
        );
    }
    return (
        <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
            {articles.map((article, idx) => {
                return (
                    <div key={article.id}>
                        {idx === 1 ? (
                            <BlogCardWithImage article={article} />
                        ) : (
                            <Blogcard article={article} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ArticleList;
