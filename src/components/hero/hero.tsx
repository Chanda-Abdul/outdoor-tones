import { component$ } from '@builder.io/qwik';
import styles from './hero.module.scss';
import ImgBlur from '~/media/blur.jpeg?jsx';
import ImgKiki from '~/media/kiki.jpeg?jsx';
import ImgLacingUp from '~/media/lacingup.jpeg?jsx';
import ImgRunningMan from '~/media/runningman.jpeg?jsx';
import ImgSunglasses from '~/media/sunglasses.jpeg?jsx';
import ImgThousandYardStare from '~/media/thousandyardstare.jpeg?jsx';
import ImgTrioTrailRunning from '~/media/triotrailrunning.jpeg?jsx';

export default component$(() => {
  // TO-DO => hide images and text
  return (
    <div class={['container', styles.hero]}>

      <section class={styles['hero']}>

        <h1 class={styles['hero__title']} >

          <div class={styles['hero__title--first']}>
            <span>O</span>
            <span>u</span>
            <span>t</span>
            <span>d</span>
            <span>o</span>
            <span>o</span>
            <span>r</span>
          </div>

          <div class='hero__title--last'>
            <span>T</span>
            <span>o</span>
            <span>n</span>
            <span>e</span>
            <span>s</span>
          </div>
        </h1>

        <div class={styles['hero__gallery']}>
          <ImgSunglasses />
          <ImgTrioTrailRunning />
          <ImgLacingUp />
          <ImgThousandYardStare />
          <ImgRunningMan />
          <ImgKiki />
          <ImgBlur />
        </div>
      </section>
    </div>
  );
});
