import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState(""); // isi kolom input
  const [tugas, setTugas] = useState([]); // daftar tugas

  return (
    <div>
      <h2>To-do List</h2>
      {/* langkah 1: bikin form di sini */}
    </div>
  );
}

export default TodoList;
