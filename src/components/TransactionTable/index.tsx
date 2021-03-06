import { useEffect } from 'react'
import { api } from '../../services/api'
import {Container} from './styles'

export function TransactionTable(){
    
    useEffect(()=>{
        api.get('transaction')
        .then(response => console.log(response.data))
    },[])
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento Website</td>
                        <td>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}