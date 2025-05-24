import { CategoryIcon } from "@/components/category-icon"
import Link from "next/link"

export function CategoriesMenu() {
  return (
    <div className="rounded-lg bg-gray-50 p-4">
      <h3 className="mb-3 text-sm font-medium text-gray-500">CATEGORIES</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/services/b2c" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100">
            <CategoryIcon category="B2C" className="mr-3 h-5 w-5" />
            <span>B2C</span>
          </Link>
        </li>
        <li>
          <Link href="/services/b2b" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100">
            <CategoryIcon category="B2B" className="mr-3 h-5 w-5" />
            <span>B2B</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
