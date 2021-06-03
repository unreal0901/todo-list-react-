export default function Input({ item, setItem, handleSubmit, edit, insertAt }) {
  return (
    <>
      <div className="form">
        <form onSubmit={!edit.value ? handleSubmit : insertAt}>
          <div className="input">
            <span>
              <i className="fas fa-book"></i>
            </span>
            <input
              type="text"
              autoFocus={true}
              required
              placeholder="Addd a Item"
              value={item}
              onChange={(e) => setItem(e.currentTarget.value)}
            />
          </div>
          <button
            style={
              edit.value
                ? { backgroundColor: "blue" }
                : { backgroundColor: "green" }
            }
            type="submit"
          >
            {edit.value ? "Edit Item" : "Add Item"}
          </button>
        </form>
      </div>
    </>
  );
}
