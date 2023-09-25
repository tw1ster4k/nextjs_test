import styles from "../styles/menu.module.css"
import Card from "../components/Card";

const menu = () => {
  return (
    <div className={styles.main}>
        <h1>Menu</h1>
            <div className={styles.container}>   
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
    </div>
  )
}

export default menu;