import React from 'react';
import styled from "styled-components";
import {Button, ProgressBar} from "react-bootstrap";
import {QuestionData} from "../assets/data/questiondata";
import {useNavigate} from "react-router-dom";

const Question = () => {
    const navigate = useNavigate();
    const handleClickBackBtn = () => {
        navigate("/");
    }
  return (
      <Wrapper>
          <ProgressBar animated now={10} variant="success" style={{marginTop: "20px"}}/>
          <Title>{QuestionData[0].title}</Title>
          <ButtonGroup>
              <Button style={{width: "40%", minHeight: "200px", fontSize: "15pt"}}>{QuestionData[0].answerA}</Button>
              <Button style={{
                  width: "40%",
                  minHeight: "200px",
                  fontSize: "15pt",
                  marginLeft: "20px"
              }}>{QuestionData[0].answerB}</Button>
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
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "GangwonEdu_OTFBoldA";
`