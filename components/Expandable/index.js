import { useState } from "react";

export default function Expandable({ text, opened = false, children }) {
  const [expanded, setExpanded] = useState(opened);

  return (
    <>
      <div className="root">
        <div className="expandable-info" onClick={() => setExpanded(!expanded)}>
          <span>{text}</span>
          <span>{expanded ? "-" : "+"}</span>
        </div>

        <div className={`content ${expanded ? "open" : "close"}`}>
          {children}
        </div>
      </div>

      <style jsx>{`
        .root {
          width: 100%;
          background-color: transparent;
        }

        .expandable-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          cursor: pointer;
        }

        .expandable-info > span {
          font-size: 0.8em;
          color: black;
        }

        .expandable-info:hover span {
          color: #f63266;
        }

        .content {
          padding: 0 16px 16px;
        }

        .open {
          display: block;
        }

        .close {
          display: none;
        }
      `}</style>
    </>
  );
}
