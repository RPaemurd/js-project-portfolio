import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { useRef } from "react";

const FeaturedWrapper = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 auto;

    h2 {
        text-align: center;
        margin-bottom: 2rem;
    };
`;

const ScrollButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const ScrollButton = styled.button`
  background-color: var(--secnd-clr);
  color: var(--primary-clr);
  border: 2px solid var(--primary-clr);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  margin: 0 0.5rem;

  &:hover {
    background-color: var(--primary-clr);
    color: var(--secnd-clr);
  }

  @media (max-width: 744px) {
    width: 6px;
    height: 70px;
    border-radius: 2px;
    font-size: 0;
    background-color: var(--secnd-clr);
    border: 1px solid var(--primary-clr);
  }
`;

const ProjectsContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    width: 100%;
    max-width: 260px;
    

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    @media (min-width: 544px) {
        max-width: 544px;
    }

    @media (min-width: 1100px) {
        max-width: 1100px;
    }

    @media (min-width: 1440px) {
        max-width: 1440px;
    }
`;

function FeaturedProjects() {
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <FeaturedWrapper>
      <h2>Featured Projects</h2>
      <ScrollButtonContainer>
        <ScrollButton onClick={() => scroll(-320)}>{"<"}</ScrollButton>
        <ProjectsContainer ref={scrollContainerRef}>
          {projects.map((item) => (
            <ProjectCard
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              netlifyUrl={item.netlifyUrl}
              githubUrl={item.githubUrl}
            />
          ))}
        </ProjectsContainer>
        <ScrollButton onClick={() => scroll(320)}>{">"}</ScrollButton>
      </ScrollButtonContainer>
    </FeaturedWrapper>
  );
}

export default FeaturedProjects