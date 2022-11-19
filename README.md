### Versão NodeJs.

- Usar a versão do node 14.18.1 ou superior.
- Usar Yarn

### Instalação dos packpage e módulos.

```bash
    yarn
```

### Rodar servidor local dev.

```bash
    yarn dev
```

### Build Homolog.

```bash
    yarn build:staging
```

### Build Produção.

```bash
    yarn build:production
```

### Rodar a versão compilada que vai para homolog ou produção.

```bash
    yarn start
```

### Estrutura do projeto.

public/images - Imagens
src/componentes - Componentes diversos
src/interfaces - Interfaces e outros Types
src/json - Arrays e objetos
src/page/Index - Arquivo principal onde será chamado as sessões
src/styles/pages - CSS das páginas e sessões
src/styles/globalStyles - CSS globais e resets
src/styles/theme - Configuração de cada tema(cores, fonts, etc)

### Importante.

.env - Variáveis de ambiente Local(yarn dev)
.env.staging - Variáveis de ambiente pre-prod(yarn build:staging)
.env.production - Variáveis de ambiente prod(yarn build:production)

nestes arquivos consta a variável NEXT_PUBLIC_BASE_PATH que serve para mudar o caminho das imagens em cada ambiente.
Sempre que começar, mudar o valor conforme o caminho que será publicado no ftp, Exemplo

.env - NEXT_PUBLIC_BASE_PATH=http://localhost:3015/
.env.staging - NEXT_PUBLIC_BASE_PATH=http://preprod-secure-static.vans.com.br/content/vns/nextjs/
.env.production - NEXT_PUBLIC_BASE_PATH=http://secure-static.vans.com.br/content/vns/nextjs/


### Tecnologias usada.

### **Next JS**
https://nextjs.org/docs/getting-started

### **Styled Components**
https://styled-components.com/docs