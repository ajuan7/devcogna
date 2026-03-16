import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-950 px-4">
      <SignUp />
    </div>
  );
}