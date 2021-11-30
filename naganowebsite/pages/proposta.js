import next from "next";
import React, { useState, useEffect } from "react";

export default function proposta() {
  const [proposta, setProposta] = useState([]);
  const [propostaId, setPropostaId] = useState(0);
  const [propostaNome, setPropostaNome] = useState("");
  const [propostaDescricao, setPropostaDescricao] = useState("");
  const [propostaData, setPropostaData] = useState("");
  const [propostaStatus, setPropostaStatus] = useState("");
  const [propostaValor, setPropostaValor] = useState("");
  const [propostaCliente, setPropostaCliente] = useState("");
  const [propostaClienteId, setPropostaClienteId] = useState(0);
  const [propostaClienteNome, setPropostaClienteNome] = useState("");
  const [propostaClienteEmail, setPropostaClienteEmail] = useState("");
  const [propostaClienteTelefone, setPropostaClienteTelefone] = useState("");
  const [propostaClienteCelular, setPropostaClienteCelular] = useState("");
  const [propostaClienteCep, setPropostaClienteCep] = useState("");
  const [propostaClienteEndereco, setPropostaClienteEndereco] = useState("");
  const [propostaClienteNumero, setPropostaClienteNumero] = useState("");
  const [propostaClienteComplemento, setPropostaClienteComplemento] = useState("");
  const [propostaClienteBairro, setPropostaClienteBairro] = useState("");
  const [propostaClienteCidade, setPropostaClienteCidade] = useState("");
  const [propostaClienteEstado, setPropostaClienteEstado] = useState("");
  const [propostaClientePais, setPropostaClientePais] = useState("");
  const [propostaClienteCpf, setPropostaClienteCpf] = useState("");
  const [propostaClienteRg, setPropostaClienteRg] = useState("");


    useEffect(() => {
        const url = "http://localhost:3000/api/proposta";
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setProposta(data);
        });
    }
    , []);

    useEffect(() => {
        const url = "http://localhost:3000/api/cliente";
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPropostaCliente(data);
        });
    }
    , []);

    function handleSubmit(event) {
        event.preventDefault();
        const url = "http://localhost:3000/api/proposta";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: propostaNome,
                descricao: propostaDescricao,
                data: propostaData,
                status: propostaStatus,
                valor: propostaValor,
                cliente_id: propostaClienteId
            })
        })
        .then(response => response.json())
        .then(data => {
            setProposta(data);
            setPropostaNome("");
            setPropostaDescricao("");
            setPropostaData("");
            setPropostaStatus("");
            setPropostaValor("");
            setPropostaClienteId("");
        });
    }

    function handleEdit(event) {
        event.preventDefault();
        const url = "http://localhost:3000/api/proposta/" + propostaId;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: propostaNome,
                descricao: propostaDescricao,
                data: propostaData,
                status: propostaStatus,
                valor: propostaValor,
                cliente_id: propostaClienteId
            })
        })
        .then(response => response.json())
        .then(data => {
            setProposta(data);
            setPropostaNome("");
            setPropostaDescricao("");
            setPropostaData("");
            setPropostaStatus("");
            setPropostaValor("");
            setPropostaClienteId("");
        });
    }

    function handleDelete(event) {
        event.preventDefault();
        const url = "http://localhost:3000/api/proposta/" + propostaId;
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setProposta(data);
            setPropostaNome("");
            setPropostaDescricao("");
            setPropostaData("");
            setPropostaStatus("");
            setPropostaValor("");
            setPropostaClienteId("");
        });
    }

    function handleEditCliente(event) {
        event.preventDefault();
        const url = "http://localhost:3000/api/cliente/" + propostaClienteId;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: propostaClienteNome,
                email: propostaClienteEmail,
                telefone: propostaClienteTelefone,
                celular: propostaClienteCelular,
                cep: propostaClienteCep,
                endereco: propostaClienteEndereco,
                numero: propostaClienteNumero,
                complemento: propostaClienteComplemento,
                bairro: propostaClienteBairro,
                cidade: propostaClienteCidade,
                estado: propostaClienteEstado,
                pais: propostaClientePais,
                cpf: propostaClienteCpf,
                rg: propostaClienteRg
            })
        })
        .then(response => response.json())
        .then(data => {
            setPropostaCliente(data);
            setPropostaClienteNome("");
            setPropostaClienteEmail("");
            setPropostaClienteTelefone("");
            setPropostaClienteCelular("");
            setPropostaClienteCep("");
            setPropostaClienteEndereco("");
            setPropostaClienteNumero("");
            setPropostaClienteComplemento("");
            setPropostaClienteBairro("");
            setPropostaClienteCidade("");
            setPropostaClienteEstado("");
            setPropostaClientePais("");
            setPropostaClienteCpf("");
            setPropostaClienteRg("");
        });
    }

    function handleDeleteCliente(event) {
        event.preventDefault();
        const url = "http://localhost:3000/api/cliente/" + propostaClienteId;
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setPropostaCliente(data);
            setPropostaClienteNome("");
            setPropostaClienteEmail("");
            setPropostaClienteTelefone("");
            setPropostaClienteCelular("");
            setPropostaClienteCep("");
            setPropostaClienteEndereco("");
            setPropostaClienteNumero("");
            setPropostaClienteComplemento("");
            setPropostaClienteBairro("");
            setPropostaClienteCidade("");
            setPropostaClienteEstado("");
            setPropostaClientePais("");
            setPropostaClienteCpf("");
            setPropostaClienteRg("");
        });
    }

    function handleSubmitCliente(event) {
        event.preventDefault();
        const url = "http://localhost:3000/api/cliente";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: propostaClienteNome,
                email: propostaClienteEmail,
                telefone: propostaClienteTelefone,
                celular: propostaClienteCelular,
                cep: propostaClienteCep,
                endereco: propostaClienteEndereco,
                numero: propostaClienteNumero,
                complemento: propostaClienteComplemento,
                bairro: propostaClienteBairro,
                cidade: propostaClienteCidade,
                estado: propostaClienteEstado,
                pais: propostaClientePais,
                cpf: propostaClienteCpf,
                rg: propostaClienteRg
            })
        })
        .then(response => response.json())
        .then(data => {
            setPropostaCliente(data);
            setPropostaClienteNome("");
            setPropostaClienteEmail("");
            setPropostaClienteTelefone("");
            setPropostaClienteCelular("");
            setPropostaClienteCep("");
            setPropostaClienteEndereco("");
            setPropostaClienteNumero("");
            setPropostaClienteComplemento("");
            setPropostaClienteBairro("");
            setPropostaClienteCidade("");
            setPropostaClienteEstado("");
            setPropostaClientePais("");
            setPropostaClienteCpf("");
            setPropostaClienteRg("");
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Proposta</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" value={propostaNome} onChange={e => setPropostaNome(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Descrição</label>

                            <textarea className="form-control" value={propostaDescricao} onChange={e => setPropostaDescricao(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Data</label>

                            <input type="date" className="form-control" value={propostaData} onChange={e => setPropostaData(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Status</label>

                            <input type="text" className="form-control" value={propostaStatus} onChange={e => setPropostaStatus(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Cliente</label>

                            <select className="form-control" value={propostaClienteId} onChange={e => setPropostaClienteId(e.target.value)}>
                                <option value="">Selecione</option>
                             
        
                
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Valor</label>
                                    
                            <input type="text" className="form-control" value={propostaValor} onChange={e => setPropostaValor(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Observação</label>

                            <textarea className="form-control" value={propostaValor} onChange={e => setPropostaObservacao(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Data de Pagamento</label>

                            <input type="date" className="form-control" value={propostaCliente} onChange={e => setPropostaDataPagamento(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Data de Vencimento</label>

                            <input type="date" className="form-control" value={propostaCliente} onChange={e => setPropostaDataVencimento(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Data de Pagamento</label>

                            <input type="text" className="form-control" value={propostaCliente} onChange={e => setPropostaPagamento(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Data de Vencimento</label>
                                    
                            <input type="text" className="form-control" value={propostaCliente} onChange={e => setPropostaVencimento(e.target.value)} />
                        </div>


                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );

} 