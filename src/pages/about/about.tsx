import { Route, Router, Routes } from "@solidjs/router";
import { createSignal, Match, Suspense, Switch } from "solid-js";
import AboutMe from "../../components/about_me/about_me";
import AboutSection, { loading, tab } from "../../components/about_section/about_section";
import Developer from "../../components/developer/developer";
import Privacy from "../../components/privacy/privacy";
import Sitemap from "../../components/sitemap/sitemap";
import Thirdparty from "../../components/thirdparty/thirdparty";
import "./about.scss";

export default function About() {

  return (
    <div class="about">
      <AboutSection />
      <div class="tab" classList={{ loading: loading() }}>
        <Suspense fallback={<div>loading....</div>}>
          <Switch>
            <Match when={tab() == 0}>
              <AboutMe />
            </Match>
            <Match when={tab() == 1}>
              <Sitemap />
            </Match>
            <Match when={tab() == 2}>
              <Privacy />
            </Match>
            <Match when={tab() == 3}>
              <Thirdparty />
            </Match>
            <Match when={tab() == 4}>
              <Developer />
            </Match>
          </Switch>
        </Suspense>
      </div>
    </div>
  )
}
