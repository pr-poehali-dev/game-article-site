import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            ИГРОЗНАЙ
            <span className="text-purple-400"> - игровая вселенная</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Статьи, новости и эксклюзивные материалы о мире видеоигр.
            Оставайтесь в курсе всех событий игровой индустрии.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/articles"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <Icon name="BookOpen" size={20} />
              <span>Читать статьи</span>
            </Link>
            <Link
              to="/news"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <Icon name="Newspaper" size={20} />
              <span>Свежие новости</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-slate-800 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Newspaper" size={24} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Свежие новости</h3>
              <p className="text-slate-400">
                Актуальные события игровой индустрии
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-800 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Users" size={24} className="text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Сообщество</h3>
              <p className="text-slate-400">Обсуждения и мнения игроков</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
