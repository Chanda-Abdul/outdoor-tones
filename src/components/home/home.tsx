import { component$ } from '@builder.io/qwik';
import styles from './home.module.scss';

import Hero from '../hero/hero';
import About from '../about/about';
import CallToAction from '../call-to-action/call-to-action';
// import gsap from 'gsap';
// import Lenis from '@studio-freight/lenis';
// import { time } from 'console';

export default component$(() => {

//     class App {
//     // TO-DO => add lenis for smooth scrolling https://github.com/studio-freight/lenis

//     // lenis = new Lenis();
//     constructor() {
//       this._initialize();
//       //   this._render(time!);
//     }

//     _initialize() {
//       // TO-DO => initial()
//       this._setInitialState();
//       this._createLenis();
//       this._createIntro();
//       this._createHero();
//     }

//     _setInitialState() {
//       // TO-DO => hide images and text
//       gsap.set(['.hero__title span', '.about__list--value p', '.banner'], {
//         y: 32,
//         opacity: 0,
//       });

//       gsap.set('.hero__gallery', {
//         y: gsap.utils.random(100, 50),
//         opacity: 0,
//       });

//       gsap.set(' .banner', {
//         scale: 1.3,
//       });
//     }

//     _createLenis() {
//       //   this.lenis = new Lenis({
//       //     lerp: 0.1,
//       //   });
//     }
//     _createIntro() {
//       // TO-DO =>
//       const tl = gsap.timeline();
//       tl.to('.hero__title', {
//         opacity: 1,
//       })
//         .to('hero__title span', {
//           y: 0,
//           ease: 'expo.out',
//           duration: 2,
//           stagger: 0.01,
//         })
//         .to(
//           '.hero__gallery img',
//           {
//             opacity: 1,
//             y: 0,
//             ease: 'power3.out',
//             duration: 2,
//             stagger: 0.04,
//           },
//           0.5
//           // run 0.5s after tl has started or
//           // -=1s after timeline starts
//         );
//     }

//     _createHero() {
//       // TO-DO => parallex w/ScrollTrigger
//       const tl = gsap.timeline();
//     }

//     _render() {
//       // TO-DO => render() lenis
//       //   this.lenis.raf(time);
//       //   requestAnimationFrame(this._render.bind(this));
//     }
//   }

//   new App();

  return (
    <div class={['container', styles.home]}>
      <Hero />

      <About />

      <CallToAction />
    </div>
  );
});
