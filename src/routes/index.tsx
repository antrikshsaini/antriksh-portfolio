import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Shield, Terminal, Activity, Mail, Phone, Linkedin, Globe,
  Radar, Bug, Network, Server, Lock, Cpu, FileSearch, Cloud,
  AlertTriangle, CheckCircle2, ArrowUpRight, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Antriksh Saini — SOC Analyst & Cybersecurity Engineer" },
      { name: "description", content: "Threat-focused SOC Analyst specializing in Splunk ES, CrowdStrike Falcon, and Cortex XSOAR. 3+ years across security operations and network administration." },
      { property: "og:title", content: "Antriksh Saini — SOC Analyst" },
      { property: "og:description", content: "SIEM, EDR, SOAR. Real-time detection, triage, and response." },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "MTTD", value: "< 5m", hint: "Mean time to detect" },
  { label: "MTTR", value: "< 30m", hint: "Mean time to respond" },
  { label: "Uptime", value: "99.9%", hint: "Infra reliability" },
  { label: "Audit findings", value: "0", hint: "Internal audits" },
];

const skills = [
  { icon: Radar, title: "SIEM", body: "Splunk Enterprise & ES — SPL, Correlation Searches, Indexer, Search Head, Heavy Forwarder, Deployment Server, apps & add-ons." },
  { icon: Shield, title: "EDR / SOAR", body: "CrowdStrike Falcon agent lifecycle, policy & host admin. Palo Alto Cortex XSOAR playbook triage, automation, MTTD/MTTR dashboards." },
  { icon: FileSearch, title: "Threat Intel", body: "CISCO Talos, VirusTotal, IBM X-Force, MxToolbox — domain/IP/file reputation, phishing investigation." },
  { icon: AlertTriangle, title: "Incident Response", body: "True/false positive analysis, escalation workflows, ServiceNow ticketing, sandbox analysis, Pyramid of Pain." },
  { icon: Network, title: "Networking", body: "OSI, TCP/IP, DNS, DHCP, LAN/WAN, VPN, VoIP, Cisco Routers/Switches/ASA, Wireshark, IDS/IPS." },
  { icon: Server, title: "Windows Server", body: "AD DS, GPO, DHCP, WDS, WSUS, IIS, FTP, Failover Clustering, MDT 2012–2022." },
  { icon: Terminal, title: "Linux / OS", body: "Ubuntu, Kali, Parrot · Apache2, VSFTPD, SAMBA, MySQL, DNS, Radius." },
  { icon: Lock, title: "Compliance", body: "Policy adherence, regulatory alignment, contractual security clause review (RFPs, MSAs), audit support." },
  { icon: Bug, title: "Pen Testing", body: "Vulnerability & port scanning, Wi-Fi analysis, DB password salting, basic exploitation via Kali tooling." },
  { icon: Cloud, title: "Virtualization", body: "VMware ESXi / Workstation / vCenter, Microsoft Azure." },
];

const experience = [
  {
    role: "Security Analyst (SOC)",
    org: "IATEK",
    period: "Jan 2025 — Present",
    tag: "ACTIVE",
    points: [
      "24/7 real-time monitoring and triage of security events across multiple log sources in Splunk Enterprise Security.",
      "Classified alerts true/false positive using CISCO Talos, VirusTotal, IBM X-Force, MxToolbox; escalated via ServiceNow through to closure.",
      "Built & tuned Splunk Correlation Searches and detection rules; deployed apps and add-ons to broaden coverage.",
      "Ran CrowdStrike Falcon end-to-end: agent deployment, policies, host & user administration across the endpoint fleet.",
      "Executed Cortex XSOAR playbooks for phishing, malware, insider threat — human-in-the-loop validator for automation.",
      "Tracked SOC metrics (MTTD, MTTR, automation rate) via XSOAR dashboards; contributed to zero internal audit findings.",
    ],
  },
  {
    role: "Technical Support / Networking Administrator",
    org: "Cell@Fix",
    period: "Jan 2023 — Dec 2024",
    points: [
      "Managed end-to-end IT infra (servers, networks, storage, endpoints, voice) with 99.9% uptime; hardening reduced incidents 25%.",
      "Deployed security controls across Windows & Linux: GPO, IPS, SSO, encryption, firewall, least-privilege access.",
      "Administered Windows Server 2012–2022 (AD DS, DHCP, WDS, GPO, IIS) and Linux (Apache2, SAMBA, MySQL, DNS, Radius).",
      "Centralized monitoring for 24/7 resource tracking; patching, auditing, DR plans, and IT policy documentation.",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Vivid Theory",
    period: "Jan 2022 — Dec 2022",
    points: [
      "Shipped vehicle auction features (React, TypeScript, Node, PostgreSQL) — +40% user engagement in six months.",
      "Hardened event-driven email delivery (SendGrid) — −25% bounce, +20% open rate.",
      "GitHub Actions CI/CD pipelines — +35% integration efficiency.",
    ],
  },
];

const certifications = [
  "Google Cybersecurity Professional Certificate",
  "Udemy SOC Analyst Training",
  "SIEM Xpert Certified SOC Expert",
  "Cisco — Introduction to Cybersecurity",
  "Cisco — Networking Basics",
  "Cisco — Networking Devices & Initial Configuration",
  "Cisco — Endpoint Security",
  "Microsoft Azure",
];

const tickerItems = [
  "SIEM • Splunk ES", "EDR • CrowdStrike Falcon", "SOAR • Cortex XSOAR",
  "Threat Intel • Talos", "VirusTotal", "IBM X-Force", "MxToolbox",
  "ServiceNow", "Wireshark", "Cisco ASA", "Active Directory", "VMware ESXi",
  "MITRE ATT&CK", "Pyramid of Pain", "OSINT", "Kali Linux",
];

function Index() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toUTCString().split(" ")[4] + " UTC");
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-hero">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm">
            <Shield className="size-4 text-primary" />
            <span className="text-foreground">antriksh</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary">soc</span>
            <span className="blink" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-mono text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">./about</a>
            <a href="#stack" className="hover:text-primary transition-colors">./stack</a>
            <a href="#experience" className="hover:text-primary transition-colors">./experience</a>
            <a href="#certs" className="hover:text-primary transition-colors">./certs</a>
            <a href="#contact" className="hover:text-primary transition-colors">./contact</a>
          </nav>
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="pulse-dot" /> SOC ONLINE · {time}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative mx-auto max-w-7xl px-6 pt-20 pb-28">
        <div className="flex items-center gap-2 font-mono text-xs text-primary mb-6">
          <span className="pulse-dot" />
          <span>MONITORING · TIER-2 ANALYST AVAILABLE</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          I hunt threats <br />
          <span className="text-gradient">before they hunt back.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I'm <span className="text-foreground font-medium">Antriksh Saini</span> — a SOC Analyst with 3+ years across
          security operations and network administration. I run Splunk ES, CrowdStrike Falcon, and
          Cortex XSOAR playbooks to detect, triage, and contain incidents — fast.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm text-primary-foreground glow-neon hover:translate-y-[-1px] transition-transform"
          >
            <Terminal className="size-4" /> initiate_contact()
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            view incident log <ChevronRight className="size-4" />
          </a>
        </div>

        {/* Terminal card */}
        <div className="relative mt-14 card-soc scanline overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border/60 bg-background/40">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-danger/80" />
              <span className="size-2.5 rounded-full bg-amber/80" />
              <span className="size-2.5 rounded-full bg-primary/80" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">soc@iatek ~ /var/log/alerts.live</span>
            <span className="font-mono text-xs text-primary hidden sm:block">● live</span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
            <p><span className="text-muted-foreground">$</span> <span className="text-accent">splunk</span> search "index=main sourcetype=phishing severity=high"</p>
            <p className="text-muted-foreground mt-1">[+] 3 events matched · enriching with VirusTotal, Talos, X-Force…</p>
            <p className="mt-3"><span className="text-amber">▲</span> <span className="text-foreground">alert</span> · suspicious_attachment.docm from finance-impersonation@…</p>
            <p><span className="text-amber">▲</span> <span className="text-foreground">alert</span> · outbound beacon to known C2 ASN — Falcon containment armed</p>
            <p><span className="text-primary">✓</span> <span className="text-foreground">xsoar</span> playbook <span className="text-accent">phishing-triage-v3</span> executed · ticket INC-48211 opened</p>
            <p className="mt-3"><span className="text-muted-foreground">$</span> <span className="blink" /></p>
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card-soc p-5">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{s.label}</dt>
              <dd className="mt-2 text-3xl font-semibold text-gradient">{s.value}</dd>
              <p className="mt-1 text-xs text-muted-foreground">{s.hint}</p>
            </div>
          ))}
        </dl>
      </section>

      {/* TICKER */}
      <div className="border-y border-border/60 bg-background/40 py-4 overflow-hidden">
        <div className="flex ticker-track whitespace-nowrap gap-10 font-mono text-sm text-muted-foreground">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-primary/70" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <p className="font-mono text-xs text-primary">// 01 — profile</p>
          <h2 className="mt-2 text-3xl font-semibold">Operator profile</h2>
        </div>
        <div className="md:col-span-2 space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>
            Threat-focused SOC Analyst with a network administrator's foundation. I move fluently between
            <span className="text-foreground"> SIEM dashboards, EDR consoles, and the packet level</span> — which lets me
            correlate signals other people miss.
          </p>
          <p>
            My day is shaped by <span className="text-foreground">Splunk ES correlation searches, Cortex XSOAR playbooks,
            and CrowdStrike Falcon</span>. I triage phishing, malware, and insider-threat alerts, validate automation as a
            human-in-the-loop, and feed lessons learned back into detection logic.
          </p>
          <p>
            Cross-domain experience in <span className="text-foreground">Cisco networking, Windows/Linux server admin,
            and VMware</span> means I can investigate an incident end-to-end and recommend containment that actually fits
            the environment.
          </p>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs text-primary">// 02 — capability matrix</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold">The stack I run on</h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground">{skills.length} modules · all green</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <article key={s.title} className="card-soc p-6 group hover:border-primary/60 transition-colors">
              <div className="flex items-center justify-between">
                <div className="size-10 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:glow-neon transition-shadow">
                  <s.icon className="size-5" />
                </div>
                <CheckCircle2 className="size-4 text-primary/70" />
              </div>
              <h3 className="mt-4 font-mono text-sm uppercase tracking-wider text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="font-mono text-xs text-primary">// 03 — incident log</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">Operational history</h2>
        </div>
        <ol className="relative border-l border-border/80 ml-3 space-y-10">
          {experience.map((job) => (
            <li key={job.org} className="pl-8 relative">
              <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full bg-background border-2 border-primary glow-neon" />
              <div className="card-soc p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-accent font-mono text-sm mt-1">{job.org}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {job.tag && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/15 border border-primary/40 font-mono text-xs text-primary">
                        <span className="pulse-dot" /> {job.tag}
                      </span>
                    )}
                    <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <ChevronRight className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CERTS + EDUCATION */}
      <section id="certs" className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="font-mono text-xs text-primary">// 04 — credentials</p>
          <h2 className="mt-2 text-3xl font-semibold">Certifications</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {certifications.map((c) => (
              <div key={c} className="card-soc px-4 py-3 flex items-center gap-3 hover:border-accent/60 transition-colors">
                <Cpu className="size-4 text-accent shrink-0" />
                <span className="text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-xs text-primary">// 05 — education</p>
          <h2 className="mt-2 text-3xl font-semibold">Training & education</h2>
          <div className="mt-8 space-y-4">
            <EduCard title="SOC Analyst Internship" org="SIEM XPERT" period="Jun 2025 — Nov 2025" />
            <EduCard title="Post-Graduate Diploma — Web & Mobile App Design and Development" org="Langara College · Vancouver, BC" period="Sep 2019 — Apr 2021" />
            <EduCard title="B.Tech — Computer Science and Engineering" org="UIET, Kurukshetra University · India" period="Aug 2014 — May 2018" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="card-soc scanline relative overflow-hidden p-10 md:p-16">
          <p className="font-mono text-xs text-primary">// 06 — establish channel</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
            Need a steady set of eyes on your <span className="text-gradient">SOC queue?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Open to SOC Analyst, Security Analyst, and Threat Detection roles. Reach out — I reply within one business day.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl">
            <ContactLink icon={Mail} label="asaini@antrikshsaini.com" href="mailto:asaini@antrikshsaini.com" />
            <ContactLink icon={Phone} label="+1 236 885 2126" href="tel:+12368852126" />
            <ContactLink icon={Linkedin} label="linkedin.com/in/antriksh-saini" href="https://linkedin.com/in/antriksh-saini" />
            <ContactLink icon={Globe} label="antrikshsaini.com" href="https://antrikshsaini.com" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 mt-10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Antriksh Saini · Built for the SOC mindset.</p>
          <div className="flex items-center gap-2">
            <Activity className="size-3.5 text-primary" />
            <span>status: monitoring</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function EduCard({ title, org, period }: { title: string; org: string; period: string }) {
  return (
    <div className="card-soc p-5">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-accent font-mono mt-1">{org}</p>
      <p className="text-xs text-muted-foreground font-mono mt-1">{period}</p>
    </div>
  );
}

function ContactLink({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 px-4 py-3 rounded-md border border-border bg-background/40 hover:border-primary hover:text-primary transition-colors"
    >
      <Icon className="size-4" />
      <span className="font-mono text-sm truncate">{label}</span>
      <ArrowUpRight className="size-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}
