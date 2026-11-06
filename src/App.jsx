import Header from "./components/Header";
import Footer from "./components/Footer";
import Kartu from "./components/Kartu";
import Tombol from "./components/Tombol";
import Counter from "./components/Counter";
import FormNama from "./components/FormNama";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Header />
      <Kartu nama="Paujan" umur="25" aktif={true} />
      <Kartu nama="Budi" umur="26" aktif={true} />

      <Kartu teks="Simpan" warna="green" />
      <Kartu teks="Hapus" warna="red" />

      <Counter />
      <FormNama />
      <TodoList />
    </div>
  );
}
export default App;
