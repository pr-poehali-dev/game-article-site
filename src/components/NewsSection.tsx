import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Анонсирована новая игра от студии Bethesda",
      summary:
        "Разработчики представили первый трейлер долгожданного проекта в жанре RPG...",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
      date: "2 часа назад",
      category: "Анонсы",
    },
    {
      id: 2,
      title: "Обновление для Cyberpunk 2077 исправляет критические баги",
      summary:
        "Патч 2.1 устраняет проблемы с производительностью и добавляет новый контент...",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
      date: "4 часа назад",
      category: "Обновления",
    },
    {
      id: 3,
      title: "Steam объявил о начале зимней распродажи",
      summary:
        "Скидки до 90% на популярные игры. Акция продлится до конца месяца...",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop",
      date: "6 часов назад",
      category: "Индустрия",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900 font-montserrat">
            Последние новости
          </h2>
          <Link
            to="/news"
            className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-1"
          >
            <span>Все новости</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-slate-900 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {item.summary}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{item.date}</span>
                  <button className="text-purple-600 hover:text-purple-700 font-semibold">
                    Читать далее
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
