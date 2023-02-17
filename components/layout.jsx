import Nav2 from "./Nav2";

export default function Layout({children}) {
    return(
        <div>
            <Nav2/>
            <main>{children}</main>
        </div>
    )
}