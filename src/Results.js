import React, { useState, useEffect } from 'react'
import axios from './axios'
import Newss from './Newss';
import requests from './requests.js'
function Results({selectedOption , country }) {
    const [news, setNews] = useState([]);
const url =  `http://newsapi.org/v2/top-headlines?country=${country}&category=${selectedOption}&apiKey=7cd2254c48454d04ae5cfddb2a9d18d3` 
const getNews = async () => {
        
    const response = await fetch(url)
    const data = await response.json();
    setNews(data.articles)
    console.log(data)
 }

useEffect( () => {
 getNews();
},  [selectedOption])


    return (
        <div className='results'>
        <div>
        {news.map(article =>
     
        <Newss 
        title={article.title}
        image={article.urlToImage}
        description={article.description}
        />
 )}
    </div>
        </div>
    )
}
export default Results