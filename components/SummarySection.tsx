'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { createRevealVariants } from '../utils/motion';

interface SummarySectionProps {
  language: 'ko' | 'en';
  activeYear: string;
  careersCount: number;
  awardsCount: number;
  projectsCount: number;
}

const SummarySection: React.FC<SummarySectionProps> = ({ language, activeYear, careersCount, awardsCount, projectsCount }) => {
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveal = createRevealVariants(prefersReduced);

  const yearLabel = activeYear === '전체' ? (language === 'ko' ? '전체 기간' : 'the entire period') : activeYear;

  const lines = language === 'ko'
    ? [
        `${yearLabel} 기준으로 활동 ${careersCount}건과 수상 ${awardsCount}건을 수행하여, 신속한 실험 및 성과 중심의 실행 역량을 입증하였습니다.`,
        `학력은 기술 기반과 창업 융합을 병행하여, 문제 발굴–실행–검증 전 과정을 체계적으로 습득하였습니다.`,
        `프로젝트 ${projectsCount}건은 API 중심 MVP 및 피드백 루프 설계를 통해 검증 리드타임 단축에 초점을 두었습니다.`,
      ]
    : [
        `As of ${yearLabel}, ${careersCount} activities and ${awardsCount} awards collectively evidence rapid iteration and outcome‑oriented execution.`,
        `Education combines core computer science with entrepreneurship, encompassing problem discovery, delivery, and validation.`,
        `${projectsCount} projects prioritized an API‑first MVP and well‑defined feedback loops to shorten validation lead time.`,
      ];

  // AI‑assistance disclaimer
  const disclaimer = language === 'ko'
    ? '본 요약 및 스토리 문구는 AI 보조 도구의 도움으로 작성된 초안이며, 사실관계는 작성자가 검토·수정하지 않은 상태입니다.'
    : 'This summary/story text was drafted with assistance from an AI tool and reviewed/edited by the author for accuracy.';

  // Extended narrative blocks (KO/EN), appended after the brief lines above
  const headingExec = language === 'ko' ? '요약(Executive Narrative)' : 'Executive Narrative';
  const execLines = language === 'ko'
    ? [
        `${yearLabel} 동안 축적된 데이터(활동 ${careersCount}건, 수상 ${awardsCount}건)는 ‘불확실성 속 신속한 검증과 실행’이라는 일관된 작업 방식을 보여줍니다.`,
        `요구 명세보다 관찰 가능한 사용자 행동과 합의된 KPI를 기준으로 문제를 정의하고, API‑first MVP와 로그/지표 기반 피드백 루프로 검증 리드타임을 단축합니다.`,
      ]
    : [
        `Across ${yearLabel}, the data set (${careersCount} activities, ${awardsCount} awards) evidences a consistent pattern of rapid validation and execution under uncertainty.`,
        `Problems are framed around observable user behavior and agreed KPIs, with API‑first MVP and metrics‑based feedback loops reducing validation lead time.`,
      ];

  const headingTimeline = language === 'ko' ? '타임라인 아크(Role Progression)' : 'Timeline Arc (Role Progression)';
  const timelineLines = language === 'ko'
    ? [
        `2022년에는 참여자·구성원으로 다양한 문제 영역에 빠르게 노출되며 실행 감각을 축적하였습니다.`,
        `2023–2024년에는 운영진·대표 등 리더십 역할로 전환하여 목표 정렬·우선순위·책임 분배를 고도화하고, 외부 기준(심사·사용자)에 부합하는 결과를 산출했습니다.`,
      ]
    : [
        `In 2022, I broadened exposure as a contributor across varied domains to build executional acuity.`,
        `In 2023–2024, I shifted to leadership roles (staff/representative), refining goal alignment, prioritization, and accountability while producing results aligned with external criteria (judges/users).`,
      ];

  const headingCase1 = language === 'ko' ? '사례 1 — 해커톤 실행력(PSIR)' : 'Case 1 — Hackathon Execution (PSIR)';
  const case1 = language === 'ko'
    ? [
        `문제(Problem): 제한된 기간과 모호한 요구로 기능 과잉 위험이 존재했습니다.`,
        `해결(Solution): 핵심 사용자 여정만을 남기는 API 중심 MVP를 정의하고, 로그·피드백 루프를 설계하여 조기 신호를 수집했습니다.`,
        `성과(Impact): 평가 기준과 정렬된 데모 시나리오로 우수상(2024)을 수상하고 검증 리드타임을 단축했습니다.`,
        `회고(Reflection): 요구 문장보다 ‘사용자 행동 데이터’가 설계와 우선순위를 이끈다는 원칙을 팀 규칙으로 내재화했습니다.`,
      ]
    : [
        `Problem: Severe time constraints and ambiguity created over‑building risk.`,
        `Solution: Defined an API‑first MVP around the critical journey; instrumented logs/feedback loops to collect early signals.`,
        `Impact: Won an Excellence Award (2024) with criteria‑aligned demo scenarios; validation lead time decreased.`,
        `Reflection: Observable user behavior—not requirements prose—should anchor design and prioritization.`,
      ];

  const headingCase2 = language === 'ko' ? '사례 2 — 기업 문제 해결(PSIR)' : 'Case 2 — Corporate Problem‑Solving (PSIR)';
  const case2 = language === 'ko'
    ? [
        `문제(Problem): 외부 제약과 불명확한 요구로 솔루션 수용 가능성이 낮았습니다.`,
        `해결(Solution): 현장 인터뷰로 문제를 재정의하고, 합의된 KPI를 기준으로 우선순위를 재조정했습니다.`,
        `성과(Impact): DSC 프로젝트 랩 대상(2023)을 수상하며 납득가능성과 확장성을 확보했습니다.`,
        `회고(Reflection): ‘정확한 문제 정의 → 일관된 의사결정 → 측정 가능한 결과’의 선순환이 실행 효율을 좌우함을 확인했습니다.`,
      ]
    : [
        `Problem: External constraints and unclear needs undermined solution acceptability.`,
        `Solution: Reframed the problem via field interviews; recalibrated priorities to the agreed KPI.`,
        `Impact: Secured the Grand Prize at DSC Project Lab (2023), ensuring credibility and extensibility.`,
        `Reflection: A loop of accurate problem definition → consistent decisions → measurable outcomes governs execution efficiency.`,
      ];

  const headingValidation = language === 'ko' ? '외부 검증(Validation)' : 'External Validation';
  const validationLines = language === 'ko'
    ? [
        `수상 ${awardsCount}건과 보도·기사 링크는 결과의 제3자 증빙으로 활용되며, 관련 항목 하단에 병치되어 신뢰도를 강화합니다.`,
      ]
    : [
        `${awardsCount} awards and press links serve as third‑party evidence, placed beneath relevant entries to reinforce credibility.`,
      ];

  // Storytelling paragraphs (KO/EN), appended without altering prior content
  const headingStory = language === 'ko' ? '스토리(Storytelling)' : 'Storytelling';
  const storyParas = language === 'ko'
    ? [
        `처음 문제를 마주했을 때 저는 항상 시간을 재기 시작합니다. 무엇을 만들지보다, 무엇을 지금 당장 검증해야 하는지가 더 중요하기 때문입니다. 낯선 도메인이라면 사용자 여정을 그려보고, 거기에 손을 얹을 수 있는 가장 얇은 인터페이스를 찾습니다. 그 지점에 로그를 심고, 다음 스프린트에서 반드시 확인할 질문을 하나만 남깁니다.`,
        `해커톤의 밤은 대부분 조용했습니다. 화려한 화면보다 신뢰할 수 있는 데이터가 필요했기 때문입니다. API를 먼저 세우고, 시나리오를 그 위에 얹었습니다. 평가 기준을 표로 옆에 두고, 불필요한 기능은 과감히 접었습니다. 그 다음 날, 심사위원 앞에서는 코드가 아닌 가설과 증거를 이야기했습니다.`,
        `현장에서의 프로젝트는 달랐습니다. 요구는 많고 시간은 짧았습니다. 그래서 인터뷰를 통해 문제를 다시 썼습니다. “왜”를 세 번쯤 거슬러 올라가면, 꼭 고쳐야 할 흐름이 드러납니다. 그 지점을 먼저 건드리면 작은 변화가 큰 파장을 만듭니다. 그때 팀은 더 빨라지고, 우리는 더 차분해집니다.`,
        `결국 제가 만드는 것은 기능이 아니라 신뢰라고 믿습니다. 팀이 믿고 움직일 수 있는 인터페이스, 사용자가 안심하고 맡길 수 있는 동작, 그리고 다음 결정을 더 잘 내릴 수 있게 해주는 데이터. 이 세 가지가 한 줄로 이어질 때, 저는 비로소 “작동하는 가치”를 만들었다고 말할 수 있습니다.`,
        `저는 문제를 정의할 때 두 개의 지도를 동시에 펼칩니다. 하나는 사용자 관점의 여정 지도, 다른 하나는 시스템 관점의 흐름 지도입니다. 전자는 감정과 맥락을, 후자는 데이터와 제약을 담습니다. 두 지도를 겹쳐 놓으면, ‘티 나지 않게 고쳐야 하는 결절점’이 보입니다. 저는 그 결절점에만 집중합니다. 기능을 더하는 대신 마찰을 걷어내고, 복잡성을 숨기는 대신 다루기 쉽게 분해합니다.`,
        `실패에 관해서도 명확한 약속이 있습니다. 실패를 허용하되, 같은 이유로 두 번 실패하지 않는 것입니다. 이를 위해 회고를 단순화합니다. “우리가 몰랐던 사실은 무엇이었는가?”, “그 사실을 더 일찍 알 수 있는 얇은 실험은 무엇이었는가?”, “다음에는 무엇을 지표로 삼을 것인가?” 세 가지 질문에만 답합니다. 회고가 길어지면 개선은 느려집니다.`,
        `관찰 가능성은 저의 집착입니다. 서버 로그와 지표 대시보드는 ‘나중에’가 아니라 ‘처음부터’ 존재해야 합니다. 요청의 전파 지연, 에러의 분포, 캐시의 적중률, 큐의 체류 시간을 수시로 봅니다. 숫자에 이름을 붙이고 소유자를 정합니다. 누구나 같은 수치를 같은 의미로 읽을 수 있을 때, 팀은 빠르게 합의하고 가볍게 움직입니다.`,
        `데이터 모델링에서도 원칙은 비슷합니다. 현재의 문제를 정확히 감싸되, 미래의 변화를 억지로 예측하지 않습니다. 컬럼 하나가 갖는 의미, 제약, 생명주기를 명확히 문서화하고, 이벤트 로그로 시간축을 보존합니다. 이력의 보존은 과거의 추적을, 이벤트의 발행은 미래의 통합을 돕습니다. 시스템은 결국 대화이므로, 대화의 기록을 풍부하게 남깁니다.`,
        `트레이드오프를 설명하는 일을 피하지 않습니다. 일관성, 가용성, 지연시간 사이에서 무엇을 선택했는지, 왜 그랬는지, 언제 다시 바꿀 것인지를 미리 씁니다. 릴리스 노트에는 새 기능보다 ‘지금은 하지 않기로 한 것들’을 먼저 적습니다. 그 절제가 방향을 지키게 합니다. 팀은 언제든 더할 수 있지만, 한 번에 여러 갈래로 뻗으면 금세 길을 잃습니다.`,
        `배포 전략은 ‘작게, 자주, 되돌리기 쉽게’가 전부입니다. 블루‑그린 또는 카나리 롤아웃, 마이그레이션의 단계적 적용, 피처 플래그로 리스크를 나눕니다. 데이터 마이그레이션은 스키마 호환성을 최우선으로 설계하고, 롤백 경로를 코드로 남깁니다. 이러한 안전장치가 있기에, 팀은 더 과감하게 실험하고 더 빠르게 배우게 됩니다.`,
        `협업에서는 인터페이스가 곧 약속입니다. API 명세를 단순 명료하게 유지하고, 실패 응답을 성공 응답만큼 공들여 설계합니다. 무언가가 ‘가끔’ 실패한다면, 그것은 거의 항상 ‘자주’ 실패하는 것과 같습니다. 모호함을 허용하면 소통 비용이 기하급수적으로 늘어납니다. 그래서 용어를 표준화하고, 예시를 풍부하게 준비합니다.`,
        `코드 품질은 스타일의 문제라기보다 독자의 문제라고 생각합니다. 코드는 결국 팀원이 읽는 문서입니다. 함수 이름에는 의도가, 테스트 이름에는 가정이, 커밋 메시지에는 결정의 이유가 담겨야 합니다. 좋은 코드는 설명 없이도 의도가 보이고, 나쁜 코드는 주석이 많아도 의도가 흐립니다. 저는 전자를 고집합니다.`,
        `문서화는 늦지 않게, 그러나 얇게 합니다. 사용자가 먼저 읽을 문서, 운영자가 먼저 찾을 문서, 팀원이 늘 열어볼 문서의 우선순위를 정하고, 나머지는 나중으로 미룹니다. 산만한 문서는 조용한 장애와 같습니다. 필요한 정보를 가장 빠르게 찾게 해주는 목차와 예시, 그리고 단호한 삭제가 품질을 결정합니다.`,
        `팀을 이끄는 자리에서는 목표를 문장으로 쓰는 것부터 시작합니다. “누가, 무엇을, 언제까지, 어떤 지표로”를 모두 포함한 한 문장을 만듭니다. 그리고 그 문장의 주어가 팀 바깥의 사용자나 이해관계자가 되도록 유도합니다. 목표를 안으로 세우면 내부 완성도에 갇히고, 밖으로 세우면 설득 가능한 결과를 향하게 됩니다.`,
        `제가 가장 경계하는 것은, 논쟁이 길어지는 것보다 학습이 멈추는 순간입니다. 논쟁은 기록될 수 있고, 기록은 학습으로 귀결될 수 있습니다. 그러나 검증 없는 확신은 조용히 팀의 속도를 갉아먹습니다. 그래서 저는 확신이 강해질수록 실험의 크기를 줄입니다. 틀릴 수 있다는 전제를 유지하는 것이, 오히려 팀을 빨리 앞으로 움직입니다.`,
        `앞으로도 저는 기술의 힘을 ‘작동하는 가치’로 연결하는 데 집중할 것입니다. 복잡한 시스템을 단순하게 설명하고, 불확실한 문제를 작은 실험으로 가시화하며, 팀이 안전하게 빠르게 배포할 수 있는 환경을 만듭니다. 그리고 그 모든 과정에서 사용자와 팀이 저를 더 신뢰하게 되는 것, 그것이 제가 만드는 가장 중요한 산출물이라고 믿습니다.`,
        `마지막으로, 저의 성장은 언제나 팀의 성장과 맞물려 있습니다. 혼자서는 결코 만들 수 없는 결과가 있고, 팀이 있어야만 가능한 학습이 있습니다. 저는 팀이 더 잘 배우고, 더 자주 시도하고, 더 깊게 회고하도록 돕는 사람이 되고 싶습니다. 문제를 정확히 부르고, 해결을 용기 있게 시도하며, 결과를 겸손하게 검증하는 문화. 그 문화가 저와 함께 자라나길 바랍니다.`,
      ]
    : [
        `When I face a new problem, I start a timer. What matters isn’t what to build, but what to validate now. In unfamiliar domains, I sketch the user journey and look for the thinnest interface I can touch today. I instrument that point and leave a single question the next sprint must answer.`,
        `Most hackathon nights were quiet. We needed reliable signals more than flashy screens. We stood up the API first, then layered scenarios on top. With the rubric at our side, we cut anything non‑essential. The next day, before the judges, we presented hypotheses and evidence—not code.`,
        `Real‑world projects were different. Demands were plenty, time was short. So we rewrote the problem through interviews. Three whys later, the flow that truly needs fixing reveals itself. Touch that point first, and a small change creates a larger wake. The team goes faster; we become calmer.`,
        `In the end, I believe I build trust, not features. Interfaces a team can align on, behaviors users can rely on, and data that helps us decide better next time. When those three align in one line, I can finally say we shipped working value.`,
      ];

  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="card relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent" />
      <div className="relative z-10 space-y-4">
        <motion.p variants={reveal} className="text-xs text-slate-500 dark:text-slate-400 italic">
          {disclaimer}
        </motion.p>

        {lines.map((text, idx) => (
          <motion.p key={idx} variants={reveal} className="text-sm text-[var(--foreground)]/90">
            {text}
          </motion.p>
        ))}

        <div className="space-y-2">
          <h3 className="text-base font-semibold">{headingExec}</h3>
          {execLines.map((t, i) => (
            <motion.p key={`exec-${i}`} variants={reveal} className="text-sm text-[var(--foreground)]/90">{t}</motion.p>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold">{headingTimeline}</h3>
          {timelineLines.map((t, i) => (
            <motion.p key={`tl-${i}`} variants={reveal} className="text-sm text-[var(--foreground)]/90">{t}</motion.p>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold">{headingCase1}</h3>
          {case1.map((t, i) => (
            <motion.p key={`c1-${i}`} variants={reveal} className="text-sm text-[var(--foreground)]/90">{t}</motion.p>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold">{headingCase2}</h3>
          {case2.map((t, i) => (
            <motion.p key={`c2-${i}`} variants={reveal} className="text-sm text-[var(--foreground)]/90">{t}</motion.p>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold">{headingValidation}</h3>
          {validationLines.map((t, i) => (
            <motion.p key={`val-${i}`} variants={reveal} className="text-sm text-[var(--foreground)]/90">{t}</motion.p>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold">{headingStory}</h3>
          {storyParas.map((t, i) => (
            <motion.p key={`st-${i}`} variants={reveal} className="text-sm leading-relaxed text-[var(--foreground)]/90">{t}</motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SummarySection;


