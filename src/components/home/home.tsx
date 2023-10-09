import { component$} from '@builder.io/qwik';

import Hero from '../hero/hero';
import About from '../about/about';
import CallToAction from '../call-to-action/call-to-action';


export default component$(() => {
// TO-DO => add lenis for smooth scrolling https://github.com/studio-freight/lenis

//     _setInitialState() {
//       gsap.set(['.hero__title span', '.about__list--value p', '.banner'], {
//         y: 32,
//         opacity: 0,
//       });

//       gsap.set(' .banner', {
//         scale: 1.3,
//       });
//     }

  return (
    <div class={['home']}>
      <Hero />

      <About />

      <CallToAction />
    </div>
  );
});
