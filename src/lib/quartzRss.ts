export type RecentNote = {
  title: string
  url: string
  publishedAt: Date
  description: string
}

export async function fetchRecentQuartzNotes(feedUrl: string): Promise<RecentNote[]> {
  const res = await fetch(feedUrl, { headers: { Accept: 'application/rss+xml, text/xml' } })
  if (!res.ok) throw new Error(`Failed to load RSS: ${res.status} ${res.statusText}`)

  const xmlText = await res.text()
  const doc = new DOMParser().parseFromString(xmlText, 'application/xml')

  // basic “RSS parse error” detection
  if (doc.querySelector('parsererror')) throw new Error('Invalid RSS XML')

  const notes = Array.from(doc.querySelectorAll('item')).map((item) => {
    const title = item.querySelector('title')?.textContent?.trim() ?? 'Untitled'
    const url = item.querySelector('link')?.textContent?.trim() ?? '#'
    const description = item.querySelector('description')?.textContent?.trim() ?? ''
    const pubDateRaw = item.querySelector('pubDate')?.textContent?.trim() ?? ''
    return { title, url, description, publishedAt: new Date(pubDateRaw) }
  })

  // Prefer newest first; ignore invalid dates (they sort to the end)
  notes.sort((a, b) => {
    const aTime = Number.isFinite(a.publishedAt.getTime()) ? a.publishedAt.getTime() : -Infinity
    const bTime = Number.isFinite(b.publishedAt.getTime()) ? b.publishedAt.getTime() : -Infinity
    return bTime - aTime
  })

  return notes
}
