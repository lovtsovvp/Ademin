export interface Artist {
  id: number;
  name: string;
  genre: string;
  image: string;
  description: string;
  upcomingConcerts: {
    date: string;
    venue: string;
  }[];
  socials: {
    vk?: string;
    telegram?: string;
    instagram?: string;
    youtube?: string;
    website?: string;
  };
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "Sheila Alex",
    genre: "Поэзия",
    image:
      "https://sun9-45.userapi.com/s/v1/ig2/WBm9luaRl9OV_zHe3VGlogkr9mutPcpV1afkQ9pcJDnRF-uF_RPiLb_AkAoxUC1Dnrc8i0XUcz2eYSsmdOf88s7H.jpg?quality=95&as=32x58,48x86,72x130,108x195,160x288,240x432,360x648,480x865,540x973,640x1153,689x1241&from=bu&cs=689x0",
    description:
      "Шейла Алекс - поэт, перформансист, мастер Слова и Провокаций! Многогранная, харизматичная, обладающая космической энергетикой и своеобразным острым чувством юмора. Ее книги издает крупнейшее издательство страны 'Аврора', дважды финалист чемпионата поэзии имени Маяковского, обладатель диплома «Мастер» за вклад в отечественную культуру, а совсем недавно Шейла Алекс стала победителем престижной премии GEOMETRIA AWARDS 2026 в номинации 'Лучший поэт 2026 года'!",
    upcomingConcerts: [
      {
        date: "21 марта 2026",
        venue: "Кафе Ex:Libris, Москва",
      },
    ],
    socials: {
      vk: "https://vk.com/id12917775",
    },
  },
  {
    id: 2,
    name: "Элина Пасечник",
    genre: "Поэзия",
    image:
      "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site919294/2627fe00-e508-417b-a927-a964137cb0f7/2627fe00-e508-417b-a927-a964137cb0f7-9930563.jpeg",
    description:
      "Поэтесса, член Союза писателей России. Актриса театра и кино.",
    upcomingConcerts: [
      {
        date: "10 апреля 2026",
        venue: "ArtHall, Санкт-Петербург",
      },
      {
        date: "24 октября 2026",
        venue: "Французские истории, Шереметевский Дворец, Санкт-Петербург",
      },
    ],
    socials: {
      vk: "https://vk.com/elinapasechnik",
      youtube: "https://www.youtube.com/channel/UCyRFCxxHW8I7AmlMrp-OAKw",
      telegram: "https://t.me/elinapasechnik",
      website: "https://elina.tb.ru/#text-2",
    },
  },
  {
    id: 3,
    name: "Михаил Савичев",
    genre: "Фламенко",
    image:
      "https://static.tildacdn.info/tild6265-3765-4235-b965-666534396161/noroot.png",
    description:
      "Савичев Михаил Юрьевич — российский композитор, гитарист, играющий в стилях фламенко, world music, классики, этно. Номинант премии Грэмми 2019 года в номинации World Music. Участник легендарного трио 'Loyko'. Постоянный участник различных музыкальных фестивалей. Автор музыки к фильмам и театральным постановкам.",
    upcomingConcerts: [
      { 
        date: "5 апреля 2026", 
        venue: "Stadium Live, Москва" 
      },
    ],
    socials: {
      youtube: "https://www.youtube.com/@miksavichev",
      vk: "https://vk.com/miksavichev",
      website: "https://www.mikhailsavichev.com/",
    },
  },
];

// Интерфейс для концерта с информацией об артисте
export interface ConcertWithArtist {
  id: string;
  date: string;
  artist: string;
  venue: string;
  city: string;
}

// Функция для извлечения всех концертов из артистов
export function getAllConcerts(): ConcertWithArtist[] {
  const concerts: ConcertWithArtist[] = [];
  
  artists.forEach(artist => {
    artist.upcomingConcerts.forEach((concert, index) => {
      // Извлекаем город из venue (последняя часть после последней запятой)
      const venueParts = concert.venue.split(',');
      const city = venueParts[venueParts.length - 1].trim();
      const venue = venueParts.slice(0, -1).join(',').trim() || concert.venue;
      
      concerts.push({
        id: `${artist.id}-${index}`,
        date: concert.date,
        artist: artist.name,
        venue: venue,
        city: city,
      });
    });
  });
  
  return concerts;
}
