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
    src: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/dwSA/KQh4E2T9d/2C0010.00_34_47_18.Still032%20копия_00000.jpg?mt=1745087950000",
    title: "Свидание при свечах",
    category: "Концерты",
  },
   {
    id: 3,
    src: "https://sun9-39.userapi.com/s/v1/ig2/gqAh4bhhVteNKGKjPa69YBs6kbK5bRFUHmc-KljmM-xZAUtNETUAHA-u4PsJvnhwQ451w38_L3gOm6ni2n9md5xc.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160&from=bu&cs=1440x0",
    title: "Sheila Alex",
  },
  {
    id: 4,
    src: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/dwSA/KQh4E2T9d/C0002.00_21_10_07.Still025_31757.jpg?mt=1726957129000",
    title: "Свидание при свечах",
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
