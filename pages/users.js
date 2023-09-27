// не нужна
import Link from "next/link"
import MainContainer from "../components/MainContainer"

const users = ({users}) => {
  return (
    <MainContainer keywords={"users page"}>
        <h1>Users</h1>
        <ul>
          {users.map((el) =>
          <li key={el.id}>
          <Link href={`/users/${el.id}`}>
            <p>{el.name}</p>
          </Link>
          </li>
          )}
        </ul>
    </MainContainer>
  )
}

export default users


export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()
  return {
    props:{users}
  }
}