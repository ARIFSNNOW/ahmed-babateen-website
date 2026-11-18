# Dr. Ahmed Babateen — website setup

This bilingual Next.js and TypeScript website uses self-hosted fonts and direct email/phone contact links. Arabic is the default; English pages use `/en`. Language selection is remembered locally in the visitor’s browser.

## Run locally

Use Node.js 20.9 or newer:

```sh
npm install
npm run dev
```

Create the production static export:

```sh
npm run build
```

Run `npm run test:controls` with Node.js 22.6 or newer to verify comparison pointer and keyboard controls in both directions.

The exported website is written to `out/`. Serve that directory with any static web host. Sites hosting configuration is in `.openai/hosting.json`.

## Edit content

- `lib/data.ts`: verified profile/contact details, bilingual copy, and image-pair records.
- `components/content-pages.tsx`: bilingual example catalogue, example explanations, and privacy text.
- `public/images/`: photography and separately stored comparison files.
- `public/fonts/`: locally hosted fonts, source information, and distribution licences.

Each comparison record contains `slug`, localized `title` and `description`, `beforeImage`, `afterImage`, and `isIllustrative`. Keep `isIllustrative: true` for generated imagery. Replace an illustrative record only with an approved, matched real image pair and its verified description; update the visible disclosures when doing so.

Email and call links work without an email provider or API key. There is no enquiry form or appointment-booking integration. A consultation request is not a confirmed appointment. Do not add a success message for email delivery unless a real provider is configured and confirms acceptance.

## Supplied photographs and illustrative scenes

The uploaded ZIP is integrated. These PNGs are copied byte-for-byte, with no retouching, resizing, or recompression:

| File | Placement | Origin |
| --- | --- | --- |
| `ahmed-original-portrait.png` | Retained original source asset | Original user-supplied portrait |
| `ahmed-about-selected.png` | Current About portrait and social preview metadata | Owner-selected shared AI-generated portrait |
| `hero-treatment.png` | Hero slide 1 | User-supplied AI-generated illustrative examination scene |
| `hero-consultation.png` | Hero slide 2 | User-supplied AI-generated illustrative consultation scene |
| `hero-portrait.png` | Hero slide 3 | User-supplied AI-generated portrait variation |

The portrait and consultation slides now use `hero-portrait-masked.png` and `hero-consultation-masked.png`, derived through constrained image edits to add surgical masks. The uploaded originals remain available unchanged.

The hero photo text overlay was removed at the user's request. Accessible image descriptions and the privacy page identify the hero scenes as illustrative. They do not document actual patient visits. The biography now uses `ahmed-about-selected.png`, the exact full-resolution portrait selected by the owner from the shared ChatGPT image link. It is AI-generated; accessible descriptions and the privacy page identify its provenance, with no image text overlay. Its original downloaded bytes are preserved. `ahmed-original-portrait.png` is retained unchanged as an inactive source asset. Only CSS controls display cropping: top-aligned hero images, slide-specific mobile focal positions, a 4:5 desktop biography frame, and the portrait's native ratio on mobile.

## Optional authentic case replacements

The current comparison pairs remain clearly labeled AI demonstrations. To replace them with approved real cases, supply matched individual files:

| File | Purpose |
| --- | --- |
| `veneers-before.jpg` | Approved case 1 before photograph. |
| `veneers-after.jpg` | The same subject, angle, framing, exposure, and scale as case 1 before. |
| `restoration-before.jpg` | Approved case 2 before photograph. |
| `restoration-after.jpg` | Matched case 2 after photograph. |
| `crowns-before.jpg` | Approved case 3 before photograph. |
| `crowns-after.jpg` | Matched case 3 after photograph. |

The patient-image names describe replacement slots, not verified services or outcomes belonging to Ahmed. For comparison files, prefer 2142 × 1030px or larger in a 1071:515 ratio. Supply individual images rather than screenshot strips, with permission to publish and no identifying patient details. Place approved source photography under `public/images/` and update the relevant paths in `lib/data.ts`.

AI-generated examples remain clearly labelled as fictional demonstrations, not actual patient results. The active After files use the `-after-bright-v2.webp` suffix: all visible teeth were edited to neutral white and cleaned of yellow staining and scratch-like marks. Before files remain byte-for-byte unchanged. No unverified clinic address, licence, qualifications, reviews, patient counts, years of experience, pricing, or booking service should be added.

## Verification status

Production build and TypeScript checks pass. Static export audit verified every local asset and page/anchor destination, exact contacts, social-link attributes, Arabic/English lang and dir, metadata, and Person JSON-LD. Comparison control tests cover 72 pointer/keyboard assertions in RTL/LTR at mobile and desktop gallery widths.

Browser visual/interaction verification at 390px and 1440px remains pending: the managed preview relay timed out, and the deployed owner-private site requires a ChatGPT session that was not completed in the testing browser. Do not treat the static/control checks as full browser verification.
