import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { MetroTile } from "../components/MetroTile";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const galleryImages = [
  {
    id: 1,
    src: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/dwSA/KQh4E2T9d/2Фото%20-12%20копия%202.jpg?mt=1720302973000",
    title: "Свидание при свечах",
    category: "Концерты",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1718180867951-964ccef2f37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMGxpdmUlMjBjb25jZXJ0fGVufDF8fHx8MTc3Mjg5MDAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Рок-концерт",
    category: "Концерты",
  },
  
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Фотогалерея
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Моменты из концертов, backstage и работа с артистами
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <MetroTile className="p-0 overflow-hidden h-64">
                <div className="relative w-full h-full group">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <p className="text-white font-bold text-lg">{image.title}</p>
                      <p className="text-white/80 text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </MetroTile>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={
                galleryImages.find((img) => img.id === selectedImage)?.src || ""
              }
              alt={
                galleryImages.find((img) => img.id === selectedImage)?.title || ""
              }
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-bold">
                {galleryImages.find((img) => img.id === selectedImage)?.title}
              </h3>
              <p className="text-white/70">
                {galleryImages.find((img) => img.id === selectedImage)?.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
