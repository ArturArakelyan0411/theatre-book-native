import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import {Modal, Portal} from "react-native-paper";

const ModalHOC = (Content: Component, contentStyles) => ({visible, toggle}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={toggle}
        dismissable
      >
        <View style={styles.centeredView}>
          <View style={contentStyles ? {...styles.modalView, ...contentStyles} : styles.modalView}>
            <Content toggle={toggle} />
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: '70%',
    marginVertical: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
});

export default ModalHOC;
