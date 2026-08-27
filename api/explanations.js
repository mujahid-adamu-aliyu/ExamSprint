const detailedExplanations = {
  "c3-001": {
    detail: "A Java compiler (`javac`) doesn't produce machine code directly — it translates your `.java` source into **bytecode**, stored in a `.class` file. Bytecode is a platform-neutral intermediate format: it's not tied to any specific CPU or OS, which is exactly what makes Java \"write once, run anywhere.\" The JVM is the piece that later turns this bytecode into something the actual machine can run.",
    follow: "If asked why not just compile straight to machine code: emphasize portability — the same .class file runs on Windows, Linux, or macOS without recompiling, because each platform has its own JVM that knows how to read that bytecode."
  },
  "c3-002": {
    detail: "The **Java Virtual Machine (JVM)** is the runtime engine that actually executes bytecode. Think of the compiler and the JVM as two separate stages: `javac` turns your source into bytecode once, then the JVM reads and executes that bytecode every time you run the program — interpreting it line by line, or in modern JVMs, using JIT (Just-In-Time) compilation to turn hot code paths into real machine instructions on the fly for speed.",
    follow: "If pushed further on 'interprets vs compiles': modern JVMs do both — they interpret at first, then JIT-compile frequently-run methods into native code."
  },
  "c3-003": {
    detail: "`class` is the keyword that tells the compiler \"everything inside these braces defines a new class.\" It's not optional — every piece of Java code, even a single `main` method, has to live inside a class because Java is a purely object-oriented language; there's no such thing as a loose, standalone function.",
    follow: "If asked why Java forces this: it's a deliberate design choice for consistency — unlike C or Python, Java has no free-floating functions, so `class` is the mandatory container for everything."
  },
  "c3-004": {
    detail: "The JVM specifically looks for a method with this exact signature: `public static void main(String[] args)`. That's not a convention you can casually break — `public` so the JVM (outside the class) can call it, `static` so it can be called without creating an object first, and `void` since it doesn't return anything back to the JVM. Miss any part of that signature and Java won't recognize it as the entry point.",
    follow: "If asked what happens with multiple classes: only the class you tell the JVM to run (e.g. `java MyClass`) needs main() — other classes in the same program don't need one."
  },
  "c3-005": {
    detail: "Java treats `Name` and `name` as two completely different identifiers — same letters, different case, different variable. This trips people up coming from case-insensitive languages, but in Java, `int Score` and `int score` can coexist as two separate variables in the same scope. Keywords are affected too: `class` works, `Class` does not.",
    follow: "If asked for a real gotcha: `String` (the class) vs `string` (not a keyword at all) — capitalization matters everywhere, types included."
  },
  "c3-006": {
    detail: "`//` starts a **single-line comment** — everything from `//` to the end of that line is ignored by the compiler. It's different from `/* ... */`, which is a multi-line (block) comment that keeps ignoring text until it hits the closing `*/`, even across several lines. Comments exist purely for humans; they have zero effect on the compiled bytecode.",
    follow: "If asked about the difference: `//` auto-ends at the line break, `/* */` needs an explicit close and can span many lines — mixing them up (forgetting a closing `*/`) is a classic beginner bug that comments out way more code than intended."
  },
  "c3-007": {
    detail: "Java variable declarations follow the pattern `type variableName;` — type first, name second, semicolon to end the statement. So `int score;` reads as \"reserve a slot of type int, call it score.\" Options like `integer score;` fail because `integer` (capitalized or not) isn't a Java keyword — the primitive type is specifically `int`.",
    follow: "If asked about assigning a value at the same time: `int score = 0;` combines declaration and initialization in one line, which is extremely common in real code."
  },
  "c3-008": {
    detail: "`x` holds `12`, and `/` between two `int`s does **integer division** — Java throws away any fractional part rather than rounding. `12 / 2` is exactly `6` with no remainder, so this one's clean, but the important habit to build is: whenever both sides of `/` are `int`, expect truncation, not a decimal result.",
    follow: "If asked what happens with something that doesn't divide evenly, like `13 / 2`: Java gives `6`, not `6.5` — the `.5` is simply dropped, not rounded."
  },
  "c3-009": {
    detail: "`10 / 3` mathematically is `3.333...`, but since both `10` and `3` are `int` literals, Java performs **integer division**: it computes how many whole times `3` fits into `10` (three times) and discards the remainder entirely. The `.33` doesn't get rounded away — it's just never calculated in the first place, because the result type of `int / int` is always `int`.",
    follow: "If asked how to actually get `3.33...`: cast at least one operand to a floating type, e.g. `(double) 10 / 3`, which forces floating-point division."
  },
  "c3-010": {
    detail: "`%` is the **modulus (remainder) operator** — it gives you what's left over after division, not the quotient itself. So `a % b` answers \"if I divide a by b, what remains?\" It's distinct from `/`, which gives the quotient. The two are often used together: `/` for how many times something fits, `%` for the leftover.",
    follow: "If asked for a practical use case: `%` is the classic way to check even/odd (`n % 2 == 0`) or to wrap values around a range, like clock arithmetic."
  },
  "c3-011": {
    detail: "`a` is `17`. `17 % 5` asks \"what's left over after dividing 17 by 5?\" — 5 fits into 17 three times (making 15), leaving a remainder of `2`. That `2` is exactly what `%` returns and what gets printed; the `3` (how many times it fit) is what `/` would've given you instead.",
    follow: "If asked to double check by hand: 5×3=15, 17−15=2 — that subtraction is literally what modulus is computing under the hood."
  },
  "c3-012": {
    detail: "`++x` is **prefix increment**: it increases `x` from `7` to `8` *first*, and only then hands that new value of `8` off to be stored in `y`. So both `x` and `y` end up at `8`. The key distinction from postfix (`x++`) is timing — prefix updates before the value is used in the surrounding expression, postfix updates after.",
    follow: "If they ask to compare directly: contrast with `c3-013` below — same starting value, different result, purely because of prefix vs postfix ordering."
  },
  "c3-013": {
    detail: "`x++` is **postfix increment**: Java first grabs `x`'s current value (`7`) to use in the expression — that's what gets assigned to `y` — and only *after* that does it bump `x` up to `8`. So `y` ends up holding the *old* value, `7`, while `x` moves on to `8`. The increment still happens, just one beat later than with `++x`.",
    follow: "If asked why this matters in practice: it's a classic source of off-by-one bugs in loops like `arr[i++]` vs `arr[++i]` — the timing changes which index actually gets used."
  },
  "c3-014": {
    detail: "`==` is Java's **equality comparison** operator — it asks \"are these two values equal?\" and returns a `boolean`. It's easy to confuse with `=`, which is **assignment** — it *sets* a variable's value rather than comparing anything. `if (x = 5)` (single `=`) is actually a different operation entirely, and for `int`/`boolean` mismatches like this, Java's compiler will usually catch the mistake and refuse to compile.",
    follow: "If asked about Strings specifically: `==` on two String *objects* compares references (identity), not text content — that's a different trap covered elsewhere (use `.equals()` for content comparison)."
  },
  "c3-015": {
    detail: "`!=` reads as \"not equal to\" — it's the direct opposite of `==`. Where `==` returns `true` when both sides match, `!=` returns `true` precisely when they *don't* match. The `!` symbol in Java generally means logical negation, so you'll see the same pattern elsewhere too, like `!true` being `false`.",
    follow: "If asked about `!==` or `<>`: neither exists in Java — those are from JavaScript and SQL/older languages respectively, not valid Java syntax."
  },
  "c3-016": {
    detail: "`x` is `9`, and `x > 5` asks a yes/no question: \"is 9 greater than 5?\" Since it is, the expression evaluates to the `boolean` value `true` — not the number `9`, and not the number `5`. Relational operators (`>`, `<`, `>=`, `<=`) always produce a `boolean`, never a numeric result, even though they're comparing numbers.",
    follow: "If asked what println() does with a boolean: it just calls `.toString()` internally on the value, which for booleans prints the literal text \"true\" or \"false\"."
  },
  "c3-017": {
    detail: "This is two relational checks joined by `&&` (AND), and `&&` only returns `true` if **both** sides are `true`. `8 < 10` checks out (`true`), and `4 > 2` also checks out (`true`) — so with both halves true, the whole combined expression is `true`. If either side had been `false`, the AND would immediately make the whole thing `false`.",
    follow: "If asked what would flip it to false: changing either condition to something false, e.g. `(8 < 10) && (4 > 5)`, would make the whole expression false since AND needs both sides to hold."
  },
  "c3-018": {
    detail: "`d` is `0`. The condition checks `d != 0` **first** — and since `d` really is `0`, that's `false`. Here's the key mechanic: `&&` **short-circuits**, meaning if the left side is already `false`, Java doesn't even bother evaluating the right side, because the answer's already determined (false AND anything is always false). So `(n % d) == 0` — which would've caused a divide-by-zero crash — never actually runs. Nothing gets printed, and no error occurs, because that risky expression was skipped entirely.",
    follow: "If asked why this ordering matters: this is actually a defensive coding pattern — checking `d != 0` before dividing by `d` is intentional, to *prevent* a crash. If the checks were swapped, you'd get an ArithmeticException instead."
  },
  "c3-019": {
    detail: "`&&` is **short-circuit AND** — as soon as it hits a `false` on the left, it stops evaluating and skips the right side entirely, since the result can't change. This is different from the single-`&`, which is a *non-short-circuiting* logical AND — it evaluates both sides regardless, even if the first one is already false (mainly used for bitwise operations, not typical boolean logic).",
    follow: "If asked why short-circuiting matters: it protects against errors in the right-hand expression (like divide-by-zero, or calling a method on a null object) that would only be safe to run once the left side confirms it's OK."
  },
  "c3-020": {
    detail: "`||` is **short-circuit OR** — if the left side is already `true`, Java doesn't bother checking the right side, because \"true OR anything\" is always `true` regardless. It mirrors `&&`'s short-circuit behavior, just flipped: `&&` skips on a `false` left side, `||` skips on a `true` one.",
    follow: "If asked for a practical use: `if (obj == null || obj.isEmpty())` relies on this — if `obj` is null, the check short-circuits before `.isEmpty()` ever runs, avoiding a NullPointerException."
  },
  "c3-021": {
    detail: "Every relational operator — `<`, `>`, `<=`, `>=`, `==`, `!=` — always produces a `boolean` result: either `true` or `false`, nothing else. This is consistent regardless of what types you're comparing (numbers, characters, etc.) — the comparison itself is what produces the boolean, not the values being compared.",
    follow: "If asked to contrast with arithmetic operators: `+`, `-`, `*` etc. return a value of the same numeric type you fed in — relational operators are the ones that always collapse down to true/false."
  },
  "c3-022": {
    detail: "A **literal** is a value written directly into your code exactly as it should be used — no variable, no computation, just the raw value itself. `12`, `3.14`, `\"hello\"`, and `true` are all literals: what you see is exactly what Java uses. Contrast that with a variable name like `score`, which is just a label pointing at a value stored somewhere — the label itself isn't the value.",
    follow: "If asked for edge cases: literals come in different flavors — integer literals (`12`), floating-point literals (`3.14`), character literals (`'a'`), string literals (`\"hi\"`), and boolean literals (`true`/`false`) — each has its own default type."
  },
  "c3-023": {
    detail: "Write `12` with no suffix, and Java assumes you mean `int` — that's the default type for any whole-number literal. If you actually need a value bigger than `int` can hold (beyond roughly ±2.1 billion), you append `L` (or lowercase `l`, though `L` is preferred to avoid confusion with the digit `1`) to explicitly mark it as a `long` literal, like `5000000000L`.",
    follow: "If asked why the L matters: without it, a literal like `5000000000` (which exceeds int's range) won't even compile — the compiler evaluates the literal as `int` first, before assignment, and it overflows right there."
  },
  "c3-024": {
    detail: "Write a decimal number with no suffix, like `10.19`, and Java defaults it to `double`. Adding `F` (or `f`) explicitly marks it as a `float` instead — a smaller, less precise floating-point type. So `10.19F` is specifically telling the compiler \"treat this as a float, not the default double,\" which matters because assigning a double literal directly to a `float` variable without a cast would actually fail to compile.",
    follow: "If asked about precision: `float` uses 32 bits and roughly 6-7 significant decimal digits of precision; `double` uses 64 bits and about 15-16 — double is far more common in practice unless memory is tightly constrained."
  },
  "c3-025": {
    detail: "Java strings are always wrapped in **double quotes** (`\"like this\"`) — that's how the compiler recognizes \"this whole chunk is text.\" Single quotes are reserved for a totally different, smaller type: a single `char` literal, like `'a'`. Mixing them up — using single quotes around more than one character — is a compile error, not just a style issue.",
    follow: "If asked why the distinction exists: `char` is a primitive holding exactly one 16-bit character, while `String` is a full object that can hold any number of characters (including zero) — different types need different literal syntax."
  },
  "c3-026": {
    detail: "`\\n` is the **newline escape sequence** — inside a string, it tells Java \"insert a line break here,\" moving whatever comes after it down to a new line. It's different from `\\t` (tab), `\\b` (backspace), and `\\r` (carriage return) — each of those does something distinct with cursor/text positioning, but `\\n` specifically is what creates a new line.",
    follow: "If asked how it differs from println(): `println()` automatically appends a newline *after* everything it prints, while `\\n` lets you insert a line break *anywhere inside* a string, even in the middle."
  },
  "c3-027": {
    detail: "`\\t` inside the string is the **horizontal tab** escape sequence — it inserts a tab-width gap between whatever comes before and after it. So `\"A\\tB\"` prints as `A`, then a tab-sized space, then `B`, all on the same line — the `\\t` is interpreted as a real tab character, not printed literally as backslash-t.",
    follow: "If asked what makes it print literally as \\t instead: that only happens if the backslash itself is escaped, like `\\\\t` — a double backslash tells Java \"treat this as an actual backslash character,\" not the start of an escape sequence."
  },
  "c3-028": {
    detail: "`println()` does two things in sequence: it prints its argument to the console, *then* moves the cursor to a new line, so whatever gets printed next starts fresh underneath. That trailing newline is exactly what separates it from `print()`, which does the first part but skips the second — leaving the cursor right where the output ended.",
    follow: "If asked what println() with no arguments does: `System.out.println();` with empty parentheses just prints a blank line — useful for spacing output without printing any actual content."
  },
  "c3-029": {
    detail: "Both methods send output to the console the same way — the only real difference is what happens *after*. `println()` finishes by moving to a new line, so the next output starts underneath. `print()` does not — it leaves the cursor sitting right at the end of what it just printed, so whatever prints next continues on that same line.",
    follow: "If asked for a concrete side-by-side: `print(\"A\"); print(\"B\");` outputs `AB` on one line, while `println(\"A\"); println(\"B\");` outputs `A` and `B` on two separate lines."
  },
  "c3-030": {
    detail: "First, `print(\"Java \")` runs — it writes `Java ` (note the trailing space) to the console but leaves the cursor sitting right there on the same line, since `print()` never adds a newline. Then `println(\"CSC\")` runs next: it writes `CSC` immediately after, continuing on that same line — giving `Java CSC` together — and only *after* printing does it move to a new line for whatever comes next.",
    follow: "If asked what would change the output to two separate lines: swapping the first `print` for `println` would end that line early, pushing `CSC` down onto its own line instead."
  },
  "c3-031": {
    detail: "The `Scanner` class lives in **`java.util`**, so you need `import java.util.Scanner;` at the top of your file before you can use it. It's not in `java.lang` (the package that's auto-imported and holds core stuff like `String`, `Math`, `Object`) — Scanner is a utility class, hence `util`, and needs its explicit import statement.",
    follow: "If asked why some classes need importing and others don't: only `java.lang` is imported automatically by the compiler — everything else, including Scanner, ArrayList, and most others, needs an explicit `import` line."
  },
  "c3-032": {
    detail: "`Scanner keyboard = new Scanner(System.in);` breaks down into two halves: `Scanner keyboard` declares a variable of type Scanner, and `new Scanner(System.in)` actually **constructs** a new Scanner object, wired up to read from `System.in` (the keyboard input stream). The `new` keyword is what triggers object creation — you can't just write `Scanner(System.in)` on its own; every object needs `new` plus a matching constructor call.",
    follow: "If asked what System.in actually is: it's a built-in InputStream object representing standard input — the Scanner just wraps around it to add convenient methods like nextInt() and nextLine()."
  },
  "c3-033": {
    detail: "`nextInt()` specifically reads and parses the next token of input as an `int`. If the Scanner encounters non-numeric text where it expected a number, it throws an `InputMismatchException` rather than silently failing — Scanner methods are type-specific by design, matching Java's overall philosophy of strict typing.",
    follow: "If asked what happens on bad input, like typing letters when nextInt() is called: it throws InputMismatchException, and the bad token stays unconsumed in the buffer, so retrying naively can loop forever unless you clear it with something like keyboard.next()."
  },
  "c3-034": {
    detail: "`nextDouble()` reads the next token and parses it specifically as a `double`, following the same pattern as `nextInt()` but for decimal values. Each Scanner \"next___()\" method is paired to a specific type — there's `nextInt()`, `nextDouble()`, `nextBoolean()`, `nextLong()`, and so on — so you always call the one matching the type you expect to read.",
    follow: "If asked what happens with an int typed where nextDouble() is expected: it works fine — Java parses `\"5\"` as `5.0` without complaint, since a whole number is still valid double input."
  },
  "c3-035": {
    detail: "`next()` reads exactly **one whitespace-delimited token** at a time — it stops at the first space, tab, or newline it hits. Given the input `\"red blue\"`, the first `keyboard.next()` call reads up through the space and returns `\"red\"`, leaving `\"blue\"` still sitting in the input buffer. The second `keyboard.next()` call then picks up right where the first left off and reads `\"blue\"`. So `word1` and `word2` genuinely get separate words, not the whole string.",
    follow: "If asked how this differs from nextLine(): next() stops at whitespace and leaves the rest for the next read; nextLine() consumes everything up to and including the newline in one go, regardless of spaces inside it."
  },
  "c3-036": {
    detail: "`nextLine()` grabs the **entire rest of the current line**, spaces and all, up to (but not including) the newline character. Unlike `next()`, which stops at the first whitespace, `nextLine()` doesn't care about spaces mid-line — it reads everything until it hits Enter.",
    follow: "If asked when to prefer this over next(): use nextLine() when input might contain multiple words that should be treated as one value, like a full name (\"John Smith\")."
  },
  "c3-037": {
    detail: "This is the classic Scanner gotcha. `keyboard.nextInt()` reads `2`, but it only consumes the digit itself — the newline character right after `2` (from hitting Enter) is left sitting unread in the input buffer. So when `s1 = keyboard.nextLine()` runs next, it doesn't wait for new input — it immediately grabs whatever's left on that *same* line, which is just the leftover empty string before that dangling newline. Only then does `s2 = keyboard.nextLine()` actually move to the next full line and capture `\"Hello Java\"`. End result: `n=2`, `s1=\"\"` (empty, the leftover), `s2=\"Hello Java\"`.",
    follow: "If asked how to avoid this trap in real code: add an extra keyboard.nextLine() right after nextInt() specifically to consume that leftover newline before reading the next real line."
  },
  "c3-038": {
    detail: "`nextLine()` does consume the newline character as part of finding the end of the line — but it does **not** include that newline in the `String` it hands back to you. So if you type `\"Hello\"` and press Enter, the returned value is exactly `\"Hello\"` (5 characters), not `\"Hello\\n\"`. The newline is the boundary marker, not part of the payload.",
    follow: "If asked how to verify this: checking `s.length()` right after nextLine() will match the visible character count, with no extra +1 for a hidden newline."
  },
  "c3-039": {
    detail: "This is the same trap as `c3-037`, described generally: after `nextInt()` runs, it stops right after the digits and leaves the newline character from pressing Enter still sitting in the buffer, unconsumed. If you then call `nextLine()`, it doesn't wait for a fresh line of input — it immediately returns whatever's left on the current line, which is often just an empty string. This surprises a lot of people who expect `nextLine()` to always block for new input.",
    follow: "If asked for the standard fix: insert a throwaway keyboard.nextLine(); call right after nextInt() purely to consume and discard that leftover newline, before doing the real nextLine() read."
  },
  "c3-040": {
    detail: "`useDelimiter()` lets you change what Scanner treats as the separator between tokens — by default that's whitespace, but you can pass in a different pattern (even a regex), like `useDelimiter(\",\")` to split input on commas instead of spaces. This is handy for parsing structured input like CSV-style data directly through Scanner.",
    follow: "If asked for a concrete example: keyboard.useDelimiter(\",\") followed by next() calls would split \"red,blue,green\" into \"red\", \"blue\", \"green\" instead of treating the whole thing as one token."
  },
  "c3-041": {
    detail: "`if` and `switch` are grouped as **selection statements** — their whole job is to pick which block of code runs based on a condition, choosing one path among several possibilities. This is a distinct category from **iteration statements** (loops like `for`/`while`, which repeat code) and **jump statements** (`break`/`continue`/`return`, which alter control flow directly).",
    follow: "If asked to name examples in each category: selection = if/switch, iteration = for/while/do-while, jump = break/continue/return — three different jobs, three different tool categories."
  },
  "c3-042": {
    detail: "An `if` statement's condition must evaluate to a **`boolean`** — `true` or `false`, nothing else. This is stricter than languages like C or JavaScript, where numbers or other values can be \"truthy\"/\"falsy\" in a condition — Java refuses to compile `if (5)` because `5` is an `int`, not a `boolean`, full stop.",
    follow: "If asked how to fix a common mistake like `if (x = 5)`: that's assignment, not comparison — you'd need `if (x == 5)`, and for an int like this Java's compiler actually catches the error since the assignment's result type (int) can't be used where a boolean is required."
  },
  "c3-043": {
    detail: "`x` is `12`, so the condition `x > 10` checks out as `true`. When an `if`'s condition is true, Java runs the statement right after the `if` — here, printing `\"High\"` — and **skips the `else` branch entirely**. The two branches are mutually exclusive by design: exactly one of them runs, never both, never neither.",
    follow: "If asked what changes with x = 8 instead: the condition `x > 10` would be false, so the if-branch gets skipped and \"Low\" from the else-branch prints instead."
  },
  "c3-044": {
    detail: "In an `if`-`else` pair, exactly **one** branch runs, never both, no matter what the condition evaluates to. If the condition is `true`, only the `if`'s statement executes. If it's `false`, only the `else`'s statement executes. There's no scenario — nesting included — where both bodies of the *same* if-else pair run together; that would defeat the entire purpose of branching logic.",
    follow: "If asked about nested if-else confusing this: nesting just means an if-else lives *inside* another branch — each individual if-else pair still only runs one of its own two branches, they just might be at different depths."
  },
  "c3-045": {
    detail: "Java resolves ambiguous `else` attachment with a simple rule: **an `else` always pairs with the nearest, still-unmatched `if`** above it. In this code, there are two `if`s — the outer `if (x > 0)` and the inner `if (y > 0)`. The first `else` you hit (the one setting `result = 2`) is inside the same braces as the inner if, right next to it — so it belongs to the **inner if**, not the outer one. The outer if's own else is the second one, `result = 3`, which sits outside the braces entirely.",
    follow: "If asked how to avoid this ambiguity in real code: always use braces `{ }` around if/else bodies explicitly, even for single statements — it removes any guesswork about which if an else belongs to, for you and for anyone reading the code."
  },
  "c3-046": {
    detail: "`score` is `75`. Java checks if-else-if conditions **top to bottom** and stops at the first one that's true — it never re-checks or continues past that point. `score >= 50` is checked first, and since 75 is indeed ≥ 50, that's `true` immediately, so `\"Pass\"` prints and Java skips every remaining `else if`/`else` in the ladder — even though `score >= 70` (also technically true for 75) never even gets evaluated, because the ladder already committed to the first true branch.",
    follow: "If asked how to fix this to also catch Distinction properly: reorder the checks from most-specific to least-specific — check `score >= 70` (Distinction) before the more general `score >= 50` (Pass), so higher scores get correctly caught first."
  },
  "c3-047": {
    detail: "A `switch` statement is a **multiway branch** — instead of chaining several `if`/`else if` checks together, it tests one expression against a list of possible `case` values and jumps directly to whichever one matches. It's essentially a cleaner, often more readable alternative to a long if-else-if ladder, when you're comparing the same variable against many discrete possible values.",
    follow: "If asked when to prefer switch over if-else-if: switch shines when you're checking one value against many specific constants (like a menu choice or a day number) — if-else-if is better suited for ranges or more complex boolean conditions."
  },
  "c3-048": {
    detail: "`n` is `2`, so the switch expression jumps straight to `case 2:` — Java compares `n` against each case value in order until it finds a match, then executes from that point. That prints `\"B\"`, and then the `break` immediately after stops execution right there, preventing it from falling through into whatever comes next (`default`, in this case). Since `case 1` never matched, its `\"A\"` line never runs at all.",
    follow: "If asked what happens if the break after case 2 were removed: execution would 'fall through' into the default case too, printing \"B\" followed by \"C\" — that's the exact mechanic tested in the next question."
  },
  "c3-049": {
    detail: "`n` is `1`, matching `case 1:`, which prints `\"A\"` — but critically, **`case 1` has no `break`**. Without a `break`, Java doesn't stop there; it just keeps executing straight through into the next case's code, regardless of whether that case's own value matches `n`. So it \"falls through\" into `case 2`'s `print(\"B\")` as well, and *that* case does have a `break`, which finally stops execution. End result: both `\"A\"` and `\"B\"` print (as `\"AB\"`, since these use `print` not `println`), while `default`'s `\"C\"` never runs because the break in case 2 stopped things before reaching it.",
    follow: "If asked why fall-through exists at all rather than being a bug: it's an intentional feature — useful for grouping multiple case values that should share the same code, like `case 6: case 7: (shared code)` for a weekend check, seen elsewhere in this quiz bank."
  },
  "c3-050": {
    detail: "`default` in a switch statement is **optional** — you don't have to include it. If none of the `case` values match the switch expression and there's no `default` present, Java simply does nothing at all and moves on past the switch block. `default` exists purely as a catch-all fallback for handling values you didn't explicitly account for.",
    follow: "If asked whether default has to be last: no — Java allows default to appear anywhere in the switch block, though placing it last is by far the most common and readable convention."
  },
  "c3-051": {
    detail: "`studentScore` follows Java's identifier rules: it starts with a letter, contains only letters (no illegal symbols like hyphens), and isn't a reserved keyword. The others all break a rule — `student-score` has a hyphen, which Java would parse as subtraction, not a valid name character; `2score` starts with a digit, which is never allowed for identifiers; and `class` is a reserved keyword, so it can't be reused as a variable name no matter how it's capitalized.",
    follow: "If asked for the full identifier rules: must start with a letter, underscore, or dollar sign (never a digit), can contain letters/digits/underscores/dollar signs after that, and can't match any reserved keyword exactly."
  },
  "c3-052": {
    detail: "`char` is the primitive type built specifically to hold exactly **one** character, stored internally as a 16-bit Unicode value. It's distinct from `String`, which can hold zero or more characters as a full object — `char` is a lightweight primitive, `String` is a heavier reference type with lots of built-in methods (`.length()`, `.equals()`, etc.) that `char` simply doesn't have.",
    follow: "If asked what happens if you try to put multiple characters in a char, like `char c = 'ab';`: it fails to compile — a char literal must contain exactly one character between the single quotes."
  },
  "c3-053": {
    detail: "`boolean` is Java's dedicated type for representing exactly two possible values: `true` or `false` — nothing else fits, no `0`/`1` substitution like in some other languages. It's the return type of every comparison and logical expression (`==`, `>`, `&&`, etc.), and it's what an `if` statement's condition must ultimately evaluate to.",
    follow: "If asked whether 0 and 1 work as booleans in Java, unlike C: no — Java strictly separates boolean from numeric types; you can't assign an int to a boolean or vice versa, even 0 and 1, without an explicit (and nonstandard) conversion of your own."
  },
  "c3-054": {
    detail: "`grade` is a `char` holding the single character `A` (note: single quotes for the literal, since it's a char, not a String). When you `println()` a char, Java prints the actual character itself — just `A`, no surrounding quote marks, since quotes are only part of the *literal syntax* in source code, not part of the value being stored or displayed.",
    follow: "If asked why the options with quotes ('A' or \"A\") are wrong: those quote marks only exist in your source code to tell the compiler 'this is a char literal' — once the value is stored and printed, it's just the raw character A, with no quotes attached."
  },
  "c3-055": {
    detail: "A `char` literal is always written between **single** quotes, like `'A'` — that's how Java's compiler distinguishes a single-character `char` from a `String`, which uses **double** quotes instead (`\"A\"`). Mixing these up — like writing `char c = \"A\";` — is a compile-time type mismatch, since `\"A\"` with double quotes is actually treated as a String literal, not a char.",
    follow: "If asked what happens with empty single quotes like '': that's a compile error too — a char literal must contain exactly one character, not zero."
  },
  "c3-056": {
    detail: "`int x;` declares the variable but never gives it a value — for **local variables** (ones declared inside a method), Java refuses to let you read from it before it's explicitly assigned something. This is a compile-time error, not a runtime crash: the compiler statically tracks whether a local variable has definitely been assigned before each use, and blocks the code from compiling at all if it hasn't.",
    follow: "If asked why this differs from instance/class fields: fields (variables belonging to an object or class) *do* get automatic default values (0 for int, null for objects, false for boolean) — it's specifically local variables inside methods that require explicit initialization before use."
  },
  "c3-057": {
    detail: "`a` is `6`, `b` is `4`. Java respects standard **operator precedence** — multiplication happens before addition, just like in regular math, regardless of the order they're written left to right. So `a * b + 2` computes `a * b` first (`6 * 4 = 24`), then adds `2` to that result, giving `26`. It's not evaluated strictly left-to-right ignoring precedence; `*` always binds tighter than `+`.",
    follow: "If asked how to force addition first instead: wrap it in parentheses, like `a * (b + 2)`, which would give `6 * 6 = 36` — parentheses always override default precedence."
  },
  "c3-058": {
    detail: "`x` is `20`, `y` is `6`. `x % y` asks for the remainder after dividing 20 by 6 — 6 fits into 20 three times (making 18), leaving `2` left over. That leftover `2` is exactly what `%` returns and what gets printed, distinct from what `/` would give (which would be `3`, the quotient).",
    follow: "If asked to double-check by hand: 6×3=18, 20−18=2 — same subtraction logic as any other modulus calculation."
  },
  "c3-059": {
    detail: "`a` is `5`, `b` is `2`, both declared as `int`. The critical thing is that `a / b` is evaluated **first, entirely in int arithmetic**, before the result ever touches the `double` variable it's being assigned to — Java doesn't know or care that the destination is a double while it's computing the division itself. `5 / 2` as integer division truncates to `2` (dropping the `.5`). Only *after* that truncated `int` value of `2` is computed does the assignment to `double result` happen, which widens it to `2.0` — but the precision was already lost before that conversion ever occurred.",
    follow: "If asked how to actually get 2.5: you'd need to force floating-point division before the assignment, e.g. `double result = (double) a / b;` — casting at least one operand to double changes how the division itself is performed, not just how the result is stored."
  },
  "c3-060": {
    detail: "This is the flip side of c3-059. Here, `5 / 2.0` has one operand that's already a `double` literal (`2.0`), so Java performs **floating-point division from the start** — the `int` value `5` gets automatically widened to `5.0` first, then divided by `2.0`, giving the full precise result of `2.5`, no truncation involved. The key difference from c3-059 is that this time a double is present *before* the division happens, not just at the assignment step afterward.",
    follow: "If asked to contrast directly with c3-059: `a / b` where both are int truncates first (losing the .5) and only becomes a double after; `5 / 2.0` involves a double from the very first step, so the division itself preserves the fractional part."
  },
  "c3-061": {
    detail: "`=` is Java's **assignment** operator — it takes whatever is on the right side and stores it into the variable on the left, like `x = 5`. It's completely different in job from `==`, which *compares* two values instead of storing one — a distinction that's easy to blur if you're coming from math notation, where `=` usually means equality.",
    follow: "If asked about the pattern language `:=` for assignment: that's from languages like Pascal or Go — Java sticks with plain `=` for assignment and `==` for comparison, no separate symbol."
  },
  "c3-062": {
    detail: "`x` starts at `10`. `x += 5` is Java's **compound assignment** shorthand — it's exactly equivalent to writing `x = x + 5`, just more compact. So it takes the current value of `x` (`10`), adds `5` to it, and stores that new total (`15`) right back into `x`. Compound operators exist for all the basic arithmetic ops: `+=`, `-=`, `*=`, `/=`, `%=`.",
    follow: "If asked why use += instead of the long form: it's purely convenience and readability — both produce identical bytecode, but += is the idiomatic way experienced Java programmers write 'update this variable based on itself.'"
  },
  "c3-063": {
    detail: "`x` starts at `10`. `x *= 3` expands out to `x = x * 3` — take the current value, multiply it by `3`, and store the result back into `x`. `10 * 3` is `30`, so that's what `x` ends up holding. Same compound-assignment pattern as `+=`, just with multiplication instead of addition.",
    follow: "If asked to combine multiple compound ops in sequence: they apply one after another using whatever the *current* value is at that point — e.g. `x *= 3; x += 1;` would first make x=30, then bump it to 31."
  },
  "c3-064": {
    detail: "`x` is `4`, and `x == 4` asks a direct comparison question: \"does x currently equal 4?\" Since it genuinely does, the expression evaluates to the boolean `true`. This is a straightforward equality check — no tricks here, just confirming `==` returns a boolean, and `println` displays that boolean as the literal text `true`.",
    follow: "If asked what would print if x were 5 instead: `x == 4` would evaluate to false, and \"false\" would print instead."
  },
  "c3-065": {
    detail: "`x` is `4`, and `!=` means \"not equal to\" — it returns `true` only when the two sides genuinely differ. Since `x` really does equal `4`, the statement \"x is not 4\" is factually false, so `x != 4` evaluates to `false`. It's the direct logical opposite of `==` on the same values: if `x == 4` is true, `x != 4` on those same values must be false, and vice versa.",
    follow: "If asked to combine this with c3-064: the two expressions are complementary — on the exact same x and value, exactly one of `==` and `!=` will be true, never both, never neither."
  },
  "c3-066": {
    detail: "`>=` reads as \"greater than or equal to\" — it returns `true` if the left side is either strictly bigger than the right, *or* if they're exactly equal. It's the combination of two separate checks (`>` and `==`) bundled into one operator, which is why it's especially useful for range checks like \"age >= 18\" where you want to include the boundary value itself.",
    follow: "If asked about the difference from plain >: `>` alone would exclude the exact boundary value — `x >= 18` includes 18 itself as valid, `x > 18` would not."
  },
  "c3-067": {
    detail: "`<=` reads as \"less than or equal to\" — true if the left side is smaller than the right, or if the two are exactly equal. It mirrors `>=` but in the opposite direction, and like `>=`, it's the operator you reach for whenever a boundary value itself should count as valid, not just values strictly beyond it.",
    follow: "If asked why not `=<` instead: Java (like most C-family languages) always puts the comparison symbol first and the equals sign second — `<=` and `>=` are the only valid orderings, `=<` and `=>` aren't recognized syntax."
  },
  "c3-068": {
    detail: "This is two checks joined by `||` (OR), and `||` only needs **one** side to be true for the whole thing to be true. `7 > 3` checks out (`true`) — and because of how `||` short-circuits, Java doesn't even need to bother checking `2 > 10` (which is false) once it already knows the left side made the whole expression true. Either way, the combined result is `true`.",
    follow: "If asked what would need to change to make this false: both sides would need to be false simultaneously — OR only fails when every single condition it's checking fails too."
  },
  "c3-069": {
    detail: "Both halves of this OR expression are false: `7 < 3` is false (7 isn't less than 3), and `2 > 10` is also false (2 isn't greater than 10). Since `||` only returns `true` if at least one side holds up, and neither one does here, the entire expression evaluates to `false`. Unlike the short-circuit skip in c3-068, here Java actually has to check *both* sides before it can conclude the answer, since the first one alone (`false`) doesn't yet determine the outcome.",
    follow: "If asked to contrast with &&: for && to be false, only *one* side needs to fail — for || to be false, *every* side has to fail, which is exactly what's happening here."
  },
  "c3-070": {
    detail: "Working from the inside out: `8 > 3` evaluates first, and that's `true`. Then the `!` (logical NOT) operator flips it — `!true` becomes `false`. So the whole expression `!(8 > 3)` ends up as `false`, even though the inner comparison itself was true — the `!` at the front reverses whatever boolean comes out of the parentheses.",
    follow: "If asked what !(8 > 3) 'means' in plain English: it's literally asking 'is it NOT true that 8 is greater than 3?' — since 8 genuinely is greater than 3, the answer to that negated question is false."
  },
  "c3-071": {
    detail: "The `!` operator is Java's **logical NOT** — its whole job is to flip a boolean to its opposite: `!true` becomes `false`, and `!false` becomes `true`. It only works on boolean values (or expressions that evaluate to one), and it's commonly used to invert a condition without rewriting the comparison itself, like `if (!isValid)` instead of restructuring the whole check.",
    follow: "If asked about double negation, like !!x: two NOTs cancel out and return the original value — !!true is just true again — though writing it that way is unusual and rarely needed in real code."
  },
  "c3-072": {
    detail: "`x` starts at `5`. `x++` is **postfix** increment: it hands over `x`'s *current* value (`5`) to be used in the addition first, and only *after* that does `x` actually become `6`. So the left side of the `+` contributes `5`. But by the time Java evaluates the second `x` (on the right side of the `+`), the increment has already happened — `x` is now `6`. So the full expression becomes `5 + 6`, which is `11`.",
    follow: "If asked why this feels surprising: it's because both `x`'s in the expression don't necessarily hold the same value — the postfix `++` changes x mid-expression, so which x you're looking at (before or after the bump) depends on evaluation order, left to right."
  },
  "c3-073": {
    detail: "`x` starts at `5`. `++x` is **prefix** increment: it bumps `x` up to `6` immediately, *before* that value gets used anywhere else in the expression. So by the time Java evaluates `++x + x`, `x` is already `6` for *both* occurrences — the first `x` in the addition is `6` (post-increment), and the second `x` is also `6`, since the increment already happened and stuck. That gives `6 + 6 = 12`.",
    follow: "If asked to directly contrast with c3-072: same starting value (5), same code structure (x combined with itself via ++), but prefix increments before use (giving 6+6=12) while postfix increments after use (giving 5+6=11) — the timing of the ++ is the entire difference."
  },
  "c3-074": {
    detail: "Checking \"between 18 and 30, **inclusive**\" means both boundary values (18 and 30 themselves) should count as valid, not just values strictly between them. `>=` and `<=` are the inclusive comparison operators — `age >= 18` allows exactly 18, and `age <= 30` allows exactly 30. Both conditions need to hold simultaneously for someone to be in range, which is why they're joined with `&&` (AND) rather than `||` (OR) — a value has to satisfy *both* the lower and upper bound checks at once.",
    follow: "If asked why not use > and < instead: those would be *exclusive* bounds — `age > 18 && age < 30` would wrongly reject someone who's exactly 18 or exactly 30, even though the question specifically wants those included."
  },
  "c3-075": {
    detail: "Assigning an `int` directly to a `double` variable, like `double d = 7;`, is completely legal in Java without any explicit cast — this is called **widening conversion**, and it happens automatically because every possible `int` value can be represented exactly as a `double` with zero data loss (just with a trailing `.0`). Going the other direction (double into int) would need an explicit cast, since that direction *can* lose information (the fractional part).",
    follow: "If asked why the other options fail: `int d = 7.0;` fails because narrowing (double→int) needs an explicit cast, and the char/String options fail because '7' and \"7\" aren't numeric types at all — they'd need parsing, not assignment."
  },
  "c3-076": {
    detail: "Java's explicit cast syntax is `(targetType) value` — the type you want, wrapped in parentheses, placed right before the value you're converting. So `(int) 4.8` tells the compiler \"treat this double as an int now,\" truncating the decimal part in the process. This is the *only* valid cast syntax in Java — there's no `cast` keyword, no square brackets, and no function-call-style casting like some other languages use.",
    follow: "If asked what happens to the .8 during this cast: it's simply dropped, not rounded — (int) 4.8 becomes exactly 4, and this same truncation-not-rounding rule applies to any double-to-int cast, regardless of how close the decimal is to rounding up."
  },
  "c3-077": {
    detail: "`(int) 9.7` performs an explicit **narrowing cast** from `double` to `int`. Java doesn't round to the nearest whole number here — it simply **truncates**, chopping off everything after the decimal point regardless of how close it is to rounding up. So `9.7` becomes exactly `9`, not `10` — the `.7` is discarded entirely, not rounded away.",
    follow: "If asked what a value like 9.99999 would cast to: still just 9 — truncation always rounds toward zero, no matter how close the fractional part gets to the next whole number."
  },
  "c3-078": {
    detail: "`double` is Java's standard, higher-precision type for decimal (floating-point) values — it uses 64 bits of storage, giving roughly 15-16 significant decimal digits of accuracy, compared to `float`'s 32 bits and roughly 6-7 digits. Unless you have a specific reason to use the smaller, less precise `float` (like memory-constrained environments), `double` is the default choice for decimal values in Java, and it's what a decimal literal defaults to if you don't add an `F` suffix.",
    follow: "If asked when float would actually be preferred: mainly in memory-tight scenarios like large arrays of graphics/audio data, where the reduced precision is an acceptable tradeoff for using half the storage."
  },
  "c3-079": {
    detail: "A valid `String` declaration needs three things lined up correctly: the type written as `String` with a capital S (it's a class name, and Java is case-sensitive), the value wrapped in **double** quotes (not single, which are reserved for `char`), and the value itself unquoted-but-literal isn't valid Java syntax at all. `String language = \"Java\";` satisfies all three — capital-S String, double-quoted literal, proper assignment.",
    follow: "If asked why 'Java' with single quotes fails: single quotes are exclusively for char literals, which must be exactly one character — 'Java' has four characters, so it wouldn't even be legal char syntax, let alone match the String type."
  },
  "c3-080": {
    detail: "`.length()` is the String method that tells you how many characters the string contains — called as a method (with parentheses), not accessed as a property, which is a common early mix-up for people used to other languages where array/string length might be a plain field, not a method call.",
    follow: "If asked about arrays instead of Strings: arrays use `.length` *without* parentheses (it's a field, not a method) — that inconsistency between String.length() and array.length trips up a lot of learners."
  },
  "c3-081": {
    detail: "`word` holds `\"Computer\"`. Counting the characters one by one — C, o, m, p, u, t, e, r — that's exactly **8** characters, so `word.length()` returns `8`. The `.length()` method counts every character in the string, including any spaces if there were any (there aren't here), but not counting any invisible formatting.",
    follow: "If asked whether spaces count too: yes — length() counts every single character in the string, including spaces, punctuation, and anything else between the quotes."
  },
  "c3-082": {
    detail: "`word` holds `\"Java\"`, and String indexing in Java is **zero-based** — the first character sits at index `0`, not `1`. So breaking it down: index 0 is `J`, index 1 is `a`, index 2 is `v`, index 3 is `a`. `word.charAt(1)` asks for whatever's sitting at index 1, which is the second letter, `a`.",
    follow: "If asked what charAt(0) would give instead: that would be J, since index 0 always refers to the very first character in the string, not the second."
  },
  "c3-083": {
    detail: "`word` holds `\"Security\"`. Since Java strings are zero-indexed, `.charAt(0)` asks specifically for the character at position **0** — the very first one in the string. That's `S`, the first letter of \"Security\" — index 0 always means \"start from the beginning,\" not \"skip the first character.\"",
    follow: "If asked for a common off-by-one mistake here: assuming charAt(1) gives the first character (like 1-based counting in everyday language) — in Java, charAt(1) actually gives the *second* character, 'e', because indexing starts at 0."
  },
  "c3-084": {
    detail: "`a` and `b` both hold the text `\"Java\"` — same characters, same order. `.equals()` is a method that compares the **actual content** of two Strings character by character, not whether they're literally the same object in memory. Since every character matches exactly (J, a, v, a on both sides), `.equals()` returns `true`. This is the correct way to compare String *values* in Java — using `==` instead would technically compare object identity, which can behave unexpectedly even when the text looks identical.",
    follow: "If asked how this differs from using == instead: == checks whether both variables point to the exact same object in memory, while .equals() checks whether the actual text content matches — two separate String objects with identical text will always pass .equals() but might fail == depending on how they were created."
  },
  "c3-085": {
    detail: "`.toLowerCase()` returns a **new** String with every uppercase letter converted to its lowercase equivalent — it doesn't modify the original String in place (Strings in Java are immutable; no method ever changes an existing String object), it hands back a fresh one with the transformation applied.",
    follow: "If asked whether this changes the original variable: no — you'd need to reassign it, like `text = text.toLowerCase();`, otherwise the original text variable still holds its original casing since the method just returns a new value rather than mutating anything."
  },
  "c3-086": {
    detail: "`text` holds `\"JAVA\"`, all uppercase. `.toLowerCase()` returns a new String with every letter converted down to lowercase, giving `\"java\"`. Since `text` was already stored as a variable and this method's return value is what gets printed directly (passed straight into `println()`), the lowercase version is what shows up — the original all-caps `text` variable itself is untouched, but that doesn't matter here since we're printing the method's return value, not the variable afterward.",
    follow: "If asked what text itself would print afterward: it would still show \"JAVA\" — toLowerCase() doesn't modify the original variable, it only returns a new lowercase copy, which was used directly in this println() call."
  },
  "c3-087": {
    detail: "`text` holds `\"java\"`, all lowercase. `.toUpperCase()` does the mirror-image operation of `.toLowerCase()` — it returns a new String with every letter converted up to its uppercase form, giving `\"JAVA\"`. Same immutability rule applies: the original `text` variable is unaffected, but the method's return value (which is what's printed here) reflects the uppercase conversion.",
    follow: "If asked about mixed-case input, like \"JaVa\": toUpperCase() would still convert every letter regardless of its original case, giving \"JAVA\" either way — it doesn't care what case a character started in, only what it becomes."
  },
  "c3-088": {
    detail: "`char` and `String` serve genuinely different jobs: `char` is a primitive type built to hold **exactly one** character, no more, no less. `String` is a full object designed to hold a **sequence** of characters — zero, one, or thousands, whatever the text requires. `\"A\"` (a one-character String) and `'A'` (a char) might look similar, but they're fundamentally different types with different capabilities — String has methods like `.length()` and `.substring()` that a bare char simply doesn't have.",
    follow: "If asked whether a String can ever be truly empty: yes — \"\" is a perfectly valid String containing zero characters, whereas char literals must always contain exactly one character, never zero."
  },
  "c3-089": {
    detail: "`text` holds `\"Network\"`. `.substring(0, 3)` extracts characters starting at index `0` **up to but not including** index `3` — that's a common trip-up, since the second number is an exclusive endpoint, not inclusive. So it grabs index 0 (`N`), index 1 (`e`), and index 2 (`t`) — three characters total — stopping right before index 3 (which would be `w`). That gives `\"Net\"`.",
    follow: "If asked how many characters substring(0, 3) actually returns: exactly 3 — the count is (end − start), so substring(0, 3) always returns 3 characters, matching the difference between the two index arguments."
  },
  "c3-090": {
    detail: "`switch` is purpose-built for exactly this scenario: comparing **one expression against several discrete constant values**. When you're checking the same variable against many specific possibilities (like a day number, a menu choice, or a grade letter), `switch` is cleaner and often faster to read than a long chain of `if`/`else if` checks — `while` and `for` are for repetition, not branching, and `return` just exits a method, so neither fits this comparison-against-constants scenario.",
    follow: "If asked when if-else-if would actually be better than switch: when your conditions involve ranges or more complex boolean logic rather than exact-match constants — e.g. checking score >= 90 doesn't fit switch's exact-value-matching model."
  },
  "c3-091": {
    detail: "`break` is the keyword that exits a switch statement immediately, stopping execution from continuing (\"falling through\") into whatever case comes next. Once Java runs a matching case's code and hits `break`, it jumps straight past the entire switch block — skipping every remaining case, including `default`, no matter what.",
    follow: "If asked what happens without break: execution keeps falling through into the next case's code regardless of whether that case's value matches — that's the fall-through behavior tested elsewhere in this bank."
  },
  "c3-092": {
    detail: "When none of the `case` values match the switch expression and there's no `default` block present, Java simply does **nothing** — it skips the entire switch and moves on to whatever code comes after it. There's no automatic fallback behavior like re-running the switch or defaulting to the first/last case; `default` exists precisely to handle this situation, and without it, an unmatched value just falls through the whole switch with zero effect.",
    follow: "If asked why default isn't mandatory: Java leaves it optional because sometimes 'do nothing on unmatched input' is exactly the intended behavior — forcing a default everywhere would be unnecessarily restrictive."
  },
  "c3-093": {
    detail: "A switch expression in Java must be a **whole-number-like** discrete type — `char`, `byte`, `short`, `int` (and their wrapper classes, plus `String` and enums in modern Java), but explicitly **not** floating-point types like `double` or `float`. The reasoning is that switch works by exact-value matching against discrete constants, and floating-point comparisons are notoriously imprecise (due to how decimals are stored in binary), so Java simply disallows them as switch expressions altogether.",
    follow: "If asked why floating-point comparison is considered risky: values like 0.1 + 0.2 don't always equal exactly 0.3 in floating-point representation, so exact-match switching on doubles could behave unpredictably — Java sidesteps this entirely by not allowing it."
  },
  "c3-094": {
    detail: "`choice` is `4`, so the switch expression jumps directly to `case 4:`, matching it and printing `\"Y\"`. The `break` right after immediately stops execution there, preventing any fall-through into `default`. Since `case 2` never matched `choice`'s actual value, its code (`\"X\"`) never runs at all — Java only executes the branch whose case value equals the switch expression, nothing else.",
    follow: "If asked what would print if choice were something unmatched, like 7: it would fall through to default and print \"Z\", since none of the explicit case values would match."
  },
  "c3-095": {
    detail: "`choice` is `3`, matching `case 3:` directly, which prints `\"B\"`. But `case 3` has **no `break`** after it — so execution doesn't stop there, it falls straight through into `case 4`'s code as well, printing `\"C\"` too. Only *then* does it hit the `break` sitting after `case 4`, which finally stops things — before reaching `default`. Since `case 1` never matched `choice` in the first place, its `\"A\"` never runs. End result: `\"B\"` and `\"C\"` both print, together forming `\"BC\"`.",
    follow: "If asked what would happen if case 3 also had a break: execution would stop right after printing \"B\" alone, never reaching case 4's \"C\" at all — that single missing break is the entire reason both letters print here."
  },
  "c3-096": {
    detail: "`x` is `15`. Java checks if-else-if conditions **top to bottom**, stopping at the very first one that's true. `x > 20` is checked first — false, since 15 isn't greater than 20 — so Java moves to the next condition. `x > 10` is checked next, and that's `true` (15 > 10), so `\"B\"` prints, and the ladder stops right there — the remaining conditions (`x > 5`, which would also technically be true) never even get evaluated, because the ladder already committed to the first true branch it found.",
    follow: "If asked whether x > 5 being also true matters: no — once a ladder finds its first true condition, everything below it is skipped entirely, regardless of whether those later conditions would also evaluate true."
  },
  "c3-097": {
    detail: "`x` is `4`. The outer condition `x > 0` is `true` (4 is positive), so Java enters that block and evaluates the **inner** if-else. `x > 5` is checked next — that's `false`, since 4 isn't greater than 5 — so the inner `else` runs instead, printing `\"B\"`. The outer `else` (which would print `\"C\"`) is never reached at all, since the outer condition was already true and its block ran; that outer else only exists as a fallback for when `x > 0` itself is false.",
    follow: "If asked what would print if x were 6 instead: the outer condition would still be true, but now the inner check x > 5 would also be true, printing \"A\" instead of \"B\"."
  },
  "c3-098": {
    detail: "The `else` clause of an `if` statement is entirely **optional** — you can write a standalone `if` with no `else` at all, and if the condition is false, Java simply skips the if-block and moves on, doing nothing extra. `else` only becomes necessary when you specifically need alternative code to run when the condition doesn't hold.",
    follow: "If asked whether else if requires a final else too: no — you can chain multiple else-if branches and skip the trailing else entirely if there's no fallback case you need to handle."
  },
  "c3-099": {
    detail: "An if-else-if ladder works by checking its conditions strictly **top to bottom**, in the exact order they're written, and it stops the moment it finds the first one that evaluates to `true` — running that branch's code and skipping every condition below it, even ones that might also be true. It's not evaluating every condition and picking the 'best' match; it's a sequential, first-match-wins process, which is why condition *ordering* genuinely matters in a ladder.",
    follow: "If asked why ordering matters so much: putting a broader/looser condition before a more specific one can accidentally 'steal' cases that should have matched the more specific check further down — that's exactly the bug demonstrated in the Pass/Distinction ladder question elsewhere in this bank."
  },
  "c3-100": {
    detail: "Both nested if statements and switch statements are technically capable of producing multiway branching — you *can* replicate switch-like behavior using a chain of nested ifs. The real distinction is practical, not capability: for situations where you're comparing one value against many discrete constants, `switch` is generally cleaner to read and can be more efficient to execute, since it can potentially jump straight to the matching case rather than sequentially checking condition after condition like an if-else-if chain does.",
    follow: "If asked for a concrete efficiency angle: some switch implementations can use a jump table internally for consecutive integer cases, resolving in roughly constant time regardless of how many cases exist, whereas an if-else-if ladder always checks conditions one by one in sequence."
  },
  "c3-101": {
    detail: "`static` is a **reserved keyword** in Java — it has a specific built-in meaning (declaring that a member belongs to the class itself rather than to individual object instances), so the compiler won't let you reuse it as a variable name under any circumstance. `total`, `value`, and `amount` are all just plain, unreserved words with no special meaning to Java, so they're free to use as identifiers.",
    follow: "If asked for other common reserved keywords to watch out for: class, if, else, for, while, return, public, private, void, new — none of these can be used as variable, method, or class names."
  },
  "c3-102": {
    detail: "Among `byte` (8 bits), `short` (16 bits), `int` (32 bits), and `long` (64 bits), **`long`** uses the most memory per value and correspondingly holds the widest range — roughly ±9.2 quintillion, compared to int's roughly ±2.1 billion. More bits directly means more possible distinct values that type can represent, at the cost of more memory used per variable.",
    follow: "If asked why not always just use long everywhere then: using more bits than necessary wastes memory, especially at scale (large arrays, big datasets) — choosing the smallest type that comfortably fits your expected value range is generally better practice."
  },
  "c3-103": {
    detail: "`a` is `3`, `b` is `8`. Java respects standard **operator precedence** — multiplication binds tighter than subtraction, so `a * 2` gets computed first regardless of where it sits in the expression: `3 * 2 = 6`. Only after that does the subtraction happen: `b - 6`, which is `8 - 6 = 2`. It's not evaluated purely left-to-right ignoring precedence rules; multiplication always resolves before addition/subtraction unless parentheses say otherwise.",
    follow: "If asked how to force subtraction first instead: wrap it in parentheses, like `(b - a) * 2`, which would give `(8-3)*2 = 10` — parentheses always override default precedence rules."
  },
  "c3-104": {
    detail: "`x` starts at `20`. `x -= 8` expands to `x = x - 8`, giving `20 - 8 = 12` — so `x` is now `12`. Then `x /= 2` expands to `x = x / 2`, dividing the current value (`12`) by `2`, giving `6`. These compound assignments apply **in sequence**, each one operating on whatever value `x` currently holds at that point — not on the original starting value.",
    follow: "If asked what would happen if the order were swapped (/= before -=): dividing 20 by 2 first gives 10, then subtracting 8 gives 2 — a completely different final result, which shows why statement order matters when compound assignments chain together on the same variable."
  },
  "c3-105": {
    detail: "`x` starts at `8`. `x--` is **postfix** decrement: it hands over `x`'s current value (`8`) to be used in the subtraction first, and only *after* that does `x` actually drop to `7`. So the left side of the `-` contributes `8`. But by the time Java evaluates the second `x` on the right side, the decrement has already taken effect — `x` is now `7`. So the full expression becomes `8 - 7`, which is `1`.",
    follow: "If asked how this compares to prefix decrement (--x - x) with the same starting value: --x would drop x to 7 immediately, before either use, making both sides of the subtraction 7, giving 7 - 7 = 0 instead — same trap as the prefix/postfix increment questions elsewhere in this bank, just with subtraction."
  },
  "c3-106": {
    detail: "Working from the inside out: `5 == 5` evaluates first, and since both sides are identical, that's `true`. Then the `!` (logical NOT) operator flips it — `!true` becomes `false`. So the entire expression `!(5 == 5)` ends up as `false`, even though the inner equality check itself was true — the `!` at the front reverses whatever boolean the parentheses produce.",
    follow: "If asked to phrase this in plain English: it's asking 'is it NOT true that 5 equals 5?' — since 5 obviously does equal 5, the answer to that negated question is false."
  },
  "c3-107": {
    detail: "This is two checks joined by `&&` (AND), which requires **both** sides to be true for the overall result to be true. `10 > 5` checks out (`true`), but `3 > 6` does not (`false`, since 3 isn't greater than 6). Since AND needs both halves to hold and the second one fails, the entire expression evaluates to `false` — one failing condition is enough to sink the whole AND, regardless of how many other conditions were true.",
    follow: "If asked what would need to change to make this true: the second condition would need to actually hold — e.g. changing 3 > 6 to something like 3 < 6 would make both sides true, flipping the overall result to true as well."
  },
  "c3-108": {
    detail: "`long` is specifically designed for whole numbers that exceed `int`'s range (roughly ±2.1 billion) — it uses 64 bits instead of int's 32, extending the usable range to roughly ±9.2 quintillion. It's the go-to choice whenever you're working with very large counts, IDs, timestamps in milliseconds, or anything else that could realistically blow past int's ceiling.",
    follow: "If asked how you'd know int isn't enough ahead of time: think about realistic upper bounds for the value — things like a global population count, total bytes in a large file, or millisecond-precision timestamps routinely exceed int's ~2.1 billion limit and need long instead."
  },
  "c3-109": {
    detail: "`5000000000` on its own exceeds `int`'s maximum range (about 2.1 billion) — and since Java treats any whole-number literal as `int` by default *before* looking at what it's being assigned to, writing that number bare would actually fail to compile, overflowing before the assignment even happens. Appending `L` (capital preferred, to avoid visual confusion with the digit `1`) explicitly marks the literal itself as a `long`, letting it hold that larger value correctly from the start.",
    follow: "If asked why capital L is preferred over lowercase l: a lowercase l can look nearly identical to the digit 1 in many fonts, making code harder to read at a glance — capital L avoids that ambiguity entirely."
  },
  "c3-110": {
    detail: "`a` is `7`, an `int`. Assigning it to `double b` triggers automatic **widening conversion** — no cast needed, since every int value fits perfectly into a double with zero loss. But here's the key detail: once a value is genuinely stored as a `double`, Java always prints it with at least one decimal place, even if that fractional part is exactly zero. So `b` isn't just `7` — it's stored and displayed as `7.0`, making the decimal point visible specifically to signal \"this is a floating-point type,\" not an integer.",
    follow: "If asked why Java bothers showing .0 at all instead of just 7: it's a deliberate distinction — printing 7 vs 7.0 tells you at a glance whether you're looking at an int or a double, which matters for reasoning about later calculations (like whether division will truncate or not)."
  },
  "c3-111": {
    detail: "`\\\"` is the escape sequence for inserting a literal double-quote character **inside** a string, without prematurely ending that string. Since double quotes normally mark where a string literal starts and stops, you need to \"escape\" one that's meant to appear as actual text content — the backslash tells Java \"treat the next character as data, not as syntax.\"",
    follow: "If asked about \\\\ instead: that's the escape sequence for a literal single backslash character — different symbol, different purpose, but same underlying idea of escaping a character that would otherwise have special meaning."
  },
  "c3-112": {
    detail: "`name` holds `\"Data\"`, which has 4 characters. `name.length()` returns `4`, and since Java strings are zero-indexed, the *last* valid index is always `length() - 1` — here, `4 - 1 = 3`. Indexing through \"Data\": index 0 is `D`, index 1 is `a`, index 2 is `t`, index 3 is `a`. So `name.charAt(3)`, which is exactly what `name.charAt(name.length() - 1)` computes, returns the final character, `a`.",
    follow: "If asked why length() - 1 specifically, and not just length(): using length() directly (charAt(4) here) would throw a StringIndexOutOfBoundsException, since valid indices only go up to length()-1 — there's no character actually sitting at index 4 in a 4-character string."
  },
  "c3-113": {
    detail: "`text` holds `\"Programming\"`. `.substring(3, 7)` extracts characters starting at index `3`, up to but **not including** index `7` — that end index is exclusive, a common trip-up. Counting through \"Programming\": index 0=P, 1=r, 2=o, 3=g, 4=r, 5=a, 6=m, 7=m. So starting at index 3 and stopping right before index 7 grabs indices 3, 4, 5, and 6 — that's `g`, `r`, `a`, `m` — giving `\"gram\"`.",
    follow: "If asked how many characters this always returns: exactly (end − start) characters — here, 7 − 3 = 4, matching the 4-character result \"gram\"."
  },
  "c3-114": {
    detail: "`==` on two String **objects** compares whether they're literally the same object in memory (reference equality) — it does *not* check whether their text content matches. Two completely separate String objects can hold identical text (\"Java\" and \"Java\") and still fail a `==` check if they were created as distinct objects, because `==` never looks at the characters themselves. For comparing actual text content, `.equals()` is the correct method — it checks character by character, ignoring whether they're the same object or not.",
    follow: "If asked why == sometimes appears to 'work' for Strings anyway: Java has an internal string pool that can make some identically-written string literals share the same object automatically — but this behavior is unreliable and implementation-dependent, which is exactly why relying on == for String comparison is considered a bug waiting to happen."
  },
  "c3-115": {
    detail: "`next()` reads exactly one **whitespace-delimited token** — it stops the moment it hits a space, tab, or newline, returning just that single chunk of non-whitespace text. This is different from `nextLine()`, which grabs the entire rest of the line regardless of spaces inside it, and different from `nextInt()`, which specifically parses that token as a numeric int rather than returning it as text.",
    follow: "If asked what happens if you call next() on input with no whitespace remaining, like at the very end of input: it will block/wait for more input to arrive, since it needs to find a token boundary (whitespace or end of stream) before it can return."
  },
  "c3-116": {
    detail: "`age` is `16`. Java checks if-else-if conditions top to bottom, stopping at the first true one. `age >= 18` is checked first — `false`, since 16 isn't 18 or older. Moving to the next condition, `age >= 13` is checked — that's `true` (16 is at least 13), so `\"Teen\"` prints, and the ladder stops right there, never reaching the final `else` (which would print `\"Child\"`) — that else only runs if *every* condition above it failed.",
    follow: "If asked what would print for someone exactly 13: still \"Teen\" — the >= makes 13 itself count as satisfying that boundary, which is exactly why >= (inclusive) was chosen over a strict > here."
  },
  "c3-117": {
    detail: "`day` is `6`. The switch checks `case 6:` — no code follows it directly (it's an intentionally empty case), which means Java falls straight through into `case 7:`'s code without needing `day` to actually equal 7. This is a deliberate pattern: **grouping multiple case values together** to share one block of code, by stacking case labels with nothing between them. So both `day == 6` and `day == 7` end up printing `\"Weekend\"`, and the `break` right after stops execution before reaching `default`.",
    follow: "If asked why case 6 has no code of its own: leaving it empty is intentional — it's the standard Java idiom for saying 'case 6 should do exactly the same thing as case 7,' grouping related values under one shared outcome without duplicating the print statement."
  },
  "c3-118": {
    detail: "`char` is the natural fit for a single-letter grade like `'A'` or `'B'` — it's explicitly one of the types Java allows as a switch expression (alongside byte, short, and int), and it directly represents a single character without needing to wrap it in a String or convert it to a number first. `double` isn't allowed as a switch type at all, and while `int`/`boolean` are valid switch types in general, they don't naturally represent a single letter the way char does.",
    follow: "If asked how you'd write the case labels for char: with single-quoted char literals matching the type, like `case 'A': ... break;` — consistent with how char values are written everywhere else in Java."
  },
  "c3-119": {
    detail: "INCOMPLETE ENTRY — only the start of this explanation was provided: \"x is 5, y is 10. The outer condition x > 0 && y > 0 checks that both are positive — \" The rest of the detail text and the full follow field were cut off and never sent.",
    follow: "INCOMPLETE — not provided. Please resend the full c3-119 entry to fill this in."
  }
};
