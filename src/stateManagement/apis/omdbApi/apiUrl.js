import axios from "axios"


export default axios.create({
    baseURL: 'http://www.omdbapi.com/',
})

// send data requests via 'http://www.omdbapi.com/?apikey=[yourkey]&'
// post api requests via 'http://img.omdbapi.com/?apikey=[yourkey]&'