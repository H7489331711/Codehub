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

export const htmlChapters: Chapter[] = [

  // ════════════════════════════════════════
  // LEVEL 1 — BEGINNER (8 Chapters)
  // ════════════════════════════════════════

  {
    id: "introduction-to-html",
    title: "Introduction to HTML",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 1,
    content: [
      {
        type: "text", heading: "What is HTML?",
        content: "HTML stands for HyperText Markup Language. It is the standard language used to create and structure content on the web. Every website you visit — Google, YouTube, Instagram — is built with HTML at its foundation.\n\nHTML is NOT a programming language. It is a markup language, meaning it uses tags to describe the structure and meaning of content. It tells the browser: 'this is a heading', 'this is a paragraph', 'this is an image', 'this is a link'.\n\nKey Facts:\n• Created by Tim Berners-Lee in 1991\n• Current version: HTML5 (2014, widely used)\n• Files end with .html or .htm extension\n• Browsers (Chrome, Firefox, Safari) read HTML and display it visually\n• HTML works together with CSS (styling) and JavaScript (interactivity)"
      },
      {
        type: "table", heading: "HTML vs CSS vs JavaScript",
        content: "Language   | Role               | Analogy (House)     | Example\n-----------|--------------------|---------------------|---------------------------\nHTML       | Structure/Content  | Walls & rooms       | Headings, paragraphs, images\nCSS        | Styling/Design     | Paint & furniture   | Colors, fonts, layout\nJavaScript | Behavior/Logic     | Electricity & locks | Animations, form validation\n\nAll three work TOGETHER to make modern websites."
      },
      {
        type: "text", heading: "How HTML Works",
        content: "When you open a website, here is exactly what happens:\n\nStep 1: You type a URL in the browser (e.g. google.com)\nStep 2: Browser sends a request to Google's web server\nStep 3: Server sends back an HTML file\nStep 4: Browser reads the HTML top to bottom\nStep 5: Browser builds a DOM (Document Object Model) — a tree of all elements\nStep 6: Browser renders (displays) everything visually on your screen\n\nThis entire process happens in milliseconds!\n\nYou can see any website's HTML by pressing Ctrl+U in your browser, or right-click → 'View Page Source'."
      },
      {
        type: "table", heading: "HTML History & Versions",
        content: "Version  | Year  | Key Features\n---------|-------|---------------------------------\nHTML 1.0 | 1991  | Basic text and links\nHTML 2.0 | 1995  | Forms added\nHTML 3.2 | 1997  | Tables, scripts\nHTML 4.01| 1999  | CSS support, accessibility\nXHTML    | 2000  | Stricter HTML rules\nHTML5    | 2014  | Video, audio, canvas, semantic tags"
      },
      {
        type: "text", heading: "Setting Up Your Environment",
        content: "To write HTML you need:\n\n1. A Code Editor — VS Code is the best (free)\n   • Download: code.visualstudio.com\n   • Install extension: 'Live Server' by Ritwick Dey\n\n2. A Web Browser — Chrome or Firefox recommended\n   • Chrome has the best developer tools\n\nCreating your first HTML file:\nStep 1: Open VS Code\nStep 2: Create new file → Save as 'index.html'\nStep 3: Type ! and press Tab (Emmet shortcut) → auto-generates HTML structure!\nStep 4: Right-click in editor → 'Open with Live Server'\nStep 5: Browser opens and shows your page automatically!"
      },
      {
        type: "syntax",
        code: "<!-- This is how HTML looks -->\n<!-- Tags are in angle brackets < > -->\n<!-- Most tags have opening AND closing tags -->\n\n<tagname>Content goes here</tagname>\n\n<!-- Self-closing tags have no content -->\n<br>    <!-- line break -->\n<hr>    <!-- horizontal rule -->\n<img>   <!-- image -->\n\n<!-- Tags can have attributes -->\n<a href=\"https://google.com\">Click me</a>\n<img src=\"photo.jpg\" alt=\"A photo\">",
        language: "html", label: "HTML Syntax Basics"
      },
      {
        type: "example",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>My First HTML Page</title>\n</head>\n<body>\n    <h1>Hello, World! 🌍</h1>\n    <p>Welcome to my very first HTML page.</p>\n    <p>HTML is <b>easy</b> and <i>fun</i> to learn!</p>\n</body>\n</html>",
        output: "Browser displays:\n[Large Heading] Hello, World! 🌍\n[Paragraph] Welcome to my very first HTML page.\n[Paragraph] HTML is [bold]easy[/bold] and [italic]fun[/italic] to learn!",
        label: "Your First HTML Page"
      },
      {
        type: "tip",
        content: "In VS Code, type ! (exclamation mark) and press Tab or Enter inside an .html file — it automatically generates the full HTML5 boilerplate structure! This is called an Emmet abbreviation."
      },
    ],
    quiz: [
      { question: "What does HTML stand for?", options: ["Hyper Text Makeup Language", "HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language"], answer: 1 },
      { question: "HTML is a:", options: ["Programming language", "Markup language", "Database language", "Styling language"], answer: 1 },
      { question: "Who created HTML?", options: ["Bill Gates", "Tim Berners-Lee", "Guido van Rossum", "Mark Zuckerberg"], answer: 1 },
      { question: "HTML files end with:", options: [".hml", ".htm only", ".html only", ".html or .htm"], answer: 3 },
      { question: "Current version of HTML is:", options: ["HTML3", "HTML4", "HTML5", "HTML6"], answer: 2 },
      { question: "What does CSS do in a website?", options: ["Adds structure", "Adds styling/design", "Adds interactivity", "Stores data"], answer: 1 },
      { question: "To view any website's HTML source:", options: ["Ctrl+H", "Ctrl+U or right-click View Source", "Ctrl+S", "F5"], answer: 1 },
    ],
  },

  {
    id: "html-structure",
    title: "HTML Structure (DOCTYPE, html, head, body)",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 2,
    content: [
      {
        type: "text", heading: "The HTML Document Structure",
        content: "Every valid HTML document must follow a specific structure. Think of it like a standard letter format — there's a proper way to write it that everyone understands.\n\nThe four essential parts of every HTML document:\n1. <!DOCTYPE html> — Declaration (not a tag, just a declaration)\n2. <html> — The root element that wraps everything\n3. <head> — Contains metadata (invisible to users)\n4. <body> — Contains all visible content\n\nThis structure is MANDATORY. Without it, browsers will still try to display your page, but may do so incorrectly."
      },
      {
        type: "syntax",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <!-- METADATA SECTION - Not visible on page -->\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"description\" content=\"Page description for SEO\">\n    <meta name=\"author\" content=\"Your Name\">\n    <title>Page Title - Shown in Browser Tab</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n    <link rel=\"icon\" href=\"favicon.ico\">\n    <script src=\"script.js\" defer></script>\n</head>\n\n<body>\n    <!-- VISIBLE CONTENT SECTION -->\n    <h1>This appears on the page</h1>\n    <p>Everything inside body is visible to users.</p>\n</body>\n\n</html>",
        language: "html", label: "Complete HTML Structure"
      },
      {
        type: "table", heading: "Every Part Explained",
        content: "Part                    | Purpose                              | Required?\n------------------------|--------------------------------------|----------\n<!DOCTYPE html>         | Declares HTML5 to browser            | Yes\n<html lang=\"en\">        | Root element, lang = language code   | Yes\n<head>                  | Container for metadata               | Yes\n<meta charset=\"UTF-8\">  | Character encoding (supports emojis) | Yes\n<meta viewport>         | Responsive design for mobile         | Recommended\n<meta description>      | Page description for Google          | Recommended\n<title>                 | Text in browser tab & bookmarks      | Yes\n<link rel=\"stylesheet\"> | Link to external CSS file            | If using CSS\n<body>                  | All visible content goes here        | Yes"
      },
      {
        type: "text", heading: "The <head> Section in Detail",
        content: "The <head> section contains information ABOUT the page, not content FOR the page. Users don't see it directly, but it's crucial for:\n\n• Browser rendering — charset tells browser how to encode text\n• Mobile display — viewport meta tag makes page responsive\n• SEO — title and description tags help Google rank your page\n• Performance — loading CSS and JS correctly\n• Social media — Open Graph tags for Facebook/Twitter previews\n\nThe <title> tag is especially important:\n• Appears in browser tab\n• Appears in Google search results\n• Appears when you bookmark the page\n• Should be 50-60 characters, descriptive and unique"
      },
      {
        type: "text", heading: "The <body> Section",
        content: "The <body> section contains all the content that is visible to the user in the browser window. Everything you want users to see, read, click, or interact with goes inside <body>.\n\nThis includes:\n• Text — headings, paragraphs\n• Media — images, videos, audio\n• Links — hyperlinks to other pages\n• Forms — input fields, buttons\n• Tables — data tables\n• Any other visible element\n\nThe browser renders the body content from top to bottom, left to right (by default)."
      },
      {
        type: "example",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"description\" content=\"Learn HTML at CodeHub - Best free coding platform\">\n    <meta name=\"keywords\" content=\"HTML, CSS, web development, coding\">\n    <meta name=\"author\" content=\"CodeHub Team\">\n    <title>Learn HTML - CodeHub</title>\n    <!-- This is where you'd link your CSS -->\n    <!-- <link rel=\"stylesheet\" href=\"style.css\"> -->\n</head>\n<body>\n    <h1>Welcome to CodeHub HTML Course</h1>\n    <p>This content appears in the browser window.</p>\n    <p>The head section above is invisible to users.</p>\n\n    <!-- Page sections -->\n    <header>\n        <h2>Page Header</h2>\n    </header>\n\n    <main>\n        <p>Main content area</p>\n    </main>\n\n    <footer>\n        <p>Page Footer</p>\n    </footer>\n</body>\n</html>",
        output: "Browser tab shows: 'Learn HTML - CodeHub'\nPage displays:\n[H1] Welcome to CodeHub HTML Course\n[P] This content appears in the browser window.\n[P] The head section above is invisible to users.\n[H2] Page Header\n[P] Main content area\n[P] Page Footer",
        label: "Full HTML Document"
      },
      {
        type: "warning",
        content: "Without <meta charset=\"UTF-8\">, special characters like emojis, Hindi text, or accented letters (é, ü) may not display correctly. Always include this as the first tag inside <head>!"
      },
    ],
    quiz: [
      { question: "Which section contains visible content?", options: ["<head>", "<html>", "<body>", "<meta>"], answer: 2 },
      { question: "What does <!DOCTYPE html> do?", options: ["Creates a comment", "Declares HTML5 document", "Links CSS file", "Sets page title"], answer: 1 },
      { question: "<title> tag content appears where?", options: ["On the page", "In browser tab & search results", "In source code only", "In the footer"], answer: 1 },
      { question: "Which meta tag helps mobile display?", options: ["charset", "description", "viewport", "author"], answer: 2 },
      { question: "The <head> section contains:", options: ["Visible content", "Only images", "Metadata about the page", "Navigation links"], answer: 2 },
      { question: "lang=\"en\" in <html> specifies:", options: ["Layout direction", "Language of the page", "Line height", "Link style"], answer: 1 },
    ],
  },

  {
    id: "basic-tags",
    title: "Basic Tags (Headings, Paragraphs, Line Break)",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 3,
    content: [
      {
        type: "text", heading: "Heading Tags — h1 to h6",
        content: "HTML provides six levels of headings, from <h1> (most important, largest) to <h6> (least important, smallest). Headings create a visual hierarchy and are crucial for accessibility and SEO.\n\nImportant rules:\n• Use only ONE <h1> per page (main topic)\n• Don't skip levels (don't jump from h1 to h4)\n• Use headings for structure, not for making text big\n• Screen readers use headings to navigate pages\n• Google uses headings to understand page content\n\nThink of headings like a book:\n• h1 = Book title\n• h2 = Chapter title\n• h3 = Section within chapter\n• h4-h6 = Sub-sections"
      },
      {
        type: "syntax",
        code: "<!-- All 6 heading levels -->\n<h1>H1 - Main Page Title (Use only once)</h1>\n<h2>H2 - Major Section</h2>\n<h3>H3 - Sub-section</h3>\n<h4>H4 - Sub-sub-section</h4>\n<h5>H5 - Minor heading</h5>\n<h6>H6 - Smallest heading</h6>\n\n<!-- Headings in context -->\n<h1>Web Development Course</h1>\n    <h2>Module 1: HTML</h2>\n        <h3>Chapter 1: Introduction</h3>\n        <h3>Chapter 2: Tags</h3>\n    <h2>Module 2: CSS</h2>\n        <h3>Chapter 1: Selectors</h3>",
        language: "html", label: "Heading Tags"
      },
      {
        type: "text", heading: "Paragraph and Text Formatting Tags",
        content: "The <p> tag defines a paragraph. Browsers automatically add space before and after paragraphs.\n\nText Formatting Tags:\n• <b> — Bold (visual only)\n• <strong> — Bold + semantic importance (preferred!)\n• <i> — Italic (visual only)\n• <em> — Italic + semantic emphasis (preferred!)\n• <u> — Underline\n• <mark> — Highlighted (yellow background)\n• <del> — Strikethrough (deleted text)\n• <ins> — Underline (inserted text)\n• <small> — Smaller text\n• <big> — Larger text\n• <sub> — Subscript (H₂O)\n• <sup> — Superscript (x²)\n• <code> — Inline code (monospace font)\n• <pre> — Preformatted text (preserves spaces/newlines)\n• <blockquote> — Long quote from another source\n• <q> — Short inline quote\n• <abbr> — Abbreviation with tooltip"
      },
      {
        type: "syntax",
        code: "<!-- Paragraph -->\n<p>This is a paragraph. Browsers add space above and below.</p>\n<p>This is another paragraph. Each <p> starts on a new line.</p>\n\n<!-- Text formatting -->\n<p><b>Bold</b> and <strong>Strong (important)</strong></p>\n<p><i>Italic</i> and <em>Emphasized</em></p>\n<p><mark>Highlighted text</mark></p>\n<p><del>Deleted</del> and <ins>Inserted</ins></p>\n<p>H<sub>2</sub>O and x<sup>2</sup></p>\n<p><code>print(\"Hello\")</code> is Python code</p>\n<p><small>Copyright 2024</small></p>\n\n<!-- Preformatted text -->\n<pre>\n    Name:  Alice\n    Age:   20\n    City:  Delhi\n</pre>\n\n<!-- Blockquote -->\n<blockquote cite=\"https://source.com\">\n    \"The best way to predict the future is to invent it.\"\n    — Alan Kay\n</blockquote>\n\n<!-- Abbreviation -->\n<p><abbr title=\"HyperText Markup Language\">HTML</abbr> is easy!</p>",
        language: "html", label: "Paragraph & Text Formatting"
      },
      {
        type: "text", heading: "Line Break and Horizontal Rule",
        content: "<br> — Line Break\nCreates a single line break within text. It is a self-closing tag (no closing tag). Use sparingly — prefer CSS margin/padding for spacing.\n\n<hr> — Horizontal Rule\nCreates a full-width horizontal dividing line. Used to separate sections of content. Also self-closing.\n\nWhitespace in HTML:\nAn important concept: HTML ignores extra spaces, tabs, and newlines in your code. Whether you write one space or 100 spaces, the browser shows just one space. The only exceptions are inside <pre> tags and CSS white-space property."
      },
      {
        type: "syntax",
        code: "<!-- Line break -->\n<p>This is line one.<br>This starts on a new line.<br>This is line three.</p>\n\n<!-- Horizontal rule -->\n<h2>Section 1</h2>\n<p>Content of section 1...</p>\n<hr>\n<h2>Section 2</h2>\n<p>Content of section 2...</p>\n\n<!-- HTML ignores extra whitespace -->\n<p>This    has    many    spaces</p>\n<!-- Browser shows: \"This has many spaces\" -->\n\n<!-- Use &nbsp; for non-breaking space -->\n<p>10&nbsp;&nbsp;&nbsp;km</p>  <!-- preserves spaces -->",
        language: "html", label: "br, hr & Whitespace"
      },
      {
        type: "example",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Basic Tags Demo</title>\n</head>\n<body>\n\n    <h1>CodeHub - Learn to Code</h1>\n    <h2>About Our Platform</h2>\n    <p>CodeHub is the <strong>best</strong> platform to learn <em>web development</em>.</p>\n    <p>We offer courses in <mark>HTML, CSS, JavaScript</mark> and more!</p>\n\n    <h2>Our Mission</h2>\n    <blockquote>\n        \"Making quality education accessible to everyone.\"\n    </blockquote>\n\n    <h3>Key Features</h3>\n    <p>\n        Free courses<br>\n        Interactive quizzes<br>\n        Real projects<br>\n        Certificate on completion\n    </p>\n\n    <hr>\n\n    <h2>Technology Stack</h2>\n    <p>We use <code>React.js</code> and <code>Node.js</code></p>\n    <p><small>© 2024 CodeHub. All rights reserved.</small></p>\n\n</body>\n</html>",
        output: "Displays structured page with headings, formatted text, blockquote, line breaks, horizontal rule, and code formatting",
        label: "Full Text Formatting Page"
      },
      {
        type: "tip",
        content: "Use <strong> instead of <b> and <em> instead of <i> for semantic HTML. They look the same visually but <strong>/<em> carry meaning for screen readers and SEO. This is called semantic HTML!"
      },
    ],
    quiz: [
      { question: "How many h1 tags should a page have?", options: ["As many as needed", "Only one", "Two maximum", "No limit"], answer: 1 },
      { question: "Which tag is semantically 'important' (not just bold)?", options: ["<b>", "<bold>", "<strong>", "<big>"], answer: 2 },
      { question: "<br> is a:", options: ["Block element with closing tag", "Self-closing tag", "Container tag", "Formatting tag with /br"], answer: 1 },
      { question: "What does <pre> do?", options: ["Makes text larger", "Preserves spaces and line breaks", "Creates a paragraph", "Bold text"], answer: 1 },
      { question: "<sub> tag creates:", options: ["Superscript (x²)", "Subscript (H₂O)", "Bold text", "Small text"], answer: 1 },
      { question: "HTML ignores extra spaces. True or false?", options: ["False", "True", "Only in paragraphs", "Only in headings"], answer: 1 },
      { question: "<hr> creates:", options: ["Header section", "Horizontal dividing line", "Hard return", "Highlighted row"], answer: 1 },
    ],
  },

  {
    id: "links-images",
    title: "Links & Images",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 4,
    content: [
      {
        type: "text", heading: "Links with <a> tag",
        content: "The anchor tag <a> creates hyperlinks — clickable text, images, or elements that navigate to another page, file, or section.\n\nThe href attribute (HyperText Reference) specifies where the link goes. It is the most important attribute of <a>.\n\nTypes of links:\n1. Absolute URL — full web address: href=\"https://google.com\"\n2. Relative URL — relative to current file: href=\"about.html\"\n3. Anchor link — jump to section on same page: href=\"#section-id\"\n4. Email link — opens email app: href=\"mailto:user@email.com\"\n5. Phone link — calls on mobile: href=\"tel:+919876543210\"\n6. Download — downloads the file: href=\"file.pdf\" download\n\nThe target attribute controls where the link opens:\n• target=\"_self\" — same tab (default)\n• target=\"_blank\" — new tab\n• target=\"_parent\" — parent frame\n• target=\"_top\" — top-level window"
      },
      {
        type: "syntax",
        code: "<!-- Basic external link -->\n<a href=\"https://www.google.com\">Go to Google</a>\n\n<!-- Open in new tab -->\n<a href=\"https://youtube.com\" target=\"_blank\" rel=\"noopener\">YouTube</a>\n\n<!-- Internal page link -->\n<a href=\"about.html\">About Us</a>\n<a href=\"courses/python.html\">Python Course</a>\n\n<!-- Anchor link (jump to section) -->\n<a href=\"#contact\">Jump to Contact Section</a>\n<!-- The target section needs matching id -->\n<section id=\"contact\">\n    <h2>Contact Us</h2>\n</section>\n\n<!-- Email & phone -->\n<a href=\"mailto:hello@codehub.com\">Email Us</a>\n<a href=\"tel:+919876543210\">📞 Call Us</a>\n\n<!-- Download file -->\n<a href=\"notes.pdf\" download>Download PDF Notes</a>\n<a href=\"photo.jpg\" download=\"my-photo.jpg\">Download Photo</a>\n\n<!-- Image as a link -->\n<a href=\"https://codehub.com\">\n    <img src=\"logo.png\" alt=\"CodeHub Logo\">\n</a>",
        language: "html", label: "All Link Types"
      },
      {
        type: "text", heading: "Images with <img> tag",
        content: "The <img> tag embeds images in a webpage. It is a self-closing (void) element — no closing tag needed.\n\nRequired attributes:\n• src — path to the image (local file or URL)\n• alt — alternative text description\n\nOptional attributes:\n• width — image width (pixels or %)\n• height — image height\n• title — tooltip text shown on hover\n• loading=\"lazy\" — loads image only when visible (performance!)\n• style — inline CSS styling\n\nImage file formats:\n• JPG/JPEG — photos, complex images (lossy compression)\n• PNG — images needing transparency, screenshots\n• GIF — simple animations\n• SVG — vector graphics, logos (scales perfectly)\n• WebP — modern format, smaller size, better quality"
      },
      {
        type: "table", heading: "Image Path Types",
        content: "Type            | Example                              | When to use\n----------------|--------------------------------------|---------------------------\nAbsolute URL    | https://site.com/img/photo.jpg       | External images from web\nRelative (same) | photo.jpg                            | Same folder as HTML file\nRelative (sub)  | images/photo.jpg                     | Image in images/ subfolder\nRelative (up)   | ../images/photo.jpg                  | Image in parent folder\nData URL        | data:image/png;base64,...            | Embedded images (no file)"
      },
      {
        type: "syntax",
        code: "<!-- Basic image -->\n<img src=\"photo.jpg\" alt=\"A beautiful landscape photo\">\n\n<!-- Image with dimensions -->\n<img src=\"logo.png\" alt=\"Company logo\" width=\"200\" height=\"80\">\n\n<!-- Responsive image -->\n<img src=\"banner.jpg\" alt=\"Banner\" style=\"width:100%; height:auto;\">\n\n<!-- External image URL -->\n<img src=\"https://picsum.photos/400/250\" alt=\"Random photo\">\n\n<!-- Lazy loading (better performance) -->\n<img src=\"photo.jpg\" alt=\"Photo\" loading=\"lazy\">\n\n<!-- Image with tooltip -->\n<img src=\"cat.jpg\" alt=\"Orange cat\" title=\"Meet Whiskers!\">\n\n<!-- Figure with caption (semantic) -->\n<figure>\n    <img src=\"chart.png\" alt=\"Monthly sales chart\" width=\"500\">\n    <figcaption>Figure 1: Monthly sales data for 2024</figcaption>\n</figure>",
        language: "html", label: "Image Tags"
      },
      {
        type: "example",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Links & Images Demo</title>\n</head>\n<body>\n\n    <h1>CodeHub - Web Resources</h1>\n\n    <!-- Navigation -->\n    <nav>\n        <a href=\"index.html\">Home</a> |\n        <a href=\"courses.html\">Courses</a> |\n        <a href=\"#contact\">Contact</a>\n    </nav>\n\n    <h2>Useful Links</h2>\n    <ul>\n        <li><a href=\"https://developer.mozilla.org\" target=\"_blank\">MDN Web Docs</a></li>\n        <li><a href=\"https://w3schools.com\" target=\"_blank\">W3Schools</a></li>\n        <li><a href=\"mailto:learn@codehub.com\">📧 Email Us</a></li>\n    </ul>\n\n    <h2>Our Courses</h2>\n    <figure>\n        <img src=\"https://picsum.photos/600/300\" alt=\"Web development courses\" width=\"600\">\n        <figcaption>Our comprehensive web development curriculum</figcaption>\n    </figure>\n\n    <h2 id=\"contact\">Contact Section</h2>\n    <p>You jumped here from the navigation anchor link!</p>\n    <p><a href=\"#\">↑ Back to Top</a></p>\n\n</body>\n</html>",
        output: "Full page with navigation, links list, image with caption, and contact section",
        label: "Links & Images Page"
      },
      {
        type: "warning",
        content: "Always add rel=\"noopener noreferrer\" when using target=\"_blank\"! Without it, the opened page can access your page via JavaScript (security risk). Write: <a href=\"...\" target=\"_blank\" rel=\"noopener noreferrer\">"
      },
    ],
    quiz: [
      { question: "Which attribute specifies where a link goes?", options: ["src", "href", "link", "url"], answer: 1 },
      { question: "To open a link in new tab:", options: ["target=\"new\"", "target=\"_blank\"", "open=\"tab\"", "new=\"true\""], answer: 1 },
      { question: "alt attribute in <img> is for:", options: ["Image title", "Image size", "Alternative text description", "Image alignment"], answer: 2 },
      { question: "Which is the best format for logos/icons?", options: ["JPG", "PNG", "SVG", "GIF"], answer: 2 },
      { question: "href=\"#about\" links to:", options: ["External page named about", "File called #about", "Element with id=\"about\" on same page", "New window"], answer: 2 },
      { question: "<figure> wraps an image with:", options: ["A link", "A caption using <figcaption>", "A border", "Animation"], answer: 1 },
      { question: "loading=\"lazy\" on images:", options: ["Makes images load faster always", "Loads image only when visible (performance)", "Makes image smaller", "Hides image"], answer: 1 },
    ],
  },

  {
    id: "html-lists",
    title: "Lists (Ordered, Unordered, Description)",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 5,
    content: [
      {
        type: "text", heading: "Types of Lists in HTML",
        content: "HTML provides three types of lists for organizing information:\n\n1. Unordered List <ul> — bullet points, order doesn't matter\n   Best for: navigation menus, feature lists, ingredients, options\n\n2. Ordered List <ol> — numbered items, order matters\n   Best for: step-by-step instructions, rankings, recipes, procedures\n\n3. Description List <dl> — pairs of terms and descriptions\n   Best for: glossaries, FAQs, key-value data, dictionary entries\n\nAll lists use <li> (List Item) for each item, except description lists which use:\n• <dt> — Description Term (the word/key)\n• <dd> — Description Details (the definition/value)"
      },
      {
        type: "table", heading: "List Types Comparison",
        content: "Type              | Tag  | Items | Bullet/Number  | Use Case\n------------------|------|-------|----------------|----------------------\nUnordered         | <ul> | <li>  | Bullets (•)    | Menus, features\nOrdered           | <ol> | <li>  | 1, 2, 3...     | Steps, rankings\nDescription       | <dl> | dt/dd | None           | Glossary, FAQ\n\n<ol> type attribute values:\ntype=\"1\" → 1, 2, 3 (default)\ntype=\"A\" → A, B, C\ntype=\"a\" → a, b, c\ntype=\"I\" → I, II, III\ntype=\"i\" → i, ii, iii"
      },
      {
        type: "syntax",
        code: "<!-- Unordered List -->\n<ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n    <li>React</li>\n</ul>\n\n<!-- Ordered List -->\n<ol>\n    <li>Install VS Code</li>\n    <li>Create index.html</li>\n    <li>Write HTML code</li>\n    <li>Open in browser</li>\n</ol>\n\n<!-- Ordered list - custom start and type -->\n<ol type=\"A\" start=\"3\">\n    <li>Item C</li>\n    <li>Item D</li>\n    <li>Item E</li>\n</ol>\n\n<!-- Reversed ordered list -->\n<ol reversed>\n    <li>Gold Medal</li>\n    <li>Silver Medal</li>\n    <li>Bronze Medal</li>\n</ol>\n\n<!-- Description List -->\n<dl>\n    <dt><strong>HTML</strong></dt>\n    <dd>HyperText Markup Language — creates structure of web pages</dd>\n\n    <dt><strong>CSS</strong></dt>\n    <dd>Cascading Style Sheets — styles the appearance of web pages</dd>\n\n    <dt><strong>JavaScript</strong></dt>\n    <dd>Programming language — adds interactivity to web pages</dd>\n</dl>",
        language: "html", label: "All List Types"
      },
      {
        type: "text", heading: "Nested Lists",
        content: "Lists can be nested inside each other to create multi-level structures — like a table of contents, an outline, or a site map.\n\nTo nest a list: Place a new <ul> or <ol> INSIDE an <li> element.\n\nBrowsers automatically indent nested lists and change bullet styles:\n• Level 1: filled circle (•)\n• Level 2: open circle (○)\n• Level 3: filled square (■)\n\nYou can customize these with CSS: list-style-type property"
      },
      {
        type: "syntax",
        code: "<!-- Nested list - Web Development Roadmap -->\n<ul>\n    <li>Frontend Development\n        <ul>\n            <li>HTML\n                <ul>\n                    <li>Tags & Elements</li>\n                    <li>Forms</li>\n                    <li>Semantic HTML</li>\n                </ul>\n            </li>\n            <li>CSS\n                <ul>\n                    <li>Selectors</li>\n                    <li>Flexbox</li>\n                    <li>Grid</li>\n                </ul>\n            </li>\n            <li>JavaScript</li>\n        </ul>\n    </li>\n    <li>Backend Development\n        <ul>\n            <li>Python / Node.js</li>\n            <li>Databases</li>\n            <li>APIs</li>\n        </ul>\n    </li>\n</ul>",
        language: "html", label: "Nested Lists"
      },
      {
        type: "example",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Lists Demo</title>\n</head>\n<body>\n\n    <h1>Web Development Curriculum</h1>\n\n    <h2>Technologies (Unordered)</h2>\n    <ul>\n        <li>HTML — Structure</li>\n        <li>CSS — Styling</li>\n        <li>JavaScript — Interactivity</li>\n        <li>React — UI Framework</li>\n    </ul>\n\n    <h2>Learning Steps (Ordered)</h2>\n    <ol>\n        <li>Master HTML basics (2 weeks)</li>\n        <li>Style with CSS (3 weeks)</li>\n        <li>Add JavaScript (4 weeks)</li>\n        <li>Learn React framework (4 weeks)</li>\n        <li>Build and deploy projects</li>\n    </ol>\n\n    <h2>Top Rankings (Reversed)</h2>\n    <ol reversed>\n        <li>React</li>\n        <li>Vue</li>\n        <li>Angular</li>\n    </ol>\n\n    <h2>Glossary (Description List)</h2>\n    <dl>\n        <dt><strong>DOM</strong></dt>\n        <dd>Document Object Model — a tree of all HTML elements that JavaScript can interact with.</dd>\n\n        <dt><strong>API</strong></dt>\n        <dd>Application Programming Interface — a way for apps to communicate with each other.</dd>\n\n        <dt><strong>Responsive Design</strong></dt>\n        <dd>Making websites look good on all screen sizes — desktop, tablet, mobile.</dd>\n    </dl>\n\n</body>\n</html>",
        output: "Page shows unordered list with bullets, numbered steps, reversed ranking list, and a glossary",
        label: "Complete Lists Page"
      },
    ],
    quiz: [
      { question: "Which tag creates an unordered list?", options: ["<ol>", "<ul>", "<li>", "<dl>"], answer: 1 },
      { question: "List items are created with:", options: ["<item>", "<li>", "<list>", "<point>"], answer: 1 },
      { question: "<ol type=\"I\"> creates:", options: ["Numbers 1,2,3", "Letters A,B,C", "Roman numerals I,II,III", "Bullets"], answer: 2 },
      { question: "Description list term uses:", options: ["<dt>", "<dd>", "<dl>", "<di>"], answer: 0 },
      { question: "Nested list means:", options: ["List with images", "List inside another list item", "Colored list", "Sorted list"], answer: 1 },
      { question: "<ol reversed> creates:", options: ["Alphabetical order", "Countdown (3,2,1)", "Random order", "Reversed bullets"], answer: 1 },
    ],
  },

  {
    id: "html-tables",
    title: "Tables",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 6,
    content: [
      {
        type: "text", heading: "What are HTML Tables?",
        content: "HTML tables display data in rows and columns — like a spreadsheet. Use tables for displaying structured data like schedules, price lists, comparison charts, or any tabular information.\n\nImportant: Tables should ONLY be used for tabular data, NOT for page layout. Many old websites used tables for layout (positioning columns, headers, etc.) but this is now considered bad practice. Use CSS Flexbox or Grid for layout instead.\n\nBasic Table Structure:\n• <table> — wraps the entire table\n• <tr> — Table Row (each horizontal row)\n• <th> — Table Header cell (bold, centered by default)\n• <td> — Table Data cell (regular data)\n• <thead> — Groups header rows (semantic)\n• <tbody> — Groups body rows (semantic)\n• <tfoot> — Groups footer rows (semantic)\n• <caption> — Table title/description"
      },
      {
        type: "table", heading: "Table Tags Reference",
        content: "Tag         | Full Name           | Purpose\n------------|---------------------|---------------------------\n<table>     | Table               | Container for the whole table\n<tr>        | Table Row           | Horizontal row of cells\n<th>        | Table Header        | Header cell (bold + centered)\n<td>        | Table Data          | Regular data cell\n<thead>     | Table Head          | Group of header rows\n<tbody>     | Table Body          | Group of body rows\n<tfoot>     | Table Foot          | Group of footer rows\n<caption>   | Caption             | Title above the table\ncolspan=\"n\" | Column Span         | Cell spans n columns\nrowspan=\"n\" | Row Span            | Cell spans n rows"
      },
      {
        type: "syntax",
        code: "<!-- Basic table -->\n<table border=\"1\">\n    <tr>\n        <th>Name</th>\n        <th>Age</th>\n        <th>City</th>\n    </tr>\n    <tr>\n        <td>Alice</td>\n        <td>20</td>\n        <td>Delhi</td>\n    </tr>\n    <tr>\n        <td>Bob</td>\n        <td>22</td>\n        <td>Mumbai</td>\n    </tr>\n</table>",
        language: "html", label: "Basic Table"
      },
      {
        type: "syntax",
        code: "<!-- Structured table with thead, tbody, tfoot -->\n<table border=\"1\">\n    <caption>Student Marks Report</caption>\n\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Math</th>\n            <th>Science</th>\n            <th>English</th>\n            <th>Total</th>\n        </tr>\n    </thead>\n\n    <tbody>\n        <tr>\n            <td>Alice</td>\n            <td>95</td>\n            <td>88</td>\n            <td>92</td>\n            <td>275</td>\n        </tr>\n        <tr>\n            <td>Bob</td>\n            <td>78</td>\n            <td>82</td>\n            <td>75</td>\n            <td>235</td>\n        </tr>\n    </tbody>\n\n    <tfoot>\n        <tr>\n            <th>Average</th>\n            <td>86.5</td>\n            <td>85</td>\n            <td>83.5</td>\n            <td>255</td>\n        </tr>\n    </tfoot>\n</table>",
        language: "html", label: "Structured Table"
      },
      {
        type: "text", heading: "colspan and rowspan",
        content: "Sometimes a cell needs to span multiple columns or rows:\n\ncolspan=\"n\" — the cell spans n columns horizontally\nrowspan=\"n\" — the cell spans n rows vertically\n\nThink of it like merging cells in Microsoft Excel!\n\nExample colspan: A table header 'Personal Info' spanning 3 columns (Name, Age, City)\nExample rowspan: A 'Monday' cell spanning 2 rows (Morning and Afternoon)"
      },
      {
        type: "syntax",
        code: "<!-- colspan example -->\n<table border=\"1\">\n    <tr>\n        <th colspan=\"3\">Personal Information</th>  <!-- spans 3 cols -->\n    </tr>\n    <tr>\n        <th>Name</th>\n        <th>Age</th>\n        <th>City</th>\n    </tr>\n    <tr>\n        <td>Alice</td>\n        <td>20</td>\n        <td>Delhi</td>\n    </tr>\n</table>\n\n<!-- rowspan example -->\n<table border=\"1\">\n    <tr>\n        <td rowspan=\"2\">Monday</td>  <!-- spans 2 rows -->\n        <td>9:00 AM - Math</td>\n    </tr>\n    <tr>\n        <!-- Monday cell already used up -->\n        <td>11:00 AM - Science</td>\n    </tr>\n    <tr>\n        <td>Tuesday</td>\n        <td>9:00 AM - English</td>\n    </tr>\n</table>",
        language: "html", label: "colspan & rowspan"
      },
      {
        type: "example",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Course Comparison Table</title>\n    <style>\n        table { border-collapse: collapse; width: 100%; }\n        th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }\n        th { background-color: #3b82f6; color: white; }\n        tr:nth-child(even) { background-color: #f3f4f6; }\n    </style>\n</head>\n<body>\n    <h1>CodeHub Course Comparison</h1>\n\n    <table>\n        <caption><strong>Available Courses 2024</strong></caption>\n        <thead>\n            <tr>\n                <th>Course</th>\n                <th>Level</th>\n                <th>Chapters</th>\n                <th>Duration</th>\n                <th>Price</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>Python</td>\n                <td>Beginner</td>\n                <td>18</td>\n                <td>6 weeks</td>\n                <td>Free</td>\n            </tr>\n            <tr>\n                <td>HTML</td>\n                <td>Beginner</td>\n                <td>14</td>\n                <td>4 weeks</td>\n                <td>Free</td>\n            </tr>\n            <tr>\n                <td>CSS</td>\n                <td>Intermediate</td>\n                <td>16</td>\n                <td>5 weeks</td>\n                <td>Free</td>\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr>\n                <th colspan=\"2\">Total</th>\n                <td>48 chapters</td>\n                <td>15 weeks</td>\n                <td>All Free!</td>\n            </tr>\n        </tfoot>\n    </table>\n</body>\n</html>",
        output: "Displays a styled comparison table with colored header, striped rows, and footer spanning columns",
        label: "Course Comparison Table"
      },
      {
        type: "tip",
        content: "Add style='border-collapse: collapse;' to your table to remove double borders between cells. This is almost always what you want! Also use padding on th and td for better readability."
      },
    ],
    quiz: [
      { question: "Which tag creates a table row?", options: ["<td>", "<th>", "<tr>", "<row>"], answer: 2 },
      { question: "<th> vs <td>:", options: ["Same thing", "th is header (bold+centered), td is data", "th is for numbers only", "td is deprecated"], answer: 1 },
      { question: "colspan=\"3\" means cell spans:", options: ["3 rows", "3 columns", "3 pixels", "3 tables"], answer: 1 },
      { question: "Table caption goes:", options: ["Inside <thead>", "Outside table", "Inside <tbody>", "Inside <table> using <caption>"], answer: 3 },
      { question: "<tfoot> contains:", options: ["Table title", "Table header row", "Summary/footer rows", "Table borders"], answer: 2 },
      { question: "Should you use tables for page layout?", options: ["Yes, it's the standard", "No, use CSS Flexbox/Grid instead", "Only for 2-column layouts", "Yes in HTML5"], answer: 1 },
    ],
  },

  {
    id: "html-forms",
    title: "Forms (input, button, textarea)",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 7,
    content: [
      {
        type: "text", heading: "What are HTML Forms?",
        content: "Forms allow users to input data and submit it to a server. They are essential for:\n• Login and registration pages\n• Search bars\n• Contact forms\n• Payment forms\n• Surveys and feedback\n• Any user interaction involving data input\n\nThe <form> element is the container. Key attributes:\n• action — URL where form data is sent: action=\"/submit\"\n• method — HTTP method: method=\"GET\" or method=\"POST\"\n  - GET: data goes in URL (visible) — for search, filtering\n  - POST: data goes in request body (hidden) — for passwords, sensitive data"
      },
      {
        type: "table", heading: "Input Types Reference",
        content: "type=           | Creates                      | Example\n----------------|------------------------------|---------------------------\ntext            | Single-line text box         | Name field\npassword        | Password (hidden chars)      | Login password\nemail           | Email with validation        | user@email.com\nnumber          | Number spinner               | Age, quantity\ntel             | Phone number                 | +91 98765 43210\nurl             | URL with validation          | https://site.com\ndate            | Date picker                  | 2024-01-15\ntime            | Time picker                  | 14:30\ndatetime-local  | Date + time picker           | Full datetime\ncheckbox        | Tick box (multiple select)   | Agree to terms\nradio           | Radio button (one select)    | Gender selection\nrange           | Slider                       | Volume 0-100\ncolor           | Color picker                 | Background color\nfile            | File upload button           | Upload image\nhidden          | Invisible field              | CSRF token\nsubmit          | Submit button                | Submit form\nreset           | Reset form to defaults       | Clear form\nbutton          | Clickable button             | Custom action\nsearch          | Search field with X button   | Search box"
      },
      {
        type: "syntax",
        code: "<!-- Complete form structure -->\n<form action=\"/submit\" method=\"POST\">\n\n    <!-- Text input -->\n    <label for=\"name\">Full Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\"\n           placeholder=\"Enter your name\"\n           required minlength=\"2\" maxlength=\"50\">\n\n    <!-- Email input -->\n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\"\n           placeholder=\"you@example.com\" required>\n\n    <!-- Password -->\n    <label for=\"pass\">Password:</label>\n    <input type=\"password\" id=\"pass\" name=\"password\"\n           minlength=\"8\" required>\n\n    <!-- Number -->\n    <label for=\"age\">Age:</label>\n    <input type=\"number\" id=\"age\" name=\"age\"\n           min=\"1\" max=\"120\" value=\"18\">\n\n    <!-- Radio buttons -->\n    <p>Gender:</p>\n    <input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\">\n    <label for=\"male\">Male</label>\n    <input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\">\n    <label for=\"female\">Female</label>\n\n    <!-- Checkboxes -->\n    <input type=\"checkbox\" id=\"terms\" name=\"terms\" required>\n    <label for=\"terms\">I agree to Terms & Conditions</label>\n\n    <!-- Submit button -->\n    <button type=\"submit\">Create Account</button>\n    <button type=\"reset\">Clear Form</button>\n\n</form>",
        language: "html", label: "Form with Input Types"
      },
      {
        type: "text", heading: "More Form Elements",
        content: "Beyond <input>, HTML provides several other form elements:\n\n<textarea> — Multi-line text area\n  rows and cols attributes set the size\n  Content goes between opening and closing tags\n\n<select> — Dropdown menu\n  Contains <option> elements\n  multiple attribute allows selecting multiple\n  <optgroup> groups related options\n\n<fieldset> — Groups related form fields\n  <legend> — Title for the fieldset group\n  Improves accessibility and visual organization\n\n<datalist> — Suggestion list for text input\n  Works with list attribute on <input>\n  User can type OR select from suggestions"
      },
      {
        type: "syntax",
        code: "<!-- Textarea -->\n<label for=\"message\">Message:</label>\n<textarea id=\"message\" name=\"message\"\n          rows=\"5\" cols=\"40\"\n          placeholder=\"Write your message here...\"\n          maxlength=\"500\">\n</textarea>\n\n<!-- Select dropdown -->\n<label for=\"course\">Choose Course:</label>\n<select id=\"course\" name=\"course\">\n    <option value=\"\">-- Select a course --</option>\n    <optgroup label=\"Web Development\">\n        <option value=\"html\">HTML</option>\n        <option value=\"css\">CSS</option>\n        <option value=\"js\">JavaScript</option>\n    </optgroup>\n    <optgroup label=\"Programming\">\n        <option value=\"python\" selected>Python</option>\n        <option value=\"c\">C Language</option>\n    </optgroup>\n</select>\n\n<!-- Fieldset with legend -->\n<fieldset>\n    <legend>Personal Information</legend>\n    <label>Name: <input type=\"text\" name=\"name\"></label>\n    <label>Age: <input type=\"number\" name=\"age\"></label>\n</fieldset>\n\n<!-- Datalist (autocomplete suggestions) -->\n<label for=\"country\">Country:</label>\n<input list=\"countries\" id=\"country\" name=\"country\">\n<datalist id=\"countries\">\n    <option value=\"India\">\n    <option value=\"USA\">\n    <option value=\"UK\">\n    <option value=\"Australia\">\n</datalist>",
        language: "html", label: "textarea, select, fieldset"
      },
      {
        type: "example",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Registration Form</title>\n    <style>\n        body { font-family: Arial, sans-serif; max-width: 500px; margin: 30px auto; padding: 20px; }\n        label { display: block; margin-top: 15px; font-weight: bold; color: #374151; }\n        input, select, textarea { width: 100%; padding: 10px; margin-top: 5px;\n            border: 1px solid #d1d5db; border-radius: 8px; box-sizing: border-box; }\n        button { margin-top: 20px; padding: 12px 30px; background: #3b82f6;\n            color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; }\n        button:hover { background: #2563eb; }\n    </style>\n</head>\n<body>\n    <h1>Create Account</h1>\n\n    <form action=\"/register\" method=\"POST\">\n        <fieldset>\n            <legend>Personal Details</legend>\n\n            <label for=\"name\">Full Name *</label>\n            <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Alice Johnson\" required>\n\n            <label for=\"email\">Email Address *</label>\n            <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"alice@example.com\" required>\n\n            <label for=\"dob\">Date of Birth</label>\n            <input type=\"date\" id=\"dob\" name=\"dob\">\n\n            <label>Gender</label>\n            <input type=\"radio\" id=\"m\" name=\"gender\" value=\"male\"> <label for=\"m\">Male</label>\n            <input type=\"radio\" id=\"f\" name=\"gender\" value=\"female\"> <label for=\"f\">Female</label>\n        </fieldset>\n\n        <fieldset>\n            <legend>Account Details</legend>\n\n            <label for=\"pass\">Password *</label>\n            <input type=\"password\" id=\"pass\" name=\"password\" minlength=\"8\" required>\n\n            <label for=\"course\">Interested Course</label>\n            <select id=\"course\" name=\"course\">\n                <option value=\"\">Choose...</option>\n                <option value=\"html\">HTML</option>\n                <option value=\"css\">CSS</option>\n                <option value=\"python\">Python</option>\n            </select>\n\n            <label for=\"bio\">About Yourself</label>\n            <textarea id=\"bio\" name=\"bio\" rows=\"4\" placeholder=\"Tell us about yourself...\"></textarea>\n\n            <br>\n            <input type=\"checkbox\" id=\"terms\" name=\"terms\" required>\n            <label for=\"terms\">I agree to the Terms &amp; Conditions</label>\n        </fieldset>\n\n        <button type=\"submit\">Create Account 🚀</button>\n        <button type=\"reset\" style=\"background:#6b7280; margin-left:10px\">Reset</button>\n    </form>\n</body>\n</html>",
        output: "A complete styled registration form with name, email, date, gender radio, password, course select, textarea, and checkbox",
        label: "Complete Registration Form"
      },
      {
        type: "warning",
        content: "Always use <label> with for attribute matching the input's id. This makes forms accessible — clicking the label focuses the input. It also helps screen readers describe inputs to visually impaired users."
      },
    ],
    quiz: [
      { question: "Which form method hides data in request body?", options: ["GET", "POST", "PUT", "SEND"], answer: 1 },
      { question: "input type for password (hidden characters):", options: ["type=\"hidden\"", "type=\"secret\"", "type=\"password\"", "type=\"text\" hidden"], answer: 2 },
      { question: "Which allows multi-line text input?", options: ["<input type=\"text\">", "<textarea>", "<input type=\"multi\">", "<multiline>"], answer: 1 },
      { question: "<label for=\"email\"> links to:", options: ["Class named email", "ID named email", "Name attribute email", "Type email"], answer: 1 },
      { question: "Radio buttons — user can select:", options: ["All of them", "None", "Only ONE from same name group", "Up to 3"], answer: 2 },
      { question: "required attribute on input:", options: ["Requires CSS", "Makes field mandatory before submit", "Requires JavaScript", "Marks it read-only"], answer: 1 },
      { question: "<fieldset> is used for:", options: ["Table fields", "Grouping related form fields", "File upload", "Form action"], answer: 1 },
    ],
  },

  {
    id: "semantic-tags",
    title: "Semantic Tags",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 8,
    content: [
      {
        type: "text", heading: "What is Semantic HTML?",
        content: "Semantic HTML means using HTML tags that carry MEANING about the content they contain. Instead of using <div> and <span> for everything, semantic tags describe the PURPOSE and ROLE of the content.\n\nNon-semantic tags (tell us nothing about content):\n<div> — generic block container\n<span> — generic inline container\n\nSemantic tags (describe their purpose):\n<header> — page or section header\n<nav> — navigation links\n<main> — main content area\n<article> — independent, self-contained content\n<section> — thematic group of content\n<aside> — sidebar, related content\n<footer> — page or section footer\n\nWhy use semantic HTML?\n✅ Better SEO — Google understands your content structure\n✅ Accessibility — Screen readers navigate by landmarks\n✅ Readability — Other developers understand your code\n✅ Maintainability — Easier to update and debug"
      },
      {
        type: "table", heading: "Semantic Tags Reference",
        content: "Tag          | Purpose                              | Typical Location\n-------------|--------------------------------------|---------------------------\n<header>     | Page/section header, logo, title     | Top of page or section\n<nav>        | Navigation links menu                | Inside header or standalone\n<main>       | Primary content (only ONE per page)  | Middle of page\n<article>    | Self-contained content (blog post)   | Inside main or section\n<section>    | Thematic group of related content    | Inside main or article\n<aside>      | Sidebar, ads, related links          | Beside main content\n<footer>     | Copyright, links, contact info       | Bottom of page or section\n<figure>     | Image with caption                   | Inside articles\n<figcaption> | Caption for figure                   | Inside figure\n<time>       | Date/time value                      | Inside articles, events\n<address>    | Contact information                  | Inside footer\n<mark>       | Highlighted/important text           | Inside paragraphs\n<details>    | Expandable/collapsible content       | FAQ, spoilers\n<summary>    | Visible title for details element    | Inside details"
      },
      {
        type: "syntax",
        code: "<!-- Non-semantic (OLD way - avoid) -->\n<div id=\"header\">\n    <div id=\"nav\">\n        <div class=\"nav-item\">Home</div>\n    </div>\n</div>\n<div id=\"main\">\n    <div class=\"article\">\n        <div class=\"content\">Post content...</div>\n    </div>\n</div>\n<div id=\"footer\">Footer</div>\n\n<!-- Semantic (CORRECT way) -->\n<header>\n    <nav>\n        <a href=\"/\">Home</a>\n        <a href=\"/courses\">Courses</a>\n    </nav>\n</header>\n<main>\n    <article>\n        <h1>Article Title</h1>\n        <p>Article content...</p>\n    </article>\n</main>\n<footer>\n    <p>© 2024 CodeHub</p>\n</footer>",
        language: "html", label: "Semantic vs Non-Semantic"
      },
      {
        type: "text", heading: "article vs section vs div",
        content: "This is confusing for beginners. Here's how to decide:\n\n<article> — Could stand alone, could be syndicated/shared. Ask: 'Would this make sense if copied to another website?' If yes → <article>. Examples: blog post, news article, product card, forum post, comment.\n\n<section> — Groups related content WITH a heading. It's a thematic grouping. Examples: 'About Us' section, 'Features' section, chapter in a document.\n\n<div> — No semantic meaning. Use it ONLY when no semantic tag fits. It's just a container for CSS styling purposes.\n\nRule of thumb:\nIs it standalone content? → <article>\nIs it a themed group with heading? → <section>\nIs it just for styling? → <div>"
      },
      {
        type: "syntax",
        code: "<!-- Real-world semantic page structure -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>CodeHub Blog</title>\n</head>\n<body>\n\n    <header>\n        <img src=\"logo.png\" alt=\"CodeHub Logo\">\n        <h1>CodeHub</h1>\n        <nav>\n            <ul>\n                <li><a href=\"/\">Home</a></li>\n                <li><a href=\"/courses\">Courses</a></li>\n                <li><a href=\"/blog\">Blog</a></li>\n            </ul>\n        </nav>\n    </header>\n\n    <main>\n        <section id=\"featured\">\n            <h2>Featured Articles</h2>\n\n            <article>\n                <header>\n                    <h3>Getting Started with HTML</h3>\n                    <time datetime=\"2024-01-15\">January 15, 2024</time>\n                </header>\n                <p>Learn the basics of HTML in this comprehensive guide...</p>\n                <footer>\n                    <a href=\"/blog/html-basics\">Read More →</a>\n                </footer>\n            </article>\n\n            <article>\n                <header>\n                    <h3>CSS Flexbox Complete Guide</h3>\n                    <time datetime=\"2024-01-20\">January 20, 2024</time>\n                </header>\n                <p>Master CSS Flexbox with practical examples...</p>\n                <footer>\n                    <a href=\"/blog/flexbox\">Read More →</a>\n                </footer>\n            </article>\n        </section>\n\n        <aside>\n            <h3>Popular Courses</h3>\n            <ul>\n                <li><a href=\"/courses/python\">Python</a></li>\n                <li><a href=\"/courses/html\">HTML</a></li>\n            </ul>\n        </aside>\n    </main>\n\n    <footer>\n        <address>\n            <p>Contact: <a href=\"mailto:hello@codehub.com\">hello@codehub.com</a></p>\n        </address>\n        <p><small>&copy; 2024 CodeHub. All rights reserved.</small></p>\n    </footer>\n\n</body>\n</html>",
        language: "html", label: "Complete Semantic Page"
      },
      {
        type: "syntax",
        code: "<!-- Other useful semantic elements -->\n\n<!-- details & summary - expandable FAQ -->\n<details>\n    <summary>What is HTML? (click to expand)</summary>\n    <p>HTML stands for HyperText Markup Language. It is the standard language for creating web pages.</p>\n</details>\n\n<details>\n    <summary>Is HTML hard to learn?</summary>\n    <p>No! HTML is one of the easiest languages to learn. You can build your first page in hours.</p>\n</details>\n\n<!-- time element -->\n<p>Published: <time datetime=\"2024-01-15T10:30\">January 15, 2024</time></p>\n\n<!-- mark - highlighted text -->\n<p>The most important concept is <mark>semantic HTML</mark>.</p>\n\n<!-- address -->\n<address>\n    Written by <a href=\"mailto:alice@example.com\">Alice</a><br>\n    CodeHub Academy, Delhi, India\n</address>",
        language: "html", label: "More Semantic Elements"
      },
      {
        type: "tip",
        content: "A page can have multiple <header> and <footer> elements — one for the page, and one inside each <article> or <section>. But there should only be ONE <main> element per page!"
      },
    ],
    quiz: [
      { question: "Why use semantic HTML?", options: ["Faster loading", "Better SEO, accessibility, readability", "Required by browsers", "Adds styling"], answer: 1 },
      { question: "Which tag marks the primary/main content area?", options: ["<content>", "<primary>", "<main>", "<body>"], answer: 2 },
      { question: "A blog post should use which tag?", options: ["<div>", "<section>", "<article>", "<content>"], answer: 2 },
      { question: "<aside> is typically used for:", options: ["Page header", "Navigation menu", "Sidebar or supplementary content", "Footer"], answer: 2 },
      { question: "<details> and <summary> create:", options: ["Data table", "Expandable/collapsible content", "Form details", "Image details"], answer: 1 },
      { question: "How many <main> elements per page?", options: ["Unlimited", "Two maximum", "Only one", "None required"], answer: 2 },
      { question: "When should you use <div>?", options: ["Always instead of semantic tags", "Only when no semantic tag fits", "For navigation only", "For images only"], answer: 1 },
    ],
  },

  // ════════════════════════════════════════
  // LEVEL 2 — INTERMEDIATE (6 Chapters)
  // ════════════════════════════════════════

  {
    id: "multimedia",
    title: "Multimedia (Audio & Video)",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 9,
    content: [
      {
        type: "text", heading: "HTML5 Multimedia Elements",
        content: "HTML5 introduced native <video> and <audio> elements, allowing you to embed media directly without plugins like Flash (which is now dead).\n\nBefore HTML5, you needed Flash Player or other third-party plugins to play video/audio. HTML5 made this native and plugin-free.\n\nKey attributes shared by both <audio> and <video>:\n• controls — shows play/pause/volume controls\n• autoplay — plays automatically when page loads\n• loop — plays repeatedly in a loop\n• muted — starts with audio muted\n• preload — how much to load before playing\n  - preload=\"auto\" — load entire file\n  - preload=\"metadata\" — load only metadata (duration etc.)\n  - preload=\"none\" — don't load until user plays"
      },
      {
        type: "table", heading: "Supported Media Formats",
        content: "VIDEO FORMATS:\nFormat  | Extension | Browser Support\n--------|-----------|-------------------\nMP4     | .mp4      | All browsers ✅ (Best choice)\nWebM    | .webm     | Chrome, Firefox\nOGG     | .ogv      | Firefox, Chrome\n\nAUDIO FORMATS:\nFormat  | Extension | Browser Support\n--------|-----------|-------------------\nMP3     | .mp3      | All browsers ✅ (Best choice)\nWAV     | .wav      | All browsers\nOGG     | .ogg      | Firefox, Chrome\nAAC     | .aac      | Chrome, Safari"
      },
      {
        type: "syntax",
        code: "<!-- Basic Video -->\n<video src=\"movie.mp4\" controls width=\"640\" height=\"360\">\n    Your browser does not support the video tag.\n</video>\n\n<!-- Video with multiple formats (cross-browser) -->\n<video controls width=\"640\" height=\"360\"\n       poster=\"thumbnail.jpg\"\n       preload=\"metadata\">\n    <source src=\"video.mp4\" type=\"video/mp4\">\n    <source src=\"video.webm\" type=\"video/webm\">\n    <!-- Fallback text for old browsers -->\n    <p>Your browser doesn't support HTML5 video.\n        <a href=\"video.mp4\">Download the video</a>\n    </p>\n</video>\n\n<!-- Autoplay (muted required in most browsers) -->\n<video src=\"promo.mp4\" autoplay muted loop\n       playsinline width=\"100%\">\n</video>",
        language: "html", label: "Video Element"
      },
      {
        type: "syntax",
        code: "<!-- Basic Audio -->\n<audio src=\"music.mp3\" controls>\n    Your browser does not support audio.\n</audio>\n\n<!-- Audio with multiple sources -->\n<audio controls preload=\"metadata\">\n    <source src=\"song.mp3\" type=\"audio/mpeg\">\n    <source src=\"song.ogg\" type=\"audio/ogg\">\n    <source src=\"song.wav\" type=\"audio/wav\">\n    <p>Your browser doesn't support HTML5 audio.</p>\n</audio>\n\n<!-- Background music (autoplay + loop) -->\n<audio src=\"background.mp3\" autoplay loop muted></audio>\n\n<!-- YouTube embed (not native, but common) -->\n<iframe width=\"560\" height=\"315\"\n        src=\"https://www.youtube.com/embed/VIDEO_ID\"\n        title=\"YouTube video player\"\n        allowfullscreen>\n</iframe>",
        language: "html", label: "Audio Element"
      },
      {
        type: "example",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Media Player</title>\n    <style>\n        body { font-family: Arial, sans-serif; max-width: 700px; margin: 30px auto; padding: 20px; }\n        .media-card { background: #f9fafb; border: 1px solid #e5e7eb;\n                      border-radius: 12px; padding: 20px; margin: 20px 0; }\n        video, audio { width: 100%; border-radius: 8px; }\n        h2 { color: #3b82f6; }\n    </style>\n</head>\n<body>\n    <h1>🎬 CodeHub Media Center</h1>\n\n    <div class=\"media-card\">\n        <h2>🎥 Introduction Video</h2>\n        <video controls poster=\"thumbnail.jpg\" preload=\"metadata\">\n            <source src=\"intro.mp4\" type=\"video/mp4\">\n            <source src=\"intro.webm\" type=\"video/webm\">\n            <p>Video not supported. <a href=\"intro.mp4\">Download here</a></p>\n        </video>\n        <p>Watch this intro video to get started with CodeHub!</p>\n    </div>\n\n    <div class=\"media-card\">\n        <h2>🎵 Lesson Audio</h2>\n        <audio controls preload=\"metadata\">\n            <source src=\"lesson1.mp3\" type=\"audio/mpeg\">\n            <source src=\"lesson1.ogg\" type=\"audio/ogg\">\n            <p>Audio not supported.</p>\n        </audio>\n        <p>Listen to the audio explanation of Chapter 1</p>\n    </div>\n\n    <div class=\"media-card\">\n        <h2>📺 Tutorial from YouTube</h2>\n        <iframe width=\"100%\" height=\"315\"\n                src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\"\n                title=\"Tutorial\" allowfullscreen\n                style=\"border-radius:8px; border:none;\">\n        </iframe>\n    </div>\n</body>\n</html>",
        output: "Page with styled video player, audio player, and embedded YouTube iframe",
        label: "Media Center Page"
      },
      {
        type: "warning",
        content: "autoplay without muted is blocked by most browsers! Browsers block autoplay with sound to prevent annoying user experiences. If you need autoplay, always add muted attribute. Users can then unmute if they want."
      },
    ],
    quiz: [
      { question: "Which HTML5 element embeds video natively?", options: ["<media>", "<movie>", "<video>", "<embed>"], answer: 2 },
      { question: "controls attribute on <video>:", options: ["Controls video speed", "Shows play/pause/volume UI", "Controls video size", "Controls quality"], answer: 1 },
      { question: "Best video format for all browsers:", options: ["AVI", "WMV", "MP4", "FLV"], answer: 2 },
      { question: "Why add muted with autoplay?", options: ["Better quality", "Browsers block autoplay with sound", "Required by HTML5", "Saves bandwidth"], answer: 1 },
      { question: "<source> inside <video> is for:", options: ["Video subtitles", "Video thumbnail", "Providing multiple format fallbacks", "Video chapters"], answer: 2 },
      { question: "poster attribute on <video> sets:", options: ["Video quality", "Thumbnail shown before playing", "Video title", "Video speed"], answer: 1 },
    ],
  },

  {
    id: "iframes",
    title: "Iframes",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 10,
    content: [
      {
        type: "text", heading: "What is an Iframe?",
        content: "An iframe (inline frame) embeds another HTML document or webpage INSIDE the current page. It creates a separate browsing context — like a window within your page showing another website.\n\nCommon uses of iframes:\n• Embedding YouTube videos\n• Embedding Google Maps\n• Embedding social media posts\n• Embedding payment forms (PayPal, Stripe)\n• Embedding third-party widgets\n• Embedding Google Calendar\n• Sandboxed advertisements\n\nThe <iframe> tag needs:\n• src — URL of page to embed\n• width and height — dimensions\n• title — description (required for accessibility)"
      },
      {
        type: "syntax",
        code: "<!-- Basic iframe -->\n<iframe src=\"https://example.com\"\n        width=\"600\"\n        height=\"400\"\n        title=\"Example website\">\n</iframe>\n\n<!-- Google Maps embed -->\n<iframe\n    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12...\"\n    width=\"600\"\n    height=\"450\"\n    style=\"border:0;\"\n    allowfullscreen\n    loading=\"lazy\"\n    referrerpolicy=\"no-referrer-when-downgrade\"\n    title=\"Google Maps - New Delhi\">\n</iframe>\n\n<!-- YouTube video embed -->\n<iframe\n    width=\"560\"\n    height=\"315\"\n    src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\"\n    title=\"YouTube Tutorial\"\n    allow=\"accelerometer; autoplay; clipboard-write;\n           encrypted-media; gyroscope; picture-in-picture\"\n    allowfullscreen\n    style=\"border:none;\">\n</iframe>\n\n<!-- Responsive iframe wrapper -->\n<div style=\"position:relative; padding-bottom:56.25%; height:0; overflow:hidden;\">\n    <iframe src=\"https://youtube.com/embed/VIDEO_ID\"\n            style=\"position:absolute; top:0; left:0; width:100%; height:100%; border:0;\"\n            allowfullscreen title=\"Video\">\n    </iframe>\n</div>",
        language: "html", label: "Iframe Examples"
      },
      {
        type: "table", heading: "iframe Attributes",
        content: "Attribute           | Purpose\n--------------------|------------------------------------------\nsrc                 | URL of page to embed\nwidth               | Width in pixels or %\nheight              | Height in pixels\ntitle               | Accessibility description (required!)\nallowfullscreen     | Allows fullscreen mode\nloading=\"lazy\"      | Lazy load (only loads when visible)\nsandbox             | Restricts iframe capabilities\nreferrerpolicy      | Controls referrer information sent\nborder=\"0\"          | Remove default border (use CSS instead)\nallow               | Feature permissions (camera, mic, etc.)"
      },
      {
        type: "text", heading: "iframe Security — sandbox attribute",
        content: "The sandbox attribute restricts what the embedded iframe can do — preventing malicious iframes from harming your page.\n\nBy default, sandbox blocks everything. You can selectively allow features:\n• allow-scripts — run JavaScript\n• allow-forms — submit forms\n• allow-same-origin — access same-origin data\n• allow-popups — open popups\n• allow-navigation — navigate the parent\n• allow-top-navigation — navigate top window\n\nAlways use sandbox on untrusted content!"
      },
      {
        type: "syntax",
        code: "<!-- Sandboxed iframe (most restrictive) -->\n<iframe src=\"untrusted-content.html\" sandbox></iframe>\n\n<!-- Allow only scripts and forms -->\n<iframe src=\"widget.html\"\n        sandbox=\"allow-scripts allow-forms\"\n        width=\"400\" height=\"300\" title=\"Widget\">\n</iframe>\n\n<!-- Responsive Google Maps -->\n<div style=\"width:100%; border-radius:12px; overflow:hidden;\">\n    <iframe\n        src=\"https://maps.google.com/maps?q=New+Delhi&output=embed\"\n        width=\"100%\"\n        height=\"400\"\n        style=\"border:0;\"\n        loading=\"lazy\"\n        title=\"Our Location - New Delhi\">\n    </iframe>\n</div>",
        language: "html", label: "sandbox & Maps"
      },
      {
        type: "example",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Iframes Demo</title>\n    <style>\n        body { font-family: Arial, sans-serif; max-width: 700px; margin: 30px auto; padding: 20px; }\n        .embed-card { background: #f9fafb; border: 1px solid #e5e7eb;\n                      border-radius: 12px; padding: 20px; margin: 20px 0; }\n        iframe { border-radius: 8px; display: block; }\n        h2 { color: #1d4ed8; }\n    </style>\n</head>\n<body>\n    <h1>Embedded Content Demo</h1>\n\n    <div class=\"embed-card\">\n        <h2>📺 YouTube Tutorial</h2>\n        <iframe\n            width=\"100%\" height=\"315\"\n            src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\"\n            title=\"YouTube tutorial video\"\n            allow=\"accelerometer; autoplay; encrypted-media; gyroscope\"\n            allowfullscreen style=\"border:none;\">\n        </iframe>\n        <p>Watch our introduction to web development!</p>\n    </div>\n\n    <div class=\"embed-card\">\n        <h2>🗺️ Our Location</h2>\n        <iframe\n            src=\"https://www.openstreetmap.org/export/embed.html?bbox=77.1,28.5,77.3,28.7&layer=mapnik\"\n            width=\"100%\" height=\"350\"\n            title=\"Map of New Delhi\"\n            loading=\"lazy\" style=\"border:1px solid #ccc;\">\n        </iframe>\n    </div>\n</body>\n</html>",
        output: "Page showing embedded YouTube video and OpenStreetMap map",
        label: "Embedded Content Page"
      },
      {
        type: "warning",
        content: "Not all websites can be embedded in iframes! Many websites set X-Frame-Options: DENY or Content-Security-Policy headers to prevent embedding. Google.com, Facebook, etc. cannot be iframed. Use their official embed codes instead."
      },
    ],
    quiz: [
      { question: "What does iframe stand for?", options: ["Internal frame", "Inline frame", "Integrated frame", "Interactive frame"], answer: 1 },
      { question: "Which attribute is required for iframe accessibility?", options: ["alt", "name", "title", "label"], answer: 2 },
      { question: "sandbox attribute on iframe:", options: ["Makes it fullscreen", "Restricts iframe capabilities", "Adds scrollbar", "Removes border"], answer: 1 },
      { question: "Why can't you embed google.com in an iframe?", options: ["Too large", "They set X-Frame-Options: DENY", "Wrong format", "Needs JavaScript"], answer: 1 },
      { question: "loading=\"lazy\" on iframe means:", options: ["Slower loading always", "Loads only when scrolled into view", "Loads twice", "Never loads"], answer: 1 },
    ],
  },

  {
    id: "html-entities",
    title: "HTML Entities",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 11,
    content: [
      {
        type: "text", heading: "What are HTML Entities?",
        content: "HTML entities are special codes used to display characters that either:\n1. Have special meaning in HTML (like < > & \" ')\n2. Cannot be typed easily on a keyboard (like ©, ™, →, £)\n3. Are invisible or special characters (like non-breaking space)\n\nWithout entities, characters like < and > would confuse the browser into thinking they're HTML tags!\n\nEntity syntax:\n• Named entity: &entityname; (example: &lt; for <)\n• Numeric (decimal): &#number; (example: &#60; for <)\n• Numeric (hex): &#xHEX; (example: &#x3C; for <)\n\nThe semicolon at the end is REQUIRED!"
      },
      {
        type: "table", heading: "Essential HTML Entities",
        content: "Entity       | Code      | Character | Description\n-------------|-----------|-----------|---------------------------\n&lt;         | &#60;     | <         | Less than sign\n&gt;         | &#62;     | >         | Greater than sign\n&amp;        | &#38;     | &         | Ampersand\n&quot;       | &#34;     | \"         | Double quotation mark\n&apos;       | &#39;     | '         | Apostrophe\n&nbsp;       | &#160;    | (space)   | Non-breaking space\n&copy;       | &#169;    | ©         | Copyright symbol\n&reg;        | &#174;    | ®         | Registered trademark\n&trade;      | &#8482;   | ™         | Trademark symbol\n&euro;       | &#8364;   | €         | Euro sign\n&pound;      | &#163;    | £         | British Pound\n&yen;        | &#165;    | ¥         | Japanese Yen\n&rupee;      | &#8377;   | ₹         | Indian Rupee\n&hearts;     | &#9829;   | ♥         | Heart\n&star;       | &#9733;   | ★         | Star\n&rarr;       | &#8594;   | →         | Right arrow\n&larr;       | &#8592;   | ←         | Left arrow\n&uarr;       | &#8593;   | ↑         | Up arrow\n&darr;       | &#8595;   | ↓         | Down arrow\n&hellip;     | &#8230;   | …         | Ellipsis (three dots)\n&mdash;      | &#8212;   | —         | Em dash\n&ndash;      | &#8211;   | –         | En dash\n&bull;       | &#8226;   | •         | Bullet point\n&deg;        | &#176;    | °         | Degree symbol\n&plusmn;     | &#177;    | ±         | Plus-minus\n&times;      | &#215;    | ×         | Multiplication sign\n&divide;     | &#247;    | ÷         | Division sign\n&frac12;     | &#189;    | ½         | One half\n&frac14;     | &#188;    | ¼         | One quarter"
      },
      {
        type: "syntax",
        code: "<!-- Why entities are needed -->\n<!-- WRONG: Browser thinks these are tags! -->\n<p>5 < 10 and 10 > 5</p>  ← confuses browser!\n\n<!-- CORRECT: Use entities -->\n<p>5 &lt; 10 and 10 &gt; 5</p>\n\n<!-- Displaying HTML code on a page -->\n<p>Use the &lt;h1&gt; tag for main headings.</p>\n<p>The &lt;a href=\"url\"&gt; tag creates links.</p>\n\n<!-- Copyright footer -->\n<footer>\n    <p>&copy; 2024 CodeHub. All rights reserved.</p>\n    <p>CodeHub&trade; is a registered trademark.</p>\n</footer>\n\n<!-- Special characters -->\n<p>Price: &euro;99 / &pound;85 / &#8377;8000</p>\n<p>Temperature: 37&deg;C</p>\n<p>Rating: &#9733;&#9733;&#9733;&#9733;&#9733;</p>\n<p>Next &rarr; Previous &larr; Up &uarr;</p>",
        language: "html", label: "Common Entity Usage"
      },
      {
        type: "text", heading: "Non-Breaking Space &nbsp;",
        content: "The most commonly used entity is &nbsp; (Non-Breaking Space).\n\nRegular space: browsers may wrap text to next line at space\n&nbsp; space: browser will NEVER break line at this point\n\nUse &nbsp; when:\n• You need multiple spaces (HTML collapses multiple spaces to one)\n• You don't want certain words to break onto separate lines\n  Example: '10 km' should stay on same line — use '10&nbsp;km'\n• You need specific spacing in text\n\nTo add multiple spaces: &nbsp;&nbsp;&nbsp; (3 spaces)"
      },
      {
        type: "example",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>HTML Entities Demo</title>\n</head>\n<body>\n    <h1>HTML Entities Examples</h1>\n\n    <h2>Reserved Characters</h2>\n    <p>In HTML, &lt;tags&gt; use angle brackets.</p>\n    <p>The &amp;amp; entity represents the &amp; symbol.</p>\n    <p>Attribute values use &quot;double quotes&quot;.</p>\n\n    <h2>Math & Symbols</h2>\n    <p>Temperature today: 28&deg;C</p>\n    <p>Result: 10 &times; 5 = 50</p>\n    <p>50 &divide; 5 = 10</p>\n    <p>Discount: &plusmn;5%</p>\n\n    <h2>Currency</h2>\n    <p>Dollar: $100 &nbsp;&nbsp; Euro: &euro;85</p>\n    <p>Pound: &pound;72 &nbsp;&nbsp; Rupee: &#8377;7500</p>\n\n    <h2>Navigation Arrows</h2>\n    <p>&larr; Back &nbsp;|&nbsp; Next &rarr;</p>\n    <p>&uarr; Top &nbsp;|&nbsp; Bottom &darr;</p>\n\n    <h2>Star Rating</h2>\n    <p>Course Rating: &#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</p>\n\n    <footer>\n        <p>&copy; 2024 CodeHub&trade;. All rights reserved.</p>\n    </footer>\n</body>\n</html>",
        output: "Page showing various HTML entities rendered as symbols, arrows, currency, stars, and copyright",
        label: "Entities Demo Page"
      },
    ],
    quiz: [
      { question: "Which entity represents the < symbol?", options: ["&less;", "&lt;", "&left;", "&#62;"], answer: 1 },
      { question: "&amp; displays as:", options: ["@", "#", "&", "*"], answer: 2 },
      { question: "&copy; displays as:", options: ["™", "®", "©", "°"], answer: 2 },
      { question: "&nbsp; is used for:", options: ["New paragraph", "Non-breaking space", "New bold style", "Line break"], answer: 1 },
      { question: "Why use &lt; instead of < in content?", options: ["Looks better", "Browser won't confuse it with HTML tag", "Required always", "Faster loading"], answer: 1 },
      { question: "What is the degree symbol entity?", options: ["&deg;", "&degree;", "&circle;", "&temp;"], answer: 0 },
    ],
  },

  {
    id: "meta-tags-seo",
    title: "Meta Tags & SEO Basics",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 12,
    content: [
      {
        type: "text", heading: "What are Meta Tags?",
        content: "Meta tags are HTML elements that provide metadata (information about information) about a web page. They go inside the <head> section and are NOT visible to users on the page itself.\n\nHowever, meta tags are extremely important because they:\n• Tell search engines (Google, Bing) what your page is about\n• Control how your page appears in search results\n• Control how your page looks when shared on social media\n• Set character encoding and viewport for mobile\n• Can control browser behavior\n\nGood meta tags → better SEO → more visitors to your website!"
      },
      {
        type: "table", heading: "Essential Meta Tags",
        content: "Meta Tag                           | Purpose\n-----------------------------------|-------------------------------------\n<meta charset=\"UTF-8\">             | Character encoding (ALWAYS include!)\n<meta name=\"viewport\" ...>         | Mobile-responsive display\n<meta name=\"description\" content>  | Page description in search results\n<meta name=\"keywords\" content>     | Keywords (less important now)\n<meta name=\"author\" content>       | Page author name\n<meta name=\"robots\" content>       | Control search engine crawling\n<meta http-equiv=\"refresh\">        | Auto-redirect after seconds\n<meta property=\"og:title\">         | Open Graph - Facebook/LinkedIn title\n<meta property=\"og:description\">   | Open Graph - social media description\n<meta property=\"og:image\">         | Open Graph - social media image\n<meta name=\"twitter:card\">         | Twitter card type"
      },
      {
        type: "syntax",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <!-- MUST HAVE -->\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Learn HTML Free - CodeHub | Best Online Coding Platform</title>\n\n    <!-- SEO Meta Tags -->\n    <meta name=\"description\"\n          content=\"Learn HTML from scratch with free courses at CodeHub.\n                   18 chapters, quizzes, and real projects for beginners.\">\n    <meta name=\"keywords\"\n          content=\"HTML tutorial, learn HTML, web development, coding, free course\">\n    <meta name=\"author\" content=\"CodeHub Team\">\n    <meta name=\"robots\" content=\"index, follow\">\n    <!-- index = allow indexing, follow = follow links -->\n    <!-- noindex, nofollow = don't index this page -->\n\n    <!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->\n    <meta property=\"og:type\" content=\"website\">\n    <meta property=\"og:title\" content=\"Learn HTML Free - CodeHub\">\n    <meta property=\"og:description\"\n          content=\"Free HTML course with 18 chapters and quizzes.\">\n    <meta property=\"og:image\" content=\"https://codehub.com/og-image.jpg\">\n    <meta property=\"og:url\" content=\"https://codehub.com/courses/html\">\n\n    <!-- Twitter Card -->\n    <meta name=\"twitter:card\" content=\"summary_large_image\">\n    <meta name=\"twitter:title\" content=\"Learn HTML Free - CodeHub\">\n    <meta name=\"twitter:description\" content=\"Free HTML course for beginners.\">\n    <meta name=\"twitter:image\" content=\"https://codehub.com/twitter-image.jpg\">\n\n    <!-- Canonical URL (avoid duplicate content) -->\n    <link rel=\"canonical\" href=\"https://codehub.com/courses/html\">\n\n    <!-- Favicon -->\n    <link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\">\n\n</head>\n<body>\n    <!-- content here -->\n</body>\n</html>",
        language: "html", label: "Complete SEO Head Section"
      },
      {
        type: "text", heading: "SEO Best Practices for HTML",
        content: "SEO (Search Engine Optimization) is about making your page rank higher in Google search results. HTML structure plays a huge role.\n\nKey HTML SEO rules:\n\n1. Title tag — Most important SEO element\n   • 50-60 characters ideal\n   • Include main keyword near the start\n   • Make it unique for every page\n   • Format: 'Keyword - Brand Name'\n\n2. Meta description — Shown in search results\n   • 150-160 characters\n   • Compelling, relevant summary\n   • Include main keyword naturally\n   • Unique for each page\n\n3. Heading structure — Use logically\n   • One <h1> with main keyword\n   • <h2>-<h6> for subheadings\n   • Don't skip levels (h1 → h3 is bad)\n\n4. Alt text on images\n   • Describe the image with keywords\n   • Helps Google 'see' your images\n\n5. Semantic HTML — helps Google understand structure\n\n6. Fast loading — Google ranks faster pages higher\n\n7. Mobile-friendly — viewport meta tag is essential"
      },
      {
        type: "example",
        code: "<!-- SEO-Optimized Page Structure Example -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n    <!-- Optimized title: keyword first, brand last, 58 chars -->\n    <title>Learn Python Free Online - CodeHub Coding Platform</title>\n\n    <!-- 155 char description with call-to-action -->\n    <meta name=\"description\" content=\"Master Python programming with CodeHub's free course. 18 chapters, hands-on projects, and quizzes. Start learning today — no experience needed!\">\n\n    <meta name=\"robots\" content=\"index, follow\">\n    <link rel=\"canonical\" href=\"https://codehub.com/courses/python\">\n\n    <!-- Open Graph for social sharing -->\n    <meta property=\"og:title\" content=\"Learn Python Free - CodeHub\">\n    <meta property=\"og:image\" content=\"https://codehub.com/python-course-banner.jpg\">\n    <meta property=\"og:description\" content=\"Free Python course — 18 chapters, quizzes, real projects.\">\n</head>\n<body>\n    <!-- Single H1 with main keyword -->\n    <h1>Learn Python Programming — Free Course for Beginners</h1>\n\n    <main>\n        <section>\n            <!-- H2 subheadings with secondary keywords -->\n            <h2>Why Learn Python?</h2>\n            <p>Python is the world's most popular language for data science...</p>\n\n            <!-- Images with descriptive alt text -->\n            <img src=\"python-roadmap.jpg\"\n                 alt=\"Python learning roadmap from beginner to advanced\"\n                 width=\"800\" loading=\"lazy\">\n        </section>\n\n        <section>\n            <h2>Course Curriculum</h2>\n            <h3>Level 1: Python Basics</h3>\n            <!-- course content -->\n        </section>\n    </main>\n</body>\n</html>",
        output: "SEO-optimized page structure with proper title, meta tags, headings hierarchy, and image alt text",
        label: "SEO Optimized Page"
      },
      {
        type: "tip",
        content: "Use Google Search Console (free) to see how Google views your website, which keywords you rank for, and any SEO issues to fix. After setting up your website, submit your sitemap to Google for faster indexing!"
      },
    ],
    quiz: [
      { question: "Meta tags go inside which section?", options: ["<body>", "<main>", "<head>", "<footer>"], answer: 2 },
      { question: "Optimal length for meta description:", options: ["50-60 characters", "150-160 characters", "300+ characters", "Any length"], answer: 1 },
      { question: "og:image meta tag is used for:", options: ["Page favicon", "Social media preview image", "Background image", "Logo"], answer: 1 },
      { question: "meta robots=\"noindex\" means:", options: ["Speed up indexing", "Tell Google not to index this page", "List all pages", "Index images only"], answer: 1 },
      { question: "What does the title tag affect?", options: ["Only browser tab", "SEO, browser tab, and bookmarks", "Only bookmarks", "Nothing visible"], answer: 1 },
      { question: "Canonical link tag prevents:", options: ["Slow loading", "Duplicate content issues in SEO", "Broken links", "Missing images"], answer: 1 },
    ],
  },

  {
    id: "html5-features",
    title: "HTML5 Features",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 13,
    content: [
      {
        type: "text", heading: "What's New in HTML5?",
        content: "HTML5 (released 2014) brought massive improvements over HTML4. It added native support for many things that previously required Flash, JavaScript libraries, or plugins.\n\nMajor HTML5 additions:\n• Semantic elements — <header>, <nav>, <main>, <article>, <section>, <footer>\n• Multimedia — <video> and <audio> without plugins\n• <canvas> — draw graphics with JavaScript\n• New form input types — date, color, range, email, etc.\n• Local Storage & Session Storage — store data in browser\n• Geolocation API — get user's location\n• Web Workers — background JavaScript threads\n• WebSockets — real-time communication\n• Drag and Drop API\n• Custom Data Attributes (data-*)\n• <picture> element — responsive images"
      },
      {
        type: "text", heading: "The <canvas> Element",
        content: "The <canvas> element creates a drawing area in the browser. Using JavaScript, you can draw shapes, graphs, animations, and even games!\n\n<canvas> itself is just a blank rectangle. You need JavaScript's Canvas 2D API to draw on it.\n\nCommon uses:\n• Data visualizations and charts\n• Games (Angry Birds HTML5 used canvas!)\n• Image editing\n• Animations\n• Signatures\n\nCanvas coordinate system:\n• Origin (0,0) is top-left corner\n• X increases going right\n• Y increases going DOWN (opposite of math!)"
      },
      {
        type: "syntax",
        code: "<!-- Canvas element -->\n<canvas id=\"myCanvas\" width=\"400\" height=\"200\"\n        style=\"border: 1px solid #ccc;\">\n    Your browser doesn't support canvas.\n</canvas>\n\n<script>\n    const canvas = document.getElementById('myCanvas');\n    const ctx = canvas.getContext('2d');  // get 2D context\n\n    // Draw filled rectangle\n    ctx.fillStyle = '#3b82f6';  // blue color\n    ctx.fillRect(20, 20, 150, 100);  // x, y, width, height\n\n    // Draw rectangle outline\n    ctx.strokeStyle = '#ef4444';  // red color\n    ctx.lineWidth = 3;\n    ctx.strokeRect(200, 20, 150, 100);\n\n    // Draw text\n    ctx.fillStyle = 'white';\n    ctx.font = 'bold 20px Arial';\n    ctx.fillText('Hello Canvas!', 30, 80);\n\n    // Draw circle\n    ctx.beginPath();\n    ctx.arc(300, 70, 40, 0, Math.PI * 2);  // x, y, radius, start, end\n    ctx.fillStyle = '#10b981';\n    ctx.fill();\n\n    // Draw line\n    ctx.beginPath();\n    ctx.moveTo(20, 150);  // start point\n    ctx.lineTo(380, 150); // end point\n    ctx.strokeStyle = '#f59e0b';\n    ctx.lineWidth = 2;\n    ctx.stroke();\n</script>",
        language: "html", label: "Canvas Drawing"
      },
      {
        type: "text", heading: "Custom Data Attributes (data-*)",
        content: "HTML5 allows you to store custom data on any element using data-* attributes. This is very useful for storing information that JavaScript needs to access.\n\nSyntax: data-yourname=\"value\"\n\nRules:\n• Must start with data-\n• Followed by any name (lowercase, no spaces)\n• Value can be any string\n• Accessible via JavaScript: element.dataset.yourname\n\nUse cases:\n• Store product ID on a button\n• Store user preferences\n• Store extra info for JavaScript to use\n• Avoid using id/class for data storage"
      },
      {
        type: "syntax",
        code: "<!-- data-* attributes -->\n<button data-product-id=\"123\"\n        data-price=\"99.99\"\n        data-category=\"electronics\"\n        onclick=\"addToCart(this)\">\n    Add to Cart\n</button>\n\n<article data-author=\"alice\" data-published=\"2024-01-15\">\n    <h2>My Blog Post</h2>\n</article>\n\n<!-- Access with JavaScript -->\n<script>\nfunction addToCart(btn) {\n    const id = btn.dataset.productId;    // \"123\"\n    const price = btn.dataset.price;    // \"99.99\"\n    const category = btn.dataset.category; // \"electronics\"\n    console.log(`Added product ${id} (${category}) ₹${price}`);\n}\n</script>\n\n<!-- picture element - responsive images -->\n<picture>\n    <!-- For large screens (1200px+) -->\n    <source media=\"(min-width: 1200px)\" srcset=\"large.jpg\">\n    <!-- For medium screens (600px+) -->\n    <source media=\"(min-width: 600px)\" srcset=\"medium.jpg\">\n    <!-- Default fallback -->\n    <img src=\"small.jpg\" alt=\"Responsive image example\">\n</picture>",
        language: "html", label: "data-* and picture"
      },
      {
        type: "example",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>HTML5 Features Demo</title>\n    <style>\n        body { font-family: Arial; max-width: 700px; margin: 30px auto; padding: 20px; }\n        canvas { border: 2px solid #e5e7eb; border-radius: 8px; display: block; margin: 10px 0; }\n        .card { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin: 20px 0; }\n        button { padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; }\n        input[type=range], input[type=color] { width: 100%; margin: 10px 0; }\n    </style>\n</head>\n<body>\n    <h1>HTML5 Features</h1>\n\n    <!-- Canvas drawing -->\n    <div class=\"card\">\n        <h2>Canvas Drawing</h2>\n        <canvas id=\"demo\" width=\"600\" height=\"150\"></canvas>\n        <button onclick=\"drawShapes()\">Draw Shapes</button>\n    </div>\n\n    <!-- New input types -->\n    <div class=\"card\">\n        <h2>New Input Types</h2>\n        <label>Date: <input type=\"date\" value=\"2024-01-15\"></label><br><br>\n        <label>Color: <input type=\"color\" value=\"#3b82f6\"></label><br><br>\n        <label>Range (0-100): <input type=\"range\" min=\"0\" max=\"100\" value=\"60\"></label><br>\n        <label>Time: <input type=\"time\" value=\"14:30\"></label>\n    </div>\n\n    <!-- data-* attributes demo -->\n    <div class=\"card\">\n        <h2>data-* Attributes</h2>\n        <button data-product=\"Python Course\" data-price=\"0\"\n                onclick=\"alert('Added: ' + this.dataset.product + ' (Free!)')\"\>\n            🛒 Add to Cart\n        </button>\n    </div>\n\n    <script>\n        function drawShapes() {\n            const canvas = document.getElementById('demo');\n            const ctx = canvas.getContext('2d');\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n            // Blue rect\n            ctx.fillStyle = '#3b82f6';\n            ctx.fillRect(20, 20, 120, 110);\n\n            // Red circle\n            ctx.beginPath();\n            ctx.arc(230, 75, 55, 0, Math.PI * 2);\n            ctx.fillStyle = '#ef4444';\n            ctx.fill();\n\n            // Green triangle\n            ctx.beginPath();\n            ctx.moveTo(340, 20);\n            ctx.lineTo(440, 130);\n            ctx.lineTo(240, 130);\n            ctx.closePath();\n            ctx.fillStyle = '#10b981';\n            ctx.fill();\n\n            // Text\n            ctx.fillStyle = 'white';\n            ctx.font = 'bold 16px Arial';\n            ctx.fillText('HTML5 Canvas!', 450, 75);\n        }\n        drawShapes();\n    </script>\n</body>\n</html>",
        output: "Interactive page with canvas shapes, new HTML5 input types (date, color, range), and data-* attribute demo",
        label: "HTML5 Features Demo"
      },
    ],
    quiz: [
      { question: "What does <canvas> do?", options: ["Displays images", "Creates a drawing area for JavaScript", "Embeds videos", "Creates forms"], answer: 1 },
      { question: "data-product-id=\"5\" — access in JS via:", options: ["element.productId", "element.data.productId", "element.dataset.productId", "element.getAttribute('product-id')"], answer: 2 },
      { question: "<picture> element is used for:", options: ["Photo gallery", "Responsive images with different sources", "Canvas drawing", "Video thumbnails"], answer: 1 },
      { question: "HTML5 was released in:", options: ["2010", "2012", "2014", "2016"], answer: 2 },
      { question: "Canvas origin (0,0) is at:", options: ["Center", "Bottom-left", "Bottom-right", "Top-left"], answer: 3 },
    ],
  },

  {
    id: "accessibility-basics",
    title: "Accessibility Basics",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 14,
    content: [
      {
        type: "text", heading: "What is Web Accessibility?",
        content: "Web accessibility (a11y) means building websites that everyone can use — including people with disabilities.\n\nTypes of disabilities to consider:\n• Visual — blindness, low vision, color blindness\n• Motor — limited hand movement, paralysis\n• Hearing — deafness, hearing impairment\n• Cognitive — dyslexia, ADHD, memory impairments\n\nWhy accessibility matters:\n• 1.3 billion people worldwide have some form of disability\n• It's often required by law (ADA in USA, EAA in Europe)\n• Better accessibility = better SEO (many overlap!)\n• Good accessibility helps ALL users (captions help in noisy rooms)\n• It's simply the right thing to do\n\nWCAG (Web Content Accessibility Guidelines) is the international standard. Aim for at least WCAG 2.1 Level AA compliance."
      },
      {
        type: "table", heading: "WCAG 4 Principles (POUR)",
        content: "Principle    | Meaning              | Example\n-------------|----------------------|---------------------------\nPerceivable  | Users can see/hear it | Alt text for images\nOperable     | Users can navigate    | Keyboard navigation\nUnderstandable| Content is clear     | Clear labels on forms\nRobust       | Works with all tech   | Works with screen readers"
      },
      {
        type: "text", heading: "ARIA — Accessible Rich Internet Applications",
        content: "ARIA attributes add accessibility information that HTML alone can't provide. They help screen readers understand dynamic content and complex widgets.\n\nMost important ARIA attributes:\n• role — defines the purpose of an element\n• aria-label — provides text label (not visible)\n• aria-labelledby — references another element as label\n• aria-describedby — references description element\n• aria-hidden — hides element from screen readers\n• aria-expanded — indicates if element is open/closed\n• aria-required — marks required form fields\n• aria-live — announces dynamic content changes\n• aria-current — marks current page in nav\n\nImportant: Use semantic HTML first! ARIA is a last resort. Native HTML elements already have built-in accessibility. <button> is more accessible than <div role=\"button\">."
      },
      {
        type: "syntax",
        code: "<!-- 1. Alt text for images -->\n<img src=\"chart.png\" alt=\"Bar chart showing 40% sales increase in Q4 2024\">\n<!-- Bad: alt=\"image\" or alt=\"chart\" -->\n<!-- Decorative images: alt=\"\" (empty, screen readers skip it) -->\n<img src=\"decorative-divider.png\" alt=\"\" role=\"presentation\">\n\n<!-- 2. Proper form labels -->\n<!-- WRONG -->\n<input type=\"email\" placeholder=\"Enter email\">  <!-- no label! -->\n\n<!-- CORRECT -->\n<label for=\"email\">Email Address *</label>\n<input type=\"email\" id=\"email\" name=\"email\"\n       required aria-required=\"true\"\n       aria-describedby=\"email-help\">\n<span id=\"email-help\">We'll never share your email.</span>\n\n<!-- 3. Skip navigation link -->\n<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>\n<!-- This allows keyboard users to skip nav and jump to content -->\n\n<!-- 4. Landmark roles (usually from semantic HTML) -->\n<header role=\"banner\">\n<nav role=\"navigation\" aria-label=\"Main navigation\">\n<main role=\"main\" id=\"main-content\">\n<aside role=\"complementary\">\n<footer role=\"contentinfo\">\n\n<!-- 5. Button vs div -->\n<!-- WRONG: not keyboard accessible -->\n<div onclick=\"submit()\">Submit</div>\n\n<!-- CORRECT: keyboard accessible, screen reader friendly -->\n<button type=\"submit\" onclick=\"submit()\">Submit</button>",
        language: "html", label: "Accessibility Patterns"
      },
      {
        type: "syntax",
        code: "<!-- 6. Color contrast - use CSS for sufficient contrast -->\n<!-- Text on background needs 4.5:1 ratio (AA level) -->\n<!-- Tools: Chrome DevTools, WebAIM Contrast Checker -->\n\n<!-- 7. Focus management -->\n<style>\n/* NEVER remove focus outline! Keyboard users need it */\n/* Bad: -->\n* { outline: none; }   /* ← NEVER DO THIS! */\n\n/* Good: Customize but keep visible -->\n*:focus {\n    outline: 2px solid #3b82f6;\n    outline-offset: 2px;\n}\n</style>\n\n<!-- 8. Language declaration -->\n<html lang=\"en\">  <!-- helps screen readers use correct pronunciation -->\n\n<!-- 9. Expandable content with ARIA -->\n<button\n    aria-expanded=\"false\"\n    aria-controls=\"faq-answer-1\"\n    onclick=\"toggle(this)\">\n    What is HTML?\n</button>\n<div id=\"faq-answer-1\" hidden>\n    <p>HTML is HyperText Markup Language...</p>\n</div>\n\n<!-- 10. Live region for dynamic updates -->\n<div aria-live=\"polite\" id=\"notification\">\n    <!-- Screen readers announce changes to this area -->\n</div>",
        language: "html", label: "More Accessibility Patterns"
      },
      {
        type: "example",
        code: "<!DOCTYPE html>\n<html lang=\"en\">  <!-- Language: important! -->\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Accessible Contact Form - CodeHub</title>\n    <style>\n        /* Skip link for keyboard users */\n        .skip-link {\n            position: absolute;\n            top: -40px;\n            left: 0;\n            background: #3b82f6;\n            color: white;\n            padding: 8px 16px;\n            text-decoration: none;\n            border-radius: 0 0 8px 0;\n        }\n        .skip-link:focus { top: 0; }  /* Shows on Tab key */\n\n        /* Visible focus indicator */\n        *:focus { outline: 2px solid #3b82f6; outline-offset: 2px; }\n\n        body { font-family: Arial, sans-serif; max-width: 500px; margin: 30px auto; padding: 20px; }\n        label { display: block; margin-top: 15px; font-weight: bold; }\n        input, textarea, select { width: 100%; padding: 10px; margin-top: 5px;\n            border: 2px solid #d1d5db; border-radius: 6px; font-size: 16px; box-sizing: border-box; }\n        .error { color: #dc2626; font-size: 14px; }\n        .required { color: #dc2626; } /* Red asterisk */\n        .hint { color: #6b7280; font-size: 13px; }\n        button { margin-top: 20px; padding: 12px 30px; background: #3b82f6;\n            color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; }\n    </style>\n</head>\n<body>\n    <!-- Skip navigation -->\n    <a href=\"#contact-form\" class=\"skip-link\">Skip to contact form</a>\n\n    <header role=\"banner\">\n        <h1>Contact CodeHub</h1>\n    </header>\n\n    <main role=\"main\" id=\"main-content\">\n        <form id=\"contact-form\" aria-label=\"Contact Form\" novalidate>\n            <fieldset>\n                <legend>Send us a message</legend>\n\n                <label for=\"fullname\">\n                    Full Name <span class=\"required\" aria-hidden=\"true\">*</span>\n                </label>\n                <input type=\"text\" id=\"fullname\" name=\"name\"\n                       required aria-required=\"true\"\n                       autocomplete=\"name\"\n                       placeholder=\"Alice Johnson\">\n\n                <label for=\"email\">\n                    Email <span class=\"required\" aria-hidden=\"true\">*</span>\n                </label>\n                <input type=\"email\" id=\"email\" name=\"email\"\n                       required aria-required=\"true\"\n                       autocomplete=\"email\"\n                       aria-describedby=\"email-hint\"\n                       placeholder=\"alice@example.com\">\n                <span id=\"email-hint\" class=\"hint\">We'll never share your email address.</span>\n\n                <label for=\"subject\">Subject</label>\n                <select id=\"subject\" name=\"subject\">\n                    <option value=\"\">Choose a subject</option>\n                    <option value=\"courses\">About Courses</option>\n                    <option value=\"support\">Technical Support</option>\n                    <option value=\"feedback\">Feedback</option>\n                </select>\n\n                <label for=\"message\">\n                    Message <span class=\"required\" aria-hidden=\"true\">*</span>\n                </label>\n                <textarea id=\"message\" name=\"message\"\n                          rows=\"5\" required aria-required=\"true\"\n                          aria-describedby=\"message-count\"\n                          placeholder=\"How can we help you?\"\n                          maxlength=\"500\"></textarea>\n                <span id=\"message-count\" class=\"hint\">Maximum 500 characters</span>\n            </fieldset>\n\n            <button type=\"submit\">Send Message 📤</button>\n        </form>\n    </main>\n\n    <footer role=\"contentinfo\">\n        <p><small>&copy; 2024 CodeHub</small></p>\n    </footer>\n</body>\n</html>",
        output: "Fully accessible contact form with skip link, proper labels, aria attributes, focus indicators, and semantic structure",
        label: "Accessible Contact Form"
      },
      {
        type: "tip",
        content: "Test your accessibility for free: 1) Install the axe DevTools browser extension, 2) Use keyboard only (Tab to navigate, Enter to click) — can you use everything? 3) Use Chrome's built-in Lighthouse audit (F12 → Lighthouse). Aim for 90+ accessibility score!"
      },
    ],
    quiz: [
      { question: "What does a11y stand for?", options: ["Ability 11 years", "Accessibility (11 letters between a and y)", "Application 11", "All users"], answer: 1 },
      { question: "alt=\"\" (empty alt) is used for:", options: ["Broken images", "Decorative images screen readers should skip", "Required alt text", "Logo images"], answer: 1 },
      { question: "WCAG stands for:", options: ["Web Content Accessibility Goals", "Web Content Accessibility Guidelines", "Web Coding Accessibility Guide", "World Content Access Grid"], answer: 1 },
      { question: "Why should you NEVER use outline:none?", options: ["Looks bad", "Keyboard users lose focus indicator", "Causes errors", "Slows page"], answer: 1 },
      { question: "aria-label is used to:", options: ["Style elements", "Provide text label for screen readers", "Link to another page", "Mark required fields"], answer: 1 },
      { question: "Semantic HTML is preferred over ARIA because:", options: ["Faster", "Native elements have built-in accessibility", "Required by browsers", "Easier to type"], answer: 1 },
    ],
  },
];

// Helper functions
export const getChaptersByLevel = (level: 1 | 2) =>
  htmlChapters.filter((c) => c.level === level);

export const getChapterById = (id: string) =>
  htmlChapters.find((c) => c.id === id);

export const levels = [
  { level: 1 as const, name: "Beginner", icon: "👉", color: "orange", chapters: 8 },
  { level: 2 as const, name: "Intermediate", icon: "⚡", color: "purple", chapters: 6 },
];