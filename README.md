# Bio do Desenvolvedor - React Native App

Um aplicativo mobile desenvolvido em React Native que apresenta um perfil completo de desenvolvedor, incluindo projetos, qualificações, candidaturas e artigos. O app implementa navegação, consumo de APIs externas, armazenamento local e temas personalizados.

## 📱 Funcionalidades

- **Perfil do Desenvolvedor**: Exibição completa do perfil com informações pessoais
- **Projetos**: Lista de projetos do GitHub com detalhes
- **Qualificações**: Habilidades e certificações
- **Candidaturas**: Gerenciamento de candidaturas a vagas
- **Artigos**: Publicações do Dev.to
- **Configurações**: Edição de perfil e alternância de tema
- **Modo Escuro/Claro**: Tema personalizável
- **Navegação**: Stack Navigation e Bottom Tabs
- **Armazenamento Local**: Persistência de dados com AsyncStorage

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **React Navigation** - Navegação entre telas
- **Context API** - Gerenciamento de estado global
- **AsyncStorage** - Armazenamento local
- **GitHub API** - Consumo de dados de repositórios
- **Dev.to API** - Consumo de artigos publicados

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) (app para testar no dispositivo móvel)

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/walaceN7/DR3_TP3_walace_abreu_dos_santos_filho
```

### 2. Instale as dependências

#### Usando npm:

```bash
npm install
```

#### Usando yarn:

```bash
yarn install
```

### 3. Execute o projeto

#### Usando npm:

```bash
npm start
```

#### Usando yarn:

```bash
yarn start
```

### 4. Teste o aplicativo

Após executar o comando acima, você terá as seguintes opções:

- **Web**: Pressione `w` para abrir no navegador
- **iOS**: Pressione `i` para abrir no simulador iOS (apenas no macOS)
- **Android**: Pressione `a` para abrir no emulador Android
- **Dispositivo físico**: Escaneie o QR code com o app Expo Go

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── Card.js         # Componente de card personalizado
├── context/            # Contextos para gerenciamento de estado
│   ├── CandidaturasContext.js
│   ├── ThemeContext.js
│   └── UserContext.js
├── data/               # Dados mockados
│   └── vagasData.js
├── navigation/         # Configuração de navegação
│   └── AppNavigator.js
├── screens/            # Telas do aplicativo
│   ├── ArtigosScreen.js
│   ├── CandidaturasScreen.js
│   ├── HomeScreen.js
│   ├── ProfileScreen.js
│   ├── ProjetoDetailScreen.js
│   ├── ProjetosScreen.js
│   ├── QualificacoesScreen.js
│   ├── SettingsScreen.js
│   ├── VagasScreen.js
│   └── WebViewScreen.js
├── services/           # Serviços para consumo de APIs
│   ├── devto.js
│   └── github.js
├── storage/            # Configuração de armazenamento
│   └── candidaturasStorage.js
└── theme/              # Configuração de temas
    └── theme.js
```

## 🎨 Temas

O aplicativo suporta dois temas:

- **Modo Claro**: Interface com cores claras
- **Modo Escuro**: Interface com cores escuras

O tema pode ser alterado na tela de Configurações e é persistido localmente.

## 🔧 Configuração de APIs

### GitHub API

O aplicativo consome a API pública do GitHub para listar repositórios. Não é necessário token de autenticação para repositórios públicos.

### Dev.to API

Utiliza a API pública do Dev.to para buscar artigos publicados. Também não requer autenticação.

## 📱 Navegação

O aplicativo utiliza duas formas de navegação:

1. **Stack Navigation**: Para navegação entre telas principais
2. **Bottom Tabs**: Para acesso rápido às seções principais

### Estrutura de Navegação:

- **Home**: Tela inicial com resumo do perfil
- **Qualificações**: Lista de habilidades e certificações
- **Projetos**: Repositórios do GitHub
- **Vagas**: Lista de vagas disponíveis
- **Candidaturas**: Candidaturas realizadas

## 💾 Armazenamento Local

O aplicativo utiliza AsyncStorage para persistir:

- Estado das candidaturas
- Preferências de tema
- Dados do usuário

## 🧪 Testes

Para testar todas as funcionalidades:

1. Navegue entre todas as telas
2. Teste a alternância de tema
3. Adicione/remova candidaturas
4. Verifique a persistência dos dados
5. Teste a navegação para detalhes

## 📝 Exercícios Implementados

Este projeto implementa todos os 16 exercícios solicitados:

- ✅ **Exercício 1**: Planejamento e Estruturação da Arquitetura
- ✅ **Exercício 2**: Configuração do Projeto
- ✅ **Exercício 3**: Implementação de Navegação Stack
- ✅ **Exercício 4**: Criação da Home e Tela de Perfil
- ✅ **Exercício 5**: Implementação de Navegação Bottom Tabs
- ✅ **Exercício 6**: Página de Qualificações
- ✅ **Exercício 7**: Implementação de Context API
- ✅ **Exercício 8**: Tela de Candidaturas
- ✅ **Exercício 9**: Página de Projetos com Detalhes
- ✅ **Exercício 10**: Página de Artigos e Publicações
- ✅ **Exercício 11**: Consumo de API GitHub
- ✅ **Exercício 12**: Consumo de API Dev.to
- ✅ **Exercício 13**: Armazenamento Local com AsyncStorage
- ✅ **Exercício 14**: Tela de Configurações e Preferências
- ✅ **Exercício 15**: Customização do Tema e Estilização
- ✅ **Exercício 16**: Testes e Depuração Final
