export function getListform() {
    return /*html*/`
    <form onsubmit="app.listsController.addList()">
      <div class="mb-3 d-flex justify-content-between">
        <div>
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" name="title" id="title" aria-describedby="title"
            placeholder="Title..." required>
        </div>
        <div>
          <label for="first" class="form-label">Date</label>
          <input type="text" class="form-control" name="first" id="firstl" aria-describedby="first"
            placeholder="Date..." required>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Create</button>
      </div>
    </form>`
  }