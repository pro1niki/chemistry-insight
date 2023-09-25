import React, { Component } from "react";
import CardElements from "./CardElements";
import "./PeriodicTable.css";
import Elementos from "../../assets/Elementos.json";
import { TextField } from "@material-ui/core";

class PeriodicTable extends Component {
  constructor() {
    super();
    this.state = {
      Elementos: Elementos,
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredElementos = this.state.Elementos.filter(el => {
      return el.nome.toLowerCase().indexOf(this.state.search) === 0;
    });
    return (
      <div className="PeriodicTableWrapper">
        <div className="search">
          <TextField 
            style={{width: 'calc(20% + 200px)'}}
            id="pesquisa"
            label="Pesquisa..."
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            margin="normal"
            helperText="Primeira letra minúscula por favor (É um bug, mas iremos resolver)"
            variant="outlined"
          />
        </div>
        <div className="PeriodicTable">
          {filteredElementos.map(e => {
            return (
              <CardElements
                numeroAtomico={e.numeroAtomico}
                simbolo={e.simbolo}
                nome={e.nome}
                massaAtomica={e.massaAtomica}
                cpkHexCor={e.cpkHexCor}
                ConfiguracaoEletronica={e.ConfiguracaoEletronica}
                eletronegatividade={e.eletronegatividade}
                raioAtomico={e.raioAtomico}
                ionRaio={e.ionRaio}
                vanDelWaalsRaio={e.vanDelWaalsRaio}
                pontencialIonizacao={e.pontencialIonizacao}
                eletroAfinidade={e.eletroAfinidade}
                estadosOxidacao={e.estadosOxidacao}
                estadoPadrao={e.estadoPadrao}
                tipoLigacao={e.tipoLigacao}
                pontoFusao={e.pontoFusao}
                pontoEbulicao={e.pontoEbulicao}
                densidade={e.densidade}
                grupo={e.grupo}
                anoDescobrimento={e.anoDescobrimento}
                imagem={e.imagem}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PeriodicTable;
