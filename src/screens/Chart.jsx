import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { LineChart, ProgressChart, BarChart, PieChart } from 'react-native-chart-kit'
export default () => {
    const width = Dimensions.get("window").width
    return (
        <>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // 小数位数
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                bezier // 是否使用贝塞尔曲线
            />
            <ProgressChart data={{
                labels: ['Swim', 'Bike', 'Run'], // 标签
                data: [0.4, 0.6, 0.8], // 进度数据
            }} width={width} height={200} strokeWidth={16} radius={32}
                chartConfig={{
                    backgroundGradientFrom: '#1E2923',
                    backgroundGradientTo: '#08130D',
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    strokeWidth: 2, // 进度条宽度
                }}
                hideLegend={false} // 是否隐藏图例
            />
            <BarChart
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [
                        {
                            data: [20, 45, 28, 80, 99, 43],
                        },
                    ],
                }}
                width={width}
                height={200}
                yAxisLabel={'$'}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    strokeWidth: 2,
                }}
            />
        </>

    )
}
const styles = StyleSheet.create({})