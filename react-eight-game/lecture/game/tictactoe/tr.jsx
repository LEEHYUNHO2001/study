import React, {memo, useMemo} from 'react';
import Td from './td';

const Tr = memo(({rowData, rowIndex, dispatch}) => {

    return(
        <tr>
            {Array(rowData.length).fill().map((td, i) => (
                useMemo(() => <Td dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}/>
                , [rowData[i]])
            ))}
        </tr>
    );

})

export default Tr;