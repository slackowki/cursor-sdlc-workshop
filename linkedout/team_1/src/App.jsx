import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar'
import Feed from './components/Feed'
import RightSidebar from './components/RightSidebar'
import './App.css'

function App() {
  return (
    <div>
      {/* Sticky top navigation bar */}
      <Navbar />

      {/* Three-column layout: sidebar · feed · right rail */}
      <main className="main-layout">
        <aside className="left-sidebar">
          <LeftSidebar />
        </aside>

        <section className="feed">
          <Feed />
        </section>

        <aside className="right-sidebar">
          <RightSidebar />
        </aside>
      </main>
    </div>
  )
}

export default App
