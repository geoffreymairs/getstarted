import { Globe, Server, LayoutTemplate, Mail, ShieldCheck, TrendingUp, type LucideIcon } from 'lucide-react'

/**
 * GetStarted Web is the commercial storefront. The marketing site (www) does NOT
 * replicate its individual product pages or navigation, every Web call-to-action
 * leads to one clean destination: the storefront home, which carries its own nav.
 */
export const WEB_URL = 'https://web.getstarted.co.nz/'

/** The storefront's domain-search results page. It reads a `domain` query param
 *  and shows live availability, so we can hand a typed domain straight to it. */
export const WEB_DOMAIN_SEARCH = `${WEB_URL}domain-names/search/`

/** Build a working domain-search link for a typed query. */
export function domainSearchUrl(query?: string) {
  const q = query?.trim()
  return q ? `${WEB_DOMAIN_SEARCH}?domain=${encodeURIComponent(q)}` : WEB_DOMAIN_SEARCH
}

export interface WebProduct {
  label: string
  desc: string
  icon: LucideIcon
}

/** Informational product list, used for cards/menus, NOT as individual links. */
export const WEB_PRODUCTS: WebProduct[] = [
  { label: 'Domains', desc: 'Find and register your perfect domain name', icon: Globe },
  { label: 'Web Hosting', desc: 'Fast, reliable Linux hosting built for uptime', icon: Server },
  { label: 'Websites', desc: 'Build a professional site in a few clicks', icon: LayoutTemplate },
  { label: 'Business Email', desc: 'Professional email at your own domain', icon: Mail },
  { label: 'SSL & Security', desc: 'Secure your site and build trust', icon: ShieldCheck },
  { label: 'Simple SEO', desc: 'Improve your search ranking, step by step', icon: TrendingUp },
]
