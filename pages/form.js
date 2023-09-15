import { useState, componentDidMount } from "react"
import MainContainer from "../components/MainContainer"
import styles from "../styles/form.module.css"

const Form = () => {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')

  if(typeof window !== 'undefined') {
    console.log(window.Telegram.WebApp.sendData)
  }

    const submitFunction = (event) => {
        event.preventDefault()
        if(typeof window !== 'undefined') {
          window.Telegram.WebApp.sendData(JSON.stringify({name: name, number: number}))
          
        }
    }

  return (
    <MainContainer>
        <h1>Form</h1>
        <div className={styles.form}>
            <input className={styles.changeElement} type="text" placeholder="Change name" onChange={(event) => setName(event.target.value)} />
               <input className={styles.changeElement} type="number" placeholder="Change number" onChange={(event) => setNumber(event.target.value)} />
               <button className={styles.button} onClick={(event) => submitFunction(event)} >Log in</button> 
        </div>

    </MainContainer>
  )
}

export default Form