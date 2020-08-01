var _isOn = false;

var version = require('./package.json').version;

var turnOn = function() {
    _isOn = true;
    setTimeout(function() { _isOn = false }, 0);
}

var isOn = function() {
    return _isOn;
}

module.exports = {
    version: version,
    turnOn: turnOn,
    isOn: isOn
}
