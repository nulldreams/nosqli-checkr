const _ = require('lodash')
const payloads = [
    {"$gt":""},
    {"$exists":true}
]

exports.prepare_data = ({ data, params }) => {
    for (const param of params) {
        data[param] = payloads[0]
    }
    return { preapared_data: data, payload: payloads[0] }
}

function transform_param (param) {
    let obj = { [param]: payloads[0] }
    return obj
}

exports.analyze_response = ({ response, errorMessage }) => {
    if (object_isEqual(convert_object(response), convert_object(errorMessage))) return { vulnerable: false }
    if (!(object_isEqual(convert_object(response), convert_object(errorMessage)))) return { vulnerable: true }

    return { vulnerable: false }
}

function convert_object (object) {
    let new_object = object

    if (typeof new_object !== 'object') {
        new_object = JSON.parse(object)
    }

    return new_object
}

function object_isEqual (obj1, obj2) {
    return _.isEqual(obj1, obj2)
}