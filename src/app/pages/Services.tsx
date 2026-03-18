import { motion } from "motion/react";
import { MetroTile } from "../components/MetroTile";
import {
  Music,
  Mic,
  TrendingUp,
  MapPin,
  Users,
  Star,
  Calendar,
  Building,
} from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Организация концертов",
    description:
      "Полный цикл организации концертных мероприятий любого масштаба — от камерных выступлений до стадионных шоу.",
    features: [
      "Выбор и аренда площадок",
      "Техническое обеспечение",
      "Работа с билетными операторами",
      "Координация всех этапов",
    ],
  },
  {
    icon: Mic,
    title: "Концертный менеджмент",
    description:
      "Профессиональное сопровождение артистов на всех этапах подготовки и проведения концертов.",
    features: [
      "Планирование гастролей",
      "Работа с райдерами",
      "Логистика и транспорт",
      "Размещение и комфорт артистов",
    ],
  },
  {
    icon: TrendingUp,
    title: "Продвижение артистов",
    description:
      "Комплексное продвижение музыкантов в медиапространстве и на концертном рынке.",
    features: [
      "PR и медиа-стратегия",
      "Работа со СМИ",
      "Социальные сети",
      "Брендинг и позиционирование",
    ],
  },
  {
    icon: MapPin,
    title: "Гастрольные туры",
    description:
      "Организация и проведение масштабных гастрольных туров по России и зарубежу.",
    features: [
      "Маршрутизация туров",
      "Бронирование площадок",
      "Визовая поддержка",
      "Финансовое планирование",
    ],
  },
  {
    icon: Building,
    title: "Сотрудничество с площадками",
    description:
      "Установление партнерских отношений с концертными площадками и организация мероприятий.",
    features: [
      "Переговоры с площадками",
      "Контракты и соглашения",
      "Технические требования",
      "Совместные проекты",
    ],
  },
  {
    icon: Star,
    title: "Продюсерские услуги",
    description:
      "Профессиональное продюсирование музыкальных проектов и развитие карьеры артистов.",
    features: [
      "Карьерная стратегия",
      "Поиск спонсоров",
      "Музыкальное консультирование",
      "Развитие бренда артиста",
    ],
  },
];

const workProcess = [
  {
    step: "01",
    title: "Консультация",
    description: "Обсуждение целей, пожеланий и возможностей вашего проекта",
  },
  {
    step: "02",
    title: "Планирование",
    description: "Разработка детального плана и стратегии реализации",
  },
  {
    step: "03",
    title: "Реализация",
    description: "Профессиональное исполнение всех этапов проекта",
  },
  {
    step: "04",
    title: "Результат",
    description: "Успешное мероприятие и довольные участники",
  },
];

export function Services() {
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
            <h1 className="text-4xl md:text-6xl font-bold">Услуги</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl"
          >
            Полный спектр услуг для организации концертов и развития музыкальной
            карьеры артистов
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MetroTile key={index} delay={index * 0.1} className="h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-primary text-primary-foreground p-4 inline-flex items-center justify-center w-16 h-16 mb-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary mt-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MetroTile>
            );
          })}
        </div>
      </section>

      {/* Work Process */}
      <section className="bg-secondary/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Процесс работы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((process, index) => (
              <MetroTile key={index} delay={index * 0.1} className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </MetroTile>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Почему выбирают меня
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MetroTile>
            <div className="flex items-start gap-4">
              <Users className="text-primary shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2">Опыт и экспертиза</h3>
                <p className="text-muted-foreground">
                  Более 15 лет успешной работы в музыкальной индустрии. Организовано
                  более 500 концертов различного масштаба.
                </p>
              </div>
            </div>
          </MetroTile>

          <MetroTile>
            <div className="flex items-start gap-4">
              <Star className="text-primary shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2">Профессиональная команда</h3>
                <p className="text-muted-foreground">
                  Работаю с проверенными специалистами во всех областях — от
                  техников до PR-менеджеров.
                </p>
              </div>
            </div>
          </MetroTile>

          <MetroTile>
            <div className="flex items-start gap-4">
              <Building className="text-primary shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2">Партнерства</h3>
                <p className="text-muted-foreground">
                  Установлены долгосрочные отношения со всеми ведущими концертными
                  площадками России.
                </p>
              </div>
            </div>
          </MetroTile>

          <MetroTile>
            <div className="flex items-start gap-4">
              <TrendingUp className="text-primary shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2">Гарантия результата</h3>
                <p className="text-muted-foreground">
                  Берусь только за те проекты, в успехе которых уверен. Ваш успех —
                  моя репутация.
                </p>
              </div>
            </div>
          </MetroTile>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать работу?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Свяжитесь со мной, чтобы обсудить ваш проект. Я помогу воплотить
            ваши идеи в жизнь.
          </p>
          <a
            href="/contact"
            className="inline-block bg-background text-foreground px-8 py-4 hover:bg-background/90 transition-colors"
          >
            Связаться со мной
          </a>
        </div>
      </section>
    </div>
  );
}
