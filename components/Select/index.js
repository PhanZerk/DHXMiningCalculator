export default function Select({ label, name, value, onChange, options }) {
  return (
    <>
      <div className="root">
        {label && <label htmlFor={name}>{label}</label>}

        <select name={name} value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.text}
            </option>
          ))}
        </select>
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

        select {
          display: block;
          width: 100%;
          line-height: 1.6;
          font-size: 1rem;
          font-family: "system-ui", monospace, sans-serif;
          color: white;
          border: none;
          padding: 0.625rem 0.875rem;
          padding-right: 1.1rem;
          border-radius: 6px;

          /* Arrow trick */
          position: relative;
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          background: #31333f
            url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='white'/></g></svg>")
            no-repeat;
          background-position: right 1.1rem top 50%;
        }
      `}</style>
    </>
  );
}
