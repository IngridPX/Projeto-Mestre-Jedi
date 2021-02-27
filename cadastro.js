import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

export default function Cadastro () {

    const [descricao, setDescricao] = useState("Bolos Caseiros")
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [nome_imagem, setNome_imagem] = useState("")

    const history = useHistory()

    const cadastro = () => {

        Axios.post('http://localhost:3001/cadastro',
        {
            nome: nome,
            descricao: descricao,
            preco: preco,
            nome_imagem: nome_imagem
        }).then((response) => {
            console.log(response)
        })

        history.push({
            pathname: '/Bolos',
        })

        window.location.reload()
    }

    return (
        <div>
            <div className="w-75 mx-auto mt-3 titulo-cadastro">
                <h2 className="text-center my-3">Cadastro de Produto</h2>
            </div>

            <section className="container mt-4 d-flex justify-content-center">   

                <form method="POST" enctype="multipart/form-data" action="/cadastrar" className="form-group pl-5 py-4">
                    <label><b>Descrição: </b></label>

                    <select className="form-control w-50" name="descricao" onChange={(e) => {setDescricao(e.target.value)}}>
                        <option value="Bolos Caseiros">Bolos Caseiros</option>
                        <option value="Bolos com Calda">Bolos com Calda</option>
                        <option value="Bolos de Festa">Bolos de Festa</option>
                        <option value="Bolos de Pote">Bolos de Pote</option>
                        <option value="Bolos Funcional">Bolos Funcional</option>
                        <option value="Cheesecakes sem Forno">Cheesecakes sem Forno</option>
                        <option value="Rocambole">Rocambole</option>
                    </select>
                    <br />

                    <label><b>Nome: </b></label><br />
                    <input onChange={(e) => {setNome(e.target.value)}} type="text" name="nome" className="form-control w-150" />
                    <br />

                    <label><b>Preço: </b></label>
                    <input onChange={(e) => {setPreco(e.target.value)}} type="number" name="preco" className="form-control w-150" />
                    <br />

                    <label><b>Imagem: </b></label>
                    <input onChange={(e) => {setNome_imagem(e.target.value)}} type="file" name="nome_imagem" className="form-control w-150" />
                    <br />

                    <input onClick={cadastro} type="submit" className="btn btn-success" value="Cadastro" />
                </form>
            </section>
        </div>
    );
}
