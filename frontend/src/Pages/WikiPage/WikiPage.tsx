import React from 'react'
import WikiBanner from './WikiBanner'
import WikiPost from './WikiPost'
import WikiRecent from './WikiRecent'

function WikiPage() {
  return (
    <div>
        <WikiBanner />
        <WikiPost />
        <WikiRecent />
    </div>
  )
}

export default WikiPage