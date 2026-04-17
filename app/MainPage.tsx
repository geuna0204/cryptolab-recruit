import IconCalendar from "@/assets/icon_calendar.svg";
import IconMail from "@/assets/icon_mail.svg";
import IconSchool from "@/assets/icon_school.svg";
import IconWork from "@/assets/icon_work.svg";
import IconDownload from "@/assets/icon_download.svg";
import IconLink from "@/assets/icon_link.svg";

const CRYPTOLAB_URL = "https://www.cryptolab.co.kr/";
const RECRUIT_POSITIONS = [
  {
    title: "정규직",
    icon: "work",
    desc: "Full-time",
  },
  {
    title: "계약직",
    icon: "calendar",
    desc: "Contract",
  },
  {
    title: "인턴",
    icon: "school",
    desc: "Internship",
  },
];

const RecruitIcon = ({ target }: { target: string }) => {
  const svgStyle = "w-6 h-6 fill-blue-500";
  switch (target) {
    case "work":
      return <IconWork className={`${svgStyle}`} />;
    case "calendar":
      return <IconCalendar className={`${svgStyle}`} />;
    case "school":
      return <IconSchool className={`${svgStyle}`} />;
    default:
      return <IconCalendar className={`${svgStyle}`} />;
  }
};

const MainPage = () => {
  const styles = {
    titleTag: "text-blue-500 text-xs font-bold",
    contentLayout: "flex flex-col gap-6",
    listLayout: "list-disc gap-2 ml-4 flex flex-col",
    hr: "border-gray-200",
  };

  return (
    <div className="px-4 max-w-180 w-full py-16 flex flex-col gap-8">
      <h1>크립토랩과 함께할 분을 찾습니다.</h1>
      <p className="text-blue-500 font-bold text-xl">
        “크립토랩은 세계를 무대로 암호 기술의 한계를 넘어가는 도전을 이어가고
        있습니다. <br /> 치열하게 고민하며, 함께 세상을 변화시킬 동료를
        기다립니다.”
      </p>
      <div className={`${styles.contentLayout}`}>
        <div>
          <span className={`${styles.titleTag}`}>COMPANY</span>
          <h2>크립토랩 소개</h2>
        </div>
        <ul className={`${styles.listLayout}`}>
          <li>
            암호학계 석학인 천정희 대표가 창업한 기술 기반 스타트업으로,
            <b> 동형암호(Fully Homomorphic Encryption, FHE)</b> 기술을 기반으로
            데이터 보안과 AI기술을 연구·개발하고 있습니다.
          </li>
          <li>
            민감한 데이터를 복호화하지 않고도 안전하게 활용할 수 있는 보안
            기술과 제품을 개발하며, 세계적 수준의 암호 연구 역량을 바탕으로
            <b> 차세대 프라이버시 보호 기술</b>의 제품화와 사업화를 추진하고
            있습니다.
          </li>
          <li>
            2022년 <b>210억원 규모의 시리즈 A 투자</b>를 유치하였으며, 현재
            금융, 통신, 의료, 국방 등 다양한 영역에서 기술 적용을 확대하고
            있습니다.
          </li>
        </ul>
      </div>

      <hr className={`${styles.hr}`} />

      <div className={`${styles.contentLayout}`}>
        <div className={`${styles.contentLayout}`}>
          <div>
            <span className={`${styles.titleTag}`}>POSITION</span>
            <h2>채용 포지션</h2>
          </div>
          <ul className={`${styles.listLayout}`}>
            <li>
              크립토랩은 지원자의 경험과 강점, 그리고 커리어 방향에 맞춰 유연한
              채용을 진행하고 있습니다.
            </li>
            <li>
              전공, 연차, 배경과 무관하게 크립토랩에 관심이 있는 분이라면 누구나
              환영합니다.
            </li>
          </ul>
          <ul className="grid grid-cols-3 gap-3 pb-4">
            {RECRUIT_POSITIONS.map((val, i) => (
              <li
                key={i}
                className="border rounded-xl border-gray-300 flex items-center gap-2 flex-col p-2 bg-gray-50">
                <RecruitIcon target={val.icon} />
                <span className="text-sm font-bold">{val.title}</span>
                <span className="text-sm text-gray-500">{val.desc}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.contentLayout}`}>
          <h3>현재 주요 채용 포지션</h3>
          <ul className={`${styles.listLayout}`}>
            <li>
              Software Engineer: 동형암호 및 AI 기술을 기반으로 제품과 서비스를
              개발하고 최적화합니다.
            </li>
            <li>
              Business Development: 시장과 고객의 니즈를 바탕으로 사업 기회를
              발굴하고 파트너십을 확장합니다.
            </li>
          </ul>
        </div>
      </div>

      <hr className={`${styles.hr}`} />

      <div className={`${styles.contentLayout}`}>
        <div>
          <span className={`${styles.titleTag}`}>BENEFITS</span>
          <h2>복리후생</h2>
        </div>
        <ul className={`${styles.listLayout}`}>
          <li>장기근속 Refresh휴가</li>
          <li>어학비, 교육비 지원</li>
          <li>복지포인트 지급 (월 20만원 이상)</li>
          <li>건강검진 지원 (30만원 상당)</li>
          <li>전문연구요원 가능 </li>
        </ul>
      </div>

      <hr className={`${styles.hr}`} />

      <div className={`${styles.contentLayout}`}>
        <div>
          <span className={`${styles.titleTag}`}>CULTURE</span>
          <h2>기업문화</h2>
        </div>
        <ul className={`${styles.listLayout}`}>
          <li>일에 몰입합니다.</li>
          <li>자유롭게 소통합니다.</li>
          <li>개인의 성장을 지원합니다.</li>
          <li>일등이 아닌 일류를 추구합니다. </li>
        </ul>
      </div>

      <hr className={`${styles.hr}`} />

      <div className={`${styles.contentLayout}`}>
        <div>
          <span className={`${styles.titleTag}`}>HIRING PROCESS</span>
          <h2>채용절차</h2>
        </div>
        <span>
          서류접수 ➡️ 직무테스트(필요 시) ➡️ 1차 면접(실무진) ➡️ 2차
          면접(임원진) ➡️ CEO 1:1 ➡️ 최종합격
        </span>
      </div>

      <hr className={`${styles.hr}`} />

      <div className={`${styles.contentLayout}`}>
        <div>
          <span className={`${styles.titleTag}`}>APPLY</span>
          <h2>지원 방법</h2>
        </div>
        <ul className={`${styles.listLayout}`}>
          <li>지원은 아래 메일로 접수해 주시기 바랍니다.</li>
          <li>
            입사지원서와 함께 CV 또는 포트폴리오를 보유하신 경우 함께 제출해
            주세요.
          </li>
          <li>
            제출된 서류는 채용 목적 외에는 사용되지 않으며, 채용 종료 후 관련
            법령에 따라 안전하게 폐기됩니다.
          </li>
        </ul>
        <a
          href="/resource/cryptolab_application_form.doc"
          download="cryptolab_application_form.doc"
          className="font-bold flex items-center gap-1 text-white  bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-lg w-fit">
          입사지원서 다운로드
          <IconDownload className="fill-white h-6 w-6 " />
        </a>
        <div className={`${styles.contentLayout} pt-4`}>
          <h3>서류 접수 및 문의</h3>
          <div className="border flex justify-between items-center rounded-xl border-blue-300 p-4 bg-blue-50 sm:flex-row gap-4 flex-col">
            <span>김한슬 (경영관리팀 · 매니저)</span>
            <a
              className="flex items-center gap-1 w-fit bg-blue-400 rounded-lg py-2 px-4"
              target="_blank"
              href={`mailto:hskim@cryptolab.co.kr`}>
              <IconMail className="w-5 h-5 fill-white" />
              <span className="text-white text-base">
                hskim@cryptolab.co.kr
              </span>
            </a>
          </div>
        </div>
        <a
          className="flex items-center text-gray-400 text-xl self-center pt-16"
          href={CRYPTOLAB_URL}
          target="_blank"
          rel="noopener noreferrer">
          <IconLink className="w-6 h-6 fill-gray-400" />
          <span className="font-bold">{`cryptolab.co.kr`}</span>
        </a>
      </div>
    </div>
  );
};

export default MainPage;
