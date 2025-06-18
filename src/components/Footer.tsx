import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Gamepad2" size={24} className="text-purple-400" />
              <span className="text-xl font-bold text-white font-montserrat">
                GameHub
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              Ваш главный источник новостей, обзоров и аналитики в мире
              видеоигр.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/articles"
                  className="hover:text-purple-400 transition-colors"
                >
                  Статьи
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:text-purple-400 transition-colors"
                >
                  Новости
                </Link>
              </li>
              <li>
                <Link
                  to="/ratings"
                  className="hover:text-purple-400 transition-colors"
                >
                  Рейтинги
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="hover:text-purple-400 transition-colors"
                >
                  Категории
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Жанры</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  RPG
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Шутеры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Стратегии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Инди-игры
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Подписка</h4>
            <p className="text-slate-400 mb-4">
              Получайте последние новости на email
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:border-purple-400"
              />
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-r-lg transition-colors">
                <Icon name="Send" size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-slate-400">
          <p>&copy; 2024 GameHub. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
