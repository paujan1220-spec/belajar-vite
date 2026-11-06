import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");   // isi kolom input
  const [tugas, setTugas] = useState([]);   // daftar tugas

  const tambah = (e) => {
    e.preventDefault();                     // cegah halaman reload
    if (input.trim() === "") return;        // input kosong: berhenti
    setTugas([...tugas, { id: Date.now(), teks: input, selesai: false }]);
    setInput("");                           // kosongkan input
  };

  const hapus = (id) => {
    setTugas(tugas.filter((t) => t.id !== id));
  };

  const toggle = (id) => {
    setTugas(
      tugas.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } : t))
    );
  };

  return (
    <div className="panel">
      <h2>To-do List</h2>

      <form className="todo-form" onSubmit={tambah}>
        <input
          className="input"
          placeholder="Tulis tugas..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" type="submit">Tambah</button>
      </form>

      {tugas.length === 0 && <p className="kosong">Belum ada tugas</p>}

      <ul className="todo-list">
        {tugas.map((t) => (
          <li key={t.id} className={t.selesai ? "todo-item selesai" : "todo-item"}>
            <span onClick={() => toggle(t.id)}>{t.teks}</span>
            <button className="btn btn-danger btn-kecil" onClick={() => hapus(t.id)}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;