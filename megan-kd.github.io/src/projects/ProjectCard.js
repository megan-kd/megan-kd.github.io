import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';

const ProjectCard = (props) => {
  return (
   <Card>
    <CardMedia
        sx={{height: 140}}
        image={props.projectImagePath}
        title={props.imageTitle}
    />
    <CardContent>
        <Typography>{props.projectTitle}</Typography>
        <Typography>{props.projectSubtitle}</Typography>
    </CardContent>
   </Card>
  )
}

export default ProjectCard;