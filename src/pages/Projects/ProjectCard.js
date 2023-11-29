
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

const ProjectCard = ({image,title,skills,github,view}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="img"
        height="200 !important"
        image={image}
        style={{objectFit:'cover'}}
      />
      <CardContent>
        <Typography gutterBottom component="div" fontSize={'2rem'} textAlign={'center'}>
        {title}
        </Typography>
        <Typography variant="body2" color="text" textAlign='center'>
         {skills}
         </Typography>
      </CardContent>
      <CardActions style={{display:'flex', justifyContent:'center'}}>
        <Button size="small" href={github} target='/blank'>Github</Button>
        <Button size="small" href={view} target='/blank'>View</Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard;
