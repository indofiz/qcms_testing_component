"use client"

import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import FilterSection from "./section"


export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilter = (filters: any) => {
    console.log("Applied filters:", filters)
  }

  const handleExport = () => {
    console.log("Export clicked")
    // Implement export functionality
  }

  return (
    <div className="min-h-screen bg-white p-2 py-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 lg:mb-4">
            <h1 className="text-2xl font-medium text-gray-900">Orders Dashboard</h1>
        <Button><Plus />Tambah</Button></div>
        <FilterSection onSearch={handleSearch} onFilter={handleFilter} onExport={handleExport} />

        {/* Your data table or content would go here */}
        <div className="mt-8 p-8 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500 text-center">Your filtered data will appear here</p>
        </div>
      </div>
    </div>
  )
}
