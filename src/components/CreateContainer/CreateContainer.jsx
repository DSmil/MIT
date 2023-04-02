import { React, useState } from 'react'
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from "react-icons/md"
import { categories } from 'utils/data'
import Loader from 'components/Loader/Loader'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "firebase.config"
import { saveItem } from 'utils/firebaseFunctions'
import { useStateValue } from "context/StateProvider";
import { getAllFoodItems } from "utils/firebaseFunctions";
import { actionType } from "context/reducer";
import {BigContainer, NextContainer, MotionP, ButtonDeleteImage, SaveButton, SaveDiv, PriceInput, SetPriceDiv, CaloriesInput, SetCaloriesDiv, SetCaloriesAndPriceDiv, Option2, ImageDiv, Image, UploadText, InputAfterText, Label, AfterLabelUploadDiv, UploadDiv, TitleDiv, TitleInput, Option, SelectCategory, SelectCategoryDiv} from "./style";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{ foodItems }, dispatch] = useStateValue();


  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try AGain 🙇");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully 😊");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully 😊");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          calories: calories,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data Uploaded successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try AGain 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }

    fetchData()
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("Select Category");
  };

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };



  return (
    <BigContainer>
      <NextContainer>
        {fields && (
          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {msg}
          </MotionP>
        )}

        <TitleDiv>
          <MdFastfood className="text-xl text-gray-700" />
          <TitleInput
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give me a title..."
          />
        </TitleDiv>

        <SelectCategoryDiv>
          <SelectCategory
            onChange={(e) => setCategory(e.target.value)}
          >
            <Option value="other">
              Select Category
            </Option>
            {categories &&
              categories.map((item) => (
                <Option2
                  key={item.id}
                  value={item.urlParamName}
                >
                  {item.name}
                </Option2>
              ))}
          </SelectCategory>
        </SelectCategoryDiv>

        <UploadDiv>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <Label >
                    <AfterLabelUploadDiv>
                      <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                      <UploadText>
                        Click here to upload
                      </UploadText>
                    </AfterLabelUploadDiv>
                    <InputAfterText
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                    />
                  </Label>
                </>
              ) : (
                <>
                  <ImageDiv>
                    <Image
                      src={imageAsset}
                      alt="uploaded image"
                    />
                    <ButtonDeleteImage
                      type="button"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </ButtonDeleteImage>
                  </ImageDiv>
                </>
              )}
            </>
          )}
        </UploadDiv>

        <SetCaloriesAndPriceDiv>
          <SetCaloriesDiv>
            <MdFoodBank className="text-gray-700 text-2xl" />
            <CaloriesInput
              type="text"
              required
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Calories"
            />
          </SetCaloriesDiv>

          <SetPriceDiv>
            <MdAttachMoney className="text-gray-700 text-2xl" />
            <PriceInput
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </SetPriceDiv>
        </SetCaloriesAndPriceDiv>

        <SaveDiv>
          <SaveButton
            type="button"
            onClick={saveDetails}
          >
            Save
          </SaveButton>
        </SaveDiv>
      </NextContainer>
    </BigContainer>
  );
};

export default CreateContainer;