import Cutcornerbutton from "../components/Cutcornerbutton"

export const Header = () => {
  return (
    <header className="sticky bg-zinc-900/50 backdrop-blur-lg top-0 z-40">
      <div className="container">
      <div className="flex justify-between items-center">
        <div>
          <img src= '/assets/images/laconte_logo.svg' alt="Laconte Logo" />
        </div>
        <div className="flex items-center gap-4">
          <Cutcornerbutton className="hidden md:inline-flex">Get Started</Cutcornerbutton>
          <div className="size-10 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

