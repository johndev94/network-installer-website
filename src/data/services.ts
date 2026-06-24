// To change prices, edit priceLabel and priceFrom in this file.
export type Service = {
  id: string;
  name: string;
  category: 'business' | 'home' | 'support' | 'monthly';
  shortDescription: string;
  fullDescription: string;
  priceLabel: string;
  priceFrom: number;
  priceUnit: string;
  popular?: boolean;
  recommended?: boolean;
  features: string[];
};

export const services: Service[] = [
  {
    id: 'wifi-health-check',
    name: 'WiFi Health Check',
    category: 'business',
    shortDescription:
      'Identify weak WiFi, dead spots, interference, and poor router placement.',
    fullDescription:
      'A practical on-site review of your current WiFi setup with recommendations to improve coverage, speed, and reliability.',
    priceLabel: 'From €99',
    priceFrom: 99,
    priceUnit: 'one-off',
    popular: true,
    features: [
      'On-site WiFi review',
      'Speed testing',
      'Coverage check',
      'Router placement advice',
      'Improvement recommendations',
    ],
  },
  {
    id: 'router-installation',
    name: 'Router Installation',
    category: 'business',
    shortDescription:
      'Professional router setup for internet access, WiFi, admin handover, and basic firewall rules.',
    fullDescription:
      'Router installation and configuration for homes, home offices, and small businesses. DrayTek router installation available, and we are experienced with a range of business networking equipment.',
    priceLabel: 'From €199',
    priceFrom: 199,
    priceUnit: 'one-off',
    recommended: true,
    features: [
      'Router setup',
      'Internet/WAN configuration',
      'Basic firewall setup',
      'WiFi configuration',
      'Admin access handover',
    ],
  },
  {
    id: 'business-wifi-upgrade',
    name: 'Business WiFi Upgrade',
    category: 'business',
    shortDescription:
      'Improve coverage, reliability, and guest access with planned business WiFi.',
    fullDescription:
      'Upgrade a small business WiFi setup with better access point planning, secure settings, and practical advice for reliable day-to-day use.',
    priceLabel: 'From €299',
    priceFrom: 299,
    priceUnit: 'one-off',
    popular: true,
    features: [
      'Access point planning',
      'Business WiFi setup',
      'Guest WiFi option',
      'Coverage improvement',
      'Secure configuration',
    ],
  },
  {
    id: 'vpn-setup',
    name: 'VPN Setup',
    category: 'business',
    shortDescription:
      'Set up secure remote access or site-to-site VPN connections for staff and offices.',
    fullDescription:
      'VPN configuration for remote workers, small offices, and branches, with testing and a simple connection guide for approved users.',
    priceLabel: 'From €249',
    priceFrom: 249,
    priceUnit: 'one-off',
    features: [
      'Remote access VPN',
      'Site-to-site VPN option',
      'User setup',
      'Basic testing',
      'Connection guide for staff',
    ],
  },
  {
    id: 'access-point-installation',
    name: 'Access Point Installation',
    category: 'business',
    shortDescription:
      'Install and configure access points to improve coverage and reduce WiFi dead zones.',
    fullDescription:
      'Mounting, setup, and testing for access points in offices, shops, cafes, hospitality venues, and larger homes.',
    priceLabel: 'From €149',
    priceFrom: 149,
    priceUnit: 'per access point',
    features: [
      'Mounting and setup',
      'SSID configuration',
      'Channel review',
      'Roaming setup where supported',
      'Testing after installation',
    ],
  },
  {
    id: 'network-troubleshooting-visit',
    name: 'Network Troubleshooting Visit',
    category: 'support',
    shortDescription:
      'Find the cause of unreliable internet, slow WiFi, router problems, or switch issues.',
    fullDescription:
      'On-site fault finding for network problems that affect card machines, tills, phones, booking systems, remote work, or general internet use.',
    priceLabel: 'From €120',
    priceFrom: 120,
    priceUnit: 'one-off',
    features: [
      'On-site fault finding',
      'Internet issue diagnosis',
      'WiFi issue diagnosis',
      'Router/switch checks',
      'Clear next-step report',
    ],
  },
  {
    id: 'home-office-setup',
    name: 'Home Office Setup',
    category: 'home',
    shortDescription:
      'Make your home office network more reliable for laptops, printers, VPNs, and calls.',
    fullDescription:
      'Practical setup and optimisation for remote workers who need dependable WiFi, secure connectivity, and fewer interruptions.',
    priceLabel: 'From €149',
    priceFrom: 149,
    priceUnit: 'one-off',
    features: [
      'Router and WiFi optimisation',
      'Work laptop connectivity',
      'Printer/network device setup',
      'VPN assistance',
      'Basic security checks',
    ],
  },
  {
    id: 'small-business-network-setup',
    name: 'Small Business Network Setup',
    category: 'business',
    shortDescription:
      'A complete small office setup covering router, switch, WiFi, guest access, and documentation.',
    fullDescription:
      'A clean network setup for small businesses that need stable internet, sensible security, and a setup someone can understand later.',
    priceLabel: 'From €499',
    priceFrom: 499,
    priceUnit: 'one-off',
    recommended: true,
    features: [
      'Router/firewall setup',
      'Switch setup',
      'WiFi/access point setup',
      'Guest WiFi',
      'Basic network documentation',
    ],
  },
  {
    id: 'remote-support-session',
    name: 'Remote Support Session',
    category: 'support',
    shortDescription:
      'Remote checks and guidance for router, WiFi, VPN, and configuration issues.',
    fullDescription:
      'A focused remote session for issues that can be safely reviewed with customer approval and suitable access.',
    priceLabel: 'From €60',
    priceFrom: 60,
    priceUnit: 'per hour',
    features: [
      'Remote router checks',
      'VPN support',
      'WiFi troubleshooting',
      'Configuration review',
      'Advice and guidance',
    ],
  },
  {
    id: 'monthly-support-starter',
    name: 'Monthly Support, Starter',
    category: 'monthly',
    shortDescription:
      'Light ongoing support for small businesses that want a reliable point of contact.',
    fullDescription:
      'A starter monthly support plan for basic remote help, network check-ins, and practical advice.',
    priceLabel: '€49',
    priceFrom: 49,
    priceUnit: 'per month',
    features: [
      'Remote support',
      'Basic router checks',
      'Firmware advice',
      'Priority response over non-contract customers',
      'Monthly network check-in',
    ],
  },
  {
    id: 'monthly-support-business',
    name: 'Monthly Support, Business',
    category: 'monthly',
    shortDescription:
      'Ongoing support for routers, firewalls, VPNs, WiFi, and basic documentation.',
    fullDescription:
      'A monthly support option for small businesses that need regular assistance and a clearer picture of their network.',
    priceLabel: '€99',
    priceFrom: 99,
    priceUnit: 'per month',
    popular: true,
    features: [
      'Remote support',
      'Router/firewall support',
      'VPN support',
      'WiFi support',
      'Quarterly review',
      'Basic network documentation',
    ],
  },
  {
    id: 'monthly-support-premium',
    name: 'Monthly Support, Premium',
    category: 'monthly',
    shortDescription:
      'Priority help and practical network management for businesses that depend on uptime.',
    fullDescription:
      'A higher-touch monthly support plan for small businesses that need priority assistance, regular reviews, and discounted site visits.',
    priceLabel: '€199',
    priceFrom: 199,
    priceUnit: 'per month',
    recommended: true,
    features: [
      'Priority support',
      'Router, VPN, and WiFi management',
      'Monitoring recommendations',
      'Quarterly review',
      'Discounted on-site visits',
      'Ideal for small businesses',
    ],
  },
];
