import React from 'react';
import {exibirCategoria} from '../script';


export default class Bolos extends React.Component {

    render() {
        return (
            <section>

                <div className="container">
                    <div className="row d-flex flex-nowrap">
                        <div className="col-md-3 lista w-50">
                            <h4>Categorias</h4>

                            <ul id="listaCategoria" className="list-group">
                                <li className="list-group-item active border" onClick={(e) => exibirCategoria(e, 'todos')}>Todos</li>
                                <li className="list-group-item" onClick={(e) => exibirCategoria(e, 'Bolos Caseiros')}>Bolos Caseiros</li>
                                <li className="list-group-item" onClick={(e) => exibirCategoria(e, 'Bolos com Calda')}>Bolos com Calda</li>
                                <li className="list-group-item" onClick={(e) => exibirCategoria(e, 'Bolos de Festa')}>Bolos de Festa</li>
                                <li className="list-group-item" onClick={(e) => exibirCategoria(e, 'Bolos de Pote')}>Bolos de Pote</li>
                                <li className="list-group-item" onClick={(e) => exibirCategoria(e, 'Bolos Funcional')}>Bolos Funcional</li>
                                <li className="list-group-item" onClick={(e) => exibirCategoria(e, 'Cheesecakes sem Forno')}>Cheesecakes sem Forno</li>
                                <li className="list-group-item" onClick={(e) => exibirCategoria(e, 'Rocambole')}>Rocambole</li>
                            </ul>  
                        </div>

                        <div id="container">

                            {this.props.arrayProdutos.map( row =>

                                <div id={row.nome} className="card border-0 mt-2" style={{maxWidth: '16rem'}}>
                                    <img className="card-img-top" src="images/not_found.png" className="img-fluid"/>
                                    <div className="card-body">
                                        <p className="card-text border-bottom">{row.descricao}</p>
                                        <p className="preco_descontado">R$ {row.preco}</p>
                                        <a href="#" class="btn btn-success">Encomedar</a>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section> 
        );
    }
}