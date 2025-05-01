
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with blood dripping effect */}
      <header className="bg-black py-6 border-b border-red-900">
        <div className="container mx-auto px-4">
          <h1 className="horror-title text-5xl md:text-6xl text-red-600 text-center mb-2">
            Хоррис<span className="text-white">Lady</span>
          </h1>
          <p className="text-gray-400 text-center italic">Коллекция жутких историй и персонажей</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Warning Banner */}
        <div className="bg-red-900/30 border border-red-700 p-4 rounded-md mb-8">
          <div className="flex items-start">
            <Icon name="AlertTriangle" className="text-red-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-200">
              <span className="font-bold">ВНИМАНИЕ:</span> Создание новых персонажей на этом сайте возможно 
              <span className="font-bold text-red-400"> только с разрешения администрации</span>. 
              Несанкционированные материалы будут немедленно удалены.
            </p>
          </div>
        </div>

        {/* Featured Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-200 flex items-center">
            <Icon name="Skull" className="mr-2 text-red-500" />
            Популярная история
          </h2>
          
          <Card className="creepy-card gore-border bg-gray-900 text-gray-200">
            <CardHeader>
              <CardTitle className="text-red-500">Тень за зеркалом</CardTitle>
              <CardDescription className="text-gray-400">Автор: МрачныйХронист • 23 апреля 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Я всегда чувствовал, что в моем зеркале живет что-то странное. Иногда, краем глаза, я замечаю движение, 
                которое не соответствует моему. Это происходит уже несколько месяцев, но вчера вечером всё изменилось...
              </p>
              <p className="text-gray-400 italic">
                "Не смотри в зеркало в полночь. Не смотри в зеркало в полночь. Не смотри..."
              </p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-red-700 hover:bg-red-900/30">
                    Читать полностью
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-gray-200 border-red-900">
                  <DialogHeader>
                    <DialogTitle className="text-red-500">Тень за зеркалом</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Автор: МрачныйХронист • 23 апреля 2025
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <p>
                      Я всегда чувствовал, что в моем зеркале живет что-то странное. Иногда, краем глаза, я замечаю движение, 
                      которое не соответствует моему. Это происходит уже несколько месяцев, но вчера вечером всё изменилось.
                    </p>
                    <p>
                      Я возвращался домой поздно. На часах было почти 23:50. Усталый, я зашел в ванную, чтобы умыться перед сном.
                      Когда я посмотрел в зеркало, моё отражение улыбнулось мне. Я не улыбался.
                    </p>
                    <p>
                      Я отпрянул от зеркала, но любопытство взяло верх. Я снова приблизился, и отражение повторило мои движения, 
                      но его глаза... его глаза были чернее ночи.
                    </p>
                    <p className="text-red-400 font-semibold">
                      "Не смотри в зеркало в полночь. Не смотри в зеркало в полночь. Не смотри..."
                    </p>
                    <p>
                      [Продолжение истории скоро...]
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-200 flex items-center">
            <Icon name="BookOpen" className="mr-2 text-red-500" />
            Категории историй
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="creepy-card bg-gray-900 text-gray-200 hover:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-red-500">Городские легенды</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">Истории о таинственных существах и явлениях в городской среде.</p>
              </CardContent>
            </Card>
            
            <Card className="creepy-card bg-gray-900 text-gray-200 hover:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-red-500">Паранормальное</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">Встречи с призраками, демонами и необъяснимыми явлениями.</p>
              </CardContent>
            </Card>
            
            <Card className="creepy-card bg-gray-900 text-gray-200 hover:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-red-500">Психологический ужас</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">Истории, играющие на самых глубоких человеческих страхах.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-6 border-t border-red-900">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 ХоррисLady • Все права защищены</p>
          <p className="mt-2">Создание персонажей только с разрешения администрации сайта</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
