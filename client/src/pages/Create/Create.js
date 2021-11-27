import "./Create.scss";
import TestHead from "../../components/TestHead/TestHead";
import TestBody from "../../components/TestBody/TestBody";
import TestLegs from "../../components/TestLegs/TestLegs";
import TestHead2 from "../../components/TestHead2/TestHead2";
import TestBody2 from "../../components/TestBody2/TestBody2";
import TestLegs2 from "../../components/TestLegs2/TestLegs2";

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
        <div className="create__machine-parts-section">
          <svg width="200" height="500">
            <TestLegs />
            <TestLegs2 />
            <TestBody />
            <TestBody2 />
            <TestHead />
            <TestHead2 />
          </svg>
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
