## 1. Site Info

SITE_TYPE: Real Estate Agency / Brokerage
HTML_LANG: en

## 2. Color Token Mapping

Converting raw OKLCH and RGB colors from computed styles:
- Background (page): `oklch(1 0 0)` → `hsl(0 0% 100%)`
- Foreground (main text/headings): `oklch(0.08 0 0)` → `hsl(0 0% 8%)`
- Body / muted foreground: `oklch(0.28 0 0)` → `hsl(0 0% 28%)`
- Light Surface: `oklch(0.985 0.002 90)` → `hsl(60 5% 98.5%)`
- Subtle Light Blue/Gray Background (Areas We Serve / Broker Card): `oklch(0.93 0.015 220)` → `hsl(215 25% 93%)`
- Primary Green (Buttons, Accents, Header Logo Badge): `oklch(0.45 0.09 165)` → `hsl(163 76% 23%)`
- Primary Foreground: `oklch(1 0 0)` → `hsl(0 0% 100%)`
- Primary Hover: `hsl(163 76% 18%)`
- Secondary / Dark Emerald Green (Join Team Banner, Dark Buttons): `oklch(0.38 0.08 165)` → `hsl(163 75% 19%)`
- Secondary Foreground: `hsl(0 0% 100%)`
- Secondary Hover: `hsl(163 75% 14%)`
- Border: `oklch(0.955 0.005 90)` → `hsl(60 5% 92%)`
- Accent (Highlight/Stars/500+ stat): `hsl(38 92% 50%)`
- Dark Background (Footer): `oklch(0.19 0.02 220)` → `hsl(218 20% 12%)`
- Dark Foreground: `oklch(0.93 0.015 220)` → `hsl(215 25% 93%)`
- Dark Muted Foreground: `oklch(0.78 0.03 220)` → `hsl(215 15% 72%)`
- Dark Border: `oklch(0.26 0.025 220)` → `hsl(218 20% 20%)`

```
---DESIGN_MD_START---
## Visual Theme
Boutique Southern real estate brokerage with a refined forest green, warm cream, and slate navy palette paired with editorial serif typography and crisp structured cards.

## Colors
- background: hsl(0 0% 100%)
- foreground: hsl(0 0% 8%)
- muted-foreground: hsl(0 0% 32%)
- border: hsl(60 5% 92%)
- surface: hsl(60 5% 98.5%)
- primary: hsl(163 76% 23%)
- primary-foreground: hsl(0 0% 100%)
- primary-hover: hsl(163 76% 18%)
- secondary: hsl(163 75% 19%)
- secondary-foreground: hsl(0 0% 100%)
- secondary-hover: hsl(163 75% 14%)
- dark-background: hsl(218 20% 12%)
- dark-foreground: hsl(215 25% 93%)
- dark-muted-foreground: hsl(215 15% 72%)
- dark-border: hsl(218 20% 20%)
- accent: hsl(38 92% 50%)

## Page Background
solid hsl(0 0% 100%)

## Typography
- Heading font: REQUIRED slug `playfair-display` (source: "Playfair Display", available weights: 400, 500, 600, 700)
- Body font: REQUIRED slug `inter` (source: "Inter", available weights: 400, 500, 600, 700)

## Components
- Buttons: Rounded corners (rounded-[6px]), font-medium/semibold (text-[14px]), px-6 py-3. Primary filled buttons with green background `hsl(163 76% 23%)`, white text. Secondary outline buttons with 1px border and primary color text.
- Cards: Clean rounded cards (rounded-[8px]), 1px border `hsl(60 5% 92%)`, white or light surface fill (`hsl(60 5% 98.5%)`).
---DESIGN_MD_END---
```

## 3. Navigation Spec

NAV_FULL_WIDTH: true
NAV_WIDTH: 100%
NAV_BACKGROUND: hsl(0 0% 100%)
NAV_BORDER_RADIUS: 0px
NAV_POSITION: fixed
NAV_SHADOW: 0 1px 3px 0 rgba(0, 0, 0, 0.05)
SCROLL_BEHAVIOR: none (always white background, fixed top bar)
NAV_DIVIDERS: none

Link style:
- fontSize: text-[14px]
- fontWeight: font-medium (500)
- fontFamily: "Inter", sans-serif
- textTransform: normal-case, do NOT use uppercase
- letterSpacing: tracking-normal, do NOT use tracking-wide
- color: text-foreground (hsl(0 0% 14%)) with hover:text-primary (hsl(163 76% 23%))
- link row layout: flex items-center justify-center gap-6 (pitchPx: 130px)
- SINGLE LINE: whitespace-nowrap flex-nowrap
- menu vertical placement: middle

Logo:
- Presence: Brand logo on left: rounded green badge (`w-10 h-10 bg-primary flex items-center justify-center rounded-[6px] text-white`) with home icon (`ri-home-4-line`), accompanied by stacked brand text: "Towne Creek" (serif text-[16px] font-semibold leading-tight) and "REALTY" (sans text-[10px] tracking-widest text-muted-foreground uppercase).
- Size: w-[180px] h-[40px] container.
- Position: standard left alignment.

Dropdowns:
- "Moving to Williamson", "Our Agents", and "More" have chevron down icons (`ri-arrow-down-s-line text-xs ml-1`).

CTA button:
- Text: "(615) 656-1301" with phone icon (`ri-phone-line mr-1.5`).
- Style: Solid green pill button (`bg-primary text-white text-[14px] font-semibold px-4 py-2 rounded-[6px] hover:bg-primary-hover flex items-center`).

Mobile Menu:
- Hamburger toggle (`ri-menu-line text-2xl`) on mobile viewports.

---

## 4. Section Plan

### Hero Section id="hero"
- theme: DARK (due to full-bleed landscape photo with dark gradient scrim)
- background: bg-black relative overflow-hidden min-h-[700px] flex items-center
- text: text-white
- heading color: text-white
- heading size: text-[44px] lg:text-[60px] font-normal font-heading leading-[1.1]
- heading transform/tracking: normal-case, tracking-normal
- body size: text-[16px] lg:text-[18px] text-gray-200 leading-[28px] max-w-[620px]
- text alignment/placement: start / left-aligned
- layout: max-w-[1280px] mx-auto px-6 lg:px-8 py-32 lg:py-40 relative z-10 flex flex-col items-start
- backgroundImage: Cover photo of Williamson County Tennessee sunrise landscape (`/ai/img_res/629331f368ff01a0859d66f0b834031f.jpg`).
- overlay: `linear-gradient(to right, oklch(0.08 0 0 / 0.75), oklch(0.08 0 0 / 0.4) 65%, rgba(0, 0, 0, 0.2))`
- content:
  - Top pill tag: `Franklin · Williamson County · Middle TN` (inline-block bg-primary/85 text-white text-[12px] font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider mb-6).
  - H1: "Looking for a Realtor who knows the Williamson County and Middle, TN market?"
  - Paragraph: "Welcome to Towne Creek Realty in Franklin, TN. When deciding on a Realtor to help you buy or sell a home or property, we believe you will appreciate that we are intentionally a boutique firm known for not giving up until we find the right fit."
  - CTA Button Group (flex gap-4 mt-8 flex-wrap):
    1. Primary Button: "Search Properties" — solid green `bg-primary text-white font-semibold text-[14px] px-6 py-3 rounded-[6px] flex items-center gap-2 hover:bg-primary-hover` with search icon (`ri-search-line`).
    2. Secondary Button: "Talk to an Agent" — solid white `bg-white text-gray-900 font-semibold text-[14px] px-6 py-3 rounded-[6px] flex items-center gap-2 hover:bg-gray-100` with chat icon (`ri-chat-1-line`).

---

### Stats Bar id="stats"
- theme: LIGHT
- background: bg-white border-b border-border
- text: text-foreground
- layout: max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-border
- content:
  - Stat 1: `20+` (text-[36px] lg:text-[44px] font-heading text-primary font-normal text-center) / `Years combined experience` (text-[13px] text-muted-foreground text-center mt-1)
  - Stat 2: `500+` (text-[36px] lg:text-[44px] font-heading text-amber-700 font-normal text-center) / `Homes sold across Middle TN` (text-[13px] text-muted-foreground text-center mt-1)
  - Stat 3: `24hr` (text-[36px] lg:text-[44px] font-heading text-primary font-normal text-center) / `Average response time` (text-[13px] text-muted-foreground text-center mt-1)
  - Stat 4: `5.0` (text-[36px] lg:text-[44px] font-heading text-primary font-normal text-center) / `Average client rating` (text-[13px] text-muted-foreground text-center mt-1)

---

### About Us Section id="about"
- theme: LIGHT
- background: bg-white
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[32px] lg:text-[36px] font-heading font-normal leading-[1.2]
- text alignment/placement: left-aligned
- layout: max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start
- content:
  - Left column (lg:col-span-7):
    - Subtitle/badge: `ABOUT US` (text-[12px] font-bold text-primary tracking-widest uppercase mb-3)
    - H2: "Why Choose Us to Help You with Your Real Estate Needs in the Williamson County, TN Area?"
    - Paragraphs: 4 descriptive paragraphs detailing the boutique philosophy, stewardship, long-lasting relationships, honest communication, and data-driven insights.
    - 3 Highlight feature cards (grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8):
      1. "Honest & Forthright" (bg-surface border border-border p-5 rounded-[8px] flex flex-col items-start gap-3 with green square icon badge `ri-shield-check-line`)
      2. "Data-Driven Insights" (bg-surface border border-border p-5 rounded-[8px] flex flex-col items-start gap-3 with green square icon badge `ri-line-chart-line`)
      3. "People First Service" (bg-surface border border-border p-5 rounded-[8px] flex flex-col items-start gap-3 with green square icon badge `ri-user-heart-line`)
  - Right column (lg:col-span-5):
    - Contained Broker Card: light blue/gray background container (`bg-sky-50/70 border border-sky-100 p-6 rounded-[12px] flex flex-col items-center text-center`)
    - Photo: Chris Thompson, Principal Broker (`/ai/img_res/b76220e8d67190206b71f97572e50be1.webp`, rounded-[8px] object-cover w-full max-h-[420px])
    - Broker Name: "Chris Thompson" (text-[22px] font-heading font-normal text-foreground mt-4)
    - Role: "Principal Broker" (text-[14px] text-muted-foreground mb-3)
    - Phone: "(615) 627-8456" (`text-[14px] text-foreground flex items-center justify-center gap-1.5 hover:text-primary`)
    - Email: "christhompson@townecreekrealty.com" (`text-[14px] text-primary underline decoration-primary/30 mt-1 hover:text-primary-hover`)

---

### Testimonials Section id="testimonials"
- theme: LIGHT
- background: bg-surface (`oklch(0.985 0.002 90)`)
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[32px] lg:text-[36px] font-heading font-normal text-center
- layout: max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-24
- content:
  - Header: Subtitle `TESTIMONIALS` (text-center text-[12px] font-bold text-primary tracking-widest uppercase mb-2) and H2 "What Our Clients Are Saying"
  - 3 Testimonial Cards in a grid (`grid grid-cols-1 md:grid-cols-3 gap-6 mt-12`):
    - Card 1:
      - 5 Stars: `ri-star-fill text-amber-500 text-[16px]` (5 icons in row)
      - H4: `"Chris came out to look at our property and was so kind and friendly..."` (font-heading text-[18px] text-foreground font-normal mt-3 mb-3)
      - Body: Full quote from Candace Williams about selling home in Santa Fe, TN.
      - Author: `— Candace Williams` (text-[14px] font-semibold text-foreground mt-6 pt-4 border-t border-border)
    - Card 2:
      - 5 Stars
      - H4: `"We absolutely loved our experience with Chris and Towne Creek Realty..."`
      - Body: Full quote from Emily Jordan about selling in 24 hours with multiple offers over asking.
      - Author: `— Emily Jordan`
    - Card 3:
      - 5 Stars
      - H4: `"Thank you both Chris and Shari for all the help thru this process..."`
      - Body: Full quote from Elliot & DeAnna Kelley.
      - Author: `— Elliot & DeAnna Kelley`

---

### Popular Listing Categories Section id="listings"
- theme: LIGHT
- background: bg-white
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[32px] lg:text-[36px] font-heading font-normal
- layout: max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-24
- content:
  - Header split layout:
    - Left: Subtitle `EXPLORE LISTINGS` + H2 "Here are Some Popular Listing Categories"
    - Right: Paragraph "We also have a full ad free MLS Listing Search. You can access that here. If you know what you are looking for contact us and we can help you find the best homes for sale that meet your criteria." (with links to `/property-search` and `/#contact`).
  - 3 Category Cards in a grid (`grid grid-cols-1 md:grid-cols-3 gap-8 mt-12`):
    - Card 1: Featured Listings
      - Image: `/ai/img_res/00fb8d05642e61c1860215bc5893bab1.jpg` (h-[240px] w-full object-cover rounded-t-[8px])
      - Content: Title "Featured Listings" (text-[20px] font-heading font-normal text-foreground flex items-center justify-between), description "Hand-picked homes currently on the market with our team.", and button "Schedule a Showing" (outline border border-primary text-primary font-semibold text-[14px] py-2.5 rounded-[6px] w-full text-center hover:bg-primary hover:text-white transition).
    - Card 2: Land and Farm
      - Image: `/ai/img_res/756572f78b69bac6aa568ea4ad2df5c9.jpg`
      - Content: Title "Land and Farm", description "Rolling acreage, farms and rural properties across Middle TN.", button "Schedule a Showing".
    - Card 3: Luxury Homes
      - Image: `/ai/img_res/b836385acb94190f7a2474a3da382383.webp`
      - Content: Title "Luxury Homes", description "High-end estates and executive homes in the Nashville area.", button "Schedule a Showing".

---

### Our Agents Section id="agents"
- theme: LIGHT
- background: bg-surface (`oklch(0.985 0.002 90)`)
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[32px] lg:text-[36px] font-heading font-normal text-center
- layout: max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-24
- content:
  - Header: Subtitle `MEET THE TEAM` + H2 "Our Agents" + Subtitle paragraph: "Local Franklin, TN Realtors who genuinely know Williamson County and the Middle Tennessee real estate market."
  - 4 Agent Cards in a grid (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12`):
    - Agent 1: Chris Thompson
      - Photo: `/ai/img_res/3eaa06ab9024e582831a92142d9addc7.jpg` (aspect-square object-cover rounded-t-[8px])
      - Name: "Chris Thompson" (text-[18px] font-heading font-normal text-foreground)
      - Role: "Principal Broker / Owner" (text-[14px] text-muted-foreground)
      - Link: "Contact →" (text-[14px] font-semibold text-primary hover:text-primary-hover flex items-center gap-1)
    - Agent 2: Shari Boyd
      - Photo: `/ai/img_res/31427c23e28d7df9b2e36cc2785d0ee5.jpg`
      - Name: "Shari Boyd"
      - Role: "Office Manager | REALTOR®"
      - Link: "Contact →"
    - Agent 3: Caleb Knox
      - Photo: `/ai/img_res/54323bdd91708272b9b3ff806c8555e5.jpg`
      - Name: "Caleb Knox"
      - Role: "Affiliate Broker"
      - Link: "Contact →"
    - Agent 4: Josh Pickerel
      - Photo: `/ai/img_res/50dd634e9f84008c5018aadaad94603c.webp`
      - Name: "Josh Pickerel"
      - Role: "REALTOR®"
      - Link: "Contact →"

---

### Boutique Approach (Buying / Selling) Section id="buying-selling"
- theme: LIGHT
- background: bg-white
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[32px] lg:text-[36px] font-heading font-normal
- layout: max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center
- content:
  - Left column (lg:col-span-6):
    - Photo: Franklin TN home for sale (`/ai/img_res/e21f6ef4f3550031aba786213f9a8c62.webp`, rounded-[12px] shadow-sm object-cover w-full h-[460px])
  - Right column (lg:col-span-6):
    - Subtitle: `BUYING / SELLING` (text-[12px] font-bold text-primary tracking-widest uppercase mb-2)
    - H2: "A thoughtful, boutique approach to every transaction"
    - 3 Service feature blocks:
      1. Buyer Representation: Icon badge (`ri-search-eye-line text-primary bg-primary/10 p-3 rounded-[6px]`), H4 "Buyer Representation" (text-[18px] font-heading font-normal text-foreground), body: "From neighborhood scouting to negotiation, we protect your interests every step of the way."
      2. Seller Strategy: Icon badge (`ri-line-chart-line`), H4 "Seller Strategy", body: "Pricing, staging, and marketing built around data -- not guesswork. Our listings move fast."
      3. Land & Commercial: Icon badge (`ri-community-line`), H4 "Land & Commercial", body: "Farm, land, and commercial expertise across Williamson County and Middle Tennessee."

---

### Areas We Serve Section id="areas"
- theme: LIGHT
- background: bg-sky-50/60 (`oklch(0.93 0.015 220)`)
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[32px] lg:text-[36px] font-heading font-normal
- layout: max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-24
- content:
  - Subtitle: `COVERAGE`
  - H2: "Areas We Serve"
  - Subtitle paragraph: "We serve those looking for a Realtor to help buy or sell a home or property in the following areas in Williamson County, Nashville, and the surrounding communities."
  - 3x3 Grid of 9 Areas (`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8`):
    Each item is a white card (`bg-white border border-sky-100 p-4 rounded-[6px] flex items-center gap-3 text-foreground font-medium text-[14px] hover:border-primary/40 transition shadow-sm`):
    1. Franklin, TN (`ri-map-pin-line text-primary`)
    2. Nolensville, TN
    3. Green Hills, TN
    4. Thompson's Station
    5. Spring Hill, TN
    6. Leipers Fork, TN
    7. Nashville, TN
    8. Brentwood, TN
    9. Murfreesboro, TN

---

### Frequently Asked Questions Section id="faq"
- theme: LIGHT
- background: bg-white
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[32px] lg:text-[36px] font-heading font-normal text-center
- layout: max-w-[860px] mx-auto px-6 py-20 lg:py-24
- content:
  - Subtitle: `FAQ` (text-center text-[12px] font-bold text-primary tracking-widest uppercase mb-2)
  - H2: "Frequently Asked Questions"
  - Subtitle paragraph: "Answers to the questions we hear most from buyers and sellers across Williamson County and Middle Tennessee."
  - Accordion (6 items with `<details>` / `<summary>`):
    - Item 1 (open by default):
      - Q: "How do I start buying a home in Williamson County?"
      - A: "Start by getting pre-approved for a mortgage so you know your budget. Then we'll match you with listings that fit your criteria and guide you through showings, negotiations, inspections, and closing -- every step of the way."
    - Item 2:
      - Q: "How do you determine the right listing price for my home?"
      - A: "We analyze comprehensive MLS market data, recent comparable sales, current market trends, neighborhood demand, and the specific unique features and condition of your property."
    - Item 3:
      - Q: "What does it cost to work with a Realtor?"
      - A: "For buyers, our services are typically covered by the transaction at no direct out-of-pocket cost. For sellers, our competitive commission covers professional staging advice, premier photography, targeted marketing, and full negotiation representation."
    - Item 4:
      - Q: "Which areas does Towne Creek Realty serve?"
      - A: "We specialize in Franklin, Brentwood, Nolensville, Thompson's Station, Spring Hill, Leipers Fork, Green Hills, Nashville, Murfreesboro, and throughout Williamson and surrounding Middle Tennessee counties."
    - Item 5:
      - Q: "How long does it take to sell a home in Middle Tennessee?"
      - A: "Timeline varies based on location and price point, but with our strategic pricing and professional marketing, many of our well-prepared listings receive strong offers within days or weeks."
    - Item 6:
      - Q: "Can you help with land, farm, and commercial properties?"
      - A: "Yes, our team has extensive experience in rural acreage, agricultural land, equestrian properties, development parcels, and commercial real estate transactions across Middle Tennessee."

---

### Contact Us Section id="contact"
- theme: LIGHT
- background: bg-white
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[32px] lg:text-[36px] font-heading font-normal
- layout: max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-24
- content:
  - Subtitle: `GET IN TOUCH`
  - H2: "Contact Us"
  - Subtitle paragraph: "We appreciate the opportunity to assist you as you buy or sell your home. It's a responsibility and commitment we take seriously."
  - 2-Column Grid (`grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10`):
    - Left Column (lg:col-span-5):
      - Contact Info Cards:
        1. Address: `101 Creekstone Blvd. Suite 100, Franklin, TN 37064` (with `ri-map-pin-line` in green badge)
        2. Phone: `(615) 656-1301` (with `ri-phone-line` in green badge)
        3. Office Hours: `Monday – Friday · 9:00 am – 5:00 pm` (with `ri-time-line` in green badge)
      - Interactive Map: Rounded embed/visual container with pin on 101 Creekstone Blvd, Franklin, TN.
    - Right Column (lg:col-span-7):
      - Contact Form Container: `bg-surface border border-border p-8 rounded-[8px]`
      - H3: "Send us a message" (text-[22px] font-heading font-normal text-foreground mb-6)
      - Form Fields:
        - Row 1: First Name (`input text`), Last Name (`input text`)
        - Row 2: Email (`input email`), Phone (`input tel`)
        - Row 3: "I'm Interested In" (`select` dropdown: "Buying a home", "Selling a home", "Land and Acreage", "General Inquiry")
        - Row 4: Message (`textarea` rows=4)
        - Submit Button: "Send Message" (`bg-primary text-white text-[14px] font-semibold py-3 px-6 rounded-[6px] w-full hover:bg-primary-hover flex items-center justify-center gap-2` with `ri-send-plane-line`)

---

### Join Our Team CTA Banner id="careers"
- theme: DARK
- background: bg-secondary (`hsl(163 75% 19%)`)
- text: text-white/90
- heading color: text-white
- heading size: text-[32px] lg:text-[36px] font-heading font-normal text-center
- layout: max-w-[1024px] mx-auto px-6 py-16 text-center
- content:
  - Subtitle: `CAREERS` (text-white/80 text-[12px] font-bold tracking-widest uppercase mb-2)
  - H2: "Join Our Team"
  - Paragraph: "Are you a licensed agent who values integrity, community, and thoughtful client care? We'd love to hear from you."
  - Button: "Apply Now" (`bg-white text-primary font-semibold text-[14px] px-6 py-3 rounded-[6px] inline-flex items-center gap-2 hover:bg-gray-100 shadow-sm mt-6` with `ri-user-add-line`)

---

## 5. Favicon

Call `generate_favicon` with site name "Towne Creek Realty" and primary brand color `hsl(163 76% 23%)` (or pass the favicon SVG if available).

---

## 6. Footer

- Style: `bg-dark-background` (`hsl(218 20% 12%)`)
- Text color: `hsl(215 25% 93%)`
- Columns: 3 main columns + bottom legal bar
- Layout:
  - Top Grid (`grid grid-cols-1 md:grid-cols-12 gap-10 py-16 max-w-[1280px] mx-auto px-6 lg:px-8`):
    - Column 1 (Brand, md:col-span-5):
      - Green logo badge + "Towne Creek Realty"
      - Tagline: "A boutique Williamson County, TN real estate firm serving buyers, sellers, and investors across Franklin, Nashville, and Middle Tennessee."
    - Column 2 (Explore, md:col-span-3):
      - Heading: "Explore" (text-white font-semibold text-[14px] mb-4)
      - Links: Home (`/`), Property Search (`/property-search`), Buying / Selling (`/#buying-selling`), Our Agents (`/#agents`), Testimonials (`/#testimonials`).
    - Column 3 (Contact, md:col-span-4):
      - Heading: "Contact" (text-white font-semibold text-[14px] mb-4)
      - Address: "101 Creekstone Blvd, Suite 100, Franklin, TN 37064"
      - Phone: "(615) 656-1301"
      - Email: "christhompson@townecreekrealty.com"
  - Bottom Bar (`border-t border-dark-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[1280px] mx-auto px-6 lg:px-8 text-[12px] text-dark-muted-foreground`):
    - Left: "© 2026 Towne Creek Realty. All rights reserved."
    - Right: Links for "Privacy", "Terms", "Accessibility".
  - Floating Scroll-to-Top Button: Fixed bottom-right corner (`fixed bottom-6 right-6 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-hover shadow-lg z-50` with `ri-arrow-up-line`).

---

## 7. Files

MODIFY:
- `src/components/Navigation.astro`
- `src/components/Footer.astro`
- `src/styles/global.css`
- `src/pages/index.astro`

CREATE:
- `src/components/home/Hero.astro`
- `src/components/home/Stats.astro`
- `src/components/home/About.astro`
- `src/components/home/Testimonials.astro`
- `src/components/home/Listings.astro`
- `src/components/home/Agents.astro`
- `src/components/home/BoutiqueApproach.astro`
- `src/components/home/Areas.astro`
- `src/components/home/FAQ.astro`
- `src/components/home/Contact.astro`
- `src/components/home/CareersCTA.astro`