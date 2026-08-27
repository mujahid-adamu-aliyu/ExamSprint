// Java Fundamentals Quiz Bank
// 120 questions (c3-001 to c3-120)
// Code snippets are stored in a separate `code` field, matching the other course files.

const javaQuestions = [
  {
    "id": "c3-001",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What is the output of a Java compiler?",
    "options": [
      "Assembly code",
      "Source code",
      "Executable machine code",
      "Bytecode"
    ],
    "correctAnswer": "Bytecode",
    "explanation": "The slides state that the Java compiler produces bytecode, which is designed to be executed by the Java Virtual Machine (JVM)."
  },
  {
    "id": "c3-002",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which component of Java executes bytecode?",
    "options": [
      "Java Class",
      "Java Virtual Machine",
      "Java Compiler",
      "Java Scanner"
    ],
    "correctAnswer": "Java Virtual Machine",
    "explanation": "The Java Virtual Machine (JVM) is the Java run-time system that interprets bytecode."
  },
  {
    "id": "c3-003",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which keyword is used to declare a class in Java?",
    "options": [
      "class",
      "new",
      "method",
      "define"
    ],
    "correctAnswer": "class",
    "explanation": "The class keyword declares that a new class is being defined."
  },
  {
    "id": "c3-004",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which method begins execution of a Java application?",
    "options": [
      "main()",
      "execute()",
      "run()",
      "start()"
    ],
    "correctAnswer": "main()",
    "explanation": "The slides state that all Java applications begin execution by calling the main() method."
  },
  {
    "id": "c3-005",
    "type": "truefalse",
    "difficulty": "easy",
    "question": "Java is case sensitive.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "Java distinguishes between uppercase and lowercase letters, so identifiers such as Name and name are different."
  },
  {
    "id": "c3-006",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which symbol begins a single-line comment in Java?",
    "options": [
      "//",
      "#",
      "<!--",
      "/*"
    ],
    "correctAnswer": "//",
    "explanation": "The slides use // to introduce a single-line comment. Comments are ignored by the compiler."
  },
  {
    "id": "c3-007",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which statement correctly declares an integer variable named score?",
    "options": [
      "integer score;",
      "declare int score;",
      "int score;",
      "score int;"
    ],
    "correctAnswer": "int score;",
    "explanation": "The general variable declaration form is type var-name;, so an integer variable is declared with int."
  },
  {
    "id": "c3-008",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the value of y after this code executes?",
    "options": [
      "24",
      "5",
      "6",
      "12"
    ],
    "correctAnswer": "6",
    "explanation": "x contains 12, so integer division by 2 gives y the value 6.",
    "code": "int x = 12;\nint y = x / 2;"
  },
  {
    "id": "c3-009",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the result of the following code?",
    "options": [
      "10",
      "3",
      "1",
      "3.33"
    ],
    "correctAnswer": "3",
    "explanation": "Both operands are integers, so Java performs integer division and truncates the remainder.",
    "code": "System.out.println(10 / 3);"
  },
  {
    "id": "c3-010",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which operator produces the remainder of an integer division?",
    "options": [
      "-",
      "/",
      "%",
      "*"
    ],
    "correctAnswer": "%",
    "explanation": "The modulus operator (%) produces the remainder of a division."
  },
  {
    "id": "c3-011",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is printed by the following code?",
    "options": [
      "12",
      "3",
      "5",
      "2"
    ],
    "correctAnswer": "2",
    "explanation": "17 divided by 5 leaves a remainder of 2, so the modulus expression produces 2.",
    "code": "int a = 17;\nSystem.out.println(a % 5);"
  },
  {
    "id": "c3-012",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the value of y after this code executes?",
    "options": [
      "7",
      "6",
      "9",
      "8"
    ],
    "correctAnswer": "8",
    "explanation": "The prefix increment increases x before its value is used, so y receives 8.",
    "code": "int x = 7;\nint y = ++x;"
  },
  {
    "id": "c3-013",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the value of y after this code executes?",
    "options": [
      "8",
      "9",
      "7",
      "6"
    ],
    "correctAnswer": "7",
    "explanation": "The postfix increment uses x's current value first, so y receives 7 and x is then increased to 8.",
    "code": "int x = 7;\nint y = x++;"
  },
  {
    "id": "c3-014",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which operator is used for equality comparison in Java?",
    "options": [
      "===",
      "==",
      "!=",
      "="
    ],
    "correctAnswer": "==",
    "explanation": "The == operator tests whether two values are equal, while = is the assignment operator."
  },
  {
    "id": "c3-015",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which operator means 'not equal to'?",
    "options": [
      "!==",
      "!=",
      "not=",
      "<>"
    ],
    "correctAnswer": "!=",
    "explanation": "Java uses != to test whether two values are not equal."
  },
  {
    "id": "c3-016",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is printed by the following code?",
    "options": [
      "false",
      "true",
      "5",
      "9"
    ],
    "correctAnswer": "true",
    "explanation": "The relational expression 9 > 5 is true, and relational operators produce boolean results.",
    "code": "int x = 9;\nSystem.out.println(x > 5);"
  },
  {
    "id": "c3-017",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the result of the following expression?",
    "options": [
      "true",
      "10",
      "8",
      "false"
    ],
    "correctAnswer": "true",
    "explanation": "Both relational expressions are true, so the short-circuit AND expression is true.",
    "code": "(8 < 10) && (4 > 2)"
  },
  {
    "id": "c3-018",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What happens when the following code executes?",
    "options": [
      "It does nothing because the second operand is not evaluated",
      "It prints Yes",
      "It produces a divide-by-zero error",
      "It prints 0"
    ],
    "correctAnswer": "It does nothing because the second operand is not evaluated",
    "explanation": "Because d != 0 is false, && short-circuits and does not evaluate the second operand.",
    "code": "int n = 10;\nint d = 0;\nif (d != 0 && (n % d) == 0)\n    System.out.println(\"Yes\");"
  },
  {
    "id": "c3-019",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which operator represents short-circuit AND in Java?",
    "options": [
      "&&",
      "||",
      "|",
      "&"
    ],
    "correctAnswer": "&&",
    "explanation": "The slides identify && as short-circuit AND and & as the normal AND operator."
  },
  {
    "id": "c3-020",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which operator represents short-circuit OR?",
    "options": [
      "||",
      "&&",
      "&",
      "|"
    ],
    "correctAnswer": "||",
    "explanation": "Java uses || for short-circuit OR."
  },
  {
    "id": "c3-021",
    "type": "truefalse",
    "difficulty": "easy",
    "question": "The result of a relational operator in Java is a boolean value.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "Relational operators such as <, >, ==, and != produce true or false."
  },
  {
    "id": "c3-022",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What is a literal in Java?",
    "options": [
      "A method",
      "A class declaration",
      "A fixed value represented in human-readable form",
      "A variable name"
    ],
    "correctAnswer": "A fixed value represented in human-readable form",
    "explanation": "The slides define literals as fixed values represented in their human-readable form."
  },
  {
    "id": "c3-023",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What is the default type of an integer literal such as 12?",
    "options": [
      "int",
      "byte",
      "long",
      "short"
    ],
    "correctAnswer": "int",
    "explanation": "Integer literals are int by default. An l or L can be appended to specify a long literal."
  },
  {
    "id": "c3-024",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the type of the literal 10.19F?",
    "options": [
      "long",
      "float",
      "int",
      "double"
    ],
    "correctAnswer": "float",
    "explanation": "Floating-point literals are double by default, but adding F or f specifies a float literal."
  },
  {
    "id": "c3-025",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which quotation marks enclose a Java string literal?",
    "options": [
      "Curly braces",
      "Double quotes",
      "Square brackets",
      "Single quotes"
    ],
    "correctAnswer": "Double quotes",
    "explanation": "A Java string is a set of characters enclosed by double quotes."
  },
  {
    "id": "c3-026",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which escape sequence produces a new line?",
    "options": [
      "\\b",
      "\\n",
      "\\t",
      "\\r"
    ],
    "correctAnswer": "\\n",
    "explanation": "The slides identify \\n as the newline escape sequence."
  },
  {
    "id": "c3-027",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What does the following code display?",
    "options": [
      "A and B separated by a horizontal tab",
      "AB with no separation",
      "A\\tB literally",
      "A and B on separate lines"
    ],
    "correctAnswer": "A and B separated by a horizontal tab",
    "explanation": "The \\t escape sequence represents a horizontal tab.",
    "code": "System.out.println(\"A\\tB\");"
  },
  {
    "id": "c3-028",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which method displays output and then moves to a new line?",
    "options": [
      "display()",
      "output()",
      "print()",
      "println()"
    ],
    "correctAnswer": "println()",
    "explanation": "println() outputs its argument and generates a new line afterward."
  },
  {
    "id": "c3-029",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What is the main difference between print() and println()?",
    "options": [
      "println() cannot display variables",
      "println() accepts strings only",
      "print() accepts numbers only",
      "print() does not generate a new line"
    ],
    "correctAnswer": "print() does not generate a new line",
    "explanation": "The print method behaves like println except that it does not generate a new line."
  },
  {
    "id": "c3-030",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What does the following code print?",
    "options": [
      "Java on one line and CSC on another",
      "Java CSC on the same line",
      "JavaCSC on separate lines",
      "CSC Java"
    ],
    "correctAnswer": "Java CSC on the same line",
    "explanation": "print() leaves the cursor on the same line, so println() continues after \"Java \" and then moves to a new line.",
    "code": "System.out.print(\"Java \");\nSystem.out.println(\"CSC\");"
  },
  {
    "id": "c3-031",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which package contains the Scanner class used for simple keyboard input?",
    "options": [
      "java.scan",
      "java.util",
      "java.lang",
      "java.io"
    ],
    "correctAnswer": "java.util",
    "explanation": "The slides show import java.util.Scanner; to make the Scanner class available."
  },
  {
    "id": "c3-032",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which statement correctly creates a Scanner object for keyboard input?",
    "options": [
      "new Scanner = keyboard(System.in);",
      "Scanner(System.in) = keyboard;",
      "Scanner keyboard = new Scanner(System.in);",
      "Scanner keyboard = System.out;"
    ],
    "correctAnswer": "Scanner keyboard = new Scanner(System.in);",
    "explanation": "The slides use this form to create a Scanner object connected to System.in."
  },
  {
    "id": "c3-033",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which Scanner method reads an int value?",
    "options": [
      "nextInt()",
      "next()",
      "nextLine()",
      "readInt()"
    ],
    "correctAnswer": "nextInt()",
    "explanation": "nextInt() reads one int value typed at the keyboard."
  },
  {
    "id": "c3-034",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which Scanner method reads a double value?",
    "options": [
      "getDouble()",
      "readDouble()",
      "nextDecimal()",
      "nextDouble()"
    ],
    "correctAnswer": "nextDouble()",
    "explanation": "The slides identify nextDouble() as the method for reading a double value."
  },
  {
    "id": "c3-035",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Given the input \"red blue\", what are the values of word1 and word2 after this code?",
    "options": [
      "word1 = \"red blue\", word2 = \"\"",
      "word1 = \"blue\", word2 = \"red\"",
      "Both variables contain \"red blue\"",
      "word1 = \"red\", word2 = \"blue\""
    ],
    "correctAnswer": "word1 = \"red\", word2 = \"blue\"",
    "explanation": "next() reads one non-whitespace token at a time, so the two words are read separately.",
    "code": "String word1 = keyboard.next();\nString word2 = keyboard.next();"
  },
  {
    "id": "c3-036",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which Scanner method reads an entire line of keyboard input?",
    "options": [
      "nextLine()",
      "readLine()",
      "next()",
      "nextWord()"
    ],
    "correctAnswer": "nextLine()",
    "explanation": "nextLine() reads the entire line of keyboard input."
  },
  {
    "id": "c3-037",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What are the values of n, s1, and s2 after this input and code?\nInput: 2 followed by a new line, then \"Hello Java\".",
    "options": [
      "n=2, s1=\"Hello Java\", s2=\"\"",
      "n=0, s1=\"Hello\", s2=\"Java\"",
      "n=2, s1=\"\", s2=\"Hello Java\"",
      "n=2, s1=\"2\", s2=\"Hello Java\""
    ],
    "correctAnswer": "n=2, s1=\"\", s2=\"Hello Java\"",
    "explanation": "After nextInt(), the first nextLine() reads the remainder of that input line, which is empty before the newline. The second nextLine() reads the following line.",
    "code": "int n = keyboard.nextInt();\nString s1 = keyboard.nextLine();\nString s2 = keyboard.nextLine();"
  },
  {
    "id": "c3-038",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "The newline character read by nextLine() becomes part of the returned String.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "False",
    "explanation": "nextLine() reads the newline character but does not include it in the String value returned."
  },
  {
    "id": "c3-039",
    "type": "mcq",
    "difficulty": "hard",
    "question": "A Scanner has just executed nextInt(), and the user then needs to read the remaining text on the next line. What issue should the programmer be aware of?",
    "options": [
      "nextInt() deletes the Scanner object",
      "nextLine() cannot read spaces",
      "nextInt() changes all strings to integers",
      "nextLine() may first read the remainder of the current line"
    ],
    "correctAnswer": "nextLine() may first read the remainder of the current line",
    "explanation": "The slides explain that nextLine() reads from wherever the previous keyboard reading stopped, which can cause an empty first line after nextInt()."
  },
  {
    "id": "c3-040",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which Scanner method can be used to change the input delimiter?",
    "options": [
      "delimiter()",
      "changeDelimiter()",
      "useDelimiter()",
      "setDelimiter()"
    ],
    "correctAnswer": "useDelimiter()",
    "explanation": "The slides demonstrate changing the delimiter with the useDelimiter() method."
  },
  {
    "id": "c3-041",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which category of control statements includes if and switch?",
    "options": [
      "Input statements",
      "Iteration statements",
      "Jump statements",
      "Selection statements"
    ],
    "correctAnswer": "Selection statements",
    "explanation": "The slides classify if and switch as selection statements."
  },
  {
    "id": "c3-042",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What must the conditional expression controlling an if statement produce?",
    "options": [
      "A boolean result",
      "A String",
      "A char",
      "An int"
    ],
    "correctAnswer": "A boolean result",
    "explanation": "The condition of an if statement must produce a boolean result."
  },
  {
    "id": "c3-043",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is printed by the following code?",
    "options": [
      "Nothing",
      "High Low",
      "Low",
      "High"
    ],
    "correctAnswer": "High",
    "explanation": "Since 12 > 10 is true, the statement controlled by if is executed and the else statement is skipped.",
    "code": "int x = 12;\nif (x > 10)\n    System.out.println(\"High\");\nelse\n    System.out.println(\"Low\");"
  },
  {
    "id": "c3-044",
    "type": "mcq",
    "difficulty": "medium",
    "question": "In an if-else statement, can both the if statement and its else statement execute during the same evaluation?",
    "options": [
      "Only when nested",
      "Yes, always",
      "Yes, when the condition is true",
      "No, at no time will both execute"
    ],
    "correctAnswer": "No, at no time will both execute",
    "explanation": "The slides state that when the condition is true the if target executes; otherwise the else target executes, so both are not executed."
  },
  {
    "id": "c3-045",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which if does the first else belong to in the following code?",
    "options": [
      "The outer if",
      "Neither",
      "The inner if",
      "Both if statements"
    ],
    "correctAnswer": "The inner if",
    "explanation": "An else is associated with the nearest unmatched if. The slides use this nested-if structure to demonstrate the relationship.",
    "code": "if (x > 0) {\n    if (y > 0) result = 1;\n    else result = 2;\n} else result = 3;"
  },
  {
    "id": "c3-046",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "Fail",
      "Pass",
      "Pass Distinction",
      "Distinction"
    ],
    "correctAnswer": "Pass",
    "explanation": "The conditions in an if-else-if ladder are evaluated from the top downward. Once score >= 50 is true, the remaining conditions are bypassed.",
    "code": "int score = 75;\nif (score >= 50)\n    System.out.println(\"Pass\");\nelse if (score >= 70)\n    System.out.println(\"Distinction\");\nelse\n    System.out.println(\"Fail\");"
  },
  {
    "id": "c3-047",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What is the primary purpose of a switch statement according to the slides?",
    "options": [
      "To provide a multiway branch",
      "To repeat code",
      "To declare variables",
      "To read keyboard input"
    ],
    "correctAnswer": "To provide a multiway branch",
    "explanation": "A switch allows a program to select among several alternatives by testing an expression against case constants."
  },
  {
    "id": "c3-048",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "C",
      "B C",
      "A",
      "B"
    ],
    "correctAnswer": "B",
    "explanation": "The value 2 matches case 2, so B is printed and break ends that case's statement sequence.",
    "code": "int n = 2;\nswitch(n) {\n    case 1: System.out.println(\"A\"); break;\n    case 2: System.out.println(\"B\"); break;\n    default: System.out.println(\"C\");\n}"
  },
  {
    "id": "c3-049",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "A",
      "B",
      "ABC",
      "AB"
    ],
    "correctAnswer": "AB",
    "explanation": "Because case 1 has no break, execution continues into case 2 until the break is encountered.",
    "code": "int n = 1;\nswitch(n) {\n    case 1: System.out.print(\"A\");\n    case 2: System.out.print(\"B\"); break;\n    default: System.out.print(\"C\");\n}"
  },
  {
    "id": "c3-050",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "The default part of a switch statement is optional.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "True",
    "explanation": "The slides state that default is optional; if it is absent and no case matches, no action takes place."
  },
  {
    "id": "c3-051",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which of the following is a valid Java identifier?",
    "options": [
      "student-score",
      "studentScore",
      "2score",
      "class"
    ],
    "correctAnswer": "studentScore",
    "explanation": "studentScore is a valid identifier because it follows Java's naming rules and is not a reserved keyword."
  },
  {
    "id": "c3-052",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which Java data type is used to store a single character?",
    "options": [
      "char",
      "String",
      "byte",
      "character"
    ],
    "correctAnswer": "char",
    "explanation": "The char data type is used to represent a single character."
  },
  {
    "id": "c3-053",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which data type is specifically designed to store true or false values?",
    "options": [
      "bool",
      "bit",
      "boolean",
      "logical"
    ],
    "correctAnswer": "boolean",
    "explanation": "The boolean type represents one of two logical values: true or false."
  },
  {
    "id": "c3-054",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is printed by the following code?",
    "options": [
      "'A'",
      "A",
      "grade",
      "\"A\""
    ],
    "correctAnswer": "A",
    "explanation": "The char variable contains the character A, and println displays the character itself.",
    "code": "char grade = 'A';\nSystem.out.println(grade);"
  },
  {
    "id": "c3-055",
    "type": "truefalse",
    "difficulty": "easy",
    "question": "A char literal is enclosed in single quotation marks.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "Java uses single quotation marks for character literals, such as 'A'."
  },
  {
    "id": "c3-056",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What happens in the following code?",
    "options": [
      "It prints 0",
      "It prints an empty line",
      "It prints null",
      "The code cannot use x before it has been initialized"
    ],
    "correctAnswer": "The code cannot use x before it has been initialized",
    "explanation": "A local variable must be assigned a value before it is used.",
    "code": "int x;\nSystem.out.println(x);"
  },
  {
    "id": "c3-057",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the value of result in the following code?",
    "options": [
      "14",
      "24",
      "26",
      "50"
    ],
    "correctAnswer": "26",
    "explanation": "Multiplication is performed before addition, giving 6 * 4 + 2 = 26.",
    "code": "int a = 6;\nint b = 4;\nint result = a * b + 2;"
  },
  {
    "id": "c3-058",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is printed by the following code?",
    "options": [
      "14",
      "2",
      "4",
      "3"
    ],
    "correctAnswer": "2",
    "explanation": "20 divided by 6 leaves a remainder of 2.",
    "code": "int x = 20;\nint y = 6;\nSystem.out.println(x % y);"
  },
  {
    "id": "c3-059",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "2.0",
      "2",
      "2.50",
      "2.5"
    ],
    "correctAnswer": "2.0",
    "explanation": "Both a and b are integers, so a / b performs integer division and produces 2. That value is then assigned to a double, becoming 2.0.",
    "code": "int a = 5;\nint b = 2;\ndouble result = a / b;"
  },
  {
    "id": "c3-060",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "2.0",
      "2",
      "2.50",
      "2.5"
    ],
    "correctAnswer": "2.5",
    "explanation": "Because one operand is a double, the division is floating-point division, producing 2.5.",
    "code": "double result = 5 / 2.0;\nSystem.out.println(result);"
  },
  {
    "id": "c3-061",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which operator is used for assignment in Java?",
    "options": [
      "=",
      ":=",
      "!=",
      "=="
    ],
    "correctAnswer": "=",
    "explanation": "The assignment operator = assigns the value on its right to the variable on its left."
  },
  {
    "id": "c3-062",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the value of x after the following code?",
    "options": [
      "15",
      "10",
      "50",
      "5"
    ],
    "correctAnswer": "15",
    "explanation": "The compound assignment x += 5 is equivalent to adding 5 to the current value of x.",
    "code": "int x = 10;\nx += 5;"
  },
  {
    "id": "c3-063",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the value of x after the following code?",
    "options": [
      "3",
      "7",
      "30",
      "13"
    ],
    "correctAnswer": "30",
    "explanation": "The *= operator multiplies the current value by the value on the right.",
    "code": "int x = 10;\nx *= 3;"
  },
  {
    "id": "c3-064",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is printed by the following code?",
    "options": [
      "true",
      "false",
      "4",
      "x"
    ],
    "correctAnswer": "true",
    "explanation": "The expression checks whether x equals 4, which is true.",
    "code": "int x = 4;\nSystem.out.println(x == 4);"
  },
  {
    "id": "c3-065",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is printed by the following code?",
    "options": [
      "true",
      "1",
      "4",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "x is equal to 4, so the condition x != 4 is false.",
    "code": "int x = 4;\nSystem.out.println(x != 4);"
  },
  {
    "id": "c3-066",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which operator means greater than or equal to?",
    "options": [
      ">=",
      ">>",
      "=>",
      "=<"
    ],
    "correctAnswer": ">=",
    "explanation": "The >= operator tests whether the left value is greater than or equal to the right value."
  },
  {
    "id": "c3-067",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which operator means less than or equal to?",
    "options": [
      "<<",
      "<=",
      "=<",
      "=<="
    ],
    "correctAnswer": "<=",
    "explanation": "The <= operator tests whether the left value is less than or equal to the right value."
  },
  {
    "id": "c3-068",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the result of the following expression?",
    "options": [
      "false",
      "10",
      "true",
      "7"
    ],
    "correctAnswer": "true",
    "explanation": "The first condition is true, so the OR expression is true.",
    "code": "(7 > 3) || (2 > 10)"
  },
  {
    "id": "c3-069",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the result of the following expression?",
    "options": [
      "5",
      "2",
      "false",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "Both conditions are false, so the OR expression evaluates to false.",
    "code": "(7 < 3) || (2 > 10)"
  },
  {
    "id": "c3-070",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the result of the following expression?",
    "options": [
      "8",
      "3",
      "true",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "8 > 3 is true, and the ! operator reverses the boolean result to false.",
    "code": "!(8 > 3)"
  },
  {
    "id": "c3-071",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "The logical NOT operator reverses a boolean value.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "The ! operator changes true to false and false to true."
  },
  {
    "id": "c3-072",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "10",
      "6",
      "11",
      "12"
    ],
    "correctAnswer": "11",
    "explanation": "The postfix increment first contributes 5 to the expression and then changes x to 6, so 5 + 6 equals 11.",
    "code": "int x = 5;\nSystem.out.println(x++ + x);"
  },
  {
    "id": "c3-073",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "6",
      "12",
      "11",
      "10"
    ],
    "correctAnswer": "12",
    "explanation": "The prefix increment changes x to 6 before its value is used, so the expression becomes 6 + 6.",
    "code": "int x = 5;\nSystem.out.println(++x + x);"
  },
  {
    "id": "c3-074",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which expression correctly checks whether age is between 18 and 30 inclusive?",
    "options": [
      "age > 18 && age < 30",
      "age >= 18 && age <= 30",
      "age >= 18 || age <= 30",
      "age > 18 || age < 30"
    ],
    "correctAnswer": "age >= 18 && age <= 30",
    "explanation": "Both boundaries must be satisfied, so the conditions are connected with && and include 18 and 30."
  },
  {
    "id": "c3-075",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which statement correctly converts an int value to a double variable through assignment?",
    "options": [
      "double d = 7;",
      "int d = 7.0;",
      "double d = '7';",
      "double d = \"7\";"
    ],
    "correctAnswer": "double d = 7;",
    "explanation": "An integer value can be assigned to a double variable because Java can represent the integer value as a double."
  },
  {
    "id": "c3-076",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which syntax explicitly casts a double value to an int?",
    "options": [
      "int x = double(4.8);",
      "int x = [int]4.8;",
      "int x = cast 4.8;",
      "int x = (int) 4.8;"
    ],
    "correctAnswer": "int x = (int) 4.8;",
    "explanation": "Java uses the target type in parentheses for an explicit cast."
  },
  {
    "id": "c3-077",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What value is stored in x in the following code?",
    "options": [
      "10",
      "9",
      "9.7",
      "0"
    ],
    "correctAnswer": "9",
    "explanation": "Casting the double value to int removes the fractional portion.",
    "code": "int x = (int) 9.7;"
  },
  {
    "id": "c3-078",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which primitive type is commonly used for decimal floating-point values with greater precision than float?",
    "options": [
      "char",
      "boolean",
      "double",
      "int"
    ],
    "correctAnswer": "double",
    "explanation": "The double type represents floating-point values and provides greater precision than float."
  },
  {
    "id": "c3-079",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which declaration correctly creates a String variable containing the word Java?",
    "options": [
      "String language = 'Java';",
      "String language = \"Java\";",
      "String language = Java;",
      "string language = Java;"
    ],
    "correctAnswer": "String language = \"Java\";",
    "explanation": "String values are enclosed in double quotation marks and String is written with a capital S."
  },
  {
    "id": "c3-080",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which method can be used to determine the length of a String?",
    "options": [
      "length()",
      "size()",
      "getLength()",
      "count()"
    ],
    "correctAnswer": "length()",
    "explanation": "The length() method returns the number of characters in a String."
  },
  {
    "id": "c3-081",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What does the following code print?",
    "options": [
      "7",
      "9",
      "8",
      "Computer"
    ],
    "correctAnswer": "8",
    "explanation": "The word Computer contains eight characters.",
    "code": "String word = \"Computer\";\nSystem.out.println(word.length());"
  },
  {
    "id": "c3-082",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What does the following code print?",
    "options": [
      "v",
      "Java",
      "J",
      "a"
    ],
    "correctAnswer": "a",
    "explanation": "String positions begin at index 0, so index 1 refers to the second character, a.",
    "code": "String word = \"Java\";\nSystem.out.println(word.charAt(1));"
  },
  {
    "id": "c3-083",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What does the following code print?",
    "options": [
      "y",
      "e",
      "S",
      "Security"
    ],
    "correctAnswer": "S",
    "explanation": "The first character of a String is at index 0.",
    "code": "String word = \"Security\";\nSystem.out.println(word.charAt(0));"
  },
  {
    "id": "c3-084",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "true",
      "Java",
      "false",
      "An error"
    ],
    "correctAnswer": "true",
    "explanation": "The equals() method compares the contents of the two String objects, and both contain Java.",
    "code": "String a = \"Java\";\nString b = \"Java\";\nSystem.out.println(a.equals(b));"
  },
  {
    "id": "c3-085",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which method can be used to convert a String to lowercase?",
    "options": [
      "convertLower()",
      "lower()",
      "toLowerCase()",
      "lowerCase()"
    ],
    "correctAnswer": "toLowerCase()",
    "explanation": "The String method toLowerCase() returns a lowercase version of the String."
  },
  {
    "id": "c3-086",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is printed by the following code?",
    "options": [
      "An error",
      "JAVA",
      "java",
      "Java"
    ],
    "correctAnswer": "java",
    "explanation": "The toLowerCase() method produces the lowercase form of the String.",
    "code": "String text = \"JAVA\";\nSystem.out.println(text.toLowerCase());"
  },
  {
    "id": "c3-087",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is printed by the following code?",
    "options": [
      "JAVA",
      "java",
      "Java",
      "An error"
    ],
    "correctAnswer": "JAVA",
    "explanation": "The toUpperCase() method converts the characters of the String to uppercase.",
    "code": "String text = \"java\";\nSystem.out.println(text.toUpperCase());"
  },
  {
    "id": "c3-088",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "A String can contain more than one character, while a char represents a single character.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "True",
    "explanation": "Java distinguishes between the char type for individual characters and String objects for sequences of characters."
  },
  {
    "id": "c3-089",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "wor",
      "Net",
      "Network",
      "Netw"
    ],
    "correctAnswer": "Net",
    "explanation": "The substring begins at index 0 and ends before index 3, producing the first three characters.",
    "code": "String text = \"Network\";\nSystem.out.println(text.substring(0, 3));"
  },
  {
    "id": "c3-090",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which control structure is most suitable when one expression must be compared against several constant alternatives?",
    "options": [
      "while",
      "switch",
      "for",
      "return"
    ],
    "correctAnswer": "switch",
    "explanation": "The slides describe switch as a multiway branch that tests an expression against a list of constants."
  },
  {
    "id": "c3-091",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which keyword terminates execution of a switch case sequence?",
    "options": [
      "stop",
      "break",
      "end",
      "exit"
    ],
    "correctAnswer": "break",
    "explanation": "A break statement ends the statement sequence associated with a case and exits the switch."
  },
  {
    "id": "c3-092",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What happens if no case constant matches the switch expression and there is no default?",
    "options": [
      "The first case executes",
      "The program automatically repeats the switch",
      "No action takes place",
      "The last case executes"
    ],
    "correctAnswer": "No action takes place",
    "explanation": "The slides state that default is optional and, without it, no action takes place when all matches fail."
  },
  {
    "id": "c3-093",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which of these is NOT allowed as the switch expression type according to the slides?",
    "options": [
      "char",
      "double",
      "int",
      "byte"
    ],
    "correctAnswer": "double",
    "explanation": "The slides specify char, byte, short, and int as allowed switch expression types and state that floating-point expressions are not allowed."
  },
  {
    "id": "c3-094",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "YZ",
      "X",
      "Y",
      "Z"
    ],
    "correctAnswer": "Y",
    "explanation": "The value 4 matches case 4, so Y is printed and break prevents further execution.",
    "code": "int choice = 4;\nswitch(choice) {\n    case 2: System.out.print(\"X\"); break;\n    case 4: System.out.print(\"Y\"); break;\n    default: System.out.print(\"Z\");\n}"
  },
  {
    "id": "c3-095",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "BCD",
      "BC",
      "B",
      "D"
    ],
    "correctAnswer": "BC",
    "explanation": "Choice 3 matches case 3, and because there is no break immediately after it, execution continues into case 4 until break.",
    "code": "int choice = 3;\nswitch(choice) {\n    case 1: System.out.print(\"A\");\n    case 3: System.out.print(\"B\");\n    case 4: System.out.print(\"C\"); break;\n    default: System.out.print(\"D\");\n}"
  },
  {
    "id": "c3-096",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "B",
      "A",
      "C",
      "D"
    ],
    "correctAnswer": "B",
    "explanation": "The first condition is false, but x > 10 is true. The ladder stops once that true condition is found.",
    "code": "int x = 15;\nif (x > 20)\n    System.out.println(\"A\");\nelse if (x > 10)\n    System.out.println(\"B\");\nelse if (x > 5)\n    System.out.println(\"C\");\nelse\n    System.out.println(\"D\");"
  },
  {
    "id": "c3-097",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "A",
      "Nothing",
      "C",
      "B"
    ],
    "correctAnswer": "B",
    "explanation": "The outer condition is true, so the inner if is evaluated. Since 4 > 5 is false, the inner else prints B.",
    "code": "int x = 4;\nif (x > 0) {\n    if (x > 5) System.out.println(\"A\");\n    else System.out.println(\"B\");\n} else System.out.println(\"C\");"
  },
  {
    "id": "c3-098",
    "type": "truefalse",
    "difficulty": "easy",
    "question": "The else clause of an if statement is optional.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "True",
    "explanation": "The slides explicitly state that the else clause is optional."
  },
  {
    "id": "c3-099",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which statement best describes an if-else-if ladder?",
    "options": [
      "It can contain only two conditions",
      "It evaluates conditions from top to bottom and stops at the first true condition",
      "It always executes every condition",
      "It is used only for loops"
    ],
    "correctAnswer": "It evaluates conditions from top to bottom and stops at the first true condition",
    "explanation": "The slides explain that conditions are evaluated from the top downward and that the remaining ladder is bypassed after a true condition is found."
  },
  {
    "id": "c3-100",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Which statement correctly describes the relationship between nested if statements and switch statements?",
    "options": [
      "Nested if statements and switch statements cannot produce alternative outcomes",
      "Nested if statements can never perform multiway tests",
      "A switch is only used for Boolean expressions",
      "A switch can provide a multiway branch and may be more efficient for many such situations"
    ],
    "correctAnswer": "A switch can provide a multiway branch and may be more efficient for many such situations",
    "explanation": "The slides state that nested if statements can perform multiway tests, but switch is often a more efficient approach for many situations."
  },
  {
    "id": "c3-101",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which of the following is a Java reserved keyword and cannot be used as an identifier?",
    "options": [
      "total",
      "value",
      "static",
      "amount"
    ],
    "correctAnswer": "static",
    "explanation": "static is a reserved keyword in Java used to declare class-level members, so it cannot be used as a variable name."
  },
  {
    "id": "c3-102",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which of these primitive types requires the most memory to store a single value?",
    "options": [
      "long",
      "byte",
      "int",
      "short"
    ],
    "correctAnswer": "long",
    "explanation": "Among these four integer types, long uses the most bits (64) and can hold the largest range of values."
  },
  {
    "id": "c3-103",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is printed by the following code?",
    "options": [
      "2",
      "10",
      "22",
      "-2"
    ],
    "correctAnswer": "2",
    "explanation": "Multiplication happens before subtraction, so a * 2 is 6, and 8 - 6 equals 2.",
    "code": "int a = 3;\nint b = 8;\nSystem.out.println(b - a * 2);"
  },
  {
    "id": "c3-104",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the value of x after the following code?",
    "options": [
      "6",
      "10",
      "16",
      "12"
    ],
    "correctAnswer": "6",
    "explanation": "First x -= 8 makes x equal 12, then x /= 2 divides that by 2, leaving 6.",
    "code": "int x = 20;\nx -= 8;\nx /= 2;"
  },
  {
    "id": "c3-105",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "8",
      "-1",
      "0",
      "1"
    ],
    "correctAnswer": "1",
    "explanation": "The postfix decrement contributes 8 to the expression first, then changes x to 7, so 8 - 7 equals 1.",
    "code": "int x = 8;\nSystem.out.println(x-- - x);"
  },
  {
    "id": "c3-106",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the result of the following expression?",
    "options": [
      "true",
      "false",
      "An error",
      "5"
    ],
    "correctAnswer": "false",
    "explanation": "5 == 5 is true, and the ! operator reverses it to false.",
    "code": "!(5 == 5)"
  },
  {
    "id": "c3-107",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the result of the following expression?",
    "options": [
      "10",
      "true",
      "3",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "The second condition, 3 > 6, is false, and && requires both conditions to be true, so the result is false.",
    "code": "(10 > 5) && (3 > 6)"
  },
  {
    "id": "c3-108",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which primitive type is best suited for storing very large whole numbers beyond the range of int?",
    "options": [
      "long",
      "boolean",
      "char",
      "float"
    ],
    "correctAnswer": "long",
    "explanation": "The long type provides a much larger range than int and is used for very large whole numbers."
  },
  {
    "id": "c3-109",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which declaration correctly creates a long literal with the value 5000000000?",
    "options": [
      "long n = 5000000000;",
      "Long n = 5000000000l;",
      "long n = 5000000000L;",
      "long n = L5000000000;"
    ],
    "correctAnswer": "long n = 5000000000L;",
    "explanation": "Integer literals are int by default, and 5000000000 exceeds int range, so the L suffix is required to make it a long literal."
  },
  {
    "id": "c3-110",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "7",
      "An error, this will not compile",
      "7.00",
      "7.0"
    ],
    "correctAnswer": "7.0",
    "explanation": "Assigning an int to a double performs automatic widening, and printing a double always shows a decimal point.",
    "code": "int a = 7;\ndouble b = a;\nSystem.out.println(b);"
  },
  {
    "id": "c3-111",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What escape sequence would you use inside a String literal to include an actual double quote character?",
    "options": [
      "\\\\",
      "\\\"",
      "\\'",
      "\\q"
    ],
    "correctAnswer": "\\\"",
    "explanation": "The escape sequence \\\" inserts a literal double-quote character inside a String without ending the String."
  },
  {
    "id": "c3-112",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What does the following code print?",
    "options": [
      "t",
      "D",
      "4",
      "a"
    ],
    "correctAnswer": "a",
    "explanation": "name.length() is 4, so index 3 is used, and the character at index 3 in \"Data\" is a.",
    "code": "String name = \"Data\";\nSystem.out.println(name.charAt(name.length() - 1));"
  },
  {
    "id": "c3-113",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "gram",
      "Prog",
      "ramm",
      "gramm"
    ],
    "correctAnswer": "gram",
    "explanation": "The substring starts at index 3 and stops before index 7, extracting the characters g, r, a, m.",
    "code": "String text = \"Programming\";\nSystem.out.println(text.substring(3, 7));"
  },
  {
    "id": "c3-114",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "In Java, comparing two String objects with == always checks whether their contents are equal.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "False",
    "explanation": "The == operator compares object references, not contents; equals() should be used to compare String contents."
  },
  {
    "id": "c3-115",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which Scanner method would you use to read a single word (token) without the rest of the line?",
    "options": [
      "nextLine()",
      "nextChar()",
      "next()",
      "nextInt()"
    ],
    "correctAnswer": "next()",
    "explanation": "next() reads the next whitespace-delimited token, unlike nextLine() which reads the whole line."
  },
  {
    "id": "c3-116",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is printed by the following code?",
    "options": [
      "Nothing",
      "Adult",
      "Child",
      "Teen"
    ],
    "correctAnswer": "Teen",
    "explanation": "age >= 18 is false, but age >= 13 is true, so Teen is printed and the ladder stops there.",
    "code": "int age = 16;\nif (age >= 18)\n    System.out.println(\"Adult\");\nelse if (age >= 13)\n    System.out.println(\"Teen\");\nelse\n    System.out.println(\"Child\");"
  },
  {
    "id": "c3-117",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "6",
      "Weekend",
      "An error",
      "Weekday"
    ],
    "correctAnswer": "Weekend",
    "explanation": "Grouping case 6 and case 7 together with no statements between them means both values fall through to the same output, Weekend.",
    "code": "int day = 6;\nswitch(day) {\n    case 6:\n    case 7: System.out.println(\"Weekend\"); break;\n    default: System.out.println(\"Weekday\");\n}"
  },
  {
    "id": "c3-118",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which data type would be most appropriate for a switch expression that tests a person's single-letter grade, such as 'A' or 'B'?",
    "options": [
      "double",
      "int",
      "boolean",
      "char"
    ],
    "correctAnswer": "char",
    "explanation": "char is allowed as a switch expression type and naturally represents single-letter grade values."
  },
  {
    "id": "c3-119",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is printed by the following code?",
    "options": [
      "An error occurs",
      "Nothing is printed",
      "X bigger",
      "Y bigger or equal"
    ],
    "correctAnswer": "Y bigger or equal",
    "explanation": "Both x and y are positive so the outer if runs; since x > y is false (5 is not greater than 10), the else branch prints Y bigger or equal.",
    "code": "int x = 5;\nint y = 10;\nif (x > 0 && y > 0) {\n    if (x > y) System.out.println(\"X bigger\");\n    else System.out.println(\"Y bigger or equal\");\n}"
  },
  {
    "id": "c3-120",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "A switch statement in Java can fall through from one case to the next if a break statement is omitted.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "True",
    "explanation": "Without a break, execution continues into the next case's statements, a behavior known as fall-through."
  }
];

// Browser-only global — no module.exports here since index.html loads this
// via a plain <script src="java.js"> tag, not as a Node/ESM module.
