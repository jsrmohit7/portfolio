import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export const FixedSidebars = () => {
  const scrollToChat = (e) => {
    e.preventDefault();
    const chatEl = document.getElementById('chat-ai');
    if (chatEl) {
      chatEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Left Sidebar: Social Links + Vertical Connector Line */}
      <aside className="fixed-left-sidebar" aria-label="Social connections">
        <a
          href={profileData.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-icon-link"
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          <LinkedinIcon size={19} color="#B5B5B5" />
        </a>

        <a
          href={profileData.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-icon-link"
          aria-label="GitHub profile"
          title="GitHub"
        >
          <GithubIcon size={19} color="#B5B5B5" />
        </a>

        <a
          href={`mailto:${profileData.socials.email}`}
          className="sidebar-icon-link"
          aria-label="Direct Email"
          title="Email"
        >
          <Mail size={19} color="#B5B5B5" />
        </a>

        <div className="sidebar-line" />
      </aside>

      {/* Right Sidebar: Vertical Rotated Link to Chat with my AI */}
      <aside className="fixed-right-sidebar" aria-label="Interactive AI navigation">
        <a
          href="#chat-ai"
          onClick={scrollToChat}
          className="sidebar-rotated-link"
          title="Ask My AI About Mohit"
        >
          <MessageSquare size={13} style={{ transform: 'rotate(90deg)' }} />
          <span>Chat with my AI</span>
        </a>
      </aside>
    </>
  );
};
