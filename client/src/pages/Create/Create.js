import "./Create.scss";

export default function Create() {
  return (
    <section className="create">
      <h2 className="create__title">Create your creature!</h2>
      <label htmlFor="name" className="create__label">
        Name:
      </label>
      <input
        id="name"
        type="text"
        placeholder="give your creature a name"
        className="create__input"
      ></input>
      <section className="create__machine">
        <div className="create__machine-sections">
          <div className="create__machine-section">
            <svg width="200" height="100"></svg>
          </div>
          <div className="create__machine-section">
            <svg width="200" height="150"></svg>
          </div>
          <div className="create__machine-section">
            <svg width="200" height="150"></svg>
          </div>
        </div>
        <div className="create__machine-buttons">
          <button className="create__machine-button">Change head</button>
          <button className="create__machine-button">Change body</button>
          <button className="create__machine-button">Change legs</button>
        </div>
      </section>
      <button clasName="create__create-button">Create!</button>
    </section>
  );
}
