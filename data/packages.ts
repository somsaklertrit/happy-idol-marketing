export type Localized<T = string> = { en: T; th: T };

export const packagesContent = {
  heading: {
    eyebrow: { en: "Packages & Pricing", th: "แพ็กเกจและราคา" },
    title: {
      en: "Choose how you want their story to be remembered.",
      th: "เลือกวิธีเก็บเรื่องราวของคนพิเศษไว้ในแบบที่มีความหมายที่สุด",
    },
    intro: {
      en: "Every Happy Idol story is created personally from your photos, memories, and the feeling you want to preserve.",
      th: "ทุกเรื่องราวของ Happy Idol ถูกสร้างขึ้นเฉพาะบุคคล จากภาพถ่าย ความทรงจำ และความรู้สึกที่คุณอยากเก็บไว้",
    },
  },
  labels: {
    includes: { en: "Includes", th: "สิ่งที่รวมในแพ็กเกจ" },
    bestFor: { en: "Best for", th: "เหมาะสำหรับ" },
    normalPrice: { en: "Normal price", th: "ราคาปกติ" },
    launchPrice: { en: "Launch price", th: "ราคาเปิดตัว" },
    badge: { en: "Special Launch Price", th: "ราคาพิเศษช่วงเปิดตัว" },
  },
  packages: [
    {
      id: "digital-story",
      number: "01",
      name: "Happy Idol Digital Story",
      tagline: {
        en: "A personal story, beautifully made for them.",
        th: "เรื่องราวเฉพาะของเขา สร้างขึ้นอย่างตั้งใจเพื่อคนพิเศษ",
      },
      normalPrice: "฿890",
      launchPrice: "฿690",
      revisionRounds: 1,
      inclusions: {
        en: [
          "Personalized E-book",
          "A4 format",
          "Approximately 20–24 pages",
          "Personalized story",
          "Personalized character",
          "Custom illustrations",
          "Custom cover and layout",
          "High-resolution PDF",
          "1 round of minor revisions after the first proof",
        ],
        th: [
          "E-book เฉพาะบุคคล",
          "ขนาด A4",
          "ประมาณ 20–24 หน้า",
          "เรื่องราวเฉพาะบุคคล",
          "Character ที่สร้างขึ้นเฉพาะ",
          "ภาพประกอบเฉพาะเรื่อง",
          "ออกแบบ Cover และ Layout",
          "ไฟล์ PDF ความละเอียดสูง",
          "รวมการแก้ไขรายละเอียดเล็กน้อย 1 รอบ หลังได้รับแบบร่าง",
        ],
      },
      bestFor: {
        en: "A meaningful digital gift, instant sharing, or a family memory to keep.",
        th: "เหมาะสำหรับของขวัญดิจิทัล ส่งให้คนพิเศษ หรือเก็บเป็นความทรงจำของครอบครัว",
      },
      cta: { en: "Choose Digital Story", th: "เลือก Digital Story" },
      featured: false,
    },
    {
      id: "premium-keepsake",
      number: "02",
      name: "Happy Idol Premium Keepsake",
      tagline: {
        en: "A story made to hold, keep and give.",
        th: "เรื่องราวที่สร้างขึ้นเพื่อมอบให้ สัมผัสได้ และเก็บไว้ได้นาน",
      },
      normalPrice: "฿2,490",
      launchPrice: "฿1,990",
      revisionRounds: 2,
      inclusions: {
        en: [
          "Personalized Printed Storybook",
          "Approximately 20–24 pages",
          "Personalized story",
          "Personalized character and artwork",
          "Custom cover",
          "Full-color premium printing",
          "Premium binding",
          "E-book PDF included",
          "Premium Magnetic Gift Box",
          "Happy Idol brand seal / sticker",
          "Premium gift presentation",
          "Up to 2 rounds of minor revisions after the first proof",
        ],
        th: [
          "หนังสือเรื่องราวเฉพาะบุคคลแบบพิมพ์",
          "ประมาณ 20–24 หน้า",
          "เรื่องราวเฉพาะบุคคล",
          "Character และ Artwork เฉพาะของผู้รับ",
          "ออกแบบ Cover",
          "พิมพ์สีคุณภาพสูง",
          "เข้าเล่มแบบ Premium",
          "รวม E-book PDF",
          "Premium Magnetic Gift Box",
          "Happy Idol Brand Seal / Sticker",
          "Premium Gift Presentation",
          "รวมการแก้ไขรายละเอียดเล็กน้อยสูงสุด 2 รอบ หลังได้รับแบบร่าง",
        ],
      },
      bestFor: {
        en: "Birthdays, family milestones, meaningful celebrations, and keepsake gifts designed to last.",
        th: "เหมาะสำหรับวันเกิด วันสำคัญของครอบครัว โอกาสพิเศษ และของขวัญที่ต้องการเก็บไว้ระยะยาว",
      },
      cta: { en: "Choose Premium Keepsake", th: "เลือก Premium Keepsake" },
      featured: true,
    },
  ],
  revisionPolicy: {
    title: { en: "Revision Policy", th: "นโยบายการแก้ไข" },
    paragraphs: {
      en: [
        "Minor revisions may include small text corrections, replacing selected photos, or small detail adjustments.",
        "Corrections required because of a Happy Idol production error do not count as a revision round.",
        "Major changes such as changing the entire story concept, replacing the main character concept, rewriting the full story, or redesigning the entire book are not included and may require an additional quotation.",
      ],
      th: [
        "การแก้ไขรายละเอียดเล็กน้อย อาจรวมถึงการแก้ข้อความเล็กน้อย เปลี่ยนรูปบางภาพ หรือปรับรายละเอียดบางส่วน",
        "การแก้ไขที่เกิดจากความผิดพลาดในการผลิตของ Happy Idol จะไม่นับเป็นรอบการแก้ไข",
        "การเปลี่ยนแนวคิดของเรื่องทั้งหมด เปลี่ยน Character หลัก เขียนเรื่องใหม่ทั้งเรื่อง หรือออกแบบใหม่ทั้งเล่ม ไม่รวมอยู่ในรอบแก้ไข และอาจมีค่าใช้จ่ายเพิ่มเติมตามขอบเขตงาน",
      ],
    },
  },
  addons: {
    title: { en: "Make It Even More Personal", th: "เพิ่มความพิเศษให้เรื่องราวของคุณ" },
    items: [
      { name: { en: "Extra Printed Book", th: "หนังสือเพิ่มอีก 1 เล่ม" }, price: { en: "฿990", th: "฿990" } },
      { name: { en: "Additional Premium Gift Box", th: "Premium Gift Box เพิ่ม" }, price: { en: "฿390", th: "฿390" } },
      { name: { en: "Personalized Video", th: "Personalized Video" }, price: { en: "฿990", th: "฿990" } },
      { name: { en: "Personalized Song", th: "Personalized Song" }, price: { en: "฿1,290", th: "฿1,290" } },
      { name: { en: "Personalized Music Video", th: "Personalized Music Video" }, price: { en: "฿1,990", th: "฿1,990" } },
      {
        name: { en: "Additional Pages", th: "เพิ่มจำนวนหน้า" },
        price: { en: "Price depends on page count / scope", th: "ประเมินตามจำนวนหน้าและขอบเขตงาน" },
      },
    ],
  },
  production: {
    title: { en: "Production & Delivery", th: "การผลิตและจัดส่ง" },
    items: [
      { label: { en: "Digital Story", th: "Digital Story" }, value: { en: "Approximately 3–5 business days", th: "ประมาณ 3–5 วันทำการ" } },
      { label: { en: "Premium Keepsake", th: "Premium Keepsake" }, value: { en: "Approximately 7–14 business days after artwork approval", th: "ประมาณ 7–14 วันทำการ หลังอนุมัติ Artwork" } },
      { label: { en: "Shipping", th: "ค่าจัดส่ง" }, value: { en: "฿120", th: "฿120" } },
      { label: { en: "Estimated delivery", th: "ระยะเวลาขนส่งโดยประมาณ" }, value: { en: "Approximately 1–3 business days", th: "1–3 วันทำการ" } },
    ],
  },
  flow: {
    eyebrow: { en: "How Your Story Begins", th: "เรื่องราวของคุณเริ่มต้นอย่างไร" },
    steps: [
      {
        title: { en: "Choose your package", th: "เลือกแพ็กเกจ" },
        text: { en: "Choose the experience that feels right for your special person.", th: "เลือกประสบการณ์ที่เหมาะกับคนพิเศษของคุณ" },
      },
      {
        title: { en: "Place your order", th: "ยืนยันคำสั่งซื้อ" },
        text: { en: "Confirm your order and payment.", th: "ยืนยันรายการและชำระเงิน" },
      },
      {
        title: { en: "Tell us their story", th: "เล่าเรื่องราวให้เราฟัง" },
        text: {
          en: "After payment, you will receive access to the private Happy Idol Story Portal to submit your story and photos.",
          th: "หลังชำระเงิน คุณจะได้รับ Private Happy Idol Story Portal สำหรับส่งเรื่องราวและรูปภาพ",
        },
      },
      {
        title: { en: "We create the magic", th: "เราเริ่มสร้างเรื่องราว" },
        text: { en: "Happy Idol begins creating your personalized story.", th: "Happy Idol เริ่มสร้างผลงานเฉพาะสำหรับคุณ" },
      },
    ],
  },
} as const;
