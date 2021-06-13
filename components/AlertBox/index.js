const AVAILABLE_TYPES = ["info", "warning", "error"];

export default function AlertBox({ text, type }) {
  return (
    <>
      <div className={`root ${type}`}>
        <p>{text}</p>
      </div>

      <style jsx>{`
        .root {
          display: flex;
          align-items: center;
          width: 100%;
          border: 1px solid rgba(28, 131, 225, 0.1);
          padding: 16px;
          border-radius: 0.25em;
        }

        p {
          line-height: 1.5em;
        }

        .info {
          color: rgb(166, 213, 250);
          background-color: rgb(3, 14, 24);
        }

        .warning {
          color: rgb(255, 213, 153);
          background-color: rgb(25, 15, 0);
        }

        .error {
          color: rgb(250, 179, 174);
          background-color: rgb(24, 6, 5);
        }
      `}</style>
    </>
  );
}
