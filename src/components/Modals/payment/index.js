import React, { useState, useRef } from "react";
import {
    Content,
    Title,
    Press,
    Footer,
} from "./styles"

import {
    Keyboard
} from "react-native"

import { Picker } from "@react-native-picker/picker"

import { Modalize } from "react-native-modalize";

import { Feather } from "@expo/vector-icons";


const PayModal = ({ modalizeRef }) => {
    const [isSelected, setSelection] = useState(false)
    const [selectLang, setLang] = useState("")
    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }
    function close() {
        pickerRef.current.close();
    }

    return (
        <Modalize
            modalStyle={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "#DADADA",
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
            }}
            ref={modalizeRef}
            modalHeight={500}
            panGestureEnabled={false}
            openAnimationConfig={{
                timing: { duration: 400 },
                spring: { speed: 20, bounciness: 10 }
            }}
            closeAnimationConfig={{
                timing: { duration: 400 },
                spring: { speed: 20, bounciness: 10 }
            }}

            HeaderComponent={

                <Footer>
                    <Press
                        title=""
                        onPress={() => modalizeRef.current.close()}
                    >
                        <Feather name="arrow-down" size={30} color={"#fff"} />
                    </Press>
                </Footer>
            }
        >
            <Content>
                <Title>
                    Selecione o método de pagamento:
                </Title>

                <Picker

                    style={{
                        alignSelf: "center",

                        fontSize: 24,
                        backgroundColor: "#009688",
                        borderRadius: 10,
                        paddingVertical: 10,
                        paddingHorizontal: 12,

                        width: "80%",
                        borderRadius: 10,
                    }}
                    ref={pickerRef}
                    selectValue={selectLang}
                    onValueChange={(itemValue) => setLang(itemValue)}
                    itemStyle={{
                        borderRadius: 40,
                    }}
                >
                    <Picker.Item 
                        label="Java"
                        value={"Java"}
                        style={{
                            fontSize: 24,
                        }}  
                    />
                    <Picker.Item
                        label="Javascript"
                        value={"Javascript"}
                    />


                </Picker>


                

            </Content>
        </Modalize>
        
    )
}

export default PayModal;