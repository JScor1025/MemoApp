import { View, StyleSheet } from 'react-native'

import Header from '../components/Header'
import Item from '../components/Item'
import CircleButton from '../components/CircleButton'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <Item />
                <Item />
                <Item />
            </View>
            <CircleButton>+</CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})

export default Index
