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
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 font-montserrat mb-2">
          Лучшие статьи
        </h2>
        <p className="text-slate-600">Глубокие материалы о мире игр</p>
      </div>

      <div className="space-y-8">
        {articles.map((article, index) => (
          <article
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="md:flex">
              <div className="md:w-1/3 relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-4 text-lg leading-relaxed">
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
                    <span className="text-slate-400">{article.date}</span>
                  </div>
                  <Link
                    to="/articles"
                    className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-1"
                  >
                    <span>Читать</span>
                    <Icon name="ArrowRight" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/articles"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Все статьи
        </Link>
      </div>
    </section>
  );
};

export default ArticlesSection;
