import AboutSection from "../about_section/about_section";
import "./about_me.scss";
import avatar from "./../../assets/avatar.jpg";

export default function AboutMe() {
    return (
        <div class="aboutme">
            <div class="aboutme-body">
                <div class="image-container">
                    <img src={avatar} alt="" class="image-avatar" />
                </div>
                <div class="aboutme-body-container">
                    <div class="aboutme-body-description">
                        <div class="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, unde. Corrupti officia ipsum laboriosam omnis mollitia eum quae, consequatur vero nihil minus maiores impedit inventore, rerum, iste perferendis dolore maxime!
                            <div class="signature">
                                John Dev
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-animation"></div>
        </div>
    )
}
