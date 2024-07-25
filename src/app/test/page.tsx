import Link from "next/link"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/nextjs";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <PencilIcon className="h-6 w-6" />
          <span className="sr-only">Essay Feedback</span>
        </Link>
        <div className="ml-auto flex gap-4 sm:gap-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        className='cursor-pointer'
                        src='/icons/hamburger.svg'
                        alt='menu'
                        height={40}
                        width={40}
                    />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <div>
                            hello
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <div>
                            1wjfwoijfw
                        </div>
                    </div>
                    </div>
                    <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Close</Button>
                    </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
      </header>
      <div className="">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 md:h-screen min-h-80 border-t">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-12 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="space-y-10 flex flex-col justify-center align-center">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Get Personalized Feedback on Your College Essays
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our AI-powered essay review tool provides detailed feedback to help you craft the perfect college
                  application essay.
                </p>
                <div className="mt-6 space-x-4">
                  <Link
                    href="/feedback"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Try it Free
                  </Link>
                  <Link
                    href="/sign-up"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-10">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your College Essays</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our essay review tool provides personalized feedback to help you craft the perfect college application
                  essay.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Personalized Feedback</h3>
                <p className="text-sm text-muted-foreground">
                  Get detailed feedback on your essay&apos;s structure, content, and tone to help you make it shine.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Grammar and Spelling Checks</h3>
                <p className="text-sm text-muted-foreground">
                  Our tool will catch any grammar or spelling errors to ensure your essay is polished and professional.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Essay Structure Tips</h3>
                <p className="text-sm text-muted-foreground">
                  Learn how to craft a compelling introduction, body, and conclusion that will captivate admissions
                  officers.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Tone and Voice Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Receive feedback on your essay&apos;s tone and voice to ensure it aligns with the college&apos;s desired style.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Unlimited Revisions</h3>
                <p className="text-sm text-muted-foreground">
                  Don&apos;t worry about getting it perfect the first time - revise your essay as many times as needed.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Expert Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Our team of experienced essay coaches will provide personalized suggestions to take your essay to the
                  next level.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from students who have used our essay review tool to craft the perfect college application.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl space-y-6">
              <div className="grid gap-4 rounded-lg border bg-background p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">University of California, Berkeley</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The feedback I received from the essay review tool was invaluable. It helped me craft a compelling
                  and authentic essay that really showcased my strengths and passion. I&apos;m so grateful for this
                  resource!"
                </p>
              </div>
              <div className="grid gap-4 rounded-lg border bg-background p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Michael Lee</h4>
                    <p className="text-sm text-muted-foreground">University of Michigan</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I was really struggling to find my voice and stand out in my college essays, but the personalized
                  feedback from this tool helped me do just that. I&apos;m so glad I used it - it made all the difference in
                  my applications."
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get Started</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Try Our Essay Review Tool Today</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sign up for free to get personalized feedback on your college application essays.
                </p>
              </div>
              <div className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                <SignInButton>
                    Get Started
                </SignInButton>

              </div>
              
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Essay Feedback. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </div>
    </div>
  )
}


function PencilIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function UserIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}