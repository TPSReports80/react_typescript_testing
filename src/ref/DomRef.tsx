import { useRef, useEffect } from "react";

const DomRef = () => {
  // specify DOM element type in useRef using Generics
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // use optional chaining to check if ref is null or not
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
