import axios from 'axios'
// import qs from "qs"
const baseURL = "http://172.16.14.64:3000/"
export default {
    intro:axios.create({
        baseURL:baseURL+"intro",  
    }),
    news:axios.create({
        baseURL:baseURL+"news"
    }),
    certificate:axios.create({
        baseURL:baseURL+"certificate"
    }),
    patent:axios.create({
        baseURL:baseURL+"patent"
    })
}