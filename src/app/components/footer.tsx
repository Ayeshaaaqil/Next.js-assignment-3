import Link from "next/link"

export default function Footer (){

    return(
        
        <div className="footer">

            <ul className="footer-buttons">
                
            <Link href={"facebook"}> <li>Facebook</li></Link>

            <Link href={"instagram"}><li>Instagram</li></Link>
            </ul>
        </div>

    )
}