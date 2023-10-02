import { component$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
// import Lenis from '@studio-freight/lenis';
import { RouterHead } from './components/router-head/router-head';

import './global.scss';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  //   const lenis = new Lenis()

  // lenis.on('scroll', (e: any) => {
  //   console.log(e)
  // })

  // function raf(time: any) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  // }

  // requestAnimationFrame(raf)

  return (
    <QwikCityProvider>
      <head>
        <meta charSet='utf-8' />
        <link rel='manifest' href='/manifest.json' />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang='en'>
        <RouterOutlet />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'></script>
      </body>
    </QwikCityProvider>
  );
});
