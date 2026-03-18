// src/components/Contents/Skill.jsx
import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import {
  SiGooglecloud,
  SiProxmox, SiVmware, SiDocker, SiKubernetes,
  SiGrafana, SiPrometheus, SiLinux,
  SiMikrotik,
  SiReact, SiNextdotjs, SiExpress, SiTypescript,
  SiTailwindcss, SiPrisma, SiMysql, SiNodedotjs,
  SiNginx, SiGit, SiGithub,
} from "react-icons/si";
import {
  PiNetwork, PiVideoCameraFill,
} from "react-icons/pi";
import { BsTools, BsShieldCheck } from "react-icons/bs";
import { TbApi, TbTopologyRing } from "react-icons/tb";
import { MdOutlineMonitor } from "react-icons/md";
import { useTranslation } from "react-i18next";

const SKILL_CARDS = [
  {
    category: "CLOUD & VIRTUALIZATION",
    items: [
      { icon: <SiGooglecloud />,        label: "Google Cloud Platform" },
      { icon: <BsTools />,  label: "AWS" },
      { icon: <BsTools />,     label: "Microsoft Azure" },
      { icon: <SiProxmox />,            label: "Proxmox VE" },
      { icon: <SiVmware />,             label: "VMware ESXi" },
      { icon: <PiNetwork />,            label: "Hyper-V" },
      { icon: <SiDocker />,             label: "Docker" },
      { icon: <SiKubernetes />,         label: "Kubernetes" },
    ],
  },
  {
    category: "MONITORING & OBSERVABILITY",
    items: [
      { icon: <SiGrafana />,          label: "Grafana" },
      { icon: <SiPrometheus />,       label: "Prometheus" },
      { icon: <BsTools />,             label: "Loki" },
      { icon: <MdOutlineMonitor />,   label: "Alertmanager" },
      { icon: <BsTools />,            label: "Zabbix" },
      { icon: <BsTools />,            label: "Uptime Kuma" },
      { icon: <BsTools />,            label: "Node Exporter" },
      { icon: <BsTools />,            label: "cAdvisor" },
    ],
  },
  {
    category: "NETWORK & SECURITY",
    items: [
      { icon: <SiMikrotik />,       label: "MikroTik RouterOS" },
      { icon: <TbTopologyRing />,   label: "SD-WAN / VLAN" },
      { icon: <BsTools />,       label: "PowerDNS Recursor" },
      { icon: <PiNetwork />,        label: "phpIPAM" },
      { icon: <BsTools />,          label: "Wazuh (SIEM)" },
      { icon: <BsShieldCheck />,    label: "TheHive / Cortex" },
      { icon: <BsTools />,          label: "MISP / Kafka" },
      { icon: <PiVideoCameraFill />,label: "Dahua / Hikvision CCTV" },
    ],
  },
  {
    category: "INFRASTRUCTURE & SERVICES",
    items: [
      { icon: <SiNginx />,        label: "Nginx Reverse Proxy" },
      { icon: <BsTools />,      label: "Traefik Ingress" },
      { icon: <SiLinux />,        label: "Linux (Ubuntu / CentOS)" },
      { icon: <BsTools />,        label: "Issabel PBX" },
      { icon: <BsTools />,        label: "GLPI / OCS Inventory" },
      { icon: <BsTools />,        label: "NFS / SMB Storage" },
      { icon: <TbApi />,          label: "REST API Integration" },
      { icon: <BsTools />,        label: "Bash Scripting" },
    ],
  },
  {
    category: "WEB DEVELOPMENT",
    items: [
      { icon: <SiReact />,        label: "React.js" },
      { icon: <SiNextdotjs />,    label: "Next.js (SSR/SSG)" },
      { icon: <SiNodedotjs />,    label: "Node.js" },
      { icon: <SiExpress />,      label: "Express.js" },
      { icon: <SiTypescript />,   label: "TypeScript" },
      { icon: <SiTailwindcss />,  label: "Tailwind CSS" },
      { icon: <SiPrisma />,       label: "Prisma ORM" },
      { icon: <SiMysql />,        label: "MySQL" },
    ],
  },
];

const CARD_W = 260;
const CARD_H = 400;

const Skill = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const dragStartX = useRef(null);
  const total = SKILL_CARDS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const handleDragStart = (e) => {
    dragStartX.current = e.type === "touchstart"
      ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e) => {
    if (dragStartX.current === null) return;
    const endX = e.type === "touchend"
      ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    dragStartX.current = null;
  };

  return (
    <section className="flex flex-col items-center gap-8 w-full py-4">

      <div
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        style={{
          display: "grid",
          width: CARD_W + 50,
          height: CARD_H + 40,
          cursor: "grab",
          userSelect: "none",
        }}
      >
        {[...Array(total)].map((_, i) => {
          const stackPos = (i - current + total) % total;
          if (stackPos > 3) return null;
          const isActive = stackPos === 0;
          const card = SKILL_CARDS[i];

          return (
            <motion.div
              key={i}
              animate={{
                x: stackPos * 12,
                y: stackPos * -5,
                rotate: stackPos * 1.8,
                scale: 1 - stackPos * 0.025,
                opacity: stackPos === 3 ? 0.2 : 1 - stackPos * 0.15,
                zIndex: total - stackPos,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              style={{
                gridArea: "1 / 1",
                width: CARD_W,
                height: CARD_H,
                transformOrigin: "bottom right",
              }}
            >
              <div
                className={`
                  w-full h-full rounded-xl overflow-hidden
                  bg-gradient-to-br from-neutral-900 to-neutral-800
                  border border-neutral-700 shadow-2xl flex flex-col
                  ${isActive ? "ring-1 ring-violet-500/40" : ""}
                `}
              >
                {/* Header */}
                <div className="bg-white py-3 px-4 shrink-0">
                  <h4 className="text-black text-xs text-center font-extrabold tracking-widest">
                    {card.category}
                  </h4>
                </div>

                {/* Skill list */}
                <div className="flex-1 overflow-hidden px-3 py-3">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.08 }}
                      className="flex flex-col gap-1.5"
                    >
                      {card.items.map((item, si) => (
                        <div
                          key={si}
                          className="flex items-center gap-2 px-3 py-1.5 border border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:border-violet-400 transition-all duration-300 text-xs rounded"
                        >
                          <span className="text-base shrink-0">{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-5">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-violet-500 transition-all duration-300 text-sm"
        >
          ←
        </button>
        <div className="flex gap-2">
          {SKILL_CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 h-2 bg-violet-500"
                  : "w-2 h-2 bg-neutral-700 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-violet-500 transition-all duration-300 text-sm"
        >
          →
        </button>
      </div>

      <p className="text-[10px] tracking-[0.3em] text-neutral-600 uppercase -mt-4">
        {current + 1} / {total} — {SKILL_CARDS[current].category}
      </p>
    </section>
  );
};

export default Skill;
