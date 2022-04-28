const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div class = "author-name">
    <label for="title"> Author Name </label>
    <input type = "text"> </div>

    <div class = "author-email">
    <label for="title"> Author Email</label>
    <input type = "text"> </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class = "page-content">
    <label for="title"> Page Content </label>
    <input type = "text"> </div>

    <div class = "page-status">
    <label for="title"> Page Status </label>
    <input type = "text"> </div>


    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
