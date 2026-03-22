import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'Domain Availability Status',
    logo: 'https://cdn-hariyonorizki.eu.org/storageapis/public/favicon.ico',
    url: 'https://domain.hariyonorizki.eu.org',
    displayDays: 30,
    collectResponseTimes: false,
  },

  monitors: [

    // ========================
    // Hariyonorizki Core
    // ========================

    { id: 'hrz-01', name: 'hariyonorizki.eu.org', description: 'Main landing page.', url: 'https://hariyonorizki.eu.org/', method: 'GET', expectStatus: 200, followRedirect: false },
    { id: 'hrz-02', name: 'hariyonorizki.eu.cc', description: 'Secondary domain mirror.', url: 'https://hariyonorizki.eu.cc', method: 'GET', expectStatus: 200 },

    // ========================
    // Hariyonorizki Services
    // ========================

    { id: 'svc-01', name: 'api.hariyonorizki.eu.org', description: 'Primary API service.', url: 'https://api.hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },
    { id: 'svc-02', name: 'auth.hariyonorizki.eu.org', description: 'Authentication service.', url: 'https://auth.hariyonorizki.eu.org', method: 'GET', expectStatus: 302 },
    { id: 'svc-03', name: 'analytics.hariyonorizki.eu.org', description: 'Analytics dashboard.', url: 'https://analytics.hariyonorizki.eu.org', method: 'GET', expectStatus: 307 },
    { id: 'svc-04', name: 'status.hariyonorizki.eu.org', description: 'System status page.', url: 'https://status.hariyonorizki.eu.org', method: 'GET', expectStatus: 302 },

    // ========================
    // Automation & Bots
    // ========================

    { id: 'bot-01', name: 'n8n.hariyonorizki.eu.org', description: 'Workflow automation service.', url: 'https://n8n.hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },
    { id: 'bot-02', name: 'ntfy.hariyonorizki.eu.org', description: 'Notification service.', url: 'https://ntfy.hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },
    //{ id: 'bot-03', name: 'waha.hariyonorizki.eu.org', description: 'WhatsApp HTTP API service.', url: 'https://waha.hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },
    { id: 'bot-04', name: 'typebot.hariyonorizki.eu.org', description: 'Typebot chatbot service.', url: 'https://typebot.hariyonorizki.eu.org', method: 'GET', expectStatus: 307 },

    // ========================
    // Infrastructure
    // ========================

    { id: 'infra-01', name: 'cdn-hariyonorizki.eu.org', description: 'Primary CDN.', url: 'https://cdn-hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },
    { id: 'infra-02', name: 'cdn-kikiserver.eu.org', description: 'CDN backup node.', url: 'https://cdn-kikiserver.eu.org', method: 'GET', expectStatus: 200 },
    //{ id: 'infra-03', name: 'portainer.hariyonorizki.eu.org', description: 'Docker management panel.', url: 'https://portainer.hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },
    { id: 'infra-04', name: 'vpn.hariyonorizki.eu.org', description: 'VPN gateway.', url: 'https://vpn.hariyonorizki.eu.org', method: 'GET', expectStatus: 302 },
    { id: 'infra-05', name: 'vnc.hariyonorizki.eu.org', description: 'VNC remote access.', url: 'https://vnc.hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },
    //{ id: 'infra-06', name: 'rdp.hariyonorizki.eu.org', description: 'RDP remote access.', url: 'https://rdp.hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },

    // ========================
    // Database Services
    // ========================

    { id: 'db-01', name: 'db.hariyonorizki.eu.org', description: 'phpMyAdmin interface.', url: 'https://db.hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },
    //{ id: 'db-02', name: 'dbpgsql.hariyonorizki.eu.org', description: 'Supabase Studio.', url: 'https://dbpgsql.hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },
    //{ id: 'db-03', name: 'mysql.hariyonorizki.eu.org', description: 'MySQL database service.', url: 'https://mysql.hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },
    //{ id: 'db-04', name: 'pgsql.hariyonorizki.eu.org', description: 'PostgreSQL database service.', url: 'https://pgsql.hariyonorizki.eu.org', method: 'GET', expectStatus: 302 },
    { id: 'db-05', name: 'redis.hariyonorizki.eu.org', description: 'Redis database service.', url: 'https://redis.hariyonorizki.eu.org', method: 'GET', expectStatus: 302 },

    // ========================
    // Self Hosted Apps
    // ========================

    { id: 'self-01', name: 'pass.hariyonorizki.eu.org', description: 'Bitwarden password manager.', url: 'https://pass.hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },
   // { id: 'self-02', name: 'git.hariyonorizki.eu.org', description: 'Git repository service.', url: 'https://git.hariyonorizki.eu.org', method: 'GET', expectStatus: 200 },

    // ========================
    // Workspace Domains
    // ========================

    //{ id: 'ws-01', name: 'kikidrive.my.id', description: 'Google Workspace primary domain.', url: 'https://kikidrive.my.id', method: 'GET', expectStatus: 200 },
    //{ id: 'ws-02', name: 'kikidrive.xo.je', description: 'Google Workspace alias domain.', url: 'https://kikidrive.xo.je', method: 'GET', expectStatus: 200 },
    //{ id: 'ws-03', name: 'kikidrive.rf.gd', description: 'Google Workspace alias domain.', url: 'https://kikidrive.rf.gd', method: 'GET', expectStatus: 200 },
    //{ id: 'ws-04', name: 'kikidrive.fwh.is', description: 'Google Workspace alias domain.', url: 'https://kikidrive.fwh.is', method: 'GET', expectStatus: 200 },
    //{ id: 'ws-05', name: 'kikicloud.eu.cc', description: 'Google Workspace cloud domain.', url: 'https://kikicloud.eu.cc', method: 'GET', expectStatus: 200 },
    //{ id: 'ws-06', name: 'kikiworkspace.my.id', description: 'Kiki Workspace domain.', url: 'https://kikiworkspace.my.id', method: 'GET', expectStatus: 200 },
    //{ id: 'ws-07', name: 'kibotzeducation.my.id', description: 'Kibotz Education workspace.', url: 'https://kibotzeducation.my.id', method: 'GET', expectStatus: 200 },
    //{ id: 'ws-08', name: 'iteducationkibotz.my.id', description: 'IT Education Kibotz workspace.', url: 'https://iteducationkibotz.my.id', method: 'GET', expectStatus: 200 },

    // ========================
    // Gendhis Photo Studio Network
    // ========================

    { id: 'gnd-01', name: 'gendhis.eu.cc', description: 'Main Gendhis website.', url: 'https://gendhis.eu.cc', method: 'GET', expectStatus: 200 },
    { id: 'gnd-02', name: 'gendhisphotostudio.eu.cc', description: 'Gendhis Photo Studio website.', url: 'https://gendhisphotostudio.eu.cc', method: 'GET', expectStatus: 200 },
    { id: 'gnd-03', name: 'cdn-gendhisphotostudio.eu.cc', description: 'CDN for Gendhis Photo Studio.', url: 'https://cdn-gendhisphotostudio.eu.cc', method: 'GET', expectStatus: 200 },

    // ========================
    // Kiki Additional Services Network
    // ========================

    { id: 'kiki-01', name: 'kikigameserver.eu.org', description: 'Game server platform.', url: 'https://kikigameserver.eu.org', method: 'GET', expectStatus: 200 },
    { id: 'kiki-02', name: 'kikiserverstatus.eu.org', description: 'Kiki server status page.', url: 'https://kikiserverstatus.eu.org', method: 'GET', expectStatus: 200 },

    // ========================
    // DKV Network
    // ========================

    { id: 'dkv-01', name: 'dkvskanegu.eu.cc', description: 'DKV Skanegu website.', url: 'https://dkvskanegu.eu.cc', method: 'GET', expectStatus: 200 },
    { id: 'dkv-02', name: 'dkvproduction.eu.cc', description: 'DKV Production website.', url: 'https://dkvproduction.eu.cc', method: 'GET', expectStatus: 200 },

    // ========================
    // Kibotz Education Network
    // ========================

    { id: 'botnet-01', name: 'kibotz.edu.eu.org', description: 'Kibotz bot service.', url: 'https://kibotz.edu.eu.org', method: 'GET', expectStatus: 200 },


    // ========================
    // Supabase Endpoint Health Checker
    // ========================

    { id: 'pgsql-01', name: 'Photobooth App Database', description: 'Supabase Endpoint Health Checker.', url: 'https://feeeqeyxoeqwgfhzvlgs.supabase.co/rest/v1/health?select=text&limit=1&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlZWVxZXl4b2Vxd2dmaHp2bGdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MDIzNDUsImV4cCI6MjA4OTA3ODM0NX0.JZspTeF3-QjButEs_Z6KlDcPyNxZpKndnyJaf1k6CFs', method: 'GET', expectStatus: 200 },

    { id: 'pgsql-02', name: 'Vaultwarden App Database', description: 'Supabase Endpoint Health Checker.', url: 'https://kmtbdwvaqetdmqflxahv.supabase.co/rest/v1/health?select=text&limit=1&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttdGJkd3ZhcWV0ZG1xZmx4YWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzkxNTcsImV4cCI6MjA3MTExNTE1N30.UyIHBj1UMeocqv7gISLeD_k_TLrHr4HsoIkmSU55Mpg', method: 'GET', expectStatus: 200 },

    { id: 'pgsql-03', name: 'Umami App Database', description: 'Supabase Endpoint Health Checker.', url: 'https://bgkrbrgwxwgpwrxwwync.supabase.co/rest/v1/health?select=text&limit=1&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJna3Jicmd3eHdncHdyeHd3eW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NDQzMTQsImV4cCI6MjA3MDMyMDMxNH0.z06oG1-Dfz--qtSrQEN5L3CZOh25AdvTShcO_ljVKvM', method: 'GET', expectStatus: 200 },

    // ========================
    // Infinity Free Endpoint Checker
    // ========================

    { id: 'infr-01', name: 'host-1-kiki.infinityfree.me', description: 'Infinity Free Hosting Endpoint.', url: 'https://host-1-kiki.infinityfree.me', method: 'GET', expectStatus: 200 },
    { id: 'infr-02', name: 'host-2-kiki.infinityfree.me', description: 'Infinity Free Hosting Endpoint.', url: 'https://host-2-kiki.infinityfree.me', method: 'GET', expectStatus: 200 },
    { id: 'infr-03', name: 'host-3-kiki.infinityfree.me', description: 'Infinity Free Hosting Endpoint.', url: 'https://host-3-kiki.infinityfree.me', method: 'GET', expectStatus: 200 },


  ],
}