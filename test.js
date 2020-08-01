var useless = require('./index');

useless.turnOn();
console.log('on', useless.isOn());

setTimeout(function() {
    console.log('on', useless.isOn());
}, 0);

console.log('version', useless.version);
