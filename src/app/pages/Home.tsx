import { motion } from "motion/react";
import { Link } from "react-router";
import { MetroTile } from "../components/MetroTile";
import { Calendar, Music, Newspaper, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { artists, getAllConcerts } from "../data/artists";

// Получаем все концерты из данных артистов
const allConcerts = getAllConcerts();
// Показываем первые 3 концерта на главной странице
const upcomingConcerts = allConcerts.slice(0, 3);

// Показываем первых 4 артистов на главной странице
const featuredArtists = artists.slice(0, 4);

export function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://avatars.mds.yandex.net/i?id=4c0739726ead99689a91631ac53cb009b67af96f-4231391-images-thumbs&n=13" /* Главное фото на странице */
            alt="Concert Stage"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
          >
            АЛЕКСЕЙ ДЕМИН
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Концертный директор | Музыкальный продюсер
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Более 15 лет успешного опыта в организации концертов
            и продвижении талантливых артистов
          </motion.p>
        </div>
      </section>

      {/* Quick Navigation Tiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  
          <Link to="/artists">
            <MetroTile className="h-48 flex flex-col justify-between bg-primary text-primary-foreground" delay={0.2}>
              <div>
                <h3 className="text-xl font-bold mb-2">Артисты</h3>
                <p className="text-sm opacity-90">
                  Талантливые музыканты в моем портфолио
                </p>
              </div>
              <Music size={24} />
            </MetroTile>
          </Link>

          <Link to="/services">
            <MetroTile className="h-48 flex flex-col justify-between" delay={0.3}>
              <div>
                <h3 className="text-xl font-bold mb-2">Услуги</h3>
                <p className="text-sm text-muted-foreground">
                  Организация концертов и продюсирование
                </p>
              </div>
              <ArrowRight className="text-primary" size={24} />
            </MetroTile>
          </Link>
        </div>
      </section>

      {/* Upcoming Concerts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-secondary/20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Calendar className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Ближайшие концерты</h2>
          </div>
          <Link
            to="/artists"
            className="text-primary hover:underline flex items-center gap-2"
          >
            Все концерты <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingConcerts.map((concert, index) => (
            <MetroTile key={concert.id} delay={0.1 * index}>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary text-primary-foreground px-3 py-1 text-sm">
                  {concert.date}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{concert.artist}</h3>
              <p className="text-sm text-muted-foreground mb-1">{concert.venue}</p>
              <p className="text-sm text-muted-foreground">{concert.city}</p>
            </MetroTile>
          ))}
        </div>
      </section>

      {/* Featured Artists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Music className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Артисты</h2>
          </div>
          <Link
            to="/artists"
            className="text-primary hover:underline flex items-center gap-2"
          >
            Все артисты <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtists.map((artist, index) => (
            <MetroTile key={artist.id} className="p-0 overflow-hidden" delay={0.1 * index}>
              <div className="relative aspect-square">
                <ImageWithFallback
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white">{artist.name}</h3>
                  <p className="text-sm text-white/80">{artist.genre}</p>
                </div>
              </div>
            </MetroTile>
          ))}
        </div>
      </section>
    </div>
  );
}
