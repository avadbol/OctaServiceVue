import axios from 'axios'

const service = axios.create({
    baseURL:'http://localhost:55639/api'
})

export default service