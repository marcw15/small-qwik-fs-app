import { $, component$, useTask$, useStore } from "@builder.io/qwik";

interface ItemProps {
    handleFunction?: any;
}

export const Button = component$((props: ItemProps) => {
const state = useStore({ message: "State None", color: "No color"})

const handleClick = $(() => {
    state.message = "Button clicked"
    props.handleFunction()
})

useTask$(({track}) => {
    track(state)
    console.log(state.message)
});
    return (
        <button onClick$={handleClick} 
        class="bg-sky-500 py-2 px-5 rounded-sm text-white hover:bg-sky-400">
            Click Me.
        </button>
    )
})