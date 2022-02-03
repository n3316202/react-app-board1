import React, { useState, useEffect } from "react";
import { boardList } from "../Data";

const BoardList = () => {
    
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        retrieveBoards();
      }, []);

    const retrieveBoards = () => {        
        /*
        TutorialDataService.getAll()
          .then(response => {
            setTutorials(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
        */
        setBoards(boardList);
      };

    return (
        <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
            //   value={searchTitle}
            //   onChange={onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                // onClick={findByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>게시판</h4>
  
          <ul className="list-group">
            {boards &&
              boards.map((board) => (
                <li
                  className={ "list-group-item "}
                //   onClick={() => setActiveTutorial(tutorial, index)}
                  key={board.id}
                >
                  {board.title}
                </li>
              ))}
          </ul>
  
          <button
            className="m-3 btn btn-sm btn-danger"
            // onClick={removeAllTutorials}
          >
            Remove All
          </button>
        </div>

      </div>
    );
};

export default BoardList;