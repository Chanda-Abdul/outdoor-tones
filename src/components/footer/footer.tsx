import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.scss";

export default component$(() => {

  return (
    <footer>
        <section class={styles['footer']}>
        <div class={styles['footer__content']}>
          <h2 class={styles['footer__title']}>
            Join the
            <span class={styles['mission']}>
              mission
              <svg
                viewBox='0 0 634 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.40051 2.37525C1.40051 2.37525 68.8688 48.875 223.369 20.375C377.869 -8.125 633.4 12.3911 633.4 12.3911'
                  stroke='black'
                  stroke-width='4'
                />
              </svg>
            </span>
          </h2>
          <p class={styles['footer__text']}>
            Leave your email to be part of the email list when we launch.
          </p>
          <button>Sign me up</button>
        </div>
      </section>

    </footer>
  );
});
