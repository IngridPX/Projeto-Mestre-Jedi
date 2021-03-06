import '../estilo.css';
import { Container } from 'react-bootstrap';


export default function Lojas(){
    return(
        <Container>
            <h2 className="titulo"> Nossas Lojas </h2>
            <div className="lojas">    
            <div className="loja">
                <h3 className="cidade">Campinas</h3>
                <p>R. Joaquim Norberto, 78</p>
                <p>Jardim Santa Genebra</p>
                <p>CEP: 13080-150</p>
                <p>Telefone: (19)7654-9876</p>
            </div>
            <div className="loja">
                <h3 className="cidade">Guarulhos</h3>
                <p>Praça do Rosário, 120</p>
                <p>Centro</p>
                <p>CEP: 07010-015</p>
                <p>Telefone: (11)4865-8212</p>
            </div>
            <div className="loja">
                <h3 className="cidade">Juiz de Fora</h3>
                <p>Rua Oscar Vidal, 174</p>
                <p>Centro</p>
                <p>CEP: 36010-060</p>
                <p>Telefone: (32)6587-1829</p>
            </div>
            <div className="loja">
                <h3 className="cidade">Petrópolis</h3>
                <p>Rua Fonseca Ramos, 07</p>
                <p>Centro</p>
                <p>CEP: 25610-170</p>
                <p>Telefone: (24)6357-6543</p>
            </div>
            <div className="loja">
                <h3 className="cidade">Rio de Janeiro</h3>
                <p>R. André Cavalcanti, 50</p>
                <p>Centro</p>
                <p>CEP: 20231-050</p>
                <p>Telefone: (21)8765-9879</p>
            </div>
            <div className="loja">
                <h3 className="cidade">São Paulo</h3>
                <p>Avenida Paulista, 1720</p>
                <p>Jardins</p>
                <p>CEP: 01310-200</p>
                <p>Telefone: (11)6587-1829</p>
            </div>
        </div>
        </Container>
    )
}