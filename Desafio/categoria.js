    const AddLista = []

    const tabelaCategoria = document.getElementById("tabela-categoria")
    const btnAdicionar = document.getElementById("btn")
    const categoriaNome = document.getElementById('categoria-name');
    const categoriaTax = document.getElementById('tax-name');

    function saveLocalStorage(){
        const dbCategoria = JSON.parse(localStorage.getItem('categorias')) ?? []
        AddLista.push(...dbCategoria)
        showTable()
    }
    function AddCategoria(e){
        e.preventDefault()
        AddLista.push({name: categoriaNome.value, valor: categoriaTax.value})
        localStorage.setItem('categorias', JSON.stringify(AddLista))
        showTable()
        
    }
    function deleteCategoria (index){
        AddLista.splice(index,1)
        localStorage.setItem('categorias', JSON.stringify(AddLista))
        showTable()
    }
    function showTable (){
        Lista = ''
        AddLista.forEach((x,index) => {
            Lista=  Lista + `
                <tr> 
                    <td class="tbl-mr">000</td>
                    <td class="tbl-mn">${x.name}</td>
                    <td class="tbl-mn">${x.valor}</td>
                    <td class=""><button onclick='deleteCategoria(${index})'>Deletar</button></td>
                </tr>`
        });
        tabelaCategoria.innerHTML= Lista
    }
    btnAdicionar.addEventListener('click', AddCategoria)
    saveLocalStorage()