import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { CardContent, Link, CardMedia, CardHeader, Dialog, Typography, Slide, Stack, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectCard = (props) => {
  const theme = useTheme();
  const projectCardStyle = {
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

  const formatProjectLinks = () => {
    const data = props.projectLink;
    const links = data.map(element => {
      return <Link color={'inherit'} href={element.url} aria-label={element.title + " link"} rel="noopener noreferrer" target="_blank">{element.title}</Link>
    });

    return (
      <>
        <Typography variant='h8' fontWeight={'bold'}>
          <Stack direction={'row'} spacing={2}>
            Links: 
            <div>&nbsp;</div>
            {links}
          </Stack>
        </Typography>

      </>
    );
  }

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
          loading="lazy"
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
            <Typography variant='h8' fontWeight={'bold'}>
              <Stack direction={'horizontal'}>
                <CalendarMonthIcon />
                <div>{':'}&nbsp;</div>
                {props.projectDate}
              </Stack>
            </Typography>
            <Typography variant='h8' fontWeight={'bold'}>Patron: {props.projectLocation}</Typography>
            {props.projectLink ? formatProjectLinks() : null}
            <Typography variant='h8' fontWeight={'bold'}>Technologies: {props.projectTechnologies}</Typography>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ProjectCard;