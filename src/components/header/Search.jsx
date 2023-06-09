export const Search = () => {
    return (
        <form className="d-flex w-50 mx-2" role="search">
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-white"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-warning"
                type="button"
                id="button-addon2"
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
    )
}