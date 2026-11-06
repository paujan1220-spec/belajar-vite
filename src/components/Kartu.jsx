function Kartu({ nama, umur, aktif = false }) {
  return (
    <div className="kartu">
      <div className="avatar">{nama ? nama[0] : "?"}</div>   {/* huruf pertama nama */}
      <h3>{nama}</h3>
      <p>Umur: {umur}</p>
      <span className={aktif ? "badge aktif" : "badge"}>     {/* class berubah sesuai props */}
        {aktif ? "Aktif" : "Nonaktif"}
      </span>
    </div>
  );
}

export default Kartu;