'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Court } from '@/data/courts'

interface CourtsMapProps {
  courts: Court[]
}

export default function CourtsMap({ courts }: CourtsMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}`
    script.async = true
    script.defer = true
    
    script.onload = () => {
      if (mapRef.current && (window as any).google) {
        const google = (window as any).google
        
        // Calculate center point (Austin area)
        const avgLat = courts.reduce((sum, court) => sum + court.latitude, 0) / courts.length
        const avgLng = courts.reduce((sum, court) => sum + court.longitude, 0) / courts.length

        // Create map centered on Austin
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: avgLat, lng: avgLng },
          zoom: 11,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          zoomControl: true,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ]
        })

        mapInstanceRef.current = map

        // Create bounds to fit all markers
        const bounds = new google.maps.LatLngBounds()

        // Create info window
        const infoWindow = new google.maps.InfoWindow()

        // Create markers for each court
        courts.forEach((court) => {
          const position = { lat: court.latitude, lng: court.longitude }
          
          // Create marker
          const marker = new google.maps.Marker({
            position,
            map,
            title: court.name,
            animation: google.maps.Animation.DROP,
          })

          // Create info window content
          const infoContent = `
            <div style="padding: 8px; min-width: 200px;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #1f2937;">
                ${court.name}
              </h3>
              <p style="margin: 0 0 4px 0; font-size: 14px; color: #6b7280;">
                ${court.address}<br/>
                ${court.city}, ${court.state} ${court.zipCode}
              </p>
              <p style="margin: 4px 0; font-size: 13px; color: #374151;">
                <strong>${court.numberOfCourts}</strong> ${court.numberOfCourts === 1 ? 'court' : 'courts'} • 
                ${court.courtType === 'indoor' ? 'Indoor' : court.courtType === 'outdoor' ? 'Outdoor' : 'Indoor & Outdoor'} • 
                ${court.isFree ? 'Free' : 'Paid'}
              </p>
              <a 
                href="/courts/${court.slug}" 
                style="display: inline-block; margin-top: 8px; padding: 6px 12px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 4px; font-size: 13px; font-weight: 500;"
                onmouseover="this.style.backgroundColor='#1d4ed8'"
                onmouseout="this.style.backgroundColor='#2563eb'"
              >
                View Details →
              </a>
            </div>
          `

          // Add click listener to marker
          marker.addListener('click', () => {
            infoWindow.setContent(infoContent)
            infoWindow.open(map, marker)
          })

          // Extend bounds to include this marker
          bounds.extend(position)

          markersRef.current.push(marker)
        })

        // Fit map to show all markers
        if (courts.length > 0) {
          map.fitBounds(bounds)
          
          // Don't zoom in too much if there's only one court
          if (courts.length === 1) {
            google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
              if (map.getZoom() && map.getZoom() > 15) {
                map.setZoom(15)
              }
            })
          }
        }
      }
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      // Clear markers
      markersRef.current.forEach(marker => marker.setMap(null))
      markersRef.current = []
    }
  }, [courts])

  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <div 
        ref={mapRef} 
        className="w-full"
        style={{ height: '600px', minHeight: '400px' }}
      />
    </div>
  )
}

