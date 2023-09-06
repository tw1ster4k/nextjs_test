import Head from "next/head"
import A from "./A"

const MainContainer = ({children, keywords}) => {
  return (
    <>
    <Head>
        <meta keywords={"pohui " + keywords}></meta>
        <title>Main</title>
    </Head>
        <div className="navbar">
          <A href={"/"} text={"Main"}/>
          <A href={"/users"} text={"Users"}/>
        </div>
        <div>
            {children}
        </div>
        <style jsx>
              {
                `
                .navbar{
                  background: orange;
                  padding: 18px;
                  display:flex;
                  
                }
                
                `
              }
        </style>
    </>
  )
}

export default MainContainer