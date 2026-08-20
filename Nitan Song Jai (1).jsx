import React, { useState, useEffect } from "react";

/* =====================================================================
   นิทานส่องใจ — Interactive Moral Tale Learning App (Duolingo-style)
   Desktop-optimized, illustration-forward, orange brand
   ===================================================================== */

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

async function hashPassword(pw) {
  const enc = new TextEncoder().encode(pw);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function safeGet(key, shared) {
  try { const r = await window.storage.get(key, shared); return r ? r.value : null; }
  catch (e) { return null; }
}

/* ---------------- Illustration system ---------------- */

function Scene({ id, tint }) {
  const T = tint ? <rect width="400" height="220" fill={tint} fillOpacity="0.24" /> : null;
  switch (id) {
    case "candleStorm": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3B3450"/><stop offset="100%" stopColor="#5A4E70"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g1)"/>
        <g stroke="#B9AEDD" strokeWidth="2" strokeLinecap="round" opacity="0.5">
          <line x1="60" y1="10" x2="48" y2="42"/><line x1="120" y1="0" x2="106" y2="36"/><line x1="200" y1="14" x2="188" y2="48"/>
          <line x1="300" y1="8" x2="288" y2="40"/><line x1="350" y1="24" x2="338" y2="56"/>
        </g>
        <rect x="0" y="175" width="400" height="45" fill="#4A3F5C"/>
        <path d="M70 175 L130 115 L190 175 Z" fill="#2C2242"/>
        <rect x="90" y="150" width="80" height="25" fill="#2C2242"/>
        <rect x="235" y="152" width="10" height="30" rx="2" fill="#7A5C3E"/>
        <rect x="227" y="142" width="26" height="12" rx="3" fill="#9C7A50"/>
        <rect x="236" y="118" width="8" height="26" rx="3" fill="#F3E9D2"/>
        <path d="M240 116 C245 106 235 98 240 88" stroke="#B9AEDD" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
        <circle cx="150" cy="158" r="13" fill="#FF9600"/>
        <path d="M132 188 Q150 165 168 188 L168 198 L132 198 Z" fill="#FF9600"/>
        {T}
      </svg>);
    case "candleDawn": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFC988"/><stop offset="100%" stopColor="#FFF3E0"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g2)"/>
        <circle cx="330" cy="55" r="24" fill="#FFEFD1"/>
        <rect x="0" y="182" width="400" height="38" fill="#E4C98A"/>
        <path d="M20 182 Q120 165 220 182 T400 182 L400 220 L0 220 Z" fill="#D9B978"/>
        <path d="M40 182 L60 155 L80 182 Z" fill="#B98A55"/>
        <path d="M100 182 L118 160 L136 182 Z" fill="#B98A55"/>
        <g stroke="#C97B5D" strokeWidth="2" strokeLinecap="round"><path d="M270 60 Q280 50 290 60" fill="none"/><path d="M300 45 Q310 35 320 45" fill="none"/></g>
        <circle cx="230" cy="176" r="10" fill="#FF9600"/>
        <path d="M216 200 Q230 182 244 200 L244 208 L216 208 Z" fill="#FF9600"/>
        <circle cx="150" cy="196" r="5" fill="#F4C878" stroke="#C97B5D" strokeWidth="1.5"/>
        {T}
      </svg>);
    case "candleUneasy": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6B6084"/><stop offset="100%" stopColor="#8A7FA3"/></linearGradient></defs>
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
        <path d="M138 130 Q145 120 138 112 Q152 118 148 130" fill="none" stroke="#D9CDEF" strokeWidth="2" opacity="0.7"/>
        {T}
      </svg>);
    case "candleCeremony": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4A3B63"/><stop offset="55%" stopColor="#D77A55"/><stop offset="100%" stopColor="#FFD9A0"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g4)"/>
        <rect x="0" y="150" width="400" height="70" fill="#2C2242" opacity="0.55"/>
        {[60,120,180,240,300,340].map((x,i)=>(
          <g key={i}>
            <ellipse cx={x} cy={150 - (i%2)*10} rx="14" ry="10" fill="#FFCF6E" opacity="0.95"/>
            <ellipse cx={x} cy={168 - (i%2)*10} rx="10" ry="14" fill="#FFCF6E" opacity="0.25"/>
          </g>
        ))}
        <circle cx="200" cy="90" r="16" fill="#FFF3D6" opacity="0.9"/>
        {[100,160,240,300].map((x,i)=>(<path key={i} d={`M${x} 210 Q${x+10} 195 ${x+20} 210 L${x+20} 218 L${x} 218 Z`} fill="#2C2242"/>))}
        {T}
      </svg>);

    case "treeDrought": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFD9A0"/><stop offset="100%" stopColor="#FFF3E0"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g5)"/>
        <circle cx="335" cy="50" r="26" fill="#FF9600"/>
        <rect x="0" y="175" width="400" height="45" fill="#D9C08C"/>
        <g stroke="#B99A5F" strokeWidth="2"><path d="M40 190 L55 200"/><path d="M110 185 L128 198"/><path d="M250 195 L268 205"/></g>
        <rect x="160" y="120" width="16" height="70" fill="#8A6A45"/>
        <ellipse cx="168" cy="105" rx="55" ry="38" fill="#9CAE6E"/>
        <ellipse cx="140" cy="90" rx="30" ry="22" fill="#8A9D5E"/>
        <circle cx="205" cy="130" r="9" fill="#4C7A6B"/>
        <path d="M212 130 L226 124 L216 134 Z" fill="#3A6354"/>
        {T}
      </svg>);
    case "treeShare": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g6" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#BFE3C6"/><stop offset="100%" stopColor="#F0F8EC"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g6)"/>
        <rect x="0" y="178" width="400" height="42" fill="#8FBBA9"/>
        <rect x="150" y="115" width="18" height="70" fill="#7A5C3E"/>
        <ellipse cx="159" cy="98" rx="62" ry="42" fill="#5F9C6E"/>
        <ellipse cx="122" cy="82" rx="34" ry="24" fill="#71B07E"/>
        <circle cx="220" cy="150" r="9" fill="#4C7A6B"/>
        <path d="M227 150 L241 144 L231 154 Z" fill="#3A6354"/>
        <ellipse cx="255" cy="168" rx="12" ry="9" fill="#9C7A50"/>
        <path d="M264 162 Q276 152 270 172" fill="none" stroke="#9C7A50" strokeWidth="3" strokeLinecap="round"/>
        <ellipse cx="80" cy="170" rx="9" ry="7" fill="#D66B84"/>
        {[190,210,230].map((x,i)=>(<circle key={i} cx={x} cy="188" r="4" fill="#E8A33D"/>))}
        {T}
      </svg>);
    case "treeQuiet": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g7" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3B3450"/><stop offset="100%" stopColor="#6B6084"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g7)"/>
        <circle cx="340" cy="50" r="18" fill="#F3E9D2" opacity="0.9"/>
        <rect x="0" y="178" width="400" height="42" fill="#4A3F5C"/>
        <rect x="150" y="115" width="16" height="70" fill="#5A4E70"/>
        <ellipse cx="158" cy="100" rx="46" ry="30" fill="#524669"/>
        <circle cx="185" cy="140" r="8" fill="#8577A0"/>
        <path d="M192 140 L204 135 L196 144 Z" fill="#6B6084"/>
        {T}
      </svg>);
    case "treeResolution": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g8" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFCB8C"/><stop offset="100%" stopColor="#FFF3E0"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g8)"/>
        <rect x="0" y="178" width="400" height="42" fill="#A8C79B"/>
        <rect x="150" y="112" width="18" height="72" fill="#7A5C3E"/>
        <ellipse cx="159" cy="95" rx="64" ry="44" fill="#6FAE7C"/>
        <ellipse cx="120" cy="80" rx="34" ry="24" fill="#7EBB89"/>
        <circle cx="100" cy="175" r="8" fill="#4C7A6B"/>
        <circle cx="130" cy="180" r="7" fill="#D66B84"/>
        <circle cx="200" cy="178" r="8" fill="#9C7A50"/>
        <circle cx="230" cy="182" r="7" fill="#4C7A6B"/>
        {T}
      </svg>);

    case "raceStart": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g9" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#BEE3F8"/><stop offset="100%" stopColor="#EFF8FF"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g9)"/>
        <circle cx="340" cy="48" r="24" fill="#FFD35C"/>
        <rect x="0" y="178" width="400" height="42" fill="#E4C98A"/>
        <line x1="0" y1="199" x2="400" y2="199" stroke="#fff" strokeWidth="3" strokeDasharray="14 12" opacity="0.8"/>
        <rect x="30" y="130" width="4" height="60" fill="#7A5C3E"/>
        <path d="M34 130 L64 138 L34 146 Z" fill="#3B82C4"/>
        <ellipse cx="150" cy="196" rx="24" ry="15" fill="#4C7A6B"/>
        <circle cx="130" cy="194" r="8" fill="#6B9C87"/>
        <ellipse cx="230" cy="182" rx="16" ry="9" fill="#E4C79A"/>
        <ellipse cx="221" cy="170" rx="5" ry="13" fill="#E4C79A" transform="rotate(-15 221 170)"/>
        <ellipse cx="238" cy="170" rx="5" ry="13" fill="#E4C79A" transform="rotate(15 238 170)"/>
        {T}
      </svg>);
    case "raceSteady": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g10" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFE3B8"/><stop offset="100%" stopColor="#FFF6E8"/></linearGradient></defs>
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
        {T}
      </svg>);
    case "raceDoubt": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g11" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8A7FA3"/><stop offset="100%" stopColor="#C9BFDD"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g11)"/>
        <rect x="0" y="182" width="400" height="38" fill="#B9A97F"/>
        <path d="M0 182 Q150 168 400 182 L400 220 L0 220 Z" fill="#A99566"/>
        <ellipse cx="190" cy="196" rx="24" ry="15" fill="#4C7A6B"/>
        <circle cx="170" cy="188" r="8" fill="#6B9C87"/>
        <path d="M120 205 Q126 195 118 190" stroke="#D66B84" strokeWidth="2" fill="none" opacity="0.7"/>
        {T}
      </svg>);
    case "raceFinish": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g12" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFDD9E"/><stop offset="100%" stopColor="#FFF6E8"/></linearGradient></defs>
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
        {[60,100,320,360].map((x,i)=>(<ellipse key={i} cx={x} cy="192" rx="9" ry="6" fill={i%2?"#D66B84":"#8177C9"} opacity="0.7"/>))}
        {T}
      </svg>);

    case "antSummer": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g13" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#BFE3C6"/><stop offset="100%" stopColor="#F0F8EC"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g13)"/>
        <circle cx="340" cy="45" r="24" fill="#FFD35C"/>
        <rect x="0" y="180" width="400" height="40" fill="#8FBBA9"/>
        <ellipse cx="120" cy="205" rx="30" ry="15" fill="#7A5C3E"/>
        <circle cx="120" cy="192" r="6" fill="#7A5C3E"/>
        <ellipse cx="95" cy="185" rx="10" ry="6" fill="#6FAE7C" transform="rotate(-20 95 185)"/>
        <ellipse cx="250" cy="196" rx="12" ry="9" fill="#6FAE7C"/>
        <ellipse cx="238" cy="188" rx="4" ry="16" fill="#6FAE7C" transform="rotate(-25 238 188)"/>
        <ellipse cx="262" cy="188" rx="4" ry="16" fill="#6FAE7C" transform="rotate(25 262 188)"/>
        <g stroke="#8177C9" strokeWidth="2" fill="none" opacity="0.7"><path d="M280 170 Q290 160 300 170"/><path d="M296 158 Q306 148 316 158"/></g>
        {T}
      </svg>);
    case "antContinue": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g14" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFD9A0"/><stop offset="100%" stopColor="#F5EFD8"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g14)"/>
        <circle cx="335" cy="50" r="22" fill="#FF9600"/>
        <rect x="0" y="180" width="400" height="40" fill="#C7B57E"/>
        <path d="M110 200 Q140 175 170 200 Z" fill="#9C7A50"/>
        {[130,150,170].map((x,i)=>(<circle key={i} cx={x} cy="196" r="6" fill="#E8A33D"/>))}
        <ellipse cx="90" cy="205" rx="20" ry="11" fill="#7A5C3E"/>
        <circle cx="90" cy="196" r="5" fill="#7A5C3E"/>
        <ellipse cx="260" cy="196" rx="11" ry="8" fill="#6FAE7C"/>
        <ellipse cx="249" cy="188" rx="4" ry="14" fill="#6FAE7C" transform="rotate(-25 249 188)"/>
        {T}
      </svg>);
    case "antDoubt": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g15" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#B9A9C9"/><stop offset="100%" stopColor="#E7DEEF"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g15)"/>
        <rect x="0" y="182" width="400" height="38" fill="#A79881"/>
        <ellipse cx="170" cy="202" rx="16" ry="9" fill="#7A5C3E"/>
        <circle cx="170" cy="194" r="5" fill="#7A5C3E"/>
        <ellipse cx="280" cy="194" rx="12" ry="9" fill="#6FAE7C"/>
        <ellipse cx="268" cy="186" rx="4" ry="14" fill="#6FAE7C" transform="rotate(-25 268 186)"/>
        <g stroke="#8177C9" strokeWidth="2" fill="none" opacity="0.6"><path d="M300 170 Q310 160 320 170"/></g>
        {T}
      </svg>);
    case "antWinter": return (
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g16" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#AFC4D9"/><stop offset="100%" stopColor="#EAF1F7"/></linearGradient></defs>
        <rect width="400" height="220" fill="url(#g16)"/>
        {[30,70,150,210,260,320,370].map((x,i)=>(<circle key={i} cx={x} cy={20+((i*37)%90)} r="3" fill="#fff" opacity="0.85"/>))}
        <rect x="0" y="185" width="400" height="35" fill="#E9EEF3"/>
        <path d="M140 185 Q180 150 220 185 Z" fill="#B08A5A"/>
        <ellipse cx="180" cy="170" rx="14" ry="10" fill="#FFCF6E" opacity="0.9"/>
        {T}
      </svg>);

    default: return <svg viewBox="0 0 400 220"><rect width="400" height="220" fill="#F0EBE3"/></svg>;
  }
}

function SceneBox({ sceneId, tint, badge, height }) {
  return (
    <div className="nsj-scene-box" style={{ height: height || 210 }}>
      <Scene id={sceneId} tint={tint} />
      {badge && <div className="nsj-scene-badge">{badge}</div>}
    </div>
  );
}

/* ---------------- Styles ---------------- */

const STYLE = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap');

* { box-sizing: border-box; }
.nsj-root { min-height: 100vh; background: #FAF7F2; font-family: 'IBM Plex Sans Thai', sans-serif; color:#3C3C3C; }
.nsj-app { display:flex; min-height:100vh; }
.nsj-fade { animation: nsjFade 0.35s ease both; }
@keyframes nsjFade { from { opacity:0; transform: translateY(6px);} to { opacity:1; transform:translateY(0);} }
@media (prefers-reduced-motion: reduce) { .nsj-fade, .nsj-lantern, .nsj-btn { animation:none !important; transition:none !important; } }

/* Sidebar */
.nsj-sidebar { width: 250px; flex-shrink:0; background:#fff; border-right:2px solid #F0EBE3; padding:22px 14px; display:flex; flex-direction:column; gap:4px; position:sticky; top:0; height:100vh; }
.nsj-logo-wrap { display:flex; align-items:center; gap:10px; padding: 6px 10px 22px; }
.nsj-logo-emoji { font-size:26px; }
.nsj-logo-text { font-weight:700; font-size:18px; color:#FF7A1A; }
.nsj-nav-item { display:flex; align-items:center; gap:12px; padding:13px 14px; border-radius:14px; cursor:pointer; font-weight:600; font-size:14.5px; color:#8A8478; border:none; background:none; text-align:left; width:100%; }
.nsj-nav-item:hover { background:#FFF6EC; }
.nsj-nav-item.active { background:#FFEDD9; color:#FF7A1A; }
.nsj-sidebar-bottom { margin-top:auto; border-top:2px solid #F0EBE3; padding-top:14px; }
.nsj-user-chip { display:flex; align-items:center; gap:10px; padding:8px 10px; }
.nsj-avatar { width:36px; height:36px; border-radius:50%; background:#FFEDD9; color:#FF7A1A; display:flex; align-items:center; justify-content:center; font-weight:700; flex-shrink:0; }
.nsj-user-name { font-weight:600; font-size:13.5px; }
.nsj-user-handle { font-size:11px; color:#A69C8E; }

/* Mobile header (fallback) */
.nsj-mobile-header { display:none; align-items:center; justify-content:space-between; padding:14px 18px; background:#fff; border-bottom:2px solid #F0EBE3; position:sticky; top:0; z-index:5; }
@media (max-width: 900px) { .nsj-sidebar { display:none; } .nsj-mobile-header { display:flex; } }

/* Main + right rail */
.nsj-main-wrap { flex:1; display:flex; justify-content:center; padding: 30px 24px 60px; }
.nsj-main-col { width:100%; max-width:680px; display:flex; flex-direction:column; gap:18px; }
.nsj-rightrail { width:270px; flex-shrink:0; padding:30px 20px; display:flex; flex-direction:column; gap:14px; }
@media (max-width: 1220px) { .nsj-rightrail { display:none; } }
.nsj-center { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:40px 24px; text-align:center; }

.nsj-h1 { font-weight:700; font-size:24px; color:#3C3C3C; }
.nsj-h2 { font-weight:700; font-size:17px; color:#3C3C3C; }
.nsj-sub { font-size:13px; color:#8A8478; }

.nsj-card { background:#fff; border:2px solid #F0EBE3; border-radius:20px; padding:20px; }
.nsj-stat-card { background:#fff; border:2px solid #F0EBE3; border-radius:16px; padding:14px 16px; }
.nsj-stat-num { font-size:22px; font-weight:700; color:#FF7A1A; }
.nsj-stat-label { font-size:12px; color:#8A8478; margin-top:2px; }

.nsj-field-label { font-size:12.5px; color:#8A8478; margin-bottom:6px; display:block; font-weight:600; }
.nsj-input { width:100%; background:#FAF7F2; border:2px solid #EDE6DA; color:#3C3C3C; border-radius:12px; padding:12px 14px; font-family:'IBM Plex Sans Thai',sans-serif; font-size:15px; outline:none; }
.nsj-input:focus { border-color:#FF9600; }

.nsj-btn { font-family:'IBM Plex Sans Thai',sans-serif; font-weight:700; font-size:14.5px; border:none; border-radius:16px; padding:14px 20px; cursor:pointer; width:100%; border-bottom:4px solid; transition: transform .08s ease; }
.nsj-btn:active { transform: translateY(2px); }
.nsj-btn-primary { background:#FF9600; border-bottom-color:#DB7F00; color:#fff; }
.nsj-btn-primary:hover { background:#FFA733; }
.nsj-btn-outline { background:#fff; border:2px solid #EDE6DA; border-bottom:4px solid #EDE6DA; color:#5A544A; }
.nsj-btn-outline:hover { background:#FAF7F2; }
.nsj-btn-tab { background:transparent; border-bottom:2px solid #EDE6DA; color:#A69C8E; border-radius:0; padding:10px 0; }
.nsj-btn-tab-active { color:#FF7A1A; border-bottom:2px solid #FF7A1A; }

.nsj-error { color:#D64545; font-size:13px; margin-top:4px; }

.nsj-scene-box { position:relative; border-radius:18px; overflow:hidden; }
.nsj-scene-box svg { width:100%; height:100%; display:block; }
.nsj-scene-badge { position:absolute; top:10px; right:10px; width:36px; height:36px; border-radius:50%; background:#fff; display:flex; align-items:center; justify-content:center; font-size:18px; box-shadow:0 4px 10px rgba(0,0,0,0.15); }

.nsj-story-grid { display:grid; grid-template-columns: 1fr 1fr; gap:16px; }
@media (max-width: 620px) { .nsj-story-grid { grid-template-columns: 1fr; } }
.nsj-story-card { background:#fff; border:2px solid #F0EBE3; border-radius:20px; overflow:hidden; cursor:pointer; transition: transform .12s ease, border-color .12s ease; }
.nsj-story-card:hover { transform: translateY(-3px); border-color:#FFCB8C; }
.nsj-story-card-body { padding:14px 16px 16px; }
.nsj-story-title { font-weight:700; font-size:16.5px; color:#3C3C3C; }
.nsj-story-theme { font-size:11px; color:#FF7A1A; font-weight:600; margin-top:2px; }
.nsj-origin-tag { display:inline-block; font-size:10.5px; color:#8A8478; background:#FAF7F2; border-radius:8px; padding:2px 8px; margin-top:6px; }

.nsj-progress-track { width:100%; height:8px; background:#F0EBE3; border-radius:99px; overflow:hidden; margin-top:10px; }
.nsj-progress-fill { height:100%; border-radius:99px; transition: width .5s ease; }

.nsj-path { display:flex; flex-direction:column; align-items:center; padding:14px 0 4px; }
.nsj-path-node { width:54px; height:54px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:22px; border:3px solid; position:relative; z-index:1; background:#fff; }
.nsj-path-line { width:3px; height:24px; background: repeating-linear-gradient(to bottom, #EDE6DA 0 5px, transparent 5px 10px); }
.nsj-path-label { font-size:11.5px; color:#8A8478; font-weight:600; margin-top:6px; }

.nsj-choice-prompt { font-weight:700; font-size:14.5px; color:#5A544A; margin:14px 0 10px; text-align:center; }
.nsj-gallery { display:grid; grid-template-columns: repeat(4, 1fr); gap:10px; margin-top:10px; }
.nsj-lantern { border-radius:14px; overflow:hidden; position:relative; aspect-ratio: 1.4; border:2px solid #F0EBE3; }
.nsj-lantern-locked { filter: grayscale(1); opacity:0.35; }
.nsj-lantern-badge { position:absolute; bottom:6px; right:6px; width:26px; height:26px; border-radius:50%; background:#fff; display:flex; align-items:center; justify-content:center; font-size:13px; box-shadow:0 2px 6px rgba(0,0,0,0.15); }

.nsj-chapter-title { font-weight:700; font-size:19px; color:#3C3C3C; text-align:center; margin: 14px 0 8px; }
.nsj-chapter-text { font-size:16px; line-height:1.75; color:#4B4B4B; text-align:center; padding:0 6px; }
.nsj-choice-btn { display:block; width:100%; text-align:left; background:#fff; border:2px solid #EDE6DA; border-bottom:4px solid #EDE6DA; border-radius:16px; padding:15px 16px; font-family:'IBM Plex Sans Thai',sans-serif; font-weight:600; font-size:15px; color:#3C3C3C; cursor:pointer; margin-bottom:10px; transition: border-color .12s ease, background .12s ease, transform .08s ease; }
.nsj-choice-btn:hover { border-color:#FF9600; background:#FFF6EC; }
.nsj-choice-btn:active { transform: translateY(2px); border-bottom-width:2px; }

.nsj-insight { font-size:14.5px; color:#5A544A; background:#F6F1FF; border-left:4px solid #8177C9; padding:13px 15px; border-radius:10px; margin:16px 0; text-align:left; }

.nsj-badge-row { display:flex; gap:14px; align-items:center; background:#fff; border:2px solid #F0EBE3; border-radius:16px; padding:14px 16px; }
.nsj-badge-row.locked { opacity:0.4; }
.nsj-badge-icon { font-size:26px; width:44px; height:44px; border-radius:50%; background:#FFF6EC; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.nsj-badge-title { font-weight:700; font-size:14px; }
.nsj-badge-desc { font-size:12.5px; color:#8A8478; margin-top:2px; }

.nsj-back { font-weight:600; font-size:13.5px; color:#8A8478; cursor:pointer; display:inline-flex; align-items:center; gap:4px; background:none; border:none; padding:0; }
.nsj-back:hover { color:#FF7A1A; }
.nsj-icon-btn { background:#FFF6EC; border:none; color:#FF7A1A; width:38px; height:38px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:17px; cursor:pointer; }

/* Profile page */
.nsj-profile-banner { position:relative; z-index:0; height:200px; border-radius:20px 20px 0 0; overflow:hidden; background:#FFEDD9; }
.nsj-profile-banner img { width:100%; height:100%; object-fit:cover; display:block; }
.nsj-profile-banner .nsj-scene-box { height:100%; border-radius:0; }
.nsj-profile-header { position:relative; z-index:1; background:#fff; border:2px solid #F0EBE3; border-top:none; border-radius:0 0 20px 20px; padding:0 22px 18px; }
.nsj-profile-avatar-row { display:flex; align-items:flex-end; justify-content:space-between; margin-top:-48px; }
.nsj-profile-avatar { border-radius:50%; border:5px solid #fff; background:#FFEDD9; color:#FF7A1A; display:flex; align-items:center; justify-content:center; font-weight:700; overflow:hidden; flex-shrink:0; }
.nsj-profile-avatar img { width:100%; height:100%; object-fit:cover; }
.nsj-profile-name { font-size:21px; font-weight:700; margin-top:10px; }
.nsj-profile-meta { font-size:12.5px; color:#8A8478; margin-top:2px; }
.nsj-profile-counts { display:flex; gap:18px; margin-top:10px; font-size:13.5px; color:#8A8478; }
.nsj-profile-counts b { color:#3C3C3C; }
.nsj-profile-tabs { display:flex; gap:22px; border-bottom:2px solid #F0EBE3; margin-top:16px; }
.nsj-profile-tab { padding:10px 2px 12px; font-weight:700; font-size:13.5px; color:#A69C8E; background:none; border:none; cursor:pointer; border-bottom:2px solid transparent; margin-bottom:-2px; font-family:'IBM Plex Sans Thai',sans-serif; }
.nsj-profile-tab.active { color:#FF7A1A; border-bottom-color:#FF7A1A; }

.nsj-upload-row { display:flex; align-items:center; gap:14px; }
.nsj-upload-btn { background:#FFF6EC; color:#FF7A1A; border:none; border-radius:12px; padding:9px 14px; font-family:'IBM Plex Sans Thai',sans-serif; font-weight:600; font-size:12.5px; cursor:pointer; }
.nsj-upload-btn:hover { background:#FFEDD9; }
.nsj-banner-preview { width:100%; height:130px; border-radius:16px; overflow:hidden; background:#FFEDD9; position:relative; }
.nsj-banner-preview img { width:100%; height:100%; object-fit:cover; display:block; }
.nsj-banner-preview .nsj-scene-box { height:100%; border-radius:0; }

.nsj-friend-row { display:flex; align-items:center; gap:12px; padding:11px 12px; border:2px solid #F0EBE3; border-radius:14px; }
.nsj-friend-row-main { display:flex; align-items:center; gap:12px; flex:1; min-width:0; cursor:pointer; }
.nsj-friend-name { font-weight:700; font-size:14px; }
.nsj-friend-handle { font-size:11.5px; color:#8A8478; }
.nsj-small-btn { border:none; border-radius:10px; padding:8px 12px; font-family:'IBM Plex Sans Thai',sans-serif; font-weight:700; font-size:12px; cursor:pointer; white-space:nowrap; }
.nsj-small-btn-add { background:#FF9600; color:#fff; }
.nsj-small-btn-add:hover { background:#FFA733; }
.nsj-small-btn-remove { background:#FAF7F2; color:#8A8478; border:2px solid #EDE6DA; }
.nsj-small-btn-remove:hover { background:#F0EBE3; }
`;

export default function App() {
  const [screen, setScreen] = useState("loading");
  const [currentUser, setCurrentUser] = useState(null);
  const [progress, setProgress] = useState({});
  const [activeStory, setActiveStory] = useState(null);
  const [activeNode, setActiveNode] = useState(null);
  const [authMode, setAuthMode] = useState("login");
  const [authError, setAuthError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [myFollowing, setMyFollowing] = useState([]);
  const [profileView, setProfileView] = useState(null);
  const [profileTab, setProfileTab] = useState("overview");
  const [allUsers, setAllUsers] = useState(null);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [friendInput, setFriendInput] = useState("");
  const [friendError, setFriendError] = useState("");
  const [editDraft, setEditDraft] = useState({ displayName: "", avatarUrl: null, bannerUrl: null });
  const [editError, setEditError] = useState("");
  const [editSaving, setEditSaving] = useState(false);
  const avatarFileRef = React.useRef(null);
  const bannerFileRef = React.useRef(null);

  useEffect(() => { tryAutoLogin(); /* eslint-disable-next-line */ }, []);

  useEffect(() => {
    if (screen === "profile" && profileTab === "friends" && profileView && currentUser && profileView.username === currentUser.username && allUsers === null) {
      loadAllUsers();
    }
    /* eslint-disable-next-line */
  }, [screen, profileTab, profileView]);

  async function tryAutoLogin() {
    const sessionUser = await safeGet("session:current", false);
    if (sessionUser) {
      const accRaw = await safeGet(`account:${sessionUser}`, true);
      if (accRaw) {
        const acc = JSON.parse(accRaw);
        const avatarUrl = await safeGet(`avatar:${sessionUser}`, true);
        setCurrentUser({ username: sessionUser, displayName: acc.displayName, avatarUrl });
        await loadProgress(sessionUser);
        await loadMyFollowing(sessionUser);
        setScreen("dashboard");
        return;
      }
    }
    setScreen("auth");
  }

  async function loadProgress(uname) {
    const next = {};
    for (const storyId of Object.keys(STORIES)) {
      const raw = await safeGet(`progress:${uname}:${storyId}`, true);
      if (raw) next[storyId] = JSON.parse(raw);
    }
    setProgress(next);
  }

  async function loadMyFollowing(uname) {
    const raw = await safeGet(`followingOf:${uname}`, true);
    setMyFollowing(raw ? JSON.parse(raw) : []);
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
    setProfileView(null);
    setProfileTab("overview");
    setScreen("profile");
    const p = await loadFullProfile(uname);
    setProfileView(p);
    if (currentUser && uname === currentUser.username) setMyFollowing(p.followingDetails.map((f) => f.username));
  }

  async function addFriend(targetRaw) {
    setFriendError("");
    const target = sanitizeUsername(targetRaw);
    if (!target) return;
    if (target === currentUser.username) { setFriendError("ไม่สามารถเพิ่มตัวเองเป็นเพื่อนได้"); return; }
    const exists = await safeGet(`account:${target}`, true);
    if (!exists) { setFriendError("ไม่พบชื่อผู้ใช้นี้ในระบบ"); return; }
    if (myFollowing.includes(target)) { setFriendError("เพิ่มเป็นเพื่อนแล้ว"); return; }
    const newFollowing = [...myFollowing, target];
    try {
      await window.storage.set(`followingOf:${currentUser.username}`, JSON.stringify(newFollowing), true);
      const followersRaw = await safeGet(`followersOf:${target}`, true);
      const followersArr = followersRaw ? JSON.parse(followersRaw) : [];
      if (!followersArr.includes(currentUser.username)) {
        await window.storage.set(`followersOf:${target}`, JSON.stringify([...followersArr, currentUser.username]), true);
      }
    } catch (e) { setFriendError("เกิดข้อผิดพลาด กรุณาลองใหม่"); return; }
    setMyFollowing(newFollowing);
    setFriendInput("");
    if (profileView && profileView.username === currentUser.username) openProfile(currentUser.username);
  }

  async function removeFriend(target) {
    const newFollowing = myFollowing.filter((u) => u !== target);
    try {
      await window.storage.set(`followingOf:${currentUser.username}`, JSON.stringify(newFollowing), true);
      const followersRaw = await safeGet(`followersOf:${target}`, true);
      const followersArr = (followersRaw ? JSON.parse(followersRaw) : []).filter((u) => u !== currentUser.username);
      await window.storage.set(`followersOf:${target}`, JSON.stringify(followersArr), true);
    } catch (e) {}
    setMyFollowing(newFollowing);
    if (profileView && profileView.username === currentUser.username) openProfile(currentUser.username);
  }

  async function loadAllUsers() {
    setLoadingUsers(true);
    try {
      const res = await window.storage.list("account:", true);
      const usernames = (res?.keys || []).map((k) => k.replace("account:", ""));
      const list = [];
      for (const u of usernames) {
        if (u === currentUser.username) continue;
        const raw = await safeGet(`account:${u}`, true);
        if (raw) { const a = JSON.parse(raw); list.push({ username: u, displayName: a.displayName }); }
      }
      setAllUsers(list);
    } catch (e) { setAllUsers([]); }
    setLoadingUsers(false);
  }

  function openEditProfile() {
    setEditDraft({ displayName: profileView.displayName, avatarUrl: profileView.avatarUrl, bannerUrl: profileView.bannerUrl });
    setEditError("");
    setScreen("editProfile");
  }

  function handleImageFile(e, kind) {
    const file = e.target.files && e.target.files[0];
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
        setEditDraft((prev) => ({ ...prev, [kind === "avatar" ? "avatarUrl" : "bannerUrl"]: dataUrl }));
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
    setEditError(""); setEditSaving(true);
    const cooldownMs = 7 * 60 * 1000;
    const nameChanged = editDraft.displayName.trim() !== profileView.displayName;
    const now = Date.now();
    if (nameChanged) {
      if (!editDraft.displayName.trim()) { setEditError("กรุณาใส่ชื่อ"); setEditSaving(false); return; }
      const elapsed = now - (profileView.lastNameChangeAt || 0);
      if (elapsed < cooldownMs) { setEditError(`เปลี่ยนชื่อได้ทุก 7 นาที กรุณารออีก ${formatCooldown(cooldownMs - elapsed)}`); setEditSaving(false); return; }
    }
    try {
      const accRaw = await safeGet(`account:${currentUser.username}`, true);
      const acc = JSON.parse(accRaw);
      acc.displayName = editDraft.displayName.trim();
      if (nameChanged) acc.lastNameChangeAt = now;
      await window.storage.set(`account:${currentUser.username}`, JSON.stringify(acc), true);
      if (editDraft.avatarUrl && editDraft.avatarUrl !== profileView.avatarUrl) {
        await window.storage.set(`avatar:${currentUser.username}`, editDraft.avatarUrl, true);
      }
      if (editDraft.bannerUrl && editDraft.bannerUrl !== profileView.bannerUrl) {
        await window.storage.set(`banner:${currentUser.username}`, editDraft.bannerUrl, true);
      }
    } catch (e) { setEditError("บันทึกไม่สำเร็จ อาจเป็นเพราะไฟล์รูปภาพใหญ่เกินไป ลองรูปอื่นดูนะ"); setEditSaving(false); return; }
    const newName = editDraft.displayName.trim();
    setCurrentUser((prev) => ({ ...prev, displayName: newName, avatarUrl: editDraft.avatarUrl || prev.avatarUrl }));
    setEditSaving(false);
    await openProfile(currentUser.username);
  }

  function sanitizeUsername(u) { return u.trim().toLowerCase(); }

  async function handleRegister() {
    setAuthError("");
    const uname = sanitizeUsername(username);
    if (!/^[a-z0-9_]{3,20}$/.test(uname)) { setAuthError("ชื่อผู้ใช้ต้องเป็นตัวอักษรอังกฤษพิมพ์เล็ก ตัวเลข หรือ _ ความยาว 3-20 ตัว"); return; }
    if (password.length < 4) { setAuthError("รหัสผ่านต้องมีอย่างน้อย 4 ตัวอักษร"); return; }
    if (!displayName.trim()) { setAuthError("กรุณาใส่ชื่อที่แสดงในแอป"); return; }
    const existing = await safeGet(`account:${uname}`, true);
    if (existing) { setAuthError("มีชื่อผู้ใช้นี้อยู่แล้ว กรุณาเลือกชื่ออื่น"); return; }
    const passwordHash = await hashPassword(password);
    const now = Date.now();
    const accData = { passwordHash, displayName: displayName.trim(), createdAt: now, lastNameChangeAt: now };
    try {
      await window.storage.set(`account:${uname}`, JSON.stringify(accData), true);
      await window.storage.set("session:current", uname, false);
    } catch (e) { setAuthError("เกิดข้อผิดพลาดในการสมัคร กรุณาลองใหม่"); return; }
    setCurrentUser({ username: uname, displayName: accData.displayName, avatarUrl: null });
    setProgress({});
    setMyFollowing([]);
    setScreen("dashboard");
  }

  async function handleLogin() {
    setAuthError("");
    const uname = sanitizeUsername(username);
    const raw = await safeGet(`account:${uname}`, true);
    if (!raw) { setAuthError("ไม่พบชื่อผู้ใช้นี้ในระบบ"); return; }
    const acc = JSON.parse(raw);
    const passwordHash = await hashPassword(password);
    if (passwordHash !== acc.passwordHash) { setAuthError("รหัสผ่านไม่ถูกต้อง"); return; }
    try { await window.storage.set("session:current", uname, false); } catch (e) {}
    const avatarUrl = await safeGet(`avatar:${uname}`, true);
    setCurrentUser({ username: uname, displayName: acc.displayName, avatarUrl });
    await loadProgress(uname);
    await loadMyFollowing(uname);
    setScreen("dashboard");
  }

  async function handleLogout() {
    try { await window.storage.delete("session:current", false); } catch (e) {}
    setCurrentUser(null); setProgress({});
    setMyFollowing([]); setProfileView(null); setAllUsers(null); setProfileTab("overview");
    setUsername(""); setPassword(""); setDisplayName("");
    setScreen("auth");
  }

  function saveProgress(storyId, updater) {
    setProgress((prev) => {
      const prevProg = prev[storyId] || { currentNode: STORIES[storyId].startNode, furthestLevel: 0, visitedNodes: [], endingsUnlocked: [], completed: false };
      const updated = updater(prevProg);
      const next = { ...prev, [storyId]: updated };
      if (currentUser) window.storage.set(`progress:${currentUser.username}:${storyId}`, JSON.stringify(updated), true).catch(() => {});
      return next;
    });
  }

  function goToNode(storyId, nodeId) {
    const node = STORIES[storyId].nodes[nodeId];
    setActiveStory(storyId); setActiveNode(nodeId);
    saveProgress(storyId, (prevProg) => {
      const visited = Array.from(new Set([...(prevProg.visitedNodes || []), nodeId]));
      let endingsUnlocked = prevProg.endingsUnlocked || [];
      let completed = prevProg.completed || false;
      if (node.type === "ending" && !endingsUnlocked.includes(nodeId)) { endingsUnlocked = [...endingsUnlocked, nodeId]; completed = true; }
      return { ...prevProg, currentNode: nodeId, furthestLevel: Math.max(prevProg.furthestLevel || 0, node.level), visitedNodes: visited, endingsUnlocked, completed };
    });
    setScreen(node.type === "ending" ? "ending" : "reader");
  }

  function resumeReading(storyId) {
    const p = progress[storyId];
    const nodeId = p && p.currentNode ? p.currentNode : STORIES[storyId].startNode;
    const nodeObj = STORIES[storyId].nodes[nodeId];
    if (!p || nodeObj.type === "ending") goToNode(storyId, STORIES[storyId].startNode);
    else { setActiveStory(storyId); setActiveNode(nodeId); setScreen("reader"); }
  }

  function openStoryMap(storyId) { setActiveStory(storyId); setScreen("map"); }
  function percentFor(storyId) { const p = progress[storyId]; if (!p) return 0; return Math.round(((p.furthestLevel || 0) / 3) * 100); }
  function ctaLabel(storyId) { const p = progress[storyId]; if (!p) return "เริ่มอ่าน"; if (p.completed) return "อ่านอีกครั้ง"; return "อ่านต่อ"; }
  function totalEndingsUnlocked() { return Object.values(progress).reduce((a, s) => a + (s.endingsUnlocked?.length || 0), 0); }
  function totalCompletedStories() { return Object.keys(STORIES).filter((id) => progress[id]?.completed).length; }

  /* ---------------- shared chrome ---------------- */

  function NavItems() {
    return (
      <>
        <button className={`nsj-nav-item ${screen === "dashboard" ? "active" : ""}`} onClick={() => setScreen("dashboard")}>🏠 หน้าหลัก</button>
        <button className={`nsj-nav-item ${screen === "profile" ? "active" : ""}`} onClick={() => openProfile(currentUser.username)}>👤 โปรไฟล์</button>
      </>
    );
  }

  function ProfileAvatar({ url, name, size }) {
    return (
      <div className="nsj-profile-avatar" style={{ width: size, height: size, fontSize: size * 0.36, borderWidth: size < 60 ? 2 : 5 }}>
        {url ? <img src={url} alt="" /> : (name || "?").slice(0, 1).toUpperCase()}
      </div>
    );
  }

  function Sidebar() {
    return (
      <div className="nsj-sidebar">
        <div className="nsj-logo-wrap"><span className="nsj-logo-emoji">🏮</span><span className="nsj-logo-text">นิทานส่องใจ</span></div>
        <NavItems />
        {currentUser && (
          <div className="nsj-sidebar-bottom">
            <div className="nsj-user-chip" style={{ cursor: "pointer" }} onClick={() => openProfile(currentUser.username)}>
              <ProfileAvatar url={currentUser.avatarUrl} name={currentUser.displayName} size={36} />
              <div><div className="nsj-user-name">{currentUser.displayName}</div><div className="nsj-user-handle">@{currentUser.username}</div></div>
            </div>
            <button className="nsj-nav-item" onClick={handleLogout}>🚪 ออกจากระบบ</button>
          </div>
        )}
      </div>
    );
  }

  function MobileHeader({ showBack, onBack }) {
    return (
      <div className="nsj-mobile-header">
        {showBack ? <button className="nsj-back" onClick={onBack}>‹ กลับ</button> : <div style={{ fontWeight: 700, color: "#FF7A1A" }}>🏮 นิทานส่องใจ</div>}
        {currentUser && !showBack && (
          <div style={{ display: "flex", gap: 8 }}>
            <button className="nsj-icon-btn" onClick={() => openProfile(currentUser.username)}>👤</button>
            <button className="nsj-icon-btn" onClick={handleLogout}>🚪</button>
          </div>
        )}
      </div>
    );
  }

  function RightRail() {
    return (
      <div className="nsj-rightrail">
        <div className="nsj-stat-card"><div className="nsj-stat-num">{totalEndingsUnlocked()}</div><div className="nsj-stat-label">ตอนจบที่ค้นพบทั้งหมด</div></div>
        <div className="nsj-stat-card"><div className="nsj-stat-num">{totalCompletedStories()} / {Object.keys(STORIES).length}</div><div className="nsj-stat-label">นิทานที่อ่านจบแล้ว</div></div>
        <div className="nsj-card" style={{ padding: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>💡 เคล็ดลับ</div>
          <div style={{ fontSize: 12.5, color: "#8A8478", lineHeight: 1.6 }}>ลองย้อนกลับไปเลือกทางที่ต่างออกไป เพื่อค้นพบตอนจบและข้อคิดใหม่ๆ ในนิทานเรื่องเดิม</div>
        </div>
      </div>
    );
  }

  /* ---------------- screens ---------------- */

  function renderLoading() {
    return (
      <div className="nsj-center nsj-fade">
        <div style={{ fontSize: 40 }}>🕯️</div>
        <div style={{ marginTop: 10, color: "#8A8478", fontSize: 13, fontWeight: 600 }}>กำลังจุดตะเกียง...</div>
      </div>
    );
  }

  function renderAuth() {
    return (
      <div className="nsj-app" style={{ width: "100%" }}>
        <div className="nsj-main-wrap" style={{ width: "100%" }}>
          <div className="nsj-main-col nsj-fade" style={{ maxWidth: 420, marginTop: 20 }}>
            <div className="nsj-center" style={{ paddingBottom: 0, paddingTop: 10 }}>
              <div style={{ fontSize: 42 }}>🏮</div>
              <div className="nsj-h1" style={{ fontSize: 26, color: "#FF7A1A", marginTop: 6 }}>นิทานส่องใจ</div>
              <div className="nsj-sub" style={{ marginTop: 4 }}>สื่อการเรียนรู้นิทานเพื่อเสริมสร้างพลังใจและจริยธรรม</div>
            </div>
            <div className="nsj-card">
              <div style={{ display: "flex", gap: 18, marginBottom: 18 }}>
                <button className={`nsj-btn-tab ${authMode === "login" ? "nsj-btn-tab-active" : ""}`} style={{ flex: 1, background: "none", cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }} onClick={() => { setAuthMode("login"); setAuthError(""); }}>เข้าสู่ระบบ</button>
                <button className={`nsj-btn-tab ${authMode === "register" ? "nsj-btn-tab-active" : ""}`} style={{ flex: 1, background: "none", cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }} onClick={() => { setAuthMode("register"); setAuthError(""); }}>สมัครสมาชิก</button>
              </div>
              <label className="nsj-field-label">ชื่อผู้ใช้ (ภาษาอังกฤษ/ตัวเลข)</label>
              <input className="nsj-input" placeholder="เช่น tawan_09" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (authMode === "login" ? handleLogin() : handleRegister())} />
              {authMode === "register" && (<><div style={{ height: 12 }} /><label className="nsj-field-label">ชื่อที่แสดงในแอป</label><input className="nsj-input" placeholder="เช่น ตะวัน" value={displayName} onChange={(e) => setDisplayName(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleRegister()} /></>)}
              <div style={{ height: 12 }} />
              <label className="nsj-field-label">รหัสผ่าน</label>
              <input className="nsj-input" type="password" placeholder="อย่างน้อย 4 ตัวอักษร" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (authMode === "login" ? handleLogin() : handleRegister())} />
              {authError && <div className="nsj-error">{authError}</div>}
              <div style={{ height: 16 }} />
              <button className="nsj-btn nsj-btn-primary" onClick={authMode === "login" ? handleLogin : handleRegister}>{authMode === "login" ? "เข้าสู่ระบบ" : "สร้างบัญชีใหม่"}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderDashboard() {
    return (
      <div className="nsj-app" style={{ width: "100%" }}>
        <Sidebar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <MobileHeader />
          <div style={{ display: "flex", flex: 1 }}>
            <div className="nsj-main-wrap">
              <div className="nsj-main-col nsj-fade">
                <div className="nsj-h1">สวัสดี, <span style={{ color: "#FF7A1A" }}>{currentUser.displayName}</span></div>
                <div className="nsj-sub" style={{ marginTop: -10 }}>เลือกนิทานที่อยากออกเดินทางวันนี้</div>
                <div className="nsj-story-grid">
                  {Object.values(STORIES).map((story) => (
                    <div key={story.id} className="nsj-story-card" onClick={() => openStoryMap(story.id)}>
                      <SceneBox sceneId={story.nodes[story.startNode].scene} height={120} />
                      <div className="nsj-story-card-body">
                        <div className="nsj-story-title">{story.title}</div>
                        <div className="nsj-story-theme">คุณธรรม · {story.theme}</div>
                        <span className="nsj-origin-tag">{story.origin}</span>
                        <div className="nsj-progress-track"><div className="nsj-progress-fill" style={{ width: `${percentFor(story.id)}%`, background: story.accent }} /></div>
                        <div style={{ fontSize: 11.5, color: "#8A8478", marginTop: 6, display: "flex", justifyContent: "space-between" }}>
                          <span>{percentFor(story.id)}% แล้ว</span>
                          <span style={{ color: story.accent, fontWeight: 700 }}>{ctaLabel(story.id)} ›</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <RightRail />
          </div>
        </div>
      </div>
    );
  }

  function renderMap() {
    const story = STORIES[activeStory];
    const p = progress[activeStory];
    const furthest = p?.furthestLevel || 0;
    const unlocked = p?.endingsUnlocked || [];
    const endingIds = Object.entries(story.nodes).filter(([, n]) => n.type === "ending").map(([id]) => id);
    return (
      <div className="nsj-app" style={{ width: "100%" }}>
        <Sidebar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <MobileHeader showBack onBack={() => setScreen("dashboard")} />
          <div style={{ display: "flex", flex: 1 }}>
            <div className="nsj-main-wrap">
              <div className="nsj-main-col nsj-fade">
                <div className="nsj-card">
                  <SceneBox sceneId={story.nodes[story.startNode].scene} height={190} />
                  <div className="nsj-h1" style={{ textAlign: "center", color: story.accent, marginTop: 14 }}>{story.title}</div>
                  <div className="nsj-sub" style={{ textAlign: "center", marginTop: 6, lineHeight: 1.6 }}>{story.blurb}</div>
                  <div className="nsj-progress-track"><div className="nsj-progress-fill" style={{ width: `${percentFor(activeStory)}%`, background: story.accent }} /></div>
                  <div style={{ fontSize: 11.5, color: "#8A8478", marginTop: 4, textAlign: "right" }}>{percentFor(activeStory)}% ของเส้นทาง</div>

                  <div className="nsj-path">
                    <div className="nsj-path-node" style={{ borderColor: story.accent, color: story.accent }}>🕯️</div>
                    <div className="nsj-path-label">จุดเริ่มต้น</div>
                    <div className="nsj-path-line" />
                    <div className="nsj-path-node" style={{ borderColor: furthest >= 2 ? story.accent : "#EDE6DA", color: furthest >= 2 ? story.accent : "#C9BFB0" }}>{furthest >= 2 ? "🔀" : "🔒"}</div>
                    <div className="nsj-path-label">ทางแยกแห่งการเลือก</div>
                  </div>

                  <div className="nsj-choice-prompt">คลังตอนจบที่ค้นพบ ({unlocked.length}/4)</div>
                  <div className="nsj-gallery">
                    {endingIds.map((eid) => {
                      const node = story.nodes[eid];
                      const isUnlocked = unlocked.includes(eid);
                      const color = HUE_COLORS[node.hue];
                      return (
                        <div key={eid} className={`nsj-lantern ${isUnlocked ? "" : "nsj-lantern-locked"}`} title={isUnlocked ? node.title : "ยังไม่ค้นพบ"}>
                          <SceneBox sceneId={node.scene} tint={isUnlocked ? color : "#888888"} height={70} />
                          <div className="nsj-lantern-badge">{isUnlocked ? node.icon : "❔"}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div style={{ height: 16 }} />
                  <button className="nsj-btn nsj-btn-primary" style={{ background: story.accent, borderBottomColor: "#00000030" }} onClick={() => resumeReading(activeStory)}>{ctaLabel(activeStory)}</button>
                </div>
              </div>
            </div>
            <RightRail />
          </div>
        </div>
      </div>
    );
  }

  function renderReader() {
    const story = STORIES[activeStory];
    const node = story.nodes[activeNode];
    return (
      <div className="nsj-app" style={{ width: "100%" }}>
        <MobileHeader showBack onBack={() => setScreen("map")} />
        <div className="nsj-main-wrap" style={{ width: "100%" }}>
          <div className="nsj-main-col nsj-fade">
            <button className="nsj-back" style={{ display: "inline-flex" }} onClick={() => setScreen("map")}>‹ กลับ</button>
            <div className="nsj-card">
              <SceneBox sceneId={node.scene} height={260} />
              <div className="nsj-chapter-title">{node.title}</div>
              <div className="nsj-chapter-text">{node.text}</div>
              <div className="nsj-choice-prompt">{node.choice.prompt}</div>
              {node.choice.options.map((opt, i) => (
                <button key={i} className="nsj-choice-btn" onClick={() => goToNode(activeStory, opt.next)}>{opt.label}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderEnding() {
    const story = STORIES[activeStory];
    const node = story.nodes[activeNode];
    const color = HUE_COLORS[node.hue];
    return (
      <div className="nsj-app" style={{ width: "100%" }}>
        <MobileHeader showBack onBack={() => setScreen("map")} />
        <div className="nsj-main-wrap" style={{ width: "100%" }}>
          <div className="nsj-main-col nsj-fade">
            <button className="nsj-back" style={{ display: "inline-flex" }} onClick={() => setScreen("map")}>‹ กลับ</button>
            <div className="nsj-card">
              <SceneBox sceneId={node.scene} tint={color} badge={node.icon} height={260} />
              <div className="nsj-chapter-title" style={{ color }}>{node.title}</div>
              <div className="nsj-chapter-text">{node.text}</div>
              <div className="nsj-insight">ข้อคิด: {node.insight}</div>
              <button className="nsj-btn" style={{ background: color, color: "#fff", borderBottomColor: "#00000030", marginBottom: 10 }} onClick={() => goToNode(activeStory, story.startNode)}>เดินเส้นทางใหม่ ลองเลือกทางอื่น</button>
              <button className="nsj-btn nsj-btn-outline" onClick={() => setScreen("dashboard")}>กลับหน้าหลัก</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderProfile() {
    if (!profileView) {
      return (
        <div className="nsj-app" style={{ width: "100%" }}>
          <Sidebar />
          <div className="nsj-center nsj-fade" style={{ flex: 1 }}>
            <div style={{ fontSize: 34 }}>🏮</div>
            <div style={{ marginTop: 8, color: "#8A8478", fontSize: 13, fontWeight: 600 }}>กำลังโหลดโปรไฟล์...</div>
          </div>
        </div>
      );
    }
    const isOwn = currentUser && profileView.username === currentUser.username;
    const progressData = isOwn ? progress : profileView.progress;
    const storyIds = Object.keys(STORIES);
    const isFriend = !isOwn && myFollowing.includes(profileView.username);
    const joinedLabel = profileView.createdAt ? new Date(profileView.createdAt).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" }) : "";

    return (
      <div className="nsj-app" style={{ width: "100%" }}>
        <Sidebar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <MobileHeader showBack onBack={() => setScreen("dashboard")} />
          <div className="nsj-main-wrap">
            <div className="nsj-main-col nsj-fade">

              <div className="nsj-profile-banner">
                {profileView.bannerUrl ? <img src={profileView.bannerUrl} alt="" /> : <SceneBox sceneId="candleCeremony" />}
              </div>
              <div className="nsj-profile-header">
                <div className="nsj-profile-avatar-row">
                  <ProfileAvatar url={profileView.avatarUrl} name={profileView.displayName} size={96} />
                  {isOwn ? (
                    <button className="nsj-btn nsj-btn-outline" style={{ width: "auto", padding: "10px 18px", marginBottom: 4 }} onClick={openEditProfile}>แก้ไขโปรไฟล์</button>
                  ) : (
                    <button
                      className="nsj-btn"
                      style={{ width: "auto", padding: "10px 18px", marginBottom: 4, background: isFriend ? "#fff" : "#FF9600", color: isFriend ? "#5A544A" : "#fff", border: isFriend ? "2px solid #EDE6DA" : "none", borderBottom: isFriend ? "4px solid #EDE6DA" : "4px solid #DB7F00" }}
                      onClick={() => (isFriend ? removeFriend(profileView.username) : addFriend(profileView.username))}
                    >
                      {isFriend ? "เลิกเป็นเพื่อน" : "+ เพิ่มเพื่อน"}
                    </button>
                  )}
                </div>
                <div className="nsj-profile-name">{profileView.displayName}</div>
                <div className="nsj-profile-meta">@{profileView.username}{joinedLabel ? ` · เข้าร่วมเมื่อ ${joinedLabel}` : ""}</div>
                <div className="nsj-profile-counts">
                  <span><b>{profileView.followersCount}</b> ผู้ติดตาม</span>
                  <span><b>{profileView.followingCount}</b> กำลังติดตาม</span>
                </div>
                {isOwn && (
                  <div className="nsj-profile-tabs">
                    <button className={`nsj-profile-tab ${profileTab === "overview" ? "active" : ""}`} onClick={() => setProfileTab("overview")}>ภาพรวม</button>
                    <button className={`nsj-profile-tab ${profileTab === "friends" ? "active" : ""}`} onClick={() => setProfileTab("friends")}>เพื่อน</button>
                  </div>
                )}
              </div>

              <div style={{ height: 6 }} />

              {(!isOwn || profileTab === "overview") && (
                <>
                  <div className="nsj-card">
                    <div style={{ display: "flex", gap: 10 }}>
                      {storyIds.map((id) => (
                        <div key={id} style={{ flex: 1, textAlign: "center", background: "#FAF7F2", borderRadius: 14, padding: "10px 6px" }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: STORIES[id].accent }}>{Math.round((((progressData[id]?.furthestLevel) || 0) / 3) * 100)}%</div>
                          <div style={{ fontSize: 10, color: "#8A8478", marginTop: 2 }}>{(progressData[id]?.endingsUnlocked?.length || 0)}/4 ตอนจบ</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="nsj-choice-prompt" style={{ color: "#8A8478", textAlign: "left" }}>เหรียญตราแห่งการเดินทาง</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {BADGES.map((b) => {
                      const unlocked = b.check(progressData);
                      return (
                        <div key={b.id} className={`nsj-badge-row ${unlocked ? "" : "locked"}`}>
                          <div className="nsj-badge-icon">{unlocked ? b.icon : "🔒"}</div>
                          <div><div className="nsj-badge-title">{b.title}</div><div className="nsj-badge-desc">{b.desc}</div></div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {isOwn && profileTab === "friends" && (
                <>
                  <div className="nsj-card">
                    <div className="nsj-h2" style={{ marginBottom: 10 }}>เพิ่มเพื่อนด้วยชื่อผู้ใช้</div>
                    <div style={{ display: "flex", gap: 10 }}>
                      <input className="nsj-input" placeholder="พิมพ์ username เช่น tawan_09" value={friendInput} onChange={(e) => setFriendInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addFriend(friendInput)} />
                      <button className="nsj-btn nsj-btn-primary" style={{ width: "auto", padding: "0 22px" }} onClick={() => addFriend(friendInput)}>เพิ่ม</button>
                    </div>
                    {friendError && <div className="nsj-error">{friendError}</div>}
                  </div>

                  <div className="nsj-choice-prompt" style={{ color: "#8A8478", textAlign: "left" }}>เพื่อนของฉัน ({profileView.followingDetails.length})</div>
                  {profileView.followingDetails.length === 0 && <div className="nsj-sub" style={{ padding: "0 4px" }}>ยังไม่มีเพื่อน ลองเพิ่มเพื่อนด้วยชื่อผู้ใช้ด้านบน หรือเลือกจากรายชื่อผู้ใช้ทั้งหมดด้านล่าง</div>}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {profileView.followingDetails.map((f) => (
                      <div key={f.username} className="nsj-friend-row">
                        <div className="nsj-friend-row-main" onClick={() => openProfile(f.username)}>
                          <ProfileAvatar url={f.avatarUrl} name={f.displayName} size={40} />
                          <div><div className="nsj-friend-name">{f.displayName}</div><div className="nsj-friend-handle">@{f.username}</div></div>
                        </div>
                        <button className="nsj-small-btn nsj-small-btn-remove" onClick={() => removeFriend(f.username)}>ลบ</button>
                      </div>
                    ))}
                  </div>

                  <div className="nsj-choice-prompt" style={{ color: "#8A8478", textAlign: "left" }}>ผู้ใช้ทั้งหมดในระบบ</div>
                  {loadingUsers && <div className="nsj-sub">กำลังโหลดรายชื่อผู้ใช้...</div>}
                  {!loadingUsers && allUsers && allUsers.length === 0 && <div className="nsj-sub">ยังไม่มีผู้ใช้คนอื่นในระบบ</div>}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {!loadingUsers && allUsers && allUsers.filter((u) => !myFollowing.includes(u.username)).map((u) => (
                      <div key={u.username} className="nsj-friend-row">
                        <div className="nsj-friend-row-main" onClick={() => openProfile(u.username)}>
                          <ProfileAvatar url={null} name={u.displayName} size={40} />
                          <div><div className="nsj-friend-name">{u.displayName}</div><div className="nsj-friend-handle">@{u.username}</div></div>
                        </div>
                        <button className="nsj-small-btn nsj-small-btn-add" onClick={() => addFriend(u.username)}>+ เพิ่ม</button>
                      </div>
                    ))}
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderEditProfile() {
    const cooldownMs = 7 * 60 * 1000;
    const elapsed = Date.now() - (profileView?.lastNameChangeAt || 0);
    const nameChanged = editDraft.displayName.trim() !== profileView?.displayName;
    const onCooldown = nameChanged && elapsed < cooldownMs;
    return (
      <div className="nsj-app" style={{ width: "100%" }}>
        <MobileHeader showBack onBack={() => setScreen("profile")} />
        <div className="nsj-main-wrap" style={{ width: "100%" }}>
          <div className="nsj-main-col nsj-fade">
            <button className="nsj-back" style={{ display: "inline-flex" }} onClick={() => setScreen("profile")}>‹ กลับ</button>
            <div className="nsj-card">
              <div className="nsj-h2" style={{ marginBottom: 14 }}>แก้ไขโปรไฟล์</div>

              <label className="nsj-field-label">รูปพื้นหลัง</label>
              <div className="nsj-banner-preview">
                {editDraft.bannerUrl ? <img src={editDraft.bannerUrl} alt="" /> : <SceneBox sceneId="candleCeremony" />}
              </div>
              <input ref={bannerFileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleImageFile(e, "banner")} />
              <div style={{ height: 8 }} />
              <button className="nsj-upload-btn" onClick={() => bannerFileRef.current && bannerFileRef.current.click()}>เปลี่ยนรูปพื้นหลัง</button>

              <div style={{ height: 20 }} />
              <label className="nsj-field-label">รูปโปรไฟล์</label>
              <div className="nsj-upload-row">
                <ProfileAvatar url={editDraft.avatarUrl} name={editDraft.displayName} size={72} />
                <input ref={avatarFileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleImageFile(e, "avatar")} />
                <button className="nsj-upload-btn" onClick={() => avatarFileRef.current && avatarFileRef.current.click()}>เปลี่ยนรูปโปรไฟล์</button>
              </div>

              <div style={{ height: 20 }} />
              <label className="nsj-field-label">ชื่อที่แสดงในแอป</label>
              <input className="nsj-input" value={editDraft.displayName} onChange={(e) => setEditDraft((p) => ({ ...p, displayName: e.target.value }))} />
              <div style={{ fontSize: 11.5, color: "#A69C8E", marginTop: 6 }}>เปลี่ยนชื่อได้ 1 ครั้งทุก 7 นาที</div>
              {onCooldown && <div className="nsj-error">เปลี่ยนชื่อได้ทุก 7 นาที กรุณารออีก {formatCooldown(cooldownMs - elapsed)}</div>}
              {editError && <div className="nsj-error">{editError}</div>}

              <div style={{ height: 18 }} />
              <button className="nsj-btn nsj-btn-primary" onClick={saveProfileEdits} disabled={editSaving}>{editSaving ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนแปลง"}</button>
              <div style={{ height: 10 }} />
              <button className="nsj-btn nsj-btn-outline" onClick={() => setScreen("profile")}>ยกเลิก</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="nsj-root">
      <style>{STYLE}</style>
      {screen === "loading" && renderLoading()}
      {screen === "auth" && renderAuth()}
      {screen === "dashboard" && currentUser && renderDashboard()}
      {screen === "map" && activeStory && renderMap()}
      {screen === "reader" && activeStory && activeNode && renderReader()}
      {screen === "ending" && activeStory && activeNode && renderEnding()}
      {screen === "profile" && currentUser && renderProfile()}
      {screen === "editProfile" && currentUser && profileView && renderEditProfile()}
    </div>
  );
}
