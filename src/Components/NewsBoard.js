import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem'; // Import your NewsItem component here
import Marque from './Marque';
import "./Marque.css";
const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);
    const apiKey = '77133c9b08094690b82782ca6df45737'; // Replace with your actual API key

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
                console.log("API URL:", url); // Log the constructed URL
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }

                const data = await response.json();
                console.log("API Response:", data); // Log the API response
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [category]); // Empty dependency array ensures useEffect runs only once on component mount

    return (
        <div>
            <div>
            <br></br>
            <h1 className="text-center">NEWS<span className="badge bg-danger fs-2">TODAY</span></h1>
            
            <Marque/>
            </div>
            {articles.map((news, index) => (
                <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage} // Assuming `urlToImage` is the key for image URL
                    url={news.url} // Assuming `url` is the key for news article URL
                />
            ))}
        </div>
    );
};

export default NewsBoard;
