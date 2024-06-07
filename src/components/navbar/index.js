const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full text-white p-4 z-10">
      <nav className="mx-auto flex justify-between">
        <div className="text-lg font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#experience" className="hover:underline">Experience</a></li>
          <li><a href="#section3" className="hover:underline">Work</a></li>
          <li><a href="#section3" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar