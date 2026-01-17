const Wrapper=({children, className}:{children: React.ReactNode, className?: string})=>{
    return(
        <section className={`${className} w-7xl `}>
            {children}
        </section>
    )
}
export default Wrapper