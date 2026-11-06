import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="panel counter">
      <h2>Counter</h2>
      <p className="angka">{count}</p>
      <div className="aksi">
        <button className="btn" onClick={() => setCount(count + 1)}>Tambah</button>
        <button className="btn btn-ghost" onClick={() => setCount(count > 0 ? count - 1 : 0)}>Kurang</button>
        <button className="btn btn-danger" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;