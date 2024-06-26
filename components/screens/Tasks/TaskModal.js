import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import DatePicker from "react-native-modern-datepicker";

const TaskModal = ({ 
	modalVisible, 
	task, 
	setTask, 
	handleAddTask, 
	handleCancel, 
	validationError, 
}) => { 
	return ( 
		<Modal 
			visible={modalVisible} 
			animationType="slide"
			transparent={false}> 
			
			<View style={styles.modalContainer}> 
			<TextInput 
                    style={styles.inputText} 
                    placeholder="Title"
                    value={task.title} 
                    onChangeText={(text) => 
                        setTask({ 
							...task,
							title: text 
						}) 
                    } 
                    /> 			
			 <TextInput 
                    style={styles.inputText} 
                    placeholder="Description"
                    value={task.description} 
                    onChangeText={(text) => 
                        setTask({ 
                            ...task, 
                            description: text, 
                        }) 
                    }/> 
					
				<Text style={styles.inputText}> 
					Deadline: 
				</Text> 
				<DatePicker 
					style={styles.datePicker} 
					mode="datepicker"
					selected={task.deadline} 
					onDateChange={(date) => 
						setTask({ ...task,
							deadline: date 
						}) 
					}/> 
					
				{validationError && ( 
					<Text style={styles.errorText}> 
						Please fill in all fields correctly. 
					</Text> 
				)} 
				<View style={styles.editContainer}>
		                <Button 
		        title={task.id ? "Update" : "Add"} 
		        onPress={handleAddTask} 
		        color="#007BFF"
		        style={styles.editButton}
		    /> 
		               <Button 
		        title="Cancel"
		        onPress={handleCancel} 
		        color="#FF3B30"
		        style={styles.editButton}
			     /> 
			 </View>
			</View> 
		</Modal> 
	); 
}; 

export default TaskModal;
