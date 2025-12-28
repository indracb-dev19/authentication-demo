import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import MyButton from "./my-button";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">
              Next.js App
            </h1>
          </div>
          <div className="flex items-center gap-4">
            {/* SignedOut is used to  */}
            <SignedOut>
              <SignInButton mode="modal">
                <MyButton title="Sign In" />
              </SignInButton>
            </SignedOut>
            <SignedIn>
                <Link href={`/user-profile`}>
                    <MyButton title="Profile"></MyButton>
                </Link>
                <SignOutButton>
                    <MyButton title="Sign Out" theme="red" />
                </SignOutButton>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
