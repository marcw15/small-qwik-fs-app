import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Shop",
  meta: [
    {
      name: "Meta Name - Shop",
      content: "Meta Content - Shop",
    },
  ],
};
