import React, { Component } from "react";
import Elementos from "../../assets/Elementos.json";
import "./PaginaElemento.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { Card } from "@material-ui/core";

class PaginaElemento extends Component {
  state = {
    Elementos: Elementos
  };

  render() {
    let s = window.location.pathname;
    let final = s.substr(s.lastIndexOf("/") + 1);
    console.log(final);
    function renderizarElemento(nAtomico) {
      let el = Elementos[nAtomico - 1];
      return (
        <div style={{ overflowX: "hidden" }}>
          {/* <h1>{el.nome}</h1>
          <h5>{el.numeroAtomico}</h5>
          <h5>{el.raioAtomico}</h5>
          <h5>{el.anoDeDescobrimento}</h5>
          <h5>{el.densidade}</h5> */}
          <div className="shellAvatar">
            <div
              className="avatarElemento"
              style={{
                background: "url(" + el.imagem + ") center/cover"
              }}
            />
            <h1 className="nomeElemento">{el.nome}</h1>
          </div>
          <div
            className="backgroundlogo"
            style={{
              background: "url(" + el.imagem + ") center/cover"
            }}
          />
          <div className="contentSobreElemento">
            <div className="listInformacoes">
              <Card
                style={{
                  padding: "25px",
                  boxShadow: "0px 2px 8px #0000002b",
                  borderRadius: "10px",
                  marginBottom: '20px'
                }}
              >
                <h3 style={{ fontWeight: 300 }}>Propriedades Gerais</h3>
                <List>
                  <ListItem>
                    <Avatar>{el.simbolo}</Avatar>
                    <ListItemText primary="Símbolo" secondary={el.simbolo} />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                      <img src="https://i.imgur.com/QVYYFTn.png" width='20' alt=""/>
                    </Avatar>
                    <ListItemText primary="Grupo" secondary={el.grupo} />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/rfHPFLA.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText
                      primary="Densidade"
                      secondary={el.densidade}
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/Uc15FwQ.png" width='24' alt=""/>
                    </Avatar>
                    <ListItemText
                      primary="Ano de descobrimento"
                      secondary={el.anoDescobrimento}
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar style={{background: '#' + el.cpkHexCor}}>
                    </Avatar>
                    <ListItemText
                      primary="CPK Hexadecimal cor"
                      secondary={"#" + el.cpkHexCor}
                    />
                  </ListItem>
                </List>
              </Card>
              <Card
                style={{
                  padding: "25px",
                  boxShadow: "0px 2px 8px #0000002b",
                  borderRadius: "10px",
                  marginBottom: '20px'
                }}
              >
                <h3 style={{ fontWeight: 300 }}>Propriedades Atômicas</h3>
                <List>
                  <ListItem>
                    <Avatar>
                      <img src="https://i.imgur.com/xibZDCB.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText primary="Massa Atômica" secondary={el.massaAtomica} />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/5JSAzOZ.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText primary="Raio Atômico" secondary={el.raioAtomico} />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/HV7jqem.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText
                      primary="Raio de van Der Waals"
                      secondary={el.vanDelWaalsRaio}
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/WdF9JuB.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText
                      primary="Configuração eletrônica"
                      secondary={el.configuracaoEletronica}
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/SEbaPDf.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText
                      primary="Estados de oxidação"
                      secondary={el.estadosOxidacao}
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/1CvmYiH.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText
                      primary="Ions Raio"
                      secondary={el.ionRaio}
                    />
                  </ListItem>
                </List>
              </Card>
              <Card
                style={{
                  padding: "25px",
                  boxShadow: "0px 2px 8px #0000002b",
                  borderRadius: "10px",
                  marginBottom: '20px'
                }}
              >
                <h3 style={{ fontWeight: 300 }}>Propriedades Físicas</h3>
                <List>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/A9mVA0i.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText primary="Estado" secondary={el.estadoPadrao} />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/5HhlBUC.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText primary="Ponto de fusão" secondary={el.pontoFusao} />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/5HhlBUC.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText
                      primary="Ponto de ebulição"
                      secondary={el.pontoEbulicao}
                    />
                  </ListItem>
                </List>
              </Card>
              <Card
                style={{
                  padding: "25px",
                  boxShadow: "0px 2px 8px #0000002b",
                  borderRadius: "10px",
                  marginBottom: '20px'
                }}
              >
                <h3 style={{ fontWeight: 300 }}>Diversos</h3>
                <List>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/ogCg19g.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText primary="Eletronegatividade" secondary={el.eletronegatividade} />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/Wk3WTeT.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText primary="Potencial de ionização" secondary={el.pontencialIonizacao} />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                    <img src="https://i.imgur.com/nMkFPbo.png" width='30' alt=""/>
                    </Avatar>
                    <ListItemText
                      primary="Eletroafinidade"
                      secondary={el.eletroAfinidade}
                    />
                  </ListItem>
                </List>
              </Card>
            </div>
          </div>
        </div>
      );
    }
    return renderizarElemento(final);
  }
}

export default PaginaElemento;
