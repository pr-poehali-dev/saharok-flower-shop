import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-montserrat font-bold text-black">САХАРОК</h1>
              <p className="text-sm font-opensans text-gray-600 mt-1">Цветочное Ателье</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="font-opensans text-black hover:text-gray-600 transition-colors">Главная</a>
              <a href="#bouquets" className="font-opensans text-black hover:text-gray-600 transition-colors">Букеты</a>
              <a href="#events" className="font-opensans text-black hover:text-gray-600 transition-colors">Мероприятия</a>
              <a href="#gallery" className="font-opensans text-black hover:text-gray-600 transition-colors">Галерея</a>
              <a href="#contacts" className="font-opensans text-black hover:text-gray-600 transition-colors">Контакты</a>
            </nav>
            <div className="md:hidden">
              <Icon name="Menu" size={24} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-montserrat font-light text-black leading-tight mb-6">
                САХАРОК - это больше, чем просто цветы
              </h2>
              <p className="text-xl font-opensans text-gray-600 mb-8 leading-relaxed">
                Это искусство создавать настроение. Мы верим, что каждый букет – это уникальная история, рассказанная на языке цветов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-opensans px-8 py-4">
                  Заказать букет
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-gray-50 font-opensans px-8 py-4">
                  Наши работы
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <img 
                  src="/img/c80cb7b7-0c59-4923-b744-252c04612a7b.jpg" 
                  alt="Элегантный букет цветов" 
                  className="w-full max-w-md h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-light text-black mb-4">Наши услуги</h3>
            <p className="text-xl font-opensans text-gray-600">Индивидуальный подход. Безупречный стиль. Искренняя любовь к своему делу.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bouquets Service */}
            <Card id="bouquets" className="bg-white border-0 shadow-lg hover-scale transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Heart" size={48} className="mx-auto text-black" />
                </div>
                <h4 className="text-2xl font-montserrat font-medium text-black mb-4">Букеты на заказ</h4>
                <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
                  Создаем букеты для любого повода: романтические признания, элегантные поздравления, изысканные комплименты.
                </p>
                <Button variant="outline" className="border-black text-black hover:bg-gray-50 font-opensans">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Events Service */}
            <Card id="events" className="bg-white border-0 shadow-lg hover-scale transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Calendar" size={48} className="mx-auto text-black" />
                </div>
                <h4 className="text-2xl font-montserrat font-medium text-black mb-4">Оформление мероприятий</h4>
                <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
                  Превращаем ваши события в незабываемые моменты. Флористическое оформление свадеб, корпоративов, частных вечеринок.
                </p>
                <Button variant="outline" className="border-black text-black hover:bg-gray-50 font-opensans">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Delivery Service */}
            <Card className="bg-white border-0 shadow-lg hover-scale transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Truck" size={48} className="mx-auto text-black" />
                </div>
                <h4 className="text-2xl font-montserrat font-medium text-black mb-4">Доставка по городу</h4>
                <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
                  Быстрая и бережная доставка цветов по всему городу. Ваши эмоции дойдут до адресата в идеальном виде.
                </p>
                <Button variant="outline" className="border-black text-black hover:bg-gray-50 font-opensans">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-light text-black mb-4">Галерея наших работ</h3>
            <p className="text-xl font-opensans text-gray-600">Каждый букет — произведение искусства</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer animate-fade-in">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img/c80cb7b7-0c59-4923-b744-252c04612a7b.jpg" 
                  alt="Минималистичный букет роз" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="font-opensans text-center text-gray-600 mt-4">Классические розы</p>
            </div>
            
            <div className="group cursor-pointer animate-fade-in">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img/c1c17401-aa10-406a-9719-2053a2a8f72e.jpg" 
                  alt="Свадебный букет" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="font-opensans text-center text-gray-600 mt-4">Свадебный букет</p>
            </div>
            
            <div className="group cursor-pointer animate-fade-in">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img/bc278030-68ac-4029-aa99-c89cc6456376.jpg" 
                  alt="Оформление мероприятия" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="font-opensans text-center text-gray-600 mt-4">Оформление события</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h3 className="text-4xl font-montserrat font-light mb-4">Специальное предложение!</h3>
            <p className="text-xl font-opensans mb-8">Скидка 10% на первый заказ</p>
            <div className="mb-8">
              <span className="inline-block bg-white text-black px-6 py-3 rounded-lg font-montserrat font-medium text-lg">
                Промокод: WELCOME
              </span>
            </div>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-opensans px-8 py-4">
              Воспользоваться предложением
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-light text-black mb-4">Почему выбирают САХАРОК</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <Icon name="Sparkles" size={48} className="mx-auto text-black mb-4" />
              <h4 className="text-lg font-montserrat font-medium text-black mb-2">Свежие цветы премиум-класса</h4>
              <p className="font-opensans text-gray-600 text-sm">Только лучшие цветы от проверенных поставщиков</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <Icon name="Palette" size={48} className="mx-auto text-black mb-4" />
              <h4 className="text-lg font-montserrat font-medium text-black mb-2">Индивидуальный дизайн</h4>
              <p className="font-opensans text-gray-600 text-sm">Каждый букет создается с учетом ваших пожеланий</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <Icon name="MessageCircle" size={48} className="mx-auto text-black mb-4" />
              <h4 className="text-lg font-montserrat font-medium text-black mb-2">Бесплатная консультация</h4>
              <p className="font-opensans text-gray-600 text-sm">Флорист поможет подобрать идеальный вариант</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <Icon name="Truck" size={48} className="mx-auto text-black mb-4" />
              <h4 className="text-lg font-montserrat font-medium text-black mb-2">Доставка по городу</h4>
              <p className="font-opensans text-gray-600 text-sm">Быстрая и бережная доставка в любую точку города</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-montserrat font-light text-black mb-8">Свяжитесь с нами</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="text-black mr-4" />
                  <span className="font-opensans text-lg text-gray-600">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={24} className="text-black mr-4" />
                  <span className="font-opensans text-lg text-gray-600">info@saharok-flowers.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={24} className="text-black mr-4" />
                  <span className="font-opensans text-lg text-gray-600">ул. Цветочная, 15, Москва</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={24} className="text-black mr-4" />
                  <span className="font-opensans text-lg text-gray-600">Ежедневно с 9:00 до 21:00</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-opensans px-8 py-4">
                  Заказать звонок
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-2xl font-montserrat font-medium text-black mb-6">Создайте свой идеальный букет</h4>
                <p className="font-opensans text-gray-600 mb-6">
                  Оставьте заявку, и наш флорист свяжется с вами для обсуждения деталей
                </p>
                
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full p-4 border border-gray-300 rounded-lg font-opensans focus:outline-none focus:border-black"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full p-4 border border-gray-300 rounded-lg font-opensans focus:outline-none focus:border-black"
                  />
                  <textarea 
                    placeholder="Опишите желаемый букет" 
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg font-opensans focus:outline-none focus:border-black resize-none"
                  ></textarea>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-opensans py-4">
                    Отправить заявку
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-2xl font-montserrat font-bold mb-4">САХАРОК</h5>
              <p className="font-opensans text-gray-400">Цветочное ателье с душой</p>
            </div>
            
            <div>
              <h6 className="font-montserrat font-medium mb-4">Услуги</h6>
              <ul className="space-y-2 font-opensans text-gray-400">
                <li>Букеты на заказ</li>
                <li>Оформление свадеб</li>
                <li>Корпоративные мероприятия</li>
                <li>Доставка цветов</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-montserrat font-medium mb-4">Социальные сети</h6>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Facebook" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="MessageCircle" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="font-opensans text-gray-400">&copy; 2024 САХАРОК. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;