import { Question } from '../types'

const questions: Question[] = [
  // Management (サンプル)
    {
    id: "management-1",
    genre: "management",
    question: "ステークホルダーの説明として適切な記載事項はどれか？",
    choices: [
      "株主、消費者、顧客、供給業者などからなる利害関係者・集団",
      "企業内部の従業員のみを指す概念",
      "経営者個人のみを意味する概念",
      "政府機関のみを意味する概念"
    ],
    answerIndex: 0,
    explanation: "ステークホルダーとは企業を取り巻く株主・顧客・供給業者などの利害関係者を指す。"
  },
  {
    id: "management-2",
    genre: "management",
    question: "単一目標論の説明として正しいのはどれか？",
    choices: [
      "企業の目的は従業員満足の最大化である",
      "企業の目的は市場占有率の最大化である",
      "出資をする所有者同様に、企業の目的も利潤の極大化である",
      "企業の目的は社会貢献活動の拡大である"
    ],
    answerIndex: 2,
    explanation: "単一目標論では企業目的を利潤極大化と捉える。"
  },
  {
    id: "management-3",
    genre: "management",
    question: "ドラッカーの目標論において利潤についての考え方で適切なものはどれか？",
    choices: [
      "利潤は経営者個人の報酬を最大化するためのものである",
      "利潤は事業を継続するのにかかるコストをカバーし、将来の投資や革新のための原資となる",
      "利潤は短期的に最大化すべき唯一の指標である",
      "利潤は社会的責任とは無関係である"
    ],
    answerIndex: 1,
    explanation: "ドラッカーは利潤を事業継続と将来投資の条件と捉えた。"
  },
  {
    id: "management-4",
    genre: "management",
    question: "企業の社会的責任として適切ではないものはどれか？",
    choices: [
      "法的な規則に従う責任",
      "経済的な責任",
      "倫理的な責任",
      "経営者個人の私的利益の最大化"
    ],
    answerIndex: 3,
    explanation: "CSRは法的・経済的・倫理的責任などを含む。"
  },
  {
    id: "management-5",
    genre: "management",
    question: "科学的管理法（テイラーリズム）の説明として適切なものはどれか？",
    choices: [
      "科学的な方法による課業設定、高い成功報酬、職能の専門化の組み合わせ",
      "従業員の自律的判断を全面的に尊重する制度",
      "終身雇用と年功序列を前提とする制度",
      "非公式組織を重視する制度"
    ],
    answerIndex: 0,
    explanation: "科学的管理法は課業管理・差別出来高給・職能分化を特徴とする。"
  },
  {
    id: "management-6",
    genre: "management",
    question: "バーナードの組織論において組織成立の条件として正しい組み合わせはどれか？",
    choices: [
      "共通目的・貢献意欲・コミュニケーション",
      "権限・命令・監督",
      "利益・統制・評価",
      "地位・報酬・規律"
    ],
    answerIndex: 0,
    explanation: "バーナードは共通目的・貢献意欲・コミュニケーションを条件とした。"
  },
  {
    id: "management-7",
    genre: "management",
    question: "ファヨールの管理論におけるマネジメントプロセスの要素として正しいものはどれか？",
    choices: [
      "予測→組織化→命令→調整→統制",
      "組織化→予測→統制→命令→調整",
      "命令→予測→組織化→統制→調整",
      "統制→命令→予測→組織化→調整"
    ],
    answerIndex: 0,
    explanation: "ファヨールの管理過程は予測から統制までの順序。"
  },
  {
    id: "management-8",
    genre: "management",
    question: "フィードラーのリーダーシップ論に関する説明として不適切なものはどれか？",
    choices: [
      "LPC得点が低いリーダーは課題志向型である",
      "状況要因の組み合わせにより有効なスタイルは異なる",
      "どの状況でも人間関係志向型が最も有効である",
      "リーダーと成員の関係は状況要因の一つである"
    ],
    answerIndex: 2,
    explanation: "状況適合理論であり万能型はない。"
  },
  {
    id: "management-9",
    genre: "management",
    question: "ハーシーとブランチャードのSL理論の説明で不適切なものはどれか？",
    choices: [
      "成熟度が最も高いときは委任型が適合する",
      "成熟度が低いときは教示型が適合する",
      "成熟度が最も高いときは参加型が適合する",
      "部下の成熟度に応じてスタイルを変える"
    ],
    answerIndex: 2,
    explanation: "成熟度が最も高い場合は委任型が適切。"
  },
  {
    id: "management-10",
    genre: "management",
    question: "ミンツバーグの管理者行動研究の結果として不適切なものはどれか？",
    choices: [
      "管理者の仕事は短く断片的である",
      "口頭コミュニケーションが多い",
      "組織の枠を超えた活動には慎重である",
      "対人関係役割を果たす"
    ],
    answerIndex: 2,
    explanation: "実際は枠を超えて活動的である。"
  },
  {
    id: "management-11",
    genre: "management",
    question: "コッターの管理者行動研究の結果として不適切なものはどれか？",
    choices: [
      "非公式なネットワークを活用する",
      "情報は必ずしも確実とは限らない",
      "短時間の会話を積み重ねる",
      "集められた情報は常に確実である"
    ],
    answerIndex: 3,
    explanation: "情報は必ずしも確実ではない。"
  },
  {
    id: "management-12",
    genre: "management",
    question: "ホールが示した組織構造の3次元に含まれないものはどれか？",
    choices: [
      "集権化の程度",
      "公式化の程度",
      "複雑性の程度",
      "収益性の程度"
    ],
    answerIndex: 3,
    explanation: "収益性は含まれない。"
  },
  {
    id: "management-13",
    genre: "management",
    question: "ローレンスとローシュの分化と統合の説明で不適切なものはどれか？",
    choices: [
      "環境の不確実性は分化を促す",
      "分化が進むほど統合が重要になる",
      "環境の不確実性は分化の程度には影響しない",
      "統合は部門間調整を意味する"
    ],
    answerIndex: 2,
    explanation: "不確実性は分化を促進する。"
  },
  {
    id: "management-14",
    genre: "management",
    question: "事業部制組織の説明として不適切なものはどれか？",
    choices: [
      "市場環境の変化に適応しやすい",
      "事業単位で責任が明確になる",
      "市場環境の変化に素早く対応できず、対応が遅れる",
      "利益責任が明確になる"
    ],
    answerIndex: 2,
    explanation: "事業部制は環境適応力が高い。"
  },
  {
    id: "management-15",
    genre: "management",
    question: "マズローの欲求階層を下段から順に並べた場合に適切なものはどれか？",
    choices: [
      "生理的欲求→安全欲求→所属欲求→尊重欲求→自己実現欲求",
      "安全欲求→生理的欲求→尊重欲求→所属欲求→自己実現欲求",
      "生理的欲求→所属欲求→安全欲求→尊重欲求→自己実現欲求",
      "所属欲求→生理的欲求→安全欲求→尊重欲求→自己実現欲求"
    ],
    answerIndex: 0,
    explanation: "下位から順に生理→安全→所属→尊重→自己実現。"
  },
  {
    id: "management-16",
    genre: "management",
    question: "X理論・Y理論に関する記述として不適切なものはどれか？",
    choices: [
      "X理論は人間は本来怠惰であるとみなす",
      "Y理論は自己統制を前提とする",
      "X理論は統合の原則と自己統制を基軸として展開される",
      "Y理論は人間の自発性を重視する"
    ],
    answerIndex: 2,
    explanation: "統合と自己統制はY理論の考え方。"
  },
  {
    id: "management-17",
    genre: "management",
    question: "ハーズバーグの二要因理論において動機付け要因として含まれないものはどれか？",
    choices: [
      "達成",
      "承認",
      "仕事そのもの",
      "給与"
    ],
    answerIndex: 3,
    explanation: "給与は衛生要因。"
  },
  {
    id: "management-18",
    genre: "management",
    question: "変革志向のリーダーシップ行動として不適切なものはどれか？",
    choices: [
      "将来ビジョンを示す",
      "革新を促す",
      "挑戦的目標を提示する",
      "与えられた資源や人材を無駄なく配置する"
    ],
    answerIndex: 3,
    explanation: "資源効率配置は管理志向的行動。"
  },
  
{
  id: "management-19",
  genre: "management",
  question: "機械的組織と有機的組織の説明について不適切なものはどれか？",
  choices: [
    "機械的組織は公式化・集権化の程度が高い",
    "有機的組織は水平的コミュニケーションを重視する",
    "機械的組織は環境変化に柔軟に適応しやすい",
    "有機的組織は分権的傾向をもつ"
  ],
  answerIndex: 2,
  explanation: "環境変化への柔軟な適応は有機的組織の特徴である。"
},
{
  id: "management-20",
  genre: "management",
  question: "職能別組織の説明として不適切なものはどれか？",
  choices: [
    "専門性を高めやすい",
    "規模の経済を追求しやすい",
    "部門間の連携が円滑であるとは限らない",
    "各事業ごとに利益責任が明確になる"
  ],
  answerIndex: 3,
  explanation: "利益責任が明確になるのは事業部制組織の特徴である。"
},
{
  id: "management-21",
  genre: "management",
  question: "プロジェクトチームに関する記述として不適切なものはどれか？",
  choices: [
    "異種混成集団であることが多い",
    "明確な目標設定が重要である",
    "人間関係や仕事の割り当てに配慮する必要はない",
    "期間限定で編成されることが多い"
  ],
  answerIndex: 2,
  explanation: "異種混成であるため、十分な配慮が必要である。"
},
{
  id: "management-22",
  genre: "management",
  question: "社内ベンチャーに関する記述として不適切なものはどれか？",
  choices: [
    "既存事業の枠内で新規事業を育成する手法である",
    "組織内部の起業家精神を活用する",
    "既存事業の枠組みを超えた新規事業に本格的に取り組む場合に最も適した手法である",
    "新規事業の試行的導入に用いられる"
  ],
  answerIndex: 2,
  explanation: "本格的な枠外展開には分社化等が適する。"
},
{
  id: "management-23",
  genre: "management",
  question: "戦略的提携のメリットとして不適切なものはどれか？",
  choices: [
    "リスクの分散",
    "経営資源の補完",
    "新市場への参入促進",
    "投資の早期回収が必ず保証される"
  ],
  answerIndex: 3,
  explanation: "投資の早期回収が保証されるわけではない。"
},
{
  id: "management-24",
  genre: "management",
  question: "目標による管理（MBO）の効果として不適切なものはどれか？",
  choices: [
    "目標の明確化",
    "部下の動機づけ向上",
    "自己統制の促進",
    "ノルマ達成の徹底のみを目的とする"
  ],
  answerIndex: 3,
  explanation: "MBOはノルマ管理とは異なる。"
},
{
  id: "management-25",
  genre: "management",
  question: "目標による管理の展開ステップにおいて、達成結果の測定・評価で不適切なものはどれか？",
  choices: [
    "目標と実績を照合する",
    "上司と部下が話し合いを行う",
    "評価結果を次期目標に反映させる",
    "マネージャーが独自に情報を入手し一方的に評価する"
  ],
  answerIndex: 3,
  explanation: "双方向の話し合いが重視される。"
},
{
  id: "management-26",
  genre: "management",
  question: "組織文化に関する記述で不適切なものはどれか？",
  choices: [
    "共有された価値観や信念から成る",
    "組織成員の行動に影響を与える",
    "長期的に形成される傾向がある",
    "経営ビジョンに最も影響を与えるのは従業員である"
  ],
  answerIndex: 3,
  explanation: "経営ビジョンは経営者が主導する。"
},
{
  id: "management-27",
  genre: "management",
  question: "現代の米国マネジメントの特徴として適切でないものはどれか？",
  choices: [
    "成果主義の傾向が強い",
    "短期的業績を重視する傾向がある",
    "終身雇用を原則とする",
    "株主価値を重視する"
  ],
  answerIndex: 2,
  explanation: "終身雇用は一般的ではない。"
},
{
  id: "management-28",
  genre: "management",
  question: "フィードラー理論における状況要因に含まれないものはどれか？",
  choices: [
    "リーダーと成員の関係",
    "課題構造",
    "地位権力",
    "組織文化の強さ"
  ],
  answerIndex: 3,
  explanation: "状況要因は3つである。"
},
{
  id: "management-29",
  genre: "management",
  question: "職務再設計に関する記述として適切なものはどれか？",
  choices: [
    "職務拡大と職務充実からなる",
    "職務を単純化することを目的とする",
    "管理者の統制強化を目的とする",
    "職務範囲を縮小することを意味する"
  ],
  answerIndex: 0,
  explanation: "職務拡大と職務充実が中心概念。"
},
{
  id: "management-30",
  genre: "management",
  question: "目標管理の実践的側面として適切なものはどれか？",
  choices: [
    "目標は上司が一方的に設定する",
    "目標は部下が単独で決定する",
    "上司と部下の合意により設定される",
    "目標は毎年変更してはならない"
  ],
  answerIndex: 2,
  explanation: "合意形成が大切。",
},
  {
    id: "hr-1",
    genre: "hr",
    question: "労働基準法で定める法定労働時間は原則として1日何時間か？",
    choices: ["6時間", "7時間", "8時間", "9時間"],
    answerIndex: 2,
    explanation: "原則として1日8時間、1週40時間である。"
  },
  {
    id: "hr-2",
    genre: "hr",
    question: "時間外労働を行わせるために必要な労使協定はどれか？",
    choices: ["36協定", "労働協約", "就業規則", "雇用契約書"],
    answerIndex: 0,
    explanation: "労働基準法第36条に基づくいわゆる36協定が必要である。"
  },
  {
    id: "hr-3",
    genre: "hr",
    question: "年次有給休暇の付与日数は何に応じて決まるか？",
    choices: ["賃金額", "勤続年数", "会社規模", "職種"],
    answerIndex: 1,
    explanation: "勤続年数に応じて法定付与日数が定められている。"
  },
  {
    id: "hr-4",
    genre: "hr",
    question: "解雇に関する記述として正しいものはどれか？",
    choices: [
      "使用者は自由に解雇できる",
      "合理的理由と社会的相当性が必要である",
      "試用期間中は理由不要である",
      "口頭での解雇は常に無効である"
    ],
    answerIndex: 1,
    explanation: "解雇には客観的合理性と社会的相当性が必要である。"
  },
  {
    id: "hr-5",
    genre: "hr",
    question: "労働契約法において定められている原則はどれか？",
    choices: ["成果主義の原則", "信義誠実の原則", "年功序列の原則", "株主優先の原則"],
    answerIndex: 1,
    explanation: "労働契約は信義誠実の原則に従って履行される。"
  },
  {
    id: "hr-6",
    genre: "hr",
    question: "最低賃金は誰が決定するか？",
    choices: ["各企業の代表取締役", "労働組合", "厚生労働大臣または都道府県労働局長", "国会"],
    answerIndex: 2,
    explanation: "最低賃金法に基づき決定される。"
  },
  {
    id: "hr-7",
    genre: "hr",
    question: "就業規則の作成義務があるのは、常時何人以上の労働者を使用する事業場か？",
    choices: ["5人以上", "10人以上", "20人以上", "50人以上"],
    answerIndex: 1,
    explanation: "常時10人以上で就業規則の作成・届出義務がある。"
  },
  {
    id: "hr-8",
    genre: "hr",
    question: "労働組合法の目的として適切なものはどれか？",
    choices: [
      "使用者の利益保護",
      "労働者の団結権等の保障",
      "企業利益の最大化",
      "税収の確保"
    ],
    answerIndex: 1,
    explanation: "団結権・団体交渉権・団体行動権を保障する。"
  },
  {
    id: "hr-9",
    genre: "hr",
    question: "フレックスタイム制に関する説明として正しいものはどれか？",
    choices: [
      "1日の労働時間が固定されている制度である",
      "始業・終業時刻を労働者が選択できる制度である",
      "残業を禁止する制度である",
      "管理監督者のみ適用される制度である"
    ],
    answerIndex: 1,
    explanation: "一定期間の総労働時間の範囲内で始終業時刻を選択できる。"
  },
  {
    id: "hr-10",
    genre: "hr",
    question: "裁量労働制の特徴として適切なものはどれか？",
    choices: [
      "実労働時間に基づき賃金を支払う",
      "あらかじめ定めた時間労働したものとみなす",
      "全労働者に適用できる",
      "残業代は不要である"
    ],
    answerIndex: 1,
    explanation: "みなし労働時間制である。"
  },
  {
    id: "hr-11",
    genre: "hr",
    question: "人事考課の目的として不適切なものはどれか？",
    choices: [
      "昇進・昇格の判断資料",
      "人材育成",
      "処遇決定",
      "私的感情の反映"
    ],
    answerIndex: 3,
    explanation: "客観的・公正な評価が求められる。"
  },
  {
    id: "hr-12",
    genre: "hr",
    question: "OJTの説明として適切なものはどれか？",
    choices: [
      "職場外での集合研修",
      "実務を通じて行う教育訓練",
      "eラーニングのみを指す",
      "管理職のみ対象"
    ],
    answerIndex: 1,
    explanation: "On the Job Trainingの略である。"
  },
  {
    id: "hr-13",
    genre: "hr",
    question: "OFF-JTの説明として適切なものはどれか？",
    choices: [
      "実務を通じた教育",
      "職場外での教育訓練",
      "自己啓発のみ",
      "配置転換"
    ],
    answerIndex: 1,
    explanation: "職場外で体系的に行う教育である。"
  },
  {
    id: "hr-14",
    genre: "hr",
    question: "メンタルヘルス対策における一次予防とは何か？",
    choices: [
      "復職支援",
      "再発防止",
      "発症の未然防止",
      "治療の実施"
    ],
    answerIndex: 2,
    explanation: "発症を未然に防ぐ取り組みである。"
  },
  {
    id: "hr-15",
    genre: "hr",
    question: "パワーハラスメントの要件に含まれないものはどれか？",
    choices: [
      "優越的関係",
      "業務上必要かつ相当な範囲を超える",
      "就業環境を害する",
      "必ず身体的暴力を伴う"
    ],
    answerIndex: 3,
    explanation: "身体的暴力に限られない。"
  },
  {
    id: "hr-16",
    genre: "hr",
    question: "同一労働同一賃金の趣旨として適切なものはどれか？",
    choices: [
      "全社員同一賃金とする",
      "職務内容等が同じなら不合理な待遇差を設けない",
      "正社員の賃金を引き下げる",
      "賞与を廃止する"
    ],
    answerIndex: 1,
    explanation: "不合理な待遇差の禁止が趣旨である。"
  },
  {
    id: "hr-17",
    genre: "hr",
    question: "退職金制度の目的として適切でないものはどれか？",
    choices: [
      "長期勤続の奨励",
      "生活保障",
      "功労報償",
      "短期離職の促進"
    ],
    answerIndex: 3,
    explanation: "一般に長期勤続を促す目的がある。"
  },
  {
    id: "hr-18",
    genre: "hr",
    question: "労働安全衛生法の目的はどれか？",
    choices: [
      "企業利益の拡大",
      "労働者の安全と健康の確保",
      "賃金水準の向上",
      "雇用調整の促進"
    ],
    answerIndex: 1,
    explanation: "安全と健康の確保が目的である。"
  },
  {
    id: "hr-19",
    genre: "hr",
    question: "産前産後休業について正しいものはどれか？",
    choices: [
      "取得は任意である",
      "産前6週間、産後8週間である",
      "男性も取得義務がある",
      "無給が義務である"
    ],
    answerIndex: 1,
    explanation: "原則として産前6週間、産後8週間である。"
  },
  {
    id: "hr-20",
    genre: "hr",
    question: "育児・介護休業法の目的はどれか？",
    choices: [
      "企業収益向上",
      "労働者の職業生活と家庭生活の両立支援",
      "残業時間削減のみ",
      "税制優遇"
    ],
    answerIndex: 1,
    explanation: "両立支援が目的である。"
  },
  {
    id: "hr-21",
    genre: "hr",
    question: "人員計画の目的として適切なものはどれか？",
    choices: [
      "余剰人員の常時確保",
      "必要な人材を適時適所に配置する",
      "人件費の無制限拡大",
      "採用停止"
    ],
    answerIndex: 1,
    explanation: "経営戦略に沿った人員配置が目的である。"
  },
  {
    id: "hr-22",
    genre: "hr",
    question: "配置転換に関する説明として適切なものはどれか？",
    choices: [
      "常に労働者の同意が不要",
      "合理性を欠く場合は無効となることがある",
      "就業規則に定めがあれば無制限に可能",
      "賃金を必ず減額できる"
    ],
    answerIndex: 1,
    explanation: "権利濫用に当たる場合は無効となる。"
  },
  {
    id: "hr-23",
    genre: "hr",
    question: "成果主義賃金制度の課題として指摘されるものはどれか？",
    choices: [
      "動機づけ向上",
      "短期志向の助長",
      "能力開発促進",
      "透明性向上"
    ],
    answerIndex: 1,
    explanation: "短期的成果偏重の問題がある。"
  },
  {
    id: "hr-24",
    genre: "hr",
    question: "コンピテンシー評価の説明として適切なものはどれか？",
    choices: [
      "学歴のみを評価する",
      "成果のみを評価する",
      "高業績者の行動特性を基準に評価する",
      "勤続年数を重視する"
    ],
    answerIndex: 2,
    explanation: "行動特性に着目する評価である。"
  },
  {
    id: "hr-25",
    genre: "hr",
    question: "労使協議制の目的はどれか？",
    choices: [
      "経営権の全面移譲",
      "労使の相互理解促進",
      "解雇の自由化",
      "団体交渉の禁止"
    ],
    answerIndex: 1,
    explanation: "相互理解と円滑な運営が目的である。"
  },
  {
    id: "hr-26",
    genre: "hr",
    question: "非正規雇用の増加に伴う課題として適切なものはどれか？",
    choices: [
      "人材の多様化",
      "処遇格差の問題",
      "雇用安定",
      "教育機会増加"
    ],
    answerIndex: 1,
    explanation: "処遇格差が課題となる。"
  },
  {
    id: "hr-27",
    genre: "hr",
    question: "評価面談の目的として適切なものはどれか？",
    choices: [
      "一方的な通告",
      "フィードバックと目標共有",
      "叱責のみ",
      "記録不要"
    ],
    answerIndex: 1,
    explanation: "双方向コミュニケーションが重要である。"
  },
  {
    id: "hr-28",
    genre: "hr",
    question: "労働時間管理の目的として適切でないものはどれか？",
    choices: [
      "健康確保",
      "法令遵守",
      "生産性向上",
      "長時間労働の常態化"
    ],
    answerIndex: 3,
    explanation: "長時間労働の是正が求められる。"
  },
  {
    id: "hr-29",
    genre: "hr",
    question: "人材ポートフォリオの考え方として適切なものはどれか？",
    choices: [
      "全員同一育成",
      "戦略に応じて人材を分類・配置する",
      "年功のみ重視",
      "短期成果のみ重視"
    ],
    answerIndex: 1,
    explanation: "戦略的人材配置の考え方である。"
  },
  {
    id: "hr-30",
    genre: "hr",
    question: "ダイバーシティ経営の目的として適切なものはどれか？",
    choices: [
      "同質性の強化",
      "多様な人材の活用による価値創造",
      "採用制限",
      "管理の画一化"
    ],
    answerIndex: 1,
    explanation: "多様性を活かす経営である。"
  },
    {
    id: "finance-1",
    genre: "finance",
    question: "ROE（自己資本利益率）の算出式として正しいものはどれか？",
    choices: [
      "純利益 ÷ 総資産",
      "純利益 ÷ 自己資本",
      "営業利益 ÷ 売上高",
      "売上高 ÷ 自己資本"
    ],
    answerIndex: 1,
    explanation: "ROE = 純利益 ÷ 自己資本"
  },
  {
    id: "finance-2",
    genre: "finance",
    question: "ROA（総資産利益率）の算出式として正しいものはどれか？",
    choices: [
      "純利益 ÷ 自己資本",
      "純利益 ÷ 総資産",
      "売上高 ÷ 総資産",
      "営業利益 ÷ 売上高"
    ],
    answerIndex: 1,
    explanation: "ROA = 純利益 ÷ 総資産"
  },
  {
    id: "finance-3",
    genre: "finance",
    question: "損益計算書において売上高から売上原価を差し引いた利益は何か？",
    choices: ["営業利益", "経常利益", "売上総利益", "当期純利益"],
    answerIndex: 2,
    explanation: "売上総利益（粗利益）である。"
  },
  {
    id: "finance-4",
    genre: "finance",
    question: "営業利益の算出式として正しいものはどれか？",
    choices: [
      "売上総利益 − 販売費及び一般管理費",
      "売上高 − 支払利息",
      "売上高 − 法人税等",
      "経常利益 − 特別損失"
    ],
    answerIndex: 0,
    explanation: "営業利益 = 売上総利益 − 販管費"
  },
  {
    id: "finance-5",
    genre: "finance",
    question: "貸借対照表において負債と純資産の合計は何に一致するか？",
    choices: ["売上高", "総資産", "営業利益", "経常利益"],
    answerIndex: 1,
    explanation: "総資産 = 負債 + 純資産"
  },
  {
    id: "finance-6",
    genre: "finance",
    question: "流動比率の算出式として正しいものはどれか？",
    choices: [
      "流動資産 ÷ 流動負債",
      "固定資産 ÷ 固定負債",
      "自己資本 ÷ 総資産",
      "売上高 ÷ 流動資産"
    ],
    answerIndex: 0,
    explanation: "流動比率 = 流動資産 ÷ 流動負債"
  },
  {
    id: "finance-7",
    genre: "finance",
    question: "自己資本比率の算出式として正しいものはどれか？",
    choices: [
      "自己資本 ÷ 総資産",
      "純利益 ÷ 自己資本",
      "売上高 ÷ 総資産",
      "流動資産 ÷ 流動負債"
    ],
    answerIndex: 0,
    explanation: "自己資本比率 = 自己資本 ÷ 総資産"
  },
  {
    id: "finance-8",
    genre: "finance",
    question: "損益分岐点売上高の算出に必要なものはどれか？",
    choices: [
      "固定費と限界利益率",
      "純利益と税率",
      "自己資本比率",
      "減価償却費のみ"
    ],
    answerIndex: 0,
    explanation: "損益分岐点売上高 = 固定費 ÷ 限界利益率"
  },
  {
    id: "finance-9",
    genre: "finance",
    question: "限界利益の算出式として正しいものはどれか？",
    choices: [
      "売上高 − 固定費",
      "売上高 − 変動費",
      "売上総利益 − 販管費",
      "営業利益 − 支払利息"
    ],
    answerIndex: 1,
    explanation: "限界利益 = 売上高 − 変動費"
  },
  {
    id: "finance-10",
    genre: "finance",
    question: "キャッシュフロー計算書に含まれない区分はどれか？",
    choices: ["営業活動", "投資活動", "財務活動", "販売活動"],
    answerIndex: 3,
    explanation: "販売活動という区分はない。"
  },
  {
    id: "finance-11",
    genre: "finance",
    question: "減価償却の目的として適切なものはどれか？",
    choices: [
      "資産の取得価額を一括費用計上する",
      "資産の価値減少分を費用配分する",
      "現金を増加させる",
      "負債を減少させる"
    ],
    answerIndex: 1,
    explanation: "耐用年数にわたり費用配分する。"
  },
  {
    id: "finance-12",
    genre: "finance",
    question: "固定費の特徴として正しいものはどれか？",
    choices: [
      "生産量に比例して増減する",
      "売上高に応じて変動する",
      "一定範囲では操業度に関係なく一定である",
      "常にゼロである"
    ],
    answerIndex: 2,
    explanation: "一定範囲内では固定的である。"
  },
  {
    id: "finance-13",
    genre: "finance",
    question: "変動費の特徴として正しいものはどれか？",
    choices: [
      "操業度に関係なく一定",
      "生産量に比例して増減する",
      "必ず人件費である",
      "必ず減価償却費である"
    ],
    answerIndex: 1,
    explanation: "操業度に比例して変動する。"
  },
  {
    id: "finance-14",
    genre: "finance",
    question: "経常利益とは何か？",
    choices: [
      "営業利益に営業外損益を加減した利益",
      "売上総利益",
      "税引後利益",
      "特別利益のみ"
    ],
    answerIndex: 0,
    explanation: "営業利益 ± 営業外損益 = 経常利益"
  },
  {
    id: "finance-15",
    genre: "finance",
    question: "当期純利益とは何か？",
    choices: [
      "営業利益",
      "経常利益",
      "税引後最終利益",
      "売上総利益"
    ],
    answerIndex: 2,
    explanation: "法人税等控除後の最終利益である。"
  },
  {
    id: "finance-16",
    genre: "finance",
    question: "NPV（正味現在価値）の投資判断基準として正しいものはどれか？",
    choices: [
      "NPVがマイナスなら採択する",
      "NPVがゼロ未満なら採択する",
      "NPVがプラスなら採択する",
      "常に採択する"
    ],
    answerIndex: 2,
    explanation: "NPV > 0 なら投資価値あり。"
  },
  {
    id: "finance-17",
    genre: "finance",
    question: "IRR（内部収益率）とは何か？",
    choices: [
      "投資の回収期間",
      "NPVをゼロにする割引率",
      "売上成長率",
      "自己資本比率"
    ],
    answerIndex: 1,
    explanation: "NPVがゼロとなる割引率である。"
  },
  {
    id: "finance-18",
    genre: "finance",
    question: "配当性向の算出式として正しいものはどれか？",
    choices: [
      "配当金 ÷ 純利益",
      "純利益 ÷ 配当金",
      "配当金 ÷ 売上高",
      "純利益 ÷ 総資産"
    ],
    answerIndex: 0,
    explanation: "配当性向 = 配当金 ÷ 純利益"
  },
  {
    id: "finance-19",
    genre: "finance",
    question: "売上債権回転率が高いことの意味として適切なものはどれか？",
    choices: [
      "資金回収が遅い",
      "資金回収が速い",
      "在庫が多い",
      "利益率が低い"
    ],
    answerIndex: 1,
    explanation: "回転率が高いほど回収が速い。"
  },
  {
    id: "finance-20",
    genre: "finance",
    question: "棚卸資産回転率が低下することの意味として適切なものはどれか？",
    choices: [
      "在庫効率が向上",
      "在庫が滞留している可能性",
      "売上増加",
      "利益増加"
    ],
    answerIndex: 1,
    explanation: "在庫の滞留が示唆される。"
  },
  {
    id: "finance-21",
    genre: "finance",
    question: "財務レバレッジの効果とは何か？",
    choices: [
      "借入を利用して自己資本利益率を高める効果",
      "売上を減少させる効果",
      "固定費をゼロにする効果",
      "税金をなくす効果"
    ],
    answerIndex: 0,
    explanation: "他人資本活用によりROEを高める効果。"
  },
  {
    id: "finance-22",
    genre: "finance",
    question: "EBITDAとは何を示す指標か？",
    choices: [
      "税引後利益",
      "利払前・税引前・減価償却前利益",
      "売上総利益",
      "純資産"
    ],
    answerIndex: 1,
    explanation: "Earnings Before Interest, Taxes, Depreciation and Amortization"
  },
  {
    id: "finance-23",
    genre: "finance",
    question: "直接原価計算の特徴として正しいものはどれか？",
    choices: [
      "固定費を製品原価に含める",
      "変動費のみを製品原価に含める",
      "全費用を原価に含めない",
      "利益計算を行わない"
    ],
    answerIndex: 1,
    explanation: "変動費のみを原価に算入する。"
  },
  {
    id: "finance-24",
    genre: "finance",
    question: "全部原価計算の特徴として正しいものはどれか？",
    choices: [
      "変動費のみ含める",
      "固定費を含めない",
      "製造にかかるすべての原価を含める",
      "利益を含める"
    ],
    answerIndex: 2,
    explanation: "製造原価の全てを含める。"
  },
  {
    id: "finance-25",
    genre: "finance",
    question: "資本コストとは何か？",
    choices: [
      "借入金残高",
      "資金調達に伴う期待収益率",
      "売上原価",
      "人件費"
    ],
    answerIndex: 1,
    explanation: "投資家が期待する収益率。"
  },
  {
    id: "finance-26",
    genre: "finance",
    question: "WACCとは何か？",
    choices: [
      "売上成長率",
      "加重平均資本コスト",
      "営業利益率",
      "流動比率"
    ],
    answerIndex: 1,
    explanation: "Weighted Average Cost of Capital"
  },
  {
    id: "finance-27",
    genre: "finance",
    question: "フリーキャッシュフローとは何か？",
    choices: [
      "借入金",
      "税金",
      "事業活動から生み出され自由に使える現金",
      "売上総利益"
    ],
    answerIndex: 2,
    explanation: "企業が自由に使える現金。"
  },
  {
    id: "finance-28",
    genre: "finance",
    question: "売上高営業利益率の算出式として正しいものはどれか？",
    choices: [
      "営業利益 ÷ 売上高",
      "売上高 ÷ 営業利益",
      "純利益 ÷ 売上高",
      "売上総利益 ÷ 総資産"
    ],
    answerIndex: 0,
    explanation: "営業利益 ÷ 売上高"
  },
  {
    id: "finance-29",
    genre: "finance",
    question: "固定比率の算出式として正しいものはどれか？",
    choices: [
      "固定資産 ÷ 自己資本",
      "自己資本 ÷ 固定資産",
      "流動資産 ÷ 流動負債",
      "売上高 ÷ 固定資産"
    ],
    answerIndex: 0,
    explanation: "固定比率 = 固定資産 ÷ 自己資本"
  },
  {
    id: "finance-30",
    genre: "finance",
    question: "企業価値評価においてDCF法で行うことは何か？",
    choices: [
      "売上を単純合計する",
      "将来キャッシュフローを現在価値に割り引く",
      "純利益を2倍にする",
      "自己資本比率を計算する"
    ],
    answerIndex: 1,
    explanation: "将来CFを割引現在価値に換算する方法。"
  }
]

export default questions
