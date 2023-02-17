import React, { useRef, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Keyboard,
  Modal,
  TextInput,
  BackHandler,
} from "react-native";
import utils from "../../../utils/index";
import { styles } from "./styles";
import GVs from "../../../store/Global_Var";
import { Window } from "../../../themes/Window";
import moment from "moment";
import {
  requestCameraPermission,
  requestReadExternalStorage,
  requestWriteInternalStorage,
} from "../../../services/permissions/index";
import MultipleImagePicker from "@baronha/react-native-multiple-image-picker";
import DeviceInfo from "react-native-device-info";
import ImagePicker from "react-native-customized-image-picker";
import { inject, observer } from "mobx-react";

export default inject("store")(observer(Chat));

function Chat(props) {
  let maxinputheight = 160;

  const { user, room, setMessagesInRoom, deleteRoomInRooms, setRoomSort } =
    props.store;

  const { ri, spd } = props.route.params; //room index

  const [h, seth] = useState(40); //textinput height increse //40 is empty input height

  const [loader, setloader] = useState(true);
  const [mv, setmv] = useState(false); //blfulll image render modal vs
  const [mv2, setmv2] = useState(false); // multple image render modal visible
  const [si, setsi] = useState(0); //selct photo index in photo multple array

  const [p, setp] = useState("");

  const [text, settext] = useState("");
  const [photo, setphoto] = useState("");
  const [file, setfile] = useState("");

  const [c, setc] = useState(true); //for refrsh

  const [textShown, setTextShown] = useState(-1); //To show ur remaining Text
  const [t, sett] = useState(true); //automtc scroolbtom check
  const [apiLevel, setapiLevel] = useState("");

  const scrollToBottom = useRef();

  const handleBackButtonClick = () => {
    props.navigation.goBack();

    let cm = room[ri].messages.length;
    if (cm == 0) {
      deleteRoomInRooms(ri);
    }

    if (room.length > 1) {
      setRoomSort();
    }

    return true;
  };

  const toggleNumberOfLines = (index) => {
    sett(false);
    setTextShown(textShown === index ? -1 : index);
  };

  const getDeviceInfo = () => {
    DeviceInfo.getApiLevel().then((apiLevel) => {
      setapiLevel(apiLevel);
    });
  };

  useEffect(() => {
    getDeviceInfo();
    setTimeout(() => {
      setloader(false);
    }, 500);
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);

  useEffect(() => {
    if (photo.length > 0) {
      settext(photo[si].caption);
    }
  }, [si]);

  useEffect(() => {
    if (photo.length > 0) {
      photo[si].caption = text;
    }
  }, [text]);

  const deletephotoinarray = (si) => {
    photo.splice(si, 1);

    if (si > 0) {
      setsi(si - 1);
    }

    if (si == 0) {
      setsi(0);
      setc(!c);
    }
  };

  const updateSize = (height) => {
    seth(height);
  };

  const sendMeassage = (id) => {
    if (photo.length > 0) {
      photo.map((e, i, a) => {
        const obj = {
          createdAt: new Date(),
          file: file,
          photo: e.path,
          photoName: e.photoName,
          text: e.caption,
          uid: id,
        };

        setMessagesInRoom(ri, obj, file, photo, text);
      });
    } else {
      const obj = {
        createdAt: new Date(),
        file,
        photo,
        photoName: "", //photo caption
        text,
        uid: id,
      };

      setMessagesInRoom(ri, obj, file, photo, text);
    }

    settext("");
    setphoto("");
    setfile("");
    sett(true);
    seth(40);
    Keyboard.dismiss();
  };

  const onClickPhoto = async () => {
    requestCameraPermission();
    requestWriteInternalStorage();
    requestReadExternalStorage();

    if (apiLevel < 29) {
      //28 is andrd 9

      try {
        ImagePicker.openPicker({
          multiple: true,
          maxSize: 4,
          imageLoader: "UNIVERSAL",
        }).then((res) => {
          console.log("res : ", res);
          if (res) {
            let arr = [];
            res.map((e, i, a) => {
              let obj = { path: e.path, caption: "" };
              arr.push(obj);
            });
            setphoto(arr);
            setmv2(true);
          }
        });
      } catch (error) {
        console.log("photo picker imgepckr error : ", error);
      }
    } else {
      try {
        let options = {
          mediaType: "image",
          isPreview: false,
          maxSelectedAssets: 4,
        };

        const res = await MultipleImagePicker.openPicker(options);

        console.log("res : ", res);
        if (res) {
          let arr = [];
          res.map((e, i, a) => {
            let obj = { path: e.path, caption: "" };
            arr.push(obj);
          });
          setphoto(arr);
          setmv2(true);
        }
      } catch (error) {
        console.log("glry picker error : ", error);
      }
    }
  };

  const emptyFields = () => {
    if (text == "" && photo == "" && file == "") {
      return true;
    } else {
      return false;
    }
  };

  const renderInputBar = () => {
    let disable = emptyFields();
    let inputBarW = Window.Width - 95;
    let inputW = inputBarW - 43;

    return (
      <View
        style={{
          backgroundColor: null,
          alignItems: "center",
          flexDirection: "row",
          width: Window.Width,
          paddingLeft: 7,
          paddingRight: 7,
          paddingTop: 5,
          paddingBottom: 5,
          alignSelf: "flex-end",
          borderTopColor: "silver",
          borderWidth: 0.5,
          borderBottomColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: inputBarW,
            backgroundColor: "#e8e8e8",
            borderRadius: 20,
            marginLeft: 7,
            alignItems: "center",
          }}
        >
          <TextInput
            multiline
            scrollEnabled={true}
            onContentSizeChange={(e) =>
              updateSize(e.nativeEvent.contentSize.height)
            }
            style={{
              fontSize: 15,
              backgroundColor: "#e8e8e8",
              width: inputW,
              padding: 10,
              borderRadius: 20,
              height: h <= maxinputheight ? h : maxinputheight,
            }}
            placeholderTextColor="black"
            value={text}
            placeholder="Type here..."
            onChangeText={(text) => settext(text)}
          />

          <View style={{ alignSelf: h <= 43 ? "center" : "flex-end" }}>
            <TouchableOpacity
              onPress={() => {
                settext(""), onClickPhoto();
              }}
            >
              <utils.vectorIcon.MaterialIcons
                color="#007069"
                size={25}
                style={{ marginLeft: 3 }}
                name="insert-photo"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{
            marginLeft: 10,
            backgroundColor: "#007069",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 20,
            alignSelf: h <= 43 ? "center" : "flex-end",
          }}
          disabled={disable}
          onPress={() => {
            sendMeassage(user.id);
          }}
        >
          <utils.vectorIcon.Ionicons
            size={20}
            name="send-sharp"
            color={disable ? "silver" : "white"}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderInputCaptionBar = () => {
    let inputW = Window.Width - 100;

    return (
      <View
        style={{
          backgroundColor: null,
          alignItems: "center",
          flexDirection: "row",
          alignSelf: "center",
          marginBottom: 25,
        }}
      >
        <TextInput
          multiline
          scrollEnabled={true}
          onContentSizeChange={(e) =>
            updateSize(e.nativeEvent.contentSize.height)
          }
          style={{
            fontSize: 15,
            backgroundColor: "white",
            shadowColor: "black",
            elevation: 5,
            width: inputW,
            padding: 10,
            borderRadius: 20,
            alignSelf: "center",
            height: h <= maxinputheight ? h : maxinputheight,
          }}
          placeholderTextColor="black"
          value={text}
          placeholder="Add a caption..."
          onChangeText={(txt) => settext(txt)}
        />

        <TouchableOpacity
          style={{
            marginLeft: 10,
            backgroundColor: "#007069",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            alignSelf: h <= 43 ? "center" : "flex-end",
          }}
          onPress={() => {
            sendMeassage(user.id);
            setmv2(false);
            setsi(0);
          }}
        >
          <utils.vectorIcon.Ionicons
            size={25}
            name="send-sharp"
            color={"white"}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFullImage = () => {
    return (
      <Modal animationType="fade" visible={mv}>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <Image
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
            resizeMode="contain"
            source={{ uri: p }}
          />

          <TouchableOpacity
            onPress={() => {
              setmv(!mv);
              setp("");
            }}
            style={{
              backgroundColor: "black",
              borderRadius: 25,
              padding: 5,
              position: "absolute",
              top: 15,
              left: 15,
            }}
          >
            <utils.vectorIcon.Ionicons
              name="arrow-back"
              color="white"
              size={25}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  const renderMultiplePhoto = () => {
    let p = photo.map((e, i, a) => {
      let uri = e.path;
      return (
        <TouchableOpacity
          onPress={() => {
            setsi(i);
          }}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              marginLeft: 5,
              marginRight: 5,
              borderColor: si == i ? "#00fff7" : "silver",
              borderWidth: 1.5,
            }}
            source={{ uri: uri }}
          />
        </TouchableOpacity>
      );
    });

    return p;
  };

  const renderMultipleImage = () => {
    return (
      <Modal animationType="fade" visible={mv2}>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <Image
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
            resizeMode="contain"
            source={{ uri: photo[si].path }}
          />

          <View
            style={{
              backgroundColor: null,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              top: 5,
              padding: 5,
              paddingLeft: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setmv2(!mv2);
                setphoto("");
                setsi(0);
              }}
              style={{ backgroundColor: "black", borderRadius: 25, padding: 5 }}
            >
              <utils.vectorIcon.Ionicons
                name="arrow-back"
                color="white"
                size={25}
              />
            </TouchableOpacity>

            {photo.length > 1 && (
              <TouchableOpacity
                onPress={() => {
                  deletephotoinarray(si);
                }}
                style={{
                  backgroundColor: "black",
                  borderRadius: 25,
                  padding: 5,
                  marginLeft: 25,
                }}
              >
                <utils.vectorIcon.AntDesign
                  name="delete"
                  color="white"
                  size={25}
                />
              </TouchableOpacity>
            )}
          </View>

          <View
            style={{
              position: "absolute",
              width: "100%",
              backgroundColor: null,
              bottom: 0,
            }}
          >
            {renderInputCaptionBar()}
            <ScrollView
              horizontal={true}
              style={{ width: "100%", backgroundColor: "black", padding: 5 }}
            >
              {renderMultiplePhoto()}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };

  const renderDateSection = (date) => {
    return (
      <View
        style={{
          backgroundColor: "#97c5e8",
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginBottom: 20,
          padding: 5,
        }}
      >
        <Text style={{ fontSize: 12, color: "#3b3b3b" }}>{date}</Text>
      </View>
    );
  };

  const renderShowMessages = () => {
    let sp = spd.photo || "";

    let messages = room[ri].messages.map((e, i, a) => {
      var time = moment(e.createdAt).format("hh:mm a"); //10:12 am
      var date = moment(e.createdAt).format("D MMMM Y"); //9 july 2021
      let dfc = 0;
      let rslt = 0;
      if (i > 0) {
        var pdate = moment(room[ri].messages[i - 1].createdAt).format(
          "D MMMM Y"
        );
        var pd = moment(pdate); //prvs  msg  date
        var d = moment(date); //curent msg date
        rslt = d.diff(pd, "days"); //dfc btw date
      }

      let currentUser = e.uid == user.id ? true : false;
      let textClr = currentUser ? "white" : "black";
      let timeClr = currentUser ? "#e6e6e6" : "#404040";
      var avatarName = "";
      if (sp == "") {
        let fn = spd.FirstName || "";
        let ln = spd.LastName || "";
        let n = fn.charAt(0) + ln.charAt(0);
        avatarName = n;
      }

      return (
        <View>
          {i == 0 && renderDateSection(date)}
          {i > 0 && dfc < rslt && renderDateSection(date)}

          <View
            style={{
              flexDirection: "row",
              alignSelf: currentUser ? "flex-end" : "flex-start",
              margin: 10,
              marginLeft: currentUser ? 115 : null,
              marginRight: !currentUser ? 115 : null,
              flexShrink: 1,
              alignItems: "center",
            }}
          >
            {!currentUser && (
              <View
                style={{
                  backgroundColor: sp == "" ? "#c482cf" : "#e6e6e6",
                  width: 35,
                  height: 35,
                  borderRadius: 17.5,
                  alignSelf: "flex-end",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {sp != "" ? (
                  <Image
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                    source={require("../../../assets/supervisor_avatar.png")}
                  />
                ) : (
                  <Text style={{ color: "white", fontSize: 15 }}>
                    {avatarName.toUpperCase()}
                  </Text>
                )}
              </View>
            )}

            <View
              style={{
                backgroundColor: currentUser ? "#007069" : "#e6e6e6",
                padding: 7,
                borderRadius: 10,
                marginLeft: 5,
              }}
            >
              {e.photo !== "" && (
                <TouchableOpacity
                  onPress={() => {
                    setp(e.photo);
                    setmv(true);
                  }}
                >
                  <Image
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 10,
                      alignSelf: "center",
                    }}
                    source={{ uri: e.photo }}
                  />
                </TouchableOpacity>
              )}

              {e.text !== "" && (
                <View>
                  <Text
                    numberOfLines={textShown == i ? undefined : 12}
                    style={{
                      color: textClr,
                      fontSize: 16,
                      marginTop: e.photo !== "" ? 10 : 0,
                    }}
                  >
                    {e.text}
                  </Text>

                  {e.text.length > 200 && (
                    <Text
                      onPress={() => toggleNumberOfLines(i)}
                      style={{
                        marginTop: 5,
                        color: currentUser ? "#78aaf5" : "#c482cf",
                        fontStyle: GVs.fontMedium,
                      }}
                    >
                      {textShown === i ? "Read less" : "Read more"}
                    </Text>
                  )}
                </View>
              )}

              <Text
                style={{ color: timeClr, fontSize: 10, alignSelf: "flex-end" }}
              >
                {time}
              </Text>
            </View>
          </View>
        </View>
      );
    });

    return messages;
  };

  const renderChatBox = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: !loader ? "flex-end" : undefined,
          flexDirection: "column",
          padding: 10,
        }}
        ref={scrollToBottom}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() =>
          t ? scrollToBottom.current?.scrollToEnd({ animated: true }) : null
        }
      >
        {loader && (
          <ActivityIndicator
            style={{ alignSelf: "center", marginTop: "50%" }}
            size="large"
            color="#007069"
          />
        )}
        {room[ri].messages.length > 0 && !loader ? renderShowMessages() : null}
      </ScrollView>
    );
  };

  let disable = text == "" ? true : false;

  let fn = spd.FirstName || "";
  let ln = spd.LastName || "";
  let sname = fn + " " + ln;

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingLeft: 7,
          paddingRight: 7,
          marginLeft: 7,
          marginRight: 7,
          marginTop: 5,
        }}
      >
        <utils.Header
          nav={props.navigation}
          type="stack"
          cm={room[ri].messages.length}
          ri={ri}
        />
      </View>

      <View style={{ padding: 7, margin: 7 }}>
        <View style={{ marginLeft: 5 }}>
          <utils.HeaderTitle
            title={sname}
            message={"(Supervisor)"}
            type="headertitle"
          />
        </View>

        <TouchableOpacity
          style={{ marginLeft: 5 }}
          disabled={disable}
          onPress={() => {
            sendMeassage(spd.id, text, photo, file);
          }}
        >
          <utils.vectorIcon.Ionicons
            size={25}
            name="send-sharp"
            color={disable ? "#dedede" : "#007069"}
          />
        </TouchableOpacity>

        <View
          style={{
            width: "100%",
            height: 0.5,
            backgroundColor: "silver",
            marginTop: 20,
          }}
        />
      </View>
      {mv && renderFullImage()}
      {mv2 && renderMultipleImage()}
      {renderChatBox()}
      {renderInputBar()}
    </View>
  );
}
