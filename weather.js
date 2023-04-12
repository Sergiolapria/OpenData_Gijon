function decodeUplink(input) {
  var data = {};
  //var bytes = input.bytes;

  data.temperature = ((input.bytes[0] << 8) | input.bytes[1]) / 100;
  data.humidity = ((input.bytes[2] << 8) | input.bytes[3])/1000;
  data.pressure = (((input.bytes[4]) << 24) + ((input.bytes[5]) << 16) + ((input.bytes[6]) << 8) + ((input.bytes[7]))) / 100;
  data.gas=(((input.bytes[7])<<24)+((input.bytes[8])<<16)+((input.bytes[9])<<8)+((input.bytes[10])))/100;
  data.water=((input.bytes[12]<<8)|input.bytes[13])/100;
//  data.battery = ((input.bytes[14] << 8) | (input.bytes[15])) / 1000;

    return { 
      data: data,
      warnings: [],
      errors: []
  };
}