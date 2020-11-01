import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://newsapi.org/v2/top-headlines?country=in&'
})

export default instance