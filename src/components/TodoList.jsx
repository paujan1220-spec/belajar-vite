import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState(""); // isi kolom input
  const [tugas, setTugas] = useState([]); // daftar tugas (belum dipakai)

  const tambah = (e) => {
    e.preventDefault();
    if (input.trim() == "") return;
    setTugas([...tugas, { id: Date.now(), teks: input, selesai: false }]);
    setInput("");
  };

  const hapus = (id) => {
    setTugas(tugas.filter((t) => t.id !== id));
  };

  const toggleSelesai = (id) => {
    setTugas(
      tugas.map((t) =>
        t.id === id ? { ...t, selesai: !t.selesai } : t
      )
    );
  };

  return (
    <div>
      <h2>To-do List</h2>
      <form onSubmit={tambah}>
        {" "}
        {/* pembungkus input + tombol */}
        <input
          placeholder="Tulis tugas..."
          value={input} // isi input dikontrol state
          onChange={(e) => setInput(e.target.value)} // tiap ngetik, simpan ke state
        />
        <button type="submit">Tambah</button>
      </form>

{tugas.length === 0 ? (
        <p>Belum ada tugas</p>
      ) : (
        <p>Jumlah tugas: {tugas.length}</p>
      )}

      <ul>
        {tugas.map((t) => (
          //   <li key={t.id}>{t.teks}</li>
          <li key={t.id}>
            {t.teks}
            <button onClick={() => hapus(t.id)}>Hapus</button>
            <button onClick={() => toggleSelesai(t.id)}>
              {t.selesai ? "Batal Selesaikan" : "Tandai Selesai"}
            </button>
          </li>
        ))}
      </ul>{" "}
      {/* sementara, buat ngecek */}
    </div>
  );
}

export default TodoList;
