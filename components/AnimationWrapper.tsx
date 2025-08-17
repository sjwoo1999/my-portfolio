"use client";

import { useEffect, useState } from "react";

export default function AnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 3000); // 3초 후 애니메이션 종료
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showAnimation ? (
        <div className="envelopeAnimation">
          {/* 여기에 편지봉투 또는 초기 애니메이션 컴포넌트를 추가하세요 */}
          <div className="envelope">📩</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
