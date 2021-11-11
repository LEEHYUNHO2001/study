import React, {useReducer, createContext, useMemo, useEffect} from 'react';
import Table from './table';
import Form from './form';

export const CODE = {
    MINE: -7,
    NORMAL: -1, // 닫혀있는칸
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0, //0이상이면 다 opened
};

export const TableContext = createContext({
    tableData: [],
    halted: true,
    dispatch: () => {},
  });
  

const initialState = {
    tableData: [],
    timer: 0,
    halted: true,
    data: {
        row:0,
        cell:0,
        mine:0
    },
    result: '',
    openedCount: 0,
}; 

const plantMine = (row, cell, mine) => {
    console.log(row, cell, mine);
    //10*10 이면 0부터 99 뽑음
    const candidate = Array(row * cell).fill().map((arr, i) => {
        return i;
    });
    //mine둘곳 랜덤으로 뽑아서 shuffle에 push -> ex 13, 29, 37 ...
    const shuffle = [];
    while(candidate.length > row * cell - mine){
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }
    //2차원 배열 테이블 만들기
    const data = [];
    for(let i = 0; i < row; i++){
        const rowData = [];
        data.push(rowData);
        for(let j = 0; j < cell; j++){
            rowData.push(CODE.NORMAL)
        }
    }

    //마인 좌표
    for(let k = 0; k < shuffle.length; k++){
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE;
    }

    console.log(data);
    return data;
};

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

const reducer = (state, action) => {
    switch(action.type){
        case START_GAME:
            return{
                ...state,
                data: {
                    row:action.row, 
                    cell:action.cell, 
                    mine:action.mine
                },
                openedCount: 0,
                timer: 0,
                tableData: plantMine(action.row, action.cell, action.mine),
                halted: false,
            };

        case OPEN_CELL:{
            const tableData = [...state.tableData];
            //모든칸 불변성 지키게 하기
            tableData.forEach((row, i) => {
                tableData[i] = [...row];
            })

            const checked = [];
            let openedCount = 0;
            const checkAround = (row, cell) => {
                //아래의 경우는 더 열지말고 return(재귀시)
                if([CODE.OPENED, CODE.FLAG_MINE, CODE.FLAG, 
                    CODE.QUESTION_MINE, CODE.QUESTION].includes(tableData[row][cell])) return;
                //상하좌우 칸이 없는 경우
                if(row < 0 || row >= tableData.length || cell < 0 || cell >= tableData[0].length) return;
                //이미 검사한 칸 캐싱 해주어야함(안해주면 호출 스택 터짐)
                if(checked.includes(row + ',' + cell)){
                    return;
                }else{
                    checked.push(row + ',' + cell);
                }
                //근처 지뢰 갯수 찿기
                let around = [];
                //윗줄 있는경우
                if(tableData[row - 1]){
                    around = around.concat(
                        tableData[row - 1][cell - 1],
                        tableData[row - 1][cell],
                        tableData[row - 1][cell + 1]);
                }
                around = around.concat(
                    tableData[row][cell - 1],
                    tableData[row][cell + 1]);
                //아랫줄 있는 경우
                if(tableData[row + 1]){
                    around = around.concat(
                        tableData[row + 1][cell - 1],
                        tableData[row + 1][cell],
                        tableData[row + 1][cell + 1]);
                }
                const count = around.filter((v) => 
                    [CODE.MINE, CODE.QUESTION_MINE, CODE.FLAG_MINE].includes(v)).length;
                tableData[row][cell] = count;

                //주변지뢰 없으면 주변칸 열기(재귀)
                if(count === 0){
                    if(row > -1){
                        const near = [];
                        //제일 위칸만 아니면 실행
                        if(row - 1 > -1){
                            near.push([row - 1, cell - 1]);
                            near.push([row - 1, cell]);
                            near.push([row - 1, cell + 1]);
                        }
                        near.push([row, cell - 1]);
                        near.push([row, cell + 1]);
                        //제일 아랫칸 아니면 실행
                        if(row + 1 < tableData.length){
                            near.push([row + 1, cell - 1]);
                            near.push([row + 1, cell]);
                            near.push([row + 1, cell + 1]);
                        }
                        near.forEach((n) => {
                            //이미 연 칸이 아니면 재귀(안걸러주면 호출 스택 터짐)
                            if(tableData[n[0]][n[1]] !== CODE.OPENED){
                                checkAround(n[0], n[1]);
                            }
                        });
                    }
                }
                //승리 계산을 위한 카운트 -> if문으로 겹치는칸 열렸을때 카운트하는 버그 해결
                if(tableData[row][cell] !== CODE.NORMAL){
                    openedCount += 1;
                }
            };
        checkAround(action.row, action.cell);
        let halted = false;
        let result = '';
        //승리조건
        if(state.data.row * state.data.cell - state.data.mine === state.openedCount + openedCount){
            halted = true;
            result = `${state.timer}초만에 승리했습니다!!`;
        }
        return{
            ...state,
            tableData,
            openedCount: state.openedCount + openedCount,
            halted,
            result,
        };
    }

        case CLICK_MINE:{
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = CODE.CLICKED_MINE;
            return{
                ...state,
                tableData,
                halted: true,
            };
        }

        case FLAG_CELL:{
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.MINE){
                tableData[action.row][action.cell] = CODE.FLAG_MINE;
            } else{
                tableData[action.row][action.cell] = CODE.FLAG;
            }
            return{
                ...state,
                tableData,
            };
        }

        case QUESTION_CELL:{
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.FLAG_MINE){
                tableData[action.row][action.cell] = CODE.QUESTION_MINE;
            } else{
                tableData[action.row][action.cell] = CODE.QUESTION;
            }
            return{
                ...state,
                tableData,
            };
        }

        case NORMALIZE_CELL:{
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.QUESTION_MINE){
                tableData[action.row][action.cell] = CODE.MINE;
            } else{
                tableData[action.row][action.cell] = CODE.NORMAL;
            }
            return{
                ...state,
                tableData,
            };
        }

        case INCREMENT_TIMER:{
            return{
                ...state,
                timer: state.timer + 1,
            }
        }

        default:
            return state;
    }
};

const MineSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {tableData, timer, result, halted} = state;

    //value가 바뀔때마다 return 부분 모두 리랜더링 되기때문에 useMemo 사용
    const value = useMemo(() => ({tableData, dispatch, halted}), [tableData, halted]);

    //타이머
    useEffect(() => {
        let timer;
        if(halted === false){
            timer = setInterval(() => {
                dispatch({type:INCREMENT_TIMER})
            }, 1000);
        }
        return() => {
            clearInterval(timer);
        }
    }, [halted]);

    return (
        <TableContext.Provider value={value}>
          <Form />
          <div>현재 {timer}초 경과</div>
          <Table />
          <div>{result}</div>
        </TableContext.Provider>
      );
}

export default MineSearch;