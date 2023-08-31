import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = (props) => {
  const projectData = props.data;
  const cards = projectData.map((card) => 
    <Grid>
        <ProjectCard 
            projectTitle={card.title}
            projectSubtitle={card.subtitle}
            projectImagePath={card.imagePath}
            imageTitle={card.imageTitle}
        />
    </Grid>
  )
  return (
    <Grid container spacing={2}>
        {cards}
    </Grid>
  )
};

export default ProjectsSection;