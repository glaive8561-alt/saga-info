# Validation — 2026-10-08 KST

## Mission group update — latest

- All 12 groups have source-backed introductions, three activity entries, and a matching PDF reference. The tab labels/order, keyboard navigation, wraparound, and swipe controls are retained.
- DOM checks exercise every group and verify photo counts, PDF destinations, source notes, optional statistics, and clearing of previous group statistics. AI conflicting aggregate counts are absent. All 23 images and 14 deployed PDF files exist.
- Presentation PDFs were checked for page counts, Korean text preservation, replacement characters, and representative rendered pages. All text-based decks preserve their Korean characters after conversion-only compatibility repair. Image-based source slides and the Micro PDF were visually reviewed.
- Shared October PDF scope is slides 29–56 only; the full 64-slide prayer deck is not deployed. Next Generation and Workplace have focused source-page excerpts.
- Build, JavaScript syntax, both CSS parsers, retained DOM behavior suite, asset/anchor/ID checks, and whitespace checks pass. Original Site source remains unchanged.
- Browser layout and live YouTube playback remain unverified because a browser-control skill is unavailable in this managed environment. No alternate browser driver or preview server is used.

Earlier validation records follow.

## Sheet 1 layout correction — latest

Passed after rebuilding:

- Hero body matches sheet 1 R18 exactly after whitespace normalization; brochure heading phrases are restored; floating crest removed.
- Purpose & Vision references the supplied full campus photo, without an SVG crop.
- All 12 curriculum courses are in the visible table; all 6 faculty remain; all 8 dated events match the final brief.
- Application date endpoints and all 4 subsequent admission stages match the 2027 brochure. The source image links remain available.
- Local assets, navigation anchors, unique IDs, single H1, and retained counts of 11 alumni / 12 mission groups / 5 lessons.
- Existing DOM interaction suite and both CSS parsers pass. The original Site remains untouched at b5337adb84b58306d2f6e8f09a37b08f50b25aad.
- Real browser layout remains unverified: the available skill inventory was checked, and control-browser is unavailable. No preview server or alternative driver was used, as required by the Sites workflow.

## Intro refinement

- Hero uses the original globe-and-hands asset and the newly supplied crest. Source poster dates are excluded from the hero viewport.
- Autumn source image is displayed through a native SVG viewport; the dated event notice is outside it.
- Desktop and mobile rules reduce section spacing and keep details collapsed initially, while preserving the final brief's source content and all existing interactive controls.
- DOM behavior checks are rerun after generating the revised markup. Both the base CSS and refinement CSS are parsed.
- The browser-rendering limits below still apply to this update.

Passed:

- HTML: unique IDs; all internal navigation targets and local image/script/CSS assets exist; one H1; valid section hierarchy.
- Final brief: 5 lesson videos, 4 alumni videos, 11 named alumni, 12 mission groups, 8 final event dates.
- All 8 supplied event date/weekday pairs verified for 2026.
- JavaScript syntax: app.js and data.js.
- CSS syntax: parsed with css-tree 3.1.0.
- DOM logic: tested with linkedom 0.18.13, not a rendered browser. All 12 group selections, single active tab, AI-only statistics, wraparound, Home/End/arrow keys, swipe handler.
- Lesson selection updates the correct video; six representative modal launches use the correct YouTube IDs; closing clears the iframe and body scroll lock.
- Mobile menu open/close/Escape/navigation; testimonial previous/next scrolling commands.
- Academic calendar: 365 dates, 12 months, term start/end inclusions and adjacent-day exclusions.
- Existing Site checkout remains at b5337adb84b58306d2f6e8f09a37b08f50b25aad with a clean working tree.
- Native external links use noopener; videos only load an iframe after explicit play.

Limits:

- The managed environment has no control-browser skill. Per Sites instructions, no preview server, alternative browser driver, or browser installation was used.
- Actual desktop/mobile rendering, touch-device layout, and live YouTube playback have not been visually tested.
- User-supplied buly.kr short URL returned retrieval errors/502; its redirect destination could not be directly confirmed. Existing SaGA Site source and the workbook screenshots match.

To reproduce DOM checks: install linkedom@0.18.13 and css-tree@3.1.0 in a QA-only directory, set NODE_PATH to its node_modules, then run node validate.cjs. These packages are not production dependencies.
