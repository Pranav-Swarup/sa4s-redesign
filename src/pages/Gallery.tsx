
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  date: string;
  event: string;
}

const galleryImages: GalleryImage[] = [
  { id: '1', src: '/gallery/akhila_present.jpg', alt: 'Akhila Presenting', caption: 'Akhila Presenting', date: '2024-01-01', event: 'Presentation' },
  { id: '2', src: '/gallery/group_serc.jpeg', alt: 'Group at SERC', caption: 'Group at SERC', date: '2024-01-01', event: 'Group Photo' },
  { id: '3', src: '/gallery/icse_present_karthik.jpeg', alt: 'Karthik at ICSE', caption: 'Karthik at ICSE', date: '2024-01-01', event: 'Conference' },
  { id: '4', src: '/gallery/karthik_present.jpg', alt: 'Karthik Presenting', caption: 'Karthik Presenting', date: '2024-01-01', event: 'Presentation' },
  { id: '5', src: '/gallery/kv_nit.jpeg', alt: 'KV at NIT', caption: 'KV at NIT', date: '2024-01-01', event: 'Event' },
  { id: '6', src: '/gallery/likhit_present.jpeg', alt: 'Likhit Presenting', caption: 'Likhit Presenting', date: '2024-01-01', event: 'Presentation' },
  { id: '7', src: '/gallery/rnd_group.jpeg', alt: 'R&D Group', caption: 'R&D Group', date: '2024-01-01', event: 'Group Photo' },
  { id: '8', src: '/gallery/summer_interns_2025.jpeg', alt: 'Summer Interns 2025', caption: 'Summer Interns 2025', date: '2025-01-01', event: 'Interns' },
  { id: '9', src: '/gallery/dinner2k24.jpeg', alt: 'Dinner 2024', caption: 'Dinner 2024', date: '2024-01-01', event: 'Social' },
  { id: '10', src: '/gallery/freshers2k24_sa4s.jpg', alt: 'Freshers 2024', caption: 'Freshers 2024 at SA4S', date: '2024-01-01', event: 'Social' },
  { id: '11', src: '/gallery/icsa24_best_poster.jpeg', alt: 'ICSA 2024 Best Poster', caption: 'ICSA 2024 Best Poster', date: '2024-01-01', event: 'Award' },
  { id: '12', src: '/gallery/ICSA-1.jpeg', alt: 'ICSA Conference', caption: 'ICSA Conference', date: '2024-01-01', event: 'Conference' },
  { id: '13', src: '/gallery/pic1.jpeg', alt: 'Gallery Image 1', caption: 'Gallery Image 1', date: '2024-01-01', event: 'General' },
  { id: '14', src: '/gallery/pic2.jpeg', alt: 'Gallery Image 2', caption: 'Gallery Image 2', date: '2024-01-01', event: 'General' },
  { id: '15', src: '/gallery/pic3.jpeg', alt: 'Gallery Image 3', caption: 'Gallery Image 3', date: '2024-01-01', event: 'General' },
  { id: '16', src: '/gallery/pic4.jpeg', alt: 'Gallery Image 4', caption: 'Gallery Image 4', date: '2024-01-01', event: 'General' },
  { id: '17', src: '/gallery/pic5.jpeg', alt: 'Gallery Image 5', caption: 'Gallery Image 5', date: '2024-01-01', event: 'General' },
  { id: '18', src: '/gallery/sustaind.png', alt: 'SustAInd team', caption: 'SustAInd team', date: '2024-01-01', event: 'Project group' }
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    if (direction === 'prev') {
      setSelectedImageIndex(selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-sa4s-teal-50 to-sa4s-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-600">
            Life @ SA4S - Moments from our research journey
          </p>
        </div>
      </div>

      {/* Justified Image Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative block w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sa4s-teal-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image */}
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className="max-w-full max-h-full object-contain"
            />

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-white bg-black bg-opacity-50 p-4 rounded">
              <p className="text-lg font-medium">{galleryImages[selectedImageIndex].caption}</p>
              <p className="text-sm opacity-90">
                {galleryImages[selectedImageIndex].event} • {new Date(galleryImages[selectedImageIndex].date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
