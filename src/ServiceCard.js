import React from 'react';
import Card from '@material-ui/core/Card';
import './ServiceCard.css'
import { Link } from 'react-router-dom';

export default function ServiceCard({title,where}) {
  
  return (
    <Card className="root1" variant="outlined">
          <Link to={where}>
          <img style={{marginTop:"-10px"}} src={title} alt=""/>
          </Link>
    </Card>
  );
}