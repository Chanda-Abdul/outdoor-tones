import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Home from "~/components/home/home";

export default component$(() => {
  return (
    <>
      <Home />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Outdoor Tones",
  meta: [
    {
      name: "Outdoor Tones",
      content: "Outdoor Tones Trail Running is fun",
    },
  ],
};
