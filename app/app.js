const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hello Kirito</title>
      <style>
        body {
          margin: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
        font-family: "Poppins", sans-serif;
          }
        h1 {
          color: white;
        font-size: 3rem;
        border-radius: 20px;
        padding: 20px 40px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        text-align: center;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          }
      </style>
    </head>
    <body>
      <h1>Hello! Kirito this side</h1>
    </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running at https://localhost:\${PORT}");
});
