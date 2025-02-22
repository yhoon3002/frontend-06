// This Is For Board Detail Presenter Component

import * as S from "./BoardFetch.styles";
import { Tooltip } from "antd";

const BoardFetchPresenter = (props) => {
  return (
    <S.WrapperParent>
      <S.WrapperChild>
        <S.Profile>
          <S.ProfileLeft>
            <S.ProfileImg src="/image/my/my.png"></S.ProfileImg>
            <S.ProfileDetail>
              <S.ProfileName>{props.data?.fetchBoard?.writer}</S.ProfileName>
              <S.ProfileDate>
                Date : {props.data?.fetchBoard?.createdAt.slice(0, 4)}.
                {props.data?.fetchBoard?.createdAt.slice(5, 7)}.
                {props.data?.fetchBoard?.createdAt.slice(8, 10)}
              </S.ProfileDate>
            </S.ProfileDetail>
          </S.ProfileLeft>

          <S.ProfileRightWrapper>
            <S.ProfileRight>
              <S.LocationDetailWrapper></S.LocationDetailWrapper>
              <S.IconImgWrapper>
                <S.ClipImg src="/image/search/search.png"></S.ClipImg>
                {props.data?.fetchBoard.boardAddress?.address && (
                  <Tooltip
                    placement="topRight"
                    title={`${props.data?.fetchBoard?.boardAddress?.address} ${props.data?.fetchBoard?.boardAddress?.addressDetail}`}
                  >
                    <S.LocationImg src="/image/location/location.png"></S.LocationImg>
                  </Tooltip>
                )}
              </S.IconImgWrapper>
            </S.ProfileRight>
          </S.ProfileRightWrapper>
        </S.Profile>
        <S.Line></S.Line>
        <S.Context>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.ImageWrapper>
            {props.data?.fetchBoard.images
              ?.filter((el) => el)
              .map((el) => (
                <S.TitleImg
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageWrapper>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          <S.Youtube
            url={props.data?.fetchBoard?.youtubeUrl}
            width={486}
            height={240}
          ></S.Youtube>
          <S.LikeOrNot>
            <S.Like>
              <S.LikeImg
                src="/image/heart/heart.png"
                onClick={props.onClickLikeImg}
              ></S.LikeImg>
              <S.LikeCount>{props.data?.fetchBoard?.likeCount}</S.LikeCount>
            </S.Like>
            <S.Dislike>
              <S.DislikeImg
                src="/image/arrowUnder/arrow-under.png"
                onClick={props.onClickDislikeImg}
              ></S.DislikeImg>
              <S.DislikeCount>
                {props.data?.fetchBoard?.dislikeCount}
              </S.DislikeCount>
            </S.Dislike>
          </S.LikeOrNot>
        </S.Context>
      </S.WrapperChild>
      <S.ListUpdateDelete>
        <S.ToList onClick={props.onClickToList}>목록으로</S.ToList>
        <S.ToUpdate onClick={props.onClickToUpdate}>수정하기</S.ToUpdate>
        <S.ToDelete onClick={props.onClickDelete}>삭제하기</S.ToDelete>
      </S.ListUpdateDelete>
    </S.WrapperParent>
  );
};

export default BoardFetchPresenter;
