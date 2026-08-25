const iftQuestions = [
  {
    "id": "c2-001",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What is computer organization?",
    "options": [
      "How the operational parts of a computer system are linked together",
      "The programming language used by a computer",
      "The physical size of a computer",
      "The number of files stored on a computer"
    ],
    "correctAnswer": "How the operational parts of a computer system are linked together",
    "explanation": "Computer organization is concerned with how the operational parts of a computer system are linked together to implement the architecture."
  },
  {
    "id": "c2-002",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which of the following is an output device mentioned in the handout?",
    "options": [
      "Monitor",
      "Keyboard",
      "Mouse",
      "Scanner"
    ],
    "correctAnswer": "Monitor",
    "explanation": "The handout lists monitors, printers, speakers, and headphones as output devices."
  },
  {
    "id": "c2-003",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What does the Control Unit transfer throughout the computer system?",
    "options": [
      "Data",
      "Only images",
      "Only audio",
      "Only instructions stored on disk"
    ],
    "correctAnswer": "Data",
    "explanation": "The Control Unit transfers data throughout the system as required, including between storage and the CPU."
  },
  {
    "id": "c2-004",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which unit is described as the central nervous system of the computer?",
    "options": [
      "Control Unit",
      "ALU",
      "Input Unit",
      "Storage Unit"
    ],
    "correctAnswer": "Control Unit",
    "explanation": "The Control Unit is described as the central nervous system because it controls the other units."
  },
  {
    "id": "c2-005",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What is primary storage also known as?",
    "options": [
      "Main memory",
      "External memory",
      "Auxiliary memory",
      "Magnetic storage"
    ],
    "correctAnswer": "Main memory",
    "explanation": "The handout states that primary storage is also known as main memory."
  },
  {
    "id": "c2-006",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which type of storage can contain a large amount of data permanently?",
    "options": [
      "Secondary storage",
      "Cache memory",
      "RAM",
      "Registers"
    ],
    "correctAnswer": "Secondary storage",
    "explanation": "Secondary storage is not directly accessible by the CPU and can contain large amounts of data permanently."
  },
  {
    "id": "c2-007",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which of the following is listed as an auxiliary storage device?",
    "options": [
      "Magnetic tape",
      "ALU",
      "Control Unit",
      "Program Counter"
    ],
    "correctAnswer": "Magnetic tape",
    "explanation": "The handout lists magnetic tape among auxiliary storage devices."
  },
  {
    "id": "c2-008",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What is the typical storage capacity of a 3.5-inch floppy disk given in the handout?",
    "options": [
      "1.44 MB",
      "64 MB",
      "1 GB",
      "4 GB"
    ],
    "correctAnswer": "1.44 MB",
    "explanation": "The handout states that a typical 3.5-inch floppy disk can hold 1.44 MB."
  },
  {
    "id": "c2-009",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What type of storage is an HDD?",
    "options": [
      "Non-volatile storage",
      "Volatile storage",
      "Cache storage",
      "Register storage"
    ],
    "correctAnswer": "Non-volatile storage",
    "explanation": "An HDD retains stored data even when the computer is powered off, making it non-volatile."
  },
  {
    "id": "c2-010",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What does a magnetic disk use to represent a bit of 1?",
    "options": [
      "The presence of a magnetic spot",
      "The absence of a magnetic spot",
      "A control signal",
      "A register address"
    ],
    "correctAnswer": "The presence of a magnetic spot",
    "explanation": "The handout states that the presence of a magnetic spot represents 1, while its absence represents 0."
  },
  {
    "id": "c2-011",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What are the invisible concentric circles on a magnetic disk called?",
    "options": [
      "Tracks",
      "Registers",
      "Sectors",
      "Buffers"
    ],
    "correctAnswer": "Tracks",
    "explanation": "Information on a magnetic disk is recorded on invisible concentric circles called tracks."
  },
  {
    "id": "c2-012",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which storage medium is described as a small removable disk made from plastic coated with magnetic recording material?",
    "options": [
      "Floppy disk",
      "Hard disk",
      "Magnetic tape",
      "ROM"
    ],
    "correctAnswer": "Floppy disk",
    "explanation": "The handout describes the floppy disk as a small removable disk made of plastic coated with magnetic recording material."
  },
  {
    "id": "c2-013",
    "type": "mcq",
    "difficulty": "easy",
    "question": "What is an operand?",
    "options": [
      "The data to be operated on",
      "The operation being performed",
      "The address of the CPU",
      "The control signal"
    ],
    "correctAnswer": "The data to be operated on",
    "explanation": "An operand portrays the data to be executed, while the operator indicates the action."
  },
  {
    "id": "c2-014",
    "type": "mcq",
    "difficulty": "easy",
    "question": "In the expression 5 + 2, what is the operator?",
    "options": [
      "+",
      "5",
      "2",
      "7"
    ],
    "correctAnswer": "+",
    "explanation": "The plus sign indicates the action to be performed, making it the operator."
  },
  {
    "id": "c2-015",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which addressing mode uses operands located in CPU registers?",
    "options": [
      "Register addressing mode",
      "Immediate addressing mode",
      "Direct addressing mode",
      "Indirect addressing mode"
    ],
    "correctAnswer": "Register addressing mode",
    "explanation": "In register addressing mode, the operands are located in registers within the CPU."
  },
  {
    "id": "c2-016",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which instruction is an example of register addressing?",
    "options": [
      "ADD R4, R3",
      "ADD R4, #3",
      "ADD R4, (R1)",
      "ADD R1, (1001)"
    ],
    "correctAnswer": "ADD R4, R3",
    "explanation": "The handout gives ADD R4, R3 as an example of register addressing mode."
  },
  {
    "id": "c2-017",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which instruction is an example of immediate addressing?",
    "options": [
      "ADD R4, #3",
      "ADD R4, R3",
      "ADD R4, (R1)",
      "ADD R1, (1001)"
    ],
    "correctAnswer": "ADD R4, #3",
    "explanation": "ADD R4, #3 illustrates immediate addressing."
  },
  {
    "id": "c2-018",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which instruction illustrates register indirect addressing?",
    "options": [
      "ADD R4, (R1)",
      "ADD R4, R3",
      "ADD R4, #3",
      "ADD R1, (1001)"
    ],
    "correctAnswer": "ADD R4, (R1)",
    "explanation": "The handout uses ADD R4, (R1) as an example of register indirect addressing."
  },
  {
    "id": "c2-019",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What does direct addressing use to specify the operand's location?",
    "options": [
      "The address field of the instruction",
      "Only the program counter",
      "Only the instruction register",
      "The control signal"
    ],
    "correctAnswer": "The address field of the instruction",
    "explanation": "In direct addressing, the effective address equals the address part of the instruction."
  },
  {
    "id": "c2-020",
    "type": "mcq",
    "difficulty": "medium",
    "question": "In indirect addressing, what does the address field of the instruction provide?",
    "options": [
      "The address where the effective address is stored",
      "The actual operand value",
      "The operation code",
      "The next instruction itself"
    ],
    "correctAnswer": "The address where the effective address is stored",
    "explanation": "In indirect addressing, the instruction's address field points to a memory location containing the effective address."
  },
  {
    "id": "c2-021",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which processor register may be used in calculating an effective address?",
    "options": [
      "Program Counter",
      "Instruction Register only",
      "Control Register only",
      "Output Register only"
    ],
    "correctAnswer": "Program Counter",
    "explanation": "The handout states that the CPU register used in effective-address computation may be the program counter, an index register, or a base register."
  },
  {
    "id": "c2-022",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Why are immediate-mode instructions useful?",
    "options": [
      "For initializing registers to a constant value",
      "For permanently storing files",
      "For replacing secondary memory",
      "For controlling external power"
    ],
    "correctAnswer": "For initializing registers to a constant value",
    "explanation": "Initialization of registers to constant values is a useful application of immediate addressing."
  },
  {
    "id": "c2-023",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which three components are included in primary memory in the memory hierarchy?",
    "options": [
      "Main memory, cache, and CPU registers",
      "Magnetic disk, tape, and floppy disk",
      "ROM, HDD, and magnetic tape",
      "Printer, monitor, and keyboard"
    ],
    "correctAnswer": "Main memory, cache, and CPU registers",
    "explanation": "The handout identifies main memory, cache, and CPU registers as primary or internal memory."
  },
  {
    "id": "c2-024",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which of the following belongs to secondary memory?",
    "options": [
      "Magnetic disk",
      "CPU register",
      "Cache",
      "Main memory"
    ],
    "correctAnswer": "Magnetic disk",
    "explanation": "Magnetic disks are listed among secondary or external memory devices."
  },
  {
    "id": "c2-025",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What generally happens to access time when moving from the top of the memory hierarchy toward the bottom?",
    "options": [
      "It increases",
      "It decreases to zero",
      "It remains constant",
      "It becomes unpredictable"
    ],
    "correctAnswer": "It increases",
    "explanation": "The handout states that access time increases from the top of the memory hierarchy to the bottom."
  },
  {
    "id": "c2-026",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What generally happens to memory capacity when moving from the top toward the bottom of the memory hierarchy?",
    "options": [
      "It increases",
      "It decreases",
      "It becomes zero",
      "It remains exactly the same"
    ],
    "correctAnswer": "It increases",
    "explanation": "The handout states that capacity often increases toward the bottom of the hierarchy."
  },
  {
    "id": "c2-027",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What does latency measure in memory?",
    "options": [
      "The time between a request for information and access to its first bit",
      "The total storage capacity",
      "The number of bits accessed per second",
      "The number of cache misses"
    ],
    "correctAnswer": "The time between a request for information and access to its first bit",
    "explanation": "Latency is the time interval between requesting information and accessing its first bit."
  },
  {
    "id": "c2-028",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What happens during a cache hit?",
    "options": [
      "The requested data is found in the cache",
      "The requested data is permanently deleted",
      "The cache is turned off",
      "The CPU skips the instruction"
    ],
    "correctAnswer": "The requested data is found in the cache",
    "explanation": "A cache hit occurs when the processor finds the requested memory location in the cache."
  },
  {
    "id": "c2-029",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What happens after a cache miss?",
    "options": [
      "The cache allocates a new entry and copies the data from main memory",
      "The CPU stops permanently",
      "The data is deleted from main memory",
      "The instruction is sent to ROM"
    ],
    "correctAnswer": "The cache allocates a new entry and copies the data from main memory",
    "explanation": "During a cache miss, the cache creates a new entry and copies the required data from main memory."
  },
  {
    "id": "c2-030",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which principle explains why cache memory is useful for frequently accessed data?",
    "options": [
      "Locality of reference",
      "Power failure",
      "Direct addressing",
      "Instruction termination"
    ],
    "correctAnswer": "Locality of reference",
    "explanation": "Cache works because of locality of reference, where recently or nearby accessed items are more likely to be accessed again."
  },
  {
    "id": "c2-031",
    "type": "mcq",
    "difficulty": "hard",
    "question": "A cache has 60 hits and 40 misses. What is its miss ratio?",
    "options": [
      "40%",
      "60%",
      "20%",
      "100%"
    ],
    "correctAnswer": "40%",
    "explanation": "Miss ratio = misses divided by total accesses = 40 / 100 = 40%."
  },
  {
    "id": "c2-032",
    "type": "mcq",
    "difficulty": "hard",
    "question": "If a system has 90 cache hits and 10 cache misses, what is its hit ratio?",
    "options": [
      "90%",
      "10%",
      "80%",
      "100%"
    ],
    "correctAnswer": "90%",
    "explanation": "Hit ratio = hits divided by total accesses = 90 / 100 = 90%."
  },
  {
    "id": "c2-033",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Which statement best describes the trade-off associated with cache memory?",
    "options": [
      "It is faster but more costly than main and secondary memory",
      "It is slower and cheaper than all other memory",
      "It is permanent and cheaper than secondary memory",
      "It has no effect on processing performance"
    ],
    "correctAnswer": "It is faster but more costly than main and secondary memory",
    "explanation": "The handout states that cache is faster than main and secondary memory but more expensive."
  },
  {
    "id": "c2-034",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Which control unit generates control signals using specially designed hardware logical circuits?",
    "options": [
      "Hardwired control unit",
      "Microprogrammed control unit",
      "Cache control unit",
      "Memory control unit"
    ],
    "correctAnswer": "Hardwired control unit",
    "explanation": "A hardwired control unit generates control signals through specially designed hardware logical circuits."
  },
  {
    "id": "c2-035",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Why are modifications to a hardwired control unit difficult?",
    "options": [
      "They require physical changes to the circuit structure",
      "They require changing only a software variable",
      "They require replacing the hard disk",
      "They require clearing the cache"
    ],
    "correctAnswer": "They require physical changes to the circuit structure",
    "explanation": "Modifying hardwired signal generation requires physical changes to the hardware circuit."
  },
  {
    "id": "c2-036",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is the primary storage location for binary control values in a microprogrammed control unit?",
    "options": [
      "Control memory",
      "Cache memory",
      "Magnetic tape",
      "Input unit"
    ],
    "correctAnswer": "Control memory",
    "explanation": "A microprogrammed control unit stores binary control values as words in control memory."
  },
  {
    "id": "c2-037",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What does each bit of a microinstruction correspond to?",
    "options": [
      "A control signal",
      "A complete program",
      "A memory address only",
      "A physical disk track"
    ],
    "correctAnswer": "A control signal",
    "explanation": "Each bit forming a microinstruction is linked to one control signal."
  },
  {
    "id": "c2-038",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What happens when a bit in a microinstruction is set?",
    "options": [
      "The corresponding control signal becomes active",
      "The control signal becomes inactive",
      "The CPU is switched off",
      "The next instruction is deleted"
    ],
    "correctAnswer": "The corresponding control signal becomes active",
    "explanation": "A set bit activates its associated control signal, while a cleared bit makes the signal inactive."
  },
  {
    "id": "c2-039",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is the major structural difference between a single-level and two-level control store?",
    "options": [
      "A two-level control store includes a Nano-instruction memory in addition to control memory",
      "A single-level store has no control memory",
      "A two-level store eliminates microinstructions",
      "A single-level store always uses more CPUs"
    ],
    "correctAnswer": "A two-level control store includes a Nano-instruction memory in addition to control memory",
    "explanation": "The two-level control store contains control memory plus Nano-instruction memory."
  },
  {
    "id": "c2-040",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Why can a two-level control store use shorter microinstruction words?",
    "options": [
      "The operation part can contain an address pointing to encoded control signals in Nano-instruction memory",
      "It removes all control signals",
      "It stores instructions only in RAM",
      "It prevents decoding"
    ],
    "correctAnswer": "The operation part can contain an address pointing to encoded control signals in Nano-instruction memory",
    "explanation": "Nano-instruction memory stores encoded control signals, allowing microinstructions to be much shorter."
  },
  {
    "id": "c2-041",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is the function of the control address register in a microprogrammed control unit?",
    "options": [
      "It specifies the address of the microinstruction",
      "It stores the current user program",
      "It stores the ALU result",
      "It stores external files"
    ],
    "correctAnswer": "It specifies the address of the microinstruction",
    "explanation": "The control memory address register specifies the location of the microinstruction to be read."
  },
  {
    "id": "c2-042",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What does the control data register hold?",
    "options": [
      "The microinstruction read from memory",
      "The next user input",
      "The hard disk address",
      "The current cache ratio"
    ],
    "correctAnswer": "The microinstruction read from memory",
    "explanation": "The control data register holds the microinstruction read from control memory."
  },
  {
    "id": "c2-043",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is another name for the next address generator?",
    "options": [
      "Microprogram sequencer",
      "Instruction decoder",
      "Arithmetic controller",
      "Memory buffer"
    ],
    "correctAnswer": "Microprogram sequencer",
    "explanation": "The next address generator is sometimes called a microprogram sequencer."
  },
  {
    "id": "c2-044",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Which of the following is a function of a microprogram sequencer?",
    "options": [
      "Incrementing the control address register by one",
      "Performing multiplication",
      "Storing user files permanently",
      "Receiving keyboard input"
    ],
    "correctAnswer": "Incrementing the control address register by one",
    "explanation": "Incrementing the control address register by one is one of the sequencer's functions."
  },
  {
    "id": "c2-045",
    "type": "mcq",
    "difficulty": "hard",
    "question": "How are control signals represented in a horizontal microprogrammed control unit?",
    "options": [
      "Decoded binary format with one bit per control signal",
      "Encoded binary format requiring decoders",
      "Decimal format",
      "Text format"
    ],
    "correctAnswer": "Decoded binary format with one bit per control signal",
    "explanation": "Horizontal microprogramming uses decoded binary format with one bit for each control signal."
  },
  {
    "id": "c2-046",
    "type": "mcq",
    "difficulty": "hard",
    "question": "If a processor has 53 control signals, how many bits are required in horizontal microprogramming?",
    "options": [
      "53 bits",
      "26 bits",
      "106 bits",
      "5 bits"
    ],
    "correctAnswer": "53 bits",
    "explanation": "Horizontal microprogramming uses one bit per control signal, so 53 signals require 53 bits."
  },
  {
    "id": "c2-047",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Which statement correctly describes vertical microprogramming?",
    "options": [
      "Control signals are encoded and additional decoders are required",
      "Each control signal always uses a separate bit",
      "It requires no additional hardware",
      "It is faster than horizontal microprogramming"
    ],
    "correctAnswer": "Control signals are encoded and additional decoders are required",
    "explanation": "Vertical microprogramming uses encoded control signals and requires additional decoder hardware."
  },
  {
    "id": "c2-048",
    "type": "truefalse",
    "difficulty": "easy",
    "question": "The main memory is a relatively large and fast memory used to store programs and data during computer operation.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "The handout describes main memory as a relatively large and fast memory for programs and data during operation."
  },
  {
    "id": "c2-049",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "Magnetic disks are described as having no direct access to stored data.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "False",
    "explanation": "The handout states that magnetic disks are popular for direct access storage."
  },
  {
    "id": "c2-050",
    "type": "truefalse",
    "difficulty": "hard",
    "question": "Microprogrammed control units are slower than hardwired control units according to the handout.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "Being slower than a hardwired control unit is listed as a disadvantage of microprogrammed control units."
  },
  {
    "id": "c2-051",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which component converts input data into machine language before loading it into the computer system?",
    "options": [
      "Input Unit",
      "Output Unit",
      "Control Unit",
      "ALU"
    ],
    "correctAnswer": "Input Unit",
    "explanation": "The input unit takes data from input devices, converts it into machine language, and loads it into the computer system."
  },
  {
    "id": "c2-052",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which of the following is NOT listed as a major computer system component in the handout?",
    "options": [
      "Input Unit",
      "Output Unit",
      "Storage Unit",
      "Compiler Unit"
    ],
    "correctAnswer": "Compiler Unit",
    "explanation": "The handout lists Input Unit, Output Unit, Storage Unit, ALU, and Control Unit among the major components."
  },
  {
    "id": "c2-053",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which unit is responsible for arithmetic and logical operations?",
    "options": [
      "ALU",
      "Control Unit",
      "Input Unit",
      "Storage Unit"
    ],
    "correctAnswer": "ALU",
    "explanation": "The ALU performs arithmetic and logical operations on data."
  },
  {
    "id": "c2-054",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which unit controls the activities of the other computer units?",
    "options": [
      "Control Unit",
      "Input Unit",
      "Output Unit",
      "Secondary Storage"
    ],
    "correctAnswer": "Control Unit",
    "explanation": "The Control Unit directs and coordinates the activities of the other units."
  },
  {
    "id": "c2-055",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which device is used to produce hard-copy output?",
    "options": [
      "Printer",
      "Keyboard",
      "Mouse",
      "Scanner"
    ],
    "correctAnswer": "Printer",
    "explanation": "A printer is an output device used to produce hard-copy output."
  },
  {
    "id": "c2-056",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which storage is directly accessible by the CPU?",
    "options": [
      "Primary storage",
      "Secondary storage",
      "Magnetic tape",
      "Auxiliary storage"
    ],
    "correctAnswer": "Primary storage",
    "explanation": "Primary storage is directly accessible by the CPU."
  },
  {
    "id": "c2-057",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which storage retains information when power is removed?",
    "options": [
      "Non-volatile storage",
      "Volatile storage",
      "Cache only",
      "Registers only"
    ],
    "correctAnswer": "Non-volatile storage",
    "explanation": "Non-volatile storage retains its contents when the computer is powered off."
  },
  {
    "id": "c2-058",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which of the following is a secondary storage device?",
    "options": [
      "Hard disk",
      "Register",
      "Cache",
      "Main memory"
    ],
    "correctAnswer": "Hard disk",
    "explanation": "A hard disk is a secondary storage device."
  },
  {
    "id": "c2-059",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which addressing mode has the operand value directly in the instruction?",
    "options": [
      "Immediate",
      "Direct",
      "Indirect",
      "Register indirect"
    ],
    "correctAnswer": "Immediate",
    "explanation": "Immediate addressing places the operand value directly in the instruction."
  },
  {
    "id": "c2-060",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which addressing mode uses the address field as the effective address?",
    "options": [
      "Direct",
      "Immediate",
      "Register",
      "Register indirect"
    ],
    "correctAnswer": "Direct",
    "explanation": "In direct addressing, the address field directly specifies the effective address."
  },
  {
    "id": "c2-061",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which addressing mode obtains the effective address from a memory location specified by the instruction?",
    "options": [
      "Indirect",
      "Immediate",
      "Register",
      "Direct"
    ],
    "correctAnswer": "Indirect",
    "explanation": "In indirect addressing, the instruction points to a location containing the effective address."
  },
  {
    "id": "c2-062",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which addressing mode uses a register containing the operand's memory address?",
    "options": [
      "Register indirect",
      "Immediate",
      "Direct",
      "Register"
    ],
    "correctAnswer": "Register indirect",
    "explanation": "Register indirect addressing uses a register to hold the memory address of the operand."
  },
  {
    "id": "c2-063",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which memory level is normally faster than main memory?",
    "options": [
      "Cache",
      "Magnetic disk",
      "Magnetic tape",
      "Secondary storage"
    ],
    "correctAnswer": "Cache",
    "explanation": "Cache is faster than main memory and is positioned closer to the CPU."
  },
  {
    "id": "c2-064",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which memory level has the largest capacity in the listed hierarchy?",
    "options": [
      "Magnetic tape",
      "Registers",
      "Cache",
      "Main memory"
    ],
    "correctAnswer": "Magnetic tape",
    "explanation": "Capacity generally increases toward the bottom of the hierarchy, where magnetic tape is listed."
  },
  {
    "id": "c2-065",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is a cache hit?",
    "options": [
      "Finding requested data in cache",
      "Failing to find requested data in cache",
      "Deleting cached data",
      "Writing data to tape"
    ],
    "correctAnswer": "Finding requested data in cache",
    "explanation": "A cache hit occurs when the requested memory location is found in cache."
  },
  {
    "id": "c2-066",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is a cache miss?",
    "options": [
      "Failure to find requested data in cache",
      "Finding requested data in cache",
      "Clearing all cache",
      "Writing to ROM"
    ],
    "correctAnswer": "Failure to find requested data in cache",
    "explanation": "A cache miss occurs when the requested memory location is not found in cache."
  },
  {
    "id": "c2-067",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which principle explains repeated use of recently accessed data?",
    "options": [
      "Locality of reference",
      "Indirect addressing",
      "Priority triggering",
      "Hardwiring"
    ],
    "correctAnswer": "Locality of reference",
    "explanation": "Locality of reference explains why recently accessed data is likely to be accessed again."
  },
  {
    "id": "c2-068",
    "type": "mcq",
    "difficulty": "hard",
    "question": "A cache has 200 total accesses and 50 misses. What is the hit ratio?",
    "options": [
      "75%",
      "25%",
      "50%",
      "80%"
    ],
    "correctAnswer": "75%",
    "explanation": "There are 150 hits, so the hit ratio is 150/200 = 75%."
  },
  {
    "id": "c2-069",
    "type": "mcq",
    "difficulty": "hard",
    "question": "A cache has 300 accesses and a 90% hit ratio. How many misses occurred?",
    "options": [
      "30",
      "90",
      "270",
      "300"
    ],
    "correctAnswer": "30",
    "explanation": "A 10% miss ratio applied to 300 accesses gives 30 misses."
  },
  {
    "id": "c2-070",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Which control method is generally faster?",
    "options": [
      "Hardwired control",
      "Microprogrammed control",
      "Both always have identical speed",
      "Neither controls the CPU"
    ],
    "correctAnswer": "Hardwired control",
    "explanation": "Hardwired control is faster because control signals are generated through hardware circuits."
  },
  {
    "id": "c2-071",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Which control method is easier to modify?",
    "options": [
      "Microprogrammed control",
      "Hardwired control",
      "Both require physical rewiring",
      "Neither can be modified"
    ],
    "correctAnswer": "Microprogrammed control",
    "explanation": "Microprogrammed control is easier to modify because control information is stored in memory."
  },
  {
    "id": "c2-072",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What stores microinstructions in a microprogrammed control unit?",
    "options": [
      "Control memory",
      "Main memory only",
      "Magnetic tape",
      "Input buffer"
    ],
    "correctAnswer": "Control memory",
    "explanation": "Microinstructions are stored as words in control memory."
  },
  {
    "id": "c2-073",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What does the control address register contain?",
    "options": [
      "The address of the microinstruction",
      "The microinstruction itself",
      "The ALU result",
      "The next user input"
    ],
    "correctAnswer": "The address of the microinstruction",
    "explanation": "The control address register specifies the address of the microinstruction in control memory."
  },
  {
    "id": "c2-074",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What does the control data register contain?",
    "options": [
      "The microinstruction read from control memory",
      "The address of the next microinstruction",
      "The current cache ratio",
      "The hard-disk address"
    ],
    "correctAnswer": "The microinstruction read from control memory",
    "explanation": "The control data register holds the microinstruction read from control memory."
  },
  {
    "id": "c2-075",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is the microprogram sequencer used for?",
    "options": [
      "Generating the next microinstruction address",
      "Performing arithmetic calculations",
      "Storing files permanently",
      "Controlling display brightness"
    ],
    "correctAnswer": "Generating the next microinstruction address",
    "explanation": "The microprogram sequencer determines the address of the next microinstruction."
  },
  {
    "id": "c2-076",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is a key characteristic of horizontal microprogramming?",
    "options": [
      "One bit can represent one control signal",
      "All signals require a separate decoder",
      "It uses only decimal numbers",
      "It eliminates control memory"
    ],
    "correctAnswer": "One bit can represent one control signal",
    "explanation": "Horizontal microprogramming uses decoded control signals, with a bit corresponding to each control signal."
  },
  {
    "id": "c2-077",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is a key characteristic of vertical microprogramming?",
    "options": [
      "Control signals are encoded",
      "Every signal always has a dedicated bit",
      "No decoder is needed",
      "No microinstructions are used"
    ],
    "correctAnswer": "Control signals are encoded",
    "explanation": "Vertical microprogramming encodes control signals and requires decoding."
  },
  {
    "id": "c2-078",
    "type": "truefalse",
    "difficulty": "easy",
    "question": "The Control Unit controls the activities of other units in the computer.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "The Control Unit coordinates and controls the activities of the computer's other units."
  },
  {
    "id": "c2-079",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "Secondary storage is directly accessible by the CPU in the same way as primary memory.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "False",
    "explanation": "Secondary storage is not directly accessible by the CPU; data must be brought into primary storage."
  },
  {
    "id": "c2-080",
    "type": "truefalse",
    "difficulty": "hard",
    "question": "Hardwired control is generally easier to modify than microprogrammed control.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "False",
    "explanation": "Hardwired control is difficult to modify because physical changes to the circuitry may be required."
  },
  {
    "id": "c2-081",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which computer system unit is the first to handle data coming from devices like a keyboard or scanner?",
    "options": [
      "Input Unit",
      "Output Unit",
      "ALU",
      "Control Unit"
    ],
    "correctAnswer": "Input Unit",
    "explanation": "The Input Unit receives data from input devices and converts it into machine language for the system."
  },
  {
    "id": "c2-082",
    "type": "mcq",
    "difficulty": "easy",
    "question": "After processing, which unit displays or prints the final result for the user?",
    "options": [
      "Output Unit",
      "Input Unit",
      "ALU",
      "Control Unit"
    ],
    "correctAnswer": "Output Unit",
    "explanation": "The Output Unit presents processed information to the user through devices like monitors and printers."
  },
  {
    "id": "c2-083",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Comparing two values with AND, OR, or NOT is handled by which unit?",
    "options": [
      "ALU",
      "Input Unit",
      "Storage Unit",
      "Output Unit"
    ],
    "correctAnswer": "ALU",
    "explanation": "The ALU (Arithmetic Logic Unit) carries out logical operations such as comparisons."
  },
  {
    "id": "c2-084",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Programs and data actively in use by the CPU are held in which type of memory?",
    "options": [
      "Primary memory",
      "Secondary memory",
      "Magnetic tape",
      "Cache only"
    ],
    "correctAnswer": "Primary memory",
    "explanation": "Primary memory, also known as main memory, holds data and programs currently being used by the CPU."
  },
  {
    "id": "c2-085",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Hard disks and floppy disks both rely on which recording method to store data?",
    "options": [
      "Magnetic recording",
      "Optical recording",
      "Acoustic recording",
      "Radio recording"
    ],
    "correctAnswer": "Magnetic recording",
    "explanation": "Devices like magnetic disks store data using magnetic recording, representing bits as magnetized or non-magnetized spots."
  },
  {
    "id": "c2-086",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which device would you choose to keep large amounts of data safe for years?",
    "options": [
      "Hard disk",
      "Register",
      "ALU",
      "Control Unit"
    ],
    "correctAnswer": "Hard disk",
    "explanation": "A hard disk provides non-volatile, long-term storage capable of holding large amounts of data."
  },
  {
    "id": "c2-087",
    "type": "mcq",
    "difficulty": "medium",
    "question": "In ADD R4, #3, the #3 is an example of which addressing mode?",
    "options": [
      "Immediate addressing",
      "Direct addressing",
      "Indirect addressing",
      "Register addressing"
    ],
    "correctAnswer": "Immediate addressing",
    "explanation": "Immediate addressing embeds the constant operand value directly inside the instruction."
  },
  {
    "id": "c2-088",
    "type": "mcq",
    "difficulty": "medium",
    "question": "If an instruction points to a register that itself holds the memory address of the operand, what addressing mode is this?",
    "options": [
      "Register indirect addressing",
      "Immediate addressing",
      "Direct addressing",
      "Register addressing"
    ],
    "correctAnswer": "Register indirect addressing",
    "explanation": "Register indirect addressing uses a register that stores the memory address where the operand is located."
  },
  {
    "id": "c2-089",
    "type": "mcq",
    "difficulty": "medium",
    "question": "When the CPU finds the data it needs already sitting in cache, what is this event called?",
    "options": [
      "A cache hit",
      "A cache miss",
      "A page fault",
      "A memory leak"
    ],
    "correctAnswer": "A cache hit",
    "explanation": "A cache hit occurs when requested data is found in the cache, avoiding a trip to main memory."
  },
  {
    "id": "c2-090",
    "type": "mcq",
    "difficulty": "medium",
    "question": "When data isn't found in cache and must be pulled from main memory, what does that trigger?",
    "options": [
      "Fetching the required data from main memory",
      "Deleting main memory",
      "Stopping the CPU",
      "Formatting the cache"
    ],
    "correctAnswer": "Fetching the required data from main memory",
    "explanation": "A cache miss requires the system to retrieve the needed data from main memory and load it into cache."
  },
  {
    "id": "c2-091",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Which term names the fraction of memory accesses that are successfully found in cache?",
    "options": [
      "Hit ratio",
      "Miss ratio",
      "Latency",
      "Bandwidth"
    ],
    "correctAnswer": "Hit ratio",
    "explanation": "The hit ratio measures the proportion of memory accesses that are cache hits."
  },
  {
    "id": "c2-092",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Which term names the fraction of memory accesses that fail to find data in cache?",
    "options": [
      "Miss ratio",
      "Hit ratio",
      "Latency",
      "Capacity"
    ],
    "correctAnswer": "Miss ratio",
    "explanation": "The miss ratio measures the proportion of memory accesses that are cache misses."
  },
  {
    "id": "c2-093",
    "type": "mcq",
    "difficulty": "hard",
    "question": "A control unit that keeps its control signals stored as words in memory is using which approach?",
    "options": [
      "Microprogrammed control",
      "Hardwired control",
      "Direct control",
      "External control"
    ],
    "correctAnswer": "Microprogrammed control",
    "explanation": "Microprogrammed control stores control information as microinstructions in control memory."
  },
  {
    "id": "c2-094",
    "type": "mcq",
    "difficulty": "hard",
    "question": "A control unit built from fixed logic gates instead of stored instructions is an example of which approach?",
    "options": [
      "Hardwired control",
      "Microprogrammed control",
      "Magnetic control",
      "Software-only control"
    ],
    "correctAnswer": "Hardwired control",
    "explanation": "Hardwired control uses specially designed hardware logic circuits to generate control signals."
  },
  {
    "id": "c2-095",
    "type": "mcq",
    "difficulty": "medium",
    "question": "A divide-by-zero error during program execution would trigger which type of interrupt?",
    "options": [
      "Internal interrupt",
      "External interrupt",
      "Normal interrupt",
      "Priority interrupt"
    ],
    "correctAnswer": "Internal interrupt",
    "explanation": "Internal interrupts are caused by errors that occur during the execution of an instruction, such as divide-by-zero."
  },
  {
    "id": "c2-096",
    "type": "mcq",
    "difficulty": "medium",
    "question": "An interrupt triggered by a sudden loss of electrical power falls under which category?",
    "options": [
      "External interrupt",
      "Internal interrupt",
      "Exception interrupt",
      "Normal interrupt"
    ],
    "correctAnswer": "External interrupt",
    "explanation": "External interrupts originate from outside the CPU, such as power failures or I/O devices."
  },
  {
    "id": "c2-097",
    "type": "mcq",
    "difficulty": "medium",
    "question": "A software interrupt that a programmer deliberately places in code to call a system routine is called what?",
    "options": [
      "Normal interrupt",
      "Exception interrupt",
      "External interrupt",
      "Hardware interrupt"
    ],
    "correctAnswer": "Normal interrupt",
    "explanation": "A normal (planned) software interrupt is intentionally generated by the programmer."
  },
  {
    "id": "c2-098",
    "type": "mcq",
    "difficulty": "medium",
    "question": "A software interrupt that occurs unexpectedly, without being planned by the programmer, is known as what?",
    "options": [
      "Exception interrupt",
      "Normal interrupt",
      "External interrupt",
      "Level interrupt"
    ],
    "correctAnswer": "Exception interrupt",
    "explanation": "An exception interrupt happens unexpectedly during program execution, unlike a planned normal interrupt."
  },
  {
    "id": "c2-099",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What steps make up the total interrupt latency of a system?",
    "options": [
      "Time to recognize the interrupt, complete the current instruction, save state, and begin the ISR",
      "Only the time to save a file",
      "Only the time to fetch data from tape",
      "Only the time to execute the current program"
    ],
    "correctAnswer": "Time to recognize the interrupt, complete the current instruction, save state, and begin the ISR",
    "explanation": "Interrupt latency covers recognition, finishing the current instruction, saving state, and starting the interrupt service routine."
  },
  {
    "id": "c2-100",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Which interrupt triggering scheme allows a more urgent interrupt to interrupt one already being handled?",
    "options": [
      "Priority triggering",
      "Level triggering",
      "Direct triggering",
      "Register triggering"
    ],
    "correctAnswer": "Priority triggering",
    "explanation": "Priority triggering allows higher-priority interrupts to preempt the handling of lower-priority ones."
  },
  {
    "id": "c2-101",
    "type": "truefalse",
    "difficulty": "easy",
    "question": "The CPU can access primary memory directly, without going through secondary storage first.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "Primary memory is directly accessible by the CPU, unlike secondary storage."
  },
  {
    "id": "c2-102",
    "type": "truefalse",
    "difficulty": "easy",
    "question": "A floppy disk is classified as a secondary storage device.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "Floppy disks are removable secondary storage media used to store data outside of primary memory."
  },
  {
    "id": "c2-103",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "With immediate addressing, the actual operand value is written right into the instruction itself.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "Immediate addressing places the operand's value directly in the instruction rather than referencing a memory location."
  },
  {
    "id": "c2-104",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "A cache miss happens when the CPU successfully locates the requested data inside the cache.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "False",
    "explanation": "A cache miss is the opposite — it happens when the requested data is NOT found in the cache."
  },
  {
    "id": "c2-105",
    "type": "truefalse",
    "difficulty": "hard",
    "question": "Because it only requires updating stored control words, microprogrammed control is easier to modify than hardwired control.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "Microprogrammed control is easier to modify since changes only require updating microinstructions in memory, not rewiring hardware."
  },
  {
    "id": "c2-106",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Data typed on a keyboard first passes through which computer unit?",
    "options": [
      "Input Unit",
      "Output Unit",
      "ALU",
      "Control Unit"
    ],
    "correctAnswer": "Input Unit",
    "explanation": "The Input Unit is responsible for receiving and processing incoming data from input devices."
  },
  {
    "id": "c2-107",
    "type": "mcq",
    "difficulty": "easy",
    "question": "A printed report or an image on a monitor is delivered to the user by which unit?",
    "options": [
      "Output Unit",
      "Input Unit",
      "ALU",
      "Control Unit"
    ],
    "correctAnswer": "Output Unit",
    "explanation": "The Output Unit converts processed data into a form the user can see or use, such as printed text or screen images."
  },
  {
    "id": "c2-108",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Evaluating whether one value is greater than another is a task for which unit?",
    "options": [
      "ALU",
      "Input Unit",
      "Storage Unit",
      "Output Unit"
    ],
    "correctAnswer": "ALU",
    "explanation": "The ALU handles both arithmetic operations and logical comparisons like greater-than checks."
  },
  {
    "id": "c2-109",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Which term is interchangeable with 'main memory' in most textbooks?",
    "options": [
      "Primary memory",
      "Secondary memory",
      "Magnetic tape",
      "Cache only"
    ],
    "correctAnswer": "Primary memory",
    "explanation": "Primary memory and main memory refer to the same thing — the CPU-accessible working memory of a computer."
  },
  {
    "id": "c2-110",
    "type": "mcq",
    "difficulty": "easy",
    "question": "Storing bits as tiny magnetized or non-magnetized spots is a technique used by which storage device?",
    "options": [
      "Magnetic disk",
      "Monitor",
      "Keyboard",
      "Printer"
    ],
    "correctAnswer": "Magnetic disk",
    "explanation": "Magnetic disks represent binary data using the presence or absence of a magnetic spot."
  },
  {
    "id": "c2-111",
    "type": "mcq",
    "difficulty": "medium",
    "question": "In a Horizontal Micro-programmed Control Unit with 53 control signals, how many bits are typically required?",
    "options": [
      "53 bits",
      "8 bits",
      "1 bit",
      "106 bits"
    ],
    "correctAnswer": "53 bits",
    "explanation": "Horizontal microprogramming uses 1 bit per control signal in decoded binary format, so 53 signals need 53 bits."
  },
  {
    "id": "c2-112",
    "type": "mcq",
    "difficulty": "hard",
    "question": "Why is a Vertical Micro-programmed Control Unit slower than a Horizontal one?",
    "options": [
      "It represents control signals in encoded format and needs extra decoder hardware",
      "It uses more control memory",
      "It has no control store",
      "It cannot support conditional addressing"
    ],
    "correctAnswer": "It represents control signals in encoded format and needs extra decoder hardware",
    "explanation": "Vertical microprogramming encodes control signals, requiring additional decoder hardware, which makes it slower than the horizontal approach."
  },
  {
    "id": "c2-113",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What is the main advantage of a two-level control store over a single-level control store?",
    "options": [
      "It avoids repeatedly storing the same operation parts, shrinking overall control memory size",
      "It eliminates the need for a control address register",
      "It removes the need for an instruction register",
      "It doubles the speed of hardwired control"
    ],
    "correctAnswer": "It avoids repeatedly storing the same operation parts, shrinking overall control memory size",
    "explanation": "A two-level control store adds a Nano-instruction memory so repeated control signal combinations aren't duplicated, reducing microinstruction word size and overall control memory size."
  },
  {
    "id": "c2-114",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is another common name for the next address generator in a microprogrammed control unit?",
    "options": [
      "Micro-program sequencer",
      "Instruction decoder",
      "Bootstrap loader",
      "Program counter"
    ],
    "correctAnswer": "Micro-program sequencer",
    "explanation": "The next address generator is also called a micro-program sequencer since it determines the address sequence read from control memory."
  },
  {
    "id": "c2-115",
    "type": "mcq",
    "difficulty": "medium",
    "question": "In the memory hierarchy, which three levels are classified as primary (volatile) memory?",
    "options": [
      "Registers, cache, and main memory",
      "Main memory, magnetic disks, and magnetic tapes",
      "Cache, magnetic disks, and optical disks",
      "Registers, magnetic tapes, and ROM"
    ],
    "correctAnswer": "Registers, cache, and main memory",
    "explanation": "The five memory hierarchy levels split into three primary/volatile levels (registers, cache, main memory) and two secondary/nonvolatile levels (magnetic discs and tapes)."
  },
  {
    "id": "c2-116",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which memory hierarchy characteristic is defined as the time interval between a request for information and access to its first bit?",
    "options": [
      "Latency",
      "Bandwidth",
      "Capacity",
      "Access time"
    ],
    "correctAnswer": "Latency",
    "explanation": "Latency is defined as the time interval between the request for information and the access to the first bit of that information."
  },
  {
    "id": "c2-117",
    "type": "mcq",
    "difficulty": "hard",
    "question": "According to the memory hierarchy trend, what happens to capacity as you move from the top (registers) toward the bottom (tape)?",
    "options": [
      "Capacity increases",
      "Capacity decreases",
      "Capacity stays constant",
      "Capacity becomes zero"
    ],
    "correctAnswer": "Capacity increases",
    "explanation": "The capacity of a memory hierarchy level typically increases as data moves from the top of the hierarchy toward the bottom."
  },
  {
    "id": "c2-118",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Why is polling described as inefficient compared to using interrupts?",
    "options": [
      "It wastes CPU cycles by continuously checking hardware and increases response latency",
      "It requires more memory than interrupts",
      "It can only be used with secondary storage",
      "It prevents the use of a program counter"
    ],
    "correctAnswer": "It wastes CPU cycles by continuously checking hardware and increases response latency",
    "explanation": "Polling wastes CPU cycles by constantly checking for signals and increases latency since the CPU may not respond immediately to an event."
  },
  {
    "id": "c2-119",
    "type": "mcq",
    "difficulty": "hard",
    "question": "What generally happens right after an ISR finishes handling an interrupt?",
    "options": [
      "Control is transferred back to the interrupted process at the exact position it left off",
      "The CPU shuts down",
      "The program counter is reset to zero",
      "The main memory is cleared"
    ],
    "correctAnswer": "Control is transferred back to the interrupted process at the exact position it left off",
    "explanation": "Once the interrupt signal is handled, control returns to the previous process to continue exactly where it left off."
  },
  {
    "id": "c2-120",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Which of the four categories of processor actions involves data being moved between the processor and a peripheral device?",
    "options": [
      "Processor-I/O",
      "Processor-memory",
      "Data processing",
      "Control"
    ],
    "correctAnswer": "Processor-I/O",
    "explanation": "Processor-I/O actions transfer data between the processor and an I/O module connected to a peripheral device."
  },
  {
    "id": "c2-121",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What does the 'next instruction reference' element of a machine instruction tell the processor?",
    "options": [
      "Where to fetch the next instruction after the current one finishes",
      "The opcode of the current instruction",
      "The value of the source operand",
      "The size of main memory"
    ],
    "correctAnswer": "Where to fetch the next instruction after the current one finishes",
    "explanation": "The next instruction reference tells the processor where to fetch the next instruction once execution of the current one is complete."
  },
  {
    "id": "c2-122",
    "type": "mcq",
    "difficulty": "hard",
    "question": "In most cases, without an explicit next instruction reference, where does the processor fetch the next instruction from?",
    "options": [
      "The instruction immediately following the current one",
      "A randomly chosen memory address",
      "The bootstrap loader",
      "The interrupt service routine"
    ],
    "correctAnswer": "The instruction immediately following the current one",
    "explanation": "In most cases, when there's no explicit reference, the next instruction to be fetched immediately follows the current instruction."
  },
  {
    "id": "c2-123",
    "type": "mcq",
    "difficulty": "medium",
    "question": "What is the bootstrap loader's function?",
    "options": [
      "To start the computer software operating when power is turned on",
      "To store data permanently on a hard disk",
      "To decode microinstructions",
      "To generate interrupt signals"
    ],
    "correctAnswer": "To start the computer software operating when power is turned on",
    "explanation": "The bootstrap loader is a program stored in ROM whose function is to start the computer software operating when power is turned on."
  },
  {
    "id": "c2-124",
    "type": "mcq",
    "difficulty": "medium",
    "question": "Why is ROM used to store the bootstrap loader instead of RAM?",
    "options": [
      "ROM retains its contents when power is turned off, unlike volatile RAM",
      "ROM is faster than the CPU registers",
      "ROM has unlimited storage capacity",
      "ROM can be rewritten more easily than RAM"
    ],
    "correctAnswer": "ROM retains its contents when power is turned off, unlike volatile RAM",
    "explanation": "Since RAM is volatile and loses its contents when power is off, ROM is used to permanently store the bootstrap loader."
  },
  {
    "id": "c2-125",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "In Horizontal Micro-programmed Control, more than one control signal can be enabled at the same time.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "Horizontal microprogramming allows more than one control signal to be active simultaneously since each bit maps directly to a signal."
  },
  {
    "id": "c2-126",
    "type": "truefalse",
    "difficulty": "hard",
    "question": "Vertical Micro-programmed Control requires no additional decoder hardware, unlike the Horizontal approach.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "False",
    "explanation": "It's the opposite: Horizontal control needs no additional decoders, while Vertical control requires extra decoder hardware to interpret encoded signals."
  },
  {
    "id": "c2-127",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "Secondary memory, such as magnetic disk and magnetic tape, is also known as external memory.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "Secondary memory can only be accessed through an input/output module and is also known as external memory."
  },
  {
    "id": "c2-128",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "Bandwidth in the memory hierarchy measures the total amount of data a memory level can store.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "False",
    "explanation": "Bandwidth measures the number of bits that can be accessed per second; capacity is what measures total storage amount."
  },
  {
    "id": "c2-129",
    "type": "truefalse",
    "difficulty": "hard",
    "question": "Adaptability in a Microprogrammed Control Unit comes at the cost of it being slower than a Hardwired Control Unit.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "The handout lists this as a disadvantage: adaptability is obtained at more cost, and microprogrammed control is slower than hardwired control."
  },
  {
    "id": "c2-130",
    "type": "truefalse",
    "difficulty": "medium",
    "question": "Software interrupts generally have a higher priority than hardware interrupts.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "explanation": "The handout states that software interrupts have higher priority than hardware interrupts."
  }
];

// Browser-only global — no module.exports here since index.html loads this
// via a plain <script src="ift.js"> tag, not as a Node/ESM module.
