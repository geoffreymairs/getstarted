'use client'

import { useState } from 'react'
import { Search, ArrowRight } from 'lucide-react'
import { domainSearchUrl } from '@/lib/webLinks'

/**
 * Real domain search. The GetStarted Web storefront's results page
 * (/domain-names/search/?domain=…) reads the query param and shows live
 * availability, so we hand the typed domain straight to it.
 */
export default function DomainSearch() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(domainSearchUrl(query), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="flex flex-col sm:flex-row items-stretch gap-2 rounded-2xl sm:rounded-full border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60 transition-all focus-within:border-gs-500 focus-within:shadow-xl">
        <div className="flex items-center gap-2 flex-1 px-4">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="yourbusiness.co.nz"
            aria-label="Search for a domain name"
            className="w-full bg-transparent py-2.5 text-base text-slate-900 placeholder-slate-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl sm:rounded-full bg-gs-600 px-6 py-3 text-sm font-semibold text-white hover:bg-gs-700 transition-colors"
        >
          Search
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  )
}
