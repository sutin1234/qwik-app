import { component$, useStore, $ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/Buttons";

export default component$(() => {
  const store = useStore({ count: 0 });
  const counter = $(() => store.count++)
  return (
    <div class="p-2">
      <h1 class="text-4xl">Qwik Closure & Lexical Scope: {store.count}</h1>
      <Button label="Button from Child" onClick$={counter} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "About Qwik Closure & Lexical Scope",
};
