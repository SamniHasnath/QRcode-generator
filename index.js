import QRCode from 'qrcode';
import readline from 'readline';

// Create input/output interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for input
rl.question("Enter text or URL to generate QR Code: ", function(data) {

  // Generate QR Code as image file
  QRCode.toFile("qrcode.png", data, function (err) {
    if (err) {
      console.log("Error occurred:", err);
    } else {
      console.log("QR Code Generated Successfully!");
    }
  });

  rl.close();
});