// Dados mockados para o marketplace InovaSocial
const mockData = {
    // Dados das soluções/anúncios
    solutions: [
        {
            id: 1,
            title: "Sistema Solar Fotovoltaico Residencial",
            description: "Kit completo de energia solar para residências, incluindo painéis, inversor e instalação. Reduz até 95% da conta de luz.",
            price: 15000,
            category: "energia-renovavel",
            company: {
                name: "SolarTech Brasil",
                location: "São Paulo, SP",
                type: "empresa",
                logo: "ST"
            },
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
            badge: "Mais Vendido",
            featured: true,
            dateAdded: "2024-01-15",
            views: 1250,
            rating: 4.8
        },
        {
            id: 2,
            title: "Biodigestor para Tratamento de Resíduos Orgânicos",
            description: "Sistema automatizado para transformar resíduos orgânicos em biogás e fertilizante natural. Ideal para condomínios e empresas.",
            price: 8500,
            category: "gestao-residuos",
            company: {
                name: "EcoWaste Solutions",
                location: "Rio de Janeiro, RJ",
                type: "startup",
                logo: "EW"
            },
            image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
            badge: "Inovação",
            featured: false,
            dateAdded: "2024-01-10",
            views: 890,
            rating: 4.6
        },
        {
            id: 3,
            title: "Sistema de Irrigação Inteligente IoT",
            description: "Sensores IoT para monitoramento de umidade do solo e irrigação automatizada. Economiza até 40% de água na agricultura.",
            price: 3200,
            category: "agricultura-sustentavel",
            company: {
                name: "AgroSmart Tech",
                location: "Minas Gerais, MG",
                type: "startup",
                logo: "AS"
            },
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuqRLyfFsNNYWkqvCgqYUP0ok2NxxxMFW0kQsOkKFZRqyTA89IUakjHEz&s=10",
            badge: "Economia",
            featured: true,
            dateAdded: "2024-01-12",
            views: 650,
            rating: 4.7
        },
        {
            id: 4,
            title: "Purificador de Água Solar Portátil",
            description: "Sistema de purificação de água alimentado por energia solar. Remove 99,9% das bactérias e vírus. Ideal para comunidades rurais.",
            price: 1800,
            category: "purificacao-agua",
            company: {
                name: "AquaPura Sustentável",
                location: "Ceará, CE",
                type: "cooperativa",
                logo: "AP"
            },
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFb5wDi4pxNsQSCoYPawr1lfoGWdvQ8FXcJFZnGSV6xNuCpFAMmesOsI&s=10",
            badge: "Social",
            featured: false,
            dateAdded: "2024-01-08",
            views: 420,
            rating: 4.9
        },
        {
            id: 5,
            title: "Estação de Carregamento para Veículos Elétricos",
            description: "Carregador rápido para veículos elétricos com energia 100% renovável. Instalação em empresas e condomínios.",
            price: 25000,
            category: "mobilidade-verde",
            company: {
                name: "GreenCharge",
                location: "São Paulo, SP",
                type: "empresa",
                logo: "GC"
            },
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsOgBkMNMLeyMgAB8nuVEKgrzDDWWN5dPQ-2Fx4eskMxXYrNGZ7xFAyw&s=10",
            badge: "Premium",
            featured: true,
            dateAdded: "2024-01-14",
            views: 980,
            rating: 4.5
        },
        {
            id: 6,
            title: "Telhado Verde Modular",
            description: "Sistema modular de telhado verde para isolamento térmico e captação de água da chuva. Reduz temperatura interna em até 8°C.",
            price: 12000,
            category: "construcao-sustentavel",
            company: {
                name: "Verde Arquitetura",
                location: "Paraná, PR",
                type: "empresa",
                logo: "VA"
            },
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5UTj_cSiX6x-fq3FOK20mGWyB_4nx2D5nQ&s",
            badge: "Eficiência",
            featured: false,
            dateAdded: "2024-01-11",
            views: 730,
            rating: 4.4
        },
        {
            id: 7,
            title: "Composteira Automática Inteligente",
            description: "Composteira com controle automático de temperatura e umidade. Transforma resíduos orgânicos em adubo em 30 dias.",
            price: 2500,
            category: "gestao-residuos",
            company: {
                name: "CompostTech",
                location: "Santa Catarina, SC",
                type: "startup",
                logo: "CT"
            },
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
            badge: "Automático",
            featured: false,
            dateAdded: "2024-01-09",
            views: 560,
            rating: 4.6
        },
        {
            id: 8,
            title: "Turbina Eólica Residencial Vertical",
            description: "Gerador eólico vertical silencioso para uso residencial. Funciona com ventos a partir de 3 m/s. Complementa energia solar.",
            price: 8900,
            category: "energia-renovavel",
            company: {
                name: "WindHome Brasil",
                location: "Rio Grande do Sul, RS",
                type: "empresa",
                logo: "WH"
            },
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
            badge: "Silencioso",
            featured: true,
            dateAdded: "2024-01-13",
            views: 820,
            rating: 4.3
        },
        {
            id: 9,
            title: "Sistema Hidropônico Automatizado",
            description: "Cultivo hidropônico com controle automático de nutrientes e pH. Produz 3x mais alimentos usando 90% menos água.",
            price: 5500,
            category: "agricultura-sustentavel",
            company: {
                name: "HydroGreen",
                location: "Goiás, GO",
                type: "startup",
                logo: "HG"
            },
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
            badge: "Produtivo",
            featured: false,
            dateAdded: "2024-01-07",
            views: 690,
            rating: 4.7
        },
        {
            id: 10,
            title: "Filtro de Água Cerâmico Artesanal",
            description: "Filtro de água produzido com cerâmica local e carvão ativado. Remove impurezas e melhora o sabor da água.",
            price: 450,
            category: "purificacao-agua",
            company: {
                name: "Cerâmica Sustentável",
                location: "Bahia, BA",
                type: "cooperativa",
                logo: "CS"
            },
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymm8QUdhSEPsIJ60r5DdB1NrMnz1vFtAYAu7okLmEJYG1R1JjxDXTlNs&s=10",
            badge: "Artesanal",
            featured: false,
            dateAdded: "2024-01-06",
            views: 380,
            rating: 4.8
        },
        {
            id: 11,
            title: "Bicicleta Elétrica Dobrável",
            description: "Bicicleta elétrica dobrável com bateria de lítio. Autonomia de 50km. Ideal para mobilidade urbana sustentável.",
            price: 3800,
            category: "mobilidade-verde",
            company: {
                name: "EcoBike Brasil",
                location: "São Paulo, SP",
                type: "empresa",
                logo: "EB"
            },
            image: "bike.jpg",
            badge: "Portátil",
            featured: true,
            dateAdded: "2024-01-16",
            views: 1100,
            rating: 4.6
        },
        {
            id: 12,
            title: "Painel Solar Flexível para Barcos",
            description: "Painéis solares flexíveis e resistentes à água salgada. Ideais para embarcações e aplicações marítimas.",
            price: 2200,
            category: "energia-renovavel",
            company: {
                name: "MarineSolar",
                location: "Rio de Janeiro, RJ",
                type: "startup",
                logo: "MS"
            },
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBGuNzoKt6M-ZDpvKj2rPEyq_37OqnzlCeXCgpMLyTZ1GMOrnSxhwxtE&s=10",
            badge: "Marítimo",
            featured: false,
            dateAdded: "2024-01-05",
            views: 290,
            rating: 4.4
        }
    ],

    // Categorias disponíveis
    categories: [
        {
            id: "todas",
            name: "Todas as Categorias",
            icon: "fas fa-th-large",
            count: 12
        },
        {
            id: "energia-renovavel",
            name: "Energia Renovável",
            icon: "fas fa-solar-panel",
            count: 4
        },
        {
            id: "gestao-residuos",
            name: "Gestão de Resíduos",
            icon: "fas fa-recycle",
            count: 2
        },
        {
            id: "agricultura-sustentavel",
            name: "Agricultura Sustentável",
            icon: "fas fa-seedling",
            count: 2
        },
        {
            id: "purificacao-agua",
            name: "Purificação de Água",
            icon: "fas fa-water",
            count: 2
        },
        {
            id: "mobilidade-verde",
            name: "Mobilidade Verde",
            icon: "fas fa-leaf",
            count: 2
        },
        {
            id: "construcao-sustentavel",
            name: "Construção Sustentável",
            icon: "fas fa-building",
            count: 1
        }
    ],

    // Estados brasileiros para filtro de localização
    locations: [
        { id: "sp", name: "São Paulo", count: 3 },
        { id: "rj", name: "Rio de Janeiro", count: 2 },
        { id: "mg", name: "Minas Gerais", count: 1 },
        { id: "rs", name: "Rio Grande do Sul", count: 1 },
        { id: "pr", name: "Paraná", count: 1 },
        { id: "sc", name: "Santa Catarina", count: 1 },
        { id: "ce", name: "Ceará", count: 1 },
        { id: "go", name: "Goiás", count: 1 },
        { id: "ba", name: "Bahia", count: 1 }
    ],

    // Tipos de empresa
    companyTypes: [
        { id: "startup", name: "Startup", count: 5 },
        { id: "empresa", name: "Empresa Estabelecida", count: 5 },
        { id: "cooperativa", name: "Cooperativa", count: 2 }
    ]
};

// Função para obter dados filtrados
function getFilteredSolutions(filters = {}) {
    let filtered = [...mockData.solutions];

    // Filtro por categoria
    if (filters.category && filters.category !== 'todas') {
        filtered = filtered.filter(solution => solution.category === filters.category);
    }

    // Filtro por busca
    if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filtered = filtered.filter(solution => 
            solution.title.toLowerCase().includes(searchTerm) ||
            solution.description.toLowerCase().includes(searchTerm) ||
            solution.company.name.toLowerCase().includes(searchTerm)
        );
    }

    // Filtro por preço
    if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(p => p.replace('+', ''));
        filtered = filtered.filter(solution => {
            if (max) {
                return solution.price >= parseInt(min) && solution.price <= parseInt(max);
            } else {
                return solution.price >= parseInt(min);
            }
        });
    }

    // Filtro por localização
    if (filters.location) {
        filtered = filtered.filter(solution => 
            solution.company.location.toLowerCase().includes(filters.location.toLowerCase())
        );
    }

    // Filtro por tipo de empresa
    if (filters.companyTypes && filters.companyTypes.length > 0) {
        filtered = filtered.filter(solution => 
            filters.companyTypes.includes(solution.company.type)
        );
    }

    // Ordenação
    if (filters.sort) {
        switch (filters.sort) {
            case 'preco-menor':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'preco-maior':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'recente':
                filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                break;
            case 'popular':
                filtered.sort((a, b) => b.views - a.views);
                break;
            case 'relevancia':
            default:
                // Prioriza soluções em destaque e depois por rating
                filtered.sort((a, b) => {
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return b.rating - a.rating;
                });
                break;
        }
    }

    return filtered;
}

// Função para obter uma solução específica por ID
function getSolutionById(id) {
    return mockData.solutions.find(solution => solution.id === parseInt(id));
}

// Função para formatar preço em reais
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Função para formatar data
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// Exportar para uso global
window.mockData = mockData;
window.getFilteredSolutions = getFilteredSolutions;
window.getSolutionById = getSolutionById;
window.formatPrice = formatPrice;
window.formatDate = formatDate;

