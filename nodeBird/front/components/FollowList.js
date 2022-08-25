import React from 'react';
import PropTypes from 'prop-types';
import {List, Button, Card} from 'antd';
import {StopOutlined} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from '../reducers/user';

const FollowList = ({header, data, onClickMore, loading, mutateFollowing, mutateFollower}) => {
    const dispatch = useDispatch();
    //반복문안에 onClick같은것 있으면 반복문에 대한 데이터 넘겨주고 고차함수사용해서 받기
    //즉, item에한 정보를 함수로 보내고싶어서 사용했다.
    const onCancel = (id) => () => {
        if(header === '팔로잉'){
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: id,
            });
            mutateFollowing((prev) => prev.filter((data) => data.id !== id));
        } else{
            dispatch({
                type: REMOVE_FOLLOWER_REQUEST,
                data: id,
            });
            mutateFollower((prev) => prev.filter((data) => data.id !== id));
        }

    };

    return(
        <List 
            style={{marginBottom:20}}
            grid={{gutter: 4, xs: 2, md: 3}}
            size="small"
            header={<div>{header}</div>}
            loadMore={(
            <div style={{textAlign:'center', margin:'10px 0'}}>
                <Button onClick={onClickMore} loading={loading}>더 보기</Button>
            </div>
                )}
            bordered
            dataSource={data}
            renderItem={(item) => (
                <List.Item style={{marginTop:20}}>
                    <Card actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
        />
    );

};

FollowList.propTypes = {
    header:PropTypes.string.isRequired,
    data:PropTypes.array.isRequired,
    onClickMore:PropTypes.func.isRequired,
    loading:PropTypes.bool.isRequired,
};

export default FollowList;