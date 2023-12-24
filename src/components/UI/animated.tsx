import  styles from  "./animated.module.css"

const Animated = () => {
  return (
    <div className={styles.container}>
      <p > Achetez ou Vendez</p>
      <section className={styles.animation}>
        <div className={styles.first}>
          <div>Une pme/pmi</div>
        </div>
        <div className={styles.second}>
          <div>un Commerce</div>
        </div>
        <div className={styles.third}>
          <div>des parts d&apos; entreprise</div>
        </div>
      </section>
    </div>
  );
};

export default Animated;
