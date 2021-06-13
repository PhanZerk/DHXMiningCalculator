export default function InputCheckbox({ label, id, checked, onChange }) {
  return (
    <>
      <div className="root">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        ></input>
        <label htmlFor={id}>{label}</label>
      </div>

      <style jsx>{`
        .root {
          display: flex;
          align-items: center;
          width: 100%;
        }

        input[type="checkbox"] {
          cursor: pointer;
          opacity: 0;
          position: absolute;
        }

        label {
          cursor: pointer;
          display: flex;
        }

        label::before {
          content: "";
          width: 1em;
          height: 1em;
          border-radius: 0.15em;
          margin-right: 0.5em;
          border: 0.05em solid black;
        }

        label:hover::before,
        input[type="checkbox"]:hover + label::before,
        input[type="checkbox"]:checked + label::before {
          background-color: rgb(246, 51, 102);
        }

        input[type="checkbox"]:checked + label::before {
          content: "${"\\002714"}";
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }
      `}</style>
    </>
  );
}
