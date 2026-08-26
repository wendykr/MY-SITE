import "./Blog.scss";
import { Hero } from "../../components/Hero/Hero";
import { useTranslation } from "react-i18next";
import { blogPostsData } from "../../constants/blogPosts";
import { BlogPost } from "../../components/BlogPost/BlogPost";
import { Seo } from "../../Seo";

export const Blog = () => {
  const { t } = useTranslation();
  const posts = [...blogPostsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <Seo title={t("blog.seo.title")} description={t("blog.seo.description")} />
      <Hero title={t("blog.title")} subtitle={t("blog.description")} />

      <section className="blog">
        <div className="blog__list">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};
