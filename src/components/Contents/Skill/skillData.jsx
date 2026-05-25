import {
  SiProxmox, SiDocker,
  SiGrafana, SiPrometheus, SiLinux,
  SiMikrotik,
  SiNextdotjs, SiExpress,
  SiMysql, SiNginx, SiGit,
  SiCloudflare, SiTerraform,
  SiAsterisk,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { PiNetwork, PiVideoCameraFill } from "react-icons/pi";
import { BsTools, BsShieldCheck } from "react-icons/bs";
import { TbTopologyRing } from "react-icons/tb";
import { MdOutlineMonitor, MdVpnLock } from "react-icons/md";

export const CARD_W = 260;
export const CARD_H = 400;

export const SKILL_CARDS = [
  {
    category: "NETWORK & CONNECTIVITY",
    items: [
      { icon: <SiMikrotik />,       label: "MikroTik (CCR2004/CCR1009/RB750)" },
      { icon: <TbTopologyRing />,   label: "Ruijie SD-WAN Anylink" },
      { icon: <PiNetwork />,        label: "VLAN / OSPF / BGP" },
      { icon: <MdVpnLock />,        label: "WireGuard VPN" },
      { icon: <BsTools />,          label: "FTTH / OSP Fiber Optic" },
      { icon: <BsTools />,          label: "LAN Cabling" },
    ],
  },
  {
    category: "INFRASTRUCTURE & VIRTUALIZATION",
    items: [
      { icon: <SiProxmox />,        label: "Proxmox VE" },
      { icon: <BsTools />,          label: "Proxmox Backup Server" },
      { icon: <SiLinux />,          label: "Linux Server (Ubuntu/Debian)" },
      { icon: <SiDocker />,         label: "Docker" },
      { icon: <SiGit />,            label: "Git & Bash Scripting" },
      { icon: <SiTerraform />,      label: "Terraform / Ansible (IaaC)" },
    ],
  },
  {
    category: "MONITORING & OBSERVABILITY",
    items: [
      { icon: <BsTools />,          label: "Zabbix" },
      { icon: <SiGrafana />,        label: "Grafana OSS" },
      { icon: <BsTools />,          label: "Grafana Alloy" },
      { icon: <SiPrometheus />,     label: "Prometheus" },
      { icon: <BsTools />,          label: "Loki" },
      { icon: <MdOutlineMonitor />, label: "Telegram Bot & MS Teams Alerting" },
      { icon: <BsTools />,          label: "rsyslog" },
      { icon: <BsTools />,          label: "WebSocket NMS-TV" },
    ],
  },
  {
    category: "SECURITY & DNS",
    items: [
      { icon: <SiCloudflare />,     label: "Cloudflare WAF/SSL (A+)" },
      { icon: <BsShieldCheck />,    label: "Teleport Bastion Host" },
      { icon: <BsTools />,          label: "Bitwarden Secrets Manager" },
      { icon: <BsTools />,          label: "Wazuh SIEM" },
      { icon: <BsTools />,          label: "MISP + IRIS" },
      { icon: <BsTools />,          label: "PowerDNS Recursor + Authoritative" },
      { icon: <BsTools />,          label: "DNSSEC + DNS-01 SSL" },
      { icon: <SiNginx />,          label: "NGINX Proxy Manager" },
    ],
  },
  {
    category: "SERVICES & DEV TOOLS",
    items: [
      { icon: <SiAsterisk />,         label: "Asterisk IP PBX" },
      { icon: <BsTools />,            label: "Synology NAS (RBAC)" },
      { icon: <PiVideoCameraFill />,  label: "Dahua EVS CCTV" },
      { icon: <BsTools />,            label: "GLPI ITSM" },
      { icon: <SiNextdotjs />,        label: "Next.js" },
      { icon: <SiExpress />,          label: "Express.js" },
      { icon: <SiMysql />,            label: "MySQL" },
      { icon: <FaAws />,              label: "AWS / Vercel" },
    ],
  },
];
