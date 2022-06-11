import React from 'react';
import styled from "styled-components";
import {Button, ProgressBar} from "react-bootstrap";
import {QuestionData} from "../assets/data/questiondata";
import {useNavigate} from "react-router-dom";

const Question = () => {
    const [questionNo, setQuestionNo] = React.useState(0);
    console.log("questionNo", questionNo);

    const handleClickBtn = (num, type) => {
        // 기존 스코어에 더할 값 계산(기존의 값 + 배점)

        /*
        totalScore.map((e) => function(e){
            if (e.id === type) {
                const addScore = e.score + num;
                const newObj = {id: e.id, score: addScore};
                totalScore.splice(totalScore.indexOf(e), 1, newObj);
            }
        });
        */

        // 소스 코드 줄이기(type이 일치하는 객체만 새 객체 반환)
        const newScore = totalScore.map((e) =>
            e.id === type ? {id: e.id, score: e.score + 1} : e
        );
        setTotalScore(newScore);
        if (questionNo + 1 !== QuestionData.length) {
            setQuestionNo(questionNo + 1);
        } else {
            // mbti 도출

            navigate("/result");
        }
    }

    const [totalScore, setTotalScore] = React.useState([
        {id: "EI", score: 0},
        {id: "SN", score: 0},
        {id: "TF", score: 0},
        {id: "JP", score: 0},
    ])

    const navigate = useNavigate();
    const handleClickBackBtn = () => {
        navigate("/");
    }
  return (
      <Wrapper>
          <ProgressBar animated now={questionNo / QuestionData.length * 100} variant="success" style={{marginTop: "20px"}}/>
          <Title>{QuestionData[questionNo].title}</Title>
          <ButtonGroup>
              <Button style={{width: "40%", minHeight: "200px", fontSize: "15pt"}} onClick={()=>handleClickBtn(1, QuestionData.type)}>{QuestionData[questionNo].answerA}</Button>
              <Button style={{
                  width: "40%",
                  minHeight: "200px",
                  fontSize: "15pt",
                  marginLeft: "20px"
              }} onClick={()=>handleClickBtn(0, QuestionData.type)}>{QuestionData[questionNo].answerB}</Button>
          </ButtonGroup>
          <div style={{display: "flex", justifyContent: "right", marginTop: "14px"}}>
              <Button style={{backgroundColor: "#999999", border: "1px solid #7B7A7AFF"}} onClick={handleClickBackBtn}>Go Main</Button>
          </div>
      </Wrapper>
  )
}

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Title = styled.div`
  font-size: 30pt;
  text-align: center;
  font-family: "GangwonEdu_OTFBoldA";
  margin: 20px 0 30px 0;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "GangwonEdu_OTFBoldA";
`