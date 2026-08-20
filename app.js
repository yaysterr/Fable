const HUE_COLORS = {
  blue: "#3B82C4",
  rose: "#D66B84",
  teal: "#4C7A6B",
  indigo: "#8177C9",
};

const STORIES = {
  candle: {
    id: "candle",
    title: "แสงเทียนกลางพายุ",
    theme: "ความซื่อสัตย์",
    origin: "นิทานไทยต้นฉบับ",
    blurb: "คืนพายุ เทียนที่ดับ และหัวใจดวงหนึ่งที่ต้องเลือกระหว่างความจริงกับความสบายใจชั่วคราว",
    accent: "#FF9600",
    startNode: "ch1",
    nodes: {
      ch1: {
        type: "chapter", level: 1, scene: "candleStorm", icon: "🕯️",
        title: "ตอนที่ 1: เทียนที่ดับกลางพายุ",
        text: "เทียนศักดิ์สิทธิ์ดับวูบกลางพายุ ตะวันนั่งสั่นอยู่คนเดียวในความมืด พระอาจารย์จะกลับมาอีกไม่ถึงชั่วโมง",
        choice: { prompt: "ตะวันควรทำอย่างไร?", options: [
          { label: "วิ่งไปสารภาพความจริงกับพระอาจารย์ทันที", next: "ch2a" },
          { label: "จุดเทียนเล่มใหม่แล้วเงียบไว้ ไม่ให้ใครรู้", next: "ch2b" },
        ]},
      },
      ch2a: {
        type: "chapter", level: 2, scene: "candleDawn", icon: "🙏",
        title: "ตอนที่ 2: คำสารภาพกลางสายฝน",
        text: "ตะวันวิ่งฝ่าฝนไปสารภาพความจริงทันที พระอาจารย์ยิ้มอ่อนโยนและช่วยจุดเทียนใหม่ทัน เช้าวันรุ่งขึ้นตะวันพบกำไลเงินตกอยู่ใต้ต้นโพธิ์",
        choice: { prompt: "ตะวันควรทำอย่างไรกับกำไลที่พบ?", options: [
          { label: "เดินไปคืนกำไลให้ยายแก่ด้วยตัวเอง แม้จะต้องเดินไกล", next: "end1a" },
          { label: "เก็บกำไลไว้ก่อน เดี๋ยวยายแก่คงกลับมาถามเอง", next: "end1b" },
        ]},
      },
      ch2b: {
        type: "chapter", level: 2, scene: "candleUneasy", icon: "🌧️",
        title: "ตอนที่ 2: เปลวไฟที่ซ่อนความลับ",
        text: "ตะวันจุดเทียนใหม่แล้วเงียบไว้ คืนนั้นเขานอนไม่หลับเลย เช้าวันพิธี ชาวบ้านสังเกตเห็นรอยไหม้แปลกที่ฐานเทียนแล้วถามขึ้นต่อหน้าทุกคน",
        choice: { prompt: "ตะวันควรทำอย่างไรเมื่อถูกถาม?", options: [
          { label: "สารภาพความจริงทั้งหมดต่อหน้าทุกคนตอนนี้เลย", next: "end1c" },
          { label: "ยิ้มแล้วตอบกลบเกลื่อนไปว่าไม่มีอะไร", next: "end1d" },
        ]},
      },
      end1a: { type: "ending", level: 3, scene: "candleCeremony", hue: "blue", icon: "🌟",
        title: "ตอนจบ: ซื่อสัตย์นำพาไมตรี",
        text: "ตะวันเดินไกลไปคืนกำไลให้ยายแก่ด้วยตัวเอง ยายน้ำตาคลอเพราะเป็นของที่สามีมอบให้ก่อนจากไป ตั้งแต่นั้นความไว้ใจก็งอกงามระหว่างพวกเขา",
        insight: "ความซื่อสัตย์ไม่ใช่การไม่เคยพลาด แต่คือการกล้ารับผิดชอบในสิ่งที่พลาดไป" },
      end1b: { type: "ending", level: 3, scene: "candleCeremony", hue: "rose", icon: "🔄",
        title: "ตอนจบ: บททดสอบที่ยังไม่จบ",
        text: "ตะวันเก็บกำไลไว้ก่อน คิดว่าเดี๋ยวยายคงกลับมาถามเอง แต่ยายไม่กลับมาอีกเลย ทุกครั้งที่เห็นกำไล ใจของตะวันก็หนักอึ้งขึ้นทีละน้อย",
        insight: "คุณธรรมข้อหนึ่งไม่ได้การันตีอีกข้อหนึ่งเสมอไป การฝึกใจต้องทำต่อเนื่องในเรื่องเล็กๆ ทุกวัน" },
      end1c: { type: "ending", level: 3, scene: "candleCeremony", hue: "teal", icon: "🕊️",
        title: "ตอนจบ: สายเกินไปแต่ไม่สายที่จะแก้ไข",
        text: "ตะวันสารภาพความจริงต่อหน้าทุกคนในพิธี พระอาจารย์กล่าวว่าใจที่กล้าเผยความจริงกลางฝูงชนนั้นกล้าหาญยิ่งนัก ตะวันเบาใจอย่างไม่เคยรู้สึกมาหลายวัน",
        insight: "ความจริงที่มาช้า ยังดีกว่าความลับที่ฝังลึกลงเรื่อยๆ" },
      end1d: { type: "ending", level: 3, scene: "candleCeremony", hue: "indigo", icon: "🌑",
        title: "ตอนจบ: เงาแห่งความลับ",
        text: "ตะวันยิ้มแหยๆ แล้วตอบกลบเกลื่อนไป พิธีผ่านไปด้วยดีราวไม่มีอะไรเกิดขึ้น แต่ทุกครั้งที่เดินผ่านศาลาเทียน เขายังรู้สึกเหมือนมีเงาเล็กๆ ตามหลังอยู่เสมอ",
        insight: "บางครั้งการหนีความจริงไม่ได้ทำให้เราเป็นอิสระ แต่กลับสร้างภาระที่มองไม่เห็นให้แบกไว้แทน" },
    },
  },

  tree: {
    id: "tree",
    title: "นกน้อยกับต้นไม้ใหญ่",
    theme: "ความเมตตาและการแบ่งปัน",
    origin: "นิทานไทยต้นฉบับ",
    blurb: "ฤดูแล้งมาเยือนต้นไทรใหญ่ นกน้อยตัวหนึ่งต้องเลือกระหว่างเก็บไว้เพื่อตัวเองหรือแบ่งปันให้ผู้อื่น",
    accent: "#4C7A6B",
    startNode: "ch1",
    nodes: {
      ch1: { type: "chapter", level: 1, scene: "treeDrought", icon: "🌾",
        title: "ตอนที่ 1: ฤดูแล้งที่มาเยือน",
        text: "ฤดูแล้งทำให้อาหารในป่าร่อยหรอ พิมมีเมล็ดพืชสะสมไว้มากพอ จนได้ยินเสียงร้องแผ่วเบาของกระรอกตัวที่เคยแย่งรังของมันไปเมื่อปีก่อน",
        choice: { prompt: "พิมควรทำอย่างไร?", options: [
          { label: "แบ่งเมล็ดพืชที่สะสมไว้ให้เพื่อนสัตว์ทุกตัวที่หิวโหย แม้จะเหลือน้อยลง", next: "ch2a" },
          { label: "เก็บเมล็ดพืชไว้กับตัวเอง เพราะกลัวว่าฤดูแล้งจะยาวนานกว่านี้", next: "ch2b" },
        ]},
      },
      ch2a: { type: "chapter", level: 2, scene: "treeShare", icon: "🤝",
        title: "ตอนที่ 2: วงแบ่งปันที่ขยายกว้าง",
        text: "พิมแบ่งเมล็ดพืชให้เพื่อนสัตว์ทุกตัวที่หิวโหย ข่าวความใจกว้างแพร่ไปทั่วป่า จนวันหนึ่งกระรอกตัวเดิมก็ปรากฏตัวที่หน้าโพรงด้วยความละอายใจ",
        choice: { prompt: "พิมควรทำอย่างไรกับกระรอกตัวนี้?", options: [
          { label: "ให้อภัยในเรื่องเก่า แล้วแบ่งเมล็ดพืชสุดท้ายที่เหลือให้ด้วย", next: "end2a" },
          { label: "ช่วยเหลือเฉพาะเพื่อนสนิทที่ไม่เคยทำร้ายกันเท่านั้น", next: "end2b" },
        ]},
      },
      ch2b: { type: "chapter", level: 2, scene: "treeQuiet", icon: "🔒",
        title: "ตอนที่ 2: โพรงที่เงียบงัน",
        text: "พิมเก็บเมล็ดพืชไว้กับตัวเองและปิดปากโพรงแน่นหนา เสียงเพื่อนสัตว์ค่อยๆ เงียบหายไปทีละตัว จนต้นไทรเริ่มเงียบเหงาและอาหารของพิมเองก็ร่อยหรอลง",
        choice: { prompt: "พิมควรทำอย่างไรในสถานการณ์นี้?", options: [
          { label: "เปิดโพรงแบ่งเมล็ดพืชที่เหลือให้เพื่อนที่ยังอยู่ ก่อนจะสายเกินไป", next: "end2c" },
          { label: "ยึดมั่นในการเก็บเมล็ดพืชไว้กับตัวเองต่อไปจนกว่าฝนจะมา", next: "end2d" },
        ]},
      },
      end2a: { type: "ending", level: 3, scene: "treeResolution", hue: "blue", icon: "💞",
        title: "ตอนจบ: เมตตาไร้พรมแดน",
        text: "พิมยื่นเมล็ดพืชสุดท้ายให้กระรอกโดยไม่พูดถึงเรื่องเก่าเลย กระรอกกลั้นน้ำตาไว้ไม่อยู่ เมื่อฝนกลับมา ต้นไทรก็เต็มไปด้วยเสียงหัวเราะของเพื่อนทุกตัว",
        insight: "ความเมตตาที่แท้จริง ไม่ได้เลือกให้เฉพาะคนที่เคยดีกับเราเท่านั้น" },
      end2b: { type: "ending", level: 3, scene: "treeResolution", hue: "rose", icon: "🌿",
        title: "ตอนจบ: วงกลมเล็กๆ ของความดี",
        text: "พิมช่วยเหลือเฉพาะเพื่อนสนิทเท่านั้น กระรอกรอดชีวิตด้วยตัวเองแต่ไม่เคยกลับมาใกล้ชิดอีกเลย พิมยังเป็นที่รักของเพื่อนสนิท แต่โลกข้างนอกวงเล็กๆ นั้นกว้างเสมอ",
        insight: "ความดีที่มีขอบเขตยังคงเป็นความดี เพียงแต่โลกกว้างกว่าวงเพื่อนของเราเสมอ" },
      end2c: { type: "ending", level: 3, scene: "treeResolution", hue: "teal", icon: "🌦️",
        title: "ตอนจบ: หัวใจที่เปลี่ยนแปลง",
        text: "พิมเปลี่ยนใจเปิดโพรงแบ่งปันก่อนจะสายเกินไป แม้เพื่อนจะเหลือไม่กี่ตัว แต่ทุกตัวที่ยังอยู่ก็ร่วมมือกัน ต้นไทรค่อยๆ กลับมามีเสียงพูดคุยอีกครั้ง",
        insight: "ไม่มีคำว่าสายเกินไปสำหรับการเริ่มต้นแบ่งปัน" },
      end2d: { type: "ending", level: 3, scene: "treeResolution", hue: "indigo", icon: "🍂",
        title: "ตอนจบ: ต้นไม้เดียวดาย",
        text: "พิมยึดมั่นเก็บเมล็ดพืชไว้คนเดียวจนสุดทาง ฝนกลับมาแต่ต้นไทรเหลือเพียงพิมตัวเดียว เสียงลมที่พัดผ่านกิ่งไทรอันเงียบเหงากลายเป็นเพื่อนหนึ่งเดียวที่เหลืออยู่",
        insight: "สิ่งที่เก็บไว้คนเดียวอาจปลอดภัย แต่ก็อาจทำให้เราเดียวดายไปพร้อมกัน" },
    },
  },

  hare: {
    id: "hare",
    title: "กระต่ายกับเต่า",
    theme: "ความไม่ประมาทและความเพียร",
    origin: "นิทานอีสป",
    blurb: "เสียงท้าทายกลางป่าจุดประกายการแข่งขันที่ทั้งกระต่ายและเต่าต่างต้องเลือกทางเดินของหัวใจตัวเอง",
    accent: "#3B82C4",
    startNode: "ch1",
    nodes: {
      ch1: { type: "chapter", level: 1, scene: "raceStart", icon: "🐇",
        title: "ตอนที่ 1: เสียงท้าทายกลางป่า",
        text: "กระต่ายหัวเราะเยาะเต่าที่เดินช้าจนท้าแข่งวิ่งกลางป่า เต่าตอบตกลงอย่างสงบ เสียงนกหวีดเริ่มต้นการแข่งขันดังขึ้น",
        choice: { prompt: "เมื่อกระต่ายวิ่งนำไปไกลจนลับตา เต่าควรทำอย่างไร?", options: [
          { label: "ไม่สนใจคำเยาะเย้ย มุ่งเดินอย่างสม่ำเสมอต่อไป", next: "ch2a" },
          { label: "รู้สึกน้อยใจจนเกือบอยากเลิกล้มกลางทาง", next: "ch2b" },
        ]},
      },
      ch2a: { type: "chapter", level: 2, scene: "raceSteady", icon: "🐢",
        title: "ตอนที่ 2: ก้าวที่มั่นคง",
        text: "เต่าเดินอย่างสม่ำเสมอไม่หยุด ขณะที่กระต่ายซึ่งนำอยู่ไกลลิบเริ่มรู้สึกง่วงใต้ร่มไม้ริมทาง",
        choice: { prompt: "กระต่ายควรทำอย่างไร?", options: [
          { label: "หมั่นเพียรวิ่งต่อแม้จะนำอยู่มาก ไม่ประมาท", next: "end3a" },
          { label: "แวะงีบใต้ต้นไม้เพราะมั่นใจว่าชนะแน่นอน", next: "end3b" },
        ]},
      },
      ch2b: { type: "chapter", level: 2, scene: "raceDoubt", icon: "💭",
        title: "ตอนที่ 2: เสียงในใจที่สั่นไหว",
        text: "เต่าเริ่มสงสัยว่าตัวเองจะไปถึงเส้นชัยไหวหรือไม่ เมื่อมองไม่เห็นเงากระต่ายอยู่ข้างหน้าอีกต่อไป",
        choice: { prompt: "เต่าควรทำอย่างไรกับความสงสัยนี้?", options: [
          { label: "ให้กำลังใจตัวเองแล้วเดินหน้าต่อไปอย่างไม่ลดละ", next: "end3c" },
          { label: "ยอมแพ้กลางทางเพราะคิดว่าสู้ไม่ไหว", next: "end3d" },
        ]},
      },
      end3a: { type: "ending", level: 3, scene: "raceFinish", hue: "blue", icon: "🏅",
        title: "ตอนจบ: ชัยชนะที่สมศักดิ์ศรี",
        text: "กระต่ายไม่ประมาทและวิ่งต่อจนถึงเส้นชัยเป็นตัวแรก เต่าตามมาถึงด้วยรอยยิ้มภูมิใจในความพยายามของตัวเอง ทั้งคู่จับมือกันแม้ผลจะต่างกัน",
        insight: "ความไม่ประมาทมีค่าเสมอ ไม่ว่าจะนำอยู่มากแค่ไหนก็ตาม" },
      end3b: { type: "ending", level: 3, scene: "raceFinish", hue: "rose", icon: "🐢",
        title: "ตอนจบ: ช้าแต่ชัวร์",
        text: "กระต่ายงีบหลับสนิทจนเต่าค่อยๆ เดินแซงไปถึงเส้นชัยก่อน เสียงเชียร์ดังกึกก้องปลุกกระต่ายให้ตื่นขึ้นมาพบกับความพ่ายแพ้ที่ไม่คาดคิด",
        insight: "ความสม่ำเสมอเอาชนะพรสวรรค์ที่ประมาทได้เสมอ" },
      end3c: { type: "ending", level: 3, scene: "raceFinish", hue: "teal", icon: "💪",
        title: "ตอนจบ: กำลังใจพาไปถึงเส้นชัย",
        text: "แม้จะเดินตามหลังอยู่ไกล เต่าก็ไม่ยอมแพ้และเดินจนถึงเส้นชัยในที่สุด ฝูงชนปรบมือให้ความพยายามของเต่าดังพอๆ กับที่ให้ผู้ชนะ",
        insight: "ชัยชนะที่แท้จริงบางครั้งไม่ใช่การเข้าเส้นชัยก่อน แต่คือการไม่ยอมแพ้ต่อใจตนเอง" },
      end3d: { type: "ending", level: 3, scene: "raceFinish", hue: "indigo", icon: "🌥️",
        title: "ตอนจบ: เส้นทางที่ยังไม่จบ",
        text: "เต่าหยุดเดินกลางทางและนั่งลงข้างทางด้วยความท้อแท้ กระต่ายชนะการแข่งขันไปอย่างง่ายดาย แต่เต่าก็ได้แต่คิดว่าถ้าลองอีกสักนิดผลอาจไม่เหมือนเดิม",
        insight: "ทุกคนมีวันที่อยากยอมแพ้ สิ่งสำคัญคือการกลับมาลองใหม่อีกครั้ง" },
    },
  },

  ant: {
    id: "ant",
    title: "มดกับจักจั่น",
    theme: "ความขยันและการวางแผน",
    origin: "นิทานอีสป",
    blurb: "เสียงเพลงกลางฤดูร้อนกับเมล็ดข้าวที่สะสมไว้ใต้ดิน สองเพื่อนต่างเลือกทางเดินของตัวเองก่อนฤดูหนาวจะมาเยือน",
    accent: "#8177C9",
    startNode: "ch1",
    nodes: {
      ch1: { type: "chapter", level: 1, scene: "antSummer", icon: "🐜",
        title: "ตอนที่ 1: เสียงเพลงกลางฤดูร้อน",
        text: "มดขยันแบกเมล็ดข้าวสะสมไว้ใต้ดินตลอดฤดูร้อน ขณะที่จักจั่นเล่นดนตรีสบายใจและเยาะว่ามดทำงานหนักเกินไป",
        choice: { prompt: "มดควรรู้สึกและตอบสนองอย่างไร?", options: [
          { label: "ยิ้มรับแล้วทำงานต่อไปอย่างมีความสุข ไม่หวั่นไหว", next: "ch2a" },
          { label: "รู้สึกน้อยใจและเริ่มสงสัยว่าตนเองทำถูกหรือเปล่า", next: "ch2b" },
        ]},
      },
      ch2a: { type: "chapter", level: 2, scene: "antContinue", icon: "🌰",
        title: "ตอนที่ 2: ฤดูร้อนที่ผันผ่าน",
        text: "มดยังคงเก็บเสบียงอย่างต่อเนื่อง ฤดูร้อนใกล้หมดลง จักจั่นยังคงเล่นเพลงอยู่ใต้ร่มไม้เช่นเดิม",
        choice: { prompt: "มดควรทำอย่างไรต่อ?", options: [
          { label: "ทำงานเก็บอาหารต่อไปจนครบแผน ไม่ยอมหยุดพักแม้แต่วันเดียว", next: "end4a" },
          { label: "แบ่งเวลาพักฟังเพลงของจักจั่นบ้าง แต่ยังเก็บอาหารได้พอ", next: "end4b" },
        ]},
      },
      ch2b: { type: "chapter", level: 2, scene: "antDoubt", icon: "🎵",
        title: "ตอนที่ 2: คำถามที่แว่วอยู่ในใจ",
        text: "มดเริ่มลังเลว่าการทำงานหนักขนาดนี้คุ้มค่าหรือไม่ เมื่อเห็นจักจั่นดูมีความสุขกว่าทุกวัน",
        choice: { prompt: "มดควรทำอย่างไร?", options: [
          { label: "เชื่อมั่นในแผนของตัวเองต่อไปแม้จะยังสงสัยอยู่บ้าง", next: "end4c" },
          { label: "เลิกเก็บอาหารกลางคันแล้วไปเล่นกับจักจั่นแทน", next: "end4d" },
        ]},
      },
      end4a: { type: "ending", level: 3, scene: "antWinter", hue: "blue", icon: "🏠",
        title: "ตอนจบ: อิ่มท้องแต่เหงาใจ",
        text: "มดทำงานไม่หยุดพักตลอดฤดู เมื่อหิมะแรกโปรยลงมา โพรงของมันเต็มไปด้วยอาหาร แต่กลับเงียบเหงาไร้เสียงเพื่อนมาเยือน",
        insight: "ความขยันที่ลืมพักผ่อนและมิตรภาพ อาจทำให้เราอิ่มท้องแต่ว่างเปล่าข้างใน" },
      end4b: { type: "ending", level: 3, scene: "antWinter", hue: "rose", icon: "🎶",
        title: "ตอนจบ: สมดุลแห่งฤดูกาล",
        text: "มดแบ่งเวลาเก็บอาหารและพักฟังเพลงบ้าง เมื่อฤดูหนาวมาถึง โพรงของมันมีทั้งอาหารพอกินและมีจักจั่นแวะมาเล่นเพลงให้ฟังเป็นเพื่อน",
        insight: "ความขยันที่มีที่ว่างให้พักผ่อนและมิตรภาพ คือความสมดุลที่ยั่งยืนที่สุด" },
      end4c: { type: "ending", level: 3, scene: "antWinter", hue: "teal", icon: "🌰",
        title: "ตอนจบ: ผลของความเพียร",
        text: "มดเชื่อมั่นในแผนของตัวเองและเก็บอาหารจนสำเร็จ เมื่อจักจั่นหิวโหยมาเคาะประตูในหน้าหนาว มดก็ยินดีแบ่งอาหารให้อย่างอบอุ่นใจ",
        insight: "ความเพียรที่ไม่ลดละแม้ในวันที่ใจสั่นคลอน คือสิ่งที่ปกป้องเราในวันที่ยากลำบาก" },
      end4d: { type: "ending", level: 3, scene: "antWinter", hue: "indigo", icon: "❄️",
        title: "ตอนจบ: บทเรียนแรกของทั้งคู่",
        text: "มดเลิกเก็บอาหารกลางคันไปเล่นกับจักจั่น เมื่อฤดูหนาวมาถึง ทั้งคู่ต่างขาดแคลนอาหารด้วยกัน แต่ก็ได้เรียนรู้บทเรียนสำคัญร่วมกันสำหรับปีถัดไป",
        insight: "บางบทเรียนต้องแลกมาด้วยความลำบาก แต่ก็ทำให้เราเตรียมพร้อมสำหรับปีถัดไปเสมอ" },
    },
  },
};

const BADGES = [
  { id: "start", icon: "🌙", title: "เริ่มต้นการเดินทาง", desc: "เริ่มอ่านนิทานเรื่องแรก", check: (p) => Object.keys(p).length > 0 },
  { id: "first_end", icon: "🏮", title: "นักเล่าเรื่องมือใหม่", desc: "อ่านนิทานถึงตอนจบเป็นครั้งแรก", check: (p) => Object.values(p).some((s) => s.completed) },
  { id: "all_complete", icon: "📖", title: "ปราชญ์แห่งศีลธรรม", desc: "อ่านจบครบทุกเรื่องในคลังนิทาน", check: (p) => Object.keys(STORIES).every((id) => p[id]?.completed) },
  { id: "explorer", icon: "🧭", title: "นักสำรวจหลากเส้นทาง", desc: "ค้นพบตอนจบที่แตกต่างกันอย่างน้อย 5 แบบ", check: (p) => Object.values(p).reduce((a, s) => a + (s.endingsUnlocked?.length || 0), 0) >= 5 },
  { id: "master", icon: "👑", title: "ผู้พิชิตทุกเส้นทาง", desc: "ค้นพบตอนจบครบทั้ง 4 แบบในนิทานเรื่องเดียว", check: (p) => Object.values(p).some((s) => (s.endingsUnlocked?.length || 0) >= 4) },
];
function sceneSVG(id, tint) {
  const T = tint ? `<rect width="400" height="220" fill="${tint}" fill-opacity="0.24" />` : "";
  switch (id) {
    case "candleStorm": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3B3450"/><stop offset="100%" stop-color="#5A4E70"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g1)"/>
        <g stroke="#B9AEDD" stroke-width="2" stroke-linecap="round" opacity="0.5">
          <line x1="60" y1="10" x2="48" y2="42"/><line x1="120" y1="0" x2="106" y2="36"/><line x1="200" y1="14" x2="188" y2="48"/>
          <line x1="300" y1="8" x2="288" y2="40"/><line x1="350" y1="24" x2="338" y2="56"/>
        </g>
        <rect x="0" y="175" width="400" height="45" fill="#4A3F5C"/>
        <path d="M70 175 L130 115 L190 175 Z" fill="#2C2242"/>
        <rect x="90" y="150" width="80" height="25" fill="#2C2242"/>
        <rect x="235" y="152" width="10" height="30" rx="2" fill="#7A5C3E"/>
        <rect x="227" y="142" width="26" height="12" rx="3" fill="#9C7A50"/>
        <rect x="236" y="118" width="8" height="26" rx="3" fill="#F3E9D2"/>
        <path d="M240 116 C245 106 235 98 240 88" stroke="#B9AEDD" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
        <circle cx="150" cy="158" r="13" fill="#FF9600"/>
        <path d="M132 188 Q150 165 168 188 L168 198 L132 198 Z" fill="#FF9600"/>
        ${T}
      </svg>`;
    case "candleDawn": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFC988"/><stop offset="100%" stop-color="#FFF3E0"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g2)"/>
        <circle cx="330" cy="55" r="24" fill="#FFEFD1"/>
        <rect x="0" y="182" width="400" height="38" fill="#E4C98A"/>
        <path d="M20 182 Q120 165 220 182 T400 182 L400 220 L0 220 Z" fill="#D9B978"/>
        <path d="M40 182 L60 155 L80 182 Z" fill="#B98A55"/>
        <path d="M100 182 L118 160 L136 182 Z" fill="#B98A55"/>
        <g stroke="#C97B5D" stroke-width="2" stroke-linecap="round"><path d="M270 60 Q280 50 290 60" fill="none"/><path d="M300 45 Q310 35 320 45" fill="none"/></g>
        <circle cx="230" cy="176" r="10" fill="#FF9600"/>
        <path d="M216 200 Q230 182 244 200 L244 208 L216 208 Z" fill="#FF9600"/>
        <circle cx="150" cy="196" r="5" fill="#F4C878" stroke="#C97B5D" stroke-width="1.5"/>
        ${T}
      </svg>`;
    case "candleUneasy": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6B6084"/><stop offset="100%" stop-color="#8A7FA3"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g3)"/>
        <rect x="0" y="178" width="400" height="42" fill="#524669"/>
        <path d="M60 178 L120 118 L180 178 Z" fill="#3B3450"/>
        <rect x="80" y="152" width="80" height="26" fill="#3B3450"/>
        <rect x="230" y="150" width="10" height="30" rx="2" fill="#7A5C3E"/>
        <rect x="222" y="140" width="26" height="12" rx="3" fill="#9C7A50"/>
        <rect x="231" y="112" width="8" height="30" rx="3" fill="#F3E9D2"/>
        <ellipse cx="235" cy="108" rx="4" ry="7" fill="#FFCF6E"/>
        <circle cx="150" cy="158" r="12" fill="#FF9600"/>
        <path d="M133 186 Q150 165 167 186 L167 196 L133 196 Z" fill="#FF9600"/>
        <path d="M138 130 Q145 120 138 112 Q152 118 148 130" fill="none" stroke="#D9CDEF" stroke-width="2" opacity="0.7"/>
        ${T}
      </svg>`;
    case "candleCeremony": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4A3B63"/><stop offset="55%" stop-color="#D77A55"/><stop offset="100%" stop-color="#FFD9A0"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g4)"/>
        <rect x="0" y="150" width="400" height="70" fill="#2C2242" opacity="0.55"/>
        ${[60,120,180,240,300,340].map((x,i)=>`<g>
            <ellipse cx="${x}" cy="${150 - (i%2)*10}" rx="14" ry="10" fill="#FFCF6E" opacity="0.95"/>
            <ellipse cx="${x}" cy="${168 - (i%2)*10}" rx="10" ry="14" fill="#FFCF6E" opacity="0.25"/>
          </g>`).join('')}
        <circle cx="200" cy="90" r="16" fill="#FFF3D6" opacity="0.9"/>
        ${[100,160,240,300].map((x,i)=>`<path d="M${x} 210 Q${x+10} 195 ${x+20} 210 L${x+20} 218 L${x} 218 Z" fill="#2C2242"/>`).join('')}
        ${T}
      </svg>`;
    case "treeDrought": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFD9A0"/><stop offset="100%" stop-color="#FFF3E0"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g5)"/>
        <circle cx="335" cy="50" r="26" fill="#FF9600"/>
        <rect x="0" y="175" width="400" height="45" fill="#D9C08C"/>
        <g stroke="#B99A5F" stroke-width="2"><path d="M40 190 L55 200"/><path d="M110 185 L128 198"/><path d="M250 195 L268 205"/></g>
        <rect x="160" y="120" width="16" height="70" fill="#8A6A45"/>
        <ellipse cx="168" cy="105" rx="55" ry="38" fill="#9CAE6E"/>
        <ellipse cx="140" cy="90" rx="30" ry="22" fill="#8A9D5E"/>
        <circle cx="205" cy="130" r="9" fill="#4C7A6B"/>
        <path d="M212 130 L226 124 L216 134 Z" fill="#3A6354"/>
        ${T}
      </svg>`;
    case "treeShare": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g6" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#BFE3C6"/><stop offset="100%" stop-color="#F0F8EC"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g6)"/>
        <rect x="0" y="178" width="400" height="42" fill="#8FBBA9"/>
        <rect x="150" y="115" width="18" height="70" fill="#7A5C3E"/>
        <ellipse cx="159" cy="98" rx="62" ry="42" fill="#5F9C6E"/>
        <ellipse cx="122" cy="82" rx="34" ry="24" fill="#71B07E"/>
        <circle cx="220" cy="150" r="9" fill="#4C7A6B"/>
        <path d="M227 150 L241 144 L231 154 Z" fill="#3A6354"/>
        <ellipse cx="255" cy="168" rx="12" ry="9" fill="#9C7A50"/>
        <path d="M264 162 Q276 152 270 172" fill="none" stroke="#9C7A50" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="80" cy="170" rx="9" ry="7" fill="#D66B84"/>
        ${[190,210,230].map((x,i)=>`<circle cx="${x}" cy="188" r="4" fill="#E8A33D"/>`).join('')}
        ${T}
      </svg>`;
    case "treeQuiet": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g7" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3B3450"/><stop offset="100%" stop-color="#6B6084"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g7)"/>
        <circle cx="340" cy="50" r="18" fill="#F3E9D2" opacity="0.9"/>
        <rect x="0" y="178" width="400" height="42" fill="#4A3F5C"/>
        <rect x="150" y="115" width="16" height="70" fill="#5A4E70"/>
        <ellipse cx="158" cy="100" rx="46" ry="30" fill="#524669"/>
        <circle cx="185" cy="140" r="8" fill="#8577A0"/>
        <path d="M192 140 L204 135 L196 144 Z" fill="#6B6084"/>
        ${T}
      </svg>`;
    case "treeResolution": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g8" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFCB8C"/><stop offset="100%" stop-color="#FFF3E0"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g8)"/>
        <rect x="0" y="178" width="400" height="42" fill="#A8C79B"/>
        <rect x="150" y="112" width="18" height="72" fill="#7A5C3E"/>
        <ellipse cx="159" cy="95" rx="64" ry="44" fill="#6FAE7C"/>
        <ellipse cx="120" cy="80" rx="34" ry="24" fill="#7EBB89"/>
        <circle cx="100" cy="175" r="8" fill="#4C7A6B"/>
        <circle cx="130" cy="180" r="7" fill="#D66B84"/>
        <circle cx="200" cy="178" r="8" fill="#9C7A50"/>
        <circle cx="230" cy="182" r="7" fill="#4C7A6B"/>
        ${T}
      </svg>`;
    case "raceStart": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g9" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#BEE3F8"/><stop offset="100%" stop-color="#EFF8FF"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g9)"/>
        <circle cx="340" cy="48" r="24" fill="#FFD35C"/>
        <rect x="0" y="178" width="400" height="42" fill="#E4C98A"/>
        <line x1="0" y1="199" x2="400" y2="199" stroke="#fff" stroke-width="3" stroke-dasharray="14 12" opacity="0.8"/>
        <rect x="30" y="130" width="4" height="60" fill="#7A5C3E"/>
        <path d="M34 130 L64 138 L34 146 Z" fill="#3B82C4"/>
        <ellipse cx="150" cy="196" rx="24" ry="15" fill="#4C7A6B"/>
        <circle cx="130" cy="194" r="8" fill="#6B9C87"/>
        <ellipse cx="230" cy="182" rx="16" ry="9" fill="#E4C79A"/>
        <ellipse cx="221" cy="170" rx="5" ry="13" fill="#E4C79A" transform="rotate(-15 221 170)"/>
        <ellipse cx="238" cy="170" rx="5" ry="13" fill="#E4C79A" transform="rotate(15 238 170)"/>
        ${T}
      </svg>`;
    case "raceSteady": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g10" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFE3B8"/><stop offset="100%" stop-color="#FFF6E8"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g10)"/>
        <circle cx="345" cy="45" r="26" fill="#FF9600"/>
        <rect x="0" y="180" width="400" height="40" fill="#E4C98A"/>
        <path d="M0 180 Q100 160 200 180 T400 180 L400 220 L0 220 Z" fill="#D9B978"/>
        <ellipse cx="130" cy="195" rx="24" ry="15" fill="#4C7A6B"/>
        <circle cx="110" cy="193" r="8" fill="#6B9C87"/>
        <ellipse cx="310" cy="170" rx="16" ry="18" fill="#B98A55" opacity="0.9"/>
        <ellipse cx="310" cy="190" rx="14" ry="8" fill="#E4C79A"/>
        <ellipse cx="303" cy="180" rx="4" ry="10" fill="#E4C79A" transform="rotate(-15 303 180)"/>
        <ellipse cx="317" cy="180" rx="4" ry="10" fill="#E4C79A" transform="rotate(15 317 180)"/>
        ${T}
      </svg>`;
    case "raceDoubt": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g11" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8A7FA3"/><stop offset="100%" stop-color="#C9BFDD"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g11)"/>
        <rect x="0" y="182" width="400" height="38" fill="#B9A97F"/>
        <path d="M0 182 Q150 168 400 182 L400 220 L0 220 Z" fill="#A99566"/>
        <ellipse cx="190" cy="196" rx="24" ry="15" fill="#4C7A6B"/>
        <circle cx="170" cy="188" r="8" fill="#6B9C87"/>
        <path d="M120 205 Q126 195 118 190" stroke="#D66B84" stroke-width="2" fill="none" opacity="0.7"/>
        ${T}
      </svg>`;
    case "raceFinish": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g12" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFDD9E"/><stop offset="100%" stop-color="#FFF6E8"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g12)"/>
        <circle cx="335" cy="50" r="24" fill="#FF9600"/>
        <rect x="0" y="178" width="400" height="42" fill="#E4C98A"/>
        <rect x="150" y="90" width="6" height="100" fill="#7A5C3E"/>
        <rect x="270" y="90" width="6" height="100" fill="#7A5C3E"/>
        <rect x="150" y="90" width="126" height="14" fill="#3B82C4"/>
        <rect x="150" y="90" width="14" height="14" fill="#fff"/>
        <rect x="178" y="90" width="14" height="14" fill="#fff"/>
        <rect x="206" y="90" width="14" height="14" fill="#fff"/>
        <rect x="234" y="90" width="14" height="14" fill="#fff"/>
        <rect x="262" y="90" width="14" height="14" fill="#fff"/>
        ${[60,100,320,360].map((x,i)=>`<ellipse cx="${x}" cy="192" rx="9" ry="6" fill="${i%2?"#D66B84":"#8177C9"}" opacity="0.7"/>`).join('')}
        ${T}
      </svg>`;
    case "antSummer": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g13" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#BFE3C6"/><stop offset="100%" stop-color="#F0F8EC"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g13)"/>
        <circle cx="340" cy="45" r="24" fill="#FFD35C"/>
        <rect x="0" y="180" width="400" height="40" fill="#8FBBA9"/>
        <ellipse cx="120" cy="205" rx="30" ry="15" fill="#7A5C3E"/>
        <circle cx="120" cy="192" r="6" fill="#7A5C3E"/>
        <ellipse cx="95" cy="185" rx="10" ry="6" fill="#6FAE7C" transform="rotate(-20 95 185)"/>
        <ellipse cx="250" cy="196" rx="12" ry="9" fill="#6FAE7C"/>
        <ellipse cx="238" cy="188" rx="4" ry="16" fill="#6FAE7C" transform="rotate(-25 238 188)"/>
        <ellipse cx="262" cy="188" rx="4" ry="16" fill="#6FAE7C" transform="rotate(25 262 188)"/>
        <g stroke="#8177C9" stroke-width="2" fill="none" opacity="0.7"><path d="M280 170 Q290 160 300 170"/><path d="M296 158 Q306 148 316 158"/></g>
        ${T}
      </svg>`;
    case "antContinue": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g14" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFD9A0"/><stop offset="100%" stop-color="#F5EFD8"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g14)"/>
        <circle cx="335" cy="50" r="22" fill="#FF9600"/>
        <rect x="0" y="180" width="400" height="40" fill="#C7B57E"/>
        <path d="M110 200 Q140 175 170 200 Z" fill="#9C7A50"/>
        ${[130,150,170].map((x,i)=>`<circle cx="${x}" cy="196" r="6" fill="#E8A33D"/>`).join('')}
        <ellipse cx="90" cy="205" rx="20" ry="11" fill="#7A5C3E"/>
        <circle cx="90" cy="196" r="5" fill="#7A5C3E"/>
        <ellipse cx="260" cy="196" rx="11" ry="8" fill="#6FAE7C"/>
        <ellipse cx="249" cy="188" rx="4" ry="14" fill="#6FAE7C" transform="rotate(-25 249 188)"/>
        ${T}
      </svg>`;
    case "antDoubt": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g15" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B9A9C9"/><stop offset="100%" stop-color="#E7DEEF"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g15)"/>
        <rect x="0" y="182" width="400" height="38" fill="#A79881"/>
        <ellipse cx="170" cy="202" rx="16" ry="9" fill="#7A5C3E"/>
        <circle cx="170" cy="194" r="5" fill="#7A5C3E"/>
        <ellipse cx="280" cy="194" rx="12" ry="9" fill="#6FAE7C"/>
        <ellipse cx="268" cy="186" rx="4" ry="14" fill="#6FAE7C" transform="rotate(-25 268 186)"/>
        <g stroke="#8177C9" stroke-width="2" fill="none" opacity="0.6"><path d="M300 170 Q310 160 320 170"/></g>
        ${T}
      </svg>`;
    case "antWinter": return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g16" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#AFC4D9"/><stop offset="100%" stop-color="#EAF1F7"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g16)"/>
        ${[30,70,150,210,260,320,370].map((x,i)=>`<circle cx="${x}" cy="${20+((i*37)%90)}" r="3" fill="#fff" opacity="0.85"/>`).join('')}
        <rect x="0" y="185" width="400" height="35" fill="#E9EEF3"/>
        <path d="M140 185 Q180 150 220 185 Z" fill="#B08A5A"/>
        <ellipse cx="180" cy="170" rx="14" ry="10" fill="#FFCF6E" opacity="0.9"/>
        ${T}
      </svg>`;
    default: return `<svg viewBox="0 0 400 220"><rect width="400" height="220" fill="#F0EBE3"/></svg>`;
  }
}/* =====================================================================
   นิทานส่องใจ — vanilla JS port (converted from the React/JSX version)
   Behavior and appearance preserved exactly; only the implementation
   technique changed (no React, no JSX, no build step).
   ===================================================================== */

/* ---------------- Storage abstraction ----------------
   Uses window.storage when available (Claude.ai artifact runtime).
   Falls back to localStorage with the identical async API shape when
   this file is opened as a plain standalone website, so the app keeps
   working either way. */
const storageBackend = (function () {
  if (typeof window !== "undefined" && window.storage && typeof window.storage.get === "function") {
    return window.storage;
  }
  const PREFIX = "nsj_";
  function k(key, shared) { return PREFIX + (shared ? "shared__" : "priv__") + key; }
  return {
    async get(key, shared) {
      const raw = localStorage.getItem(k(key, shared));
      if (raw === null) throw new Error("not found");
      return { key, value: raw, shared };
    },
    async set(key, value, shared) {
      localStorage.setItem(k(key, shared), value);
      return { key, value, shared };
    },
    async delete(key, shared) {
      localStorage.removeItem(k(key, shared));
      return { key, deleted: true, shared };
    },
    async list(prefix, shared) {
      const nsPrefix = PREFIX + (shared ? "shared__" : "priv__");
      const fullPrefix = nsPrefix + prefix;
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const lk = localStorage.key(i);
        if (lk && lk.indexOf(fullPrefix) === 0) keys.push(lk.slice(nsPrefix.length));
      }
      return { keys: keys };
    },
  };
})();

async function hashPassword(pw) {
  const enc = new TextEncoder().encode(pw);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function safeGet(key, shared) {
  try { const r = await storageBackend.get(key, shared); return r ? r.value : null; }
  catch (e) { return null; }
}

function esc(s) {
  if (s === null || s === undefined) return "";
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/* ---------------- App state (replaces React useState) ---------------- */

const state = {
  screen: "loading",
  currentUser: null,
  progress: {},
  activeStory: null,
  activeNode: null,
  authMode: "login",
  authError: "",
  username: "",
  password: "",
  displayName: "",

  myFollowing: [],
  profileView: null,
  profileTab: "overview",
  allUsers: null,
  loadingUsers: false,
  friendInput: "",
  friendError: "",
  editDraft: { displayName: "", avatarUrl: null, bannerUrl: null },
  editError: "",
  editSaving: false,
};

function setState(patch) { Object.assign(state, patch); }

/* ---------------- Boot ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  render();
  tryAutoLogin();
  attachDelegatedEvents();
});

async function tryAutoLogin() {
  const sessionUser = await safeGet("session:current", false);
  if (sessionUser) {
    const accRaw = await safeGet(`account:${sessionUser}`, true);
    if (accRaw) {
      const acc = JSON.parse(accRaw);
      const avatarUrl = await safeGet(`avatar:${sessionUser}`, true);
      state.currentUser = { username: sessionUser, displayName: acc.displayName, avatarUrl };
      await loadProgress(sessionUser);
      await loadMyFollowing(sessionUser);
      state.screen = "dashboard";
      render();
      return;
    }
  }
  state.screen = "auth";
  render();
}

async function loadProgress(uname) {
  const next = {};
  for (const storyId of Object.keys(STORIES)) {
    const raw = await safeGet(`progress:${uname}:${storyId}`, true);
    if (raw) next[storyId] = JSON.parse(raw);
  }
  state.progress = next;
}

async function loadMyFollowing(uname) {
  const raw = await safeGet(`followingOf:${uname}`, true);
  state.myFollowing = raw ? JSON.parse(raw) : [];
}

async function loadFullProfile(uname) {
  const accRaw = await safeGet(`account:${uname}`, true);
  if (!accRaw) return null;
  const acc = JSON.parse(accRaw);
  const avatarUrl = await safeGet(`avatar:${uname}`, true);
  const bannerUrl = await safeGet(`banner:${uname}`, true);
  const followingRaw = await safeGet(`followingOf:${uname}`, true);
  const followersRaw = await safeGet(`followersOf:${uname}`, true);
  const followingUsernames = followingRaw ? JSON.parse(followingRaw) : [];
  const followersUsernames = followersRaw ? JSON.parse(followersRaw) : [];
  const followingDetails = [];
  for (const u of followingUsernames) {
    const r = await safeGet(`account:${u}`, true);
    if (r) {
      const a = JSON.parse(r);
      const av = await safeGet(`avatar:${u}`, true);
      followingDetails.push({ username: u, displayName: a.displayName, avatarUrl: av });
    }
  }
  const prog = {};
  for (const sid of Object.keys(STORIES)) {
    const praw = await safeGet(`progress:${uname}:${sid}`, true);
    if (praw) prog[sid] = JSON.parse(praw);
  }
  return {
    username: uname, displayName: acc.displayName, createdAt: acc.createdAt,
    lastNameChangeAt: acc.lastNameChangeAt || acc.createdAt || 0,
    avatarUrl, bannerUrl, followingDetails,
    followersCount: followersUsernames.length, followingCount: followingUsernames.length,
    progress: prog,
  };
}

async function openProfile(uname) {
  state.profileView = null;
  state.profileTab = "overview";
  state.screen = "profile";
  render();
  const p = await loadFullProfile(uname);
  state.profileView = p;
  if (state.currentUser && uname === state.currentUser.username && p) {
    state.myFollowing = p.followingDetails.map((f) => f.username);
  }
  render();
}

function sanitizeUsername(u) { return (u || "").trim().toLowerCase(); }

async function addFriend(targetRaw) {
  state.friendError = "";
  const target = sanitizeUsername(targetRaw);
  if (!target) return;
  if (target === state.currentUser.username) { state.friendError = "ไม่สามารถเพิ่มตัวเองเป็นเพื่อนได้"; render(); return; }
  const exists = await safeGet(`account:${target}`, true);
  if (!exists) { state.friendError = "ไม่พบชื่อผู้ใช้นี้ในระบบ"; render(); return; }
  if (state.myFollowing.includes(target)) { state.friendError = "เพิ่มเป็นเพื่อนแล้ว"; render(); return; }
  const newFollowing = [...state.myFollowing, target];
  try {
    await storageBackend.set(`followingOf:${state.currentUser.username}`, JSON.stringify(newFollowing), true);
    const followersRaw = await safeGet(`followersOf:${target}`, true);
    const followersArr = followersRaw ? JSON.parse(followersRaw) : [];
    if (!followersArr.includes(state.currentUser.username)) {
      await storageBackend.set(`followersOf:${target}`, JSON.stringify([...followersArr, state.currentUser.username]), true);
    }
  } catch (e) { state.friendError = "เกิดข้อผิดพลาด กรุณาลองใหม่"; render(); return; }
  state.myFollowing = newFollowing;
  state.friendInput = "";
  if (state.profileView && state.profileView.username === state.currentUser.username) { await openProfile(state.currentUser.username); }
  else { render(); }
}

async function removeFriend(target) {
  const newFollowing = state.myFollowing.filter((u) => u !== target);
  try {
    await storageBackend.set(`followingOf:${state.currentUser.username}`, JSON.stringify(newFollowing), true);
    const followersRaw = await safeGet(`followersOf:${target}`, true);
    const followersArr = (followersRaw ? JSON.parse(followersRaw) : []).filter((u) => u !== state.currentUser.username);
    await storageBackend.set(`followersOf:${target}`, JSON.stringify(followersArr), true);
  } catch (e) {}
  state.myFollowing = newFollowing;
  if (state.profileView && state.profileView.username === state.currentUser.username) { await openProfile(state.currentUser.username); }
  else { render(); }
}

async function loadAllUsers() {
  state.loadingUsers = true;
  render();
  try {
    const res = await storageBackend.list("account:", true);
    const usernames = (res && res.keys ? res.keys : []).map((k) => k.replace("account:", ""));
    const list = [];
    for (const u of usernames) {
      if (u === state.currentUser.username) continue;
      const raw = await safeGet(`account:${u}`, true);
      if (raw) { const a = JSON.parse(raw); list.push({ username: u, displayName: a.displayName }); }
    }
    state.allUsers = list;
  } catch (e) { state.allUsers = []; }
  state.loadingUsers = false;
  render();
}

function openEditProfile() {
  state.editDraft = { displayName: state.profileView.displayName, avatarUrl: state.profileView.avatarUrl, bannerUrl: state.profileView.bannerUrl };
  state.editError = "";
  state.screen = "editProfile";
  render();
}

function handleImageFile(fileInputEl, kind) {
  const file = fileInputEl.files && fileInputEl.files[0];
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (kind === "avatar") {
        const size = 320;
        const minSide = Math.min(img.width, img.height);
        const sx = (img.width - minSide) / 2, sy = (img.height - minSide) / 2;
        canvas.width = size; canvas.height = size;
        ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);
      } else {
        const maxW = 1200;
        const scale = Math.min(1, maxW / img.width);
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
      const dataUrl = canvas.toDataURL("image/jpeg", 0.82);
      state.editDraft = { ...state.editDraft, [kind === "avatar" ? "avatarUrl" : "bannerUrl"]: dataUrl };
      render();
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function formatCooldown(ms) {
  const s = Math.ceil(ms / 1000);
  const mm = Math.floor(s / 60), ss = s % 60;
  return `${mm} นาที ${ss} วินาที`;
}

async function saveProfileEdits() {
  const nameInputEl = document.getElementById("editDisplayNameInput");
  if (nameInputEl) state.editDraft.displayName = nameInputEl.value;

  state.editError = ""; state.editSaving = true; render();
  const cooldownMs = 7 * 60 * 1000;
  const nameChanged = state.editDraft.displayName.trim() !== state.profileView.displayName;
  const now = Date.now();
  if (nameChanged) {
    if (!state.editDraft.displayName.trim()) { state.editError = "กรุณาใส่ชื่อ"; state.editSaving = false; render(); return; }
    const elapsed = now - (state.profileView.lastNameChangeAt || 0);
    if (elapsed < cooldownMs) { state.editError = `เปลี่ยนชื่อได้ทุก 7 นาที กรุณารออีก ${formatCooldown(cooldownMs - elapsed)}`; state.editSaving = false; render(); return; }
  }
  let acc;
  try {
    const accRaw = await safeGet(`account:${state.currentUser.username}`, true);
    acc = JSON.parse(accRaw);
    acc.displayName = state.editDraft.displayName.trim();
    if (nameChanged) acc.lastNameChangeAt = now;
    await storageBackend.set(`account:${state.currentUser.username}`, JSON.stringify(acc), true);
    if (state.editDraft.avatarUrl && state.editDraft.avatarUrl !== state.profileView.avatarUrl) {
      await storageBackend.set(`avatar:${state.currentUser.username}`, state.editDraft.avatarUrl, true);
    }
    if (state.editDraft.bannerUrl && state.editDraft.bannerUrl !== state.profileView.bannerUrl) {
      await storageBackend.set(`banner:${state.currentUser.username}`, state.editDraft.bannerUrl, true);
    }
  } catch (e) { state.editError = "บันทึกไม่สำเร็จ อาจเป็นเพราะไฟล์รูปภาพใหญ่เกินไป ลองรูปอื่นดูนะ"; state.editSaving = false; render(); return; }
  const newName = state.editDraft.displayName.trim();
  state.currentUser = { ...state.currentUser, displayName: newName, avatarUrl: state.editDraft.avatarUrl || state.currentUser.avatarUrl };
  state.editSaving = false;
  await openProfile(state.currentUser.username);
}

async function handleRegister() {
  state.username = (document.getElementById("authUsernameInput") || {}).value ?? state.username;
  state.password = (document.getElementById("authPasswordInput") || {}).value ?? state.password;
  state.displayName = (document.getElementById("authDisplayNameInput") || {}).value ?? state.displayName;

  state.authError = "";
  const uname = sanitizeUsername(state.username);
  if (!/^[a-z0-9_]{3,20}$/.test(uname)) { state.authError = "ชื่อผู้ใช้ต้องเป็นตัวอักษรอังกฤษพิมพ์เล็ก ตัวเลข หรือ _ ความยาว 3-20 ตัว"; render(); return; }
  if (state.password.length < 4) { state.authError = "รหัสผ่านต้องมีอย่างน้อย 4 ตัวอักษร"; render(); return; }
  if (!state.displayName.trim()) { state.authError = "กรุณาใส่ชื่อที่แสดงในแอป"; render(); return; }
  const existing = await safeGet(`account:${uname}`, true);
  if (existing) { state.authError = "มีชื่อผู้ใช้นี้อยู่แล้ว กรุณาเลือกชื่ออื่น"; render(); return; }
  const passwordHash = await hashPassword(state.password);
  const now = Date.now();
  const accData = { passwordHash, displayName: state.displayName.trim(), createdAt: now, lastNameChangeAt: now };
  try {
    await storageBackend.set(`account:${uname}`, JSON.stringify(accData), true);
    await storageBackend.set("session:current", uname, false);
  } catch (e) { state.authError = "เกิดข้อผิดพลาดในการสมัคร กรุณาลองใหม่"; render(); return; }
  state.currentUser = { username: uname, displayName: accData.displayName, avatarUrl: null };
  state.progress = {};
  state.myFollowing = [];
  state.screen = "dashboard";
  render();
}

async function handleLogin() {
  state.username = (document.getElementById("authUsernameInput") || {}).value ?? state.username;
  state.password = (document.getElementById("authPasswordInput") || {}).value ?? state.password;

  state.authError = "";
  const uname = sanitizeUsername(state.username);
  const raw = await safeGet(`account:${uname}`, true);
  if (!raw) { state.authError = "ไม่พบชื่อผู้ใช้นี้ในระบบ"; render(); return; }
  const acc = JSON.parse(raw);
  const passwordHash = await hashPassword(state.password);
  if (passwordHash !== acc.passwordHash) { state.authError = "รหัสผ่านไม่ถูกต้อง"; render(); return; }
  try { await storageBackend.set("session:current", uname, false); } catch (e) {}
  const avatarUrl = await safeGet(`avatar:${uname}`, true);
  state.currentUser = { username: uname, displayName: acc.displayName, avatarUrl };
  await loadProgress(uname);
  await loadMyFollowing(uname);
  state.screen = "dashboard";
  render();
}

async function handleLogout() {
  try { await storageBackend.delete("session:current", false); } catch (e) {}
  state.currentUser = null; state.progress = {};
  state.myFollowing = []; state.profileView = null; state.allUsers = null; state.profileTab = "overview";
  state.username = ""; state.password = ""; state.displayName = "";
  state.screen = "auth";
  render();
}

function saveProgress(storyId, updater) {
  const prevProg = state.progress[storyId] || { currentNode: STORIES[storyId].startNode, furthestLevel: 0, visitedNodes: [], endingsUnlocked: [], completed: false };
  const updated = updater(prevProg);
  state.progress = { ...state.progress, [storyId]: updated };
  if (state.currentUser) storageBackend.set(`progress:${state.currentUser.username}:${storyId}`, JSON.stringify(updated), true).catch(() => {});
}

function goToNode(storyId, nodeId) {
  const node = STORIES[storyId].nodes[nodeId];
  state.activeStory = storyId; state.activeNode = nodeId;
  saveProgress(storyId, (prevProg) => {
    const visited = Array.from(new Set([...(prevProg.visitedNodes || []), nodeId]));
    let endingsUnlocked = prevProg.endingsUnlocked || [];
    let completed = prevProg.completed || false;
    if (node.type === "ending" && !endingsUnlocked.includes(nodeId)) { endingsUnlocked = [...endingsUnlocked, nodeId]; completed = true; }
    return { ...prevProg, currentNode: nodeId, furthestLevel: Math.max(prevProg.furthestLevel || 0, node.level), visitedNodes: visited, endingsUnlocked, completed };
  });
  state.screen = node.type === "ending" ? "ending" : "reader";
  render();
}

function resumeReading(storyId) {
  const p = state.progress[storyId];
  const nodeId = p && p.currentNode ? p.currentNode : STORIES[storyId].startNode;
  const nodeObj = STORIES[storyId].nodes[nodeId];
  if (!p || nodeObj.type === "ending") { goToNode(storyId, STORIES[storyId].startNode); }
  else { state.activeStory = storyId; state.activeNode = nodeId; state.screen = "reader"; render(); }
}

function openStoryMap(storyId) { state.activeStory = storyId; state.screen = "map"; render(); }
function percentFor(storyId) { const p = state.progress[storyId]; if (!p) return 0; return Math.round(((p.furthestLevel || 0) / 3) * 100); }
function ctaLabel(storyId) { const p = state.progress[storyId]; if (!p) return "เริ่มอ่าน"; if (p.completed) return "อ่านอีกครั้ง"; return "อ่านต่อ"; }
function totalEndingsUnlocked() { return Object.values(state.progress).reduce((a, s) => a + (s.endingsUnlocked?.length || 0), 0); }
function totalCompletedStories() { return Object.keys(STORIES).filter((id) => state.progress[id]?.completed).length; }

/* ---------------- Illustration box ---------------- */

function sceneBox(sceneId, tint, badge, height) {
  const h = height || 210;
  return `
    <div class="nsj-scene-box" style="height:${h}px">
      ${sceneSVG(sceneId, tint)}
      ${badge ? `<div class="nsj-scene-badge">${esc(badge)}</div>` : ""}
    </div>
  `;
}

/* ---------------- Shared chrome ---------------- */

function profileAvatar(url, name, size) {
  const borderWidth = size < 60 ? 2 : 5;
  const fontSize = Math.round(size * 0.36);
  const initial = esc((name || "?").slice(0, 1).toUpperCase());
  return `
    <div class="nsj-profile-avatar" style="width:${size}px;height:${size}px;font-size:${fontSize}px;border-width:${borderWidth}px">
      ${url ? `<img src="${url}" alt="" />` : initial}
    </div>
  `;
}

function navItems() {
  return `
    <button class="nsj-nav-item ${state.screen === "dashboard" ? "active" : ""}" data-action="set-screen" data-arg="dashboard">🏠 หน้าหลัก</button>
    <button class="nsj-nav-item ${state.screen === "profile" ? "active" : ""}" data-action="open-own-profile">👤 โปรไฟล์</button>
  `;
}

function sidebar() {
  if (!state.currentUser) return "";
  return `
    <div class="nsj-sidebar">
      <div class="nsj-logo-wrap"><span class="nsj-logo-emoji">🏮</span><span class="nsj-logo-text">Fable Turtle</span></div>
      ${navItems()}
      <div class="nsj-sidebar-bottom">
        <div class="nsj-user-chip" style="cursor:pointer" data-action="open-own-profile">
          ${profileAvatar(state.currentUser.avatarUrl, state.currentUser.displayName, 36)}
          <div><div class="nsj-user-name">${esc(state.currentUser.displayName)}</div><div class="nsj-user-handle">@${esc(state.currentUser.username)}</div></div>
        </div>
        <button class="nsj-nav-item" data-action="logout">🚪 ออกจากระบบ</button>
      </div>
    </div>
  `;
}

function mobileHeader(showBack, backScreen) {
  const left = showBack
    ? `<button class="nsj-back" data-action="set-screen" data-arg="${backScreen}">‹ กลับ</button>`
    : `<div style="font-weight:700;color:#FF7A1A">🏮 Fable Turtle</div>`;
  const right = (state.currentUser && !showBack)
    ? `<div style="display:flex;gap:8px">
         <button class="nsj-icon-btn" data-action="open-own-profile">👤</button>
         <button class="nsj-icon-btn" data-action="logout">🚪</button>
       </div>`
    : "";
  return `<div class="nsj-mobile-header">${left}${right}</div>`;
}

function rightRail() {
  return `
    <div class="nsj-rightrail">
      <div class="nsj-stat-card"><div class="nsj-stat-num">${totalEndingsUnlocked()}</div><div class="nsj-stat-label">ตอนจบที่ค้นพบทั้งหมด</div></div>
      <div class="nsj-stat-card"><div class="nsj-stat-num">${totalCompletedStories()} / ${Object.keys(STORIES).length}</div><div class="nsj-stat-label">นิทานที่อ่านจบแล้ว</div></div>
      <div class="nsj-card" style="padding:16px">
        <div style="font-size:13px;font-weight:700;margin-bottom:4px">💡 เคล็ดลับ</div>
        <div style="font-size:12.5px;color:#8A8478;line-height:1.6">ลองย้อนกลับไปเลือกทางที่ต่างออกไป เพื่อค้นพบตอนจบและข้อคิดใหม่ๆ ในนิทานเรื่องเดิม</div>
      </div>
    </div>
  `;
}

/* ---------------- Screens ---------------- */

function renderLoading() {
  return `
    <div class="nsj-center nsj-fade">
      <div style="font-size:40px">🕯️</div>
      <div style="margin-top:10px;color:#8A8478;font-size:13px;font-weight:600">กำลังจุดตะเกียง...</div>
    </div>
  `;
}

function renderAuth() {
  const isLogin = state.authMode === "login";
  return `
    <div class="nsj-app" style="width:100%">
      <div class="nsj-main-wrap" style="width:100%">
        <div class="nsj-main-col nsj-fade" style="max-width:420px;margin-top:20px">
          <div class="nsj-center" style="padding-bottom:0;padding-top:10px">
            <div style="font-size:42px">🏮</div>
            <div class="nsj-h1" style="font-size:26px;color:#FF7A1A;margin-top:6px">Fable Turtle</div>
            <div class="nsj-sub" style="margin-top:4px">สื่อการเรียนรู้นิทานเพื่อเสริมสร้างพลังใจและจริยธรรม</div>
          </div>
          <div class="nsj-card">
            <div style="display:flex;gap:18px;margin-bottom:18px">
              <button class="nsj-btn-tab ${isLogin ? "nsj-btn-tab-active" : ""}" style="flex:1;background:none;cursor:pointer;font-family:inherit;font-weight:700" data-action="set-auth-mode" data-arg="login">เข้าสู่ระบบ</button>
              <button class="nsj-btn-tab ${!isLogin ? "nsj-btn-tab-active" : ""}" style="flex:1;background:none;cursor:pointer;font-family:inherit;font-weight:700" data-action="set-auth-mode" data-arg="register">สมัครสมาชิก</button>
            </div>
            <label class="nsj-field-label">ชื่อผู้ใช้ (ภาษาอังกฤษ/ตัวเลข)</label>
            <input id="authUsernameInput" class="nsj-input" placeholder="เช่น tawan_09" value="${esc(state.username)}" data-bind="username" data-enter-action="${isLogin ? "login" : "register"}" />
            ${!isLogin ? `
              <div style="height:12px"></div>
              <label class="nsj-field-label">ชื่อที่แสดงในแอป</label>
              <input id="authDisplayNameInput" class="nsj-input" placeholder="เช่น ตะวัน" value="${esc(state.displayName)}" data-bind="displayName" data-enter-action="register" />
            ` : ""}
            <div style="height:12px"></div>
            <label class="nsj-field-label">รหัสผ่าน</label>
            <input id="authPasswordInput" type="password" class="nsj-input" placeholder="อย่างน้อย 4 ตัวอักษร" value="${esc(state.password)}" data-bind="password" data-enter-action="${isLogin ? "login" : "register"}" />
            ${state.authError ? `<div class="nsj-error">${esc(state.authError)}</div>` : ""}
            <div style="height:16px"></div>
            <button class="nsj-btn nsj-btn-primary" data-action="${isLogin ? "login" : "register"}">${isLogin ? "เข้าสู่ระบบ" : "สร้างบัญชีใหม่"}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDashboard() {
  const cards = Object.values(STORIES).map((story) => `
    <div class="nsj-story-card" data-action="open-story-map" data-arg="${story.id}">
      ${sceneBox(story.nodes[story.startNode].scene, null, null, 120)}
      <div class="nsj-story-card-body">
        <div class="nsj-story-title">${esc(story.title)}</div>
        <div class="nsj-story-theme">คุณธรรม · ${esc(story.theme)}</div>
        <span class="nsj-origin-tag">${esc(story.origin)}</span>
        <div class="nsj-progress-track"><div class="nsj-progress-fill" style="width:${percentFor(story.id)}%;background:${story.accent}"></div></div>
        <div style="font-size:11.5px;color:#8A8478;margin-top:6px;display:flex;justify-content:space-between">
          <span>${percentFor(story.id)}% แล้ว</span>
          <span style="color:${story.accent};font-weight:700">${ctaLabel(story.id)} ›</span>
        </div>
      </div>
    </div>
  `).join("");

  return `
    <div class="nsj-app" style="width:100%">
      ${sidebar()}
      <div style="flex:1;display:flex;flex-direction:column">
        ${mobileHeader(false)}
        <div style="display:flex;flex:1">
          <div class="nsj-main-wrap">
            <div class="nsj-main-col nsj-fade">
              <div class="nsj-h1">สวัสดี, <span style="color:#FF7A1A">${esc(state.currentUser.displayName)}</span></div>
              <div class="nsj-sub" style="margin-top:-10px">เลือกนิทานที่อยากออกเดินทางวันนี้</div>
              <div class="nsj-story-grid">${cards}</div>
            </div>
          </div>
          ${rightRail()}
        </div>
      </div>
    </div>
  `;
}

function renderMap() {
  const story = STORIES[state.activeStory];
  const p = state.progress[state.activeStory];
  const furthest = (p && p.furthestLevel) || 0;
  const unlocked = (p && p.endingsUnlocked) || [];
  const endingIds = Object.entries(story.nodes).filter(([, n]) => n.type === "ending").map(([id]) => id);

  const gallery = endingIds.map((eid) => {
    const node = story.nodes[eid];
    const isUnlocked = unlocked.includes(eid);
    const color = HUE_COLORS[node.hue];
    return `
      <div class="nsj-lantern ${isUnlocked ? "" : "nsj-lantern-locked"}" title="${isUnlocked ? esc(node.title) : "ยังไม่ค้นพบ"}">
        ${sceneBox(node.scene, isUnlocked ? color : "#888888", null, 70)}
        <div class="nsj-lantern-badge">${isUnlocked ? node.icon : "❔"}</div>
      </div>
    `;
  }).join("");

  return `
    <div class="nsj-app" style="width:100%">
      ${sidebar()}
      <div style="flex:1;display:flex;flex-direction:column">
        ${mobileHeader(true, "dashboard")}
        <div style="display:flex;flex:1">
          <div class="nsj-main-wrap">
            <div class="nsj-main-col nsj-fade">
              <div class="nsj-card">
                ${sceneBox(story.nodes[story.startNode].scene, null, null, 190)}
                <div class="nsj-h1" style="text-align:center;color:${story.accent};margin-top:14px">${esc(story.title)}</div>
                <div class="nsj-sub" style="text-align:center;margin-top:6px;line-height:1.6">${esc(story.blurb)}</div>
                <div class="nsj-progress-track"><div class="nsj-progress-fill" style="width:${percentFor(state.activeStory)}%;background:${story.accent}"></div></div>
                <div style="font-size:11.5px;color:#8A8478;margin-top:4px;text-align:right">${percentFor(state.activeStory)}% ของเส้นทาง</div>

                <div class="nsj-path">
                  <div class="nsj-path-node" style="border-color:${story.accent};color:${story.accent}">🕯️</div>
                  <div class="nsj-path-label">จุดเริ่มต้น</div>
                  <div class="nsj-path-line"></div>
                  <div class="nsj-path-node" style="border-color:${furthest >= 2 ? story.accent : "#EDE6DA"};color:${furthest >= 2 ? story.accent : "#C9BFB0"}">${furthest >= 2 ? "🔀" : "🔒"}</div>
                  <div class="nsj-path-label">ทางแยกแห่งการเลือก</div>
                </div>

                <div class="nsj-choice-prompt">คลังตอนจบที่ค้นพบ (${unlocked.length}/4)</div>
                <div class="nsj-gallery">${gallery}</div>

                <div style="height:16px"></div>
                <button class="nsj-btn nsj-btn-primary" style="background:${story.accent};border-bottom-color:#00000030" data-action="resume-reading" data-arg="${state.activeStory}">${ctaLabel(state.activeStory)}</button>
              </div>
            </div>
          </div>
          ${rightRail()}
        </div>
      </div>
    </div>
  `;
}

function renderReader() {
  const story = STORIES[state.activeStory];
  const node = story.nodes[state.activeNode];
  const options = node.choice.options.map((opt, i) => `
    <button class="nsj-choice-btn" data-action="go-to-node" data-story="${state.activeStory}" data-node="${opt.next}">${esc(opt.label)}</button>
  `).join("");

  return `
    <div class="nsj-app" style="width:100%">
      ${mobileHeader(true, "map")}
      <div class="nsj-main-wrap" style="width:100%">
        <div class="nsj-main-col nsj-fade">
          <button class="nsj-back" style="display:inline-flex" data-action="set-screen" data-arg="map">‹ กลับ</button>
          <div class="nsj-card">
            ${sceneBox(node.scene, null, null, 260)}
            <div class="nsj-chapter-title">${esc(node.title)}</div>
            <div class="nsj-chapter-text">${esc(node.text)}</div>
            <div class="nsj-choice-prompt">${esc(node.choice.prompt)}</div>
            ${options}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderEnding() {
  const story = STORIES[state.activeStory];
  const node = story.nodes[state.activeNode];
  const color = HUE_COLORS[node.hue];
  return `
    <div class="nsj-app" style="width:100%">
      ${mobileHeader(true, "map")}
      <div class="nsj-main-wrap" style="width:100%">
        <div class="nsj-main-col nsj-fade">
          <button class="nsj-back" style="display:inline-flex" data-action="set-screen" data-arg="map">‹ กลับ</button>
          <div class="nsj-card">
            ${sceneBox(node.scene, color, node.icon, 260)}
            <div class="nsj-chapter-title" style="color:${color}">${esc(node.title)}</div>
            <div class="nsj-chapter-text">${esc(node.text)}</div>
            <div class="nsj-insight">ข้อคิด: ${esc(node.insight)}</div>
            <button class="nsj-btn" style="background:${color};color:#fff;border-bottom-color:#00000030;margin-bottom:10px" data-action="go-to-node" data-story="${state.activeStory}" data-node="${story.startNode}">เดินเส้นทางใหม่ ลองเลือกทางอื่น</button>
            <button class="nsj-btn nsj-btn-outline" data-action="set-screen" data-arg="dashboard">กลับหน้าหลัก</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProfile() {
  if (!state.profileView) {
    return `
      <div class="nsj-app" style="width:100%">
        ${sidebar()}
        <div class="nsj-center nsj-fade" style="flex:1">
          <div style="font-size:34px">🏮</div>
          <div style="margin-top:8px;color:#8A8478;font-size:13px;font-weight:600">กำลังโหลดโปรไฟล์...</div>
        </div>
      </div>
    `;
  }
  const pv = state.profileView;
  const isOwn = state.currentUser && pv.username === state.currentUser.username;
  const progressData = isOwn ? state.progress : pv.progress;
  const storyIds = Object.keys(STORIES);
  const isFriend = !isOwn && state.myFollowing.includes(pv.username);
  const joinedLabel = pv.createdAt ? new Date(pv.createdAt).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" }) : "";

  const actionBtn = isOwn
    ? `<button class="nsj-btn nsj-btn-outline" style="width:auto;padding:10px 18px;margin-bottom:4px" data-action="open-edit-profile">แก้ไขโปรไฟล์</button>`
    : `<button class="nsj-btn" style="width:auto;padding:10px 18px;margin-bottom:4px;background:${isFriend ? "#fff" : "#FF9600"};color:${isFriend ? "#5A544A" : "#fff"};border:${isFriend ? "2px solid #EDE6DA" : "none"};border-bottom:${isFriend ? "4px solid #EDE6DA" : "4px solid #DB7F00"}" data-action="${isFriend ? "remove-friend" : "add-friend-target"}" data-arg="${esc(pv.username)}">${isFriend ? "เลิกเป็นเพื่อน" : "+ เพิ่มเพื่อน"}</button>`;

  const tabs = isOwn ? `
    <div class="nsj-profile-tabs">
      <button class="nsj-profile-tab ${state.profileTab === "overview" ? "active" : ""}" data-action="set-profile-tab" data-arg="overview">ภาพรวม</button>
      <button class="nsj-profile-tab ${state.profileTab === "friends" ? "active" : ""}" data-action="set-profile-tab" data-arg="friends">เพื่อน</button>
    </div>
  ` : "";

  let bodyHtml = "";
  if (!isOwn || state.profileTab === "overview") {
    const statCards = storyIds.map((id) => `
      <div style="flex:1;text-align:center;background:#FAF7F2;border-radius:14px;padding:10px 6px">
        <div style="font-size:12px;font-weight:700;color:${STORIES[id].accent}">${Math.round((((progressData[id] && progressData[id].furthestLevel) || 0) / 3) * 100)}%</div>
        <div style="font-size:10px;color:#8A8478;margin-top:2px">${(progressData[id] && progressData[id].endingsUnlocked && progressData[id].endingsUnlocked.length) || 0}/4 ตอนจบ</div>
      </div>
    `).join("");
    const badgeRows = BADGES.map((b) => {
      const unlocked = b.check(progressData);
      return `
        <div class="nsj-badge-row ${unlocked ? "" : "locked"}">
          <div class="nsj-badge-icon">${unlocked ? b.icon : "🔒"}</div>
          <div><div class="nsj-badge-title">${esc(b.title)}</div><div class="nsj-badge-desc">${esc(b.desc)}</div></div>
        </div>
      `;
    }).join("");
    bodyHtml = `
      <div class="nsj-card"><div style="display:flex;gap:10px">${statCards}</div></div>
      <div class="nsj-choice-prompt" style="color:#8A8478;text-align:left">เหรียญตราแห่งการเดินทาง</div>
      <div style="display:flex;flex-direction:column;gap:10px">${badgeRows}</div>
    `;
  } else if (isOwn && state.profileTab === "friends") {
    const friendRows = pv.followingDetails.map((f) => `
      <div class="nsj-friend-row">
        <div class="nsj-friend-row-main" data-action="open-profile" data-arg="${esc(f.username)}">
          ${profileAvatar(f.avatarUrl, f.displayName, 40)}
          <div><div class="nsj-friend-name">${esc(f.displayName)}</div><div class="nsj-friend-handle">@${esc(f.username)}</div></div>
        </div>
        <button class="nsj-small-btn nsj-small-btn-remove" data-action="remove-friend" data-arg="${esc(f.username)}">ลบ</button>
      </div>
    `).join("");

    let allUsersHtml;
    if (state.loadingUsers) {
      allUsersHtml = `<div class="nsj-sub">กำลังโหลดรายชื่อผู้ใช้...</div>`;
    } else if (state.allUsers && state.allUsers.length === 0) {
      allUsersHtml = `<div class="nsj-sub">ยังไม่มีผู้ใช้คนอื่นในระบบ</div>`;
    } else if (state.allUsers) {
      allUsersHtml = `<div style="display:flex;flex-direction:column;gap:10px">${
        state.allUsers.filter((u) => !state.myFollowing.includes(u.username)).map((u) => `
          <div class="nsj-friend-row">
            <div class="nsj-friend-row-main" data-action="open-profile" data-arg="${esc(u.username)}">
              ${profileAvatar(null, u.displayName, 40)}
              <div><div class="nsj-friend-name">${esc(u.displayName)}</div><div class="nsj-friend-handle">@${esc(u.username)}</div></div>
            </div>
            <button class="nsj-small-btn nsj-small-btn-add" data-action="add-friend-target" data-arg="${esc(u.username)}">+ เพิ่ม</button>
          </div>
        `).join("")
      }</div>`;
    } else {
      allUsersHtml = "";
    }

    bodyHtml = `
      <div class="nsj-card">
        <div class="nsj-h2" style="margin-bottom:10px">เพิ่มเพื่อนด้วยชื่อผู้ใช้</div>
        <div style="display:flex;gap:10px">
          <input id="friendInputBox" class="nsj-input" placeholder="พิมพ์ username เช่น tawan_09" value="${esc(state.friendInput)}" data-bind="friendInput" data-enter-action="add-friend" />
          <button class="nsj-btn nsj-btn-primary" style="width:auto;padding:0 22px" data-action="add-friend">เพิ่ม</button>
        </div>
        ${state.friendError ? `<div class="nsj-error">${esc(state.friendError)}</div>` : ""}
      </div>

      <div class="nsj-choice-prompt" style="color:#8A8478;text-align:left">เพื่อนของฉัน (${pv.followingDetails.length})</div>
      ${pv.followingDetails.length === 0 ? `<div class="nsj-sub" style="padding:0 4px">ยังไม่มีเพื่อน ลองเพิ่มเพื่อนด้วยชื่อผู้ใช้ด้านบน หรือเลือกจากรายชื่อผู้ใช้ทั้งหมดด้านล่าง</div>` : ""}
      <div style="display:flex;flex-direction:column;gap:10px">${friendRows}</div>

      <div class="nsj-choice-prompt" style="color:#8A8478;text-align:left">ผู้ใช้ทั้งหมดในระบบ</div>
      ${allUsersHtml}
    `;
  }

  return `
    <div class="nsj-app" style="width:100%">
      ${sidebar()}
      <div style="flex:1;display:flex;flex-direction:column">
        ${mobileHeader(true, "dashboard")}
        <div class="nsj-main-wrap">
          <div class="nsj-main-col nsj-fade">
            <div class="nsj-profile-banner">
              ${pv.bannerUrl ? `<img src="${pv.bannerUrl}" alt="" />` : sceneBox("candleCeremony", null, null, 200)}
            </div>
            <div class="nsj-profile-header">
              <div class="nsj-profile-avatar-row">
                ${profileAvatar(pv.avatarUrl, pv.displayName, 96)}
                ${actionBtn}
              </div>
              <div class="nsj-profile-name">${esc(pv.displayName)}</div>
              <div class="nsj-profile-meta">@${esc(pv.username)}${joinedLabel ? ` · เข้าร่วมเมื่อ ${esc(joinedLabel)}` : ""}</div>
              <div class="nsj-profile-counts">
                <span><b>${pv.followersCount}</b> ผู้ติดตาม</span>
                <span><b>${pv.followingCount}</b> กำลังติดตาม</span>
              </div>
              ${tabs}
            </div>
            <div style="height:6px"></div>
            ${bodyHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderEditProfile() {
  const cooldownMs = 7 * 60 * 1000;
  const pv = state.profileView;
  const elapsed = Date.now() - ((pv && pv.lastNameChangeAt) || 0);
  const nameChanged = state.editDraft.displayName.trim() !== (pv && pv.displayName);
  const onCooldown = nameChanged && elapsed < cooldownMs;

  return `
    <div class="nsj-app" style="width:100%">
      ${mobileHeader(true, "profile")}
      <div class="nsj-main-wrap" style="width:100%">
        <div class="nsj-main-col nsj-fade">
          <button class="nsj-back" style="display:inline-flex" data-action="set-screen" data-arg="profile">‹ กลับ</button>
          <div class="nsj-card">
            <div class="nsj-h2" style="margin-bottom:14px">แก้ไขโปรไฟล์</div>

            <label class="nsj-field-label">รูปพื้นหลัง</label>
            <div class="nsj-banner-preview">
              ${state.editDraft.bannerUrl ? `<img src="${state.editDraft.bannerUrl}" alt="" />` : sceneBox("candleCeremony", null, null, 130)}
            </div>
            <input id="bannerFileInput" type="file" accept="image/*" style="display:none" data-filekind="banner" />
            <div style="height:8px"></div>
            <button class="nsj-upload-btn" data-action="trigger-banner-file">เปลี่ยนรูปพื้นหลัง</button>

            <div style="height:20px"></div>
            <label class="nsj-field-label">รูปโปรไฟล์</label>
            <div class="nsj-upload-row">
              ${profileAvatar(state.editDraft.avatarUrl, state.editDraft.displayName, 72)}
              <input id="avatarFileInput" type="file" accept="image/*" style="display:none" data-filekind="avatar" />
              <button class="nsj-upload-btn" data-action="trigger-avatar-file">เปลี่ยนรูปโปรไฟล์</button>
            </div>

            <div style="height:20px"></div>
            <label class="nsj-field-label">ชื่อที่แสดงในแอป</label>
            <input id="editDisplayNameInput" class="nsj-input" value="${esc(state.editDraft.displayName)}" data-bind="editDraft.displayName" />
            <div style="font-size:11.5px;color:#A69C8E;margin-top:6px">เปลี่ยนชื่อได้ 1 ครั้งทุก 7 นาที</div>
            ${onCooldown ? `<div class="nsj-error">เปลี่ยนชื่อได้ทุก 7 นาที กรุณารออีก ${formatCooldown(cooldownMs - elapsed)}</div>` : ""}
            ${state.editError ? `<div class="nsj-error">${esc(state.editError)}</div>` : ""}

            <div style="height:18px"></div>
            <button class="nsj-btn nsj-btn-primary" data-action="save-profile-edits" ${state.editSaving ? "disabled" : ""}>${state.editSaving ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนแปลง"}</button>
            <div style="height:10px"></div>
            <button class="nsj-btn nsj-btn-outline" data-action="set-screen" data-arg="profile">ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ---------------- Main render dispatcher ---------------- */

function render() {
  const root = document.getElementById("root");
  let html = "";
  switch (state.screen) {
    case "loading": html = renderLoading(); break;
    case "auth": html = renderAuth(); break;
    case "dashboard": html = state.currentUser ? renderDashboard() : renderLoading(); break;
    case "map": html = state.activeStory ? renderMap() : renderLoading(); break;
    case "reader": html = (state.activeStory && state.activeNode) ? renderReader() : renderLoading(); break;
    case "ending": html = (state.activeStory && state.activeNode) ? renderEnding() : renderLoading(); break;
    case "profile": html = state.currentUser ? renderProfile() : renderLoading(); break;
    case "editProfile": html = (state.currentUser && state.profileView) ? renderEditProfile() : renderLoading(); break;
    default: html = renderLoading();
  }
  root.innerHTML = `<div class="nsj-root">${html}</div>`;
  runPostRenderEffects();
}

// Mirrors the original app's useEffect(() => {...}, [screen, profileTab, profileView]):
// auto-loads the "all users" list the first time the friends tab is shown.
function runPostRenderEffects() {
  if (state.screen === "profile" && state.profileTab === "friends" && state.profileView && state.currentUser &&
      state.profileView.username === state.currentUser.username && state.allUsers === null && !state.loadingUsers) {
    loadAllUsers();
  }
}

/* ---------------- Event delegation (replaces React's onClick/onChange) ---------------- */

function setBindPath(path, value) {
  const parts = path.split(".");
  if (parts.length === 1) { state[parts[0]] = value; return; }
  let obj = state;
  for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
  obj[parts[parts.length - 1]] = value;
}

function attachDelegatedEvents() {
  const root = document.getElementById("root");

  root.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (!el || el.disabled) return;
    const action = el.dataset.action;
    const arg = el.dataset.arg;

    switch (action) {
      case "set-screen": state.screen = arg; render(); break;
      case "set-auth-mode": state.authMode = arg; state.authError = ""; render(); break;
      case "login": handleLogin(); break;
      case "register": handleRegister(); break;
      case "logout": handleLogout(); break;
      case "open-own-profile": if (state.currentUser) openProfile(state.currentUser.username); break;
      case "open-profile": openProfile(arg); break;
      case "open-story-map": openStoryMap(arg); break;
      case "resume-reading": resumeReading(arg); break;
      case "go-to-node": goToNode(el.dataset.story, el.dataset.node); break;
      case "set-profile-tab": state.profileTab = arg; render(); break;
      case "open-edit-profile": openEditProfile(); break;
      case "save-profile-edits": saveProfileEdits(); break;
      case "add-friend": {
        const box = document.getElementById("friendInputBox");
        addFriend(box ? box.value : state.friendInput);
        break;
      }
      case "add-friend-target": addFriend(arg); break;
      case "remove-friend": removeFriend(arg); break;
      case "trigger-avatar-file": { const f = document.getElementById("avatarFileInput"); if (f) f.click(); break; }
      case "trigger-banner-file": { const f = document.getElementById("bannerFileInput"); if (f) f.click(); break; }
      default: break;
    }
  });

  root.addEventListener("input", (e) => {
    const el = e.target;
    if (el && el.dataset && el.dataset.bind) {
      setBindPath(el.dataset.bind, el.value);
    }
  });

  root.addEventListener("change", (e) => {
    const el = e.target;
    if (el && el.dataset && el.dataset.filekind) {
      handleImageFile(el, el.dataset.filekind);
    }
  });

  root.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const el = e.target.closest("[data-enter-action]");
    if (!el) return;
    const action = el.dataset.enterAction;
    if (action === "login") handleLogin();
    else if (action === "register") handleRegister();
    else if (action === "add-friend") addFriend(el.value);
  });
}
