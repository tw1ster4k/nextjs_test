// не нужна
import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"

export default function User({user}) {
    const {query} = useRouter()
    console.log(query.id)
    return(
        <MainContainer keywords={user.name}>

        <div>
           <h1>
            User id: {query.id}
            </h1> 
            <div>Name user - {user.name}</div>
        </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        const user = await res.json()
    return {
      props:{user}
    }
  }