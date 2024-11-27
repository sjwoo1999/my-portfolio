import React from 'react';
import EducationCard from './EducationCard';
import CareerCard from './CareerCard';
import AwardCard from './AwardCard';
import ProjectCard from './ProjectCard';
import styles from '../styles/TabContent.module.css';

interface TabContentProps {
  activeTab: string;
  activeYear: string;
}

interface Activity {
  organization: string;
  position: string;
  year: string;  // 연도 정보
  certificate: string;
}

interface Award {
  title: string;
  award: string;
  organization: string;
  certificate: string;
  year: string;  // 수상 연도 정보 (UI에는 표시하지 않음)
  awardDate: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab, activeYear }) => {
  // 연도별 활동 목록 (수료와 참여를 분리하여 수정된 활동 내용)
  const activities: Record<string, Activity[]> = {
    '2022': [
      { organization: '멋쟁이사자처럼 대학 고려대학교(세종) 부원', position: '활동', year: '2022', certificate:'/images/Career/2022/' },
      { organization: '고려대학교 메타버스 학회 유나이티드', position: '수료', year: '2022', certificate:'/images/Career/2022/' },
      { organization: '[멋쟁이사자처럼 X 넥슨] MOD Supporters Hackathon', position: '참여', year: '2022', certificate:'/images/Career/2022/' },
      { organization: '[멋쟁이사자처럼 X 넥슨] MapleStory Worlds Super Hackathon', position: '참여', year: '2022', certificate:'/images/Career/2022/' },
      { organization: '고려대학교 컴퓨터융합소프트웨어학과 학과 소모임 KUDING 운영진', position: '활동', year: '2022', certificate:'/images/Career/2022/' },
    ],
    '2023': [
      { organization: '멋쟁이사자처럼 대학 11기 고려대학교(세종) 운영진', position: '활동', year: '2023', certificate:'/images/Career/2023/' },
      { organization: '언더독 레볼루션 창업 트랙 운영진', position: '활동', year: '2023', certificate:'/images/Career/2023/' },
      { organization: '2023 혁신창업스쿨 1단계', position: '수료', year: '2023', certificate:'/images/Career/2023/' },
      { organization: 'SKYCC-PAIRING', position: '참여', year: '2023', certificate:'/images/Career/2023/' },
      { organization: 'SB통합 서포터즈 2기', position: '수료', year: '2023', certificate:'/images/Career/2023/' },
      { organization: '멋쟁이사자처럼 대학 11기 아이디어톤', position: '참여', year: '2023', certificate:'/images/Career/2023/' },
      { organization: 'Pitching In Sejong 7월', position: '참여', year: '2023', certificate:'/images/Career/2023/' },
      { organization: '미래직업크리에이트 프로젝트', position: '활동', year: '2023', certificate:'/images/Career/2023/' },
      { organization: '상리 로컬 크리에이터 역량 강화 교육', position: '활동', year: '2023', certificate:'/images/Career/2023/' },
      { organization: '멋쟁이사자처럼 대학 11기 중앙해커톤', position: '참여', year: '2023', certificate:'/images/Career/2023/' },
      { organization: '제10회 대한민국 SW융합 해커톤', position: '참여', year: '2023', certificate:'/images/Career/2023/' },
      { organization: '2023 SW융합클러스터 2.0 디지털 콘텐츠 DX 해커톤', position: '참여', year: '2023', certificate:'/images/Career/2023/' },
      { organization: '구름톤 유니브 1기 중앙운영진', position: '활동', year: '2023', certificate:'/images/Career/2023/' },
    ],
    '2024': [
      { organization: '멋쟁이사자처럼 대학 12기 고려대학교(세종) 운영진', position: '활동', year: '2024', certificate:'/images/Career/2024/' },
      { organization: '언더독 레볼루션 창업 트랙 운영진', position: '활동', year: '2024', certificate:'/images/Career/2024/' },
      { organization: '구름톤 유니브 2기 고려대학교(세종) 대표', position: '활동', year: '2024', certificate:'/images/Career/2024/9oormthon_2nd.png' },
      { organization: '구름톤 유니브 3기 고려대학교(세종) 대표', position: '활동', year: '2024', certificate:'/images/Career/2024/' },
      { organization: '스파르타코딩클럽 내일배움캠프 Node.js 4기', position: '수료', year: '2024', certificate:'/images/Career/2024/sparta.png' },
      { organization: '멋쟁이사자처럼 대학 12기 아이디어톤', position: '참여', year: '2024', certificate:'/images/Career/2024/' },
      { organization: '전국 대학생 창업 네트워크 Brave - 우주유영 TF', position: '활동', year: '2024', certificate:'/images/Career/2024/' },
      { organization: '2024 하나 소셜벤처 유니버시티', position: '수료', year: '2024', certificate:'/images/Career/2024/hana_social.png' },
      { organization: '2024 SW융합클러스터 2.0 디지털 콘텐츠 DX 해커톤', position: '참여', year: '2024', certificate:'/images/Career/2024/' },
      { organization: '멋쟁이사자처럼 대학 12기 중앙해커톤', position: '참여', year: '2024', certificate:'/images/Career/2024/' },
      { organization: '제11회 대한민국 SW융합 해커톤', position: '참여', year: '2024', certificate:'/images/Career/2024/' },
      { organization: '고려대학교 세종 창업동아리 단계상승 피칭데이', position: '참여', year: '2024', certificate:'' },
      { organization: '2024년 예비창업패키지 사전인큐베이팅(거점형) - 이그니션 스타트업톤 [20명 中 10명 선발]', position: '참여', year: '2024', certificate:'/images/Career/2024/' },
      { organization: '2024년 예비창업패키지 사전인큐베이팅(거점형) - 스파크 투 스타트업', position: '참여', year: '2024', certificate:'/images/Career/2024/' },
      { organization: '2024년 예비창업패키지 사전인큐베이팅(거점형) - 앙트십 익스플로전', position: '참여', year: '2024', certificate:'/images/Career/2024/' },
      { organization: '2024년 예비창업패키지 사전인큐베이팅(거점형) - 파이널 플레임', position: '참여', year: '2024', certificate:'/images/Career/2024/' },
      { organization: '오렌지 플래닛 Learning Mate 3기', position: '수료', year: '2024', certificate:'/images/Career/2024/learning_mate.png' },
    ],
  };

  // 연도별 수상 경력 목록
  const awards: Record<string, Award[]> = {
    '2022': [
      { title: '컴퓨터융합소프트웨어학과 제2회 KUDING 프로그래밍 경진대회', award: '장려상', organization: '고려대학교', certificate: '/images/Award/2022/award_kuding_2022.png', year: '2022', awardDate: '2022년 06월 29일' },
    ],
    '2023': [
      { title: '멋쟁이사자처럼 운영진 해커톤 벚꽃톤', award: '우수상', organization: '멋쟁이사자처럼', certificate: '/images/Award/2023/seasonthon.png', year: '2023', awardDate: '2023년 02월 25일' },
      { title: 'DSC 기업애로기술해결 프로젝트 랩', award: '대상', organization: 'DSC', certificate: '/images/Award/2023/dsc.png', year: '2023', awardDate: '2023년 07월 14일' },
      { title: '호서대학교 창업중심대학 창업로드캠프', award: '장려상', organization: '호서대학교', certificate: '/images/Award/2023/startup_road.png', year: '2023', awardDate: '2023년 05월 23일' },
      { title: '멋쟁이사자처럼 아이디어톤 고려대 세종', award: '3등', organization: '멋쟁이사자처럼', certificate: '/images/award_logo.png', year: '2023', awardDate: '추후 기재 예정' },
      { title: '2023 SW융합클러스터 2.0 디지털 콘텐츠 DX 해커톤', award: 'SW융합클러스터 인재상', organization: '고려대학교 세종산학협력단, 홍익대학교 세종캠퍼스 산학협력단', certificate: '/images/Award/2023/sw_cluster.png', year: '2023', awardDate: '2023년 09월 23일' },
      { title: '세종 UNION 청년창업캠프', award: '열정이뜨겁상', organization: '세종 UNION', certificate: '/images/award_logo.png', year: '2023', awardDate: '추후 기재 예정' },
    ],
    '2024': [
      { title: '제11회 대한민국 SW 융합 해커톤 대회', award: '우수상', organization: '대한민국', certificate: '/images/Award/2024/sw_convergence.jpg', year: '2024', awardDate: '2024년 08월 25일' },
      { title: 'THE CHALLENGE SEASON.2', award: '우수상', organization: '고려대 세종', certificate: '/images/Award/2024/the_challenge.jpg', year: '2024', awardDate: '2024년 10월 02일'},
      { title: 'DSC 지역혁신 플랫폼 운영사업 롤링캠프', award: '우수상', organization: 'DSC', certificate: '/images/Award/2024/award_logo.png', year: '2024', awardDate: '추후 기재 예정' },
    ],
  };

  // 연도별 필터링을 적용한 활동 및 수상 경력 목록 가져오기
  const getFilteredActivities = () => {
    if (activeYear === '전체') {
      return Object.entries(activities)
        .flatMap(([year, activities]) =>
          activities.map((activity) => ({ ...activity }))
        )
        .reverse(); // 내림차순 정렬
    }
    return activities[activeYear]?.map((activity) => ({ ...activity })).reverse() || [];
  };

  const getFilteredAwards = () => {
    if (activeYear === '전체') {
      return Object.entries(awards)
        .flatMap(([year, awards]) =>
          awards.map((award) => ({ ...award }))
        )
        .reverse(); // 내림차순 정렬
    }
    return awards[activeYear]?.map((award) => ({ ...award })).reverse() || [];
  };

  const filteredActivities = getFilteredActivities();
  const filteredAwards = getFilteredAwards();

  return (
    <div className={styles.content}>
      {activeTab === 'education' && (
        <>
          <h2 className={styles.title}>학력</h2>
          <EducationCard
            logo="/images/Education/crimson1positive.gif"
            schoolName="고려대학교 세종캠퍼스"
            major="컴퓨터융합소프트웨어학과"
            period="2019년 3월 - 2025년 12월"
          />
          <EducationCard
            logo="/images/Education/crimson1positive.gif"
            schoolName="고려대학교 서울캠퍼스"
            major="기술창업 융합전공"
            period="2025년 3월 - 2025년 12월"
          />
        </>
      )}

      {activeTab === 'career' && (
        <>
          <h2 className={styles.title}>활동 이력</h2>
          {filteredActivities.map((activity, index) => (
            <CareerCard
              key={`${activity.year}-${index}`}
              year={activity.year}
              organization={activity.organization}
              position={activity.position}
              period={activity.year}
              certificate={activity.certificate}
            />
          ))}
        </>
      )}

      {activeTab === 'awards' && (
        <>
          <h2 className={styles.title}>수상 경력</h2>
          {filteredAwards.map((award, index) => (
            <AwardCard
              key={`${award.year}-${index}`}
              title={award.title}
              award={award.award}
              organization={award.organization}
              certificate={award.certificate}
              awardDate={award.awardDate}
            />
          ))}
        </>
      )}

      {activeTab === 'projects' && (
        <>
          <h2 className={styles.title}>프로젝트</h2>
          <ProjectCard
            logo="/images/project_logo.png"
            projectName="샘플 프로젝트"
            description="이것은 샘플 프로젝트입니다."
            period="2023년"
          />
        </>
      )}
    </div>
  );
};

export default TabContent;
