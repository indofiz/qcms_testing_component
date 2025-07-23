"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface FilterSectionProps {
  onSearch?: (query: string) => void
  onFilter?: (filters: FilterOptions) => void
  onExport?: () => void
}

interface FilterOptions {
  status?: string
  dateRange?: string
  customer?: string
}

export default function FilterSection({ onSearch, onFilter, onExport }: FilterSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<FilterOptions>({})

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    onSearch?.(value)
  }

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilter?.(newFilters)
  }

  const clearFilters = () => {
    setFilters({})
    onFilter?.({})
  }

  return (
    <div className="w-full space-y-0">
      {/* Main Filter Bar */}
      <div className="grid grid-cols-12 items-stretch gap-4 md:py-2">
        {/* Search Input */}
        <div className="col-span-12 md:col-span-6 lg:col-span-8 relative bg-gray-100 rounded-lg px-3 py-1.5">
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search for order ID, customer, order status"
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 border-0 shadow-none focus-visible:ring-0 text-gray-600 bg-transparent"
          />
        </div>

        {/* Filter Button */}
        <div className="flex items-center col-span-6 md:col-span-2 lg:col-span-2 justify-end">
        <Button
          variant="secondary"
          onClick={() => setShowFilters(!showFilters)}
          className="flex w-full h-full items-center gap-2 text-gray-700 bg-gray-100 hover:bg-gray-200 border-0"
        >
          <Filter className="h-4 w-4" />
          Filters
          <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
        </Button>
        </div>

        {/* Export Button */}
        <div className="flex items-center col-span-6 md:col-span-2 lg:col-span-2 justify-end">

        <Button
          variant="secondary"
          onClick={onExport}
          className="flex w-full h-full px-6 items-center gap-2 text-gray-700 bg-gray-100 hover:bg-gray-200 border-0"
        >
          <Download className="h-4 w-4" />
          Export
        </Button>
        </div>
      </div>

      {/* Filter Form - Collapsible */}
      {showFilters && (
        <Card className="border border-gray-200 shadow-none mt-4 md:mt-2">
          <CardContent className="p-6 py-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Order Status Filter */}
              <div className="space-y-2">
                <Label htmlFor="status" className="text-sm font-medium text-gray-700">
                  Order Status
                </Label>
                <Select value={filters.status || ""} onValueChange={(value) => handleFilterChange("status", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range Filter */}
              <div className="space-y-2">
                <Label htmlFor="dateRange" className="text-sm font-medium text-gray-700">
                  Date Range
                </Label>
                <Select
                  value={filters.dateRange || ""}
                  onValueChange={(value) => handleFilterChange("dateRange", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="last7days">Last 7 days</SelectItem>
                    <SelectItem value="last30days">Last 30 days</SelectItem>
                    <SelectItem value="last90days">Last 90 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Customer Filter */}
              <div className="space-y-2">
                <Label htmlFor="customer" className="text-sm font-medium text-gray-700">
                  Customer Type
                </Label>
                <Select value={filters.customer || ""} onValueChange={(value) => handleFilterChange("customer", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select customer type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New Customer</SelectItem>
                    <SelectItem value="returning">Returning Customer</SelectItem>
                    <SelectItem value="vip">VIP Customer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Filter Actions */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
              <Button variant="ghost" onClick={clearFilters} className="text-gray-600 hover:text-gray-800">
                Clear all filters
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowFilters(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setShowFilters(false)}>Apply Filters</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
