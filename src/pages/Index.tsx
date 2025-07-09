import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const portfolioItems = [
    {
      id: 1,
      image: "/img/eac6b7f8-89db-4767-a1ea-abac997712c0.jpg",
      title: "Реализм в черно-сером",
      category: "Реализм",
      artist: "Мастер Анна",
    },
    {
      id: 2,
      image: "/img/62864a3f-f6d2-4224-a08e-24c78611f8ad.jpg",
      title: "Традиционный стиль",
      category: "Олдскул",
      artist: "Мастер Дмитрий",
    },
    {
      id: 3,
      image: "/img/5ab99af1-4d8a-4aae-b5c0-32dacc66d398.jpg",
      title: "Минимализм",
      category: "Лайнворк",
      artist: "Мастер Елена",
    },
  ];

  const masters = [
    {
      id: 1,
      name: "Анна Волкова",
      specialty: "Реализм, Портреты",
      experience: "8 лет",
      avatar: "/placeholder.svg",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Дмитрий Смирнов",
      specialty: "Олдскул, Традиционные",
      experience: "12 лет",
      avatar: "/placeholder.svg",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Елена Козлова",
      specialty: "Минимализм, Лайнворк",
      experience: "6 лет",
      avatar: "/placeholder.svg",
      rating: 4.9,
    },
  ];

  const services = [
    {
      category: "Маленькие тату",
      items: [
        { name: "До 5 см", price: "3000-5000" },
        { name: "5-10 см", price: "5000-8000" },
        { name: "10-15 см", price: "8000-12000" },
      ],
    },
    {
      category: "Средние тату",
      items: [
        { name: "15-20 см", price: "12000-18000" },
        { name: "20-25 см", price: "18000-25000" },
        { name: "Половина рукава", price: "25000-35000" },
      ],
    },
    {
      category: "Большие тату",
      items: [
        { name: "Полный рукав", price: "35000-50000" },
        { name: "Спина", price: "40000-60000" },
        { name: "Грудь", price: "30000-45000" },
      ],
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Михаил К.",
      rating: 5,
      text: "Потрясающая работа! Анна создала именно то, что я хотел. Профессионализм на высшем уровне.",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Светлана П.",
      rating: 5,
      text: "Дмитрий - настоящий мастер! Тату получилось еще лучше, чем я представляла. Рекомендую всем!",
      date: "2024-01-10",
    },
    {
      id: 3,
      name: "Алексей М.",
      rating: 4,
      text: "Отличная студия, чисто, стерильно, мастера профессионалы. Обязательно вернусь за новой работой.",
      date: "2024-01-05",
    },
  ];

  return (
    <div className="min-h-screen bg-tattoo-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-tattoo-darker/95 backdrop-blur-sm border-b border-tattoo-gray/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-tattoo-red" size={24} />
              <span className="text-2xl font-bold text-white">TaToTori</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Главная" },
                { id: "about", label: "О студии" },
                { id: "portfolio", label: "Портфолио" },
                { id: "masters", label: "Мастера" },
                { id: "prices", label: "Цены" },
                { id: "reviews", label: "Отзывы" },
                { id: "contacts", label: "Контакты" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-tattoo-red ${
                    activeSection === item.id
                      ? "text-tattoo-red"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button size="sm" className="bg-tattoo-red hover:bg-tattoo-red/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-tattoo-darker via-tattoo-dark to-tattoo-gray opacity-90"></div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="text-tattoo-red">TaTo</span>Tori
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Профессиональная тату-студия в самом сердце города. Создаем
            уникальные произведения искусства на вашей коже.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-tattoo-red hover:bg-tattoo-red/90 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection("portfolio")}
            >
              <Icon name="Image" className="mr-2" size={20} />
              Посмотреть работы
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-tattoo-red text-tattoo-red hover:bg-tattoo-red hover:text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection("contacts")}
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Записаться на сеанс
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-tattoo-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              О нашей студии
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              TaToTori - это место, где искусство встречается с
              профессионализмом. Мы создаем уникальные тату-работы с 2015 года.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-tattoo-dark border-tattoo-gray/20 hover:border-tattoo-red/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Icon name="Award" className="text-tattoo-red mb-4" size={32} />
                <CardTitle className="text-white">Высокое качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Используем только профессиональное оборудование и качественные
                  материалы от ведущих мировых брендов.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-tattoo-dark border-tattoo-gray/20 hover:border-tattoo-red/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Icon
                  name="Shield"
                  className="text-tattoo-red mb-4"
                  size={32}
                />
                <CardTitle className="text-white">Стерильность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Соблюдаем все санитарные нормы и стандарты безопасности.
                  Одноразовые материалы и стерилизация оборудования.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-tattoo-dark border-tattoo-gray/20 hover:border-tattoo-red/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Icon name="Users" className="text-tattoo-red mb-4" size={32} />
                <CardTitle className="text-white">Опытные мастера</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Наша команда состоит из профессиональных тату-мастеров с
                  многолетним опытом работы в различных стилях.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-tattoo-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Наши работы</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Каждая работа - это произведение искусства, созданное с любовью и
              вниманием к деталям.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={item.id}
                className="bg-tattoo-darker border-tattoo-gray/20 overflow-hidden hover:border-tattoo-red/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="border-tattoo-red text-tattoo-red"
                    >
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-400">{item.artist}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-tattoo-red text-tattoo-red hover:bg-tattoo-red hover:text-white"
            >
              <Icon name="Plus" className="mr-2" size={20} />
              Показать больше работ
            </Button>
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section id="masters" className="py-20 bg-tattoo-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Наши мастера</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Познакомьтесь с нашей командой профессиональных тату-мастеров.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masters.map((master, index) => (
              <Card
                key={master.id}
                className="bg-tattoo-dark border-tattoo-gray/20 hover:border-tattoo-red/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={master.avatar} alt={master.name} />
                    <AvatarFallback className="bg-tattoo-red text-white text-xl">
                      {master.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-white">{master.name}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {master.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Icon
                      name="Star"
                      className="text-yellow-400 mr-1"
                      size={16}
                    />
                    <span className="text-white font-semibold">
                      {master.rating}
                    </span>
                  </div>
                  <p className="text-gray-400">Опыт: {master.experience}</p>
                  <Button
                    className="mt-4 bg-tattoo-red hover:bg-tattoo-red/90 w-full"
                    size="sm"
                  >
                    Записаться к мастеру
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-tattoo-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Цены на услуги
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Прозрачные цены на все виды тату-услуг. Финальная стоимость
              зависит от сложности работы.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.category}
                className="bg-tattoo-darker border-tattoo-gray/20 hover:border-tattoo-red/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-white text-center">
                    {service.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-300">{item.name}</span>
                        <span className="text-tattoo-red font-semibold">
                          {item.price} ₽
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-tattoo-darker border-tattoo-gray/20 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  <Icon
                    name="Info"
                    className="text-tattoo-red mr-2"
                    size={24}
                  />
                  Важная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">
                  Цены указаны ориентировочно. Точная стоимость определяется на
                  консультации с мастером и зависит от сложности, детализации и
                  расположения тату.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-tattoo-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Что говорят о нас наши клиенты.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className="bg-tattoo-dark border-tattoo-gray/20 hover:border-tattoo-red/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{review.name}</CardTitle>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="text-yellow-400"
                          size={16}
                        />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-gray-400">
                    {review.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-tattoo-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Контакты</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Свяжитесь с нами для записи на консультацию или сеанс.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-tattoo-darker border-tattoo-gray/20">
              <CardHeader>
                <CardTitle className="text-white">
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    className="text-tattoo-red mr-3"
                    size={20}
                  />
                  <div>
                    <p className="text-white font-semibold">Адрес</p>
                    <p className="text-gray-300">г. Москва, ул. Арбат, 25</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    className="text-tattoo-red mr-3"
                    size={20}
                  />
                  <div>
                    <p className="text-white font-semibold">Телефон</p>
                    <p className="text-gray-300">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    className="text-tattoo-red mr-3"
                    size={20}
                  />
                  <div>
                    <p className="text-white font-semibold">Время работы</p>
                    <p className="text-gray-300">Пн-Вс: 10:00 - 22:00</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="Mail"
                    className="text-tattoo-red mr-3"
                    size={20}
                  />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">info@tatotori.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-tattoo-darker border-tattoo-gray/20">
              <CardHeader>
                <CardTitle className="text-white">
                  Записаться на сеанс
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-tattoo-dark border border-tattoo-gray/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-tattoo-red"
                      placeholder="Введите ваше имя"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 bg-tattoo-dark border border-tattoo-gray/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-tattoo-red"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Описание тату
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 bg-tattoo-dark border border-tattoo-gray/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-tattoo-red"
                      placeholder="Расскажите о желаемом тату..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-tattoo-red hover:bg-tattoo-red/90"
                    size="lg"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tattoo-darker border-t border-tattoo-gray/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-tattoo-red" size={24} />
                <span className="text-2xl font-bold text-white">TaToTori</span>
              </div>
              <p className="text-gray-300">
                Профессиональная тату-студия с многолетним опытом работы.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Художественные тату</li>
                <li>Исправление старых тату</li>
                <li>Перманентный макияж</li>
                <li>Консультации</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-300">
                <li>О студии</li>
                <li>Наши мастера</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>г. Москва, ул. Арбат, 25</li>
                <li>+7 (999) 123-45-67</li>
                <li>info@tatotori.ru</li>
                <li>Пн-Вс: 10:00 - 22:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-tattoo-gray/20 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 TaToTori. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
