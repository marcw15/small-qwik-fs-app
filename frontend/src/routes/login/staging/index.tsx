import { component$, useVisibleTask$, useSignal, useContext } from "@builder.io/qwik"; // eslint-disable-next-line qwik/no-use-visible-task
import type { DocumentHead } from "@builder.io/qwik-city";
import { useNavigate } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { supabase } from "~/utils/supabase";
import { UserSessionContext } from "~/root";

export default component$(() => {
  const userSession:any = useContext(UserSessionContext)
  const isDashboard = useSignal(false); // not allowed to access protected route
  const nav = useNavigate();

  useVisibleTask$(() => {
    const timeout = setTimeout(async () => {
      const { data, error } = await supabase.auth.getUser();
  
      if (data?.user?.id && !error) {
        isDashboard.value = true;
        console.log("I am here and isDashboard.value is trueeeeee");
        //same as in root.txt, but session?. got replaced by data?.
        userSession.userId = data?.user?.id;
        userSession.isLoggedIn = true;
        nav("/members/dashboard/");
      } else {
        console.error(error);
        //same as in root.txt
        userSession.userId = "";
        userSession.isLoggedIn = false;
        nav("/login/");
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <>
      <div>
        {isDashboard && (
          <>
            <span>Redirecting to </span>
            <Link href="/members/dashboard">
              <button class="text-sky-500 hover:text-sky-600">Dashboard</button>
            </Link>
          </>
        )}
        {!isDashboard && <>Please log in</>}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Staging",
  meta: [
    {
      name: "description",
      content: "Authorization check for qwik",
    },
  ],
};