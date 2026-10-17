from pathlib import Path
from html import escape
import json

ROOT = Path(__file__).parent
D = ROOT / "dist"
E = escape
APPLY = "https://www.saga121.com/admission-guide/register/"
COURSE = "https://www.saga121.com/regular-process/academy3/"
reviews = json.loads((ROOT / "content/reviews.json").read_text(encoding="utf-8"))

lessons = [
    {"id": "vSvzrd2NRfI", "title": "일터의 온전함", "tag": "3분 미라클 · 오정현 목사", "desc": "짧은 말씀 영상으로 일과 신앙을 잇는 관점을 만나보세요."},
    {"id": "I3VEEhzTVGI", "title": "이돈주 학장 공개 특강", "tag": "크리스천 리더십", "desc": "변화하는 시대, 크리스천 리더의 사명을 함께 생각합니다."},
    {"id": "B5hw7AXF5wU", "title": "일터의 온전함", "tag": "오정현 목사 · 전체 설교", "desc": "일터에서 온전한 제자로 살아가는 삶을 더 깊이 만나보세요."},
    {"id": "H_ye5PuN6Wg", "title": "일터선교아카데미 커리큘럼", "tag": "과정 소개", "desc": "무엇을 배우고 어떻게 일터에 적용하는지, 과정의 흐름을 살펴보세요."},
    {"id": "jJK8WYopOOE", "title": "바이블 에센셜 강의", "tag": "성경의 토대", "desc": "성경을 배우는 시간으로 일터와 삶의 토대를 세웁니다."},
]
videos = [
    {"id": "VHp1j7otP8Y", "title": "선배들이 입학을 추천하는 이유", "tag": "졸업생 대담"},
    {"id": "Amk_Zyn4aBo", "title": "일터 선교의 온전함, 첫 번째 이야기", "tag": "생도 이야기"},
    {"id": "GkSTibLacgs", "title": "일터 선교의 온전함, 두 번째 이야기", "tag": "생도 이야기", "start": 3},
    {"id": "D0EskTdCMPw", "title": "이민근·정혜원 생도의 이야기", "tag": "5기 수료 간증 · 08:27부터", "start": 507},
]
groups = [
    {"name": "AI 미션 그룹", "en": "AI MISSION GROUP", "title": "선교사님의 AX 전환을 섬깁니다", "desc": "국내외 선교사님과 청년을 위한 무료 AI 교육. 라오스 현지, 글로벌선교부, 순장반, SCIC까지 — AI로 선교의 새 길을 함께 열어갑니다.", "tags": ["AI 교육", "선교사 지원", "AX 전환", "무료 강의"], "icon": "ai", "theme": "ai"},
    {"name": "SNS", "en": "SOCIAL NETWORK", "title": "복음이 닿는 접점을 넓히다", "desc": "SNS와 콘텐츠를 통해 사람을 만나고, 일상의 이야기에 믿음을 담는 길을 함께 모색합니다.", "tags": ["디지털 소통", "콘텐츠", "복음 나눔"], "icon": "share"},
    {"name": "과학·기술", "en": "SCIENCE & TECHNOLOGY", "title": "기술의 가능성을 섬김으로", "desc": "과학과 기술의 전문성을 선교적 관점으로 바라봅니다. 새로운 발견과 도구가 이웃을 섬기는 통로가 되는 길을 생각합니다.", "tags": ["전문성", "기술과 신앙", "선교적 적용"], "icon": "science"},
    {"name": "다음세대", "en": "NEXT GENERATION", "title": "다음 걸음을 함께 걷다", "desc": "대학생과 청년을 섬기는 ‘갓생 멘토링’. 믿음의 선배들이 경험을 나누며 다음세대의 진로와 소명을 함께 응원합니다.", "tags": ["청년", "대학생", "멘토링"], "icon": "grow"},
    {"name": "마이크로임팩트", "en": "MICRO IMPACT", "title": "작은 실천에서 시작되는 변화", "desc": "가까운 이웃의 필요를 살피고, 오늘 할 수 있는 작은 실천을 찾습니다. 일상에서 선한 영향력을 이어가는 방법을 함께 생각합니다.", "tags": ["작은 실천", "이웃 사랑", "선한 영향력"], "icon": "heart"},
    {"name": "메디컬", "en": "MEDICAL MISSION", "title": "의료의 전문성에 소명을 더하다", "desc": "‘예비 의료인의 밤’을 통해 선배 의료인의 경험과 간증을 나눴습니다. 의료의 현장에서 사람을 돌보는 소명과 동행을 이어갑니다.", "tags": ["의료 선교", "돌봄", "예비 의료인"], "icon": "medical"},
    {"name": "문화예술미디어", "en": "CULTURE, ART & MEDIA", "title": "이야기와 아름다움으로 만나다", "desc": "문화와 예술, 미디어를 통해 사람의 마음에 다가갑니다. 창작의 언어로 믿음을 나누는 가능성을 함께 탐색합니다.", "tags": ["문화", "창작", "미디어"], "icon": "art"},
    {"name": "스포츠와 건강", "en": "SPORTS & WELLNESS", "title": "건강한 만남으로 이어지는 공동체", "desc": "스포츠와 건강이라는 일상의 접점에서 이웃을 만납니다. 함께 움직이고 서로를 돌보며 관계를 세우는 길을 모색합니다.", "tags": ["스포츠", "건강", "공동체"], "icon": "sport"},
    {"name": "일터선교", "en": "MARKETPLACE MISSION", "title": "우리의 일터가 예배의 자리로", "desc": "동문의 일터를 찾아 함께 예배하고 간증을 나누며 중보기도합니다. 각자의 일터에서 살아내는 믿음을 서로 격려합니다.", "tags": ["일터 방문", "예배", "중보기도"], "icon": "work"},
    {"name": "창업스타트업", "en": "STARTUP & BUSINESS", "title": "새로운 시작에도 분명한 소명", "desc": "창업과 비즈니스의 시작을 신앙의 관점으로 바라봅니다. 가치 있는 문제를 풀고 사람을 섬기는 기업의 방향을 함께 생각합니다.", "tags": ["창업", "경영", "가치와 소명"], "icon": "startup"},
    {"name": "커피선교", "en": "COFFEE MISSION", "title": "한 잔의 만남에서 시작되는 관계", "desc": "커피를 매개로 사람을 만나고 이야기를 듣습니다. 일상 속 환대와 대화가 섬김으로 이어지는 길을 함께 모색합니다.", "tags": ["환대", "대화", "일상의 만남"], "icon": "coffee"},
    {"name": "해외선교", "en": "GLOBAL MISSION", "title": "열방의 동역자들과 함께", "desc": "국내외 선교사 힐링 캠프에서 간증과 교제, 중보기도로 선교사를 섬겼습니다. 선교 현장의 동역자들과 연결되는 공동체입니다.", "tags": ["선교사 돌봄", "글로벌 동역", "중보기도"], "icon": "globe"},
]
group_updates = json.loads((ROOT / "content/mission-groups.json").read_text(encoding="utf-8"))
if sorted(g["index"] for g in group_updates) != list(range(12)):
    raise ValueError("All 12 mission groups must have exactly one source-backed update")
public_fields = {"en", "title", "desc", "tags", "activities_label", "activities", "stats", "stats_note", "source_note", "photos", "source"}
for update in group_updates:
    groups[update["index"]].update({key: value for key, value in update.items() if key in public_fields})

def group_default(group):
    photos = ''.join(f'<figure><a href="{E(p["src"])}" target="_blank" rel="noopener" aria-label="{E(p["caption"])} 이미지 크게 보기"><img src="{E(p["src"])}" alt="{E(p["alt"])}" width="{p["width"]}" height="{p["height"]}" loading="lazy"></a><figcaption>{E(p["caption"])}</figcaption></figure>' for p in group["photos"])
    stats = ''.join(f'<div><strong>{E(s["value"])}<span>{E(s["unit"])}</span></strong><small>{E(s["label"])}</small></div>' for s in group["stats"])
    activities = ''.join(f'<li><span>{i+1:02d}</span><div><h4>{E(a["title"])}</h4><p>{E(a["text"])}</p></div></li>' for i,a in enumerate(group["activities"]))
    tags = ''.join(f'<span>{E(tag)}</span>' for tag in group["tags"])
    single = ' single-visual' if len(group["photos"]) == 1 else ''
    hidden_stats = '' if group["stats"] else ' hidden'
    hidden_note = '' if group["stats_note"] else ' hidden'
    source = group["source"]
    return f'''<div id="group-visual" class="group-visual group-gallery{single}">{photos}</div><div class="group-body"><p id="group-en" class="eyebrow">{E(group["en"])}</p><h3 id="group-title">{E(group["title"])}</h3><p id="group-desc">{E(group["desc"])}</p><div id="group-tags" class="group-tags">{tags}</div><div id="group-stats" class="group-stats"{hidden_stats}>{stats}</div><p id="group-stats-note" class="group-detail-note"{hidden_note}>{E(group["stats_note"])}</p><div class="group-activities"><h4 id="group-activities-label">{E(group["activities_label"])}</h4><ol id="group-activities">{activities}</ol></div><div class="group-source-row"><p id="group-source-note">{E(group["source_note"])}</p><a id="group-source" href="{E(source["href"])}" target="_blank" rel="noopener"><strong>소개자료 PDF 보기</strong><span>{source["pages"]}쪽 · {source["size_mb"]} MB ↗</span></a></div></div>'''
events = [
    {"date": "2026-11-01", "day": "주일", "time": "오후 7:00", "title": "목포 사랑의교회 특강", "kind": "특강"},
    {"date": "2026-11-03", "day": "화", "time": "오후 7:00", "title": "새로남교회 C-MBA", "kind": "Open Class"},
    {"date": "2026-11-08", "day": "주일", "time": "오후 3:30", "title": "사랑의교회 대청부 특강", "kind": "특강 · 25분"},
    {"date": "2026-11-10", "day": "화", "time": "오후 7:00", "title": "포도원교회 C-MBA", "kind": "Open Class"},
    {"date": "2026-11-14", "day": "토", "time": "오후 1:30", "title": "강남 1차 입학설명회", "kind": "입학설명회"},
    {"date": "2026-11-22", "day": "주일", "time": "오후 4:50", "title": "사랑의교회 청년부 특강", "kind": "특강 · 30분"},
    {"date": "2026-12-06", "day": "주일", "time": "오후 4:30", "title": "강남 2차 입학설명회", "kind": "입학설명회"},
    {"date": "2026-12-13", "day": "주일", "time": "오후 4:00", "title": "고현교회 특강", "kind": "특강"},
]
terms = [
    {"n": "01", "en": "BIBLICAL THEORY", "title": "신학적 이론", "date": "2.16 – 4.24", "range": ["2027-02-16", "2027-04-24"], "courses": [("온전론", "오정현", "Theory of Teleios"), ("기독교 세계관", "전광식", "Christian Worldview"), ("일터선교 1", "Dr. P. Stevens", "Marketplace Transformation 1"), ("성경적 일터신학", "박재은", "Marketplace Theology")]},
    {"n": "02", "en": "PRACTICAL THEORY", "title": "실천적 이론", "date": "5.8 – 7.13", "range": ["2027-05-08", "2027-07-13"], "courses": [("교회사", "주연종", "Church History"), ("글로벌 네트워크", "고성삼 · Dr. M. Reeves 외", "Global Network"), ("일터선교 2", "Dr. P. Stevens", "Marketplace Transformation 2"), ("일터선교와 전문성", "조장현 외", "Faith meets Expertise")]},
    {"n": "03", "en": "MISSIONAL STRATEGY", "title": "영역별 선교전략", "date": "9.4 – 11.20", "range": ["2027-09-04", "2027-11-20"], "courses": [("Business is Mission", "송동호 · 이병구 외", "비즈니스와 선교"), ("K-Marketplace Mission", "윤종록 외", "일터선교의 현장"), ("Christian-MBA", "이돈주", "성경적 경영"), ("영역별 선교전략", "유종성", "나의 일터에 적용하기")]},
]
faculty = [
    ("oh", "오정현 총장", "온전론"),
    ("paul", "Dr. Paul Stevens", "일터선교"),
    ("michael", "Dr. Michael Reeves", "글로벌 네트워크"),
    ("jeon", "전광식 박사", "기독교 세계관"),
    ("lee", "이돈주 학장", "Christian-MBA"),
    ("yu", "유종성 부학장", "영역별 선교전략"),
]
admissions = [
    ("원서접수 1차", "2026.10.01 – 11.30", "온라인 신청 · 입학전형료 면제"),
    ("원서접수 2차", "2026.12.01 – 12.31", "SaGA 홈페이지 온라인 신청"),
    ("서류 합격자 발표", "2027.01.04", "개별 공지"),
    ("면접", "2027.01.09", "장소·시간 개별 공지 · 변경 가능"),
    ("최종 합격자 발표", "2027.01.13", "개별 공지"),
    ("합격자 등록", "2027.01.18 – 01.30", "지정계좌 납부"),
]

def video(v, cls="video-card"):
    start = v.get("start", 0)
    return f'''<article class="{cls}"><button class="video-thumb" type="button" data-video="{v['id']}" data-start="{start}" data-title="{E(v['title'])}" aria-label="{E(v['title'])} 재생"><img src="https://i.ytimg.com/vi/{v['id']}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360"><span class="play-icon" aria-hidden="true">▶</span></button><p class="eyebrow">{E(v['tag'])}</p><h3>{E(v['title'])}</h3><a class="text-link" href="https://www.youtube.com/watch?v={v['id']}&amp;t={start}s" target="_blank" rel="noopener">YouTube에서 보기 <span aria-hidden="true">↗</span></a></article>'''

review_html = []
for i,r in enumerate(reviews):
    review_html.append(f'''<article class="testimonial" aria-label="{i+1} / {len(reviews)} · {E(r['name'])} 후기"><div class="review-person"><svg viewBox="{r['viewBox']}" width="70" height="92" role="img" aria-label="{E(r['name'])} 수강생 얼굴사진"><image href="assets/cohort5-stories.png" width="2048" height="1456"/></svg><div><span class="campus">{E(r['campus'])}</span><h4>{E(r['name'])}</h4><p>{E(r['affiliation'])}</p></div></div><h3>{E(r['title'])}</h3><p class="review-body">{E(r['body'])}</p><span class="review-number">{i+1:02d}</span></article>''')

course_html = []
goals = ["변혁적 리더", "글로벌 크리스천 리더", "일터선교 리더", "영역별 선교사"]
course_head = '<th scope="col" class="goal-column">교육목표</th>'
for i,t in enumerate(terms):
    course_head += f'<th scope="col" class="term-column term-color-{i+1}"><span class="term-label">TERM {t["n"]}</span><h3>{t["title"]}</h3><small lang="en">{t["en"]}</small></th>'
for row,goal in enumerate(goals):
    cells = f'<th scope="row" class="goal-column"><span>{row+1:02d}</span>{goal}</th>'
    for i,t in enumerate(terms):
        title,teacher,english=t['courses'][row]
        cells += f'<td class="term-color-{i+1}"><strong>{E(title)}</strong><span>{E(teacher)}</span></td>'
    course_html.append('<tr>'+cells+'</tr>')
curriculum_html = f'<table class="curriculum-matrix"><caption class="sr-only">2027년 3학기 커리큘럼, 교육목표별 과목과 교수진</caption><thead><tr>{course_head}</tr></thead><tbody>{"".join(course_html)}</tbody></table>'

event_html = []
for v in events:
    month=int(v['date'][5:7])
    special = ' event-special' if v['kind']=='입학설명회' else ''
    event_html.append(f'''<li class="event-card{special}"><time datetime="{v['date']}"><span>{month}월</span><strong>{int(v['date'][8:]):02d}</strong><small>{v['day']}</small></time><div><span class="event-kind">{E(v['kind'])}</span><h3>{E(v['title'])}</h3><p>{v['time']}</p></div></li>''')

admission_flow = []
for i,(title,date,note) in enumerate(admissions[2:]):
    display_date = date.removeprefix('2027.').replace(' – ', '<span class="date-through">–</span>')
    admission_flow.append(f'<li><span class="admission-step">{i+1:02d}</span><h3>{title}</h3><strong>{display_date}</strong><p>{note}</p></li>')

template=(ROOT/'template.html').read_text(encoding="utf-8")
parts={
    "LESSON_CHOICES":''.join(f'<button class="lesson-choice" type="button" data-lesson="{i}" aria-pressed="{str(i==0).lower()}"><span class="lesson-num">{i+1:02d}</span><span><small>{E(v["tag"])}</small><strong>{E(v["title"])}</strong></span><span class="lesson-arrow" aria-hidden="true">↗</span></button>' for i,v in enumerate(lessons)),
    "VIDEOS":''.join(video(v) for v in videos),
    "REVIEWS":''.join(review_html),
    "HERO_COPY":"사가 일터선교 글로벌네트워크 아카데미는\n100만 일터선교사 양성을 위해 헌신하는 영적집현전이며\n영적사관학교입니다. 전세계 모든 교회의 생도가 자신의 일터에서\n선교사로 살아가는 그날까지 최선을 다해 섬기겠습니다.",
    "COURSES":curriculum_html,
    "GROUP_BUTTONS":''.join(f'<button id="group-tab-{i}" role="tab" aria-selected="{str(i==0).lower()}" aria-controls="group-panel" tabindex="{0 if i==0 else -1}" data-group="{i}" type="button"><span>{i+1:02d}</span>{E(g["name"])}</button>' for i,g in enumerate(groups)),
    "GROUP_DEFAULT":group_default(groups[0]),
    "FACULTY":''.join(f'<article class="faculty-person"><img src="assets/{img}.png" alt="{E(name)}" width="240" height="300" loading="lazy"><div><p>{E(subject)}</p><h3>{E(name)}</h3></div></article>' for img,name,subject in faculty),
    "EVENTS":''.join(event_html),
    "ADMISSIONS":''.join(admission_flow),
}
for k,v in parts.items(): template=template.replace('{{'+k+'}}',v)
(D/'index.html').write_text(template, encoding="utf-8")
(D/'data.js').write_text('window.SAGA_DATA = '+json.dumps({"lessons":lessons,"videos":videos,"groups":groups,"events":events,"terms":terms},ensure_ascii=False,separators=(',',':'))+';\n', encoding="utf-8")
print(f"Built {D/'index.html'} · 5 lessons, 4 videos, 11 alumni, 12 groups, 8 events")
