
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { publicUrl } from '../lib/utils';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  date: string;
  event: string;
}

const galleryImages: GalleryImage[] = [
  { id: '1',  src: '/gallery/akhila_present.jpg',       alt: 'Akhila Presenting',      caption: 'Akhila Presenting',      date: '2024-01-01', event: 'Presentation' },
  { id: '2',  src: '/gallery/group_serc.jpeg',          alt: 'Group at SERC',          caption: 'Group at SERC',          date: '2024-01-01', event: 'Group Photo' },
  { id: '3',  src: '/gallery/icse_present_karthik.jpeg',alt: 'Karthik at ICSE',        caption: 'Karthik at ICSE',        date: '2024-01-01', event: 'Conference' },
  { id: '4',  src: '/gallery/karthik_present.jpg',      alt: 'Karthik Presenting',     caption: 'Karthik Presenting',     date: '2024-01-01', event: 'Presentation' },
  { id: '5',  src: '/gallery/kv_nit.jpeg',              alt: 'KV at NIT',              caption: 'KV at NIT',              date: '2024-01-01', event: 'Event' },
  { id: '6',  src: '/gallery/likhit_present.jpeg',      alt: 'Likhit Presenting',      caption: 'Likhit Presenting',      date: '2024-01-01', event: 'Presentation' },
  { id: '7',  src: '/gallery/rnd_group.jpeg',           alt: 'R&D Group',              caption: 'R&D Group',              date: '2024-01-01', event: 'Group Photo' },
  { id: '8',  src: '/gallery/summer_interns_2025.jpeg', alt: 'Summer Interns 2025',    caption: 'Summer Interns 2025',    date: '2025-01-01', event: 'Interns' },
  { id: '9',  src: '/gallery/dinner2k24.jpeg',          alt: 'Dinner 2024',            caption: 'Dinner 2024',            date: '2024-01-01', event: 'Social' },
  { id: '10', src: '/gallery/freshers2k24_sa4s.jpg',    alt: 'Freshers 2024',          caption: 'Freshers 2024 at SA4S',  date: '2024-01-01', event: 'Social' },
  { id: '11', src: '/gallery/icsa24_best_poster.jpeg',  alt: 'ICSA 2024 Best Poster',  caption: 'ICSA 2024 Best Poster',  date: '2024-01-01', event: 'Award' },
  { id: '12', src: '/gallery/ICSA-1.jpeg',              alt: 'ICSA Conference',         caption: 'ICSA Conference',        date: '2024-01-01', event: 'Conference' },
  { id: '13', src: '/gallery/pic1.jpeg',                alt: 'Gallery Image 1',        caption: 'Gallery Image 1',        date: '2024-01-01', event: 'General' },
  { id: '14', src: '/gallery/pic2.jpeg',                alt: 'Gallery Image 2',        caption: 'Gallery Image 2',        date: '2024-01-01', event: 'General' },
  { id: '15', src: '/gallery/pic3.jpeg',                alt: 'Gallery Image 3',        caption: 'Gallery Image 3',        date: '2024-01-01', event: 'General' },
  { id: '16', src: '/gallery/pic4.jpeg',                alt: 'Gallery Image 4',        caption: 'Gallery Image 4',        date: '2024-01-01', event: 'General' },
  { id: '17', src: '/gallery/pic5.jpeg',                alt: 'Gallery Image 5',        caption: 'Gallery Image 5',        date: '2024-01-01', event: 'General' },
  { id: '18', src: '/gallery/sustaind.png',             alt: 'SustAInd team',          caption: 'SustAInd team',          date: '2024-01-01', event: 'Project group' },
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox  = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      direction === 'prev'
        ? (selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1)
        : (selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1)
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-[#0C2118] border-b border-[#1C4030] py-16">
        <div className="container mx-auto px-4">
          <p className="text-xs text-[#52B788] tracking-[0.25em] uppercase font-semibold mb-3">Gallery</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">Life at SA4S</h1>
          <p className="mt-3 text-[#8DB8A2]">Moments from our research journey.</p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative block w-full rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:ring-offset-2"
            >
              <img
                src={publicUrl(image.src)}
                alt={image.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <p className="w-full px-3 pb-3 text-white text-sm text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
            <img
              src={publicUrl(galleryImages[selectedImageIndex].src)}
              alt={galleryImages[selectedImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
            <div className="mt-3 text-center">
              <p className="text-white/90 font-medium">{galleryImages[selectedImageIndex].caption}</p>
              <p className="text-white/50 text-sm mt-0.5">
                {galleryImages[selectedImageIndex].event} · {new Date(galleryImages[selectedImageIndex].date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
