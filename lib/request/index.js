const request = require('request')

async function get ({ url, qs, headers }) {
  return new Promise((resolve, reject) => {
    request({ method: 'GET', url, qs, headers, form: false }, (error, response, body) => {
      if (error) return reject(error)

      return resolve({ body, response })
    })
  })
}

async function post ({ url, headers, data }) {
  return new Promise((resolve, reject) => {
    request({ method: 'POST', url, headers, body: data, json: true }, (error, response, body) => {
      if (error) return reject(error)

      return resolve({ body, response })
    })
  })
}

module.exports = {
  get,
  post
}