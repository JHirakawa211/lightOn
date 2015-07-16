var gpio = require("pi-gpio");

 

function powerOn (pin) {
 gpio.open(pin, "output", function (err) {
  if (err) throw err;
  gpio.write(pin, 1, function (err) {
    if (err) throw err;
    gpio.read(pin, function (err, value) {
      if (err) throw err;
      console.log("it works", value);
      gpio.close(pin);
    });
  });
 });
}

powerOn(16);
powerOn(22);

