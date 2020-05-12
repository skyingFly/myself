import axios from 'axios'

axios.defaults.timeout = 10000
const http = (method, url, options) => {
    const params = {}
    let option = {...params,...options}
    options = method.toLowerCase() === 'get' ? {params: option} : {data: option}

    let config = Object.assign({}, {method, url}, options)

    return new Promise((resolve, reject) => {
        axios(url, config).then(result => {
            resolve(result.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export default http
