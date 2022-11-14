import React,{Component} from "react";
import QuesForm from "./quesForm";
class CompMain extends Component {
    state={
        bank:[
            {id: 1, qnText: "What is the square of 9",A: "90", B: "72", C: "81", D:"99", ans: "C"},
            {id: 2, qnText: "What is the 11*16", A: "160", B: "176", C: "204", D: "166", ans: "B"},
            {id: 3, qnText: "Which of the following is not a power of 2",A:"0", B:"1",C: "2",D: "8",ans: "A"},
            {id: 4, qnText: "log 1 is equal to",A: "1", B: "10", C: "-1", D: "0", ans: "D"},
            {id: 5, qnText: "log(ab) is equal to",A: "(loga) + (logb)", B: "b(loga)", C: "a(logb)", D: "(loga)(logb)", ans: "A"},
            {id: 6, qnText: "The square root is equal to",A: "1.0", B: "1.25", C: "1.414", D: "1.462", ans: "B"},
            {id: 7, qnText: "The binary representation of 10 is",A: "0110", B: "1001", C: "1010", D: "1100", ans: "C"},
            {id: 8, qnText: "11111 in binary represents ",A: "27", B: "15", C: "41", D: "31", ans: "D"},
            {id: 9, qnText: "The absolute value of -10.5 is equal to ",A: "-10.5", B: "10.5",C: "10", D: "11", ans: "B"},
            {id: 10, qnText: "The roots of the equation of (x-2)(x+3) = 0 are",A: "2, -3",B: "2, 3", C: "-2, 3", D: "-2, -3", ans: "A"}
        ],
        view:-1
    }
    handleAddQues=()=>{
        let s1={...this.state}
        s1.view=1
        this.setState(s1)
    }
    render() {
        const {bank,view}=this.state
        return <div className="container">
            
                <button className="btn btn-primary m-2"onClick={()=>this.handleAddQues()}>Add Question</button>
                <button className="btn btn-primary m-2">Question Bank</button>
            

            {view===1 ? 
            <QuesForm />
            : ""}
        </div>
    }
}
export default CompMain;