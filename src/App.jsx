import Header from "./components/Header";
import Footer from "./components/Footer";
import Kartu from "./components/Kartu";
import Counter from "./components/Counter";
import FormNama from "./components/FormNama";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <Header />

      <section className="grid">
        <Kartu nama="Paujan" umur={25} aktif={true} />
        <Kartu nama="Budi" umur={26} aktif={true} />
        <Kartu nama="Siti" umur={22} />
      </section>

      <Counter />
      <FormNama />
      <TodoList />

      <Footer />
    </div>
  );
}

export default App;