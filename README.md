# Affordable-Constructions-
Full‑stack marketplace connecting homeowners with contractors, built with Next.js, TypeScript, Supabase, PostgreSQL, and Tailwind CSS. Includes job posting, contractor applications, messaging, and multi‑tenant role‑based access.
# Contractor Marketplace Platform

A Next.js 16 application for connecting homeowners with contractors, using Supabase and Stripe integrations.

## Current Status

The project is currently production-ready for the main site and key route flows. A full production build has been verified successfully, and several outstanding app issues were fixed.

## What's Updated

- Fixed `app/about/about.css` so it contains valid CSS instead of component code.
- Updated `app/about/page.tsx` to remove the invalid `"use client"` directive while preserving `metadata` export.
- Corrected `app/auth/select-account-type/page.tsx` to import the right stylesheet and avoid build-time `useSearchParams()` prerender issues.
- Made `app/payment-success/page.tsx` production-ready by using client-side URL parsing and adding a missing stylesheet.
- Refactored multiple Stripe API routes to initialize `Stripe` inside request handlers and guard against missing `STRIPE_SECRET_KEY`.
- Updated Supabase server-side pages to use `createClient()` consistently and removed deprecated `createSupabaseServerClient` imports.
- Hardened `app/services/[category]/jobs/page.tsx` with valid category normalization, error handling, and proper route links.
- Verified the `npm run build` production build succeeds after these fixes.
 - Updated `app/signup/page.tsx` to add address fields (`address1`, `address2`, `city`, `region`, `postalCode`), improve input outlines/spacing for accessibility, include `phone` and address fields in the server-side `create-profile` request, and integrate a background non-blocking HIBP check to preserve zero signup latency. TODOs were added for server-side address persistence and optional address autocomplete.

## Key Fixes

- `c:\dev\my-app\app\about\about.css`
- `c:\dev\my-app\app\about\page.tsx`
- `c:\dev\my-app\app\auth\select-account-type\page.tsx`
- `c:\dev\my-app\app\payment-success\page.tsx`
- `c:\dev\my-app\app\api\payments\create-checkout-session\route.ts`
- `c:\dev\my-app\app\api\memberships\create-checkout-session\route.ts`
- `c:\dev\my-app\app\api\memberships\manage\route.ts`
- `c:\dev\my-app\app\api\memberships\cancel\route.ts`
- `c:\dev\my-app\app\api\stripe\create-connect-account\route.ts`
- `c:\dev\my-app\app\api\stripe\webhook\route.ts`
- `c:\dev\my-app\app\services\[category]\jobs\page.tsx`

## Project History & Milestones

- Initialized the project with Next.js 16 and App Router.
- Added Supabase authentication and server-side helpers.
- Added Stripe Checkout, Billing, and webhooks.
- Built initial service routes, dashboard pages, and API endpoints.
- Resolved build-breaking client/server and environment initialization issues.
- Verified production build success after recent fixes.

## Core Tech Stack

- Next.js 16
- React 19
- TypeScript
- Supabase
- Stripe
- ESLint

## Lead Generation Blueprint

You’re building a **lead-generation engine**, not just a website.
That engine has **5 pillars**:

1. Traffic acquisition (SEO + Paid Ads + Geo-tracking)
2. Data capture (forms, calls, behavior tracking)
3. Intent classification (what the homeowner needs)
4. Contractor matching (location, skill, availability)
5. Conversion optimization (follow-ups, automation)

### 1. Traffic Acquisition Layer

- Local SEO — rank for “contractor near me”, “roof repair Framingham”, etc.
- Content clusters — build pages for every service category.
- Schema markup — contractor profiles, reviews, service areas.
- Geo-pages — pages for every city/town you serve.
- Paid Ads: Google Search, Meta, YouTube, Local Service Ads.
- Geo-tracking: homeowner location, contractor radius, search intent, repeat visits.

### 2. Data Capture Layer

- Multi-step forms
- Dynamic quote forms
- Click-to-call tracking
- AI chat widget
- Photo upload tool

Collect:
- homeowner name
- project type
- budget
- timeline
- address / zip
- photos
- urgency level
- preferred contact method

### 3. Intent Classification Layer

Categorize requests as:
- Emergency
- Remodel
- Repair
- Maintenance
- Inspection
- Large project
- Small project

Use NLP, keyword scoring, form logic, geo-location, and contractor performance to decide which lead goes to whom.

### 4. Contractor Matching Layer

Store contractor data:
- service categories
- license & insurance
- service radius
- availability
- response speed
- rating
- acceptance rate
- price tier

Match by:
- homeowner location → contractor radius
- job type → contractor specialty
- urgency → contractor availability
- budget → contractor tier
- past performance → ranking score

### 5. Conversion Optimization Layer

Automation flows:
- SMS follow-ups
- Email reminders
- Contractor notifications
- Homeowner updates
- Abandoned form recovery
- Retargeting ads
- Review requests

Tools:
- CRM
- Marketing automation
- Call tracking
- Retargeting pixels
- Heatmaps
- A/B testing

### System Overview

```
Traffic → SEO / Ads / Geo → Landing Pages → Multi-Step Form
        ↓
   Intent Engine → Classify → Match → Contractor Score
        ↓
   CRM → Automation → SMS / Email / Calls → Conversion
```

## Main Project Structure

- `app/`
  - `about/`
  - `auth/`
  - `dashboard/`
  - `services/`
  - `payment-success/`
  - `api/`
- `lib/`
  - `supabaseClient.ts`
  - `supabaseServer.ts`
- `public/`

## Development Commands

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

## Progress Notes

### Completed
 
- [x] Fixed invalid CSS and component file issues in `app/about`.
- [x] Resolved Next.js client/server `metadata` export issue.
- [x] Corrected auth route stylesheet import and client-only param handling.
- [x] Added missing `payment-success` CSS and stabilized the route.
- [x] Refactored Stripe API routes to avoid build-time config failures.
- [x] Brought service category job listings in line with valid public routes.
- [x] Verified production build passes.
- [x] Standardized service `ServiceCard` and shared `services.css` across pages.
- [x] Scaffoled contractor onboarding and `ContractorProfile` component.
- [x] Persist contractor profiles to Supabase via `app/api/contractors/create`.
- [x] Added contractor listing (`app/contractors`) and profile pages (`app/contractors/[id]`).
- [x] Implemented contact flow: `app/components/ContactContractor` + `app/api/messages/contact`.
- [x] Added `category` to job posting form and save to `jobs` table.

- [x] Implemented HIBP password breach protection:
  - `lib/hibp.ts` (k‑anonymity SHA‑1 helper + in-memory prefix cache)
  - `app/api/auth/check-password/route.ts` (server route, flags profiles when pwned, fail-open)
  - Background non-blocking check integrated in `app/signup/page.tsx` (zero signup latency)
- [x] Added tests and CI for HIBP:
  - `scripts/hibp_helper_test.mjs` (smoke test)
  - `.github/workflows/hibp.yml` (CI smoke test)
  - Unit test `tests/unit/hibp.test.ts` and integration test `tests/integration/check-password.test.ts` (Vitest scaffolding)
- [x] Added server-side validation in `app/api/auth/create-profile/route.ts` (validates `firstName`, `lastName`, `phone`, stores `full_name` and `phone`, creates contractor row with name)
- [x] Updated signup UI (`app/signup/page.tsx`) to collect address fields and ensure visible input outlines; the client now includes `phone` and address fields in the payload sent to `/api/auth/create-profile`. Background HIBP check remains integrated (non-blocking).

### In Progress
- [ ] Expand and harden Stripe checkout & subscription flows (billing, webhooks, connect accounts).
- [ ] Add pagination and server-side filters for contractor directory.
- [ ] Add authentication UX for contractor profile editing and owner verification.

### TODO

- [ ] Create reusable service card components and shared layout helpers.
- [ ] Add loading states and skeleton screens for dynamic data.
- [ ] Add client-side validation and better form error messaging.
- [ ] Add customer reviews, testimonials, and trust signals.
- [ ] Add end-to-end testing for major routes and API flows.

### Tests / CI

- **Implemented:** smoke test and CI workflow using `scripts/hibp_helper_test.mjs` and `.github/workflows/hibp.yml` (runs on push/PR).
- **Scaffolded:** Vitest unit and integration tests:
  - `tests/unit/hibp.test.ts` (unit test for `lib/hibp.ts` with mocked HIBP response)
  - `tests/integration/check-password.test.ts` (invokes `app/api/auth/check-password` handler with mocks)

Run locally:
```bash
npm install
npm test
```

For full end-to-end verification you can run the Next app and extend CI to start the app and call `/api/auth/check-password`.

### Recent Implementation Details

- Contractor persistence: `app/api/contractors/create/route.ts` uses the server `createClient()` (see `lib/supabaseServer.ts`) and inserts into `contractors` table.
- Contractor listing: `app/contractors/page.tsx` fetches contractor rows server-side and passes them to `app/components/ContractorListClient.tsx` for client-side searching/filters.
- Contractor profile: `app/contractors/[id]/page.tsx` renders `ContractorProfile` and includes `ContactContractor` to message a contractor.
- Messaging: `app/api/messages/contact/route.ts` inserts direct messages (authenticated) into `messages` table; `app/api/messages/send` remains for job-thread messaging.


## Next Steps

- Expand service category pages and routing completeness.
- Connect Supabase data fully for jobs, profiles, and applications.
- Complete contractor onboarding and membership flows.
- Build richer Stripe subscription + payment experiences.

Recommended immediate next work:

- Add validation and server-side sanitization for contractor onboarding input.
- Add contractor profile editing (owner-only) and verification flow.
- Implement Stripe membership + webhook handling for paid contractor subscriptions.

## Local Preview

Open http://localhost:3000 to view the application locally.

## Repository Status (2026-07-11)

- Tests: Vitest unit and integration tests are scaffolded and pass locally (`npm test` / `npm run test:ci`).
- HIBP: k‑anonymity password checks implemented (`lib/hibp.ts`, `app/api/auth/check-password/route.ts`) with a background, non‑blocking signup integration.
- Dependencies: resolved a Vitest coverage peer conflict by removing an incompatible package; run `npm install` before running tests.

Run locally:
```bash
npm install
npm test
```
