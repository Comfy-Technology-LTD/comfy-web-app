
export interface CircleProps{
  className: string
}


const Circle:React.FC<CircleProps> =({className})=>{
    return(
        <>
        <section className={` sbg-black rounded-full ${className}`}>

        </section>
        </>
    )
}
export default Circle;