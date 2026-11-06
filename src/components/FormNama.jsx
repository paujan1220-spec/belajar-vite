import { useState } from "react";

function FormNama() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="panel form-nama">
      <h2>Form</h2>
      <input className="input" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
      <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <p className="hasil">Nama: {nama || "-"}</p>
      <p className="hasil">Email: {email || "-"}</p>
    </div>
  );
}

export default FormNama;