import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import ProjectCard from './ProjectCard';
import { Divider, Stack, Typography } from '@mui/material';

const ProjectsSection = (props) => {
  const projectData = props.data;
  const cards = projectData.map((card, index) => 
    <Grid xs={4} display={"flex"} justifyContent={"center"} key={"projectcard-" + index}>
        <ProjectCard 
            projectTitle={card.title}
            projectSubtitle={card.subtitle}
            projectCategories={card.categories}
            projectImagePath={card.imagePath}
            imageTitle={card.imageTitle}
            projectDescription={card.description}
            projectTechnologies={card.technologies}
            projectDate={card.date}
            projectLocation={card.location}
            projectLink = {card.links}
        />
    </Grid>
  )
  return (
    <>
        <Stack spacing={2} id={'projects'}>
            <Divider>
              <Typography variant='h2'>
                PROJECTS
              </Typography>
            </Divider>
            <Grid container spacing={{ xs: 2, md: 3, lg: 4}} columns={{ xs: 4, sm: 4, md: 8, lg: 12 }} minHeight={600}>
                {cards}
            </Grid>
            <div/>
            <div/>
        </Stack>
    </>
  )
};

export default ProjectsSection;