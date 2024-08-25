import React from 'react'
import AcademiaBanner from './AcademiaBanner'
import AcademiaPost from './AcademiaPost'
import AcademiaRecent from './AcademiaRecent'

function AcademiaPage() {
  return (
    <div>
        <AcademiaBanner />
        <AcademiaPost />
        <AcademiaRecent />
    </div>
  )
}

export default AcademiaPage