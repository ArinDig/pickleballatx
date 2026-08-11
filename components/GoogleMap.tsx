interface GoogleMapProps {
  latitude: number
  longitude: number
  name: string
  address: string
}

export default function GoogleMap({ latitude, longitude, name, address }: GoogleMapProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <iframe
        title={`Map showing location of ${name}`}
        src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
        width="100%"
        height="384"
        style={{ border: 0, minHeight: '384px' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
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
