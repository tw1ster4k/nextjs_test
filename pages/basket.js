import styles from "../styles/basket.module.css"
import Link from "next/link"
import Card from "../components/Card"

const basket = () => {
  let basket = []
  if(typeof window !== 'undefined') {
    const parse = localStorage.getItem("basketCityDayNight")
    basket = JSON.parse(parse)
    console.log(basket)
  }

  
  return (
    <div className={styles.main}>
        <h1>Корзина</h1>
        <Link href="/menu" className={styles.link}><button className={styles.button}>Назад</button></Link>
        <div className={styles.container}>
         {/* может вставить кнопку удалить все товары? */}
            {basket && basket.map((el) =>
            <Card title={el.title} description={el.description} img={el.img} /* не добавил price потому что в карточке проверка какую кнопку нам вставить */ />
            )}
        </div>
    </div>
  )
}

export default basket