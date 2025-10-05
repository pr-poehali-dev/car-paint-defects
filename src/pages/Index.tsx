import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const defectTypes = [
    {
      icon: 'Eraser',
      title: 'Царапины',
      description: 'Линейные повреждения лакокрасочного покрытия различной глубины',
      causes: 'Механическое воздействие, ветки, камни, неправильная мойка',
      solutions: 'Полировка, подкраска, перекраска элемента'
    },
    {
      icon: 'Droplet',
      title: 'Сколы',
      description: 'Точечные повреждения с отслоением покрытия до металла',
      causes: 'Удары камней, гравия, града',
      solutions: 'Локальная подкраска, защитная пленка'
    },
    {
      icon: 'Layers',
      title: 'Потёки',
      description: 'Неравномерное распределение краски с образованием наплывов',
      causes: 'Избыток краски, неправильная техника нанесения',
      solutions: 'Шлифовка и полировка, перекраска'
    },
    {
      icon: 'CircleDot',
      title: 'Апельсиновая корка',
      description: 'Шероховатая текстура поверхности, напоминающая кожуру апельсина',
      causes: 'Неправильная вязкость краски, низкое давление распыления',
      solutions: 'Мокрая шлифовка и полировка'
    },
    {
      icon: 'Wind',
      title: 'Кратеры',
      description: 'Мелкие круглые углубления в лакокрасочном покрытии',
      causes: 'Попадание силикона, масла, пыли при окраске',
      solutions: 'Шлифовка дефектной области, перекраска'
    },
    {
      icon: 'Sparkles',
      title: 'Вкрапления',
      description: 'Включения пыли, мусора или других частиц в краску',
      causes: 'Недостаточная очистка поверхности, загрязнение камеры',
      solutions: 'Локальная полировка, шлифовка'
    }
  ];

  const causes = [
    {
      category: 'Подготовка поверхности',
      items: [
        'Недостаточная очистка и обезжиривание',
        'Некачественная шлифовка базовой поверхности',
        'Остатки старого покрытия',
        'Наличие ржавчины или коррозии'
      ]
    },
    {
      category: 'Процесс окраски',
      items: [
        'Неправильная вязкость материалов',
        'Нарушение температурного режима',
        'Некорректное давление распыления',
        'Неправильное расстояние до поверхности'
      ]
    },
    {
      category: 'Условия окружающей среды',
      items: [
        'Высокая влажность воздуха',
        'Низкая или высокая температура',
        'Сквозняки и пыль',
        'Прямые солнечные лучи'
      ]
    },
    {
      category: 'Материалы',
      items: [
        'Некачественная краска или лак',
        'Несовместимость материалов',
        'Истекший срок годности',
        'Неправильное хранение материалов'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Полировка',
      difficulty: 'Низкая',
      description: 'Устранение мелких царапин, потускнения и небольших дефектов',
      steps: [
        'Очистка и обезжиривание поверхности',
        'Абразивная полировка',
        'Финишная полировка',
        'Нанесение защитного состава'
      ]
    },
    {
      title: 'Локальная покраска',
      difficulty: 'Средняя',
      description: 'Устранение сколов и локальных повреждений',
      steps: [
        'Очистка и шлифовка поврежденного участка',
        'Обезжиривание и грунтовка',
        'Подбор цвета и нанесение краски',
        'Нанесение лака и полировка переходов'
      ]
    },
    {
      title: 'Полная перекраска элемента',
      difficulty: 'Высокая',
      description: 'Устранение серьезных дефектов на всем элементе',
      steps: [
        'Демонтаж элемента (при необходимости)',
        'Удаление старого покрытия',
        'Шпатлевка, грунтовка',
        'Окраска и лакировка всего элемента'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Дефекты ЛКП</h1>
            <div className="flex gap-2">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="rounded-full"
              >
                Главная
              </Button>
              <Button
                variant={activeSection === 'defects' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('defects')}
                className="rounded-full"
              >
                Типы дефектов
              </Button>
              <Button
                variant={activeSection === 'causes' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('causes')}
                className="rounded-full"
              >
                Причины
              </Button>
              <Button
                variant={activeSection === 'solutions' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('solutions')}
                className="rounded-full"
              >
                Устранение
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-5xl font-bold text-primary">
                Дефекты лакокрасочных покрытий
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                Полное руководство по выявлению, анализу и устранению дефектов
                лакокрасочного покрытия кузова автомобиля
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('defects')}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <Icon name="AlertCircle" className="text-accent-foreground" size={24} />
                  </div>
                  <CardTitle>6 типов дефектов</CardTitle>
                  <CardDescription>
                    Подробное описание основных видов повреждений покрытия
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('causes')}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    <Icon name="Search" className="text-secondary-foreground" size={24} />
                  </div>
                  <CardTitle>Причины возникновения</CardTitle>
                  <CardDescription>
                    Факторы, влияющие на появление дефектов
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('solutions')}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <Icon name="Wrench" className="text-primary-foreground" size={24} />
                  </div>
                  <CardTitle>Методы устранения</CardTitle>
                  <CardDescription>
                    Практические решения для исправления дефектов
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-accent to-secondary text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white">О лакокрасочных покрытиях</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-white/90">
                  Лакокрасочное покрытие (ЛКП) автомобиля выполняет не только эстетическую, 
                  но и защитную функцию. Качественное покрытие защищает металл кузова от коррозии, 
                  механических повреждений и воздействия окружающей среды.
                </p>
                <p className="text-white/90">
                  Дефекты ЛКП могут возникнуть на любом этапе: от заводской окраски до эксплуатации 
                  автомобиля. Понимание природы дефектов помогает правильно выбрать метод их устранения 
                  и предотвратить появление в будущем.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'defects' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="mb-4 text-4xl font-bold text-primary">Типы дефектов ЛКП</h2>
              <p className="text-lg text-muted-foreground">
                Основные виды дефектов лакокрасочного покрытия и их характеристики
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {defectTypes.map((defect, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                      <Icon name={defect.icon} className="text-accent" size={32} />
                    </div>
                    <CardTitle className="text-xl">{defect.title}</CardTitle>
                    <CardDescription>{defect.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="mb-1 text-sm font-semibold text-primary">Причины:</p>
                        <p className="text-sm text-muted-foreground">{defect.causes}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-semibold text-primary">Решение:</p>
                        <p className="text-sm text-muted-foreground">{defect.solutions}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'causes' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="mb-4 text-4xl font-bold text-primary">Причины возникновения дефектов</h2>
              <p className="text-lg text-muted-foreground">
                Факторы, влияющие на качество лакокрасочного покрытия
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {causes.map((group, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="AlertTriangle" className="text-accent" size={20} />
                      {group.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {group.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <Icon name="ChevronRight" className="mt-0.5 text-primary flex-shrink-0" size={16} />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" className="text-accent" size={24} />
                  Профилактика
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Большинство дефектов можно предотвратить, соблюдая технологию окраски: 
                  тщательно готовить поверхность, использовать качественные материалы, 
                  поддерживать правильную температуру и влажность в покрасочной камере, 
                  а также регулярно обслуживать покрасочное оборудование.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'solutions' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="mb-4 text-4xl font-bold text-primary">Методы устранения дефектов</h2>
              <p className="text-lg text-muted-foreground">
                Практические решения для восстановления качества покрытия
              </p>
            </div>

            <Tabs defaultValue="polish" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="polish">Полировка</TabsTrigger>
                <TabsTrigger value="local">Локальная покраска</TabsTrigger>
                <TabsTrigger value="full">Полная перекраска</TabsTrigger>
              </TabsList>
              
              {solutions.map((solution, index) => (
                <TabsContent 
                  key={index} 
                  value={index === 0 ? 'polish' : index === 1 ? 'local' : 'full'}
                  className="mt-6"
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{solution.title}</CardTitle>
                        <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                          solution.difficulty === 'Низкая' 
                            ? 'bg-green-100 text-green-700' 
                            : solution.difficulty === 'Средняя'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {solution.difficulty}
                        </span>
                      </div>
                      <CardDescription className="text-base">{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="mb-4 font-semibold text-primary">Этапы работы:</h4>
                      <ol className="space-y-3">
                        {solution.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex gap-3">
                            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                              {stepIndex + 1}
                            </span>
                            <span className="text-muted-foreground">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                    Рекомендации
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 text-primary flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">Выбирайте метод в зависимости от степени повреждения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 text-primary flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">Используйте качественные материалы и инструменты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 text-primary flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">Соблюдайте технологию и температурный режим</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 text-primary flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">При серьезных дефектах обращайтесь к профессионалам</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Shield" className="text-accent" size={24} />
                    Защита покрытия
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" className="mt-0.5 text-accent flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">Регулярная мойка и полировка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" className="mt-0.5 text-accent flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">Нанесение защитных составов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" className="mt-0.5 text-accent flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">Защита от ультрафиолета и реагентов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" className="mt-0.5 text-accent flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">Своевременное устранение мелких повреждений</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-16 border-t bg-card">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Дефекты ЛКП. Информационный портал о лакокрасочных покрытиях автомобилей</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
