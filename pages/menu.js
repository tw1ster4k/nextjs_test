import styles from "../styles/menu.module.css"
import Card from "../components/Card";

const menu = () => {
  const data = [{title:"Пицца пеперонни", description:"Вкусив данное произведение вы больше никогда не забудете етот вкус ;)", img:`https://img.povar.ru/main/62/2d/a0/d5/picca_quotpepperoniquot_s_mocarelloi-745008.jpg`, price: 580 },
  {title:"Doshirak!", description:"ЛЕГЕНДАРНЫЙ БОСС!!! Тебе какой? Куриный или говяжий?",img:`https://planetavkysov.ru/image/cache/resize/s/800x800/catalog/bakalea/doshirak-govyadina.jpg`, price: 50},
  {title:"Шавуха", description:"Пес в тесте", img:`https://3fc4ed44-3fbc-419a-97a1-a29742511391.selcdn.net/coub_storage/coub/simple/cw_timeline_pic/1aff94d47f6/0879c13e1d898d15dd85f/1566816828_image.jpg`, price:200}
]
  return (
    <div className={styles.main}>
        <h1>Menu</h1>
            <div className={styles.container}>   
            {data && data.map((el, index) =>
                <Card key={index} title={el.title} description={el.description} img={el.img} price={el.price} />
            )}
            </div>
    </div>
  )
}

export default menu;