import React, {useCallback, useContext, memo, useMemo} from 'react';
import { CODE, TableContext, 
    OPEN_CELL, CLICK_MINE, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL } from './minesearch';

const getTdStyle = (code) => {
    switch(code){
        case CODE.NORMAL:
        case CODE.MINE:
            return{
                background: '#444',
            };
        case CODE.CLICKED_MINE:
        case CODE.OPENED:
            return{
                background: 'white',
            };
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
            return {
                background: 'yellow',
            };
        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return {
                background: 'red',
            };
        default:
            return{
                background: 'white',
            };
    }
};

const getTdText = (code) => {
    console.log('getTdText 랜더링');
    switch(code){
        case CODE.NORMAL:
            return '';
        case CODE.MINE:
            return 'X';
        case CODE.CLICKED_MINE:
            return '펑';
        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return '!';
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
            return '?';
        
        default:
            return code || '';
    }
};

const Td = memo(({rowIndex, cellIndex}) => {
    const {tableData, dispatch, halted} = useContext(TableContext);

    const onClickTd = useCallback(() => {
        if(halted) return;
        switch(tableData[rowIndex][cellIndex]){
            case CODE.OPENED:
            case CODE.FLAG:
            case CODE.FLAG_MINE:
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
                return;
            case CODE.NORMAL:
                dispatch({type:OPEN_CELL, row: rowIndex, cell: cellIndex});
                return;
            case CODE.MINE:
                dispatch({type:CLICK_MINE, row: rowIndex, cell: cellIndex})
                return;
        }
        
    }, [tableData[rowIndex][cellIndex], halted])

    const onRightClickTd = useCallback((e) => {
        if(halted) return;
        e.preventDefault();
        switch(tableData[rowIndex][cellIndex]){
            case CODE.NORMAL:
            case CODE.MINE:
                dispatch({type: FLAG_CELL, row: rowIndex, cell: cellIndex});
                return;
            case CODE.FLAG:
            case CODE.FLAG_MINE:
                dispatch({type: QUESTION_CELL, row: rowIndex, cell: cellIndex});
                return;
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
                dispatch({type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex});
                return;

            default:
                return;
        }
    }, [tableData[rowIndex][cellIndex], halted]);
    //콘솔보면 10*10 일때 100번 실행되는것처럼 보이지만 useMemo 해주어서 그렇지 않을 것이다.
    //getTdText에서 콘솔찍어보면 1번만 나오는것을 확인해보자 -> useMemo리랜더링 막았다.
    console.log('td 랜더링');
    return useMemo( () => (
        <>
            <td 
            style={getTdStyle(tableData[rowIndex][cellIndex])} onClick={onClickTd}
            onContextMenu={onRightClickTd}>
                {getTdText(tableData[rowIndex][cellIndex])}
            </td>
        </>
    ), [tableData[rowIndex][cellIndex]]);
});

export default Td;