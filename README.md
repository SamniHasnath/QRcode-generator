# QRcode-generator

A simple Node.js application that generates QR codes from user-provided text or URLs. The project demonstrates how to use npm packages, handle user input, and create image files programmatically. When a user enters text, the application converts it into a QR code and saves it as a PNG image.

Available in two forms:

1. **CLI script** (`index.js`) — runs in the terminal using Node.js.
2. **Website** (`index.html`) — runs entirely in the browser, no server required.

## Key Features
- Generate QR codes from text or URLs
- Save QR codes as PNG images
- Built with Node.js and npm packages
- Also works as a standalone, no-install website
- Beginner-friendly project for learning backend and frontend fundamentals

## 1. CLI Version

### Setup
```
npm install
```

### Run
```
node index.js
```

You'll be prompted:
```
Enter text or URL to generate QR Code:
```

Type your text or URL and press Enter. A file named `qrcode.png` will be created in the project folder — that's your QR code image.

## 2. Website Version

Just open `index.html` in any browser (double-click it, or right-click → Open with → your browser).

1. Type text or a URL into the input box.
2. Click **Generate** (or press Enter).
3. The QR code appears on the page.
4. Click **Download PNG** to save the image to your computer.

This version generates the QR code entirely client-side using the `qrcodejs` library loaded from a CDN — no backend, no npm install needed to use it.
<img width="602" height="607" alt="image" src="https://github.com/user-attachments/assets/51c98698-2d23-4ab2-995b-09b0ecbf19fa" />

## Technologies Used
- Node.js
- JavaScript
- npm
- [`qrcode`](https://www.npmjs.com/package/qrcode) npm package (CLI version)
- [`qrcodejs`](https://davidshimjs.github.io/qrcodejs/) via CDN (website version)
- `readline` for terminal input (CLI version)
- HTML5 `<canvas>` for rendering and downloading the image (website version)

## Learning Outcomes
- Working with npm packages
- Reading user input from the command line
- Generating files programmatically
- Understanding basic Node.js project structure
- **Async callbacks**: `QRCode.toFile()` and `readline.question()` both use callback-style APIs rather than promises.
- **Client-side vs. server-side generation**: the same problem (generate a QR code) can be solved either on a server/CLI (writing a file to disk) or entirely in the browser (rendering to a `<canvas>` and offering a download) — no server needed for the latter.
- **CDN pitfalls**: not every npm package publishes a ready-to-use browser bundle. The `qrcode` package's advertised `build/` folder wasn't actually present in the published files, causing a 404 and a silently broken page — a reminder to verify third-party CDN URLs actually resolve before relying on them.
- **DOM manipulation**: dynamically inserting a generated `<canvas>`/`<img>`, toggling UI state (success/error messages), and converting a canvas to a downloadable PNG via `toDataURL()`.
