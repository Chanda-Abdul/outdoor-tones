import { component$ } from "@builder.io/qwik";
import styles from "./about.module.scss";
// import gsap from "gsap";

export default component$(() => {
 


  return (
    <section class={styles['about']}>

    <ul class={styles['about__list']}>
      <li class={styles['about__list--value']}>
        <div class={styles['about__list--overlay']}></div>
        <p>Outdoor Tones is committed to motivating everyone to embrace</p>
      </li>

      <li class={styles['about__list--value']}>
      <div class={styles['about__list--overlay']}></div>
      <p>the outdoors. We believe that seeking the thrill of outdoor</p>
      
      </li>
      <li class={styles['about__list--value']}>
      <div class={styles['about__list--overlay']}></div>
      </li>
      <li class={styles['about__list--value']}>
      <div class={styles['about__list--overlay']}></div>
      <p>exploration is key to our health. That's why we're</p>
   
      </li>

      <li class={styles['about__list--value']}>
      <div class={styles['about__list--overlay']}></div>
      <p>empowering you to feel confident, vibrant, and primed for</p>
      </li>

      <li class={styles['about__list--value']}>
      <div class={styles['about__list--overlay']}></div>
      <p>
        <a href="#">#OutdoorLiving</a> at its finest.</p> </li>
    </ul>
  </section>
  );
});
