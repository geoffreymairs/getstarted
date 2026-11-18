'use client'

import { LiveChatWidget as LCWidget } from '@livechat/widget-react'

// LiveChat (Text) chat widget. Set NEXT_PUBLIC_LIVECHAT_LICENSE in Vercel
// to the license number from the LiveChat app to switch it on.
export default function LiveChatWidget() {
  const license = process.env.NEXT_PUBLIC_LIVECHAT_LICENSE
  if (!license) return null

  return <LCWidget license={license} visibility="minimized" />
}
