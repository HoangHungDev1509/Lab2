import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Manager from "./Manager";
import {
    View,
    Text,
    Button,
} from "react-native";
const Stack = createNativeStackNavigator();

const Home = (props) => {
    const nav = props.navigation;
    const list = 
    [
        {
            id:1,
            name: 'Bia 333',
            price: 10000,
        },
        {
            id:2,
            name: 'Coca-Cola',
            price: 20000,
        }, 
        {
            id:3,
            name: 'Rượu Nếp',
            price: 30000,
        },        
    ];

    return (
        <View>
            <Text>
                HOME
            </Text>
            <Button
                title='Quản Lý'
                onPress={() => nav.navigation(
                    'Manager',
                    data = {list}
                )}
            />
            <Button
                title='About'
                onPress={() => nav.navigation(
                    'About',
                    { nameUser: 'Hoàng Việt Hùng' },
                    { Msv: 'PH27276' },
                )}
            />
        </View>
    );
};

const About = (props) => {
    const route = props.route;
    const nameFromHome = route.params.nameUser;
    const msv = route.params.Msv;
    return (
        <View>
            <Text>
                About
            </Text>
            <Text>
                Họ tên: {nameFromHome}
            </Text>
            <Text>
                Mã sinh viên: {msv}
            </Text>
        </View>
    );
};

const App = () => {
    <NavigationContainer initialRouteName='Home'>
        <Stack.Screen
            name = 'Home'
            component = {Home}
        />
        <Stack.Screen
            name = 'About'
            component = {About}
        />
        <Stack.Screen
            name = 'About'
            component = {Manager}
        />

    </NavigationContainer>
}

export default App;
