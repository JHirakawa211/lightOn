var gpio = require("rpi-gpio");

function writeToPin (pin, value, callback) {
  setupPin(pin, gpio.DIR_OUT, function () {
    gpio.write(pin, value, function (err) {
      if (err) {
        console.log("Write failed!");
        throw err;
      } else {
        console.log("Write to pin", pin, " with value:", value, "worked!");
        callback();
      } 
    });
  });  
}

function setupPin (pin, direction, callback) {
  gpio.setup(pin, direction, function (err) {
    if (err) {
      console.log("failed to setup pin");
      throw err;
    } else {
      callback();
    }
  });
}

function readPin (pin, callback) {
  setupPin(pin, gpio.DIR_IN, function () {
    gpio.read(pin, function (err, value) {
      if (err) {
        console.log("Failed to read");
        throw err;
      } else {
        callback(value);
      }
    });
  });
}

var pin = 16;

// gpio.setMode(gpio.MODE_BCM);

writeToPin(pin, true, function () {
  readPin(pin, function (value) {
    console.log("Currently, pin", pin, "is", value);
  });
});

