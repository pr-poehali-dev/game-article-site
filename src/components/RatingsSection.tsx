import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const RatingsSection = () => {
  const topGames = [
    {
      id: 1,
      title: "The Legend of Zelda: Tears of the Kingdom",
      genre: "Action/Adventure",
      rating: 9.8,
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=400&fit=crop",
      platform: "Nintendo Switch",
      reviews: 2847,
    },
    {
      id: 2,
      title: "Baldur's Gate 3",
      genre: "RPG",
      rating: 9.6,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
      platform: "PC, PS5",
      reviews: 3521,
    },
    {
      id: 3,
      title: "Spider-Man 2",
      genre: "Action",
      rating: 9.4,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
      platform: "PS5",
      reviews: 1893,
    },
    {
      id: 4,
      title: "Alan Wake 2",
      genre: "Horror/Thriller",
      rating: 9.2,
      image:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&h=400&fit=crop",
      platform: "PC, Xbox",
      reviews: 1247,
    },
  ];

  const getRatingColor = (rating: number) => {
    if (rating >= 9.5) return "text-green-500";
    if (rating >= 8.5) return "text-blue-500";
    if (rating >= 7.5) return "text-yellow-500";
    return "text-orange-500";
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900 font-montserrat">
            Топ игр
          </h2>
          <Link
            to="/ratings"
            className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-1"
          >
            <span>Все рейтинги</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topGames.map((game, index) => (
            <div
              key={game.id}
              className="bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-900 text-white px-2 py-1 rounded-full text-sm font-bold">
                  #{index + 1}
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Icon
                      name="Star"
                      size={14}
                      className={getRatingColor(game.rating)}
                      fill="currentColor"
                    />
                    <span
                      className={`font-bold text-sm ${getRatingColor(game.rating)}`}
                    >
                      {game.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 text-slate-900 line-clamp-2">
                  {game.title}
                </h3>
                <p className="text-purple-600 text-sm font-semibold mb-2">
                  {game.genre}
                </p>
                <p className="text-slate-600 text-sm mb-3">{game.platform}</p>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{game.reviews} отзывов</span>
                  <button className="text-purple-600 hover:text-purple-700 font-semibold">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;
