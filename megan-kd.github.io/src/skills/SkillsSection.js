import React from 'react';
import Skill from './Skill';
import { Divider, Stack, Typography, Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '100%'
}));

const SkillsSection = (props) => {
  const skillsData = props.data;
  const skillCategories = skillsData.map((category) => 
  <Grid item xs={3}>
      <Item>
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
        <Grid container justifyContent={'center'} columns={{ xs: 4, sm: 8, md: 12 }}>
          {skillCategories}
        </Grid>
    </>
  );
};

export default SkillsSection;