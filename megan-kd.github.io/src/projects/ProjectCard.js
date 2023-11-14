import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Dialog, Typography, Slide, Stack, DialogContent, DialogTitle, IconButton } from '@mui/material';
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
    height: '420px',
    width: '100%',
    background: theme.palette.gradient.pink,
    borderRadius: '20px',
  };

  const DialogTitleStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
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
      <Card raised onClick={handleOpen} style={projectCardStyle}>
        <CardMedia
          component={"img"}
          sx={{ height: '60%', objectFit: "contain",  }}
          image={props.projectImagePath}
          title={props.imageTitle}
        />
        <CardContent>
          <Stack spacing={1}>
            <Typography variant='h6' textAlign={"center"}>{props.projectTitle}</Typography>
            <Typography width='100%' variant='subtitle' textAlign={"center"}>{props.projectSubtitle}</Typography>
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