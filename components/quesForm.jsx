import e from "express";
import React,{Component} from "react";
class QuesForm extends Component {
    state={
        q:{question:"",optionA:"",optionB:"",optionC:"",optionD:""}
    }
    handleChange=(e)=>{
        const {currentTarget:input}=e
        let s1={...this.state}
        s1.q[input.name]=input.value
        this.setState(s1)
    }
    handleSubmit=(e)=>{
        e.preventDefault()
    }
    render() {
        const {question,optionA,optionB,optionC,optionD}=this.state
        return <div className="container">
            <button className="btn btn-primary">Home</button>
            <div className="form-group">
                <label>Question</label>
                <input
                type="text"
                className="form-control"
                id="question"
                name="question"
                placeholder="Enter Question"
                value={question}
                onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <label>option A</label>
                <input
                type="text"
                className="form-control"
                id="optionA"
                name="optionA"
                placeholder="Enter option A"
                value={optionA}
                onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <label>option B</label>
                <input
                type="text"
                className="form-control"
                id="optionB"
                name="optionB"
                placeholder="Enter option B"
                value={optionB}
                onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <label>option C</label>
                <input
                type="text"
                className="form-control"
                id="optionC"
                name="optionC"
                placeholder="Enter option C"
                value={optionC}
                onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <label>option D</label>
                <input
                type="text"
                className="form-control"
                id="optionD"
                name="optionD"
                placeholder="Enter option D"
                value={optionD}
                onChange={this.handleChange}
                />
            </div>
            <button className="btn btn-primary"onClick={()=>this.handleSubmit()}>Submit</button>
        </div>
    }
}
export default QuesForm;