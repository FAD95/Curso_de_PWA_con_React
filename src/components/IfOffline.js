import React, { memo, useState, useEffect } from 'react'

function IfOffline({ children }) {
  const [online, setOnline] = useState(navigator ? navigator.onLine : true)

  useEffect(() => {
    if (!window) return
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  })

  const goOnline = () => {
    setOnline(true)
  }
  const goOffline = () => {
    setOnline(false)
  }
  if (online) return null
  return <span>{children}</span>
}

export default memo(IfOffline)
