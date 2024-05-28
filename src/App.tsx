import NavComponent from "./components/common/nav/Nav.component"
import HomePage from "./pages/home/Home.pages"
import './App.css'
function App() {
  // const [modal, setModal] = useState(false);
  // const openModal = () => setModal(!modal);
  
  return (

    <main className="inset-0 bg-no-repeat bg-slate-50 dark:bg-[#0B1120]">
      <div
        className="inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
      // style={{ maskImage: "linear-gradient(transparent, black)" }}
      >
        <NavComponent />
        <HomePage />
      </div>
    </main>
  )
}

export default App
