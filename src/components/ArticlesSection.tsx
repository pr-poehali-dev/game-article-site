import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const ArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: "Эволюция RPG: от Dungeons & Dragons до современных игр",
      excerpt:
        "Исследуем путь развития ролевых игр и их влияние на современную игровую индустрию...",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
      author: "Алексей Игровой",
      readTime: "8 мин",
      date: "15 июня 2024",
      category: "Аналитика",
    },
    {
      id: 2,
      title: "Как инди-разработчики меняют игровую индустрию",
      excerpt:
        "Независимые студии создают проекты, которые конкурируют с AAA-играми по популярности...",
      image:
        "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=250&fit=crop",
      author: "Мария Кодерская",
      readTime: "12 мин",
      date: "12 июня 2024",
      category: "Индустрия",
    },
    {
      id: 3,
      title: "Будущее VR-игр: что нас ждет в 2024 году",
      excerpt:
        "Новые технологии виртуальной реальности открывают невероятные возможности для геймплея...",
      image:
        "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=250&fit=crop",
      author: "Дмитрий Техно",
      readTime: "6 мин",
      date: "10 июня 2024",
      category: "Технологии",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900 font-montserrat">
            Лучшие статьи
          </h2>
          <Link
            to="/articles"
            className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-1"
          >
            <span>Все статьи</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""} bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                    index === 0 ? "h-80" : "h-48"
                  }`}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className={`p-6 ${index === 0 ? "lg:p-8" : ""}`}>
                <h3
                  className={`font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors ${
                    index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                  }`}
                >
                  {article.title}
                </h3>
                <p
                  className={`text-slate-600 mb-4 ${index === 0 ? "text-lg line-clamp-4" : "line-clamp-3"}`}
                >
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Icon name="User" size={14} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <span className="text-slate-400 text-sm">{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
