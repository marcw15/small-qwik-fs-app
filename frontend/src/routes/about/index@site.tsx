import { $, component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/button";

export default component$(() => {
  const state = useStore({name: "unassigned"}) 
  const handleName = $(() => {
    state.name = "Pink Elephants"
  })

  return (
    <div>
      <h1>Test Page</h1>
      <Button handleFunction={handleName}/>
      <div>Name: {state.name}</div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Test Page",
  meta: [
    {
      name: "Meta Name - Test Page",
      content: "Meta Content - Test Page",
    },
  ],
};
