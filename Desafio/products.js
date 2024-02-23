const AddLista = []

const tabelaProduto = document.getElementById("tabela-produto")
const btnProduto = document.getElementById("btn-produto")
const produtoName = documento.getElementById('inp-name')
const produtoAmount = document.getElementById('inp-amount');
const produtoPrice = document.getElementById('inp-price');

function saveLocalStorage(){
    const dbProduto = JSON.parse(localStorage.getItem('produtos')) ?? []
    AddLista.push(...dbProduto)
    showTable()
}
function AddProduto(e){
    e.preventDefault()
    AddLista.push({name: produtoName.value, amount: produtoAmount.value, price: produtoPrice.value})
    localStorage.setItem('produtos', JSON.stringify(AddLista))
    showTable()
    
}
function deleteProduto (index){
    AddLista.splice(index,1)
    localStorage.setItem('produtos', JSON.stringify(AddLista))
    showTable()
}
function showTable (){
    Lista = ''
    AddLista.forEach((x,index) => {
        Lista=  Lista + `
            <tr> 
                <td class="tbl-mr">000</td>
                <td class="tbl-mn">${x.name}</td>
                <td class="tbl-mn">${x.amount}</td>
                <td class="tbl-mn">${x.price}</td>
                <td class=""><button onclick='deleteCategoria(${index})'>Deletar</button></td>
            </tr>`
    });
    tabelaProduto.innerHTML= Lista
}
btnProduto.addEventListener('click', AddProduto)
saveLocalStorage()