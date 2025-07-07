// All skills in one array with colors for Java Developer position
export const allSkills = [
    // Backend Development
    { name: "Java", icon: "Coffee", color: "from-blue-500 to-cyan-500" },
    { name: "Spring Boot", icon: "Leaf", color: "from-blue-500 to-cyan-500" },
    { name: "Spring Framework", icon: "Settings", color: "from-blue-500 to-cyan-500" },
    { name: "Spring Security", icon: "Shield", color: "from-blue-500 to-cyan-500" },
    { name: "Hibernate/JPA", icon: "Database", color: "from-blue-500 to-cyan-500" },
    { name: "REST APIs", icon: "Globe", color: "from-blue-500 to-cyan-500" },
    { name: "Microservices", icon: "Network", color: "from-blue-500 to-cyan-500" },

    // Frontend Development
    { name: "JavaScript", icon: "Code", color: "from-pink-500 to-purple-500" },
    { name: "React", icon: "Atom", color: "from-pink-500 to-purple-500" },
    { name: "HTML5/CSS3", icon: "Layout", color: "from-pink-500 to-purple-500" },
    { name: "TypeScript", icon: "FileText", color: "from-pink-500 to-purple-500" },

    // Databases
    { name: "SQL", icon: "Database", color: "from-green-500 to-teal-500" },
    { name: "PostgreSQL", icon: "Server", color: "from-green-500 to-teal-500" },
    { name: "MySQL", icon: "HardDrive", color: "from-green-500 to-teal-500" },
    { name: "MongoDB", icon: "Layers", color: "from-green-500 to-teal-500" },
    { name: "Redis", icon: "Zap", color: "from-green-500 to-teal-500" },

    // DevOps & Tools
    { name: "Docker", icon: "Package", color: "from-orange-500 to-red-500" },
    { name: "Kubernetes", icon: "Box", color: "from-orange-500 to-red-500" },
    { name: "Git", icon: "GitBranch", color: "from-orange-500 to-red-500" },
    { name: "Maven", icon: "Package2", color: "from-orange-500 to-red-500" },
    { name: "Jenkins", icon: "Cog", color: "from-orange-500 to-red-500" },
    { name: "Linux", icon: "Terminal", color: "from-orange-500 to-red-500" },

    // Messaging & Events
    { name: "RabbitMQ", icon: "MessageSquare", color: "from-purple-500 to-indigo-500" },
    { name: "Apache Kafka", icon: "Radio", color: "from-purple-500 to-indigo-500" },

    // Testing & Quality
    { name: "JUnit", icon: "CheckCircle", color: "from-cyan-500 to-blue-500" },
    { name: "Mockito", icon: "TestTube", color: "from-cyan-500 to-blue-500" },
    { name: "TestContainers", icon: "Container", color: "from-cyan-500 to-blue-500" },
    { name: "Postman", icon: "Send", color: "from-cyan-500 to-blue-500" },

    // Cloud & Infrastructure
    { name: "AWS", icon: "Cloud", color: "from-yellow-500 to-orange-500" },
    { name: "Docker Compose", icon: "Layers3", color: "from-yellow-500 to-orange-500" },
    { name: "Swagger/OpenAPI", icon: "FileText", color: "from-yellow-500 to-orange-500" }
];

// Skills organized by categories for Java Developer position
export const skillCategories = [
    {
        category: "Backend Development",
        color: "from-blue-500 to-cyan-500",
        skills: [
            { name: "Java", icon: "Coffee" },
            { name: "Spring Boot", icon: "Leaf" },
            { name: "Spring Framework", icon: "Settings" },
            { name: "Spring Security", icon: "Shield" },
            { name: "Hibernate/JPA", icon: "Database" },
            { name: "REST APIs", icon: "Globe" },
            { name: "Microservices", icon: "Network" }
        ]
    },
    {
        category: "Frontend Development",
        color: "from-pink-500 to-purple-500",
        skills: [
            { name: "JavaScript", icon: "Code" },
            { name: "React", icon: "Atom" },
            { name: "HTML5/CSS3", icon: "Layout" },
            { name: "TypeScript", icon: "FileText" }
        ]
    },
    {
        category: "Databases",
        color: "from-green-500 to-teal-500",
        skills: [
            { name: "SQL", icon: "Database" },
            { name: "PostgreSQL", icon: "Server" },
            { name: "MySQL", icon: "HardDrive" },
            { name: "MongoDB", icon: "Layers" },
            { name: "Redis", icon: "Zap" }
        ]
    },
    {
        category: "DevOps & Tools",
        color: "from-orange-500 to-red-500",
        skills: [
            { name: "Docker", icon: "Package" },
            { name: "Kubernetes", icon: "Box" },
            { name: "Git", icon: "GitBranch" },
            { name: "Maven", icon: "Package2" },
            { name: "Jenkins", icon: "Cog" },
            { name: "Linux", icon: "Terminal" }
        ]
    },
    {
        category: "Messaging & Events",
        color: "from-purple-500 to-indigo-500",
        skills: [
            { name: "RabbitMQ", icon: "MessageSquare" },
            { name: "Apache Kafka", icon: "Radio" }
        ]
    },
    {
        category: "Testing & Quality",
        color: "from-cyan-500 to-blue-500",
        skills: [
            { name: "JUnit", icon: "CheckCircle" },
            { name: "Mockito", icon: "TestTube" },
            { name: "TestContainers", icon: "Container" },
            { name: "Postman", icon: "Send" }
        ]
    },
    {
        category: "Cloud & Infrastructure",
        color: "from-yellow-500 to-orange-500",
        skills: [
            { name: "AWS", icon: "Cloud" },
            { name: "Docker Compose", icon: "Layers3" },
            { name: "Swagger/OpenAPI", icon: "FileText" }
        ]
    }
];

// Legacy skills array for backward compatibility
export const skills = [
    { name: "Java", icon: "Coffee" },
    { name: "Spring Boot", icon: "Leaf" },
    { name: "React", icon: "Atom" },
    { name: "SQL", icon: "Database" },
    { name: "Docker", icon: "Package" }
];

export const projects = [
    {
        title: "E-commerce Microservices Platform",
        description: "Scalable microservices architecture with Spring Boot, Docker, and Kubernetes",
        tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "RabbitMQ"],
        demo: "https://example.com/demo1",
        code: "https://github.com/yourusername/ecommerce-microservices"
    },
    {
        title: "Task Management REST API",
        description: "RESTful API with Spring Security, JWT authentication and comprehensive testing",
        tech: ["Java", "Spring Boot", "Spring Security", "JUnit", "PostgreSQL", "Docker"],
        demo: "https://example.com/demo2",
        code: "https://github.com/yourusername/task-management-api"
    },
    {
        title: "Real-time Chat Application",
        description: "Full-stack chat app with WebSocket, React frontend and Spring Boot backend",
        tech: ["Java", "Spring Boot", "React", "WebSocket", "MySQL", "Redis"],
        demo: "https://example.com/demo3",
        code: "https://github.com/yourusername/realtime-chat"
    }
];