import RussianBlue from "../catimg/RussianBlue.jpeg";
import KoreanShorthair from "../catimg/KoreanShorthair.jpeg";
import EuropeanShorthair from "../catimg/EuropeanShorthair.jpeg";
import AmericanShorthair from "../catimg/AmericanShorthair.jpeg";
import TurkishAngora from "../catimg/TurkishAngora.jpeg";
import Siam from "../catimg/Siam.jpeg";
import Abisinian from "../catimg/Abisinian.jpeg";
import NorwegianForest from "../catimg/NorwegianForest.jpeg";
import ScottishFold from "../catimg/ScottishFold.jpeg";
import Munchkin from "../catimg/Munchkin.jpeg";
import Ragdoll from "../catimg/Ragdoll.jpeg";
import BritishShorthair from "../catimg/BritishShorthair.jpeg";
import Bengal from "../catimg/Bengal.jpeg";
import Sphynx from "../catimg/Sphynx.jpeg";
import Persian from "../catimg/Persian.jpeg";
import MaineCoon from "../catimg/MaineCoon.jpeg";


const ResultData = [
    {
        id: 1,
        name: "러시안 블루",
        mbti: "ESTJ",
        desc: "겁이 많습니다. 워낙 온순한 성격에 조용한 고양이라 소심하게 느껴집니다. 낯을 심하게 가리는 편이구요. 초보 애묘가가 키우기 좋은 묘종입니다.",
        image: `${RussianBlue}`
    },
    {
        id: 2,
        name: "샴",
        mbti: "INFP",
        desc: "주인을 많이 따르는 편으로 주인과 언제나 함께하고 싶어하며, 외향적이며 애교가 많습니다. 잠잘 때는 침대로 와서 같이 자고, 앉아있을 때는 무릎으로 올라오는 경우가 많다고 합니다. 야옹야옹 수다도 많이 떤다고 합니다.",
        image: `${Siam}`
    },
    {
        id: 3,
        name: "터키쉬 앙고라",
        mbti: "ISFJ",
        desc: "터키시 앙고라는 상냥한 성격을 가지고 있지만 갑작스러운 환경변화에는 예민해질 수 있습니다. 평소 성격은 조용한 편입니다. 주인에 대한 충성심이 강하고 친근하며 활발하게 뛰어 노는 것을 좋아합니다.",
        image: `${TurkishAngora}`
    },
    {
        id: 4,
        name: "아비시니안",
        mbti: "ENFP",
        desc: "온순하고 애교가 있어 사람을 잘 따릅니다. 주위의 모든 것에 적극적인 관심을 보이며 활달하며, 성격이 온순하고 다루기 쉽습니다.",
        image: `${Abisinian}`
    },
    {
        id: 5,
        name: "노르웨이 숲",
        mbti: "ENTP",
        desc: "노르웨이숲고양이의 성격은 아주 긍정적입니다. 선천적으로 자유분방하고 활발하며 애교가 아주 많습니다. 사람을 잘 따르며 차분하고 인내심이 많습니다. 겁이 없고 호기심아 많아 아주 귀엽습니다. 사교성도 좋아 다른 동물과도 잘 지냅니다.",
        image: `${NorwegianForest}`
    },
    {
        id: 6,
        name: "아메리칸 숏헤어",
        mbti: "ESFP",
        desc: "성격은 매우 활발하고 겁이 없으며 명랑하고 애교스럽고 조용하고 온화한 성격으로 다른 반려견이나 아이들과도 친하게 잘 지낸다고 합니다. 사람과 잘 어울리지만 독립심도 강하다고 하네요.",
        image: `${AmericanShorthair}`
    },
    {
        id: 7,
        name: "코리안 숏헤어",
        mbti: "ISFP",
        desc: "기본적으로 게으르기 보다는 활발하고 쾌활한 성격을 가지고 있으며 성격이 친밀하고 영리하며 애교도 많습니다.",
        image: `${KoreanShorthair}`
    },
    {
        id: 8,
        name: "스코티쉬 폴드",
        mbti: "ISTJ",
        desc: "스코티쉬 폴드의 성격은 매우 부드러운 편으로, 주변환경에 적응력이 좋아 낯선 곳에서도 겁먹지 않고, 다른 동물이나 아이들에게도 잘 적응합니다. 상냥한 성격을 가졌으며 사람과 함께 있으며 교감하는 것을 좋아하며 애교도 아주 많은 편이라고 합니다.",
        image: `${ScottishFold}`
    },
    {
        id: 9,
        name: "먼치킨",
        mbti: "INFJ",
        desc: "일반적으로 성격이 부드럽고 활동적이며 사람을 좋아하고 영리한편이라고 합니다.",
        image: `${Munchkin}`
    },
    {
        id: 10,
        name: "렉돌",
        mbti: "INTP",
        desc: "사람을 잘 믿는 성격이며 주인이 가는곳마다 이리저리 따라다닌다고해서 그림자고양이라고도 합니다. 매우 조용하고 온화하고 느긋하며 인내심이 강하여 아이들이 장난을 쳐도 태평스럽게 잘 참아준답니다.",
        image: `${Ragdoll}`
    },
    {
        id: 11,
        name: "브리티쉬 숏헤어",
        mbti: "INTJ",
        desc: "이 고양이는 까다롭지 않고 조용합니다. 이 고양이는 충성심히 강하고 사랑스러우며 모든 가족들과 친근하게 지낼 수 있습니다. 브리티시 숏헤어는 놀이를 좋아하지만 장시간 함께 놀아줘야 하는 것은 아닙니다. 놀이를 하고 싶으면 누군가에게 장난감을 가져다 줍니다. 브리티쉬 숏헤어는 또한 혼자서도 잘 놉니다. 혼자 생활하는 사람에게는 아주 좋은 친구가 될 것입니다.",
        image: `${BritishShorthair}`
    },
    {
        id: 12,
        name: "벵갈",
        mbti: "ESTP",
        desc: "주위의 모든 것에 적극적인 관심을 보이며 활달하나, 온순하고 다루기 쉽다고 하는군요. 성격이 예민한 편이라 낮선사람은 경계가 심하고 오로지 주인만 살피고 따르며 유독 주인에게는 애정 표현을 잘 한다고 합니다.",
        image: `${Bengal}`
    },
    {
        id: 13,
        name: "스핑크스",
        mbti: "ESFJ",
        desc: "호기심이 많고 사람을 잘 따르는 성격을 가지고 있으며, 사교성이 좋아 다른 동물과도 잘 지냅니다. 보호자에게 응석부리는 것을 좋아하며 활발하여 노는 것을 좋아합니다.",
        image: `${Sphynx}`
    },
    {
        id: 14,
        name: "페르시안",
        mbti: "ISTP",
        desc: "성질은 온순하고 매우 조용하며 점잖고 우아하기로 유명합니다. 목소리도 매우 감미로운 편입니다. 다른 동물이나 가족들과도 잘 적응합니다. 놀기를 좋아하나 활동적인 편이 아니므로 놀이를 즐기는 편은 아니라고 합니다.",
        image: `${Persian}`
    },
    {
        id: 15,
        name: "메인쿤",
        mbti: "ENTJ",
        desc: "온순하고 차분한 성격을 가졌으며, 영리하고 외향적 입니다. 호기심이 왕성하고 덩치만큼 겁이 없습니다.",
        image: `${MaineCoon}`
    },
    {
        id: 16,
        name: "유러피안 숏헤어",
        mbti: "ENFJ",
        desc: "매우 애정이 있고 친절한 고양이로 다른 동물과도 잘 어울립니다. 지능적이며 놀기 좋아하는 활달한 성격 탓에 쥐로부터 집을 지키는 역할도 잘 수행합니다.",
        image: `${EuropeanShorthair}`
    }
]

export default ResultData;