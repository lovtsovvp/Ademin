import { motion } from "motion/react";
import { MetroTile } from "../components/MetroTile";
import {
  Music,
  Calendar,
} from "lucide-react";
import {
  VKIcon,
  TelegramIcon,
  YouTubeIcon,
  InstagramIcon,
  WebsiteIcon
} from "../icons";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { artists } from "../data/artists";

const socialIcons = {
  vk: VKIcon,
  telegram: TelegramIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  website: WebsiteIcon
};

export function Artists() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <Music className="text-primary" size={48} />
            <h1 className="text-4xl md:text-6xl font-bold">
              Мои артисты
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl"
          >
            Талантливые музыканты различных жанров, с которыми я
            имею честь работать
          </motion.p>
        </div>
      </section>

      {/* Artists List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MetroTile className="p-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Artist Image */}
                  <div className="lg:col-span-2 relative aspect-square lg:aspect-auto">
                    <ImageWithFallback
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-sm">
                      {artist.genre}
                    </div>
                  </div>

                  {/* Artist Info */}
                  <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-4">
                        {artist.name}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {artist.description}
                      </p>

                      {/* Upcoming Concerts */}
                      {artist.upcomingConcerts.length > 0 && (
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Calendar
                              className="text-primary"
                              size={20}
                            />
                            <h3 className="font-bold">
                              Предстоящие концерты
                            </h3>
                          </div>
                          <div className="space-y-2">
                            {artist.upcomingConcerts.map(
                              (concert, idx) => (
                                <div
                                  key={idx}
                                  className="bg-secondary/50 p-3 border border-border"
                                >
                                  <div className="text-primary text-sm mb-1">
                                    {concert.date}
                                  </div>
                                  <div className="text-sm">
                                    {concert.venue}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                      {/* Social Links */}
                      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
                      
                        {Object.entries(artist.socials).map(([key, url]) => {
                          const Icon = socialIcons[key];
                      
                          if (!Icon) return null;
                      
                          return (
                            <a
                              key={key}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                            >
                              <Icon size={22} />
                            </a>
                          );
                        })}
                      
                      </div>
                   
                  </div>
                </div>
              </MetroTile>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
