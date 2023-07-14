import Home from "./components/home";
import Sidebar from "./components/siebar";

export default function Main() {
  return (
    <main>
      <div className="flex flex-row bg-zinc-50 h-screen w-screen">
        <nav className="flex-2">
          <Sidebar />
        </nav>
        <div className="flex-1">
          <Home />
        </div>
      </div>

    </main>
  )
}
