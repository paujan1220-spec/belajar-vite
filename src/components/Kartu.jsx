function Kartu({ nama, umur, aktif = false }) {
  // terima props; { } = destructuring; aktif = false -> nilai default
  return (
    <div style={{ border: "1px solid #1328e9", padding: 12, margin: 8 }}>
      <h3>{nama}</h3>
      <p>umur: {umur}</p>
      <p>{aktif ? "Aktif" : "NonAktif"}</p>
    </div>
  );
}
export default Kartu;
