<h1>Agenda</h1>
<p>
    Um programa em Node.js que recebe um arquivo de contatos em formato .json e compara seus nomes usando Radix Tree.<br>
    O formato do arquivo deve ser:<br>
    <code>
        {
            "contatos": [
                {
                    "Nome":"Nome_da_pessoa",
                    "Endereço":"Endereço_da_pessoa",
                    "Telefone":"Telefone_da_pessoa"
                }
            ]
        }
    </code><br>
    Neste caso o nome será usado como identificador.
</p>
<p>
    Para executar o programa, instale-o e execute <code>npm install</code><br>
    Logo em seguida no terminal digite
    <code>node index.js -c [NOME_DO_CONTATO]</code>
    Onde a tag NOME_DO_CONTATO é o que voce deseja buscar dentro do arquivo json
</p>
