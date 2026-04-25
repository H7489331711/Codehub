export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
};

export type ContentBlock =
  | { type: "text"; heading?: string; content: string }
  | { type: "syntax"; code: string; language?: string; label?: string }
  | { type: "example"; code: string; output?: string; label?: string }
  | { type: "tip"; content: string }
  | { type: "warning"; content: string }
  | { type: "table"; heading?: string; content: string };

export type Chapter = {
  id: string;
  title: string;
  level: 1 | 2;
  levelName: string;
  levelIcon: string;
  chapterNo: number;
  content: ContentBlock[];
  quiz: QuizQuestion[];
};

export const cssChapters: Chapter[] = [

  // ════════════════════════════════════════
  // LEVEL 1 — BEGINNER (8 Chapters)
  // ════════════════════════════════════════

  {
    id: "introduction-to-css",
    title: "Introduction to CSS",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 1,
    content: [
      {
        type: "text", heading: "What is CSS?",
        content: "CSS stands for Cascading Style Sheets. It is the language used to style and visually design HTML documents. While HTML creates the structure of a webpage, CSS controls how it looks — colors, fonts, spacing, layout, animations, and more.\n\nWithout CSS, all websites would look like plain text documents. CSS is what makes the web beautiful!\n\nKey facts:\n• Created by Håkon Wium Lie in 1994\n• Current version: CSS3 (ongoing, with modules)\n• Files end with .css extension\n• CSS is not a programming language — it is a style sheet language\n• One CSS file can style an entire website"
      },
      {
        type: "table", heading: "HTML vs CSS — The Difference",
        content: "Aspect        | HTML                        | CSS\n--------------|-----------------------------|---------------------------\nPurpose       | Structure & content         | Style & design\nExtension     | .html                       | .css\nTags          | <h1>, <p>, <div>            | No tags, uses rules\nExample       | <p>Hello</p>                | p { color: red; }\nWithout other | Ugly plain text             | Nothing to style\nAnalogy       | Skeleton of a body          | Skin, clothes, appearance"
      },
      {
        type: "text", heading: "CSS Syntax",
        content: "A CSS rule consists of a selector and a declaration block.\n\nSyntax:\nselector {\n    property: value;\n    property: value;\n}\n\nParts explained:\n• Selector — which HTML element(s) to style (h1, p, .class, #id)\n• Property — what aspect to change (color, font-size, margin)\n• Value — what to set it to (red, 16px, 20px)\n• Declaration — one property-value pair\n• Declaration block — all declarations inside { }\n• Rule — selector + declaration block together\n\nEvery declaration ends with a semicolon (;)!\nMultiple declarations go on separate lines for readability."
      },
      {
        type: "syntax",
        code: "/* This is a CSS comment */\n\n/* Basic CSS rule structure */\nselector {\n    property: value;\n    another-property: another-value;\n}\n\n/* Real examples */\nh1 {\n    color: blue;\n    font-size: 32px;\n    text-align: center;\n}\n\np {\n    color: #333333;\n    font-size: 16px;\n    line-height: 1.6;\n    margin-bottom: 16px;\n}\n\n/* Multiple selectors - same style */\nh1, h2, h3 {\n    font-family: Arial, sans-serif;\n    color: #1a1a2e;\n}",
        language: "css", label: "CSS Syntax"
      },
      {
        type: "table", heading: "Common CSS Properties Overview",
        content: "Category      | Properties\n--------------|--------------------------------------------------\nText/Font     | color, font-size, font-family, font-weight, text-align\nSpacing       | margin, padding, line-height, letter-spacing\nBackground    | background-color, background-image, background-size\nBorder        | border, border-radius, border-color, border-width\nLayout        | display, width, height, max-width, min-height\nPosition      | position, top, left, right, bottom, z-index\nFlexbox       | display:flex, justify-content, align-items, flex-direction\nGrid          | display:grid, grid-template-columns, gap\nEffects       | box-shadow, opacity, transform, transition, animation"
      },
      {
        type: "example",
        code: "/* style.css */\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f0f4f8;\n    margin: 0;\n    padding: 20px;\n}\n\nh1 {\n    color: #1d4ed8;\n    text-align: center;\n    font-size: 36px;\n}\n\np {\n    color: #374151;\n    font-size: 16px;\n    line-height: 1.7;\n}\n\n.highlight {\n    background-color: #fef3c7;\n    padding: 10px;\n    border-radius: 8px;\n    border-left: 4px solid #f59e0b;\n}",
        output: "Applies: Arial font, light blue-gray background, centered blue heading, readable paragraph text, yellow highlighted box",
        label: "First CSS File"
      },
      {
        type: "tip",
        content: "Install the 'Prettier' extension in VS Code to auto-format your CSS! It keeps your code neat. Also install 'CSS Peek' to see CSS styles by hovering over class names in HTML."
      },
    ],
    quiz: [
      { question: "What does CSS stand for?", options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style System", "Computer Style Sheets"], answer: 1 },
      { question: "CSS is used for:", options: ["Page structure", "Database queries", "Visual styling", "Server logic"], answer: 2 },
      { question: "CSS file extension is:", options: [".style", ".cs", ".css", ".css3"], answer: 2 },
      { question: "A CSS rule consists of:", options: ["Tag and attribute", "Selector and declaration block", "Property and HTML", "Class and ID only"], answer: 1 },
      { question: "Each CSS declaration ends with:", options: [".", ":", ";", ","], answer: 2 },
      { question: "CSS comments are written as:", options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"], answer: 2 },
      { question: "Who created CSS?", options: ["Tim Berners-Lee", "Håkon Wium Lie", "Bill Gates", "Linus Torvalds"], answer: 1 },
    ],
  },

  {
    id: "types-of-css",
    title: "Types of CSS (Inline, Internal, External)",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 2,
    content: [
      {
        type: "text", heading: "Three Ways to Add CSS",
        content: "There are three ways to apply CSS to an HTML document. Each has its place, but external CSS is almost always the best choice for real projects.\n\n1. Inline CSS — style attribute directly on HTML element\n2. Internal CSS — <style> tag inside <head>\n3. External CSS — separate .css file linked with <link>\n\nThe 'Cascading' in CSS means when multiple rules apply to the same element, there is a priority order (specificity) that determines which rule wins."
      },
      {
        type: "table", heading: "Comparison of CSS Types",
        content: "Type      | Where written         | Scope          | Priority | Best for\n----------|-----------------------|----------------|----------|------------------\nInline    | style=\"\" on element  | Single element | Highest  | Quick one-off fixes\nInternal  | <style> in <head>    | Single page    | Medium   | Single-page styles\nExternal  | Separate .css file   | Entire website | Normal   | Real projects ✅"
      },
      {
        type: "syntax",
        code: "<!-- 1. INLINE CSS - directly on element -->\n<h1 style=\"color: blue; font-size: 32px; text-align: center;\">\n    Hello World\n</h1>\n<p style=\"color: red; background-color: yellow; padding: 10px;\">\n    Styled paragraph\n</p>\n\n<!-- 2. INTERNAL CSS - inside <head> -->\n<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            background-color: #f5f5f5;\n        }\n        h1 {\n            color: #1d4ed8;\n            text-align: center;\n        }\n        p {\n            color: #374151;\n            line-height: 1.6;\n        }\n    </style>\n</head>\n<body>\n    <h1>Hello World</h1>\n    <p>Styled with internal CSS</p>\n</body>\n</html>\n\n<!-- 3. EXTERNAL CSS - separate file -->\n<!-- In HTML file (index.html): -->\n<head>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n/* In CSS file (style.css): */\nbody {\n    font-family: Arial, sans-serif;\n    background: #f5f5f5;\n}\nh1 {\n    color: #1d4ed8;\n}",
        language: "html", label: "Three Types of CSS"
      },
      {
        type: "text", heading: "CSS Cascade & Priority Order",
        content: "When multiple CSS rules target the same element, the browser uses the cascade to decide which rule wins. The order of priority from HIGHEST to LOWEST:\n\n1. !important (overrides everything — use rarely!)\n2. Inline styles (style=\"...\")\n3. Internal styles (<style> in head)\n4. External styles (.css file)\n5. Browser default styles\n\nWithin the same level, SPECIFICITY decides:\n• ID selectors (#id) → highest specificity\n• Class selectors (.class) → medium\n• Element selectors (p, h1) → lowest\n\nIf same specificity, the rule that appears LATER in the code wins (last rule wins)."
      },
      {
        type: "syntax",
        code: "/* Cascade example */\nh1 {\n    color: red;    /* This rule... */\n}\n\nh1 {\n    color: blue;   /* ...is overridden by this (comes later) */\n}\n/* Result: h1 is BLUE */\n\n/* Specificity example */\np { color: black; }           /* 0,0,1 - lowest */\n.text { color: green; }       /* 0,1,0 - medium */\n#main { color: purple; }      /* 1,0,0 - highest */\n\n/* !important - overrides everything (avoid if possible) */\np {\n    color: red !important;  /* wins over everything */\n}\n\n/* Multiple CSS files - order matters! */\n<link rel=\"stylesheet\" href=\"base.css\">    /* loaded first */\n<link rel=\"stylesheet\" href=\"theme.css\">   /* overrides base */\n<link rel=\"stylesheet\" href=\"custom.css\">  /* overrides both */",
        language: "css", label: "Cascade & Priority"
      },
      {
        type: "example",
        code: "/* External file: style.css */\n\n/* Reset browser defaults */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Segoe UI', Arial, sans-serif;\n    background-color: #f8fafc;\n    color: #1e293b;\n    line-height: 1.6;\n    padding: 20px;\n}\n\n/* Header styles */\nheader {\n    background-color: #1d4ed8;\n    color: white;\n    padding: 20px 40px;\n    border-radius: 12px;\n    margin-bottom: 24px;\n}\n\nheader h1 {\n    font-size: 28px;\n    font-weight: 700;\n}\n\n/* Navigation */\nnav a {\n    color: white;\n    text-decoration: none;\n    margin-right: 20px;\n    font-size: 15px;\n}\n\nnav a:hover {\n    text-decoration: underline;\n}\n\n/* Main content */\nmain {\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n/* Cards */\n.card {\n    background: white;\n    border-radius: 12px;\n    padding: 24px;\n    margin-bottom: 20px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n    border: 1px solid #e2e8f0;\n}",
        output: "Professional-looking page with blue header, white cards, clean typography",
        label: "Professional External CSS"
      },
      {
        type: "warning",
        content: "Avoid inline CSS in real projects! It mixes structure with styling, is hard to maintain, and cannot be reused. The only exception is when you need to set dynamic values with JavaScript."
      },
    ],
    quiz: [
      { question: "Which CSS type has highest priority?", options: ["External", "Internal", "Inline", "Browser default"], answer: 2 },
      { question: "External CSS is linked with:", options: ["<style>", "<css>", "<link rel='stylesheet'>", "<script>"], answer: 2 },
      { question: "!important in CSS:", options: ["Makes text important", "Overrides all other rules", "Only works in internal CSS", "Adds animation"], answer: 1 },
      { question: "Which selector has highest specificity?", options: ["p (element)", ".class", "#id", "*"], answer: 2 },
      { question: "If two rules have same specificity, which wins?", options: ["First rule", "Last rule (comes later)", "Internal over external", "Alphabetically first"], answer: 1 },
      { question: "Why prefer external CSS?", options: ["Loads faster", "Can style entire website from one file", "Required by browsers", "Higher priority"], answer: 1 },
    ],
  },

  {
    id: "css-selectors",
    title: "Selectors",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 3,
    content: [
      {
        type: "text", heading: "What are CSS Selectors?",
        content: "CSS selectors are patterns used to select the HTML elements you want to style. Choosing the right selector is one of the most important CSS skills.\n\nSelectors can target elements by:\n• Their tag name (p, h1, div)\n• Their class attribute (.classname)\n• Their ID attribute (#idname)\n• Their relationship to other elements (parent > child)\n• Their state (hovered, clicked, focused)\n• Their attributes ([type='text'])\n• Their position (first-child, last-child)\n\nThe more specific a selector, the more control you have — but also the harder it can be to override later."
      },
      {
        type: "table", heading: "CSS Selectors Complete Reference",
        content: "Selector         | Example              | Selects\n-----------------|----------------------|----------------------------------\nElement          | p                    | All <p> elements\nClass            | .card                | Elements with class=\"card\"\nID               | #header              | Element with id=\"header\"\nUniversal        | *                    | ALL elements\nGroup            | h1, h2, h3           | All h1, h2, and h3 elements\nDescendant       | div p                | All <p> inside any <div>\nChild            | div > p              | Direct <p> children of <div>\nAdjacent sibling | h1 + p               | <p> immediately after <h1>\nGeneral sibling  | h1 ~ p               | All <p> after <h1> (same parent)\nAttribute        | input[type='text']   | Inputs with type='text'\nFirst child      | li:first-child       | First <li> in its parent\nLast child       | li:last-child        | Last <li> in its parent\nNth child        | li:nth-child(2)      | Second <li>\nNth child odd    | li:nth-child(odd)    | Odd-numbered items\nNth child even   | li:nth-child(even)   | Even-numbered items\nHover            | button:hover         | Button when mouse is over it\nFocus            | input:focus          | Input when it has focus\nActive           | button:active        | Button while being clicked\nNot              | p:not(.special)      | All <p> except .special\nFirst letter     | p::first-letter      | First letter of paragraph\nFirst line       | p::first-line        | First line of paragraph\nBefore           | p::before            | Insert content before <p>\nAfter            | p::after             | Insert content after <p>"
      },
      {
        type: "syntax",
        code: "/* Element selector */\nh1 { color: blue; }\np  { font-size: 16px; }\n\n/* Class selector (reusable) */\n.btn { padding: 10px 20px; border-radius: 8px; }\n.btn-primary { background: #3b82f6; color: white; }\n.btn-danger  { background: #ef4444; color: white; }\n\n/* ID selector (unique, use once) */\n#navbar { background: #1e293b; position: sticky; top: 0; }\n#hero   { min-height: 100vh; }\n\n/* Universal selector */\n* { box-sizing: border-box; margin: 0; padding: 0; }\n\n/* Group selector */\nh1, h2, h3, h4 {\n    font-family: 'Georgia', serif;\n    color: #1a1a2e;\n}\n\n/* Descendant vs Child */\ndiv p   { color: red; }    /* ALL p inside div (any depth) */\ndiv > p { color: blue; }   /* Only DIRECT p children of div */\n\n/* Attribute selectors */\ninput[type='email']    { border-color: #3b82f6; }\na[href^='https']       { color: green; }  /* starts with https */\na[href$='.pdf']        { color: red; }    /* ends with .pdf */\na[href*='codehub']     { font-weight: bold; } /* contains codehub */",
        language: "css", label: "Basic Selectors"
      },
      {
        type: "syntax",
        code: "/* Pseudo-classes (:) — element states */\na:hover  { color: #f59e0b; text-decoration: underline; }\na:visited { color: purple; }\na:active  { color: red; }\ninput:focus { outline: 2px solid #3b82f6; border-color: #3b82f6; }\n\n/* Structural pseudo-classes */\nli:first-child  { font-weight: bold; }\nli:last-child   { border-bottom: none; }\nli:nth-child(2) { color: blue; }\ntr:nth-child(even) { background: #f9fafb; }  /* zebra stripes! */\ntr:nth-child(odd)  { background: white; }\n\np:not(.special) { color: gray; }   /* all p EXCEPT .special */\ninput:not([type='submit']) { border: 1px solid #ccc; }\n\n/* Pseudo-elements (::) — style parts of element */\np::first-letter {\n    font-size: 3em;\n    float: left;\n    color: #3b82f6;\n    font-weight: bold;\n}\n\n/* ::before and ::after — insert content */\n.required-field::after {\n    content: ' *';\n    color: red;\n}\n\n.quote::before { content: '\"'; color: gray; }\n.quote::after  { content: '\"'; color: gray; }",
        language: "css", label: "Pseudo-classes & Pseudo-elements"
      },
      {
        type: "example",
        code: "/* Practical selector examples */\n\n/* Navigation menu */\nnav ul {\n    list-style: none;\n    display: flex;\n    gap: 20px;\n    padding: 0;\n}\n\nnav ul li a {\n    color: white;\n    text-decoration: none;\n    padding: 8px 16px;\n    border-radius: 6px;\n    transition: background 0.2s;\n}\n\nnav ul li a:hover {\n    background: rgba(255,255,255,0.2);\n}\n\nnav ul li a.active {\n    background: #3b82f6;\n    font-weight: 600;\n}\n\n/* Table with zebra striping */\ntable { border-collapse: collapse; width: 100%; }\nth { background: #1d4ed8; color: white; padding: 12px; }\ntd { padding: 10px 12px; border-bottom: 1px solid #e5e7eb; }\ntr:nth-child(even) td { background: #f8fafc; }\ntr:hover td { background: #eff6ff; }\n\n/* Form styling */\ninput[type='text'],\ninput[type='email'],\ntextarea {\n    width: 100%;\n    padding: 10px 14px;\n    border: 2px solid #e2e8f0;\n    border-radius: 8px;\n    font-size: 15px;\n    transition: border-color 0.2s;\n}\n\ninput:focus, textarea:focus {\n    border-color: #3b82f6;\n    outline: none;\n    box-shadow: 0 0 0 3px rgba(59,130,246,0.15);\n}",
        output: "Styled navigation, zebra-striped table, and beautiful form inputs with focus effects",
        label: "Practical Selectors"
      },
    ],
    quiz: [
      { question: ".card selects elements with:", options: ["id='card'", "class='card'", "tag name card", "name='card'"], answer: 1 },
      { question: "#header selects:", options: ["All headers", "class='header'", "id='header' (unique)", "tag <header>"], answer: 2 },
      { question: "div > p selects:", options: ["All p inside div", "Only direct p children of div", "First p in div", "p after div"], answer: 1 },
      { question: "Which selects every other row (even)?", options: ["tr:even", "tr:nth-child(even)", "tr:2n", "tr.even"], answer: 1 },
      { question: "a:hover applies when:", options: ["Link is visited", "Mouse hovers over link", "Link is clicked", "Page loads"], answer: 1 },
      { question: "::before pseudo-element:", options: ["Selects first child", "Inserts content before element", "Styles first letter", "Targets previous sibling"], answer: 1 },
      { question: "p:not(.special) selects:", options: ["Only .special paragraphs", "All paragraphs including .special", "All p except .special", "Paragraphs with no class"], answer: 2 },
    ],
  },

  {
    id: "colors-backgrounds",
    title: "Colors & Backgrounds",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 4,
    content: [
      {
        type: "text", heading: "CSS Color Values",
        content: "CSS supports many ways to specify colors. Each has its use case — choose based on what works best for your situation.\n\n1. Named colors — 140+ named colors: red, blue, coral, tomato, etc.\n2. HEX — #RRGGBB (most common in web dev)\n3. RGB — rgb(red, green, blue) — values 0-255\n4. RGBA — rgb + alpha (opacity): rgba(255, 0, 0, 0.5)\n5. HSL — hue, saturation, lightness\n6. HSLA — HSL + alpha\n7. currentColor — inherits the element's text color\n8. transparent — fully transparent\n\nHEX codes explained:\n#FF0000 = Red (FF=255, 00=0, 00=0)\n#00FF00 = Green\n#0000FF = Blue\n#000000 = Black\n#FFFFFF = White\n#3B82F6 = Nice blue (used by Tailwind CSS!)\nShorthand: #FFF = #FFFFFF, #000 = #000000"
      },
      {
        type: "table", heading: "Color Format Comparison",
        content: "Format    | Example              | Alpha? | Best for\n----------|----------------------|--------|---------------------------\nNamed     | color: red           | No     | Quick prototyping\nHEX       | color: #3b82f6       | No*    | Most common, design tools\nHEX+Alpha | color: #3b82f680     | Yes    | HEX with transparency\nRGB       | rgb(59, 130, 246)    | No     | When you know RGB values\nRGBA      | rgba(59,130,246,0.5) | Yes    | Transparent overlays\nHSL       | hsl(217, 91%, 60%)   | No     | Easy to adjust brightness\nHSLA      | hsla(217,91%,60%,.5) | Yes    | Transparent HSL colors\n\n*Alpha in HEX: #RRGGBBAA (last 2 digits = opacity)"
      },
      {
        type: "syntax",
        code: "/* Color properties */\nh1 { color: #1d4ed8; }              /* text color */\ndiv { background-color: #f0f9ff; }  /* background color */\n\n/* Color formats */\n.box1 { color: tomato; }             /* named */\n.box2 { color: #ef4444; }            /* HEX */\n.box3 { color: rgb(239, 68, 68); }   /* RGB */\n.box4 { color: rgba(239,68,68,0.7);} /* RGBA - 70% opacity */\n.box5 { color: hsl(0, 84%, 60%); }   /* HSL */\n\n/* Opacity vs RGBA */\n/* opacity affects the WHOLE element including children */\n.overlay { opacity: 0.5; }\n\n/* rgba only affects the specific property's color */\n.overlay { background: rgba(0, 0, 0, 0.5); } /* better! */\n\n/* CSS Custom Properties (variables) for colors */\n:root {\n    --primary: #3b82f6;\n    --primary-dark: #1d4ed8;\n    --secondary: #10b981;\n    --danger: #ef4444;\n    --text: #1e293b;\n    --bg: #f8fafc;\n}\n\nbody { background: var(--bg); color: var(--text); }\n.btn-primary { background: var(--primary); }\n.btn-primary:hover { background: var(--primary-dark); }",
        language: "css", label: "Color Values"
      },
      {
        type: "text", heading: "CSS Backgrounds",
        content: "CSS provides many powerful background properties to control how backgrounds look.\n\nKey background properties:\n• background-color — solid color\n• background-image — image or gradient\n• background-size — cover, contain, or specific size\n• background-position — center, top, left, etc.\n• background-repeat — repeat, no-repeat, repeat-x\n• background-attachment — scroll or fixed (parallax!)\n• background-clip — where background shows (border-box, content-box, text)\n• background — shorthand for all above\n\nCSS Gradients:\n• linear-gradient() — gradual change in a line\n• radial-gradient() — circular gradient from center\n• conic-gradient() — like a color wheel"
      },
      {
        type: "syntax",
        code: "/* Background color */\nbody { background-color: #f8fafc; }\n.hero { background-color: #1d4ed8; }\n\n/* Background image */\n.banner {\n    background-image: url('hero.jpg');\n    background-size: cover;       /* fill the entire box */\n    background-position: center;  /* center the image */\n    background-repeat: no-repeat;\n    height: 400px;\n}\n\n/* Linear gradients */\n.gradient-1 {\n    background: linear-gradient(to right, #667eea, #764ba2);\n}\n.gradient-2 {\n    background: linear-gradient(135deg, #f093fb, #f5576c);\n}\n.gradient-3 {\n    background: linear-gradient(\n        to bottom,\n        rgba(0,0,0,0),    /* transparent */\n        rgba(0,0,0,0.7)   /* semi-transparent black */\n    );\n}\n\n/* Radial gradient */\n.spotlight {\n    background: radial-gradient(circle, #fff 0%, #3b82f6 100%);\n}\n\n/* Multiple backgrounds */\n.multi-bg {\n    background:\n        url('dots.png') repeat,           /* layer 1 */\n        linear-gradient(#fff, #e5e7eb);   /* layer 2 (behind) */\n}\n\n/* Background shorthand */\n.hero {\n    background: url('photo.jpg') center/cover no-repeat #3b82f6;\n    /* image position/size repeat fallback-color */\n}",
        language: "css", label: "Background Properties"
      },
      {
        type: "example",
        code: "/* Practical color & background examples */\n\n/* Dark overlay on image */\n.hero {\n    position: relative;\n    background: url('bg.jpg') center/cover no-repeat;\n    min-height: 500px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.hero::before {\n    content: '';\n    position: absolute;\n    inset: 0;  /* top:0; right:0; bottom:0; left:0 */\n    background: rgba(0, 0, 0, 0.55);\n}\n\n.hero h1 {\n    position: relative;\n    color: white;\n    z-index: 1;\n}\n\n/* Gradient buttons */\n.btn-gradient {\n    background: linear-gradient(135deg, #667eea, #764ba2);\n    color: white;\n    padding: 12px 28px;\n    border: none;\n    border-radius: 50px;\n    cursor: pointer;\n    transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.btn-gradient:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);\n}\n\n/* Card with subtle gradient background */\n.card {\n    background: linear-gradient(145deg, #ffffff, #f0f4f8);\n    border: 1px solid #e2e8f0;\n    border-radius: 16px;\n    padding: 24px;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.05);\n}",
        output: "Hero section with dark overlay, gradient button with hover lift, soft gradient card",
        label: "Backgrounds in Practice"
      },
      {
        type: "tip",
        content: "Use CSS custom properties (variables) for your color palette! Define all colors in :root { --primary: #3b82f6; } and use var(--primary) everywhere. When you need to change the color, you update it in ONE place and it updates everywhere!"
      },
    ],
    quiz: [
      { question: "#FF0000 is which color?", options: ["Blue", "Green", "Red", "White"], answer: 2 },
      { question: "rgba(0,0,0,0.5) is:", options: ["Solid black", "50% transparent black", "White", "Gray"], answer: 1 },
      { question: "background-size: cover does what?", options: ["Tiles image", "Scales image to fill box, may crop", "Shrinks image", "Repeats image"], answer: 1 },
      { question: "CSS variables are defined in:", options: ["body { }", ":root { }", "html { }", "* { }"], answer: 1 },
      { question: "linear-gradient(to right, red, blue) creates:", options: ["Top to bottom", "Left to right", "Diagonal", "Circular"], answer: 1 },
      { question: "opacity: 0.5 vs rgba color:", options: ["Same effect", "opacity affects whole element, rgba only the color", "rgba affects whole element", "No difference"], answer: 1 },
    ],
  },

  {
    id: "fonts-text-styling",
    title: "Fonts & Text Styling",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 5,
    content: [
      {
        type: "text", heading: "CSS Typography",
        content: "Typography is one of the most important aspects of web design. Good typography makes content readable, attractive, and professional.\n\nCSS provides extensive control over text appearance:\n• Font family — which typeface to use\n• Font size — how big the text is\n• Font weight — how bold/thin\n• Font style — normal, italic\n• Line height — space between lines\n• Letter spacing — space between characters\n• Word spacing — space between words\n• Text alignment — left, center, right, justify\n• Text decoration — underline, strikethrough\n• Text transform — uppercase, lowercase, capitalize\n• Text shadow — drop shadow on text"
      },
      {
        type: "table", heading: "Font Properties Reference",
        content: "Property         | Values                              | Example\n-----------------|-------------------------------------|---------------------------\nfont-family      | font name, fallbacks                | 'Roboto', Arial, sans-serif\nfont-size        | px, rem, em, %                      | 16px, 1rem, 1.2em\nfont-weight      | 100-900, bold, normal               | 700 or bold\nfont-style       | normal, italic, oblique             | italic\nfont-variant     | normal, small-caps                  | small-caps\nline-height      | number, px, %                       | 1.6, 24px\nletter-spacing   | px, em                              | 0.5px, 0.05em\nword-spacing     | px, em                              | 4px\ntext-align       | left, center, right, justify        | center\ntext-decoration  | none, underline, line-through       | underline\ntext-transform   | uppercase, lowercase, capitalize    | uppercase\ntext-shadow      | x y blur color                      | 2px 2px 4px rgba(0,0,0,.3)\ntext-overflow    | clip, ellipsis                      | ellipsis\nwhite-space      | normal, nowrap, pre                 | nowrap\nword-break       | normal, break-all, break-word       | break-word\nfont             | shorthand for all font properties   | bold 16px/1.5 Arial"
      },
      {
        type: "syntax",
        code: "/* Font Family - always provide fallbacks! */\nbody {\n    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;\n    /* primary font, fallback 1, fallback 2, generic family */\n}\n\nh1 { font-family: 'Georgia', 'Times New Roman', serif; }\ncode { font-family: 'Fira Code', 'Courier New', monospace; }\n\n/* Font Size - prefer rem over px for accessibility */\nhtml { font-size: 16px; }  /* base size (1rem = 16px) */\nh1 { font-size: 2.5rem; }  /* 40px */\nh2 { font-size: 2rem; }    /* 32px */\np  { font-size: 1rem; }    /* 16px */\nsmall { font-size: 0.875rem; } /* 14px */\n\n/* Font Weight: 100=thin, 400=normal, 700=bold, 900=black */\n.thin     { font-weight: 300; }\n.normal   { font-weight: 400; }\n.semibold { font-weight: 600; }\n.bold     { font-weight: 700; }\n.black    { font-weight: 900; }\n\n/* Line height - unitless is best practice */\nbody { line-height: 1.6; }     /* 1.6x the font-size */\n.heading { line-height: 1.2; } /* tighter for headings */\n.body-text { line-height: 1.8; } /* looser for readability */",
        language: "css", label: "Font Properties"
      },
      {
        type: "text", heading: "Google Fonts",
        content: "Google Fonts is a free library of 1500+ web fonts. Using custom fonts makes your website look much more professional than default system fonts.\n\nHow to use Google Fonts:\nStep 1: Go to fonts.google.com\nStep 2: Pick a font (e.g. 'Inter', 'Roboto', 'Poppins')\nStep 3: Select the weights you need\nStep 4: Copy the <link> tag and add it to your HTML <head>\nStep 5: Use the font-family in your CSS\n\nPopular Google Fonts for web projects:\n• Inter — Modern, clean, very readable\n• Roboto — Google's own font (Android)\n• Poppins — Geometric, friendly look\n• Montserrat — Bold headings\n• Lato — Elegant, humanist\n• Open Sans — Universal readability"
      },
      {
        type: "syntax",
        code: "<!-- In HTML <head> -->\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap\" rel=\"stylesheet\">\n\n/* In CSS */\nbody {\n    font-family: 'Inter', sans-serif;\n    font-weight: 400;\n}\n\nh1, h2, h3 {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n}\n\n/* Text effects */\n.uppercase  { text-transform: uppercase; letter-spacing: 0.1em; }\n.capitalize { text-transform: capitalize; }\n\n/* Text shadow */\n.hero-title {\n    font-size: 4rem;\n    font-weight: 900;\n    text-shadow: 2px 2px 8px rgba(0,0,0,0.3);\n}\n\n/* Text overflow with ellipsis (...) */\n.truncate {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;  /* shows ... when text overflows */\n    max-width: 200px;\n}",
        language: "css", label: "Google Fonts & Text Effects"
      },
      {
        type: "example",
        code: "/* Beautiful typography system */\n\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500&display=swap');\n\n:root {\n    --font-heading: 'Poppins', sans-serif;\n    --font-body: 'Inter', sans-serif;\n    --text-primary: #0f172a;\n    --text-secondary: #64748b;\n    --text-muted: #94a3b8;\n}\n\nbody {\n    font-family: var(--font-body);\n    font-size: 16px;\n    line-height: 1.6;\n    color: var(--text-primary);\n}\n\nh1 {\n    font-family: var(--font-heading);\n    font-size: clamp(2rem, 5vw, 4rem);  /* responsive! */\n    font-weight: 700;\n    line-height: 1.2;\n    letter-spacing: -0.02em;\n}\n\nh2 {\n    font-family: var(--font-heading);\n    font-size: clamp(1.5rem, 3vw, 2.5rem);\n    font-weight: 600;\n    line-height: 1.3;\n}\n\n.subtitle {\n    font-size: 1.125rem;\n    color: var(--text-secondary);\n    line-height: 1.7;\n    max-width: 600px;\n}\n\n.overline {\n    font-size: 0.75rem;\n    font-weight: 600;\n    letter-spacing: 0.15em;\n    text-transform: uppercase;\n    color: var(--text-muted);\n}\n\n.link {\n    color: #3b82f6;\n    text-decoration: none;\n    border-bottom: 2px solid transparent;\n    transition: border-color 0.2s;\n}\n\n.link:hover {\n    border-bottom-color: #3b82f6;\n}",
        output: "Professional typography with Poppins headings, Inter body, responsive font sizes, and subtle link hover effect",
        label: "Typography System"
      },
      {
        type: "tip",
        content: "Use 'clamp()' for responsive font sizes: font-size: clamp(1.5rem, 4vw, 3rem). This means minimum 1.5rem, maximum 3rem, preferred 4% of viewport width — font automatically scales with screen size!"
      },
    ],
    quiz: [
      { question: "font-weight: 700 is equivalent to:", options: ["normal", "bold", "bolder", "thin"], answer: 1 },
      { question: "line-height: 1.6 means:", options: ["1.6 pixels", "160% of font-size", "16px", "1.6em fixed"], answer: 1 },
      { question: "text-overflow: ellipsis shows:", options: ["Nothing", "... when text overflows", "Scrollbar", "Hides overflow"], answer: 1 },
      { question: "rem units are relative to:", options: ["Parent element font-size", "Root HTML element font-size", "Viewport width", "Screen resolution"], answer: 1 },
      { question: "Google Fonts is:", options: ["Paid service", "Free web font library", "Built into browsers", "Only for headings"], answer: 1 },
      { question: "font-family fallback is used when:", options: ["Page loads slowly", "Primary font fails to load", "Screen is too small", "User disables CSS"], answer: 1 },
    ],
  },

  {
    id: "box-model",
    title: "Box Model",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 6,
    content: [
      {
        type: "text", heading: "The CSS Box Model",
        content: "The CSS Box Model is one of the most fundamental concepts in CSS. Every HTML element is treated as a rectangular box, consisting of four layers from inside to outside:\n\n1. Content — the actual text, image, or content\n2. Padding — transparent space INSIDE the border (between content and border)\n3. Border — a line surrounding the padding and content\n4. Margin — transparent space OUTSIDE the border (between elements)\n\nUnderstanding the box model is essential for controlling layout and spacing. It determines how much space an element takes up on the page.\n\nVisualized (from inside to outside):\n┌─────────────────────────────┐  ← Margin (outside)\n│  ┌───────────────────────┐  │  ← Border\n│  │  ┌─────────────────┐  │  │  ← Padding\n│  │  │    CONTENT      │  │  │\n│  │  └─────────────────┘  │  │\n│  └───────────────────────┘  │\n└─────────────────────────────┘"
      },
      {
        type: "table", heading: "Box Model Properties",
        content: "Layer    | Properties                                  | Notes\n---------|---------------------------------------------|---------------------------\nContent  | width, height                               | actual content dimensions\nPadding  | padding, padding-top/right/bottom/left      | transparent, shows bg color\nBorder   | border, border-width/style/color            | visible outline\nMargin   | margin, margin-top/right/bottom/left        | transparent, no bg color\n\nShorthand padding/margin values:\n1 value:  padding: 20px          → all 4 sides = 20px\n2 values: padding: 10px 20px     → top+bottom=10px, left+right=20px\n3 values: padding: 10px 20px 30px → top=10, sides=20, bottom=30\n4 values: padding: 5px 10px 15px 20px → top right bottom left (clockwise)"
      },
      {
        type: "syntax",
        code: "/* Box model properties */\n.box {\n    /* Content */\n    width: 300px;\n    height: 150px;\n\n    /* Padding (inside border) */\n    padding: 20px;              /* all sides */\n    padding: 10px 20px;         /* top-bottom left-right */\n    padding: 10px 20px 15px 25px; /* top right bottom left */\n    padding-top: 10px;\n    padding-right: 20px;\n    padding-bottom: 10px;\n    padding-left: 20px;\n\n    /* Border */\n    border: 2px solid #3b82f6;  /* width style color */\n    border-radius: 8px;         /* rounded corners */\n\n    /* Margin (outside border) */\n    margin: 20px;               /* all sides */\n    margin: 0 auto;             /* center horizontally! */\n    margin-top: 20px;\n    margin-bottom: 20px;\n\n    /* Background (fills content + padding area) */\n    background-color: #eff6ff;\n}",
        language: "css", label: "Box Model Properties"
      },
      {
        type: "text", heading: "box-sizing: border-box",
        content: "By default, CSS uses content-box sizing, which means width and height only apply to the content area. Padding and border are ADDED on top.\n\nExample with content-box (default):\n.box { width: 300px; padding: 20px; border: 2px solid; }\nActual width = 300 + 20+20 (padding) + 2+2 (border) = 344px\n\nThis is confusing! When you set width: 300px, you get 344px.\n\nWith box-sizing: border-box:\n.box { box-sizing: border-box; width: 300px; padding: 20px; border: 2px solid; }\nActual width = 300px (padding and border are INCLUDED in 300px)\n\nThis is what you almost always want! That's why developers add this at the top of every CSS file:\n\n* {\n    box-sizing: border-box;\n}"
      },
      {
        type: "syntax",
        code: "/* THE MOST IMPORTANT CSS RESET */\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n/* Now width always means TOTAL width including padding and border */\n\n.card {\n    width: 300px;\n    padding: 24px;       /* included in 300px */\n    border: 1px solid #e2e8f0; /* included in 300px */\n    border-radius: 12px;\n    background: white;\n}\n\n/* Center an element horizontally */\n.container {\n    max-width: 1200px;\n    margin: 0 auto;      /* auto left and right margin = center */\n    padding: 0 20px;     /* prevent content touching screen edges */\n}\n\n/* The 'outline' property is outside the border but doesn't affect layout */\n.btn:focus {\n    outline: 2px solid #3b82f6;\n    outline-offset: 2px;  /* space between element and outline */\n}",
        language: "css", label: "box-sizing & Reset"
      },
      {
        type: "example",
        code: "/* Practical box model example */\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Inter', sans-serif;\n    background: #f1f5f9;\n    padding: 40px 20px;\n}\n\n.container {\n    max-width: 900px;\n    margin: 0 auto;\n}\n\n.card {\n    background: white;\n    border: 1px solid #e2e8f0;\n    border-radius: 16px;\n    padding: 32px;       /* inner spacing */\n    margin-bottom: 24px; /* outer spacing between cards */\n    box-shadow: 0 1px 3px rgba(0,0,0,0.08);\n}\n\n.card h2 {\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #0f172a;\n    margin-bottom: 12px;  /* space below heading */\n    padding-bottom: 12px; /* space before border line */\n    border-bottom: 2px solid #f1f5f9;\n}\n\n.card p {\n    color: #64748b;\n    line-height: 1.7;\n    margin-bottom: 16px;\n}\n\n.card p:last-child {\n    margin-bottom: 0;  /* remove last item's bottom margin */\n}",
        output: "Clean card layout with proper spacing, borders, and rounded corners",
        label: "Card Layout with Box Model"
      },
      {
        type: "warning",
        content: "margin: 0 auto only centers BLOCK elements with a defined width. It won't work on inline elements. Also, vertical margins (top/bottom) between adjacent elements COLLAPSE — the larger margin wins instead of adding together. This is called 'margin collapsing'."
      },
    ],
    quiz: [
      { question: "From inside to outside, box model order is:", options: ["margin > border > padding > content", "content > padding > border > margin", "border > content > margin > padding", "padding > content > border > margin"], answer: 1 },
      { question: "padding: 10px 20px sets:", options: ["top=10, right=20", "all=10px then 20px", "top+bottom=10, left+right=20", "left=10, right=20"], answer: 2 },
      { question: "box-sizing: border-box means:", options: ["Width includes content only", "Width includes content+padding+border", "Width ignores all spacing", "Border is outside box"], answer: 1 },
      { question: "margin: 0 auto centers the element:", options: ["Vertically", "Horizontally (needs width)", "Both directions", "Only in flexbox"], answer: 1 },
      { question: "Padding background shows:", options: ["No color (transparent)", "The element's background color", "White always", "Parent's color"], answer: 1 },
      { question: "margin vs padding difference:", options: ["Same thing", "margin is outside border, padding is inside", "padding is outside, margin is inside", "No difference"], answer: 1 },
    ],
  },

  {
    id: "margin-padding-border",
    title: "Margin, Padding & Border",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 7,
    content: [
      {
        type: "text", heading: "Margin — Space Outside",
        content: "Margin creates invisible space OUTSIDE the element's border. It pushes other elements away. Margin is always transparent — it never shows a background color.\n\nKey margin behaviors:\n• margin: auto — centers block elements horizontally\n• Negative margins — pull elements closer or overlap\n• Margin collapsing — vertical margins between adjacent elements collapse (only the larger one applies, they don't add up)\n• margin: 0 auto — the classic centering trick for containers\n\nMargin collapsing example:\n<p style='margin-bottom: 30px'>Para 1</p>\n<p style='margin-top: 20px'>Para 2</p>\nGap between them = 30px (NOT 50px!) — larger margin wins"
      },
      {
        type: "syntax",
        code: "/* Margin examples */\n.element {\n    margin: 20px;           /* all 4 sides */\n    margin: 10px 20px;      /* TB=10, LR=20 */\n    margin: 5px 10px 15px 20px; /* T R B L */\n}\n\n/* Individual sides */\n.element {\n    margin-top: 20px;\n    margin-right: 15px;\n    margin-bottom: 20px;\n    margin-left: 15px;\n}\n\n/* Centering a block element */\n.container {\n    width: 800px;\n    margin: 0 auto;    /* 0 top/bottom, auto left/right */\n}\n\n/* Negative margin */\n.overlap {\n    margin-top: -20px;  /* moves element 20px UP */\n}\n\n/* Remove default margins */\nh1, h2, h3, p, ul {\n    margin: 0;\n}\n\n/* Space between items in a list */\n.menu-item {\n    margin-bottom: 8px;\n}\n.menu-item:last-child {\n    margin-bottom: 0;  /* no margin on last item */\n}",
        language: "css", label: "Margin"
      },
      {
        type: "text", heading: "Padding — Space Inside",
        content: "Padding creates space INSIDE the element between the content and the border. Unlike margin, padding shows the element's background color.\n\nUse padding for:\n• Adding breathing room inside buttons and cards\n• Making clickable areas larger (touch targets)\n• Creating space inside form inputs\n• Adding space inside navigation links\n\nPadding never collapses (unlike margin). It always adds up.\n\nPractical tip: Always add padding to the container so content doesn't touch the edges, and add padding to buttons so the text has comfortable space around it."
      },
      {
        type: "text", heading: "Border — Element Outline",
        content: "Borders draw a line around elements. The border shorthand takes three values: width, style, color.\n\nborder: width style color;\nborder: 2px solid #3b82f6;\n\nBorder styles:\n• solid — solid line (most common)\n• dashed — dashed line\n• dotted — dotted line\n• double — double line\n• none — no border\n• hidden — same as none but different in tables\n\nBorder can be set per-side:\n• border-top, border-right, border-bottom, border-left\n\nBorder-radius creates rounded corners:\n• border-radius: 8px — slightly rounded\n• border-radius: 50% — perfect circle (on square element)\n• border-radius: 50px — pill shape on wide element"
      },
      {
        type: "syntax",
        code: "/* Border shorthand */\n.box {\n    border: 2px solid #3b82f6;\n    border: 1px dashed #94a3b8;\n    border: 3px double #ef4444;\n}\n\n/* Individual border sides */\n.card {\n    border: 1px solid #e2e8f0;  /* all sides */\n    border-top: 4px solid #3b82f6;  /* accent top border */\n}\n\n.note {\n    border: none;  /* no border */\n    border-left: 4px solid #f59e0b;  /* left accent only */\n    padding-left: 16px;\n    background: #fffbeb;\n}\n\n/* Border radius */\n.btn    { border-radius: 8px; }     /* slightly rounded */\n.pill   { border-radius: 50px; }    /* pill shape */\n.circle { border-radius: 50%; }     /* perfect circle */\n.card   { border-radius: 16px; }    /* modern card */\n\n/* Individual corners */\n.custom {\n    border-radius: 8px 16px 8px 16px;  /* TL TR BR BL */\n}\n\n/* Outline - like border but outside, doesn't affect layout */\n.focus-ring:focus {\n    outline: 2px solid #3b82f6;\n    outline-offset: 3px;\n    border-radius: 4px;\n}",
        language: "css", label: "Border Properties"
      },
      {
        type: "example",
        code: "/* Complete button styles using margin, padding, border */\n\n/* Reset */\n* { box-sizing: border-box; }\n\n/* Base button */\n.btn {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    padding: 10px 20px;      /* inner spacing */\n    font-size: 15px;\n    font-weight: 500;\n    font-family: inherit;\n    border-radius: 8px;\n    border: 2px solid transparent;\n    cursor: pointer;\n    transition: all 0.2s;\n    text-decoration: none;\n}\n\n/* Primary button */\n.btn-primary {\n    background: #3b82f6;\n    color: white;\n    border-color: #3b82f6;\n}\n.btn-primary:hover {\n    background: #2563eb;\n    border-color: #2563eb;\n    transform: translateY(-1px);\n}\n\n/* Outlined button */\n.btn-outline {\n    background: transparent;\n    color: #3b82f6;\n    border-color: #3b82f6;\n}\n.btn-outline:hover {\n    background: #eff6ff;\n}\n\n/* Button sizes */\n.btn-sm { padding: 6px 14px; font-size: 13px; }\n.btn-lg { padding: 14px 28px; font-size: 17px; }\n\n/* Card with accent border */\n.feature-card {\n    background: white;\n    border: 1px solid #e2e8f0;\n    border-top: 4px solid #3b82f6;  /* colored accent */\n    border-radius: 0 0 12px 12px;   /* round only bottom */\n    padding: 24px;\n    margin-bottom: 20px;\n}\n\n/* Notification/Alert box */\n.alert-info {\n    background: #eff6ff;\n    border: 1px solid #bfdbfe;\n    border-left: 4px solid #3b82f6;\n    border-radius: 8px;\n    padding: 16px 20px;\n    margin: 16px 0;\n    color: #1d4ed8;\n}",
        output: "Complete button system with primary and outlined variants, sizes, and styled alert box",
        label: "Buttons & Cards"
      },
    ],
    quiz: [
      { question: "Margin is space:", options: ["Inside the border", "Outside the border", "Between content and border", "Around text only"], answer: 1 },
      { question: "border-radius: 50% on a square creates:", options: ["Rounded rectangle", "Oval", "Perfect circle", "Diamond"], answer: 2 },
      { question: "margin collapsing means:", options: ["Margins are hidden", "Adjacent vertical margins add up", "Larger adjacent vertical margin wins (not added)", "Horizontal margins collapse"], answer: 2 },
      { question: "border shorthand order:", options: ["color style width", "style width color", "width style color", "color width style"], answer: 2 },
      { question: "Padding background is:", options: ["Always transparent", "The element's background color", "Always white", "Parent's color"], answer: 1 },
      { question: "outline differs from border because:", options: ["Outline has no color", "Outline doesn't affect layout", "Border is invisible", "They're identical"], answer: 1 },
    ],
  },

  {
    id: "display-property",
    title: "Display Property",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 8,
    content: [
      {
        type: "text", heading: "The display Property",
        content: "The display property is one of the most important CSS properties. It determines how an element is rendered in the document flow — whether it takes a full row, sits inline with text, or participates in a flex/grid layout.\n\nEvery HTML element has a default display value:\n• Block elements — take full width, start on new line: div, h1-h6, p, ul, li, section, article, header, footer\n• Inline elements — sit inline with text, only as wide as content: span, a, strong, em, img, button, input\n• Inline-block — hybrid: sits in line like inline, but can have width/height like block"
      },
      {
        type: "table", heading: "display Values",
        content: "Value          | Behavior                                    | Use case\n---------------|---------------------------------------------|---------------------------\nnone           | Hides element completely (no space)         | Hide/show with JavaScript\nblock          | Full width, new line, can set width/height  | Containers, headings\ninline         | Text flow, NO width/height/top-bottom margin| Links, spans in text\ninline-block   | Inline but CAN have width/height/margin     | Buttons, badges, nav items\nflex           | Flexbox container                           | 1D layouts (rows or cols)\ninline-flex    | Inline flexbox container                    | Inline flex containers\ngrid           | CSS Grid container                          | 2D layouts\ninline-grid    | Inline grid container                       | Inline grids\ntable          | Like HTML table                             | Rarely needed\ncontents       | Element itself disappears, children remain  | Semantic wrappers\n\nvisibility: hidden → hides but keeps space\ndisplay: none → hides AND removes from flow"
      },
      {
        type: "syntax",
        code: "/* Block vs Inline examples */\n\n/* Default: block elements take full width */\ndiv, p, h1 { display: block; }\n\n/* Default: inline elements sit in text flow */\nspan, a, strong { display: inline; }\n\n/* inline-block: inline position + block sizing */\n.badge {\n    display: inline-block;\n    padding: 4px 10px;       /* padding works! (not on inline) */\n    border-radius: 50px;\n    font-size: 12px;\n    background: #dbeafe;\n    color: #1d4ed8;\n    font-weight: 600;\n}\n\n/* Navigation items side by side */\nnav a {\n    display: inline-block;\n    padding: 8px 16px;       /* vertical padding works! */\n    color: white;\n    text-decoration: none;\n}\n\n/* Hide and show */\n.hidden { display: none; }          /* completely removed */\n.invisible { visibility: hidden; }  /* hidden but keeps space */\n\n/* Make block element inline */\n.inline-list li {\n    display: inline;       /* list items side by side */\n    margin-right: 16px;\n}\n\n/* Make inline element block */\na.block-link {\n    display: block;\n    width: 100%;           /* now can set width */\n    padding: 12px;\n}",
        language: "css", label: "display Values"
      },
      {
        type: "text", heading: "display: flex and display: grid",
        content: "display: flex and display: grid are the two modern layout systems in CSS. They are covered in depth in Level 2, but here's a quick intro:\n\ndisplay: flex — makes element a flex container\n• Its children become flex items\n• Arrange items in a row or column\n• Easy centering, equal spacing\n• Best for 1D layouts (single row or column)\n\ndisplay: grid — makes element a grid container\n• Its children become grid items\n• Define rows AND columns with template\n• Best for 2D layouts (rows AND columns)\n\nBoth are covered extensively in the Intermediate level chapters."
      },
      {
        type: "syntax",
        code: "/* Quick flexbox preview */\n.navbar {\n    display: flex;\n    justify-content: space-between;  /* spread items */\n    align-items: center;             /* vertical center */\n    padding: 0 24px;\n    height: 64px;\n    background: #1e293b;\n}\n\n/* Quick grid preview */\n.card-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */\n    gap: 24px;\n}\n\n/* Centering anything perfectly with flex */\n.center-everything {\n    display: flex;\n    justify-content: center;  /* horizontal center */\n    align-items: center;      /* vertical center */\n    min-height: 100vh;        /* full screen height */\n}\n\n/* Display none with transition (smooth hide) */\n.dropdown {\n    display: none;\n    opacity: 0;\n    transition: opacity 0.2s;\n}\n\n.parent:hover .dropdown {\n    display: block;\n    opacity: 1;\n}",
        language: "css", label: "Flex & Grid Preview"
      },
      {
        type: "example",
        code: "/* Complete display property demo */\n\n* { box-sizing: border-box; margin: 0; padding: 0; }\nbody { font-family: Arial; padding: 20px; background: #f8fafc; }\n\n/* Block elements */\n.block-demo {\n    display: block;\n    width: 100%;\n    padding: 16px;\n    background: #dbeafe;\n    border-radius: 8px;\n    margin-bottom: 8px;\n}\n\n/* Inline badges */\n.badge {\n    display: inline-block;\n    padding: 3px 10px;\n    border-radius: 50px;\n    font-size: 12px;\n    font-weight: 600;\n    margin: 2px;\n}\n.badge-blue   { background: #dbeafe; color: #1d4ed8; }\n.badge-green  { background: #dcfce7; color: #166534; }\n.badge-yellow { background: #fef9c3; color: #854d0e; }\n.badge-red    { background: #fee2e2; color: #991b1b; }\n\n/* Navbar with flex */\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: #1e293b;\n    padding: 0 24px;\n    height: 60px;\n    border-radius: 12px;\n    margin-bottom: 20px;\n}\n\n.nav-brand { color: white; font-weight: 700; font-size: 18px; }\n.nav-links { display: flex; gap: 4px; }\n.nav-links a {\n    display: inline-block;\n    padding: 8px 14px;\n    color: #94a3b8;\n    text-decoration: none;\n    border-radius: 6px;\n    font-size: 14px;\n}\n.nav-links a:hover { background: rgba(255,255,255,0.1); color: white; }",
        output: "Block-level elements stacking, inline badges, and a complete navbar with flex layout",
        label: "Display Demo"
      },
    ],
    quiz: [
      { question: "Which elements are block by default?", options: ["span, a, strong", "div, h1, p", "img, input, button", "em, mark, code"], answer: 1 },
      { question: "display: none vs visibility: hidden:", options: ["Same", "none removes from flow, hidden keeps space", "hidden removes from flow", "none keeps space"], answer: 1 },
      { question: "inline-block allows:", options: ["Only inline behavior", "Only block behavior", "Inline placement + width/height/padding", "Full-width only"], answer: 2 },
      { question: "To center items perfectly with flexbox:", options: ["margin: auto", "justify-content + align-items center", "text-align center", "position absolute"], answer: 1 },
      { question: "Default display of <span> is:", options: ["block", "inline-block", "inline", "flex"], answer: 2 },
      { question: "display: grid is best for:", options: ["Single row layouts", "1D layouts", "2D layouts (rows AND columns)", "Inline text"], answer: 2 },
    ],
  },

  // ════════════════════════════════════════
  // LEVEL 2 — INTERMEDIATE (8 Chapters)
  // ════════════════════════════════════════

  {
    id: "flexbox",
    title: "Flexbox",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 9,
    content: [
      {
        type: "text", heading: "What is Flexbox?",
        content: "Flexbox (Flexible Box Layout) is a CSS layout system designed to arrange items in one dimension — either a row or a column. It makes it incredibly easy to align, distribute, and space items.\n\nBefore flexbox, centering items vertically was notoriously difficult. With flexbox, it's just two lines of code!\n\nHow it works:\n• The CONTAINER gets display: flex\n• Its direct children automatically become FLEX ITEMS\n• Container properties control how items are laid out\n• Item properties control individual item behavior\n\nKey concepts:\n• Main axis — the primary direction (row = horizontal, column = vertical)\n• Cross axis — perpendicular to main axis\n• justify-content — aligns along MAIN axis\n• align-items — aligns along CROSS axis"
      },
      {
        type: "table", heading: "Flexbox Properties",
        content: "CONTAINER PROPERTIES:\nProperty            | Values                                    | Effect\n--------------------|-------------------------------------------|---------------------------\ndisplay             | flex, inline-flex                         | Creates flex container\nflex-direction      | row, row-reverse, column, column-reverse  | Sets main axis direction\nflex-wrap           | nowrap, wrap, wrap-reverse                | Allow items to wrap\njustify-content     | flex-start, flex-end, center, space-between, space-around, space-evenly | Main axis alignment\nalign-items         | flex-start, flex-end, center, stretch, baseline | Cross axis alignment\nalign-content       | same as justify-content                   | Multi-row alignment\ngap                 | length values                             | Space between items\n\nITEM PROPERTIES:\nProperty    | Values              | Effect\n------------|---------------------|---------------------------\nflex-grow   | number (0,1,2...)   | How much item grows\nflex-shrink | number (0,1,2...)   | How much item shrinks\nflex-basis  | px, %, auto         | Initial item size\nflex        | shorthand grow shrink basis | Combined\nalign-self  | same as align-items | Override for one item\norder       | number              | Change visual order"
      },
      {
        type: "syntax",
        code: "/* Flexbox basics */\n.container {\n    display: flex;\n    flex-direction: row;       /* row (default) or column */\n    flex-wrap: wrap;           /* allow wrapping to next line */\n    justify-content: center;   /* main axis alignment */\n    align-items: center;       /* cross axis alignment */\n    gap: 16px;                 /* space between items */\n}\n\n/* justify-content values */\n.row-start    { justify-content: flex-start; }   /* ▶▶▶         */\n.row-end      { justify-content: flex-end; }     /*         ◀◀◀ */\n.row-center   { justify-content: center; }       /*    ▶▶▶      */\n.row-between  { justify-content: space-between; }/*▶         ▶▶ */\n.row-around   { justify-content: space-around; } /* ◌▶◌  ◌▶◌  ◌▶◌ */\n.row-evenly   { justify-content: space-evenly; } /* ◌▶◌▶◌▶◌ */\n\n/* align-items values */\n.top     { align-items: flex-start; }\n.bottom  { align-items: flex-end; }\n.center  { align-items: center; }    /* vertical center! */\n.stretch { align-items: stretch; }   /* fill cross axis (default) */\n\n/* Perfect center (vertical AND horizontal) */\n.perfect-center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}",
        language: "css", label: "Flexbox Container"
      },
      {
        type: "syntax",
        code: "/* Flex items */\n\n/* flex-grow: how much extra space item takes */\n.item-1 { flex-grow: 1; }  /* takes 1/3 of extra space */\n.item-2 { flex-grow: 2; }  /* takes 2/3 of extra space */\n.item-3 { flex-grow: 0; }  /* doesn't grow (default) */\n\n/* flex shorthand: grow shrink basis */\n.item { flex: 1; }          /* flex: 1 1 0 (grow and shrink equally) */\n.item { flex: 0 0 200px; }  /* fixed 200px, no grow/shrink */\n\n/* Sidebar + main layout */\n.layout {\n    display: flex;\n    gap: 24px;\n}\n\n.sidebar { flex: 0 0 280px; }  /* fixed 280px sidebar */\n.main    { flex: 1; }          /* main takes remaining space */\n\n/* Column direction (vertical flex) */\n.card {\n    display: flex;\n    flex-direction: column;\n    height: 300px;\n}\n\n.card-body { flex: 1; }          /* fills available space */\n.card-footer { flex: 0 0 auto; } /* stays at bottom */\n\n/* Order (change visual without changing HTML) */\n.first-visually { order: -1; }  /* appears first */\n.last-visually  { order: 1; }   /* appears last */",
        language: "css", label: "Flex Items"
      },
      {
        type: "example",
        code: "/* Complete flexbox layouts */\n* { box-sizing: border-box; margin: 0; padding: 0; }\nbody { font-family: Arial; background: #f1f5f9; }\n\n/* 1. Navigation Bar */\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 32px;\n    height: 64px;\n    background: #0f172a;\n}\n\n.nav-brand { color: white; font-weight: 700; font-size: 20px; }\n.nav-links { display: flex; gap: 8px; list-style: none; }\n.nav-links a { color: #94a3b8; padding: 8px 12px; border-radius: 6px;\n               text-decoration: none; font-size: 14px; }\n.nav-links a:hover { background: rgba(255,255,255,0.1); color: white; }\n.nav-actions { display: flex; gap: 8px; }\n\n/* 2. Hero Section centered */\n.hero {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    min-height: 400px;\n    background: linear-gradient(135deg, #667eea, #764ba2);\n    color: white;\n    padding: 40px;\n    gap: 20px;\n}\n\n/* 3. Card Grid with flex + wrap */\n.cards {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n    padding: 32px;\n}\n\n.card {\n    flex: 1 1 280px;  /* grow, shrink, min 280px */\n    background: white;\n    border-radius: 12px;\n    padding: 24px;\n    border: 1px solid #e2e8f0;\n}\n\n/* 4. Sidebar layout */\n.page {\n    display: flex;\n    gap: 24px;\n    padding: 24px;\n    min-height: calc(100vh - 64px);\n}\n\n.sidebar {\n    flex: 0 0 240px;\n    background: white;\n    border-radius: 12px;\n    padding: 20px;\n    border: 1px solid #e2e8f0;\n    align-self: flex-start;  /* don't stretch to full height */\n}\n\n.content {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}",
        output: "Navbar, hero section, card grid, and sidebar layout all built with flexbox",
        label: "Complete Flexbox Layouts"
      },
      {
        type: "tip",
        content: "Use the Flexbox Froggy game (flexboxfroggy.com) to practice flexbox interactively — it's fun and covers all the key concepts! Also, browser DevTools shows a flex badge next to flex containers — click it to visualize the layout."
      },
    ],
    quiz: [
      { question: "justify-content aligns along:", options: ["Cross axis", "Main axis", "Vertical only", "Horizontal only"], answer: 1 },
      { question: "align-items: center aligns items:", options: ["On main axis", "On cross axis (perpendicular)", "Left side", "Top"], answer: 1 },
      { question: "flex-direction: column makes:", options: ["Items in a row", "Items in a column", "Items wrap", "Items overlap"], answer: 1 },
      { question: "gap property in flexbox:", options: ["Adds margin to items", "Sets space between flex items", "Sets padding", "Gaps are not possible in flex"], answer: 1 },
      { question: "flex: 1 means:", options: ["Fixed 1px", "Item doesn't grow", "Item grows to fill available space equally", "1 column only"], answer: 2 },
      { question: "space-between in justify-content:", options: ["Equal space around each item", "First and last items touch edges, equal space between", "All items touch start", "All items centered"], answer: 1 },
    ],
  },

  {
    id: "grid-layout",
    title: "Grid Layout",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 10,
    content: [
      {
        type: "text", heading: "What is CSS Grid?",
        content: "CSS Grid is a powerful 2D layout system — it can handle both ROWS and COLUMNS simultaneously. While Flexbox is great for one-dimensional layouts (either row or column), Grid excels at two-dimensional layouts (rows AND columns).\n\nGrid is perfect for:\n• Overall page layout (header, sidebar, main, footer)\n• Card grids that need consistent rows and columns\n• Magazine-style layouts\n• Dashboard layouts\n• Any layout where you think in both rows and columns\n\nKey concepts:\n• Grid container — parent with display: grid\n• Grid items — direct children of container\n• Grid lines — lines that define rows and columns\n• Grid tracks — rows and columns between lines\n• Grid cell — single intersection of row and column\n• Grid area — rectangle spanning multiple cells"
      },
      {
        type: "table", heading: "CSS Grid Properties",
        content: "CONTAINER PROPERTIES:\nProperty                  | Example                    | Effect\n--------------------------|----------------------------|---------------------------\ndisplay                   | grid                       | Creates grid container\ngrid-template-columns     | repeat(3, 1fr)             | Define column tracks\ngrid-template-rows        | 100px auto 100px           | Define row tracks\ngap / column-gap / row-gap| 20px                       | Space between cells\ngrid-template-areas       | 'header header' 'nav main' | Named areas\njustify-items             | start, end, center, stretch| Align items in cell (H)\nalign-items               | start, end, center, stretch| Align items in cell (V)\njustify-content           | like flexbox               | Align entire grid (H)\nalign-content             | like flexbox               | Align entire grid (V)\n\nITEM PROPERTIES:\nProperty         | Example              | Effect\n-----------------|----------------------|---------------------------\ngrid-column      | 1 / 3                | Span columns 1 to 3\ngrid-row         | 1 / 2                | Span rows 1 to 2\ngrid-area        | header               | Place in named area\njustify-self     | center               | Self align horizontal\nalign-self       | center               | Self align vertical"
      },
      {
        type: "syntax",
        code: "/* Basic Grid */\n.grid {\n    display: grid;\n    grid-template-columns: 200px 1fr 1fr;  /* fixed + flexible */\n    grid-template-rows: auto;\n    gap: 20px;\n}\n\n/* repeat() function */\n.card-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */\n    gap: 24px;\n}\n\n/* auto-fill vs auto-fit (responsive without media queries!) */\n.responsive-grid {\n    display: grid;\n    /* auto-fill: creates as many columns as fit */\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    gap: 20px;\n}\n\n/* fr unit — fractional unit */\n.layout {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    /* divides space: 25% | 50% | 25% */\n}\n\n/* Named template areas */\n.page {\n    display: grid;\n    grid-template-areas:\n        'header header header'\n        'sidebar main main'\n        'footer footer footer';\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 60px 1fr 60px;\n    min-height: 100vh;\n    gap: 16px;\n}\n\n.page-header  { grid-area: header; }\n.page-sidebar { grid-area: sidebar; }\n.page-main    { grid-area: main; }\n.page-footer  { grid-area: footer; }",
        language: "css", label: "Grid Container"
      },
      {
        type: "syntax",
        code: "/* Grid item placement */\n.item-wide {\n    grid-column: 1 / 3;    /* span from line 1 to line 3 */\n    /* same as: grid-column: span 2; */\n}\n\n.item-tall {\n    grid-row: 1 / 3;       /* span 2 rows */\n}\n\n.full-width {\n    grid-column: 1 / -1;   /* -1 = last line, span ALL columns */\n}\n\n/* Practical: Dashboard layout */\n.dashboard {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 20px;\n    padding: 24px;\n}\n\n.stats-card  { grid-column: span 1; }  /* 1 column wide */\n.chart-wide  { grid-column: span 2; }  /* 2 columns wide */\n.chart-full  { grid-column: span 4; }  /* full width */\n\n/* Responsive: stack on mobile */\n@media (max-width: 768px) {\n    .dashboard {\n        grid-template-columns: 1fr;\n    }\n    .chart-wide, .chart-full {\n        grid-column: span 1; /* reset span on mobile */\n    }\n}",
        language: "css", label: "Grid Item Placement"
      },
      {
        type: "example",
        code: "/* Complete page layout with CSS Grid */\n* { box-sizing: border-box; margin: 0; padding: 0; }\nbody { font-family: Arial; background: #f1f5f9; }\n\n/* Page layout */\n.page {\n    display: grid;\n    grid-template-areas:\n        'header header'\n        'sidebar main'\n        'footer footer';\n    grid-template-columns: 240px 1fr;\n    grid-template-rows: 60px 1fr auto;\n    min-height: 100vh;\n    gap: 0;\n}\n\n.header {\n    grid-area: header;\n    background: #1e293b;\n    color: white;\n    display: flex;\n    align-items: center;\n    padding: 0 24px;\n    font-weight: 700;\n    font-size: 18px;\n}\n\n.sidebar {\n    grid-area: sidebar;\n    background: white;\n    border-right: 1px solid #e2e8f0;\n    padding: 20px;\n}\n\n.main {\n    grid-area: main;\n    padding: 24px;\n}\n\n.footer {\n    grid-area: footer;\n    background: #1e293b;\n    color: #94a3b8;\n    text-align: center;\n    padding: 16px;\n    font-size: 14px;\n}\n\n/* Card grid inside main */\n.card-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n    gap: 16px;\n}\n\n.card {\n    background: white;\n    border: 1px solid #e2e8f0;\n    border-radius: 12px;\n    padding: 20px;\n}",
        output: "Complete page with header, sidebar, main content with card grid, and footer using CSS Grid areas",
        label: "Complete Page Layout"
      },
    ],
    quiz: [
      { question: "CSS Grid is best for:", options: ["Single row layouts", "Only columns", "2D layouts (rows AND columns)", "Text styling"], answer: 2 },
      { question: "repeat(3, 1fr) creates:", options: ["3px columns", "3 equal columns", "1 column 3 times larger", "3 rows"], answer: 1 },
      { question: "grid-column: 1 / -1 means:", options: ["First column only", "Span from first to last column line", "Negative space", "Hidden column"], answer: 1 },
      { question: "grid-template-areas is for:", options: ["Naming grid lines", "Creating named layout areas", "Setting column widths", "Grid gap"], answer: 1 },
      { question: "auto-fill vs minmax() creates:", options: ["Fixed number of columns", "Responsive columns without media queries", "Rows only", "Equal heights"], answer: 1 },
      { question: "fr unit in grid means:", options: ["Fixed ratio", "Fractional unit of available space", "Font ratio", "Frame unit"], answer: 1 },
    ],
  },

  {
    id: "positioning",
    title: "Positioning (static, relative, absolute, fixed)",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 11,
    content: [
      {
        type: "text", heading: "CSS Positioning",
        content: "CSS positioning controls exactly WHERE elements appear on the page. It's one of the more complex topics but essential for building real-world layouts.\n\nThe position property takes these values:\n• static — default, normal document flow\n• relative — offset from its normal position\n• absolute — positioned relative to nearest positioned ancestor\n• fixed — positioned relative to browser window (stays in place on scroll)\n• sticky — relative until scroll point, then fixed\n\nWhen position is NOT static, you can use:\n• top, right, bottom, left — to position the element\n• z-index — to control stacking order (which element is on top)\n\nKey concept: An element is 'positioned' if its position is anything other than static. Absolute positioning finds its nearest positioned ancestor."
      },
      {
        type: "table", heading: "Position Values Comparison",
        content: "Value    | In flow? | Positioned relative to        | Use case\n---------|----------|-------------------------------|---------------------------\nstatic   | Yes      | Normal flow (default)         | Default behavior\nrelative | Yes      | Its own normal position       | Small offset, creates context\nabsolute | No       | Nearest positioned ancestor  | Tooltips, dropdowns, badges\nfixed    | No       | Browser viewport              | Sticky navbar, back-to-top\nsticky   | Both     | Normal flow until threshold  | Sticky headers, table headers\n\n'In flow' means: does the element occupy space in the normal document layout?"
      },
      {
        type: "syntax",
        code: "/* static (default) - no positioning */\n.box { position: static; } /* top/left have no effect */\n\n/* relative - moves from its normal spot */\n.relative {\n    position: relative;\n    top: 20px;    /* move 20px DOWN from normal position */\n    left: 10px;   /* move 10px RIGHT from normal position */\n    /* original space is PRESERVED */\n}\n\n/* absolute - positioned relative to nearest 'positioned' ancestor */\n.parent {\n    position: relative;  /* establishes positioning context */\n    width: 300px;\n    height: 200px;\n}\n\n.badge {\n    position: absolute;\n    top: -8px;\n    right: -8px;  /* positioned relative to .parent */\n    /* removed from normal flow - doesn't affect other elements */\n}\n\n/* fixed - stays in place while scrolling */\n.navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;   /* or: width: 100%; */\n    z-index: 100;\n    background: white;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n\n/* sticky - relative until it hits the threshold */\n.section-header {\n    position: sticky;\n    top: 0;      /* stick to top of viewport when reached */\n    background: white;\n    z-index: 10;\n    border-bottom: 1px solid #e2e8f0;\n}",
        language: "css", label: "Position Values"
      },
      {
        type: "text", heading: "Common Positioning Patterns",
        content: "Positioning is used for many common UI patterns:\n\n1. Fixed navbar — stays at top as you scroll\n2. Notification badge — red circle on icon corner\n3. Image overlay — text or gradient over an image\n4. Dropdown menu — appears below a button\n5. Modal/Dialog — centered over content\n6. Tooltip — appears near hovered element\n7. Floating action button — fixed corner button\n8. Sticky sidebar — sidebar stays while content scrolls\n\nThe pattern for overlaying content on an image:\n• Parent: position: relative\n• Child overlay: position: absolute; inset: 0; (top: 0; right: 0; bottom: 0; left: 0)"
      },
      {
        type: "syntax",
        code: "/* Pattern 1: Image with overlay */\n.image-card {\n    position: relative;\n    overflow: hidden;  /* hide overflow */\n    border-radius: 12px;\n}\n\n.image-card img {\n    width: 100%;\n    height: 250px;\n    object-fit: cover;\n    display: block;\n}\n\n.image-card .overlay {\n    position: absolute;\n    inset: 0;  /* shorthand for top:0 right:0 bottom:0 left:0 */\n    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);\n    display: flex;\n    align-items: flex-end;\n    padding: 20px;\n    color: white;\n}\n\n/* Pattern 2: Notification badge */\n.icon-wrap {\n    position: relative;\n    display: inline-block;\n}\n\n.badge {\n    position: absolute;\n    top: -4px;\n    right: -4px;\n    width: 18px;\n    height: 18px;\n    background: #ef4444;\n    color: white;\n    border-radius: 50%;\n    font-size: 11px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 700;\n    border: 2px solid white;\n}\n\n/* Pattern 3: Modal overlay */\n.modal-backdrop {\n    position: fixed;\n    inset: 0;\n    background: rgba(0,0,0,0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1000;\n}\n\n.modal {\n    background: white;\n    border-radius: 16px;\n    padding: 32px;\n    max-width: 480px;\n    width: 90%;\n    position: relative;  /* for close button */\n}\n\n.modal-close {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    cursor: pointer;\n}",
        language: "css", label: "Common Position Patterns"
      },
      {
        type: "example",
        code: "/* Sticky navbar + back to top button */\n* { box-sizing: border-box; margin: 0; padding: 0; }\nbody { font-family: Arial; }\n\n/* Fixed navbar */\n.navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 64px;\n    background: white;\n    border-bottom: 1px solid #e2e8f0;\n    display: flex;\n    align-items: center;\n    padding: 0 32px;\n    justify-content: space-between;\n    z-index: 100;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n}\n\n/* Push content below fixed navbar */\nbody { padding-top: 64px; }\n\n/* Back to top button (fixed bottom right) */\n.back-to-top {\n    position: fixed;\n    bottom: 32px;\n    right: 32px;\n    width: 44px;\n    height: 44px;\n    background: #3b82f6;\n    color: white;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0 4px 12px rgba(59,130,246,0.4);\n    z-index: 99;\n    transition: transform 0.2s;\n}\n\n.back-to-top:hover {\n    transform: translateY(-3px);\n}\n\n/* Sticky section headers */\n.section-title {\n    position: sticky;\n    top: 64px;  /* below navbar */\n    background: #f8fafc;\n    padding: 12px 0;\n    font-weight: 700;\n    border-bottom: 2px solid #e2e8f0;\n    z-index: 10;\n}",
        output: "Fixed navbar, floating back-to-top button, and sticky section headers",
        label: "Fixed Navbar & Floating Button"
      },
    ],
    quiz: [
      { question: "position: static is:", options: ["Fixed to viewport", "Normal document flow (default)", "Absolute to parent", "Removes from flow"], answer: 1 },
      { question: "position: absolute is positioned relative to:", options: ["Body always", "Viewport", "Nearest positioned ancestor", "Previous sibling"], answer: 2 },
      { question: "position: fixed stays:", options: ["Relative to parent", "In normal flow", "Fixed to browser viewport", "Fixed to body top"], answer: 2 },
      { question: "position: sticky behaves like:", options: ["fixed always", "absolute always", "relative until scroll threshold, then fixed", "static"], answer: 2 },
      { question: "To position absolute children correctly, parent needs:", options: ["display: flex", "position: relative", "overflow: hidden", "width: 100%"], answer: 1 },
      { question: "inset: 0 is shorthand for:", options: ["padding: 0", "top:0; right:0; bottom:0; left:0", "margin: 0", "border: 0"], answer: 1 },
    ],
  },

  {
    id: "z-index",
    title: "Z-index",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 12,
    content: [
      {
        type: "text", heading: "What is Z-index?",
        content: "Z-index controls the stacking order of positioned elements. Elements with higher z-index appear ON TOP of elements with lower z-index.\n\nThink of it like layers in Photoshop — each layer has a z-order that determines what's in front or behind.\n\nZ-index only works on POSITIONED elements (position: relative, absolute, fixed, or sticky). It has NO effect on static elements.\n\nDefault stacking order (without z-index, back to front):\n1. Background and borders of block elements\n2. Non-positioned block elements\n3. Floating elements\n4. Non-positioned inline elements\n5. Positioned elements (appear in front by default)\n\nAny positioned element with z-index beats non-positioned elements."
      },
      {
        type: "table", heading: "Z-index Rules",
        content: "Rule                              | Explanation\n----------------------------------|------------------------------------------\nOnly works on positioned elements | position must be relative/absolute/fixed/sticky\nHigher number = in front          | z-index: 100 is above z-index: 50\nNegative values work              | z-index: -1 goes BEHIND normal flow\nDefault is auto                   | Same stacking order as parent\nStacking contexts                 | Each positioned+z-index creates new context\nNo limit                          | Can be 0, 1, 100, 999, 9999...\n\nCommon z-index conventions:\n1-10     → Small elements (badges, icons)\n10-50    → Dropdowns, tooltips\n50-100   → Sticky headers\n100-200  → Fixed navigation\n500-999  → Overlays, backdrops\n1000+    → Modals, dialogs\n9999     → Critical UI (notifications)"
      },
      {
        type: "syntax",
        code: "/* Z-index basics */\n.behind     { position: relative; z-index: 1; }\n.in-front   { position: relative; z-index: 2; }\n.on-top     { position: absolute; z-index: 100; }\n\n/* Fixed navbar should be above everything */\n.navbar {\n    position: fixed;\n    top: 0;\n    z-index: 100;\n}\n\n/* Modal should be above navbar */\n.modal-backdrop {\n    position: fixed;\n    inset: 0;\n    z-index: 500;    /* above navbar */\n    background: rgba(0,0,0,0.5);\n}\n\n.modal {\n    position: relative;\n    z-index: 501;    /* above backdrop */\n}\n\n/* Notification should be above modal */\n.toast {\n    position: fixed;\n    z-index: 1000;   /* highest */\n    top: 20px;\n    right: 20px;\n}\n\n/* Negative z-index - go behind normal content */\n.background-decoration {\n    position: absolute;\n    z-index: -1;    /* behind everything! */\n}\n\n/* Z-index without position = has NO effect */\n.broken {\n    z-index: 999;   /* DOES NOTHING! position is static */\n}",
        language: "css", label: "Z-index Examples"
      },
      {
        type: "text", heading: "Stacking Contexts",
        content: "A stacking context is an independent layer where z-index values are compared internally. This is the most confusing part of z-index!\n\nA new stacking context is created by:\n• position: relative/absolute/fixed + z-index (not auto)\n• opacity less than 1\n• transform, filter, or clip-path applied\n• display: flex or grid on the parent with z-index\n\nThe problem:\nImagine div A has z-index: 100 and div B has z-index: 50.\nB's child has z-index: 9999.\nB's child is STILL behind A because it's inside B's stacking context!\n\nSolution: Understanding this helps fix 'z-index not working' bugs — usually the element is trapped inside a stacking context with a lower z-index than you want."
      },
      {
        type: "example",
        code: "/* Practical z-index system */\n\n:root {\n    /* Define z-index scale as variables */\n    --z-below:    -1;\n    --z-base:      0;\n    --z-raised:   10;\n    --z-dropdown: 50;\n    --z-sticky:   100;\n    --z-navbar:   200;\n    --z-overlay:  500;\n    --z-modal:    600;\n    --z-toast:   1000;\n}\n\n/* Navbar */\n.navbar {\n    position: fixed;\n    top: 0; left: 0; right: 0;\n    z-index: var(--z-navbar);\n    background: white;\n    height: 64px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n}\n\n/* Dropdown menu */\n.dropdown {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    z-index: var(--z-dropdown);\n    background: white;\n    border-radius: 8px;\n    box-shadow: 0 10px 40px rgba(0,0,0,0.15);\n    min-width: 200px;\n    border: 1px solid #e2e8f0;\n}\n\n/* Modal */\n.modal-backdrop {\n    position: fixed;\n    inset: 0;\n    z-index: var(--z-overlay);\n    background: rgba(0,0,0,0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.modal {\n    position: relative;\n    z-index: var(--z-modal);\n    background: white;\n    border-radius: 16px;\n    padding: 32px;\n    max-width: 480px;\n    width: 90%;\n    box-shadow: 0 25px 50px rgba(0,0,0,0.25);\n}\n\n/* Toast notification (highest) */\n.toast {\n    position: fixed;\n    top: 80px;\n    right: 24px;\n    z-index: var(--z-toast);\n    background: #0f172a;\n    color: white;\n    padding: 12px 20px;\n    border-radius: 8px;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.3);\n}",
        output: "Layered UI with navbar, dropdown, modal backdrop, modal dialog, and toast notification in correct stacking order",
        label: "Z-index System"
      },
    ],
    quiz: [
      { question: "Z-index only works on:", options: ["All elements", "Positioned elements (not static)", "Flex items only", "Block elements only"], answer: 1 },
      { question: "Higher z-index appears:", options: ["Behind lower z-index", "In front of lower z-index", "Same level", "Depends on opacity"], answer: 1 },
      { question: "z-index: -1 places element:", options: ["On top of everything", "Behind normal flow content", "Has no effect", "Invisible"], answer: 1 },
      { question: "A stacking context is created by:", options: ["Only position: absolute", "position + z-index (not auto), opacity<1, transforms", "z-index alone", "display: block"], answer: 1 },
      { question: "Child element trapped in parent stacking context:", options: ["Can exceed parent's z-index globally", "Cannot appear above elements outside parent", "Inherits parent z-index only", "Has infinite z-index"], answer: 1 },
      { question: "position: static element with z-index: 999:", options: ["Appears on top", "Has no stacking effect (z-index ignored)", "Appears behind everything", "Creates stacking context"], answer: 1 },
    ],
  },

  {
    id: "overflow-visibility",
    title: "Overflow & Visibility",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 13,
    content: [
      {
        type: "text", heading: "Overflow Property",
        content: "The overflow property controls what happens when content is too large to fit within an element's dimensions.\n\nValues:\n• visible — content overflows and is visible outside (default)\n• hidden — overflow is clipped and invisible\n• scroll — always shows scrollbars\n• auto — shows scrollbars ONLY when needed (recommended)\n• clip — like hidden but no scrolling programmatically\n\nYou can control horizontal and vertical separately:\n• overflow-x — horizontal overflow\n• overflow-y — vertical overflow\n\nCommon uses:\n• overflow: hidden on parent to contain absolutely positioned children\n• overflow: hidden for image containers (clip images)\n• overflow-y: auto for scrollable containers (chat, sidebar)\n• overflow: hidden for animation clip effects"
      },
      {
        type: "table", heading: "Overflow & Visibility Properties",
        content: "Property           | Values               | Effect\n-------------------|----------------------|---------------------------\noverflow           | visible/hidden/scroll/auto | Both axes\noverflow-x         | same as overflow     | Horizontal only\noverflow-y         | same as overflow     | Vertical only\nvisibility         | visible/hidden/collapse | Show/hide (keeps space)\ndisplay: none      | —                    | Hide and remove from flow\nopacity: 0         | 0-1                  | Transparent but interactive\nclip-path          | circle(), polygon()  | Clip to shape\nwhite-space        | nowrap/normal/pre    | Text wrapping\ntext-overflow      | ellipsis/clip        | Text that overflows\nword-break         | break-all/break-word | Word wrapping"
      },
      {
        type: "syntax",
        code: "/* Overflow examples */\n\n/* Clip overflow */\n.image-container {\n    width: 300px;\n    height: 200px;\n    overflow: hidden;       /* clips image to box */\n    border-radius: 12px;\n}\n\n.image-container img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;      /* fill and crop */\n    transition: transform 0.3s;\n}\n\n.image-container:hover img {\n    transform: scale(1.05); /* zoom effect! */\n}\n\n/* Scrollable container */\n.chat-box {\n    height: 400px;\n    overflow-y: auto;       /* scroll when needed */\n    border: 1px solid #e2e8f0;\n    border-radius: 12px;\n    padding: 16px;\n}\n\n/* Horizontal scroll (code blocks, tables) */\n.code-block {\n    overflow-x: auto;       /* horizontal scroll */\n    white-space: nowrap;    /* don't wrap lines */\n    background: #1e293b;\n    padding: 16px;\n    border-radius: 8px;\n}\n\n/* Text truncation with ellipsis */\n.truncate {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 200px;  /* need a width limit */\n}\n\n/* Multi-line truncation */\n.clamp {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;    /* show only 3 lines */\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n}",
        language: "css", label: "Overflow Examples"
      },
      {
        type: "syntax",
        code: "/* Visibility & Display comparison */\n\n.visible   { visibility: visible; }   /* shown (default) */\n.invisible { visibility: hidden; }    /* hidden BUT keeps space! */\n.gone      { display: none; }         /* hidden AND removes space */\n.see-through { opacity: 0; }          /* transparent but clickable! */\n\n/* Common pattern: show/hide with CSS class */\n.tooltip {\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.2s, visibility 0.2s;\n    position: absolute;\n    background: #1e293b;\n    color: white;\n    padding: 6px 12px;\n    border-radius: 6px;\n    font-size: 13px;\n    white-space: nowrap;\n    pointer-events: none;\n}\n\n.has-tooltip:hover .tooltip {\n    visibility: visible;\n    opacity: 1;\n}\n\n/* clip-path - clip to shapes */\n.circle-clip   { clip-path: circle(50%); }\n.diamond-clip  { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }\n.triangle-clip { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }",
        language: "css", label: "Visibility & clip-path"
      },
      {
        type: "example",
        code: "/* Image hover zoom effect with overflow: hidden */\n.gallery {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 16px;\n}\n\n.gallery-item {\n    position: relative;\n    overflow: hidden;        /* CRUCIAL: hides the zoom overflow */\n    border-radius: 12px;\n    aspect-ratio: 4/3;       /* maintain proportion */\n    cursor: pointer;\n    background: #e2e8f0;\n}\n\n.gallery-item img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 0.4s ease;\n    display: block;\n}\n\n/* Overlay caption */\n.gallery-item .caption {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);\n    color: white;\n    padding: 40px 16px 16px;\n    transform: translateY(100%);   /* hidden below */\n    transition: transform 0.3s ease;\n}\n\n/* Hover effects */\n.gallery-item:hover img {\n    transform: scale(1.08);          /* zoom image */\n}\n\n.gallery-item:hover .caption {\n    transform: translateY(0);        /* reveal caption */\n}",
        output: "Image gallery with zoom-on-hover effect and sliding caption, all handled by overflow: hidden",
        label: "Image Gallery with Hover"
      },
    ],
    quiz: [
      { question: "overflow: auto shows scrollbar:", options: ["Always", "Never", "Only when content overflows", "Only on x-axis"], answer: 2 },
      { question: "visibility: hidden vs display: none:", options: ["Same", "hidden keeps space, none removes it", "none keeps space, hidden removes it", "Both remove space"], answer: 1 },
      { question: "text-overflow: ellipsis shows ... when:", options: ["Text is deleted", "Text overflows its container", "Text is formatted", "Browser is slow"], answer: 1 },
      { question: "overflow: hidden on parent is needed for:", options: ["Flexbox", "Containing absolutely positioned children and clip effects", "CSS Grid", "Z-index"], answer: 1 },
      { question: "opacity: 0 element is:", options: ["Invisible and not clickable", "Invisible but still clickable", "Removed from flow", "Same as display: none"], answer: 1 },
      { question: "-webkit-line-clamp: 3 shows:", options: ["3 characters", "First 3 words", "Only 3 lines of text", "3 paragraphs"], answer: 2 },
    ],
  },

  {
    id: "transitions",
    title: "Transitions",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 14,
    content: [
      {
        type: "text", heading: "What are CSS Transitions?",
        content: "CSS Transitions allow property changes to occur smoothly over a specified duration, instead of happening instantly. When a property changes (on hover, focus, class change), the transition makes it animate between the old and new values.\n\nWithout transition: Button color changes INSTANTLY on hover\nWith transition: Button color SMOOTHLY fades on hover\n\nTransition syntax:\ntransition: property duration timing-function delay;\n\nParts:\n• property — which CSS property to transition (color, transform, all)\n• duration — how long (0.3s, 300ms)\n• timing-function — speed curve (ease, linear, ease-in, ease-out, cubic-bezier)\n• delay — wait before starting (0s default)\n\nBest practice: Prefer transitioning transform and opacity — these are GPU-accelerated and don't cause layout recalculation!"
      },
      {
        type: "table", heading: "Transition Timing Functions",
        content: "Function          | Behavior                         | Best for\n------------------|----------------------------------|---------------------------\nease              | Slow start, fast middle, slow end | Most UI transitions (default)\nlinear            | Constant speed throughout        | Progress bars, spinning\nease-in           | Slow start, fast end             | Elements leaving screen\nease-out          | Fast start, slow end             | Elements entering screen\nease-in-out       | Slow start, slow end             | Floating elements\ncubic-bezier(...)  | Custom curve                    | Unique feel\nsteps(n)          | Jump in n equal steps            | Sprite animations"
      },
      {
        type: "syntax",
        code: "/* Basic transition */\n.button {\n    background: #3b82f6;\n    color: white;\n    padding: 12px 24px;\n    border-radius: 8px;\n    border: none;\n    cursor: pointer;\n\n    /* transition: property duration timing delay */\n    transition: background-color 0.2s ease;\n}\n\n.button:hover {\n    background: #1d4ed8; /* smoothly changes! */\n}\n\n/* Multiple properties */\n.card {\n    background: white;\n    transform: translateY(0);\n    box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n\n    transition:\n        transform 0.2s ease,\n        box-shadow 0.2s ease;\n}\n\n.card:hover {\n    transform: translateY(-4px);   /* lift up */\n    box-shadow: 0 8px 25px rgba(0,0,0,0.15);\n}\n\n/* 'all' - transitions everything that changes */\n.element {\n    transition: all 0.3s ease;\n    /* BE CAREFUL: transitions ALL properties - can be slow */\n}\n\n/* Best practice: GPU-accelerated properties */\n.fast-transition {\n    transition: transform 0.3s ease,\n                opacity 0.3s ease;\n    /* These don't trigger layout recalculation! */\n}",
        language: "css", label: "Transition Basics"
      },
      {
        type: "syntax",
        code: "/* Common transition patterns */\n\n/* 1. Fade in/out */\n.fade {\n    opacity: 1;\n    transition: opacity 0.3s ease;\n}\n.fade.hidden { opacity: 0; }\n\n/* 2. Slide in from below */\n.slide-up {\n    transform: translateY(20px);\n    opacity: 0;\n    transition: transform 0.3s ease, opacity 0.3s ease;\n}\n.slide-up.visible {\n    transform: translateY(0);\n    opacity: 1;\n}\n\n/* 3. Scale (pop) on hover */\n.pop {\n    transform: scale(1);\n    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n    /* elastic bounce effect with cubic-bezier */\n}\n.pop:hover { transform: scale(1.05); }\n\n/* 4. Background color on nav links */\nnav a {\n    padding: 8px 16px;\n    border-radius: 6px;\n    color: #64748b;\n    transition: background-color 0.15s ease, color 0.15s ease;\n}\nnav a:hover {\n    background: #f1f5f9;\n    color: #0f172a;\n}\n\n/* 5. Input focus effect */\ninput {\n    border: 2px solid #e2e8f0;\n    border-radius: 8px;\n    padding: 10px 14px;\n    transition: border-color 0.2s, box-shadow 0.2s;\n    outline: none;\n}\ninput:focus {\n    border-color: #3b82f6;\n    box-shadow: 0 0 0 3px rgba(59,130,246,0.15);\n}",
        language: "css", label: "Common Transition Patterns"
      },
      {
        type: "example",
        code: "/* Complete button system with transitions */\n* { box-sizing: border-box; }\n\n.btn {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    padding: 10px 20px;\n    border-radius: 8px;\n    font-size: 15px;\n    font-weight: 500;\n    cursor: pointer;\n    border: 2px solid transparent;\n    font-family: inherit;\n    text-decoration: none;\n\n    /* All interactive states transition */\n    transition:\n        background-color 0.2s ease,\n        border-color 0.2s ease,\n        color 0.2s ease,\n        transform 0.15s ease,\n        box-shadow 0.2s ease,\n        opacity 0.2s ease;\n}\n\n/* Primary */\n.btn-primary {\n    background: #3b82f6;\n    color: white;\n    border-color: #3b82f6;\n}\n.btn-primary:hover {\n    background: #2563eb;\n    border-color: #2563eb;\n    transform: translateY(-2px);\n    box-shadow: 0 6px 20px rgba(59,130,246,0.4);\n}\n.btn-primary:active {\n    transform: translateY(0);\n    box-shadow: none;\n}\n\n/* Ghost / Outline */\n.btn-ghost {\n    background: transparent;\n    color: #3b82f6;\n    border-color: #3b82f6;\n}\n.btn-ghost:hover {\n    background: #eff6ff;\n    transform: translateY(-1px);\n}\n\n/* Danger */\n.btn-danger {\n    background: #ef4444;\n    color: white;\n    border-color: #ef4444;\n}\n.btn-danger:hover {\n    background: #dc2626;\n    transform: translateY(-2px);\n    box-shadow: 0 6px 20px rgba(239,68,68,0.4);\n}\n\n/* Loading state */\n.btn-loading {\n    opacity: 0.7;\n    cursor: not-allowed;\n    pointer-events: none;\n}",
        output: "Complete button system with smooth hover lift, color transitions, and press-down active effect",
        label: "Animated Button System"
      },
      {
        type: "warning",
        content: "Avoid transitioning properties that trigger layout (width, height, margin, padding, top, left). These are expensive — the browser must recalculate the entire layout. Stick to transform and opacity for smooth 60fps animations!"
      },
    ],
    quiz: [
      { question: "CSS transition happens between:", options: ["Two different elements", "Old and new property values", "Two pages", "Two CSS files"], answer: 1 },
      { question: "transition: all 0.3s ease transitions:", options: ["Only color", "Only transform", "All changing properties", "Background only"], answer: 2 },
      { question: "Best properties to transition for performance:", options: ["width and height", "margin and padding", "transform and opacity", "background and border"], answer: 2 },
      { question: "ease timing function:", options: ["Constant speed", "Slow start, fast middle, slow end", "Fast start, slow end", "Slow start, fast end"], answer: 1 },
      { question: "transition-delay: 0.5s means:", options: ["Transition takes 0.5s", "Wait 0.5s before starting", "Transition repeats after 0.5s", "Transition is 50% speed"], answer: 1 },
      { question: "Which is NOT a valid timing function?", options: ["ease-in", "linear", "ease-middle", "ease-out"], answer: 2 },
    ],
  },

  {
    id: "animations",
    title: "Animations",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 15,
    content: [
      {
        type: "text", heading: "CSS Animations vs Transitions",
        content: "While transitions are triggered by state changes (hover, focus), CSS animations run automatically and have more complex behavior.\n\nKey differences:\n• Transitions: A → B (triggered by event, one way)\n• Animations: A → B → C → A (automatic, can loop, multi-step)\n\nCSS animations require two things:\n1. @keyframes rule — defines the animation sequence\n2. animation properties — apply the animation to an element\n\nAnimation properties:\n• animation-name — which @keyframes to use\n• animation-duration — how long one cycle takes\n• animation-timing-function — speed curve\n• animation-delay — wait before starting\n• animation-iteration-count — how many times (number or infinite)\n• animation-direction — normal, reverse, alternate, alternate-reverse\n• animation-fill-mode — what state before/after animation\n• animation-play-state — running or paused\n• animation — shorthand for all above"
      },
      {
        type: "syntax",
        code: "/* @keyframes defines animation steps */\n\n/* Using from/to (two states) */\n@keyframes fadeIn {\n    from { opacity: 0; transform: translateY(20px); }\n    to   { opacity: 1; transform: translateY(0); }\n}\n\n/* Using percentages (multiple states) */\n@keyframes bounce {\n    0%   { transform: translateY(0); }\n    30%  { transform: translateY(-30px); }\n    60%  { transform: translateY(-15px); }\n    80%  { transform: translateY(-5px); }\n    100% { transform: translateY(0); }\n}\n\n@keyframes pulse {\n    0%, 100% { transform: scale(1); opacity: 1; }\n    50%      { transform: scale(1.05); opacity: 0.8; }\n}\n\n@keyframes spin {\n    from { transform: rotate(0deg); }\n    to   { transform: rotate(360deg); }\n}\n\n/* Applying animations */\n.fade-in {\n    animation: fadeIn 0.5s ease forwards;\n    /* name duration timing fill-mode */\n}\n\n.bouncing {\n    animation: bounce 1s ease infinite;\n    /* name duration timing iteration */\n}\n\n.spinning {\n    animation: spin 1s linear infinite;\n}\n\n.pulsing {\n    animation: pulse 2s ease-in-out infinite;\n}",
        language: "css", label: "Keyframes & Animation"
      },
      {
        type: "table", heading: "animation-fill-mode Values",
        content: "Value      | Before animation | After animation  | Use case\n-----------|-----------------|------------------|---------------------------\nnone       | Normal state    | Normal state     | Default (loops)\nforwards   | Normal state    | Stays at 100%    | Elements that stay animated\nbackwards  | Starts at 0%    | Normal state     | Delayed animations\nboth       | Starts at 0%    | Stays at 100%    | Most common choice\n\nanimation-direction values:\nnormal          → 0% to 100%\nreverse         → 100% to 0%\nalternate       → 0%→100%→0%→100% (ping-pong)\nalternate-reverse → 100%→0%→100%→0%"
      },
      {
        type: "syntax",
        code: "/* Practical animation examples */\n\n/* Loading spinner */\n@keyframes spin {\n    to { transform: rotate(360deg); }\n}\n\n.spinner {\n    width: 40px;\n    height: 40px;\n    border: 4px solid #e2e8f0;\n    border-top-color: #3b82f6;\n    border-radius: 50%;\n    animation: spin 0.8s linear infinite;\n}\n\n/* Skeleton loading effect */\n@keyframes shimmer {\n    0%   { background-position: -1000px 0; }\n    100% { background-position:  1000px 0; }\n}\n\n.skeleton {\n    background: linear-gradient(90deg,\n        #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);\n    background-size: 2000px 100%;\n    animation: shimmer 1.5s infinite;\n    border-radius: 4px;\n}\n\n/* Staggered entrance animations */\n@keyframes slideUp {\n    from { opacity: 0; transform: translateY(30px); }\n    to   { opacity: 1; transform: translateY(0); }\n}\n\n.card:nth-child(1) { animation: slideUp 0.4s ease 0.1s both; }\n.card:nth-child(2) { animation: slideUp 0.4s ease 0.2s both; }\n.card:nth-child(3) { animation: slideUp 0.4s ease 0.3s both; }\n/* each card appears 0.1s after the previous */\n\n/* Pause animation on hover */\n.animated:hover {\n    animation-play-state: paused;\n}",
        language: "css", label: "Practical Animations"
      },
      {
        type: "example",
        code: "/* Complete animation showcase */\n* { box-sizing: border-box; margin: 0; padding: 0; }\nbody { font-family: Arial; background: #0f172a; color: white;\n       padding: 40px; min-height: 100vh; }\n\n/* 1. Floating animation */\n@keyframes float {\n    0%, 100% { transform: translateY(0); }\n    50%       { transform: translateY(-12px); }\n}\n\n.floating-icon {\n    font-size: 48px;\n    display: inline-block;\n    animation: float 3s ease-in-out infinite;\n}\n\n/* 2. Gradient shift */\n@keyframes gradientShift {\n    0%   { background-position: 0% 50%; }\n    50%  { background-position: 100% 50%; }\n    100% { background-position: 0% 50%; }\n}\n\n.gradient-text {\n    background: linear-gradient(270deg, #667eea, #f093fb, #4facfe, #43e97b);\n    background-size: 400% 400%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    animation: gradientShift 4s ease infinite;\n    font-size: 3rem;\n    font-weight: 900;\n}\n\n/* 3. Typing cursor effect */\n@keyframes blink {\n    0%, 100% { opacity: 1; }\n    50%       { opacity: 0; }\n}\n\n.cursor::after {\n    content: '|';\n    animation: blink 1s step-end infinite;\n    color: #3b82f6;\n}\n\n/* 4. Progress bar animation */\n@keyframes fill {\n    from { width: 0%; }\n    to   { width: var(--progress); }\n}\n\n.progress-bar {\n    height: 8px;\n    background: #1e293b;\n    border-radius: 50px;\n    overflow: hidden;\n    margin: 8px 0;\n}\n\n.progress-fill {\n    height: 100%;\n    background: linear-gradient(90deg, #3b82f6, #8b5cf6);\n    border-radius: 50px;\n    animation: fill 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n\n.skill-90  { --progress: 90%; }\n.skill-75  { --progress: 75%; }\n.skill-60  { --progress: 60%; }",
        output: "Floating emoji, animated gradient text, blinking cursor, and animated progress bars",
        label: "Animation Showcase"
      },
      {
        type: "tip",
        content: "Respect users' motion preferences! Add @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } } Some users have vestibular disorders where motion causes nausea. This media query turns off animations for them."
      },
    ],
    quiz: [
      { question: "@keyframes defines:", options: ["Selector styles", "Animation sequence steps", "Transition timing", "Media queries"], answer: 1 },
      { question: "animation-iteration-count: infinite:", options: ["Plays once", "Plays 10 times", "Plays forever", "Never plays"], answer: 2 },
      { question: "animation-fill-mode: forwards keeps element:", options: ["At first keyframe after end", "At last keyframe after end", "At start always", "Invisible after"], answer: 1 },
      { question: "animation-direction: alternate:", options: ["Plays in reverse only", "Plays forward then backward repeatedly", "Random direction", "Plays 2 times"], answer: 1 },
      { question: "animation-play-state: paused:", options: ["Removes animation", "Freezes animation at current frame", "Resets to start", "Speeds up animation"], answer: 1 },
      { question: "Best properties for smooth 60fps animations:", options: ["width and height", "background and border", "transform and opacity", "margin and padding"], answer: 2 },
    ],
  },

  {
    id: "media-queries",
    title: "Media Queries",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 16,
    content: [
      {
        type: "text", heading: "What are Media Queries?",
        content: "Media queries allow you to apply CSS styles based on the device's characteristics — primarily screen width. They are the foundation of responsive web design — making websites look great on all screen sizes from tiny phones to large desktop monitors.\n\nSyntax:\n@media (condition) {\n    /* CSS rules that apply when condition is met */\n}\n\nMedia query conditions can check:\n• min-width / max-width — viewport width\n• min-height / max-height — viewport height\n• orientation — portrait or landscape\n• prefers-color-scheme — dark or light mode\n• prefers-reduced-motion — animation preference\n• hover — does device support hover\n• display — print vs screen\n\nMobile-first vs Desktop-first:\n• Mobile-first: write base CSS for mobile, use min-width to add desktop styles (RECOMMENDED)\n• Desktop-first: write base CSS for desktop, use max-width to reduce for mobile"
      },
      {
        type: "table", heading: "Common Breakpoints",
        content: "Name          | Width          | Devices\n--------------|----------------|---------------------------\nXS (extra sm) | < 480px        | Small phones\nSM (small)    | ≥ 480px        | Large phones\nMD (medium)   | ≥ 768px        | Tablets, large phones\nLG (large)    | ≥ 1024px       | Laptops, desktops\nXL (extra lg) | ≥ 1280px       | Large desktops\n2XL           | ≥ 1536px       | Ultra-wide screens\n\nPopular frameworks:\nTailwind CSS:  640 / 768 / 1024 / 1280 / 1536\nBootstrap:     576 / 768 / 992  / 1200 / 1400"
      },
      {
        type: "syntax",
        code: "/* Mobile-first approach (RECOMMENDED) */\n/* Write base styles for MOBILE first */\n.container {\n    padding: 16px;          /* mobile */\n    font-size: 14px;\n}\n\n.card-grid {\n    display: grid;\n    grid-template-columns: 1fr;  /* 1 column on mobile */\n    gap: 16px;\n}\n\n/* Then ADD styles for larger screens */\n@media (min-width: 640px) {     /* small tablets */\n    .container { padding: 20px; }\n    .card-grid { grid-template-columns: repeat(2, 1fr); }\n}\n\n@media (min-width: 1024px) {    /* desktops */\n    .container {\n        max-width: 1200px;\n        margin: 0 auto;\n        padding: 0 40px;\n    }\n    .card-grid { grid-template-columns: repeat(3, 1fr); }\n}\n\n/* Desktop-first approach */\n/* Base styles for desktop */\n.sidebar { width: 280px; float: left; }\n\n/* Then REDUCE for mobile */\n@media (max-width: 768px) {\n    .sidebar { width: 100%; float: none; }\n}",
        language: "css", label: "Mobile-first Media Queries"
      },
      {
        type: "syntax",
        code: "/* Responsive Navigation */\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n    height: 60px;\n    background: #1e293b;\n}\n\n/* Mobile: hide nav links, show hamburger */\n.nav-links {\n    display: none;\n    position: fixed;\n    top: 60px;\n    left: 0;\n    right: 0;\n    background: #1e293b;\n    flex-direction: column;\n    padding: 20px;\n    gap: 8px;\n}\n\n.nav-links.open { display: flex; }\n\n.hamburger { display: block; }\n\n/* Desktop: show nav links, hide hamburger */\n@media (min-width: 768px) {\n    .nav-links {\n        display: flex;         /* always visible on desktop */\n        position: static;      /* back to normal flow */\n        flex-direction: row;   /* horizontal */\n        padding: 0;\n        gap: 4px;\n    }\n    .hamburger { display: none; }\n}\n\n/* Other media query types */\n\n/* Dark mode */\n@media (prefers-color-scheme: dark) {\n    body { background: #0f172a; color: #e2e8f0; }\n    .card { background: #1e293b; border-color: #334155; }\n}\n\n/* Landscape orientation on mobile */\n@media (max-width: 768px) and (orientation: landscape) {\n    .hero { min-height: 100vw; }\n}\n\n/* Print styles */\n@media print {\n    .navbar, .sidebar, .footer { display: none; }\n    body { font-size: 12pt; color: black; }\n}",
        language: "css", label: "Responsive Patterns"
      },
      {
        type: "example",
        code: "/* Complete responsive page */\n\n/* CSS Reset */\n* { box-sizing: border-box; margin: 0; padding: 0; }\n\n/* Base (mobile first) */\nbody {\n    font-family: 'Segoe UI', Arial, sans-serif;\n    background: #f8fafc;\n    color: #1e293b;\n    line-height: 1.6;\n}\n\n/* Responsive container */\n.container {\n    width: 100%;\n    padding: 0 16px;\n    margin: 0 auto;\n}\n\n@media (min-width: 640px)  { .container { padding: 0 24px; } }\n@media (min-width: 1024px) { .container { max-width: 1100px; padding: 0 32px; } }\n\n/* Responsive hero */\n.hero {\n    text-align: center;\n    padding: 48px 16px;\n    background: linear-gradient(135deg, #1d4ed8, #7c3aed);\n    color: white;\n}\n\n.hero h1 {\n    font-size: 1.75rem;   /* mobile */\n    font-weight: 800;\n    margin-bottom: 16px;\n}\n\n@media (min-width: 768px) { .hero h1 { font-size: 2.5rem; } }\n@media (min-width: 1024px) { .hero h1 { font-size: 3.5rem; } }\n\n/* Responsive grid */\n.features {\n    display: grid;\n    grid-template-columns: 1fr;     /* mobile: 1 col */\n    gap: 16px;\n    padding: 40px 16px;\n}\n\n@media (min-width: 640px) {\n    .features { grid-template-columns: repeat(2, 1fr); } /* 2 cols */\n}\n\n@media (min-width: 1024px) {\n    .features {\n        grid-template-columns: repeat(3, 1fr); /* 3 cols */\n        padding: 60px 0;\n    }\n}\n\n/* Feature card */\n.feature-card {\n    background: white;\n    border: 1px solid #e2e8f0;\n    border-radius: 16px;\n    padding: 24px;\n}\n\n/* Responsive typography */\np { font-size: 15px; }\n@media (min-width: 768px) { p { font-size: 16px; } }\n\n/* Dark mode */\n@media (prefers-color-scheme: dark) {\n    body { background: #0f172a; color: #e2e8f0; }\n    .feature-card { background: #1e293b; border-color: #334155; }\n}",
        output: "Fully responsive page that adapts from mobile (1 column) to tablet (2 columns) to desktop (3 columns) with responsive hero text and dark mode support",
        label: "Fully Responsive Page"
      },
      {
        type: "tip",
        content: "Test your responsive designs easily: Chrome DevTools → Ctrl+Shift+M toggles device emulation. You can test iPhone, iPad, and custom screen sizes. Also try resizing your browser window slowly to see how your layout adapts at different widths."
      },
    ],
    quiz: [
      { question: "Mobile-first approach uses:", options: ["max-width queries mainly", "min-width queries mainly", "Only fixed widths", "No media queries"], answer: 1 },
      { question: "@media (min-width: 768px) applies when:", options: ["Screen is less than 768px", "Screen is 768px or wider", "Screen is exactly 768px", "Always"], answer: 1 },
      { question: "Recommended viewport meta tag for responsive:", options: ["width=desktop", "width=device-width, initial-scale=1.0", "width=320", "scale=0.5"], answer: 1 },
      { question: "@media (prefers-color-scheme: dark) applies:", options: ["Always on dark pages", "When user has dark mode enabled", "At night only", "Never automatically"], answer: 1 },
      { question: "Common tablet breakpoint is around:", options: ["320px", "480px", "768px", "1200px"], answer: 2 },
      { question: "@media print is used for:", options: ["Printer-friendly styles", "Printing JavaScript", "PDF generation", "Color printing only"], answer: 0 },
    ],
  },
];

// Helper functions
export const getChaptersByLevel = (level: 1 | 2) =>
  cssChapters.filter((c) => c.level === level);

export const getChapterById = (id: string) =>
  cssChapters.find((c) => c.id === id);

export const levels = [
  { level: 1 as const, name: "Beginner", icon: "👉", color: "blue", chapters: 8 },
  { level: 2 as const, name: "Intermediate", icon: "⚡", color: "indigo", chapters: 8 },
];