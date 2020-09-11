import React, { Component } from 'react';
import { Text, View,StyleSheet, TouchableOpacity,Button, SafeAreaView ,TextInput, Image, AsyncStorage,Modal} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { PhoneWidth, PhoneHeight } from '../config/env';


export default class DateTimePickerTester extends Component {
    constructor(){
        super()
        this.state = {
            modalVisible: false,
            isVisible : false,
            date: new Date(1598051730000),
            mode: "date",
            show: false
        }
    }

 
  
     onChange = (event, selectedDate) => {
       currentDate = selectedDate || this.state.date;
       this.setState({ show: Platform.OS === 'ios', date: currentDate })

    };
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
  
     showMode = (currentMode) => {
       this.setState({ show: true, mode: currentMode })
    };
  
     showDatepicker = () => {
        this.showMode("date")
    };
  
     showTimepicker = (visible) => {
        this.showMode("time")
        this.setState({ modalVisible: visible });
        console.log("mode :", this.showMode)
    };
    
    render(){
        const { modalVisible } = this.state;
        return( 
<View style={styles.mainContainer}>
        <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Hello World!</Text>

    <TouchableOpacity style={ styles.date}>
            {this.state.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={this.state.date}
          locale="tr"
          mode={"datetime"}
          is24Hour={true}
          display="default"
          onChange={this.onChange}
        />
      )}
    </TouchableOpacity>

        <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "red" , width: 400}} //hide modal button 
              onPress={() => {
                this.showTimepicker(!modalVisible);
              }}>
            
              <Text style={styles.textStyle}>Hide Modal</Text>
        </TouchableOpacity>
          </View>
        </View>
      </Modal>

        <TouchableOpacity
          style={styles.openButton}
          onPress={() => {
            this.showTimepicker(true);
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableOpacity>
      </View>
        
        {/* <View style={styles.kutu}> */}
            {/* <TouchableOpacity  style={{ marginTop: 20,borderWidth: 1, backgroundColor: 'black', width: 20, height: 20, alignSelf : 'center' }} onPress={this.showTimepicker}>
                <Text style={{ fontSize: 20}}>zaman seç</Text>
            </TouchableOpacity> */}
          
          
               

                {/* {this.state.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={this.state.date}
          locale="tr"
          mode={"datetime"}
          is24Hour={true}
          display="default"
          onChange={this.onChange}
        />
      )} */}
             {/* </View> */}
             </View>
        );
    }
    


}
const styles = StyleSheet.create({
  mainContainer:{

  },
    centeredView: {
        flex: 1,
      },
      modalView: {
        marginTop:'15%',
        backgroundColor: "white",
        borderRadius: 10,
        width:PhoneWidth*1,
        height: PhoneHeight*0.7
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 180
      },
      textStyle: {  
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      date:{
        width: 400,
        height: 40
      }

})