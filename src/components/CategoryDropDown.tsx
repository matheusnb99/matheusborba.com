"use client"

import { parseAsString, useQueryState } from "nuqs"
import { FunctionComponent } from "react"

const CategoryDropDown: FunctionComponent = () => {
  const [category, setCategory] = useQueryState(
    "category",
    parseAsString.withDefault("all").withOptions({ shallow: false }),
  )

  return (
    <div className="md:float-none lg:float-right">
      <label htmlFor="options" className="mr-2">
        Choose an option:
      </label>
      <select
        id="options"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="border p-2 rounded"
      >
        <option value="all">Filter timeline</option>
        <option value="work">work</option>
        <option value="school">school</option>
        <option value="project">projects</option>
      </select>
    </div>
  )
}

export default CategoryDropDown
