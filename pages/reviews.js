import styles from "../styles/reviews.module.css"

const reviews = () => {

  return (
    <div className={styles.container}>
      <iframe className={styles.iframe} src="https://yandex.ru/maps-reviews-widget/224548985225?comments"></iframe>
      <a href="https://yandex.ru/maps/org/siti_day_night/224548985225/" target="_blank" className={styles.link}>
        Сити Day Night на карте Оренбурга — Яндекс Карты
      </a>
    </div>
  );
}

export default reviews;