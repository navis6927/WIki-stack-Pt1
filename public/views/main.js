const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (pages) => layout(html`
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <ul class="list-unstyled">
    <ul>
      <!-- PLACEHOLDER LIST OF PAGES -->
    </ul>
  </ul>`);
  const express = require('express');
  const app = express();
  const morgan = require('morgan')
  app.use(morgan("dev"));
  app.use(express.static("public/views"));
  app.use(express.urlencoded({ extended: false }));

  app.get('/',(req, res) => {
    res.send('');
  })

  // const PORT = 3000;
  // app.listen(PORT, () => {
  //   console.log(`App listening in port ${PORT}`);
  // });
