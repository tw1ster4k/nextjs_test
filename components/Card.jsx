import styles from "../styles/card.module.css"

const Card = ({title, description, price, img}) => {
  let basket
  if(typeof window !== 'undefined') {
    const parse = localStorage.getItem("basketCityDayNight")
    basket = JSON.parse(parse)
    console.log(basket)
  }

  const getBasketFunction = () => {
    localStorage.setItem("basketCityDayNight", JSON.stringify(basket !== null ? [basket, {title, description, price, img}] : {title, description, price, img}))
  }

  return (
    <div className={styles.card}>
        <img className={styles.img} src={img} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <h3 className={styles.title}>{price} руб</h3>
        <button onClick={getBasketFunction} className={styles.button}>Купить</button>
    </div>
  )
}

export default Card