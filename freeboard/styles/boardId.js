import styled from "@emotion/styled";
import reactPlayer from "react-player";

export const WrapperParent = styled.div`
    width: 100%
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 161px;
`;

export const WrapperChild = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding-top: 80px;
    padding-left: 102px;
    padding-right: 102px;
    padding-bottom: 80px;
`;
export const LocationDetailContainer = styled.div``;

export const LocationDetail = styled.div`
    width: 376px;
    height: 64px;

    margin-top: 20px;
    margin-left: 0px;
    margin-right: 118px;
    border: 1px solid red;
`;

export const IconImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Profile = styled.div`
    width: 996px;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ProfileLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ProfileImg = styled.img`
    width: 45px;
    height: 45px;
`;

export const ProfileDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 16.67px;
`;

export const ProfileName = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
`;

export const ProfileDate = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #828282;
    margin-top: 5px;
`;

export const ProfileRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ClipImg = styled.img`
    width: 18px;
    height: 26px;
`;

export const LocationImg = styled.img`
    width: 18px;
    height: 26px;
    margin-left: 29.33px;
    cursor: pointer;
`;

export const Line = styled.div`
    width: 996px;
    border-bottom: 1px solid #bdbdbd;
    margin-bottom: 80px;
`;

export const Context = styled.div`
    width: 996px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    width: 996px;

    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    color: #000000;

    padding-bottom: 40px;
`;

export const TitleImg = styled.img`
    width: 996px;
    height: 480px;
    padding-bottom: 40px;
`;

export const Contents = styled.div`
    width: 996px;
    height: 96px;
    padding-bottom: 120px;
`;

export const Youtube = styled(reactPlayer)`
    margin-left: 255px;
    margin-right: 255px;
    margin-bottom: 163px;
`;

export const LikeOrNot = styled.div`
    width: 120px;

    display: flex;
    flex-dirction: row;
    justify-content: center;

    margin-left: 448px;

    padding-bottom: 80px;
`;

export const Like = styled.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-right: 50px;
`;

export const LikeImg = styled.img`
    width: 20px;
    height: 20px;

    margin-bottom: 1px;
`;

export const LikeCount = styled.div`
    width: 10px;

    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffd600;
`;

export const Dislike = styled.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DislikeImg = styled.img`
    width: 20px;
    height: 20px;
    margin-bottom: 1px;
`;

export const DislikeCount = styled.div`
    width: 10px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #828282;
`;
