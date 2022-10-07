

export default function HomePoster({image, title}) {
    return (
        <div className="group relative rounded-lg transition ease-out delay-150 group-hover:brightness-20">
            <img src={image} className="hover:brightness-50 h-80 transition ease-out delay-150"/>
            <h1 className="absolute self-end bottom-5 text-white text-3xl delay-150 z-10 opacity-0 group-hover:opacity-100">{title}</h1>
            {/* <h1 className="absolute self-end bottom-5 text-white text-xl delay-150 z-10 opacity-0 group-hover:opacity-100"></h1> */}
        </div>
    )
}