import { SignInButton } from "@clerk/nextjs"


const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="shrink-0">
                    <h1 className="text-xl font-semibold text-[var(--foreground)]">Next.js App</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <SignInButton mode="modal">
                        <button className="px-3 py-1 bg-gray-800 hover:bg-slate-700 text-white rounded-full">Sign In</button>
                    </SignInButton>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navigation