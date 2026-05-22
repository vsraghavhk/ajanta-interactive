
const IMAGE_PATHS = {
  "ASI 003": "images/cave16/ASI_003",
  "ASI 006": "images/cave1/ASI_006",
  "ASI 007": "images/cave1/ASI_007",
  "ASI 008": "images/cave1/ASI_008",
  "ASI 009": "images/cave1/ASI_009",
  "ASI 017": "images/cave1/ASI_017",
  "ASI 019": "images/cave1/ASI_019",
  "ASI 020": "images/cave1/ASI_020",
  "ASI 022": "images/cave1/ASI_022",
  "ASI 025": "images/cave1/ASI_025",
  "ASI 027": "images/cave1/ASI_027",
  "ASI 028": "images/cave1/ASI_028",
  "ASI 030": "images/cave1/ASI_030",
  "ASI 036": "images/cave1/ASI_036",
  "ASI 038": "images/cave1/ASI_038",
  "ASI 043": "images/cave2/ASI_043",
  "ASI 046": "images/cave2/ASI_046",
  "ASI 048": "images/cave2/ASI_048",
  "ASI 067": "images/cave17/ASI_067",
  "ASI 071": "images/cave17/ASI_071",
  "ASI 078": "images/cave17/ASI_078",
  "ASI 080": "images/cave17/ASI_080",
  "ASI 085": "images/cave10/ASI_085",
  "ASI B": "images/cave19/ASI_B",
  "ASI C": "images/cave19/ASI_C",
  "ASI E": "images/cave19/ASI_E",
  "ASI F": "images/cave19/ASI_F",
  "ASI L": "images/cave26/ASI_L",
  "Kbl 019": "images/cave2/Kbl_019",
  "Kbl 022": "images/cave6/Kbl_022",
  "Kbl 023": "images/cave6/Kbl_023",
  "Kbl 024": "images/cave6/Kbl_024",
  "Kbl 041": "images/cave9/Kbl_041",
  "Kbl 047": "images/cave26/Kbl_047",
  "Kbl 048": "images/cave17/Kbl_048",
  "Kbl 066": "images/cave1/Kbl_066",
  "Kbl 068": "images/cave1/Kbl_068",
  "Kbl 069": "images/cave1/Kbl_069",
  "Kbl 072": "images/cave1/Kbl_072",
  "Kbl 074": "images/cave1/Kbl_074",
  "Kbl 075": "images/cave1/Kbl_075",
  "Kbl 079": "images/cave1/Kbl_079",
  "Kbl 082": "images/cave1/Kbl_082",
  "Kbl 085": "images/cave1/Kbl_085",
  "Kbl 090L": "images/cave1/Kbl_090L",
  "Kbl 091": "images/cave1/Kbl_091",
  "Kbl 096": "images/cave1/Kbl_096",
  "Kbl 105": "images/cave1/Kbl_105",
  "Kbl 106B": "images/cave1/Kbl_106B",
  "Kbl 108": "images/cave1/Kbl_108",
  "Kbl 109": "images/cave1/Kbl_109",
  "Kbl 118": "images/cave2/Kbl_118",
  "Kbl 120": "images/cave2/Kbl_120",
  "Kbl 122B": "images/cave2/Kbl_122B",
  "Kbl 122T": "images/cave2/Kbl_122T",
  "Kbl 123": "images/cave2/Kbl_123",
  "Kbl 126": "images/cave2/Kbl_126",
  "Kbl 127": "images/cave2/Kbl_127",
  "Kbl 130": "images/cave2/Kbl_130",
  "Kbl 132": "images/cave2/Kbl_132",
  "Kbl 134": "images/cave2/Kbl_134",
  "Kbl 136": "images/cave2/Kbl_136",
  "Kbl 150": "images/cave16/Kbl_150",
  "Kbl 152": "images/cave16/Kbl_152",
  "Kbl 157": "images/cave17/Kbl_157",
  "Kbl 159": "images/cave17/Kbl_159",
  "Kbl 161": "images/cave17/Kbl_161",
  "Kbl 162": "images/cave17/Kbl_162",
  "Kbl 164": "images/cave17/Kbl_164",
  "Kbl 168": "images/cave17/Kbl_168",
  "Kbl 169": "images/cave17/Kbl_169",
  "Kbl 171": "images/cave17/Kbl_171",
  "Kbl 172": "images/cave17/Kbl_172",
  "Kbl 173": "images/cave17/Kbl_173",
  "Kbl 174": "images/cave17/Kbl_174",
  "Kbl 179": "images/cave17/Kbl_179",
  "Kbl 180B": "images/cave17/Kbl_180B",
  "Kbl 183": "images/cave17/Kbl_183",
  "Kbl 184": "images/cave17/Kbl_184",
  "Kbl 186": "images/cave17/Kbl_186",
  "Kbl 187": "images/cave17/Kbl_187",
  "Kbl 188R": "images/cave17/Kbl_188R",
  "Kbl 190": "images/cave17/Kbl_190",
  "Kbl 192": "images/cave17/Kbl_192",
  "Kbl 193": "images/cave17/Kbl_193",
  "Kbl 195": "images/cave17/Kbl_195",
  "Kbl 196": "images/cave17/Kbl_196",
  "Kbl 200": "images/cave17/Kbl_200",
  "Kbl 202": "images/cave17/Kbl_202",
  "Kbl 207B": "images/cave17/Kbl_207B",
  "Kbl 211B": "images/cave17/Kbl_211B",
  "Kbl 212": "images/cave17/Kbl_212",
  "Kbl 214": "images/cave17/Kbl_214",
  "Kbl 216B": "images/cave17/Kbl_216B",
  "Kbl 221": "images/cave17/Kbl_221",
  "Kbl 223": "images/cave17/Kbl_223",
  "Kbl 224": "images/cave17/Kbl_224",
  "Kbl 227R": "images/cave17/Kbl_227R",
  "Kbl 229": "images/cave17/Kbl_229",
  "Kbl 231": "images/cave17/Kbl_231",
  "Mjt 013": "images/cave1/Mjt_013",
  "Mjt 034": "images/cave1/Mjt_034",
  "Mjt 046": "images/cave1/Mjt_046",
  "Mjt 051": "images/cave1/Mjt_051",
  "Mjt 078": "images/cave1/Mjt_078",
  "Mjt 097": "images/cave2/Mjt_097",
  "Mjt 106": "images/cave10/Mjt_106",
  "Mjt 107": "images/cave10/Mjt_107",
  "Mjt 111": "images/cave16/Mjt_111",
  "Mjt 167": "images/cave17/Mjt_167",
  "Nou 008": "images/cave26/Nou_008",
  "Nou 025": "images/cave19/Nou_025",
  "Nou 030": "images/cave17/Nou_030",
  "Nou 048": "images/cave1/Nou_048",
  "Nou 050": "images/cave1/Nou_050",
  "Nou 073": "images/cave1/Nou_073",
  "Nou 076": "images/cave1/Nou_076",
  "Nou 133": "images/cave2/Nou_133",
  "Nou 137": "images/cave2/Nou_137",
  "Nou 155": "images/cave17/Nou_155",
  "Nou 192": "images/cave17/Nou_192",
  "Nou 197": "images/cave17/Nou_197",
  "Nou 207": "images/cave17/Nou_207",
  "Nou 210": "images/overview/Nou_210",
  "Nou 211": "images/cave19/Nou_211",
  "Nou 212": "images/cave19/Nou_212",
  "Nou 215": "images/cave26/Nou_215",
  "ASI 005": "images/overview/ASI_005",
  "ASI 031": "images/overview/ASI_031",
  "ASI 047": "images/overview/ASI_047",
  "ASI 083": "images/overview/ASI_083",
  "ASI 17": "images/overview/ASI_17",
  "ASI 46": "images/overview/ASI_46",
  "Cave 1": "images/cave1/Cave_1",
  "Cave 2": "images/cave2/Cave_2",
  "Kbl 071T": "images/overview/Kbl_071T",
  "Kbl 081L": "images/overview/Kbl_081L",
  "Kbl 083B/L": "images/overview/Kbl_083B-L",
  "Kbl 083T/L": "images/overview/Kbl_083T-L",
  "Kbl 087L": "images/overview/Kbl_087L",
  "Kbl 087R": "images/overview/Kbl_087R",
  "Kbl 088": "images/overview/Kbl_088",
  "Kbl 089": "images/overview/Kbl_089",
  "Kbl 097": "images/overview/Kbl_097",
  "Kbl 106T": "images/overview/Kbl_106T",
  "Kbl 114B": "images/overview/Kbl_114B",
  "Kbl 122b": "images/overview/Kbl_122b",
  "Kbl 129": "images/overview/Kbl_129",
  "Kbl 131": "images/overview/Kbl_131",
  "Kbl 133": "images/overview/Kbl_133",
  "Kbl 137": "images/overview/Kbl_137",
  "Kbl 139B": "images/overview/Kbl_139B",
  "Kbl 139T": "images/overview/Kbl_139T",
  "Kbl 140": "images/overview/Kbl_140",
  "Kbl 180T": "images/overview/Kbl_180T",
  "Kbl 197": "images/overview/Kbl_197",
  "Kbl 197B": "images/overview/Kbl_197B",
  "Kbl 197T": "images/overview/Kbl_197T",
  "Kbl 198": "images/overview/Kbl_198",
  "Kbl 199": "images/overview/Kbl_199",
  "Kbl 201": "images/overview/Kbl_201",
  "Kbl 203": "images/overview/Kbl_203",
  "Kbl 204": "images/overview/Kbl_204",
  "Kbl 213": "images/overview/Kbl_213",
  "Kbl 217": "images/overview/Kbl_217",
  "Kbl 218/219": "images/overview/Kbl_218-219",
  "Kbl 227B/L": "images/overview/Kbl_227B-L",
  "Kbl 227T/L": "images/overview/Kbl_227T-L",
  "Kbl 228/229": "images/overview/Kbl_228-229",
  "Kbl 23": "images/overview/Kbl_23",
  "Kbl 230": "images/overview/Kbl_230",
  "Kbl 232": "images/overview/Kbl_232",
  "Kbl 89": "images/overview/Kbl_89",
  "Line 01": "images/line_sketches/Line_01",
  "Line 03": "images/line_sketches/Line_03",
  "Line 04": "images/line_sketches/Line_04",
  "Line 05": "images/line_sketches/Line_05",
  "Line 06": "images/line_sketches/Line_06",
  "Line 07": "images/line_sketches/Line_07",
  "Line 08": "images/line_sketches/Line_08",
  "Line 09": "images/line_sketches/Line_09",
  "Line 10": "images/line_sketches/Line_10",
  "Line 11": "images/line_sketches/Line_11",
  "Line 12": "images/line_sketches/Line_12",
  "Line 13": "images/line_sketches/Line_13",
  "Line 14": "images/line_sketches/Line_14",
  "Line 16": "images/line_sketches/Line_16",
  "Line 17": "images/line_sketches/Line_17",
  "Line 18": "images/line_sketches/Line_18",
  "Line 19": "images/line_sketches/Line_19",
  "Line 2": "images/line_sketches/Line_2",
  "Line 3": "images/line_sketches/Line_3",
  "Mjt 007": "images/overview/Mjt_007",
  "Mjt 146": "images/overview/Mjt_146",
  "Nou 020": "images/overview/Nou_020",
  "Nou 035": "images/overview/Nou_035",
  "Nou 040": "images/overview/Nou_040",
  "Nou 161/162": "images/overview/Nou_161-162",
  "Nou 25": "images/overview/Nou_25",
  "asi 028": "images/overview/asi_028",
  "asi 030": "images/overview/asi_030",
  "asi 067": "images/overview/asi_067",
  "asi83": "images/overview/asi83",
  "kbl 091": "images/overview/kbl_091",
  "kbl 132": "images/overview/kbl_132",
  "kbl 157": "images/overview/kbl_157",
  "kbl 159": "images/overview/kbl_159",
  "kbl 164": "images/overview/kbl_164",
  "kbl 174": "images/overview/kbl_174",
  "kbl 227R": "images/overview/kbl_227R",
  "line 13": "images/line_sketches/line_13",
  "mjt 097": "images/overview/mjt_097",
  "nou 155": "images/overview/nou_155",
  "nou 197": "images/overview/nou_197",
  "nou 212": "images/overview/nou_212",
  "nou 214": "images/overview/nou_214"
};
const PAINTINGS = {"ASI 003": "Dying Princess — Conversion of Nanda, Cave 16; Early 5th century AD", "ASI 006": "Janapada-Kalyaani — Conversion of Nanda, Cave 1, 5th century AD", "ASI 007": "Maid tries to revive the Princess — Conversion of Nanda, Cave 1", "ASI 008": "Clown — ceiling painting, Cave 1", "ASI 009": "Woman Listens to the Sermon — Shankha-paala Jaataka, Cave 1", "ASI 017": "Royal Household pays Homage — Mahaa-janaka Jaataka, Cave 1", "ASI 019": "Preparation for the Ceremony — Mahaa-janaka Jaataka, Cave 1", "ASI 020": "Ceremonial Bath — Mahaa-janaka Jaataka, Cave 1", "ASI 022": "Mithuna Figures — Bodhi-sattva Padma-paani Panel, Cave 1", "ASI 025": "Squares and Rectangles 1 — ceiling painting, Cave 1", "ASI 027": "Daughter of Maara — Temptations of the Buddha, Cave 1", "ASI 028": "Elephant — ceiling painting (patraja shading), Cave 1", "ASI 030": "Charging Bull — ceiling painting (foreshortening), Cave 1", "ASI 036": "Courtiers watch Snake Dance — Champeyya Jaataka, Cave 1", "ASI 038": "Three Maids listening to the Sermon — Champeyya Jaataka, Cave 1", "ASI 043": "Foreigners drinking — ceiling painting, Cave 2", "ASI 046": "Child trying to snatch a Toy — Cave 2, End of 4th century AD", "ASI 048": "Squares and Circles 3 — ceiling painting (binduja shading), Cave 2", "ASI 067": "Geometrical Design — ceiling painting, Cave 17", "ASI 071": "Restoration of Children — Vishvaantara Jaataka, Cave 17", "ASI 078": "Simhala rides a white Elephant — Simhala Avadaana, Cave 17", "ASI 080": "Raakshasi feigns Love — Simhala Avadaana, Cave 17", "ASI 085": "Two Figures of the Buddha — Cave 10, period of decline", "ASI B": "Buddha in the Varada-mudra — facade sculpture, Cave 19", "ASI C": "Rahula receiving begging Bowl from the Buddha — facade, Cave 19", "ASI E": "Buddha in the Niche — facade sculpture, Cave 19", "ASI F": "Kubera — facade sculpture, Cave 19", "ASI L": "Daughters of Mara — relief sculpture, Cave 26", "Kbl 019": "View of the Interior of Cave 2", "Kbl 022": "Buddha in the Niche — sculpture, Cave 6, 5th century AD", "Kbl 023": "Buddha baffles Critics — Miracle of Shraavasti, Cave 6", "Kbl 024": "Bhikshu with Lotus — Cave 6, 5th century AD", "Kbl 041": "Kneeling Ascetic — Cave 9, Late 5th century AD", "Kbl 047": "Ananda weeping — relief sculpture, Cave 26", "Kbl 048": "Lady at her Toilet — solo painting, Cave 17, End of 6th century AD", "Kbl 066": "Bodhi-sattva Avalokiteshwara — Cave 1, 2nd half 6th century AD", "Kbl 068": "Padma-paani's Consort — Bodhi-sattva Panel, Cave 1", "Kbl 069": "Bodhi-sattva Padma-paani — Cave 1, 2nd half 6th century AD · MASTERPIECE", "Kbl 072": "Royal Pavilion — Shibi Jaataka, Cave 1", "Kbl 074": "King weighs Himself — Shibi Jaataka, Cave 1", "Kbl 075": "Prince And His Consort — Shibi Jaataka (animnonnata style), Cave 1", "Kbl 079": "Bhikshu — Conversion of Nanda, Cave 1", "Kbl 082": "Shankha-paala listens to the Sermon — Cave 1", "Kbl 085": "Mahaa-Janaka Meets An Ascetic — Mahaa-janaka Jaataka, Cave 1", "Kbl 090L": "Queen captivates Mahaa-janaka — Mahaa-janaka Jaataka (baroque), Cave 1", "Kbl 091": "Dancing Girl With Musicians — Mahaa-janaka Jaataka (reverse perspective), Cave 1", "Kbl 096": "Mahaa-Janaka Leaves The Palace — Mahaa-janaka Jaataka, Cave 1", "Kbl 105": "Naaga King repents his Life of Pleasures — Champeyya Jaataka, Cave 1", "Kbl 106B": "Champeyya Gives A Sermon — Champeyya Jaataka, Cave 1", "Kbl 108": "Royal Harem — ceiling painting, Cave 1", "Kbl 109": "Some Foreigners — Cave 1, End of 6th century AD", "Kbl 118": "Thousand Buddhas — Miracle of Shraavasti, Cave 2, period of decline", "Kbl 120": "Future Buddha in Tushita Heaven — Nativity of the Buddha, Cave 2", "Kbl 122B": "Queen Mahaa-maaya musing — Nativity of the Buddha, Cave 2", "Kbl 122T": "King listens to the Interpretation of the Dream — Nativity, Cave 2", "Kbl 123": "Birth of the Buddha — Nativity, Cave 2, 5th century AD", "Kbl 126": "Votaries with Offerings — Cave 2, classical peak, End of 4th century AD", "Kbl 127": "Children playing with Hen — Cave 2, End of 4th century AD", "Kbl 130": "Irandati meets Punyaka — Vidhura-pandita Jaataka, Cave 2", "Kbl 132": "Game of Dice — Vidhura-pandita Jaataka, Cave 2 · reverse perspective", "Kbl 134": "Vidhura-pandita gives Farewell Sermon — Cave 2", "Kbl 136": "Vidhura-pandita in Naaga Kingdom — Cave 2", "Kbl 150": "Nanda shaves his Head — Conversion of Nanda, Cave 16", "Kbl 152": "Nanda in dejected Mood — Conversion of Nanda, Cave 16", "Kbl 157": "A View of the Main Hall of Cave 17", "Kbl 159": "Vishvaantara distributes Alms — Vishvaantara Jaataka, Cave 17", "Kbl 161": "Vishvaantara consoles his Wife — Vishvaantara Jaataka, Cave 17", "Kbl 162": "Vishvaantara's Departure — Vishvaantara Jaataka, Cave 17", "Kbl 164": "Descent of Indra — Adoration of the Buddha, Cave 17", "Kbl 168": "Yaksha-Couple — Adoration of the Buddha, Cave 17", "Kbl 169": "Black Apsaras — Adoration of the Buddha, Cave 17", "Kbl 171": "Deva-datta hatches a Conspiracy — Miracle at Raajagriha, Cave 17", "Kbl 172": "Mad Elephant Nalagiri — Miracle at Raajagriha, Cave 17", "Kbl 173": "Subjugation of the Elephant — Miracle at Raajagriha, Cave 17", "Kbl 174": "Resting Bulls — ceiling painting, Cave 17", "Kbl 179": "Sporting Shad-danta — Shad-danta Jaataka, Cave 17", "Kbl 180B": "Queen faints — Shad-danta Jaataka, Cave 17", "Kbl 183": "Fowler brings the Geese to the Court — Mahaa-hamsa Jaataka, Cave 17", "Kbl 184": "Golden Goose gives Sermon — Mahaa-hamsa Jaataka, Cave 17", "Kbl 186": "Vishvaantara informs his Wife — Vishvaantara Jaataka, Cave 17", "Kbl 187": "Maid braids the Hair — Vishvaantara Jaataka, Cave 17", "Kbl 188R": "Citizens watch Vishvaantara's Departure — Cave 17", "Kbl 190": "Coronation of Vishvaantara — Vishvaantara Jaataka, Cave 17", "Kbl 192": "Monkey helps a Man — Mahaa-kapi Jaataka, Cave 17", "Kbl 193": "Man throws Stone on the Monkey — Mahaa-kapi Jaataka, Cave 17", "Kbl 195": "Court of Sudaasa — Suta-soma Jaataka, Cave 17", "Kbl 196": "Coronation of Saudaasa — Suta-soma Jaataka, Cave 17", "Kbl 200": "Mother and Child before the Buddha — Buddha in Kapila-vastu, Cave 17", "Kbl 202": "Mahaa-maaya listens to the Sermon — Preaching, Cave 17", "Kbl 207B": "Happy Reunion with the blind Parents — Maatri-poshaka Jaataka, Cave 17", "Kbl 211B": "Raakshasi-s as beautiful Maidens — Simhala Avadaana, Cave 17", "Kbl 212": "Merry Couples under Tents — Simhala Avadaana, Cave 17", "Kbl 214": "Cannibalistic Raakshasi-s — Simhala Avadaana, Cave 17", "Kbl 216B": "Escape of Simhala — Simhala Avadaana, Cave 17", "Kbl 221": "Massacre in the Palace — Simhala Avadaana, Cave 17", "Kbl 223": "Vultures on the Gate — Simhala Avadaana, Cave 17", "Kbl 224": "Army gets Ready — Simhala Avadaana, Cave 17", "Kbl 227R": "Monastery — Shibi Jaataka, Cave 17 · normal perspective", "Kbl 229": "King arrives in the Forest — Mriga Jaataka, Cave 17", "Kbl 231": "Deer carried on a Chariot — Mriga Jaataka, Cave 17", "Mjt 013": "Fighting Bulls — ceiling painting, Cave 1", "Mjt 034": "Woman holding a Lotus — Queen in a Palace Scene, Cave 1", "Mjt 046": "Dancer in the Naaga Court — Palace Scene of the Naaga Kingdom, Cave 1", "Mjt 051": "Wailing Women — Shibi Jaataka (animnonnata style), Cave 1", "Mjt 078": "Shakti Pandara — Bodhi-sattva Avalokiteshvara Panel, Cave 1", "Mjt 097": "Gate in King Brahma-datta's Palace — Cave 2 · normal perspective", "Mjt 106": "Raja with his Retinue — Cave 10, 2nd/1st c. BC · EARLIEST SURVIVING PAINTING", "Mjt 107": "Dancers and Musicians — Cave 10, 2nd/1st century BC", "Mjt 111": "Maho-sadha and Four envious Counsellors — Mahaa-ummaga Jaataka, Cave 16", "Mjt 167": "Deer Hunt — Suta-soma Jaataka, Cave 17", "Nou 008": "Buddha's Nirvana — relief sculpture, Cave 26", "Nou 025": "Chaitya Interior — Cave 19", "Nou 030": "A View of the Aisle of Cave 17", "Nou 048": "Temptations of the Buddha — Cave 1, 5th century AD", "Nou 050": "Maara's Attendant — Temptations of the Buddha, Cave 1", "Nou 073": "Queen in a Palace Scene — Cave 1, period of decline", "Nou 076": "Palace Scene of the Naaga Kingdom — Cave 1", "Nou 133": "Images of the Buddhas — Cave 2, 4th century AD", "Nou 137": "Departure of Vidhura-pandita — Cave 2", "Nou 155": "Six Gandharva-s — ceiling painting, Cave 17", "Nou 192": "Capture, Freedom and Reunion — Maatri-poshaka Jaataka, Cave 17", "Nou 197": "Buddha preaches to the Congregation — Cave 17", "Nou 207": "Mahisha Jaataka — Cave 17, 5th century AD", "Nou 210": "A View of the Caves — Ajanta", "Nou 211": "Facade — Cave 19", "Nou 212": "Naaga Couple — sculpture, Cave 19", "Nou 215": "Mahaa-parinirvaana — colossal reclining Buddha, Cave 26"};
const GL = {"abacus": {"term": "abacus", "defn": "A level tablet on the capital of a column (or, simply. pillar), supporting an entablature; (entablature: that which surmounts the column and rests upon the capital)."}, "airika (softening-hardlines)": {"term": "airika (softening-hardlines)", "defn": "One of the three methods of vartana (shading), to produce depth and relief. In this technique an illusion of depth is achieved by executing tonal variation and avoiding hardlines. [See under ‘Shading Techniques’]."}, "alto-relievo": {"term": "alto-relievo", "defn": "High relief, figures projected by at least half their thickness from the background on which they are sculpted; (bas-relief: sculpture in which the figures do not stand far out from the base on which they are formed)."}, "amalaka": {"term": "amalaka", "defn": "Design based on the amla (Indian gooseberry) fruit, generally a spheroid slab, with ribs around the edge."}, "ancient trade routes": {"term": "ancient trade routes", "defn": "The main trade route connected north India, through Ujjain, Mahishmati, with Paithan  (ancient Prathishthana, the capital of the early Saata-vaahana-s), with ports on the south-eastern coast, through Ter (ancient Tagara), Amaravati, etc. The other trade route was connecting Broach (ancient Bharukachchha) and Pratishthana.."}, "anda": {"term": "anda", "defn": "Spherical shaped crown of a stoopa built in a chaitya; over this is mounted a harmika, a triple-umbrella (chhatraa-vali) and finally, a poorna-ghata. (anda, meaning egg, often refers to the world as having sprung from the primordial egg of Brahma.)."}, "animnonnata (flat-style)": {"term": "animnonnata (flat-style)", "defn": "One of the techniques in painting to produce an illusion of the third dimension: a simple shading technique using dark colours for the subjects in the foreground against a background of lighter shades, or vice versa, and different from the more sophisticated technique called nimnonnata. [See under ‘Shading Techniques’]."}, "apsara": {"term": "apsara", "defn": "Same as apsaras [See under apsaras]."}, "apsaras": {"term": "apsaras", "defn": "Celestial damsel, regarded as wives of gaandharva-s."}, "apse": {"term": "apse", "defn": "A semi-circular recess; chaitya-s, like Cave 10 of Ajanta is apsidal at the rear, and a stoopa is found at the centre of the apse."}, "archaic": {"term": "archaic", "defn": "In art, refers to the initial phase in the development of an art form. In the context of Ajanta, one may take that the earliest style may be more appropriately pre-Classical, rather than, archaic. [See under Phases of Ajanta Art and also Pre-Classical Period]."}, "architrave": {"term": "architrave", "defn": "The lowest division of the entablature resting immediately on the abacus of the column).[See Fig ?]."}, "ardha-mandapa": {"term": "ardha-mandapa", "defn": "Literally ‘half-hall’. [See under ‘mandapa’]."}, "arhat": {"term": "arhat", "defn": "Divinity of the highest rank in Buddhist hierarchy."}, "ashlar masonry": {"term": "ashlar Masonry", "defn": "masonry using squared stones."}, "astylar": {"term": "astylar", "defn": "Without pillars (columns)."}, "attha-mahaa-thaanaani": {"term": "attha-mahaa-thaanaani", "defn": "The eight places considered the most sacred in the Buddhist faith. These places derive their holiness because of their intimate connection with major events in the life of the Buddha. Of these four are related to important events in the life of the Buddha. These are Lumbini, where Siddhartha was born, Gaya, where He attained Enlightenment; Sarnath, where he preached the First Sermon, and Kushi-nagara, where he obtained nirvaana. The remaining four are the locations where He is believed to have performed miracles. He displayed His miraculous powers at Shraavasti by multiplying Himself a thousand-fold to baffle His critics. He ascended the Heaven of thirty-three gods and preached the Dharma to His Mother at Shaankashya. He subjugated a mad elephant at Raaja-griha. And, finally, at Vaishaali a number of monkeys offered Him honey."}, "baroque": {"term": "baroque", "defn": "A period where ornamentation predominates. Generally, this phase follows the classical period and the period of Mannerism. In Ajanta, it began in the mid-6th century AD. [See under Phases of Ajanta Art and also Baroque Period]."}, "bas-relief": {"term": "bas-relief", "defn": "Sculpture in which the figures do not stand far out from the base on which they are formed; it may be low relief or high relief depending on the depth of carving. (alto-relievo: high relief, figures projected by at least half their thickness from the background on which they are sculptured; A self-standing sculpture is called ‘sculpture in the round’)."}, "bindi": {"term": "bindi", "defn": "Also known as till. The custom of women decorating their forehead with a tilak, also known as bindi, is a common sight to day. But, in Ajanta portraiture we find women sporting the tilak only infrequently. Janapada-Kalyaani (ASI 006), wife of Nanda is one of the women sporting tilak in Ajanta."}, "binduja (dot-and-stipple-method)": {"term": "binduja (dot-and-stipple-method)", "defn": "One of the three methods of vartana (shading), to produce depth and relief; in this technique an illusion of depth is achieved by painting dots with variations in the concentration of dots to create the illusion of depth. [See under ‘Shading Techniques’]."}, "bodh-gaya": {"term": "Bodh-gaya", "defn": "This is the holiest of holy places in Buddhism and one of ‘the eight holy places’ (attha-mahaa-thaanaani). Here Siddhartha received Enlightenment and became the Buddha. On the full-moon day of the month of Vaishakha (May), after taking a bath in the river Nairanjana or Nirayana (now called Lilajan) He sat under a peepal tree with determination and finally saw the Truth. Emperor Ashoka, who visited the place, called it Sambhodhi, but later it was referred to as Bodhgaya. A massive spire of the Mahabodhi temple rises above a cluster of stoopa-s and monasteries. Inside, a colossal gilded image of the Buddha sits in repose. The 'Jewel Shrine of the Walk’ marks the footprints of the Buddha. To the west stands the sacred Bodhi tree under which He received Enlightenment; this is  marked the Seat of Enlightenment. On the south and west of the temple are carved railings, which are among the most ancient relics in India. It is believed that the Buddha bathed in the lotus pond situated south of the temple. The ruins of many beautiful sculptures and richly decorated stoopa-s lie strewn around in the vicinity. Uruvila, situated close to Gaya, is also an important place. It is here Siddhartha practised rigid austerities, but the Truth eluded him. The Buddha visited Uruvila again after Enlightenment and performed many miracles."}, "bodhi-sattva": {"term": "Bodhi-sattva", "defn": "In the Buddhist mythology ‘the would-be Buddha’. The Bodhi-sattva took birth as a human or a celestial being, a small bird or a mighty elephant. In each of these births, He outshone others by His supreme intelligence, the nobility of His character, His spirit and selfless service and His boundless compassion. Jaataka stories deal with these lives. [see jaataka]."}, "body postures": {"term": "body postures", "defn": "(See under ‘sthaana-s’)."}, "bracket": {"term": "bracket", "defn": "a support inserted at an angle to hold up the roof or the beam above a column (pillar). [See Fig. ?]."}, "buddhist holy places": {"term": "Buddhist holy places", "defn": "(See under ‘attha-mahaa-thaanaani’)."}, "capital": {"term": "capital", "defn": "Head or top part of a column (pillar). [See Fig. ?]."}, "cave temples": {"term": "cave temples", "defn": "It was Ashoka who initiated cutting living rocks into architectural forms as places of worship. This gained momentum and in about 1200 years the whole Indian landscape was dotted with large and small rock-hewn monuments. Since these structures are not damaged by weather, all such monuments survived. In the initial stages of development of rock-cut monuments, they were simply petrified versions of the contemporary brick-and-timber or the mud-and-thatch structures. Such a construction cannot strictly be called architecture, and hence this is identified as rock-architecture or architectural sculpture. The earliest caves are those excavated by Ashoka and his grandson Dasharatha in the hills of Barabar (Jahanabad district in the state of Bihar) Nagarjuni and Sitamarhi (near Gaya, in the state of Bihar). The Sudaama cave and the Lomaas-rishi cave of Barabar hill are more advanced. Though the beginning was made in Bihar, it was in the Deccan that the rock-architecture reached its zenith. The chaitya-s and vihaara-s excavated during 200 BC to 200 AD can be found in Bhaja and Bedsa (both in the district of Pune in the state of Maharashtra), Kondane (Kolaba district in the state of Maharashtra), Pitalkhora, Caves 8, 9, 10 and 12 of Ajanta and in a number of other places. Belonging to the same period is a group of two vihaara-s and a chaitya at Guntappalli (Krishna district of Andhra Pradesh), the caves at Udayagiri and Khandagiri near Bhubaneshwar, the capital city of the state of Orissa. Slightly later a number of caves were excavated in the Junagadh hills in Gujarat, but they were generally plain. The Bagh caves (Dhar district in the state of Madhya Pradesh) are somewhat later than the Gujarat caves, and are essentially large pillared halls, with rows of monk-cells scooped out in the sidewalls. It was in the Deccan again that the later phase of cave construction started, from 450 AD, of which the remaining caves of Ajanta are the most important. The Buddhist caves at Ellora belong to two periods. The earlier caves like caves 1, 2, 3 and 5 belong to 400 AD, and the remaining to 6th-7th centuries. Though Cave 6 of Ajanta is two-storied, the multi-storied Ellora caves are remarkably original in conception. The 7th century caves Anantha-sayana-gudi at Undavalli (Guntur district in the state of Andhra Pradesh) belong to this style. It was by about 5th century AD, the Hindus and the Jains adopted the rock-cut mode of architecture for their temples. The earliest cave at Udayagiri (Vidisha district in the state of Madhya Pradesh) was built by Chandragupta II. In the South, a very large number of rock-cut temples were constructed by the Chalukya-s of Vatapi (6-7th century), the Rashtrakuta-s (7-9th century), the Pallava-s of Kanchi (6-9th century) and the Pandya-s of Madurai (8-9th century)."}, "ceiling paintings": {"term": "ceiling paintings", "defn": "The ceilings in Ajanta are painted with secular motifs. The motifs were geometric designs, flower decorations, animals and birds and humorous scenes.. In the decoration of the ceiling the Ajanta artist was at his creative best. [Refer to  ‘Painting on the Ceilings’]."}, "chaaya-tapa": {"term": "chaaya-tapa", "defn": "Literally ‘shade and shine; a technique that creates a kind of soft light and shade effect which produces a soft glow on the outline of the head. The famous painting of Bodhi-sattva Padma-paani (kbl 069) in Cave 1 is an example of use of this technique."}, "chaitya": {"term": "chaitya", "defn": "The caves of Ajanta are divided into chaitya-s (temples) and vihaara-s (monasteries). The chaitya bears some similarity to the early Christian basilica, having an arched roof and a long vaulted nave (central portion) with pillared aisles on either side, terminating in an apse (semi-circle). In the apsidal end is placed the chaitya or stoopa, which is in fact a sophisticated form of the grave mound of pre-Buddhist times. A prominent arched window to provide light to the interior usually surmounts the facade, in the form of a screen with a small door. The shape of this arched window gradually evolved from a simple semi-circular opening, as in the earliest Chaitya-cave 10, to the elaborate sun-windows of the Chaitya-caves 9, 19 and 26 of a later period. Inside Cave 10, traces of old wooden ceilings are still to be found, which the stone architecture of a later period faithfully imitated. Later during the Mahaayana phase it gave way to upright, ornamented pillars in the Mahaayana group of caves. The stoopa-dome also changed from a plain hemisphere to a cylindrical form with elaborate carving and sculptures. The vihaara-s are rectangular halls with cells for the monks on the inner sides, leading out to verandahs. The oldest vihaara-s at Ajanta, Caves 8, 12, and 13, in that order, were the monasteries attached to the earliest Hinaayana chaitya-s, Caves 9 and 10, which have a square central hall, without pillars, opening into small living-rooms with stone beds. The vihaara-s of the Mahaayana group consist of Caves 6, 7, 11, 15, 16, 17, 18, 19 and 26, which are said to belong to the period between AD 450 and 550; whereas Caves 1, 2, 3, 4, 27 and 29 were perhaps hollowed out at a later period. By the middle of the 5th century the plan of the vihaara included the function of the chaitya by introducing imposing statues of the Buddha in place of the stoopa-s. And in order to accommodate a more numerous laity an antechamber and a shrine in the back-wall called the chaitya mandiram were added. The magnificent Caves 1 and 2 are both assigned to the 6th century AD, and represent Ajanta's resurgence of sophisticated painting in the face of the Hindu revival.  Caves 1, 2, 4, 16, 19 and 26 contain some of best sculptures of Ajanta."}, "chalukya dynasty": {"term": "Chalukya dynasty", "defn": "In the 6th century the Vaakaataka-s succumbed to the mighty power of the Chalukya-s. It is probable that the decorations at Cave 1 at Ajanta were done during the reign of Pulakesin II, who died in 642 AD."}, "chhatra-vali": {"term": "chhatra-vali", "defn": "Ceremonial umbrella, normally three in number set on a haarmika and an anda crowning a stoopa."}, "classical period": {"term": "classical period", "defn": "A period of artistic maturity, which allows no excesses and over-dramatisation. In Ajanta 4th-5th centuries AD is considered the classical period. This follows archaic or pre-classical phase and is followed by mannerism and baroque. Compositions like Simhala Avadaana of Cave 17 belong to the classical style. (See under ‘Phases of Ajanta Art - Classical Period)"}, "corbel": {"term": "corbel", "defn": "Projection from the face of the wall supporting a weight."}, "dance and painting": {"term": "dance and painting", "defn": "A relation between the two is a unique feature of the Indian art tradition. For example, in Vishnu-dharmottara, a 11th century AD treatise, is found a discourse in which Maarkhandeya instructs King Vajra that without the knowledge of the science of dancing, the rules of painting can scarcely be understood. In another passage, the observation of nature and of the rules of dancing are indicated as the ultimate resource for the painter."}, "dressed in nakedness": {"term": "dressed in nakedness", "defn": "One intriguing factor of Ajanta composition is that many of the Ajanta heroines are scantly dressed or they are painted naked. Two of the examples of this feature are the scene Queen captivates Mahaa-janaka (Kbl L) of Cave 1 and the painting of the Dying Princess (ASI 003) of Cave 16."}, "dvaara-paala": {"term": "dvaara-paala", "defn": "Gatekeeper."}, "ellora": {"term": "Ellora", "defn": "Situated close to Ajanta, this place is extra-ordinary, for it is the meeting ground of the three principal Indian religions. We find here the Hindu, the Jain and the Buddhist caves. Of these the Buddhist ones are the earliest, dating from the 4th century AD to the 9th century. The most breathtaking monument here is the great monolith, Kailasa-naatha temple, a Hindu temple. The Jain cave temples have a quiet dignity of their own."}, "entablature": {"term": "entablature", "defn": "That which surmounts the column and rests upon the capital.."}, "fore-shortening": {"term": "fore-shortening", "defn": "[See under 'kshaya-vriddhi']."}, "fresco buono": {"term": "fresco buono", "defn": "A technique of wall painting where the application of colours is to a layer of moist lime plaster. The European mural paintings are of this type. Indian and all Asian murals were painted on an almost dry wall, called fresco secco"}, "fresco secco": {"term": "fresco secco", "defn": "A technique of mural painting where painting is done on a dry wall. Indian and Asian wall paintings are of this type, whereas in Europe fresco buono is followed where the painting is done on a moist lime plaster."}, "frieze": {"term": "frieze", "defn": "A decorated band along the top of a room wall; horizontal band used in sculpture and architecture, often filled with sculptured relievo work in ribbon shape."}, "gaandharva": {"term": "gaandharva", "defn": "Celestial musician."}, "gana": {"term": "gana", "defn": "Demi-god acting as attendant; dwarf follower of Lord Shiva."}, "garbha-griha": {"term": "garbha-griha", "defn": "sanctum of a temple."}, "jaataka": {"term": "jaataka", "defn": "Buddhist mythological story of the previous lives of the Master. There are 547 jaataka-s. In these stories ‘the would-be Buddha’, in His careers as the Bodhi-sattva-s, outshone others by His supreme intelligence, the nobility of His character, His spirit and selfless service and His boundless compassion - no matter whether He was born as a human or a celestial being, a small bird or a mighty elephant. Each jaataka story exemplifies the efforts that the Bodhi-sattva made to develop one of the ten virtues (paraamita). Thus, in Shad-danta Jaataka, Bodhi-sattva is born as an elephant-king called Shad-danta to demonstrate boundless generosity, in Vishvaantara Jaataka He is born as Prince Vishvaantara to personify charity, and exhibits wisdom in Vidhura-pandita Jaataka. Episodes from a number of jaataka-s are painted on the walls of Ajanta. Some of the stories are similar to those found in Hindu mythology: the Shyaama Jaataka (Cave 9) bears a close resemblance to the story of Shravan Kumar in the Ramayana. Some of the important ones painted in Ajanta caves are listed below, with the caves in which these can be found given in brackets. Champeyya Jaataka, the story of a serpent king (1); Hasti Jaataka, the story of the benevolent elephant (16, 17); Mahaa-hamsa Jaataka, the story of the golden goose (2, 17); Mahaa-kapi Jaataka, the story of the monkey king (17); Mahaa-ummagga Jaataka, the story of the supernatural child, Maho-sadha (1, 16); Mahisha Jaataka, the story of the benevolent buffalo and the mischievous monkey (17); Maatri-poshaka Jaataka, the story of the elephant who had blind parents (17); Matsya Jaataka, the story of the fish which saved its kin from certain death (17); Mriga Jaataka, the story of the golden deer (17); Nigro-dhamiga Jaataka, the story of the sacred deer to save that of a doe (17); Sarabha Jaataka, the story of the merciful stag (17); Shad-danta Jaataka, the story of the six-tusked elephant (10, 17); Shankha-paala Jaataka, the story of the serpent (1); Shibi Jaataka, the story of the pigeon (1); the story of the king who donated his eyes (17); Shyaama Jaataka, the story of the devoted son whose parents were blind(10, 17); Suta-soma Jaataka, the story of the pious King of Indra-prastha trying to persuade Saudasa, the King of Varanasi, to give up cannibalism (16, 17); Vidhura-pandita Jaataka, the story of the wise minister (2); Vishvaantara Jaataka, the story of the prince devoted to alms-giving (17)."}, "jamb": {"term": "jamb", "defn": "The sidepiece or post of a door."}, "jataa-makuta": {"term": "jataa-makuta", "defn": "Matted hair"}, "kaama-sootra": {"term": "Kaama-sootra", "defn": "A well-known work on Indian erotics. In a chapter on painting is an enumeration of the ‘six limbs’ or essentials aspects of painting. They are roopa-bheda (an appropriate representation of forms or appearances), pramaana (appropriate structure and proportion, bhaava (the suggestion of action and feeling, as well as laavanya (the infusion of the quality of grace). The fifth canon enjoins sadrishya (similitude), which may be taken to mean an appropriate resemblance to natural objects rather than realistic imitation in a literal sense. The last branch of painting mentions varnika-bhanga (the proper manner of using the brush and colour)."}, "kapila-vastu": {"term": "Kapila-vastu", "defn": "Though not one among the 'eight important places' (attha-mahaa-thaanaani) in Buddhism, the place is important in the history of Buddhism as Suddhodana, father of Gautama, the Buddha, was the king of Kapila-vastu. This is identified with either Piprahwa, in the district of Basti, in the sate of Uttar Pradesh or with Tilaurakot, in the district of Taulihawa, in Nepal."}, "keyura": {"term": "keyura", "defn": "Bracelet worn on the upper-arm"}, "kinnara": {"term": "kinnara", "defn": "Mythical being half- human and half-bird"}, "kshaya-vriddhi (loss and gain)": {"term": "kshaya-vriddhi (loss and gain)", "defn": "Called foreshortening in English. In this technique relief and plasticity are realised in terms of the distances, showing farther objects smaller. The ceiling paintings Charging Bull (ASI 030) and the Elephant (ASI 028) of Cave 1 are examples of use of this technique."}, "kushi-nagara": {"term": "Kushi-nagara", "defn": "One of the attha-mahaa-thaanaani. Now known as Kasia, in the district of Gorakhpur, in the State of Utter Pradesh. Here the Buddha took pari-nirvaana (Extinction) on the banks of the river Hiranyavati and was cremated. To commemorate these two events, two monasteries, Mahaa-pari-nirvaana Vihaara and Makuta-bandhana Vihaara have been established here, as known from the seals recovered from here: one showing the coffin of the Buddha between two shaala trees and the other a funeral pyre. The most important monuments to day are the Nirvaana Chaithya and Nirvana Shrine, both on the same platform. These are dated to the early 5th century AD Gupta period, but have been subsequently built over. The shrine houses a colossal Buddha lying in state in sandstone. There are a number of stoopa-s, monasteries and other buildings around. A little away from the main shrine is a mound, locally known as Rambhar stoopa, believed to be the place where the Buddha was cremated."}, "lapis lazuli": {"term": "lapis lazuli", "defn": "Literally a blue stone. A new colouring technique in the use of lapis lazuli, a cool transparent blue, came into use in Ajanta only in the 4th-5th centuries AD. It is employed during the Mahaayana period with considerable effect in a number of paintings to produce a sense of distance and depth, and thereby to enhance the feeling of movement and animation."}, "lumbini": {"term": "Lumbini", "defn": "The place of birth of the Buddha and one of the atta-mahaa-thaanaani. This has been identified with Rummindei in the district of Bhairawa in Nepal. Emperor Ashoka has visited the place and erected a pillar on the spot. Antiquarian remains from the place establish continuous religious activities till the 10th century."}, "mahaa-raaja-leela": {"term": "mahaa-raaja-leela", "defn": "A royal pose of sitting at ease, for example, the pose of the Naaga Couple (Nou 212)."}, "makara": {"term": "makara", "defn": "A motif of a crocodile with a floriated tail."}, "mandapa": {"term": "mandapa", "defn": "A pillared and canopied hall; ardha-mandapa (half-hall) is a small hall connecting the shrine with mandapa, the larger hall, and mukha-mandapa is the narrow hall connecting the ardha-mandapa or the mandapa with the shrine."}, "mannerism": {"term": "mannerism", "defn": "A period in the development of an art form, when some stylistic changes are made from the classical ideals. End of 5th century is considered to be the mannerist period in Ajanta. During this period Ajanta produced some of the masterpieces like the Bodhi-sattava Padma-paani (Kbl 069). The composition of Vidhura-pandita Jaataka is an example of this style."}, "medallion": {"term": "medallion", "defn": "A bas-relief of a round."}, "mudra": {"term": "mudra", "defn": "Certain position of fingers or hand practised in devotion, religious worship and dance; for example: abhaya mudra (pose of assurance), varada mudra (boon-giving pose), bhoomi sparsha mudra (earth-touching pose), dharma chakra pravartana mudra (setting-the-Wheel-of-Law-into-motion pose or preaching pose), dhyaana mudra (meditating pose) and anjali mudra (praying pose)."}, "mukha mandapa": {"term": "mukha mandapa", "defn": "see mandapa."}, "multiple vision": {"term": "multiple vision", "defn": "A technique of composing scenes. In this a number of scenes seen from different angles are painted in a single composition.  [See under perspective]"}, "mural painting": {"term": "mural painting", "defn": "Painting executed on a wall."}, "nave": {"term": "nave", "defn": "The middle or main body of the basilica (a chaitya, in the Ajanta context) rising above the aisles"}, "nimnonnata": {"term": "nimnonnata", "defn": "A ‘high relief’ method of shading to bring out depth and relief; also called vartana [see also animnonnata, and vartana]."}, "nirvaana": {"term": "nirvaana", "defn": "Literally ‘Extinction’. Freedom from the cycle of births and deaths. [See also pari-nirvaana]."}, "painting sequence": {"term": "painting sequence", "defn": "The Ajanta artist had followed certain sequence in painting. A preliminary sketch in haematite (an iron ore) was drawn on the surface while it was still slightly wet followed by an under-painting in grey or white monochrome, like the medieval Italian practice of terra verde. On this surface an outline in cinnabar red was filled in with various colours, proceeding from under-painting as the base to the appropriate colours of the subject. Finally, when dry, the semi-fresco was finished off with a dark outline for final definition and a burnishing process to give lustre to the surface."}, "palmate": {"term": "palmate", "defn": "Design based on palm-leaf ."}, "pari-nirvaana": {"term": "pari-nirvaana", "defn": "Literally ‘Final-extinction’; refers to the death of the Buddha."}, "patraja": {"term": "patraja", "defn": "‘Shading-like-the-lines-of-leaf’, a vartana (shading) style. The ceiling paintings Charging Bull(ASI 030) and the Elephant (ASI 028) of Cave 1 are examples of use of this technique of shading."}, "perspective": {"term": "perspective", "defn": "One of the techniques used by the Indian painters from the early times to produce an illusion of the third dimension. Ajanta artists have used the normal (or true) perspective and also the reverse perspective. A number of paintings at Ajanta can be cited as examples in the use of these techniques. The Gate of the Palace of Braha-madatta (Mjt 097) of Cave 2 is an example for normal or true perspective. The pavilion behind the Dancing Girl with Musicians (Kbl 091), a scene from Mahaa-janaka Jaataka in Cave 1 is composed in the reverse perspective. The three pavilions in which the Lustration and Renunciation take place in Cave 1 are painted as if they are viewed from different angles, a technique called multiple vision."}, "pigments used in ajanta paintings": {"term": "pigments used in Ajanta paintings", "defn": "The artists of Ajanta used a wide variety of pigments: red ochre (dhaturaga), vivid red (kumkuma), yellow ochre (haritala), indigo blue, lamp black (kajjala), chalk white (khadi mati), terra verte (geru mati), green (jangal) and blue (lapis lazuli). All these, with the exception of black, are mineral in origin. Lapis lazuli, used for blue, alone was imported, as it was not found in the neighbourhood. All other pigments were locally available as residual products of the volcanic rock. Mixed colours were used on rare occasions. Not all colours were used everywhere, nor with the same consistency. The theme and the local atmosphere determined these. Classical Indian painting does not aim at contrasts of a medley of colours, but attempts at saturating the surface with highly charged and dense colours."}, "pilaster": {"term": "pilaster", "defn": "Pillar partly built into, partly projecting from a wall."}, "poorna-ghata": {"term": "poorna-ghata", "defn": "Symbolic religious vessel kept on the top of a stoopa touching the roof of a chaitya [See Fig. 1]."}, "pralamba-paada": {"term": "pralamba-paada", "defn": "Posture of sitting with the legs hanging."}, "pramaana": {"term": "pramaana", "defn": "An anga (limb) of painting and refers to ‘appropriate structure and proportion’. Thus, standing images of the Buddha and major divinities like the Bodhi-sattva-s were to be drawn in a ratio of nine thaalam-s (a unit of length in which the length of the face taken as the unit) for the total height of the image."}, "pre-classical": {"term": "pre-classical", "defn": "In art, this refers to that period which follows the initial phase in the development of an art form, called the archaic period. In the context of Ajanta this is the earliest phase. [See under ‘archaic’ and also ‘Phases of Ajanta Art and Pre-Classical Period’]."}, "preparation of wall": {"term": "preparation of wall", "defn": "The rough surface of the naked stone walls was first covered with a layer of potter's clay taken from the slimy beds of pools and mixed with molasses, gum of a tree called Indian bdellium (commiphora mukul, pronounced as &quot;dellium&quot;) and rice husks, with perhaps animal glue as a binding medium. On this a thin layer of lime plaster was applied as priming. The chapters dealing with painting in Vishnu-dharmottara, probably compiled during the 7th century AD, but containing information from earlier times, give details of the ingredients of clay plaster which show that it corresponded roughly with the material used at Ajanta. The prescription according to this is as follows: &quot;A buffalo-skin was boiled in water until it became soft. Sticks were then made of the paste and dried in the sunshine. It is stated that if colour is mixed with this hard plaster, called vajra-lepa, it makes it fast, and if white mud is mixed with it, it serves as a perfect medium for coating the walls. Vajra-lepa coating was usually done in three layers over a plaster which consisted of powdered brick, burnt conches and sand, mixed with a liquid preparation of molasses and drops of a decoction of mudga (Phaseolus munga). To this a quantity of mashed ripe bananas or tree resins and the pulp of bilva fruit (Aegle marmelos) was also added. After the mixture had dried it was again ground down and mixed with molasses and water until it became soft. The wall surface was washed down with water until it was thoroughly clean, and then the plaster was applied with a spoon. This was the two-fold process by which the wall was prepared for painting.&quot;"}, "raaja-griha": {"term": "Raaja-griha", "defn": "The capital of Magadha, Raaja-griha was one of the sixteen great cities of India (Mahaajana-paada-s) during the time of the Buddha. This place is now known as Rajghir, 90 km from Patna, the capital city of the state of Bihar. The Magadha ruler Bimbi-saara was an ardent disciple of the Holy One. But his son and the usurper of his kingdom Ajaata-shatru was not well disposed towards Him initially, but became His follower later. Raaja-griha is one of the eight holy places (attha-mahaa-thaanaani). When the Buddha came here after His Enlightenment, King Bimbi-saara gifted him a venu vana (bamboo-grove). Here He stayed for some time. The inclusion of this place among the eight important places is because He performed the miracle of subjugating a mad elephant, called Nalagiri, let loose on Him by King Ajaata-shatru at the instance of Deva-datta, a jealous cousin of the Buddha. The incident forms the theme of a painting in Cave 17 and is titled, ‘The Miracle at Raaja-griha’. The First Buddhist Council was held in the Sapta-parani cave on the Vaibhava Hill after His pari-nirvaana. One of the persons converted to his faith was Shaari-putta, during His stay here."}, "relief and depth": {"term": "relief and depth", "defn": "A variety of techniques were available to create an illusion of the third dimension. Perspective, foreshortening (kshayaa-vriddhi), shading (vartana) and adding highlights (ujjotana) are the most important ones. All these techniques are employed in Ajanta."}, "rosette": {"term": "rosette", "defn": "Ornamental design based on the rose"}, "saata-vaahana-s": {"term": "Saata-vaahana-s", "defn": "The rulers who ruled the area in which Ajanta lay. It was during the rule of this dynasty that Caves 9 and 10 were excavated. Though the kings belonged to the Hindu faith they were tolerant of other faiths."}, "sadrishya": {"term": "sadrishya", "defn": "Refers to similitude and is an anga (limb) of painting. Indian art tradition prescribes that the features or parts of the anatomy of the divine being were to be presented in a metaphorical rather than a naturalistic way. That is, the parts of the body were to be represented in the shape of forms in the animal and vegetable worlds, which had come to be regarded as more beautiful in an absolute sense than the accidental and imperfect features to be found in human models. Accordingly, the eyes of the great being are like lotus petals, his arching brows like the curve of the Indian bow, and his face the perfect ovoid (shape of the egg). The shoulders of the divinity are likened to the massive domed head of the elephant, and his arms to its tapered trunk. A further metaphor describes the torso as like the body of a lion. [See Rendering Parts of the Body - Symbolism based on Animals and Plants]."}, "sarnath": {"term": "Sarnath", "defn": "Also known as Isi-pattana or Rishi-pattana. This is close to Varanasi. It is in the Deer Park (mrigadava) of Sarnath that He delivered the first discourse. The persons who attended this were the ‘five monks’ (pancha-vargeeya-s) His one time associates during His initial stages in the quest for the Truth. This discourse is known as the dharma chakra pravartana (setting-the-wheel-of-Law-into-motion). Because of this the place is often referred to as Dharma-chakra Vihaara. Here Emperor Ashoka erected the celebrated Ashoka pillar, only the lower portion of which exists today at the site. The capital of the pillar, the famous ‘four lions’ that has been adopted by India as its national symbol is kept in the museum. Among a very large number of stoopa-s, its Dhamekh stoopa is the most celebrated. Antiquities from 3rd century BC may be seen in the museum. This place is one among the attha-mahaa-thaanaani (eight holy places)."}, "shaala-bhanjika": {"term": "shaala-bhanjika", "defn": "Tree spirit, wood nymph, dryad."}, "shading": {"term": "shading", "defn": "[See vartana]"}, "shasnkaashya": {"term": "Shasnkaashya", "defn": "Known to-day as Sankissa or Sankasia, in the district of Farukkhabad in the state of Utter Pradesh, this is the place from which the Buddha ascended ‘the heaven of the thirty-three gods’ in order to meet his mother and to deliver the message of the Law. According to Buddhist legends, the Lord came down by a triple ladder, accompanied by Shakra (Indra) and Brahma, a favourite theme in Buddhist art. This scene is depicted in Cave 17 as Buddha preaches to the Congregation (Nou 197).  Emperor Ashoka erected here an Ashokan column with an elephant capital. Unfortunately, but for the extant remains of an earthen rampart and a few scattered mounds, there is nothing to show for its proud history. This place is one of the attha-mahaa-thaanaani (eight holy places)."}, "shraavasti": {"term": "Shraavasti", "defn": "This was the capital of the ancient kingdom of Koshala. This place is identified with the present day villages Saheth and Maheth, the former in the district of Gonda and the later in the district of Bahraich, both in the state of Utter Pradesh. The place is important for, among other things, the Buddha performed a great miracle to confound the sceptics, which included King Prasenajit of Koshala. He sat on a lotus of a thousand petals and multiplied himself going upto the highest heaven. This miracle is depicted in Ajanta in Caves 2 and 6. The second reason for its importance is the donation of a splendid Jetavana Vihaara by a merchant Anaatha-pindika. And, lastly, here the Master converted a notorious robber, Anguli-maala. It is in the Jetavana Vihaara that the Buddha spent the largest number of varsha-s, the traditional retreat for four monsoon months, and delivered many of His important sermons. The irregular enclosure wall is all that remains of this vihaara. This encloses a number of stoopa-s, monasteries and temples, most of which belong to a later date. Emperor Ashoka visited the place."}, "spandrel (or spandril)": {"term": "spandrel (or spandril)", "defn": "corner space between a square with a circle drawn inside it."}, "sthaana-s": {"term": "sthaana-s", "defn": "Body postures or body-poses. By the beginning of the later period, namely, the 4th century, AD, systemising and adopting a whole range of postures was complete. The postures or poses were identified, and distinct terms to denote various degrees of bending and torsion of the body were used to cover the entire range. It is possible that they were greatly influenced by the contemporary dance traditions that by that time had reached a very high level of sophistication. Thus, the postures covering the range from the rijva-gata (frontal) to paarshva-gata (strict profile) are, anriju (back view), sachikrita-sharira (a bent position in profile), ardha-vilochana (the face in full profile but the body in three-quarter profile), paraa-vritta (head and one shoulder turned backwards), prishtha-gata (back view with upper half of the body partly visible in profile), pari-vritta (the body sharply turned back from the waist upwards) and samanata (back view of a squatting position with bent body). Most of the poses are found in Ajanta. [See also Dance and Painting]."}, "stoopa": {"term": "stoopa", "defn": "Buddhist funeral mound, which gradually developed into a dome-like structure, containing the ashes or relics of holy men; replica of this was made in chaitya-s."}, "tilak": {"term": "tilak", "defn": "(See under ‘bindi’)"}, "torana": {"term": "torana", "defn": "An arched doorway"}, "trade routes, ancient": {"term": "trade routes, ancient", "defn": "(See under ‘ancient trade routes’)"}, "tribhanga": {"term": "tribhanga", "defn": "A body posture, where the whole figure is structured round three main axes giving it an S-shaped rhythm. In Ajanta this is the most popular pose particularly for depicting women in relaxed mood. The Bodhi-sattva Padma-paani (Kbl 069) and the Dancing Girl with Musicians (kbl 091), both from Cave 1, are a few examples. It is practised by dancers even today, particularly in odissi, a classical dance form from the eastern part of India. On the other hand abhanga is a standing pose with a slight flexion, a pose one commonly found in sculpture."}, "triforium": {"term": "triforium", "defn": "A gallery, storey or arcade over an aisle. [See Fig. ?]."}, "ujjotana (adding-highlights)": {"term": "ujjotana (adding-highlights)", "defn": "A technique for producing depth and relief, an approach that is different from vartana. In this method lighter and brighter pigments are added specifically to produce an optic effect. This effect can be seen in the Woman holding a Lotus (Mjt 034) in Cave 1."}, "vaakaataka-s": {"term": "Vaakaataka-s", "defn": "The Ajanta the cave-inscriptions attest to the liberality of the ministers of the Vaakaataka rulers. The Vaakaataka-s were related to the Imperial Gupta-s through matrimony."}, "vaishali": {"term": "Vaishali", "defn": "Identified with present-day Basarh in the district of Muzaffarpur in the state of Bihar, it is here that the Buddha was offered a bowl of honey by monkeys. Because of this, this place is one among the attha-mahaa-thaanaani (eight holy places). Again it is here that the Buddha announced his ensuing pari-nirvaana. The Lichchhavi-s erected a stoopa here on their share of the relics of the Master. This, along with the stoopa built by Ashoka, is in ruin. The famous courtesan, Amra-paali gifted Him a mango-grove here. Also, after about hundred years of His pari-nirvaana, the Second Buddhist Council was held here, which resulted in the split into the progressive Mahaa-saangika-s and the traditionalist Theravaadin-s."}, "vajra-lepa": {"term": "vajra-lepa", "defn": "[See under ‘preparation of the wall’]."}, "vartana": {"term": "vartana", "defn": "A family of shading techniques in painting to bring out depth and relief. There were at least three vartana techniques adopted in Ajanta and elsewhere in Indian paintings. They are patraja (shading-like-the-lines-of-a-leaf), binduja (dot-and-stipple-method), and airika (softening-hardlines). One can find all these methods used in Ajanta. Ujjotana (adding-highlights) was another method of bringing out depth and relief, by adding highlights. Vartana is also known as nimnonnata (high-relief) as against animnonnata (flat-style)."}, "vault": {"term": "vault", "defn": "An arched roof or ceiling."}, "vidhyaadhara": {"term": "vidhyaadhara", "defn": "Divine celestial."}, "vishnu-dharmottara": {"term": "Vishnu-dharmottara", "defn": "A 7th century treatise that details rules and canons for painting."}, "vrikshika": {"term": "vrikshika", "defn": "A wood nymph."}, "yaksha": {"term": "yaksha", "defn": "Semi-divine being."}};


// Render glossary from GL dict
function renderGl() {
  const sorted = Object.keys(GL).sort();
  document.getElementById('body-glossary').innerHTML =
    '<p class="first">While writing the text, I have avoided, as far as possible, the use of technical terms which, for lay persons, generally impede the flow of reading. To acquire a vocabulary of technical terms would be rewarding, for they mean much more than the dictionary signifies.</p>' +
    sorted.map(k => `<div class="gl-entry"><div class="gl-term">${GL[k].term}</div><div class="gl-def">${GL[k].defn}</div></div>`).join('');
}
renderGl();

// Page title map (id → display name for status bar)
const PT = {
  home:'Home', glossary:'Glossary (A–Z)'
};

let MANIFEST = null;
const pageCache = {};

// Sidebar label for a page id
const SIDEBAR_LABELS = {
  foreword: 'Foreword by S. Swaminathan',
  overview: 'Overview of Ajanta',
  cave1: 'Cave I — Vihaara',
  cave2: 'Cave II — Vihaara',
  cave6: 'Cave VI — Two-storeyed',
  cave9: 'Cave IX — Chaitya',
  cave10: 'Cave X — Oldest Chaitya',
  cave16: 'Cave XVI — Vihaara',
  cave17: 'Cave XVII — Vihaara',
  cave19: 'Cave XIX — Chaitya',
  cave26: 'Cave XXVI — Chaitya',
  bibliography: 'Bibliography',
  about: 'About the Author'
};

function buildSidebar() {
  const pageMap = {};
  MANIFEST.pages.forEach(p => {
    pageMap[p.id] = p;
    PT[p.id] = p.title;
  });

  const GROUPS = [
    {label: 'Introduction', ids: ['foreword', 'overview']},
    {label: 'The Caves',   ids: MANIFEST.pages.filter(p => p.id.startsWith('cave')).map(p => p.id)},
    {label: 'Reference',   ids: ['glossary', 'bibliography', 'about']}
  ];

  const sidebar = document.getElementById('sidebar');
  sidebar.querySelectorAll('.toc-sec').forEach(el => el.remove());

  GROUPS.forEach(group => {
    const sec = document.createElement('div');
    sec.className = 'toc-sec open';

    const lbl = document.createElement('div');
    lbl.className = 'toc-lbl';
    lbl.setAttribute('onclick', 'togSec(this)');
    lbl.innerHTML = group.label + ' <span class="toc-arr">\u25b6</span>';
    sec.appendChild(lbl);

    const items = document.createElement('div');
    items.className = 'toc-items';

    group.ids.forEach(id => {
      const a = document.createElement('a');
      a.className = 'toc-item';
      a.setAttribute('onclick', "nav('" + id + "')" );
      a.textContent = SIDEBAR_LABELS[id] || (pageMap[id] ? pageMap[id].title : id);
      items.appendChild(a);

      if (id === 'glossary') return;
      const page = pageMap[id];
      if (!page) return;
      (page.toc || []).forEach(sub => {
        const s = document.createElement('a');
        s.className = 'toc-sub';
        s.setAttribute('onclick', "navSec('" + id + "','" + sub.anchor + "')");
        s.innerHTML = sub.label;
        items.appendChild(s);
      });
    });

    sec.appendChild(items);
    sidebar.appendChild(sec);
  });
}

function createPageDiv(id) {
  const pg = document.createElement('div');
  pg.className = 'page';
  pg.id = 'page-' + id;
  pg.innerHTML = '<div class="page-inner"><div class="page-hdr"><div class="page-title"></div><div class="page-sub"></div></div><div class="page-body"></div></div>';
  return pg;
}

async function showPage(id) {
  document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.menu-btn').forEach(b => {
    if ((b.getAttribute('onclick')||'').includes("'" + id + "'")) b.classList.add('active');
  });
  document.getElementById('status-txt').textContent = PT[id] || id;
  closeImg();

  if (id === 'home' || id === 'glossary') {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const pg = document.getElementById('page-' + id);
    if (pg) pg.classList.add('active');
    document.getElementById('content-area').scrollTop = 0;
    return;
  }

  let pg = document.getElementById('page-' + id);
  if (!pg) {
    pg = createPageDiv(id);
    document.getElementById('content-area').appendChild(pg);
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  pg.classList.add('active');
  document.getElementById('content-area').scrollTop = 0;

  if (pageCache[id]) {
    const bodyEl = pg.querySelector('.page-body');
    if (!bodyEl.hasChildNodes() || bodyEl.querySelector('.loading-msg')) {
      bodyEl.innerHTML = pageCache[id];
    }
    return;
  }

  if (!MANIFEST) return;
  const pageInfo = MANIFEST.pages.find(p => p.id === id);
  if (!pageInfo) return;

  pg.querySelector('.page-title').textContent = pageInfo.title;
  pg.querySelector('.page-sub').textContent = pageInfo.subtitle;

  const bodyEl = pg.querySelector('.page-body');
  bodyEl.innerHTML = '<p class="loading-msg" style="color:var(--caption);font-style:italic;padding:20px 0">Loading\u2026</p>';

  try {
    const parts = await Promise.all(
      pageInfo.files.map(f => fetch(f).then(r => { if (!r.ok) throw new Error(r.status); return r.text(); }))
    );
    pageCache[id] = parts.join('\n');
    bodyEl.innerHTML = pageCache[id];
  } catch(e) {
    bodyEl.innerHTML = '<p style="color:var(--red)">Could not load content. If viewing locally, run a local HTTP server (<code>python -m http.server</code>) instead of opening the file directly.</p>';
  }
}

function nav(id) {
  history.pushState({page: id}, '', '#' + id);
  showPage(id);
}

async function navSec(pageId, sectionId) {
  const pg = document.getElementById('page-' + pageId);
  if (!pg || !pg.classList.contains('active')) {
    history.pushState({page: pageId}, '', '#' + pageId);
    await showPage(pageId);
  }
  requestAnimationFrame(() => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
  });
}

window.addEventListener('popstate', e => {
  const id = (e.state && e.state.page) || location.hash.slice(1) || 'home';
  showPage(id);
});

function togSec(lbl) { lbl.parentElement.classList.toggle('open'); }

function showImgPh(ref) {
  const popup = document.getElementById('img-popup');
  const imgBody = document.getElementById('img-pop-body');
  document.getElementById('img-pop-ref').textContent = ref;
  document.getElementById('img-pop-cap').textContent = PAINTINGS[ref] || PAINTINGS[ref.toUpperCase()] || PAINTINGS[ref.toLowerCase()] || 'Painting from the Ajanta source collection.';

  const imgPath = IMAGE_PATHS[ref] || IMAGE_PATHS[ref.toUpperCase()] || IMAGE_PATHS[ref.toLowerCase()];
  const existingImg = document.getElementById('img-pop-actual');
  const placeholder = document.getElementById('img-ph-placeholder');

  if (imgPath) {
    if (!existingImg) {
      const img = document.createElement('img');
      img.id = 'img-pop-actual';
      img.style.cssText = 'width:100%;max-height:280px;object-fit:contain;display:none;';
      imgBody.insertBefore(img, imgBody.firstChild);
    }
    const imgEl = document.getElementById('img-pop-actual');
    imgEl.style.display = 'none';
    if (placeholder) placeholder.style.display = 'flex';
    imgEl._basePath = imgPath;
    imgEl._tried = ['jpg'];
    imgEl.onload = function() {
      imgEl.style.display = 'block';
      if (placeholder) placeholder.style.display = 'none';
    };
    imgEl.onerror = function() {
      const exts = ['jpg','jpeg','png','webp'];
      const tried = imgEl._tried || [];
      const next = exts.find(e => !tried.includes(e));
      if (next) {
        tried.push(next);
        imgEl._tried = tried;
        imgEl.src = imgEl._basePath + '.' + next;
      } else {
        imgEl.style.display = 'none';
        if (placeholder) placeholder.style.display = 'flex';
      }
    };
    imgEl.src = imgPath + '.jpg';
  } else {
    if (existingImg) existingImg.style.display = 'none';
    if (placeholder) placeholder.style.display = 'flex';
  }

  const vw = window.innerWidth, vh = window.innerHeight, w = 360, h = 300;
  let x = event.clientX + 12, y = event.clientY + 12;
  if (x + w > vw) x = vw - w - 8;
  if (y + h > vh) y = event.clientY - h - 8;
  popup.style.left = Math.max(4, x) + 'px';
  popup.style.top = Math.max(4, y) + 'px';
  popup.classList.add('visible');
  event.stopPropagation();
}

function closeImg() { document.getElementById('img-popup').classList.remove('visible'); }

document.addEventListener('click', e => {
  if (!e.target.classList.contains('img-ref') && !document.getElementById('img-popup').contains(e.target)) closeImg();
});
document.addEventListener('keydown', e => { if(e.key==='Escape') closeImg(); });

async function loadManifest() {
  try {
    const r = await fetch('manifest.json');
    MANIFEST = await r.json();
    buildSidebar();
  } catch(e) {
    console.error('Failed to load manifest.json:', e);
  }
  const id = location.hash.slice(1) || 'home';
  history.replaceState({page: id}, '', '#' + id);
  showPage(id);
}

loadManifest();
