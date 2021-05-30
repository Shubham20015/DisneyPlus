import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";

function Detail() {
  const { id } = useParams();

  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("No such document in database");
        }
      })
      .catch((err) => {
        console.log("Error in getting document", err);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>

      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <img src="/images/plus-icon.svg" alt="" />
          </AddList>
          <GroupWatch>
            <img src="/images/group-icon.png" alt="" />
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 768px) {
    width: initial;
  }
`;

const ImageTitle = styled.div`
  /* -webkit-box-pack: start; */
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 30vw;
  min-height: 170px;
  margin: 0px auto;
  padding-bottom: 25px;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;

  @media (max-width: 420px) {
    flex-wrap: wrap;
    gap: 23px;
  }
`;

const Player = styled.button`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 1.8px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  margin: 0 22px 0 0;
  padding: 0 24px;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  color: #000;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 22px;
    font-size: 13px;
    margin: 0 10px 0 0;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    color: #3f3f3f;
    border-color: transparent;
  }
`;

const AddList = styled.div`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid rgb(249, 249, 249);
`;

const GroupWatch = styled(AddList)`
  background: rgb(0, 0, 0);

  img {
    width: 100%;
    height: 100%;
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
const Description = styled.div`
  padding: 16px 0;
  line-height: 1.4;
  font-size: 20px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export default Detail;
