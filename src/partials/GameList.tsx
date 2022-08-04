import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const GameList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Games</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Paint"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Game Paint',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Ages 2+</Tags>
            <Tags color={ColorTags.LIME}>Colorful</Tags>
            <Tags color={ColorTags.SKY}>Drawing</Tags>
          </>
        }
      />
      <Project
        name="Puzzle"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Game Puzzle' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Ages 4+</Tags>
            <Tags color={ColorTags.AMBER}>Thinking</Tags>
          </>
        }
      />
      <Project
        name="Maze"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Game Maze' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Ages 4+</Tags>
            <Tags color={ColorTags.AMBER}>Thinking</Tags>
            <Tags color={ColorTags.EMERALD}>Spatial</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { GameList };
