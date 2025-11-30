const fetch = require('node-fetch');

async function getCitation(){
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();
    return `${data[0].q} - ${data[0].a}`;
}

module.exports = { getCitation };