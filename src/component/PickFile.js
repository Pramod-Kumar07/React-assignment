import { useRef } from "react";

function PickFile() {
  const inputRef = useRef(null);

  function handlePick() {
    inputRef.current.click();
  }

  return (
    <div>
      <input type="file" ref={inputRef} />
      <button onClick={handlePick}>Pick File</button>
    </div>
  );
}

export default PickFile;
