import { SidebarConfig } from "@/config/sidebar"
import Image from "next/image"

const Sidebar = () => {
    return (
        <section className="h-screen w-62 border-r border-neutral-300 bg-zinc-50">
            <div className="flex items-center gap-1  h-14 border-b border-neutral-300 justify-start p-4">
                <Image
                    src="/assets/logo.webp"
                    width={32}
                    height={32}
                    alt="Logo"
                    className="w-6.5 h-6.5"
                />
                <p className="text-neutral-900 font-sora text-2xl font-semibold tracking-tight">
                    AIVIO 
                </p>
            </div>
            <nav className="flex flex-col gap-1 p-3">
                {SidebarConfig?.map((item) => (
                    <div 
                        key={item.id} 
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 transition-colors cursor-pointer"
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm font-medium">{item.label}</span>
                    </div>
                ))}
            </nav>
        </section>
    )
}

export default Sidebar