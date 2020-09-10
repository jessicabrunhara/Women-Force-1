import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';

function GetDados() {
    const [dados, setDados] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
      const response = await fetch("https://women-force-f7eaf.firebaseio.com/empresas.json");
      const json = await response.json();
      setDados(json)
    } catch (error) {
      console.log(error);
  }
    }
    fetchData();
  }, []);

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Posição</th>
            <th>Empresa</th>
            <th>Nº Funcionários</th>
          </tr>
        </thead>
        <tbody>
            {dados.map((el)=>  
          <tr key={el.posição}>
            <td>{el.posição}</td>
            <td>{el.empresa}</td>
            <td>{el.funcionarios}</td>
          </tr>
      )}
        </tbody>
      </Table>
    </>
  )
}
export default GetDados;


