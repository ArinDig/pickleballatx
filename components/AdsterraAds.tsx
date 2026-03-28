'use client'

import { useEffect, useRef } from 'react'

// Native Banner (placement 28902078)
export function AdsterraNativeBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = 'https://pl29002577.profitablecpmratenetwork.com/3a9a0988d7a88b64ac5188e6c1a35683/invoke.js'
    document.head.appendChild(script)
  }, [])

  return (
    <div className="flex justify-center py-4">
      <div id="container-3a9a0988d7a88b64ac5188e6c1a35683" ref={containerRef} />
    </div>
  )
}

// Banner 300x250 (placement 28902079)
export function AdsterraBanner300x250() {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current || !containerRef.current) return
    initialized.current = true

    ;(window as Window & { atOptions?: object }).atOptions = {
      key: '6fe3f49dddb9222e74145fbfcc8e8081',
      format: 'iframe',
      height: 250,
      width: 300,
      params: {},
    }

    const script = document.createElement('script')
    script.src = 'https://www.highperformanceformat.com/6fe3f49dddb9222e74145fbfcc8e8081/invoke.js'
    containerRef.current.appendChild(script)
  }, [])

  return (
    <div className="flex justify-center py-4">
      <div ref={containerRef} style={{ width: 300, height: 250, overflow: 'hidden' }} />
    </div>
  )
}

// Banner 728x90 - desktop leaderboard (placement 28902080)
export function AdsterraBanner728x90() {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current || !containerRef.current) return
    initialized.current = true

    ;(window as Window & { atOptions?: object }).atOptions = {
      key: '87164ecc456e803e6b9ac904e9cde25e',
      format: 'iframe',
      height: 90,
      width: 728,
      params: {},
    }

    const script = document.createElement('script')
    script.src = 'https://www.highperformanceformat.com/87164ecc456e803e6b9ac904e9cde25e/invoke.js'
    containerRef.current.appendChild(script)
  }, [])

  return (
    <div className="hidden md:flex justify-center py-4">
      <div ref={containerRef} style={{ width: 728, height: 90, overflow: 'hidden' }} />
    </div>
  )
}

// Banner 320x50 - mobile banner (placement 28902081)
export function AdsterraBanner320x50() {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current || !containerRef.current) return
    initialized.current = true

    ;(window as Window & { atOptions?: object }).atOptions = {
      key: '814c4a63a750d8fd05751ce9e7450cc5',
      format: 'iframe',
      height: 50,
      width: 320,
      params: {},
    }

    const script = document.createElement('script')
    script.src = 'https://www.highperformanceformat.com/814c4a63a750d8fd05751ce9e7450cc5/invoke.js'
    containerRef.current.appendChild(script)
  }, [])

  return (
    <div className="flex md:hidden justify-center py-3">
      <div ref={containerRef} style={{ width: 320, height: 50, overflow: 'hidden' }} />
    </div>
  )
}
