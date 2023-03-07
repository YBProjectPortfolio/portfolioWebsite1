import "./showcase.scss";

import im1 from "./../../assets/showcaseImages/1.jpg";
import im2 from "./../../assets/showcaseImages/2.jpg";
import im3 from "./../../assets/showcaseImages/3.jpg";
import im4 from "./../../assets/showcaseImages/4.jpg";
import im5 from "./../../assets/showcaseImages/5.jpg";
import im6 from "./../../assets/showcaseImages/6.jpg";
import im7 from "./../../assets/showcaseImages/7.jpg";
import im8 from "./../../assets/showcaseImages/8.jpg";
import im9 from "./../../assets/showcaseImages/9.jpg";
import im10 from "./../../assets/showcaseImages/10.jpg";
import im11 from "./../../assets/showcaseImages/11.jpg";
import im12 from "./../../assets/showcaseImages/12.jpg";
import im13 from "./../../assets/showcaseImages/13.jpg";
import im14 from "./../../assets/showcaseImages/14.jpg";
import im15 from "./../../assets/showcaseImages/15.jpg";

import { createEffect, createSignal, For } from "solid-js";

interface imageId {
  image: string,
  title: string
}

export default function Showcase() {
  const [search, setSearch] = createSignal<string>("")
  function showcaseItems(): imageId[] {
    const imagesStore: imageId[] = [
      { image: im1, title: "coding" },
      { image: im2, title: "programming" },
      { image: im3, title: "cyber" },
      { image: im4, title: "monitor" },
      { image: im5, title: "security" },
      { image: im6, title: "toolkit" },
      { image: im7, title: "crypto" },
      { image: im8, title: "screen" },
      { image: im9, title: "caller" },
      { image: im10, title: "wifi" },
      { image: im11, title: "caller" },
      { image: im12, title: "anti spam" },
      { image: im13, title: "email filter" },
      { image: im14, title: "code" },
      { image: im15, title: "pen testing" },
    ];
    return imagesStore.filter(e => {
      if (e.title.length < 1) {
        return e
      }
      else {
        return e.title.includes(search())
      }
    }).map(e => e)
  }

  const searchAdd = (event: { currentTarget: { value: string; }; }) => {
    setSearch(event.currentTarget.value)
    console.log(search())
  }

  return (
    <div class="showcase">
      <div class="search-container">
        <input class="search" type="search" onKeyUp={searchAdd} name="" id="" placeholder="Search" />
      </div>
      <div class="images">
        <For each={showcaseItems()} fallback={(<div style={{position: "absolute", top: "5rem"}}>Nothing found</div>)}>
          {item => (
            <div class="image-container">
              <img class="image" src={item.image} alt="" />
              <span class="image-title">{item.title}</span>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
