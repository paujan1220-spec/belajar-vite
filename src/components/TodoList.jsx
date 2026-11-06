import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState(""); // isi kolom input
  const [tugas, setTugas] = useState([]); // daftar tugas (array kosong di awal)

  const tambah = (e) => {
    // fungsi saat form di-submit
    e.preventDefault(); // cegah halaman reload otomatis
    // TODO: kalau input kosong, berhenti (return)
    // TODO: setTugas([...tugas, { id: Date.now(), teks: input, selesai: false }])
    //       [...tugas] = salin isi lama, lalu tambah item baru di akhir
    //       Date.now() = angka unik dari waktu, dipakai sebagai id
    // TODO: setInput('') untuk mengosongkan input
  };

  const hapus = (id) => {
    // terima id tugas yang mau dihapus
    // TODO: setTugas(tugas.filter((t) => t.id !== id))
    //       filter = ambil semua tugas KECUALI yang id-nya sama
  };

  const toggle = (id) => {
    // tandai selesai / belum
    // TODO: setTugas(tugas.map((t) => t.id === id ? { ...t, selesai: !t.selesai } : t))
    //       map = cek tiap tugas; kalau id cocok, balikin nilai selesai (true <-> false)
    //       { ...t } = salin isi tugas, lalu timpa bagian selesai
  };

  return (
    <div>
      {/* TODO: <form onSubmit={tambah}> berisi input dan tombol submit */}
      {/* TODO: tugas.map(...) untuk menampilkan daftar, jangan lupa key={t.id} */}
    </div>
  );
}

export default TodoList;
