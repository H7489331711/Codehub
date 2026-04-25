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

export const cChapters: Chapter[] = [

  // ════════════════════════════════════════
  // LEVEL 1 — BEGINNER (10 Chapters)
  // ════════════════════════════════════════

  {
    id: "introduction-to-c",
    title: "Introduction to C",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 1,
    content: [
      {
        type: "text", heading: "What is C?",
        content: "C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs between 1969 and 1973. It is one of the oldest and most influential programming languages ever created — almost every modern language (C++, Java, Python, JavaScript) has borrowed concepts from C.\n\nC is called the 'mother of all programming languages' because:\n• The Unix operating system was rewritten in C\n• C influenced the design of C++, Java, C#, Python, and more\n• Most operating system kernels (Linux, Windows, macOS) are written in C\n• Embedded systems, drivers, and firmware are written in C\n\nKey features of C:\n• Fast and efficient — close to hardware/machine level\n• Portable — code runs on almost any platform with a C compiler\n• Structured — supports functions, loops, and conditionals\n• Low-level access — can directly manipulate memory using pointers\n• Small standard library — minimal overhead"
      },
      {
        type: "table", heading: "C vs Other Languages",
        content: "Feature        | C           | Python      | Java\n---------------|-------------|-------------|-------------\nSpeed          | Very Fast   | Slow        | Fast\nDifficulty     | Medium      | Easy        | Medium\nMemory Control | Manual      | Automatic   | Automatic\nType System    | Static      | Dynamic     | Static\nCompilation    | Compiled    | Interpreted | Compiled+JVM\nPortability    | High        | High        | Very High\nUse case       | System/Embedded | Scripting/AI | Enterprise"
      },
      {
        type: "text", heading: "Where is C Used?",
        content: "C is used in some of the most critical software in the world:\n\n🖥️ Operating Systems — Linux kernel, Windows NT kernel, macOS core are all C\n🔧 Embedded Systems — Arduino, microcontrollers, IoT devices\n🎮 Game Engines — many game engines have C at their core\n🗄️ Databases — SQLite, PostgreSQL core are written in C\n🌐 Networking — TCP/IP stack, network drivers\n🔬 Scientific Computing — numerical algorithms, simulations\n🛡️ Cybersecurity — exploits, vulnerability research\n📱 Mobile — Android kernel, iOS core use C\n\nWhy learn C in 2024?\n✅ Teaches you HOW computers really work (memory, pointers)\n✅ Makes you a better programmer in any language\n✅ Required for embedded/systems programming jobs\n✅ Foundation for C++, C#, and other languages\n✅ Still the most used language for kernel/driver development"
      },
      {
        type: "table", heading: "C Language History",
        content: "Year  | Event\n------|----------------------------------------------\n1969  | C development begins (Dennis Ritchie, Bell Labs)\n1972  | C is born — rewriting Unix in C\n1978  | 'The C Programming Language' book published (K&R C)\n1989  | ANSI C standardized (C89/C90)\n1999  | C99 — added new features (//comments, bool, etc.)\n2011  | C11 — threading, anonymous structs\n2017  | C17 — bug fixes\n2023  | C23 — latest standard"
      },
      {
        type: "syntax",
        code: "/* Your first C program */\n#include <stdio.h>   /* header file for input/output */\n\nint main() {         /* main function - entry point */\n    printf(\"Hello, World!\\n\");  /* print to screen */\n    return 0;        /* 0 means program succeeded */\n}",
        language: "c", label: "Hello World in C"
      },
      {
        type: "example",
        code: "#include <stdio.h>\n\nint main() {\n    printf(\"===========================\\n\");\n    printf(\"   Welcome to C Language!  \\n\");\n    printf(\"===========================\\n\");\n    printf(\"C is powerful, fast, and fun!\\n\");\n    printf(\"Let's start coding in C!\\n\");\n    return 0;\n}",
        output: "===========================\n   Welcome to C Language!  \n===========================\nC is powerful, fast, and fun!\nLet's start coding in C!",
        label: "First C Program"
      },
      {
        type: "tip",
        content: "C is case-sensitive! 'main', 'Main', and 'MAIN' are three different names. Always use lowercase for function names and variables. Also, every statement in C must end with a semicolon (;)!"
      },
    ],
    quiz: [
      { question: "Who created the C language?", options: ["Bjarne Stroustrup", "Dennis Ritchie", "Linus Torvalds", "Ken Thompson"], answer: 1 },
      { question: "C was developed at:", options: ["MIT", "Stanford", "Bell Labs", "IBM"], answer: 2 },
      { question: "C is called 'mother of all languages' because:", options: ["It's the oldest language", "Almost all modern languages borrowed from it", "It's the fastest language", "Dennis Ritchie said so"], answer: 1 },
      { question: "C language file extension is:", options: [".cpp", ".c", ".cs", ".ct"], answer: 1 },
      { question: "The entry point of every C program is:", options: ["start()", "begin()", "main()", "run()"], answer: 2 },
      { question: "C is which type of language?", options: ["Object-Oriented", "Functional", "Procedural", "Declarative"], answer: 2 },
      { question: "return 0 in main() means:", options: ["Error occurred", "Program succeeded", "Restart program", "Exit with error"], answer: 1 },
    ],
  },

  {
    id: "installation-setup",
    title: "Installation (Compiler Setup)",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 2,
    content: [
      {
        type: "text", heading: "What You Need to Write C",
        content: "Unlike Python, C code cannot be run directly. It must first be COMPILED — converted from human-readable C code into machine code that your computer can execute.\n\nYou need:\n1. A C Compiler — converts .c files to executable programs\n2. A Code Editor or IDE — where you write your code\n\nMost popular options:\n\nFor Windows:\n• MinGW (GCC for Windows) + VS Code — RECOMMENDED\n• Dev-C++ — simple IDE for beginners\n• Code::Blocks — free IDE with built-in compiler\n• Turbo C++ — old but still taught in some colleges\n\nFor Mac:\n• Xcode Command Line Tools (includes Clang)\n\nFor Linux:\n• GCC is usually pre-installed\n• Install: sudo apt install gcc"
      },
      {
        type: "text", heading: "Installing GCC on Windows (Recommended)",
        content: "GCC (GNU Compiler Collection) is the most widely used C compiler. Here's how to set it up on Windows:\n\nStep 1: Download MinGW\n• Go to: winlibs.com or mingw-w64.org\n• Download the latest GCC release for Windows\n• Extract the ZIP file to C:\\mingw64\n\nStep 2: Add to PATH\n• Open System Properties → Advanced → Environment Variables\n• Find 'Path' under System variables → Click Edit\n• Add new entry: C:\\mingw64\\bin\n• Click OK on all windows\n\nStep 3: Verify installation\n• Open Command Prompt\n• Type: gcc --version\n• You should see the GCC version number\n\nStep 4: Install VS Code\n• Download from code.visualstudio.com\n• Install 'C/C++' extension by Microsoft\n• Install 'Code Runner' extension for easy running"
      },
      {
        type: "syntax",
        code: "/* How to compile and run a C program */\n\n/* 1. Save your code as 'hello.c' */\n/* 2. Open terminal/command prompt */\n/* 3. Navigate to the folder */\n/* 4. Compile: */\ngcc hello.c -o hello\n\n/* 5. Run: */\n/* Windows: */ hello.exe\n/* Linux/Mac: */ ./hello\n\n/* Compile with warnings (recommended): */\ngcc hello.c -o hello -Wall -Wextra\n\n/* Compile and run in one command: */\ngcc hello.c -o hello && ./hello",
        language: "bash", label: "Compile & Run Commands"
      },
      {
        type: "table", heading: "GCC Common Flags",
        content: "Flag      | Meaning\n----------|------------------------------------------\n-o name   | Output file name (hello.c -o hello)\n-Wall     | Show all warnings\n-Wextra   | Show extra warnings\n-g        | Include debug information\n-O2       | Optimize code (level 2)\n-std=c11  | Use C11 standard\n-std=c99  | Use C99 standard\n-lm       | Link math library (for math.h)"
      },
      {
        type: "text", heading: "Online C Compilers (No Installation Needed)",
        content: "If you don't want to install anything, you can use free online C compilers:\n\n• onlinegdb.com/online_c_compiler — Full featured, supports debugging\n• replit.com — Create C projects online\n• programiz.com/c-programming/online-compiler — Beginner friendly\n• godbolt.org — Shows assembly output (advanced)\n• ideone.com — Simple online compiler\n\nFor learning and practice, online compilers are perfectly fine! For real projects and larger programs, install GCC locally."
      },
      {
        type: "example",
        code: "/* Test your setup with this program */\n#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int y = 20;\n    int sum = x + y;\n    \n    printf(\"GCC compiler is working!\\n\");\n    printf(\"%d + %d = %d\\n\", x, y, sum);\n    printf(\"Ready to learn C!\\n\");\n    \n    return 0;\n}",
        output: "GCC compiler is working!\n10 + 20 = 30\nReady to learn C!",
        label: "Setup Test Program"
      },
      {
        type: "warning",
        content: "Turbo C++ is a very old compiler (1990s) that does NOT support modern C standards. Avoid it for learning. Use GCC/MinGW or online compilers — they follow modern C standards and give better error messages."
      },
    ],
    quiz: [
      { question: "What is a C compiler?", options: ["Runs C code directly", "Converts C code to machine code", "Edits C files", "Debugs C programs"], answer: 1 },
      { question: "GCC stands for:", options: ["General C Compiler", "GNU Compiler Collection", "Global Code Compiler", "Generic C Compiler"], answer: 1 },
      { question: "Command to compile hello.c to hello executable:", options: ["run hello.c", "gcc hello.c -o hello", "c hello.c", "compile hello.c"], answer: 1 },
      { question: "C source file extension is:", options: [".cpp", ".obj", ".c", ".exe"], answer: 2 },
      { question: "gcc -Wall flag:", options: ["Compiles without errors", "Shows all warnings", "Links all libraries", "Optimizes code"], answer: 1 },
      { question: "After compiling, what file is created?", options: ["Source code file", "Executable/binary file", "Header file", "Object file only"], answer: 1 },
    ],
  },

  {
    id: "structure-of-c-program",
    title: "Structure of a C Program",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 3,
    content: [
      {
        type: "text", heading: "Anatomy of a C Program",
        content: "Every C program has a standard structure. Understanding this structure is the foundation of C programming.\n\nThe five main sections of a C program:\n1. Documentation Section — comments describing the program\n2. Preprocessor Directives — #include, #define statements\n3. Global Declarations — variables/functions accessible everywhere\n4. main() Function — the entry point, execution starts here\n5. User-defined Functions — custom functions called from main()\n\nExecution flow:\n• Program starts at main()\n• Preprocessor directives are handled before compilation\n• Code executes line by line inside main()\n• Functions are called as needed\n• Program ends when main() returns"
      },
      {
        type: "syntax",
        code: "/* ============================================\n   DOCUMENTATION SECTION\n   Program: My First C Program\n   Author: Your Name\n   Date: 2024\n   ============================================ */\n\n/* PREPROCESSOR DIRECTIVES */\n#include <stdio.h>    /* standard input/output */\n#include <stdlib.h>   /* standard library */\n#include <math.h>     /* math functions */\n\n#define PI 3.14159    /* constant definition */\n#define MAX 100       /* another constant */\n\n/* GLOBAL DECLARATION */\nint globalVar = 0;    /* accessible everywhere */\n\n/* FUNCTION PROTOTYPE (declaration before use) */\nvoid greet(char name[]);\nint add(int a, int b);\n\n/* MAIN FUNCTION */\nint main() {\n    /* local variables */\n    int x = 5, y = 10;\n    \n    /* function calls */\n    greet(\"Alice\");\n    printf(\"Sum = %d\\n\", add(x, y));\n    printf(\"PI = %.5f\\n\", PI);\n    \n    return 0;  /* return success */\n}\n\n/* USER DEFINED FUNCTIONS */\nvoid greet(char name[]) {\n    printf(\"Hello, %s!\\n\", name);\n}\n\nint add(int a, int b) {\n    return a + b;\n}",
        language: "c", label: "Complete C Program Structure"
      },
      {
        type: "text", heading: "Preprocessor Directives",
        content: "Preprocessor directives start with # and are processed BEFORE compilation. They are instructions to the C preprocessor, not to the compiler.\n\nCommon directives:\n\n#include — includes header files\n• #include <stdio.h>  — angle brackets for system headers\n• #include \"myfile.h\" — quotes for your own header files\n\n#define — defines constants and macros\n• #define PI 3.14159  — text substitution (no semicolon!)\n• #define MAX(a,b) ((a)>(b)?(a):(b))  — function-like macro\n\n#ifdef / #ifndef / #endif — conditional compilation\n• Used to include code only under certain conditions\n• Common for cross-platform code\n\nCommon Header Files:\n• stdio.h — printf, scanf, file operations\n• stdlib.h — malloc, free, exit, rand\n• string.h — strlen, strcpy, strcat, strcmp\n• math.h — sqrt, pow, sin, cos, abs\n• ctype.h — isalpha, isdigit, toupper, tolower\n• time.h — time functions"
      },
      {
        type: "table", heading: "Most Important Header Files",
        content: "Header     | Contains\n-----------|--------------------------------------------------\nstdio.h    | printf, scanf, fprintf, fopen, fclose\nstdlib.h   | malloc, free, exit, rand, srand, atoi\nstring.h   | strlen, strcpy, strcat, strcmp, strstr\nmath.h     | sqrt, pow, fabs, sin, cos, tan, floor, ceil\nctype.h    | isalpha, isdigit, isupper, tolower, toupper\ntime.h     | time, clock, difftime, mktime\nlimits.h   | INT_MAX, INT_MIN, CHAR_MAX, etc.\nstdbool.h  | bool, true, false (C99+)\nstdint.h   | int8_t, int16_t, int32_t, int64_t (C99+)"
      },
      {
        type: "text", heading: "Comments in C",
        content: "Comments are notes in your code that the compiler ignores. Good comments make code readable and maintainable.\n\nTwo types of comments:\n1. Single-line comment: // This is a comment (C99 onwards)\n2. Multi-line comment: /* This spans multiple lines */\n\nBest practices for comments:\n• Write WHY, not WHAT (the code already shows what)\n• Comment complex algorithms and non-obvious logic\n• Don't comment obvious code (x = 5; // set x to 5 — useless!)\n• Keep comments updated when you change code\n• Use comments to disable code temporarily during debugging"
      },
      {
        type: "example",
        code: "/* Program demonstrating C structure */\n#include <stdio.h>\n#include <math.h>   /* for sqrt() */\n\n#define PI 3.14159265\n\n/* Function prototype */\ndouble circleArea(double radius);\ndouble circlePerimeter(double radius);\n\nint main() {\n    double radius;\n    \n    printf(\"Enter circle radius: \");\n    scanf(\"%lf\", &radius);\n    \n    // Calculate and display results\n    printf(\"\\n--- Circle Properties ---\\n\");\n    printf(\"Radius:      %.2f\\n\", radius);\n    printf(\"Area:        %.2f\\n\", circleArea(radius));\n    printf(\"Perimeter:   %.2f\\n\", circlePerimeter(radius));\n    \n    return 0;\n}\n\n/* Calculate area of circle */\ndouble circleArea(double radius) {\n    return PI * radius * radius;\n}\n\n/* Calculate perimeter of circle */\ndouble circlePerimeter(double radius) {\n    return 2 * PI * radius;\n}",
        output: "Enter circle radius: 5\n\n--- Circle Properties ---\nRadius:      5.00\nArea:        78.54\nPerimeter:   31.42",
        label: "Circle Calculator"
      },
    ],
    quiz: [
      { question: "Which symbol starts preprocessor directives?", options: ["@", "$", "#", "&"], answer: 2 },
      { question: "#include <stdio.h> includes:", options: ["String functions", "Math functions", "Standard I/O functions", "Memory functions"], answer: 2 },
      { question: "#define PI 3.14 is processed:", options: ["At runtime", "During compilation", "Before compilation (preprocessor)", "After compilation"], answer: 2 },
      { question: "Function prototype is:", options: ["Function definition", "Function declaration before use", "Function call", "Function return"], answer: 1 },
      { question: "Single-line comment in C:", options: ["/* comment */", "// comment", "# comment", "-- comment"], answer: 1 },
      { question: "Multi-line comment syntax:", options: ["// ... //", "/* ... */", "<!-- ... -->", "## ... ##"], answer: 1 },
      { question: "math.h contains:", options: ["printf and scanf", "Memory allocation", "sqrt, pow, sin, cos", "String functions"], answer: 2 },
    ],
  },

  {
    id: "variables-data-types",
    title: "Variables & Data Types",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 4,
    content: [
      {
        type: "text", heading: "Variables in C",
        content: "A variable is a named memory location that stores a value. Unlike Python, C requires you to explicitly declare the TYPE of the variable before using it. This is called static typing.\n\nDeclaration syntax:\ndata_type variable_name;\ndata_type variable_name = initial_value;\n\nRules for variable names:\n✅ Can contain: letters (a-z, A-Z), digits (0-9), underscore (_)\n✅ Must START with a letter or underscore (not a digit)\n✅ Case-sensitive: age, Age, AGE are THREE different variables\n✅ Cannot be C keywords (int, float, if, while, etc.)\n✅ No spaces — use underscore: total_marks (not total marks)\n\nBest practices:\n• Use descriptive names: studentAge instead of x\n• Use lowercase with underscores: total_price\n• Constants in UPPERCASE: MAX_SIZE, PI"
      },
      {
        type: "table", heading: "C Data Types — Complete Classification",
        content: "Category  | Type           | Size    | Range                    | Format\n----------|----------------|---------|--------------------------|--------\nInteger   | char           | 1 byte  | -128 to 127              | %c, %d\nInteger   | unsigned char  | 1 byte  | 0 to 255                 | %u\nInteger   | short          | 2 bytes | -32768 to 32767          | %hd\nInteger   | int            | 4 bytes | -2,147,483,648 to 2,147,483,647 | %d\nInteger   | unsigned int   | 4 bytes | 0 to 4,294,967,295       | %u\nInteger   | long           | 4/8 bytes | -2^31 to 2^31-1        | %ld\nInteger   | long long      | 8 bytes | -2^63 to 2^63-1          | %lld\nFloat     | float          | 4 bytes | ~6-7 decimal digits      | %f\nFloat     | double         | 8 bytes | ~15-16 decimal digits    | %lf\nFloat     | long double    | 12/16 bytes | ~18-19 digits        | %Lf\n\nNote: Sizes may vary by platform. Use sizeof() to check."
      },
      {
        type: "syntax",
        code: "/* Variable declaration and initialization */\n#include <stdio.h>\n\nint main() {\n    /* Integer types */\n    int age = 20;\n    short year = 2024;\n    long population = 1400000000L;  /* L suffix for long */\n    long long bigNum = 9876543210LL; /* LL for long long */\n    unsigned int count = 50;\n    \n    /* Floating point types */\n    float price = 99.99f;    /* f suffix for float */\n    double pi = 3.14159265358979;\n    \n    /* Character type */\n    char grade = 'A';        /* single quotes for char! */\n    char letter = 65;        /* 65 = ASCII value of 'A' */\n    \n    /* Print all values */\n    printf(\"int:    %d\\n\", age);\n    printf(\"short:  %hd\\n\", year);\n    printf(\"long:   %ld\\n\", population);\n    printf(\"float:  %f\\n\", price);\n    printf(\"double: %lf\\n\", pi);\n    printf(\"char:   %c\\n\", grade);\n    \n    /* sizeof() - find size of data type */\n    printf(\"Size of int: %zu bytes\\n\", sizeof(int));\n    printf(\"Size of double: %zu bytes\\n\", sizeof(double));\n    \n    return 0;\n}",
        language: "c", label: "Data Types in C"
      },
      {
        type: "text", heading: "Constants in C",
        content: "Constants are values that cannot be changed during program execution. C has two ways to define constants:\n\n1. #define (preprocessor constant):\n#define PI 3.14159\n#define MAX_SIZE 100\n• Processed before compilation (text substitution)\n• No memory allocated\n• No type checking\n\n2. const keyword (typed constant):\nconst double PI = 3.14159;\nconst int MAX_SIZE = 100;\n• Processed at compile time\n• Has a specific type\n• Better than #define for type safety\n\nLiteral constants:\n• Integer: 42, -10, 0\n• Float: 3.14, 2.5f\n• Character: 'A', '\\n', '\\t'\n• String: \"Hello, World!\"\n• Hex: 0xFF, 0x1A\n• Octal: 017, 075"
      },
      {
        type: "syntax",
        code: "/* Type conversion in C */\n#include <stdio.h>\n\nint main() {\n    /* Implicit conversion (automatic) */\n    int i = 5;\n    double d = i;        /* int → double automatically */\n    printf(\"%lf\\n\", d);  /* 5.000000 */\n    \n    /* Potential data loss */\n    double x = 9.99;\n    int y = x;           /* double → int (truncates!) */\n    printf(\"%d\\n\", y);   /* 9 (not 10! truncated, not rounded) */\n    \n    /* Explicit casting */\n    int a = 7, b = 2;\n    double result = (double)a / b;  /* cast a to double first */\n    printf(\"%lf\\n\", result);  /* 3.500000 */\n    \n    /* Without cast */\n    int wrong = a / b;   /* integer division! */\n    printf(\"%d\\n\", wrong); /* 3 (decimal lost!) */\n    \n    /* char and int relationship */\n    char c = 'A';\n    printf(\"%c = %d\\n\", c, c);  /* A = 65 (ASCII) */\n    printf(\"%c\\n\", c + 1);      /* B (65+1=66='B') */\n    \n    return 0;\n}",
        language: "c", label: "Type Conversion"
      },
      {
        type: "example",
        code: "#include <stdio.h>\n\nint main() {\n    /* Student record */\n    int rollNo = 101;\n    char name[] = \"Alice\";  /* string (char array) */\n    int age = 20;\n    float marks = 95.5f;\n    char grade = 'A';\n    \n    /* Display */\n    printf(\"======= Student Record =======\\n\");\n    printf(\"Roll No : %d\\n\", rollNo);\n    printf(\"Name    : %s\\n\", name);\n    printf(\"Age     : %d years\\n\", age);\n    printf(\"Marks   : %.1f%%\\n\", marks);\n    printf(\"Grade   : %c\\n\", grade);\n    printf(\"==============================\\n\");\n    \n    /* Memory sizes */\n    printf(\"\\nMemory used:\\n\");\n    printf(\"int:    %zu bytes\\n\", sizeof(int));\n    printf(\"float:  %zu bytes\\n\", sizeof(float));\n    printf(\"double: %zu bytes\\n\", sizeof(double));\n    printf(\"char:   %zu bytes\\n\", sizeof(char));\n    \n    return 0;\n}",
        output: "======= Student Record =======\nRoll No : 101\nName    : Alice\nAge     : 20 years\nMarks   : 95.5%\nGrade   : A\n==============================\n\nMemory used:\nint:    4 bytes\nfloat:  4 bytes\ndouble: 8 bytes\nchar:   1 bytes",
        label: "Student Record"
      },
      {
        type: "warning",
        content: "Integer division in C truncates (drops) the decimal part! 7/2 = 3, NOT 3.5! If you need the decimal result, cast to float/double first: (float)7/2 = 3.5. This is one of the most common beginner mistakes in C."
      },
    ],
    quiz: [
      { question: "Which data type stores a single character?", options: ["string", "char", "letter", "text"], answer: 1 },
      { question: "What is the size of int on most 32/64-bit systems?", options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"], answer: 1 },
      { question: "What is 7/2 in C (integer division)?", options: ["3.5", "3", "4", "3.0"], answer: 1 },
      { question: "Which format specifier prints a double?", options: ["%d", "%f", "%lf", "%c"], answer: 2 },
      { question: "const int MAX = 100; means:", options: ["MAX can be changed", "MAX cannot be changed", "MAX is a float", "MAX is global only"], answer: 1 },
      { question: "sizeof(char) returns:", options: ["4", "2", "8", "1"], answer: 3 },
      { question: "Character literals use:", options: ["Double quotes: \"A\"", "Single quotes: 'A'", "Backticks: `A`", "No quotes: A"], answer: 1 },
    ],
  },

  {
    id: "input-output",
    title: "Input & Output (printf, scanf)",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 5,
    content: [
      {
        type: "text", heading: "printf() — Output Function",
        content: "printf() (print formatted) is the primary output function in C. It is defined in stdio.h and can display text, numbers, characters, and formatted output to the screen.\n\nSyntax:\nprintf(\"format string\", arg1, arg2, ...);\n\nThe format string can contain:\n• Regular text — printed as-is\n• Format specifiers — %d, %f, %c, %s etc. replaced by arguments\n• Escape sequences — \\n (newline), \\t (tab), etc.\n\nFormat specifier syntax:\n%[flags][width][.precision][length]specifier\n\nExamples:\n%d — integer\n%05d — integer with width 5, padded with zeros\n%10.2f — float, width 10, 2 decimal places\n%-20s — left-aligned string in 20-character field"
      },
      {
        type: "table", heading: "Format Specifiers Reference",
        content: "Specifier | Data Type          | Example Output\n----------|--------------------|---------------------------\n%d, %i    | int                | 42\n%u        | unsigned int       | 42\n%ld       | long int           | 123456789\n%lld      | long long int      | 9876543210\n%f        | float / double     | 3.140000\n%.2f      | float (2 decimals) | 3.14\n%e        | scientific notation| 3.140000e+00\n%lf       | double (scanf)     | 3.14\n%c        | char               | A\n%s        | string (char array)| Hello\n%p        | pointer address    | 0x7fff5a2b\n%x        | hexadecimal        | 2a\n%o        | octal              | 52\n%zu       | size_t (sizeof)    | 4\n%%        | literal %          | %\n\nEscape Sequences:\n\\n = newline, \\t = tab, \\\\ = backslash, \\\" = quote, \\0 = null"
      },
      {
        type: "syntax",
        code: "/* printf() examples */\n#include <stdio.h>\n\nint main() {\n    int n = 42;\n    float f = 3.14159f;\n    double d = 9.81;\n    char c = 'Z';\n    char name[] = \"Alice\";\n    \n    /* Basic output */\n    printf(\"%d\\n\", n);         /* 42 */\n    printf(\"%f\\n\", f);         /* 3.141590 */\n    printf(\"%.2f\\n\", d);      /* 9.81 (2 decimals) */\n    printf(\"%c\\n\", c);         /* Z */\n    printf(\"%s\\n\", name);      /* Alice */\n    \n    /* Width and alignment */\n    printf(\"%10d\\n\", n);       /* '        42' (right-align) */\n    printf(\"%-10d|\\n\", n);    /* '42        |' (left-align) */\n    printf(\"%010d\\n\", n);     /* '0000000042' (zero-pad) */\n    \n    /* Multiple values */\n    printf(\"%s is %d years old\\n\", name, 20);\n    printf(\"%.2f * %.2f = %.2f\\n\", f, 2.0f, f*2.0f);\n    \n    /* Escape sequences */\n    printf(\"Line 1\\nLine 2\\n\");  /* newlines */\n    printf(\"Col1\\tCol2\\tCol3\\n\"); /* tabs */\n    printf(\"He said \\\"Hello!\\\"\\n\"); /* quotes */\n    printf(\"Price: 50%%\\n\");      /* literal % */\n    \n    return 0;\n}",
        language: "c", label: "printf() Examples"
      },
      {
        type: "text", heading: "scanf() — Input Function",
        content: "scanf() (scan formatted) reads input from the keyboard. Like printf(), it uses format specifiers to know what type of data to read.\n\nCRITICAL RULE: Always use & (address-of) operator before variable name in scanf()!\n• scanf(\"%d\", &age); ← CORRECT (& is required)\n• scanf(\"%d\", age);  ← WRONG (missing &, causes crash!)\n\nException: You don't need & for strings (char arrays) because the array name already IS a pointer.\n\nscanf() stops reading at whitespace (space, tab, newline) for most specifiers. For reading an entire line including spaces, use fgets() instead.\n\nReturn value: scanf() returns the number of items successfully read. Always check this in real programs!"
      },
      {
        type: "syntax",
        code: "/* scanf() examples */\n#include <stdio.h>\n\nint main() {\n    int age;\n    float height;\n    char name[50];\n    char grade;\n    \n    /* Read integer */\n    printf(\"Enter age: \");\n    scanf(\"%d\", &age);      /* & is REQUIRED! */\n    \n    /* Read float */\n    printf(\"Enter height (meters): \");\n    scanf(\"%f\", &height);   /* & required for float too */\n    \n    /* Read character */\n    printf(\"Enter grade (A/B/C): \");\n    scanf(\" %c\", &grade);   /* space before %c skips whitespace */\n    \n    /* Read string (no & needed for arrays!) */\n    printf(\"Enter name: \");\n    scanf(\"%s\", name);       /* no & for string! */\n    \n    /* Read multiple values at once */\n    int x, y;\n    printf(\"Enter two numbers: \");\n    scanf(\"%d %d\", &x, &y);\n    \n    /* Display results */\n    printf(\"Name: %s, Age: %d, Height: %.2f\\n\", name, age, height);\n    printf(\"Grade: %c\\n\", grade);\n    printf(\"Sum: %d + %d = %d\\n\", x, y, x+y);\n    \n    return 0;\n}\n\n/* Read full line (including spaces) */\n/* fgets(name, 50, stdin);  ← better for names with spaces */",
        language: "c", label: "scanf() Examples"
      },
      {
        type: "example",
        code: "/* Student information system */\n#include <stdio.h>\n\nint main() {\n    int rollNo;\n    char name[50];\n    int age;\n    float marks;\n    \n    /* Input */\n    printf(\"===== Student Registration =====\\n\");\n    printf(\"Enter Roll Number: \");\n    scanf(\"%d\", &rollNo);\n    \n    printf(\"Enter Name: \");\n    scanf(\"%s\", name);  /* reads until space */\n    \n    printf(\"Enter Age: \");\n    scanf(\"%d\", &age);\n    \n    printf(\"Enter Marks (0-100): \");\n    scanf(\"%f\", &marks);\n    \n    /* Determine grade */\n    char grade;\n    if (marks >= 90) grade = 'A';\n    else if (marks >= 80) grade = 'B';\n    else if (marks >= 70) grade = 'C';\n    else if (marks >= 60) grade = 'D';\n    else grade = 'F';\n    \n    /* Output */\n    printf(\"\\n====== Student Report Card ======\\n\");\n    printf(\"Roll No : %d\\n\", rollNo);\n    printf(\"Name    : %s\\n\", name);\n    printf(\"Age     : %d\\n\", age);\n    printf(\"Marks   : %.1f%%\\n\", marks);\n    printf(\"Grade   : %c\\n\", grade);\n    printf(\"Status  : %s\\n\", marks >= 40 ? \"PASS\" : \"FAIL\");\n    printf(\"================================\\n\");\n    \n    return 0;\n}",
        output: "===== Student Registration =====\nEnter Roll Number: 101\nEnter Name: Alice\nEnter Age: 20\nEnter Marks (0-100): 87.5\n\n====== Student Report Card ======\nRoll No : 101\nName    : Alice\nAge     : 20\nMarks   : 87.5%\nGrade   : B\nStatus  : PASS\n================================",
        label: "Student Report Card"
      },
      {
        type: "warning",
        content: "Never forget & in scanf()! scanf(\"%d\", age) instead of scanf(\"%d\", &age) causes undefined behavior — your program may crash or give wrong results. This is one of the most common C bugs. Also, scanf(\"%s\") is unsafe for strings (buffer overflow risk) — use fgets() in production code."
      },
    ],
    quiz: [
      { question: "Which format specifier reads a double in scanf?", options: ["%f", "%d", "%lf", "%db"], answer: 2 },
      { question: "Why use & in scanf(\"%d\", &x)?", options: ["It's optional", "To pass the memory address of x", "To print the value", "To initialize x"], answer: 1 },
      { question: "%.2f in printf means:", options: ["Width of 2", "2 total digits", "2 decimal places", "2 significant figures"], answer: 2 },
      { question: "\\n in printf does:", options: ["Print n", "Go to next line", "Print newline character", "Both B and C"], answer: 3 },
      { question: "scanf(\"%s\", name) stops reading at:", options: ["End of line", "Whitespace (space/tab)", "After 50 chars", "Never stops"], answer: 1 },
      { question: "%-10d means:", options: ["Negative number width 10", "Left-aligned in 10-char field", "10 digits", "Decimal 10"], answer: 1 },
      { question: "To print a literal % sign:", options: ["%", "\\%", "%%", "&%"], answer: 2 },
    ],
  },

  {
    id: "operators",
    title: "Operators",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 6,
    content: [
      {
        type: "text", heading: "Operators in C",
        content: "Operators are symbols that perform operations on values (operands). C has a rich set of operators that make it very powerful for low-level programming.\n\nC operator categories:\n1. Arithmetic — +, -, *, /, %\n2. Assignment — =, +=, -=, *=, /=, %=\n3. Relational — ==, !=, <, >, <=, >=\n4. Logical — &&, ||, !\n5. Bitwise — &, |, ^, ~, <<, >>\n6. Increment/Decrement — ++, --\n7. Conditional (ternary) — ? :\n8. sizeof — size of variable or type\n9. Pointer — *, &\n10. Comma — ,\n\nOperator Precedence:\nHigher precedence operators are evaluated first (like BODMAS in math). Parentheses () always override precedence."
      },
      {
        type: "table", heading: "Operator Precedence (High to Low)",
        content: "Level | Operators              | Associativity\n------|------------------------|---------------\n1     | () [] -> .             | Left to right\n2     | ! ~ ++ -- (type) * & sizeof | Right to left\n3     | * / %                  | Left to right\n4     | + -                    | Left to right\n5     | << >>                  | Left to right\n6     | < <= > >=              | Left to right\n7     | == !=                  | Left to right\n8     | &                      | Left to right\n9     | ^                      | Left to right\n10    | |                      | Left to right\n11    | &&                     | Left to right\n12    | ||                     | Left to right\n13    | ?:                     | Right to left\n14    | = += -= *= /= etc.     | Right to left\n15    | ,                      | Left to right"
      },
      {
        type: "syntax",
        code: "/* Arithmetic & Assignment Operators */\n#include <stdio.h>\n\nint main() {\n    int a = 17, b = 5;\n    \n    /* Arithmetic */\n    printf(\"%d + %d = %d\\n\", a, b, a + b);  /* 22 */\n    printf(\"%d - %d = %d\\n\", a, b, a - b);  /* 12 */\n    printf(\"%d * %d = %d\\n\", a, b, a * b);  /* 85 */\n    printf(\"%d / %d = %d\\n\", a, b, a / b);  /* 3 (integer!) */\n    printf(\"%d %% %d = %d\\n\", a, b, a % b); /* 2 (remainder) */\n    \n    /* Assignment operators */\n    int x = 10;\n    x += 5;   printf(\"x += 5: %d\\n\", x);  /* 15 */\n    x -= 3;   printf(\"x -= 3: %d\\n\", x);  /* 12 */\n    x *= 2;   printf(\"x *= 2: %d\\n\", x);  /* 24 */\n    x /= 4;   printf(\"x /= 4: %d\\n\", x);  /* 6 */\n    x %= 4;   printf(\"x %%= 4: %d\\n\", x); /* 2 */\n    \n    return 0;\n}",
        language: "c", label: "Arithmetic & Assignment"
      },
      {
        type: "syntax",
        code: "/* Increment, Decrement & Ternary */\n#include <stdio.h>\n\nint main() {\n    int a = 5;\n    \n    /* Pre-increment: increment THEN use */\n    printf(\"%d\\n\", ++a);  /* 6 — incremented first */\n    printf(\"%d\\n\", a);    /* 6 */\n    \n    /* Post-increment: use THEN increment */\n    printf(\"%d\\n\", a++);  /* 6 — original value printed */\n    printf(\"%d\\n\", a);    /* 7 — incremented after */\n    \n    /* Same for decrement */\n    int b = 10;\n    printf(\"%d\\n\", --b);  /* 9 */\n    printf(\"%d\\n\", b--);  /* 9 (then b becomes 8) */\n    printf(\"%d\\n\", b);    /* 8 */\n    \n    /* Ternary operator: condition ? true_val : false_val */\n    int age = 20;\n    char* status = (age >= 18) ? \"Adult\" : \"Minor\";\n    printf(\"Status: %s\\n\", status);\n    \n    int max = (a > b) ? a : b;  /* find maximum */\n    printf(\"Max: %d\\n\", max);\n    \n    /* Relational operators (result is 1=true, 0=false) */\n    printf(\"%d == %d: %d\\n\", a, b, a == b);  /* 0 */\n    printf(\"%d != %d: %d\\n\", a, b, a != b);  /* 1 */\n    printf(\"%d > %d: %d\\n\", a, b, a > b);    /* 1 */\n    \n    /* Logical operators */\n    int x = 5;\n    printf(\"x>0 && x<10: %d\\n\", (x>0 && x<10)); /* 1 (true) */\n    printf(\"x<0 || x>3: %d\\n\", (x<0 || x>3));   /* 1 (true) */\n    printf(\"!(x==5): %d\\n\", !(x==5));             /* 0 (false) */\n    \n    return 0;\n}",
        language: "c", label: "++, --, ternary, relational, logical"
      },
      {
        type: "syntax",
        code: "/* Bitwise Operators */\n#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  /* binary: 1100 */\n    unsigned int b = 10;  /* binary: 1010 */\n    \n    printf(\"a  = %d  (binary: 1100)\\n\", a);\n    printf(\"b  = %d  (binary: 1010)\\n\", b);\n    printf(\"a & b = %d  (AND: 1000)\\n\", a & b);   /* 8 */\n    printf(\"a | b = %d  (OR:  1110)\\n\", a | b);   /* 14 */\n    printf(\"a ^ b = %d  (XOR: 0110)\\n\", a ^ b);   /* 6 */\n    printf(\"~a = %d  (NOT)\\n\", ~a);               /* -13 */\n    printf(\"a << 1 = %d  (left shift)\\n\", a << 1); /* 24 */\n    printf(\"a >> 1 = %d  (right shift)\\n\", a >> 1);/* 6 */\n    \n    /* Practical use: check if number is even/odd */\n    int n = 7;\n    if (n & 1) printf(\"%d is Odd\\n\", n);\n    else printf(\"%d is Even\\n\", n);\n    \n    /* Left shift = multiply by 2^n */\n    printf(\"5 << 2 = %d (5 * 4 = 20)\\n\", 5 << 2);\n    /* Right shift = divide by 2^n */\n    printf(\"20 >> 2 = %d (20 / 4 = 5)\\n\", 20 >> 2);\n    \n    return 0;\n}",
        language: "c", label: "Bitwise Operators"
      },
      {
        type: "example",
        code: "/* Calculator with all operators */\n#include <stdio.h>\n\nint main() {\n    double a, b;\n    char op;\n    double result;\n    int valid = 1;\n    \n    printf(\"Enter: number operator number (e.g. 10 + 5): \");\n    scanf(\"%lf %c %lf\", &a, &op, &b);\n    \n    switch (op) {\n        case '+': result = a + b; break;\n        case '-': result = a - b; break;\n        case '*': result = a * b; break;\n        case '/':\n            if (b == 0) { printf(\"Error: Division by zero!\\n\"); valid = 0; }\n            else result = a / b;\n            break;\n        case '%':\n            if ((int)b == 0) { printf(\"Error: Modulo by zero!\\n\"); valid = 0; }\n            else result = (int)a % (int)b;\n            break;\n        default:\n            printf(\"Unknown operator: %c\\n\", op);\n            valid = 0;\n    }\n    \n    if (valid)\n        printf(\"%.2lf %c %.2lf = %.2lf\\n\", a, op, b, result);\n    \n    return 0;\n}",
        output: "Enter: number operator number (e.g. 10 + 5): 17 % 5\n17.00 % 5.00 = 2.00",
        label: "Calculator with switch"
      },
    ],
    quiz: [
      { question: "What is 17 % 5 in C?", options: ["3", "2", "3.4", "0"], answer: 1 },
      { question: "What does a++ do?", options: ["Increment then use", "Use then increment", "Decrement a", "Add a to itself"], answer: 1 },
      { question: "&&  operator is:", options: ["Bitwise AND", "Logical AND", "Assignment", "Address-of"], answer: 1 },
      { question: "a & b is:", options: ["Logical AND", "Bitwise AND", "Address of b", "Multiply"], answer: 1 },
      { question: "(x > 5) ? \"big\" : \"small\" is a:", options: ["If statement", "Ternary operator", "Switch statement", "Loop"], answer: 1 },
      { question: "5 << 2 equals:", options: ["10", "20", "7", "3"], answer: 1 },
      { question: "!0 equals:", options: ["0", "1", "-1", "null"], answer: 1 },
    ],
  },

  {
    id: "conditional-statements",
    title: "Conditional Statements",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 7,
    content: [
      {
        type: "text", heading: "Decision Making in C",
        content: "Conditional statements allow a program to make decisions — executing different code based on whether conditions are true or false. In C, there are three ways to make decisions:\n\n1. if statement — runs code when condition is true\n2. if-else statement — chooses between two blocks\n3. if-else if-else — handles multiple conditions\n4. switch statement — cleaner way for multiple fixed values\n5. Ternary operator ? : — one-line conditional\n\nIn C, conditions evaluate to:\n• 0 — means FALSE\n• Any non-zero value (1, -1, 42, etc.) — means TRUE\n\nThis is different from languages like Python that have a bool type. In C:\nif (5) → TRUE (5 is non-zero)\nif (0) → FALSE\nif (x = 5) → Always TRUE! (assignment, not comparison)"
      },
      {
        type: "syntax",
        code: "/* if, if-else, if-else if */\n#include <stdio.h>\n\nint main() {\n    int marks;\n    printf(\"Enter marks: \");\n    scanf(\"%d\", &marks);\n    \n    /* Simple if */\n    if (marks >= 90) {\n        printf(\"Distinction!\\n\");\n    }\n    \n    /* if-else */\n    if (marks >= 40) {\n        printf(\"PASS\\n\");\n    } else {\n        printf(\"FAIL\\n\");\n    }\n    \n    /* if-else if-else chain */\n    if (marks >= 90) {\n        printf(\"Grade: A+\\n\");\n    } else if (marks >= 80) {\n        printf(\"Grade: A\\n\");\n    } else if (marks >= 70) {\n        printf(\"Grade: B\\n\");\n    } else if (marks >= 60) {\n        printf(\"Grade: C\\n\");\n    } else if (marks >= 40) {\n        printf(\"Grade: D\\n\");\n    } else {\n        printf(\"Grade: F\\n\");\n    }\n    \n    /* Nested if */\n    if (marks >= 40) {\n        if (marks >= 80) {\n            printf(\"High achiever!\\n\");\n        } else {\n            printf(\"Good performance.\\n\");\n        }\n    }\n    \n    return 0;\n}",
        language: "c", label: "if-else Statements"
      },
      {
        type: "text", heading: "switch Statement",
        content: "The switch statement is a cleaner alternative to long if-else chains when you're comparing one variable to multiple fixed values.\n\nHow switch works:\n1. Evaluates the expression in switch()\n2. Jumps to the matching case label\n3. Executes code until it hits break\n4. If no case matches, executes default\n\nIMPORTANT — break statement:\nWithout break, execution 'falls through' to the next case! This is called fall-through and is usually a bug but can be intentional.\n\nSwitch limitations:\n• Only works with integer types (int, char, enum)\n• Cannot use float, double, or string as switch expression\n• Case values must be constants (not variables)\n• Duplicate case values are not allowed"
      },
      {
        type: "syntax",
        code: "/* switch statement */\n#include <stdio.h>\n\nint main() {\n    int day;\n    printf(\"Enter day number (1-7): \");\n    scanf(\"%d\", &day);\n    \n    switch (day) {\n        case 1:\n            printf(\"Monday\\n\");\n            break;\n        case 2:\n            printf(\"Tuesday\\n\");\n            break;\n        case 3:\n            printf(\"Wednesday\\n\");\n            break;\n        case 4:\n            printf(\"Thursday\\n\");\n            break;\n        case 5:\n            printf(\"Friday\\n\");\n            break;\n        case 6:\n        case 7:  /* fall-through — both 6 and 7 go here */\n            printf(\"Weekend!\\n\");\n            break;\n        default:\n            printf(\"Invalid day number\\n\");\n    }\n    \n    /* switch with char */\n    char grade;\n    printf(\"Enter grade (A/B/C/D/F): \");\n    scanf(\" %c\", &grade);\n    \n    switch (grade) {\n        case 'A': case 'a':\n            printf(\"Excellent! (90-100)\\n\"); break;\n        case 'B': case 'b':\n            printf(\"Very Good! (80-89)\\n\"); break;\n        case 'C': case 'c':\n            printf(\"Good (70-79)\\n\"); break;\n        case 'D': case 'd':\n            printf(\"Average (60-69)\\n\"); break;\n        case 'F': case 'f':\n            printf(\"Failed (below 40)\\n\"); break;\n        default:\n            printf(\"Invalid grade!\\n\");\n    }\n    \n    return 0;\n}",
        language: "c", label: "switch Statement"
      },
      {
        type: "example",
        code: "/* Simple ATM menu using switch */\n#include <stdio.h>\n\nint main() {\n    double balance = 10000.00;\n    int choice;\n    double amount;\n    \n    printf(\"====== ATM Menu ======\\n\");\n    printf(\"1. Check Balance\\n\");\n    printf(\"2. Deposit\\n\");\n    printf(\"3. Withdraw\\n\");\n    printf(\"4. Exit\\n\");\n    printf(\"Enter choice: \");\n    scanf(\"%d\", &choice);\n    \n    switch (choice) {\n        case 1:\n            printf(\"\\nYour balance: Rs. %.2f\\n\", balance);\n            break;\n            \n        case 2:\n            printf(\"Enter deposit amount: \");\n            scanf(\"%lf\", &amount);\n            if (amount > 0) {\n                balance += amount;\n                printf(\"Deposited Rs. %.2f\\n\", amount);\n                printf(\"New balance: Rs. %.2f\\n\", balance);\n            } else {\n                printf(\"Invalid amount!\\n\");\n            }\n            break;\n            \n        case 3:\n            printf(\"Enter withdrawal amount: \");\n            scanf(\"%lf\", &amount);\n            if (amount <= 0) {\n                printf(\"Invalid amount!\\n\");\n            } else if (amount > balance) {\n                printf(\"Insufficient funds!\\n\");\n            } else {\n                balance -= amount;\n                printf(\"Withdrawn Rs. %.2f\\n\", amount);\n                printf(\"Remaining: Rs. %.2f\\n\", balance);\n            }\n            break;\n            \n        case 4:\n            printf(\"Thank you! Goodbye!\\n\");\n            break;\n            \n        default:\n            printf(\"Invalid choice!\\n\");\n    }\n    \n    return 0;\n}",
        output: "====== ATM Menu ======\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit\nEnter choice: 3\nEnter withdrawal amount: 2000\nWithdrawn Rs. 2000.00\nRemaining: Rs. 8000.00",
        label: "ATM Menu"
      },
      {
        type: "warning",
        content: "Don't confuse = (assignment) with == (comparison)! if (x = 5) assigns 5 to x and is ALWAYS true. if (x == 5) checks if x equals 5. This is one of the most common C bugs. Some programmers write if (5 == x) to avoid this — if you forget ==, the compiler gives an error because you can't assign to a constant."
      },
    ],
    quiz: [
      { question: "In C, what value represents FALSE?", options: ["false", "-1", "0", "null"], answer: 2 },
      { question: "switch statement works with:", options: ["float only", "double only", "int and char (integer types)", "Any type"], answer: 2 },
      { question: "Without break in switch:", options: ["Program crashes", "Falls through to next case", "Goes to default", "Stops switch"], answer: 1 },
      { question: "if (x = 5) tests:", options: ["If x equals 5", "Always true (assigns 5)", "Always false", "Syntax error"], answer: 1 },
      { question: "Which handles multiple fixed value checks cleanly?", options: ["if-else", "for loop", "switch", "while"], answer: 2 },
      { question: "default in switch runs when:", options: ["Always", "No case matches", "All cases match", "break is missing"], answer: 1 },
    ],
  },

  {
    id: "loops",
    title: "Loops",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 8,
    content: [
      {
        type: "text", heading: "Loops in C",
        content: "Loops allow a block of code to execute repeatedly. Without loops, you'd have to write the same code hundreds of times!\n\nC has three types of loops:\n1. for loop — when you know how many times to repeat\n2. while loop — repeat while condition is true\n3. do-while loop — execute AT LEAST ONCE, then check condition\n\nKey loop control statements:\n• break — immediately exits the loop\n• continue — skips current iteration, goes to next\n• goto — jump to a label (avoid in most cases)\n\nChoosing the right loop:\n• Know the count? → for loop\n• Condition-based? → while loop\n• Need to run at least once? → do-while"
      },
      {
        type: "table", heading: "Loop Types Comparison",
        content: "Feature          | for              | while            | do-while\n-----------------|------------------|------------------|------------------\nSyntax           | for(init;cond;inc)| while(cond)      | do{...}while(cond)\nCondition check  | Before first iter | Before first iter | After first iter\nMinimum runs     | 0 times           | 0 times           | 1 time (always)\nBest for         | Known count       | Unknown count     | Menu-driven programs\nCounter variable | In for header     | Declared outside  | Declared outside"
      },
      {
        type: "syntax",
        code: "/* for loop */\n#include <stdio.h>\n\nint main() {\n    /* Basic for loop */\n    for (int i = 1; i <= 5; i++) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");  /* 1 2 3 4 5 */\n    \n    /* Countdown */\n    for (int i = 10; i >= 1; i--) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");  /* 10 9 8 7 6 5 4 3 2 1 */\n    \n    /* Step by 2 */\n    for (int i = 0; i <= 10; i += 2) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");  /* 0 2 4 6 8 10 */\n    \n    /* Nested for loops - multiplication table */\n    for (int i = 1; i <= 3; i++) {\n        for (int j = 1; j <= 3; j++) {\n            printf(\"%d*%d=%-3d \", i, j, i*j);\n        }\n        printf(\"\\n\");\n    }\n    \n    /* Multiple variables in for */\n    for (int i = 0, j = 10; i < j; i++, j--) {\n        printf(\"i=%d j=%d\\n\", i, j);\n    }\n    \n    return 0;\n}",
        language: "c", label: "for Loop"
      },
      {
        type: "syntax",
        code: "/* while and do-while loops */\n#include <stdio.h>\n\nint main() {\n    /* while loop */\n    int n = 1;\n    while (n <= 5) {\n        printf(\"%d \", n);\n        n++;  /* MUST update! otherwise infinite loop */\n    }\n    printf(\"\\n\");  /* 1 2 3 4 5 */\n    \n    /* while with user input */\n    int num;\n    printf(\"Enter numbers (0 to stop):\\n\");\n    int sum = 0;\n    scanf(\"%d\", &num);\n    while (num != 0) {\n        sum += num;\n        scanf(\"%d\", &num);\n    }\n    printf(\"Sum = %d\\n\", sum);\n    \n    /* do-while loop — runs AT LEAST ONCE */\n    int choice;\n    do {\n        printf(\"\\nMenu:\\n1. Play\\n2. Quit\\nChoice: \");\n        scanf(\"%d\", &choice);\n        \n        if (choice == 1)\n            printf(\"Playing game!\\n\");\n    } while (choice != 2);\n    printf(\"Goodbye!\\n\");\n    \n    return 0;\n}\n\n/* break and continue */\nvoid breakContinueDemo() {\n    /* break - exit loop */\n    for (int i = 1; i <= 10; i++) {\n        if (i == 5) break;   /* stop at 5 */\n        printf(\"%d \", i);    /* 1 2 3 4 */\n    }\n    \n    /* continue - skip even numbers */\n    for (int i = 1; i <= 10; i++) {\n        if (i % 2 == 0) continue;  /* skip even */\n        printf(\"%d \", i);           /* 1 3 5 7 9 */\n    }\n}",
        language: "c", label: "while & do-while"
      },
      {
        type: "example",
        code: "/* Pattern printing with nested loops */\n#include <stdio.h>\n\nint main() {\n    int n;\n    printf(\"Enter rows: \");\n    scanf(\"%d\", &n);\n    \n    /* Right triangle */\n    printf(\"\\nRight Triangle:\\n\");\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            printf(\"* \");\n        }\n        printf(\"\\n\");\n    }\n    \n    /* Number pyramid */\n    printf(\"\\nNumber Pyramid:\\n\");\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            printf(\"%d \", j);\n        }\n        printf(\"\\n\");\n    }\n    \n    /* Multiplication table */\n    printf(\"\\nMultiplication Table (5):\\n\");\n    for (int i = 1; i <= 10; i++) {\n        printf(\"5 x %2d = %3d\\n\", i, 5*i);\n    }\n    \n    /* Sum of digits */\n    int num = 12345;\n    int digitSum = 0;\n    int temp = num;\n    while (temp > 0) {\n        digitSum += temp % 10;\n        temp /= 10;\n    }\n    printf(\"\\nSum of digits of %d = %d\\n\", num, digitSum);\n    \n    return 0;\n}",
        output: "Enter rows: 4\n\nRight Triangle:\n* \n* * \n* * * \n* * * * \n\nNumber Pyramid:\n1 \n1 2 \n1 2 3 \n1 2 3 4 \n\nMultiplication Table (5):\n5 x  1 =   5\n5 x  2 =  10\n...",
        label: "Patterns & Tables"
      },
    ],
    quiz: [
      { question: "Which loop runs at least once regardless of condition?", options: ["for", "while", "do-while", "foreach"], answer: 2 },
      { question: "break in a loop:", options: ["Goes to next iteration", "Exits the loop immediately", "Restarts the loop", "Goes to else"], answer: 1 },
      { question: "continue in a loop:", options: ["Exits loop", "Skips rest of current iteration", "Breaks the loop", "Continues forever"], answer: 1 },
      { question: "for (;;) creates:", options: ["Syntax error", "Runs once", "Infinite loop", "Empty loop"], answer: 2 },
      { question: "for (int i=0; i<5; i++) runs how many times?", options: ["4", "5", "6", "Depends"], answer: 1 },
      { question: "In while loop, what must you ensure?", options: ["Loop body has printf", "Condition eventually becomes false", "Break is always present", "Counter starts at 0"], answer: 1 },
    ],
  },

  {
    id: "basic-programs",
    title: "Basic Programs (Practice)",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 9,
    content: [
      {
        type: "text", heading: "Practice Makes Perfect",
        content: "The best way to learn C is to write real programs. This chapter contains classic C programs that test everything you've learned so far — variables, operators, conditions, and loops.\n\nFor each program:\n1. Read the problem and understand what it should do\n2. Close this and try to write it yourself\n3. Compare your solution with the one shown\n4. Try to modify it or add features\n\nThese programs are commonly asked in C programming exams and interviews!"
      },
      {
        type: "example",
        code: "/* Program 1: Check Prime Number */\n#include <stdio.h>\n#include <math.h>\n\nint isPrime(int n) {\n    if (n < 2) return 0;           /* 0 and 1 are not prime */\n    if (n == 2) return 1;          /* 2 is prime */\n    if (n % 2 == 0) return 0;      /* even numbers not prime */\n    \n    /* Check odd divisors up to sqrt(n) */\n    for (int i = 3; i <= (int)sqrt(n); i += 2) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\n\nint main() {\n    int n;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &n);\n    \n    if (isPrime(n))\n        printf(\"%d is PRIME\\n\", n);\n    else\n        printf(\"%d is NOT prime\\n\", n);\n    \n    /* Print primes up to 50 */\n    printf(\"\\nPrimes up to 50: \");\n    for (int i = 2; i <= 50; i++) {\n        if (isPrime(i))\n            printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    \n    return 0;\n}",
        output: "Enter a number: 17\n17 is PRIME\n\nPrimes up to 50: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47",
        label: "Program 1: Prime Number"
      },
      {
        type: "example",
        code: "/* Program 2: Fibonacci Series */\n#include <stdio.h>\n\nint main() {\n    int n;\n    printf(\"How many Fibonacci terms? \");\n    scanf(\"%d\", &n);\n    \n    long long a = 0, b = 1, c;\n    printf(\"Fibonacci: \");\n    \n    for (int i = 1; i <= n; i++) {\n        printf(\"%lld \", a);\n        c = a + b;\n        a = b;\n        b = c;\n    }\n    printf(\"\\n\");\n    \n    return 0;\n}",
        output: "How many Fibonacci terms? 10\nFibonacci: 0 1 1 2 3 5 8 13 21 34",
        label: "Program 2: Fibonacci"
      },
      {
        type: "example",
        code: "/* Program 3: Reverse a Number */\n#include <stdio.h>\n\nint main() {\n    int num, original, reversed = 0, remainder;\n    \n    printf(\"Enter an integer: \");\n    scanf(\"%d\", &num);\n    original = num;\n    \n    while (num != 0) {\n        remainder = num % 10;         /* last digit */\n        reversed = reversed * 10 + remainder;\n        num /= 10;                    /* remove last digit */\n    }\n    \n    printf(\"Reversed: %d\\n\", reversed);\n    \n    if (original == reversed)\n        printf(\"%d is a PALINDROME\\n\", original);\n    else\n        printf(\"%d is NOT a palindrome\\n\", original);\n    \n    return 0;\n}",
        output: "Enter an integer: 12321\nReversed: 12321\n12321 is a PALINDROME",
        label: "Program 3: Reverse & Palindrome"
      },
      {
        type: "example",
        code: "/* Program 4: Number to Words (1-20) */\n#include <stdio.h>\n\nint main() {\n    int n;\n    char *words[] = {\n        \"Zero\", \"One\", \"Two\", \"Three\", \"Four\",\n        \"Five\", \"Six\", \"Seven\", \"Eight\", \"Nine\",\n        \"Ten\", \"Eleven\", \"Twelve\", \"Thirteen\", \"Fourteen\",\n        \"Fifteen\", \"Sixteen\", \"Seventeen\", \"Eighteen\",\n        \"Nineteen\", \"Twenty\"\n    };\n    \n    printf(\"Enter number (0-20): \");\n    scanf(\"%d\", &n);\n    \n    if (n >= 0 && n <= 20)\n        printf(\"%d = %s\\n\", n, words[n]);\n    else\n        printf(\"Out of range!\\n\");\n    \n    return 0;\n}",
        output: "Enter number (0-20): 15\n15 = Fifteen",
        label: "Program 4: Number to Words"
      },
      {
        type: "tip",
        content: "Practice these classic problems: 1) Armstrong number checker, 2) GCD and LCM, 3) Star patterns (triangle, diamond), 4) Decimal to Binary conversion, 5) Sum of series (1 + 1/2 + 1/3 + ... + 1/n). These are extremely common in C exams!"
      },
    ],
    quiz: [
      { question: "sqrt() function is in which header?", options: ["stdio.h", "stdlib.h", "math.h", "ctype.h"], answer: 2 },
      { question: "To get last digit of number n:", options: ["n / 10", "n * 10", "n % 10", "n - 10"], answer: 2 },
      { question: "long long type uses format specifier:", options: ["%d", "%ld", "%lld", "%l"], answer: 2 },
      { question: "A palindrome number reads same:", options: ["Forwards only", "Backwards only", "Same forwards and backwards", "In binary"], answer: 2 },
      { question: "To remove last digit of number n:", options: ["n % 10", "n / 10", "n * 10", "n - 1"], answer: 1 },
    ],
  },

  {
    id: "arrays",
    title: "Arrays",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 10,
    content: [
      {
        type: "text", heading: "What are Arrays?",
        content: "An array is a collection of elements of the SAME data type stored in CONTIGUOUS (adjacent) memory locations. Instead of declaring 100 separate variables, you declare one array!\n\nKey facts about arrays in C:\n• Fixed size — size must be known at compile time (or use dynamic allocation)\n• Same type — all elements must be the same data type\n• Zero-indexed — first element is at index 0, last is at index size-1\n• Contiguous memory — elements are stored next to each other\n• Array name = pointer to first element\n\nDeclaration syntax:\ndata_type array_name[size];\ndata_type array_name[size] = {val1, val2, val3};\n\nAccessing elements:\narray_name[index]  (index starts from 0!)"
      },
      {
        type: "table", heading: "Array Types",
        content: "Type         | Syntax                        | Example\n-------------|-------------------------------|---------------------------\n1D Array     | int arr[5]                    | int marks[5] = {85,90,78,95,88}\n2D Array     | int arr[rows][cols]           | int matrix[3][3]\n3D Array     | int arr[x][y][z]              | int cube[2][3][4]\nChar Array   | char str[size]                | char name[50] = \"Alice\"\nArray of ptrs| char *arr[]                   | char *words[] = {\"hi\",\"bye\"}\n\nMemory layout of int arr[4] = {10,20,30,40}:\nIndex:    [0]  [1]  [2]  [3]\nValue:     10   20   30   40\nAddress: 1000 1004 1008 1012  (each int = 4 bytes)"
      },
      {
        type: "syntax",
        code: "/* 1D Array examples */\n#include <stdio.h>\n\nint main() {\n    /* Declaration and initialization */\n    int marks[5] = {85, 92, 78, 95, 88};\n    float prices[] = {9.99, 14.50, 7.25};  /* size auto-detected */\n    int zeros[10] = {0};   /* all elements = 0 */\n    \n    /* Accessing elements */\n    printf(\"First mark: %d\\n\", marks[0]);   /* 85 */\n    printf(\"Last mark: %d\\n\", marks[4]);    /* 88 */\n    \n    /* Modifying elements */\n    marks[2] = 80;  /* change index 2 from 78 to 80 */\n    \n    /* Traverse array with for loop */\n    printf(\"All marks: \");\n    for (int i = 0; i < 5; i++) {\n        printf(\"%d \", marks[i]);\n    }\n    printf(\"\\n\");\n    \n    /* Calculate sum and average */\n    int sum = 0;\n    for (int i = 0; i < 5; i++) {\n        sum += marks[i];\n    }\n    printf(\"Sum: %d, Average: %.1f\\n\", sum, (float)sum/5);\n    \n    /* Find max and min */\n    int max = marks[0], min = marks[0];\n    for (int i = 1; i < 5; i++) {\n        if (marks[i] > max) max = marks[i];\n        if (marks[i] < min) min = marks[i];\n    }\n    printf(\"Max: %d, Min: %d\\n\", max, min);\n    \n    return 0;\n}",
        language: "c", label: "1D Array"
      },
      {
        type: "syntax",
        code: "/* 2D Array (Matrix) */\n#include <stdio.h>\n\nint main() {\n    /* 2D array: rows x columns */\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    \n    /* Print matrix */\n    printf(\"Matrix:\\n\");\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            printf(\"%3d \", matrix[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    \n    /* Matrix addition */\n    int a[2][2] = {{1,2},{3,4}};\n    int b[2][2] = {{5,6},{7,8}};\n    int c[2][2];\n    \n    for (int i = 0; i < 2; i++)\n        for (int j = 0; j < 2; j++)\n            c[i][j] = a[i][j] + b[i][j];\n    \n    printf(\"\\nMatrix Sum:\\n\");\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++)\n            printf(\"%3d \", c[i][j]);\n        printf(\"\\n\");\n    }\n    \n    /* Row sum */\n    for (int i = 0; i < 3; i++) {\n        int rowSum = 0;\n        for (int j = 0; j < 3; j++)\n            rowSum += matrix[i][j];\n        printf(\"Row %d sum: %d\\n\", i+1, rowSum);\n    }\n    \n    return 0;\n}",
        language: "c", label: "2D Array (Matrix)"
      },
      {
        type: "example",
        code: "/* Bubble Sort - sort array in ascending order */\n#include <stdio.h>\n\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n-1; i++) {\n        for (int j = 0; j < n-i-1; j++) {\n            if (arr[j] > arr[j+1]) {\n                /* swap arr[j] and arr[j+1] */\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n}\n\nvoid printArray(int arr[], int n) {\n    for (int i = 0; i < n; i++)\n        printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr) / sizeof(arr[0]);  /* calculate size */\n    \n    printf(\"Before sort: \");\n    printArray(arr, n);\n    \n    bubbleSort(arr, n);\n    \n    printf(\"After sort:  \");\n    printArray(arr, n);\n    \n    /* Linear search */\n    int target = 25;\n    int found = -1;\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == target) { found = i; break; }\n    }\n    \n    if (found != -1)\n        printf(\"%d found at index %d\\n\", target, found);\n    else\n        printf(\"%d not found\\n\", target);\n    \n    return 0;\n}",
        output: "Before sort: 64 34 25 12 22 11 90\nAfter sort:  11 12 22 25 34 64 90\n25 found at index 2",
        label: "Bubble Sort & Linear Search"
      },
      {
        type: "warning",
        content: "Array index out of bounds is UNDEFINED BEHAVIOR in C! If you access arr[10] on an array of size 5, C will NOT give an error — it will read/write memory beyond the array, causing crashes or security vulnerabilities. C does NOT check array bounds automatically. You MUST do it yourself!"
      },
    ],
    quiz: [
      { question: "First element of int arr[5] is at index:", options: ["1", "0", "-1", "5"], answer: 1 },
      { question: "int arr[5] stores how many integers?", options: ["4", "5", "6", "0 to 5"], answer: 1 },
      { question: "sizeof(arr)/sizeof(arr[0]) gives:", options: ["Size in bytes", "Number of elements", "First element", "Last index"], answer: 1 },
      { question: "2D array int a[3][4] has:", options: ["7 elements", "12 elements", "3 elements", "34 elements"], answer: 1 },
      { question: "C checks array bounds automatically?", options: ["Yes always", "Only in debug mode", "No — you must check yourself", "Only for 1D arrays"], answer: 2 },
      { question: "int arr[] = {1,2,3} has size:", options: ["3 (auto-detected)", "Must specify size", "0", "Depends on compiler"], answer: 0 },
    ],
  },

  // ════════════════════════════════════════
  // LEVEL 2 — INTERMEDIATE (8 Chapters)
  // ════════════════════════════════════════

  {
    id: "strings",
    title: "Strings",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 11,
    content: [
      {
        type: "text", heading: "Strings in C",
        content: "In C, a string is simply an array of characters terminated by a null character '\\0' (ASCII value 0). There is no separate string type — strings are char arrays!\n\nDeclaration:\nchar name[50] = \"Alice\";  // stored as: A l i c e \\0\nchar greeting[] = \"Hello\"; // size auto-calculated as 6 (5 chars + \\0)\n\nThe null terminator '\\0' is AUTOMATICALLY added by the compiler when you use string literals. But if you manually build a string character by character, you must add '\\0' yourself!\n\nKey concepts:\n• String length = number of characters BEFORE '\\0'\n• Array size must be at least length + 1 (for '\\0')\n• '%s' format specifier prints strings\n• string.h provides string manipulation functions"
      },
      {
        type: "table", heading: "String Functions (string.h)",
        content: "Function           | Syntax                  | Description\n-------------------|-------------------------|---------------------------\nstrlen()           | strlen(str)             | Length of string (excluding \\0)\nstrcpy()           | strcpy(dest, src)        | Copy src to dest\nstrncpy()          | strncpy(dest, src, n)   | Copy at most n chars (safer)\nstrcat()           | strcat(dest, src)        | Append src to end of dest\nstrncat()          | strncat(dest, src, n)   | Append at most n chars\nstrcmp()           | strcmp(s1, s2)           | Compare (0=equal, <0, >0)\nstrncmp()          | strncmp(s1, s2, n)      | Compare first n chars\nstrchr()           | strchr(str, ch)          | Find first occurrence of char\nstrstr()           | strstr(str, substr)      | Find substring\nstrtok()           | strtok(str, delim)       | Tokenize string\nsprintf()          | sprintf(buf, fmt, ...)   | Format string to buffer\nsscanf()           | sscanf(str, fmt, ...)    | Parse string like scanf"
      },
      {
        type: "syntax",
        code: "/* String operations */\n#include <stdio.h>\n#include <string.h>  /* Required for string functions */\n\nint main() {\n    char str1[50] = \"Hello\";\n    char str2[50] = \"World\";\n    char str3[100];\n    \n    /* strlen - string length */\n    printf(\"Length of '%s': %zu\\n\", str1, strlen(str1));  /* 5 */\n    \n    /* strcpy - copy string */\n    strcpy(str3, str1);  /* str3 = \"Hello\" */\n    printf(\"Copied: %s\\n\", str3);\n    \n    /* strcat - concatenate */\n    strcat(str3, \" \");      /* str3 = \"Hello \" */\n    strcat(str3, str2);    /* str3 = \"Hello World\" */\n    printf(\"Concatenated: %s\\n\", str3);\n    \n    /* strcmp - compare strings */\n    int result = strcmp(str1, str2);\n    if (result == 0)      printf(\"Strings are EQUAL\\n\");\n    else if (result < 0)  printf(\"%s comes before %s\\n\", str1, str2);\n    else                  printf(\"%s comes after %s\\n\", str1, str2);\n    \n    /* strchr - find character */\n    char *pos = strchr(str3, 'W');\n    if (pos != NULL)\n        printf(\"'W' found at position %ld\\n\", pos - str3);\n    \n    /* strstr - find substring */\n    char *sub = strstr(str3, \"World\");\n    if (sub != NULL)\n        printf(\"Substring found: %s\\n\", sub);\n    \n    return 0;\n}",
        language: "c", label: "String Functions"
      },
      {
        type: "syntax",
        code: "/* Character-by-character string operations */\n#include <stdio.h>\n#include <string.h>\n#include <ctype.h>  /* for toupper, tolower, isalpha etc. */\n\nint main() {\n    char str[] = \"Hello, World!\";\n    int len = strlen(str);\n    \n    /* Convert to uppercase */\n    for (int i = 0; i < len; i++) {\n        printf(\"%c\", toupper(str[i]));\n    }\n    printf(\"\\n\");  /* HELLO, WORLD! */\n    \n    /* Count vowels */\n    int vowels = 0;\n    for (int i = 0; i < len; i++) {\n        char c = tolower(str[i]);\n        if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u')\n            vowels++;\n    }\n    printf(\"Vowels: %d\\n\", vowels);\n    \n    /* Reverse a string */\n    char rev[50];\n    for (int i = 0; i < len; i++)\n        rev[i] = str[len - 1 - i];\n    rev[len] = '\\0';  /* MUST add null terminator! */\n    printf(\"Reversed: %s\\n\", rev);\n    \n    /* Check palindrome */\n    int isPalin = 1;\n    for (int i = 0; i < len/2; i++) {\n        if (str[i] != str[len-1-i]) { isPalin = 0; break; }\n    }\n    printf(\"Palindrome: %s\\n\", isPalin ? \"Yes\" : \"No\");\n    \n    /* strtok - split by delimiter */\n    char sentence[] = \"apple,banana,cherry,mango\";\n    char *token = strtok(sentence, \",\");\n    while (token != NULL) {\n        printf(\"Token: %s\\n\", token);\n        token = strtok(NULL, \",\");\n    }\n    \n    return 0;\n}",
        language: "c", label: "String Manipulation"
      },
      {
        type: "example",
        code: "/* String word counter and statistics */\n#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n\nint main() {\n    char text[200];\n    printf(\"Enter a sentence: \");\n    fgets(text, sizeof(text), stdin);  /* reads full line */\n    \n    int len = strlen(text);\n    int chars = 0, words = 0, spaces = 0;\n    int upper = 0, lower = 0, digits = 0;\n    int inWord = 0;\n    \n    for (int i = 0; i < len; i++) {\n        char c = text[i];\n        if (c == '\\n') continue;\n        \n        chars++;\n        if (c == ' ') { spaces++; inWord = 0; }\n        else {\n            if (!inWord) { words++; inWord = 1; }\n            if (isupper(c)) upper++;\n            else if (islower(c)) lower++;\n            else if (isdigit(c)) digits++;\n        }\n    }\n    \n    printf(\"\\n--- Text Statistics ---\\n\");\n    printf(\"Characters: %d\\n\", chars);\n    printf(\"Words:      %d\\n\", words);\n    printf(\"Spaces:     %d\\n\", spaces);\n    printf(\"Uppercase:  %d\\n\", upper);\n    printf(\"Lowercase:  %d\\n\", lower);\n    printf(\"Digits:     %d\\n\", digits);\n    \n    return 0;\n}",
        output: "Enter a sentence: Hello World 123\n\n--- Text Statistics ---\nCharacters: 15\nWords:      3\nSpaces:     2\nUppercase:  2\nLowercase:  8\nDigits:     3",
        label: "Text Statistics"
      },
      {
        type: "warning",
        content: "Never use strcpy() or strcat() without checking that the destination has enough space — this causes buffer overflow, a serious security vulnerability! Use strncpy() and strncat() with size limits, or better yet, use snprintf() for safe string formatting."
      },
    ],
    quiz: [
      { question: "Strings in C are terminated by:", options: ["\\n", "\\0 (null character)", "\\t", "EOF"], answer: 1 },
      { question: "strlen(\"Hello\") returns:", options: ["6", "5", "4", "Depends on system"], answer: 1 },
      { question: "strcmp(s1, s2) returns 0 when:", options: ["s1 > s2", "s1 < s2", "strings are equal", "strings are different"], answer: 2 },
      { question: "fgets() is better than scanf(\"%s\") because:", options: ["It's faster", "It reads spaces and prevents buffer overflow", "It's simpler", "It returns int"], answer: 1 },
      { question: "After strtok(str, \",\"), next token is:", options: ["strtok(str, \",\")", "strtok(NULL, \",\")", "strtok(str, NULL)", "strtok(NULL, NULL)"], answer: 1 },
      { question: "char str[] = \"Hi\" stores how many chars?", options: ["2", "3 (H,i,\\0)", "4", "Depends"], answer: 1 },
    ],
  },

  {
    id: "functions",
    title: "Functions",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 12,
    content: [
      {
        type: "text", heading: "Functions in C",
        content: "A function is a block of code that performs a specific task. Functions allow you to:\n• Avoid code duplication (DRY — Don't Repeat Yourself)\n• Break large programs into manageable pieces\n• Make code reusable and readable\n• Make debugging easier (test each function separately)\n\nC has two types of functions:\n1. Standard library functions — provided by C (printf, scanf, sqrt, strlen)\n2. User-defined functions — functions you write yourself\n\nEvery C function must be:\n• Declared (prototype) — or defined before first use\n• Defined — the actual implementation\n• Called — invoked to execute\n\nFunction syntax:\nreturn_type function_name(parameter_list) {\n    // function body\n    return value;  // optional for void\n}"
      },
      {
        type: "table", heading: "Function Components",
        content: "Component         | Description                           | Example\n------------------|---------------------------------------|---------------------------\nReturn type       | Data type of value returned           | int, float, void, char*\nFunction name     | Identifier (follows naming rules)     | calculateArea, isPrime\nParameters        | Input values with types               | int x, float y\nFunction body     | Code that executes                    | { ... }\nreturn statement  | Returns value to caller               | return result;\nvoid              | Function takes/returns nothing        | void printMenu(void)\nPrototype         | Declaration before definition         | int add(int, int);"
      },
      {
        type: "syntax",
        code: "/* Function examples */\n#include <stdio.h>\n\n/* Function PROTOTYPES (declarations) */\nint add(int a, int b);\nfloat average(int arr[], int n);\nvoid printLine(char ch, int count);\nint factorial(int n);\n\nint main() {\n    /* Calling functions */\n    int sum = add(5, 3);\n    printf(\"5 + 3 = %d\\n\", sum);\n    \n    int marks[] = {85, 90, 78, 92, 88};\n    float avg = average(marks, 5);\n    printf(\"Average: %.1f\\n\", avg);\n    \n    printLine('=', 20);\n    printf(\"5! = %d\\n\", factorial(5));\n    printLine('=', 20);\n    \n    return 0;\n}\n\n/* Function DEFINITIONS */\n\n/* Returns sum of two integers */\nint add(int a, int b) {\n    return a + b;\n}\n\n/* Returns average of array */\nfloat average(int arr[], int n) {\n    int sum = 0;\n    for (int i = 0; i < n; i++)\n        sum += arr[i];\n    return (float)sum / n;\n}\n\n/* Prints a line of characters */\nvoid printLine(char ch, int count) {\n    for (int i = 0; i < count; i++)\n        printf(\"%c\", ch);\n    printf(\"\\n\");\n    /* no return needed for void */\n}\n\n/* Factorial */\nint factorial(int n) {\n    if (n <= 1) return 1;\n    int result = 1;\n    for (int i = 2; i <= n; i++)\n        result *= i;\n    return result;\n}",
        language: "c", label: "Function Examples"
      },
      {
        type: "text", heading: "Call by Value vs Call by Reference",
        content: "In C, there are two ways to pass arguments to functions:\n\nCall by Value (default):\n• A COPY of the value is passed\n• Changes inside function do NOT affect the original variable\n• Safe — original data is protected\n\nCall by Reference (using pointers):\n• The memory ADDRESS of the variable is passed\n• Changes inside function DO affect the original variable\n• Needed when function must modify caller's variable\n• Also more efficient for large data (no copying)\n\nExample: swap(a, b) function\n• By value: swap won't work (changes only the copies)\n• By reference (pointers): swap actually changes a and b"
      },
      {
        type: "syntax",
        code: "/* Call by Value vs Call by Reference */\n#include <stdio.h>\n\n/* Call by VALUE - doesn't change original */\nvoid swapByValue(int a, int b) {\n    int temp = a;\n    a = b;\n    b = temp;\n    printf(\"Inside swapByValue: a=%d, b=%d\\n\", a, b);\n}\n\n/* Call by REFERENCE - changes original */\nvoid swapByRef(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\n/* Function with multiple return values using pointers */\nvoid minMax(int arr[], int n, int *min, int *max) {\n    *min = *max = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] < *min) *min = arr[i];\n        if (arr[i] > *max) *max = arr[i];\n    }\n}\n\nint main() {\n    int x = 10, y = 20;\n    \n    printf(\"Before: x=%d, y=%d\\n\", x, y);\n    \n    swapByValue(x, y);\n    printf(\"After swapByValue: x=%d, y=%d\\n\", x, y);\n    /* x and y unchanged! */\n    \n    swapByRef(&x, &y);\n    printf(\"After swapByRef: x=%d, y=%d\\n\", x, y);\n    /* x and y actually swapped! */\n    \n    /* Multiple return values */\n    int arr[] = {5, 2, 8, 1, 9, 3};\n    int mn, mx;\n    minMax(arr, 6, &mn, &mx);\n    printf(\"Min: %d, Max: %d\\n\", mn, mx);\n    \n    return 0;\n}",
        language: "c", label: "Call by Value & Reference"
      },
      {
        type: "example",
        code: "/* Complete function-based program: Statistics calculator */\n#include <stdio.h>\n#include <math.h>\n\n#define MAX 100\n\nvoid inputArray(int arr[], int *n) {\n    printf(\"How many numbers? \");\n    scanf(\"%d\", n);\n    printf(\"Enter %d numbers:\\n\", *n);\n    for (int i = 0; i < *n; i++)\n        scanf(\"%d\", &arr[i]);\n}\n\nint sum(int arr[], int n) {\n    int s = 0;\n    for (int i = 0; i < n; i++) s += arr[i];\n    return s;\n}\n\nfloat mean(int arr[], int n) {\n    return (float)sum(arr, n) / n;\n}\n\nfloat stdDev(int arr[], int n) {\n    float m = mean(arr, n);\n    float variance = 0;\n    for (int i = 0; i < n; i++)\n        variance += (arr[i] - m) * (arr[i] - m);\n    return sqrt(variance / n);\n}\n\nvoid sortAscending(int arr[], int n) {\n    for (int i = 0; i < n-1; i++)\n        for (int j = 0; j < n-i-1; j++)\n            if (arr[j] > arr[j+1]) {\n                int t = arr[j]; arr[j] = arr[j+1]; arr[j+1] = t;\n            }\n}\n\nint main() {\n    int arr[MAX], n;\n    inputArray(arr, &n);\n    \n    printf(\"\\n--- Statistics ---\\n\");\n    printf(\"Sum:    %d\\n\", sum(arr, n));\n    printf(\"Mean:   %.2f\\n\", mean(arr, n));\n    printf(\"StdDev: %.2f\\n\", stdDev(arr, n));\n    \n    sortAscending(arr, n);\n    printf(\"Min:    %d\\n\", arr[0]);\n    printf(\"Max:    %d\\n\", arr[n-1]);\n    printf(\"Median: %.1f\\n\", n%2 ? arr[n/2] : (arr[n/2-1]+arr[n/2])/2.0f);\n    \n    return 0;\n}",
        output: "How many numbers? 5\nEnter 5 numbers:\n85 90 78 95 88\n\n--- Statistics ---\nSum:    436\nMean:   87.20\nStdDev: 5.74\nMin:    78\nMax:    95\nMedian: 88.0",
        label: "Statistics Calculator"
      },
    ],
    quiz: [
      { question: "What does void return type mean?", options: ["Returns 0", "Returns nothing", "Returns any type", "Error"], answer: 1 },
      { question: "Call by value:", options: ["Passes memory address", "Passes a copy of value", "Always modifies original", "Used with pointers"], answer: 1 },
      { question: "To modify original variable in function, use:", options: ["Call by value", "return statement", "Pointer parameter (call by reference)", "Global variable"], answer: 2 },
      { question: "Function prototype is needed when:", options: ["Always", "Function defined after main", "Function has no parameters", "Function returns void"], answer: 1 },
      { question: "int add(int, int); is a:", options: ["Function call", "Function definition", "Function prototype", "Return statement"], answer: 2 },
      { question: "Arrays are always passed to functions as:", options: ["Copy of all elements", "Pointer to first element", "Value", "String"], answer: 1 },
    ],
  },

  {
    id: "recursion",
    title: "Recursion",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 13,
    content: [
      {
        type: "text", heading: "Recursion in C",
        content: "Recursion is when a function calls ITSELF to solve a problem. It's a powerful technique for problems that can be broken down into smaller, identical sub-problems.\n\nEvery recursive function MUST have:\n1. Base case — the condition that STOPS the recursion (prevents infinite loop)\n2. Recursive case — the function calling itself with a SMALLER/SIMPLER input\n\nHow recursion works in C (Call Stack):\nEach function call creates a new stack frame containing:\n• Function's local variables\n• Return address (where to go when function finishes)\n• Parameters\n\nRecursion vs Iteration:\n• Recursion is more elegant for some problems (trees, factorial, Fibonacci)\n• Iteration is usually more efficient (less memory, faster)\n• Deep recursion → Stack Overflow (too many stack frames)\n• C default stack size limits recursion depth"
      },
      {
        type: "syntax",
        code: "/* Classic recursion examples */\n#include <stdio.h>\n\n/* Factorial: n! = n × (n-1) × ... × 1 */\nlong long factorial(int n) {\n    /* Base case */\n    if (n == 0 || n == 1)\n        return 1;\n    /* Recursive case */\n    return n * factorial(n - 1);\n}\n\n/* Fibonacci: F(n) = F(n-1) + F(n-2) */\nint fibonacci(int n) {\n    if (n <= 0) return 0;   /* base case 1 */\n    if (n == 1) return 1;   /* base case 2 */\n    return fibonacci(n-1) + fibonacci(n-2);\n}\n\n/* Sum of first n natural numbers */\nint sumN(int n) {\n    if (n <= 0) return 0;   /* base case */\n    return n + sumN(n - 1); /* recursive case */\n}\n\n/* Power: base^exp */\ndouble power(double base, int exp) {\n    if (exp == 0) return 1;          /* base case */\n    if (exp < 0) return 1 / power(base, -exp);\n    return base * power(base, exp-1);\n}\n\nint main() {\n    printf(\"5! = %lld\\n\", factorial(5));   /* 120 */\n    printf(\"10! = %lld\\n\", factorial(10)); /* 3628800 */\n    \n    printf(\"Fibonacci: \");\n    for (int i = 0; i < 10; i++)\n        printf(\"%d \", fibonacci(i));\n    printf(\"\\n\");  /* 0 1 1 2 3 5 8 13 21 34 */\n    \n    printf(\"Sum 1-10 = %d\\n\", sumN(10));   /* 55 */\n    printf(\"2^10 = %.0f\\n\", power(2, 10)); /* 1024 */\n    \n    return 0;\n}",
        language: "c", label: "Classic Recursive Functions"
      },
      {
        type: "syntax",
        code: "/* More recursion examples */\n#include <stdio.h>\n#include <string.h>\n\n/* Binary search (recursive) */\nint binarySearch(int arr[], int low, int high, int target) {\n    if (low > high) return -1;          /* base case: not found */\n    \n    int mid = (low + high) / 2;\n    \n    if (arr[mid] == target) return mid;  /* base case: found */\n    if (arr[mid] > target)\n        return binarySearch(arr, low, mid-1, target);   /* search left */\n    else\n        return binarySearch(arr, mid+1, high, target);  /* search right */\n}\n\n/* Palindrome check */\nint isPalindrome(char str[], int start, int end) {\n    if (start >= end) return 1;           /* base case */\n    if (str[start] != str[end]) return 0; /* mismatch */\n    return isPalindrome(str, start+1, end-1);\n}\n\n/* Tower of Hanoi */\nvoid hanoi(int n, char from, char to, char aux) {\n    if (n == 1) {\n        printf(\"Move disk 1: %c → %c\\n\", from, to);\n        return;\n    }\n    hanoi(n-1, from, aux, to);\n    printf(\"Move disk %d: %c → %c\\n\", n, from, to);\n    hanoi(n-1, aux, to, from);\n}\n\n/* GCD (Greatest Common Divisor) - Euclid's algorithm */\nint gcd(int a, int b) {\n    if (b == 0) return a;  /* base case */\n    return gcd(b, a % b);  /* recursive case */\n}\n\nint main() {\n    int arr[] = {1, 3, 5, 7, 9, 11, 13, 15};\n    int idx = binarySearch(arr, 0, 7, 9);\n    printf(\"9 found at index: %d\\n\", idx);  /* 4 */\n    \n    char str[] = \"racecar\";\n    printf(\"%s is palindrome: %s\\n\", str,\n        isPalindrome(str, 0, strlen(str)-1) ? \"Yes\" : \"No\");\n    \n    printf(\"\\nTower of Hanoi (3 disks):\\n\");\n    hanoi(3, 'A', 'C', 'B');\n    \n    printf(\"\\nGCD(48, 18) = %d\\n\", gcd(48, 18));  /* 6 */\n    \n    return 0;\n}",
        language: "c", label: "Advanced Recursion"
      },
      {
        type: "example",
        code: "/* Visualizing recursion - factorial with trace */\n#include <stdio.h>\n\nlong long factorial_trace(int n, int depth) {\n    /* Print indentation to show depth */\n    for (int i = 0; i < depth; i++) printf(\"  \");\n    printf(\"factorial(%d) called\\n\", n);\n    \n    if (n <= 1) {\n        for (int i = 0; i < depth; i++) printf(\"  \");\n        printf(\"returning 1 (base case)\\n\");\n        return 1;\n    }\n    \n    long long result = n * factorial_trace(n-1, depth+1);\n    \n    for (int i = 0; i < depth; i++) printf(\"  \");\n    printf(\"returning %d * ... = %lld\\n\", n, result);\n    \n    return result;\n}\n\nint main() {\n    printf(\"Tracing factorial(4):\\n\");\n    printf(\"=====================\\n\");\n    long long result = factorial_trace(4, 0);\n    printf(\"=====================\\n\");\n    printf(\"factorial(4) = %lld\\n\", result);\n    return 0;\n}",
        output: "Tracing factorial(4):\n=====================\nfactorial(4) called\n  factorial(3) called\n    factorial(2) called\n      factorial(1) called\n      returning 1 (base case)\n    returning 2 * ... = 2\n  returning 3 * ... = 6\nreturning 4 * ... = 24\n=====================\nfactorial(4) = 24",
        label: "Recursion Trace"
      },
      {
        type: "warning",
        content: "Recursive Fibonacci is VERY SLOW! fibonacci(50) makes over 2 billion function calls due to redundant recalculation. For large n, use iteration or memoization (dynamic programming). Always think about efficiency when using recursion!"
      },
    ],
    quiz: [
      { question: "Base case in recursion is:", options: ["First recursive call", "Condition that stops recursion", "Return value", "Function declaration"], answer: 1 },
      { question: "Without base case, recursion causes:", options: ["Wrong answer", "Stack overflow", "Infinite output", "Compiler error"], answer: 1 },
      { question: "factorial(0) should return:", options: ["0", "1", "-1", "Error"], answer: 1 },
      { question: "Tower of Hanoi with n disks needs how many moves?", options: ["n", "n²", "2^n - 1", "n!"], answer: 2 },
      { question: "Why is recursive Fibonacci slow?", options: ["Recursion is always slow", "Same sub-problems recalculated many times", "Stack size limit", "Integer overflow"], answer: 1 },
      { question: "gcd(a, 0) returns:", options: ["0", "a", "1", "undefined"], answer: 1 },
    ],
  },

  {
    id: "pointers",
    title: "Pointers (Basic)",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 14,
    content: [
      {
        type: "text", heading: "What are Pointers?",
        content: "A pointer is a variable that stores the MEMORY ADDRESS of another variable. Pointers are one of C's most powerful (and most feared!) features.\n\nWhy pointers matter:\n• Direct memory manipulation\n• Pass-by-reference to functions\n• Dynamic memory allocation (malloc/free)\n• Arrays and strings\n• Data structures (linked lists, trees)\n• Efficient large data passing\n\nTwo key operators:\n• & (address-of operator) — gives the address of a variable\n• * (dereference operator) — gives the VALUE at an address\n\nDeclaration:\ndata_type *pointer_name;\nint *p;     // p is a pointer to int\nfloat *fp;  // fp is a pointer to float\nchar *cp;   // cp is a pointer to char"
      },
      {
        type: "table", heading: "Pointer Operators",
        content: "Operator | Name          | Used on    | Returns\n---------|---------------|------------|---------------------------\n&x       | Address-of    | Variable x | Memory address of x\n*p       | Dereference   | Pointer p  | Value stored at address p\np++      | Increment     | Pointer p  | Points to next element\np--      | Decrement     | Pointer p  | Points to previous element\np + n    | Pointer arith | Pointer p  | Address n elements ahead\n\nPointer Sizes:\nAll pointers are same size (4 bytes on 32-bit, 8 bytes on 64-bit)\nregardless of the type they point to."
      },
      {
        type: "syntax",
        code: "/* Pointer basics */\n#include <stdio.h>\n\nint main() {\n    int x = 42;\n    int *p;          /* declare pointer to int */\n    \n    p = &x;          /* p stores address of x */\n    \n    printf(\"Value of x:       %d\\n\", x);    /* 42 */\n    printf(\"Address of x:     %p\\n\", &x);   /* e.g. 0x7ffd... */\n    printf(\"Value of p:       %p\\n\", p);    /* same address */\n    printf(\"Value at *p:      %d\\n\", *p);   /* 42 (dereference) */\n    \n    /* Modifying x through pointer */\n    *p = 100;        /* changes x through pointer */\n    printf(\"x after *p=100:   %d\\n\", x);    /* 100 */\n    \n    /* Pointer to pointer */\n    int **pp = &p;   /* pointer to pointer to int */\n    printf(\"**pp = %d\\n\", **pp);            /* 100 */\n    \n    /* NULL pointer - safe initialization */\n    int *nullPtr = NULL;  /* doesn't point to anything */\n    if (nullPtr == NULL)\n        printf(\"Pointer is NULL (safe)\\n\");\n    \n    /* sizeof pointer */\n    printf(\"Size of int*: %zu bytes\\n\", sizeof(int*));   /* 8 on 64-bit */\n    printf(\"Size of int:  %zu bytes\\n\", sizeof(int));    /* 4 */\n    \n    return 0;\n}",
        language: "c", label: "Pointer Basics"
      },
      {
        type: "text", heading: "Pointers and Arrays",
        content: "In C, arrays and pointers are closely related. The array name is actually a pointer to the first element!\n\nint arr[5] = {10, 20, 30, 40, 50};\narr    → pointer to arr[0] (same as &arr[0])\n*arr   → value of arr[0] = 10\narr+1  → pointer to arr[1]\n*(arr+1) → value of arr[1] = 20\n\nPointer arithmetic:\nWhen you add 1 to a pointer, it advances by sizeof(data_type) bytes\n• int *p: p+1 advances by 4 bytes\n• char *p: p+1 advances by 1 byte\n• double *p: p+1 advances by 8 bytes\n\nSo arr[i] and *(arr+i) are EQUIVALENT in C!"
      },
      {
        type: "syntax",
        code: "/* Pointers and Arrays */\n#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = arr;    /* p points to first element */\n    \n    /* Array notation vs pointer notation */\n    printf(\"arr[0] = %d, *p = %d\\n\", arr[0], *p);       /* same */\n    printf(\"arr[1] = %d, *(p+1) = %d\\n\", arr[1], *(p+1)); /* same */\n    printf(\"arr[2] = %d, *(arr+2) = %d\\n\", arr[2], *(arr+2));\n    \n    /* Traverse array with pointer */\n    printf(\"Using pointer: \");\n    for (int i = 0; i < 5; i++) {\n        printf(\"%d \", *(p + i));  /* or p[i] */\n    }\n    printf(\"\\n\");\n    \n    /* Increment pointer to traverse */\n    printf(\"Pointer traversal: \");\n    for (int *ptr = arr; ptr < arr + 5; ptr++) {\n        printf(\"%d \", *ptr);\n    }\n    printf(\"\\n\");\n    \n    /* Pointer to string */\n    char *str = \"Hello\";   /* string literal as pointer */\n    printf(\"String: %s\\n\", str);\n    printf(\"First char: %c\\n\", *str);\n    printf(\"Third char: %c\\n\", *(str + 2));\n    \n    /* Function with pointer - swap */\n    int a = 5, b = 10;\n    int *pa = &a, *pb = &b;\n    int temp = *pa;\n    *pa = *pb;\n    *pb = temp;\n    printf(\"After swap: a=%d, b=%d\\n\", a, b);\n    \n    return 0;\n}",
        language: "c", label: "Pointers & Arrays"
      },
      {
        type: "example",
        code: "/* Dynamic Memory Allocation with pointers */\n#include <stdio.h>\n#include <stdlib.h>  /* for malloc, free */\n\nint main() {\n    int n;\n    printf(\"How many numbers to store? \");\n    scanf(\"%d\", &n);\n    \n    /* Allocate memory at runtime */\n    int *arr = (int*)malloc(n * sizeof(int));\n    \n    if (arr == NULL) {\n        printf(\"Memory allocation failed!\\n\");\n        return 1;\n    }\n    \n    printf(\"Enter %d numbers:\\n\", n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &arr[i]);  /* arr[i] = *(arr+i) */\n    }\n    \n    /* Process */\n    int sum = 0;\n    for (int i = 0; i < n; i++)\n        sum += arr[i];\n    \n    printf(\"Sum = %d\\n\", sum);\n    printf(\"Average = %.2f\\n\", (float)sum / n);\n    \n    /* ALWAYS free dynamically allocated memory! */\n    free(arr);\n    arr = NULL;  /* good practice */\n    \n    return 0;\n}",
        output: "How many numbers to store? 4\nEnter 4 numbers:\n10 20 30 40\nSum = 100\nAverage = 25.00",
        label: "Dynamic Memory with malloc"
      },
      {
        type: "warning",
        content: "NEVER dereference a NULL or uninitialized pointer! int *p; *p = 5; — this is UNDEFINED BEHAVIOR and causes a Segmentation Fault crash. Always initialize pointers to NULL and check before dereferencing: if (p != NULL) { *p = 5; }. Also ALWAYS free() every malloc() to prevent memory leaks!"
      },
    ],
    quiz: [
      { question: "&x gives:", options: ["Value of x", "Memory address of x", "Pointer declaration", "Size of x"], answer: 1 },
      { question: "*p gives:", options: ["Address stored in p", "Value at the address stored in p", "p itself", "Size of p"], answer: 1 },
      { question: "int arr[5]; arr is:", options: ["Integer variable", "Pointer to first element", "Value of arr[0]", "Array size"], answer: 1 },
      { question: "arr[i] is equivalent to:", options: ["*(arr-i)", "&arr[i]", "*(arr+i)", "arr*i"], answer: 2 },
      { question: "NULL pointer should be:", options: ["Dereferenced freely", "Never used", "Checked before dereferencing", "Set to 0 manually"], answer: 2 },
      { question: "malloc() returns:", options: ["int", "void pointer (void*)", "char", "NULL always"], answer: 1 },
    ],
  },

  {
    id: "structures",
    title: "Structures",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 15,
    content: [
      {
        type: "text", heading: "What are Structures?",
        content: "A structure (struct) is a user-defined data type that groups multiple variables of DIFFERENT types under a single name. It's like a record or a template for related data.\n\nWhy use structures?\n• Group related data together (student: name, age, marks, grade)\n• Create complex data types\n• Foundation for data structures (linked lists, trees)\n• Cleaner than passing many individual variables\n\nDifference from arrays:\n• Arrays store SAME type\n• Structures store DIFFERENT types\n\nSyntax:\nstruct StructName {\n    data_type member1;\n    data_type member2;\n    ...\n};\n\nAccessing members:\n• Dot operator: variable.member\n• Arrow operator (for pointers): pointer->member"
      },
      {
        type: "syntax",
        code: "/* Structure basics */\n#include <stdio.h>\n#include <string.h>\n\n/* Structure definition */\nstruct Student {\n    int rollNo;\n    char name[50];\n    int age;\n    float marks;\n    char grade;\n};\n\n/* typedef for shorter syntax */\ntypedef struct {\n    int x;\n    int y;\n} Point;  /* now use 'Point' instead of 'struct Point' */\n\nint main() {\n    /* Declare and initialize */\n    struct Student s1;\n    s1.rollNo = 101;\n    strcpy(s1.name, \"Alice\");\n    s1.age = 20;\n    s1.marks = 92.5f;\n    s1.grade = 'A';\n    \n    /* Initialization at declaration */\n    struct Student s2 = {102, \"Bob\", 21, 78.3f, 'B'};\n    \n    /* Accessing members with dot operator */\n    printf(\"Roll: %d\\n\", s1.rollNo);\n    printf(\"Name: %s\\n\", s1.name);\n    printf(\"Marks: %.1f\\n\", s1.marks);\n    \n    /* typedef usage */\n    Point p1 = {3, 4};\n    printf(\"Point: (%d, %d)\\n\", p1.x, p1.y);\n    \n    /* Array of structures */\n    struct Student class[3] = {\n        {101, \"Alice\", 20, 92.5f, 'A'},\n        {102, \"Bob\", 21, 78.3f, 'B'},\n        {103, \"Charlie\", 19, 85.0f, 'A'}\n    };\n    \n    printf(\"\\nClass List:\\n\");\n    for (int i = 0; i < 3; i++) {\n        printf(\"%d. %-10s %.1f (%c)\\n\",\n            class[i].rollNo, class[i].name,\n            class[i].marks, class[i].grade);\n    }\n    \n    return 0;\n}",
        language: "c", label: "Structure Basics"
      },
      {
        type: "syntax",
        code: "/* Structures with functions and pointers */\n#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    char name[50];\n    float salary;\n    int experience;\n} Employee;\n\n/* Pass structure by value (copy) */\nvoid displayEmployee(Employee emp) {\n    printf(\"Name: %s, Salary: %.2f\\n\", emp.name, emp.salary);\n}\n\n/* Pass structure by pointer (reference - efficient!) */\nvoid giveRaise(Employee *emp, float percent) {\n    emp->salary += emp->salary * percent / 100;  /* -> for pointer */\n}\n\n/* Return structure */\nEmployee createEmployee(char name[], float salary, int exp) {\n    Employee emp;\n    strcpy(emp.name, name);\n    emp.salary = salary;\n    emp.experience = exp;\n    return emp;\n}\n\nint main() {\n    Employee e1 = createEmployee(\"Alice\", 50000, 3);\n    Employee e2 = createEmployee(\"Bob\", 45000, 2);\n    \n    displayEmployee(e1);\n    displayEmployee(e2);\n    \n    /* Pointer to structure */\n    Employee *ptr = &e1;\n    printf(\"\\nUsing pointer:\\n\");\n    printf(\"Name: %s\\n\", ptr->name);      /* arrow operator */\n    printf(\"Salary: %.2f\\n\", ptr->salary);\n    \n    /* Give 10% raise */\n    giveRaise(&e1, 10);\n    printf(\"After raise: %.2f\\n\", e1.salary);\n    \n    /* Nested structures */\n    struct Date {\n        int day, month, year;\n    };\n    typedef struct {\n        char name[50];\n        struct Date birthdate;\n        float salary;\n    } Worker;\n    \n    Worker w = {\"Charlie\", {15, 6, 1995}, 60000};\n    printf(\"\\n%s born: %d/%d/%d\\n\",\n        w.name,\n        w.birthdate.day,\n        w.birthdate.month,\n        w.birthdate.year);\n    \n    return 0;\n}",
        language: "c", label: "Structures with Functions"
      },
      {
        type: "example",
        code: "/* Student Management System using structures */\n#include <stdio.h>\n#include <string.h>\n\n#define MAX 5\n\ntypedef struct {\n    int id;\n    char name[50];\n    float marks[3];  /* marks for 3 subjects */\n    float average;\n    char grade;\n} Student;\n\nvoid calculateGrade(Student *s) {\n    float sum = 0;\n    for (int i = 0; i < 3; i++) sum += s->marks[i];\n    s->average = sum / 3;\n    \n    if (s->average >= 90) s->grade = 'A';\n    else if (s->average >= 80) s->grade = 'B';\n    else if (s->average >= 70) s->grade = 'C';\n    else if (s->average >= 60) s->grade = 'D';\n    else s->grade = 'F';\n}\n\nvoid displayStudent(Student s) {\n    printf(\"%-4d %-15s %5.1f %5.1f %5.1f | Avg: %5.1f | Grade: %c\\n\",\n        s.id, s.name,\n        s.marks[0], s.marks[1], s.marks[2],\n        s.average, s.grade);\n}\n\nint main() {\n    Student class[MAX] = {\n        {1, \"Alice\",   {92, 88, 95}},\n        {2, \"Bob\",     {75, 80, 72}},\n        {3, \"Charlie\", {85, 90, 88}},\n        {4, \"Diana\",   {60, 65, 58}},\n        {5, \"Eve\",     {95, 98, 92}}\n    };\n    \n    /* Calculate grades */\n    for (int i = 0; i < MAX; i++)\n        calculateGrade(&class[i]);\n    \n    /* Display report */\n    printf(\"\\n--- Student Report ---\\n\");\n    printf(\"ID   Name            Math  Sci   Eng  | Avg    Grade\\n\");\n    printf(\"-----------------------------------------------------\\n\");\n    for (int i = 0; i < MAX; i++)\n        displayStudent(class[i]);\n    \n    /* Find topper */\n    int topIdx = 0;\n    for (int i = 1; i < MAX; i++)\n        if (class[i].average > class[topIdx].average)\n            topIdx = i;\n    printf(\"\\nTopper: %s (%.1f)\\n\",\n        class[topIdx].name, class[topIdx].average);\n    \n    return 0;\n}",
        output: "--- Student Report ---\nID   Name            Math  Sci   Eng  | Avg    Grade\n-----------------------------------------------------\n1    Alice            92.0  88.0  95.0 | Avg:  91.7 | Grade: A\n2    Bob              75.0  80.0  72.0 | Avg:  75.7 | Grade: C\n...\nTopper: Eve (95.0)",
        label: "Student Management System"
      },
    ],
    quiz: [
      { question: "struct groups variables of:", options: ["Same type only", "Different types", "Only integers", "Only pointers"], answer: 1 },
      { question: "Dot operator (.) accesses:", options: ["Array elements", "Structure members via variable", "Pointer members", "Function return"], answer: 1 },
      { question: "Arrow operator (->) is used for:", options: ["Array access", "Direct member access", "Pointer to structure member access", "Arithmetic"], answer: 2 },
      { question: "typedef struct { int x; } Point; allows:", options: ["Using 'Point' instead of 'struct Point'", "Dynamic allocation", "Inheritance", "Multiple values"], answer: 0 },
      { question: "Pass structure by pointer is better than by value because:", options: ["Simpler syntax", "Avoids copying large structure (efficient)", "Returns multiple values", "Required for functions"], answer: 1 },
      { question: "Array of structures allows:", options: ["Multiple structure types", "Storing multiple records", "Nested functions", "Infinite size"], answer: 1 },
    ],
  },

  {
    id: "unions",
    title: "Unions",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 16,
    content: [
      {
        type: "text", heading: "What are Unions?",
        content: "A union is similar to a structure — it groups multiple members under one name. BUT with a critical difference: ALL MEMBERS SHARE THE SAME MEMORY LOCATION.\n\nOnly ONE member can hold a valid value at a time. When you write to one member, the others become invalid.\n\nWhy use unions?\n• Memory efficiency — size = size of LARGEST member (not sum)\n• Useful when only ONE of several values is needed at a time\n• Hardware programming — read same memory in different ways\n• Type punning — interpret same bytes as different types\n\nStruct vs Union memory:\nstruct Data { int i; float f; char c; }\n→ Size = 4 + 4 + 1 + padding = ~12 bytes (all separate)\n\nunion Data { int i; float f; char c; }\n→ Size = 4 bytes (largest member = int or float = 4 bytes, all SHARED)"
      },
      {
        type: "syntax",
        code: "/* Union basics */\n#include <stdio.h>\n\n/* Define a union */\nunion Data {\n    int i;\n    float f;\n    char c;\n};\n\nint main() {\n    union Data d;\n    \n    /* Size comparison */\n    printf(\"Size of union Data: %zu bytes\\n\", sizeof(union Data));  /* 4 */\n    \n    struct { int i; float f; char c; } s;\n    printf(\"Size of similar struct: %zu bytes\\n\", sizeof(s));  /* 12 */\n    \n    /* Using union */\n    d.i = 42;\n    printf(\"d.i = %d\\n\", d.i);  /* 42 — valid */\n    \n    d.f = 3.14f;  /* this OVERWRITES d.i! */\n    printf(\"d.f = %f\\n\", d.f);  /* 3.14 — valid */\n    printf(\"d.i = %d\\n\", d.i);  /* GARBAGE — invalid after d.f assigned */\n    \n    d.c = 'A';    /* this OVERWRITES d.f! */\n    printf(\"d.c = %c\\n\", d.c);  /* A — valid */\n    printf(\"d.f = %f\\n\", d.f);  /* GARBAGE — invalid */\n    \n    /* All members share same memory address */\n    printf(\"Address of d.i: %p\\n\", &d.i);\n    printf(\"Address of d.f: %p\\n\", &d.f);\n    printf(\"Address of d.c: %p\\n\", &d.c);\n    /* All three print the SAME address! */\n    \n    return 0;\n}",
        language: "c", label: "Union Basics"
      },
      {
        type: "text", heading: "Practical Uses of Unions",
        content: "Unions are most useful in:\n\n1. Variant records — store different data types in same memory\n   (e.g. a value that might be int OR float OR string)\n\n2. Hardware register access — read same memory as different types\n   (common in embedded systems, device drivers)\n\n3. Network protocols — interpret same bytes differently\n\n4. Tagged union (discriminated union) — union + variable to track which member is valid:\n   struct Value {\n       int type;  /* 0=int, 1=float, 2=string */\n       union { int i; float f; char s[50]; } data;\n   };\n\nThis is commonly used in interpreters, parsers, and compilers."
      },
      {
        type: "syntax",
        code: "/* Tagged union - practical example */\n#include <stdio.h>\n#include <string.h>\n\n#define TYPE_INT    0\n#define TYPE_FLOAT  1\n#define TYPE_STRING 2\n\ntypedef struct {\n    int type;  /* tracks what's stored */\n    union {\n        int   ival;\n        float fval;\n        char  sval[50];\n    } data;\n} Value;\n\nvoid printValue(Value v) {\n    switch (v.type) {\n        case TYPE_INT:\n            printf(\"Int: %d\\n\", v.data.ival);\n            break;\n        case TYPE_FLOAT:\n            printf(\"Float: %.2f\\n\", v.data.fval);\n            break;\n        case TYPE_STRING:\n            printf(\"String: %s\\n\", v.data.sval);\n            break;\n        default:\n            printf(\"Unknown type\\n\");\n    }\n}\n\nint main() {\n    Value v1, v2, v3;\n    \n    v1.type = TYPE_INT;\n    v1.data.ival = 42;\n    \n    v2.type = TYPE_FLOAT;\n    v2.data.fval = 3.14f;\n    \n    v3.type = TYPE_STRING;\n    strcpy(v3.data.sval, \"Hello, Union!\");\n    \n    printValue(v1);\n    printValue(v2);\n    printValue(v3);\n    \n    /* Union for bit manipulation */\n    union {\n        unsigned int full;  /* all 32 bits */\n        struct {\n            unsigned char byte0;  /* bits 0-7 */\n            unsigned char byte1;  /* bits 8-15 */\n            unsigned char byte2;  /* bits 16-23 */\n            unsigned char byte3;  /* bits 24-31 */\n        } bytes;\n    } ip;\n    \n    ip.full = 0x0A000001;  /* 10.0.0.1 in hex */\n    printf(\"IP: %d.%d.%d.%d\\n\",\n        ip.bytes.byte3, ip.bytes.byte2,\n        ip.bytes.byte1, ip.bytes.byte0);\n    \n    return 0;\n}",
        language: "c", label: "Tagged Union & Practical Use"
      },
      {
        type: "example",
        code: "/* Union vs Struct memory demonstration */\n#include <stdio.h>\n\nstruct EmployeeStruct {\n    int id;             /* 4 bytes */\n    double salary;      /* 8 bytes */\n    char department[20];/* 20 bytes */\n};\n\nunion EmployeeUnion {\n    int id;             /* 4 bytes */\n    double salary;      /* 8 bytes */\n    char department[20];/* 20 bytes */\n};\n\nint main() {\n    printf(\"Struct size: %zu bytes\\n\", sizeof(struct EmployeeStruct));\n    /* 4 + 8 + 20 + padding = ~32 bytes */\n    \n    printf(\"Union size:  %zu bytes\\n\", sizeof(union EmployeeUnion));\n    /* largest member = 20 bytes */\n    \n    /* Memory savings for large arrays */\n    int n = 10000;\n    printf(\"\\nFor %d records:\\n\", n);\n    printf(\"Struct array: %zu bytes\\n\",\n        n * sizeof(struct EmployeeStruct));\n    printf(\"Union array:  %zu bytes\\n\",\n        n * sizeof(union EmployeeUnion));\n    \n    return 0;\n}",
        output: "Struct size: 32 bytes\nUnion size:  20 bytes\n\nFor 10000 records:\nStruct array: 320000 bytes\nUnion array:  200000 bytes",
        label: "Union Memory Savings"
      },
    ],
    quiz: [
      { question: "Union size is determined by:", options: ["Sum of all members", "Smallest member", "Largest member", "Average of members"], answer: 2 },
      { question: "How many union members can hold valid data at once?", options: ["All of them", "Only the first", "Only one at a time", "Two at a time"], answer: 2 },
      { question: "Union is useful when:", options: ["All data needed simultaneously", "Only one of several values needed at a time", "Data must be sorted", "Functions are needed"], answer: 1 },
      { question: "All union members share:", options: ["Same name", "Same type", "Same memory address", "Same value"], answer: 2 },
      { question: "Tagged union uses:", options: ["Two unions", "Union + type indicator variable", "Double pointers", "Nested structs only"], answer: 1 },
      { question: "Struct vs Union key difference:", options: ["Syntax only", "Struct members separate memory, union share", "Union has more features", "Structs are faster"], answer: 1 },
    ],
  },

  {
    id: "file-handling",
    title: "File Handling",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 17,
    content: [
      {
        type: "text", heading: "File Handling in C",
        content: "File handling allows C programs to store and retrieve data from files on the disk — data that persists even after the program ends.\n\nIn C, files are accessed through a FILE pointer (FILE*). The FILE structure is defined in stdio.h and contains information about the file.\n\nFile operations sequence:\n1. Open the file (fopen) — get a FILE*\n2. Read or write data\n3. Close the file (fclose) — VERY IMPORTANT!\n\nFile modes:\n• \"r\" — read only (file must exist)\n• \"w\" — write (creates new or OVERWRITES existing)\n• \"a\" — append (adds to end, creates if not exists)\n• \"r+\" — read and write\n• \"w+\" — read and write (overwrites)\n• \"a+\" — read and append\n• \"rb\", \"wb\", \"ab\" — binary mode versions"
      },
      {
        type: "table", heading: "File Functions Reference",
        content: "Function        | Purpose                              | Returns\n----------------|--------------------------------------|------------------\nfopen(name,mode)| Open a file                          | FILE* or NULL\nfclose(fp)      | Close a file                         | 0 or EOF\nfprintf(fp,...) | Write formatted data                 | chars written\nfscanf(fp,...)  | Read formatted data                  | items read\nfputc(c, fp)    | Write one character                  | char or EOF\nfgetc(fp)       | Read one character                   | char or EOF\nfputs(str, fp)  | Write a string                       | non-negative or EOF\nfgets(str,n,fp) | Read a string (up to n-1 chars)      | str or NULL\nfread(ptr,s,n,fp)| Read n binary elements of size s    | items read\nfwrite(ptr,s,n,fp)| Write n binary elements of size s  | items written\nfseek(fp,off,origin)| Move file pointer                | 0 or -1\nftell(fp)       | Get current position                 | long position\nrewind(fp)      | Move pointer to start                | void\nfeof(fp)        | Check end of file                    | non-zero at EOF\nferror(fp)      | Check for error                      | non-zero if error\nremove(name)    | Delete a file                        | 0 or -1\nrename(old,new) | Rename a file                        | 0 or -1"
      },
      {
        type: "syntax",
        code: "/* Writing and Reading text files */\n#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    FILE *fp;\n    \n    /* WRITING to a file */\n    fp = fopen(\"data.txt\", \"w\");  /* open for writing */\n    \n    if (fp == NULL) {   /* ALWAYS check if open succeeded! */\n        printf(\"Error: Cannot create file!\\n\");\n        return 1;\n    }\n    \n    fprintf(fp, \"Name: Alice\\n\");\n    fprintf(fp, \"Age: 20\\n\");\n    fprintf(fp, \"Marks: 95.5\\n\");\n    fputs(\"Hello from C!\\n\", fp);\n    \n    fclose(fp);  /* MUST close after writing */\n    printf(\"File written successfully!\\n\");\n    \n    /* READING from a file */\n    fp = fopen(\"data.txt\", \"r\");  /* open for reading */\n    \n    if (fp == NULL) {\n        printf(\"Error: Cannot open file!\\n\");\n        return 1;\n    }\n    \n    char line[100];\n    printf(\"\\nFile contents:\\n\");\n    \n    /* Method 1: Read line by line */\n    while (fgets(line, sizeof(line), fp) != NULL) {\n        printf(\"%s\", line);  /* line already has \\n */\n    }\n    \n    fclose(fp);\n    \n    /* APPENDING to a file */\n    fp = fopen(\"data.txt\", \"a\");\n    fprintf(fp, \"Grade: A\\n\");\n    fclose(fp);\n    \n    return 0;\n}",
        language: "c", label: "Text File Operations"
      },
      {
        type: "syntax",
        code: "/* Binary file operations and structured data */\n#include <stdio.h>\n#include <string.h>\n\ntypedef struct {\n    int id;\n    char name[30];\n    float marks;\n} Student;\n\nvoid writeStudents() {\n    Student students[] = {\n        {1, \"Alice\", 92.5f},\n        {2, \"Bob\", 78.3f},\n        {3, \"Charlie\", 88.7f}\n    };\n    \n    FILE *fp = fopen(\"students.dat\", \"wb\");  /* binary write */\n    if (fp == NULL) { printf(\"Write error!\\n\"); return; }\n    \n    int n = 3;\n    fwrite(&n, sizeof(int), 1, fp);   /* write count */\n    fwrite(students, sizeof(Student), n, fp);  /* write array */\n    \n    fclose(fp);\n    printf(\"Wrote %d students to file\\n\", n);\n}\n\nvoid readStudents() {\n    FILE *fp = fopen(\"students.dat\", \"rb\");  /* binary read */\n    if (fp == NULL) { printf(\"Read error!\\n\"); return; }\n    \n    int n;\n    fread(&n, sizeof(int), 1, fp);  /* read count */\n    \n    Student s;\n    printf(\"\\nStudents from file:\\n\");\n    for (int i = 0; i < n; i++) {\n        fread(&s, sizeof(Student), 1, fp);\n        printf(\"%d. %-10s %.1f\\n\", s.id, s.name, s.marks);\n    }\n    \n    fclose(fp);\n}\n\nint main() {\n    writeStudents();\n    readStudents();\n    \n    /* File seek example */\n    FILE *fp = fopen(\"students.dat\", \"rb\");\n    fseek(fp, sizeof(int), SEEK_SET);      /* skip count */\n    fseek(fp, sizeof(Student), SEEK_CUR);  /* skip first record */\n    \n    Student s;\n    fread(&s, sizeof(Student), 1, fp);     /* read second record */\n    printf(\"\\nSecond record: %s\\n\", s.name);\n    \n    fclose(fp);\n    return 0;\n}",
        language: "c", label: "Binary Files & Struct Data"
      },
      {
        type: "example",
        code: "/* Practical: Student record system with file storage */\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define FILENAME \"records.txt\"\n\ntypedef struct {\n    int id;\n    char name[40];\n    float marks;\n} Record;\n\nvoid addRecord() {\n    Record r;\n    FILE *fp = fopen(FILENAME, \"a\");\n    if (!fp) { printf(\"File error!\\n\"); return; }\n    \n    printf(\"ID: \"); scanf(\"%d\", &r.id);\n    printf(\"Name: \"); scanf(\"%s\", r.name);\n    printf(\"Marks: \"); scanf(\"%f\", &r.marks);\n    \n    fprintf(fp, \"%d %s %.1f\\n\", r.id, r.name, r.marks);\n    fclose(fp);\n    printf(\"Record saved!\\n\");\n}\n\nvoid showAll() {\n    FILE *fp = fopen(FILENAME, \"r\");\n    if (!fp) { printf(\"No records found.\\n\"); return; }\n    \n    Record r;\n    printf(\"\\n%-5s %-20s %s\\n\", \"ID\", \"Name\", \"Marks\");\n    printf(\"-----------------------------------\\n\");\n    while (fscanf(fp, \"%d %s %f\", &r.id, r.name, &r.marks) == 3) {\n        printf(\"%-5d %-20s %.1f\\n\", r.id, r.name, r.marks);\n    }\n    fclose(fp);\n}\n\nint main() {\n    int choice;\n    do {\n        printf(\"\\n1.Add  2.Show  3.Exit: \");\n        scanf(\"%d\", &choice);\n        if (choice == 1) addRecord();\n        else if (choice == 2) showAll();\n    } while (choice != 3);\n    return 0;\n}",
        output: "1.Add  2.Show  3.Exit: 1\nID: 101\nName: Alice\nMarks: 92.5\nRecord saved!\n\n1.Add  2.Show  3.Exit: 2\nID    Name                 Marks\n-----------------------------------\n101   Alice                92.5",
        label: "Student Records System"
      },
      {
        type: "warning",
        content: "ALWAYS check if fopen() returns NULL before using the file pointer! Dereferencing a NULL FILE* causes a crash. Also ALWAYS call fclose() — unclosed files may lose data. In \"w\" mode, opening an existing file DELETES its contents immediately, even before you write anything!"
      },
    ],
    quiz: [
      { question: "fopen() returns NULL when:", options: ["File is empty", "File cannot be opened", "File is binary", "File is large"], answer: 1 },
      { question: "Mode \"a\" opens file for:", options: ["Absolute path", "Appending to end", "Array operations", "Admin access"], answer: 1 },
      { question: "fclose() is important because:", options: ["Faster performance", "Flushes buffers and releases file handle", "Required syntax", "Deletes temp files"], answer: 1 },
      { question: "feof(fp) returns non-zero when:", options: ["File is empty", "End of file reached", "File has errors", "File is binary"], answer: 1 },
      { question: "fwrite() is used for:", options: ["Text writing only", "Binary data writing", "Writing to screen", "Formatting output"], answer: 1 },
      { question: "fseek(fp, 0, SEEK_SET) moves pointer to:", options: ["End of file", "Beginning of file", "Current position", "Middle of file"], answer: 1 },
    ],
  },

  {
    id: "storage-classes",
    title: "Storage Classes",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 18,
    content: [
      {
        type: "text", heading: "What are Storage Classes?",
        content: "Storage classes in C define:\n1. Scope — where the variable is accessible\n2. Lifetime — how long the variable exists in memory\n3. Default value — initial value if not explicitly set\n4. Storage location — stack, heap, data segment\n\nC has four storage classes:\n1. auto — automatic (default for local variables)\n2. register — stored in CPU register (hint)\n3. static — persists between function calls\n4. extern — declared in another file/scope\n\nUnderstanding storage classes is crucial for:\n• Writing efficient programs\n• Managing global vs local state\n• Multi-file projects\n• Understanding variable lifetime and scope"
      },
      {
        type: "table", heading: "Storage Classes Comparison",
        content: "Class    | Scope         | Lifetime        | Default | Storage\n---------|---------------|-----------------|---------|------------------\nauto     | Local (block) | Function call   | Garbage | Stack\nregister | Local (block) | Function call   | Garbage | CPU register\nstatic   | Local (block) | Entire program  | 0       | Data segment\nextern   | Global        | Entire program  | 0       | Data segment\n\nScope types:\n• Block scope — accessible only inside { }\n• File scope — accessible in entire file\n• Global scope — accessible in all files"
      },
      {
        type: "syntax",
        code: "/* auto storage class (default) */\n#include <stdio.h>\n\nvoid demoAuto() {\n    auto int x = 10;  /* 'auto' is explicit but rarely used */\n    int y = 20;       /* same as auto int y = 20 */\n    printf(\"x=%d, y=%d\\n\", x, y);\n    /* x and y are destroyed when function returns */\n}\n\n/* static storage class */\nvoid demoStatic() {\n    static int count = 0;  /* initialized only ONCE */\n    count++;               /* persists between calls */\n    printf(\"Called %d time(s)\\n\", count);\n}\n\n/* register storage class */\nvoid demoRegister() {\n    register int i;  /* hint to compiler: use CPU register */\n    /* Fast for loop counters — compiler may or may not obey */\n    long sum = 0;\n    for (i = 1; i <= 1000000; i++)\n        sum += i;\n    printf(\"Sum: %ld\\n\", sum);\n    /* Note: you CANNOT take address of register variable (&i is error) */\n}\n\nint main() {\n    demoAuto();\n    \n    /* static demo - count persists */\n    demoStatic();  /* Called 1 time(s) */\n    demoStatic();  /* Called 2 time(s) */\n    demoStatic();  /* Called 3 time(s) */\n    \n    demoRegister();\n    \n    return 0;\n}",
        language: "c", label: "auto, static, register"
      },
      {
        type: "syntax",
        code: "/* static and extern in detail */\n\n/* --- file1.c --- */\n#include <stdio.h>\n\n/* Global variable - accessible from other files with extern */\nint globalVar = 100;\n\n/* Static global - accessible ONLY in this file */\nstatic int filePrivate = 50;\n\nvoid increment() {\n    globalVar++;  /* modifies global */\n}\n\n/* --- file2.c --- */\nextern int globalVar;   /* declare that globalVar is in another file */\n/* extern int filePrivate;  ERROR: static globals can't be accessed */\n\nvoid showGlobal() {\n    printf(\"Global: %d\\n\", globalVar);\n}\n\n/* ---- Main example in single file ---- */\n#include <stdio.h>\n\n/* Static function - only visible in this file */\nstatic void helperFunction() {\n    printf(\"I'm a private function\\n\");\n}\n\n/* Static counter - persists across function calls */\nint generateID() {\n    static int nextID = 1000;  /* initialized once */\n    return nextID++;\n}\n\nint main() {\n    printf(\"%d\\n\", generateID());  /* 1000 */\n    printf(\"%d\\n\", generateID());  /* 1001 */\n    printf(\"%d\\n\", generateID());  /* 1002 */\n    \n    helperFunction();\n    \n    return 0;\n}",
        language: "c", label: "static & extern"
      },
      {
        type: "text", heading: "Variable Scope Rules",
        content: "Understanding scope is critical to avoid bugs:\n\nLocal variable (inside function):\n• Only accessible inside the function/block\n• Created when function is called\n• Destroyed when function returns\n• If same name as global, local SHADOWS the global\n\nGlobal variable (outside all functions):\n• Accessible from any function in the file\n• Lives for entire program duration\n• Default value is 0\n• Can be accessed from other files with extern\n\nStatic local variable:\n• Scope: local to function (like regular local)\n• Lifetime: entire program (like global)\n• Retains value between function calls\n• Initialized only once\n\nCommon scope rule: When a local and global variable have the same name, the local variable SHADOWS the global inside its scope."
      },
      {
        type: "example",
        code: "/* Scope demonstration */\n#include <stdio.h>\n\nint x = 100;  /* global x */\n\nvoid function1() {\n    printf(\"function1: x = %d\\n\", x);  /* global x = 100 */\n    x = 200;  /* modifies global x */\n}\n\nvoid function2() {\n    int x = 999;  /* local x - SHADOWS global */\n    printf(\"function2: x = %d\\n\", x);  /* local x = 999 */\n    /* global x is unchanged here */\n}\n\nvoid function3() {\n    printf(\"function3: x = %d\\n\", x);  /* global x = 200 (changed by f1) */\n    {\n        int x = 50;  /* block scope x */\n        printf(\"Inside block: x = %d\\n\", x);  /* 50 */\n    }  /* block x destroyed here */\n    printf(\"After block: x = %d\\n\", x);  /* global x = 200 */\n}\n\n/* Static counter */\nint counter() {\n    static int calls = 0;\n    calls++;\n    return calls;\n}\n\nint main() {\n    function1();\n    function2();\n    function3();\n    \n    printf(\"\\nCounter calls:\\n\");\n    printf(\"%d\\n\", counter());  /* 1 */\n    printf(\"%d\\n\", counter());  /* 2 */\n    printf(\"%d\\n\", counter());  /* 3 */\n    \n    printf(\"\\nFinal global x = %d\\n\", x);  /* 200 */\n    \n    return 0;\n}",
        output: "function1: x = 100\nfunction2: x = 999\nfunction3: x = 200\nInside block: x = 50\nAfter block: x = 200\n\nCounter calls:\n1\n2\n3\n\nFinal global x = 200",
        label: "Scope Demonstration"
      },
      {
        type: "tip",
        content: "Avoid global variables when possible! They make code harder to debug because any function can modify them. Use function parameters and return values to pass data instead. If you must share state, use static local variables within a module or pass pointers explicitly."
      },
    ],
    quiz: [
      { question: "Default storage class for local variables:", options: ["static", "extern", "register", "auto"], answer: 3 },
      { question: "static local variable:", options: ["Destroyed after function returns", "Persists between function calls", "Accessible globally", "Has garbage default value"], answer: 1 },
      { question: "extern keyword declares:", options: ["External library", "Variable defined elsewhere", "Static variable", "Register variable"], answer: 1 },
      { question: "Default value of static variable:", options: ["Garbage", "0 (zero)", "1", "NULL"], answer: 1 },
      { question: "static global function:", options: ["Faster execution", "Only visible in current file", "Accessible everywhere", "Runs automatically"], answer: 1 },
      { question: "register variable CANNOT:", options: ["Be incremented", "Have its address taken (&)", "Be used in loops", "Be initialized"], answer: 1 },
    ],
  },
];

// Helper functions
export const getChaptersByLevel = (level: 1 | 2) =>
  cChapters.filter((c) => c.level === level);

export const getChapterById = (id: string) =>
  cChapters.find((c) => c.id === id);

export const levels = [
  { level: 1 as const, name: "Beginner", icon: "👉", color: "gray", chapters: 10 },
  { level: 2 as const, name: "Intermediate", icon: "⚡", color: "green", chapters: 8 },
];