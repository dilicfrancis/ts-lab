import fs from "fs";
import { Output } from "../Report";

export class Html implements Output {
  constructor(private filename: string) {}
  print(result: string): void {
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

    fs.writeFileSync(this.filename, html);
  }
}
