import { component$, PropFunction } from "@builder.io/qwik";

interface ButtonProps {
  onClick$?: PropFunction<() => number | void | never[]>
  label: string
}
export const Button = component$((props: ButtonProps) => {
  return (
    <button onClick$={props.onClick$}
      class="text-2xl p-1 m-2 px-2 bg-amber-700 text-white rounded-lg">
      {props.label}
    </button>
  )
})
