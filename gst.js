// Browser-only global — index.html loads this via <script src="gst.js">
// and looks for a global named gstQuestions (see COURSES.names in index.html).
const gstQuestions = [
  {
    id: "c3-001",
    type: "mcq",
    difficulty: "easy",
    question: "Which of the following is NOT listed as one of the strategic essences of entrepreneurship in a developing economy?",
    options: ["Economic Development", "Employment Opportunities", "Reduction in Rural-Urban Drifts", "Increase in Foreign Debt"],
    correctAnswer: "Increase in Foreign Debt",
    explanation: "The handout lists economic development, employment opportunities, local technology development, reduction in rural-urban drift, and conservation of foreign exchange — not an increase in foreign debt."
  },
  {
    id: "c3-002",
    type: "mcq",
    difficulty: "easy",
    question: "According to the handout, small businesses create more jobs than big businesses mainly because they are:",
    options: ["Capital intensive", "Labour intensive", "Government owned", "Export focused"],
    correctAnswer: "Labour intensive",
    explanation: "The labour-intensive nature of small businesses allows them to create more jobs than big businesses."
  },
  {
    id: "c3-003",
    type: "mcq",
    difficulty: "medium",
    question: "Which entrepreneurship theory states that entrepreneurship happens when the entrepreneur innovates, such as creating a new product or discovering a new market?",
    options: ["Knight Risk-bearing Theory", "Weber's Sociological Theory", "Schumpeter's Innovation Theory", "Casson's Economic Theory"],
    correctAnswer: "Schumpeter's Innovation Theory",
    explanation: "Schumpeter's Innovation Theory ties entrepreneurship directly to acts of innovation like new products, new production methods, or new markets."
  },
  {
    id: "c3-004",
    type: "mcq",
    difficulty: "medium",
    question: "Which theory holds that the entrepreneur earns profit as a reward for bearing uninsurable risk?",
    options: ["Drucker's Theory", "Knight Risk-bearing Theory", "McCelland Theory of Achievement Motivation", "Casson's Economic Theory"],
    correctAnswer: "Knight Risk-bearing Theory",
    explanation: "Knight's theory divides risk into insurable and uninsurable types and views profit as the reward for bearing uninsurable (uncertainty) risk."
  },
  {
    id: "c3-005",
    type: "mcq",
    difficulty: "medium",
    question: "Weber's Sociological Theory of entrepreneurship claims that the main driving force of entrepreneurship is:",
    options: ["Access to finance", "Social culture", "Government policy", "Technology"],
    correctAnswer: "Social culture",
    explanation: "Weber's theory sees social culture, including religious beliefs, taboos, and customs, as the main driver of entrepreneurship."
  },
  {
    id: "c3-006",
    type: "mcq",
    difficulty: "easy",
    question: "According to McCelland's Theory of Achievement Motivation, which two needs mainly drive entrepreneurship?",
    options: ["Need for affiliation and need for power", "Need for achievement and need for power", "Need for achievement and need for affiliation", "Need for money and need for fame"],
    correctAnswer: "Need for achievement and need for power",
    explanation: "McCelland identified three motives (achievement, affiliation, power), but the handout states it is the need for achievement and the need for power that drive entrepreneurship."
  },
  {
    id: "c3-007",
    type: "truefalse",
    difficulty: "easy",
    question: "An entrepreneurship culture is an environment where someone is motivated to innovate, create, and take risks.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "This matches the handout's definition of an entrepreneurship culture."
  },
  {
    id: "c3-008",
    type: "mcq",
    difficulty: "hard",
    question: "Who is credited as one of the first people to introduce the concept of 'entrepreneur' in a work published in 1775?",
    options: ["Adam Smith", "Richard Cantillon", "Joseph Schumpeter", "Max Weber"],
    correctAnswer: "Richard Cantillon",
    explanation: "Richard Cantillon introduced the concept of the entrepreneur in a paper written between 1730-1734, published in 1775 as 'Essai Sur La Nature du Commerce en General'."
  },
  {
    id: "c3-009",
    type: "mcq",
    difficulty: "hard",
    question: "Which economist completed the economic system based on the capitalization concept, publishing 'The Wealth of Nations' in 1776?",
    options: ["Richard Cantillon", "Franciousquesney", "Adam Smith", "John Campbell"],
    correctAnswer: "Adam Smith",
    explanation: "The Scottish economist Adam Smith built on the physiocrats' earlier work and published The Wealth of Nations in 1776."
  },
  {
    id: "c3-010",
    type: "mcq",
    difficulty: "medium",
    question: "Which of the following is listed as a barrier to entrepreneurial practice in the handout?",
    options: ["Excess government funding", "Lack of funds and difficulty securing bank loans", "Too much infrastructure", "Overregulation of foreign trade only"],
    correctAnswer: "Lack of funds and difficulty securing bank loans",
    explanation: "The handout names lack of funds/difficulty securing loans, desire for quick returns, fraudulent practices, poor planning, and lack of infrastructure as barriers."
  },
  {
    id: "c3-011",
    type: "truefalse",
    difficulty: "easy",
    question: "PESTEL stands for Political, Economic, Socio-cultural, Technological, Ecological, and Legal environments.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "PESTEL represents Political, Economic, Socio-cultural, Technological, Ecological, and Legal environments."
  },
  {
    id: "c3-012",
    type: "mcq",
    difficulty: "medium",
    question: "Which of these is classified as an INTERNAL factor of the entrepreneurial environment?",
    options: ["Suppliers", "Political stability", "Legal regulation", "Ecological conditions"],
    correctAnswer: "Suppliers",
    explanation: "Internal factors, which the business can control, include suppliers, customers, market intermediaries, competitors, and financial intermediaries."
  },
  {
    id: "c3-013",
    type: "mcq",
    difficulty: "easy",
    question: "Which of the following is one of the five internal factors of the business environment mentioned in the handout?",
    options: ["Customers", "Ecological Environment", "Legal Environment", "Political Environment"],
    correctAnswer: "Customers",
    explanation: "The five internal factors listed are supplier, customers, market intermediaries, competitors, and financial intermediaries."
  },
  {
    id: "c3-014",
    type: "mcq",
    difficulty: "medium",
    question: "According to the handout, why is it important for a business to build relationships with more than one supplier?",
    options: ["To reduce advertising costs", "So goods can still be purchased if one supplier delays or stops supplying", "To increase interest rates", "To avoid paying taxes"],
    correctAnswer: "So goods can still be purchased if one supplier delays or stops supplying",
    explanation: "Having multiple suppliers protects the business from production stoppages if one supplier delays or halts supply."
  },
  {
    id: "c3-015",
    type: "mcq",
    difficulty: "medium",
    question: "Under the PESTEL framework, exchange rates, GDP, inflation, and interest rates fall under which environment?",
    options: ["Political Environment", "Economic Environment", "Socio-cultural Environment", "Legal Environment"],
    correctAnswer: "Economic Environment",
    explanation: "These are macro-economic factors, which the handout places under the Economic Environment."
  },
  {
    id: "c3-016",
    type: "mcq",
    difficulty: "medium",
    question: "Consumer demand for healthier food products, prompting companies to diversify into low-sugar items, is an example of which PESTEL factor?",
    options: ["Political Environment", "Socio-cultural Environment", "Ecological Environment", "Legal Environment"],
    correctAnswer: "Socio-cultural Environment",
    explanation: "Changing consumer tastes and social trends like health-consciousness fall under the socio-cultural environment."
  },
  {
    id: "c3-017",
    type: "mcq",
    difficulty: "hard",
    question: "The replacement of CD-players and video cassettes by MP3 players is used in the handout as an example of what concept?",
    options: ["Disruptive innovation", "Franchising", "Diffusion theory", "Change resistance"],
    correctAnswer: "Disruptive innovation",
    explanation: "The handout describes such technology-driven shifts, where new inventions make older technology obsolete, as disruptive innovations."
  },
  {
    id: "c3-018",
    type: "mcq",
    difficulty: "easy",
    question: "In Nigeria, which agency is named in the handout as an important regulator in the life/health science sector?",
    options: ["NOTAP", "NAFDAC", "RMRDC", "FIRRO"],
    correctAnswer: "NAFDAC",
    explanation: "The National Agency for Food and Drugs Administration and Control (NAFDAC) is named as the regulator for the life/health science sector in Nigeria."
  },
  {
    id: "c3-019",
    type: "mcq",
    difficulty: "easy",
    question: "In SWOT analysis, what does the 'O' stand for?",
    options: ["Objectives", "Operations", "Opportunities", "Outcomes"],
    correctAnswer: "Opportunities",
    explanation: "SWOT stands for Strengths, Weaknesses, Opportunities, and Threats."
  },
  {
    id: "c3-020",
    type: "truefalse",
    difficulty: "easy",
    question: "SWOT analysis is also sometimes referred to as Internal-External Analysis.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "The handout states that SWOT is sometimes referred to as Internal-External Analysis, with the SWOT Matrix called an IE Matrix."
  },
  {
    id: "c3-021",
    type: "mcq",
    difficulty: "medium",
    question: "Which of these is listed as a source of new business opportunities in the handout?",
    options: ["Ignoring customer feedback", "Inefficiency in the market", "Avoiding market research", "Reducing product quality"],
    correctAnswer: "Inefficiency in the market",
    explanation: "Identifying inefficiency in the market, where you can correct it with your resources, is listed as a good source of business opportunity."
  },
  {
    id: "c3-022",
    type: "mcq",
    difficulty: "hard",
    question: "E-Bay and PayPal are used in the handout as examples of businesses built on which strategy?",
    options: ["Franchising", "Identifying a perceived need of customers", "Government patent access", "Mass media advertising"],
    correctAnswer: "Identifying a perceived need of customers",
    explanation: "The handout cites E-Bay and PayPal as companies that identified and solved an unmet need in the market."
  },
  {
    id: "c3-023",
    type: "mcq",
    difficulty: "medium",
    question: "Which of the following is one of the four main sources of risk entrepreneurs face, according to the handout?",
    options: ["Weather risk", "Financial risk", "Language risk", "Family risk"],
    correctAnswer: "Financial risk",
    explanation: "The four main risk sources listed are technology, the market for the product, industry-related risks, and financial risks."
  },
  {
    id: "c3-024",
    type: "truefalse",
    difficulty: "easy",
    question: "The handout defines creativity as the invention or origination of any new thing that has value.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "This is the handout's definition of creativity as bringing into being something new, whether a product, process, or thought."
  },
  {
    id: "c3-025",
    type: "mcq",
    difficulty: "medium",
    question: "According to Csikszentmihalyi (2012), creative individuals often display which contrasting pair of traits at once?",
    options: ["Rich and poor", "Playfulness and discipline", "Educated and uneducated", "Employed and unemployed"],
    correctAnswer: "Playfulness and discipline",
    explanation: "One of the ten features described is that creative individuals combine playfulness with discipline, or responsibility with irresponsibility."
  },
  {
    id: "c3-026",
    type: "mcq",
    difficulty: "medium",
    question: "Which creative method involves combining two or more existing ideas into a new, third idea?",
    options: ["Evolution", "Synthesis", "Revolution", "Reapplication"],
    correctAnswer: "Synthesis",
    explanation: "Synthesis is the method where two or more existing ideas are merged to create a new idea."
  },
  {
    id: "c3-027",
    type: "mcq",
    difficulty: "easy",
    question: "Which creative method is described as the method of incremental improvement?",
    options: ["Evolution", "Synthesis", "Revolution", "Changing Direction"],
    correctAnswer: "Evolution",
    explanation: "Evolution refers to slow, incremental improvement, where new ideas build on old ones."
  },
  {
    id: "c3-028",
    type: "mcq",
    difficulty: "hard",
    question: "According to the handout, the Wright brothers, who invented the airplane, were originally:",
    options: ["Aviation engineers", "Bicycle mechanics", "Physicists", "Government officials"],
    correctAnswer: "Bicycle mechanics",
    explanation: "The handout uses the Wright brothers as an example that inventors are not always trained experts in the relevant field — they were bicycle mechanics."
  },
  {
    id: "c3-029",
    type: "mcq",
    difficulty: "medium",
    question: "Which negative attitude toward creativity is illustrated by Thomas Edison's persistence through about 1800 attempts to find the right lamp filament?",
    options: ["I might fail", "That's childish", "What will people think?", "It can't be done"],
    correctAnswer: "I might fail",
    explanation: "Edison's story is used to illustrate overcoming the fear of failure, framing failed attempts as gained knowledge rather than defeat."
  },
  {
    id: "c3-030",
    type: "mcq",
    difficulty: "easy",
    question: "Intellectual Property (IP) is divided into which two main categories?",
    options: ["Patents and Trademarks", "Industrial Property and Copyright", "Trade Secrets and Royalties", "Licenses and Assignments"],
    correctAnswer: "Industrial Property and Copyright",
    explanation: "IP is divided into Industrial Property (patents, trademarks, industrial designs) and Copyright (literary and artistic works)."
  },
  {
    id: "c3-031",
    type: "mcq",
    difficulty: "medium",
    question: "In Nigeria, which body administers copyright matters?",
    options: ["NOTAP", "Nigerian Copyright Commission (NCC)", "SMEDAN", "RMRDC"],
    correctAnswer: "Nigerian Copyright Commission (NCC)",
    explanation: "The NCC, under the Federal Ministry of Justice, is charged with primary responsibility for copyright matters in Nigeria."
  },
  {
    id: "c3-032",
    type: "mcq",
    difficulty: "hard",
    question: "Under Nigerian law, how long after the death of the author does copyright expire for literary, musical, or artistic works (excluding photographs)?",
    options: ["25 years", "50 years", "70 years", "100 years"],
    correctAnswer: "70 years",
    explanation: "Copyright for such works expires 70 years after the end of the year in which the author dies."
  },
  {
    id: "c3-033",
    type: "mcq",
    difficulty: "medium",
    question: "According to the handout, which type of intellectual property right does NOT expire, so long as it continues to be used?",
    options: ["Patents", "Copyright", "Trademark rights", "Trade secrets"],
    correctAnswer: "Trademark rights",
    explanation: "Trademark rights are the exception to limited IP periods — they never expire as long as the merchant keeps using the trademark."
  },
  {
    id: "c3-034",
    type: "truefalse",
    difficulty: "medium",
    question: "According to the handout, the formula for Coca-Cola is an example of a trade secret protected by intellectual property law.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "The handout explicitly gives the Coca-Cola formula as an example of a protected trade secret."
  },
  {
    id: "c3-035",
    type: "mcq",
    difficulty: "hard",
    question: "Which international agreement obliges WTO member countries to provide minimum standards of intellectual property protection, including for copyright, trademarks, and patents?",
    options: ["The Paris Convention", "The Berne Convention", "The TRIPS Agreement", "The AU Model Law"],
    correctAnswer: "The TRIPS Agreement",
    explanation: "The Trade Related Aspects of Intellectual Property Rights (TRIPS) Agreement of 1994 set minimum IP protection standards for WTO members."
  },
  {
    id: "c3-036",
    type: "truefalse",
    difficulty: "easy",
    question: "Techno-preneurs are entrepreneurs who use technology as their driving factor in transforming resources into goods and services.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Techno-preneurs use technology as their key driving factor, as seen with companies like Apple and Microsoft."
  },
  {
    id: "c3-037",
    type: "mcq",
    difficulty: "medium",
    question: "According to the handout's simple definitions, which discipline tells us 'HOW' things happen?",
    options: ["Science", "Engineering", "Technology", "Sociology"],
    correctAnswer: "Engineering",
    explanation: "The handout states Science tells us WHY things happen, Engineering tells us HOW, and Technology makes things happen."
  },
  {
    id: "c3-038",
    type: "mcq",
    difficulty: "medium",
    question: "Which Nigerian agency was established in 1979 to strengthen national capabilities for negotiation, acquisition, and promotion of technology?",
    options: ["RMRDC", "NOTAP", "FIRRO", "TIC"],
    correctAnswer: "NOTAP",
    explanation: "The National Office for Technology Acquisition and Promotion (NOTAP) was established in 1979, headquartered in Abuja."
  },
  {
    id: "c3-039",
    type: "mcq",
    difficulty: "hard",
    question: "Which institution supporting technological entrepreneurship focuses on facilitating research and promoting the use of local raw materials in Nigeria?",
    options: ["NOTAP", "Raw Material Research and Development Council (RMRDC)", "Technology Incubation Centers (TIC)", "FIRRO"],
    correctAnswer: "Raw Material Research and Development Council (RMRDC)",
    explanation: "RMRDC, established in 1987, promotes research and the development and use of local raw materials in Nigeria."
  },
  {
    id: "c3-040",
    type: "mcq",
    difficulty: "easy",
    question: "Which of the following is described in the handout as a new technology creating entrepreneurship opportunities?",
    options: ["Biotechnology", "Trade unionism", "Franchising", "Sole proprietorship"],
    correctAnswer: "Biotechnology",
    explanation: "Biotechnology, along with Information Communication Technology and Nanotechnology, is named as a new technology creating entrepreneurial opportunities."
  },
  {
    id: "c3-041",
    type: "mcq",
    difficulty: "medium",
    question: "According to the handout, innovation begins with:",
    options: ["Financing", "Creativity", "Marketing", "Government regulation"],
    correctAnswer: "Creativity",
    explanation: "The handout states that innovation begins with creativity, and organizations aim to sustain competitive advantage through innovation."
  },
  {
    id: "c3-042",
    type: "mcq",
    difficulty: "medium",
    question: "Which type of innovation is described as extremely unique and needing strong patent, trade secret, or copyright protection, with examples like the Internet and the automobile?",
    options: ["Ordinary Innovation", "Technological Innovation", "Breakthrough Innovation", "Diffusion Innovation"],
    correctAnswer: "Breakthrough Innovation",
    explanation: "Breakthrough innovations are extremely unique and set the basis for further innovation, so they require strong protection."
  },
  {
    id: "c3-043",
    type: "mcq",
    difficulty: "hard",
    question: "According to the Diffusion Theory of Innovation, the life cycle of innovations is commonly described using which shape of curve?",
    options: ["A straight line", "An 'S'-curve", "A 'V'-curve", "A circular curve"],
    correctAnswer: "An 'S'-curve",
    explanation: "The S-curve (or diffusion curve) reflects a product life of a start-up phase, rapid revenue increase, and eventual decline."
  },
  {
    id: "c3-044",
    type: "mcq",
    difficulty: "easy",
    question: "Which of the following is listed as one of the five forces responsible for organizational change?",
    options: ["Weather patterns", "Change in technology", "Family traditions", "Personal hobbies"],
    correctAnswer: "Change in technology",
    explanation: "The five forces listed are economic factors, change in technology, social causes, political and legal changes, and intense competition."
  },
  {
    id: "c3-045",
    type: "mcq",
    difficulty: "medium",
    question: "Which strategy for managing change resistance involves training classes, meetings, and conferences to inform entrepreneurs about a change?",
    options: ["Negotiation and Agreement", "Timing of Change", "Education and Communication", "Leadership"],
    correctAnswer: "Education and Communication",
    explanation: "Education and Communication addresses resistance caused by inadequate or inaccurate information through training and meetings."
  },
  {
    id: "c3-046",
    type: "truefalse",
    difficulty: "easy",
    question: "In a family business, at least two generations of the family must be present or have been involved in the business.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "The handout states that in family businesses, at least two generations are present or would have been involved."
  },
  {
    id: "c3-047",
    type: "mcq",
    difficulty: "medium",
    question: "According to the handout, which of the following is listed as one of the greatest challenges family business owners report?",
    options: ["Formulating a succession plan", "Too much government support", "Excessive advertising costs", "Lack of customers"],
    correctAnswer: "Formulating a succession plan",
    explanation: "Family business owners cited resolving family conflicts, formulating a succession plan, developing a strategic business plan, and developing a retirement/estate plan as their greatest challenges."
  },
  {
    id: "c3-048",
    type: "mcq",
    difficulty: "medium",
    question: "In family business succession planning, which process is recommended to be carried out first?",
    options: ["Ownership succession", "Management succession", "Marketing succession", "Financial succession"],
    correctAnswer: "Management succession",
    explanation: "The handout recommends carrying out management succession first so that the ownership succession plan can reflect and support it."
  },
  {
    id: "c3-049",
    type: "mcq",
    difficulty: "easy",
    question: "The ultimate goal of a social entrepreneur, as distinct from a regular entrepreneur, is to:",
    options: ["Maximize personal wealth", "Fulfill a social mission", "Avoid all risk", "Compete only with large corporations"],
    correctAnswer: "Fulfill a social mission",
    explanation: "While a regular entrepreneur aims to create economic wealth, a social entrepreneur's priority is fulfilling the social mission."
  },
  {
    id: "c3-050",
    type: "mcq",
    difficulty: "hard",
    question: "Which enhancement factor for social entrepreneurship involves comparing results achieved with set objectives so the entrepreneur can learn from success and failure?",
    options: ["Knowledge management", "Feedback mechanism", "Resilience", "Reputation"],
    correctAnswer: "Feedback mechanism",
    explanation: "The feedback mechanism factor lets the social entrepreneur improve performance by comparing achieved results against set objectives."
  },
  {
    id: "c3-051",
    type: "mcq",
    difficulty: "medium",
    question: "According to Casson's Economic Theory, entrepreneurship arises mainly as a result of:",
    options: ["Uninsurable risk", "Favourable economic conditions", "Religious beliefs", "The need for affiliation"],
    correctAnswer: "Favourable economic conditions",
    explanation: "Casson's Economic Theory states entrepreneurship results from conducive or favourable economic conditions, such as taxation policy, access to finance, and availability of raw materials."
  },
  {
    id: "c3-052",
    type: "mcq",
    difficulty: "medium",
    question: "Drucker's Theory of entrepreneurship identifies which of the following as key to entrepreneurship?",
    options: ["Risk-bearing alone", "Innovation resource and entrepreneurial behaviour", "Social culture", "Government regulation"],
    correctAnswer: "Innovation resource and entrepreneurial behaviour",
    explanation: "Drucker's Theory states that innovation resource and entrepreneurial behaviour are key to entrepreneurship, taking advantage of possibilities created by social, cultural, and technological changes."
  },
  {
    id: "c3-053",
    type: "truefalse",
    difficulty: "medium",
    question: "According to Casson's Economic Theory, access to information about market conditions can encourage entrepreneurship.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "The handout lists access to information about market conditions as one of the economic factors that can encourage entrepreneurship under Casson's theory."
  },
  {
    id: "c3-054",
    type: "mcq",
    difficulty: "hard",
    question: "Who were the first proponents of laissez-faire economics, opposing all government intervention in industry, especially taxation?",
    options: ["The mercantilists", "The physiocrats", "The Keynesians", "The monetarists"],
    correctAnswer: "The physiocrats",
    explanation: "The physiocrats, a group of thinkers who emerged in France in the early eighteenth century, were the first proponents of laissez-faire and opposed government intervention in industry."
  },
  {
    id: "c3-055",
    type: "mcq",
    difficulty: "easy",
    question: "Which of the following best describes the meaning of 'culture' as used in the handout's discussion of entrepreneurship culture?",
    options: ["A country's official language", "The mix of norms, values, and beliefs shared by a particular community", "A government's economic policy", "A business's financial statements"],
    correctAnswer: "The mix of norms, values, and beliefs shared by a particular community",
    explanation: "Culture is defined as the mix of norms, values, and beliefs shared by a particular community, whether a business community, ethnic group, country, or region."
  },
  {
    id: "c3-056",
    type: "mcq",
    difficulty: "medium",
    question: "Which of the following is listed as a barrier to entrepreneurship practice alongside lack of funds?",
    options: ["Desire for quick returns", "Excess of raw materials", "Too many suppliers", "Overproduction"],
    correctAnswer: "Desire for quick returns",
    explanation: "The handout lists desire for quick returns, fraudulent practices, poor planning, and lack of infrastructure alongside lack of funds as barriers to entrepreneurship practice."
  },
  {
    id: "c3-057",
    type: "mcq",
    difficulty: "medium",
    question: "In the internal business environment, which factor helps promote sales through advertising using salesmen and middlemen?",
    options: ["Financial intermediaries", "Market intermediaries", "Competitors", "Customers"],
    correctAnswer: "Market intermediaries",
    explanation: "Market intermediaries, including salesmen and middlemen, help promote sales through various forms of advertisement."
  },
  {
    id: "c3-058",
    type: "mcq",
    difficulty: "medium",
    question: "Under PESTEL analysis, factors such as political stability, tax policies, and trade restrictions fall under which environment?",
    options: ["Economic Environment", "Political Environment", "Ecological Environment", "Technological Environment"],
    correctAnswer: "Political Environment",
    explanation: "Political factors affecting business include political stability, tax policies, trade restrictions, employment/labour laws, and tariffs."
  },
  {
    id: "c3-059",
    type: "mcq",
    difficulty: "hard",
    question: "According to the handout, technology often becomes a threat to business because it:",
    options: ["Never changes", "Usually becomes obsolete within a few months of being invented", "Is always too expensive to adopt", "Cannot be patented"],
    correctAnswer: "Usually becomes obsolete within a few months of being invented",
    explanation: "Technology presents threats since it usually becomes obsolete or outdated within a few months after being invented, as seen with CD-players and video cassettes."
  },
  {
    id: "c3-060",
    type: "mcq",
    difficulty: "medium",
    question: "Which factor in the external business environment includes considerations like temperature, rainfall, natural calamities, and pollution?",
    options: ["Ecological Environment", "Legal Environment", "Socio-cultural Environment", "Economic Environment"],
    correctAnswer: "Ecological Environment",
    explanation: "Environmental factors under the Ecological Environment include temperature, rain, natural calamities, pollution, deforestation, and land conditions."
  },
  {
    id: "c3-061",
    type: "truefalse",
    difficulty: "easy",
    question: "SWOT analysis is sometimes referred to as Internal-External Analysis, with the SWOT Matrix called an IE Matrix.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "The handout states SWOT is sometimes referred to as Internal-External Analysis and the SWOT Matrix is called an IE Matrix."
  },
  {
    id: "c3-062",
    type: "mcq",
    difficulty: "medium",
    question: "In SWOT analysis, which pair of factors is generally considered internal to an organization?",
    options: ["Opportunities and threats", "Strengths and weaknesses", "Threats and weaknesses", "Strengths and opportunities"],
    correctAnswer: "Strengths and weaknesses",
    explanation: "Strengths and weaknesses are generally internal to an organization, while opportunities and threats generally relate to external factors."
  },
  {
    id: "c3-063",
    type: "mcq",
    difficulty: "medium",
    question: "Which of the following is listed as an example of a business weakness in SWOT analysis?",
    options: ["Strong management team", "Adequate financial resources", "Outdated or obsolete facilities", "Customer goodwill"],
    correctAnswer: "Outdated or obsolete facilities",
    explanation: "Outdated/obsolete facilities is listed as an example of a weakness, alongside cost disadvantages, weak market image, and poor financial position."
  },
  {
    id: "c3-064",
    type: "mcq",
    difficulty: "medium",
    question: "Which of these is given as a source of entrepreneurial opportunity from identifying market gaps?",
    options: ["Inefficiency in the market", "High government taxation", "Lack of competitors' interest", "Currency devaluation"],
    correctAnswer: "Inefficiency in the market",
    explanation: "Identifying inefficiency in the market, along with having the resources and capability to correct it, is listed as a good source of business opportunity."
  },
  {
    id: "c3-065",
    type: "mcq",
    difficulty: "hard",
    question: "In the strategies for exploiting environmental opportunities, which analysis asks 'Who else is supplying that particular market?'",
    options: ["Customer/Market Analysis", "Competitor/Competitive Analysis", "Industry Analysis", "Risk Analysis"],
    correctAnswer: "Competitor/Competitive Analysis",
    explanation: "Competitor/Competitive Analysis involves finding out who else is supplying the market and what they are doing for customers."
  },
  {
    id: "c3-066",
    type: "mcq",
    difficulty: "medium",
    question: "Which Nigerian agency is named as an important regulator in the life/health science sector when conducting an industry analysis?",
    options: ["NOTAP", "NAFDAC", "RMRDC", "FIRRO"],
    correctAnswer: "NAFDAC",
    explanation: "The National Agency for Food and Drugs Administration and Control (NAFDAC) is named as an important regulator in Nigeria's life/health science sector."
  },
  {
    id: "c3-067",
    type: "mcq",
    difficulty: "medium",
    question: "According to the handout, which of these is a main source of risk that entrepreneurs face when entering a market?",
    options: ["Technology risk", "Weather forecasting risk", "Currency naming risk", "Alphabet risk"],
    correctAnswer: "Technology risk",
    explanation: "The main sources of risk listed are technology risk, market risk, risks associated with the industry, and financial risks."
  },
  {
    id: "c3-068",
    type: "truefalse",
    difficulty: "easy",
    question: "According to the handout, creativity refers to the invention or origination of any new thing that has value.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "This matches the handout's definition: creativity refers to the invention or origination of any new thing that has value."
  },
  {
    id: "c3-069",
    type: "mcq",
    difficulty: "medium",
    question: "Which of the following is listed as one of the three reasons people are motivated to be creative?",
    options: ["Need for novel, varied, and complex stimulation", "Need for approval from strangers", "Need to avoid all risk", "Need for large capital"],
    correctAnswer: "Need for novel, varied, and complex stimulation",
    explanation: "The three reasons listed are the need for novel, varied, and complex stimulation, the need to communicate ideas and values, and the need to solve problems."
  },
  {
    id: "c3-070",
    type: "mcq",
    difficulty: "hard",
    question: "According to Csikszentmihalyi's features of the creative personality, creative individuals tend to display which of the following combinations?",
    options: ["Playfulness and discipline", "Laziness and confidence", "Aggression and secrecy", "Silence and isolation"],
    correctAnswer: "Playfulness and discipline",
    explanation: "Csikszentmihalyi listed a combination of playfulness and discipline, or responsibility and irresponsibility, as one of the ten features of creative individuals."
  },
  {
    id: "c3-071",
    type: "mcq",
    difficulty: "medium",
    question: "Which creative method involves combining two or more existing ideas into a third, new idea?",
    options: ["Evolution", "Synthesis", "Revolution", "Reapplication"],
    correctAnswer: "Synthesis",
    explanation: "Synthesis is the creative method where two or more existing ideas are combined into a third, new idea."
  },
  {
    id: "c3-072",
    type: "mcq",
    difficulty: "medium",
    question: "Which creative method is described as the method of incremental improvement, where new ideas stem from other ideas?",
    options: ["Evolution", "Synthesis", "Revolution", "Changing Direction"],
    correctAnswer: "Evolution",
    explanation: "Evolution is described as the method of incremental improvement, where new solutions stem from previous ones that are slightly improved."
  },
  {
    id: "c3-073",
    type: "mcq",
    difficulty: "hard",
    question: "According to the handout, who invented the ball point pen, illustrating that inventors need not be experts in a related field?",
    options: ["A mechanical engineer", "A printer's proofreader named Ladislao Biro", "An aviation engineer", "A university professor"],
    correctAnswer: "A printer's proofreader named Ladislao Biro",
    explanation: "The ball point pen was invented by a printer's proofreader, Ladislao Biro, not a mechanical engineer, illustrating that creativity is not limited to experts."
  },
  {
    id: "c3-074",
    type: "mcq",
    difficulty: "medium",
    question: "Which negative attitude toward creativity is illustrated by the statement 'It can't be done'?",
    options: ["Surrendering before the battle", "Overconfidence", "Excessive risk-taking", "Lack of funding"],
    correctAnswer: "Surrendering before the battle",
    explanation: "The attitude 'It can't be done' is described as, in effect, surrendering before the battle, giving a problem more power than it actually has."
  },
  {
    id: "c3-075",
    type: "mcq",
    difficulty: "medium",
    question: "Intellectual Property (IP) is broadly divided into which two main categories?",
    options: ["Trademarks and patents only", "Industrial property and copyright", "Domestic property and foreign property", "Personal property and real property"],
    correctAnswer: "Industrial property and copyright",
    explanation: "IP is divided into industrial property (inventions, trademarks, industrial designs) and copyright (literary and artistic works)."
  },
  {
    id: "c3-076",
    type: "mcq",
    difficulty: "hard",
    question: "In Nigeria, the registration of trademarks is governed by which law?",
    options: ["Patents and Designs Act 1970", "Trademarks Act 1965", "Copyright Act", "TRIPS Agreement"],
    correctAnswer: "Trademarks Act 1965",
    explanation: "The system of Trademark registration in Nigeria is governed by the Trademarks Act 1965, found in Cap 436 Laws of the Federation of Nigeria 1990."
  },
  {
    id: "c3-077",
    type: "mcq",
    difficulty: "hard",
    question: "Which agency is charged with the primary responsibility for copyright matters in Nigeria?",
    options: ["NOTAP", "Nigerian Copyright Commission (NCC)", "RMRDC", "NAFDAC"],
    correctAnswer: "Nigerian Copyright Commission (NCC)",
    explanation: "Copyright in Nigeria is protected by the Copyright Act and administered by the Nigerian Copyright Commission (NCC), under the Federal Ministry of Justice."
  },
  {
    id: "c3-078",
    type: "mcq",
    difficulty: "hard",
    question: "According to the handout, which type of intellectual property right, unlike others, never expires as long as it continues to be used to identify a product?",
    options: ["Patent rights", "Copyright", "Trademark rights", "Trade secret rights"],
    correctAnswer: "Trademark rights",
    explanation: "Trademark rights never expire, so long as a merchant continues to use the trademark to identify a given product, unlike other IP rights which are time-limited."
  },
  {
    id: "c3-079",
    type: "mcq",
    difficulty: "medium",
    question: "Which type of intellectual property protects confidential business information, such as the formula for a soft drink?",
    options: ["Trade secret law", "Patent law", "Trademark law", "Right of publicity law"],
    correctAnswer: "Trade secret law",
    explanation: "Trade secret law protects confidential information belonging to a business, giving it a competitive advantage, as with the formula for Coca-Cola."
  },
  {
    id: "c3-080",
    type: "truefalse",
    difficulty: "medium",
    question: "In Nigeria, copyright for literary, musical, or artistic works generally expires seventy years after the end of the year the author dies.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "In Nigeria, copyright for literary, musical, or artistic works (other than photographs) expires seventy years after the end of the year in which the author dies."
  },
  {
    id: "c3-081",
    type: "mcq",
    difficulty: "medium",
    question: "How long after the recording is first made does copyright expire for cinematograph films and photographs in Nigeria?",
    options: ["25 years", "50 years", "70 years", "100 years"],
    correctAnswer: "50 years",
    explanation: "In Nigeria, copyright for cinematograph films and photographs expires fifty years after the end of the year in which the recording was first made."
  },
  {
    id: "c3-082",
    type: "mcq",
    difficulty: "medium",
    question: "Under copyright transfer, what term is used when the copyright owner retains ownership but authorizes a third party to carry out certain acts for a specific time and purpose?",
    options: ["Assignment", "Licensing", "Abandonment", "Forfeiture"],
    correctAnswer: "Licensing",
    explanation: "Licensing means the copyright owner retains ownership but authorizes a third party to carry out certain acts covered by economic rights, usually for a specific period and purpose."
  },
  {
    id: "c3-083",
    type: "mcq",
    difficulty: "hard",
    question: "Which convention, established in 1886, protects artistic and literary works among member countries?",
    options: ["Paris Convention", "Berne Convention", "TRIPS Agreement", "AU Model Law"],
    correctAnswer: "Berne Convention",
    explanation: "The Berne Convention of 1886 protected artistic and literary works among member countries, while the Paris Convention of 1883 dealt with patents and trademarks."
  },
  {
    id: "c3-084",
    type: "mcq",
    difficulty: "easy",
    question: "Which of the following is one of the three components of technology described in the handout?",
    options: ["Know-how, skills and competence", "Marketing and sales only", "Government subsidies", "Foreign exchange rates"],
    correctAnswer: "Know-how, skills and competence",
    explanation: "The three components of technology listed are machines/equipment/tools; techniques/methodology/strategy; and know-how/skills/competence."
  },
  {
    id: "c3-085",
    type: "mcq",
    difficulty: "medium",
    question: "According to the handout, what does Science tell us, as distinct from Engineering and Technology?",
    options: ["HOW things happen", "WHY things happen", "WHEN things happen", "WHO makes things happen"],
    correctAnswer: "WHY things happen",
    explanation: "Science tells us WHY things happen, Engineering tells us HOW things happen, and Technology makes things happen."
  },
  {
    id: "c3-086",
    type: "mcq",
    difficulty: "medium",
    question: "Which entrepreneurial opportunity involves adapting or imitating other business innovators, especially when there is no patent right for an invention?",
    options: ["Adaptation", "Rapidly expanding market", "Brainstorming", "Failed company or product"],
    correctAnswer: "Adaptation",
    explanation: "Adaptation allows a prospective entrepreneur to adapt or imitate other business innovators, especially when there is no patent right or the rights have lapsed."
  },
  {
    id: "c3-087",
    type: "mcq",
    difficulty: "medium",
    question: "According to the handout, how many people typically make up a brainstorming group, and how long should the session last?",
    options: ["2-5 or 5-10 people, for 1-2 hours", "20-30 people, for a full day", "1 person, for 30 minutes", "50 people, for a week"],
    correctAnswer: "2-5 or 5-10 people, for 1-2 hours",
    explanation: "The usual brainstorming group consists of 2-5 or 5-10 people, and the session should not last more than 1-2 hours."
  },
  {
    id: "c3-088",
    type: "mcq",
    difficulty: "hard",
    question: "Which of the following is listed as one of the components of the Technological Environment affecting business?",
    options: ["Sources of Technology", "Election results", "Family structure", "Religious festivals"],
    correctAnswer: "Sources of Technology",
    explanation: "Components of the Technological Environment include Sources of Technology, Technological Development, Impact of Technology on Human Being, and Technology infrastructure."
  },
  {
    id: "c3-089",
    type: "mcq",
    difficulty: "medium",
    question: "Which Nigerian institution was established to conduct research into food processing, agro-allied, textiles, and design/fabrication of prototypes?",
    options: ["NOTAP", "RMRDC", "Federal Institute of Industrial Research, Oshodi (FIIRO)", "Technology Incubation Centers"],
    correctAnswer: "Federal Institute of Industrial Research, Oshodi (FIIRO)",
    explanation: "FIIRO, located in Lagos, was established to conduct research into food processing, agro-allied industries, textiles, and prototype design and fabrication."
  },
  {
    id: "c3-090",
    type: "mcq",
    difficulty: "medium",
    question: "Technology Incubation Centers (TIC) typically provide integrated facilities and support services for start-up enterprises for what period?",
    options: ["One year", "Three years", "Ten years", "Indefinitely"],
    correctAnswer: "Three years",
    explanation: "Technology Incubation Centers provide integrated facilities, infrastructure, and business support services for a period of three years to help overcome initial start-up challenges."
  },
  {
    id: "c3-091",
    type: "mcq",
    difficulty: "medium",
    question: "According to Okpara's elements of innovation, which element is described as 'the brain', involving generating and sharing ideas?",
    options: ["Challenge", "Creativity", "Communication", "Collaboration"],
    correctAnswer: "Creativity",
    explanation: "Okpara identified Creativity as the element described as 'the brain' — generating and sharing the idea(s)."
  },
  {
    id: "c3-092",
    type: "mcq",
    difficulty: "medium",
    question: "Which element of innovation, described as 'the muscle', refers to implementing the new idea?",
    options: ["Contemplation", "Completion", "Communication", "Culture"],
    correctAnswer: "Completion",
    explanation: "Completion, described as 'the muscle', refers to implementing the new idea in Okpara's framework of innovation elements."
  },
  {
    id: "c3-093",
    type: "mcq",
    difficulty: "hard",
    question: "The word 'innovation' comes from which Latin word, meaning 'to make something new'?",
    options: ["Creare", "Innovare", "Inventio", "Novum"],
    correctAnswer: "Innovare",
    explanation: "The handout states the term innovation comes from the Latin word 'innovare', meaning 'to make something new'."
  },
  {
    id: "c3-094",
    type: "mcq",
    difficulty: "medium",
    question: "Which type of innovation occurs more frequently than breakthrough innovation and offers advancement in product or market, such as voice/text messaging?",
    options: ["Ordinary Innovation", "Technological Innovation", "Breakthrough Innovation", "Radical Innovation"],
    correctAnswer: "Technological Innovation",
    explanation: "Technological innovation occurs more frequently than breakthrough innovation and offers product/market advancements, with examples like voice and text messaging and the personal computer."
  },
  {
    id: "c3-095",
    type: "mcq",
    difficulty: "medium",
    question: "Ordinary innovation, which occurs most frequently, is usually driven by which of the following?",
    options: ["Market-led or market-push innovation", "Government mandates", "Random chance", "Breakthrough scientific discovery"],
    correctAnswer: "Market-led or market-push innovation",
    explanation: "Ordinary innovation usually comes from market-led or market-push innovation, where the market has a stronger effect on innovation than technology."
  },
  {
    id: "c3-096",
    type: "mcq",
    difficulty: "hard",
    question: "According to Rogers' (1995) definition of diffusion, which of the following is one of the four key elements in the diffusion of innovation process?",
    options: ["Communication Channels", "Government subsidy", "Advertising budget", "Employee salary"],
    correctAnswer: "Communication Channels",
    explanation: "Rogers' four elements of diffusion are the Innovation, Communication Channels, Time, and a Social System."
  },
  {
    id: "c3-097",
    type: "mcq",
    difficulty: "medium",
    question: "Which of the following is listed among the seven critical change areas expected to affect small business in the future?",
    options: ["Capital", "Weather", "Religion", "Sports"],
    correctAnswer: "Capital",
    explanation: "The seven critical change areas are capital, raw materials, labor, technology, markets, government regulation, and management."
  },
  {
    id: "c3-098",
    type: "mcq",
    difficulty: "medium",
    question: "Which factor increasing resistance to change occurs when entrepreneurs comply with the norms and codes of a group they belong to?",
    options: ["Economic Implications", "The Group Resistance", "Lack of Proper Communication", "Emotional Reasons"],
    correctAnswer: "The Group Resistance",
    explanation: "The Group Resistance occurs when individual entrepreneurs resist change because the group to which they belong resists it, complying with group norms and codes."
  },
  {
    id: "c3-099",
    type: "mcq",
    difficulty: "medium",
    question: "Which strategy for managing change resistance involves ensuring stakeholders who may lose out from a change are consulted and reach agreement?",
    options: ["Negotiation and Agreement", "Timing of Change", "Leadership", "Education and Communication"],
    correctAnswer: "Negotiation and Agreement",
    explanation: "Negotiation and Agreement addresses change resistance by requiring negotiation with stakeholders, especially those who may end up as losers due to the change."
  },
  {
    id: "c3-100",
    type: "truefalse",
    difficulty: "easy",
    question: "According to the handout, intense competition is listed as one of the forces responsible for organizational change.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Intense competition is listed among the five forces responsible for change, alongside economic factors, technology change, social causes, and political/legal changes."
  },
  {
    id: "c3-101",
    type: "mcq",
    difficulty: "medium",
    question: "In a family business, which of the following best describes a 'Co-Preneur' arrangement?",
    options: ["A husband-wife team running the business together", "A business with no family involvement", "A publicly traded company", "A government-owned enterprise"],
    correctAnswer: "A husband-wife team running the business together",
    explanation: "Co-Preneurs refers to Husband-Wife Teams increasingly common in family businesses as education levels rise for both men and women."
  },
  {
    id: "c3-102",
    type: "mcq",
    difficulty: "medium",
    question: "Which of the following is listed as one of the benefits that can give family businesses a competitive advantage?",
    options: ["Loyalty", "High employee turnover", "Frequent lawsuits", "Lack of trust"],
    correctAnswer: "Loyalty",
    explanation: "Benefits that can provide family businesses a competitive advantage include Loyalty, Legacy, Labour pool, Key employees, Patience, and Values, among others."
  },
  {
    id: "c3-103",
    type: "mcq",
    difficulty: "hard",
    question: "According to Arieu (2010), family firms can be classified into four scenarios based on family size and suitability to lead. Which of these is one of the four scenarios?",
    options: ["Political", "Financial", "Technological", "Ecological"],
    correctAnswer: "Political",
    explanation: "Arieu proposed classifying family firms into four scenarios: political, openness, foreign management, and natural succession."
  },
  {
    id: "c3-104",
    type: "mcq",
    difficulty: "medium",
    question: "Weber (1904) linked high development in Western societies to values such as individualism and:",
    options: ["Extravagant lifestyles", "An ascetic self-denial discouraging extravagance", "Reliance on familial ties", "Avoidance of savings"],
    correctAnswer: "An ascetic self-denial discouraging extravagance",
    explanation: "Weber posited that Western development was linked to values like individualism and ascetic self-denial, which discourages extravagant lifestyles and encourages savings and investment."
  },
  {
    id: "c3-105",
    type: "mcq",
    difficulty: "medium",
    question: "According to Redding (1980), which region's entrepreneurship was noted to thrive on familial ties, contrary to Weber's individualism thesis?",
    options: ["Western entrepreneurship", "Asian entrepreneurship", "South American entrepreneurship", "Nordic entrepreneurship"],
    correctAnswer: "Asian entrepreneurship",
    explanation: "Redding (1980) reported that Asian entrepreneurship thrives on familial ties, contrary to Weber's position on individualism driving Western entrepreneurial development."
  },
  {
    id: "c3-106",
    type: "mcq",
    difficulty: "medium",
    question: "A social entrepreneur is best described in the handout as a pragmatic visionary who:",
    options: ["Maximizes shareholder profit above all else", "Achieves large scale, systematic and sustainable social change", "Avoids all forms of innovation", "Competes only for government contracts"],
    correctAnswer: "Achieves large scale, systematic and sustainable social change",
    explanation: "A social entrepreneur is described as a pragmatic visionary who achieves large scale, systematic, and sustainable social change through a new invention or approach."
  },
  {
    id: "c3-107",
    type: "mcq",
    difficulty: "medium",
    question: "Which role of NGOs in social entrepreneurship involves informing government about what local people are thinking, doing, and feeling?",
    options: ["Facilitating communication", "Advocacy for the poor", "Matching opportunity to mission", "Research, monitoring and evaluation"],
    correctAnswer: "Facilitating communication",
    explanation: "Facilitating communication involves upward communication, informing government and the social entrepreneur about what local people are thinking, doing, and feeling."
  },
  {
    id: "c3-108",
    type: "mcq",
    difficulty: "hard",
    question: "Which funding opportunity for social entrepreneurs is described as a 15-month programme pairing innovators with executive coaches?",
    options: ["The Schwab Foundation for Social Entrepreneurship", "The Global Good Fund Fellowship for Social Entrepreneurs", "The Social Entrepreneurship Accelerator at Duke (SEAD)", "The World Intellectual Property Organization"],
    correctAnswer: "The Global Good Fund Fellowship for Social Entrepreneurs",
    explanation: "The Global Good Fund Fellowship is a 15-month programme supporting leadership development of young social entrepreneurs, pairing them with executive coaches."
  },
  {
    id: "c3-109",
    type: "mcq",
    difficulty: "medium",
    question: "In social entrepreneurship funding, equity investors are motivated mainly by:",
    options: ["Sharing in the profits realized because they provide risk capital", "Pure charitable donation with no expectation of return", "Government mandate", "Tax evasion"],
    correctAnswer: "Sharing in the profits realized because they provide risk capital",
    explanation: "Equity investors hold ownership rights and are expected to share in profits because they provide risk capital, unlike non-profit organizations that rely on grants and donations."
  },
  {
    id: "c3-110",
    type: "mcq",
    difficulty: "hard",
    question: "Which social entrepreneurship enhancement factor refers to effectively connecting those who know with those who need to know?",
    options: ["Knowledge management", "Resilience", "Reputation", "Inputs"],
    correctAnswer: "Knowledge management",
    explanation: "Knowledge management is the process of effectively connecting those who know with those who need to know, converting personal knowledge to organizational knowledge."
  }
];
