import { component$ } from '@builder.io/qwik';
import styles from './call-to-action.module.scss';
import ImgTrioOnTrail from '~/media/trioontrail.jpeg?jsx';

export default component$(() => {
  return (
    <section class={styles['banner']}>
      <span class={styles['banner__overlay']}></span>
      <div class={styles['banner__content']}>
        <h2 class={styles['banner__content--title']}>2023 collection</h2>
        <p class={styles['banner__content--text']}>
          Our new collection is everything you need for your next adventure.
          Made to be flexible, breathable and long lasting so you can enjoy more
          of the <a href="#">#OutdoorLiving</a>.
        </p>
      </div>
      <ImgTrioOnTrail />
    </section>
  );
});
