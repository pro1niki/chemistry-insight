import React, { Component } from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
class Home extends Component {
    state = {  }
    render() { 
        return (
            <div className="homeContent">
            <div className="textLeft">
            <h1>Em Todo Lugar Tem Um Elemento Químico.</h1>
            <p>Basta olhar em volta de você e perceber que os elementos estão por
                todas as partes. E para que você tenha conhecimento sobre cada um
                o Chemistry Insight disponibiliza uma tabela periódica 100% gratuita e online.
            </p>
            <Link style={{textDecoration: 'none'}} to="/tabela"><Button style={{backgroundImage: 'linear-gradient(90deg, #cc208e 0%, #6713d2 100%)', color: '#ffffffa3'}}>Tabela Periódica</Button></Link>
            </div>
            </div>
        );
    }
}
 
export default Home;