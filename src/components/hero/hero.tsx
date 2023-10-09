import { component$, useVisibleTask$ } from '@builder.io/qwik';
import styles from './hero.module.scss';

import ImgBlur from '~/media/blur.jpeg?jsx';
import ImgKiki from '~/media/kiki.jpeg?jsx';
import ImgLacingUp from '~/media/lacingup.jpeg?jsx';
import ImgRunningMan from '~/media/runningman.jpeg?jsx';
import ImgSunglasses from '~/media/sunglasses.jpeg?jsx';
import ImgThousandYardStare from '~/media/thousandyardstare.jpeg?jsx';
import ImgTrioTrailRunning from '~/media/triotrailrunning.jpeg?jsx';

import gsap from 'gsap';

export default component$(() => {
  
  useVisibleTask$(() => {
    // Only runs in the client, for GSAP animations
    const tl = gsap.timeline({
      defaults: { autoAlpha: 0, ease: 'expo.out' },
    });

    function initHeroTimeline() {
   
      tl.from('#first', {
        x: '-150',
        duration: 2,
      })
        .from(
          '#last',
          {
            x: '150',
            autoAlpha: 0,
            duration: 1.75,
          },
          '-=1.25'
        )
        .from(
          // TO-DO => parallex w/ScrollTrigger
          '#gallery > *',
          {
            transformOrigin: '50% 50%',
            // x: gsap.utils.random(50, 100),
            // y: gsap.utils.random(100, 50),
            scale: 0.25,
            stagger: 0.04,
            ease: 'power3.out',
            duration: 1.5,
          },
          '-=0.75'
        );
    }

    initHeroTimeline();
  });

  return (
    <div class={['container', styles.hero]}>
      <section class={styles['hero']}>
        <h1 class={styles['hero__title']} id='intro'>
          <span class={styles['hero__title--first']} id='first'>
            Outdoor
          </span>

          <span class={styles['hero__title--last']} id='last'>
            Tones
          </span>
        </h1>

        <div class={styles['hero__gallery']} id='gallery'>
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
