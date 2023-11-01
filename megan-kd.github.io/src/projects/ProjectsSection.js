import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import ProjectCard from './ProjectCard';
import { Divider, Stack, Typography } from '@mui/material';

const ProjectsSection = (props) => {
  const projectData = props.data;
  const cards = projectData.map((card) => 
    <Grid xs={4} display={"flex"} justifyContent={"center"}>
        <ProjectCard 
            projectTitle={card.title}
            projectSubtitle={card.subtitle}
            projectCategories={card.categories}
            projectImagePath={card.imagePath}
            imageTitle={card.imageTitle}
            projectDescription={card.description}
            projectTechnologies={card.technologies}
            projectDate={card.date}
        />
    </Grid>
  )
  return (
    <>
        <Stack spacing={2} id={'projects'}>
            <Divider>
              <Typography variant='h3'>
                PROJECTS
              </Typography>
            </Divider>
            <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} minHeight={600}>
                {cards}
            </Grid>
        </Stack>
    </>
  )
};

export default ProjectsSection;