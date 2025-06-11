# InovaSocial - Marketplace de Tecnologia Sustentável

## 📋 Descrição do Projeto

O **InovaSocial** é um marketplace digital focado em tecnologia sustentável, inspirado no Facebook Marketplace. A plataforma conecta empresas de tecnologia verde com ONGs, pequenos negócios e órgãos públicos, facilitando o acesso a soluções inovadoras para desafios socioambientais.

## 🎨 Design e Interface

### Paleta de Cores
- **Azul Escuro** (#1a365d): Títulos e elementos de destaque
- **Verde Água/Ciano** (#00bcd4): Acentos, links e botões de ação
- **Branco** (#ffffff): Fundo principal das seções e cards
- **Cinza Escuro** (#2d3748): Texto principal e ícones

### Características Visuais
- Design moderno e responsivo
- Interface inspirada no Facebook Marketplace
- Tipografia Inter para melhor legibilidade
- Ícones Font Awesome para consistência visual
- Animações e transições suaves

## 🚀 Funcionalidades Implementadas

### Página Principal (index.html)
- **Header Fixo**: Logo, barra de pesquisa central, navegação
- **Sidebar Esquerda**: Categorias de soluções e filtros avançados
- **Grid de Anúncios**: Exibição responsiva dos produtos/soluções
- **Busca Dinâmica**: Filtro em tempo real por texto
- **Filtros Avançados**: Por preço, localização e tipo de empresa
- **Modal de Contato**: Formulário para entrar em contato com empresas

### Página de Detalhes (detalhes.html)
- **Galeria de Imagens**: Com navegação e indicadores
- **Informações Detalhadas**: Título, preço, descrição completa
- **Card da Empresa**: Logo, avaliação, localização, estatísticas
- **Abas Informativas**: Especificações, entrega e garantia
- **Botões de Ação**: Contato direto e solicitação de orçamento
- **Características Principais**: Lista de benefícios por categoria

### Interatividade JavaScript
- Busca e filtros dinâmicos
- Modal de contato responsivo
- Navegação entre páginas
- Galeria de imagens interativa
- Validação de formulários
- Animações e efeitos visuais

## 📁 Estrutura de Arquivos

```
inovasocial-marketplace/
├── index.html              # Página principal do marketplace
├── detalhes.html           # Página de detalhes do anúncio
├── styles.css              # Estilos CSS responsivos
├── script.js               # JavaScript principal
├── detalhes.js             # JavaScript da página de detalhes
├── dados-mock.js           # Dados simulados das soluções
├── relatorio-testes.md     # Relatório de testes realizados
└── README.md               # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com variáveis customizadas
- **JavaScript (Vanilla)**: Funcionalidades interativas
- **Font Awesome**: Biblioteca de ícones
- **Google Fonts**: Tipografia Inter

## 📊 Dados Mockados

O projeto inclui 12 soluções sustentáveis simuladas nas seguintes categorias:

1. **Energia Renovável** (4 soluções)
   - Sistema Solar Fotovoltaico
   - Turbina Eólica Residencial
   - Painel Solar Flexível
   - Estação de Carregamento Elétrico

2. **Gestão de Resíduos** (2 soluções)
   - Biodigestor Automático
   - Composteira Inteligente

3. **Agricultura Sustentável** (2 soluções)
   - Sistema de Irrigação IoT
   - Sistema Hidropônico

4. **Purificação de Água** (2 soluções)
   - Purificador Solar Portátil
   - Filtro Cerâmico Artesanal

5. **Mobilidade Verde** (2 soluções)
   - Bicicleta Elétrica Dobrável
   - Estação de Carregamento

6. **Construção Sustentável** (1 solução)
   - Telhado Verde Modular

## 🎯 Como Usar

### 1. Abrir o Marketplace
- Abra o arquivo `index.html` em um navegador moderno
- A página principal carregará com todas as soluções disponíveis

### 2. Navegar e Filtrar
- Use a barra de pesquisa para buscar soluções específicas
- Clique nas categorias da sidebar para filtrar por tipo
- Ajuste os filtros de preço, localização e tipo de empresa
- Use o botão "Limpar Filtros" para resetar

### 3. Visualizar Detalhes
- Clique em qualquer card de solução para ver detalhes
- Navegue pela galeria de imagens
- Explore as abas de especificações, entrega e garantia
- Use os botões de ação para contato ou orçamento

### 4. Entrar em Contato
- Clique no botão "Contato" em qualquer solução
- Preencha o formulário no modal
- Simule o envio da mensagem

## 📱 Responsividade

O marketplace é totalmente responsivo e funciona em:
- **Desktop**: Layout completo com sidebar
- **Tablet**: Layout adaptado com navegação otimizada
- **Mobile**: Menu hambúrguer e layout vertical

## 🔧 Personalização

### Modificar Cores
Edite as variáveis CSS no início do arquivo `styles.css`:
```css
:root {
    --primary-blue: #1a365d;
    --accent-cyan: #00bcd4;
    --background-white: #ffffff;
    --text-dark: #2d3748;
}
```

### Adicionar Soluções
Edite o array `solutions` no arquivo `dados-mock.js`:
```javascript
solutions: [
    {
        id: 13,
        title: "Nova Solução",
        description: "Descrição da solução...",
        price: 5000,
        category: "categoria",
        // ... outros campos
    }
]
```

### Modificar Categorias
Edite o array `categories` no arquivo `dados-mock.js` para adicionar novas categorias.

## 🧪 Testes Realizados

- ✅ Layout responsivo em diferentes tamanhos de tela
- ✅ Funcionalidade de busca e filtros
- ✅ Modal de contato e formulários
- ✅ Navegação entre páginas
- ✅ Galeria de imagens interativa
- ✅ Carregamento de dados mockados
- ✅ Validação de formulários
- ✅ Animações e transições

## 🚀 Próximos Passos

Para transformar em uma aplicação completa:

1. **Backend**: Implementar API REST para dados reais
2. **Banco de Dados**: Armazenar soluções, empresas e usuários
3. **Autenticação**: Sistema de login para empresas e compradores
4. **Pagamentos**: Integração com gateway de pagamento
5. **Chat**: Sistema de mensagens em tempo real
6. **Upload**: Sistema para empresas enviarem imagens
7. **Avaliações**: Sistema de reviews e ratings
8. **Notificações**: Alertas por email e push

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto:
- Email: contato@inovasocial.com
- Telefone: (11) 9999-9999

## 📄 Licença

Este projeto foi desenvolvido como demonstração de frontend para marketplace de tecnologia sustentável.

---

**Desenvolvido com 💚 para um futuro mais sustentável**

