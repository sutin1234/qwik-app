import { PropFunction } from "@builder.io/qwik"

export interface ButtonProps {
    onClick$?: PropFunction<() => number | void | never[]>
    btnClass?: string
    label?: string
}

export const styleButton = "p-2 px-4 m-2 bg-blue-700 text-white rounded-lg font-bold"
export const classStyleBtn = (styleClass: string) => {
    return styleClass ? [...styleButton.split(' '), styleClass] : styleButton
}