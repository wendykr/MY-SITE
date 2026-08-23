import "./BlogPost.scss";
import { useTranslation } from "react-i18next";
import { BlogPostDataStructure } from "../../models/BlogPosts";

interface BlogPostProps {
  post: BlogPostDataStructure;
}

export const BlogPost = ({ post }: BlogPostProps) => {
  const { t, i18n } = useTranslation();
  const paragraphs = t(post.text, { returnObjects: true }) as string[];
  const formattedDate = new Date(post.date).toLocaleDateString(
    i18n.language.startsWith("en") ? "en-US" : "cs-CZ",
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <article className="blogPost">
      <p className="blogPost__date">{formattedDate}</p>
      <h3 className="blogPost__title">{t(post.title)}</h3>
      <div className="blogPost__text">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {post.tags && post.tags.length > 0 && (
        <div className="blogPost__tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blogPost__tag">
              #{tag}
            </span>
          ))}
        </div>
      )}
      {post.link && (
        <a
          className="blogPost__link"
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("blog.readOriginal")}
        </a>
      )}
    </article>
  );
};
