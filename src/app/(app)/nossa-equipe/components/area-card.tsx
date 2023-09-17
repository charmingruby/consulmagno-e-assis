import Link from "next/link";

interface  areaCardProps {
    name: string;
    url: string;
}

export function AreaCard(props: areaCardProps){
    return(
        <div className= "rounded-md flex bg-primary-main justify-center text-center  items-center border border-primary-main m-2 p-3 ">
            <Link prefetch={false} href={props.url}><span className="text-gray-200 hover:text-secondary-main">{props.name}</span></Link>
        </div>
    )
}