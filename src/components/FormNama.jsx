import { useState } from "react";

function FormNama() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>Nama: {nama}</p>
      <p>Email: {email}</p>
    </div>
  );
}
export default FormNama;
