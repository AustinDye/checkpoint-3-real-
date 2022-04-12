export function getListform() {
    return /*html*/`
    <form onsubmit="app.listsController.addList()">
      <div class="mb-3 justify-content-between">
        <div class="m-2">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" name="title" id="title"
            required minlength="3" maxlength="15" aria-describedby="title"
            placeholder="Title..." required>
        </div>
        <div class="m-2">
          <label for="first" class="form-label">Date</label>
          <input type="date" class="form-control" name="first" id="firstl" aria-describedby="first"
            placeholder="Date..." required>
          </div>
          
            <div class="container mt-3 p-3">
            <h4>Color</h4>
              <input type="radio" id="primary" name="color" value="bg-primary">
              <label for="primary">Blue</label>
              <input type="radio" id="light" name="color" value="bg-light">
              <label for="light">Light</label>
              <input type="radio" id="danger" name="color" value="bg-danger">
              <label for="danger">Red</label>
              <input type="radio" id="success" name="color" value="bg-success">
              <label for="success">Green</label>
              <input type="radio" id="info" name="color" value="bg-info">
              <label for="info">Pink</label>
           </div>
          
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Create</button>
      </div>
    </form>`
  }