function Footer() {
  const tahun = new Date().getFullYear();
  return <footer className="footer">© {tahun} Nama Lo. React Sederhana gue.</footer>;
}

export default Footer;