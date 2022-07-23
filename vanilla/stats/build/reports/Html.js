"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Html = void 0;
const fs_1 = __importDefault(require("fs"));
class Html {
    constructor(filename) {
        this.filename = filename;
    }
    print(result) {
        const html = `<!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>HTML 5 Boilerplate</title>
        </head>
        <body>
          <h1>Report</h1>
          <h3>${result}</h3>
        </body>
        </html>`;
        fs_1.default.writeFileSync(this.filename, html);
    }
}
exports.Html = Html;
