import Link from "next/link";

export default function NotFound404(){
 return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"calc(100vh - 4rem)"}}>
    <h2 >page not found, go <Link href="/">home</Link></h2>
    </div>
 )
}