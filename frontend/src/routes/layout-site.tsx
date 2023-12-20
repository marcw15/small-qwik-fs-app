import { component$, Slot } from "@builder.io/qwik";
import { Navigation } from "~/components/site/navigation/navigation";

export default component$(() => {
  return (
    <>
    <main>
      <Navigation />
      <section>
        <Slot />
      </section>
    </main>
    <footer>
      <div class="bg-gray-900 text-white py-14 text-center">
        This is my footer
      </div>
    </footer>
    </>
  )
})
