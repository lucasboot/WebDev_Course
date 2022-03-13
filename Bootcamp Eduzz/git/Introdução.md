*SHA1
Secure Hash Algorithm
Conjunto de funções hash criptográficas projetadas pela NSA
- Gera conjunto de identificação 40 dig
> openssl sha1 arquivo.txt

*BLOBS
Arquivos
metadados, n guarda nome
> echo 'conteudo' | git hash-object --stdin
chave1

> echo -e 'conteudo' | openssl sha1
chave 2

chave1 =/= chave 2
BLOB tem tipo, tamanho, \0

> echo -e 'blob 9\0conteudo' | openssl sha1
chave1

*TREES
Pastas
Tem metadados, guarda o nome, aponta para diretórias, recursivamente.
Árvores apontam pra blobs ou outras árvores

*COMMITS
- Aponta para árvore, parente, autor, mensagem, timestamp

*Sistema distribuído seguro
- Versões confiáveis de todas as versões de commit

