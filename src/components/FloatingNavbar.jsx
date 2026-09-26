import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  FolderGit2,
  Terminal,
  FlaskConical,
  MessageSquare,
  Mail
} from 'lucide-react';

export const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, title: 'Home' },
    { id: 'about', icon: User, title: 'About' },
    { id: 'experience', icon: Briefcase, title: 'Experience' },
    { id: 'skills', icon: BookOpen, title: 'Skills' },
    { id: 'projects', icon: FolderGit2, title: 'Portfolio' },
    { id: 'ai-lab', icon: Terminal, title: 'AI Lab' },
    { id: 'research', icon: FlaskConical, title: 'Research' },
    { id: 'chat-ai', icon: MessageSquare, title: 'Chat AI' },
    { id: 'contact', icon: Mail, title: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'experience',
        'skills',
        'projects',
        'ai-lab',
        'research',
        'chat-ai',
        'contact'
      ];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="floating-nav" aria-label="Quick Section Navigation">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`floating-nav-link ${isActive ? 'active' : ''}`}
            title={item.title}
            aria-label={item.title}
          >
            <Icon size={18} strokeWidth={isActive ? 2.5 : 1.8} />
          </button>
        );
      })}
    </nav>
  );
};
