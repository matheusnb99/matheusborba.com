"use client"
import { FunctionComponent } from "react"

type FooterSectionProps = {}

const FooterSection: FunctionComponent<FooterSectionProps> = () => {
  return (
    <footer className="w-full py-6 bg-gray-100 flex flex-col items-center mt-8">
      <p className="mb-2 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Matheus Nunes Borba. All rights
        reserved.
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        aria-label="Back to top"
      >
        Back to Top
      </button>
    </footer>
  )
}

export default FooterSection
