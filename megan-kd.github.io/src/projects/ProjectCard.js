import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, CardHeader, Dialog, Typography, Slide, Stack, DialogContent, DialogTitle, IconButton, CardActions } from '@mui/material';
import { useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectCard = (props) => {
  const theme = useTheme();
  const projectCardStyle = {
    //height: '450px',
    height: '450px',
    width: '100%',
    background: theme.palette.text.primary,
    borderRadius: '20px',
    "&:hover": {
      cursor: 'pointer !important'
  },
  };

  const DialogTitleStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const cardMediaStyle = {
    height: '65%',
    objectFit: 'contain',
    textAlign: 'center'
  };

  const cardTitleStyle = {
    textAlign: 'center',
    color: theme.palette.background.pink,
    backgroundColor: theme.palette.text.primary
  }

  const cardContentStyle = {
    backgroundColor: theme.palette.text.primary,
  };

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => {
    setModalOpen(true);
  }
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card raised onClick={handleOpen} style={projectCardStyle} variant='clickable'>
        <CardHeader
          style={cardTitleStyle}
          title={<Typography width='100%' variant='h6' style={cardTitleStyle}>{props.projectTitle}</Typography>}
        />
        <CardMedia
          component={"img"}
          sx={cardMediaStyle}
          image={props.projectImagePath}
          title={props.imageTitle}
        />
        <CardContent style={cardContentStyle}>
          <Stack spacing={1}>
            <Typography width='100%' variant='subtitle' style={cardTitleStyle}>{props.projectSubtitle}</Typography>
          </Stack>
        </CardContent>
      </Card>
      <Dialog
        open={modalOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
        maxWidth={"md"}
      >
        <DialogTitle disableTypography style={DialogTitleStyle}>
          <Typography variant='h5' fontWeight={'bold'}>{props.projectTitle}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack>
            <Typography>{props.projectDescription}</Typography>
            <Typography variant='h8'>
              <Stack direction={'horizontal'}>
                <CalendarMonthIcon />
                <div>{':'}&nbsp;</div>
                {props.projectDate}
              </Stack>
            </Typography>
            <Typography variant='h8'>Technologies: {props.projectTechnologies}</Typography>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ProjectCard;