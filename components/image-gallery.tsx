"use client"

interface ImageGalleryProps {
  images: string[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="space-y-8">
      {images.map((image, i) => (
        <div key={i} className="w-full aspect-[16/10] bg-muted rounded-sm overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={`Project image ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}
