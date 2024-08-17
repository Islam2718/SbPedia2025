import React from 'react'
import NewsBanner from './NewsBanner'
import NewsPost from './NewsPost'
import NewsRecent from './NewsRecent'

function NewsPage() {
  return (
    <div>
        <NewsBanner />
        <NewsPost />
        <NewsRecent />
    </div>
  )
}

export default NewsPage