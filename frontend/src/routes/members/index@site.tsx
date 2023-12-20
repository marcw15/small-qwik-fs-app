import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Members</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Members",
  meta: [
    {
      name: "Meta Name - Members",
      content: "Meta Content - Members",
    },
  ],
};
