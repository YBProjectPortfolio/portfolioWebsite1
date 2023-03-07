import { Link } from "@solidjs/router";
import { createSignal, useTransition } from "solid-js";
import "./about_section.scss";

export const [tab, setTab] = createSignal(0);
export const [loading, load] = useTransition();
export default function AboutSection() {
    const refreshTab = (index: number) => () => load(() => setTab(index));

    return (
        <div class="about">
            <div class="about-heading">
                <ul class="about-heading-list">
                    <li class="single-heading" classList={{ active: tab() == 0 }} onclick={refreshTab(0)}>
                        About Me
                    </li>
                    <li class="single-heading" classList={{ active: tab() == 1 }} onclick={refreshTab(1)}>
                        Sitemap
                    </li>
                    <li class="single-heading" classList={{ active: tab() == 2 }} onclick={refreshTab(2)}>
                        Privacy
                    </li>
                    <li class="single-heading" classList={{ active: tab() == 3 }} onclick={refreshTab(3)}>
                        Third Party
                    </li>
                    <li class="single-heading" classList={{ active: tab() == 4 }} onclick={refreshTab(4)}>
                        Developer
                    </li>
                </ul>
            </div>
        </div>
    )
}
