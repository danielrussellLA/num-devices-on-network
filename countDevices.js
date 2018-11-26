'use strict'
const fs = require('fs');

fs.readFile('./devices_on_network.txt', 'utf-8', (err, text) => {
    if (err) {
        console.log(err);
        return;
    }
    const lines = text.split('\n');
    console.log(`There are ${lines.length - 1} devices connected to your network right now.`);
});

