import { Route, Router, Routes } from '@solidjs/router';
import { Component, createEffect, createSignal, onMount, Show } from 'solid-js';
import Dark from './components/light_and_dark/dark/dark_icon';
import Light from './components/light_and_dark/light/light_icon';
import Navbar from './components/navbar/navbar';
import About from './pages/about/about';
import Education from './pages/education/education';
import Home from './pages/home/home';
import Showcase from './pages/showcase/showcase';
import "./App.scss"
import AboutMe from './components/about_me/about_me';
import AboutSection from './components/about_section/about_section';
import Sitemap from './components/sitemap/sitemap';
import Privacy from './components/privacy/privacy';
import Thirdparty from './components/thirdparty/thirdparty';
import Developer from './components/developer/developer';

function changeMenu() {
  const menu = document.querySelector(".menu") as HTMLElement;
  menu.classList.toggle("active")
  console.log("working!!!")
  console.log(menu)
}

export const [isLight, setTheme] = createSignal<boolean>(true);
export const changeTheme = () => {
  setTheme(!isLight())
  if (isLight() == true) {
    localStorage.setItem("isLight", "true");
  }
  else {
    localStorage.setItem("isLight", "false");
  }
}

const App: Component = () => {
  onMount(() => {
    let theme = localStorage.getItem("isLight");

    if (theme == "true") {
      setTheme(true);
    }
    else {
      setTheme(false);
    }
  })

  // createEffect(() => {
  //   const theme = localStorage.getItem("isLight");
  //   if (theme == "true") {
  //     setTheme(true);
  //   }
  //   else {
  //     setTheme(false);
  //   }
  // })

  return (
    <div id={isLight() ? "light" : "dark"}>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/showcase"} element={<Showcase />} />
          <Route path={"/education"} element={<Education />} />
        </Routes>
        <Show when={isLight() == true} fallback={<Dark />}>
          <Light />
        </Show>
      </Router>
    </div>
  );
};

export default App;
