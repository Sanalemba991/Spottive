"use client";

import Link from "next/link";

interface NavItem {
  heading: string;
  headingStyle: string;
  isSpottive?: boolean;
  description?: string;
  links?: string[];
}

const navData: NavItem[] = [
  {
    heading: "Technologies",
    headingStyle: "yellow",
    isSpottive: true,
    description: "cloud infrastructure, and robust on-prem integrations to provide actionable insights, reduce false alarms, and improve operational efficiency. ",
  },
  {
    heading: "Metals",
    headingStyle: "yellow",
    links: ["Nickel", "Iron", "Lithium", "Rare Earth", "Copper", "Uranium"],
  },
  {
    heading: "Products",
    headingStyle: "yellow",
    links: ["Pilot plants", "Powders", "Nano Powders", "Product Development"],
  },
  {
    heading: "News & Media",
    headingStyle: "yellow",
    links: [
      "CVMR Series",
      "CVMR News",
      "Press Releases & Events",
      "References & Publications",
      "Videos",
      "Feed",
    ],
  },
  {
    heading: "About Us",
    headingStyle: "yellow",
    links: ["Client List", "CVMR Patents", "Management"],
  },
];

// Simple SVG icons for social links
const FacebookIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a2a1a" />
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: "14px",
      }}
    >
      {/* Navigation Section */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "48px 80px 40px",
        }}
      >
        <p
          style={{
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "0.12em",
            marginBottom: "24px",
            textTransform: "uppercase",
          }}
        >
          NAVIGATION
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            marginBottom: "32px",
          }}
        />

        {/* Nav Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "16px",
          }}
        >
          {navData.map((col) => (
            <div key={col.heading}>
              {col.isSpottive ? (
                <>
                  <Link href="/" style={{ display: "inline-block", marginBottom: "18px" }}>
                    <img
                      src="/logo.png"
                      alt="Spottive logo"
                      style={{ width: "140px", height: "auto", display: "block" }}
                    />
                  </Link>
                  <p style={{ margin: "0 0 24px 0", color: "#ffffff", fontSize: "14px", lineHeight: "1.8" }}>
                    {col.description}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {col.links?.map((link: string) => (
                      <li key={link} style={{ marginBottom: "10px" }}>
                        <Link
                          href="#"
                          style={{
                            color: "#ffffff",
                            textDecoration: "none",
                            fontSize: "14px",
                            lineHeight: "1.4",
                          }}
                          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#0891B2")}
                          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <p
                    style={{
                      color: "#ffffff",
                      fontWeight: "500",
                      marginBottom: "26px",
                      fontSize: "14px",
                    }}
                  >
                    {col.heading}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {col.links?.map((link) => (
                      <li key={link} style={{ marginBottom: "10px" }}>
                        <Link
                          href="#"
                          style={{
                            color: "#ffffff",
                            textDecoration: "none",
                            fontSize: "14px",
                            lineHeight: "1.4",
                          }}
                          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#0891B2")}
                          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 80px 40px",
        }}
      >
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            marginBottom: "28px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Copyright */}
          <div>
            <p style={{ margin: "0 0 4px", color: "#ffffff", fontSize: "13px" }}>
              © 1994-2026 CVMR® Contents of this website are protected under international copyright laws.
            </p>
            <p style={{ margin: 0, color: "#ffffff", fontSize: "13px" }}>
              CVMR® is the registered trademark of CVMR Corporation. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "20px", alignItems: "center", color: "#ffffff" }}>
            {[FacebookIcon, TwitterIcon, LinkedInIcon, YoutubeIcon, MailIcon, PhoneIcon].map(
              (Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  style={{ color: "#ffffff", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0891B2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  <Icon />
                </Link>
              )
            )}
          </div>
        </div>

        {/* Legal Links */}
        <div style={{ marginTop: "24px", display: "flex", gap: "8px", alignItems: "center" }}>
          <Link
            href="#"
            style={{ color: "#ffffff", fontSize: "13px", textDecoration: "underline" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0891B2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            Notices and Disclaimers
          </Link>
          <span style={{ color: "#ffffff" }}>•</span>
          <Link
            href="#"
            style={{ color: "#ffffff", fontSize: "13px", textDecoration: "underline" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0891B2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            Editorial Policy
          </Link>
        </div>

        {/* Powered by */}
        <p style={{ marginTop: "24px", color: "#ffffff", fontSize: "13px" }}>
          Powered by AP Studio &amp; United Of Web.
        </p>
      </div>
    </footer>
  );
}