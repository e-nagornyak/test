import { Facebook, Linkedin, Youtube } from "lucide-react"

const footerSections = [
  {
    title: "Functions",
    items: [
      "Functions overview",
      "Order Manager",
      "Marketplace Manager",
      "Product Manager",
      "Price automation",
      "Shipping management",
      "Workflow automation",
      "BaseLinker Connect",
      "AI for e-commerce",
    ],
  },
  {
    title: "Service",
    items: [
      "Contact",
      "Help",
      "FAQ",
      "Reviews",
      "System implementations",
      "Cooperation and partners",
      "Competitor Comparison",
    ],
  },
]

export function DefaultFooter() {
  return (
    <footer className="border-t border-border px-4 py-8 dark:border-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between gap-8">
          {footerSections?.map((section, index) => (
            <div key={index} className="hidden w-fit md:block">
              <h3 className="mb-4 font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:mt-12 md:flex-row">
          <p className="mb-4 text-sm md:mb-0">&copy; 2025 </p>
          <nav className="mb-4 flex space-x-4 md:mb-0">
            <a href="#" className="text-sm hover:underline">
              Terms of Use
            </a>
            <a href="#" className="text-sm hover:underline">
              Security and privacy policy
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <a href="#" aria-label="Facebook">
                <Facebook className="size-5" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="size-5" />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
