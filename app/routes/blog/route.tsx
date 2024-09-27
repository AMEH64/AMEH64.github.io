import { Outlet } from '@remix-run/react'
import { Header } from '~/components/header'
import React, { PropsWithChildren } from 'react'
import { Footer } from '~/components/footer'

const Layout = ({ children }: PropsWithChildren) => (
  <div className="flex min-h-svh flex-col">
    <Header />
    <main className="mx-auto flex w-full max-w-screen-xl flex-1 bg-white px-4 sm:px-6 lg:px-8 dark:bg-zinc-900">
      <div className="lg:y-8 mx-auto flex max-w-screen-md flex-1 py-4 sm:py-6">
        {children}
      </div>
    </main>
    <Footer />
  </div>
)

export default function Route() {
  return (
    <Layout>
      <article className="prose dark:prose-invert">
        <h1>Hello world!</h1>
        <Outlet />
      </article>
    </Layout>
  )
}
