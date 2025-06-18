import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Gamepad2" size={28} className="text-purple-400" />
            <span className="text-2xl font-bold text-white font-montserrat">
              GameHub
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/articles"
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
            >
              Статьи
            </Link>
            <Link
              to="/news"
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
            >
              Новости
            </Link>
            <Link
              to="/ratings"
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
            >
              Рейтинги
            </Link>
            <Link
              to="/categories"
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
            >
              Категории
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-300 hover:text-purple-400 transition-colors">
              <Icon name="Search" size={20} />
            </button>
            <button className="md:hidden p-2 text-slate-300 hover:text-purple-400 transition-colors">
              <Icon name="Menu" size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
