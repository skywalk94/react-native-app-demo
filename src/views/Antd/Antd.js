import React from 'react';
import { Button, InputItem, DatePicker, List, Provider } from '@ant-design/react-native';
const Antd = () => {
    return (
        <Provider>
            <Button type="primary">primary</Button>
            <InputItem
                clear
                labelNumber={2}
                placeholder="两个字标签"
            >
                姓名
            </InputItem>
            <List>
                <DatePicker
                    mode="date"
                    defaultDate={new Date()}
                    minDate={new Date(2015, 7, 6)}
                    maxDate={new Date(2026, 11, 3)}
                    format="YYYY-MM-DD"
                >
                    <List.Item arrow="horizontal">Select Date</List.Item>
                </DatePicker>
            </List>
        </Provider>
    );
}

export default Antd;