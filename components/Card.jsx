import styles from "../styles/card.module.css"

const Card = ({title, description, price, img,}) => {
  let basket = []
  if(typeof window !== 'undefined') {
    const parse = localStorage.getItem("basketCityDayNight")
    basket = JSON.parse(parse)
    console.log(basket)
  }

  const getBasketFunction = () => {
    localStorage.setItem("basketCityDayNight", JSON.stringify(basket !== null ? [...basket, {title, description, price, img}] : [{title, description, price, img}]))
    location.reload() //не нашел другого варианта как перезагрузить страницу (может поможет useState?)
  }

  // попытка реализовать удаление только одного товара

 /*   const delBasketFunction = (title) => {
    const arr = basket
    const z = basket.findIndex((el) => el.title === title)
    if(z >= 0) {
      arr.splice(z, 1)
    }
    localStorage.setItem("basketCityDayNight", JSON.stringify(arr))
    location.reload()
  }  */

  
  return (
    <div className={styles.card}>
        <img className={styles.img} src={img} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <h3 className={styles.title}>{price} руб</h3>
        {
          price /* если цена есть то.. */ ?
          <button onClick={getBasketFunction} className={styles.button}>Купить</button>
          :
          <button  /* onClick={() => delBasketFunction(title)} */   >Удалить (Не работает, убирай из localStorage сам ;) )</button>
        }
    </div>
  )
}

export default Card