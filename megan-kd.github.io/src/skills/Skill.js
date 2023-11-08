import React from 'react'
import { CardContent, Card, Typography, Stack } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from "@mui/material/styles";

const Skill = (props) => {
  const theme = useTheme();
  const skillsList = props.list;
  const iconList = {
    1: <DesignServicesIcon sx={{ color: theme.palette.primary.main, fontSize: '60px' }}/>,
    2: <WorkspacePremiumIcon sx={{ color: theme.palette.primary.main, fontSize: '60px' }}/>,
    3: <TerminalIcon sx={{ color: theme.palette.primary.main, fontSize: '60px' }}/>,
    4: <CodeIcon sx={{ color: theme.palette.primary.main, fontSize: '60px' }}/>
  }

  const cardStyle = {
    boxShadow: 'none !important'
  };

  const ulStyle = {
      textAlign: 'left',
      listStylePosition: 'inside',
      display: 'inline-block'
  };

  const h5Style = {
    width: '100%',
    textAlign: 'center'
  };

  const bulletList = skillsList.map((skill) => <li>{skill}</li>)
  return (
    <>
      <Card id={'testBoxShadow'}style={cardStyle}>
        <CardContent>
        <Typography textAlign={"center"}>{iconList[props.icon]}</Typography>
          <Stack spacing={2}>
            <Typography variant='h4' textAlign={"center"} style={{fontVariant: 'small-caps'}}>{props.title}</Typography>
            <Typography variant='h7' style={h5Style}><ul style={ulStyle}>{bulletList}</ul></Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Skill;