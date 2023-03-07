
import { Link } from "@solidjs/router";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div class="App">
      <div class="menu" onClick={(e) => { e.currentTarget.classList.toggle("active"); document.querySelector(".navigation")?.classList.toggle("open") }}>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <nav class="navigation">
        <ul class="nav">
          <Link class="single_nav" href="/">Home</Link>
          <Link class="single_nav" href="/about">About</Link>
          <Link class="single_nav" href="/education">Profession</Link>
          <Link class="single_nav" href="/showcase">Showcase</Link>
        </ul>
      </nav>
    </div>
    )
}
