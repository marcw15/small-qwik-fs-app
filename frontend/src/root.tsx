import { component$, useStyles$, useVisibleTask$, useStore, useContextProvider, createContextId } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { supabase } from "./utils/supabase";
import globalStyles from './global.css?inline'

export const UserSessionContext = createContextId("user-session")

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  const userSession: any = useStore({userId: "", isLoggedIn: false})

  useStyles$(globalStyles);

  useVisibleTask$( async() => {
    const{data: authListener} = supabase.auth.onAuthStateChange(
      async (event: string, session: any) => {
      if (event === "SIGNED_IN") {
        //Cookie handling

        //Set Auth State Context (Frontend)
        userSession.userId = session?.user?.id;
        userSession.isLoggedIn = true;
      } else if (event === "SIGNED_OUT") {
        //Sign out

        //Set Auth State Context (Frontend)
        userSession.userId = "";
        userSession.isLoggedIn = false;
      } else {
        //tbd
      }
    });

    //clear this function...
    return () =>  {
      authListener?.subscription?.unsubscribe();
    }
  })

  // Pass state to children via context
  useContextProvider(UserSessionContext, userSession)
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
