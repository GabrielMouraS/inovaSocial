// JavaScript principal para o marketplace InovaSocial

// Estado global da aplicação
let currentFilters = {
    search: '',
    category: 'todas',
    priceRange: '',
    location: '',
    companyTypes: [],
    sort: 'relevancia'
};

let currentView = 'grid';
let isLoading = false;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Função principal de inicialização
function initializeApp() {
    setupEventListeners();
    loadSolutions();
    updateCategoryCounts();
}

// Configurar event listeners
function setupEventListeners() {
    // Busca
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }

    // Filtros de categoria
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            handleCategoryFilter(category);
        });
    });

    // Filtros
    const priceFilter = document.getElementById('priceFilter');
    const locationFilter = document.getElementById('locationFilter');
    const sortSelect = document.getElementById('sortSelect');
    const companyTypeFilters = document.querySelectorAll('.company-type-filter');
    
    if (priceFilter) {
        priceFilter.addEventListener('change', handlePriceFilter);
    }
    
    if (locationFilter) {
        locationFilter.addEventListener('change', handleLocationFilter);
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSortChange);
    }
    
    companyTypeFilters.forEach(filter => {
        filter.addEventListener('change', handleCompanyTypeFilter);
    });

    // Botão limpar filtros
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }

    // Toggle de visualização
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            handleViewToggle(view);
        });
    });

    // Modal de contato
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    
    if (closeModal) {
        closeModal.addEventListener('click', closeContactModal);
    }
    
    if (contactModal) {
        contactModal.addEventListener('click', function(e) {
            if (e.target === contactModal) {
                closeContactModal();
            }
        });
    }

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Menu mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Navegação
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.dataset.page) {
                e.preventDefault();
                handleNavigation(this.dataset.page);
            }
        });
    });
}

// Função de busca
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        currentFilters.search = searchInput.value.trim();
        loadSolutions();
    }
}

// Filtro por categoria
function handleCategoryFilter(category) {
    currentFilters.category = category;
    
    // Atualizar UI
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    loadSolutions();
}

// Filtro por preço
function handlePriceFilter() {
    const priceFilter = document.getElementById('priceFilter');
    currentFilters.priceRange = priceFilter.value;
    loadSolutions();
}

// Filtro por localização
function handleLocationFilter() {
    const locationFilter = document.getElementById('locationFilter');
    currentFilters.location = locationFilter.value;
    loadSolutions();
}

// Filtro por tipo de empresa
function handleCompanyTypeFilter() {
    const checkedTypes = Array.from(document.querySelectorAll('.company-type-filter:checked'))
        .map(checkbox => checkbox.value);
    currentFilters.companyTypes = checkedTypes;
    loadSolutions();
}

// Mudança de ordenação
function handleSortChange() {
    const sortSelect = document.getElementById('sortSelect');
    currentFilters.sort = sortSelect.value;
    loadSolutions();
}

// Toggle de visualização
function handleViewToggle(view) {
    currentView = view;
    
    // Atualizar botões
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-view="${view}"]`).classList.add('active');
    
    // Atualizar grid
    const adsGrid = document.getElementById('adsGrid');
    if (adsGrid) {
        adsGrid.className = view === 'list' ? 'ads-list' : 'ads-grid';
    }
    
    loadSolutions();
}

// Limpar todos os filtros
function clearAllFilters() {
    currentFilters = {
        search: '',
        category: 'todas',
        priceRange: '',
        location: '',
        companyTypes: [],
        sort: 'relevancia'
    };
    
    // Resetar UI
    document.getElementById('searchInput').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('locationFilter').value = '';
    document.getElementById('sortSelect').value = 'relevancia';
    
    document.querySelectorAll('.company-type-filter').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('[data-category="todas"]').classList.add('active');
    
    loadSolutions();
}

// Carregar e renderizar soluções
function loadSolutions() {
    if (isLoading) return;
    
    isLoading = true;
    showLoading();
    
    // Simular delay de carregamento
    setTimeout(() => {
        const filteredSolutions = getFilteredSolutions(currentFilters);
        renderSolutions(filteredSolutions);
        updateResultsInfo(filteredSolutions.length);
        updateActiveFilters();
        isLoading = false;
        hideLoading();
    }, 300);
}

// Renderizar soluções no grid
function renderSolutions(solutions) {
    const adsGrid = document.getElementById('adsGrid');
    const noResults = document.getElementById('noResults');
    
    if (!adsGrid) return;
    
    if (solutions.length === 0) {
        adsGrid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    adsGrid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';
    
    adsGrid.innerHTML = solutions.map(solution => createSolutionCard(solution)).join('');
    
    // Adicionar event listeners aos cards
    adsGrid.querySelectorAll('.ad-card').forEach(card => {
        card.addEventListener('click', function() {
            const solutionId = this.dataset.id;
            navigateToDetails(solutionId);
        });
    });
    
    // Event listeners para botões de ação
    adsGrid.querySelectorAll('.btn-contact').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            openContactModal();
        });
    });
    
    adsGrid.querySelectorAll('.btn-favorite').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleFavorite(this);
        });
    });
}

// Criar card de solução
function createSolutionCard(solution) {
    return `
        <div class="ad-card" data-id="${solution.id}">
            <div class="ad-image" style="background-image: url('${solution.image}')">
                <div class="ad-badge">${solution.badge}</div>
            </div>
            <div class="ad-content">
                <h3 class="ad-title">${solution.title}</h3>
                <p class="ad-description">${solution.description}</p>
                <div class="ad-price">${formatPrice(solution.price)}</div>
                <div class="ad-company">
                    <div class="company-logo">${solution.company.logo}</div>
                    <div class="company-info">
                        <div class="company-name">${solution.company.name}</div>
                        <div class="company-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${solution.company.location}
                        </div>
                    </div>
                </div>
                <div class="ad-actions">
                    <button class="btn-primary btn-contact">
                        <i class="fas fa-comments"></i>
                        Contato
                    </button>
                    <button class="btn-secondary btn-favorite">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Navegar para página de detalhes
function navigateToDetails(solutionId) {
    // Salvar ID da solução no localStorage para a página de detalhes
    localStorage.setItem('currentSolutionId', solutionId);
    window.location.href = 'detalhes.html';
}

// Atualizar informações de resultados
function updateResultsInfo(count) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `${count} solução${count !== 1 ? 'ões' : ''} encontrada${count !== 1 ? 's' : ''}`;
    }
}

// Atualizar filtros ativos
function updateActiveFilters() {
    const activeFilters = document.getElementById('activeFilters');
    if (!activeFilters) return;
    
    const filters = [];
    
    if (currentFilters.search) {
        filters.push({
            type: 'search',
            label: `Busca: "${currentFilters.search}"`,
            value: currentFilters.search
        });
    }
    
    if (currentFilters.category !== 'todas') {
        const category = mockData.categories.find(c => c.id === currentFilters.category);
        if (category) {
            filters.push({
                type: 'category',
                label: category.name,
                value: currentFilters.category
            });
        }
    }
    
    if (currentFilters.priceRange) {
        filters.push({
            type: 'price',
            label: `Preço: ${getPriceRangeLabel(currentFilters.priceRange)}`,
            value: currentFilters.priceRange
        });
    }
    
    if (currentFilters.location) {
        const location = mockData.locations.find(l => l.id === currentFilters.location);
        if (location) {
            filters.push({
                type: 'location',
                label: location.name,
                value: currentFilters.location
            });
        }
    }
    
    currentFilters.companyTypes.forEach(type => {
        const companyType = mockData.companyTypes.find(ct => ct.id === type);
        if (companyType) {
            filters.push({
                type: 'companyType',
                label: companyType.name,
                value: type
            });
        }
    });
    
    activeFilters.innerHTML = filters.map(filter => `
        <div class="filter-tag">
            ${filter.label}
            <button onclick="removeFilter('${filter.type}', '${filter.value}')">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

// Remover filtro específico
function removeFilter(type, value) {
    switch (type) {
        case 'search':
            currentFilters.search = '';
            document.getElementById('searchInput').value = '';
            break;
        case 'category':
            currentFilters.category = 'todas';
            document.querySelectorAll('.category-item').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelector('[data-category="todas"]').classList.add('active');
            break;
        case 'price':
            currentFilters.priceRange = '';
            document.getElementById('priceFilter').value = '';
            break;
        case 'location':
            currentFilters.location = '';
            document.getElementById('locationFilter').value = '';
            break;
        case 'companyType':
            currentFilters.companyTypes = currentFilters.companyTypes.filter(t => t !== value);
            document.querySelector(`input[value="${value}"]`).checked = false;
            break;
    }
    
    loadSolutions();
}

// Obter label da faixa de preço
function getPriceRangeLabel(range) {
    const labels = {
        '0-1000': 'Até R$ 1.000',
        '1000-5000': 'R$ 1.000 - R$ 5.000',
        '5000-10000': 'R$ 5.000 - R$ 10.000',
        '10000-50000': 'R$ 10.000 - R$ 50.000',
        '50000+': 'Acima de R$ 50.000'
    };
    return labels[range] || range;
}

// Atualizar contadores de categoria
function updateCategoryCounts() {
    mockData.categories.forEach(category => {
        const categoryElement = document.querySelector(`[data-category="${category.id}"] span`);
        if (categoryElement && category.id !== 'todas') {
            categoryElement.textContent = `${category.name} (${category.count})`;
        }
    });
}

// Modal de contato
function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focar no primeiro campo
        setTimeout(() => {
            const firstInput = modal.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 100);
    }
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Limpar formulário
        const form = modal.querySelector('form');
        if (form) form.reset();
    }
}

// Submissão do formulário de contato
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simular envio
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    setTimeout(() => {
        alert('Mensagem enviada com sucesso! A empresa entrará em contato em breve.');
        closeContactModal();
        
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }, 2000);
}

// Toggle favorito
function toggleFavorite(btn) {
    const icon = btn.querySelector('i');
    const isFavorited = icon.classList.contains('fas');
    
    if (isFavorited) {
        icon.classList.remove('fas');
        icon.classList.add('far');
        btn.style.color = '';
    } else {
        icon.classList.remove('far');
        icon.classList.add('fas');
        btn.style.color = '#e53e3e';
    }
}

// Menu mobile
function toggleMobileMenu() {
    // Implementar toggle do menu mobile
    console.log('Toggle mobile menu');
}

// Navegação
function handleNavigation(page) {
    // Atualizar navegação ativa
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-page="${page}"]`).classList.add('active');
    
    // Simular navegação
    switch (page) {
        case 'home':
            // Já estamos na home
            break;
        case 'messages':
            alert('Funcionalidade de mensagens em desenvolvimento');
            break;
        case 'profile':
            alert('Funcionalidade de perfil em desenvolvimento');
            break;
    }
}

// Loading
function showLoading() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    const adsGrid = document.getElementById('adsGrid');
    
    if (loadingSpinner) loadingSpinner.style.display = 'flex';
    if (adsGrid) adsGrid.style.opacity = '0.5';
}

function hideLoading() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    const adsGrid = document.getElementById('adsGrid');
    
    if (loadingSpinner) loadingSpinner.style.display = 'none';
    if (adsGrid) adsGrid.style.opacity = '1';
}

// Utility: Debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility: Scroll suave
function smoothScrollTo(element) {
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC para fechar modal
    if (e.key === 'Escape') {
        closeContactModal();
    }
    
    // Ctrl/Cmd + K para focar na busca
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
    }
});

// Exportar funções globais
window.openContactModal = openContactModal;
window.closeContactModal = closeContactModal;
window.clearAllFilters = clearAllFilters;
window.removeFilter = removeFilter;

