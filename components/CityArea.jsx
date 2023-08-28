import { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import pcaCode from "../assets/pca-code.json"

export default () => {
    const [selectedProvince, setSelectedProvince] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedArea, setSelectedArea] = useState('')

    const handleProvinceChange = (province) => {
        setSelectedProvince(province)
        setSelectedCity(pcaCode.find((item) => item.code === province)?.children[0].code || '')
        setSelectedArea('')
    }

    const handleCityChange = (city) => {
        setSelectedCity(city)
        setSelectedArea(pcaCode.find((item) => item.code === selectedProvince)?.children.find((item) => item.code === city)?.children[0].code || '')
    }

    const cityOptions = pcaCode.find((item) => item.code === selectedProvince)?.children || []
    const areaOptions = pcaCode.find((item) => item.code === selectedProvince)?.children.find((item) => item.code === selectedCity)?.children || []


    return (
        <View>
            <Picker selectedValue={selectedProvince} onValueChange={handleProvinceChange}>
                <Picker.Item label="请选择省份" value="" />
                {pcaCode.map((item) => (
                    <Picker.Item key={item.code} label={item.name} value={item.code} />
                ))}
            </Picker>
            <Picker selectedValue={selectedCity} onValueChange={handleCityChange}>
                <Picker.Item label="请选择城市" value="" />
                {cityOptions.map((city) => (
                    <Picker.Item key={city.code} label={city.name} value={city.code} />
                ))}
            </Picker>
            <Picker selectedValue={selectedArea} onValueChange={setSelectedArea}>
                <Picker.Item label="请选择区域" value="" />
                {areaOptions.map((area) => (
                    <Picker.Item key={area.code} label={area.name} value={area.code} />
                ))}
            </Picker>
        </View>
    )
}
const styles = StyleSheet.create({})