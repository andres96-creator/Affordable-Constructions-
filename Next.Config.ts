// -------------------------------------------------------------
// Next.js Configuration (TypeScript)
// Path: /next.config.ts
//
// PURPOSE:
//   - Add security headers (CSP, XSS protection, etc.)
//   - Prepare for analytics + tracking scripts
//   - Production hardening for your BuildSmart platform
//
// NOTE:
//   These headers apply to ALL routes in your app.
// -------------------------------------------------------------

import type { NextConfig } from "next";

// -------------------------------------------------------------
// 1. CONTENT SECURITY POLICY (CSP)
//
// This protects your users from:
//   - XSS attacks
//   - Malicious inline scripts
//   - Unauthorized external scripts
//
// 'self' = only allow scripts from your own domain
// Add trusted CDNs as needed (analytics, images, etc.)
// -------------------------------------------------------------
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' https://trusted.cdn.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://*.supabase.co;
  font-src 'self' https:;
  frame-src 'self';
`;

// -------------------------------------------------------------
// 2. SECURITY HEADERS
//
// These headers improve:
//   - Browser security
//   - XSS protection
//   - Clickjacking protection
//   - Data integrity
// -------------------------------------------------------------
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

// -------------------------------------------------------------
// 3. EXPORT FINAL NEXT.JS CONFIG
// -------------------------------------------------------------
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply to ALL routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
