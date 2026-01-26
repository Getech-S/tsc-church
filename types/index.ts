export interface NavItem {
    title: string;
    href: string;
    disabled?: boolean;
  }
  
  export interface SiteConfig {
    name: string;
    description: string;
    navItems: NavItem[];
  }