import { Slot, component$ } from '@builder.io/qwik';
import { ButtonProps, classStyleBtn } from './ButtonProps';



export const ButtonSlot = component$((props: ButtonProps) => {
    const btnClass = props.btnClass ? props.btnClass : ''
    return <button onClick$={props.onClick$} class={classStyleBtn(btnClass)}>
        <Slot />
    </button>
});