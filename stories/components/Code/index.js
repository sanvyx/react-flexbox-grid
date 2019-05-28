import React, { useEffect } from "react";
import Prism from "prismjs";
import "../../prism.css";
import "prismjs/components/prism-jsx.min";

const Code = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre style={{ fontSize: "13px" }}>
      <code className="language-jsx">{children}</code>
    </pre>
  );
};

export default Code;
