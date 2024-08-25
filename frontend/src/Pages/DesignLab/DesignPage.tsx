import React from 'react'
import DesignBanner from './DesignBanner'
import DesignPost from './DesignPost'
import DesignRecent from './DesignRecent'

function DesignPage() {
  return (
    <div>
        <DesignBanner />
        <DesignPost />
        <DesignRecent />
    </div>
  )
}

export default DesignPage