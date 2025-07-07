import React, { forwardRef } from 'react';
import * as LucideIcons from 'lucide-react';

// All skills in one flat array with individual colors and matching icon colors
const allSkills = [
    // Backend Development (blue-cyan) - more muted
    { name: "Java", icon: "Coffee", color: "from-blue-500/15 to-cyan-500/15", iconColor: "text-blue-400" },
    { name: "Spring Boot", icon: "Leaf", color: "from-blue-500/15 to-cyan-500/15", iconColor: "text-blue-400" },
    { name: "Spring Framework", icon: "Settings", color: "from-blue-500/15 to-cyan-500/15", iconColor: "text-blue-400" },
    { name: "Spring Security", icon: "Shield", color: "from-blue-500/15 to-cyan-500/15", iconColor: "text-blue-400" },
    { name: "Hibernate/JPA", icon: "Database", color: "from-blue-500/15 to-cyan-500/15", iconColor: "text-blue-400" },
    { name: "REST APIs", icon: "Globe", color: "from-blue-500/15 to-cyan-500/15", iconColor: "text-blue-400" },
    { name: "Microservices", icon: "Network", color: "from-blue-500/15 to-cyan-500/15", iconColor: "text-blue-400" },

    // Frontend Development (pink-purple) - more muted
    { name: "JavaScript", icon: "Code", color: "from-pink-500/15 to-purple-500/15", iconColor: "text-pink-400" },
    { name: "React", icon: "Atom", color: "from-pink-500/15 to-purple-500/15", iconColor: "text-pink-400" },

    // Databases (green-teal) - more muted
    { name: "SQL", icon: "Database", color: "from-green-500/15 to-teal-500/15", iconColor: "text-green-400" },
    { name: "PostgreSQL", icon: "Server", color: "from-green-500/15 to-teal-500/15", iconColor: "text-green-400" },
    { name: "MySQL", icon: "HardDrive", color: "from-green-500/15 to-teal-500/15", iconColor: "text-green-400" },
    { name: "Oracle", icon: "Cylinder", color: "from-green-500/15 to-teal-500/15", iconColor: "text-green-400" },

    // DevOps & Tools (orange-red) - more muted
    { name: "Docker", icon: "Package", color: "from-orange-500/15 to-red-500/15", iconColor: "text-orange-400" },
    { name: "Git", icon: "GitBranch", color: "from-orange-500/15 to-red-500/15", iconColor: "text-orange-400" },
    { name: "Maven", icon: "Package2", color: "from-orange-500/15 to-red-500/15", iconColor: "text-orange-400" },
    { name: "Linux", icon: "Terminal", color: "from-orange-500/15 to-red-500/15", iconColor: "text-orange-400" },

    // Messaging & Events (purple-indigo) - more muted
    { name: "RabbitMQ", icon: "MessageSquare", color: "from-purple-500/15 to-indigo-500/15", iconColor: "text-purple-400" },

    // Testing & Quality (cyan-blue) - more muted
    { name: "JUnit", icon: "CheckCircle", color: "from-cyan-500/15 to-blue-500/15", iconColor: "text-cyan-400" },
    { name: "Postman", icon: "Send", color: "from-cyan-500/15 to-blue-500/15", iconColor: "text-cyan-400" },

    // Cloud & Infrastructure (yellow-orange) - more muted
    { name: "Swagger/OpenAPI", icon: "FileText", color: "from-yellow-500/15 to-orange-500/15", iconColor: "text-yellow-400" }
];

const Skills = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="skills" className="py-12 px-6 vaporwave-section">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-5xl font-bold text-center mb-12 relative inline-block w-full scroll-animate animate-up">
                    <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
                        [ Technical Skills ]
                    </span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 text-cyan-500/30 glitch-header-2">
                        [ Technical Skills ]
                    </span>
                </h2>

                {/* All Skills in One Grid - Clean Design */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center mx-auto max-w-7xl scroll-animate animate-up">
                    {allSkills.map((skill, index) => {
                        const Icon = LucideIcons[skill.icon];
                        return (
                            <div
                                key={skill.name}
                                className={`bg-gradient-to-br ${skill.color} p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 h-32 flex flex-col items-center justify-center text-center backdrop-blur-md`}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="flex items-center justify-center w-full mb-2">
                                    {Icon && <Icon className={`w-10 h-10 ${skill.iconColor}`} />}
                                </div>
                                <h4 className="text-sm font-medium text-cyan-100 leading-tight">{skill.name}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
});

Skills.displayName = 'Skills';

export default Skills;