import React from 'react'
import InnerChild from './InnerChild'

export default function Child() {
  return (
    <div>
      hiiiiiiii{console.log('notes')}
      <InnerChild/>
    </div>
  )
}
