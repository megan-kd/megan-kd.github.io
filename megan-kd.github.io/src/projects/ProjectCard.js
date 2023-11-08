import React, {useState} from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Modal, Typography, Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '60%',
  overflow:'scroll',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProjectCard = (props) => {
  const theme = useTheme();
  const projectCardStyle = {
    height: '400px',
    width: '100%',
    background: theme.palette.gradient.pink,
    borderRadius: '20px'
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
          sx={{ height: '60%', objectFit: "contain" }}
          image={props.projectImagePath}
          title={props.imageTitle}
        />
        <CardContent>
          <Stack spacing={2}>
            <Typography variant='h6' textAlign={"center"}>{props.projectTitle}</Typography>
            <Typography width='100%' variant='subtitle'textAlign={"center"}>{props.projectSubtitle}</Typography>
          </Stack>
        </CardContent>
      </Card>
      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <Stack>
            <Typography variant='h5'>{props.projectTitle}</Typography>
            <Typography>{props.projectDescription}</Typography>
            <Typography variant='h8'>Date: {props.projectDate}</Typography>
            <Typography variant='h8'>Technologies: {props.projectTechnologies}</Typography>
          </Stack>
        </Box>
      </Modal>
    </>
  )
}

export default ProjectCard;