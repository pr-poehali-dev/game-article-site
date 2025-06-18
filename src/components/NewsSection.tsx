import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Анонсирована новая игра от студии Bethesda",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=150&fit=crop",
      date: "2 часа назад",
      category: "Анонсы",
    },
    {
      id: 2,
      title: "Обновление для Cyberpunk 2077 исправляет критические баги",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=150&fit=crop",
      date: "4 часа назад",
      category: "Обновления",
    },
    {
      id: 3,
      title: "Steam объявил о начале зимней распродажи",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=150&fit=crop",
      date: "6 часов назад",
      category: "Индустрия",
    },
    {
      id: 4,
      title: "Новый трейлер The Elder Scrolls VI",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=150&fit=crop",
      date: "8 часов назад",
      category: "Трейлеры",
    },
  ];

  return (
    <aside className="bg-white rounded-lg shadow-md p-6 sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-900">Новости</h3>
        <Link
          to="/news"
          className="text-purple-600 hover:text-purple-700 text-sm font-semibold"
        >
          Все
        </Link>
      </div>

      <div className="space-y-4">
        {news.map((item) => (
          <article key={item.id} className="group cursor-pointer">
            <div className="flex space-x-3">
              <div className="w-20 h-14 flex-shrink-0 overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-2 mb-1">
                  {item.title}
                </h4>
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                    {item.category}
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-200">
        <Link
          to="/news"
          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded text-sm font-semibold transition-colors flex items-center justify-center space-x-1"
        >
          <span>Больше новостей</span>
          <Icon name="ArrowRight" size={14} />
        </Link>
      </div>
    </aside>
  );
};

export default NewsSection;
