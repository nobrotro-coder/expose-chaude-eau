// Application Composants Chauffe-Eau Électrique
// Fonctionnalités interactives et animations

class ChauffeEauApp {
    constructor() {
        this.components = [
            {
                id: 'resistance',
                name: 'Résistance Électrique',
                type: 'Résistance stéatite',
                power: '1200-3000W',
                description: 'Transforme l\'énergie électrique en chaleur par effet Joule',
                maintenance: 'Vérifier tous les 2-3 ans, remplacer si entartrée',
                image: 'resources/resistance-steatite.png'
            },
            {
                id: 'thermostat',
                name: 'Thermostat',
                type: 'Électronique',
                range: '50-65°C',
                description: 'Régule la température de l\'eau et coupe la résistance',
                maintenance: 'Calibrer annuellement, remplacer si dysfonctionnement',
                image: 'resources/thermostat-moderne.png'
            },
            {
                id: 'anode',
                name: 'Anode de Magnésium',
                type: 'Sacrificielle',
                lifespan: '2-5 ans',
                description: 'Protège la cuve contre la corrosion en attirant les ions',
                maintenance: 'Vérifier tous les 2 ans, remplacer si usée à plus de 50%',
                image: 'resources/anode-magnesium.png'
            },
            {
                id: 'groupe',
                name: 'Groupe de Sécurité',
                type: 'Soupape multifonction',
                pressure: '7-10 bars',
                description: 'Régule la pression et évacue l\'excès d\'eau lors de la chauffe',
                maintenance: 'Vérifier le fonctionnement trimestriellement',
                image: 'resources/groupe-securite.png'
            }
        ];

        this.diagnosticTests = [
            {
                id: 'resistance-test',
                name: 'Test Résistance',
                description: 'Vérifier la continuité et la résistance électrique',
                normal: 'Résistance entre 20-50 ohms',
                abnormal: 'Résistance infinie ou très faible'
            },
            {
                id: 'thermostat-test',
                name: 'Test Thermostat',
                description: 'Contrôler la régulation de température',
                normal: 'Coupe à 55-65°C, redémarre en dessous',
                abnormal: 'Ne coupe pas ou ne redémarre pas'
            },
            {
                id: 'anode-test',
                name: 'Test Anode',
                description: 'Évaluer l\'état de corrosion de l\'anode',
                normal: 'Anode intacte, corrosion uniforme',
                abnormal: 'Anode très amincie ou noyau exposé'
            }
        ];

        this.init();
    }

    init() {
        this.initAnimations();
        this.initInteractiveComponents();
        this.initCalculators();
        this.initScrollAnimations();
        this.initDiagnosticTools();
    }

    // Initialisation des animations principales
    initAnimations() {
        // Animation de l'hero section
        if (document.querySelector('.hero-animation')) {
            this.animateHero();
        }

        // Animation des composants
        this.animateComponents();
    }

    animateHero() {
        const heroTimeline = anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000
        });

        heroTimeline
            .add({
                targets: '.hero-title',
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 800
            })
            .add({
                targets: '.hero-subtitle',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600
            }, '-=400')
            .add({
                targets: '.hero-image',
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 1000
            }, '-=800');
    }

    animateComponents() {
        // Animation des cartes de composants
        anime({
            targets: '.component-card',
            translateY: [30, 0],
            opacity: [0, 1],
            delay: anime.stagger(200),
            duration: 800,
            easing: 'easeOutQuart'
        });
    }

    // Composants interactifs
    initInteractiveComponents() {
        // Cartes de composants cliquables
        document.querySelectorAll('.component-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const componentId = e.currentTarget.dataset.component;
                this.showComponentDetails(componentId);
            });

            // Effet hover
            card.addEventListener('mouseenter', (e) => {
                anime({
                    targets: e.currentTarget,
                    scale: 1.05,
                    rotateY: 5,
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });

            card.addEventListener('mouseleave', (e) => {
                anime({
                    targets: e.currentTarget,
                    scale: 1,
                    rotateY: 0,
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });
        });

        // Navigation fluide
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = e.currentTarget.getAttribute('href');
                this.smoothScroll(target);
            });
        });
    }

    showComponentDetails(componentId) {
        const component = this.components.find(c => c.id === componentId);
        if (!component) return;

        // Créer et afficher le modal
        const modal = this.createComponentModal(component);
        document.body.appendChild(modal);

        // Animation d'apparition
        anime({
            targets: modal,
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 300,
            easing: 'easeOutQuart'
        });
    }

    createComponentModal(component) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-4">
                        <h2 class="text-2xl font-bold text-gray-800">${component.name}</h2>
                        <button class="close-modal text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <img src="${component.image}" alt="${component.name}" 
                                 class="w-full h-48 object-cover rounded-lg mb-4">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h3 class="font-semibold text-blue-800 mb-2">Caractéristiques</h3>
                                <ul class="text-sm text-blue-700 space-y-1">
                                    ${this.generateComponentSpecs(component)}
                                </ul>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="font-semibold text-gray-800 mb-2">Description</h3>
                            <p class="text-gray-600 mb-4">${component.description}</p>
                            
                            <div class="bg-orange-50 p-4 rounded-lg">
                                <h3 class="font-semibold text-orange-800 mb-2">Maintenance</h3>
                                <p class="text-sm text-orange-700">${component.maintenance}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Fermeture du modal
        modal.querySelector('.close-modal').addEventListener('click', () => {
            this.closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });

        return modal;
    }

    generateComponentSpecs(component) {
        const specs = [];
        if (component.type) specs.push(`<li><strong>Type:</strong> ${component.type}</li>`);
        if (component.power) specs.push(`<li><strong>Puissance:</strong> ${component.power}</li>`);
        if (component.range) specs.push(`<li><strong>Plage:</strong> ${component.range}</li>`);
        if (component.pressure) specs.push(`<li><strong>Pression:</strong> ${component.pressure}</li>`);
        if (component.lifespan) specs.push(`<li><strong>Durée de vie:</strong> ${component.lifespan}</li>`);
        return specs.join('');
    }

    closeModal(modal) {
        anime({
            targets: modal,
            opacity: [1, 0],
            scale: [1, 0.8],
            duration: 200,
            easing: 'easeInQuart',
            complete: () => {
                modal.remove();
            }
        });
    }

    // Calculateurs et outils
    initCalculators() {
        // Calculateur de puissance
        const powerForm = document.getElementById('power-calculator');
        if (powerForm) {
            powerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.calculatePower();
            });
        }

        // Calculateur de capacité
        const capacityForm = document.getElementById('capacity-calculator');
        if (capacityForm) {
            capacityForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.calculateCapacity();
            });
        }

        // Testeur d'anode
        const anodeForm = document.getElementById('anode-tester');
        if (anodeForm) {
            anodeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.testAnode();
            });
        }
    }

    calculatePower() {
        const volume = parseFloat(document.getElementById('volume').value);
        const tempStart = parseFloat(document.getElementById('temp-start').value);
        const tempEnd = parseFloat(document.getElementById('temp-end').value);
        const time = parseFloat(document.getElementById('heating-time').value);

        if (!volume || !tempStart || !tempEnd || !time) {
            this.showResult('power-result', 'Veuillez remplir tous les champs', 'error');
            return;
        }

        // Calcul de l'énergie nécessaire (en Wh)
        const deltaT = tempEnd - tempStart;
        const energy = volume * deltaT * 1.16; // 1.16 Wh/L/°C
        const power = energy / time;

        const result = `
            <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-semibold text-green-800">Résultat du calcul</h4>
                <ul class="text-sm text-green-700 mt-2 space-y-1">
                    <li>Énergie nécessaire: ${energy.toFixed(0)} Wh</li>
                    <li>Puissance requise: ${power.toFixed(0)} W</li>
                    <li>Recommandation: Résistance de ${Math.round(power / 100) * 100}W</li>
                </ul>
            </div>
        `;

        this.showResult('power-result', result, 'success');
    }

    calculateCapacity() {
        const persons = parseInt(document.getElementById('persons').value);
        const usage = document.getElementById('usage-type').value;
        const temp = parseInt(document.getElementById('desired-temp').value);

        if (!persons || !usage || !temp) {
            this.showResult('capacity-result', 'Veuillez remplir tous les champs', 'error');
            return;
        }

        // Consommation moyenne par personne (L/jour)
        const consumptionPerPerson = {
            'economic': 30,
            'normal': 50,
            'intensive': 70
        };

        const dailyConsumption = persons * consumptionPerPerson[usage];
        const recommendedCapacity = Math.ceil(dailyConsumption * 1.2); // 20% de marge

        const result = `
            <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-800">Recommandation de capacité</h4>
                <ul class="text-sm text-blue-700 mt-2 space-y-1">
                    <li>Consommation journalière: ${dailyConsumption} L</li>
                    <li>Capacité recommandée: ${recommendedCapacity} L</li>
                    <li>Type: Chauffe-eau à accumulation</li>
                </ul>
            </div>
        `;

        this.showResult('capacity-result', result, 'success');
    }

    testAnode() {
        const age = parseInt(document.getElementById('anode-age').value);
        const waterHardness = document.getElementById('water-hardness').value;
        const visibleCorrosion = document.getElementById('visible-corrosion').checked;

        if (!age || !waterHardness) {
            this.showResult('anode-result', 'Veuillez remplir tous les champs', 'error');
            return;
        }

        let status = 'good';
        let message = 'Anode en bon état';
        let recommendation = 'Vérifier à nouveau dans 1 an';

        // Calcul du statut basé sur les paramètres
        const hardnessFactor = { 'soft': 1, 'medium': 1.5, 'hard': 2 };
        const adjustedAge = age * hardnessFactor[waterHardness];

        if (adjustedAge > 4 || visibleCorrosion) {
            status = 'critical';
            message = 'Anode à remplacer immédiatement';
            recommendation = 'Remplacement urgent pour protéger la cuve';
        } else if (adjustedAge > 2.5) {
            status = 'warning';
            message = 'Anode usée, surveillance renforcée';
            recommendation = 'Remplacer dans les 6-12 mois';
        }

        const statusColors = {
            good: 'green',
            warning: 'yellow',
            critical: 'red'
        };

        const color = statusColors[status];

        const result = `
            <div class="bg-${color}-50 p-4 rounded-lg">
                <h4 class="font-semibold text-${color}-800">État de l'anode</h4>
                <p class="text-sm text-${color}-700 mt-2">${message}</p>
                <p class="text-xs text-${color}-600 mt-1">${recommendation}</p>
            </div>
        `;

        this.showResult('anode-result', result, status);
    }

    showResult(elementId, content, type) {
        const resultElement = document.getElementById(elementId);
        if (resultElement) {
            resultElement.innerHTML = content;
            resultElement.className = `mt-4 ${type === 'error' ? 'text-red-600' : ''}`;

            // Animation d'apparition
            anime({
                targets: resultElement,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 300,
                easing: 'easeOutQuart'
            });
        }
    }

    // Outils de diagnostic
    initDiagnosticTools() {
        // Simulation de tests de diagnostic
        document.querySelectorAll('.diagnostic-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const testId = e.currentTarget.dataset.test;
                this.runDiagnostic(testId);
            });
        });
    }

    runDiagnostic(testId) {
        const test = this.diagnosticTests.find(t => t.id === testId);
        if (!test) return;

        // Simulation du test
        const modal = this.createDiagnosticModal(test);
        document.body.appendChild(modal);

        anime({
            targets: modal,
            opacity: [0, 1],
            duration: 300
        });
    }

    createDiagnosticModal(test) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-xl max-w-lg w-full">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-4">
                        <h2 class="text-xl font-bold text-gray-800">${test.name}</h2>
                        <button class="close-modal text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-blue-800 mb-2">Description</h3>
                            <p class="text-sm text-blue-700">${test.description}</p>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h3 class="font-semibold text-green-800 mb-2">Résultat normal</h3>
                                <p class="text-sm text-green-700">${test.normal}</p>
                            </div>
                            
                            <div class="bg-red-50 p-4 rounded-lg">
                                <h3 class="font-semibold text-red-800 mb-2">Résultat anormal</h3>
                                <p class="text-sm text-red-700">${test.abnormal}</p>
                            </div>
                        </div>
                        
                        <div class="text-center">
                            <button class="simulate-test bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Simuler le test
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Fermeture du modal
        modal.querySelector('.close-modal').addEventListener('click', () => {
            this.closeModal(modal);
        });

        // Simulation du test
        modal.querySelector('.simulate-test').addEventListener('click', () => {
            this.simulateTest(modal, test);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });

        return modal;
    }

    simulateTest(modal, test) {
        const button = modal.querySelector('.simulate-test');
        button.textContent = 'Test en cours...';
        button.disabled = true;

        // Simulation après 2 secondes
        setTimeout(() => {
            const isNormal = Math.random() > 0.3; // 70% de chance de résultat normal
            const resultDiv = document.createElement('div');
            resultDiv.className = `mt-4 p-4 rounded-lg ${isNormal ? 'bg-green-50' : 'bg-red-50'}`;
            resultDiv.innerHTML = `
                <h4 class="font-semibold ${isNormal ? 'text-green-800' : 'text-red-800'} mb-2">
                    Résultat du test
                </h4>
                <p class="text-sm ${isNormal ? 'text-green-700' : 'text-red-700'}">
                    ${isNormal ? '✅ Test normal - Le composant fonctionne correctement' : '❌ Test anormal - Intervention requise'}
                </p>
            `;

            modal.querySelector('.space-y-4').appendChild(resultDiv);

            button.textContent = 'Refaire le test';
            button.disabled = false;
        }, 2000);
    }

    // Animations au scroll
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateOnScroll(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    animateOnScroll(element) {
        anime({
            targets: element,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutQuart'
        });
    }

    // Navigation fluide
    smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    new ChauffeEauApp();
});

// Fonctions utilitaires supplémentaires
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    } text-white`;
    notification.textContent = message;

    document.body.appendChild(notification);

    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });

    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuart',
            complete: () => notification.remove()
        });
    }, 3000);
}

// Export pour usage global
window.ChauffeEauApp = ChauffeEauApp;
window.showNotification = showNotification;