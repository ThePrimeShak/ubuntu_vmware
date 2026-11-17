import type { Metadata, Viewport } from "next";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Linux & Virtualization Lab",
    template: "%s | Linux & Virtualization Lab",
  },
  description:
    "A practical operating-systems lab guide to Linux, the terminal, virtual machines, Ubuntu, and Debian.",
  keywords: [
    "Ubuntu",
    "VMware",
    "virtual machine",
    "installation",
    "Linux",
    "operating systems",
    "virtualization",
    "tutorial",
    "guide",
  ],
  authors: [
    {
      name: "ThePrimeShak",
      url: "https://www.linkedin.com/in/ThePrimeShak",
    },
  ],
  openGraph: {
    title: "Linux & Virtualization Lab",
    description:
      "A practical operating-systems lab guide to Linux, virtual machines, Ubuntu, and Debian.",
    type: "website",
    siteName: "Linux & Virtualization Lab",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#111016" },
  ],
};

function LinkedInIcon() {
  return (
    <svg
      aria-label="ThePrimeShak on LinkedIn"
      fill="currentColor"
      height="22"
      viewBox="0 0 24 24"
      width="22"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.22 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45A1.76 1.76 0 0 0 24 22.27V1.73C24 .77 23.21 0 22.22 0Z" />
    </svg>
  );
}

const banner = (
  <Banner storageKey="lab-guide-banner">
    Operating Systems Lab · Linux, virtualization, and installation
  </Banner>
);
const navbar = (
  <Navbar
    logo={
      <span className="brand-lockup">
        <span aria-hidden="true" className="brand-mark">
          &gt;_
        </span>
        <span>ThePrimeShak</span>
      </span>
    }
    projectLink="https://github.com/ThePrimeShak/ubuntu_vmware"
    chatLink="https://www.linkedin.com/in/ThePrimeShak"
    chatIcon={<LinkedInIcon />}
  />
);
const footer = (
  <Footer>
    <span>
      © {new Date().getFullYear()} ThePrimeShak · Built for the Operating
      Systems Lab course.
    </span>
  </Footer>
);

const search = (
  <Search placeholder="Search docs..." emptyResult="No Result Found." />
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <Head></Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ThePrimeShak/ubuntu_vmware"
          footer={footer}
          search={search}
          editLink={null}
          feedback={{ content: null }}
          toc={{
            extraContent: null,
            backToTop: true,
            title: "On this page",
          }}
          sidebar={{
            defaultMenuCollapseLevel: 1,
          }}
          copyPageButton={false}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
