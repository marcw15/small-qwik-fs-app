import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Members - Dashboard</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Members - Dashboard",
  meta: [
    {
      name: "Meta Name - Members - Dashboard",
      content: "Meta Content - Members - Dashboard",
    },
  ],
};
