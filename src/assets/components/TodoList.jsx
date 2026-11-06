import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [tugas, setTugas] = useState("");
  const tambah = (e) => {
    e.preventDefault();
  };
  const hapus = (id) => {};
  const toggle = (id) => {};

  return <div>{}</div>;
}

export default TodoList;
