import { component$, useStore } from "@builder.io/qwik";

import { DocumentHead } from "@builder.io/qwik-city";
import { products } from "./products";

export default component$(() => {
    const productStore = useStore([]);
    productStore = products
    return (
        <div>
            <div class="text-3xl"> Qwik Loader LoadData </div>
        </div>
        
    )
})

export const head: DocumentHead = {
    title: "Qwik Loader LoadData ",
};


