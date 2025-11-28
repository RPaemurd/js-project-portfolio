import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
// useRef is a React hook that lets you persist a mutable reference (e.g. to a DOM element) across renders
import { useRef } from "react";


// FeaturedProjects displays a horizontally scrollable list of project cards with scroll buttons
function FeaturedProjects() {
  // Ref to the scrollable container
  const scrollContainerRef = useRef(null);

  // Scrolls the container left or right by a fixed offset (used by the arrow buttons)
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
        {/* Left scroll button: scrolls container to the left */}
        <ScrollButton onClick={() => scroll(-320)}> {"<"} </ScrollButton>
        {/* ProjectsContainer is horizontally scrollable and holds all ProjectCards */}
        <ProjectsContainer ref={scrollContainerRef}>
          {/* Map over the projects array and render a ProjectCard for each project */}
          {projects.map((item) => (
            <ProjectCard
              key={item.id}
              // Pass image, title, description, and URLs as props to ProjectCard
              img={item.img}
              title={item.title}
              desc={item.desc}
              netlifyUrl={item.netlifyUrl}
              githubUrl={item.githubUrl}
            />
          ))}
        </ProjectsContainer>
        {/* Right scroll button: scrolls container to the right */}
        <ScrollButton onClick={() => scroll(320)}> {">"} </ScrollButton>
      </ScrollButtonContainer>
    </FeaturedWrapper>
  );
}

export default FeaturedProjects

const FeaturedWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 auto;
    margin-top: 3rem;

    h2 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 3.7rem;
    };

    h3 {
      font-size: 1.5rem;
    }

    @media (min-width: 900px) {
      max-width: 900px;
    }
`;

const ScrollButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const ScrollButton = styled.button`
  background-color: var(--primary-clr);
  color: var(--secnd-clr);
  border: 2px solid var(--secnd-clr);
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
  padding-bottom: 2px;
  transform: translateY(-40px);

  &:hover {
    background-color: var(--secnd-clr);
    color: var(--primary-clr);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  width: 100%;
  max-width: 320px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 544px) {
    max-width: 544px;
  }

  @media (min-width: 900px) {
    max-width: 1100px;
  }
`;
