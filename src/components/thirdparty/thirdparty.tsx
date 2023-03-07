import { For } from "solid-js"
import { data } from "./data"
import "./thirdparty.scss"

export default function Thirdparty() {
    return (
        <div class="thirdparty">
            <div class="thirdparty-body">
                <div class="license-body">
                    <For each={data}>
                        {(e) =>
                            <>
                                <div class="license-title">
                                    <a href={e.link} class="license-title">
                                        {e.title}
                                    </a>
                                </div>
                                <div class="license">
                                    {e.body}
                                </div>
                            </>
                        }
                    </For>
                </div>
            </div>
        </div>
    )
}
