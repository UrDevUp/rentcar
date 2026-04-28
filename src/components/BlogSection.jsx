import useScrollAnimation from "../hooks/useScrollAnimation";
import "./blogSection.css";
import image1 from "../assets/bb3.jpg";
import image2 from "../assets/bb1.jpg";
import image3 from "../assets/bb2.jpg";

const posts = [
  {
    id: 1,
    title: "Comment bien choisir sa voiture de location",
    excerpt:
      "Conseils rapides pour sélectionner le véhicule adapté à votre voyage et votre budget.",
    date: "2026-04-01",
    image: image1,
  },
  {
    id: 2,
    title: "Entretien et sécurité avant le départ",
    excerpt:
      "Checklist simple pour vérifier l'état du véhicule avant de prendre la route.",
    date: "2026-03-18",
    image: image2,
  },
  {
    id: 3,
    title: "Astuces pour économiser sur la location",
    excerpt:
      "Petites astuces pour réduire le coût total de votre location sans compromettre le confort.",
    date: "2026-02-25",
    image: image3,
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h2>DERNIERS ARTICLES</h2>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article
              key={post.id}
              className={`blog-card`}
            >
              <div className="blog-card-media" aria-hidden>
                <img
                  src={post.image}
                  alt={post.title}
                />
              </div>

              <div className="blog-card-body">
                <time className="blog-date">{post.date}</time>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button type="button" className="blog-readmore">
                  Lire
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
