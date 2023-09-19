import Head from "next/head"
import A from "./A"

const MainContainer = ({children, keywords}) => {
  return (
    <>
    <Head>
        <meta keywords={"lol " + keywords}></meta>
        <title>Main</title>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
    </Head>
        <div className="navbar">
          <A href={"/"} text={"Main"}/>
          <A href={"/users"} text={"Users"}/>
          <A href={'/form'}  text={"Form"}/>
          <A href={'/reviews'} text={"Reviews"} />
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