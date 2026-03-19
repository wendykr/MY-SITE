import { useState, useEffect } from "react";
import "./Educations.scss";
import { coursesData } from "../../constants/courses";
import { Education } from "../Education/Education";
import { scroller } from "react-scroll";
import { CoursesDataStructure } from "../../models/Courses";
import { useTranslation } from "react-i18next";

export const Educations = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [displayedCourses, setDisplayedCourses] = useState<
    CoursesDataStructure[]
  >([]);
  const [targetAnchor, setTargetAnchor] = useState<string | null>(null);
  const [scroll, setScroll] = useState(false);

  const toggleShowAll = () => {
    if (showAll) {
      setTargetAnchor(null);
      window.history.pushState(null, "", `#${t("educations.id")}`);
      setTimeout(() => {
        setShowAll(false);
      }, 1300);
      setTimeout(() => {
        scroller.scrollTo(t("educations.id"), {
          spy: true,
          smooth: true,
          offset: 0,
          duration: 1000,
        });
      }, 300);
    } else {
      setShowAll(true);
    }
  };

  useEffect(() => {
    if (!showAll) {
      setDisplayedCourses(coursesData.slice(-5).reverse());
    } else {
      setDisplayedCourses(coursesData.slice().reverse());
    }
  }, [showAll]);

  useEffect(() => {
    if (scroll && targetAnchor) {
      const timeout = setTimeout(() => {
        const targetElement = document.getElementById(targetAnchor);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [scroll, targetAnchor]);

  const handleAnchorClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;

    if (target && target.tagName === "A" && target.getAttribute("href")) {
      const hrefValue = target.getAttribute("href");

      if (hrefValue && hrefValue.includes("#")) {
        const clickedAnchor = hrefValue.replace("#", "");

        if (target.classList.contains("show-edu")) {
          setTargetAnchor(clickedAnchor);

          if (!showAll) {
            setShowAll(true);
            setScroll(true);
          } else {
            setScroll(true);
          }
          event.preventDefault();
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [showAll]);

  return (
    <div className="bg-white">
      <section id={t("educations.id")} className="educations">
        <h2 className="title">{t("educations.title")}</h2>
        <p className="description">{t("educations.description")}</p>
        {displayedCourses.map((course) => (
          <Education
            key={course.id}
            year={course.year}
            company={course.company}
            name={course.name}
            description={course.description}
            anchor={t(course.anchor)}
            isClicked={t(course.anchor) === targetAnchor}
          />
        ))}
        {coursesData.length > 3 &&
          (showAll ? (
            <button
              className="link-anchor button-reset-style show-edu"
              onClick={toggleShowAll}
            >
              {t("educations.textButtonShowLess")}
            </button>
          ) : (
            <button
              className="link-anchor button-reset-style"
              onClick={toggleShowAll}
            >
              {t("educations.textButtonShowAll")}
            </button>
          ))}
      </section>
    </div>
  );
};
