const cli = require('commander')
const cfonts = require('cfonts')
const lib = require('./lib')

cfonts.say('noSQLi checkr', {
    font: 'block',
    align: 'left',
    colors: ['system'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    maxLength: '0'
})

cli.version('0.0.1').description('Automate NoSQL Injection Scanner')

cli.command('scan').description('starts scan').option('-h, --host <host>', 'Postman collection').option('-h, --headers <headers>')
    .option('-m, --method <method>').option('-p, --params <params>').option('-d, --data <data>')
    .option('-e, --error-message <error message>').action(async (options) => {
        lib(options)
})

cli.parse(process.argv)