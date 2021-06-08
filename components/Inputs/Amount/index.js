export default function InputAmount({ label, value, step, onChange }) {
  const add = () => {
    const result = parseFloat(value) + parseFloat(step);

    onChange({
      target: {
        value: result.toFixed(4),
      },
    });
  };

  const substract = () => {
    const result = parseFloat(value) - parseFloat(step);

    onChange({
      target: {
        value: result.toFixed(4),
      },
    });
  };

  return (
    <>
      <div className="root">
        {label && <label>{label}</label>}

        <div className="input-group">
          <input
            type="number"
            min={step}
            step={step}
            inputMode="decimal"
            value={value}
            onChange={onChange}
          ></input>
          <div className="button-group right-border-rounded">
            <button onClick={substract}>-</button>
            <button className="right-border-rounded" onClick={add}>
              +
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .root {
          width: 100%;
        }

        label {
          font-size: 0.8rem;
          color: var(--text-small-color);
          margin-bottom: 0.4rem;
          display: inline-block;
        }

        .input-group {
          display: flex;
        }

        input {
          line-height: 1.6;
          font-size: 1rem;
          font-family: "system-ui", monospace, sans-serif;
          color: white;
          background-color: #31333f;
          border: none;
          padding: 0.625rem 0.875rem;
          flex: 1;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        .button-group {
          display: flex;
          align-items: center;
          background-color: #31333f;
        }

        button {
          color: white;
          height: 100%;
          border: none;
          background-color: transparent;
          font-weight: 800;
          padding: 0 1.1rem;
          transition: backgroundColor 300ms ease 0s;
        }

        .right-border-rounded {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }

        button:hover {
          background-color: rgb(246, 51, 102);
        }

        /* Disable arrows in input number */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Disabled in Firefox */
        input[type="number"] {
          -moz-appearance: "textfield";
        }
      `}</style>
    </>
  );
}
