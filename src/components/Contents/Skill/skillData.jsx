// Icons only — text lives in locales/en.json and locales/id.json under skills.cards
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

// Positionally matched to skills.cards[cardIndex].items[itemIndex] in i18n JSON
export const SKILL_ICON_SETS = [
  // Card 0: Network & Connectivity
  [<SiMikrotik />, <TbTopologyRing />, <PiNetwork />, <MdVpnLock />, <BsTools />, <BsTools />],
  // Card 1: Infrastructure & Virtualization
  [<SiProxmox />, <BsTools />, <SiLinux />, <SiDocker />, <SiGit />, <SiTerraform />],
  // Card 2: Monitoring & Observability
  [<BsTools />, <SiGrafana />, <BsTools />, <SiPrometheus />, <BsTools />, <MdOutlineMonitor />, <BsTools />, <BsTools />],
  // Card 3: Security & DNS
  [<SiCloudflare />, <BsShieldCheck />, <BsTools />, <BsTools />, <BsTools />, <BsTools />, <BsTools />, <SiNginx />],
  // Card 4: Services & Dev Tools
  [<SiAsterisk />, <BsTools />, <PiVideoCameraFill />, <BsTools />, <SiNextdotjs />, <SiExpress />, <SiMysql />, <FaAws />],
];
