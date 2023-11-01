import React from 'react'
import { CardContent, Card, Typography, Stack } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';

const Skill = (props) => {
  const skillsList = props.list;
  const iconList = {
    1: <DesignServicesIcon fontSize={'large'}/>,
    2: <WorkspacePremiumIcon fontSize={'large'}/>,
    3: <TerminalIcon fontSize={'large'}/>,
    4: <CodeIcon fontSize={'large'}/>
  }
  const bulletList = skillsList.map((skill) => <li>{skill}</li>)
  return (
    <>
      <Card>
        <CardContent>
        <Typography textAlign={"center"}>{iconList[props.icon]}</Typography>
          <Stack spacing={2}>
            <Typography variant='h4' textAlign={"center"}>{props.title}</Typography>
            <Typography width={'80%'} textAlign={'left'} padding={'0 10% 0 10%'}><ul>{bulletList}</ul></Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Skill;