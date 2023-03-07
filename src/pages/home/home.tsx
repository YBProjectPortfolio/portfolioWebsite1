import "./home.scss";
import background from "./../../assets/homeImage/home-image.png";

export default function Home() {
  return (
    <div class="home">
      <div class="title">
        <span class="w">W</span>
        elcome,
        <div class="title-2">
          To Our Cyber Security Showcase
        </div>
        <div class="divider"></div>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nam necessitatibus in, vel esse quod eos natus modi non, vitae deleniti nobis omnis beatae, perferendis officiis incidunt? Dignissimos, nostrum libero.
          Velit, necessitatibus laboriosam, id minus tempora, excepturi optio architecto amet consequuntur iure distinctio cum dolore odio dignissimos sit? Sapiente tempora, id temporibus beatae culpa odio repudiandae cupiditate nemo sit ipsam.
        </p>
        <div class="btn-showcase-container">
          <button class="btn-showcase">
            <a href="/showcase">
              Showcase
            </a>
          </button>
        </div>
      </div>
      <div class="background-image-container">
        <img class="background-image" src={background} alt="" />
      </div>
    </div>
  )
}
