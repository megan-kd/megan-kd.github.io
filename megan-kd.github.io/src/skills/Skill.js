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
  const iconFontSize = '80px';
  const iconList = {
    1: <DesignServicesIcon sx={{ color: theme.palette.primary.main, fontSize: iconFontSize }}/>,
    2: <WorkspacePremiumIcon sx={{ color: theme.palette.primary.main, fontSize: iconFontSize }}/>,
    3: <TerminalIcon sx={{ color: theme.palette.primary.main, fontSize: iconFontSize }}/>,
    4: <CodeIcon sx={{ color: theme.palette.primary.main, fontSize: iconFontSize }}/>
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
            <Typography variant='h3' textAlign={"center"} style={{fontVariant: 'small-caps'}}>{props.title}</Typography>
            <Typography variant='h5' style={h5Style}><ul style={ulStyle}>{bulletList}</ul></Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Skill;