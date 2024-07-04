import { View, Text, Modal, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterList } from "../../redux/bookSlice";
import styles2 from "../../styles/structure";
import { restUser } from "../../redux/loginSlice";

export default function Header() {
    const dispatch = useDispatch();

    const [showProfileModal, setShowProfileModel] = useState(false);
    const [showFilterModal, setShowFilterModel] = useState(false);
    const [value, setValue] = useState("");
    const [Label, setLabel] = useState("Select Option");

    const user = useSelector((state) => state.login.users);
    const currentUser = useSelector((state) => state.login.currentUser);
    const isAnonymous = useSelector((state) => state.login.isAnonymous);

    const userData = user.filter((user) => user.studentID === currentUser);

    var username = "Anonymous User";
    var studentID = "Anonymous User";

    if (!isAnonymous) {
        username = userData[0].username;
        studentID = userData[0].studentID;
    }

    const handleProfileModalChange = () => {
        setShowProfileModel(!showProfileModal);
    }

    const handleFilterModalChange = () => {
        setShowFilterModel(!showFilterModal);
    }

    const handleSetFilter = (value, label) => {
        const data = {
            value: value,
            label: label,
        }
        setValue(value);
        setLabel(label);
        handleFilterModalChange()
        dispatch(changeFilterList(data))
    }

    const dropdownOptions = [
        { value: 'all', label: 'All' },
        { value: 'book', label: 'Books' },
        { value: 'novel', label: 'Novel' },
    ];

    return (
        <>
            <View style={styles.container}>
                <Ionicons name="filter" size={30} onPress={handleFilterModalChange} />
                <Text style={styles.title}>Library</Text>
                <Ionicons name="person-circle-outline" size={30} onPress={handleProfileModalChange} />
            </View>

            <Modal
                visible={showFilterModal}
                animationType="slide"
                transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalTitle}>Select an option</Text>
                        <Dropdown
                            style={[styles.dropdown]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={dropdownOptions}
                            maxHeight={300}
                            labelField="label"
                            valueField="id"
                            placeholder={Label}
                            value={value}
                            onChange={item => {
                                handleSetFilter(item.value, item.label);
                            }}
                        />

                        <TouchableOpacity
                            style={styles2.buttonStyle1}
                            onPress={handleFilterModalChange} >
                            <Text style={styles2.buttonTextStyle1}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal visible={showProfileModal} transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalTitle}>Profile</Text>
                        <Text style={styles.modalHighlightText}>Student Username:</Text>
                        <Text>{username}</Text>
                        <Text style={styles.modalHighlightText}>Student ID:</Text>
                        <Text>{studentID}</Text>

                        <TouchableOpacity
                            style={styles2.buttonStyle1}
                            onPress={handleProfileModalChange} >
                            <Text style={styles2.buttonTextStyle1}>Close</Text>
                        </TouchableOpacity>


                    </View>
                </View>

            </Modal>
        </>

    );
}