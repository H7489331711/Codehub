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
  | { type: "table"; heading?: string; content: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "person"; name: string; role: string; image: string; bio: string; facts?: string[] };

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

export const pythonChapters: Chapter[] = [

  // ════════════════════════════════
  // LEVEL 1 — BEGINNER (8 Chapters)
  // ════════════════════════════════

  // ── Chapter 1 ──────────────────
  {
    id: "introduction-to-python",
    title: "Introduction to Python",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 1,
    content: [
      {
        type: "text", heading: "What is Python?",
        content: `Python is a high-level, interpreted, general-purpose programming language. It was designed with a core philosophy that code should be easy to read and write. Python uses English-like syntax and relies on indentation (whitespace) instead of curly braces to define blocks of code.

Python is called an interpreted language because it runs code line by line through an interpreter — no compilation step is needed. This makes development fast: write a line, run it immediately, see the result.

Python supports multiple programming paradigms: procedural (step-by-step), object-oriented (classes and objects), and functional (using functions as values). This flexibility makes it suitable for almost any programming task.`
      },
      {
        type: "person",
        name: "Guido van Rossum",
        role: "Creator of Python",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Guido-portrait-2014-drc.jpg/440px-Guido-portrait-2014-drc.jpg",
        bio: "Guido van Rossum is a Dutch programmer born on January 31, 1956. He created Python while working at Centrum Wiskunde & Informatica (CWI) in the Netherlands. In December 1989, during the Christmas holidays, Guido started writing Python as a hobby project to keep himself occupied. Before Python, Guido worked on the ABC programming language. He liked ABC's clean syntax and beginner-friendliness, but found it frustrating because it could not interface with the operating system, had no exceptions, and could not be extended. Python was designed to solve all of these problems.",
        facts: [
          "Born: January 31, 1956 in Haarlem, Netherlands",
          "Started Python during Christmas 1989 as a hobby project",
          "Named Python after 'Monty Python's Flying Circus' — NOT the snake!",
          "Known as BDFL (Benevolent Dictator For Life) — stepped down in July 2018",
          "Python is now governed by a democratically elected Steering Council",
        ]
      },
      {
        type: "text", heading: "Python Timeline (1989 – Present)",
        content: `Python didn't appear overnight — it has a rich history spanning over 30 years. Here are the major milestones:

1989 — Guido van Rossum started building Python as a hobby project during Christmas holidays at CWI, Netherlands
1991 — Python 0.9.0 was officially released — first public release with functions, exceptions, and modules
1994 — Python 1.0 released — lambda, map, filter, reduce added
2000 — Python 2.0 released with list comprehensions, Unicode, and garbage collection
2008 — Python 3.0 released — major redesign with Unicode strings and print() function
2010 — Python 2.7 released (last Python 2 release, long-term support until 2020)
2020 — Python 2 officially discontinued (End of Life)
2021 — Python 3.10 released — Match-case statements added
2023 — Python 3.12 released — faster, with better error messages
2024+ — Python 3.13+ — Optional GIL removal, JIT compiler experiments`
      },
      {
        type: "table", heading: "Python Version Timeline",
        content: `Year | Version / Event | Key Addition
1989 | Python conceived | Guido starts writing during Christmas holiday
1991 | Python 0.9.0 | First public release — functions, exceptions, modules
1994 | Python 1.0 | lambda, map, filter, reduce added
2000 | Python 2.0 | List comprehensions, Unicode, garbage collection
2008 | Python 3.0 | Major redesign — Unicode strings, print() function
2010 | Python 2.7 | Last Python 2 release (long-term support until 2020)
2020 | Python 2 EOL | Python 2 officially discontinued
2021 | Python 3.10 | Match-case statements added
2023 | Python 3.12 | Faster, better error messages
2024+ | Python 3.13+ | Optional GIL removal, JIT compiler experiments`
      },
      {
        type: "text", heading: "Why Was Python Created?",
        content: `In the late 1980s, programming options were limited. C and C++ were powerful but required too much low-level code for simple tasks. Shell scripts were convenient for automation but couldn't build complex programs. The ABC language was elegant but couldn't interface with the OS or be extended.

Guido wanted a language that filled the gap between shell scripting and full application development. His goals were:
• Make it easy to learn
• Make code readable like prose
• Allow easy extension with C modules
• Make it open source and portable across all operating systems`
      },
      {
        type: "text", heading: "Key Features of Python",
        content: `What makes Python so special? Here are its core features:

Easy to Learn — Python reads almost like English. Beginners can write meaningful programs within hours of starting. The syntax is minimal and consistent.

Interpreted — Code is executed line by line. No separate compilation step needed. This means faster development and easier debugging.

Dynamically Typed — You don't declare variable types. Python figures out the type automatically at runtime. x = 10 makes x an integer; x = 'hello' makes it a string.

Large Standard Library — Python ships with batteries included — hundreds of built-in modules for file handling, math, networking, web, JSON, databases, and more.

Open Source — Python is completely free. Its source code is publicly available. Anyone can use, modify, and distribute it without any cost.

Cross-Platform — The same Python code runs on Windows, macOS, Linux, Raspberry Pi, and even some mobile platforms without modification.

OOP Support — Supports classes, objects, inheritance and all modern OOP concepts.`
      },
      {
        type: "tip",
        content: "Fun Fact: Python is named after Monty Python's Flying Circus, the British comedy TV show — NOT the snake! Guido was a fan of the show while writing the language. That's why Python examples often use words like 'spam', 'eggs', and 'ni'."
      },
      {
        type: "text", heading: "Where is Python Used Today?",
        content: `Python is used in almost every field of technology today:

🤖 Machine Learning / AI — Train models, recognize images, NLP — using TensorFlow, PyTorch, scikit-learn
📊 Data Science — Analyze data, create charts — using Pandas, NumPy, Matplotlib
🌐 Web Development — Build websites and APIs — using Django, Flask, FastAPI
🔧 Automation — Automate repetitive tasks — using Selenium, PyAutoGUI, Fabric
🔒 Cybersecurity — Penetration testing, scripting — using Scapy, requests, socket
🎮 Game Development — 2D/3D games — using Pygame, Panda3D
🔬 Scientific Research — Simulations, equations — using SciPy, SymPy, BioPython
☁️ DevOps / Cloud — Infrastructure scripts — using Boto3, Ansible, Paramiko`
      },
      {
        type: "table", heading: "Python vs Other Languages",
        content: `Feature | Python | Java | C++
Syntax | Very Simple | Verbose | Very Complex
Learning Curve | Easy | Hard | Very Hard
Lines to print Hello | 1 line | 5+ lines | 8+ lines
Speed | Moderate | Fast | Very Fast
Best For | Beginners + AI | Enterprise | System Apps`
      },
      {
        type: "syntax",
        code: `# The # symbol creates a comment — Python ignores it
# Use comments to explain your code

# print() displays text on the screen
print("Hello, World!")`,
        label: "Your First Python Code"
      },
      {
        type: "example",
        code: `print("Hello, World!")
print("I am learning Python!")
print("Python is awesome!")`,
        output: `Hello, World!
I am learning Python!
Python is awesome!`,
        label: "Try It Yourself"
      },
      {
        type: "tip",
        content: "Each print() automatically moves to a new line. So three print() statements will display three separate lines of output on the screen."
      },
    ],
    quiz: [
      { question: "Who created Python?", options: ["Bill Gates", "Guido van Rossum", "Dennis Ritchie", "James Gosling"], answer: 1 },
      { question: "Python is named after:", options: ["A snake species", "Monty Python comedy show", "A scientist", "A Greek god"], answer: 1 },
      { question: "Which function displays output in Python?", options: ["echo()", "console.log()", "print()", "write()"], answer: 2 },
      { question: "Python is which type of language?", options: ["Only compiled", "Interpreted", "Assembly", "Machine level"], answer: 1 },
      { question: "In which year was Python first released publicly?", options: ["1985", "1991", "2000", "2010"], answer: 1 },
      { question: "Which Python version should you use today?", options: ["Python 1", "Python 2", "Python 3", "Any version"], answer: 2 },
      { question: "Python file extension is:", options: [".pt", ".pyt", ".py", ".python"], answer: 2 },
      { question: "Guido stepped down as BDFL in:", options: ["2000", "2010", "2018", "2020"], answer: 2 },
    ],
  },

  // ── Chapter 2 ──────────────────
  {
    id: "installation-setup",
    title: "Installation & Setup",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 2,
    content: [
      {
        type: "text", heading: "What You Need to Install",
        content: `To start coding in Python, you need just two things:

1. Python Interpreter — This is the program that runs your Python code
2. Code Editor (VS Code) — This is where you write your code

Both are completely FREE to download and use!`
      },
      {
        type: "text", heading: "Step 1 — Install Python",
        content: `Follow these steps carefully on Windows:

Step 1: Open your browser and go to python.org/downloads
Step 2: Click the big yellow "Download Python 3.x.x" button
Step 3: Open the downloaded .exe file
Step 4: ⚠️ IMPORTANT — Check "Add Python to PATH" at the bottom!
Step 5: Click "Install Now" and wait
Step 6: Click "Close" when done

For Mac: Go to python.org or run: brew install python3
For Linux: Python is usually pre-installed. Check with: python3 --version`
      },
      {
        type: "warning",
        content: "NEVER skip 'Add Python to PATH' on Windows! If you miss it, the python command won't work in the terminal. You'll need to reinstall Python if you forget this step."
      },
      {
        type: "syntax",
        code: `python --version
# You should see something like: Python 3.12.0`,
        label: "Check Python Version"
      },
      {
        type: "text", heading: "Step 2 — Install VS Code",
        content: `VS Code is the world's most popular free code editor. Here's how to set it up:

Step 1: Go to code.visualstudio.com and download
Step 2: Install it (just click Next, Next, Finish)
Step 3: Open VS Code
Step 4: Press Ctrl+Shift+X to open Extensions
Step 5: Search "Python" → Install the one by Microsoft
Step 6: Restart VS Code`
      },
      {
        type: "table", heading: "Useful VS Code Shortcuts",
        content: `Shortcut | What it does
Ctrl + \` | Open Terminal
Ctrl + F5 | Run Python file
Ctrl + S | Save file
Ctrl + / | Comment/Uncomment line
Ctrl + Z | Undo`
      },
      {
        type: "tip",
        content: "Don't want to install anything right now? Use replit.com or programiz.com/python-programming/online-compiler — free online Python editors that work in your browser!"
      },
      {
        type: "example",
        code: `# Create a file called hello.py and paste this:
print("Python is working!")
print("VS Code is set up!")
print("Ready to code! 🎉")`,
        output: `Python is working!
VS Code is set up!
Ready to code! 🎉`,
        label: "Test Your Setup"
      },
    ],
    quiz: [
      { question: "Where do you download Python?", options: ["github.com", "python.org", "google.com", "microsoft.com"], answer: 1 },
      { question: "What MUST you check during Windows Python installation?", options: ["Install for all users", "Add Python to PATH", "Create desktop shortcut", "Install pip separately"], answer: 1 },
      { question: "Which command verifies Python installation?", options: ["python version", "python --version", "check python", "py -v"], answer: 1 },
      { question: "Which VS Code extension is needed for Python?", options: ["Python by Google", "Python by Microsoft", "Python by GitHub", "Python by Oracle"], answer: 1 },
      { question: "Shortcut to run Python file in VS Code:", options: ["Ctrl+R", "Ctrl+F5", "F5", "Ctrl+Enter"], answer: 1 },
      { question: "pip is Python's:", options: ["IDE", "Package installer", "Debugger", "Compiler"], answer: 1 },
    ],
  },

  // ── Chapter 3 ──────────────────
  {
    id: "variables-data-types",
    title: "Variables & Data Types",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 3,
    content: [
      {
        type: "text", heading: "What is a Variable?",
        content: `A variable is a named container in memory that holds a value. Think of a variable like a labelled box — you put a value inside the box, and you refer to it later using the label (name).

In Python, you do NOT need to declare a variable's type before using it. Python automatically detects the type based on the value you assign. This is called dynamic typing. When you write x = 10, Python creates an integer object and makes the variable x point to it.`
      },
      {
        type: "syntax",
        code: `name = "Alice"       # storing text
age = 17             # storing a whole number
marks = 95.5         # storing a decimal number
is_pass = True       # storing True or False`,
        label: "Creating Variables"
      },
      {
        type: "text", heading: "Built-in Data Types",
        content: `Python has 6 basic data types you'll use every day:

int (Integer) — Whole numbers of unlimited size: 25, -10, 0
float (Float) — Decimal numbers (64-bit): 3.14, -0.5, 99.9
str (String) — Unicode text in quotes: "Hello", 'Python'
bool (Boolean) — Only True or False
NoneType — Represents no value: x = None
complex — Complex numbers: z = 2+3j`
      },
      {
        type: "table", heading: "Data Types Quick Reference",
        content: `Type | Full Name | Example | Memory
int | Integer | age = 25 | Unlimited size
float | Float | pi = 3.14 | 64-bit double
str | String | name = "Ali" | Unicode chars
bool | Boolean | flag = True | True / False
NoneType | None | x = None | No value
complex | Complex | z = 2+3j | Real + Imaginary`
      },
      {
        type: "syntax",
        code: `# Check the type of any variable using type()
x = 42
y = 3.14
z = 'Hello'
b = True

print(type(x))    # <class 'int'>
print(type(y))    # <class 'float'>
print(type(z))    # <class 'str'>
print(type(b))    # <class 'bool'>`,
        label: "Checking Data Types"
      },
      {
        type: "text", heading: "Variable Naming Rules",
        content: `Variable names must start with a letter or underscore, can contain letters, numbers, and underscores, and are case-sensitive (age and Age are different variables).

✅ ALLOWED: my_name, age2, student_marks, _score
❌ NOT ALLOWED:
• Start with a number: 2name (wrong!)
• Spaces: my name (wrong!)
• Special characters: my-name, my@name (wrong!)
• Python keywords: if, for, while, class (wrong!)

Use snake_case for variable names by convention (e.g., student_name, total_marks).`
      },
      {
        type: "tip",
        content: "Best practice: Use lowercase with underscores for variable names. Example: student_age, total_marks, is_active. This is called snake_case and is the Python standard!"
      },
      {
        type: "text", heading: "Type Conversion (Casting)",
        content: `Sometimes you need to convert one type to another:

int() — convert to integer
float() — convert to float
str() — convert to string
bool() — convert to boolean (0 is False, non-zero is True)`
      },
      {
        type: "syntax",
        code: `# Convert between types
num_str = '42'
num_int = int(num_str)   # str -> int
print(num_int + 8)       # 50

num_float = float(10)    # int -> float
print(num_float)         # 10.0

back_str = str(3.14)     # float -> str
print(back_str)          # '3.14'

flag = bool(0)           # 0 is False
print(flag)              # False

flag2 = bool(99)         # non-zero is True
print(flag2)             # True`,
        label: "Type Conversion"
      },
      {
        type: "syntax",
        code: `# Assign same value to multiple variables
a = b = c = 0
print(a, b, c)     # 0 0 0

# Assign different values in one line
x, y, z = 10, 20, 30
print(x, y, z)     # 10 20 30

# Swap two variables (Python trick!)
p, q = 5, 9
p, q = q, p        # swap
print(p, q)        # 9 5`,
        label: "Multiple Assignment & Swapping"
      },
      {
        type: "warning",
        content: "int('hello') will cause a ValueError! You can only convert a string to int if it actually contains a number. int('3.14') also fails — first do float('3.14'), then int() that."
      },
      {
        type: "example",
        code: `# Student profile using variables
name = "Arjun Sharma"
age = 17
marks = 95.5
is_pass = True
grade = None

print("Name:", name)
print("Age:", age)
print("Marks:", marks)
print("Passed:", is_pass)
print("Grade:", grade)`,
        output: `Name: Arjun Sharma
Age: 17
Marks: 95.5
Passed: True
Grade: None`,
        label: "Student Profile"
      },
    ],
    quiz: [
      { question: "Which symbol assigns a value to a variable?", options: ["==", "=>", "=", ":="], answer: 2 },
      { question: "What is the data type of 3.14?", options: ["int", "str", "float", "bool"], answer: 2 },
      { question: "Which variable name is INVALID?", options: ["my_name", "_name", "2name", "name2"], answer: 2 },
      { question: "What does type() function do?", options: ["Changes the type", "Returns the data type", "Converts to string", "Deletes variable"], answer: 1 },
      { question: "What is the data type of True?", options: ["int", "str", "float", "bool"], answer: 3 },
      { question: "Are 'name' and 'Name' the same variable in Python?", options: ["Yes", "No — they are different", "Depends on OS", "Only in Python 2"], answer: 1 },
      { question: "int('hello') will cause:", options: ["Return 0", "Return None", "ValueError", "SyntaxError"], answer: 2 },
      { question: "What is a, b = 10, 20 called?", options: ["Swapping", "Multiple assignment", "Type casting", "Declaration"], answer: 1 },
    ],
  },

  // ── Chapter 4 ──────────────────
  {
    id: "input-output",
    title: "Input & Output",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 4,
    content: [
      {
        type: "text", heading: "Output with print()",
        content: `The print() function displays text or data on the screen. You'll use it in every single Python program you write.

print() can display:
• Text (strings): print("Hello")
• Numbers: print(42)
• Variables: print(name)
• Math results: print(2 + 3)
• Multiple things: print("Age:", 25)`
      },
      {
        type: "syntax",
        code: `print("Hello World")          # text output
print(42)                     # number output
print(2 + 3)                  # math result → 5

# Print multiple things (space in between by default)
print("Name:", "Alice", "Age:", 25)

# end= changes what comes after (default is new line)
print("Hello", end=" ")   # no new line here
print("World")            # → Hello World (same line)

# sep= changes the separator (default is space)
print("A", "B", "C", sep="-")   # → A-B-C`,
        label: "print() Examples"
      },
      {
        type: "text", heading: "Input with input()",
        content: `The input() function lets your program ask the user for information.

When Python runs input():
1. It shows the prompt message on screen
2. It waits for the user to type something
3. User presses Enter
4. input() returns what the user typed

⚠️ IMPORTANT: input() ALWAYS returns a STRING, no matter what the user types. If they type 25, you get "25" (string), not 25 (number). You must convert it manually.`
      },
      {
        type: "syntax",
        code: `# Basic input — always returns a string
name = input("What is your name? ")
print("Hello,", name)

# Convert input to integer for math
age = int(input("Enter your age: "))
print("Next year you will be", age + 1)

# Convert to float for decimals
height = float(input("Enter height in meters: "))`,
        label: "input() Examples"
      },
      {
        type: "text", heading: "String Formatting with f-strings",
        content: `f-strings are the modern, clean way to combine variables with text. Just put f before the quote and use {} to insert variables.

Old way (messy): "Hello " + name + ", you are " + str(age)
New way (clean): f"Hello {name}, you are {age}"

f-strings are faster, easier to read, and allow expressions inside {}.`
      },
      {
        type: "syntax",
        code: `name = "Alice"
age = 20
marks = 87.5

# f-string basics — put f before the quote
print(f'Name: {name}')
print(f'Age: {age}')
print(f'Marks: {marks:.1f}')    # 1 decimal place

# Expressions inside f-strings
a, b = 5, 3
print(f'{a} + {b} = {a + b}')   # 5 + 3 = 8
print(f'Square of {a} = {a**2}') # Square of 5 = 25`,
        label: "f-string Formatting"
      },
      {
        type: "warning",
        content: "If a user types 'abc' when you do int(input()), Python crashes with ValueError. In real programs, always use try-except to handle bad input (covered in Exception Handling chapter)."
      },
      {
        type: "example",
        code: `name = input("Enter your name: ")
age = int(input("Enter your age: "))

print(f"Hi {name}!")
print(f"You are {age} years old.")
print(f"In 10 years, you'll be {age + 10}.")`,
        output: `Enter your name: Rahul
Enter your age: 17
Hi Rahul!
You are 17 years old.
In 10 years, you'll be 27.`,
        label: "Interactive Greeting"
      },
    ],
    quiz: [
      { question: "What data type does input() always return?", options: ["int", "float", "str", "bool"], answer: 2 },
      { question: "How to get integer input from user?", options: ["num = input()", "num = int(input())", "num = integer(input())", "num = input(int)"], answer: 1 },
      { question: "print('A', 'B', sep='*') outputs:", options: ["A B", "AB", "A*B", "A, B"], answer: 2 },
      { question: "print('Hello', end='') does what?", options: ["Adds extra line", "Prevents newline at end", "Stops program", "Clears screen"], answer: 1 },
      { question: "Which is the modern string formatting method?", options: ["% formatting", ".format()", "f-string", "concatenation"], answer: 2 },
      { question: "f'{3.14159:.2f}' outputs:", options: ["3.14159", "3.14", "3.1", "3"], answer: 1 },
    ],
  },

  // ── Chapter 5 ──────────────────
  {
    id: "operators",
    title: "Operators",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 5,
    content: [
      {
        type: "text", heading: "What are Operators?",
        content: `Operators are symbols that perform operations on one or more values (called operands). Python has many types of operators, each serving a different purpose.

The values that operators work on are called operands.
Example: In 5 + 3, the + is the operator and 5, 3 are operands.

Python has 7 types of operators:
• Arithmetic — math calculations
• Comparison — compare values, return True/False
• Assignment — store values in variables
• Logical — combine conditions
• Identity — check if same object in memory
• Membership — check if value exists in sequence
• Bitwise — bit-level operations (advanced)`
      },
      {
        type: "text", heading: "Arithmetic Operators",
        content: `Arithmetic operators perform math. Most are familiar from school:

+ Addition: 5 + 3 = 8
- Subtraction: 10 - 4 = 6
* Multiplication: 3 * 4 = 12
/ Division: Always returns float → 10 / 2 = 5.0
// Floor Division: Drops decimal → 10 // 3 = 3
% Modulus: Returns remainder → 10 % 3 = 1
** Exponent: Power → 2 ** 8 = 256`
      },
      {
        type: "syntax",
        code: `a = 17
b = 5

print(a + b)    # 22   — Addition
print(a - b)    # 12   — Subtraction
print(a * b)    # 85   — Multiplication
print(a / b)    # 3.4  — Division (always float)
print(a // b)   # 3    — Floor Division (no decimal)
print(a % b)    # 2    — Modulus (remainder)
print(a ** b)   # 1419857 — Power (17 to the 5th)`,
        label: "Arithmetic Operators"
      },
      {
        type: "text", heading: "Understanding // and %",
        content: `// Floor Division: Divides and throws away the decimal part.
17 // 5 = 3 (because 17 ÷ 5 = 3.4, drop the .4 → 3)

% Modulus: Gives you the REMAINDER after division.
17 % 5 = 2 (because 5 goes into 17 three times = 15, leftover = 2)

When is % useful?
• Checking if a number is even: number % 2 == 0
• Checking if a number is odd: number % 2 == 1
• Wrapping around (e.g. clock arithmetic): hour % 12`
      },
      {
        type: "text", heading: "Comparison Operators",
        content: `Comparison operators compare two values and always return True or False.

== Equal to: 5 == 5 → True
!= Not equal: 5 != 3 → True
> Greater than: 10 > 5 → True
< Less than: 3 < 8 → True
>= Greater than or equal: 5 >= 5 → True
<= Less than or equal: 3 <= 10 → True`
      },
      {
        type: "syntax",
        code: `x = 10
y = 20

print(x == y)    # False — Equal to
print(x != y)    # True  — Not equal
print(x < y)     # True  — Less than
print(x > y)     # False — Greater than
print(x <= 10)   # True  — Less than or equal
print(x >= 15)   # False — Greater than or equal

# Python allows chaining comparisons!
marks = 75
print(60 <= marks <= 80)    # True (very useful!)`,
        label: "Comparison Operators"
      },
      {
        type: "text", heading: "Logical Operators",
        content: `Logical operators (and, or, not) combine boolean values:

and — Both conditions must be True → result is True
or  — At least one condition must be True → result is True
not — Reverses the condition (True becomes False)

Example:
age >= 18 and marks >= 60 → True only if BOTH are True
age >= 18 or marks >= 90 → True if EITHER is True
not True → False`
      },
      {
        type: "syntax",
        code: `age = 20
marks = 75

# and: both must be True
print(age >= 18 and marks >= 60)  # True
print(age >= 18 and marks >= 90)  # False

# or: at least one must be True
print(age >= 18 or marks >= 90)   # True

# not: reverses the boolean
print(not True)           # False
print(not False)          # True
print(not (age < 18))     # True`,
        label: "Logical Operators"
      },
      {
        type: "table", heading: "Logical Operators Truth Table",
        content: `A | B | A and B | A or B | not A
True | True | True | True | False
True | False | False | True | False
False | True | False | True | True
False | False | False | False | True`
      },
      {
        type: "text", heading: "Assignment & Membership Operators",
        content: `Assignment operators store values in variables:

= Basic assignment: x = 10
+= Add and assign: x += 5 (same as x = x + 5)
-= Subtract and assign: x -= 3
*= Multiply and assign: x *= 2
//= Floor divide and assign: x //= 4

Membership operators check if a value exists in a collection:

in — True if value found in sequence
not in — True if value NOT found in sequence`
      },
      {
        type: "syntax",
        code: `# Assignment operators
x = 10
x += 5;  print(x)   # 15 (same as x = x + 5)
x -= 3;  print(x)   # 12 (same as x = x - 3)
x *= 2;  print(x)   # 24 (same as x = x * 2)
x //= 4; print(x)   # 6  (same as x = x // 4)

# Membership operators
fruits = ['apple', 'banana', 'mango']
print('apple' in fruits)       # True
print('grape' in fruits)       # False
print('grape' not in fruits)   # True`,
        label: "Assignment & Membership Operators"
      },
      {
        type: "tip",
        content: "Remember: 'and' needs BOTH to be True, 'or' needs just ONE to be True. Think of it like: 'I need my ID AND my passport' vs 'I need my ID OR my passport'."
      },
      {
        type: "example",
        code: `marks = 85

# Using comparison + logical operators
is_pass = marks >= 40
is_distinction = marks >= 75

print(f"Marks: {marks}")
print(f"Passed: {is_pass}")
print(f"Distinction: {is_distinction}")
print(f"Pass but no distinction: {is_pass and not is_distinction}")`,
        output: `Marks: 85
Passed: True
Distinction: True
Pass but no distinction: False`,
        label: "Marks Checker"
      },
    ],
    quiz: [
      { question: "What is the result of 17 % 5?", options: ["3", "2", "3.4", "0"], answer: 1 },
      { question: "What does 2 ** 10 equal?", options: ["20", "100", "1024", "512"], answer: 2 },
      { question: "10 / 2 returns:", options: ["5 (int)", "5.0 (float)", "Error", "None"], answer: 1 },
      { question: "x += 5 is same as:", options: ["x = 5", "x = x - 5", "x = x + 5", "x == x + 5"], answer: 2 },
      { question: "What does 'and' return when both conditions are False?", options: ["True", "False", "None", "Error"], answer: 1 },
      { question: "Which operator checks membership in a list?", options: ["==", "!=", "is", "in"], answer: 3 },
      { question: "Is '60 <= marks <= 80' valid Python?", options: ["No, invalid syntax", "Yes, valid Python", "Only in Python 3", "Only with integers"], answer: 1 },
    ],
  },

  // ── Chapter 6 ──────────────────
  {
    id: "conditional-statements",
    title: "Conditional Statements (if-else)",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 6,
    content: [
      {
        type: "text", heading: "What are Conditional Statements?",
        content: `A conditional statement lets a program make decisions. The program checks a condition (an expression that is True or False) and runs different code depending on the result.

Python uses if, elif (else-if), and else:
• if — runs code when condition is True
• elif — checks another condition if the previous was False
• else — runs when ALL conditions above were False

Real-life example:
IF it is raining → take an umbrella
ELSE → wear sunglasses`
      },
      {
        type: "warning",
        content: "Indentation is NOT optional in Python! Code inside if/elif/else blocks MUST be indented with 4 spaces. Python uses indentation instead of { } curly braces. Wrong indentation = IndentationError!"
      },
      {
        type: "syntax",
        code: `if condition:
    # runs when condition is True
    do_something()
elif another_condition:
    # runs when first was False, this is True
    do_something_else()
else:
    # runs when ALL conditions above are False
    do_default()`,
        label: "if-elif-else Syntax"
      },
      {
        type: "example",
        code: `age = int(input("Enter your age: "))

if age >= 18:
    print("✅ You can vote!")
elif age >= 16:
    print("⏳ Almost there! 2 more years.")
else:
    print(f"❌ Wait {18 - age} more years.")`,
        output: `Enter your age: 16
⏳ Almost there! 2 more years.`,
        label: "Voting Eligibility Checker"
      },
      {
        type: "text", heading: "Nested if Statements",
        content: `You can put an if statement inside another if statement. This is called nesting. Use nested ifs when you need to check a condition only after another condition is already True.

The ternary operator is a one-line shortcut: value_if_true if condition else value_if_false. Use it only for simple choices to keep code readable.`
      },
      {
        type: "syntax",
        code: `num = -7

if num != 0:
    if num > 0:
        print('Positive number')
    else:
        print('Negative number')
else:
    print('Zero')
# Output: Negative number

# One-line shortcut (ternary operator)
age = 20
status = 'Adult' if age >= 18 else 'Minor'
print(status)   # Adult

marks = 45
result = 'Pass' if marks >= 50 else 'Fail'
print(result)   # Fail`,
        label: "Nested if & Ternary Operator"
      },
      {
        type: "tip",
        content: "The ternary operator: value_if_true if condition else value_if_false — is a one-line if-else. Use it for simple conditions to keep code short and readable."
      },
      {
        type: "example",
        code: `marks = int(input("Enter marks (0-100): "))

if marks >= 90:
    grade = "A+"
elif marks >= 80:
    grade = "A"
elif marks >= 70:
    grade = "B"
elif marks >= 60:
    grade = "C"
elif marks >= 40:
    grade = "D"
else:
    grade = "F"

print(f"Marks: {marks}/100")
print(f"Grade: {grade}")
print(f"Passed: {marks >= 40}")`,
        output: `Enter marks (0-100): 87
Marks: 87/100
Grade: A
Passed: True`,
        label: "Grade Calculator"
      },
    ],
    quiz: [
      { question: "What is mandatory in Python's if block?", options: ["Semicolon at end", "Curly braces {}", "Indentation", "Parentheses around condition"], answer: 2 },
      { question: "elif stands for:", options: ["else if", "equal if", "error if", "end if"], answer: 0 },
      { question: "How many else blocks can one if statement have?", options: ["Unlimited", "Two", "One", "Zero"], answer: 2 },
      { question: "x = 'Yes' if True else 'No' gives:", options: ["No", "Yes", "True", "Error"], answer: 1 },
      { question: "What character ends an if/elif/else line in Python?", options: [";", "{", ":", "()"], answer: 2 },
      { question: "if not True: will:", options: ["Always run", "Never run", "Cause error", "Run once"], answer: 1 },
      { question: "Which block runs when ALL conditions are False?", options: ["if", "elif", "else", "none"], answer: 2 },
    ],
  },

  // ── Chapter 7 ──────────────────
  {
    id: "loops",
    title: "Loops (for, while)",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 7,
    content: [
      {
        type: "text", heading: "What are Loops?",
        content: `A loop repeats a block of code multiple times. Without loops, printing numbers 1 to 100 would need 100 print() statements!

Python has 2 types of loops:
• for loop — Use when you know HOW MANY times to repeat, or want to go through each item in a collection
• while loop — Use when you repeat UNTIL a condition becomes False

Both loops also support:
• break — immediately exit the loop
• continue — skip current iteration, go to next
• else — runs after loop finishes normally (no break)`
      },
      {
        type: "text", heading: "for Loop with range()",
        content: `The for loop repeats for each item in a sequence. The range() function generates a sequence of numbers.

range() has 3 forms:
• range(stop) → 0, 1, 2, 3, 4 (starts at 0, stops before stop)
• range(start, stop) → start to stop-1
• range(start, stop, step) → jumps by step

Key point: The stop value is NEVER included!
Think of it as "start from 1, stop before 5"`
      },
      {
        type: "syntax",
        code: `# range(stop) -> 0 to stop-1
# range(start, stop) -> start to stop-1
# range(start, stop, step)

for i in range(5):
    print(i, end=' ')     # 0 1 2 3 4

for i in range(1, 6):
    print(i, end=' ')     # 1 2 3 4 5

for i in range(0, 11, 2):
    print(i, end=' ')     # 0 2 4 6 8 10

for i in range(10, 0, -2):
    print(i, end=' ')     # 10 8 6 4 2`,
        label: "for Loop with range()"
      },
      {
        type: "syntax",
        code: `# Loop through a list
fruits = ['apple', 'banana', 'mango']
for fruit in fruits:
    print(fruit)

# Loop through a string character by character
for ch in 'Python':
    print(ch, end='-')    # P-y-t-h-o-n-

# enumerate() gives index AND value
for i, fruit in enumerate(fruits, start=1):
    print(f'{i}. {fruit}')
# 1. apple  2. banana  3. mango`,
        label: "Looping Over Sequences"
      },
      {
        type: "text", heading: "while Loop",
        content: `A while loop keeps running as long as its condition is True. Use it when you don't know how many iterations you need in advance.

⚠️ Important: You MUST update the condition variable inside the loop, otherwise it runs forever (infinite loop)!

If you accidentally create an infinite loop, press Ctrl+C to stop it.`
      },
      {
        type: "syntax",
        code: `# Basic while loop — counting
count = 1
while count <= 5:
    print(count)
    count += 1     # MUST update count!
# Output: 1 2 3 4 5

# while with user input
answer = ""
while answer != "quit":
    answer = input("Type 'quit' to exit: ")
    print(f"You typed: {answer}")`,
        label: "while Loop"
      },
      {
        type: "text", heading: "break and continue",
        content: `break — Immediately exits the entire loop. Code after break is skipped.

continue — Skips the REST of the current iteration and goes back to check the condition.

else in loops — Runs ONLY if the loop completed without hitting break. If break was used, the else is skipped.`
      },
      {
        type: "syntax",
        code: `# break: exit loop early
for i in range(1, 10):
    if i == 5:
        break
    print(i, end=' ')   # 1 2 3 4

# continue: skip current iteration
for i in range(1, 8):
    if i % 2 == 0:
        continue       # skip even numbers
    print(i, end=' ')  # 1 3 5 7`,
        label: "break and continue"
      },
      {
        type: "example",
        code: `# Multiplication table
num = int(input("Enter a number: "))

for i in range(1, 4):
    for j in range(1, 4):
        print(f'{i}x{j}={i*j}', end='  ')
    print()   # new line after each row`,
        output: `Enter a number: 5
1x1=1  1x2=2  1x3=3
2x1=2  2x2=4  2x3=6
3x1=3  3x2=6  3x3=9`,
        label: "Nested Loops — Multiplication Table"
      },
    ],
    quiz: [
      { question: "range(1, 5) generates:", options: ["1,2,3,4,5", "1,2,3,4", "0,1,2,3,4", "1 to 5 including 5"], answer: 1 },
      { question: "Which loop is used when iterations count is unknown?", options: ["for loop", "while loop", "do-while", "repeat loop"], answer: 1 },
      { question: "break does what?", options: ["Pauses loop", "Skips one iteration", "Exits loop completely", "Restarts loop"], answer: 2 },
      { question: "continue does what?", options: ["Exits loop", "Skips rest of current iteration", "Pauses execution", "Breaks program"], answer: 1 },
      { question: "When does the loop's else block run?", options: ["Always", "When break is used", "When loop finishes without break", "Never"], answer: 2 },
      { question: "range(10, 0, -2) generates:", options: ["10,8,6,4,2", "10,8,6,4,2,0", "0,2,4,6,8,10", "Error"], answer: 0 },
      { question: "What is an infinite loop?", options: ["Loop running 1000 times", "Loop with no body", "Loop whose condition never becomes False", "Loop inside a function"], answer: 2 },
    ],
  },

  // ── Chapter 8 ──────────────────
  {
    id: "basic-programs",
    title: "Basic Programs (Practice)",
    level: 1, levelName: "Beginner", levelIcon: "👉",
    chapterNo: 8,
    content: [
      {
        type: "text", heading: "Why Practice Programs?",
        content: `Reading theory is not enough — you must WRITE code yourself to truly learn.

This chapter has 4 classic beginner programs that use everything from Chapters 1-7 together. For each program:
1. Read it and understand the logic
2. Close this and try to write it from memory
3. Compare your version with this one
4. Try to improve or add features!`
      },
      {
        type: "example",
        code: `# Program 1: Simple Calculator
a = float(input("First number: "))
op = input("Operator (+, -, *, /): ")
b = float(input("Second number: "))

if op == "+":
    result = a + b
elif op == "-":
    result = a - b
elif op == "*":
    result = a * b
elif op == "/":
    if b != 0:
        result = a / b
    else:
        result = "Error: can't divide by zero"
else:
    result = "Unknown operator"

print(f"{a} {op} {b} = {result}")`,
        output: `First number: 15
Operator (+, -, *, /): *
Second number: 4
15.0 * 4.0 = 60.0`,
        label: "Program 1: Calculator"
      },
      {
        type: "example",
        code: `# Program 2: Check if Prime Number
num = int(input("Enter a number: "))
is_prime = True

if num < 2:
    is_prime = False
else:
    for i in range(2, num):
        if num % i == 0:
            is_prime = False
            break

if is_prime:
    print(f"{num} is a PRIME number ✅")
else:
    print(f"{num} is NOT prime ❌")`,
        output: `Enter a number: 17
17 is a PRIME number ✅`,
        label: "Program 2: Prime Checker"
      },
      {
        type: "example",
        code: `# Program 3: Number Guessing Game
import random
secret = random.randint(1, 100)
attempts = 0

print("Guess the number (1-100). You have 7 tries!")

while attempts < 7:
    guess = int(input(f"Attempt {attempts+1}: "))
    attempts += 1

    if guess == secret:
        print(f"🎉 Correct in {attempts} attempts!")
        break
    elif guess < secret:
        print("Too low! ↑")
    else:
        print("Too high! ↓")
else:
    print(f"Game over! The number was {secret}")`,
        output: `Guess the number (1-100). You have 7 tries!
Attempt 1: 50
Too low! ↑
Attempt 2: 75
Too high! ↓
Attempt 3: 62
🎉 Correct in 3 attempts!`,
        label: "Program 3: Guessing Game"
      },
      {
        type: "example",
        code: `# Program 4: Fibonacci Sequence
n = int(input("How many Fibonacci numbers? "))

a, b = 0, 1
for i in range(n):
    print(a, end=" ")
    a, b = b, a + b`,
        output: `How many Fibonacci numbers? 10
0 1 1 2 3 5 8 13 21 34`,
        label: "Program 4: Fibonacci"
      },
      {
        type: "tip",
        content: "After completing these 4 programs, try building: 1) ATM machine simulation, 2) Rock Paper Scissors game, 3) Temperature converter (Celsius to Fahrenheit), 4) Simple to-do list."
      },
    ],
    quiz: [
      { question: "What is int(n**0.5) used for in prime checking?", options: ["Square of n", "Square root of n", "Cube root", "Half of n"], answer: 1 },
      { question: "random.randint(1, 100) returns:", options: ["Float 1-100", "Integer 1-99", "Integer 1-100 inclusive", "Random string"], answer: 2 },
      { question: "How to append to a list in Python?", options: ["list.add()", "list.push()", "list.append()", "list.insert()"], answer: 2 },
      { question: "a, b = b, a + b does what?", options: ["Assigns same value", "Updates both simultaneously", "Causes error", "Resets variables"], answer: 1 },
      { question: "What does _ mean in 'for _ in range(n)'?", options: ["Error", "Private variable", "Throwaway variable (value not needed)", "Last item"], answer: 2 },
    ],
  },

  // ════════════════════════════════════════
  // LEVEL 2 — INTERMEDIATE (10 Chapters)
  // ════════════════════════════════════════

  {
    id: "strings",
    title: "Strings in Python",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 9,
    content: [
      {
        type: "text", heading: "What is a String?",
        content: `A string is a sequence of characters enclosed in single quotes (' ') or double quotes (" "). Strings are immutable — once created, individual characters cannot be changed. However, you can create new strings from old ones.

Strings support indexing (accessing one character by position), slicing (extracting a portion), concatenation (joining with +), and a rich set of built-in methods.

f-strings (formatted string literals) are the modern, recommended way to embed variable values inside a string. Write f before the quote and put variables inside curly braces: f'Hello {name}'.`
      },
      {
        type: "syntax",
        code: `msg = 'Hello, World!'

# Indexing — access individual characters
print(msg[0])      # H  (first character)
print(msg[7])      # W
print(msg[-1])     # ! (last character)
print(msg[-6])     # W (6th from end)
print(len(msg))    # 13

# Slicing: string[start : stop : step]
print(msg[0:5])    # Hello (index 0 to 4)
print(msg[7:12])   # World
print(msg[:5])     # Hello (from beginning)
print(msg[7:])     # World! (to end)
print(msg[::2])    # Hlo ol! (every 2nd char)
print(msg[::-1])   # !dlroW ,olleH (reversed)`,
        label: "String Indexing & Slicing"
      },
      {
        type: "text", heading: "Understanding Indexing",
        content: `Every character in a string has an index (position number) starting from 0.

"Python" → P(0) y(1) t(2) h(3) o(4) n(5)

Negative indexing counts from the end:
"Python" → P(-6) y(-5) t(-4) h(-3) o(-2) n(-1)

Slicing [start:stop] gives characters from start up to (but NOT including) stop.
msg[0:5] → characters at index 0, 1, 2, 3, 4 → "Hello"`
      },
      {
        type: "table", heading: "Important String Methods",
        content: `Method | What it does | Example
upper() | ALL CAPS | 'hello'.upper() → 'HELLO'
lower() | all lowercase | 'HELLO'.lower() → 'hello'
strip() | Remove whitespace | '  hi  '.strip() → 'hi'
replace() | Replace text | 'cat'.replace('c','b') → 'bat'
split() | Split into list | 'a,b'.split(',') → ['a','b']
join() | Join list | '-'.join(['a','b']) → 'a-b'
find() | Find position | 'hello'.find('ll') → 2
count() | Count occurrences | 'hello'.count('l') → 2
startswith() | Check start | 'hello'.startswith('he') → True
endswith() | Check end | 'world'.endswith('ld') → True`
      },
      {
        type: "example",
        code: `name = ' python programming '
print(name.upper())         # PYTHON PROGRAMMING
print(name.lower())         # python programming
print(name.strip())         # 'python programming'
print(name.strip().title()) # Python Programming

sentence = 'apple,banana,cherry'
parts = sentence.split(',') # ['apple','banana','cherry']
print(parts)

new = 'Hello World'.replace('World', 'Python')
print(new)                  # Hello Python

print('hello'.startswith('he'))   # True
print('world'.endswith('ld'))     # True
print('py' in 'python')           # True`,
        output: `PYTHON PROGRAMMING
python programming
python programming
Python Programming
['apple', 'banana', 'cherry']
Hello Python
True
True
True`,
        label: "String Methods in Action"
      },
    ],
    quiz: [
      { question: "'Python'[2] gives:", options: ["P", "y", "t", "h"], answer: 2 },
      { question: "'hello'[::-1] gives:", options: ["hello", "olleh", "helo", "Error"], answer: 1 },
      { question: "Are strings mutable in Python?", options: ["Yes", "No — immutable", "Only in Python 3", "Depends on length"], answer: 1 },
      { question: "'  hello  '.strip() gives:", options: ["'  hello  '", "'hello'", "'hello  '", "'  hello'"], answer: 1 },
      { question: "'a,b,c'.split(',') gives:", options: ["'abc'", "['a','b','c']", "('a','b','c')", "Error"], answer: 1 },
      { question: "'-'.join(['a','b','c']) gives:", options: ["a b c", "abc", "a-b-c", "[a,b,c]"], answer: 2 },
      { question: "'hello'.find('x') returns:", options: ["0", "None", "-1", "Error"], answer: 2 },
    ],
  },

  {
    id: "lists",
    title: "Lists",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 10,
    content: [
      {
        type: "text", heading: "What is a List?",
        content: `A list is an ordered, mutable (changeable) collection of items enclosed in square brackets [ ]. Lists can hold items of different data types — integers, strings, booleans, even other lists — all in the same list.

Lists are zero-indexed — the first item is at index 0. Negative indexing counts from the end: -1 is the last item, -2 is second-last.

Key facts:
✅ Ordered — items keep their insertion order
✅ Mutable — you can change items after creation
✅ Indexed — access items by position (starts at 0)
✅ Allows duplicates — same value can appear multiple times`
      },
      {
        type: "syntax",
        code: `# Empty list
empty = []

# List of numbers
nums = [10, 20, 30, 40, 50]

# Mixed types
mixed = [1, 'hello', 3.14, True]

# Nested list (2D)
matrix = [[1, 2], [3, 4], [5, 6]]

print(nums)         # [10, 20, 30, 40, 50]
print(len(nums))    # 5`,
        label: "Creating Lists"
      },
      {
        type: "syntax",
        code: `fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']

# Positive indexing (left to right)
print(fruits[0])    # apple (first)
print(fruits[2])    # cherry (third)
print(fruits[4])    # elderberry (last)

# Negative indexing (right to left)
print(fruits[-1])   # elderberry (last)
print(fruits[-2])   # date (second-last)

# Slicing: list[start : stop : step]
print(fruits[1:4])  # ['banana', 'cherry', 'date']
print(fruits[::2])  # every 2nd item
print(fruits[::-1]) # reversed list`,
        label: "List Indexing & Slicing"
      },
      {
        type: "syntax",
        code: `nums = [3, 1, 4, 1, 5]

# Add elements
nums.append(9)         # Add at end
nums.insert(0, 0)      # Insert 0 at index 0
nums.extend([7, 8])    # Add multiple items

# Remove elements
nums.remove(1)         # Removes FIRST occurrence of 1
val = nums.pop()       # Removes and returns last item
val2 = nums.pop(0)     # Removes item at index 0

# Search, Sort, Copy
print(nums.index(5))   # Find index of value 5
print(nums.count(1))   # Count occurrences
nums.sort()            # Sort ascending in-place
nums.sort(reverse=True)# Sort descending
nums.reverse()         # Reverse in-place
copy = nums.copy()     # Shallow copy
nums.clear()           # Remove all items`,
        label: "List Methods — Add, Remove, Sort"
      },
      {
        type: "text", heading: "List Comprehension",
        content: `List comprehension is a concise way to create lists in one line: [expression for item in iterable if condition]. It is more Pythonic and usually faster than a regular for loop.

Normal way (4 lines):
squares = []
for x in range(5):
    squares.append(x**2)

List comprehension (1 line):
squares = [x**2 for x in range(5)]`
      },
      {
        type: "syntax",
        code: `# Pattern: [expression for item in iterable if condition]

# Squares of 1 to 10
squares = [x**2 for x in range(1, 11)]
print(squares)
# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Only even numbers from 1 to 20
evens = [x for x in range(1, 21) if x % 2 == 0]
print(evens)
# [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# Convert all words to uppercase
words = ['hello', 'world', 'python']
upper = [w.upper() for w in words]
print(upper)   # ['HELLO', 'WORLD', 'PYTHON']`,
        label: "List Comprehension"
      },
      {
        type: "table", heading: "Useful List Methods",
        content: `Method | What it does
append(x) | Add x to the end
insert(i, x) | Insert x at index i
remove(x) | Remove first occurrence of x
pop() | Remove and return last item
sort() | Sort list in place
reverse() | Reverse list in place
index(x) | Find index of value x
count(x) | Count occurrences of x
clear() | Remove all items
copy() | Make a copy of the list`
      },
      {
        type: "example",
        code: `marks = [85, 92, 78, 95, 88]

print(f"Marks: {marks}")
print(f"Total: {sum(marks)}")
print(f"Average: {sum(marks)/len(marks):.1f}")
print(f"Highest: {max(marks)}")
print(f"Lowest: {min(marks)}")

marks.sort()
print(f"Sorted: {marks}")`,
        output: `Marks: [85, 92, 78, 95, 88]
Total: 438
Average: 87.6
Highest: 95
Lowest: 78
Sorted: [78, 85, 88, 92, 95]`,
        label: "Marks Analyzer"
      },
    ],
    quiz: [
      { question: "How to add item to end of list?", options: ["list.add()", "list.push()", "list.append()", "list.insert()"], answer: 2 },
      { question: "list.pop() removes:", options: ["First item", "Last item", "All items", "Random item"], answer: 1 },
      { question: "[x**2 for x in range(3)] gives:", options: ["[1,4,9]", "[0,1,4]", "[0,1,2]", "[1,2,3]"], answer: 1 },
      { question: "Are lists mutable in Python?", options: ["No", "Yes", "Only strings in list", "Depends"], answer: 1 },
      { question: "What is list[1:3] called?", options: ["Indexing", "Slicing", "Filtering", "Sorting"], answer: 1 },
      { question: "sorted(list) vs list.sort():", options: ["Same thing", "sorted() returns new list, sort() modifies in place", "sort() returns new list", "No difference in Python 3"], answer: 1 },
    ],
  },

  {
    id: "tuples",
    title: "Tuples",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 11,
    content: [
      {
        type: "text", heading: "What is a Tuple?",
        content: `A tuple is an ordered, immutable (cannot be changed) collection enclosed in parentheses ( ). Once created, you cannot add, remove, or modify elements. This immutability makes tuples safer for data that should not change (like GPS coordinates, RGB colors, or database records).

Tuples are faster than lists and use less memory. They support the same indexing and slicing as lists. A single-element tuple must have a trailing comma: (42,) — without the comma, Python treats it as just a parenthesized expression.`
      },
      {
        type: "syntax",
        code: `# Tuple with multiple values
point = (10, 20)
colors = ('red', 'green', 'blue')
person = ('Anita', 22, 'Engineer')

# Single-element tuple — comma is mandatory!
single = (42,)      # This is a tuple
not_tuple = (42)    # This is just int 42

print(type(single))     # <class 'tuple'>
print(type(not_tuple))  # <class 'int'>

# Indexing works same as lists
print(colors[0])        # red
print(colors[-1])       # blue
print(colors[1:3])      # ('green', 'blue')

# Tuples are immutable — cannot change!
# colors[0] = 'pink'  # ERROR: TypeError`,
        label: "Creating & Accessing Tuples"
      },
      {
        type: "warning",
        content: "single = (42) is NOT a tuple! It's just the number 42. The COMMA makes it a tuple: single = (42,). This is a very common mistake!"
      },
      {
        type: "text", heading: "Tuple Unpacking",
        content: `Tuple unpacking is one of Python's most powerful features — you can assign multiple values from a tuple to multiple variables in one line. This also enables elegant variable swapping without a temporary variable.

This is used everywhere in Python:
• Swapping variables: a, b = b, a
• Getting multiple return values from functions
• Looping through key-value pairs in dictionaries`
      },
      {
        type: "syntax",
        code: `# Assign all values at once
point = (10, 20)
x, y = point
print(x)    # 10
print(y)    # 20

person = ('Ravi', 25, 'Delhi')
name, age, city = person
print(f'{name} is {age} from {city}')

# Swap variables using tuple unpacking
a = 5
b = 9
a, b = b, a   # swap!
print(a, b)   # 9 5`,
        label: "Tuple Unpacking"
      },
      {
        type: "table", heading: "Tuple vs List",
        content: `Property | Tuple | List
Syntax | (1, 2, 3) | [1, 2, 3]
Mutable | ❌ No | ✅ Yes
Speed | ⚡ Faster | Slower
Dict key | ✅ Yes | ❌ No
Methods | 2 only | 11+
Use for | Fixed data | Changing data`
      },
      {
        type: "example",
        code: `# Student records as tuples
students = [
    ("Alice", 20, 92.5),
    ("Bob", 22, 78.3),
    ("Charlie", 21, 88.7),
]

for name, age, marks in students:
    grade = "A" if marks >= 90 else "B" if marks >= 80 else "C"
    print(f"{name} | Age: {age} | Marks: {marks} | Grade: {grade}")`,
        output: `Alice | Age: 20 | Marks: 92.5 | Grade: A
Bob | Age: 22 | Marks: 78.3 | Grade: C
Charlie | Age: 21 | Marks: 88.7 | Grade: B`,
        label: "Student Records"
      },
    ],
    quiz: [
      { question: "Are tuples mutable?", options: ["Yes", "No", "Only numbers", "Depends on Python version"], answer: 1 },
      { question: "How to create a single-item tuple?", options: ["(42)", "(42,)", "[42]", "{42}"], answer: 1 },
      { question: "Can tuples be used as dictionary keys?", options: ["No", "Yes", "Only string tuples", "Only number tuples"], answer: 1 },
      { question: "a, b = b, a does what?", options: ["Error", "Assigns same value", "Swaps a and b", "Deletes both"], answer: 2 },
      { question: "first, *rest = (1,2,3,4) gives rest as:", options: ["(2,3,4)", "[2,3,4]", "2,3,4", "Error"], answer: 1 },
      { question: "Tuples are faster than lists because:", options: ["They use less features", "Python optimizes immutable objects", "They store less data", "They use C internally"], answer: 1 },
    ],
  },

  {
    id: "sets",
    title: "Sets",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 12,
    content: [
      {
        type: "text", heading: "What is a Set?",
        content: `A set is an unordered collection of unique elements, enclosed in curly braces { }. Sets automatically eliminate duplicate values. Because sets are unordered, you cannot access elements by index.

Sets support powerful mathematical set operations: union, intersection, difference, and symmetric difference.

The most common practical use of sets is removing duplicates from a list: list(set(my_list)). Sets also provide O(1) average membership testing — much faster than lists for large data.`
      },
      {
        type: "syntax",
        code: `# Create a set
fruits = {'apple', 'banana', 'apple', 'cherry', 'banana'}
print(fruits)   # {'apple', 'banana', 'cherry'}
                # duplicates automatically removed!

# Remove duplicates from a list
nums = [1, 2, 2, 3, 3, 3, 4, 5, 5]
unique = list(set(nums))
print(unique)   # [1, 2, 3, 4, 5]

# Check membership — O(1) time
print('apple' in fruits)    # True
print('grape' in fruits)    # False

# IMPORTANT: Empty set = set(), NOT {}
empty = set()       # correct!
empty_dict = {}     # this is a DICTIONARY, not a set!

s = {1, 2, 3, 4, 5}
s.add(6)            # Add element
s.remove(3)         # Remove (raises error if not found)
s.discard(99)       # Remove (no error if not found)`,
        label: "Set Basics"
      },
      {
        type: "text", heading: "Set Operations",
        content: `Sets support mathematical operations that are very useful for data analysis:

Union (|) — All elements from both sets
Intersection (&) — Elements common to BOTH sets
Difference (-) — Elements in first set but NOT in second
Symmetric Difference (^) — Elements in either but NOT in both`
      },
      {
        type: "syntax",
        code: `A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

# Union — all elements from both
print(A | B)         # {1, 2, 3, 4, 5, 6, 7, 8}
print(A.union(B))    # same result

# Intersection — only common elements
print(A & B)              # {4, 5}
print(A.intersection(B))  # same result

# Difference — in A but not in B
print(A - B)          # {1, 2, 3}
print(A.difference(B)) # same result

# Symmetric Difference — in either but NOT both
print(A ^ B)          # {1, 2, 3, 6, 7, 8}`,
        label: "Set Operations"
      },
      {
        type: "tip",
        content: "Sets are perfect for removing duplicates from a list! unique = list(set(my_list)) — converts list to set (removes duplicates), then back to list."
      },
      {
        type: "example",
        code: `python_students = {"Alice", "Bob", "Charlie", "Diana"}
java_students = {"Bob", "Diana", "Frank"}

print("Study BOTH:", python_students & java_students)
print("Python only:", python_students - java_students)
print("Java only:", java_students - python_students)
print("Total unique:", len(python_students | java_students))`,
        output: `Study BOTH: {'Bob', 'Diana'}
Python only: {'Alice', 'Charlie'}
Java only: {'Frank'}
Total unique: 5`,
        label: "Student Course Analysis"
      },
    ],
    quiz: [
      { question: "Can sets contain duplicate values?", options: ["Yes", "No — auto removed", "Only numbers", "Only if added manually"], answer: 1 },
      { question: "How to create an empty set?", options: ["{}", "set()", "[]", "empty()"], answer: 1 },
      { question: "A & B gives:", options: ["Union", "Intersection", "Difference", "Symmetric difference"], answer: 1 },
      { question: "A - B gives elements:", options: ["In A and B", "In B only", "In A but not in B", "Not in A or B"], answer: 2 },
      { question: "Why are sets fast for membership testing?", options: ["They're sorted", "They use hash tables — O(1)", "They use binary search", "They cache results"], answer: 1 },
      { question: "discard() vs remove():", options: ["Same", "discard() no error if missing, remove() raises KeyError", "remove() is faster", "discard() removes all occurrences"], answer: 1 },
    ],
  },

  {
    id: "dictionaries",
    title: "Dictionaries",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 13,
    content: [
      {
        type: "text", heading: "What is a Dictionary?",
        content: `A dictionary stores data as key-value pairs enclosed in curly braces { }. Keys must be unique and immutable (usually strings or numbers). Values can be any data type — strings, numbers, lists, even other dictionaries.

Dictionaries provide O(1) average-case lookup — regardless of how large the dictionary is, finding a value by key takes roughly the same time. This is because Python internally uses a hash table.

Since Python 3.7, dictionaries maintain insertion order.`
      },
      {
        type: "syntax",
        code: `# Create a dictionary
student = {
    'name' : 'Kavya',
    'age'  : 21,
    'marks': 88,
    'city' : 'Pune'
}

# Access by key
print(student['name'])              # Kavya
print(student['age'])               # 21

# Safe access with .get()
print(student.get('marks'))         # 88
print(student.get('phone', 'N/A'))  # N/A (key missing, no error)

# Add / Update
student['grade'] = 'A'    # add new key
student['age'] = 22       # update existing key

# Delete
del student['grade']             # delete by key
val = student.pop('marks')       # remove & return value`,
        label: "Dictionary Basics"
      },
      {
        type: "text", heading: "Why Use .get() Instead of []",
        content: `student["grade"] → KeyError if "grade" doesn't exist (crashes your program!)

student.get("grade") → Returns None if not found (no crash!)
student.get("grade", "N/A") → Returns "N/A" if not found (custom default)

Always use .get() when you're not 100% sure the key exists. This makes your code much safer.`
      },
      {
        type: "syntax",
        code: `marks = {'Maths': 90, 'Science': 85, 'English': 78}

# Iterate over keys
for subject in marks:
    print(subject)

# Iterate over values
for score in marks.values():
    print(score)

# Iterate over key-value pairs (most useful!)
for subject, score in marks.items():
    print(f'{subject}: {score}')

# Dictionary Comprehension
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1:1, 2:4, 3:9, 4:16, 5:25}`,
        label: "Looping & Dictionary Comprehension"
      },
      {
        type: "table", heading: "Dictionary Methods",
        content: `Method | What it does
dict[key] | Get value (KeyError if missing)
dict.get(key, default) | Get value safely
dict.keys() | All keys
dict.values() | All values
dict.items() | All key-value pairs
dict.update(other) | Merge another dict
dict.pop(key) | Remove and return value
dict.clear() | Remove all items`
      },
      {
        type: "example",
        code: `# Simple phone book
contacts = {
    "Alice": "9876543210",
    "Bob": "8765432109",
    "Charlie": "7654321098"
}

name = input("Search name: ")
phone = contacts.get(name, "Not found")
print(f"{name}: {phone}")

print("\nAll Contacts:")
for name, phone in sorted(contacts.items()):
    print(f"  {name}: {phone}")`,
        output: `Search name: Alice
Alice: 9876543210

All Contacts:
  Alice: 9876543210
  Bob: 8765432109
  Charlie: 7654321098`,
        label: "Phone Book"
      },
    ],
    quiz: [
      { question: "Which is the safe way to get a dict value?", options: ["dict[key]", "dict.get(key)", "dict.fetch(key)", "dict.find(key)"], answer: 1 },
      { question: "Can dictionary keys be lists?", options: ["Yes", "No — must be immutable", "Only empty lists", "Only in Python 3"], answer: 1 },
      { question: "dict.items() returns:", options: ["Only keys", "Only values", "Key-value pairs", "Length"], answer: 2 },
      { question: "dict.pop('key') does:", options: ["Adds key", "Gets without removing", "Removes and returns value", "Clears dict"], answer: 2 },
      { question: "How to loop through key-value pairs?", options: ["for k in dict", "for k,v in dict.items()", "for dict.all()", "for k,v in dict"], answer: 1 },
      { question: "{x: x**2 for x in range(3)} gives:", options: ["{0,1,4}", "{0:0, 1:1, 2:4}", "[0,1,4]", "Error"], answer: 1 },
    ],
  },

  {
    id: "functions",
    title: "Functions",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 14,
    content: [
      {
        type: "text", heading: "What is a Function?",
        content: `A function is a named, reusable block of code that performs a specific task. Functions help you avoid writing the same code repeatedly (DRY — Don't Repeat Yourself). Define a function once with def, then call it as many times as needed.

Functions can accept parameters (input values) and return output values. If no return statement is used, the function returns None automatically. Parameters can have default values, making them optional when calling.`
      },
      {
        type: "syntax",
        code: `# Define a function with 'def'
def greet(name):
    print(f'Hello, {name}!')

greet('Priya')    # Hello, Priya!
greet('Rohit')    # Hello, Rohit!

# Function with return value
def add(a, b):
    result = a + b
    return result

total = add(10, 25)
print(total)    # 35

# Default arguments
def power(base, exponent=2):
    return base ** exponent

print(power(5))      # 25 (5^2, default exponent=2)
print(power(2, 10))  # 1024 (2^10)`,
        label: "Defining & Calling Functions"
      },
      {
        type: "syntax",
        code: `# *args — Accept any number of arguments
def add_all(*numbers):
    total = 0
    for n in numbers:
        total += n
    return total

print(add_all(1, 2, 3))        # 6
print(add_all(10, 20, 30, 40)) # 100

# Lambda — Anonymous one-line function
square = lambda x: x ** 2
add = lambda a, b: a + b
is_even = lambda n: n % 2 == 0

print(square(9))      # 81
print(add(3, 7))      # 10
print(is_even(4))     # True

# Sort with lambda
students = [("Alice", 85), ("Bob", 72), ("Charlie", 91)]
students.sort(key=lambda s: s[1], reverse=True)
print(students)
# [('Charlie', 91), ('Alice', 85), ('Bob', 72)]`,
        label: "*args & Lambda Functions"
      },
      {
        type: "tip",
        content: "lambda is an anonymous one-line function: lambda x: x * 2. Use it for simple operations, especially with sort(), map(), and filter(). For complex logic, always use a regular def function."
      },
      {
        type: "example",
        code: `# Calculator using functions
def add(a, b): return a + b
def subtract(a, b): return a - b
def multiply(a, b): return a * b
def divide(a, b): return a / b if b != 0 else "Error"

a = float(input("First number: "))
op = input("Operator (+,-,*,/): ")
b = float(input("Second number: "))

operations = {"+": add, "-": subtract, "*": multiply, "/": divide}
result = operations.get(op, lambda x,y: "Invalid")(a, b)
print(f"Result: {a} {op} {b} = {result}")`,
        output: `First number: 10
Operator (+,-,*,/): *
Second number: 5
Result: 10.0 * 5.0 = 50.0`,
        label: "Function-Based Calculator"
      },
    ],
    quiz: [
      { question: "Which keyword defines a function?", options: ["function", "func", "def", "define"], answer: 2 },
      { question: "What does *args allow?", options: ["Only 2 arguments", "Variable number of positional args", "Keyword arguments", "Default arguments"], answer: 1 },
      { question: "lambda x: x**2 is equivalent to:", options: ["def f(): return x**2", "def f(x): return x**2", "def f(x): x**2", "def(x): return x**2"], answer: 1 },
      { question: "To modify global variable inside function, use:", options: ["global keyword", "extern keyword", "public keyword", "Just assign directly"], answer: 0 },
      { question: "What does map(func, list) do?", options: ["Filters items", "Applies func to each item", "Sorts the list", "Counts items"], answer: 1 },
      { question: "A function without return statement returns:", options: ["0", "False", "None", "Error"], answer: 2 },
    ],
  },

  {
    id: "recursion",
    title: "Recursion",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 15,
    content: [
      {
        type: "text", heading: "What is Recursion?",
        content: `A function is recursive when it calls itself. Every recursive function needs two things:

1. Base Case — The stopping condition (prevents infinite recursion)
2. Recursive Case — The part that calls itself with a simpler input

Python keeps track of recursive calls using the call stack. Each call is pushed onto the stack; when a base case is reached, calls are resolved from top to bottom. Python's default recursion limit is 1000 calls. Recursion can be elegant but uses more memory than iteration.`
      },
      {
        type: "syntax",
        code: `# Factorial using recursion
# 5! = 5 × 4 × 3 × 2 × 1 = 120
def factorial(n):
    if n == 0 or n == 1:   # Base case: stop here
        return 1
    return n * factorial(n-1)  # Recursive case

# How it works for factorial(4):
# factorial(4) = 4 * factorial(3)
#              = 4 * 3 * factorial(2)
#              = 4 * 3 * 2 * factorial(1)
#              = 4 * 3 * 2 * 1 = 24

print(factorial(5))    # 120
print(factorial(0))    # 1`,
        label: "Factorial — Classic Example"
      },
      {
        type: "syntax",
        code: `# Fibonacci — Recursive
def fib(n):
    if n <= 1:     # base case
        return n
    return fib(n-1) + fib(n-2)   # recursive case

# First 10 Fibonacci numbers
for i in range(10):
    print(fib(i), end=' ')
# 0 1 1 2 3 5 8 13 21 34

# Sum of Digits — Recursion
def sum_digits(n):
    if n < 10:            # single digit = base case
        return n
    return (n % 10) + sum_digits(n // 10)

print(sum_digits(123))    # 1+2+3 = 6
print(sum_digits(9999))   # 9+9+9+9 = 36`,
        label: "Fibonacci & Sum of Digits"
      },
      {
        type: "warning",
        content: "Python's default recursion limit is 1000 levels. For large inputs, recursive Fibonacci is very slow — fibonacci(40) makes millions of calls! Use loops or memoization (caching) for large inputs."
      },
      {
        type: "example",
        code: `# Palindrome checker using recursion
def is_palindrome(s):
    s = s.lower().replace(" ", "")
    if len(s) <= 1:
        return True              # base case
    if s[0] != s[-1]:
        return False             # mismatch!
    return is_palindrome(s[1:-1])  # check middle

words = ["racecar", "hello", "madam", "level"]
for w in words:
    result = "✅" if is_palindrome(w) else "❌"
    print(f"{result} {w}")`,
        output: `✅ racecar
❌ hello
✅ madam
✅ level`,
        label: "Palindrome Checker"
      },
    ],
    quiz: [
      { question: "What is the base case in recursion?", options: ["First call of function", "Condition that STOPS recursion", "The return value", "The recursive call"], answer: 1 },
      { question: "What happens without a base case?", options: ["Returns 0", "RecursionError (infinite recursion)", "Runs once", "Returns None"], answer: 1 },
      { question: "factorial(4) = ?", options: ["12", "16", "24", "8"], answer: 2 },
      { question: "Python's default recursion limit is:", options: ["100", "500", "1000", "Unlimited"], answer: 2 },
      { question: "Memoization in recursion means:", options: ["Writing notes about code", "Caching results to avoid recalculation", "Making code backwards", "Using global variables"], answer: 1 },
      { question: "Recursion is best suited for:", options: ["Simple loops", "File reading", "Problems that break into smaller identical sub-problems", "String operations"], answer: 2 },
    ],
  },

  {
    id: "file-handling",
    title: "File Handling",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 16,
    content: [
      {
        type: "text", heading: "What is File Handling?",
        content: `File handling lets your Python program read from and write to files on disk. The built-in open() function opens a file. Always use the with statement (context manager) — it automatically closes the file even if an error occurs.

File modes:
'r' — read (default), 'w' — write (creates or overwrites), 'a' — append (adds to end), 'r+' — read and write, 'rb'/'wb' — binary read/write for images, PDFs, etc.`
      },
      {
        type: "table", heading: "File Opening Modes",
        content: `Mode | Description
'r' | Read only (default) — file must exist
'w' | Write — creates new or OVERWRITES existing
'a' | Append — adds to end without deleting
'x' | Create new file — fails if file exists
'r+' | Read and Write`
      },
      {
        type: "syntax",
        code: `# WRITE to a file ('w' creates or overwrites)
with open('notes.txt', 'w') as f:
    f.write('Line 1: Hello World\n')
    f.write('Line 2: Python is great\n')
    f.write('Line 3: File Handling\n')
print('File written successfully!')

# READ entire file as one string
with open('notes.txt', 'r') as f:
    content = f.read()
    print(content)

# READ line by line
with open('notes.txt', 'r') as f:
    for line in f:
        print(line.strip())  # strip removes \n

# READ all lines as a list
with open('notes.txt', 'r') as f:
    lines = f.readlines()
    print(lines[0])   # First line only

# APPEND ('a' mode adds to end without deleting)
with open('notes.txt', 'a') as f:
    f.write('Line 4: Appended line\n')`,
        label: "Reading, Writing & Appending Files"
      },
      {
        type: "text", heading: "CSV File Handling",
        content: `CSV (Comma Separated Values) is a common format for storing tabular data. Python's csv module makes it easy to read and write CSV files.`
      },
      {
        type: "syntax",
        code: `import csv

# Write CSV
with open('students.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['Name', 'Age', 'Grade'])
    writer.writerow(['Aryan', 20, 'A'])
    writer.writerow(['Sneha', 22, 'B'])

# Read CSV
with open('students.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)`,
        label: "CSV File Handling"
      },
      {
        type: "tip",
        content: "Use JSON format for saving structured data! import json, then json.dump() to write and json.load() to read. Much better than raw text for dictionaries and lists."
      },
      {
        type: "example",
        code: `import json, os

FILENAME = "students.json"

def load(): 
    return json.load(open(FILENAME)) if os.path.exists(FILENAME) else {}

def save(data):
    with open(FILENAME, "w") as f:
        json.dump(data, f, indent=2)

db = load()
db["Alice"] = {"marks": 92, "grade": "A"}
db["Bob"]   = {"marks": 78, "grade": "B"}
save(db)

db = load()
for name, info in db.items():
    print(f"{name}: {info['marks']} marks ({info['grade']})")`,
        output: `Alice: 92 marks (A)
Bob: 78 marks (B)`,
        label: "Student Records with JSON"
      },
    ],
    quiz: [
      { question: "Which mode overwrites existing file content?", options: ["'r'", "'a'", "'w'", "'x'"], answer: 2 },
      { question: "Why use 'with' statement for files?", options: ["Faster reading", "Auto-closes file even on error", "Creates file automatically", "Allows binary mode"], answer: 1 },
      { question: "file.readline() reads:", options: ["Entire file", "One line", "All lines as list", "First character"], answer: 1 },
      { question: "To add content WITHOUT deleting existing, use mode:", options: ["'w'", "'r'", "'x'", "'a'"], answer: 3 },
      { question: "json.dump(data, file) does:", options: ["Reads JSON from file", "Writes Python object as JSON to file", "Deletes file", "Validates JSON"], answer: 1 },
      { question: "os.path.exists('file.txt') returns:", options: ["The file content", "True or False", "File size", "File type"], answer: 1 },
    ],
  },

  {
    id: "exception-handling",
    title: "Exception Handling",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 17,
    content: [
      {
        type: "text", heading: "What are Exceptions?",
        content: `An exception is a runtime error that disrupts normal program flow. Without handling, your program crashes. The try-except block catches errors gracefully and lets the program continue.

Two types of errors:
1. Syntax Error — wrong code structure (before running)
2. Exception (Runtime Error) — error while running (e.g., int("hello"))

try — code that might cause an error
except — code to run if a specific error occurs
else — runs if NO error occurred
finally — ALWAYS runs (good for cleanup like closing files)`
      },
      {
        type: "table", heading: "Common Python Exceptions",
        content: `Exception | When it happens
ValueError | Wrong value: int('hello')
TypeError | Wrong type: '5' + 5
ZeroDivisionError | Dividing by zero: 10/0
IndexError | List index out of range: [1,2][10]
KeyError | Dict key not found: {}['missing']
FileNotFoundError | File doesn't exist: open('missing.txt')
NameError | Variable not defined: print(undefined)`
      },
      {
        type: "syntax",
        code: `try:
    num = int(input('Enter a number: '))
    print(f'You entered: {num}')
except ValueError:
    print('That is not a valid number!')
# If user types 'abc' -> ValueError caught -> prints error
# If user types '5' -> prints: You entered: 5`,
        label: "Basic try-except"
      },
      {
        type: "syntax",
        code: `try:
    x = int(input('Numerator: '))
    y = int(input('Denominator: '))
    result = x / y
    print(f'Result: {result}')
except ValueError:
    print('Please enter integers only!')
except ZeroDivisionError:
    print('Cannot divide by zero!')
except Exception as e:
    print(f'Unexpected error: {e}')
finally:
    print('Program finished.')  # always runs`,
        label: "Multiple except Blocks"
      },
      {
        type: "tip",
        content: "Always catch SPECIFIC exceptions first (ValueError, TypeError) and general Exception last. Python checks except blocks top to bottom — if Exception comes first, it catches everything and specific ones below never run!"
      },
      {
        type: "syntax",
        code: `# Raising Custom Exceptions
def set_age(age):
    if age < 0:
        raise ValueError('Age cannot be negative!')
    if age > 150:
        raise ValueError('Age too large!')
    print(f'Age set to {age}')

try:
    set_age(-5)
except ValueError as e:
    print(f'Error: {e}')  # Error: Age cannot be negative!`,
        label: "Raising Custom Exceptions"
      },
      {
        type: "example",
        code: `# Robust file reader
def read_file(filename):
    try:
        with open(filename, 'r') as f:
            content = f.read()
    except FileNotFoundError:
        return f"Error: '{filename}' not found"
    except PermissionError:
        return f"Error: no permission to read '{filename}'"
    else:
        return content
    finally:
        print(f"Attempted to read: {filename}")

result = read_file("missing.txt")
print(result)`,
        output: `Attempted to read: missing.txt
Error: 'missing.txt' not found`,
        label: "File Reader with Error Handling"
      },
    ],
    quiz: [
      { question: "Which block ALWAYS runs regardless of exceptions?", options: ["try", "except", "else", "finally"], answer: 3 },
      { question: "int('hello') raises:", options: ["TypeError", "ValueError", "SyntaxError", "NameError"], answer: 1 },
      { question: "The 'else' block in try-except runs when:", options: ["Exception occurs", "No exception in try", "Finally completes", "Always"], answer: 1 },
      { question: "To raise an exception manually, use:", options: ["throw", "raise", "error", "except"], answer: 1 },
      { question: "'except Exception as e' — what is 'e'?", options: ["Type of exception", "The exception object with message", "Boolean True/False", "Error code"], answer: 1 },
      { question: "Which is the CORRECT order of except blocks?", options: ["except ValueError, then except Exception", "except Exception, then except ValueError", "finally first", "else first"], answer: 0 },
    ],
  },

  {
    id: "modules-packages",
    title: "Modules & Packages",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 18,
    content: [
      {
        type: "text", heading: "What is a Module?",
        content: `A module is a Python file (.py) that contains functions, variables, and code you can reuse in other programs.

Python has 3 types:
1. Built-in modules — come with Python: math, os, random, datetime
2. Third-party modules — install via pip: numpy, pandas, requests
3. Your own modules — .py files you create yourself

Think of modules like apps on your phone — you import only what you need!`
      },
      {
        type: "syntax",
        code: `# Different ways to import
import math                    # import whole module
from math import sqrt, pi     # import specific items
import numpy as np             # import with alias

# Using them
print(math.sqrt(144))         # 12.0
print(sqrt(144))              # 12.0 (no need for math.)
print(math.pi)                # 3.14159...`,
        label: "Ways to Import"
      },
      {
        type: "syntax",
        code: `import math
import random
from datetime import date

# math module
print(math.sqrt(25))          # 5.0
print(math.floor(3.9))        # 3
print(math.ceil(3.1))         # 4
print(math.factorial(5))      # 120

# random module
print(random.randint(1, 100)) # random int 1-100
fruits = ["apple", "banana", "mango"]
print(random.choice(fruits))  # random item

# datetime module
today = date.today()
print(today)                  # 2024-01-15
print(today.year, today.month)`,
        label: "Built-in Modules"
      },
      {
        type: "text", heading: "Installing Third-Party Packages",
        content: `pip is Python's package installer. Run these in your terminal:

pip install requests — web requests
pip install numpy — arrays and math
pip install pandas — data analysis
pip install matplotlib — charts and graphs
pip install flask — web development

Check installed packages: pip list
Save requirements: pip freeze > requirements.txt
Install from file: pip install -r requirements.txt`
      },
      {
        type: "text", heading: "Creating Your Own Module",
        content: `Any .py file you create IS a module! Save functions in a file, then import it in another file.

The if __name__ == "__main__": check runs code only when the file is run directly, NOT when imported as a module.`
      },
      {
        type: "syntax",
        code: `# myutils.py — your own module
def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]

def caesar_cipher(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            result += chr((ord(char) - base + shift) % 26 + base)
        else:
            result += char
    return result

# Only runs when file is executed directly
if __name__ == "__main__":
    print(is_palindrome("racecar"))   # True
    print(caesar_cipher("Hello", 3))  # Khoor`,
        label: "Creating Your Own Module"
      },
      {
        type: "tip",
        content: "Best practice: Always create a virtual environment for each project. Run: python -m venv venv, then activate it, then pip install your packages. This keeps each project's dependencies separate!"
      },
    ],
    quiz: [
      { question: "Which command installs a package?", options: ["python install", "pip install", "py add", "import install"], answer: 1 },
      { question: "'import math as m' — to use sqrt, write:", options: ["math.sqrt(4)", "m.sqrt(4)", "sqrt(4)", "from.sqrt(4)"], answer: 1 },
      { question: "'from math import sqrt' imports:", options: ["Entire math module", "Only sqrt function", "sqrt and pi", "Nothing — wrong syntax"], answer: 1 },
      { question: "__name__ == '__main__' is True when:", options: ["File is imported", "File runs directly", "Function is called", "Class is instantiated"], answer: 1 },
      { question: "Which module generates random numbers?", options: ["math", "os", "random", "sys"], answer: 2 },
      { question: "pip freeze > requirements.txt does:", options: ["Installs packages", "Saves installed packages list to file", "Deletes packages", "Updates packages"], answer: 1 },
    ],
  },

  // ════════════════════════════════════════
  // NEW CHAPTERS — FROM PDF (OOP + DSA)
  // ════════════════════════════════════════

  // ── Chapter 19 — OOP: Classes & Objects ──
  {
    id: "oop-classes-objects",
    title: "OOP — Classes & Objects",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 19,
    content: [
      {
        type: "text", heading: "What is Object-Oriented Programming?",
        content: `Object-Oriented Programming (OOP) is a way of organizing code around objects — things that combine data (attributes) and behavior (methods) together.

OOP has 4 main pillars:
1. Encapsulation — hiding internal details
2. Inheritance — child class reuses parent code
3. Polymorphism — same method, different behavior
4. Abstraction — show only essentials

OOP makes code more organized, reusable, and easier to maintain in large projects.`
      },
      {
        type: "text", heading: "Classes & Objects",
        content: `A class is a blueprint or template that defines what attributes (data) and methods (functions) an object will have. Think of a class like a cookie cutter — the cutter is the class, and each cookie you make is an object.

An object is an instance of a class — a concrete realization of the blueprint. You can create many objects from the same class, each with its own data.

The __init__ method is the constructor — it runs automatically when a new object is created.

self is a reference to the current object. It must be the first parameter of every method. Through self, a method can access the object's own attributes and methods.`
      },
      {
        type: "syntax",
        code: `class Dog:
    # Class attribute (shared by all dogs)
    species = 'Canis lupus'

    # Constructor: runs when object is created
    def __init__(self, name, breed):
        self.name = name    # instance attribute
        self.breed = breed  # instance attribute

    def bark(self):
        print(f'{self.name} says: Woof!')

    def info(self):
        print(f'{self.name} is a {self.breed}')

# Create objects (instances)
dog1 = Dog('Tommy', 'Labrador')
dog2 = Dog('Bruno', 'German Shepherd')

dog1.bark()       # Tommy says: Woof!
dog2.info()       # Bruno is a German Shepherd
print(Dog.species) # Canis lupus`,
        label: "Your First Class"
      },
      {
        type: "syntax",
        code: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f'Deposited {amount}. Balance: {self.balance}')

    def withdraw(self, amount):
        if amount > self.balance:
            print('Insufficient funds!')
        else:
            self.balance -= amount
            print(f'Withdrawn {amount}. Balance: {self.balance}')

acc = BankAccount('Arjun', 1000)
acc.deposit(500)    # Deposited 500. Balance: 1500
acc.withdraw(200)   # Withdrawn 200. Balance: 1300
acc.withdraw(2000)  # Insufficient funds!`,
        label: "Class with Constructor & Methods"
      },
      {
        type: "tip",
        content: "Instance attributes (self.name) belong to each object individually. Class attributes (species) are shared by ALL objects of that class. Changing a class attribute affects all instances!"
      },
    ],
    quiz: [
      { question: "What is a class in Python?", options: ["A function", "A blueprint for creating objects", "A variable", "A module"], answer: 1 },
      { question: "What does __init__ do?", options: ["Deletes object", "Constructor — runs when object is created", "Returns the class", "Imports module"], answer: 1 },
      { question: "What is 'self' in a method?", options: ["A keyword for class", "Reference to current object instance", "A string", "A built-in function"], answer: 1 },
      { question: "dog1 = Dog('Tommy') — dog1 is:", options: ["A class", "A method", "An instance/object", "A constructor"], answer: 2 },
      { question: "Class attributes are:", options: ["Unique to each object", "Shared by all objects of that class", "Only for __init__", "Private by default"], answer: 1 },
      { question: "What is OOP?", options: ["Only Object Programming", "Object-Oriented Programming", "Ordered Operations Protocol", "Optional Output Parameters"], answer: 1 },
    ],
  },

  // ── Chapter 20 — OOP: Inheritance & Polymorphism ──
  {
    id: "oop-inheritance-polymorphism",
    title: "OOP — Inheritance & Polymorphism",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 20,
    content: [
      {
        type: "text", heading: "Inheritance",
        content: `Inheritance allows a child class to inherit all attributes and methods from a parent class. The child class gets everything the parent has for free, and can also add new features or override existing ones.

Use super() to call the parent class's __init__ or other methods from within the child class. This ensures the parent sets up its own attributes before the child adds more.

Method overriding happens when a child class redefines a method from the parent.`
      },
      {
        type: "syntax",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f'{self.name} makes a sound')

class Dog(Animal):   # Dog inherits Animal
    def speak(self): # Override parent method
        print(f'{self.name} says: Woof!')

class Cat(Animal):
    def speak(self):
        print(f'{self.name} says: Meow!')

d = Dog('Tommy')
c = Cat('Whiskers')
d.speak()    # Tommy says: Woof!
c.speak()    # Whiskers says: Meow!`,
        label: "Basic Inheritance"
      },
      {
        type: "syntax",
        code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print(f'{self.name}, Age: {self.age}')

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)  # call parent __init__
        self.student_id = student_id

    def info(self):
        super().info()               # call parent info()
        print(f'Student ID: {self.student_id}')

s = Student('Priya', 20, 'CS101')
s.info()
# Priya, Age: 20
# Student ID: CS101`,
        label: "Using super()"
      },
      {
        type: "text", heading: "Encapsulation",
        content: `Encapsulation is hiding the internal data of an object and allowing access only through defined methods. This protects data from accidental modification.

In Python:
• public attributes — accessible everywhere (name)
• Protected attributes — single underscore (_name) — convention says 'don't touch from outside'
• Private attributes — double underscore (__name) — Python applies name mangling, making direct outside access harder`
      },
      {
        type: "syntax",
        code: `class Person:
    def __init__(self, name, age, salary):
        self.name = name        # public
        self._age = age         # protected (convention)
        self.__salary = salary  # private (name mangled)

    def get_salary(self):       # controlled access
        return self.__salary

    def set_salary(self, amount):
        if amount > 0:
            self.__salary = amount

p = Person('Nisha', 25, 50000)
print(p.name)           # Nisha (public - OK)
print(p._age)           # 25 (works but not recommended)
print(p.get_salary())   # 50000 (via method - correct way)
# print(p.__salary)     # AttributeError!`,
        label: "Public, Protected & Private"
      },
      {
        type: "text", heading: "Polymorphism",
        content: `Polymorphism means 'many forms'. The same method name can behave differently in different classes. This lets you write generic code that works with objects of different types without knowing their exact class in advance.`
      },
      {
        type: "syntax",
        code: `class Shape:
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return 3.14 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w = w; self.h = h
    def area(self):
        return self.w * self.h

# Same call -> different behavior (polymorphism!)
shapes = [Circle(7), Rectangle(4, 6)]
for shape in shapes:
    print(f'{shape.__class__.__name__}: area = {shape.area():.2f}')
# Circle: area = 153.86
# Rectangle: area = 24.00`,
        label: "Polymorphism with Shapes"
      },
      {
        type: "text", heading: "Abstraction",
        content: `Abstraction hides complex details and shows only the essential features. Abstract classes (from the abc module) cannot be instantiated directly. Any class that inherits from an abstract class must implement all abstract methods.`
      },
      {
        type: "syntax",
        code: `from abc import ABC, abstractmethod

class Animal(ABC):     # Abstract class
    @abstractmethod
    def speak(self):   # Must be implemented by subclass
        pass

    def breathe(self): # Concrete method (shared)
        print('Breathing...')

class Dog(Animal):
    def speak(self):   # Must implement abstract method
        print('Woof!')

class Cat(Animal):
    def speak(self):
        print('Meow!')

# a = Animal()   # ERROR: cannot instantiate abstract class
d = Dog()
d.speak()        # Woof!
d.breathe()      # Breathing...`,
        label: "Abstract Class Example"
      },
    ],
    quiz: [
      { question: "What does inheritance allow?", options: ["Delete parent class", "Child class reuse parent attributes/methods", "Make class private", "Create multiple objects"], answer: 1 },
      { question: "super() is used to:", options: ["Delete parent", "Call parent class methods", "Create new object", "Override method"], answer: 1 },
      { question: "Method overriding means:", options: ["Deleting a method", "Child class redefines parent's method", "Using super()", "Making method private"], answer: 1 },
      { question: "Private attribute uses:", options: ["one underscore _name", "double underscore __name", "hash #name", "at sign @name"], answer: 1 },
      { question: "Polymorphism means:", options: ["Many classes", "One method, different behavior in different classes", "Multiple inheritance", "Private methods"], answer: 1 },
      { question: "Abstract class from abc module:", options: ["Can be instantiated", "Cannot be instantiated directly", "Has no methods", "Works only in Python 2"], answer: 1 },
    ],
  },

  // ── Chapter 21 — Big O Notation & Searching ──
  {
    id: "big-o-searching",
    title: "Big O Notation & Searching",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 21,
    content: [
      {
        type: "text", heading: "Big O Notation",
        content: `Big O Notation describes how an algorithm's runtime or memory usage grows as the input size (n) grows. It always describes the worst case. It helps you compare algorithms and choose the most efficient one.

Rules:
• Drop constants — O(2n) becomes O(n)
• Drop lower-order terms — O(n² + n) becomes O(n²)
• Only the fastest-growing term matters for large inputs`
      },
      {
        type: "table", heading: "Big O Complexity Comparison",
        content: `Notation | Name | Example | 1000 items
O(1) | Constant | Array access, dict lookup | 1 op
O(log n) | Logarithmic | Binary search | ~10 ops
O(n) | Linear | Loop through list | 1,000 ops
O(n log n) | Linearithmic | Merge sort, heap sort | ~10,000 ops
O(n²) | Quadratic | Nested loops, bubble sort | 1,000,000 ops
O(2ⁿ) | Exponential | Recursive subsets | HUGE
O(n!) | Factorial | Permutations brute force | IMPOSSIBLE`
      },
      {
        type: "text", heading: "Linear Search — O(n)",
        content: `Linear Search checks each element one by one from start to end. Works on any array (sorted or unsorted).

Time complexity: O(n) — worst case, you check every element.

Best case: O(1) — if element is at the first position.
Worst case: O(n) — if element is at the end or not present.`
      },
      {
        type: "syntax",
        code: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i    # found at index i
    return -1           # not found

nums = [40, 15, 70, 29, 13, 85, 10]
print(linear_search(nums, 29))   # 3
print(linear_search(nums, 99))   # -1`,
        label: "Linear Search — O(n)"
      },
      {
        type: "text", heading: "Binary Search — O(log n)",
        content: `Binary Search works only on SORTED arrays. It repeatedly divides the search space in half — compare with the middle element, then search left or right half.

Time complexity: O(log n) — extremely fast for large arrays.

Example with 1000 elements: Linear needs up to 1000 comparisons, Binary needs only 10!`
      },
      {
        type: "syntax",
        code: `def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid          # found!
        elif arr[mid] < target:
            low = mid + 1       # search right half
        else:
            high = mid - 1      # search left half

    return -1   # not found

# Array MUST be sorted!
sorted_nums = [2, 8, 15, 23, 38, 56, 72, 91]
print(binary_search(sorted_nums, 23))  # 3
print(binary_search(sorted_nums, 50))  # -1`,
        label: "Binary Search — O(log n)"
      },
      {
        type: "tip",
        content: "Binary search is only possible on SORTED data. If data is unsorted and you search once, use linear search. If you need to search many times, sort first then use binary search — it's worth it!"
      },
    ],
    quiz: [
      { question: "What does Big O notation measure?", options: ["Code length", "Memory used", "How runtime grows with input size", "Number of functions"], answer: 2 },
      { question: "O(1) means:", options: ["One loop", "Constant time — doesn't depend on input size", "Very slow", "One function call"], answer: 1 },
      { question: "Linear search time complexity:", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 2 },
      { question: "Binary search requires:", options: ["Linked list", "Unsorted array", "Sorted array", "Dictionary"], answer: 2 },
      { question: "Binary search time complexity:", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 1 },
      { question: "O(2n) simplifies to:", options: ["O(2)", "O(n)", "O(n²)", "O(log n)"], answer: 1 },
      { question: "Which is faster for large sorted arrays?", options: ["Linear search", "Binary search", "Both same", "Depends on language"], answer: 1 },
    ],
  },

  // ── Chapter 22 — Sorting Algorithms ──
  {
    id: "sorting-algorithms",
    title: "Sorting Algorithms",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 22,
    content: [
      {
        type: "text", heading: "Why Learn Sorting?",
        content: `Sorting is one of the most fundamental operations in computer science. Sorted data enables binary search, makes data easier to read, and is required for many algorithms.

Python has built-in sort (list.sort() and sorted()) which uses Timsort — O(n log n). But understanding sorting algorithms teaches you algorithmic thinking.

We'll cover 3 classic algorithms:
• Bubble Sort — O(n²) — simplest, but slowest
• Merge Sort — O(n log n) — always efficient
• Quick Sort — O(n log n) avg — usually fastest in practice`
      },
      {
        type: "text", heading: "Bubble Sort — O(n²)",
        content: `Bubble Sort repeatedly compares adjacent elements and swaps them if in wrong order. The largest element "bubbles up" to the end after each pass.

Simplest to understand but slowest: O(n²). Only use for teaching — never in real code with large data.`
      },
      {
        type: "syntax",
        code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]  # swap
    return arr

nums = [64, 25, 12, 22, 11]
print(bubble_sort(nums))   # [11, 12, 22, 25, 64]`,
        label: "Bubble Sort — O(n²)"
      },
      {
        type: "text", heading: "Merge Sort — O(n log n)",
        content: `Merge Sort divides the array in half, recursively sorts each half, then merges the sorted halves back together.

Guaranteed O(n log n) — always efficient regardless of input order. Uses extra memory for the temporary arrays.`
      },
      {
        type: "syntax",
        code: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr      # base case

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

nums = [38, 27, 43, 3, 9, 82]
print(merge_sort(nums))    # [3, 9, 27, 38, 43, 82]`,
        label: "Merge Sort — O(n log n)"
      },
      {
        type: "text", heading: "Quick Sort — O(n log n) average",
        content: `Quick Sort picks a pivot element, puts smaller elements left and larger elements right, then recursively sorts each side.

Average O(n log n), usually fastest in practice. Worst case O(n²) if bad pivot chosen (sorted data with first element as pivot).`
      },
      {
        type: "syntax",
        code: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]   # choose middle as pivot
    left   = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right  = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

nums = [3, 6, 8, 10, 1, 2, 1]
print(quick_sort(nums))   # [1, 1, 2, 3, 6, 8, 10]`,
        label: "Quick Sort — O(n log n) avg"
      },
      {
        type: "table", heading: "Sorting Algorithms Comparison",
        content: `Algorithm | Best | Average | Worst | Space | Stable
Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes
Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes
Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No
Python sort() | O(n) | O(n log n) | O(n log n) | O(n) | Yes`
      },
    ],
    quiz: [
      { question: "Bubble Sort time complexity:", options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], answer: 2 },
      { question: "Merge Sort always guarantees:", options: ["O(n²)", "O(n)", "O(n log n)", "O(log n)"], answer: 2 },
      { question: "Quick Sort worst case occurs when:", options: ["All elements are equal", "Data is already sorted with bad pivot", "Array is empty", "Array has one element"], answer: 1 },
      { question: "Which sort divides array in half and merges?", options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Selection Sort"], answer: 2 },
      { question: "Python's built-in sort uses:", options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Timsort (hybrid)"], answer: 3 },
      { question: "Bubble Sort swaps:", options: ["Alternating elements", "First and last", "Adjacent elements if wrong order", "Random pairs"], answer: 2 },
    ],
  },

  // ── Chapter 23 — Linked Lists, Stacks & Queues ──
  {
    id: "linked-lists-stacks-queues",
    title: "Linked Lists, Stacks & Queues",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 23,
    content: [
      {
        type: "text", heading: "Linked Lists",
        content: `A Linked List is a linear data structure where each element (called a node) stores data and a pointer to the next node. Nodes can be anywhere in memory — they don't need to be stored consecutively like arrays.

Advantage: O(1) insertion/deletion at head — no shifting needed.
Disadvantage: O(n) random access — must traverse from head to find any element.

Types: Singly (one next pointer), Doubly (next + prev), Circular (tail points to head).`
      },
      {
        type: "syntax",
        code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None   # pointer to next node

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):    # Add at end — O(n)
        new = Node(data)
        if not self.head:
            self.head = new; return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = new

    def prepend(self, data):   # Add at front — O(1)
        new = Node(data)
        new.next = self.head
        self.head = new

    def delete(self, data):    # Delete by value — O(n)
        if not self.head: return
        if self.head.data == data:
            self.head = self.head.next; return
        curr = self.head
        while curr.next:
            if curr.next.data == data:
                curr.next = curr.next.next; return
            curr = curr.next

    def display(self):
        curr, parts = self.head, []
        while curr:
            parts.append(str(curr.data))
            curr = curr.next
        print(' -> '.join(parts) + ' -> NULL')

ll = LinkedList()
ll.append(20); ll.append(30)
ll.prepend(10)
ll.display()    # 10 -> 20 -> 30 -> NULL
ll.delete(20)
ll.display()    # 10 -> 30 -> NULL`,
        label: "Singly Linked List"
      },
      {
        type: "text", heading: "Stacks — LIFO",
        content: `A Stack is a linear data structure that follows LIFO — Last In, First Out. Think of a stack of plates: you add to the top (push) and remove from the top (pop). You can only see the top item (peek).

Operations:
• push — add to top O(1)
• pop — remove from top O(1)
• peek — view top without removing O(1)

Real uses: undo/redo, browser back button, function call stack, balanced brackets.`
      },
      {
        type: "syntax",
        code: `stack = []

# Push (add to top)
stack.append(10)
stack.append(20)
stack.append(30)
print(stack)      # [10, 20, 30]

# Peek (view top)
print(stack[-1])  # 30 (top item)

# Pop (remove from top)
print(stack.pop()) # 30
print(stack.pop()) # 20
print(stack)       # [10]

# Check if empty
print(len(stack) == 0)  # False`,
        label: "Stack Using a List"
      },
      {
        type: "example",
        code: `# Stack Application: Check Balanced Brackets
def is_balanced(expr):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for ch in expr:
        if ch in '([{':
            stack.append(ch)    # push opening bracket
        elif ch in ')]}':
            if not stack or stack[-1] != pairs[ch]:
                return False    # mismatch!
            stack.pop()
    return len(stack) == 0      # empty = balanced

print(is_balanced('({[]})'))    # True
print(is_balanced('([)]'))      # False
print(is_balanced('{()}'))      # True`,
        output: `True
False
True`,
        label: "Balanced Brackets Checker"
      },
      {
        type: "text", heading: "Queues — FIFO",
        content: `A Queue is a linear data structure that follows FIFO — First In, First Out. Like a queue at a ticket counter: first person in is first served. You add at the rear (enqueue) and remove from the front (dequeue).

Use Python's collections.deque for O(1) operations on both ends (a regular list has O(n) for front removal).

Real uses: printer queue, BFS traversal, CPU scheduling, keyboard buffer.`
      },
      {
        type: "syntax",
        code: `from collections import deque

queue = deque()

# Enqueue (add to rear)
queue.append('Ali')
queue.append('Riya')
queue.append('Sam')
print(queue)    # deque(['Ali', 'Riya', 'Sam'])

# Dequeue (remove from front) — O(1)
served = queue.popleft()
print(f'{served} served!')  # Ali served!

# Front of queue
print(queue[0])    # Riya
print(len(queue))  # 2`,
        label: "Queue Using collections.deque"
      },
    ],
    quiz: [
      { question: "In a Linked List, each node contains:", options: ["Only data", "Only pointer", "Data and pointer to next node", "Data and index"], answer: 2 },
      { question: "Stack follows:", options: ["FIFO", "LIFO", "Random order", "Sorted order"], answer: 1 },
      { question: "Queue follows:", options: ["LIFO", "FIFO", "Random order", "Sorted order"], answer: 1 },
      { question: "Which Python structure is best for Queue (O(1) both ends)?", options: ["list", "tuple", "collections.deque", "dict"], answer: 2 },
      { question: "Linked List advantage over array:", options: ["Faster random access", "O(1) insertion/deletion at head", "Less memory", "Supports indexing"], answer: 1 },
      { question: "Real-world use of Stack:", options: ["Printer queue", "CPU scheduling", "Browser back button / undo", "BFS traversal"], answer: 2 },
    ],
  },

  // ── Chapter 24 — Hashing & Trees ──
  {
    id: "hashing-trees",
    title: "Hashing & Trees",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 24,
    content: [
      {
        type: "text", heading: "Hashing & Hash Tables",
        content: `A hash table stores key-value pairs and provides O(1) average insert, delete, and lookup. It converts a key to an index using a hash function. Python's built-in dict and set are implemented using hash tables.

A collision occurs when two keys hash to the same index. Python resolves collisions using open addressing (probing).

Understanding hashing explains why dict lookups are so fast regardless of size!`
      },
      {
        type: "syntax",
        code: `# Python dict IS a hash table
phone_book = {}

# Insert — O(1)
phone_book['Alice'] = '9876543210'
phone_book['Bob']   = '8765432109'
phone_book['Carol'] = '7654321098'

# Lookup — O(1)
print(phone_book['Alice'])                  # 9876543210
print(phone_book.get('Dave', 'Not found'))  # Not found

# Delete — O(1)
del phone_book['Bob']
print('Bob' in phone_book)    # False`,
        label: "Hash Table Basics (using dict)"
      },
      {
        type: "example",
        code: `# Hashing — Two Sum Problem (Classic Interview)
# Find two numbers in array that add up to target
def two_sum(nums, target):
    seen = {}    # value -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:     # O(1) lookup!
            return [seen[complement], i]
        seen[num] = i
    return []

print(two_sum([2, 7, 11, 15], 9))   # [0, 1] (2+7=9)
print(two_sum([3, 2, 4], 6))        # [1, 2] (2+4=6)`,
        output: `[0, 1]
[1, 2]`,
        label: "Two Sum — Classic Interview Problem"
      },
      {
        type: "text", heading: "Trees & Binary Search Trees",
        content: `A tree is a hierarchical data structure. The top node is called the root. Nodes with no children are called leaves.

A Binary Search Tree (BST) adds an ordering rule: left child < parent < right child. This enables O(log n) search, insert, and delete in balanced trees.

Tree Traversals:
• Inorder (Left→Root→Right) — gives sorted output for BST
• Preorder (Root→Left→Right) — for copying a tree
• Postorder (Left→Right→Root) — for deleting a tree`
      },
      {
        type: "syntax",
        code: `class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, val):
        self.root = self._insert(self.root, val)

    def _insert(self, node, val):
        if not node: return Node(val)    # create new node
        if val < node.val:
            node.left = self._insert(node.left, val)
        elif val > node.val:
            node.right = self._insert(node.right, val)
        return node

    def inorder(self, node, res=None):
        if res is None: res = []
        if node:
            self.inorder(node.left, res)    # LEFT
            res.append(node.val)            # ROOT
            self.inorder(node.right, res)   # RIGHT
        return res

bst = BST()
for v in [50, 30, 70, 20, 40, 60, 80]:
    bst.insert(v)

print(bst.inorder(bst.root))
# [20, 30, 40, 50, 60, 70, 80] — SORTED!`,
        label: "Binary Search Tree"
      },
      {
        type: "tip",
        content: "Inorder traversal of a BST always gives elements in sorted (ascending) order! This is a key property used in many BST-based problems."
      },
    ],
    quiz: [
      { question: "What is the average time complexity for dict lookup?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], answer: 2 },
      { question: "Python dict is internally implemented as:", options: ["Linked List", "Array", "Hash Table", "Tree"], answer: 2 },
      { question: "BST ordering rule:", options: ["Left > Parent > Right", "Left < Parent < Right", "Random order", "Alphabetical"], answer: 1 },
      { question: "Inorder traversal of BST gives:", options: ["Random order", "Reverse sorted order", "Sorted ascending order", "Level-by-level order"], answer: 2 },
      { question: "Root of a tree is:", options: ["The bottom node", "Any leaf node", "The topmost node", "The largest node"], answer: 2 },
      { question: "What causes a hash collision?", options: ["Empty table", "Two keys mapping to same index", "Too many values", "Sorted data"], answer: 1 },
    ],
  },

  // ── Chapter 25 — Graphs & Dynamic Programming ──
  {
    id: "graphs-dynamic-programming",
    title: "Graphs & Dynamic Programming",
    level: 2, levelName: "Intermediate", levelIcon: "⚡",
    chapterNo: 25,
    content: [
      {
        type: "text", heading: "Graphs",
        content: `A graph is a collection of nodes (vertices) connected by edges. Graphs model real-world relationships: social networks, city maps, web links. Can be directed (edges have direction) or undirected.

Two main traversal algorithms:

BFS (Breadth-First Search) — explores all neighbors at the current level before going deeper. Uses a Queue. Finds shortest path in unweighted graphs.

DFS (Depth-First Search) — goes as deep as possible before backtracking. Uses a Stack (or recursion). Good for cycle detection, maze solving.`
      },
      {
        type: "syntax",
        code: `from collections import deque

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'], 'E': ['B'], 'F': ['C']
}

def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    order = []
    while queue:
        node = queue.popleft()   # take from front
        order.append(node)
        for nbr in graph[node]:
            if nbr not in visited:
                visited.add(nbr)
                queue.append(nbr)
    return order

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']`,
        label: "BFS — Breadth First Search"
      },
      {
        type: "syntax",
        code: `def dfs(graph, node, visited=None):
    if visited is None:
        visited = set()
    visited.add(node)
    result = [node]
    for neighbor in graph[node]:
        if neighbor not in visited:
            result += dfs(graph, neighbor, visited)
    return result

print(dfs(graph, 'A'))  # ['A', 'B', 'D', 'E', 'C', 'F']`,
        label: "DFS — Depth First Search (Recursive)"
      },
      {
        type: "text", heading: "Dynamic Programming",
        content: `Dynamic Programming (DP) solves problems by breaking them into overlapping subproblems, solving each subproblem only once, and storing the result to avoid recomputation. This transforms exponential solutions into polynomial ones.

Two approaches:
• Memoization (Top-Down): Start from the big problem, recurse down, cache results in a dictionary
• Tabulation (Bottom-Up): Start from smallest base cases, fill a table iteratively up to the answer

DP applies when a problem has:
• Optimal Substructure — optimal solution comes from optimal sub-solutions
• Overlapping Subproblems — same sub-problems are solved multiple times`
      },
      {
        type: "syntax",
        code: `# Fibonacci — Memoization (Top-Down)
# Naive recursion: O(2^n) — SLOW
# Memoization: O(n) — FAST

def fib_memo(n, cache={}):
    if n in cache:
        return cache[n]    # already computed!
    if n <= 1:
        return n
    cache[n] = fib_memo(n-1, cache) + fib_memo(n-2, cache)
    return cache[n]

print(fib_memo(10))    # 55 (fast!)
print(fib_memo(50))    # 12586269025 (instant!)

# Fibonacci — Tabulation (Bottom-Up)
def fib_tab(n):
    if n <= 1: return n
    dp = [0] * (n + 1)   # create table
    dp[1] = 1              # base cases
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]   # fill table
    return dp[n]

print(fib_tab(10))     # 55`,
        label: "Fibonacci — Memoization & Tabulation"
      },
      {
        type: "example",
        code: `# Coin Change — Minimum Coins (Classic DP)
# Find minimum coins needed to make 'amount'
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0    # 0 coins needed for amount 0
    for coin in coins:
        for x in range(coin, amount + 1):
            dp[x] = min(dp[x], dp[x - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

print(coin_change([1, 5, 6, 9], 11))   # 2 (5+6=11)
print(coin_change([2], 3))             # -1 (impossible)
print(coin_change([1, 2, 5], 11))      # 3 (5+5+1)`,
        output: `2
-1
3`,
        label: "Coin Change Problem"
      },
      {
        type: "tip",
        content: "Dynamic Programming vs Recursion: Plain recursion can be O(2ⁿ). Adding memoization (cache) converts it to O(n). Always check if a problem has overlapping subproblems before using DP!"
      },
    ],
    quiz: [
      { question: "BFS uses which data structure?", options: ["Stack", "Queue", "Heap", "Tree"], answer: 1 },
      { question: "DFS uses which data structure?", options: ["Queue", "Heap", "Stack or Recursion", "Array"], answer: 2 },
      { question: "BFS finds shortest path in:", options: ["Weighted graphs", "Unweighted graphs", "Directed graphs only", "All graph types"], answer: 1 },
      { question: "Memoization in DP means:", options: ["Using loops", "Caching results of subproblems", "Sorting first", "Using recursion only"], answer: 1 },
      { question: "Which two conditions make a problem suitable for DP?", options: ["Loops + functions", "Optimal substructure + overlapping subproblems", "Sorted data + binary search", "OOP + recursion"], answer: 1 },
      { question: "Fibonacci with memoization is:", options: ["O(2ⁿ)", "O(n²)", "O(n)", "O(log n)"], answer: 2 },
      { question: "Tabulation approach in DP:", options: ["Top-down with recursion", "Bottom-up filling a table iteratively", "Random order", "Uses memoization dictionary"], answer: 1 },
    ],
  },
];

// Helper functions
export const getChaptersByLevel = (level: 1 | 2) =>
  pythonChapters.filter((c) => c.level === level);

export const getChapterById = (id: string) =>
  pythonChapters.find((c) => c.id === id);

export const levels = [
  { level: 1 as const, name: "Beginner", icon: "👉", color: "blue", chapters: 8 },
  { level: 2 as const, name: "Intermediate", icon: "⚡", color: "yellow", chapters: 17 },
];