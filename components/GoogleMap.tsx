'use client'

import { useEffect, useRef } from 'react'

interface GoogleMapProps {
  latitude: number
  longitude: number
  name: string
  address: string
}

export default function GoogleMap({ latitude, longitude, name, address }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}`
    script.async = true
    script.defer = true
    
    script.onload = () => {
      if (mapRef.current && window.google) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
          mapTypeControl: false,
          streetViewControl: true,
          fullscreenControl: true,
        })

        new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map,
          title: name,
        })
      }
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [latitude, longitude, name])

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div 
        ref={mapRef} 
        className="w-full h-96"
        style={{ minHeight: '384px' }}
      />
      <div className="bg-white p-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2">{address}</p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:underline text-sm font-medium"
        >
          Get directions in Google Maps →
        </a>
      </div>
    </div>
  )
}

