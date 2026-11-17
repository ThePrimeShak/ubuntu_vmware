import Link from "next/link";

export function ProjectHighlights() {
  return (
    <div className="lab-grid">
      <div className="lab-card">
        <strong>Understand the foundations</strong>
        <p>
          Learn what Linux, distributions, terminals, root privileges, swap, and
          dual boot actually mean.
        </p>
      </div>
      <div className="lab-card">
        <strong>Build a virtual lab</strong>
        <p>
          Install VMware Workstation, create a virtual machine, and choose
          sensible hardware settings.
        </p>
      </div>
      <div className="lab-card">
        <strong>Install and practise</strong>
        <p>
          Follow the Ubuntu or Debian installation flow, then use essential
          Linux commands safely.
        </p>
      </div>
    </div>
  );
}

export function ProjectHero() {
  return (
    <section className="lab-hero">
      <p className="lab-hero__eyebrow">Operating Systems Lab Project</p>
      <h1>Learn Linux in a safe virtual lab</h1>
      <p className="lab-hero__lead">
        A practical guide to Linux fundamentals, virtualization, terminal
        commands, and installing Ubuntu or Debian in VMware Workstation.
      </p>
      <div className="lab-hero__actions">
        <Link className="lab-button lab-button--primary" href="/linux-basic">
          Start learning
        </Link>
        <a
          className="lab-button"
          href="https://github.com/ThePrimeShak/ubuntu_vmware"
          rel="noreferrer"
          target="_blank"
        >
          View source on GitHub
        </a>
      </div>
    </section>
  );
}
