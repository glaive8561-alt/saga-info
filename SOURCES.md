# Content sources and decisions

## Mission group update — 2026-10-08 KST

- All 12 existing group labels and their order are retained. Each group now has a source-backed headline, short introduction, three mission/activity entries, tags, authentic source imagery, and a PDF reference link.
- The 12 newly uploaded files were read in full (11 presentations, 151 slides; Micro Impact PDF, 9 pages). The June 27 A4 deck is a 32-slide combined group presentation, not a dedicated Next Generation deck. The October 6 prayer deck is a 64-slide SCIC document containing each group's latest report on slides 29–56.
- Dedicated group introductions establish identity and mission. October activity reports supplement them with completed activities, ongoing programs, and explicitly identified plans. Internal slide references and original photo paths are recorded in `content/mission-groups.json`; only visitor content and relative asset links are emitted into `dist/data.js`.

| Existing group | Main supplied introduction | October activity report |
| --- | --- | --- |
| AI 미션 그룹 | 2026년 AI미션그룹소개(261004).pptx | 55–56 |
| SNS | SNS선교그룹_소개.pptx | 53–54 |
| 과학·기술 | 261007_SCIC_과학기술그룹_소개자료.pptx | 34–35 |
| 다음세대 | 26.6.27 그룹별 발표자료(A4).pptx, slide 11 | 38–39 |
| 마이크로임팩트 | Micro Impact Group (2026-1007).pdf | 46–50 |
| 메디컬 | SCIC Medical Group 소개 (2025 SaGa홈피용).pptx | 42–43 |
| 문화예술미디어 | 2026문화예술미디어그룹.pptx | 36–37 |
| 스포츠와 건강 | 스포츠선교그룹(KSM) 소개(26년10월3일).pptx | 44–45 |
| 일터선교 | A4 slide 16; SCIC 기도회_26년10월6일_A.pptx | 29–31 |
| 창업스타트업 | 창업그룹소개_홈페이지ver..pptx | 32–33 |
| 커피선교 | 커피선교그룹소개2610.pptx | 51–52 |
| 해외선교 | SAGA_SCIC 2026 Global Mission 그룹 0106.pptx | 40–41 |

- 23 source images are shown without content reconstruction. SNS uses its original composite meeting/content image; the other groups use two source photos each. WebP files are resized and encoded for the web, with complete images displayed using `object-fit: contain`. Links open the larger asset.
- The PDF references retain source layouts, images, and text. PPTX files are converted with Korean font substitution and image compression. A LibreOffice transparent-outline compatibility problem was corrected in conversion-only copies for the culture and combined A4 decks. Source uploads remain unchanged.
- Next Generation's reference combines A4 slide 11 and October slides 38–39. Workplace's reference includes October slides 29–31. The shared October reference contains only group slides 29–56, rather than unrelated personal/cohort prayer pages. The complete A4 group introduction is also linked.
- AI aggregate lecture/beneficiary/day counts are omitted because the supplied deck contains conflicting overlaid numbers. Only clearly identified sports (25) and coffee (11) group membership counts are displayed. Annual frequencies are identified as plans in the activity text, never as completed impact.
- Sports rafting month labels conflict between report slides; it is described as a summer activity. Medical introductions retain their 2025 origin while the 2026 fourth invitation evening is explicitly upcoming. Culture's reused 2024 poster is not relabeled as a completed 2026 activity.
- The recruitment hero, original imagery, Purpose & Vision, curriculum, faculty row, admission dates, lesson/alumni videos, and original Site remain unchanged. The existing owner-private audience is preserved.

## Sheet 1 layout correction — latest

- Hero heading follows the sheet 1 brochure reference: Global Dynamic Spiritual Leader!, 2027, 100만 일터 선교사 양성을 꿈꾸는, 일터선교 & 글로벌네트워크아카데미. The body is the exact text in R18, compared after whitespace normalization. Per Q9, the long body is hidden on mobile.
- Removed the detached hero crest. Branding is aligned within the existing header and footer; the original globe-and-hands visual and strong lower slogan remain.
- Purpose & Vision now uses the full `campus.jpg.png` photo supplied in sheet 1, with an uncropped building and SaGA sign. It replaces the earlier narrow autumn crop.
- All 12 curriculum courses and teachers are displayed together in a three-term comparison table, with the brochure's four educational goals in the desktop row headers. Dates remain the final 2027 schedule.
- Six faculty occupy a single horizontal row; smaller screens retain the row with horizontal scrolling.
- All eight outreach dates are visible in dated cards. The admission brief uses a numerical overview, two application windows, and a four-stage 2027 timeline. These replace the preceding update's course/event/admission disclosures.

## Intro and page-length refinement

- Restored the original Site's `hero-world.jpg` as the opening visual. A native SVG viewport selects the globe and hands, excluding the old poster's 2026 title and admission text.
- Used the user's uploaded `image(5).png` unchanged as `saga-crest.png` in the hero. The existing official wordmark remains in the header and footer.
- Used the user's uploaded `사가 총동문회 이미지.png` unchanged as `scic-autumn.png`. A native SVG viewport shows the right-hand autumn foliage and brick-wall area; the dated alumni-prayer announcement is outside the displayed viewport.
- Compared the attached September 23 original-site screenshot for the large two-line English slogan, dark-blue opening composition, and original world visual.
- Kept all workbook content. Course lists, learning approach, audience details, eight events, and the complete admission timeline use native disclosure controls. The main application dates and two admission information sessions remain visible immediately.
- Strengthened BUSINESS IS MISSION in the opening, the band below it, and the footer. The original Site is unchanged.

## Authoritative final brief

User supplied workbook `38974_복구.xlsx`, sheets 1 and 2, inspected 2026-10-07 KST. The user clarified that these supersede sheet 4 (first planning draft).

- Header, recruitment video, lesson video IDs, four alumni video IDs, 12 mission-group labels, AI mission-group facts, eight November/December events, curriculum and admissions: final workbook.
- Full-resolution 2027 admissions brochure, 11 alumni summaries and their source-matched portrait viewports, faculty images and official logo: existing Site source at commit b5337adb84b58306d2f6e8f09a37b08f50b25aad. These were matched against workbook screenshots. Existing Site was opened read-only; no changes were pushed to it.
- The supplied buly.kr short URL could not be resolved by available network retrieval. Existing account Site `SaGA 일터선교아카데미 7기 모집` was identified through Sites and its design was matched to workbook reference screenshots.
- Official course page checked: https://www.saga121.com/regular-process/academy3/ . Latest supplied 2027 brochure takes precedence where the public course page differs.
- Official application destination from sheet 1: https://www.saga121.com/admission-guide/register/
- Official SaGA home: https://www.saga121.com/

## Content handling

- No new AI images. Campus photo and brochure artwork come from workbook; the hero and AI photo use SVG viewports of supplied source images without painting over original artwork.
- 11 named alumni and source-matched portrait crops are preserved. Their text is a summary, not a fabricated direct quotation.
- Historical initial group content was superseded by the source-backed mission update above, including removal of the conflicting AI aggregate counts.
- Five lessons: vSvzrd2NRfI, I3VEEhzTVGI, B5hw7AXF5wU, H_ye5PuN6Wg, jJK8WYopOOE.
- Four alumni videos: VHp1j7otP8Y, -S1ZFYkMTMs, lSF8SKJs6cA, D0EskTdCMPw. Titles of the middle two videos were verified from official YouTube oEmbed JSON: SaGA 사랑글로벌아카데미 일터 선교의 온전함 첫 번째 이야기 and SaGA 사랑글로벌아카데미 일터 선교의 온전함 두 번째 이야기, channel scic archive. No speech transcripts claimed.
- Recruitment film: RfzgTDxWbnA, as supplied. Existing local recruitment poster is a visual fallback.
- Event year is inferred as 2026 from supplied weekday/date combinations and recruitment context. Only the eight events in the final sheet are shown; prior internal campaign-coordination notes are omitted.
- Academic calendar shading shows term ranges, never claims individual class or holiday dates.
- Campus scholarship support is recommended in the brochure, not guaranteed.
- Excel #VALUE! error cells are not visitor content. Spelling MISSON is normalized to MISSION; displayed Korean is proofread without changing meaning.
