<h1>Prefixo</h1>
<p>
    Um programa em Node.js que recebe um arquivo de palavras em formato .json e compara os finais das trings usando Radix Tree.<br>
    O formato do arquivo deve ser:<br>
    <code>
        {
            "dicionario": [
                "Palavra 1",
                "Palavra 2",
                "Palavra N"
            ]
        }
    </code>
</p>
<p>
    Para executar o programa, instale-o e execute <code>npm install</code><br>
    Logo em seguida no terminal digite
    <code>node index.js -s [EndsWith_String]</code>
    Onde a tag EndsWith_String é o que voce deseja buscar dentro do arquivo json
</p>
