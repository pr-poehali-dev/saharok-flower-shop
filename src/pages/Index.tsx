import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-montserrat font-bold text-foreground">САХАРОК</h1>
              <p className="text-sm font-opensans text-muted-foreground mt-1">Цветочное Ателье</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="font-opensans text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#bouquets" className="font-opensans text-foreground hover:text-primary transition-colors">Букеты</a>
              <a href="#events" className="font-opensans text-foreground hover:text-primary transition-colors">Мероприятия</a>
              <a href="#gallery" className="font-opensans text-foreground hover:text-primary transition-colors">Галерея</a>
              <a href="#contacts" className="font-opensans text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="md:hidden">
              <Icon name="Menu" size={24} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-montserrat font-light text-foreground leading-tight mb-6">
                САХАРОК - это больше, чем просто цветы
              </h2>
              <p className="text-xl font-opensans text-muted-foreground mb-8 leading-relaxed">
                Это искусство создавать настроение. Мы верим, что каждый букет – это уникальная история, рассказанная на языке цветов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-opensans px-8 py-4">
                  Заказать букет
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 font-opensans px-8 py-4">
                  Наши работы
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <img 
                  src="/img/d81976e9-c047-418a-9e11-4b398ecfd7c8.jpg" 
                  alt="Яркий букет цветов" 
                  className="w-full max-w-md h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-light text-foreground mb-4">Наши услуги</h3>
            <p className="text-xl font-opensans text-muted-foreground">Индивидуальный подход. Безупречный стиль. Искренняя любовь к своему делу.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bouquets Service */}
            <Card id="bouquets" className="bg-card border-0 shadow-lg hover-scale transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Heart" size={48} className="mx-auto text-primary" />
                </div>
                <h4 className="text-2xl font-montserrat font-medium text-card-foreground mb-4">Букеты на заказ</h4>
                <p className="font-opensans text-muted-foreground mb-6 leading-relaxed">
                  Создаем букеты для любого повода: романтические признания, элегантные поздравления, изысканные комплименты.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-opensans">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Events Service */}
            <Card id="events" className="bg-card border-0 shadow-lg hover-scale transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Calendar" size={48} className="mx-auto text-accent" />
                </div>
                <h4 className="text-2xl font-montserrat font-medium text-card-foreground mb-4">Оформление мероприятий</h4>
                <p className="font-opensans text-muted-foreground mb-6 leading-relaxed">
                  Превращаем ваши события в незабываемые моменты. Флористическое оформление свадеб, корпоративов, частных вечеринок.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-opensans">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Delivery Service */}
            <Card className="bg-card border-0 shadow-lg hover-scale transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Truck" size={48} className="mx-auto text-secondary-foreground" />
                </div>
                <h4 className="text-2xl font-montserrat font-medium text-card-foreground mb-4">Доставка по городу</h4>
                <p className="font-opensans text-muted-foreground mb-6 leading-relaxed">
                  Быстрая и бережная доставка цветов по всему городу. Ваши эмоции дойдут до адресата в идеальном виде.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-opensans">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-light text-foreground mb-4">Галерея наших работ</h3>
            <p className="text-xl font-opensans text-muted-foreground">Каждый букет — произведение искусства</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer animate-fade-in">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img/d81976e9-c047-418a-9e11-4b398ecfd7c8.jpg" 
                  alt="Яркий весенний букет" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="font-opensans text-center text-muted-foreground mt-4">Яркие весенние цветы</p>
            </div>
            
            <div className="group cursor-pointer animate-fade-in">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img/373bd96e-77d9-4df0-950b-a0241da1aed4.jpg" 
                  alt="Нежный свадебный букет" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="font-opensans text-center text-muted-foreground mt-4">Свадебный букет</p>
            </div>
            
            <div className="group cursor-pointer animate-fade-in">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img/ff73152d-6b2c-40f7-a7b4-80fc75c34fe7.jpg" 
                  alt="Праздничное оформление" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="font-opensans text-center text-muted-foreground mt-4">Оформление праздника</p>
            </div>
            
            <div className="group cursor-pointer animate-fade-in">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img/de0a338a-3425-485a-9e1a-e1634ee05015.jpg" 
                  alt="Весенние тюльпаны" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="font-opensans text-center text-muted-foreground mt-4">Весенние тюльпаны</p>
            </div>
            
            <div className="group cursor-pointer animate-fade-in">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img/f0a89d45-0b5a-414d-b959-e8d9df28f442.jpg" 
                  alt="Люксовые орхидеи" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="font-opensans text-center text-muted-foreground mt-4">Экзотические орхидеи</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h3 className="text-4xl font-montserrat font-light mb-4">Специальное предложение!</h3>
            <p className="text-xl font-opensans mb-8">Скидка 10% на первый заказ</p>
            <div className="mb-8">
              <span className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-lg font-montserrat font-medium text-lg">
                Промокод: WELCOME
              </span>
            </div>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-opensans px-8 py-4">
              Воспользоваться предложением
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-light text-foreground mb-4">Почему выбирают САХАРОК</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <Icon name="Sparkles" size={48} className="mx-auto text-primary mb-4" />
              <h4 className="text-lg font-montserrat font-medium text-foreground mb-2">Свежие цветы премиум-класса</h4>
              <p className="font-opensans text-muted-foreground text-sm">Только лучшие цветы от проверенных поставщиков</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <Icon name="Palette" size={48} className="mx-auto text-accent mb-4" />
              <h4 className="text-lg font-montserrat font-medium text-foreground mb-2">Индивидуальный дизайн</h4>
              <p className="font-opensans text-muted-foreground text-sm">Каждый букет создается с учетом ваших пожеланий</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <Icon name="MessageCircle" size={48} className="mx-auto text-secondary-foreground mb-4" />
              <h4 className="text-lg font-montserrat font-medium text-foreground mb-2">Бесплатная консультация</h4>
              <p className="font-opensans text-muted-foreground text-sm">Флорист поможет подобрать идеальный вариант</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <Icon name="Truck" size={48} className="mx-auto text-primary mb-4" />
              <h4 className="text-lg font-montserrat font-medium text-foreground mb-2">Доставка по городу</h4>
              <p className="font-opensans text-muted-foreground text-sm">Быстрая и бережная доставка в любую точку города</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-montserrat font-light text-foreground mb-8">Свяжитесь с нами</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="text-primary mr-4" />
                  <span className="font-opensans text-lg text-muted-foreground">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={24} className="text-primary mr-4" />
                  <span className="font-opensans text-lg text-muted-foreground">info@saharok-flowers.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={24} className="text-primary mr-4" />
                  <span className="font-opensans text-lg text-muted-foreground">ул. Цветочная, 15, Москва</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={24} className="text-primary mr-4" />
                  <span className="font-opensans text-lg text-muted-foreground">Ежедневно с 9:00 до 21:00</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-opensans px-8 py-4">
                  Заказать звонок
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="bg-muted p-8 rounded-lg">
                <h4 className="text-2xl font-montserrat font-medium text-foreground mb-6">Создайте свой идеальный букет</h4>
                <p className="font-opensans text-muted-foreground mb-6">
                  Оставьте заявку, и наш флорист свяжется с вами для обсуждения деталей
                </p>
                
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full p-4 border border-input rounded-lg font-opensans focus:outline-none focus:border-primary bg-background"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full p-4 border border-input rounded-lg font-opensans focus:outline-none focus:border-primary bg-background"
                  />
                  <textarea 
                    placeholder="Опишите желаемый букет" 
                    rows={4}
                    className="w-full p-4 border border-input rounded-lg font-opensans focus:outline-none focus:border-primary resize-none bg-background"
                  ></textarea>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-opensans py-4">
                    Отправить заявку
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-2xl font-montserrat font-bold mb-4">САХАРОК</h5>
              <p className="font-opensans text-muted-foreground">Цветочное ателье с душой</p>
            </div>
            
            <div>
              <h6 className="font-montserrat font-medium mb-4">Услуги</h6>
              <ul className="space-y-2 font-opensans text-muted-foreground">
                <li>Букеты на заказ</li>
                <li>Оформление свадеб</li>
                <li>Корпоративные мероприятия</li>
                <li>Доставка цветов</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-montserrat font-medium mb-4">Социальные сети</h6>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-background cursor-pointer transition-colors" />
                <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-background cursor-pointer transition-colors" />
                <Icon name="MessageCircle" size={24} className="text-muted-foreground hover:text-background cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center">
            <p className="font-opensans text-muted-foreground">&copy; 2024 САХАРОК. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;