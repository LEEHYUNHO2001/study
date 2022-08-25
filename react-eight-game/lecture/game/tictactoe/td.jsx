import React, { useCallback, useEffect, useRef, memo } from 'react';
import { CLICK_CELL } from './tictactoe';

const Td = memo(({rowIndex, cellIndex, dispatch, cellData}) => {
    /*
    //false인것을 찾자 -> 그것때문에 리랜더링이 일어나는것.
    const ref = useRef([]);
    useEffect(() => {
        console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3])
        ref.current = [rowIndex, cellIndex, dispatch, cellData];
    }, [rowIndex, cellIndex, dispatch, cellData])
    */
    const onClickTd = useCallback(() => {
        console.log(rowIndex, cellIndex)
        //클릭하면 cellData가 생성되는데, 기존에 cellData가있으면 끊어버림
        if(cellData){
            return;
        }

        dispatch({type:CLICK_CELL, row: rowIndex, cell: cellIndex});
    }, [cellData]);

    return(
        <td onClick={onClickTd}>{cellData}</td>
    );

})

export default Td;