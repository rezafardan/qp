// src/components/DevEditor/EditorPage.jsx
// Full-page content editor — only rendered when URL has ?dev-editor
import { useState, useEffect, useRef, useCallback } from "react";
import i18n from "../i18n";

const STORAGE_KEY = (lang) => `i18n_override_${lang}`;

// ── Utilities ──────────────────────────────────────────────────────────────

function getPath(obj, path) {
  return path.split(".").reduce((o, k) => o?.[k], obj);
}

function setPath(obj, path, value) {
  const result = JSON.parse(JSON.stringify(obj));
  const keys = path.split(".");
  const last = keys.pop();
  const node = keys.reduce((o, k) => {
    if (!o[k] || typeof o[k] !== "object" || Array.isArray(o[k])) o[k] = {};
    return o[k];
  }, result);
  node[last] = value;
  return result;
}

// ── Primitive UI ────────────────────────────────────────────────────────────

const Label = ({ children }) => (
  <span className="text-[10px] text-gray-400 tracking-widest uppercase font-medium">{children}</span>
);

const TextInput = ({ value, onChange }) => (
  <input
    value={value ?? ""}
    onChange={(e) => onChange(e.target.value)}
    className="w-full bg-neutral-900 border border-white/10 text-white text-sm px-3 py-2 rounded focus:outline-none focus:border-violet-500 transition-colors"
  />
);

const TextArea = ({ value, onChange, rows = 3 }) => (
  <textarea
    value={value ?? ""}
    onChange={(e) => onChange(e.target.value)}
    rows={rows}
    className="w-full bg-neutral-900 border border-white/10 text-white text-sm px-3 py-2 rounded resize-y focus:outline-none focus:border-violet-500 transition-colors"
  />
);

const Field = ({ label, value, onChange, multiline = false, rows = 3 }) => (
  <div className="flex flex-col gap-1">
    <Label>{label}</Label>
    {multiline
      ? <TextArea value={value} onChange={onChange} rows={rows} />
      : <TextInput value={value} onChange={onChange} />
    }
  </div>
);

// ── Collapsible section ─────────────────────────────────────────────────────

const Section = ({ title, badge, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-widest uppercase text-white">{title}</span>
          {badge !== undefined && (
            <span className="text-[10px] bg-violet-600/30 text-violet-300 px-2 py-0.5 rounded-full">{badge}</span>
          )}
        </div>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-4 pb-5 pt-4 space-y-4">{children}</div>}
    </div>
  );
};

// ── Responsibilities editor ─────────────────────────────────────────────────

const ResponsibilitiesEditor = ({ items = [], onChange }) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <Label>Responsibilities ({items.length})</Label>
      <button
        type="button"
        onClick={() => onChange([...items, { title: "", details: "" }])}
        className="text-[10px] bg-violet-600/30 hover:bg-violet-600/50 text-violet-300 px-2 py-1 rounded-full font-bold tracking-widest transition-colors"
      >
        + ADD
      </button>
    </div>
    {items.map((item, i) => (
      <div key={i} className="border border-white/10 rounded p-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-600">#{i + 1}</span>
          <button
            type="button"
            onClick={() => onChange(items.filter((_, idx) => idx !== i))}
            className="text-[10px] text-red-400 hover:text-red-300 font-bold tracking-widest"
          >
            REMOVE
          </button>
        </div>
        <Field
          label="Title"
          value={item.title}
          onChange={(v) => onChange(items.map((it, idx) => idx === i ? { ...it, title: v } : it))}
        />
        <Field
          label="Details"
          value={item.details}
          onChange={(v) => onChange(items.map((it, idx) => idx === i ? { ...it, details: v } : it))}
          multiline rows={2}
        />
      </div>
    ))}
  </div>
);

// ── Experience entry editor ─────────────────────────────────────────────────

const ENTRY_FIELDS = [
  ["title",             "Title (Company Name)", false],
  ["position",          "Position",             false],
  ["duration",          "Duration",             false],
  ["years",             "Years Summary",        false],
  ["keyResponsibilities","Section Label",       false],
  ["description",       "Description",          true],
];

const ExperienceEntryEditor = ({ entryKey, content, updateField }) => {
  const base = `experience.${entryKey}`;
  const responsibilities = getPath(content, `${base}.responsibilities`) ?? [];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ENTRY_FIELDS.filter(([, , ml]) => !ml).map(([field, label]) => (
          <Field
            key={field}
            label={label}
            value={getPath(content, `${base}.${field}`)}
            onChange={(v) => updateField(`${base}.${field}`, v)}
          />
        ))}
      </div>
      <Field
        label="Description"
        value={getPath(content, `${base}.description`)}
        onChange={(v) => updateField(`${base}.description`, v)}
        multiline rows={3}
      />
      <ResponsibilitiesEditor
        items={responsibilities}
        onChange={(items) => updateField(`${base}.responsibilities`, items)}
      />
    </div>
  );
};

// ── Contact items editor ────────────────────────────────────────────────────

const ContactItemsEditor = ({ items = [], onChange }) => (
  <div className="space-y-4">
    {items.map((item, i) => (
      <div key={i} className="border border-white/10 rounded-lg p-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-500 font-mono">{item.img} · {item.title}</span>
          <button
            type="button"
            onClick={() => onChange(items.filter((_, idx) => idx !== i))}
            className="text-[10px] text-red-400 hover:text-red-300 font-bold tracking-widest"
          >
            REMOVE
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["link", "title", "detail"].map((field) => (
            <Field
              key={field}
              label={field}
              value={item[field]}
              onChange={(v) => onChange(items.map((it, idx) => idx === i ? { ...it, [field]: v } : it))}
            />
          ))}
        </div>
      </div>
    ))}
    <button
      type="button"
      onClick={() => onChange([...items, { link: "#", img: "MdEmail", title: "New Contact", detail: "" }])}
      className="text-[11px] bg-violet-600/30 hover:bg-violet-600/50 text-violet-300 px-3 py-1.5 rounded-full font-bold tracking-widest uppercase transition-colors"
    >
      + ADD CONTACT
    </button>
  </div>
);

// ── Main EditorPage ─────────────────────────────────────────────────────────

const TABS = ["General", "Biography", "Skills", "Projects", "Experience", "Contact", "Certification"];

const EXPERIENCE_ENTRIES = [
  { key: "current",      label: "PT. Gudang Baru Berkah",        hasLocation: true, defaultOpen: true },
  { key: "internship",   label: "Yukti ID",                      hasLocation: true },
  { key: "bootcamp",     label: "Harisenin.com",                  hasLocation: true },
  { key: "teamLeader",   label: "Telkom – Team Leader" },
  { key: "helpdesk",     label: "Telkom – Helpdesk" },
  { key: "Ioan",         label: "Telkom – LOAN Technician" },
  { key: "dshr",         label: "Telkom – DSHR" },
  { key: "provisioning", label: "Telkom – Provisioning" },
  { key: "education",    label: "SMK Muhammadiyah 1 Kepanjen" },
];

const EditorPage = () => {
  const [lang, setLang] = useState("en");
  const [content, setContent] = useState({});
  const [activeTab, setActiveTab] = useState("General");
  const [saveStatus, setSaveStatus] = useState(""); // "saving" | "saved" | ""
  const channelRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    try { channelRef.current = new BroadcastChannel("dev-editor"); } catch {}
    return () => channelRef.current?.close();
  }, []);

  const loadContent = useCallback((l) => {
    const base = i18n.getResourceBundle(l, "translation") ?? {};
    setContent(JSON.parse(JSON.stringify(base)));
  }, []);

  useEffect(() => { loadContent(lang); }, [lang, loadContent]);

  // Auto-save + realtime broadcast, debounced 600ms
  useEffect(() => {
    if (!Object.keys(content).length) return;
    setSaveStatus("saving");
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY(lang), JSON.stringify(content));
      channelRef.current?.postMessage({ type: "content-update", lang, content });
      i18n.addResourceBundle(lang, "translation", content, false, true);
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus(""), 2000);
    }, 600);
    return () => clearTimeout(debounceRef.current);
  }, [content, lang]);

  const updateField = useCallback(
    (path, value) => setContent((prev) => setPath(prev, path, value)),
    []
  );

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${lang}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (!window.confirm(`Reset all ${lang.toUpperCase()} overrides and reload?`)) return;
    localStorage.removeItem(STORAGE_KEY(lang));
    channelRef.current?.postMessage({ type: "content-reset", lang });
    loadContent(lang);
  };

  const projects     = content?.projects?.items ?? [];
  const contactItems = content?.contact?.items ?? [];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* ── Sticky header ── */}
      <div className="sticky top-0 z-20 bg-neutral-950/95 backdrop-blur border-b border-white/10">

        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          <div>
            <h1 className="text-sm font-bold tracking-widest uppercase">Content Editor</h1>
            <p className="text-[10px] text-gray-500 mt-0.5">
              dev-only · auto-saves · realtime sync to main window
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {saveStatus === "saving" && (
              <span className="text-[10px] text-yellow-400 tracking-widest animate-pulse">SAVING…</span>
            )}
            {saveStatus === "saved" && (
              <span className="text-[10px] text-green-400 tracking-widest">SAVED ✓</span>
            )}
            <button
              onClick={handleExport}
              className="text-[11px] bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full font-bold tracking-widest uppercase transition-colors"
            >
              EXPORT JSON
            </button>
            <button
              onClick={handleReset}
              className="text-[11px] bg-red-600/20 hover:bg-red-600/40 text-red-300 px-3 py-1.5 rounded-full font-bold tracking-widest uppercase transition-colors"
            >
              RESET {lang.toUpperCase()}
            </button>
          </div>
        </div>

        {/* Lang switcher */}
        <div className="flex gap-2 px-4 sm:px-6 pb-2">
          {["en", "id"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-1.5 text-[11px] font-bold rounded-full tracking-widest uppercase transition-colors ${
                lang === l ? "bg-violet-600 text-white" : "bg-white/10 text-gray-400 hover:bg-white/20"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Section tabs (horizontally scrollable on mobile) */}
        <div className="flex overflow-x-auto border-t border-white/5 scrollbar-none">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 px-4 sm:px-5 py-2.5 text-[11px] font-bold tracking-widest uppercase whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-violet-500 text-violet-300"
                  : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Scrollable content ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-4">

        {/* ═══ GENERAL ═══ */}
        {activeTab === "General" && (
          <>
            <Section title="Navbar & Brand" defaultOpen>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["navbar.brand.name",     "Brand Name"],
                  ["navbar.brand.subtitle", "Brand Subtitle"],
                  ["navbar.navbar1",        "Nav Link — Profile"],
                  ["navbar.navbar2",        "Nav Link — Project"],
                  ["navbar.navbar3",        "Nav Link — Contact"],
                ].map(([path, label]) => (
                  <Field key={path} label={label}
                    value={getPath(content, path)}
                    onChange={(v) => updateField(path, v)}
                  />
                ))}
              </div>
            </Section>

            <Section title="Hero" defaultOpen>
              <Field label="Tagline" multiline rows={2}
                value={getPath(content, "hero.tagline")}
                onChange={(v) => updateField("hero.tagline", v)}
              />
            </Section>

            <Section title="Section Titles & Subtitles" defaultOpen>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["content.profile.title",          "Profile — Title"],
                  ["content.profile.subtitle.1",     "Profile — Subtitle"],
                  ["content.experience.subtitle.1",  "Experience — Subtitle"],
                  ["content.certification.subtitle.1","Certification — Subtitle"],
                  ["content.skills.subtitle",        "Skills — Subtitle"],
                  ["content.project.title",          "Project — Title"],
                  ["content.project.subtitle.1",     "Project — Subtitle"],
                  ["content.contact.title",          "Contact — Title"],
                  ["content.contact.subtitle.1",     "Contact — Subtitle"],
                ].map(([path, label]) => (
                  <Field key={path} label={label}
                    value={getPath(content, path)}
                    onChange={(v) => updateField(path, v)}
                  />
                ))}
              </div>
            </Section>

            <Section title="Footer & Meta" defaultOpen>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["footer.copyright", "Copyright"],
                  ["app.lastUpdated",  "Last Updated"],
                ].map(([path, label]) => (
                  <Field key={path} label={label}
                    value={getPath(content, path)}
                    onChange={(v) => updateField(path, v)}
                  />
                ))}
              </div>
            </Section>

            <Section title="Education Header (Timeline label for SMK)">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["education.school",         "School Name"],
                  ["education.durationSchool", "School Duration"],
                ].map(([path, label]) => (
                  <Field key={path} label={label}
                    value={getPath(content, path)}
                    onChange={(v) => updateField(path, v)}
                  />
                ))}
              </div>
            </Section>

            <Section title="Experience Timeline Labels">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["experience.company",  "Telkom Company Label"],
                  ["experience.duration", "Telkom Duration"],
                  ["experience.years",    "Telkom Years"],
                ].map(([path, label]) => (
                  <Field key={path} label={label}
                    value={getPath(content, path)}
                    onChange={(v) => updateField(path, v)}
                  />
                ))}
              </div>
            </Section>
          </>
        )}

        {/* ═══ BIOGRAPHY ═══ */}
        {activeTab === "Biography" && (
          <>
            <Section title="Paragraphs (1–7)" defaultOpen>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <Field
                    key={n}
                    label={`Paragraph ${n}`}
                    multiline rows={3}
                    value={content[`shortBiography_${n}`]}
                    onChange={(v) => updateField(`shortBiography_${n}`, v)}
                  />
                ))}
              </div>
            </Section>

            <Section title="Button Labels" defaultOpen>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["readMoreButton",      "Read More Button"],
                  ["closeButton",         "Close Button"],
                  ["biography.openPhoto", "Open Photo Button"],
                  ["biography.closePhoto","Close Photo Button"],
                ].map(([path, label]) => (
                  <Field key={path} label={label}
                    value={getPath(content, path)}
                    onChange={(v) => updateField(path, v)}
                  />
                ))}
              </div>
            </Section>
          </>
        )}

        {/* ═══ SKILLS ═══ */}
        {activeTab === "Skills" && (() => {
          const skillCards = content?.skills?.cards ?? [];
          return (
            <>
              {skillCards.map((card, ci) => (
                <Section key={ci} title={card.category || `Card ${ci + 1}`} badge={`${card.items?.length ?? 0} items`} defaultOpen={ci === 0}>
                  <Field
                    label="Category Name"
                    value={card.category}
                    onChange={(v) => {
                      const next = JSON.parse(JSON.stringify(content));
                      next.skills.cards[ci].category = v;
                      setContent(next);
                    }}
                  />
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center justify-between">
                      <Label>Skill Items ({card.items?.length ?? 0})</Label>
                      <button
                        type="button"
                        onClick={() => {
                          const next = JSON.parse(JSON.stringify(content));
                          next.skills.cards[ci].items.push("New Skill");
                          setContent(next);
                        }}
                        className="text-[10px] bg-violet-600/30 hover:bg-violet-600/50 text-violet-300 px-2 py-1 rounded-full font-bold tracking-widest transition-colors"
                      >
                        + ADD
                      </button>
                    </div>
                    {(card.items ?? []).map((item, ii) => (
                      <div key={ii} className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-600 w-5 shrink-0">{ii + 1}</span>
                        <TextInput
                          value={item}
                          onChange={(v) => {
                            const next = JSON.parse(JSON.stringify(content));
                            next.skills.cards[ci].items[ii] = v;
                            setContent(next);
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const next = JSON.parse(JSON.stringify(content));
                            next.skills.cards[ci].items.splice(ii, 1);
                            setContent(next);
                          }}
                          className="text-[10px] text-red-400 hover:text-red-300 font-bold tracking-widest shrink-0"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </Section>
              ))}
            </>
          );
        })()}

        {/* ═══ PROJECTS ═══ */}
        {activeTab === "Projects" && (
          <>
            <Section title="Global" defaultOpen>
              <Field label="View Project Button Label"
                value={getPath(content, "projects.button")}
                onChange={(v) => updateField("projects.button", v)}
              />
            </Section>

            <Section title="Project Items" badge={projects.length} defaultOpen>
              <button
                type="button"
                onClick={() => {
                  const next = JSON.parse(JSON.stringify(content));
                  next.projects = next.projects ?? { items: [] };
                  next.projects.items.push({
                    id: `project-${Date.now()}`,
                    title: "NEW PROJECT",
                    subtitle: "",
                    heading: "",
                    description: "",
                    tag: "",
                    link: "#",
                  });
                  setContent(next);
                }}
                className="text-[11px] bg-violet-600/30 hover:bg-violet-600/50 text-violet-300 px-3 py-1.5 rounded-full font-bold tracking-widest uppercase transition-colors"
              >
                + ADD PROJECT
              </button>

              <div className="space-y-4 mt-2">
                {projects.map((project, i) => (
                  <div key={project.id || i} className="border border-white/10 rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-violet-400 font-bold tracking-widest">{project.id}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const next = JSON.parse(JSON.stringify(content));
                          next.projects.items.splice(i, 1);
                          setContent(next);
                        }}
                        className="text-[10px] text-red-400 hover:text-red-300 font-bold tracking-widest"
                      >
                        REMOVE
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["id", "title", "subtitle", "tag", "link"].map((field) => (
                        <Field
                          key={field} label={field} value={project[field]}
                          onChange={(v) => {
                            const next = JSON.parse(JSON.stringify(content));
                            next.projects.items[i][field] = v;
                            setContent(next);
                          }}
                        />
                      ))}
                    </div>
                    <Field label="Heading" value={project.heading}
                      onChange={(v) => {
                        const next = JSON.parse(JSON.stringify(content));
                        next.projects.items[i].heading = v;
                        setContent(next);
                      }}
                    />
                    <Field label="Description" multiline rows={3} value={project.description}
                      onChange={(v) => {
                        const next = JSON.parse(JSON.stringify(content));
                        next.projects.items[i].description = v;
                        setContent(next);
                      }}
                    />
                  </div>
                ))}
              </div>
            </Section>
          </>
        )}

        {/* ═══ EXPERIENCE ═══ */}
        {activeTab === "Experience" && (
          <>
            <Section title="Experience Card Labels" defaultOpen>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["experience.currentBadge",   "Current Badge"],
                  ["experience.expandDetail",   "Expand Button"],
                  ["experience.collapseDetail", "Collapse Button"],
                ].map(([path, label]) => (
                  <Field key={path} label={label}
                    value={getPath(content, path)}
                    onChange={(v) => updateField(path, v)}
                  />
                ))}
              </div>
            </Section>

            {EXPERIENCE_ENTRIES.map(({ key, label, hasLocation, defaultOpen }) => (
              <Section key={key} title={label} defaultOpen={defaultOpen}>
                {hasLocation && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2 border-b border-white/10">
                    {["company", "location"].map((f) => (
                      <Field key={f} label={f}
                        value={getPath(content, `experience.${key}.${f}`)}
                        onChange={(v) => updateField(`experience.${key}.${f}`, v)}
                      />
                    ))}
                  </div>
                )}
                <ExperienceEntryEditor
                  entryKey={key}
                  content={content}
                  updateField={updateField}
                />
              </Section>
            ))}
          </>
        )}

        {/* ═══ CONTACT ═══ */}
        {activeTab === "Contact" && (
          <>
            <Section title="Message" defaultOpen>
              <Field label="Contact Message" multiline rows={3}
                value={getPath(content, "contact.message")}
                onChange={(v) => updateField("contact.message", v)}
              />
            </Section>
            <Section title="Contact Items" badge={contactItems.length} defaultOpen>
              <ContactItemsEditor
                items={contactItems}
                onChange={(items) => {
                  const next = JSON.parse(JSON.stringify(content));
                  next.contact = next.contact ?? {};
                  next.contact.items = items;
                  setContent(next);
                }}
              />
            </Section>
          </>
        )}

        {/* ═══ CERTIFICATION ═══ */}
        {activeTab === "Certification" && (
          <Section title="Certification Labels" defaultOpen>
            <div className="space-y-4">
              <Field label="Cisco Section Label" multiline rows={2}
                value={content.certification1}
                onChange={(v) => updateField("certification1", v)}
              />
              <Field label="Bootcamp Cert Label" multiline rows={2}
                value={content.certification2}
                onChange={(v) => updateField("certification2", v)}
              />
              <Field label="Footer Detail (with LinkedIn placeholder)" multiline rows={3}
                value={content.certificationDetail}
                onChange={(v) => updateField("certificationDetail", v)}
              />
            </div>
          </Section>
        )}

        {/* Bottom padding */}
        <div className="h-12" />
      </div>
    </div>
  );
};

export default EditorPage;
