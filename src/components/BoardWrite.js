import React, { useState, useEffect } from "react";
import BoardDataService from "../services/BoardService";
import { Redirect } from 'react-router-dom';

const BoardWrite = () => {    

    const initialBoardState = {
        bname:"",
        btitle: "",
        bcontent: "",
    };    

    const [board, setBoard] = useState(initialBoardState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setBoard({ ...board, [name]: value });
    };
  
    const saveBoard = () => {
        let data = {
            bname:board.bname,
            btitle:board.btitle,
            bcontent:board.bcontent,
          };

        BoardDataService.write(data)
        .then(response => {

            setSubmitted(true);
            console.log(response.data);    

        })
        .catch(e => {
            console.log(e);
        });
    };
   
    return  submitted ?  <Redirect to = {{ pathname: "/list" }} />  : (
      <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">새글을 작성해주세요</h3>
                            <div className = "card-body">
                            
                                    <div className = "form-group">
                                        <label> Type </label>
                                        <select placeholder="type" className="form-control" 
                                        >
                                            <option value="1">자유게시판</option>
                                            {/* <option value="2">질문과 답변</option> */}
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Title </label>
                                        <input type="text" placeholder="bname" name="bname" className="form-control" 
                                        value={board.bname}
                                        onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className = "form-group">
                                        <label> Title  </label>
                                        <input placeholder="btitle" name="btitle" className="form-control" 
                                        value={board.btitle}
                                        onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className = "form-group">
                                        <label> Content  </label>
                                        <textarea placeholder="bcontent" name="bcontent" className="form-control" 
                                        value={board.bcontent}
                                        onChange={handleInputChange}
                                        />
                                    </div>
                                    <button className="btn btn-success" onClick={saveBoard}>Save</button>
                                    <button className="btn btn-danger"  style={{marginLeft:"10px"}}>Cancel</button>
                             
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default BoardWrite;