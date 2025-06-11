// JavaScript para a página de detalhes do anúncio

let currentSolution = null;
let currentImageIndex = 0;
let solutionImages = [];

// Inicialização da página de detalhes
document.addEventListener('DOMContentLoaded', function() {
    initializeDetailsPage();
});

function initializeDetailsPage() {
    loadSolutionDetails();
    setupDetailsEventListeners();
}

// Carregar detalhes da solução
function loadSolutionDetails() {
    // Obter ID da solução do localStorage ou URL
    const solutionId = localStorage.getItem('currentSolutionId') || getUrlParameter('id') || '1';
    
    // Buscar solução nos dados mockados
    currentSolution = getSolutionById(solutionId);
    
    if (!currentSolution) {
        // Redirecionar para home se solução não encontrada
        window.location.href = 'index.html';
        return;
    }
    
    // Renderizar informações da solução
    renderSolutionDetails();
    setupImageGallery();
}

// Renderizar detalhes da solução
function renderSolutionDetails() {
    if (!currentSolution) return;
    
    // Título e breadcrumb
    document.getElementById('solutionTitle').textContent = currentSolution.title;
    document.getElementById('breadcrumbTitle').textContent = currentSolution.title;
    
    // Preço
    document.getElementById('solutionPrice').textContent = formatPrice(currentSolution.price);
    
    // Descrição
    document.getElementById('solutionDescription').textContent = currentSolution.description;
    
    // Badge
    document.getElementById('solutionBadge').textContent = currentSolution.badge;
    
    // Informações da empresa
    document.getElementById('companyName').textContent = currentSolution.company.name;
    document.getElementById('companyLocation').textContent = currentSolution.company.location;
    document.getElementById('companyType').textContent = getCompanyTypeLabel(currentSolution.company.type);
    document.getElementById('companyLogoLarge').textContent = currentSolution.company.logo;
    
    // Estatísticas
    document.getElementById('companyRating').textContent = currentSolution.rating.toFixed(1);
    document.getElementById('companyViews').textContent = formatViews(currentSolution.views);
    
    // Categoria nas especificações
    const categoryName = mockData.categories.find(c => c.id === currentSolution.category)?.name || 'N/A';
    document.getElementById('specCategory').textContent = categoryName;
    
    // Características principais
    renderFeatures();
    
    // Atualizar título da página
    document.title = `${currentSolution.title} - InovaSocial`;
}

// Renderizar características
function renderFeatures() {
    const featuresList = document.getElementById('featuresList');
    if (!featuresList) return;
    
    // Características baseadas na categoria da solução
    const features = getFeaturesByCategory(currentSolution.category);
    
    featuresList.innerHTML = features.map(feature => `
        <li class="feature-item">
            <div class="feature-icon">
                <i class="${feature.icon}"></i>
            </div>
            <div>
                <strong>${feature.title}</strong>
                <p>${feature.description}</p>
            </div>
        </li>
    `).join('');
}

// Obter características por categoria
function getFeaturesByCategory(category) {
    const featuresMap = {
        'energia-renovavel': [
            {
                icon: 'fas fa-sun',
                title: 'Energia Limpa',
                description: 'Fonte 100% renovável e sustentável'
            },
            {
                icon: 'fas fa-chart-line',
                title: 'Alta Eficiência',
                description: 'Máximo aproveitamento energético'
            },
            {
                icon: 'fas fa-tools',
                title: 'Instalação Incluída',
                description: 'Equipe técnica especializada'
            },
            {
                icon: 'fas fa-shield-alt',
                title: 'Garantia Estendida',
                description: 'Proteção de 5 a 25 anos'
            }
        ],
        'gestao-residuos': [
            {
                icon: 'fas fa-recycle',
                title: 'Reciclagem Total',
                description: 'Aproveitamento máximo dos resíduos'
            },
            {
                icon: 'fas fa-robot',
                title: 'Automação',
                description: 'Processo totalmente automatizado'
            },
            {
                icon: 'fas fa-leaf',
                title: 'Eco-friendly',
                description: 'Processo ambientalmente correto'
            },
            {
                icon: 'fas fa-money-bill-wave',
                title: 'Economia',
                description: 'Redução de custos operacionais'
            }
        ],
        'agricultura-sustentavel': [
            {
                icon: 'fas fa-seedling',
                title: 'Cultivo Sustentável',
                description: 'Práticas agrícolas responsáveis'
            },
            {
                icon: 'fas fa-tint',
                title: 'Economia de Água',
                description: 'Redução de até 90% no consumo'
            },
            {
                icon: 'fas fa-chart-bar',
                title: 'Maior Produtividade',
                description: 'Aumento significativo na produção'
            },
            {
                icon: 'fas fa-mobile-alt',
                title: 'Monitoramento IoT',
                description: 'Controle remoto via aplicativo'
            }
        ],
        'purificacao-agua': [
            {
                icon: 'fas fa-water',
                title: 'Água Pura',
                description: 'Remove 99,9% das impurezas'
            },
            {
                icon: 'fas fa-heart',
                title: 'Saúde Garantida',
                description: 'Elimina bactérias e vírus'
            },
            {
                icon: 'fas fa-solar-panel',
                title: 'Energia Solar',
                description: 'Funcionamento sustentável'
            },
            {
                icon: 'fas fa-users',
                title: 'Uso Comunitário',
                description: 'Ideal para comunidades'
            }
        ],
        'mobilidade-verde': [
            {
                icon: 'fas fa-leaf',
                title: 'Zero Emissão',
                description: 'Transporte limpo e sustentável'
            },
            {
                icon: 'fas fa-battery-full',
                title: 'Longa Autonomia',
                description: 'Bateria de alta capacidade'
            },
            {
                icon: 'fas fa-city',
                title: 'Mobilidade Urbana',
                description: 'Ideal para centros urbanos'
            },
            {
                icon: 'fas fa-dollar-sign',
                title: 'Economia',
                description: 'Redução de custos com combustível'
            }
        ],
        'construcao-sustentavel': [
            {
                icon: 'fas fa-building',
                title: 'Construção Verde',
                description: 'Materiais sustentáveis'
            },
            {
                icon: 'fas fa-thermometer-half',
                title: 'Isolamento Térmico',
                description: 'Redução da temperatura interna'
            },
            {
                icon: 'fas fa-cloud-rain',
                title: 'Captação de Água',
                description: 'Aproveitamento da água da chuva'
            },
            {
                icon: 'fas fa-coins',
                title: 'Economia Energética',
                description: 'Redução nos custos de energia'
            }
        ]
    };
    
    return featuresMap[category] || [
        {
            icon: 'fas fa-check',
            title: 'Qualidade Garantida',
            description: 'Produto de alta qualidade'
        },
        {
            icon: 'fas fa-support',
            title: 'Suporte Técnico',
            description: 'Assistência especializada'
        }
    ];
}

// Configurar galeria de imagens
function setupImageGallery() {
    // Simular múltiplas imagens para a galeria
    solutionImages = [
        currentSolution.image,
        currentSolution.image.replace('w=400', 'w=600'), // Variação da mesma imagem
        currentSolution.image.replace('h=300', 'h=400'), // Outra variação
        currentSolution.image.replace('fit=crop', 'fit=fill') // Mais uma variação
    ];
    
    currentImageIndex = 0;
    updateMainImage();
    createImageIndicators();
}

// Atualizar imagem principal
function updateMainImage() {
    const mainImage = document.getElementById('mainImage');
    if (mainImage && solutionImages[currentImageIndex]) {
        mainImage.style.backgroundImage = `url('${solutionImages[currentImageIndex]}')`;
    }
    
    // Atualizar indicadores
    updateImageIndicators();
}

// Criar indicadores de imagem
function createImageIndicators() {
    const indicators = document.getElementById('imageIndicators');
    if (!indicators) return;
    
    indicators.innerHTML = solutionImages.map((_, index) => `
        <div class="indicator ${index === currentImageIndex ? 'active' : ''}" 
             onclick="goToImage(${index})"></div>
    `).join('');
}

// Atualizar indicadores
function updateImageIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentImageIndex);
    });
}

// Navegar para imagem específica
function goToImage(index) {
    if (index >= 0 && index < solutionImages.length) {
        currentImageIndex = index;
        updateMainImage();
    }
}

// Imagem anterior
function previousImage() {
    currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : solutionImages.length - 1;
    updateMainImage();
}

// Próxima imagem
function nextImage() {
    currentImageIndex = currentImageIndex < solutionImages.length - 1 ? currentImageIndex + 1 : 0;
    updateMainImage();
}

// Configurar event listeners específicos da página de detalhes
function setupDetailsEventListeners() {
    // Navegação por teclado na galeria
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            previousImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    });
    
    // Auto-play da galeria (opcional)
    // setInterval(nextImage, 5000);
}

// Mostrar aba específica
function showTab(tabName) {
    // Remover classe active de todas as abas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Ativar aba selecionada
    document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// Solicitar orçamento
function requestQuote() {
    if (!currentSolution) return;
    
    // Pré-preencher modal de contato com informações do orçamento
    openContactModal();
    
    setTimeout(() => {
        const messageTextarea = document.getElementById('contactMessage');
        if (messageTextarea) {
            messageTextarea.value = `Olá! Tenho interesse na solução "${currentSolution.title}" e gostaria de solicitar um orçamento detalhado. Aguardo retorno.`;
        }
    }, 100);
}

// Funções utilitárias específicas da página de detalhes

// Obter label do tipo de empresa
function getCompanyTypeLabel(type) {
    const labels = {
        'startup': 'Startup',
        'empresa': 'Empresa Estabelecida',
        'cooperativa': 'Cooperativa'
    };
    return labels[type] || type;
}

// Formatar visualizações
function formatViews(views) {
    if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'k';
    }
    return views.toString();
}

// Obter parâmetro da URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Compartilhar solução
function shareSolution() {
    if (navigator.share && currentSolution) {
        navigator.share({
            title: currentSolution.title,
            text: currentSolution.description,
            url: window.location.href
        });
    } else {
        // Fallback: copiar URL para clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copiado para a área de transferência!');
        });
    }
}

// Reportar anúncio
function reportAd() {
    const reason = prompt('Por favor, informe o motivo do report:');
    if (reason) {
        alert('Report enviado com sucesso. Nossa equipe irá analisar.');
    }
}

// Adicionar aos favoritos
function addToFavorites() {
    if (!currentSolution) return;
    
    // Simular adição aos favoritos
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (!favorites.includes(currentSolution.id)) {
        favorites.push(currentSolution.id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Solução adicionada aos favoritos!');
    } else {
        alert('Esta solução já está nos seus favoritos.');
    }
}

// Exportar funções globais
window.previousImage = previousImage;
window.nextImage = nextImage;
window.goToImage = goToImage;
window.showTab = showTab;
window.requestQuote = requestQuote;
window.shareSolution = shareSolution;
window.reportAd = reportAd;
window.addToFavorites = addToFavorites;

