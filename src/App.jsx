import Portfolio from './components/Portfolio'
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import GalaxyBackground from "./components/ui/galaxy-background"

function App() {
  return (
    <div className="relative">
      {/* Fixed cinematic background — always behind everything */}
      <GalaxyBackground />

      {/* All page content sits above the background */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Portfolio />
      </div>

      {/* Custom cursor rendered at root level */}
      <SmoothCursor />
    </div>
  )
}

export default App
