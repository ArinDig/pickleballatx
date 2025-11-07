import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    // Read the SVG favicon file
    const filePath = path.join(process.cwd(), 'public', 'favicon.svg')
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    
    // Return the SVG with appropriate headers
    return new NextResponse(fileContents, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    // If file doesn't exist, return 404
    return new NextResponse(null, { status: 404 })
  }
}

