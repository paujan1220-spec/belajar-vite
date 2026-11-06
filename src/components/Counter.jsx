import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hitungan: {count}</p>

      <button onClick={() => setCount(count + 1)}>Tambah </button>

      <button onClick={() => (setCount > 0 ? count - 1 : 0)}>Kurang </button>

      <button onClick={() => setCount(0)}>reset </button>
    </div>
  );
}

export default Counter;
