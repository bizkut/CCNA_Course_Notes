/**
 * CCNA Study Hub - Interactive Learning Application
 * A static SPA for GitHub Pages - fetches markdown content client-side
 */

// ============================================
// Course Topics Data
// ============================================
const COURSE_TOPICS = [
    { day: 1, title: "Networking Devices", file: "Network_Devices.md", category: "Fundamentals" },
    { day: 2, title: "Interfaces and Cables", file: "Interfaces_and_Cables.md", category: "Fundamentals" },
    { day: 3, title: "OSI Model and TCP/IP Suite", file: "OSI_Model_TCPSuite.md", category: "Fundamentals" },
    { day: 4, title: "Intro to the CLI", file: "Intro_to_CLI.md", category: "Fundamentals" },
    { day: 5, title: "Ethernet LAN Switching - Part 1", file: "Ethernet_LAN_Switching_Part1.md", category: "Switching" },
    { day: 6, title: "Ethernet LAN Switching - Part 2", file: "Ethernet_LAN_Switching_Part2.md", category: "Switching" },
    { day: 7, title: "IPv4 Addressing - Part 1", file: "IPv4_Addressing_Part1.md", category: "IP Addressing" },
    { day: 8, title: "IPv4 Addressing - Part 2", file: "IPv4_Addressing_Part2.md", category: "IP Addressing" },
    { day: 9, title: "Switch Interfaces", file: "Switch_Interfaces.md", category: "Switching" },
    { day: 10, title: "The IPv4 Header", file: "The_IPv4_Header.md", category: "IP Addressing" },
    { day: 11, title: "Routing Fundamentals - Part 1", file: "Routing_Fundamentals_Part1.md", category: "Routing" },
    { day: 11, title: "Static Routing - Part 2", file: "Static_Routing_Part2.md", category: "Routing" },
    { day: 12, title: "Life of a Packet", file: "Life_of_a_Packet.md", category: "Fundamentals" },
    { day: 13, title: "Subnetting - Part 1", file: "Subnetting_Part1.md", category: "IP Addressing" },
    { day: 14, title: "Subnetting - Part 2", file: "Subnetting_Part2.md", category: "IP Addressing" },
    { day: 15, title: "Subnetting (VLSM) - Part 3", file: "Subnetting_VLSM_Part3.md", category: "IP Addressing" },
    { day: 16, title: "VLANs - Part 1", file: "VLAN_Part1.md", category: "Switching" },
    { day: 17, title: "VLANs - Part 2", file: "VLAN_Part2.md", category: "Switching" },
    { day: 18, title: "VLANs - Part 3", file: "VLAN_Part3.md", category: "Switching" },
    { day: 19, title: "DTP / VTP", file: "DTP_VTP.md", category: "Switching" },
    { day: 20, title: "Spanning Tree Protocol - Part 1", file: "Spanning_Tree_Protocol_Part1.md", category: "Switching" },
    { day: 21, title: "Spanning Tree Protocol - Part 2", file: "Spanning_Tree_Protocol_Part2.md", category: "Switching" },
    { day: 22, title: "Rapid Spanning Tree Protocol", file: "Rapid_Spanning_Tree_Protocol.md", category: "Switching" },
    { day: 23, title: "Etherchannel", file: "Etherchannel.md", category: "Switching" },
    { day: 24, title: "Dynamic Routing", file: "DynamicRouting.md", category: "Routing" },
    { day: 25, title: "RIP and EIGRP", file: "RIP_and_EIGRP.md", category: "Routing" },
    { day: 26, title: "OSPF - Part 1", file: "OSPF_Part1.md", category: "Routing" },
    { day: 27, title: "OSPF - Part 2", file: "OSPF_Part2.md", category: "Routing" },
    { day: 28, title: "OSPF - Part 3", file: "OSPF_Part3.md", category: "Routing" },
    { day: 29, title: "First Hop Redundancy Protocol", file: "First_Hop_Redundancy_Protocols.md", category: "Routing" },
    { day: 30, title: "TCP and UDP", file: "TCP_and_UDP.md", category: "Fundamentals" },
    { day: 31, title: "IPv6 - Part 1", file: "IPv6_Part1.md", category: "IP Addressing" },
    { day: 32, title: "IPv6 - Part 2", file: "IPv6_Part2.md", category: "IP Addressing" },
    { day: 33, title: "IPv6 - Part 3", file: "IPv6_Part3.md", category: "IP Addressing" },
    { day: 34, title: "Standard Access Control List", file: "Standard_Access_Control_Lists.md", category: "Security" },
    { day: 35, title: "Extended Access Control List", file: "Extended_Access_Control_Lists.md", category: "Security" },
    { day: 36, title: "CDP and LLDP", file: "CDP_and_LLDP.md", category: "Services" },
    { day: 37, title: "NTP - Network Time Protocol", file: "NTP.md", category: "Services" },
    { day: 38, title: "DNS - Domain Name System", file: "DNS.md", category: "Services" },
    { day: 39, title: "DHCP", file: "DHCP.md", category: "Services" },
    { day: 40, title: "SNMP", file: "SNMP.md", category: "Services" },
    { day: 41, title: "SYSLOG", file: "SYSLOG.md", category: "Services" },
    { day: 42, title: "SSH - Secure Shell", file: "SSH.md", category: "Security" },
    { day: 43, title: "FTP and TFTP", file: "FTP_and_TFTP.md", category: "Services" },
    { day: 44, title: "NAT (Static) - Part 1", file: "NAT_Static_Part1.md", category: "Services" },
    { day: 45, title: "NAT (Dynamic) - Part 2", file: "NAT_Dynamic_Part2.md", category: "Services" },
    { day: 46, title: "QoS (Voice VLAN) - Part 1", file: "QoS_VoiceLan.md", category: "QoS" },
    { day: 47, title: "QoS (Quality of Service) - Part 2", file: "QoS_Quality_of_Service.md", category: "QoS" },
    { day: 48, title: "Security Fundamentals", file: "Security_Fundamentals.md", category: "Security" },
    { day: 49, title: "Port Security", file: "Port_Security.md", category: "Security" },
    { day: 50, title: "DHCP Snooping", file: "DHCP_Snooping.md", category: "Security" },
    { day: 51, title: "Dynamic ARP Inspection", file: "Dynamic_Arp_Inspection.md", category: "Security" },
    { day: 52, title: "LAN Architectures", file: "LAN_Architectures.md", category: "Architecture" },
    { day: 53, title: "WAN Architectures", file: "WAN_Architectures.md", category: "Architecture" },
    { day: 54, title: "Virtualization and Cloud - Part 1", file: "Virtualizations_and_Cloud_Part1.md", category: "Virtualization" },
    { day: 54, title: "Virtualization (Containers) - Part 2", file: "Virtualization_Containers.md", category: "Virtualization" },
    { day: 54, title: "Virtualization (VRF) - Part 3", file: "Virtualization_VRF_Part3.md", category: "Virtualization" },
    { day: 55, title: "Wireless Fundamentals", file: "Wireless_Fundamentals.md", category: "Wireless" },
    { day: 56, title: "Wireless Architectures", file: "Wireless_Architecutres.md", category: "Wireless" },
    { day: 57, title: "Wireless Security", file: "Wireless_Security.md", category: "Wireless" },
    { day: 58, title: "Wireless Configuration", file: "Wireless_Configuration.md", category: "Wireless" },
    { day: 59, title: "Introduction to Network Automation", file: "Introduction_to_Network_Automation.md", category: "Automation" },
    { day: 60, title: "JSON, XML, and YAML", file: "JSON_XML_YAML.md", category: "Automation" },
    { day: 61, title: "REST APIs", file: "REST_APIs.md", category: "Automation" },
    { day: 62, title: "Software Defined Networking", file: "Software_Defined_Networking.md", category: "Automation" },
    { day: 63, title: "Ansible, Puppet, and Chef", file: "Ansible_Puppet_Chef.md", category: "Automation" }
];

// Category metadata with icons and colors
const CATEGORIES = {
    "Fundamentals": { icon: "🌐", color: "#00d4ff", topics: [] },
    "Switching": { icon: "🔀", color: "#7c3aed", topics: [] },
    "Routing": { icon: "🛤️", color: "#14b8a6", topics: [] },
    "IP Addressing": { icon: "🔢", color: "#f97316", topics: [] },
    "Security": { icon: "🔒", color: "#ef4444", topics: [] },
    "Services": { icon: "⚙️", color: "#8b5cf6", topics: [] },
    "QoS": { icon: "📊", color: "#06b6d4", topics: [] },
    "Architecture": { icon: "🏗️", color: "#10b981", topics: [] },
    "Virtualization": { icon: "☁️", color: "#6366f1", topics: [] },
    "Wireless": { icon: "📶", color: "#ec4899", topics: [] },
    "Automation": { icon: "🤖", color: "#f59e0b", topics: [] }
};

// Organize topics by category
COURSE_TOPICS.forEach((topic, index) => {
    topic.id = index;
    if (CATEGORIES[topic.category]) {
        CATEGORIES[topic.category].topics.push(topic);
    }
});

// ============================================
// State Management
// ============================================
class AppState {
    constructor() {
        this.currentView = 'home';
        this.currentTopic = null;
        this.progress = this.loadProgress();
        this.flashcards = this.loadFlashcards();
        this.quizState = {
            questions: [],
            currentIndex: 0,
            score: 0,
            answers: []
        };
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem('ccna_progress');
            return saved ? JSON.parse(saved) : {
                completedTopics: [],
                topicsViewed: [],
                quizzesTaken: 0,
                quizScores: [],
                flashcardsReviewed: 0,
                streak: 0,
                lastStudyDate: null,
                achievements: ['first_steps']
            };
        } catch (e) {
            return {
                completedTopics: [],
                topicsViewed: [],
                quizzesTaken: 0,
                quizScores: [],
                flashcardsReviewed: 0,
                streak: 0,
                lastStudyDate: null,
                achievements: []
            };
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('ccna_progress', JSON.stringify(this.progress));
        } catch (e) {
            console.warn('Could not save progress to localStorage');
        }
    }

    loadFlashcards() {
        try {
            const saved = localStorage.getItem('ccna_flashcards');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    }

    saveFlashcards() {
        try {
            localStorage.setItem('ccna_flashcards', JSON.stringify(this.flashcards));
        } catch (e) {
            console.warn('Could not save flashcards to localStorage');
        }
    }

    updateStreak() {
        const today = new Date().toDateString();
        const lastDate = this.progress.lastStudyDate;

        if (lastDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (lastDate === yesterday.toDateString()) {
                this.progress.streak++;
            } else if (lastDate !== today) {
                this.progress.streak = 1;
            }

            this.progress.lastStudyDate = today;
            this.saveProgress();
        }
    }

    markTopicComplete(topicId) {
        if (!this.progress.completedTopics.includes(topicId)) {
            this.progress.completedTopics.push(topicId);
            this.updateStreak();
            this.checkAchievements();
            this.saveProgress();
            return true;
        }
        return false;
    }

    markTopicViewed(topicId) {
        if (!this.progress.topicsViewed.includes(topicId)) {
            this.progress.topicsViewed.push(topicId);
            this.updateStreak();
            this.saveProgress();
        }
    }

    checkAchievements() {
        const achievements = this.progress.achievements;

        if (this.progress.completedTopics.length >= 1 && !achievements.includes('first_steps')) {
            achievements.push('first_steps');
            showToast('🎯', 'Achievement Unlocked!', 'First Steps - Completed your first topic');
        }

        if (this.progress.streak >= 7 && !achievements.includes('on_fire')) {
            achievements.push('on_fire');
            showToast('🔥', 'Achievement Unlocked!', 'On Fire - 7-day study streak');
        }

        if (this.progress.completedTopics.length >= 30 && !achievements.includes('scholar')) {
            achievements.push('scholar');
            showToast('📚', 'Achievement Unlocked!', 'Scholar - Completed 30 topics');
        }

        if (this.progress.completedTopics.length >= 66 && !achievements.includes('ccna_ready')) {
            achievements.push('ccna_ready');
            showToast('🏆', 'Achievement Unlocked!', 'CCNA Ready - Completed all 66 topics!');
        }

        this.saveProgress();
    }
}

// ============================================
// Application Controller
// ============================================
class CCNAStudyHub {
    constructor() {
        this.state = new AppState();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderCategories();
        this.renderTopicsList();
        this.updateStats();
        this.setupTheme();
        this.renderFlashcardDecks();
        this.renderQuizTopics();
        this.updateProgressView();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const view = link.dataset.view;
                this.switchView(view);
            });
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Hero actions
        document.querySelector('[data-action="start-learning"]')?.addEventListener('click', () => {
            this.switchView('topics');
        });

        document.querySelector('[data-action="quick-quiz"]')?.addEventListener('click', () => {
            this.switchView('quiz');
        });

        // Topic search
        const searchInput = document.getElementById('topicSearch');
        searchInput?.addEventListener('input', (e) => {
            this.filterTopics(e.target.value);
        });

        document.getElementById('searchClear')?.addEventListener('click', () => {
            searchInput.value = '';
            this.filterTopics('');
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterTopics(searchInput?.value || '', btn.dataset.filter);
            });
        });

        // Back button
        document.getElementById('backToTopics')?.addEventListener('click', () => {
            this.switchView('topics');
        });

        // Topic actions
        document.getElementById('markAsRead')?.addEventListener('click', () => {
            if (this.state.currentTopic !== null) {
                const success = this.state.markTopicComplete(this.state.currentTopic);
                if (success) {
                    showToast('✅', 'Topic Completed!', 'Great work! Keep up the momentum!');
                    this.updateStats();
                    this.renderTopicsList();
                }
            }
        });

        document.getElementById('createFlashcards')?.addEventListener('click', () => {
            this.generateFlashcardsFromTopic();
        });

        // Flashcard controls
        document.getElementById('flashcard')?.addEventListener('click', () => {
            document.getElementById('flashcard').classList.toggle('flipped');
        });

        document.getElementById('fcFlip')?.addEventListener('click', () => {
            document.getElementById('flashcard').classList.toggle('flipped');
        });

        document.getElementById('fcCorrect')?.addEventListener('click', () => {
            this.nextFlashcard(true);
        });

        document.getElementById('fcIncorrect')?.addEventListener('click', () => {
            this.nextFlashcard(false);
        });

        // Quiz controls
        document.querySelectorAll('.count-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        document.getElementById('startQuizBtn')?.addEventListener('click', () => {
            this.startQuiz();
        });

        document.getElementById('retryQuiz')?.addEventListener('click', () => {
            this.resetQuiz();
        });

        document.getElementById('reviewQuiz')?.addEventListener('click', () => {
            this.switchView('topics');
        });
    }

    setupTheme() {
        const savedTheme = localStorage.getItem('ccna_theme') || 'dark';
        if (savedTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('ccna_theme', newTheme);
    }

    switchView(viewName) {
        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.view === viewName);
        });

        // Switch views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });

        const targetView = document.getElementById(`${viewName}View`);
        if (targetView) {
            targetView.classList.add('active');
        }

        // Special handling for topic detail
        if (viewName === 'topicDetail') {
            document.getElementById('topicDetailView').classList.add('active');
        }

        this.state.currentView = viewName;

        // Update specific views
        if (viewName === 'progress') {
            this.updateProgressView();
        }
    }

    renderCategories() {
        const grid = document.getElementById('categoriesGrid');
        if (!grid) return;

        grid.innerHTML = Object.entries(CATEGORIES).map(([name, data]) => {
            const completed = data.topics.filter(t =>
                this.state.progress.completedTopics.includes(t.id)
            ).length;
            const total = data.topics.length;
            const progress = total > 0 ? (completed / total) * 100 : 0;

            return `
                <div class="category-card" data-category="${name}">
                    <div class="category-icon">${data.icon}</div>
                    <div class="category-name">${name}</div>
                    <div class="category-count">${total} topics</div>
                    <div class="category-progress">
                        <div class="category-progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
            `;
        }).join('');

        // Add click handlers
        grid.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                this.switchView('topics');
                const category = card.dataset.category;
                // Could filter by category here
            });
        });
    }

    renderTopicsList(filter = 'all') {
        const list = document.getElementById('topicsList');
        if (!list) return;

        let topics = [...COURSE_TOPICS];

        // Filter by status
        if (filter === 'completed') {
            topics = topics.filter(t => this.state.progress.completedTopics.includes(t.id));
        } else if (filter === 'in-progress') {
            topics = topics.filter(t =>
                this.state.progress.topicsViewed.includes(t.id) &&
                !this.state.progress.completedTopics.includes(t.id)
            );
        } else if (filter === 'not-started') {
            topics = topics.filter(t => !this.state.progress.topicsViewed.includes(t.id));
        }

        list.innerHTML = topics.map(topic => {
            const isCompleted = this.state.progress.completedTopics.includes(topic.id);
            const isViewed = this.state.progress.topicsViewed.includes(topic.id);

            let statusClass = '';
            let statusText = 'Not started';

            if (isCompleted) {
                statusClass = 'completed';
                statusText = 'Completed';
            } else if (isViewed) {
                statusClass = 'in-progress';
                statusText = 'In progress';
            }

            return `
                <div class="topic-item ${isCompleted ? 'completed' : ''}" data-topic-id="${topic.id}">
                    <div class="topic-day">D${topic.day}</div>
                    <div class="topic-info">
                        <div class="topic-title">${topic.title}</div>
                        <div class="topic-meta">
                            <span class="topic-status">
                                <span class="status-dot ${statusClass}"></span>
                                ${statusText}
                            </span>
                            <span>${topic.category}</span>
                        </div>
                    </div>
                    <span class="topic-arrow">→</span>
                </div>
            `;
        }).join('');

        // Add click handlers
        list.querySelectorAll('.topic-item').forEach(item => {
            item.addEventListener('click', () => {
                const topicId = parseInt(item.dataset.topicId);
                this.loadTopic(topicId);
            });
        });
    }

    filterTopics(searchTerm, statusFilter = 'all') {
        const list = document.getElementById('topicsList');
        const items = list.querySelectorAll('.topic-item');

        items.forEach(item => {
            const topicId = parseInt(item.dataset.topicId);
            const topic = COURSE_TOPICS[topicId];
            const matchesSearch = !searchTerm ||
                topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                topic.category.toLowerCase().includes(searchTerm.toLowerCase());

            const isCompleted = this.state.progress.completedTopics.includes(topicId);
            const isViewed = this.state.progress.topicsViewed.includes(topicId);

            let matchesStatus = true;
            if (statusFilter === 'completed') matchesStatus = isCompleted;
            else if (statusFilter === 'in-progress') matchesStatus = isViewed && !isCompleted;
            else if (statusFilter === 'not-started') matchesStatus = !isViewed;

            item.style.display = matchesSearch && matchesStatus ? 'flex' : 'none';
        });
    }

    async loadTopic(topicId) {
        const topic = COURSE_TOPICS[topicId];
        if (!topic) return;

        this.state.currentTopic = topicId;
        this.state.markTopicViewed(topicId);
        this.switchView('topicDetail');

        const contentDiv = document.getElementById('topicDetailContent');
        contentDiv.innerHTML = '<div class="loading-spinner"><div class="spinner-ring"></div></div>';

        try {
            // Construct the path to the markdown file
            // For GitHub Pages, we need to fetch from the Course_Notes folder
            const basePath = this.getBasePath();
            const response = await fetch(`${basePath}Course_Notes/${topic.file}`);

            if (!response.ok) throw new Error('Failed to load topic');

            const markdown = await response.text();
            contentDiv.innerHTML = this.parseMarkdown(markdown);

            // Update progress bar
            const progress = this.state.progress.completedTopics.includes(topicId) ? 100 : 50;
            document.getElementById('topicProgressFill').style.width = `${progress}%`;

            // Update button state
            const markBtn = document.getElementById('markAsRead');
            if (this.state.progress.completedTopics.includes(topicId)) {
                markBtn.innerHTML = '<span>✓</span> Completed';
                markBtn.disabled = true;
            } else {
                markBtn.innerHTML = '<span>✓</span> Mark as Complete';
                markBtn.disabled = false;
            }

        } catch (error) {
            console.error('Error loading topic:', error);
            contentDiv.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">😕</span>
                    <p>Couldn't load this topic. Make sure you're accessing from the correct location.</p>
                    <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-secondary);">
                        Looking for: Course_Notes/${topic.file}
                    </p>
                </div>
            `;
        }
    }

    getBasePath() {
        // Files are at root level, same as Course_Notes folder
        return './';
    }

    parseMarkdown(markdown) {
        // Simple markdown parser (for GitHub Pages compatibility)
        let html = markdown
            // Headers
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            // Bold and italic
            .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            // Code blocks
            .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
            // Inline code
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            // Images - fix GitHub asset URLs
            .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
            // Links
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
            // Horizontal rules
            .replace(/^---$/gim, '<hr>')
            // Blockquotes
            .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
            // Unordered lists
            .replace(/^\s*[-*]\s+(.*$)/gim, '<li>$1</li>')
            // Line breaks
            .replace(/\n\n/g, '</p><p>')
            // Aside/callouts
            .replace(/<aside>\s*💡\s*([\s\S]*?)<\/aside>/gi, '<aside>💡 $1</aside>');

        // Wrap loose li elements
        html = html.replace(/(<li>.*<\/li>)/gim, (match) => {
            if (!match.startsWith('<ul>')) {
                return '<ul>' + match + '</ul>';
            }
            return match;
        });

        // Clean up consecutive ul tags
        html = html.replace(/<\/ul>\s*<ul>/g, '');

        return `<p>${html}</p>`;
    }

    updateStats() {
        const progress = this.state.progress;

        document.getElementById('completedTopics').textContent = progress.completedTopics.length;
        document.getElementById('currentStreak').textContent = progress.streak;
        document.getElementById('streakCount').textContent = progress.streak;

        const mastery = Math.round((progress.completedTopics.length / COURSE_TOPICS.length) * 100);
        document.getElementById('masteryLevel').textContent = `${mastery}%`;
    }

    // ============================================
    // Flashcard Methods
    // ============================================
    currentFlashcardIndex = 0;
    activeFlashcards = [];

    renderFlashcardDecks() {
        const selector = document.getElementById('deckSelector');
        if (!selector) return;

        const categories = Object.keys(CATEGORIES);
        selector.innerHTML = `
            <button class="deck-btn active" data-deck="all">All Topics</button>
            ${categories.map(cat => `
                <button class="deck-btn" data-deck="${cat}">${cat}</button>
            `).join('')}
        `;

        selector.querySelectorAll('.deck-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                selector.querySelectorAll('.deck-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.loadFlashcardDeck(btn.dataset.deck);
            });
        });

        // Load default deck
        this.loadFlashcardDeck('all');
    }

    loadFlashcardDeck(deckName) {
        // Generate flashcards from topics
        let topics = deckName === 'all'
            ? COURSE_TOPICS
            : COURSE_TOPICS.filter(t => t.category === deckName);

        // Create basic flashcards from topic titles and categories
        this.activeFlashcards = topics.map(t => ({
            front: `What is covered in "${t.title}"?`,
            back: `This topic (Day ${t.day}) covers ${t.category} concepts. Key topic: ${t.title}`,
            topicId: t.id
        }));

        // Add predefined flashcards
        this.activeFlashcards = [...this.activeFlashcards, ...this.getPredefinedFlashcards(deckName)];

        this.currentFlashcardIndex = 0;
        this.shuffleFlashcards();
        this.showCurrentFlashcard();
    }

    getPredefinedFlashcards(category) {
        const flashcards = {
            all: [
                { front: "What does OSI stand for?", back: "Open Systems Interconnection" },
                { front: "What are the 7 layers of the OSI model?", back: "Physical, Data Link, Network, Transport, Session, Presentation, Application" },
                { front: "What is the default admin distance for OSPF?", back: "110" },
                { front: "What protocol does OSPF use for transport?", back: "IP Protocol 89" },
                { front: "What is the purpose of a VLAN?", back: "To logically separate end hosts at Layer 2, improving security and reducing broadcast domains" },
                { front: "What is the default VLAN on Cisco switches?", back: "VLAN 1" },
                { front: "What is the range of well-known ports?", back: "0 - 1023" },
                { front: "What port does SSH use?", back: "TCP port 22" },
                { front: "What does STP stand for?", back: "Spanning Tree Protocol" },
                { front: "What is the purpose of STP?", back: "To prevent Layer 2 loops in redundant switched networks" }
            ],
            "Routing": [
                { front: "What algorithm does OSPF use?", back: "Dijkstra's Shortest Path First (SPF) algorithm" },
                { front: "What is the OSPF Hello interval on broadcast networks?", back: "10 seconds" },
                { front: "What is an OSPF Area?", back: "A set of routers and links that share the same LSDB (Link State Database)" },
                { front: "What is Area 0 in OSPF?", back: "The backbone area that all other areas must connect to" },
                { front: "What is an ABR in OSPF?", back: "Area Border Router - a router with interfaces in multiple OSPF areas" }
            ],
            "Switching": [
                { front: "What is a trunk port?", back: "A switchport that carries traffic for multiple VLANs" },
                { front: "What is an access port?", back: "A switchport that belongs to a single VLAN' usually connecting to end hosts" },
                { front: "What is the purpose of EtherChannel?", back: "To bundle multiple physical links into one logical interface for increased bandwidth and redundancy" },
                { front: "What are the two EtherChannel protocols?", back: "LACP (802.3ad) and PAgP (Cisco proprietary)" }
            ],
            "Security": [
                { front: "What does CIA stand for in security?", back: "Confidentiality, Integrity, Availability" },
                { front: "What is a DoS attack?", back: "Denial of Service - an attack that threatens the availability of a system" },
                { front: "What is port security?", back: "A feature to control which MAC addresses are allowed on a switchport" },
                { front: "What is DHCP Snooping?", back: "A security feature that filters untrusted DHCP messages" }
            ]
        };

        return flashcards[category] || flashcards.all;
    }

    shuffleFlashcards() {
        for (let i = this.activeFlashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.activeFlashcards[i], this.activeFlashcards[j]] =
                [this.activeFlashcards[j], this.activeFlashcards[i]];
        }
    }

    showCurrentFlashcard() {
        const card = this.activeFlashcards[this.currentFlashcardIndex];
        if (!card) {
            document.getElementById('flashcardFront').textContent = 'No flashcards available';
            document.getElementById('flashcardBack').textContent = 'Select a deck above';
            return;
        }

        document.getElementById('flashcardFront').textContent = card.front;
        document.getElementById('flashcardBack').textContent = card.back;
        document.getElementById('flashcard').classList.remove('flipped');
        document.getElementById('cardProgress').textContent =
            `${this.currentFlashcardIndex + 1} / ${this.activeFlashcards.length}`;
    }

    nextFlashcard(correct) {
        if (correct) {
            this.state.progress.flashcardsReviewed++;
            this.state.saveProgress();
        }

        this.currentFlashcardIndex++;

        if (this.currentFlashcardIndex >= this.activeFlashcards.length) {
            this.currentFlashcardIndex = 0;
            this.shuffleFlashcards();
            showToast('🎴', 'Deck Complete!', 'Starting over with shuffled cards');
        }

        this.showCurrentFlashcard();
    }

    generateFlashcardsFromTopic() {
        showToast('🎴', 'Flashcards', 'Flashcards added based on this topic!');
        this.switchView('flashcards');
    }

    // ============================================
    // Quiz Methods
    // ============================================
    renderQuizTopics() {
        const grid = document.getElementById('quizTopicGrid');
        if (!grid) return;

        const categories = ['All Topics', ...Object.keys(CATEGORIES)];
        grid.innerHTML = categories.map(cat => `
            <button class="quiz-topic-btn ${cat === 'All Topics' ? 'active' : ''}" data-category="${cat}">
                ${cat}
            </button>
        `).join('');

        grid.querySelectorAll('.quiz-topic-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                grid.querySelectorAll('.quiz-topic-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    startQuiz() {
        const category = document.querySelector('.quiz-topic-btn.active')?.dataset.category || 'All Topics';
        const countBtn = document.querySelector('.count-btn.active');
        let count = countBtn?.dataset.count === 'all' ? 20 : parseInt(countBtn?.dataset.count) || 10;

        // Generate quiz questions
        const questions = this.generateQuizQuestions(category, count);

        if (questions.length === 0) {
            showToast('⚠️', 'No Questions', 'No questions available for this category');
            return;
        }

        this.state.quizState = {
            questions,
            currentIndex: 0,
            score: 0,
            answers: [],
            category
        };

        document.getElementById('quizSetup').style.display = 'none';
        document.getElementById('quizActive').style.display = 'block';
        document.getElementById('quizResults').style.display = 'none';

        document.getElementById('totalQuestions').textContent = questions.length;
        this.showQuizQuestion();
    }

    generateQuizQuestions(category, count) {
        // Predefined quiz questions
        const allQuestions = [
            {
                question: "What is the default administrative distance of OSPF?",
                options: ["90", "110", "120", "170"],
                correct: 1,
                category: "Routing"
            },
            {
                question: "Which layer of the OSI model is responsible for logical addressing?",
                options: ["Layer 1 - Physical", "Layer 2 - Data Link", "Layer 3 - Network", "Layer 4 - Transport"],
                correct: 2,
                category: "Fundamentals"
            },
            {
                question: "What is the purpose of STP (Spanning Tree Protocol)?",
                options: ["To encrypt network traffic", "To prevent Layer 2 loops", "To assign IP addresses", "To load balance traffic"],
                correct: 1,
                category: "Switching"
            },
            {
                question: "What port does HTTPS use by default?",
                options: ["80", "22", "443", "8080"],
                correct: 2,
                category: "Services"
            },
            {
                question: "What is a VLAN?",
                options: ["A physical network segment", "A logical Layer 2 broadcast domain", "A routing protocol", "A type of cable"],
                correct: 1,
                category: "Switching"
            },
            {
                question: "What does the CIA triad stand for in cybersecurity?",
                options: ["Computers, Internet, Access", "Confidentiality, Integrity, Availability", "Control, Information, Authentication", "Cryptography, Identity, Authorization"],
                correct: 1,
                category: "Security"
            },
            {
                question: "What is the IPv4 address range for Class A networks?",
                options: ["1.0.0.0 - 126.255.255.255", "128.0.0.0 - 191.255.255.255", "192.0.0.0 - 223.255.255.255", "224.0.0.0 - 239.255.255.255"],
                correct: 0,
                category: "IP Addressing"
            },
            {
                question: "What protocol does OSPF use at the transport layer?",
                options: ["TCP", "UDP", "IP Protocol 89 (directly over IP)", "ICMP"],
                correct: 2,
                category: "Routing"
            },
            {
                question: "What is the default hello interval for OSPF on broadcast networks?",
                options: ["5 seconds", "10 seconds", "30 seconds", "40 seconds"],
                correct: 1,
                category: "Routing"
            },
            {
                question: "What is the purpose of NAT?",
                options: ["To encrypt data", "To translate private IPs to public IPs", "To create VLANs", "To prioritize traffic"],
                correct: 1,
                category: "Services"
            },
            {
                question: "What is the default VLAN on a Cisco switch?",
                options: ["VLAN 0", "VLAN 1", "VLAN 100", "VLAN 1000"],
                correct: 1,
                category: "Switching"
            },
            {
                question: "Which command enables OSPF on a Cisco router?",
                options: ["router ospf", "enable ospf", "ospf enable", "start ospf"],
                correct: 0,
                category: "Routing"
            },
            {
                question: "What type of address is FF:FF:FF:FF:FF:FF?",
                options: ["Unicast", "Multicast", "Broadcast", "Anycast"],
                correct: 2,
                category: "Fundamentals"
            },
            {
                question: "What is the maximum number of hosts on a /24 network?",
                options: ["254", "255", "256", "512"],
                correct: 0,
                category: "IP Addressing"
            },
            {
                question: "What is the purpose of the Spanning Tree root bridge?",
                options: ["To process all network traffic", "To be the reference point for path calculations", "To assign IP addresses", "To store the MAC address table"],
                correct: 1,
                category: "Switching"
            },
            {
                question: "What does DHCP stand for?",
                options: ["Dynamic Host Control Protocol", "Dynamic Host Configuration Protocol", "Direct Host Configuration Protocol", "Distributed Host Control Protocol"],
                correct: 1,
                category: "Services"
            },
            {
                question: "Which EtherChannel protocol is Cisco proprietary?",
                options: ["LACP", "PAgP", "STP", "RSTP"],
                correct: 1,
                category: "Switching"
            },
            {
                question: "What is the subnet mask for a /28 network?",
                options: ["255.255.255.240", "255.255.255.224", "255.255.255.248", "255.255.255.252"],
                correct: 0,
                category: "IP Addressing"
            },
            {
                question: "What port does DNS use?",
                options: ["22", "53", "80", "443"],
                correct: 1,
                category: "Services"
            },
            {
                question: "What is an OSPF Area Border Router (ABR)?",
                options: ["A router at the network edge", "A router connecting to the internet", "A router with interfaces in multiple OSPF areas", "The fastest router in the area"],
                correct: 2,
                category: "Routing"
            }
        ];

        // Filter by category
        let filtered = category === 'All Topics'
            ? allQuestions
            : allQuestions.filter(q => q.category === category);

        // Shuffle and limit
        for (let i = filtered.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
        }

        return filtered.slice(0, Math.min(count, filtered.length));
    }

    showQuizQuestion() {
        const { questions, currentIndex } = this.state.quizState;
        const question = questions[currentIndex];

        document.getElementById('currentQuestion').textContent = currentIndex + 1;
        document.getElementById('questionText').textContent = question.question;

        const progress = ((currentIndex) / questions.length) * 100;
        document.getElementById('quizProgressFill').style.width = `${progress}%`;

        const optionsContainer = document.getElementById('answerOptions');
        const letters = ['A', 'B', 'C', 'D'];
        optionsContainer.innerHTML = question.options.map((opt, i) => `
            <div class="answer-option" data-index="${i}">
                <span class="option-letter">${letters[i]}</span>
                <span class="option-text">${opt}</span>
            </div>
        `).join('');

        optionsContainer.querySelectorAll('.answer-option').forEach(opt => {
            opt.addEventListener('click', () => this.selectAnswer(parseInt(opt.dataset.index)));
        });
    }

    selectAnswer(index) {
        const { questions, currentIndex } = this.state.quizState;
        const question = questions[currentIndex];
        const isCorrect = index === question.correct;

        // Mark selected and correct/incorrect
        const options = document.querySelectorAll('.answer-option');
        options.forEach((opt, i) => {
            opt.style.pointerEvents = 'none';
            if (i === index) {
                opt.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
            if (i === question.correct) {
                opt.classList.add('correct');
            }
        });

        // Update score
        if (isCorrect) {
            this.state.quizState.score++;
        }
        this.state.quizState.answers.push({ index, isCorrect });

        // Move to next question after delay
        setTimeout(() => {
            this.state.quizState.currentIndex++;

            if (this.state.quizState.currentIndex >= questions.length) {
                this.showQuizResults();
            } else {
                this.showQuizQuestion();
            }
        }, 1500);
    }

    showQuizResults() {
        const { score, questions } = this.state.quizState;
        const percentage = Math.round((score / questions.length) * 100);

        document.getElementById('quizActive').style.display = 'none';
        document.getElementById('quizResults').style.display = 'block';

        document.getElementById('scoreValue').textContent = score;
        document.getElementById('resultsPercentage').textContent = `${percentage}%`;

        // Update max score display
        document.querySelector('.score-max').textContent = `/ ${questions.length}`;

        // Set icon and title based on score
        let icon, title;
        if (percentage >= 90) {
            icon = '🏆';
            title = 'Excellent!';
        } else if (percentage >= 70) {
            icon = '🎉';
            title = 'Great Job!';
        } else if (percentage >= 50) {
            icon = '👍';
            title = 'Good Effort!';
        } else {
            icon = '📚';
            title = 'Keep Studying!';
        }

        document.getElementById('resultsIcon').textContent = icon;
        document.getElementById('resultsTitle').textContent = title;

        // Update progress
        this.state.progress.quizzesTaken++;
        this.state.progress.quizScores.push(percentage);

        // Check for perfect score achievement
        if (percentage === 100 && !this.state.progress.achievements.includes('quiz_master')) {
            this.state.progress.achievements.push('quiz_master');
            showToast('🧠', 'Achievement Unlocked!', 'Quiz Master - Scored 100% on a quiz!');
        }

        this.state.saveProgress();
        this.updateStats();
    }

    resetQuiz() {
        document.getElementById('quizSetup').style.display = 'block';
        document.getElementById('quizActive').style.display = 'none';
        document.getElementById('quizResults').style.display = 'none';
    }

    // ============================================
    // Progress View
    // ============================================
    updateProgressView() {
        const progress = this.state.progress;
        const percentage = Math.round((progress.completedTopics.length / COURSE_TOPICS.length) * 100);

        document.getElementById('overallProgress').textContent = `${percentage}%`;
        document.getElementById('topicsStudied').textContent = progress.topicsViewed.length;
        document.getElementById('flashcardsReviewed').textContent = progress.flashcardsReviewed;
        document.getElementById('quizzesTaken').textContent = progress.quizzesTaken;

        const avgScore = progress.quizScores.length > 0
            ? Math.round(progress.quizScores.reduce((a, b) => a + b, 0) / progress.quizScores.length)
            : 0;
        document.getElementById('avgScore').textContent = `${avgScore}%`;

        // Update progress ring
        const ring = document.getElementById('progressRingFill');
        if (ring) {
            const circumference = 2 * Math.PI * 90;
            const offset = circumference - (percentage / 100) * circumference;
            ring.style.strokeDashoffset = offset;
        }

        // Update achievements
        this.updateAchievements();
    }

    updateAchievements() {
        const achievements = this.state.progress.achievements;
        const achievementMap = {
            'first_steps': 0,
            'on_fire': 1,
            'quiz_master': 2,
            'scholar': 3,
            'speed_demon': 4,
            'ccna_ready': 5
        };

        const achievementElements = document.querySelectorAll('.achievement');
        achievementElements.forEach((el, index) => {
            const achievementKey = Object.keys(achievementMap).find(k => achievementMap[k] === index);
            if (achievements.includes(achievementKey)) {
                el.classList.add('unlocked');
            }
        });
    }
}

// ============================================
// Utility Functions
// ============================================
function showToast(icon, title, message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ============================================
// Initialize Application
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CCNAStudyHub();

    // Add SVG gradient for progress ring
    const svg = document.querySelector('.progress-ring');
    if (svg) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = `
            <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#00d4ff"/>
                <stop offset="100%" stop-color="#7c3aed"/>
            </linearGradient>
        `;
        svg.insertBefore(defs, svg.firstChild);
    }
});
