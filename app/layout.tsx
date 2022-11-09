import "./globals.css"
import { Inter } from "@next/font/google"
import Link from "next/link"
const inter = Inter({ variable: "--font-inter" })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.variable}>
      <head>
        <title>Post App</title>
      </head>
      <body className="min-h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto]">
        <header className="p-8 border-b">
          <div className="flex justify-between items-center">
            <span className=" text-3xl font-bold">PostApp</span>
            <nav className="flex gap-4 text-2xl font-semibold  justify-center">
              <Link
                href={"/posts"}
                className="text-gray-700 relative hover:text-gray-500 after:block after:content-[''] after:w-[50%] after:h-1 after:bg-indigo-300 after:absolute after:top-[100%] after:left-[50%] after:rounded-lg after:translate-x-[-50%]"
              >
                Posts
              </Link>
              <Link href={"/us"} className="text-gray-700 hover:text-gray-500">
                Acerca
              </Link>
              <Link
                href={"/help"}
                className="text-gray-700 hover:text-gray-500"
              >
                Ayuda
              </Link>
            </nav>
            <button className="border-indigo-500 border rounded-lg p-4 text-lg font-bold text-indigo-600 transition-colors hover:bg-indigo-50">
              Ingresar
            </button>
          </div>
        </header>

        {children}
        <footer>footer app</footer>
      </body>
    </html>
  )
}
