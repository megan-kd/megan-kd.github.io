import React from 'react';
import Skill from './Skill';
import { Divider, Stack, Typography, Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '100%',
  height: 'auto',
  boxShadow: 'none !important',
  border: 'none !important'
}));

const SkillsSection = (props) => {
  const skillsData = props.data;
  const skillCategories = skillsData.map((category) => 
  <Grid item xs={3} id='IMJOKIN' >
      <Item id='GIMMEDAT'>
        <Skill
          title={category.title}
          list={category.skillList}
          icon={category.icon}
        />
      </Item>
  </Grid>
  )
  return (
    <>
        <Stack id={'skills'}>
            <Divider>
              <Typography variant='h3'>
                SKILLS
              </Typography>
            </Divider>
        </Stack>
        <Grid container justifyContent={'center'} columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}>
          {skillCategories}
        </Grid>
    </>
  );
};

export default SkillsSection;