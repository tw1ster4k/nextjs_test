import styles from "../styles/card.module.css"

const Card = () => {
  return (
    <div className={styles.card}>
        <img className={styles.img} src="https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-breakfast-dinner-one-day-meal-food-png-image_341951.jpg" />
        <h3 className={styles.title}>Name</h3>
        <p className={styles.description}>Вкусное аппетитное блюдо с кусочками помидора</p>
        <h3 className={styles.title}>250руб</h3>
        <button className={styles.button}>Купить</button>
    </div>
  )
}

export default Card