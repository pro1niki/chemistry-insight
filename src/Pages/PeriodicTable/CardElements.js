import React from 'react';
import { Typography, CardContent, Collapse, CardActions, CardMedia, Avatar, CardHeader, Card, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
var tinycolor = require("tinycolor2");

function luminancia(cor){
    if(tinycolor(cor).isLight() === true){
        return '#000'
    }
    else{
        return '#fff'
    }
}

const CardElements = (props) =>{
    return(
        <Card style={{marginBottom: '20px', boxShadow: '0px 2px 8px #0000002b', borderRadius: '10px'}}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" style={{background: "#" + props.cpkHexCor, color: luminancia(props.cpkHexCor)}}>
              {props.simbolo}
            </Avatar>
          }
          title={props.nome}
          subheader={"N°: " + props.numeroAtomico + "  |  " + props.grupo}
        />
        <CardMedia style={{height: '200px'}}
          image={props.imagem}
          title="Paella dish"
        />
        <CardContent>
            <Collapse/>
          <Typography component="p">
            {"Elemento com raio atômico de " + props.raioAtomico + " e com massa atômica de " + props.massaAtomica}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={"/elemento/"+ props.numeroAtomico} style={{textDecoration: "none"}}> <Button size="small" color="primary">
          Ver mais
        </Button>
        </Link>
      </CardActions>
      </Card>
    )
}

export default CardElements