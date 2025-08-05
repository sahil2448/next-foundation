export default function Layout({children}:{children:React.ReactNode}){
    return <div>
    <p className="text-red-500">This is user page</p>
        {children}
    </div>
}